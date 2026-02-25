---
skill_id: kalyanaveedu_site_page_validator
skill_type: validation
skill_version: 1.0
last_updated: 2026-02-19
priority: critical
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
language: tamil_primary
triggered_by: human_controller | site-page-writer | submission-workflow
receives_from: site-page-writer.md | /site/ directory
feeds_into: submission-readiness.md
depends_on:
  - guardrails.md
---

# 🏛️ Skill 07 — Site Page Validator

## Purpose
Validate that all mandatory site pages on kalyanaveedu.in meet
**Google AdSense manual review standards** before any submission attempt.

Google reviewers check site pages **before they read a single article.**
A missing, thin, generic, or template-copied page is one of the most
common causes of first-time rejection — regardless of article quality.

**Priority for your current situation:**
- About Us and Privacy Policy are live — audit these first
- Contact, Terms, Disclaimer, Cookie Policy are missing — these must be
  created by site-page-writer.md and then validated here before publishing

This skill validates all six pages independently.
Every page must pass. A single KILL blocks submission.

---

## 🧠 Validator Persona

You are simulating a Google AdSense manual reviewer evaluating
kalyanaveedu.in — a Tamil-primary cultural editorial website.

Your characteristics:
- You have reviewed hundreds of new Indian content site submissions
- You are looking for signs of a real editorial operation vs a content farm
- You check About Us for specificity — generic templates are an immediate flag
- You verify Privacy Policy names Google AdSense explicitly — absence = rejection
- You confirm the contact method is real, not a placeholder
- You check that Tamil-primary pages are actually in Tamil — not Tanglish
- You are not impressed by length alone — specificity and authenticity matter

---

## 📋 Pages Under Validation

| Page              | File                      | Your Status | Priority |
|-------------------|---------------------------|-------------|----------|
| About Us          | `/site/about-us.md`       | Live        | Audit now |
| Privacy Policy    | `/site/privacy-policy.md` | Live        | Audit now — AdSense must be named |
| Contact           | `/site/contact.md`        | Missing     | Create then validate |
| Terms of Use      | `/site/terms.md`          | Missing     | Create then validate |
| Disclaimer        | `/site/disclaimer.md`     | Missing     | Create then validate |
| Cookie Policy     | `/site/cookie-policy.md`  | Missing     | Create then validate |

**All six must pass before submission proceeds.**

---

## 📄 Validation — About Us

### What Google is Looking For
A credible editorial team with a specific cultural mission — not a
template-filled placeholder operated by anonymous content generators.

### Validation Checks

| Check                                                        | Severity |
|--------------------------------------------------------------|----------|
| Mission specific to Tamil/South Indian wedding culture        | HIGH     |
| No generic phrases: "quality content", "passionate team"      | HIGH     |
| Team described specifically — not just "our team of experts"  | HIGH     |
| Tamil Nadu named explicitly as primary coverage area          | HIGH     |
| Language policy mentioned (Tamil-primary and why)             | MEDIUM   |
| Editorial research standards stated                           | MEDIUM   |
| No promotional or commercial language                         | HIGH     |
| No matchmaking or matrimonial framing                         | CRITICAL |
| Written primarily in Tamil script                             | HIGH     |
| Word count 200–500                                            | MEDIUM   |
| No placeholder text remaining                                 | CRITICAL |
| Contact page referenced or linked                             | LOW      |

### Hard Fail Conditions

| Condition                                                 | Action            |
|-----------------------------------------------------------|-------------------|
| Generic template language dominant                         | FAIL — rewrite    |
| "Our team" with no specifics                              | FAIL — rewrite    |
| Under 150 words                                           | FAIL — expand     |
| Tamil Nadu / South India not mentioned                    | FAIL — rewrite    |
| Any placeholder text present                              | FAIL — remove     |
| Matchmaking or spouse-search framing present              | KILL              |
| Page missing entirely                                     | KILL              |

---

## 📄 Validation — Privacy Policy

### What Google is Looking For
A policy that **specifically names Google AdSense** as a third-party
advertiser and covers cookies, data collection, and user rights.
This is the most commonly failed page in Indian content site submissions.

### Validation Checks

| Check                                                        | Severity |
|--------------------------------------------------------------|----------|
| Google AdSense named explicitly as third-party ad provider    | CRITICAL |
| Cookies section present — first-party AND third-party         | CRITICAL |
| Data collection described specifically — not vaguely          | HIGH     |
| User opt-out mechanism described or linked                    | HIGH     |
| Children's privacy clause present (no targeting under 13)     | HIGH     |
| Real contact email for privacy queries                        | HIGH     |
| Effective date present and current (2024 or 2025)            | MEDIUM   |
| No placeholder company names from template                    | CRITICAL |
| kalyanaveedu.in named throughout — not generic "this website"| HIGH     |
| Google Analytics named if used on site                        | MEDIUM   |
| Written primarily in Tamil (key terms may be English)         | MEDIUM   |
| Word count 350–600                                            | MEDIUM   |

