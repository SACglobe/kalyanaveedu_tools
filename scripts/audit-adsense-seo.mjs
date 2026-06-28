import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const ARTICLES_FOLDER = 'src/app/blog';
const TOOLS_FOLDER = 'src/app/tools';
const REPORT_PATH = '/Users/chithraiselvan/.gemini/antigravity/brain/6fb61f16-4536-4a86-991a-4989ab3cf251/adsense-seo-audit.md';

// List of all static pages
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

// Generate all target URLs
const urlsToAudit = [];

// 1. Static Pages
staticPages.forEach(p => urlsToAudit.push(p));

// 2. Blog Pages
const articleSlugs = getSlugsFromFolder(ARTICLES_FOLDER);
articleSlugs.forEach(slug => urlsToAudit.push(`/blog/${slug}`));

// 3. Tool Pages
const toolSlugs = getSlugsFromFolder(TOOLS_FOLDER);
toolSlugs.forEach(slug => urlsToAudit.push(`/tools/${slug}`));

console.log(`Discovered ${urlsToAudit.length} URLs to audit...`);

async function auditUrl(urlPath) {
    const fullUrl = `${BASE_URL}${urlPath}`;
    const report = {
        path: urlPath,
        status: 200,
        checks: {
            httpStatus: { passed: false, comment: '' },
            title: { passed: false, comment: '' },
            description: { passed: false, comment: '' },
            h1: { passed: false, comment: '' },
            canonical: { passed: false, comment: '' },
            imageAlts: { passed: false, comment: '' },
            placeholderCheck: { passed: false, comment: '' },
            wordCount: { passed: false, comment: '' },
            schemaMarkup: { passed: false, comment: '' }
        },
        overallPassed: false
    };

    try {
        const response = await fetch(fullUrl);
        report.status = response.status;
        report.checks.httpStatus.passed = response.ok;
        if (!response.ok) {
            report.checks.httpStatus.comment = `HTTP Error Status: ${response.status}`;
            return report;
        }

        const html = await response.text();

        // 1. Title check
        const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : '';
        if (!title) {
            report.checks.title.comment = 'Missing <title> tag';
        } else if (title.length < 30 || title.length > 70) {
            report.checks.title.comment = `Title length (${title.length}) is outside 30-70 characters: "${title}"`;
        } else {
            report.checks.title.passed = true;
        }

        // 2. Description check
        const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) ||
                          html.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
        const desc = descMatch ? descMatch[1].trim() : '';
        if (!desc) {
            report.checks.description.comment = 'Missing meta description';
        } else if (desc.length < 120 || desc.length > 170) {
            report.checks.description.comment = `Meta description length (${desc.length}) is outside 120-170 characters: "${desc}"`;
        } else {
            report.checks.description.passed = true;
        }

        // 3. H1 check
        const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
        if (h1Matches.length === 0) {
            report.checks.h1.comment = 'Missing H1 tag';
        } else if (h1Matches.length > 1) {
            report.checks.h1.comment = `Multiple H1 tags found (${h1Matches.length})`;
        } else {
            report.checks.h1.passed = true;
        }

        // 4. Canonical check
        const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i) ||
                           html.match(/<link\s+href=["']([\s\S]*?)["']\s+rel=["']canonical["']/i);
        const canonical = canonMatch ? canonMatch[1].trim() : '';
        const expectedCanonical = `https://www.kalyanaveedu.in${urlPath === '/' ? '' : urlPath}`;
        if (!canonical) {
            report.checks.canonical.comment = 'Missing canonical URL';
        } else if (canonical !== expectedCanonical) {
            report.checks.canonical.comment = `Canonical mismatch. Expected: "${expectedCanonical}", Found: "${canonical}"`;
        } else {
            report.checks.canonical.passed = true;
        }

        // 5. Image Alt check
        const imgTags = html.match(/<img[^>]*>/gi) || [];
        let missingAltCount = 0;
        for (const img of imgTags) {
            const altMatch = img.match(/alt=["']([\s\S]*?)["']/i);
            if (!altMatch || !altMatch[1].trim()) {
                missingAltCount++;
            }
        }
        if (missingAltCount > 0) {
            report.checks.imageAlts.comment = `${missingAltCount} image(s) missing alt attribute`;
        } else {
            report.checks.imageAlts.passed = true; // Also passes if no images
        }

        // 6. Placeholder / dummy content check
        const placeholders = ['lorem ipsum', 'todo', 'placeholder', 'dummy content', 'mock text'];
        const foundPlaceholders = [];
        const lowerHtml = html.toLowerCase();
        placeholders.forEach(p => {
            if (lowerHtml.includes(p)) {
                foundPlaceholders.push(`"${p}"`);
            }
        });
        if (foundPlaceholders.length > 0) {
            report.checks.placeholderCheck.comment = `Found placeholders: ${foundPlaceholders.join(', ')}`;
        } else {
            report.checks.placeholderCheck.passed = true;
        }

        // 7. Word Count
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        let bodyContent = bodyMatch ? bodyMatch[1] : html;
        // Strip scripts, styles, header, nav, footer to measure pure content
        bodyContent = bodyContent.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '');
        bodyContent = bodyContent.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '');
        bodyContent = bodyContent.replace(/<header[^>]*>([\s\S]*?)<\/header>/gi, '');
        bodyContent = bodyContent.replace(/<nav[^>]*>([\s\S]*?)<\/nav>/gi, '');
        bodyContent = bodyContent.replace(/<footer[^>]*>([\s\S]*?)<\/footer>/gi, '');
        bodyContent = bodyContent.replace(/<[^>]+>/g, ' ');
        bodyContent = bodyContent.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
        const words = bodyContent.trim().split(/\s+/).filter(w => w.length > 0);
        const wordCount = words.length;
        const targetWordCount = urlPath.startsWith('/blog/') ? 450 : 250;
        
        // Skip word count for short pages or policies if they are descriptive enough
        const isPolicyOrContact = ['/contact', '/privacy-policy', '/terms', '/disclaimer', '/cookie-policy'].includes(urlPath);
        if (wordCount < targetWordCount && !isPolicyOrContact) {
            report.checks.wordCount.comment = `Low word count (${wordCount} words). Target: >= ${targetWordCount}`;
        } else {
            report.checks.wordCount.passed = true;
        }

        // 8. Schema Markup check
        const hasSchema = html.includes('type="application/ld+json"');
        if (!hasSchema) {
            report.checks.schemaMarkup.comment = 'Missing JSON-LD structured data schema';
        } else {
            report.checks.schemaMarkup.passed = true;
        }

        // Overall pass is true if all checks pass
        report.overallPassed = Object.values(report.checks).every(c => c.passed);

    } catch (error) {
        report.status = 'ERROR';
        report.checks.httpStatus.comment = `Fetch failed: ${error.message}`;
    }

    return report;
}

