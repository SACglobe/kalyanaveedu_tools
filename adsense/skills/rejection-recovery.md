---
skill_id: kalyanaveedu_rejection_recovery
skill_type: recovery_audit
skill_version: 1.0
last_updated: 2026-02-19
priority: critical
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
context: repeated_rejections
rejection_count: 4_or_more
triggered_by: human_controller
feeds_into:
  - site-page-writer.md
  - editorial-writer.md
  - technical-compliance.md
  - submission-readiness.md
depends_on:
  - guardrails.md
  - all_skills
---

# 🔄 Skill 13 — Rejection Recovery (Repeated Rejection Protocol)

## Purpose
Perform a **forensic audit** of kalyanaveedu.in to identify every
remaining issue that is causing repeated AdSense rejection — before
any further submission attempt is made.

**This skill exists because you have been rejected 4+ times.**
That is not a content problem alone. It is a site-completeness,
content-quality, and submission-timing problem combined.

The goal of this skill is to find every problem, fix every problem,
and not submit again until this audit returns a full CLEAR.

**DO NOT RESUBMIT until this skill returns: `submission_cleared: true`**

---

## 🚨 Critical Context — Why Repeated Rejections Are Dangerous

After 4+ rejections on the same domain:

- Google's system flags your domain for heightened scrutiny
- Each new submission is reviewed more strictly than the last
- Resubmitting quickly without genuine fixes extends the review cycle
- A pattern of rapid resubmissions can result in longer cooldown periods
- The threshold for approval gets higher with each failed attempt

**Minimum wait after this audit's fixes are live: 4 weeks**
**Do not submit before 4 weeks have passed from the last fix going live.**

---

## 🗂️ Rejection Reason: "Insufficient Content" — Full Interpretation

Google's "insufficient content" covers three separate failure modes.
Most sites fix only one and keep getting rejected.

| Failure Mode                    | What Google Actually Sees                              | Your Status    |
|---------------------------------|--------------------------------------------------------|----------------|
| Article count too low           | Fewer than 15–20 solid articles                        | At risk (6–10) |
| Article quality signals weak    | Thin, AI-like, or surface-level content                | Needs audit    |
| Site completeness insufficient  | Missing About Us, Contact, or other mandatory pages    | CONFIRMED ISSUE|

**Your confirmed site gaps:** No About Us · No Contact page
**These alone can cause "insufficient content" rejection regardless of articles.**

---

## 📋 AUDIT SECTION 1 — Site Pages (Immediate Action Required)

### 1A — About Us Page

**Your status: MISSING — This is almost certainly contributing to every rejection.**

A website with no About Us page signals to Google:
- No real editorial team exists
- The site is a content farm or automated operation
- There is no human accountability for the content

**Required action:** Build About Us using `site-page-writer.md` immediately.
**Do not submit again without this page live.**

Audit checklist (run after page is created):
- [ ] Page exists and returns 200
- [ ] Specific to kalyanaveedu.in — not a template
- [ ] Names Tamil Nadu wedding traditions as editorial focus
- [ ] Describes editorial team or author (pen name acceptable)
- [ ] States research approach (authoritative cultural sources)
- [ ] States Tamil-primary language policy and why
- [ ] Word count 250–400
- [ ] Written in Tamil script
- [ ] No generic language ("passionate team", "quality content")
- [ ] Linked from site navigation and footer

**Status:** ❌ MISSING → Route to site-page-writer.md → Validate → Publish

---

### 1B — Contact Page

**Your status: MISSING — Common standalone rejection trigger.**

Google's reviewer needs to know a real person can be reached.
No contact method = abandoned or fake site signal.

**Required action:** Build Contact page using `site-page-writer.md` immediately.

Audit checklist (run after page is created):
- [ ] Page exists and returns 200
- [ ] Real, monitored email address (not placeholder)
- [ ] Response timeframe stated
- [ ] kalyanaveedu.in named on the page
- [ ] Cultural feedback welcome stated
- [ ] Linked from site navigation and footer
- [ ] No social media DMs as sole contact method

