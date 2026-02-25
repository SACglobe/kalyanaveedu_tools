# Antigravity Audit Prompts — kalyanaveedu.com
# Run these in Cursor to get your AdSense approval score
# ─────────────────────────────────────────────────────
# Stack: Next.js Pages Router · TypeScript · Vercel
# Skills used: adsense-score-auditor.md + adsense-weak-page-improver.md
# ─────────────────────────────────────────────────────
#
# HOW TO USE
# Step 1: Paste AUDIT PROMPT into Cursor Composer → run
# Step 2: Read your score and weak page report
# Step 3: For each weak page, paste the matching
#         IMPROVE PROMPT → run → apply fix → push
# Step 4: Paste AUDIT PROMPT again → confirm score went up
# Step 5: Repeat until score ≥ 85 → submit to AdSense
# ─────────────────────────────────────────────────────


═══════════════════════════════════════════════════════
AUDIT PROMPT — Run this to get your score out of 100
═══════════════════════════════════════════════════════

Paste into Cursor Composer:

─────────────────────────────────────────────────────
You are auditing kalyanaveedu.com for Google AdSense
approval readiness. This is a Tamil-primary cultural
website about South Indian wedding traditions.
The site has been rejected by AdSense 3 times.
Stack: Next.js Pages Router, TypeScript, Vercel.

Read the actual project files to conduct this audit.
Do not guess or estimate — read the real content.

━━ STEP 1: Read all site pages ━━

Find and read the full content of these pages:
- /pages/about-us.tsx (or about-us folder)
- /pages/contact.tsx
- /pages/cookie-policy.tsx
- /pages/privacy-policy.tsx (or equivalent Tamil name)
- /pages/terms.tsx (or equivalent)
- /pages/disclaimer.tsx (or equivalent)

For each page, note:
- Does it exist?
- Is the content in Tamil script?
- Does the Privacy Policy mention "Google AdSense" 
  by name?
- Does the Contact page show a visible email address
  as plain text (not just inside a form)?
- Does the About Us describe a specific editorial 
  mission — or is it generic?

━━ STEP 2: Read all published articles ━━

Find all article pages in /pages/ or wherever 
articles are stored in this project.

For each article, note:
- Word count (count actual words)
- Does it have an author name?
- Does it have a publication date?
- Does it have an informational disclaimer?
- Does it have at least one internal link?
- Does it contain any of these AI phrases:
  "In this article", "Let us explore",
  "This comprehensive guide", "In conclusion",
  "Furthermore", "It is worth noting",
  "In today's world", "Let's delve"
- Is it written in Tamil script or Tanglish?

━━ STEP 3: Read technical files ━━

Check these and report status:
- /public/robots.txt — does it exist and is it correct?
- sitemap.xml — does it exist? (check /public/ folder)
- Layout component — are About Us and Contact in nav?
- Layout footer — are Privacy, Terms, Disclaimer, 
  Cookie Policy, About Us, Contact all linked?
- /pages/_document.tsx — does it set lang="ta" 
  and charSet="utf-8"?
- Is there any adsbygoogle code anywhere in the project?
  (search all files for "adsbygoogle")
- Is there any affiliate link code? 
  (search for common affiliate patterns)

━━ STEP 4: Score the site ━━

After reading everything, score the site using
this exact scoring system:

DIMENSION 1 — Site Completeness (out of 25):
  About Us:       6=specific+Tamil+team / 3=generic / 0=missing
  Contact:        6=visible email / 3=form only / 0=missing
  Privacy Policy: 5=AdSense named / 3=exists no AdSense / 0=missing
  Cookie Policy:  4=AdSense named / 2=exists no AdSense / 0=missing
  Terms:          2=site-specific / 1=generic / 0=missing
  Disclaimer:     2=present / 0=missing
  CATASTROPHIC: About Us missing = 0 for whole dimension
  CATASTROPHIC: Contact missing = dimension capped at 10

DIMENSION 2 — Content Quality (out of 25):
  Avg word count: 6=1500+ / 4=1200-1499 / 2=800-1199 / 0=<800
  Human writing:  6=strong / 3=some signals / 0=AI detected
  Cultural depth: 5=explains WHY / 3=surface / 0=generic
  Author+date:    4=all articles / 2=some / 0=none
  Trust signals:  4=disclaimer+link all / 2=partial / 0=none
  CATASTROPHIC: AI phrases in 3+ articles = capped at 10

DIMENSION 3 — Content Inventory (out of 15):
  Article count:  6=20+ / 4=15-19 / 2=10-14 / 0=<10
  Unique topics:  4=all unique / 2=1-2 overlaps / 0=3+ overlaps
  Ritual cats:    3=all 4 / 2=3 cats / 1=2 / 0=1
  Regional cover: 2=3+ regions / 1=2 regions / 0=1 region

DIMENSION 4 — Technical (out of 20):
  Search Console: 5=verified+sitemap / 2=verified only / 0=not set up
  robots.txt:     3=clean / 1=present but issues / 0=missing
  Sitemap:        3=correct / 1=exists with issues / 0=missing
  Page speed:     3=under 3s / 2=3-5s / 0=over 5s (estimate from build)
  Meta tags:      3=all present+unique / 1=some missing / 0=none
  Tamil rendering:3=clean / 1=minor issues / 0=broken
  CATASTROPHIC: ad code found = 0 for whole dimension

DIMENSION 5 — Tamil Language (out of 10):
  Articles Tamil: 4=all / 2=most / 0=Tanglish detected
  Pages Tamil:    3=all site pages / 1=mixed / 0=English only
  Meta in Tamil:  3=all / 1=some / 0=none

