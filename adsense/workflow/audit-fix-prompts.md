# Antigravity Fix Prompts — kalyanaveedu.com
# Based on AdSense Audit Report: 92/100
# Date: February 25, 2026
# ─────────────────────────────────────────────────────
#
# 3 issues to fix, in this order:
#
# FIX 1 — CRITICAL: Mismatched AdSense pub-IDs
#          layout.tsx has:   pub-9023402446754026
#          ads.txt has:      pub-8665355844991273
#          These MUST match or AdSense cannot verify ownership
#          → Blocks approval by itself. Fix this today.
#
# FIX 2 — HIGH: 15 older articles missing trust block
#          (Disclaimer + Updated Date + Author Byline)
#          Only Meenakshi's recent articles have these.
#          Selvan's older articles are missing all three.
#
# FIX 3 — MEDIUM: Missing internal links in older articles
#          Each article needs at least one internal link
#          to a related article on the site.
#
# Run in order: Fix 1 → push → Fix 2 → push → Fix 3 → push
# ─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
FIX 1 — CRITICAL: Sync the AdSense pub-ID mismatch
         Do this first. Do not submit until done.
═══════════════════════════════════════════════════════

⚠️  BEFORE RUNNING THIS PROMPT:
    You need to know which pub-ID is the correct one.
    Log into your Google AdSense account at
    adsense.google.com → Account → Account information
    Your correct pub-ID is shown there.
    It will be one of:
      pub-9023402446754026  (currently in layout.tsx)
      pub-8665355844991273  (currently in ads.txt)
    Have the correct ID ready before running this prompt.

Paste into Cursor Composer:

─────────────────────────────────────────────────────
I have a critical AdSense configuration issue.
My AdSense pub-ID is mismatched between two files.

The current state is:
- layout.tsx contains:  pub-9023402446754026
- public/ads.txt contains: pub-8665355844991273

These must be identical or Google cannot verify
that I own and authorise this site to show ads.

I have checked my AdSense account and my correct
pub-ID is: [PASTE YOUR CORRECT PUB-ID HERE]

Please do the following:

STEP 1 — Find the AdSense script in layout.tsx
Open src/app/layout.tsx (this is an App Router project).
Find the line that contains the pub-ID.
It will look something like:
  <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
or similar. Show me the exact line.

STEP 2 — Find public/ads.txt
Open public/ads.txt.
Show me its current content.

STEP 3 — Fix both files
Update BOTH files so they contain the correct pub-ID.
Do not change anything else in either file.

STEP 4 — Show me the before and after for both files
Show me exactly what changed — the old line and the
new line in each file.

STEP 5 — Verify
After the fix, confirm that both files now contain
exactly the same pub-ID with no extra spaces or
characters.
─────────────────────────────────────────────────────

After running: git add src/app/layout.tsx public/ads.txt
               git commit -m "fix: sync AdSense pub-ID in layout.tsx and ads.txt"
               git push

Verify on live site:
  kalyanaveedu.com/ads.txt — open in browser
  Confirm it shows the correct pub-ID


═══════════════════════════════════════════════════════
FIX 2 — HIGH: Add trust block to older articles
         (15 articles by சித்ரை செல்வன் are missing
          Disclaimer, Updated Date, and Author Byline)
═══════════════════════════════════════════════════════

This fix has two parts:
  Part A — Create a reusable TrustBlock component
  Part B — Inject it into all older articles at once

Run Part A first, then Part B.

─── PART A: Create the TrustBlock component ───

Paste into Cursor Composer:

─────────────────────────────────────────────────────
I need to create a reusable TrustBlock component for
kalyanaveedu.com (Next.js App Router, TypeScript).

This component will be added to older articles that
are missing: Author Byline, Last Updated Date, and
Informational Disclaimer.

First, look at one of the newer articles by
மீனாட்சி சுந்தரம் that already has trust signals.
Find it in the project and show me how the trust
markers are currently implemented there — I want
the new component to match that style exactly.

Then create a new file:
  src/components/TrustBlock.tsx

The component should accept these props:
  author: string        — author name in Tamil
  updatedDate: string   — date string e.g. "பிப்ரவரி 2026"
  disclaimer?: string   — optional custom disclaimer text

If no custom disclaimer is provided, use this default
Tamil disclaimer text:

"இந்தக் கட்டுரை பொதுவான தகவல் நோக்கங்களுக்காக
மட்டுமே வழங்கப்படுகிறது. திருமண சடங்குகள் மற்றும்
மரபுகள் சமூகம், பிராந்தியம் மற்றும் குடும்பத்திற்கு
ஏற்ப வேறுபடலாம். குறிப்பிட்ட நடைமுறைகளுக்கு
உங்கள் குடும்பப் பெரியவர்கள் அல்லது சமூக
வழிகாட்டிகளை அணுகவும்."

The component should render:
1. Author byline — "ஆசிரியர்: [author name]"
2. Last updated — "கடைசியாக புதுப்பிக்கப்பட்டது: [date]"
3. Disclaimer text in a visually distinct box
   (match the styling pattern of the newer articles)

Style it to match the existing site design exactly —
use whatever Tailwind classes the newer articles use
for trust signals. If unsure, use a simple bordered
box with slightly muted background color.

