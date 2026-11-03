import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { FESTIVALS, festivalsForYear, getFestival } from '@/lib/festivals';
import { FESTIVAL_BLURB_EN } from '@/lib/festivals-en';
import { TAMIL_MONTH_NAMES_EN } from '@/lib/astro-core/panchang-day';
import { WEEKDAYS_TAMIL } from '@/lib/astro-core/constants';
import { formatDateEn, parseDateStr } from '@/lib/date-format';
import { langAlternates } from '@/lib/hreflang';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 21600;
export const dynamicParams = false;

export function generateStaticParams() {
  return FESTIVALS.map((f) => ({ slug: f.slug }));
}

const weekdayEn = (dateStr: string) => {
  const p = parseDateStr(dateStr)!;
  return WEEKDAYS_TAMIL[new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay()].nameEn;
};

function datesFor(slug: string, fromYear: number) {
  return [fromYear, fromYear + 1, fromYear + 2].flatMap((y) => festivalsForYear(y).filter((f) => f.slug === slug));
}

// "Aadi 18" style Tamil date with an English month name
const tamilDateEn = (tamilDateTa: string, slug: string) => {
  void slug;
  const [month, day] = tamilDateTa.split(' ');
  const idx = ['சித்திரை', 'வைகாசி', 'ஆனி', 'ஆடி', 'ஆவணி', 'புரட்டாசி', 'ஐப்பசி', 'கார்த்திகை', 'மார்கழி', 'தை', 'மாசி', 'பங்குனி'].indexOf(month);
  return idx >= 0 ? `${TAMIL_MONTH_NAMES_EN[idx]} ${day}` : tamilDateTa;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFestival(slug);
  if (!f) return {};
  const today = cityTodayStr();
  const first = datesFor(slug, parseDateStr(today)!.y).find((d) => d.dateStr >= today);
  const title = `${f.nameEn} ${first ? parseDateStr(first.dateStr)!.y : ''} Date`.trim();
  const description = `${f.nameEn} falls on ${first ? `${formatDateEn(first.dateStr)} (${weekdayEn(first.dateStr)})` : 'the dates listed'}. ${FESTIVAL_BLURB_EN[slug] ?? ''}`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/en/festivals/${slug}`, languages: langAlternates(`/tools/festivals/${slug}`, `/en/festivals/${slug}`) },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/en/festivals/${slug}`, type: 'website', locale: 'en_IN' },
  };
}

export default async function EnFestivalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFestival(slug);
  if (!f) notFound();
  const today = cityTodayStr();
  const dates = datesFor(slug, parseDateStr(today)!.y);
  const next = dates.find((d) => d.dateStr >= today);
  const blurb = FESTIVAL_BLURB_EN[slug] ?? '';
  const jsonLd = generateToolJsonLd({
    name: `${f.nameEn} Date`,
    description: blurb,
    path: `/en/festivals/${slug}`,
    faqs: [{ q: `When is ${f.nameEn}?`, a: next ? `${f.nameEn} is on ${formatDateEn(next.dateStr)} (${weekdayEn(next.dateStr)}, ${tamilDateEn(next.tamilDateTa, slug)}).` : 'See the list of dates below.' }, { q: `What is ${f.nameEn}?`, a: blurb }],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Festivals', href: '/en/festivals' }, { name: f.nameEn }]} />
          <header className="text-center mb-6">
            <div className="text-5xl mb-2">{f.icon}</div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{f.nameEn} – Date</h1>
            <p className="text-gray-600"><Link href={`/tools/festivals/${slug}`} className="text-primary font-bold">தமிழில் பார்க்க →</Link></p>
            {next && <p className="mt-4 inline-block bg-white border border-orange-200 rounded-2xl px-5 py-3 font-bold text-gray-900">{formatDateEn(next.dateStr)} ({weekdayEn(next.dateStr)}) · {tamilDateEn(next.tamilDateTa, slug)}</p>}
          </header>
          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6"><p className="text-gray-700 leading-relaxed">{blurb}</p></section>
          <AdsterraBanner format="300x250" className="mb-6" />
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-8 mb-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">Upcoming dates</h2>
            <table className="w-full text-sm">
              <thead><tr className="text-left text-gray-500 border-b border-gray-100"><th className="py-2">Date</th><th>Weekday</th><th>Tamil date</th></tr></thead>
              <tbody>{dates.map((d) => (<tr key={d.dateStr} className="border-b border-gray-50 last:border-0"><td className="py-2.5 font-bold text-gray-900">{formatDateEn(d.dateStr)}</td><td>{weekdayEn(d.dateStr)}</td><td>{tamilDateEn(d.tamilDateTa, slug)}</td></tr>))}</tbody>
            </table>
          </section>
          <p className="text-xs text-gray-400">Computed for Chennai; confirm with your local temple panchangam.</p>
        </div>
      </div>
    </>
  );
}
