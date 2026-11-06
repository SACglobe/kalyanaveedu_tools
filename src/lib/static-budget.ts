import { TAMIL_CITIES } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';

/**
 * The site is a static export (Cloudflare Pages: max 20,000 files per deploy), so the per-day
 * panchangam pages can't be rendered on demand. We pre-build a rolling window for the main cities
 * and rebuild daily (see .github/workflows/daily-rebuild.yml) so "today" is always inside it.
 */
type Lang = 'ta' | 'en';

// Tamil is the primary language; English gets a smaller window (every page costs ~9 files).
const BUDGET = {
  ta: { cities: Number(process.env.DATE_PAGE_CITIES ?? 12), back: 2, ahead: Number(process.env.DATE_PAGE_DAYS_AHEAD ?? 30) },
  en: { cities: 5, back: 1, ahead: 14 },
} as const;

function addDays(ymd: string, n: number): string {
  const [y, m, d] = ymd.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + n));
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`;
}

export function dateWindowParams(lang: Lang = 'ta'): { city: string; date: string }[] {
  const b = BUDGET[lang];
  const out: { city: string; date: string }[] = [];
  for (const c of TAMIL_CITIES.slice(0, b.cities)) {
    const today = cityTodayStr(c);
    for (let i = -b.back; i <= b.ahead; i++) out.push({ city: c.id, date: addDays(today, i) });
  }
  return out;
}

const built: Partial<Record<Lang, Set<string>>> = {};
/** True when `/panchangam/<city>/<date>` (or the /en/ version) exists in this static build. */
export function hasDatePage(lang: Lang, cityId: string, date: string): boolean {
  const set = (built[lang] ??= new Set(dateWindowParams(lang).map((p) => `${p.city}/${p.date}`)));
  return set.has(`${cityId}/${date}`);
}
