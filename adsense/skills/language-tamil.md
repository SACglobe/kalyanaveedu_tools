---
skill_id: kalyanaveedu_language_tamil
skill_type: validation
skill_version: 1.1
last_updated: 2026-02-19
priority: high
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
language: tamil
triggered_by: post AGS-03 | post AGS-07
receives_from: editorial-writer
feeds_into: cultural-validator (AGS-04) | AGS-07 | AGS-08
depends_on:
  - guardrails.md
  - editorial-writer.md
---

# 🔤 Skill 06 — Tamil Language Enforcement

## Purpose
Ensure that all content produced for kalyanaveedu.in during the AdSense
approval phase meets **Tamil language compliance standards**.

This skill evaluates **language and script integrity only**.
It does not evaluate cultural accuracy, editorial quality, or AdSense compliance —
those are handled by downstream skills.

**A language violation is a trust signal failure.**
Mixed-language or Romanized content signals low editorial standards to Google reviewers
and undermines the site's credibility as an authoritative Tamil cultural resource.

---

## 📋 Language Policy

### Primary Language
- **Tamil script (தமிழ்)** is the required language for all editorial content
- Unicode encoding standard: **UTF-8**
- Tamil script range: U+0B80–U+0BFF

### Permitted Exceptions — Strictly Defined

| Exception Category              | Rule                                                                 |
|---------------------------------|----------------------------------------------------------------------|
| Proper nouns (place names)      | May appear in English if no established Tamil equivalent exists      |
| Technical metadata              | HTML tags, schema markup, file paths — English permitted             |
| Workflow placeholders           | `[Author Name]`, `[Date]`, `[Meta Title]` — English permitted in draft |
| Sanskrit ritual terms           | May appear in Tamil transliteration — not Roman script               |
| English loanwords in common use | Only if the Tamil equivalent is genuinely not in common usage        |

**Exception Rule:**
Every exception must be individually justifiable.
When in doubt → use Tamil. Do not default to English for convenience.

### Disallowed in All Cases

- English prose sentences or paragraphs anywhere in the article body
- Tanglish — Tamil words written using English/Roman letters (e.g., "vandha" instead of வந்த)
- Mixed-language sentences — switching language mid-sentence for any reason
- Romanized Tamil in headings, subheadings, captions, or body text
- English headings (H1–H6) except for technical metadata
- English author bylines, disclaimers, or date text
- Code-switching — alternating Tamil and English between sentences within a paragraph

---

## 🔍 Scope of Enforcement

This skill applies to every text element of the article:

| Element                  | Requirement                    | Exception Allowed? |
|--------------------------|--------------------------------|--------------------|
| Article title (H1)       | Full Tamil script              | No                 |
| Section headings (H2–H6) | Full Tamil script              | Proper nouns only  |
| Body paragraphs          | Full Tamil script              | Defined exceptions |
| Image alt text           | Full Tamil script              | Proper nouns only  |
| Image captions           | Full Tamil script              | Proper nouns only  |
| Author byline            | Tamil script name or pen name  | No                 |
| Disclaimer text          | Full Tamil script              | No                 |
| Last updated text        | Tamil script                   | Date format only   |
| Meta title               | Full Tamil script              | No                 |
| Meta description         | Full Tamil script              | No                 |
| Internal link anchor text| Full Tamil script              | No                 |
| Workflow placeholders    | English permitted in draft     | Yes — draft only   |

---

## 📐 Tamil Script Quality Standards

Language compliance is not only about script — it is about script quality.

### Required Standards

- **Proper Unicode encoding** — no placeholder boxes, no missing glyphs, no encoding errors
- **Correct vowel markers (மாத்திரை)** — ா, ி, ீ, ு, ூ, ெ, ே, ை, ொ, ோ, ௌ used correctly
- **Correct consonant clusters (மெய்யெழுத்து)** — pulli (்) used correctly to indicate pure consonants
- **No glyph substitution** — characters must render from standard Tamil Unicode, not workarounds
- **Consistent font compatibility** — content must render correctly in Noto Sans Tamil, Latha, and system Tamil fonts

### Common Script Errors to Detect

| Error Type                          | Example                          | Severity |
|-------------------------------------|----------------------------------|----------|
| Missing pulli on pure consonant     | க instead of க் where required  | HIGH     |
| Wrong vowel marker applied          | கி instead of கீ                | HIGH     |
| Roman letter substituted for Tamil  | Any a-z character in body text   | CRITICAL |
| Encoding artifact (□ or ?)         | Replacement character present    | HIGH     |
| Tanglish word in body text          | "thirumanam" instead of திருமணம் | CRITICAL |
| English word in heading             | Any English H2–H6 heading        | CRITICAL |

---

## 🔢 Transliteration Standards

