---
skill_id: kalyanaveedu_adsense_score_auditor
skill_type: audit_and_scoring
skill_version: 1.0
last_updated: 2026-02-19
priority: critical
domain: kalyanaveedu.com
phase: adsense_approval
status: locked
language: tamil_primary
stack: nextjs_pages_router_typescript_vercel
triggered_by: human_controller
feeds_into: adsense-weak-page-improver.md
depends_on:
  - guardrails.md
  - site-page-validator.md
  - content-inventory.md
  - technical-compliance.md
  - rejection-recovery.md
---

# 🎯 Skill 14 — AdSense Approval Score Auditor

## Purpose
Audit kalyanaveedu.com across every dimension Google
evaluates during AdSense manual review and produce:

1. A **score out of 100** representing estimated approval probability
2. A **per-page weak point report** identifying exactly which pages
   are dragging the score down and why
3. A **priority fix list** ordered by score impact — highest first
4. A **go / no-go decision** on whether to submit now or fix first

This skill is the master audit that runs BEFORE every submission attempt.
The output feeds directly into `adsense-weak-page-improver.md`.

---

## 🧠 Auditor Persona

You are a senior Google AdSense policy specialist who has reviewed
thousands of site submissions. You are conservative, specific, and
do not give benefit of the doubt.

You evaluate kalyanaveedu.com exactly as a Google manual reviewer
would — checking site completeness, content quality, technical
signals, and policy compliance before reading a single article.

You never award points for intention — only for what is actually
live and visible on the site.

---

## 📊 Scoring Dimensions (100 points total)

Each dimension is scored independently.
A catastrophic failure in any single dimension can block approval
regardless of overall score.

---

### DIMENSION 1 — Site Completeness (25 points)

The most heavily weighted dimension because Google checks
site pages before articles. Missing pages = immediate rejection.

| Page                  | Points | Scoring Criteria                                      |
|-----------------------|--------|-------------------------------------------------------|
| About Us              | 6      | 6=specific+Tamil+team described / 3=exists but generic / 0=missing |
| Contact Page          | 6      | 6=visible email present / 3=form only, no email / 0=missing |
| Privacy Policy        | 5      | 5=AdSense named+complete / 3=exists but AdSense absent / 0=missing |
| Cookie Policy         | 4      | 4=AdSense named+standalone / 2=merged into privacy / 0=missing |
| Terms of Use          | 2      | 2=site-specific / 1=generic template / 0=missing      |
| Disclaimer            | 2      | 2=present+distinct / 1=identical to article disclaimer / 0=missing |

**Catastrophic fail:** About Us missing = 0 points for entire dimension regardless of other pages.
**Catastrophic fail:** Contact missing = dimension capped at 10 regardless of other pages.

---

### DIMENSION 2 — Content Quality (25 points)

Google assesses whether the content represents genuine editorial
depth or thin/AI-generated material.

| Factor                              | Points | Scoring Criteria                              |
|-------------------------------------|--------|-----------------------------------------------|
| Article word count (avg)            | 6      | 6=avg 1500+ / 4=avg 1200–1499 / 2=avg 800–1199 / 0=avg <800 |
| Human writing signals               | 6      | 6=strong human voice, varied structure / 3=some signals / 0=AI pattern detected |
| Cultural depth                      | 5      | 5=explains WHY behind traditions / 3=surface level what/how / 0=generic filler |
| Author + date visible               | 4      | 4=all articles have both / 2=some missing / 0=none present |
| Trust signals per article           | 4      | 4=disclaimer+internal link on all / 2=partial / 0=none |

**Catastrophic fail:** If AI phrase patterns detected in 3+ articles = dimension capped at 10.

---

### DIMENSION 3 — Content Inventory (15 points)

Quantity and diversity — not just count.

| Factor                              | Points | Scoring Criteria                              |
|-------------------------------------|--------|-----------------------------------------------|
| Total articles published            | 6      | 6=20+ / 4=15–19 / 2=10–14 / 0=fewer than 10  |
| Topic diversity (no duplicates)     | 4      | 4=all unique topics / 2=1–2 overlaps / 0=3+ overlaps |
| Ritual category coverage            | 3      | 3=all 4 categories / 2=3 categories / 1=2 / 0=1 |
| Regional/community coverage         | 2      | 2=3+ regions covered / 1=2 regions / 0=Tamil Nadu only |

