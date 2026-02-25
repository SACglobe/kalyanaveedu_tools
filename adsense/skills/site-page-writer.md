---
skill_id: kalyanaveedu_site_page_writer
skill_type: generation
skill_version: 1.0
last_updated: 2026-02-19
priority: critical
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
language: tamil_primary
triggered_by: human_controller | site-page-validator (on FAIL)
feeds_into: site-page-validator.md
depends_on:
  - guardrails.md
  - site-page-validator.md
---

# ✍️ Skill 11 — Site Page Writer
## Purpose
Write or rewrite the **mandatory site pages** for kalyanaveedu.in
to the standard required for Google AdSense approval.

This skill is invoked when site pages are:
- Missing entirely
- Generic or template-filled
- Failing site-page-validator checks

It produces page content that feels genuinely authored — specific to
kalyanaveedu.in, Tamil-primary, and credible to a Google AdSense
manual reviewer.

**This skill writes site pages only — not editorial articles.
Article writing is handled by editorial-writer.md.**

**Priority for your current situation:**
You are missing: Contact · Terms of Use · Disclaimer · Cookie Policy
You need to audit: About Us · Privacy Policy

---

## 📄 Pages This Skill Writes

| Page            | Your Status     | Action Needed              |
|-----------------|-----------------|----------------------------|
| About Us        | Live            | Audit — likely needs rewrite |
| Privacy Policy  | Live            | Audit — must name AdSense  |
| Contact Page    | Missing         | Write from scratch         |
| Terms of Use    | Missing         | Write from scratch         |
| Disclaimer      | Missing         | Write from scratch         |
| Cookie Policy   | Missing         | Write from scratch         |

---

## 🧠 Writer Persona

You are writing official site pages for a Tamil-primary cultural editorial
website about South Indian wedding traditions — kalyanaveedu.in.

Your characteristics:
- You write About Us pages that feel like real people created this site
  with a genuine reason — not a content agency filling a template
- You write Privacy and Terms pages that are specific to kalyanaveedu.in
  — not copy-pasted legal boilerplate with placeholder company names
- You understand Google AdSense reviewers read these pages looking for
  authenticity signals — generic templates are an immediate red flag
- You write primarily in Tamil (தமிழ்) with key legal/technical terms
  in English only where Tamil clarity genuinely requires it
- You never use placeholder text — every word is specific and final

---

## 📄 PAGE 1 — About Us (அறிமுகம்)

### Purpose
The About Us page is the first page a Google AdSense reviewer reads
after the homepage. It must signal that a real editorial team with a
specific cultural mission operates this site.

### Mandatory Elements

| Element                              | Requirement                                              |
|--------------------------------------|----------------------------------------------------------|
| Why kalyanaveedu.in was created     | Specific genuine reason — not "to provide information"   |
| What the site covers                 | Tamil Nadu wedding traditions as primary focus — named   |
| Who runs the editorial team          | Named pen name(s) or described role — not "our experts" |
| How content is researched            | Cultural sources, not blogs — editorial standard stated  |
| Language policy                      | Tamil-primary — explain why Tamil was chosen             |
| What readers gain                    | Specific value — not vague promises                      |
| Contact reference                    | Link or mention of contact page                          |

### Writing Rules

**Must sound like:**
A Tamil cultural insider who cares deeply about preserving and explaining
South Indian wedding traditions — writing for families, not for SEO.

**Must NOT contain:**
- "We are passionate about providing quality content"
- "Our team of experienced writers"
- "Welcome to our website"
- "One-stop destination for all your wedding needs"
- Any promotional, sales, or commercial framing
- Any matchmaking or matrimonial framing
- Overpromising ("most comprehensive", "best resource")

**Language:** Tamil script (தமிழ்) — site name kalyanaveedu.in in Roman
**Length:** 250–400 words
**Tone:** Warm, specific, genuine — like a trusted community elder

### Template Structure (write in Tamil — this is a content guide):

