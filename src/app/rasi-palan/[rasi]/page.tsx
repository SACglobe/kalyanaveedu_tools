import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { RASI_SLUGS, dailyRasiPalan, rasiIndexFromSlug, rasiInfo, stars, weekOutlook, HOUSE_PALAN } from '@/lib/rasi-palan';
import { formatDateEn, formatDateTa } from '@/lib/date-format';
import { SITE_CONFIG } from '@/lib/constants';
import { langAlternates } from '@/lib/hreflang';
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
  const t = formatDateTa(cityTodayStr());
  const title = `${info.nameTa} ராசி இன்றைய பலன் – ${t} | ${info.nameEn.split(' ')[0]} Rasi Palan Today`;
  const description = `${info.nameTa} ராசிக்கான இன்றைய பலன், 7 நாள் முன்னோட்டம்: தொழில், பணம், குடும்பம், ஆரோக்கியம். Today's ${info.nameEn} rasi palan in Tamil.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/rasi-palan/${rasi}`, languages: langAlternates(`/rasi-palan/${rasi}`, `/en/rasi-palan/${rasi}`) },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/rasi-palan/${rasi}`, type: 'website', locale: 'ta_IN' },
  };
}

export default async function RasiDetailPage({ params }: { params: Promise<{ rasi: string }> }) {
  const { rasi } = await params;
  const idx = rasiIndexFromSlug(rasi);
  if (idx < 0) notFound();
  const info = rasiInfo(idx);
  const today = cityTodayStr();
  const day = dailyRasiPalan(today);
  const pal = day.rasis[idx];
  const week = weekOutlook(today, idx);

  const jsonLd = generateToolJsonLd({
    name: `${info.nameTa} ராசி இன்றைய பலன்`,
    description: pal.text.summary,
    path: `/rasi-palan/${rasi}`,
    faqs: [{ q: `இன்று ${info.nameTa} ராசிக்கு பலன் என்ன?`, a: `${pal.text.summary} ${pal.text.work}` }],
  });

  const rows: [string, string][] = [
    ['தொழில் / வேலை', pal.text.work],
    ['பணம்', pal.text.money],
    ['குடும்பம் / உறவுகள்', pal.text.family],
    ['ஆரோக்கியம்', pal.text.health],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'ராசி பலன்', href: '/rasi-palan' }, { name: info.nameTa }]} />
          <header className="text-center mb-6">
            <div className="text-5xl mb-2">{info.symbol}</div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{info.nameTa} ராசி – இன்றைய பலன்</h1>
            <p className="text-gray-600">{info.nameEn} Rasi Palan Today · {formatDateTa(today)} · {formatDateEn(today)}</p>
            <p className="mt-2 text-amber-500 text-xl tracking-widest" aria-label={`${pal.text.rating} / 5`}>{stars(pal.text.rating)}</p>
          </header>

          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 mb-6">
            <p className="text-lg font-bold text-gray-900 mb-1">{pal.text.summary}</p>
            {pal.house === 8 && (
              <p className="text-sm text-rose-700 font-bold mb-2">⚠️ இன்று உங்களுக்கு சந்திராஷ்டமம்.</p>
            )}
            {pal.laterHouse && (
              <p className="text-sm text-gray-600 mb-3">
                சந்திரன் இடம் மாறுவதால் {pal.laterHouse.fromFormatted === 'காலை' ? 'காலை முதல்' : `${pal.laterHouse.fromFormatted}க்குப் பிறகு`}: {pal.laterHouse.text.summary}
              </p>
            )}
            <dl className="divide-y divide-gray-100">
              {rows.map(([k, v]) => (
                <div key={k} className="py-3">
                  <dt className="text-sm font-bold text-primary mb-0.5">{k}</dt>
                  <dd className="text-gray-700 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <AdsterraBanner format="300x250" className="mb-6" />

          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-black text-gray-900 mb-3">7 நாள் முன்னோட்டம்</h2>
            <ul className="divide-y divide-gray-100 text-sm">
              {week.map((w) => (
                <li key={w.dateStr} className="py-2.5 flex items-center justify-between gap-3">
                  <span className="font-bold text-gray-800 shrink-0">{formatDateTa(w.dateStr)}</span>
                  <span className="text-gray-500 text-right hidden sm:block">{w.house === 8 ? 'சந்திராஷ்டமம்' : HOUSE_PALAN[w.house].summary.split(';')[0]}</span>
                  <span className="text-amber-500 tracking-wider shrink-0">{stars(w.rating)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 text-sm text-gray-700">
            <h2 className="text-lg font-black text-gray-900 mb-3">{info.nameTa} ராசி குறிப்புகள்</h2>
            <p>ராசி அதிபதி: <strong>{info.lordTa}</strong> · தத்துவம்: <strong>{info.elementTa}</strong></p>
            <p className="mt-1">அதிபதிக்குரிய நிறம்: <strong>{info.colorTa}</strong> · எண்: <strong>{info.number}</strong></p>
            <p className="mt-1">உள்ளடங்கிய நட்சத்திரங்கள்: <strong>{info.nakshatras.join(', ')}</strong></p>
          </section>

          <nav className="mb-6" aria-label="மற்ற ராசிகள்">
            <h2 className="text-lg font-black text-gray-900 mb-3">மற்ற ராசிகள்</h2>
            <div className="flex flex-wrap gap-2">
              {RASI_SLUGS.map((s, i) => (
                <Link key={s} href={`/rasi-palan/${s}`} className={`px-3 py-1.5 rounded-full text-sm border ${i === idx ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300'}`}>
                  {rasiInfo(i).nameTa}
                </Link>
              ))}
            </div>
          </nav>

          <p className="text-xs text-gray-400">
            சந்திர கோசார அடிப்படையிலான பொதுவான பலன் இது; தனிப்பட்ட ஜாதகத்திற்கு ஏற்ப மாறுபடும். மருத்துவ, நிதி முடிவுகளுக்கு இதை மட்டும் நம்ப வேண்டாம்.
          </p>
        </div>
      </div>
    </>
  );
}
