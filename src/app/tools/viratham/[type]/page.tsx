import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { VIRATHAM_LIST, VIRATHAM_SLUGS, getVirathamMeta, upcomingViratham } from '@/lib/viratham';
import { formatDateEn, formatDateTa, parseDateStr } from '@/lib/date-format';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 21600;
export const dynamicParams = false;

export function generateStaticParams() {
  return VIRATHAM_SLUGS.map((type) => ({ type }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const meta = getVirathamMeta(type);
  if (!meta) return {};
  const y = parseDateStr(cityTodayStr())!.y;
  const title = `${meta.titleTa} தேதிகள் ${y}–${y + 1} | ${meta.titleEn} Dates`;
  const description = `${y}–${y + 1} ${meta.titleTa} தேதிகள், கிழமை, தமிழ் தேதியுடன். ${meta.blurbTa} Upcoming ${meta.titleEn} dates.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/tools/viratham/${type}` },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/tools/viratham/${type}`, type: 'website', locale: 'ta_IN' },
  };
}

export default async function VirathamTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const meta = getVirathamMeta(type);
  if (!meta) notFound();
  const today = cityTodayStr();
  const entries = upcomingViratham(meta.type, today, 400);
  const next = entries[0];
  const y = parseDateStr(today)!.y;

  const jsonLd = generateToolJsonLd({
    name: `${meta.titleTa} தேதிகள் – ${meta.titleEn} Dates`,
    description: meta.blurbTa,
    path: `/tools/viratham/${type}`,
    faqs: [
      { q: `அடுத்த ${meta.titleTa} எப்போது?`, a: next ? `அடுத்த ${meta.titleTa} ${formatDateTa(next.dateStr)} (${next.weekdayTa}, ${next.tamilDateTa}).` : 'தேதிகள் பட்டியலில் உள்ளன.' },
      { q: meta.faqQ, a: meta.faqA },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'விரத நாட்கள்', href: '/tools/viratham' }, { name: meta.titleTa }]} />
          <header className="text-center mb-6">
            <div className="text-5xl mb-2">{meta.icon}</div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{meta.titleTa} தேதிகள் {y}–{y + 1}</h1>
            <p className="text-gray-600">{meta.titleEn} Dates · {meta.blurbTa}</p>
            {next && (
              <p className="mt-4 inline-block bg-white border border-orange-200 rounded-2xl px-5 py-3 font-bold text-gray-900">
                அடுத்தது: {formatDateTa(next.dateStr)} ({next.weekdayTa}) · {next.tamilDateTa}
              </p>
            )}
          </header>

          <AdsterraBanner format="300x250" className="mb-6" />

          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-8 mb-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">வரும் தேதிகள்</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="py-2">தேதி</th><th>கிழமை</th><th>தமிழ் தேதி</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((e) => (
                  <tr key={e.dateStr} className="border-b border-gray-50 last:border-0">
                    <td className="py-2.5 font-bold text-gray-900">{formatDateTa(e.dateStr)}<span className="block text-xs text-gray-400 font-normal">{formatDateEn(e.dateStr)}</span></td>
                    <td>{e.weekdayTa}</td>
                    <td>{e.tamilDateTa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-black text-gray-900 mb-2">{meta.faqQ}</h2>
            <p className="text-gray-600 leading-relaxed">{meta.faqA}</p>
          </section>

          <nav className="mb-6" aria-label="மற்ற விரதங்கள்">
            <h2 className="text-lg font-black text-gray-900 mb-3">மற்ற விரத நாட்கள்</h2>
            <div className="flex flex-wrap gap-2">
              {VIRATHAM_LIST.filter((v) => v.type !== meta.type).map((v) => (
                <Link key={v.type} href={`/tools/viratham/${v.type}`} className="px-3 py-1.5 rounded-full text-sm border bg-white border-gray-200 text-gray-700 hover:border-orange-300">
                  {v.icon} {v.titleTa}
                </Link>
              ))}
              <Link href="/panchangam" className="px-3 py-1.5 rounded-full text-sm border bg-white border-gray-200 text-gray-700 hover:border-orange-300">📅 இன்றைய பஞ்சாங்கம்</Link>
            </div>
          </nav>
          <p className="text-xs text-gray-400">தேதிகள் சென்னை நேரப்படி கணிக்கப்பட்டவை; சம்பிரதாயப்படி ஒரு நாள் வேறுபடலாம். கோயில் பஞ்சாங்கத்துடன் உறுதி செய்யவும்.</p>
        </div>
      </div>
    </>
  );
}