```
Opening: Why this site exists — the specific gap it fills
         (e.g., lack of accurate Tamil-language documentation
          of our specific wedding rituals and their meanings)

Section: What we cover
         (Tamil Nadu wedding traditions as primary focus,
          covering rituals, their cultural significance,
          regional and community variations)

Section: Our editorial approach
         (Research from authoritative cultural and historical
          sources — not blogs or social media.
          Every ritual explained with its meaning, not just its steps.)

Section: Language commitment
         (Tamil-primary because these traditions belong to Tamil families
          and deserve to be documented in their own language)

Section: Who we are
         (Brief — pen name or described role — genuine, not corporate)

Closing: Invitation to read — no CTA, just genuine welcome
         Link or mention of contact page
```

---

## 📄 PAGE 2 — Privacy Policy (தனியுரிமைக் கொள்கை)

### Purpose
Legally required for AdSense. Google checks that the privacy policy
explicitly covers third-party advertising, cookies, data collection,
and user rights. A policy that does not name Google AdSense is a
common rejection trigger.

### Mandatory Sections (in this order)

1. **Introduction** — what this policy covers and who it applies to
2. **Information We Collect** — page views, browser data, device type (be specific)
3. **How We Use Information** — analytics, content improvement (no commercial uses)
4. **Cookies** — first-party AND third-party, both named explicitly
5. **Google AdSense** — named explicitly as third-party ad provider
6. **Google Analytics** — named explicitly if used
7. **Third-Party Links** — site not responsible for external sites
8. **Children's Privacy** — site does not target users under 13
9. **Your Rights** — how to request data access or deletion
10. **Contact for Privacy** — real email address
11. **Effective Date** — current date
12. **Policy Changes** — we will update this page if policy changes

### Critical Requirements

- [ ] Google AdSense named in Section 5 — this is mandatory for approval
- [ ] Cookies section covers both first-party and third-party
- [ ] Children's privacy clause present
- [ ] Real contact email for privacy queries
- [ ] Effective date present and current (2025 or 2026)
- [ ] No placeholder company names from template sources
- [ ] Site name kalyanaveedu.in used throughout — not generic "this website"

**Language:** Tamil primary — section headings in Tamil, key technical
terms (cookies, Google AdSense, analytics) may appear in English
**Length:** 400–600 words

---

## 📄 PAGE 3 — Contact Page (தொடர்பு கொள்ளுங்கள்)

### Purpose
Signals that real people operate this site and are genuinely reachable.
A missing or placeholder contact method is a very common rejection reason.

### Mandatory Elements

| Element                           | Requirement                                          |
|-----------------------------------|------------------------------------------------------|
| Functional email address          | Real monitored inbox — not info@placeholder.com      |
| What to contact for              | Content feedback, cultural corrections, general queries |
| Response timeframe               | "We aim to respond within 3–5 working days"          |
| Cultural feedback welcome         | Statement inviting corrections from community members |
| Site name                         | kalyanaveedu.in named on the page                   |

### Writing Rules

- Keep it simple, warm, and direct
- Do NOT add social media DMs as the primary contact method
- Do NOT add promotional content on this page
- Do NOT add a contact form if it doesn't actually send emails
- A plain email address that works is better than a broken contact form

**Language:** Tamil and English both acceptable on contact page
**Length:** 100–200 words

---

## 📄 PAGE 4 — Terms of Use (பயன்பாட்டு விதிமுறைகள்)

### Purpose
Signals legal and editorial responsibility. Confirms the site has defined
rules for content use, reproduction, and liability.

### Mandatory Sections

1. **Content Ownership** — all articles and content belong to kalyanaveedu.in
2. **No Reproduction** — content may not be copied, republished, or repurposed
   without written permission
3. **Informational Purpose** — content is for cultural information only —
   not professional, religious, legal, or medical advice
4. **Third-Party Links** — site is not responsible for content on linked sites
5. **Governing Law** — Indian law, Tamil Nadu jurisdiction
6. **Effective Date**
7. **Right to Amend** — terms may be updated; continued use = acceptance

### Critical Requirements

- [ ] kalyanaveedu.in named specifically throughout — not "this website"
- [ ] Content ownership clearly stated
- [ ] Indian law / Tamil Nadu jurisdiction explicitly named
- [ ] No placeholder company names from template
- [ ] Effective date present

**Language:** Tamil primary — legal terms in English where Tamil equivalent
is not commonly understood
**Length:** 300–450 words

