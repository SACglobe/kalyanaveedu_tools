import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { FESTIVALS, festivalsForYear, getFestival } from '@/lib/festivals';
import { formatDateEn, formatDateTa, parseDateStr } from '@/lib/date-format';
import { SITE_CONFIG } from '@/lib/constants';
import { langAlternates } from '@/lib/hreflang';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 21600;
export const dynamicParams = false;

export function generateStaticParams() {
  return FESTIVALS.map((f) => ({ slug: f.slug }));
}

function datesFor(slug: string, fromYear: number) {
  return [fromYear, fromYear + 1, fromYear + 2].flatMap((y) => festivalsForYear(y).filter((f) => f.slug === slug));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFestival(slug);
  if (!f) return {};
  const y = parseDateStr(cityTodayStr())!.y;
  const first = datesFor(slug, y).find((d) => d.dateStr >= cityTodayStr());
  const title = `${f.nameTa} ${first ? parseDateStr(first.dateStr)!.y : y} தேதி | ${f.nameEn} Date`;
  const description = `${f.nameTa} எப்போது? ${first ? `${formatDateTa(first.dateStr)} (${first.weekdayTa})` : ''}. ${f.blurbTa} ${f.nameEn} date and day.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/tools/festivals/${slug}`, languages: langAlternates(`/tools/festivals/${slug}`, `/en/festivals/${slug}`) },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/tools/festivals/${slug}`, type: 'website', locale: 'ta_IN' },
  };
}

export default async function FestivalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFestival(slug);
  if (!f) notFound();
  const today = cityTodayStr();
  const y = parseDateStr(today)!.y;
  const dates = datesFor(slug, y);
  const next = dates.find((d) => d.dateStr >= today);

  const jsonLd = generateToolJsonLd({
    name: `${f.nameTa} தேதி – ${f.nameEn}`,
    description: f.blurbTa,
    path: `/tools/festivals/${slug}`,
    faqs: [
      { q: `${f.nameTa} எப்போது?`, a: next ? `${f.nameTa} ${formatDateTa(next.dateStr)} (${next.weekdayTa}, ${next.tamilDateTa}) அன்று வருகிறது.` : 'தேதிகள் பட்டியலில் உள்ளன.' },
      { q: `${f.nameTa} என்றால் என்ன?`, a: f.blurbTa },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'பண்டிகைகள்', href: '/tools/festivals' }, { name: f.nameTa }]} />
          <header className="text-center mb-6">
            <div className="text-5xl mb-2">{f.icon}</div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{f.nameTa} – தேதி</h1>
            <p className="text-gray-600">{f.nameEn}</p>
            {next && (
              <p className="mt-4 inline-block bg-white border border-orange-200 rounded-2xl px-5 py-3 font-bold text-gray-900">
                {formatDateTa(next.dateStr)} ({next.weekdayTa}) · {next.tamilDateTa}
              </p>
            )}
          </header>

          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <p className="text-gray-700 leading-relaxed">{f.blurbTa}</p>
          </section>

          <AdsterraBanner format="300x250" className="mb-6" />

          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-8 mb-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">வரும் ஆண்டுகளில் {f.nameTa}</h2>
            <table className="w-full text-sm">
              <thead><tr className="text-left text-gray-500 border-b border-gray-100"><th className="py-2">தேதி</th><th>கிழமை</th><th>தமிழ் தேதி</th></tr></thead>
              <tbody>
                {dates.map((d) => (
                  <tr key={d.dateStr} className="border-b border-gray-50 last:border-0">
                    <td className="py-2.5 font-bold text-gray-900">{formatDateTa(d.dateStr)}<span className="block text-xs text-gray-400 font-normal">{formatDateEn(d.dateStr)}</span></td>
                    <td>{d.weekdayTa}</td>
                    <td>{d.tamilDateTa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <nav className="mb-6" aria-label="மற்ற பண்டிகைகள்">
            <h2 className="text-lg font-black text-gray-900 mb-3">மற்ற பண்டிகைகள்</h2>
            <div className="flex flex-wrap gap-2">
              {FESTIVALS.filter((x) => x.slug !== slug).slice(0, 14).map((x) => (
                <Link key={x.slug} href={`/tools/festivals/${x.slug}`} className="px-3 py-1.5 rounded-full text-sm border bg-white border-gray-200 text-gray-700 hover:border-orange-300">{x.icon} {x.nameTa}</Link>
              ))}
              <Link href="/tools/festivals" className="px-3 py-1.5 rounded-full text-sm border bg-primary text-white border-primary">அனைத்து பண்டிகைகள்</Link>
            </div>
          </nav>
          <p className="text-xs text-gray-400">தேதிகள் சென்னை நேரப்படி கணிக்கப்பட்டவை; கோயில் பஞ்சாங்கத்துடன் உறுதி செய்யவும்.</p>
        </div>
      </div>
    </>
  );
}