When Sanskrit or regional ritual terms are used, transliteration into Tamil script
must follow consistent standards:

### Consistency Rules
- The same ritual name must be spelled identically in Tamil script throughout the article
- If a ritual has multiple accepted Tamil spellings, one must be chosen and applied consistently
- Sanskrit terms must be rendered in Tamil script — not retained in Devanagari or Roman script
- Transliteration must reflect how the term is actually used in Tamil Nadu, not pan-Indian convention

### Common Ritual Term Reference

| Ritual Term       | Correct Tamil Script  | Common Error         |
|-------------------|-----------------------|----------------------|
| Muhurtham         | முகூர்த்தம்           | Muhurat (English/Hindi form) |
| Kanyadaan         | கன்யாதானம்            | Kanyadan (Romanized) |
| Saptapadi         | சப்தபதி               | Saptapadhi (variant) |
| Mangalsutra       | மங்கலசூத்திரம்        | Mangalsutra (English)|
| Naandi            | நாந்தி                | Naandi (Romanized)   |
| Thirumanam        | திருமணம்              | Thirumanan (error)   |

**If a term is not in this reference table, the validator must still verify:**
1. Is the term in Tamil script (not Roman)?
2. Is it spelled consistently throughout the article?
3. Is it the form used in Tamil Nadu specifically, not a pan-Indian variant?

---

## 📥 Input Contract
```yaml
language_validation_request:
  topic: <string>
  declared_language: tamil
  content: <full markdown article>
  draft_stage: initial_draft | post_revision
  placeholders_present: true | false
```

**Input validation rules:**
- `declared_language` must be `tamil` — this skill does not validate other languages
- `placeholders_present: true` is acceptable for draft stage — placeholders are exempt
- `draft_stage: post_revision` applies stricter threshold — see routing table below
- Content must be the complete article — partial validation is not permitted

---

## 📤 Output Contract
```yaml
language_validation:
  topic: <string>
  draft_stage: initial_draft | post_revision
  violations_found: integer
  violations:
    - element: <title | heading | body | caption | byline | disclaimer | meta>
      location: <section heading or paragraph reference>
      violation_type: english_prose | tanglish | romanized | encoding_error |
                      mixed_sentence | wrong_script | missing_pulli | wrong_vowel |
                      inconsistent_transliteration
      severity: LOW | MEDIUM | HIGH | CRITICAL
      text_found: <the offending text>
      correction_needed: <correct Tamil script form>
  exceptions_used: integer
  exceptions:
    - element: <element type>
      text: <exception text>
      justification: <why this exception is valid>
  script_quality_score: integer  # 1–10
  decision: PASS | FAIL | KILL
  routing: AGS-04 | AGS-07 | AGS-08
  revision_notes: <summary for AGS-07 if FAIL — omit if KILL>
  language_note: <one sentence overall language assessment>
```

---

## 🎯 Violation Counting & Routing

| Violations Found              | Draft Stage      | Decision | Routing |
|-------------------------------|------------------|----------|---------|
| 0                             | Either           | PASS     | AGS-04  |
| 1–3 (no CRITICAL)            | Initial draft    | FAIL     | AGS-07  |
| 1–2 (no CRITICAL)            | Post revision    | FAIL     | AGS-07  |
| Any CRITICAL violation        | Either           | KILL     | AGS-08  |
| 4+ violations (any severity)  | Either           | KILL     | AGS-08  |
| 3+ violations post revision   | Post revision    | KILL     | AGS-08  |
| script_quality_score < 6      | Either           | KILL     | AGS-08  |

**CRITICAL violations trigger immediate KILL regardless of total count.**
**Post-revision articles are held to a tighter threshold — the revision was the one chance to fix language.**

---

## ⚡ Hard Kill Conditions

Any single instance of the following triggers immediate KILL:

| Hard Kill Condition                                              |
|------------------------------------------------------------------|
| English prose paragraph present in article body                  |
| Tanglish used in any heading (H1–H6)                            |
| Article title (H1) not in Tamil script                           |
| Encoding artifacts present (□ replacement characters)           |
| Roman script used for any ritual term name in body text         |
| Meta title or meta description in English                        |
| More than 3 unjustified English loanwords in body text          |

---

## 🚨 Enforcement

| Violation                                        | Action                           |
|--------------------------------------------------|----------------------------------|
| CRITICAL violation routed to AGS-07 instead of AGS-08 | Workflow violation         |
| Exception claimed without justification          | Exception invalidated — re-evaluate |
| Partial article submitted for validation         | Input rejected — resubmit complete |
| Validation performed in wrong script mode        | Output invalid — re-run          |
| Script quality score not included in output      | Output rejected                  |

**This skill is locked for the AdSense approval phase.
Language standards, exception categories, and routing thresholds may not be
modified without a version update.**

---
## End of Skill