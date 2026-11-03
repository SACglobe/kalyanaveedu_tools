import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { dailyRasiPalan, rasiInfo, stars } from '@/lib/rasi-palan';
import { HOUSE_PALAN_EN, RASI_SLUG_EN } from '@/lib/rasi-palan-en';
import { formatDateEn } from '@/lib/date-format';
import { langAlternates } from '@/lib/hreflang';
import { SITE_CONFIG } from '@/lib/constants';

export const revalidate = 1800;

export function generateMetadata(): Metadata {
  const d = formatDateEn(cityTodayStr());
  const title = `Today Rasi Palan – Daily Tamil Horoscope for ${d}`;
  const description = `Daily rasi palan for all 12 signs from Mesha (Aries) to Meena (Pisces), based on the Moon's transit (Chandra gochara). Updated ${d}.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/en/rasi-palan`, languages: langAlternates('/rasi-palan', '/en/rasi-palan') },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/en/rasi-palan`, type: 'website', locale: 'en_IN' },
  };
}

export default function EnRasiPalanPage() {
  const today = cityTodayStr();
  const day = dailyRasiPalan(today);
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Rasi Palan' }]} />
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Today Rasi Palan</h1>
          <p className="text-gray-600">Daily horoscope · {formatDateEn(today)}</p>
          <p className="text-sm text-gray-500 mt-2">Moon today: {day.segments.map((s) => s.rasiTa).join(' → ')} (<Link href="/rasi-palan" className="text-primary font-bold">தமிழில்</Link>)</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {day.rasis.map((r) => {
            const info = rasiInfo(r.rasiIdx);
            return (
              <Link key={info.slug} href={`/en/rasi-palan/${info.slug}`} className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-orange-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-black text-gray-900 group-hover:text-primary"><span className="mr-2">{info.symbol}</span>{info.nameEn}</h2>
                  <span className="text-amber-500 text-sm tracking-wider">{stars(r.text.rating)}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{HOUSE_PALAN_EN[r.house].summary}</p>
              </Link>
            );
          })}
        </div>
        <AdsterraBanner format="300x250" className="my-8" />
        <p className="text-sm text-gray-600 bg-white rounded-2xl border border-gray-100 p-5 leading-relaxed">
          These forecasts use the Moon&apos;s house from your birth sign (Chandra gochara). They are general guidance and do not consider your full birth chart. Not a substitute for medical, legal or financial advice.
        </p>
      </div>
    </div>
  );
}
