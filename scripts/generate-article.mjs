#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// generate-article.mjs — AI Blog Article Generator for kalyanaveedu.in
// Uses Gemini API to write 800-1200 word Tamil articles as Next.js page.tsx
//
// Usage:
//   node scripts/generate-article.mjs                  # picks next topic from queue
//   node scripts/generate-article.mjs --dry-run        # preview only, no file write
//   node scripts/generate-article.mjs --index 5        # pick specific topic by index
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Load .env.local if present ──
let GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY && existsSync(join(ROOT, '.env.local'))) {
  const envContent = readFileSync(join(ROOT, '.env.local'), 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('GEMINI_API_KEY=')) {
      GEMINI_API_KEY = trimmed.substring('GEMINI_API_KEY='.length).trim().replace(/^["']|["']$/g, '');
    }
  }
}

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY is not set in environment or .env.local');
  process.exit(1);
}

// ── Config ──
const GEMINI_MODEL = 'gemini-3.6-flash';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const DRY_RUN = process.argv.includes('--dry-run');
const INDEX_ARG = process.argv.indexOf('--index');
const FORCE_INDEX = INDEX_ARG !== -1 ? parseInt(process.argv[INDEX_ARG + 1]) : null;

// ── Load topics queue ──
const topics = JSON.parse(readFileSync(join(__dirname, 'article-topics.json'), 'utf-8'));
const progressFile = join(__dirname, '.article-progress.json');
let progress = existsSync(progressFile)
  ? JSON.parse(readFileSync(progressFile, 'utf-8'))
  : { lastIndex: -1, generated: [] };

// ── Pick next topic ──
const topicIndex = FORCE_INDEX !== null ? FORCE_INDEX : progress.lastIndex + 1;
if (topicIndex >= topics.length) {
  console.log('✅ All topics have been generated! Queue is complete.');
  process.exit(0);
}
const topic = topics[topicIndex];
console.log(`\n🎯 Generating article ${topicIndex + 1}/${topics.length}:`);
console.log(`   Slug: ${topic.slug}`);
console.log(`   Category: ${topic.category}`);
console.log(`   Topic: ${topic.topic}\n`);

// ── Category metadata map ──
const CATEGORY_META = {
  'government-schemes': { label: 'அரசு திட்டங்கள்', english: 'Government Schemes', icon: '🏛️' },
  'traditions': { label: 'திருமண சடங்குகள்', english: 'Wedding Traditions', icon: '🪔' },
  'legal-documents': { label: 'சட்டம் & ஆவணங்கள்', english: 'Legal & Documents', icon: '⚖️' },
  'budget-planning': { label: 'பட்ஜெட் திட்டமிடல்', english: 'Budget Planning', icon: '💰' },
  'astrology': { label: 'சுப முகூர்த்தம்', english: 'Auspicious Dates', icon: '🌟' },
  'wedding-guide': { label: 'திருமண வழிகாட்டி', english: 'Wedding Guide', icon: '💍' },
};

const catMeta = CATEGORY_META[topic.category] || CATEGORY_META['wedding-guide'];

// ── Unsplash image URL ──
const imageUrl = `https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200`;
// Note: In production, you could use Unsplash API to search for topic.image_query

