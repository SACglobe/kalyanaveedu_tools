# ACTION-PLAN: kalyanaveedu.in (Prioritized SEO Fixes)

This plan prioritizes fixes based on their impact on **Indexation**, **Authority**, and **AdSense Approval**.

## Phase 1: Technical & AI Governance (Priority: High)
*Estimated Effort: 15 mins*

1.  **[FIX] Update Canonical to Absolute URLs**
    - **Target:** `src/app/layout.tsx` and all blog `page.tsx`.
    - **Action:** Change `canonical: './'` to `${SITE_CONFIG.url}/`.
2.  **[FIX] Implement AI Crawler Rules**
    - **Target:** `src/app/robots.ts`.
    - **Action:** Add `GPTBot`, `ClaudeBot`, and `Applebot-Extended` specific rules.
3.  **[NEW] Create `llms.txt`**
    - **Target:** `public/llms.txt`.
    - **Action:** Add a brief summary of the site's tools and articles for LLM crawlers.

## Phase 2: Schema & Entity Enrichment (Priority: Medium)
*Estimated Effort: 30 mins*

1.  **[FIX] Update Organization Schema**
    - **Target:** `src/components/SEO/Schema.tsx`.
    - **Action:** Populate `sameAs` with social links (if available) or at least the founder's profile (e.g., [selvan.dev](https://selvan.dev)).
2.  **[NEW] Add ItemList Schema to Home Page**
    - **Target:** `src/app/page.tsx`.
    - **Action:** Add a `BreadcrumbList` or `ItemList` schema that explicitly lists the 7 tools to assist Google in understanding the site's utility nature.

## Phase 3: Content & AEO (Priority: Low)
*Estimated Effort: Ongoing*

1.  **[EXPANSION] Long-tail Blog Content**
    - **Action:** Create specific pages for each month (e.g., "ஏப்ரல் 2026 சுப முகூர்த்த நாட்கள்") to capture highly specific search intent.
2.  **[UX] Image Alt Text Audit**
    - **Action:** Ensure all icons and icons in `TOOLS_LIST` have descriptive `aria-label` or hidden text for screen readers (improves accessibility and visual SEO).

---

## Status Tracking
- [ ] Absolute Canonicals
- [ ] AI Bot Rules in Robots.ts
- [ ] public/llms.txt
- [ ] sameAs in Organization Schema
- [ ] ItemList on Home Page
