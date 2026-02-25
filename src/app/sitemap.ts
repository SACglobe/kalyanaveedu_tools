// ─────────────────────────────────────────────
// SITEMAP — kalyanaveedu.in
// 
// HOW TO ADD NEW URLS:
//
// New ARTICLE: just create the folder and page.tsx
//   → src/app/blog/your-slug/page.tsx
//   → automatically appears in sitemap on next deploy
//   → NO changes needed to this file
//
// New TOOL: just create the folder and page.tsx
//   → src/app/tools/your-slug/page.tsx
//   → automatically appears in sitemap on next deploy
//   → NO changes needed to this file
//
// New STATIC PAGE: add it to the staticPages array
//   in this file manually (these are rare)
// ─────────────────────────────────────────────

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://kalyanaveedu.in';

// Helper: scan a folder and return all subfolder names as slugs
// Each subfolder = one page.tsx route = one URL slug
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
        {
            url: `${BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/disclaimer`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/cookie-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/tools`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    // ── TYPE B: Article pages ──
    const articleSlugs = getSlugsFromFolder('src/app/blog');
    const articlePages: MetadataRoute.Sitemap = articleSlugs.map(slug => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // ── TYPE C: Tool/Calculator pages ──
    const toolSlugs = getSlugsFromFolder('src/app/tools');
    const toolPages: MetadataRoute.Sitemap = toolSlugs.map(slug => ({
        url: `${BASE_URL}/tools/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [
        ...staticPages,
        ...articlePages,
        ...toolPages,
    ];
}

