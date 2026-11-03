import type { Metadata } from 'next';
import ThirumanaMuhurtham from '@/components/tools/ThirumanaMuhurtham';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'திருமண முகூர்த்த தேதிகள் 2025-2026 - சுப முகூர்த்த நாட்கள் | Marriage Muhurtham Dates Tamil',
  description:
    '2025 மற்றும் 2026 ஆம் ஆண்டிற்கான தமிழ் திருமண சுப முகூர்த்த தேதிகள், வளர்பிறை முகூர்த்த நேரம், நட்சத்திரம் மற்றும் திதி விவரங்களின் முழு பட்டியல்.',
  keywords: [
    'thirumana muhurtham dates 2025',
    'திருமண முகூர்த்த தேதிகள் 2025',
    'tamil marriage dates 2025 2026',
    'சுப முகூர்த்த நாட்கள் 2025',
    'marriage muhurtham timings tamil',
    'valarpirai muhurtham dates',
    'subha muhurtham 2026 tamil',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/thirumana-muhurtham`,
  },
  openGraph: {
    title: 'திருமண முகூர்த்த தேதிகள் 2025-2026 | Marriage Muhurtham Tamil',
    description: '2025-2026 தமிழ் சுப திருமண முகூர்த்த நாட்கள் மற்றும் நேரங்களின் முழு பட்டியல்.',
    url: `${SITE_CONFIG.url}/tools/thirumana-muhurtham`,
    type: 'website',
  },
};

export const dynamic = 'force-static';

export default function ThirumanaMuhurthamPage() {
  const jsonLd = generateToolJsonLd({
    name: 'திருமண முகூர்த்த தேதிகள் 2025-2026 - Marriage Muhurtham Tamil',
    description: '2025 மற்றும் 2026 தமிழ் திருமண சுப முகூர்த்த தேதிகள் மற்றும் நேரங்களின் தொகுப்பு',
    path: '/tools/thirumana-muhurtham',
    faqs: [
      {
        q: '2025-2026 ஆம் ஆண்டின் சிறந்த திருமண மாதங்கள் எவை?',
        a: 'தை, மாசி, வைகாசி, ஆவணி மற்றும் கார்த்திகை மாதங்கள் தமிழ் பஞ்சாங்கப்படி திருமணத்திற்கு மிகவும் உகந்த மங்கல மாதங்களாகும்.',
      },
      {
        q: 'வளர்பிறை முகூர்த்தம் ஏன் முக்கியம்?',
        a: 'சந்திரன் வளரும் சுக்ல பட்ச (வளர்பிறை) காலத்தில் திருமணம் செய்வது குடும்ப வளம் மற்றும் சந்ததி மேன்மைக்கு மிகச் சிறந்தது என்பது ஜோதிட நம்பிக்கையாகும்.',
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
              <li><a href="/" className="hover:text-orange-600 transition-colors">முகப்பு</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="/tools" className="hover:text-orange-600 transition-colors">கருவிகள்</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-orange-600 font-medium">திருமண முகூர்த்த தேதிகள்</li>
            </ol>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            திருமண முகூர்த்த தேதிகள் 2025 - 2026
          </h1>
          <p className="text-lg text-gray-600">
            Tamil Marriage Subha Muhurtham Dates &amp; Auspicious Timings
          </p>
        </div>

        <ThirumanaMuhurtham />
      </main>
    </>
  );
}
