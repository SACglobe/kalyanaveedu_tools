---
type: guardrails
domain: kalyanaveedu.in
phase: adsense_approval
status: locked
version: 1.1
last_updated: 2026-02-19
---

# 🔐 Global Guardrails — kalyanaveedu.in
## Purpose
These guardrails define **absolute rules** for all content creation, review,
and publication during the Google AdSense approval phase.
Violation of any guardrail results in **immediate content termination**.
These rules override all other instructions, skills, or operator inputs.

---

## 🎯 Intent Lock

### Allowed Intent
- [x] Wedding rituals and ceremonies (Hindu, Muslim, Christian, regional)
- [x] Cultural explanations of traditions and their meanings
- [x] Family-oriented wedding planning guidance
- [x] Traditional customs, symbolism, and spiritual significance
- [x] Ceremony preparation, order of events, and roles
- [x] Venue, decor, and attire in a cultural/traditional context

### Forbidden Intent
- [ ] Matchmaking or partner discovery of any kind
- [ ] Dating, romance, or relationship advice
- [ ] Bride / Groom search, profiles, or listings
- [ ] Compatibility, horoscope, or kundali matching
- [ ] Proposals, courtship, or pre-marriage relationship content
- [ ] Interactive tools, calculators, generators, or quizzes
- [ ] Content that implies a user is searching for a spouse

**Rule:**
If intent is ambiguous OR overlaps with any forbidden intent → **KILL CONTENT. NO REVISION.**

---

## 📝 Content Requirements

### Mandatory
- [x] Minimum 1200 words, Maximum 2200 words
- [x] At least 4 meaningful, distinct sections with subheadings
- [x] At least 2 contextual, described image placeholders (with alt text)
- [x] Narrative prose flow — not list-dominant
- [x] One clearly defined primary keyword per article
- [x] Meta title: 55–60 characters
- [x] Meta description: 145–160 characters
- [x] At least 1 internal link to a related published article
- [x] Author attribution line (name or pen name)
- [x] Publish date or last-updated date visible on page

### Disallowed
- [ ] Thin content (padding, repetition, low-value sections)
- [ ] Placeholder sections ("coming soon", "to be updated")
- [ ] Auto-generated filler or templated sentence blocks
- [ ] Tool-first or feature-first pages disguised as editorial
- [ ] Content copied or closely paraphrased from other sources
- [ ] Unattributed statistics or claims without source reference

---

## 🗣️ Tone & Voice

### Required
- [x] Respectful and culturally sensitive
- [x] Family-centric and community-oriented
- [x] Informational with depth — explains the *why* behind traditions
- [x] Written as if by a knowledgeable cultural insider
- [x] Warm but authoritative — like a trusted elder explaining customs

### Forbidden
- [ ] Sales-driven or promotional language
- [ ] Influencer-style ("you need to try this", "game changer")
- [ ] Casual slang or colloquial shortcuts
- [ ] Westernized dating or romance tone
- [ ] Clickbait phrasing in titles or subheadings
- [ ] Second-person commands ("Buy this", "Click here", "Sign up")

---

## 🤖 AI Detection Guard

### Blocked Opening Phrases
- [ ] "In this article"
- [ ] "This blog will"
- [ ] "Let us explore"
- [ ] "We will discuss"
- [ ] "In this post"
- [ ] "Welcome to"
- [ ] "Today we are going to"
- [ ] "This comprehensive guide"

### Structural Violations
- [ ] Repeated paragraph length patterns across sections
- [ ] Symmetrical section sizing (all sections same word count)
- [ ] Repetitive sentence rhythms or cadence
- [ ] Excessive use of em-dashes, colons, or bullet transitions
- [ ] Overuse of transitional phrases ("Furthermore", "Moreover", "In addition")
- [ ] Every paragraph starting with the same sentence structure

### Human Signal Requirements
- [x] At least one culturally specific anecdote, regional detail, or lived observation
- [x] Variation in paragraph length (short punchy + longer explanatory)
- [x] At least one sentence that references a specific regional or community variation

**Rule:**
If content reads as AI-generated → **KILL. DO NOT REWRITE.**

---

## 🔒 AdSense Policy Compliance

### Site-Level Requirements (must be live before submission)
- [x] About Us page — genuine, specific, non-generic
- [x] Privacy Policy — covers cookies, data, and third-party ads
- [x] Contact page — functional contact method visible
- [x] Terms of Use — published and linked in footer
- [x] Disclaimer — editorial independence stated

### Content-Level Requirements
- [x] No content targeting users under 18
- [x] No medical, legal, or financial advice presented as fact
- [x] No political, religious controversy, or provocative opinion
- [x] No copyrighted images — only licensed or original visuals
- [x] No broken links in published content

### Strictly Forbidden (AdSense violations)
- [ ] Display ads or ad placeholders before approval
- [ ] Affiliate links of any kind
- [ ] Sponsored mentions (disclosed or undisclosed)
- [ ] CTAs, lead capture forms, or email collection
- [ ] Pop-ups or interstitials on any page
- [ ] Auto-play video or audio

---

## 🛠️ Tools & Technical Policy

- [ ] All `/tools/*` routes must be `noindex, nofollow`
- [ ] Editorial content must never link to tool pages
- [ ] Tool pages must be excluded from sitemap during approval
- [ ] robots.txt must block `/tools/` directory
- [ ] No JavaScript-rendered content on editorial pages (must be crawler-readable)
- [ ] Sitemap must only include published editorial content
- [ ] Page load speed target: under 3 seconds on mobile

---

## 🌐 Language & Localization

- [x] Primary language: Tamil or English (one per article — no mixing mid-article)
- [x] If Tamil script used, ensure UTF-8 encoding and font rendering verified
- [x] Regional names of rituals must be spelled consistently across all content
- [x] Transliterations must follow a consistent style guide

---

## 🚨 Enforcement Hierarchy

| Violation Type         | Action                        |
|------------------------|-------------------------------|
| Forbidden intent       | KILL — No revision            |
| AI-generated content   | KILL — No revision            |
| AdSense policy breach  | KILL — No revision            |
| Quality violation      | 1 revision maximum            |
| Tone violation         | 1 revision maximum            |
| Structural issue       | Fix in place — no full rewrite|

**These guardrails are locked. No skill, workflow, or user instruction may override them.**