import type { Metadata } from 'next';
import JathagamPorutham from '@/components/tools/JathagamPorutham';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'ஜாதக பொருத்தம் கணிப்பான் - திருமண பொருத்தம் | Jathagam Thirumana Porutham',
  description:
    '27 நட்சத்திரங்கள் அடிப்படையில் ராஜு, கண, நாடி, வேதை உட்பட 10 திருமண பொருத்தங்களை இலவசமாக கணக்கிடுங்கள். Free Tamil horoscope marriage compatibility checker.',
  keywords: [
    'jathagam porutham',
    'ஜாதக பொருத்தம்',
    'thirumana porutham',
    'திருமண பொருத்தம்',
    'nakshatra porutham',
    'நட்சத்திர பொருத்தம்',
    'rajju porutham',
    'ராஜு பொருத்தம்',
    'nadi porutham',
    'நாடி பொருத்தம்',
    'gana porutham',
    'கண பொருத்தம்',
    'tamil marriage compatibility',
    'horoscope matching tamil',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/jathagam-porutham`,
  },
  openGraph: {
    title: 'ஜாதக பொருத்தம் கணிப்பான் | Jathagam Thirumana Porutham',
    description:
      '27 நட்சத்திர அடிப்படையில் 10 திருமண பொருத்தங்களை இலவசமாக கணக்கிடுங்கள்.',
    url: `${SITE_CONFIG.url}/tools/jathagam-porutham`,
    type: 'website',
  },
};

export const dynamic = 'force-static';

export default function JathagamPoruthamPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ஜாதக பொருத்தம் கணிப்பான் - Jathagam Thirumana Porutham',
    description:
      '27 நட்சத்திரங்கள் அடிப்படையில் 10 திருமண பொருத்தங்களை கணக்கிடும் இலவச கருவி',
    url: `${SITE_CONFIG.url}/tools/jathagam-porutham`,
    applicationCategory: 'UtilityApplication',
    inLanguage: ['ta', 'en'],
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4">
          <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4">
            <ol className="flex flex-wrap gap-1 items-center">
              <li>
                <a href="/" className="hover:text-orange-600 transition-colors">
                  முகப்பு
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="/tools" className="hover:text-orange-600 transition-colors">
                  கருவிகள்
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-orange-600 font-medium">ஜாதக பொருத்தம்</li>
            </ol>
          </nav>
        </div>

        {/* Hero heading */}
        <div className="container mx-auto px-4 pb-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            ஜாதக பொருத்தம் கணிப்பான்
          </h1>
          <p className="text-lg text-gray-600">
            Jathagam Thirumana Porutham Calculator
          </p>
          <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
            27 நட்சத்திரங்கள் அடிப்படையில் ராஜு, கண, மகேந்திர, ஸ்திரீ தீர்க்க, யோனி, ராசி,
            ராசியதிபதி, வஸ்யம், வேதை மற்றும் நாடி பொருத்தங்களை கணக்கிடுங்கள்.
          </p>
        </div>

        {/* Tool */}
        <JathagamPorutham />

        {/* SEO Content */}
        <section className="container mx-auto px-4 py-10 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            திருமண பொருத்தம் என்றால் என்ன?
          </h2>
          <div className="prose prose-orange max-w-none text-gray-700 space-y-4">
            <p>
              தமிழ் ஜோதிடத்தில் திருமண பொருத்தம் என்பது மணமகன் மற்றும் மணமகளின் நட்சத்திரங்களை
              வைத்து அவர்களின் இணக்கத்தை அளவிடும் ஒரு பாரம்பரிய முறை. இதை <strong>தசவிதப் பொருத்தம்</strong>{' '}
              என்று அழைப்பர் — அதாவது 10 வகையான பொருத்தங்கள்.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">10 திருமண பொருத்தங்கள்</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>தின பொருத்தம்</strong> — ஆரோக்கியம் மற்றும் நீண்ட ஆயுள்</li>
              <li><strong>கண பொருத்தம்</strong> — குணாதிசயம் இணக்கம் (தேவ/மனித/ராக்ஷச)</li>
              <li><strong>மகேந்திர பொருத்தம்</strong> — செல்வம் மற்றும் புத்திர பாக்கியம்</li>
              <li><strong>ஸ்திரீ தீர்க்க பொருத்தம்</strong> — மங்கலகரமான வாழ்க்கை</li>
              <li><strong>யோனி பொருத்தம்</strong> — உடல் இணக்கம்</li>
              <li><strong>ராசி பொருத்தம்</strong> — மனித சுபாவம் இணக்கம்</li>
              <li><strong>ராசியதிபதி பொருத்தம்</strong> — கிரக நட்பு</li>
              <li><strong>வஸ்யம்</strong> — கட்டுப்பாடு மற்றும் நட்பு</li>
              <li><strong>ராஜு பொருத்தம்</strong> — மிக முக்கியம்! ஒரே ராஜுவில் திருமணம் வேண்டாம்</li>
              <li><strong>நாடி பொருத்தம்</strong> — உடல் நலம் மற்றும் சந்ததி</li>
            </ul>
            <p>
              <strong>ராஜு பொருத்தம்</strong> மற்றும் <strong>நாடி பொருத்தம்</strong> இல்லாமல்
              திருமணம் செய்வது பாரம்பரிய ஜோதிடத்தில் கடும் நிராகரிக்கப்படுகிறது. இந்த கணிப்பான்
              அனைத்து 10 பொருத்தங்களையும் தானாக கணக்கிட்டு விரிவான முடிவுகளை வழங்குகிறது.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