Show me the complete TrustBlock.tsx file when done.
─────────────────────────────────────────────────────


─── PART B: Inject TrustBlock into all older articles ───

⚠️  Run Part A first and confirm TrustBlock.tsx exists.

Paste into Cursor Composer:

─────────────────────────────────────────────────────
The TrustBlock component now exists at
src/components/TrustBlock.tsx.

I need to inject it into all older articles written
by சித்ரை செல்வன் that are missing trust signals.

STEP 1 — Find all older articles
Search the project for article files that:
- Have சித்ரை செல்வன் as the author
OR
- Do NOT already import or use TrustBlock
OR  
- Do NOT already have author/date/disclaimer content

List every file you find with its path.
Show me the list before making any changes.

STEP 2 — Confirm with me
After listing the files, ask me:
"I found [N] articles to update. Should I proceed
with injecting the TrustBlock into all of them?"
Wait for my confirmation before continuing.

STEP 3 — Inject TrustBlock into each article
For each article file identified:

a) Open the file and find the correct insertion point.
   The TrustBlock should appear:
   - AFTER the article title/heading
   - BEFORE the first content paragraph
   This matches where trust signals appear in the
   newer Meenakshi articles.

b) Add the import at the top of the file:
   import TrustBlock from '@/components/TrustBlock';

c) Add the component in the JSX:
   <TrustBlock
     author="சித்ரை செல்வன்"
     updatedDate="பிப்ரவரி 2026"
   />

d) Do not change anything else in the article —
   do not rewrite content, do not change headings,
   do not alter any existing styling.

STEP 4 — Report what you did
After all injections, show me:
- Total files updated: [number]
- List of all updated file paths
- One example showing before/after for one article

STEP 5 — TypeScript check
Run: npx tsc --noEmit
Show output. Fix any errors.
─────────────────────────────────────────────────────

After running: git add .
               git commit -m "feat: inject TrustBlock into older articles (Selvan)"
               git push


═══════════════════════════════════════════════════════
FIX 3 — MEDIUM: Add internal links to older articles
         (each article needs at least one link to
          a related article on the site)
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
I need to add at least one internal link to each
older article on kalyanaveedu.com that is currently
missing them.

STEP 1 — Map all articles and their topics
First, list all article files in this project with:
- File path
- Article title (from the H1 or page title)
- Topic/category (wedding ritual, financial planning,
  gold buying, etc.)

Show me this list before making any changes.

STEP 2 — Identify articles missing internal links
For each article, check whether it already contains
a next/link Link component pointing to another
article on the site.

If an article has NO internal links at all, mark it
as "needs internal link".

List all articles that need internal links.

STEP 3 — Suggest link placements
For each article that needs a link, suggest:
- Which other article on the site it should link to
  (choose the most contextually related article)
- Where in the article the link fits naturally
  (find a sentence or paragraph that mentions a
   related topic — the link should feel organic,
   not forced)

Show me your suggestions before making changes.
Ask me: "Here are my suggested internal links.
Should I proceed?" Wait for my confirmation.

STEP 4 — Add the links
For each article, add ONE internal link using
next/link at the most natural location.

The link should be:
- Inline within existing paragraph text where possible
  (link a relevant word or phrase, not a standalone
  "Read more" button)
- In Tamil link text that fits the sentence naturally
- Using next/link: import Link from 'next/link'

Do not add more than 2 internal links per article.
Do not add the same destination link to every article.

STEP 5 — Show changes
For each updated file show:
  File: [path]
  Linked to: [destination article]
  Link text: [Tamil text]
  Context: [the sentence it was added to]

STEP 6 — TypeScript check
Run: npx tsc --noEmit
Show output. Fix any errors.
─────────────────────────────────────────────────────

After running: git add .
               git commit -m "feat: add internal links to older articles for SEO silos"
               git push


═══════════════════════════════════════════════════════
AFTER ALL 3 FIXES — Final verification
═══════════════════════════════════════════════════════

Once all three fixes are pushed and Vercel deploys:

── Verify Fix 1 (pub-ID sync) ──
  [ ] Open kalyanaveedu.com/ads.txt in browser
  [ ] Confirm the pub-ID matches your AdSense account
  [ ] Open page source of any page — confirm layout.tsx
      pub-ID matches ads.txt

── Verify Fix 2 (trust blocks) ──
  [ ] Open one of the older Selvan articles
  [ ] Confirm author byline is visible
  [ ] Confirm updated date is visible
  [ ] Confirm disclaimer is visible
  [ ] Confirm it matches the style of Meenakshi articles

── Verify Fix 3 (internal links) ──
  [ ] Open one older article
  [ ] Confirm at least one internal link is present
  [ ] Click the link — confirm it goes to a real page
  [ ] Confirm no broken links (all href targets exist)

── Re-run the audit ──
  Open Cursor and paste the AUDIT PROMPT from
  antigravity-audit-prompts.md

  Expected score after fixes:
    Technical Signals:  7/10 → 10/10  (+3 points)
    E-E-A-T Signals:    5/10 → 9/10   (+4 points)
    Estimated new total: 92 → 99/100

── Then submit to AdSense ──
  Run submission-readiness.md for final gate check
  Submit once — then wait patiently (2–4 weeks)
  Do NOT resubmit during review period
