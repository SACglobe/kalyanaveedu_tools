---
skill_id: kalyanaveedu_technical_compliance
skill_type: validation
skill_version: 1.0
last_updated: 2026-02-19
priority: high
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
triggered_by: submission-workflow | human_controller
feeds_into: submission-readiness.md
depends_on:
  - guardrails.md
---

# ⚙️ Skill 10 — Technical Compliance Validator

## Purpose
Validate that kalyanaveedu.in meets the **technical requirements**
that Google AdSense reviewers and crawlers check during manual review.

Content quality alone does not guarantee AdSense approval.
A technically non-compliant site — slow pages, broken links, missing
canonical tags, or indexed tool pages — will be rejected regardless of
how good the articles are.

**This skill validates technical signals only.
It does not evaluate content quality.**

---

## 📋 Validation Dimensions

---

### Dimension 1 — robots.txt Compliance

**What is checked:**
- `/tools/` directory is blocked: `Disallow: /tools/`
- No editorial content directories are accidentally blocked
- Sitemap URL is declared in robots.txt
- robots.txt is accessible at `https://kalyanaveedu.in/robots.txt`

**Checks:**
- [ ] robots.txt accessible and returns 200
- [ ] `/tools/` disallowed
- [ ] `/content/` or `/articles/` not accidentally disallowed
- [ ] Sitemap URL declared
- [ ] No wildcard blocks that prevent editorial crawling

**Fail condition:** `/tools/` not blocked → HIGH severity
**Kill condition:** Editorial content accidentally blocked → KILL

---

### Dimension 2 — Sitemap Compliance

**What is checked:**
- sitemap.xml exists and is accessible
- Sitemap contains only published editorial articles
- No tool pages, draft pages, or noindex pages in sitemap
- Sitemap is submitted to Google Search Console
- All URLs in sitemap return 200 (not 301, 404, or 500)

**Checks:**
- [ ] sitemap.xml accessible at standard URL
- [ ] All sitemap URLs return 200
- [ ] No /tools/ URLs in sitemap
- [ ] No draft or unpublished article URLs in sitemap
- [ ] Sitemap submitted to Google Search Console
- [ ] Last modified dates present in sitemap entries

**Fail condition:** Tool pages in sitemap → HIGH severity
**Kill condition:** Sitemap not submitted to Search Console → HIGH

---

### Dimension 3 — Page Speed (Mobile)

**What is checked:**
- All published article pages load under 3 seconds on mobile
- No render-blocking resources on article pages
- Images are optimized and compressed
- Tamil font (Noto Sans Tamil or equivalent) loads efficiently

**Checks:**
- [ ] Core Web Vitals: LCP under 2.5 seconds
- [ ] Core Web Vitals: CLS under 0.1
- [ ] Core Web Vitals: FID/INP under 200ms
- [ ] Tamil font loaded efficiently (no FOUT — flash of unstyled text)
- [ ] Images compressed and served in modern format (WebP preferred)
- [ ] No large JavaScript bundles blocking render

**Fail condition:** LCP over 3 seconds → MEDIUM severity
**Kill condition:** Site unusable on mobile → HIGH

---

### Dimension 4 — Link Integrity

**What is checked:**
- No broken internal links across published articles
- No broken links on site pages (About, Contact, etc.)
- No external links (editorial articles must not have external links)
- Internal links point to live published pages — not drafts or 404s

**Checks:**
- [ ] All internal links in articles return 200
- [ ] No internal links pointing to /tools/ pages
- [ ] No external links in article body
- [ ] Navigation menu links all return 200
- [ ] Footer links all return 200
- [ ] About, Contact, Terms, Privacy links in footer are live

**Fail condition:** Any broken internal link → MEDIUM severity
**Kill condition:** Contact or Privacy links broken → HIGH

---

### Dimension 5 — Meta and Canonical Tags

**What is checked:**
- Every published page has a unique meta title (55–60 characters)
- Every published page has a unique meta description (145–160 characters)
- Every page has a canonical tag pointing to its own URL
- No duplicate meta titles across any two pages
- No duplicate meta descriptions across any two pages
- H1 tag appears exactly once per page

**Checks:**
- [ ] Meta title present and within character limit on all pages
- [ ] Meta description present and within character limit on all pages
- [ ] No duplicate meta titles across published articles
- [ ] No duplicate meta descriptions across published articles
- [ ] Canonical tag present on all pages
- [ ] Canonical URL matches the page's actual URL
- [ ] Exactly one H1 per page
- [ ] H1 matches or is closely related to meta title

**Fail condition:** Duplicate meta titles → HIGH severity
**Fail condition:** Missing canonical tags → MEDIUM severity
**Kill condition:** No meta tags on any page → HIGH

---

### Dimension 6 — Encoding and Script Rendering

**What is checked:**
- UTF-8 encoding declared in HTML head on all pages
- Tamil script renders correctly without encoding artifacts
- No replacement characters (□) appearing in Tamil content
- Noto Sans Tamil or equivalent font loads on all devices

**Checks:**
- [ ] `<meta charset="UTF-8">` present on all pages
- [ ] Tamil text renders without □ replacement characters
- [ ] Tamil font loads within 2 seconds
- [ ] Content visible without JavaScript (for crawler accessibility)
- [ ] Tamil punctuation renders correctly

**Kill condition:** Tamil content unreadable due to encoding failure → KILL

---

### Dimension 7 — Ad and Monetization Code Cleanliness

**What is checked:**
- No AdSense ad unit code present anywhere on site before approval
- No affiliate link code present anywhere
- No pop-up or interstitial scripts
- No auto-play media scripts
- No email capture form scripts

**Checks:**
- [ ] No `adsbygoogle` script tags on any page
- [ ] No affiliate tracking parameters in any URL
- [ ] No pop-up JavaScript on any page
- [ ] No auto-play video or audio elements
- [ ] No email subscription form code

**Kill condition:** Any ad unit code found → KILL — immediate block

---

## 📥 Input Contract
```yaml
technical_compliance_request:
  domain: kalyanaveedu.in
  sitemap_url: <string>
  robots_txt_url: <string>
  published_article_urls: [<list of URLs>]
  site_page_urls:
    about: <URL>
    privacy: <URL>
    contact: <URL>
    terms: <URL>
    disclaimer: <URL>
  requested_by: submission-workflow | human_controller
```

---

## 📤 Output Contract
```yaml
technical_compliance:
  domain: kalyanaveedu.in
  dimensions:
    robots_txt: PASS | FAIL | KILL
    sitemap: PASS | FAIL | KILL
    page_speed: PASS | FAIL | KILL
    link_integrity: PASS | FAIL | KILL
    meta_canonical: PASS | FAIL | KILL
    encoding_rendering: PASS | FAIL | KILL
    ad_cleanliness: PASS | FAIL | KILL
  kill_triggered: true | false
  kill_reasons: [<list if triggered>]
  issues:
    - dimension: <name>
      severity: LOW | MEDIUM | HIGH
      issue: <specific description>
      fix_required: <specific actionable fix>
  overall_decision: PASS | FAIL | KILL
  submission_cleared: true | false
  technical_note: <one sentence assessment>
```

---
## End of Skill