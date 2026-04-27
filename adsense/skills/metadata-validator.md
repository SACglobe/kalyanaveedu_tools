---
skill_id: kalyanaveedu_metadata_validator
skill_type: validation
skill_version: 1.0
last_updated: 2026-02-19
priority: medium
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
triggered_by: post trust-injector (AGS-05) | submission-workflow
feeds_into: adsense-reviewer (AGS-06) | submission-readiness.md
depends_on:
  - guardrails.md
  - trust-injector.md
  - content-inventory.md
---

# 🏷️ Skill 12 — Metadata Validator

## Purpose
Validate that every published article's **metadata is complete, unique,
within character limits, and consistent** with the article's content
and the site's Tamil-primary language policy.

Duplicate or missing metadata is a silent AdSense rejection trigger —
it signals low editorial standards and poor site maintenance to both
Google's crawler and human reviewers.

---

## 📋 Validation Checks Per Article

### Meta Title
- [ ] Present on the page
- [ ] Written in Tamil script (if Tamil article)
- [ ] Length: 55–60 characters (Tamil characters count as 1 each)
- [ ] Accurately reflects article content — not keyword-stuffed
- [ ] Does not duplicate any other published article's meta title
- [ ] Does not contain: "kalyanaveedu.in", promotional language, or clickbait

### Meta Description
- [ ] Present on the page
- [ ] Written in Tamil script (if Tamil article)
- [ ] Length: 145–160 characters
- [ ] Summarizes article content accurately in one or two sentences
- [ ] Does not duplicate any other published article's meta description
- [ ] Does not contain calls to action or promotional language

### H1 Tag
- [ ] Exactly one H1 per page
- [ ] H1 matches or closely reflects the meta title
- [ ] Written in Tamil script
- [ ] Not keyword-stuffed

### Canonical Tag
- [ ] Present on every page
- [ ] Points to the page's own URL (self-referencing)
- [ ] URL is the correct final URL — not a redirect

### URL Slug
- [ ] Clean and readable
- [ ] Consistent style across all articles (Tamil transliteration or English — pick one standard)
- [ ] No special characters, underscores, or uppercase letters
- [ ] Reflects the article topic — not a numeric ID

---

## 🔍 Cross-Inventory Uniqueness Check

This skill must check every article's meta title and description
against **all other published articles** — not just validate each in isolation.
```yaml
uniqueness_check:
  meta_titles: [list of all published meta titles]
  meta_descriptions: [list of all published meta descriptions]
  duplicates_found: true | false
  duplicate_pairs:
    - article_1: <title>
      article_2: <title>
      field: meta_title | meta_description
      action: rewrite article_2 metadata
```

---

## 📥 Input Contract
```yaml
metadata_validation_request:
  domain: kalyanaveedu.in
  articles:
    - article_id: <string>
      meta_title: <string>
      meta_description: <string>
      h1: <string>
      canonical_url: <string>
      url_slug: <string>
      declared_language: tamil | english
```

---

## 📤 Output Contract
```yaml
metadata_validation:
  articles_evaluated: integer
  issues_found: integer
  issues:
    - article_id: <string>
      field: meta_title | meta_description | h1 | canonical | slug
      issue: <specific description>
      severity: LOW | MEDIUM | HIGH
      fix_required: <specific actionable correction>
  uniqueness_violations:
    - <duplicate pairs>
  overall_decision: PASS | FAIL
  submission_cleared: true | false
```

---
## End of Skill