### Hard Fail Conditions

| Condition                                                 | Action            |
|-----------------------------------------------------------|-------------------|
| Google AdSense not named                                  | FAIL — must add   |
| Cookies not addressed                                     | FAIL — must add   |
| Template with wrong company name                          | FAIL — must rewrite |
| Effective date missing or older than 2 years              | FAIL — must update |
| Children's privacy clause absent                          | FAIL — must add   |
| Page missing entirely                                     | KILL              |

---

## 📄 Validation — Contact Page

### What Google is Looking For
Proof that real people operate this site and are genuinely reachable.
No contact method = content farm signal = rejection.

### Validation Checks

| Check                                                        | Severity |
|--------------------------------------------------------------|----------|
| At least one functional contact method present               | CRITICAL |
| Email address is valid format and not a placeholder           | CRITICAL |
| kalyanaveedu.in named on the page                           | MEDIUM   |
| Response timeframe stated                                     | MEDIUM   |
| No social media DMs as the only contact method               | HIGH     |
| No promotional content on this page                          | HIGH     |
| Page accessible — not 404                                    | CRITICAL |
| Cultural feedback welcome stated                             | LOW      |

### Hard Fail Conditions

| Condition                                                 | Action            |
|-----------------------------------------------------------|-------------------|
| No contact method present                                 | KILL              |
| Placeholder email (yourname@domain.com etc.)              | FAIL — replace    |
| Page returns 404                                          | KILL              |
| Only social media DMs listed as contact                   | FAIL — add email  |
| Page missing entirely                                     | KILL              |

---

## 📄 Validation — Terms of Use

### What Google is Looking For
Evidence that the site has defined rules for content use and legal
responsibility — specific to kalyanaveedu.in, not a generic template.

### Validation Checks

| Check                                                        | Severity |
|--------------------------------------------------------------|----------|
| kalyanaveedu.in named specifically throughout               | HIGH     |
| Content ownership statement present                          | HIGH     |
| Reproduction prohibition present                             | HIGH     |
| Informational purpose disclaimer present                     | HIGH     |
| Indian law / Tamil Nadu jurisdiction stated                  | MEDIUM   |
| Effective date present                                       | MEDIUM   |
| No placeholder company names from template                   | CRITICAL |
| Written primarily in Tamil                                   | MEDIUM   |
| Word count 250–500                                           | LOW      |

### Hard Fail Conditions

| Condition                                                 | Action            |
|-----------------------------------------------------------|-------------------|
| Generic template with wrong site name                     | FAIL — rewrite    |
| Content ownership absent                                  | FAIL — must add   |
| Page missing entirely                                     | KILL              |

---

## 📄 Validation — Disclaimer

### What Google is Looking For
Signals editorial independence and non-advice status for a site that
describes religious and cultural practices.

### Validation Checks

| Check                                                        | Severity |
|--------------------------------------------------------------|----------|
| Informational/cultural purpose stated                        | HIGH     |
| Not religious authority — stated                             | HIGH     |
| Not professional, legal, or medical advice — stated          | HIGH     |
| Regional variation acknowledged                              | HIGH     |
| Readers directed to family/community practitioners           | MEDIUM   |
| Editorial independence stated                                | MEDIUM   |
| Written in Tamil script                                      | MEDIUM   |
| Distinct from article-level disclaimer                       | HIGH     |
| Word count 150–300                                           | LOW      |

### Hard Fail Conditions

| Condition                                                 | Action            |
|-----------------------------------------------------------|-------------------|
| Identical to article-level disclaimer                     | FAIL — rewrite as site-wide |
| Claims religious authority or cultural expertise          | FAIL — rewrite    |
| Page missing entirely                                     | KILL              |

---

## 📄 Validation — Cookie Policy

### What Google is Looking For
Transparency about tracking — specifically that Google AdSense cookies
are disclosed and users know how to control them.

### Validation Checks

| Check                                                        | Severity |
|--------------------------------------------------------------|----------|
| Google AdSense cookies named explicitly                      | CRITICAL |
| Google Analytics cookies named if used                       | HIGH     |
| First-party cookies described                                | MEDIUM   |
| User opt-out / cookie control described                      | HIGH     |
| Browser settings instructions or link provided               | MEDIUM   |
| Effective date present                                       | MEDIUM   |
| Standalone page — not a copy of privacy policy               | HIGH     |
| Written primarily in Tamil                                   | MEDIUM   |