DIMENSION 6 — Policy Cleanliness (out of 5):
  No ad code:     2=clean / 0=found
  No affiliates:  1=clean / 0=found
  No popups:      1=clean / 0=found
  No email forms: 1=clean / 0=found

━━ STEP 5: Produce the report ━━

Output the results in this EXACT format:

═══════════════════════════════════════════════
KALYANAVEEDU.COM — ADSENSE APPROVAL AUDIT
Audit Date: [today's date]
═══════════════════════════════════════════════

📊 SCORES
─────────────────────────────────────────────
Dimension 1 — Site Completeness:    [X] / 25
Dimension 2 — Content Quality:      [X] / 25
Dimension 3 — Content Inventory:    [X] / 15
Dimension 4 — Technical Signals:    [X] / 20
Dimension 5 — Tamil Language:       [X] / 10
Dimension 6 — Policy Cleanliness:   [X] / 5
─────────────────────────────────────────────
TOTAL SCORE:                        [X] / 100
APPROVAL PROBABILITY:               [label]
SUBMISSION STATUS:  ✅ SUBMIT  or  ❌ DO NOT SUBMIT
═══════════════════════════════════════════════

⚠️ CATASTROPHIC BLOCKS (if any)
[List any catastrophic failures that block approval
regardless of total score. If none, write: None.]

🔴 WEAK PAGES — PRIORITY FIX ORDER
[List every page/article with score issues, ordered
by score_lost from highest to lowest]

Rank 1: [Page name]
  Score: [current] / [max possible]
  Points lost: [number]
  Issues:
    • [Specific issue 1] — Severity: [level] — Score impact: [points]
    • [Specific issue 2] — Severity: [level] — Score impact: [points]
  Fix with: adsense-weak-page-improver.md

Rank 2: [Page name]
  [same format]

[continue for all weak pages]

📈 IF YOU FIX THE TOP 3 WEAK PAGES:
  Estimated new score: [X] / 100
  Estimated approval probability: [label]

🎯 YOUR 3 MOST IMPACTFUL FIXES RIGHT NOW:
  1. [Highest impact fix — page and what to change]
  2. [Second highest impact fix]
  3. [Third highest impact fix]

📅 HONEST TIMELINE:
  Estimated weeks to reach score 85+: [number]
  Earliest safe submission date: [date]
═══════════════════════════════════════════════

Be specific in the weak pages section. Do not write
"content needs improvement" — write exactly what is
wrong on that specific page and what needs to change.
─────────────────────────────────────────────────────

STOP after the audit report. Do not make any changes
to the project files during this audit prompt.


═══════════════════════════════════════════════════════
IMPROVE PROMPT — Run this for each weak page
(run one at a time, in rank order from the audit)
═══════════════════════════════════════════════════════

⚠️  Before using this prompt:
    Replace these placeholders with the actual values
    from your audit report:
    [PAGE_NAME] — e.g. "About Us" or "article on Muhurtham"
    [FILE_PATH] — e.g. "/pages/about-us.tsx"
    [ISSUES_LIST] — copy the exact issues from audit output
    [SEVERITY] — from the audit output
    [SCORE_LOST] — number of points lost on this page

Paste into Cursor Composer:

─────────────────────────────────────────────────────
I need to improve a specific weak page identified
by my AdSense approval audit. This is a targeted
fix — improve only what is flagged, nothing else.

PAGE TO FIX: [PAGE_NAME]
FILE PATH:   [FILE_PATH]

ISSUES TO FIX (from audit — fix ALL of these):
[ISSUES_LIST]

SEVERITY: [SEVERITY]
POINTS LOST: [SCORE_LOST]

━━ RULES FOR THIS FIX ━━

1. Read the current file at [FILE_PATH] first.
   Show me its current content.

2. Fix ONLY the issues listed above.
   Do not rewrite sections that were not flagged.
   Do not change the overall page structure.
   Do not change any styling or className values.

3. For each fix, show me:
   BEFORE: [the exact text or code that was wrong]
   AFTER:  [the exact replacement text or code]

4. If the fix is a content issue (Tamil text, missing
   section, generic language):
   - Write the replacement in Tamil script
   - Match the tone and style of the existing content
   - Do not introduce English prose in a Tamil page

5. If the fix is a technical issue (missing meta tag,
   broken link, missing attribute):
   - Make the minimal code change required
   - Match the TypeScript patterns in the file

6. After making all fixes:
   - Show me the complete updated file
   - List every change made with before/after
   - Run: npx tsc --noEmit
   - Show the TypeScript output — fix any errors

7. Estimate: if these fixes are applied, how many
   of the [SCORE_LOST] lost points will be recovered?

Do not push or deploy — I will review the changes
first and deploy when I am satisfied.
─────────────────────────────────────────────────────

AFTER EACH IMPROVE PROMPT:
1. Review the changes Antigravity made
2. If satisfied: git add [FILE_PATH] && git commit
3. After all weak pages are fixed: git push
4. Vercel deploys automatically
5. Run the AUDIT PROMPT again to confirm score rose
6. Repeat until score ≥ 85
7. Then run submission-readiness.md → submit


═══════════════════════════════════════════════════════
SCORE TRACKING — fill this in as you improve pages
═══════════════════════════════════════════════════════

Use this table to track your progress across audit runs.

| Audit Run | Date | Score | Approval Probability | Decision     |
|-----------|------|-------|----------------------|--------------|
| Run 1     |      |  /100 |                      |              |
| Run 2     |      |  /100 |                      |              |
| Run 3     |      |  /100 |                      |              |
| Run 4     |      |  /100 |                      |              |
| Run 5     |      |  /100 |                      |              |

Target: score ≥ 85 before submitting to AdSense.
Given 3 prior rejections, do not submit below 85.