**Status:** ❌ MISSING → Route to site-page-writer.md → Validate → Publish

---

### 1C — Privacy Policy

**Your status: Live — but must be audited for AdSense-specific requirements.**

Most template privacy policies do NOT name Google AdSense.
This is one of the most common hidden rejection causes.

Audit checklist:
- [ ] Google AdSense named explicitly as third-party ad provider
- [ ] Cookies section covers first-party AND third-party cookies
- [ ] Data collection described specifically (not vaguely)
- [ ] Children's privacy clause present (no targeting under 13)
- [ ] Real contact email for privacy queries
- [ ] Effective date present and current (2024 or later)
- [ ] kalyanaveedu.in named throughout (not generic "this website")
- [ ] No placeholder company names from template source
- [ ] Google Analytics named if installed on site

**If Google AdSense is NOT named:** Route to site-page-writer.md for rewrite.
**Status:** ⚠️ LIVE — run audit checklist → fix if needed

---

### 1D — Terms of Use

**Your status: Live — run audit checklist.**

Audit checklist:
- [ ] kalyanaveedu.in named specifically throughout
- [ ] Content ownership clearly stated
- [ ] Reproduction prohibition present
- [ ] Indian law / Tamil Nadu jurisdiction stated
- [ ] No placeholder company names from template
- [ ] Effective date present

**Status:** ⚠️ LIVE — run audit checklist → fix if needed

---

### 1E — Disclaimer

**Your status: Live — run audit checklist.**

Audit checklist:
- [ ] Informational/cultural purpose stated
- [ ] Not presented as religious authority
- [ ] Regional variation acknowledged
- [ ] Distinct from any article-level disclaimer (not identical)
- [ ] Written in Tamil script

**Status:** ⚠️ LIVE — run audit checklist → fix if needed

---

### 1F — Cookie Policy

**Your status: Unknown — check if separate from Privacy Policy.**

Audit checklist:
- [ ] Exists as a standalone page (not merged into privacy policy)
- [ ] Google AdSense cookies named explicitly
- [ ] User opt-out described or linked
- [ ] Effective date present

**If missing:** Route to site-page-writer.md → create → validate → publish
**Status:** ❓ UNKNOWN — verify → create if missing

---

## 📋 AUDIT SECTION 2 — Article Quality Audit

**Context:** With 6–10 articles after 4+ rejections, every single article
must be examined. One thin or AI-flagged article can compromise the entire site.

### For Each Published Article, Check:

#### 2A — Word Count and Depth
- [ ] Minimum 1200 words (count actual words, not estimate)
- [ ] Explains the *why* behind traditions — not just what happens
- [ ] At least 4 distinct sections with descriptive subheadings
- [ ] Narrative flow — not a list of bullet points

#### 2B — Human Writing Signals
- [ ] Author name (pen name) present on the article
- [ ] Publication date visible on the article
- [ ] At least one culturally specific detail unique to this article
- [ ] Paragraph lengths vary — not all the same approximate length
- [ ] No blocked AI phrases: "In this article", "Let us explore",
      "This comprehensive guide", "In conclusion", "Furthermore"
- [ ] No symmetrical section structure (all sections same length)

#### 2C — Trust Signals
- [ ] Informational disclaimer present
- [ ] At least one internal link to another article
- [ ] Meta title present (55–60 characters, in Tamil)
- [ ] Meta description present (145–160 characters, in Tamil)
- [ ] No calls to action anywhere in the article

#### 2D — Cultural Signals (Tamil-primary)
- [ ] Written in Tamil script (not Tanglish or Roman transliteration)
- [ ] Ritual names in correct Tamil script
- [ ] Regional or community focus clearly stated
- [ ] No pan-Indian generalizations presented as Tamil-specific

### Article Audit Output (per article):

