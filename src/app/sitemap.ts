// ─────────────────────────────────────────────
// SITEMAP — kalyanaveedu.in
// ─────────────────────────────────────────────

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { VALUABLE_MARRIAGE_DATES } from '@/lib/tamil-calendar-data';
import { regionalGuides } from '@/data/regionalGuides';
import { BLOG_POSTS } from '@/lib/blog-data';
import { TAMIL_CITIES } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { addDays } from '@/lib/date-format';
import { RASI_SLUGS } from '@/lib/rasi-palan';
import { VIRATHAM_SLUGS } from '@/lib/viratham';
import { NAKSHATRA_SLUGS } from '@/lib/baby-names';
import { FESTIVALS } from '@/lib/festivals';

// Bump when site-wide static content (tools, policies) changes; daily pages use the real current date.
const STATIC_LAST_UPDATED = new Date('2026-11-03');
const CITY_TOOLS_SLUGS = ['rahu-kalam', 'yamakandam', 'gowri-nalla-neram', 'choghadiya'];

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
        { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE_URL}/contact`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.5 },
        { url: `${BASE_URL}/privacy-policy`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/terms`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/disclaimer`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/cookie-policy`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/tools`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE_URL}/blog`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE_URL}/faq`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    ];

    // ── TYPE B: Article pages ──
    const articleSlugs = getSlugsFromFolder('src/app/blog');
    const postDates = new Map(BLOG_POSTS.map(p => [p.slug, new Date(p.date)]));
    const articlePages: MetadataRoute.Sitemap = articleSlugs.map(slug => {
        const d = postDates.get(`/blog/${slug}`);
        return { slug, lastModified: d && !isNaN(d.getTime()) ? d : STATIC_LAST_UPDATED };
    }).map(({ slug, lastModified }) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // ── TYPE C: Tool/Calculator pages ──
    const toolSlugs = getSlugsFromFolder('src/app/tools');
    const toolPages: MetadataRoute.Sitemap = toolSlugs.map(slug => ({
        url: `${BASE_URL}/tools/${slug}`,
        lastModified: STATIC_LAST_UPDATED,
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

    // ── TYPE E: Regional Registration Legal Guides ──
    const regionalPages: MetadataRoute.Sitemap = regionalGuides.map(guide => ({
        url: `${BASE_URL}/registration/${guide.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // ── TYPE F: Daily panchangam, rasi palan, viratham, baby names, per-city timing pages ──
    const today = cityTodayStr();
    const now = new Date();
    const dailyPages: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/panchangam`, lastModified: now, changeFrequency: 'daily', priority: 0.95 },
        ...TAMIL_CITIES.filter(c => c.id !== 'chennai').map(c => ({
            url: `${BASE_URL}/panchangam/${c.id}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.8,
        })),
        ...Array.from({ length: 30 }, (_, i) => ({
            url: `${BASE_URL}/panchangam/chennai/${addDays(today, i)}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.6,
        })),
        { url: `${BASE_URL}/rasi-palan`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        ...RASI_SLUGS.map(r => ({ url: `${BASE_URL}/rasi-palan/${r}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.8 })),
        ...VIRATHAM_SLUGS.map(t => ({ url: `${BASE_URL}/tools/viratham/${t}`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'weekly' as const, priority: 0.8 })),
        ...NAKSHATRA_SLUGS.map(n => ({ url: `${BASE_URL}/tools/baby-names/${n}`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'monthly' as const, priority: 0.7 })),
        ...FESTIVALS.map(f => ({ url: `${BASE_URL}/tools/festivals/${f.slug}`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'monthly' as const, priority: 0.7, alternates: { languages: { 'ta-IN': `${BASE_URL}/tools/festivals/${f.slug}`, en: `${BASE_URL}/en/festivals/${f.slug}` } } })),
        // English versions (hreflang pairs with the Tamil pages)
        { url: `${BASE_URL}/en/panchangam`, lastModified: now, changeFrequency: 'daily', priority: 0.9, alternates: { languages: { 'ta-IN': `${BASE_URL}/panchangam`, en: `${BASE_URL}/en/panchangam` } } },
        ...TAMIL_CITIES.filter(c => c.id !== 'chennai').map(c => ({
            url: `${BASE_URL}/en/panchangam/${c.id}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.7,
            alternates: { languages: { 'ta-IN': `${BASE_URL}/panchangam/${c.id}`, en: `${BASE_URL}/en/panchangam/${c.id}` } },
        })),
        ...TAMIL_CITIES.map(c => ({
            url: `${BASE_URL}/en/rahu-kalam/${c.id}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.7,
            alternates: { languages: { 'ta-IN': `${BASE_URL}${c.id === 'chennai' ? '/tools/rahu-kalam' : `/tools/rahu-kalam/${c.id}`}`, en: `${BASE_URL}/en/rahu-kalam/${c.id}` } },
        })),
        { url: `${BASE_URL}/en/rasi-palan`, lastModified: now, changeFrequency: 'daily', priority: 0.8, alternates: { languages: { 'ta-IN': `${BASE_URL}/rasi-palan`, en: `${BASE_URL}/en/rasi-palan` } } },
        ...RASI_SLUGS.map(r => ({ url: `${BASE_URL}/en/rasi-palan/${r}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.7, alternates: { languages: { 'ta-IN': `${BASE_URL}/rasi-palan/${r}`, en: `${BASE_URL}/en/rasi-palan/${r}` } } })),
        { url: `${BASE_URL}/en/festivals`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.7, alternates: { languages: { 'ta-IN': `${BASE_URL}/tools/festivals`, en: `${BASE_URL}/en/festivals` } } },
        ...FESTIVALS.map(f => ({ url: `${BASE_URL}/en/festivals/${f.slug}`, lastModified: STATIC_LAST_UPDATED, changeFrequency: 'monthly' as const, priority: 0.6, alternates: { languages: { 'ta-IN': `${BASE_URL}/tools/festivals/${f.slug}`, en: `${BASE_URL}/en/festivals/${f.slug}` } } })),
        ...CITY_TOOLS_SLUGS.flatMap(tool => TAMIL_CITIES.filter(c => c.id !== 'chennai').map(c => ({
            url: `${BASE_URL}/tools/${tool}/${c.id}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.7,
        }))),
    ];

    return [
        ...staticPages,
        ...dailyPages,
        ...articlePages,
        ...toolPages,
        ...muhurthamPages,
        ...regionalPages,
    ];
}
