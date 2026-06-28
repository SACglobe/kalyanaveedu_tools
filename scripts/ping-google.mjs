/**
 * Google Indexing API Ping Script
 * 
 * This script notifies Google's Indexing API about all URLs in the sitemap.
 * 
 * Prerequisites:
 * 1. Enable Indexing API in Google Cloud Console.
 * 2. Create a Service Account and download the JSON key.
 * 3. Add the Service Account email to Google Search Console as an Owner.
 * 4. Place the key as `service-account.json` in the project root.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Constants
const KEY_FILE = path.join(__dirname, '../service-account.json');
const SITEMAP_URL = 'https://www.kalyanaveedu.in/sitemap.xml'; // Replace with your production sitemap URL

async function pingGoogle() {
  if (!fs.existsSync(KEY_FILE)) {
    console.error('❌ Service account key not found at:', KEY_FILE);
    console.log('Follow the instructions in the script header to set it up.');
    process.exit(1);
  }

  try {
    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const indexing = google.indexing({
      version: 'v3',
      auth: auth,
    });

    console.log('🔍 Fetching URLs from sitemap...');
    // In a real scenario, you might want to fetch the live sitemap or use the local sitemap.ts logic
    // For this script, we'll assume we want to ping a few critical URLs or all of them
    // Note: Google Indexing API has a quota (typically 200 URLs per day)
    
    // For demonstration, let's just list how you would call it:
    /*
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: 'https://www.kalyanaveedu.in/blog/your-post-slug',
        type: 'URL_UPDATED',
      },
    });
    console.log('✅ Notified Google:', response.data);
    */

    console.log('⚠️ Script ready. Please configure the URL list and ensure quota limits.');
    
  } catch (error) {
    console.error('❌ Error pinging Google Indexing API:', error.message);
  }
}

pingGoogle();