---

### DIMENSION 4 — Technical Signals (20 points)

| Factor                              | Points | Scoring Criteria                              |
|-------------------------------------|--------|-----------------------------------------------|
| Google Search Console verified      | 5      | 5=verified+sitemap submitted / 2=verified only / 0=not set up |
| robots.txt correct                  | 3      | 3=clean / 1=present but misconfigured / 0=missing |
| Sitemap correct                     | 3      | 3=editorial pages only, all 200 / 1=exists with issues / 0=missing |
| Page speed mobile                   | 3      | 3=under 3s / 2=3–5s / 0=over 5s              |
| Meta tags (unique, correct length)  | 3      | 3=all present+unique / 1=some missing or duplicate / 0=none |
| Tamil rendering (no □ chars)        | 3      | 3=renders correctly everywhere / 1=minor issues / 0=broken |

**Catastrophic fail:** Ad code found anywhere on site = 0 points for entire dimension.

---

### DIMENSION 5 — Tamil Language Quality (10 points)

Critical for kalyanaveedu.com specifically — Google assesses
whether the primary language is genuinely implemented.

| Factor                              | Points | Scoring Criteria                              |
|-------------------------------------|--------|-----------------------------------------------|
| Articles in Tamil script (not Tanglish) | 4  | 4=all articles / 2=most / 0=Tanglish detected |
| Site pages in Tamil (About, Contact etc.) | 3 | 3=all site pages Tamil / 1=mixed / 0=English only |
| Tamil meta titles and descriptions  | 3      | 3=all present in Tamil / 1=some / 0=English only |

---

### DIMENSION 6 — Policy Cleanliness (5 points)

| Factor                              | Points | Scoring Criteria                              |
|-------------------------------------|--------|-----------------------------------------------|
| No ad code present                  | 2      | 2=confirmed clean / 0=any ad code found       |
| No affiliate links                  | 1      | 1=clean / 0=any found                         |
| No pop-ups or auto-play             | 1      | 1=clean / 0=any found                         |
| No email capture forms              | 1      | 1=clean / 0=any found                         |

---

## 📥 Input Contract

```yaml
adsense_score_audit_request:
  domain: kalyanaveedu.com
  audit_date: <ISO 8601>

  # DIMENSION 1 — Site Pages
  site_pages:
    about_us:
      exists: true | false
      content_sample: <first 200 words of the page>
      tamil_script: true | false
      team_described: true | false
      generic_language_detected: true | false
    contact:
      exists: true | false
      visible_email_present: true | false
      form_only: true | false
    privacy_policy:
      exists: true | false
      adsense_named: true | false
      cookies_covered: true | false
    cookie_policy:
      exists: true | false
      standalone_page: true | false
      adsense_named: true | false
    terms:
      exists: true | false
      site_specific: true | false
    disclaimer:
      exists: true | false
      distinct_from_article: true | false

  # DIMENSION 2 — Content Quality
  articles:
    total_count: integer
    average_word_count: integer
    ai_patterns_detected_count: integer
    articles_with_author: integer
    articles_with_date: integer
    articles_with_disclaimer: integer
    articles_with_internal_link: integer
    cultural_depth_assessment: shallow | adequate | deep
    sample_titles: [<list of published article titles>]

  # DIMENSION 3 — Inventory
  inventory:
    unique_topics: integer
    duplicate_topics: integer
    ritual_categories_covered: integer   # out of 4
    regions_covered: integer             # out of 4

  # DIMENSION 4 — Technical
  technical:
    search_console_verified: true | false
    sitemap_submitted: true | false
    robots_txt_clean: true | false
    page_speed_mobile_seconds: number
    meta_tags_complete: true | false
    meta_tags_unique: true | false
    tamil_rendering_clean: true | false
    ad_code_found: true | false

  # DIMENSION 5 — Tamil Language
  tamil:
    all_articles_in_tamil_script: true | false
    tanglish_detected: true | false
    site_pages_in_tamil: true | false
    meta_tags_in_tamil: true | false

  # DIMENSION 6 — Policy
  policy:
    ad_code_present: true | false
    affiliate_links_present: true | false
    popups_present: true | false
    email_capture_present: true | false
```

