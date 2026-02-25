import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const ARTICLES_FOLDER = 'src/app/blog';
const TOOLS_FOLDER = 'src/app/tools';

function getSlugsFromFolder(folderPath) {
    const absolutePath = path.join(process.cwd(), folderPath);
    if (!fs.existsSync(absolutePath)) return [];
    return fs.readdirSync(absolutePath, { withFileTypes: true })
        .filter(entry =>
            entry.isDirectory() &&
            fs.existsSync(path.join(absolutePath, entry.name, 'page.tsx'))
        )
        .map(entry => entry.name);
}

const staticPages = [
    '/',
    '/about',
    '/about-us',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/cookie-policy',
    '/tools',
    '/blog'
];

async function checkUrl(urlPath) {
    try {
        const response = await fetch(`${BASE_URL}${urlPath}`);
        return { path: urlPath, status: response.status, ok: response.ok };
    } catch (error) {
        return { path: urlPath, status: 'ERROR', ok: false };
    }
}

async function runCheck() {
    console.log('════════════════════════════════════════════');
    console.log('SITEMAP COVERAGE CHECK — kalyanaveedu.in');
    console.log('════════════════════════════════════════════\n');

    let total = 0;
    let passed = 0;

    console.log('Static pages:');
    for (const p of staticPages) {
        const res = await checkUrl(p);
        console.log(`${res.ok ? '✅' : '❌'} ${res.status}  ${res.path}`);
        total++;
        if (res.ok) passed++;
    }

    const articleSlugs = getSlugsFromFolder(ARTICLES_FOLDER);
    console.log(`\nArticle pages (${articleSlugs.length} found):`);
    for (const slug of articleSlugs) {
        const res = await checkUrl(`/blog/${slug}`);
        console.log(`${res.ok ? '✅' : '❌'} ${res.status}  ${res.path}`);
        total++;
        if (res.ok) passed++;
    }

    const toolSlugs = getSlugsFromFolder(TOOLS_FOLDER);
    console.log(`\nTool pages (${toolSlugs.length} found):`);
    for (const slug of toolSlugs) {
        const res = await checkUrl(`/tools/${slug}`);
        console.log(`${res.ok ? '✅' : '❌'} ${res.status}  ${res.path}`);
        total++;
        if (res.ok) passed++;
    }

    console.log('\n────────────────────────────────────────────');
    console.log(`Total URLs checked: ${total}`);
    console.log(`✅ Passing: ${passed}`);
    console.log(`❌ Broken:  ${total - passed}`);
    console.log(`\nSitemap will contain: ${passed} URLs`);
    console.log('════════════════════════════════════════════');
}

runCheck();