async function runAudit() {
    console.log('════════════════════════════════════════════');
    console.log('AdSense & SEO Deep Audit Starting...');
    console.log('════════════════════════════════════════════\n');

    const results = [];
    for (const urlPath of urlsToAudit) {
        const res = await auditUrl(urlPath);
        console.log(`${res.overallPassed ? '✅' : '❌'} [${res.status}] ${urlPath}`);
        results.push(res);
    }

    // Generate markdown report
    let markdown = `# AdSense & SEO Audit Report

**Date:** ${new Date().toISOString().split('T')[0]}  
**Domain:** [https://kalyanaveedu.in](https://kalyanaveedu.in)  
**Total URLs Checked:** ${results.length}  
**Passed:** ${results.filter(r => r.overallPassed).length}  
**Failed:** ${results.filter(r => !r.overallPassed).length}

---

## Executive Summary

This report displays the validation status of every URL on \`kalyanaveedu.in\` against Google AdSense policies and modern SEO rules. We can proceed with target fixes based on this checklist.

---

## Detailed URL Audit Checklist

`;

    results.forEach(res => {
        const icon = res.overallPassed ? '✅' : '❌';
        markdown += `### ${icon} \`${res.path}\` (HTTP ${res.status})\n\n`;
        
        if (res.overallPassed) {
            markdown += `> All conditions met successfully.\n\n`;
        } else {
            markdown += `| Check | Status | Comments / Issues |\n`;
            markdown += `|-------|--------|-------------------|\n`;
            
            Object.entries(res.checks).forEach(([checkName, checkObj]) => {
                const checkIcon = checkObj.passed ? '🟢 Pass' : '🔴 Fail';
                markdown += `| **${checkName}** | ${checkIcon} | ${checkObj.comment || '-'} |\n`;
            });
            markdown += `\n`;
        }
    });

    fs.writeFileSync(REPORT_PATH, markdown);
    console.log(`\nAudit finished! Report written to: ${REPORT_PATH}`);
}

runAudit();
