import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { RASI_SLUGS, dailyRasiPalan, rasiIndexFromSlug, rasiInfo, stars, weekOutlook } from '@/lib/rasi-palan';
import { HOUSE_PALAN_EN } from '@/lib/rasi-palan-en';
import { formatDateEn } from '@/lib/date-format';
import { langAlternates } from '@/lib/hreflang';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 1800;
export const dynamicParams = false;

export function generateStaticParams() {
  return RASI_SLUGS.map((rasi) => ({ rasi }));
}

export async function generateMetadata({ params }: { params: Promise<{ rasi: string }> }): Promise<Metadata> {
  const { rasi } = await params;
  const idx = rasiIndexFromSlug(rasi);
  if (idx < 0) return {};
  const info = rasiInfo(idx);
  const d = formatDateEn(cityTodayStr());
  const title = `${info.nameEn} Rasi Palan Today – ${d}`;
  const description = `Today's ${info.nameEn} rasi palan with a 7-day outlook: career, money, family and health, from the Moon's transit.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/en/rasi-palan/${rasi}`, languages: langAlternates(`/rasi-palan/${rasi}`, `/en/rasi-palan/${rasi}`) },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/en/rasi-palan/${rasi}`, type: 'website', locale: 'en_IN' },
  };
}

export default async function EnRasiDetailPage({ params }: { params: Promise<{ rasi: string }> }) {
  const { rasi } = await params;
  const idx = rasiIndexFromSlug(rasi);
  if (idx < 0) notFound();
  const info = rasiInfo(idx);
  const today = cityTodayStr();
  const pal = dailyRasiPalan(today).rasis[idx];
  const t = HOUSE_PALAN_EN[pal.house];
  const week = weekOutlook(today, idx);
  const rows: [string, string][] = [['Career', t.work], ['Money', t.money], ['Family & relationships', t.family], ['Health', t.health]];
  const jsonLd = generateToolJsonLd({ name: `${info.nameEn} Rasi Palan Today`, description: t.summary, path: `/en/rasi-palan/${rasi}`, faqs: [{ q: `What is today's horoscope for ${info.nameEn}?`, a: `${t.summary} ${t.work}` }] });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Rasi Palan', href: '/en/rasi-palan' }, { name: info.nameEn }]} />
          <header className="text-center mb-6">
            <div className="text-5xl mb-2">{info.symbol}</div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{info.nameEn} – Today&apos;s Rasi Palan</h1>
            <p className="text-gray-600">{formatDateEn(today)} · <Link href={`/rasi-palan/${rasi}`} className="text-primary font-bold">தமிழில்</Link></p>
            <p className="mt-2 text-amber-500 text-xl tracking-widest">{stars(pal.text.rating)}</p>
          </header>
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 mb-6">
            <p className="text-lg font-bold text-gray-900 mb-1">{t.summary}</p>
            {pal.house === 8 && <p className="text-sm text-rose-700 font-bold mb-2">⚠️ Chandrashtama today for this sign.</p>}
            <dl className="divide-y divide-gray-100">
              {rows.map(([k, v]) => (<div key={k} className="py-3"><dt className="text-sm font-bold text-primary mb-0.5">{k}</dt><dd className="text-gray-700 leading-relaxed">{v}</dd></div>))}
            </dl>
          </section>
          <AdsterraBanner format="300x250" className="mb-6" />
          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-black text-gray-900 mb-3">7-day outlook</h2>
            <ul className="divide-y divide-gray-100 text-sm">
              {week.map((w) => (<li key={w.dateStr} className="py-2.5 flex items-center justify-between gap-3"><span className="font-bold text-gray-800">{formatDateEn(w.dateStr)}</span><span className="text-amber-500 tracking-wider">{stars(w.rating)}</span></li>))}
            </ul>
          </section>
          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 text-sm text-gray-700">
            <p>Ruling planet: <strong>{info.lordEn}</strong> · Element: <strong>{info.elementEn}</strong></p>
          </section>
          <nav className="mb-6" aria-label="Other signs"><div className="flex flex-wrap gap-2">
            {RASI_SLUGS.map((s, i) => (<Link key={s} href={`/en/rasi-palan/${s}`} className={`px-3 py-1.5 rounded-full text-sm border ${i === idx ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300'}`}>{rasiInfo(i).nameEn.split(' ')[0]}</Link>))}
          </div></nav>
          <p className="text-xs text-gray-400">General guidance from the Moon&apos;s transit; individual charts differ. Not a substitute for professional advice.</p>
        </div>
      </div>
    </>
  );
}