```yaml
article_audit:
  article_id: <string>
  title: <string>
  word_count: integer
  word_count_compliant: true | false  # must be 1200+
  author_present: true | false
  date_present: true | false
  human_signals_detected: integer  # count of positive signals
  ai_risk_signals_detected: integer  # count of risk signals
  blocked_phrases_found: [<list>]
  trust_signals_complete: true | false
  tamil_compliance: true | false
  article_decision: KEEP | REWRITE | REMOVE
  issues:
    - <specific issue and required fix>
```

### Article Decision Rules

| Decision | Condition                                                        |
|----------|------------------------------------------------------------------|
| KEEP     | Passes all checks with 0–1 minor issues                         |
| REWRITE  | 2–4 fixable issues — send to editorial-writer.md Mode B         |
| REMOVE   | 5+ issues OR AI-flag risk is high — unpublish before submission  |

**A REMOVE article must be unpublished before the next submission.**
**A live article with high AI-detection risk actively hurts your approval chances.**

---

## 📋 AUDIT SECTION 3 — Technical Signals

### 3A — Google Search Console

**Your status: Not set up — this is a significant trust gap.**

Google expects site owners who are serious about their web presence
to have Search Console set up. It signals:
- You are actively managing the site
- You care about how Google sees your content
- You are a real operator, not an automated content farm

**Required actions:**
1. Set up Google Search Console for kalyanaveedu.in
2. Verify ownership (HTML tag, DNS record, or Google Analytics)
3. Submit your sitemap once verified
4. Check for any crawl errors before submitting to AdSense
5. Wait at least 2 weeks after Search Console setup before AdSense submission

**Status:** ❌ NOT SET UP → Set up immediately → Wait 2 weeks → Then proceed

---

### 3B — robots.txt

Audit checklist:
- [ ] robots.txt accessible at kalyanaveedu.in/robots.txt
- [ ] /tools/ directory blocked if tools exist: `Disallow: /tools/`
- [ ] No editorial content accidentally blocked
- [ ] Sitemap URL declared in robots.txt

---

### 3C — Sitemap

Audit checklist:
- [ ] sitemap.xml accessible and submitted to Search Console
- [ ] Only published editorial articles in sitemap
- [ ] No draft, noindex, or tool pages in sitemap
- [ ] All sitemap URLs return 200 (not 404 or 301)

---

### 3D — Page Speed

Audit checklist:
- [ ] Articles load under 3 seconds on mobile
- [ ] Tamil font renders without delay (no flash of unstyled text)
- [ ] Images are compressed
- [ ] No render-blocking scripts on article pages

---

### 3E — Monetization Cleanliness

**Critical — any ad code before approval = automatic rejection.**

Audit checklist:
- [ ] No AdSense ad unit code (`adsbygoogle`) anywhere on site
- [ ] No affiliate links anywhere on site
- [ ] No pop-ups or interstitials on any page
- [ ] No auto-play video or audio
- [ ] No email capture forms

---

### 3F — Navigation and Links

Audit checklist:
- [ ] Site navigation menu works on mobile and desktop
- [ ] All menu links return 200 (not 404)
- [ ] Footer links to Privacy, Terms, Disclaimer, Contact all work
- [ ] No broken internal links in published articles
- [ ] About Us and Contact accessible from homepage navigation

---

## 📋 AUDIT SECTION 4 — Submission Timing Rules

After all fixes are live, the following timing rules apply:

| Rule                                                | Requirement              |
|-----------------------------------------------------|--------------------------|
| Minimum wait after last fix goes live               | 4 weeks                  |
| Minimum wait after Search Console setup             | 2 weeks                  |
| Minimum new articles published before resubmission  | 5 new articles           |
| Minimum total articles before resubmission          | 15 articles              |
| Days between resubmissions (if rejected again)      | 30 days minimum          |

**Why 4 weeks?**
Google's crawler needs time to re-index your improved site.
Submitting too quickly means the reviewer sees cached/old versions of your pages.
Give Google time to see the fixed site before you ask for approval.