// ── Author mapping by category ──
const AUTHOR_BY_CATEGORY = {
  'government-schemes': { name: 'கார்த்திக் ராஜன்', nameEn: 'Karthik Rajan', role: 'Government Policy Researcher', bio: 'கார்த்திக் ராஜன் தமிழ்நாடு மற்றும் மத்திய அரசு நலத் திட்டங்கள் குறித்து ஆராய்ச்சி செய்து வருகிறார். பல ஆண்டுகளாக குடும்பங்களுக்கு அரசு திட்டங்களில் விண்ணப்பிக்க உதவி வருகிறார்.' },
  'traditions': { name: 'மீனாட்சி சுந்தரம்', nameEn: 'Meenakshi Sundaram', role: 'Tamil Cultural Historian', bio: 'மீனாட்சி சுந்தரம் தமிழ் திருமண மரபுகள் மற்றும் சடங்குகள் குறித்த நீண்ட அனுபவம் கொண்டவர். பண்பாட்டுத் தரவுகளைத் தொகுத்து, இன்றைய தலைமுறைக்கு எளிய தமிழில் விளக்குவதில் ஆர்வம் கொண்டவர்.' },
  'legal-documents': { name: 'அட்வகேட் சந்திரசேகர்', nameEn: 'Adv. Chandrasekhar', role: 'Family Law Specialist', bio: 'சந்திரசேகர் சென்னை உயர் நீதிமன்றத்தில் குடும்பச் சட்ட வழக்கறிஞராக பணியாற்றுகிறார். திருமண பதிவு, வரதட்சணை சட்டம் மற்றும் பெண்கள் உரிமைகள் குறித்த கட்டுரைகள் எழுதி வருகிறார்.' },
  'budget-planning': { name: 'சித்ரை செல்வன்', nameEn: 'Chithrai Selvan', role: 'Founder & Lead Developer', bio: 'சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். திருமண திட்டமிடலை எளிமையாக்குவதும், தமிழ் குடும்பங்களுக்கு நிதி சேமிப்பு ஆலோசனை வழங்குவதும் அவரின் முக்கியப் பணி.' },
  'astrology': { name: 'ஜோதிடர் வேங்கடேஷ்', nameEn: 'Jothidar Venkatesh', role: 'Tamil Panchangam Expert', bio: 'வேங்கடேஷ் பஞ்சாங்க கணிப்பு மற்றும் சுப முகூர்த்த தேர்வில் 20 ஆண்டுகள் அனுபவம் கொண்டவர். ஜோதிட சாஸ்திரப்படி திருமண நாட்கள் தேர்வு செய்வதில் நிபுணர்.' },
  'wedding-guide': { name: 'சித்ரை செல்வன்', nameEn: 'Chithrai Selvan', role: 'Founder & Lead Developer', bio: 'சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். திருமண திட்டமிடலை எளிமையாக்குவதும், தமிழ் குடும்பங்களுக்கு பயனுள்ள வழிகாட்டுதல் வழங்குவதும் அவரின் நோக்கம்.' },
};

const author = AUTHOR_BY_CATEGORY[topic.category] || AUTHOR_BY_CATEGORY['wedding-guide'];

// ── Build Gemini prompt ──
const SYSTEM_PROMPT = `You are an expert Tamil content writer for kalyanaveedu.in, a trusted Tamil wedding planning website.

Write a comprehensive, 100% original Tamil blog article as a Next.js React component (page.tsx).

TOPIC: ${topic.topic}
CATEGORY: ${catMeta.english} (${catMeta.label})
SLUG: /blog/${topic.slug}
AUTHOR: ${author.name} (${author.role})
DATE: ${topic.date}

STRICT REQUIREMENTS:
1. Write ONLY the React component JSX body content — the stuff inside <div className="prose prose-lg...">
2. Write in Tamil (script: தமிழ்), minimum 800 words of body content
3. For government schemes: Include ACTUAL scheme names, eligibility criteria, required documents list, step-by-step application process, official website URLs
4. For traditions: Include cultural origin, step-by-step ritual, regional/caste variations, modern adaptations
5. Use these JSX components (already imported):
   - <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Section Title</h2>
   - <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Sub Title</h3>
   - <p>paragraph text</p>
   - <ul className="list-disc pl-6 space-y-3">/<li> for lists
   - <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl"> for important callouts
   - <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8"> for info boxes
   - <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8"> for tips
   - <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8"> for summary boxes
6. Structure: intro paragraph → 4-6 H2 sections → practical tips box → conclusion
7. Do NOT include import statements, metadata, or the full component wrapper — only the JSX content inside the prose div
8. Do NOT use backticks or code blocks in your response — output pure JSX only
9. Use &amp; for & in JSX, &quot; for quotes in Tamil text attributes`;