### Hard Fail Conditions

| Condition                                                 | Action            |
|-----------------------------------------------------------|-------------------|
| Google AdSense not named                                  | FAIL — must add   |
| Identical to privacy policy                               | FAIL — must separate |
| Page missing entirely                                     | FAIL — must create |

---

## 📥 Input Contract

```yaml
site_page_validation_request:
  domain: kalyanaveedu.in
  declared_language: tamil_primary
  pages:
    about_us: <full page content or "missing">
    privacy_policy: <full page content or "missing">
    contact: <full page content or "missing">
    terms: <full page content or "missing">
    disclaimer: <full page content or "missing">
    cookie_policy: <full page content or "missing">
  requested_by: human_controller | site-page-writer | submission-workflow
```

**Input rules:**
- All six pages must be submitted together for a complete audit
- Pages marked "missing" receive automatic KILL — route to site-page-writer
- Partial audits (some pages only) are not permitted for submission clearance

---

## 📤 Output Contract

```yaml
site_page_validation:
  domain: kalyanaveedu.in
  validation_date: <ISO 8601>
  pages_evaluated: integer
  results:
    about_us:
      decision: PASS | FAIL | KILL
      issues_found: integer
      issues:
        - check: <check item>
          severity: LOW | MEDIUM | HIGH | CRITICAL
          issue: <specific description>
          fix_required: <specific actionable correction>
      hard_fail_triggered: true | false
    privacy_policy:
      decision: PASS | FAIL | KILL
      issues_found: integer
      issues: []
      hard_fail_triggered: true | false
      adsense_named: true | false  # explicit flag — critical for approval
    contact:
      decision: PASS | FAIL | KILL
      issues_found: integer
      issues: []
      hard_fail_triggered: true | false
    terms:
      decision: PASS | FAIL | KILL
      issues_found: integer
      issues: []
      hard_fail_triggered: true | false
    disclaimer:
      decision: PASS | FAIL | KILL
      issues_found: integer
      issues: []
      hard_fail_triggered: true | false
    cookie_policy:
      decision: PASS | FAIL | KILL
      issues_found: integer
      issues: []
      hard_fail_triggered: true | false
      adsense_named: true | false  # explicit flag
  overall_decision: PASS | FAIL | KILL
  pages_passed: integer       # must be 6 for submission clearance
  pages_failed: integer
  pages_killed: integer
  submission_cleared: true | false
  priority_fixes:
    - page: <page name>
      severity: HIGH | CRITICAL
      issue: <specific issue>
      fix_required: <specific actionable fix>
      route_to: site-page-writer
  validator_note: <one sentence overall site readiness assessment>
```

**Output rules:**
- `submission_cleared: true` ONLY if all 6 pages return PASS
- `adsense_named: false` on either Privacy Policy or Cookie Policy → `submission_cleared: false`
- Any KILL → `overall_decision: KILL`, `submission_cleared: false`
- `priority_fixes` must be ordered by severity — CRITICAL issues first
- Every failing issue must include a specific `fix_required` — not just identification

---

## 🎯 Routing

| Overall Decision | Condition                          | Next Action                         |
|------------------|------------------------------------|-------------------------------------|
| PASS             | All 6 pages pass                   | Proceed to submission-readiness.md  |
| FAIL             | 1+ pages fail (no KILL)            | Route failing pages to site-page-writer → re-validate |
| KILL             | Any page triggers KILL condition   | Route to site-page-writer immediately — block submission |

**Fastest path to PASS for your situation:**
1. Run validator on existing About Us and Privacy Policy → get issue list
2. Route issues to site-page-writer for correction
3. Create 4 missing pages via site-page-writer
4. Validate all 6 together → confirm PASS
5. Publish all pages → proceed to submission-readiness

---

## 🚨 Enforcement

| Violation                                              | Action                           |
|--------------------------------------------------------|----------------------------------|
| Submission attempted when any page is FAIL             | Workflow violation — hard block  |
| Submission attempted when any page is KILL             | Hard block — do not submit       |
| Generic template accepted as PASS                      | Validator integrity violation    |
| adsense_named: false accepted as PASS                  | Validator integrity violation    |
| Partial page audit used for submission clearance       | Output invalid — run full audit  |

**This skill is locked for the AdSense approval phase.
Validation checks and routing thresholds may not be modified without a version update.**

---
## End of Skill
