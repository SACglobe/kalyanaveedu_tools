# Sitemap Workflow — kalyanaveedu.in
# Stack: Next.js App Router · TypeScript · Vercel
# Article storage: Individual page.tsx files (no central data file)
# URL types: Static pages + Article pages + Calculator/Tool pages
# ─────────────────────────────────────────────────────
#
# THE CHALLENGE WITH YOUR SETUP:
#   Articles are individual page.tsx files — there is no
#   single data file to import and loop over.
#   This means sitemap.ts cannot just do articles.map(...)
#
# THE SOLUTION:
#   sitemap.ts uses Node's fs module at build time to:
#   1. Scan the articles folder and collect all slugs
#   2. Scan the tools/calculator folder and collect all slugs
#   3. Combine with hardcoded static pages
#   4. Return the complete URL list
#
#   This way: every time you create a new page.tsx file
#   in the articles folder, it is AUTOMATICALLY in the
#   sitemap on the next Vercel deploy — no other step needed.
#
# URL TYPES COVERED:
#   Type A — Static pages (About, Contact, Privacy, etc.)
#   Type B — Article pages (each page.tsx in articles folder)
#   Type C — Calculator/Tool pages (each page.tsx in tools folder)
# ─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 1 — Audit current structure
           Run this first — do not skip
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
Audit the full URL and folder structure of
kalyanaveedu.in before we rewrite the sitemap.

This is a Next.js App Router TypeScript project.
Articles are stored as individual page.tsx files.
Do not make any changes — read and report only.

STEP 1 — Read current sitemap.ts
Open src/app/sitemap.ts and show me its full content.
Note exactly which URLs it currently includes.

STEP 2 — Map the full /src/app/ folder structure
List every folder inside /src/app/ that contains
a page.tsx file. Show the folder path and the
resulting URL for each one.

Format:
  src/app/about-us/page.tsx          → /about-us
  src/app/blog/muhurtham/page.tsx → /blog/muhurtham
  [etc for every folder]

STEP 3 — Identify the articles folder
Find where the wedding ritual articles live.
It may be /src/app/blog/ or a Tamil-named folder.
List every subfolder (each is one article slug).
Count the total number of article pages.

STEP 4 — Identify the tools/calculator folder
Find where the calculator or tool pages live.
List every subfolder.
Count the total number of tool pages.

STEP 5 — Identify static pages
List every page.tsx that is a standalone static page
(not inside the articles or tools folders).
These are pages like: /, /about-us, /contact, etc.

STEP 6 — Identify what should NOT be in the sitemap
Look for any folders that should be excluded:
- API routes (/api/)
- Admin pages
- Error pages (not-found, error)
- Any page with noindex in its metadata

STEP 7 — Gap analysis
Compare the current sitemap.ts content against
all the URLs you found.

Show me a table:
| URL                        | Type       | In sitemap now? | Should be? |
|----------------------------|------------|-----------------|------------|
| /                          | static     | yes/no          | yes        |
| /about-us                  | static     | yes/no          | yes        |
| /blog/[each slug]      | article    | yes/no          | yes        |
| /tools/[each slug]         | tool       | yes/no          | yes        |
| [all others found]         |            |                 |            |

Do not make any changes. Report only.
─────────────────────────────────────────────────────

STOP. Read the full output.
Note down:
  - Exact path of articles folder
  - Exact path of tools/calculator folder
  - List of static pages
  - Which URLs are currently missing
Then continue to Prompt 2.


═══════════════════════════════════════════════════════
PROMPT 2 — Rewrite sitemap.ts with filesystem scanning
═══════════════════════════════════════════════════════

⚠️  Fill in these values from Prompt 1 output before running:
    [ARTICLES_FOLDER]  — e.g. src/app/articles
    [TOOLS_FOLDER]     — e.g. src/app/tools  (or "none" if no tools)
    [STATIC_PAGES]     — list from the audit

Paste into Cursor Composer:

─────────────────────────────────────────────────────
Rewrite src/app/sitemap.ts to automatically include
every URL on kalyanaveedu.in — with no manual updates
needed when new pages are added.

The site has three URL types:
  Type A: Static pages — hardcoded (never change)
  Type B: Article pages — in [ARTICLES_FOLDER]
  Type C: Tool/Calculator pages — in [TOOLS_FOLDER]
          (write "none" here if no tools folder)

APPROACH:
Since articles and tools are individual page.tsx files
with no central data file, use Node's fs module to
scan the folders at build time and collect all slugs.

