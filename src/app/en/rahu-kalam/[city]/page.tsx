import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import CityLinks from '@/components/tools/CityLinks';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { TAMIL_CITIES, getCityById } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { calculateRahuKalam, calculateYamakandam, calculateKuligai, calculateGowriPanchangam } from '@/lib/astro-core/panchangam';
import { parseDateStr, formatDateEn } from '@/lib/date-format';
import { langAlternates } from '@/lib/hreflang';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 1800;
export const dynamicParams = false;

export function generateStaticParams() {
  return TAMIL_CITIES.map((c) => ({ city: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) return {};
  const title = `Rahu Kalam Today in ${city.nameEn} – Yamakandam & Nalla Neram`;
  const description = `Today's Rahu Kalam, Yamakandam, Kuligai and Gowri Nalla Neram timings for ${city.nameEn}, calculated from local sunrise.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/en/rahu-kalam/${id}`, languages: langAlternates(id === 'chennai' ? '/tools/rahu-kalam' : `/tools/rahu-kalam/${id}`, `/en/rahu-kalam/${id}`) },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/en/rahu-kalam/${id}`, type: 'website', locale: 'en_IN' },
  };
}

export default async function EnRahuKalamCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) notFound();
  const today = cityTodayStr(city);
  const p = parseDateStr(today)!;
  const wall = new Date(p.y, p.m - 1, p.d);
  const rahu = calculateRahuKalam(wall, city);
  const yama = calculateYamakandam(wall, city);
  const kuligai = calculateKuligai(wall, city);
  const gowri = calculateGowriPanchangam(wall, city);
  const good = gowri.daySegments.filter((s) => s.isAuspicious);
  const answer = `On ${formatDateEn(today)} (${rahu.weekdayEn}) Rahu Kalam in ${city.nameEn} is from ${rahu.window.startFormatted} to ${rahu.window.endFormatted}.`;
  const jsonLd = generateToolJsonLd({
    name: `Rahu Kalam Today in ${city.nameEn}`,
    description: answer,
    path: `/en/rahu-kalam/${id}`,
    faqs: [
      { q: `What time is Rahu Kalam today in ${city.nameEn}?`, a: answer },
      { q: 'What is Rahu Kalam?', a: 'Rahu Kalam is a daily period of about 90 minutes (one of eight parts of the daytime) ruled by Rahu, considered inauspicious for starting new ventures, weddings, and important contracts.' },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Panchangam', href: '/en/panchangam' }, { name: `Rahu Kalam ${city.nameEn}` }]} />
          <header className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Rahu Kalam Today in {city.nameEn}</h1>
            <p className="text-gray-700 bg-white border border-orange-100 rounded-2xl p-4">{answer}</p>
            <p className="text-xs text-gray-400 mt-2">Updated: {formatDateEn(today)} · Sunrise {rahu.sunriseFormatted}, sunset {rahu.sunsetFormatted}</p>
          </header>
          <AdsterraBanner format="300x250" className="mb-6" />
          <section className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-rose-50 rounded-2xl border border-rose-100 p-5">
              <h2 className="text-lg font-black text-rose-900 mb-3">Times to avoid</h2>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="font-bold">Rahu Kalam</dt><dd>{rahu.window.startFormatted} – {rahu.window.endFormatted}</dd></div>
                <div className="flex justify-between"><dt className="font-bold">Yamakandam</dt><dd>{yama.window.startFormatted} – {yama.window.endFormatted}</dd></div>
                <div className="flex justify-between"><dt className="font-bold">Kuligai</dt><dd>{kuligai.window.startFormatted} – {kuligai.window.endFormatted}</dd></div>
              </dl>
            </div>
            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-5">
              <h2 className="text-lg font-black text-emerald-900 mb-3">Nalla Neram (daytime)</h2>
              <ul className="space-y-1.5 text-sm">
                {good.map((s, i) => <li key={i} className="flex justify-between"><span className="font-bold">{s.nameEn}</span><span>{s.window.startFormatted} – {s.window.endFormatted}</span></li>)}
              </ul>
            </div>
          </section>
          <p className="text-sm mb-6"><Link href={`/en/panchangam/${id}`} className="text-primary font-bold">Full panchangam for {city.nameEn} →</Link> · <Link href={id === 'chennai' ? '/tools/rahu-kalam' : `/tools/rahu-kalam/${id}`} className="text-primary font-bold">தமிழில் பார்க்க →</Link></p>
        </div>
        <CityLinks english basePath="/en/rahu-kalam" title="Rahu Kalam in other cities" currentId={id} />
      </div>
    </>
  );
}
