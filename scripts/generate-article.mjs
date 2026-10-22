import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Multi-Key Auto-Failover (Reads from process.env or .env.local) ──
let primaryKey = process.env.GEMINI_API_KEY;
let backupKey = process.env.GEMINI_BACKUP_API_KEY;

if (existsSync(join(ROOT, '.env.local'))) {
  const envContent = readFileSync(join(ROOT, '.env.local'), 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!primaryKey && trimmed.startsWith('GEMINI_API_KEY=')) {
      primaryKey = trimmed.substring('GEMINI_API_KEY='.length).trim().replace(/^["']|["']$/g, '');
    }
    if (!backupKey && trimmed.startsWith('GEMINI_BACKUP_API_KEY=')) {
      backupKey = trimmed.substring('GEMINI_BACKUP_API_KEY='.length).trim().replace(/^["']|["']$/g, '');
    }
  }
}

// Ensure unique keys in priority order: Primary first, Backup second
const API_KEYS = Array.from(new Set([primaryKey, backupKey])).filter(Boolean);

if (API_KEYS.length === 0) {
  console.error('❌ Neither GEMINI_API_KEY nor GEMINI_BACKUP_API_KEY is configured in environment or .env.local.');
  process.exit(1);
}

// ── Config: High-Quota 15 RPM / 500 RPD models first ──
const GEMINI_MODELS = [
  'gemini-2.5-flash-lite',
  'gemini-flash-lite-latest',
  'gemini-3.1-flash-lite',
  'gemini-2.5-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash'
];

const DRY_RUN = process.argv.includes('--dry-run');
const INDEX_ARG = process.argv.indexOf('--index');
const FORCE_INDEX = INDEX_ARG !== -1 ? parseInt(process.argv[INDEX_ARG + 1]) : null;

// ── Load topics queue ──
const topics = JSON.parse(readFileSync(join(__dirname, 'article-topics.json'), 'utf-8'));
const progressFile = join(__dirname, '.article-progress.json');
let progress = existsSync(progressFile)
  ? JSON.parse(readFileSync(progressFile, 'utf-8'))
  : { lastIndex: -1, generated: [] };

// ── Pick next topic ──
const topicIndex = FORCE_INDEX !== null ? FORCE_INDEX : progress.lastIndex + 1;
if (topicIndex >= topics.length) {
  console.log('✅ All topics have been generated! Queue is complete.');
  process.exit(0);
}
const topic = topics[topicIndex];
console.log(`\n🎯 Generating article ${topicIndex + 1}/${topics.length}:`);
console.log(`   Slug: ${topic.slug}`);
console.log(`   Category: ${topic.category}`);
console.log(`   Topic: ${topic.topic}\n`);

// ── Category metadata map ──
const CATEGORY_META = {
  'government-schemes': { label: 'அரசு திட்டங்கள்', english: 'Government Schemes', icon: '🏛️' },
  'traditions': { label: 'திருமண சடங்குகள்', english: 'Wedding Traditions', icon: '🪔' },
  'planning': { label: 'திருமண திட்டமிடல்', english: 'Wedding Planning', icon: '📋' },
  'muhurtham': { label: 'சுப முகூர்த்தம்', english: 'Subha Muhurtham', icon: '💍' },
  'budget': { label: 'பட்ஜெட் & நிதி', english: 'Budget & Finance', icon: '💰' },
  'jewelry': { label: 'தங்க நகை', english: 'Gold & Jewelry', icon: '👑' },
  'photography': { label: 'புகைப்படம்', english: 'Photography', icon: '📸' },
  'decoration': { label: 'மண்டப அலங்காரம்', english: 'Mandapam & Decor', icon: '🌸' },
  'legal': { label: 'சட்ட வழிகாட்டி', english: 'Legal & Registration', icon: '⚖️' },
  'invitations': { label: 'அழைப்பிதழ்', english: 'Invitations', icon: '💌' },
  'catering': { label: 'உணவு & கேட்டரிங்', english: 'Food & Catering', icon: '🍱' },
  'astrology': { label: 'ஜோதிடம் & நட்சத்திரம்', english: 'Astrology & Nakshatras', icon: '⭐' }
};

const meta = CATEGORY_META[topic.category] || { label: 'திருமண வழிகாட்டி', english: 'Wedding Guide', icon: '📖' };

// ── Prompt for Gemini ──
const prompt = `You are an expert Tamil wedding planner, cultural researcher, and writer for kalyanaveedu.in (கல்யாண வீடு), Tamil Nadu's leading wedding portal.

Write a comprehensive, authoritative, SEO-optimized blog article in pure Tamil about:
"${topic.topic}"

Target keyword: "${topic.tamilTitle}"
Category: ${meta.label} (${meta.english})
Audience: Tamil families planning a wedding in Tamil Nadu or abroad.

REQUIREMENTS:
1. Language: High quality, natural, grammatically correct Tamil (தமிழ்). Professional yet warm tone.
2. Word count: 1200 - 2000 words. Comprehensive and detailed.
3. Include real, practical details:
   - Specific costs in rupees (₹) where relevant
   - Tamil calendar months (சித்திரை, வைகாசி, ஐப்பசி, கார்த்திகை, தை, etc.)
   - Real procedures, required documents, government portal steps (if applicable)
   - Do's and Don'ts
   - Frequently asked questions with answers (FAQ section)
4. For traditions: Include cultural origin, step-by-step ritual, regional/caste variations, modern adaptations
5. Use these JSX components (already imported):
   - <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section Title</h2>
   - <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Sub Title</h3>
   - <p>paragraph text</p>
   - <ul className="list-disc pl-6 space-y-3">/<li> for lists
   - <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl"> for important callouts
   - <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8"> for info boxes
   - <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8"> for tips
   - <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8"> for summary boxes
6. Structure: intro paragraph → 4-6 H2 sections → practical tips box → conclusion
7. Do NOT include import statements, metadata, or the full component wrapper — only the JSX content inside the prose div
8. Do NOT use backticks or code blocks in your response — output pure JSX only
9. Use &amp; for & in JSX, &quot; for quotes in Tamil text attributes`;

// ── Call Gemini API with Multi-Key Failover and Model Cascade ──
async function callGemini(prompt) {
  const maxRetriesPerModel = 2;
  let lastError = null;

  for (let keyIdx = 0; keyIdx < API_KEYS.length; keyIdx++) {
    const currentKey = API_KEYS[keyIdx];
    const keyLabel = keyIdx === 0 ? 'Primary' : `Backup-${keyIdx}`;

    for (const model of GEMINI_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${currentKey}`;
      console.log(`📡 [${keyLabel} Key] Trying model: ${model}...`);

      for (let attempt = 1; attempt <= maxRetriesPerModel; attempt++) {
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 16384,
              },
              safetySettings: [
                { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
                { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
                { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
                { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
              ]
            }),
          });

          if (!response.ok) {
            const errText = await response.text();
            const isRateLimit = response.status === 429;
            console.warn(`⚠️ [${keyLabel} / ${model}] Attempt ${attempt} returned HTTP ${response.status}`);

            // If rate limit (429) and we have another key, failover immediately
            if (isRateLimit && keyIdx < API_KEYS.length - 1) {
              console.log(`🔄 Rate limit on ${keyLabel} key. Failing over to backup API key...`);
              break; // breaks out of retry loop to next key
            }

            if (attempt < maxRetriesPerModel) {
              const waitTime = attempt * 6000;
              console.log(`⏳ Waiting ${waitTime / 1000}s before retry...`);
              await new Promise(r => setTimeout(r, waitTime));
              continue;
            }
            throw new Error(`Gemini API error ${response.status}: ${errText}`);
          }

          const data = await response.json();
          let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

          if (!text) {
            const finishReason = data.candidates?.[0]?.finishReason;
            throw new Error(`Empty response from Gemini (finishReason: ${finishReason || 'UNKNOWN'})`);
          }

          // Clean markdown code blocks if present
          text = text.replace(/^```(?:html|jsx|tsx)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();

          // Strip redundant outer <div className="prose..."> wrapper if generated
          text = text.replace(/^<div\s+className=["'][^"']*prose[^"']*["']\s*>/i, '').trim();
          const openDivs = (text.match(/<div\b[^>]*>/gi) || []).length;
          const closeDivs = (text.match(/<\/div>/gi) || []).length;
          if (closeDivs > openDivs) {
            text = text.replace(/<\/div>\s*$/, '').trim();
          }

          console.log(`✅ Successfully generated using ${keyLabel} Key / model: ${model}`);
          return text;
        } catch (err) {
          lastError = err;
          console.warn(`⚠️ [${keyLabel} / ${model}] Attempt ${attempt} failed: ${err.message.substring(0, 150)}`);
          if (attempt < maxRetriesPerModel) {
            const waitTime = attempt * 5000;
            console.log(`⏳ Waiting ${waitTime / 1000}s before retry...`);
            await new Promise(r => setTimeout(r, waitTime));
          }
        }
      }
    }
  }

  throw new Error(`All Gemini models and API keys failed. Last error: ${lastError?.message}`);
}

// ── Generate the article content ──
console.log('🤖 Sending prompt to Gemini AI...');
const articleContent = await callGemini(prompt);

if (DRY_RUN) {
  console.log('\n📄 [DRY RUN] Generated JSX preview (first 500 chars):');
  console.log(articleContent.substring(0, 500));
  console.log('\n... preview truncated. Exiting dry run.');
  process.exit(0);
}

// ── Generate page.tsx ──
const pageCode = `import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import Schema from '@/components/SEO/Schema';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata = {
    title: '${topic.tamilTitle} | கல்யாண வீடு வழிகாட்டி',
    description: '${topic.excerpt.replace(/'/g, "\\'")}',
    alternates: {
        canonical: \`\${SITE_CONFIG.url}/blog/${topic.slug}\`,
    },
    openGraph: {
        title: '${topic.tamilTitle}',
        description: '${topic.excerpt.replace(/'/g, "\\'")}',
        url: \`\${SITE_CONFIG.url}/blog/${topic.slug}\`,
        siteName: SITE_CONFIG.name,
        locale: 'ta_IN',
        type: 'article',
    },
};

export const dynamic = 'force-static';
export const revalidate = 604800; // 7 days

export default function BlogPost() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Schema.org BlogPosting */}
            <Schema
                type="BlogPosting"
                data={{
                    title: '${topic.tamilTitle}',
                    description: '${topic.excerpt.replace(/'/g, "\\'")}',
                    slug: '/blog/${topic.slug}',
                    datePublished: '${new Date().toISOString().split('T')[0]}',
                    author: 'சித்ரை செல்வன் & குழு'
                }}
            />

            {/* Breadcrumb Schema */}
            <Schema
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '${topic.tamilTitle}', item: '/blog/${topic.slug}' }
                    ]
                }}
            />

            {/* Breadcrumb Navigation */}
            <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2 flex-wrap">
                <Link href="/" className="hover:text-primary transition-colors">முகப்பு</Link>
                <span>›</span>
                <Link href="/blog" className="hover:text-primary transition-colors">கட்டுரைகள்</Link>
                <span>›</span>
                <span className="text-gray-900 font-medium">${topic.tamilTitle}</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                        <span>${meta.icon}</span>
                        <span>${meta.label}</span>
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">${new Date().toLocaleDateString('ta-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">6 நிமிட வாசிப்பு</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    ${topic.tamilTitle}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                    ${topic.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500">
                    <span className="font-bold text-gray-800">எழுதியவர்:</span>
                    <span>சித்ரை செல்வன் &amp; கல்யாண வீடு பண்பாட்டு ஆய்வுக் குழு</span>
                </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
${articleContent}
            </div>

            {/* Call to Action: Tools */}
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🛠️</span> எங்களின் இலவச திருமண கருவிகள்
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                    உங்கள் திருமண திட்டமிடலை மேலும் எளிதாக்க எங்களின் பிரத்யேக கருவிகளைப் பயன்படுத்துங்கள்:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                        href="/tools/subha-muhurtham"
                        className="bg-white p-4 rounded-xl border border-gray-100 hover:border-primary transition-all flex items-center gap-3 shadow-sm hover:shadow"
                    >
                        <span className="text-2xl">💍</span>
                        <div>
                            <div className="font-bold text-sm text-gray-900">சுப முகூர்த்த நாட்கள் 2026</div>
                            <div className="text-xs text-gray-500">அனைத்து சுப முகூர்த்த தேதிகள்</div>
                        </div>
                    </Link>
                    <Link
                        href="/tools/thirumana-selavu"
                        className="bg-white p-4 rounded-xl border border-gray-100 hover:border-primary transition-all flex items-center gap-3 shadow-sm hover:shadow"
                    >
                        <span className="text-2xl">💰</span>
                        <div>
                            <div className="font-bold text-sm text-gray-900">திருமண செலவு கணிப்பான்</div>
                            <div className="text-xs text-gray-500">பட்ஜெட் திட்டம் உருவாக்குங்கள்</div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Related Articles */}
            <RelatedArticles currentSlug="/blog/${topic.slug}" category="${topic.category}" />
        </article>
    );
}
`;

// ── Write page.tsx ──
const articleDir = join(ROOT, 'src/app/blog', topic.slug);
const pageFile = join(articleDir, 'page.tsx');
writeFileSync(pageFile, pageCode, 'utf-8');
console.log(`\n✅ Created: src/app/blog/${topic.slug}/page.tsx`);

// ── Update src/lib/blog-data.ts ──
const blogDataFile = join(ROOT, 'src/lib/blog-data.ts');
let blogData = readFileSync(blogDataFile, 'utf-8');

const newEntry = `    {
        slug: '/blog/${topic.slug}',
        title: '${topic.tamilTitle.replace(/'/g, "\\'")}',
        excerpt: '${topic.excerpt.replace(/'/g, "\\'")}',
        category: '${topic.category}',
        date: '${new Date().toISOString().split('T')[0]}',
        readTime: '6 நிமிடம்',
        author: 'சித்ரை செல்வன் & குழு'
    },`;

// Insert after the opening "export const BLOG_POSTS: BlogPost[] = ["
blogData = blogData.replace(
  'export const BLOG_POSTS: BlogPost[] = [',
  `export const BLOG_POSTS: BlogPost[] = [\n${newEntry}`
);
writeFileSync(blogDataFile, blogData, 'utf-8');
console.log('✅ Updated: src/lib/blog-data.ts');

// ── Update progress file ──
progress.lastIndex = topicIndex;
progress.generated.push({
  slug: topic.slug,
  date: new Date().toISOString()
});
writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf-8');
console.log(`✅ Updated: scripts/.article-progress.json (lastIndex: ${topicIndex})`);

// ── Submit URL to Search Engines (IndexNow / Bing / Google) ──
console.log('\n🚀 Triggering instant search engine indexing...');
const articleUrl = `https://www.kalyanaveedu.in/blog/${topic.slug}`;

async function indexUrls() {
  // 1. Bing / IndexNow
  const BING_KEY = process.env.BING_API_KEY;
  if (BING_KEY) {
    try {
      const res = await fetch("https://www.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=" + BING_KEY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteUrl: 'https://www.kalyanaveedu.in',
          url: articleUrl
        })
      });
      console.log("📡 Bing Indexing API response: " + res.status);
    } catch (e) {
      console.warn("⚠️ Bing Indexing failed: " + e.message);
    }
  }

  // 2. Google Indexing API (Service Account JWT)
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  let privateKey = process.env.GSC_PRIVATE_KEY;
  if (clientEmail && privateKey) {
    try {
      // Unescape newlines if passed via environment variables
      privateKey = privateKey.replace(/\\n/g, '\n');
      const { createSign } = await import('crypto');

      const now = Math.floor(Date.now() / 1000);
      const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
      const claimSet = Buffer.from(JSON.stringify({
        iss: clientEmail,
        scope: 'https://www.googleapis.com/auth/indexing',
        aud: 'https://oauth2.googleapis.com/token',
        exp: now + 3600,
        iat: now
      })).toString('base64url');

      const signer = createSign('RSA-SHA256');
      signer.update(header + "." + claimSet);
      const signature = signer.sign(privateKey, 'base64url');
      const jwt = header + "." + claimSet + "." + signature;

      const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=" + jwt
      });

      const tokenData = await tokenRes.json();
      if (tokenData.access_token) {
        const indexRes = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + tokenData.access_token
          },
          body: JSON.stringify({
            url: articleUrl,
            type: 'URL_UPDATED'
          })
        });
        console.log("📡 Google Indexing API response: " + indexRes.status);
      }
    } catch (e) {
      console.warn("⚠️ Google Indexing API failed: " + e.message);
    }
  }
}

await indexUrls();

console.log(`\n🎉 Successfully published and indexed article: ${topic.slug}\n`);
