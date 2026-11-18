# Deploying kalyanaveedu.in (Cloudflare Pages)

The site is a **static export** (`output: 'export'`) hosted on **Cloudflare Pages**. It moved off Vercel in Nov 2026
after the Hobby plan was paused for fair-use overage.

| | |
|---|---|
| Live URL | https://www.kalyanaveedu.in (apex `kalyanaveedu.in` 301-redirects to `www`) |
| Pages project | `kalyanaveedu-tools` (Cloudflare account: Matrimony4u.tech) |
| GitHub repo | `SACglobe/kalyanaveedu_tools`, production branch `main` |
| Preview URL | https://kalyanaveedu-tools.pages.dev |

## Build settings (Cloudflare → Pages → Settings → Builds)

- Framework preset: **None**
- Build command: `npm run build`
- Output directory: `out`
- Variable: `NODE_VERSION` = `20`

Every push to `main` builds and deploys automatically (including the daily AI blog commit).

## How the static site stays current

There is no server, so nothing renders on request. Two things keep "today" correct:

1. **Rolling window of per-day pages** — `src/lib/static-budget.ts` pre-builds:
   - Tamil `/panchangam/<city>/<date>`: first 12 cities, 2 days back to 30 days ahead
   - English `/en/panchangam/<city>/<date>`: first 5 cities, 1 day back to 14 days ahead
   - Dates outside the window return **404** (by design). Prev/next links and the date strip only link to pages that exist (`hasDatePage`).
2. **Daily rebuild** — `.github/workflows/daily-rebuild.yml` runs at **00:05 IST** and POSTs to a Cloudflare deploy hook.
   - Secret **`CF_DEPLOY_HOOK`** (GitHub repo → Settings → Secrets → Actions) = the hook URL from
     Cloudflare → Pages → Settings → Builds → Deploy hooks (branch `main`). Keep it secret.
   - If this secret is missing the job fails with a clear error and the window stops moving.

The AI blog (`.github/workflows/generate-blog.yml`, daily 09:00 IST) commits a new article to `main`;
Cloudflare builds it. Don't add `[skip ci]` to its commit message (Cloudflare would skip the build).
The workflow waits for the article URL to return 200 before submitting it for indexing.

## Ads layout (Adsterra)

Ads sit in fixed, labelled, lazy-loaded slots; nothing overlays content and there are no popunders or social bars.

| Slot | Where | Size |
|---|---|---|
| Sidebar (sticky) | right column on screens >= 1280px, tool + panchangam + rasi/festival pages (`AdRail.tsx`) | 300x600 (300x250 until the unit below exists) |
| Result ad | directly under a tool's results (`ResultAd` in `AdPlacements.tsx`) | 728x90 on desktop, 300x250 on small screens |
| Wide banner | below "related tools" on every tool page (`WideBanner`, rendered by `RelatedTools.tsx`) | 728x90 on tablet/desktop, 320x50 on phones |

**300x600 half-page unit:** create a 300x600 banner unit for this site in the Adsterra dashboard, then set
`NEXT_PUBLIC_ADSTERRA_BANNER_300x600` to its key in Cloudflare Pages (Settings -> Variables and secrets) and rebuild
(it is baked in at build time). Until it is set the sidebar shows the 300x250 unit.

Adding ads to a new tool page: use `ResultAd` under the results and render `RelatedTools` at the end; do not add
extra banners. Keep it to about three ads per desktop page.

## Limits to respect

- **20,000 files per deploy** (free plan). Current build ≈ **13,000 files**. Each page costs ~9 files (Next 16 emits
  HTML + RSC prefetch files). Before widening `static-budget.ts` or adding many pages, run `npm run build` and check
  `find out -type f | wc -l`.
- 25 MiB per file; 500 builds/month; 100 pattern rules in `public/_redirects` (we use 5 plain rules).
- Per-date OG images were dropped to save files; city-level OG images remain.

## Redirects and headers

- `public/_redirects` — `/about-us`, `/privacy`, `/terms-conditions`, `/terms-of-service`, `/service-disclaimer`
- `public/_headers` — security headers (CSP, HSTS, X-Frame-Options…) and long cache for `/_next/static/*`
- `www` canonical + apex redirect are **Cloudflare dashboard** settings, not in the repo (see below).

## Domains / DNS (zone `kalyanaveedu.in`, DNS managed in Cloudflare)

- `www` → CNAME `kalyanaveedu-tools.pages.dev` (proxied) — created by Pages → Custom domains → `www.kalyanaveedu.in`.
- Apex → proxied record (the Pages CNAME or placeholder A `192.0.2.1`) + **Redirect Rule**
  "Redirect from root to WWW": `https://kalyanaveedu.in/*` → `https://www.kalyanaveedu.in/${1}`, 301.
- Do **not** add a Vercel record. Never turn on the redirect rule before `www` resolves (the site becomes unreachable).

## Troubleshooting

- *Site shows old/Vercel content on one machine only*: local DNS cache. `sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder`, or test with `curl --resolve www.kalyanaveedu.in:443:<cloudflare-ip>`.
- *Today's panchangam is yesterday's*: the daily rebuild didn't run — check the workflow and `CF_DEPLOY_HOOK`.
- *Build fails after adding pages*: check the 20,000-file limit first.
- *Wrong domain on a project*: removing a custom domain also deletes its DNS record. Re-add it to the right project.
