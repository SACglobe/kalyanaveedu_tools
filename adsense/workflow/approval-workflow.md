---
type: workflow
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
version: 1.1
last_updated: 2026-02-19
mode: strict
revision_limit: 1
depends_on:
  - guardrails.md
  - intent-lock.md
  - mcp-research.md
  - editorial-writer.md
  - language-tamil.md
  - cultural-validator.md
  - trust-injector.md
  - adsense-reviewer.md
  - antigravity-scripts.md
  - antigravity-usage.md
  - allowed-sources.md
---

# 🔁 Editorial Workflow — kalyanaveedu.in AdSense Approval Phase

## Objective
Ensure every published article meets **Google AdSense manual review standards**
through a strict, fully auditable, sequenced production workflow.

Every article that reaches publication must have passed every gate in this workflow
without exception. No shortcut, parallel execution, or stage skip is permitted.

**This workflow is locked for the AdSense approval phase.
It may not be modified, reordered, or partially applied without a version update.**

---

## 🗺️ Workflow Map
```
Topic Intake
     ↓
[GATE 1] Intent Lock ————————————————————→ KILL (AGS-08)
     ↓ PASS
MCP Research ————————————————————————————→ BLOCKED (AGS-08)
     ↓ CLEAN / REVIEW_NEEDED
[GATE 2] Language Declared
     ↓
Editorial Writing (Initial Draft)
     ↓
[GATE 3] Language Validation ————————————→ KILL / FAIL → AGS-07
     ↓ PASS
[GATE 4] Cultural Validation ————————————→ KILL / FAIL → AGS-07
     ↓ PASS
Trust Signal Injection
     ↓
[GATE 5] AdSense Simulated Review ——————→ KILL / FAIL → AGS-07
     ↓ PASS
Publication Queue
     ↓
48-Hour Index Delay
     ↓
Published
```

**AGS-07 (Revision) may be invoked a maximum of once per article, at any gate.**
**A second failure at any gate after revision → KILL. No exceptions.**

---

## 📋 Workflow State Tracker

Every article must maintain a state record throughout the workflow.
This record is passed between stages and updated at each gate.
```yaml
article_state:
  topic: <string>
  title: <string>
  declared_language: tamil | english
  declared_region: <string>
  declared_community: <string>
  revision_count: 0 | 1
  current_stage: <stage name>
  stage_history:
    - stage: <name>
      script: <AGS-ID>
      decision: PASS | FAIL | KILL | BLOCKED
      timestamp: <ISO 8601>
  kill_record: null | <AGS-08 output>
```

This state record is the single source of truth for article progress.
No stage may be entered without a valid state record from the previous stage.

---

## Step 1 — Topic Intake

**Script:** Pre-workflow (no AGS ID — human controller action)
**Inputs required from workflow controller:**
```yaml
topic_submission:
  title: <string — proposed article title>
  topic: <string — specific subject>
  short_outline: <3–6 bullet points — section headings only>
  declared_language: tamil | english
  declared_region: Tamil Nadu | Andhra Pradesh | Karnataka | Kerala | Pan South India
  declared_community: <string or "general">
  submitted_by: <workflow controller identifier>
  submission_date: <ISO 8601>
```

**Pre-submission checks (human controller responsible):**

| Check                                                  | Required |
|--------------------------------------------------------|----------|
| Topic relates to wedding rituals, ceremony, or traditions? | Yes  |
| Title contains no forbidden keywords (find, match, search, compatible)? | Yes |
| No tools, calculators, or interactive features implied? | Yes     |
| No matchmaking, dating, or spouse-search intent implied? | Yes    |
| Language declared and confirmed?                        | Yes     |
| Regional scope declared?                                | Yes     |

**Fail condition:** Any check fails → topic is rejected before workflow begins.
No AGS-08 record required — topic simply does not enter the workflow.

**Pass condition:** All checks pass → topic enters workflow, state record initialized.

---

## Step 2 — Intent Lock