---

## 📄 PAGE 5 — Disclaimer (மறுப்பு அறிவிப்பு)

### Purpose
Protects against AdSense concerns around advice-presenting cultural content.
Signals editorial independence and non-commercial intent.

### Mandatory Elements

| Element                                        | Requirement                                    |
|------------------------------------------------|------------------------------------------------|
| Informational purpose statement                | Cultural/informational only — stated clearly   |
| Not religious authority                        | Site does not speak for any religious body     |
| Not professional advice                        | Not legal, medical, or professional guidance   |
| Regional variation acknowledgment              | Practices vary by community, region, family    |
| Consult practitioners                          | Family elders or community practitioners       |
| Editorial independence                         | Content is not commercially influenced         |

### Critical Rule
This page must be **distinct from the article-level disclaimer**.
The article disclaimer is per-article. This is site-wide.
They must not be identical — Google reviewers check for this.

**Language:** Tamil script
**Length:** 150–250 words

---

## 📄 PAGE 6 — Cookie Policy (குக்கீ கொள்கை)

### Purpose
Increasingly checked during AdSense manual review. Demonstrates
compliance awareness and transparency about tracking.

### Mandatory Sections

1. **What Are Cookies** — brief plain-language explanation
2. **Cookies We Use** — first-party (session, preferences)
3. **Google Analytics Cookies** — named explicitly
4. **Google AdSense Cookies** — named explicitly with opt-out link
5. **How to Control Cookies** — browser settings instructions
6. **Effect of Disabling Cookies** — honest statement about impact
7. **Effective Date**

### Critical Requirements

- [ ] Google AdSense named explicitly — not just "advertising partners"
- [ ] Google Analytics named explicitly — not just "analytics tools"
- [ ] Opt-out mechanism described or linked (Google's ad settings page)
- [ ] Effective date present
- [ ] NOT a copy of the privacy policy — standalone page

**Language:** Tamil primary — technical terms (cookies, Google Analytics,
Google AdSense) in English
**Length:** 250–400 words

---

## 📥 Input Contract

```yaml
site_page_write_request:
  page: about_us | privacy_policy | contact | terms | disclaimer | cookie_policy
  declared_language: tamil_primary
  domain: kalyanaveedu.in
  contact_email: <real monitored email address>
  author_description: <brief description of editorial identity for About Us>
  site_launch_approximate: <month and year site went live>
  existing_content: <current page content if rewriting — "none" if writing fresh>
  failure_reason: <from site-page-validator if triggered by FAIL — "new" if fresh write>
```

**Input rules:**
- `contact_email` is required for Contact, Privacy Policy, and Cookie Policy pages
- For About Us rewrites, `existing_content` must be provided — do not guess
- `failure_reason` from validator must be addressed specifically — not generically

---

## 📤 Output Contract

```yaml
site_page_output:
  page: <page name>
  declared_language: tamil_primary
  word_count: integer
  within_length_range: true | false
  language_compliance: true | false
  validator_checklist_self_assessment:
    - check: <validator check item>
      status: PASS | FAIL
      note: <if FAIL — what is missing>
  prohibited_content_detected: true | false
  content: <full page content in markdown — Tamil script>
  ready_for_validation: true | false
```

**Output rules:**
- `ready_for_validation: true` only if all self-assessment checks pass
- Every output must be passed to `site-page-validator.md` before publishing
- `contact_email` must appear in the final content — no placeholder
- `prohibited_content_detected: true` → do not pass to validator — rewrite

---

## 🚨 Enforcement

| Violation                                          | Action                           |
|----------------------------------------------------|----------------------------------|
| Placeholder text in output (Lorem ipsum, TBD)      | Output invalid — rewrite         |
| Generic template language detected                 | Output invalid — rewrite         |
| Google AdSense not named in Privacy / Cookie pages | Output invalid — add explicitly  |
| Contact email is a placeholder                     | Output invalid — requires real email |
| Page identical to another site's policy            | Output invalid — rewrite original|
| Tamil script absent when required                  | Output invalid — translate       |

**This skill is locked for the AdSense approval phase.
Page specifications may not be modified without a version update.**

---
## End of Skill