---

## 📤 Audit Output Contract

```yaml
rejection_recovery_audit:
  domain: kalyanaveedu.in
  audit_date: <ISO 8601>
  rejection_count: 4+
  last_rejection_reason: insufficient_content

  site_pages:
    about_us: MISSING | PASS | FAIL
    contact: MISSING | PASS | FAIL
    privacy_policy: PASS | FAIL
    terms: PASS | FAIL
    disclaimer: PASS | FAIL
    cookie_policy: MISSING | PASS | FAIL
    pages_cleared: integer  # must be 6

  articles:
    total_published: integer
    keep: integer
    rewrite: integer
    remove: integer
    articles_cleared: integer  # must equal total_published after removals
    minimum_met: true | false  # must have 15+ after rewrites/removals

  technical:
    search_console: SET_UP | NOT_SET_UP
    robots_txt: PASS | FAIL
    sitemap: PASS | FAIL
    page_speed: PASS | FAIL
    monetization_clean: PASS | FAIL
    navigation: PASS | FAIL
    technical_cleared: true | false

  timing:
    fixes_completion_date: <estimated ISO 8601>
    earliest_resubmission_date: <fixes_date + 4 weeks>
    search_console_cleared_date: <setup_date + 2 weeks>
    new_articles_needed: integer  # to reach 15 minimum

  blocking_issues:
    - priority: CRITICAL | HIGH | MEDIUM
      area: site_pages | articles | technical | timing
      issue: <specific description>
      fix_required: <specific actionable fix>
      skill_to_use: <skill name>
      estimated_time: <days to complete>

  submission_cleared: true | false
  earliest_safe_submission: <ISO 8601 date>
  recovery_summary: <two sentence honest assessment of path to approval>
```

---

## 🗺️ Recovery Roadmap (Your Specific Situation)

Based on your situation — 4+ rejections, insufficient content reason,
missing About Us and Contact, 6–10 articles, Search Console not set up —
here is your specific recovery path:

```
WEEK 1
  Day 1–2:  Set up Google Search Console
  Day 1–3:  Create About Us page (site-page-writer → site-page-validator)
  Day 1–3:  Create Contact page (site-page-writer → site-page-validator)
  Day 2–4:  Audit Privacy Policy — add AdSense if missing
  Day 3–5:  Create Cookie Policy if missing
  Day 3–7:  Audit all 6–10 existing articles — identify REWRITE / REMOVE

WEEK 2
  Day 8–14: Rewrite flagged articles (editorial-writer Mode B)
  Day 8–14: Remove articles that cannot be salvaged
  Day 8–14: Publish 3 new high-quality articles

WEEK 3–4
  Publish 5+ more new articles (reaching 15 total minimum)
  Confirm Search Console is indexing new pages correctly
  Check for crawl errors in Search Console

WEEK 5 (Earliest safe resubmission)
  Run submission-readiness.md — full site audit
  Confirm all checks green
  Submit once — then wait patiently (2–4 weeks for review)
  Do NOT resubmit during review period
```

---

## 🚨 Final Rules Before Resubmission

| Rule                                              | Status Required     |
|---------------------------------------------------|---------------------|
| About Us page live                                | ✅ Required          |
| Contact page live                                 | ✅ Required          |
| All 6 site pages validated PASS                   | ✅ Required          |
| Minimum 15 articles published                     | ✅ Required          |
| All articles audited — no REMOVE articles live    | ✅ Required          |
| Google Search Console set up and verified         | ✅ Required          |
| Sitemap submitted to Search Console               | ✅ Required          |
| Minimum 4 weeks since last fix went live          | ✅ Required          |
| submission-readiness.md returns SUBMIT            | ✅ Required          |
| No ad code anywhere on site                       | ✅ Required          |

**All rules must be met. Missing even one increases rejection risk significantly.**

---
## End of Skill
