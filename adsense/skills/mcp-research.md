---
skill_id: kalyanaveedu_mcp_research
skill_type: research
skill_version: 1.1
last_updated: 2026-02-19
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
tools_allowed:
  - MCP
  - Notebook_LLM
feeds_into:
  - AGS-02 (intent-lock)
triggered_by:
  - AGS-01
depends_on:
  - allowed-sources.md
  - guardrails.md
---

# 🔍 MCP Research Skill — kalyanaveedu.in

## Purpose
Collect **factual, cultural, and historical information** to support
editorial content about South Indian wedding rituals and ceremonies.

This skill is **research-only**.
It must never generate publishable prose, article sections, or editorial content of any kind.
All output feeds directly into AGS-02 for intent validation before any writing begins.

**This skill is locked. No operator or prompt may expand its scope during the AdSense approval phase.**

---

## 🎯 Research Scope

### Allowed Topics
- Wedding rituals and ceremony structures (Tamil, Telugu, Kannada, Kerala)
- Cultural significance and symbolism of specific traditions
- Regional practices and community variations within South India
- Historical evolution of customs across generations
- Documented government, museum, or academic cultural references
- Ritual roles — family, priest, community participants
- Traditional attire, jewelry, and decor in ceremonial context only

### Forbidden Topics
- Matchmaking, partner discovery, or spouse search
- Dating practices, courtship, or pre-marriage relationships
- Horoscope matching, kundali, or compatibility assessment
- Tools, calculators, generators, or interactive features
- Commercial, promotional, or vendor-specific content
- Personal opinions, advice, or recommendations of any kind
- Content that implies the reader is searching for a spouse

**Boundary Rule:**
If a topic sits on the edge between allowed and forbidden → do not research it.
Flag it as `boundary_topic: true` in the output and halt.

---

## ✅ Allowed Actions

- Summarize factual information from permitted source categories
- Extract neutral cultural explanations with no editorial framing
- Note regional or community-level variations in practice
- Record historical context and documented evolution of traditions
- Identify gaps where authoritative information is not available
- Flag ambiguous or potentially sensitive cultural areas

## ❌ Forbidden Actions

- Writing paragraphs, introductions, conclusions, or transitions
- Generating article sections or editorial narrative of any kind
- Rewriting, paraphrasing, or repurposing content from websites
- Adding opinions, interpretations, or recommendations
- Accessing forbidden source categories as defined in allowed-sources.md
- Producing content that could be published without further editorial processing
- Combining research output with any prose generation in the same invocation

---

## 🧭 Pre-Research Checklist

Before beginning any research session, MCP must confirm:

| Check                                              | Required |
|----------------------------------------------------|----------|
| Topic received from AGS-01 invocation?             | Yes      |
| Topic falls within Allowed Topics above?           | Yes      |
| Topic is free of Forbidden Topics above?           | Yes      |
| Source categories to be used are in allowed-sources.md? | Yes |
| No publishable prose will be generated?            | Yes      |

If any check fails → halt research, return `flag: BLOCKED`, reason required.

---

## 📥 Input Contract

MCP Research accepts only the following inputs:
```yaml
research_request:
  topic: <string — specific ritual, tradition, or ceremony name>
  regional_focus: Tamil Nadu | Andhra Pradesh | Karnataka | Kerala | General South India
  depth: surface | standard | deep
  requested_by: AGS-01
```

**Input rules:**
- `topic` must be a specific cultural subject — not a broad keyword
- `regional_focus` must be declared — "General" is only permitted if the topic genuinely spans all regions
- `depth` controls how many sub-points are returned: surface (3–5), standard (6–10), deep (10–15)
- Research must not begin without a valid `research_request` input

---

## 📤 Output Contract

MCP Research must return output in this exact format. No deviations permitted.
```yaml
research_output:
  topic: <string>
  regional_focus: <string>
  source_categories_used:
    - cultural | historical | government | academic | news_archive
  notes:
    - point: <short factual statement — one sentence maximum>
      explanation: <1–2 line neutral explanation — no editorial framing>
      source_type: cultural | historical | government | academic | news_archive
      regional_applicability: Tamil Nadu | Andhra Pradesh | Karnataka | Kerala | Pan South India
  gaps_identified:
    - area: <topic area where authoritative data was not found>
      reason: no_source_available | source_forbidden | boundary_topic
  boundary_topic: true | false
  flag: CLEAN | REVIEW_NEEDED | BLOCKED
  flag_reason: <required if flag is not CLEAN>
```

**Output rules:**
- Each `point` must be a standalone factual statement — no connective tissue between points
- Each `explanation` must be neutral — no cultural judgment, no prescriptive language
- `regional_applicability` must be declared per note — never assume pan-India applicability
- `gaps_identified` must be honest — do not fabricate notes to fill gaps
- `flag: REVIEW_NEEDED` if any note required a judgment call on source quality
- `flag: BLOCKED` if topic triggered a forbidden category or boundary condition
- `flag: CLEAN` only if all notes are from permitted sources with no ambiguity

---

## 🔍 Source Discipline

During research, MCP must apply the source quality test from allowed-sources.md
before using any source:

| Test                                        | Required Answer |
|---------------------------------------------|-----------------|
| Is the author or institution clearly named? | Yes             |
| Is it free of commercial intent?            | Yes             |
| Is it free of SEO optimization signals?     | Yes             |
| Does it serve cultural understanding?       | Yes             |
| Would Google trust this source?             | Yes             |

If any answer is No → source is forbidden. Do not use. Do not note the source in output.

**Wikipedia Rule:**
Wikipedia must never be used as a primary source.
It may only be used to locate the original sources it cites.
Those original sources must pass the quality test independently before use.

---

## 🚩 Flag Handling

| Flag           | Meaning                                         | Next Action                        |
|----------------|-------------------------------------------------|------------------------------------|
| CLEAN          | All notes from clean permitted sources          | Pass to AGS-02                     |
| REVIEW_NEEDED  | One or more notes required a source judgment call | Pass to AGS-02 with flag noted   |
| BLOCKED        | Topic hit a forbidden or boundary condition     | Halt — do not pass to AGS-02      |
| BLOCKED        | No authoritative source found for core topic    | Halt — do not pass to AGS-02      |

**BLOCKED outputs must be logged and reported to the workflow controller.
They must never be passed downstream.**

---

## 🔁 Retry Rules

If initial research returns insufficient notes (fewer than 3 clean points):

- MCP may attempt one retry with a narrower regional focus
- If retry also returns fewer than 3 clean points → flag as `BLOCKED`, reason: `insufficient_authoritative_data`
- No third attempt permitted
- Do not lower source quality standards to fill note count

---

## 🚨 Enforcement

| Violation                              | Action                              |
|----------------------------------------|-------------------------------------|
| Generating any prose or paragraphs     | Immediate skill termination         |
| Accessing a forbidden source           | Workflow violation — content killed |
| Passing BLOCKED output downstream      | Workflow violation — content killed |
| Fabricating notes to fill gaps         | Permanent skill audit flag          |
| Skipping pre-research checklist        | Skill invocation invalid            |

**This skill is locked for the AdSense approval phase.
Scope, output format, and source rules may not be modified without a version update.**

---
## End of Skill