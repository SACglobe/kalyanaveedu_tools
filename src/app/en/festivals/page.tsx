import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { festivalsForYear } from '@/lib/festivals';
import { WEEKDAYS_TAMIL } from '@/lib/astro-core/constants';
import { formatDateEn, parseDateStr } from '@/lib/date-format';
import { langAlternates } from '@/lib/hreflang';
import { SITE_CONFIG } from '@/lib/constants';

export const revalidate = 21600;

export function generateMetadata(): Metadata {
  const y = parseDateStr(cityTodayStr())!.y;
  const title = `Tamil Festival Dates ${y}–${y + 1}: Pongal, Deepavali, Navaratri, Karthigai Deepam`;
  const description = `Dates and weekdays of Tamil festivals in ${y} and ${y + 1}: Tamil New Year, Pongal, Vinayagar Chaturthi, Navaratri, Deepavali, Karthigai Deepam and more.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/en/festivals`, languages: langAlternates('/tools/festivals', '/en/festivals') },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/en/festivals`, type: 'website', locale: 'en_IN' },
  };
}

const weekdayEn = (dateStr: string) => {
  const p = parseDateStr(dateStr)!;
  return WEEKDAYS_TAMIL[new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay()].nameEn;
};

export default function EnFestivalsHub() {
  const today = cityTodayStr();
  const y = parseDateStr(today)!.y;
  const next = [y, y + 1].flatMap((yy) => festivalsForYear(yy)).find((f) => f.dateStr >= today);
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Festivals' }]} />
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Tamil Festival Dates {y}–{y + 1}</h1>
          <p className="text-gray-600"><Link href="/tools/festivals" className="text-primary font-bold">தமிழில் பார்க்க →</Link></p>
          {next && <p className="mt-4 inline-block bg-white border border-orange-200 rounded-2xl px-5 py-3 font-bold">Next: {next.icon} {next.nameEn} – {formatDateEn(next.dateStr)} ({weekdayEn(next.dateStr)})</p>}
        </header>
        <AdsterraBanner format="300x250" className="mb-6" />
        {[y, y + 1].map((yy) => (
          <section key={yy} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-8 mb-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">Festivals in {yy}</h2>
            <ul className="divide-y divide-gray-100">
              {festivalsForYear(yy).map((f) => (
                <li key={f.slug + f.dateStr} className="py-3 flex items-center justify-between gap-3">
                  <span><span className="font-bold text-gray-900">{formatDateEn(f.dateStr)}</span><span className="text-gray-400"> ({weekdayEn(f.dateStr)})</span></span>
                  <Link href={`/en/festivals/${f.slug}`} className="text-sm text-primary font-bold text-right">{f.icon} {f.nameEn}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="text-xs text-gray-400">Dates are computed for Chennai; local temple panchangams may differ by a day for some observances.</p>
      </div>
    </div>
  );
}
