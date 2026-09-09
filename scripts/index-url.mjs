#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// index-url.mjs — Submit a URL to Google (Indexing API) + Bing Webmaster API
//
// Usage:
//   node scripts/index-url.mjs https://www.kalyanaveedu.in/blog/some-article
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const url = process.argv[2];
if (!url) {
  console.error('❌ Usage: node scripts/index-url.mjs <url>');
  process.exit(1);
}

// 1. Load from environment
let GSC_CLIENT_EMAIL = process.env.GSC_CLIENT_EMAIL;
let GSC_PRIVATE_KEY = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, '\n');
let BING_API_KEY = process.env.BING_API_KEY;

// 2. Fallback: Load from local service account JSON file if present
if (!GSC_CLIENT_EMAIL || !GSC_PRIVATE_KEY) {
  try {
    const files = readdirSync(ROOT);
    const jsonKeyFile = files.find(f => (f.startsWith('selvan-dev-') || f.includes('serviceaccount')) && f.endsWith('.json'));
    if (jsonKeyFile) {
      const sa = JSON.parse(readFileSync(join(ROOT, jsonKeyFile), 'utf8'));
      GSC_CLIENT_EMAIL = sa.client_email;
      GSC_PRIVATE_KEY = sa.private_key;
      console.log(`🔑 Using service account key from: ${jsonKeyFile}`);
    }
  } catch (e) {}
}

// 3. Fallback: Load from .env.local
if ((!GSC_CLIENT_EMAIL || !GSC_PRIVATE_KEY || !BING_API_KEY) && existsSync(join(ROOT, '.env.local'))) {
  const envContent = readFileSync(join(ROOT, '.env.local'), 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('BING_API_KEY=')) {
      BING_API_KEY = BING_API_KEY || trimmed.split('=')[1]?.replace(/^["']|["']$/g, '');
    }
  }
}

let successCount = 0;

// ────────────────────────────────────────────────
// 1. Google Indexing API (requires service account)
// ────────────────────────────────────────────────
async function indexWithGoogle(targetUrl) {
  if (!GSC_CLIENT_EMAIL || !GSC_PRIVATE_KEY) {
    console.log('⚠️  Google Indexing: skipped (GSC_CLIENT_EMAIL or GSC_PRIVATE_KEY not set)');
    return;
  }

  try {
    // Create JWT for Google service account auth
    const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
    const now = Math.floor(Date.now() / 1000);
    const payload = Buffer.from(JSON.stringify({
      iss: GSC_CLIENT_EMAIL,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })).toString('base64url');

    // Sign with RS256 using Node crypto
    const { createSign } = await import('crypto');
    const sign = createSign('RSA-SHA256');
    sign.update(`${header}.${payload}`);
    const signature = sign.sign(GSC_PRIVATE_KEY, 'base64url');
    const jwt = `${header}.${payload}.${signature}`;

    // Exchange JWT for access token
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
    });
    const { access_token } = await tokenRes.json();

    // Submit URL to Indexing API
    const indexRes = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
      body: JSON.stringify({ url: targetUrl, type: 'URL_UPDATED' }),
    });

    if (indexRes.ok) {
      console.log(`✅ Google Indexing: submitted ${targetUrl}`);
      successCount++;
    } else {
      const err = await indexRes.json();
      console.error('❌ Google Indexing error:', err.error?.message);
    }
  } catch (err) {
    console.error('❌ Google Indexing failed:', err.message);
  }
}

// ────────────────────────────────────────────────
// 2. Bing Webmaster Indexing API
// ────────────────────────────────────────────────
async function indexWithBing(targetUrl) {
  if (!BING_API_KEY) {
    console.log('⚠️  Bing Indexing: skipped (BING_API_KEY not set)');
    return;
  }

  try {
    const res = await fetch(
      `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=${BING_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ siteUrl: 'https://www.kalyanaveedu.in', url: targetUrl }),
      }
    );

    if (res.ok) {
      console.log(`✅ Bing Indexing: submitted ${targetUrl}`);
      successCount++;
    } else {
      const text = await res.text();
      console.error('❌ Bing Indexing error:', text);
    }
  } catch (err) {
    console.error('❌ Bing Indexing failed:', err.message);
  }
}

// ── Run both in parallel ──
console.log(`\n🔍 Submitting URL for indexing: ${url}\n`);
await Promise.all([
  indexWithGoogle(url),
  indexWithBing(url),
]);

console.log(`\n📊 Result: ${successCount}/2 indexers successfully notified\n`);
