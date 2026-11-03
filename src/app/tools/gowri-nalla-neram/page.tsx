import type { Metadata } from 'next';
import GowriNallaNeram from '@/components/tools/GowriNallaNeram';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'இன்றைய கவுரி நல்ல நேரம் - பகல் மற்றும் இரவு | Gowri Nalla Neram Today Tamil',
  description:
    'இன்றைய கவுரி நல்ல நேர அட்டவணை. அமிர்தம், தனம், உத்தி, லாபம் மற்றும் சுகம் ஆகிய சுப நேரங்களை உங்கள் ஊரின் சூரிய உதயப்படி உடனே கணக்கிடுங்கள்.',
  keywords: [
    'gowri nalla neram today',
    'இன்றைய கவுரி நல்ல நேரம்',
    'gowri panchangam tamil',
    'கவுரி பஞ்சாங்கம்',
    'gowri nalla neram timings',
    'பகல் கவுரி நல்ல நேரம்',
    'இரவு கவுரி நல்ல நேரம்',
    'tamil good time today',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/gowri-nalla-neram`,
  },
  openGraph: {
    title: 'இன்றைய கவுரி நல்ல நேரம் கணிப்பான் | Gowri Nalla Neram Tamil',
    description: 'பகல் மற்றும் இரவுக்கான கவுரி நல்ல நேர அட்டவணையை எளிதாக அறியுங்கள்.',
    url: `${SITE_CONFIG.url}/tools/gowri-nalla-neram`,
    type: 'website',
  },
};

export const dynamic = 'force-static';

export default function GowriNallaNeramPage() {
  const jsonLd = generateToolJsonLd({
    name: 'இன்றைய கவுரி நல்ல நேரம் கணிப்பான் - Gowri Nalla Neram Today',
    description: 'பகல் மற்றும் இரவு கவுரி நல்ல நேர அட்டவணையை கணக்கிடும் இலவச கருவி',
    path: '/tools/gowri-nalla-neram',
    faqs: [
      {
        q: 'கவுரி நல்ல நேரம் என்றால் என்ன?',
        a: 'கவுரி பஞ்சாங்கம் என்பது ஒரு நாளின் பகல் மற்றும் இரவு பொழுதை தலா 8 பகுதிகளாகப் பிரித்து, அதில் சுப மற்றும் அசுப நேரங்களை கண்டறியும் பாரம்பரிய முறையாகும்.',
      },
      {
        q: 'சுபமான கவுரி நேரங்கள் எவை?',
        a: 'அமிர்தம், தனம், உத்தி, லாபம் மற்றும் சுகம் ஆகிய ஐந்து கவுரி நேரங்களும் சுப காரியங்களை தொடங்குவதற்கு உகந்தவையாகும்.',
      },
      {
        q: 'அசுபமான கவுரி நேரங்கள் எவை?',
        a: 'ரோகம், விஷம் மற்றும் சோரம் ஆகிய மூன்று நேரங்களும் சுப காரியங்களுக்கு தவிர்க்கப்பட வேண்டிய நேரங்களாகும்.',
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
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
              <li className="text-orange-600 font-medium">கவுரி நல்ல நேரம்</li>
            </ol>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            கவுரி நல்ல நேரம் கணிப்பான்
          </h1>
          <p className="text-lg text-gray-600">
            Today&apos;s Gowri Nalla Neram Panchangam
          </p>
        </div>

        <GowriNallaNeram />
      </main>
    </>
  );
}