WRITE THE NEW sitemap.ts:

─── Template to follow ───

import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://kalyanaveedu.in'

// Helper: scan a folder and return all subfolder names as slugs
// Each subfolder = one page.tsx route = one URL slug
function getSlugsFromFolder(folderPath: string): string[] {
  const absolutePath = path.join(process.cwd(), folderPath)
  
  if (!fs.existsSync(absolutePath)) {
    return []
  }
  
  return fs.readdirSync(absolutePath, { withFileTypes: true })
    .filter(entry =>
      entry.isDirectory() &&
      fs.existsSync(path.join(absolutePath, entry.name, 'page.tsx'))
    )
    .map(entry => entry.name)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // ── TYPE A: Static pages ──
  // Hardcoded — these never change
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // [ADD ALL STATIC PAGES FROM AUDIT HERE]
    // Use this pattern for each:
    // {
    //   url: `${BASE_URL}/about-us`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ]

  // ── TYPE B: Article pages ──
  // Auto-discovered by scanning the articles folder
  const articleSlugs = getSlugsFromFolder('[ARTICLES_FOLDER]')
  const articlePages: MetadataRoute.Sitemap = articleSlugs.map(slug => ({
    url: `${BASE_URL}/[ARTICLE_URL_PREFIX]/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── TYPE C: Tool/Calculator pages ──
  // Auto-discovered by scanning the tools folder
  // (Remove this section if no tools folder exists)
  const toolSlugs = getSlugsFromFolder('[TOOLS_FOLDER]')
  const toolPages: MetadataRoute.Sitemap = toolSlugs.map(slug => ({
    url: `${BASE_URL}/[TOOL_URL_PREFIX]/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // ── COMBINE AND RETURN ──
  return [
    ...staticPages,
    ...articlePages,
    ...toolPages,
  ]
}

─── End template ───

USE THIS TEMPLATE but fill in:

1. All static pages found in the Prompt 1 audit
   with correct priority values:
   | Page            | Priority | changeFrequency |
   |-----------------|----------|-----------------|
   | /               | 1.0      | weekly          |
   | /about-us       | 0.6      | monthly         |
   | /contact        | 0.5      | monthly         |
   | /privacy-policy | 0.3      | yearly          |
   | /terms          | 0.3      | yearly          |
   | /disclaimer     | 0.3      | yearly          |
   | /cookie-policy  | 0.3      | yearly          |
   [add any others found in audit]

2. The correct [ARTICLES_FOLDER] path
3. The correct [ARTICLE_URL_PREFIX]
   (the URL segment before the slug —
    e.g. if URL is /blog/muhurtham then prefix is /articles)
4. The correct [TOOLS_FOLDER] path and [TOOL_URL_PREFIX]
   (remove Type C section entirely if no tools exist)

5. Add this comment block at the very top of the file:
   // ─────────────────────────────────────────────
   // SITEMAP — kalyanaveedu.in
   // 
   // HOW TO ADD NEW URLS:
   //
   // New ARTICLE: just create the folder and page.tsx
   //   → src/app/[ARTICLES_FOLDER]/your-slug/page.tsx
   //   → automatically appears in sitemap on next deploy
   //   → NO changes needed to this file
   //
   // New TOOL: just create the folder and page.tsx
   //   → src/app/[TOOLS_FOLDER]/your-slug/page.tsx
   //   → automatically appears in sitemap on next deploy
   //   → NO changes needed to this file
   //
   // New STATIC PAGE: add it to the staticPages array
   //   in this file manually (these are rare)
   // ─────────────────────────────────────────────

AFTER WRITING:
- Show me the complete new sitemap.ts
- Count: how many static, article, and tool URLs
  will this generate based on current folder contents?
- Run: npx tsc --noEmit — show output, fix any errors
─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 3 — Verify output before deploying
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
Verify the new sitemap.ts is generating correct output.

STEP 1 — Build check
Run: npm run build 2>&1 | tail -20
Show the output — confirm zero errors.

STEP 2 — Start dev server and fetch sitemap
In one terminal: npm run dev
In another terminal after server starts:
curl http://localhost:3000/sitemap.xml

Show me the complete XML output.

STEP 3 — Validate against checklist
From the sitemap XML, confirm:

Static pages present:
  [ ] https://kalyanaveedu.in/ — priority 1.0
  [ ] https://kalyanaveedu.in/about-us
  [ ] https://kalyanaveedu.in/contact
  [ ] https://kalyanaveedu.in/privacy-policy
  [ ] https://kalyanaveedu.in/terms
  [ ] https://kalyanaveedu.in/disclaimer
  [ ] https://kalyanaveedu.in/cookie-policy
  [any others from the audit]

Article pages:
  [ ] At least one article URL is present
  [ ] URL format is correct (no double slashes, no localhost)
  [ ] Total count matches number of article folders

Tool pages (if applicable):
  [ ] At least one tool URL is present
  [ ] URL format is correct

Global checks:
  [ ] ALL URLs start with https://kalyanaveedu.in
  [ ] NO localhost URLs
  [ ] NO duplicate URLs
  [ ] NO /api/ routes
  [ ] NO /_next/ paths
  [ ] NO missing pages (compare count against folder count)

STEP 4 — Count report
Show me:
  Static pages in sitemap:  [count]
  Article pages in sitemap: [count]
  Tool pages in sitemap:    [count]
  ─────────────────────────────────
  TOTAL URLs in sitemap:    [count]

  Article folders found:    [count]
  Article pages in sitemap: [count]
  Match: YES / NO (must be YES)

If any check fails, fix sitemap.ts before continuing.
─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
PROMPT 4 — Add new-page checklist to article workflow
           So you never accidentally miss a page again
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
Create a simple helper script that I can run any time
to check that every page.tsx in my articles and tools
folders is correctly reachable.

Create: scripts/sitemap-check.mjs
(Using .mjs so it runs without ts-node)

The script should:

1. Read the articles folder at [ARTICLES_FOLDER]
   and collect all slug names

2. Read the tools folder at [TOOLS_FOLDER]
   and collect all slug names (skip if folder missing)

3. For each URL, make a fetch() request to
   http://localhost:3000/[url] and check the
   HTTP status code

4. Print a report:

   ════════════════════════════════════════════
   SITEMAP COVERAGE CHECK — kalyanaveedu.in
   ════════════════════════════════════════════
   
   Static pages:
   ✅ 200  /
   ✅ 200  /about-us
   ✅ 200  /contact
   ✅ 200  /privacy-policy
   ✅ 200  /terms
   ✅ 200  /disclaimer
   ✅ 200  /cookie-policy
   
   Article pages (20 found):
   ✅ 200  /blog/muhurtham
   ✅ 200  /blog/naandi
   ❌ 404  /blog/some-broken-page  ← flags broken pages
   [etc]
   
   Tool pages (N found):
   ✅ 200  /tools/gold-calculator
   [etc]
   
   ────────────────────────────────────────────
   Total URLs checked: [count]
   ✅ Passing: [count]
   ❌ Broken:  [count]
   
   Sitemap will contain: [passing count] URLs
   ════════════════════════════════════════════

5. Add to package.json scripts:
   "sitemap:check": "node scripts/sitemap-check.mjs"

Usage: start dev server, then run npm run sitemap:check
This catches 404 pages before they go live.

Show me the complete script when done.
─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
DEPLOY AND SEARCH CONSOLE
═══════════════════════════════════════════════════════

After all prompts pass:

── Deploy ──
  git add src/app/sitemap.ts scripts/sitemap-check.mjs
  git commit -m "feat: auto-scanning sitemap covers all URL types"
  git push

── Verify live ──
  Open: https://kalyanaveedu.in/sitemap.xml
  [ ] XML renders correctly
  [ ] All static pages present
  [ ] All article URLs present
  [ ] All tool URLs present
  [ ] Zero localhost or relative URLs

── Resubmit to Search Console ──
  search.google.com/search-console
  → Sitemaps → sitemap.xml → Resubmit
  → Check Coverage in 24hrs for discovered URLs

── Your ongoing workflow — zero extra steps ──
//
  Adding a new article:
  1. Create src/app/[ARTICLES_FOLDER]/new-slug/page.tsx
  2. Write the article
  3. git push
  → Vercel deploys → sitemap auto-includes new URL
  → Google discovers it on next crawl
  → Done. Nothing else needed.

  Adding a new tool:
  1. Create src/app/[TOOLS_FOLDER]/new-slug/page.tsx
  2. git push
  → Auto-included in sitemap. Done.

  Adding a new static page (rare):
  1. Create the page.tsx
  2. Add one entry to the staticPages array in sitemap.ts
  3. git push
  → Done.