**Script:** AGS-02
**Skill:** `intent-lock.md`
**Receives:** Topic submission from Step 1
**Produces:** `intent_lock_result`

**What happens:**
Intent Lock applies its four-test evaluation (primary purpose, audience,
dual-use risk, boundary topic) to the topic and outline.

**Routing:**

| Intent Lock Decision | Action                              |
|----------------------|-------------------------------------|
| PASS                 | Proceed to Step 3 (MCP Research)    |
| KILL                 | Route to AGS-08 — workflow ends     |

**State update:** Record `intent_lock_result.decision` and `timestamp` in article state.

**Non-negotiable rule:** No content may be written before Intent Lock returns PASS.
Any writing attempted before this gate is a workflow violation.

---

## Step 3 — MCP Research

**Script:** AGS-01
**Skill:** `mcp-research.md`
**Receives:** `intent_lock_result` (PASS only)
**Produces:** `research_output`

**What happens:**
MCP collects factual, cultural, and historical information from permitted
source categories only. Output is structured notes — no prose, no article content.

**Routing:**

| Research Flag    | Action                                             |
|------------------|----------------------------------------------------|
| CLEAN            | Proceed to Step 4 (Editorial Writing)              |
| REVIEW_NEEDED    | Proceed to Step 4 with flag noted in state record  |
| BLOCKED          | Route to AGS-08 — workflow ends                    |

**Retry rule:** If fewer than 3 clean notes returned → one retry with narrower focus permitted.
Second insufficient result → BLOCKED.

**State update:** Record `research_output.flag` and `source_categories_used` in article state.

---

## Step 4 — Editorial Writing (Initial Draft)

**Script:** AGS-03
**Skill:** `editorial-writer.md` (Mode A — Initial Draft)
**Receives:** Approved outline + `research_output`
**Produces:** `editorial_output` (initial draft)

**What happens:**
The editorial writer produces a complete first draft using the research notes
as its factual foundation. The draft must meet all constraints defined in
`editorial-writer.md` including word count, human signal requirements,
structural rules, and blocked phrase prohibition.

**Self-check before passing downstream:**

| Check                                        | Required |
|----------------------------------------------|----------|
| Word count 1200–2200?                        | Yes      |
| No blocked phrases detected?                  | Yes      |
| All human signals present?                    | Yes      |
| No cultural claims outside research notes?    | Yes      |
| No prohibited content (CTA, affiliate, tools)? | Yes    |

**Routing:**

| Self-Check Result         | Action                                        |
|---------------------------|-----------------------------------------------|
| All checks pass           | Proceed to Step 5 (Language Validation)       |
| Blocked phrase detected    | Regenerate — do not pass downstream           |
| Word count out of range    | Regenerate — do not pass downstream           |
| Human signals incomplete   | Regenerate — do not pass downstream           |

**State update:** Record `word_count`, `section_count`, `human_signals_present` summary.

---

## Step 5 — Language Validation

**Script:** Post AGS-03 (language check before cultural validation)
**Skill:** `language-tamil.md`
**Receives:** `editorial_output` from Step 4
**Produces:** `language_validation` result

**What happens:**
If the declared language is Tamil, the article is evaluated for full Tamil script
compliance, script quality, transliteration consistency, and absence of Tanglish
or Roman script violations.

**Note:** If declared language is English, this step confirms English-only compliance
and checks for accidental Tamil/English mixing. The step is not skipped for English articles.

**Routing:**

| Language Decision | Violations    | Action                               |
|-------------------|---------------|--------------------------------------|
| PASS              | 0             | Proceed to Step 6 (Cultural Validation) |
| FAIL              | 1–3 non-critical | Route to AGS-07 (one revision)    |
| KILL              | Any CRITICAL  | Route to AGS-08 — workflow ends      |
| KILL              | 4+ any        | Route to AGS-08 — workflow ends      |

**Revision note:** If routed to AGS-07 → revision fixes language only → returns to Step 5.
Second language failure → KILL.

