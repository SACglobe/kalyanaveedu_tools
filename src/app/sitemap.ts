import { MetadataRoute } from 'next';
import { SITE_CONFIG, TOOLS_LIST } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms',
        '/disclaimer',
        '/tools',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Tool routes
    const toolRoutes = TOOLS_LIST.map((tool) => ({
        url: `${baseUrl}${tool.path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...toolRoutes];
}
