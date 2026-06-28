import { SITE_CONFIG } from './constants';

/**
 * Pings Bing IndexNow API to notify search engines of new or updated content.
 * @param url The URL that was updated. If omitted, pings the homepage.
 */
export async function pingIndexNow(url?: string) {
    const targetUrl = url || SITE_CONFIG.url;
    const apiKey = 'fa2dcb4f37bc4dfb9cb836e80d8debb2'; // IndexNow key for kalyanaveedu.in
    const host = new URL(SITE_CONFIG.url).hostname;

    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                host: host,
                key: apiKey,
                keyLocation: `${SITE_CONFIG.url}/${apiKey}.txt`,
                urlList: [targetUrl],
            }),
        });

        if (response.ok) {
            console.log(`Successfully pinged IndexNow for ${targetUrl}`);
            return true;
        } else {
            console.error(`Failed to ping IndexNow: ${response.statusText}`);
            return false;
        }
    } catch (error) {
        console.error('Error pinging IndexNow:', error);
        return false;
    }
}