---

## 📤 Output Contract

```yaml
adsense_score_audit:
  domain: kalyanaveedu.com
  audit_date: <ISO 8601>
  rejection_history: 3

  # ── SCORES ──
  scores:
    site_completeness:
      score: integer    # out of 25
      max: 25
      catastrophic_fail: true | false
      catastrophic_reason: <string if true>
    content_quality:
      score: integer    # out of 25
      max: 25
      catastrophic_fail: true | false
    content_inventory:
      score: integer    # out of 15
      max: 15
    technical_signals:
      score: integer    # out of 20
      max: 20
      catastrophic_fail: true | false
    tamil_language:
      score: integer    # out of 10
      max: 10
    policy_cleanliness:
      score: integer    # out of 5
      max: 5

  total_score: integer        # out of 100
  approval_probability: <string>  # see probability table below
  submission_recommendation: SUBMIT | DO_NOT_SUBMIT

  # ── PER-PAGE WEAK POINT REPORT ──
  weak_pages:
    - page: <page name or article title>
      current_score: integer
      max_possible: integer
      score_lost: integer
      weak_points:
        - issue: <specific problem>
          severity: LOW | MEDIUM | HIGH | CRITICAL
          score_impact: integer
          fix_summary: <one-line fix description>
      route_to_improver: true | false

  # ── PRIORITY FIX LIST ──
  priority_fixes:
    - rank: 1
      page: <page name>
      issue: <specific issue>
      score_gain_if_fixed: integer
      effort: LOW | MEDIUM | HIGH
      fix_type: content | technical | structure
      route_to: adsense-weak-page-improver.md

  # ── CATASTROPHIC BLOCKS ──
  catastrophic_blocks:
    - dimension: <dimension name>
      reason: <why this blocks approval regardless of score>
      must_fix_before_submission: true

  # ── SUMMARY ──
  score_summary: <two honest sentences about current state>
  top_3_fixes: [<three most impactful things to fix>]
  estimated_score_after_fixes: integer
  estimated_weeks_to_ready: integer
```

---

## 📊 Approval Probability Table

| Score | Probability Label         | Submission Recommendation  |
|-------|---------------------------|----------------------------|
| 90–100 | Very High (>85%)         | SUBMIT                     |
| 80–89  | High (70–85%)            | SUBMIT — minor polish first |
| 70–79  | Moderate (50–70%)        | DO_NOT_SUBMIT — fix priority items |
| 60–69  | Low (30–50%)             | DO_NOT_SUBMIT — significant work needed |
| 50–59  | Very Low (15–30%)        | DO_NOT_SUBMIT — major issues present |
| Below 50 | Unlikely (<15%)        | DO_NOT_SUBMIT — rebuild required |

**Any catastrophic fail** → DO_NOT_SUBMIT regardless of total score.

---

## 🗺️ Score Interpretation for kalyanaveedu.com

Given 3 prior rejections, the approval threshold is effectively higher.
Google's system applies elevated scrutiny after repeated rejections.
Treat 85+ as the practical submission threshold, not 70+.

| Score Range | Honest Interpretation for Your Site          |
|-------------|----------------------------------------------|
| 90–100      | Ready — submit with confidence               |
| 80–89       | Nearly ready — fix the 1–2 remaining issues  |
| 70–79       | Not ready — 3–4 weeks of work needed         |
| Below 70    | Not ready — focus on site pages and articles |

---

## 🔁 Integration with Improver Skill

Every page with `route_to_improver: true` in the weak_pages output
is automatically queued for `adsense-weak-page-improver.md`.

The improver receives:
- The page name
- Its current score
- Its specific weak points
- The fix type required

The improver returns an improved version of the page.
Run the auditor again after improvements to confirm score increased.

---
## End of Skill
