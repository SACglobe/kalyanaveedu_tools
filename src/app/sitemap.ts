// ─────────────────────────────────────────────
// SITEMAP — kalyanaveedu.in
// ─────────────────────────────────────────────

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { VALUABLE_MARRIAGE_DATES } from '@/lib/tamil-calendar-data';

const BASE_URL = 'https://www.kalyanaveedu.in';

// Helper: scan a folder and return all subfolder names as slugs
function getSlugsFromFolder(folderPath: string): string[] {
    const absolutePath = path.join(process.cwd(), folderPath);

    if (!fs.existsSync(absolutePath)) {
        return [];
    }

    return fs.readdirSync(absolutePath, { withFileTypes: true })
        .filter(entry =>
            entry.isDirectory() &&
            fs.existsSync(path.join(absolutePath, entry.name, 'page.tsx'))
        )
        .map(entry => entry.name);
}

export default function sitemap(): MetadataRoute.Sitemap {

    // ── TYPE A: Static pages ──
    const staticPages: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/cookie-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ];

    // ── TYPE B: Article pages ──
    const articleSlugs = getSlugsFromFolder('src/app/blog');
    const articlePages: MetadataRoute.Sitemap = articleSlugs.map(slug => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // ── TYPE C: Tool/Calculator pages ──
    const toolSlugs = getSlugsFromFolder('src/app/tools');
    const toolPages: MetadataRoute.Sitemap = toolSlugs.map(slug => ({
        url: `${BASE_URL}/tools/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // ── TYPE D: Dynamic Muhurtham Dates (SEO Gold) ──
    const muhurthamPages: MetadataRoute.Sitemap = VALUABLE_MARRIAGE_DATES.map(date => ({
        url: `${BASE_URL}/tools/subha-muhurtham/${date}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        ...staticPages,
        ...articlePages,
        ...toolPages,
        ...muhurthamPages,
    ];
}
