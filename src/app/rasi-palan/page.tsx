import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { dailyRasiPalan, rasiInfo, stars } from '@/lib/rasi-palan';
import { formatDateEn, formatDateTa } from '@/lib/date-format';
import { SITE_CONFIG } from '@/lib/constants';
import { langAlternates } from '@/lib/hreflang';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 1800;

export function generateMetadata(): Metadata {
  const t = formatDateTa(cityTodayStr());
  const title = `இன்றைய ராசி பலன் – ${t} | Today Rasi Palan Tamil`;
  const description = `${t} இன்றைய ராசி பலன்: மேஷம் முதல் மீனம் வரை 12 ராசிகளுக்கும் சந்திர கோசார அடிப்படையிலான தினசரி பலன். Daily Tamil Rasi Palan for all 12 zodiac signs.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/rasi-palan`, languages: langAlternates('/rasi-palan', '/en/rasi-palan') },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/rasi-palan`, type: 'website', locale: 'ta_IN' },
  };
}

export default function RasiPalanPage() {
  const today = cityTodayStr();
  const day = dailyRasiPalan(today);
  const jsonLd = generateToolJsonLd({
    name: 'இன்றைய ராசி பலன் – Today Rasi Palan',
    description: 'சந்திர கோசார அடிப்படையிலான 12 ராசிகளுக்கான தினசரி பலன்',
    path: '/rasi-palan',
    faqs: [
      { q: 'இன்றைய ராசி பலன் எப்படி கணிக்கப்படுகிறது?', a: 'அன்றைய சந்திரன் உங்கள் ஜென்ம ராசியிலிருந்து எந்த வீட்டில் சஞ்சரிக்கிறார் என்பதைக் கொண்டு (சந்திர கோசாரம்) பொதுவான பலன் கணிக்கப்படுகிறது. 1, 3, 6, 7, 10, 11-ஆம் வீடுகள் சாதகமாகக் கருதப்படுகின்றன.' },
      { q: 'சந்திராஷ்டமம் என்றால் என்ன?', a: 'சந்திரன் உங்கள் ஜென்ம ராசிக்கு 8-ஆம் வீட்டில் சஞ்சரிக்கும் நாள் சந்திராஷ்டமம். இந்த நாளில் முக்கிய முடிவுகள், புதிய தொடக்கங்களைத் தவிர்ப்பது மரபு.' },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'இன்றைய ராசி பலன்' }]} />
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">இன்றைய ராசி பலன்</h1>
            <p className="text-gray-600">Today Rasi Palan · {formatDateTa(today)} · {formatDateEn(today)} · <Link href="/en/rasi-palan" className="text-primary font-bold">English →</Link></p>
            <p className="text-sm text-gray-500 mt-2">
              இன்றைய சந்திரன்: {day.segments.map((s) => (s.last ? s.rasiTa : `${s.rasiTa} (${s.endFormatted} வரை)`)).join(' → ')}
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {day.rasis.map((r) => {
              const info = rasiInfo(r.rasiIdx);
              return (
                <Link
                  key={info.slug}
                  href={`/rasi-palan/${info.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-orange-300 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-black text-gray-900 group-hover:text-primary">
                      <span className="mr-2">{info.symbol}</span>{info.nameTa}
                    </h2>
                    <span className="text-amber-500 text-sm tracking-wider" aria-label={`${r.text.rating} / 5`}>{stars(r.text.rating)}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.text.summary}</p>
                  <span className="inline-block mt-3 text-xs font-bold text-primary">முழு பலன் →</span>
                </Link>
              );
            })}
          </div>

          <AdsterraBanner format="300x250" className="my-8" />

          <section className="bg-white rounded-2xl border border-gray-100 p-6 text-sm text-gray-600 leading-relaxed">
            <h2 className="text-lg font-black text-gray-900 mb-2">இந்த பலன்கள் எப்படி கணிக்கப்படுகின்றன?</h2>
            <p>
              அன்றைய சந்திரன் உங்கள் ஜென்ம ராசியிலிருந்து எத்தனையாவது வீட்டில் சஞ்சரிக்கிறார் என்பதைக் கொண்டு (சந்திர கோசாரம்) பொதுவான தினசரி பலன் தரப்படுகிறது.
              இவை தனிப்பட்ட ஜாதகத்தை (தசா புக்தி, கிரக நிலைகள்) கருத்தில் கொள்ளாத பொதுவான வழிகாட்டுதல் மட்டுமே. உங்கள் ராசி தெரியாவிட்டால்
              <Link href="/tools/nakshatra-finder" className="text-primary font-bold"> நட்சத்திரம் கண்டுபிடி </Link> கருவியைப் பயன்படுத்தவும்.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
