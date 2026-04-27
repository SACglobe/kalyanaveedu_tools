---
skill_id: kalyanaveedu_content_inventory
skill_type: tracking
skill_version: 1.0
last_updated: 2026-02-19
priority: high
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
triggered_by: human_controller | submission-workflow
feeds_into: submission-readiness.md
depends_on:
  - guardrails.md
  - approval-workflow.md
---

# 📊 Skill 08 — Content Inventory Tracker

## Purpose
Track, audit, and validate the **published content inventory**
of kalyanaveedu.in to ensure it meets the minimum quantity,
diversity, and quality thresholds required for AdSense approval.

Google does not publish an exact minimum article count — but manual reviewers
assess whether a site demonstrates genuine editorial depth and topic breadth.
A site with 5 articles on the same ritual looks like a thin content farm.
A site with 20 diverse, high-quality articles across regions and communities
looks like a credible editorial operation.

**This skill tracks inventory — it does not evaluate individual article quality.
Quality is governed by the editorial workflow.**

---

## 📋 Minimum Submission Thresholds

All thresholds must be met before submission is cleared.

| Metric                                    | Minimum Required   |
|-------------------------------------------|--------------------|
| Total published articles                  | 20                 |
| Unique topics covered                     | 20 (no duplicates) |
| Regions covered                           | At least 3 of 4    |
| Communities covered                       | At least 5 distinct|
| Ritual categories covered                 | At least 4         |
| Articles published in last 30 days        | At least 3         |
| Average word count across all articles    | At least 1400      |
| Articles with trust signals confirmed     | 100% of published  |
| Articles that passed AdSense review (PASS)| 100% of published  |

---

## 🗂️ Topic Diversity Requirements

### Ritual Category Coverage
At least one article must exist in each of these four categories:

| Category                    | Examples                                            |
|-----------------------------|-----------------------------------------------------|
| Pre-wedding rituals         | Naandi, Nichayathartham, Mehendi, Sumangali prayer  |
| Main ceremony rituals       | Muhurtham, Saptapadi, Kanyadaan, Mangalsutra        |
| Post-wedding rituals        | Grihapravesh, Saptapadi follow-up, family ceremonies|
| Cultural/historical context | Origin of customs, evolution of traditions          |

### Regional Coverage
At least 3 of these 4 regions must have dedicated coverage:

| Region          | Minimum Articles |
|-----------------|------------------|
| Tamil Nadu      | 8 (primary focus)|
| Andhra Pradesh  | 3                |
| Karnataka       | 3                |
| Kerala          | 3                |

### Community Coverage
At least 5 distinct communities must be represented across the inventory:

- Tamil Brahmin (Iyer or Iyengar)
- Tamil non-Brahmin (Mudaliar, Nadar, Thevar, or Chettiar)
- Telugu community
- Kannada community
- Kerala community (Nair, Christian, or Mappila)

---

## 🚫 Duplicate and Overlap Detection

The inventory tracker must flag:

| Issue Type                                      | Threshold           | Action        |
|-------------------------------------------------|---------------------|---------------|
| Two articles on the same specific ritual        | Any duplicate       | Flag — review |
| Three or more articles in the same category     | Without other categories covered | Flag |
| Same keyword used as primary focus in 3+ articles | Any                | Flag — diversify |
| Articles covering identical regional + community combination | 2+ | Flag — diversify |

---

## 📥 Input Contract
```yaml
inventory_audit_request:
  domain: kalyanaveedu.in
  articles:
    - article_id: <string>
      title: <string>
      topic: <string>
      region: <string>
      community: <string>
      ritual_category: pre_wedding | main_ceremony | post_wedding | cultural_historical
      word_count: integer
      published_date: <ISO 8601>
      trust_signals_confirmed: true | false
      adsense_review_passed: true | false
      workflow_state_record: <reference>
```

---

## 📤 Output Contract
```yaml
inventory_audit:
  domain: kalyanaveedu.in
  audit_date: <ISO 8601>
  total_articles: integer
  thresholds:
    total_articles: PASS | FAIL
    unique_topics: PASS | FAIL
    regions_covered: PASS | FAIL
    communities_covered: PASS | FAIL
    ritual_categories: PASS | FAIL
    recent_publications: PASS | FAIL
    average_word_count: PASS | FAIL
    trust_signals_complete: PASS | FAIL
    adsense_review_complete: PASS | FAIL
  duplicate_flags:
    - issue: <description>
      articles_affected: [<article_id>]
      action_required: <specific fix>
  coverage_gaps:
    - area: <region or community not covered>
      articles_needed: integer
      suggested_topics: [<topic ideas>]
  overall_decision: READY | NOT_READY
  submission_cleared: true | false
  inventory_note: <one sentence assessment>
```

---

## 🎯 Routing

| Decision    | Condition                          | Action                           |
|-------------|------------------------------------|----------------------------------|
| READY       | All thresholds met, no duplicates  | Proceed to submission-readiness  |
| NOT_READY   | Any threshold unmet                | Produce more content — re-audit  |

---
## End of Skill