**State update:** Record `language_validation.decision`, `violations_found`, `script_quality_score`.

---

## Step 6 — Cultural Validation

**Script:** AGS-04
**Skill:** `cultural-validator.md`
**Receives:** Language-validated article
**Produces:** `cultural_validation` result

**What happens:**
The cultural validator evaluates ritual factual accuracy, regional specificity,
community respect and neutrality, tone appropriateness, and language/transliteration
consistency — across five independent dimensions.

**Routing:**

| Cultural Decision | Issues Found    | Action                                  |
|-------------------|-----------------|-----------------------------------------|
| PASS              | 0               | Proceed to Step 7 (Trust Injection)     |
| FAIL              | 1–4 non-critical | Route to AGS-07 (one revision)         |
| KILL              | 5+              | Route to AGS-08 — workflow ends         |
| KILL              | Any CRITICAL    | Route to AGS-08 — workflow ends         |
| KILL              | Any hard fail   | Route to AGS-08 — workflow ends         |

**Post-revision rule:** If AGS-07 revision returns to this gate → threshold tightened.
3+ issues after revision → KILL regardless of severity.

**State update:** Record `cultural_validation.decision`, `issues_found`, `revision_notes` summary.

---

## Step 7 — Trust Signal Injection

**Script:** AGS-05
**Skill:** `trust-injector.md`
**Receives:** Culturally validated article (AGS-04 PASS only)
**Produces:** Trust-enhanced article

**What happens:**
The trust injector adds all six defined trust signals to the article:
author byline, informational disclaimer, last updated date, internal link reference,
canonical topic label, and meta title/description placeholders.
The article body must remain byte-identical to the validated input.

**Pre-injection gate:**

| Check                                          | Required |
|------------------------------------------------|----------|
| `cultural_validation_confirmed: true`?         | Yes      |
| Article body complete — no placeholder sections? | Yes    |
| Author pen name provided and consistent?       | Yes      |
| Internal link target available?               | Yes      |

**Routing:**

| Injection Result                      | Action                                      |
|---------------------------------------|---------------------------------------------|
| All 7 signals injected, no violations | Proceed to Step 8 (AdSense Review)          |
| Any signal missing                    | Re-run injection — do not pass downstream   |
| Prohibited addition detected          | Halt — flag to workflow controller          |
| Article body modified                 | Halt — skill integrity violation            |

**State update:** Record `signals_injected` confirmation and `injection_count`.

---

## Step 8 — AdSense Simulated Review

**Script:** AGS-06
**Skill:** `adsense-reviewer.md`
**Receives:** Trust-enhanced article from Step 7
**Produces:** `adsense_review` result

**What happens:**
The AdSense reviewer simulator evaluates the article across seven independent
dimensions: originality, editorial depth, human tone, clear purpose, policy
cleanliness, site trust signals, and AI detection risk.
Every dimension must meet its individual minimum — no averaging.

**Routing:**

| AdSense Decision     | Score / Condition                     | Action                          |
|----------------------|---------------------------------------|---------------------------------|
| PASS                 | All dimensions ≥ their minimum        | Proceed to Step 9 (Publication) |
| CONDITIONAL PASS     | One dimension at 6, rest passing      | Route to AGS-07 (targeted fix)  |
| FAIL                 | Any non-critical dimension 5–6        | Route to AGS-07 (one revision)  |
| KILL                 | Any critical dimension < 6            | Route to AGS-08                 |
| KILL                 | Any hard fail condition triggered     | Route to AGS-08                 |

**Post-revision rule:** Article returning from AGS-07 to this gate → second FAIL = KILL.
No article may be reviewed by AGS-06 more than twice.

**State update:** Record all 7 dimension scores, `approval_score`, and `decision`.

---

## AGS-07 — Revision Gate (Single Use)

