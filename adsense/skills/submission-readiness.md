---
skill_id: kalyanaveedu_submission_readiness
skill_type: gate
skill_version: 1.0
last_updated: 2026-02-19
priority: critical
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
triggered_by: human_controller
receives_from:
  - site-page-validator.md
  - content-inventory.md
  - technical-compliance.md
feeds_into: AdSense submission (human action)
depends_on:
  - guardrails.md
  - all skills
---

# ✅ Skill 09 — Submission Readiness Gate

## Purpose
Perform a **final holistic check** that confirms kalyanaveedu.in is
fully ready for Google AdSense submission — not just per-article,
but as a complete, credible editorial website.

This skill is the **last gate before a human clicks submit.**
It aggregates results from all upstream validation skills and produces
a single binary decision: **SUBMIT** or **NOT READY**.

No submission may proceed without a SUBMIT decision from this skill.

---

## 📋 Readiness Checklist

### Section 1 — Site Pages (from site-page-validator.md)

- [ ] About Us — PASS confirmed
- [ ] Privacy Policy — PASS confirmed (AdSense explicitly named)
- [ ] Contact Page — PASS confirmed (functional contact method)
- [ ] Terms of Use — PASS confirmed
- [ ] Disclaimer — PASS confirmed
- [ ] Cookie Policy — PASS confirmed

**Gate:** All 6 must be PASS. Any FAIL or KILL → NOT READY.

---

### Section 2 — Content Inventory (from content-inventory.md)

- [ ] Minimum 20 articles published
- [ ] All 4 ritual categories covered
- [ ] At least 3 regions covered
- [ ] At least 5 communities covered
- [ ] At least 3 articles published in last 30 days
- [ ] No duplicate topic flags unresolved
- [ ] 100% of articles passed AdSense review
- [ ] 100% of articles have trust signals confirmed

**Gate:** All inventory thresholds met. Any unmet threshold → NOT READY.

---

### Section 3 — Technical Compliance (from technical-compliance.md)

- [ ] robots.txt blocks /tools/ directory
- [ ] Sitemap contains only published editorial articles
- [ ] No tool pages in sitemap
- [ ] All article pages load under 3 seconds on mobile
- [ ] No broken internal links across published articles
- [ ] Canonical tags present on all pages
- [ ] No duplicate meta titles across articles
- [ ] No duplicate meta descriptions across articles
- [ ] UTF-8 encoding confirmed site-wide
- [ ] No ad placeholders or ad code present anywhere on site
- [ ] No affiliate links anywhere on site

**Gate:** All technical checks pass. Any failure → NOT READY.

---

### Section 4 — AdSense Policy Final Check

- [ ] No display ads or ad unit code on site
- [ ] No affiliate links anywhere on site
- [ ] No pop-ups or interstitials on any page
- [ ] No auto-play video or audio
- [ ] No content targeting users under 18
- [ ] No medical, legal, or financial advice presented as fact
- [ ] No copyrighted images without license
- [ ] No sponsored content (disclosed or undisclosed)
- [ ] No lead capture or email collection forms

**Gate:** All policy checks clean. Any violation → NOT READY.

---

### Section 5 — Site Identity Signals

- [ ] Site has been live for minimum 30 days
- [ ] Domain is not a free subdomain (blogspot, wordpress.com, etc.)
- [ ] Site has a clear, consistent editorial identity across all pages
- [ ] Author pen names are consistent across published articles
- [ ] Site language is consistent — no random language switching between pages
- [ ] Homepage clearly communicates the site's editorial purpose
- [ ] Site navigation is functional — no broken menu links

**Gate:** All identity signals confirmed. Any failure → NOT READY.

---

## 📥 Input Contract
```yaml
submission_readiness_request:
  domain: kalyanaveedu.in
  site_page_validation_result: <output from site-page-validator.md>
  content_inventory_result: <output from content-inventory.md>
  technical_compliance_result: <output from technical-compliance.md>
  submission_date_planned: <ISO 8601>
  days_since_site_launch: integer
  requested_by: human_controller
```

---

## 📤 Output Contract
```yaml
submission_readiness:
  domain: kalyanaveedu.in
  evaluation_date: <ISO 8601>
  sections:
    site_pages: PASS | FAIL
    content_inventory: PASS | FAIL
    technical_compliance: PASS | FAIL
    adsense_policy: PASS | FAIL
    site_identity: PASS | FAIL
  sections_passed: integer  # must equal 5 for SUBMIT
  blocking_issues:
    - section: <section name>
      issue: <specific blocking issue>
      fix_required: <specific actionable fix>
      estimated_effort: low | medium | high
  overall_decision: SUBMIT | NOT_READY
  submission_cleared: true | false
  readiness_score: integer  # sections passed out of 5
  readiness_note: <one sentence honest assessment>
```

**Output rules:**
- `submission_cleared: true` only if all 5 sections are PASS
- `blocking_issues` must list every unresolved issue across all sections
- `estimated_effort` helps the controller prioritize what to fix first
- `readiness_score` of 5/5 is the only acceptable submission threshold

---

## 🎯 Routing

| Decision   | Condition              | Action                                       |
|------------|------------------------|----------------------------------------------|
| SUBMIT     | All 5 sections PASS    | Human controller proceeds with AdSense submission |
| NOT_READY  | Any section FAIL       | Fix blocking issues — re-run readiness check |

---
## End of Skill