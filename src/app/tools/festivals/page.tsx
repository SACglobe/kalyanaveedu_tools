import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { festivalsForYear } from '@/lib/festivals';
import { formatDateTa, parseDateStr } from '@/lib/date-format';
import { SITE_CONFIG } from '@/lib/constants';
import { langAlternates } from '@/lib/hreflang';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 21600;

export function generateMetadata(): Metadata {
  const y = parseDateStr(cityTodayStr())!.y;
  const title = `தமிழ் பண்டிகைகள் ${y}–${y + 1} – பொங்கல், தீபாவளி, விநாயகர் சதுர்த்தி தேதிகள் | Tamil Festival Calendar`;
  const description = `${y} மற்றும் ${y + 1} ஆண்டுகளுக்கான தமிழ் பண்டிகை தேதிகள்: தமிழ் புத்தாண்டு, பொங்கல், தீபாவளி, நவராத்திரி, கார்த்திகை தீபம், மகா சிவராத்திரி. Tamil festival dates ${y}.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/tools/festivals`, languages: langAlternates('/tools/festivals', '/en/festivals') },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/tools/festivals`, type: 'website', locale: 'ta_IN' },
  };
}

export default function FestivalsHub() {
  const today = cityTodayStr();
  const y = parseDateStr(today)!.y;
  const years = [y, y + 1];
  const all = years.flatMap((yy) => festivalsForYear(yy)).filter((f) => f.dateStr >= today);
  const next = all[0];
  const jsonLd = generateToolJsonLd({
    name: 'தமிழ் பண்டிகை நாட்காட்டி – Tamil Festival Calendar',
    description: 'தமிழ் பண்டிகைகள் மற்றும் விரத நாட்கள்',
    path: '/tools/festivals',
    faqs: next ? [{ q: 'அடுத்த தமிழ் பண்டிகை எது?', a: `அடுத்த பண்டிகை ${next.nameTa} – ${formatDateTa(next.dateStr)} (${next.weekdayTa}).` }] : [],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'கருவிகள்', href: '/tools' }, { name: 'பண்டிகைகள்' }]} />
          <header className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">தமிழ் பண்டிகைகள் {y}–{y + 1}</h1>
            <p className="text-gray-600">Tamil Festival Calendar – Pongal, Deepavali, Navaratri, Karthigai Deepam · <Link href="/en/festivals" className="text-primary font-bold">English →</Link></p>
            {next && <p className="mt-4 inline-block bg-white border border-orange-200 rounded-2xl px-5 py-3 font-bold">அடுத்தது: {next.icon} {next.nameTa} – {formatDateTa(next.dateStr)} ({next.weekdayTa})</p>}
          </header>

          <AdsterraBanner format="300x250" className="mb-6" />

          {years.map((yy) => (
            <section key={yy} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-8 mb-6">
              <h2 className="text-xl font-black text-gray-900 mb-4">{yy} பண்டிகைகள்</h2>
              <ul className="divide-y divide-gray-100">
                {festivalsForYear(yy).map((f) => (
                  <li key={f.slug + f.dateStr} className="py-3 flex items-center justify-between gap-3">
                    <span>
                      <span className="font-bold text-gray-900">{formatDateTa(f.dateStr)}</span>
                      <span className="text-gray-400"> ({f.weekdayTa}) · {f.tamilDateTa}</span>
                    </span>
                    <Link href={`/tools/festivals/${f.slug}`} className="text-sm text-primary font-bold text-right">{f.icon} {f.nameTa}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="text-xs text-gray-400">தேதிகள் சென்னை நேரப்படி கணிக்கப்பட்டவை; சம்பிரதாயம் மற்றும் கோயில் பஞ்சாங்கத்தைப் பொறுத்து ஒரு நாள் வேறுபடலாம். <Link href="/tools/viratham" className="text-primary font-bold">விரத நாட்கள் →</Link></p>
        </div>
      </div>
    </>
  );
}