**Script:** AGS-07
**Skill:** `editorial-writer.md` (Mode B — Targeted Revision)
**Maximum invocations:** Once per article across the entire workflow
**Triggered by:** Step 5 FAIL | Step 6 FAIL | Step 8 FAIL/CONDITIONAL PASS

**What happens:**
The editorial writer performs targeted fixes only — addressing the specific issues
listed in the revision notes from the triggering gate.
Unflagged sections must not be touched.
Trust signals (if already injected) must not be altered.

**Revision routing map:**

| Triggered by    | Revision Fixes         | Returns to         |
|-----------------|------------------------|--------------------|
| Step 5 (Language) | Language violations only | Step 5 re-check  |
| Step 6 (Cultural) | Cultural issues only   | Step 6 re-check    |
| Step 8 (AdSense)  | AdSense risks only     | Step 8 re-check    |

**Hard rules:**
- Revision count in state record must be 0 before AGS-07 is invoked
- After AGS-07, revision count becomes 1 — no further revisions permitted
- If the revised article fails its return gate → KILL. Route to AGS-08.
- AGS-07 may not be invoked twice regardless of which gates triggered it

**State update:** Record `revision_count: 1`, `issues_addressed`, `sections_unchanged`.

---

## Step 9 — Publication Queue

**Script:** Human controller action
**Receives:** AdSense-reviewed article (PASS only)

**Publication rules:**

| Rule                                          | Requirement                          |
|-----------------------------------------------|--------------------------------------|
| Maximum articles per day                      | 2                                    |
| Minimum gap between publications              | 4 hours                              |
| Backdating                                    | Strictly forbidden                   |
| Index delay after publication                 | 48 hours minimum                     |
| robots.txt during delay                       | noindex on new article URL           |
| Sitemap update                                | After index delay, not before        |
| Tool pages during approval phase              | Must remain noindex throughout       |

**Pre-publication checklist (human controller):**

| Check                                              | Required |
|----------------------------------------------------|----------|
| All 7 trust signals confirmed present?             | Yes      |
| AdSense review PASS confirmed in state record?     | Yes      |
| No prohibited content in final article?            | Yes      |
| Author pen name consistent with previous articles? | Yes      |
| Meta title and description finalized?              | Yes      |
| Internal link target is live or placeholder noted? | Yes      |
| Article URL follows site URL structure?            | Yes      |

**State update:** Record `published: true`, `publication_timestamp`, `index_delay_until`.

---

## 🚨 Absolute Kill Conditions

Any of the following ends the workflow immediately and routes to AGS-08.
No revision, appeal, or resubmission of the same topic is permitted.

| Kill Condition                                          | Triggered at Step |
|---------------------------------------------------------|-------------------|
| Intent Lock failure (any test)                          | Step 2            |
| Research BLOCKED (no authoritative sources)             | Step 3            |
| CRITICAL language violation                             | Step 5            |
| 4+ language violations                                  | Step 5            |
| CRITICAL cultural issue                                 | Step 6            |
| 5+ cultural issues                                      | Step 6            |
| Hard fail cultural condition (caste, community offense) | Step 6            |
| Any critical AdSense dimension below threshold          | Step 8            |
| Hard fail AdSense condition                             | Step 8            |
| Any prohibited content detected at any stage            | Any               |
| Revision count exceeds 1                                | Any               |
| Second failure at any gate after revision               | Any               |
| Resubmission of a previously killed topic               | Step 1            |

---
## Add article URL in the /blog screen

After the new article is created add the newly created article in the /blog screen


## 📊 Workflow Compliance Summary

At the end of each article's workflow, the state record must confirm:
```yaml
workflow_completion:
  topic: <string>
  all_gates_passed: true | false
  revision_used: true | false
  kill_triggered: true | false
  final_decision: PUBLISHED | KILLED
  total_stages_completed: integer
  compliance_confirmed: true | false
```

This record is retained as the audit trail for the AdSense approval phase.
It must be available for review if Google requests evidence of editorial process.

---
## End of Workflow