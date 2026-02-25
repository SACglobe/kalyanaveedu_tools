import { MetadataRoute } from 'next';
import { SITE_CONFIG, TOOLS_LIST } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    // Static routes
    const routes = [
        '',
        '/about',
        '/about-us',
        '/contact',
        '/privacy-policy',
        '/cookie-policy',
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

    // Blog routes
    const blogRoutes = [
        '/blog/vedic-wedding-mantras',
        '/blog/avoid-wedding-debt',
        '/blog/gold-jewelry-buying-guide',
        '/blog/wedding-insurance-guide',
        '/blog/wedding-menu-planning',
        '/blog/destination-wedding-planning',
        '/blog/tamil-nakshatras-significance',
        '/blog/thali-cultural-significance',
        '/blog/tamil-wedding-rituals',
        '/blog/mandapam-decoration',
        '/blog/wedding-invitation-guide',
        '/blog/choosing-wedding-photographer',
        '/blog/thirumana-velai-pattiyal',
        '/blog/subha-muhurtham-2026',
        '/blog/budget-planning-tips', // Note: budget-planning-tips might be a duplicate or older slug, checking consistency with page.tsx
        '/blog/naandi-ceremony',
        '/blog/thali-tying-significance',
        '/blog/kasi-yatra',
        '/blog/malai-matruthel',
        '/blog/oonjal-ceremony',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...toolRoutes, ...blogRoutes];
}
