import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/search', '/search?'],
            },
            {
                userAgent: [
                    'GPTBot', 
                    'ChatGPT-User', 
                    'Claude-Enterprise', 
                    'ClaudeBot', 
                    'PerplexityBot', 
                    'Applebot-Extended', 
                    'Google-Extended', 
                    'Bytespider', 
                    'CCBot', 
                    'anthropic-ai',
                    'FacebookBot',
                    'Amazonbot'
                ],
                disallow: ['/private/'],
            }
        ],
        sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    };
}