// ── Call Gemini API ──
async function callGemini(prompt) {
  const response = await fetch(GEMINI_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 16384,
      },
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Gemini API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  
  // Clean markdown code blocks if present
  text = text.replace(/^```(?:html|jsx|tsx)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();

  // Strip redundant outer <div className="prose..."> wrapper if generated
  text = text.replace(/^<div\s+className=["'][^"']*prose[^"']*["']\s*>/i, '').trim();
  const openDivs = (text.match(/<div\b[^>]*>/gi) || []).length;
  const closeDivs = (text.match(/<\/div>/gi) || []).length;
  if (closeDivs > openDivs) {
    text = text.replace(/<\/div>\s*$/, '').trim();
  }

  return text;
}

// ── Generate article content ──
console.log('📡 Calling Gemini API...');
let articleBody;
try {
  articleBody = await callGemini(SYSTEM_PROMPT);
  console.log(`✅ Generated ${articleBody.length} characters of content`);
} catch (err) {
  console.error('❌ Gemini API failed:', err.message);
  process.exit(1);
}

if (DRY_RUN) {
  console.log('\n── DRY RUN — Generated Content Preview ──\n');
  console.log(articleBody.substring(0, 1000) + '...\n');
  console.log('── No files written (dry-run mode) ──');
  process.exit(0);
}

// ── Build full page.tsx ──
const pageContent = `import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: '${topic.topic.split(' - ')[0].substring(0, 70)} | கல்யாண வீடு',
    description: '${topic.topic.substring(0, 155)}',
    keywords: ['${topic.slug.split('-').join("', '")}', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: \`\${SITE_CONFIG.url}/blog/${topic.slug}\`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: '${topic.topic.split(' - ')[0].substring(0, 100)}',
                    description: '${topic.topic.substring(0, 155)}',
                    author: '${author.name}',
                    datePublished: '${topic.date}',
                    slug: '/blog/${topic.slug}'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '${catMeta.label}', item: '/blog?category=${topic.category}' },
                    ]
                }} 
            />

            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    ${catMeta.icon} ${catMeta.label}
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    ${topic.topic.split(' - ')[0]}
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="${imageUrl}"
                        alt="${topic.topic.split(' - ')[0]}"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock
                    author="${author.name}"
                    updatedDate="${new Date(topic.date).toLocaleDateString('ta-IN', { year: 'numeric', month: 'long' })}"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

${articleBody}

                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🛠️</span> எங்களின் இலவச திருமண கருவிகள்
                    </h3>
                    <p className="text-gray-700 mb-6">
                        திருமண ஏற்பாடுகளை எளிமையாக்க நாங்கள் வழங்கும் இலவச டிஜிட்டல் கருவிகளைப் பயன்படுத்தி மகிழுங்கள்.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href="/tools/thirumana-selavu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">💰</span>
                            <div>
                                <div className="font-bold text-gray-900">பட்ஜெட் பிளானர்</div>
                                <div className="text-xs text-gray-500">செலவுகளைத் திட்டமிட</div>
                            </div>
                        </Link>
                        <Link href="/tools/subha-muhurtham" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">🌟</span>
                            <div>
                                <div className="font-bold text-gray-900">சுப முகூர்த்தம்</div>
                                <div className="text-xs text-gray-500">நல்ல நாள் தேர்வு</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <AuthorBio 
                    name="${author.name}"
                    role="${author.role}"
                    bio="${author.bio}"
                />
                <RelatedArticles 
                    currentSlug="/blog/${topic.slug}" 
                    category="${topic.category}" 
                />
            </div>
        </article>
    );
}
`;

// ── Write page.tsx ──
const outputDir = join(ROOT, 'src', 'app', 'blog', topic.slug);
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}
const outputPath = join(outputDir, 'page.tsx');
writeFileSync(outputPath, pageContent, 'utf-8');
console.log(`✅ Written: src/app/blog/${topic.slug}/page.tsx`);

// ── Update blog-data.ts ──
const blogDataPath = join(ROOT, 'src', 'lib', 'blog-data.ts');
let blogData = readFileSync(blogDataPath, 'utf-8');

const newEntry = `    {
        slug: '/blog/${topic.slug}',
        title: '${topic.topic.split(' - ')[0].replace(/'/g, "\\'")}',
        excerpt: '${topic.topic.substring(0, 120).replace(/'/g, "\\'")}.',
        date: '${new Date(topic.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}',
        category: '${topic.category}',
        image: '${imageUrl}',
        author: '${author.name}'
    },`;

// Ensure previous object ends with a comma before closing bracket
blogData = blogData.replace(/(\}\s*)(\];\s*$)/, '$1,\n$2');
// Insert before the closing ]; of BLOG_POSTS array
blogData = blogData.replace(/(\];\s*$)/, `${newEntry}\n$1`);
writeFileSync(blogDataPath, blogData, 'utf-8');
console.log(`✅ Updated: src/lib/blog-data.ts`);

// ── Save progress ──
progress.lastIndex = topicIndex;
progress.generated.push({ slug: topic.slug, date: new Date().toISOString() });
writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf-8');

console.log(`\n🎉 Done! Article ${topicIndex + 1}/${topics.length} generated successfully.`);
console.log(`   Next topic: ${topics[topicIndex + 1]?.slug || 'none (all done!)'}\n`);

// ── Auto-Index with Google & Bing (local convenience only; in CI workflow handles it) ──
if (!process.env.CI) {
  const fullUrl = `https://www.kalyanaveedu.in/blog/${topic.slug}`;
  console.log(`🔍 Automatically submitting new article to Google & Bing...`);
  try {
    const { execSync } = await import('child_process');
    execSync(`node "${join(__dirname, 'index-url.mjs')}" "${fullUrl}"`, { stdio: 'inherit' });
  } catch (err) {
    // Continue even if indexer reports notice
  }
}
