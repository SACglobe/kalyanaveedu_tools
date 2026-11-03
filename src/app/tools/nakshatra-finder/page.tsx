import type { Metadata } from 'next';
import NakshatraFinder from '@/components/tools/NakshatraFinder';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'நட்சத்திரம் கண்டுபிடி - பிறந்த தேதி வைத்து ராசி & நட்சத்திரம் | Nakshatra Finder Tamil',
  description:
    'பிறந்த தேதி, நேரம் வைத்து உங்கள் ஜென்ம நட்சத்திரம், பாதம், ராசி மற்றும் குழந்தை பெயர் வைக்க உகந்த எழுத்துக்களை இலவசமாக அறியுங்கள். Janma Nakshatra calculator.',
  keywords: [
    'nakshatra finder by date of birth',
    'நட்சத்திரம் கண்டுபிடிப்பது எப்படி',
    'find my nakshatra tamil',
    'janma nakshatra calculator',
    'பிறந்த நட்சத்திரம் அறிய',
    'rasi and nakshatra finder',
    'baby name letters by nakshatra',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/nakshatra-finder`,
  },
  openGraph: {
    title: 'நட்சத்திரம் கண்டுபிடி | Nakshatra Finder Tamil',
    description: 'பிறந்த தேதி மற்றும் நேரம் மூலம் உங்கள் நட்சத்திரம் மற்றும் ராசியை உடனே அறியுங்கள்.',
    url: `${SITE_CONFIG.url}/tools/nakshatra-finder`,
    type: 'website',
  },
};

export const dynamic = 'force-static';

export default function NakshatraFinderPage() {
  const jsonLd = generateToolJsonLd({
    name: 'நட்சத்திரம் & ராசி கண்டுபிடி - Nakshatra Finder Tamil',
    description: 'பிறந்த தேதி, நேரம் வைத்து ஜென்ம நட்சத்திரம் மற்றும் ராசி கணக்கிடும் இலவச ஆன்லைன் கருவி',
    path: '/tools/nakshatra-finder',
    faqs: [
      {
        q: 'நட்சத்திரம் கண்டறிய பிறந்த நேரம் அவசியமா?',
        a: 'ஆம், சந்திரன் ஒரு நாளில் சுமார் 13°20 பாகை நகர்வதால், ஒரு நாளில் இரண்டு நட்சத்திரங்கள் வரக்கூடும். துல்லியமான நட்சத்திரம் மற்றும் பாதம் அறிய சரியான பிறந்த நேரம் அவசியம்.',
      },
      {
        q: 'ஒரு நட்சத்திரத்திற்கு எத்தனை பாதங்கள் உள்ளன?',
        a: 'ஒவ்வொரு நட்சத்திரத்திற்கும் 4 பாதங்கள் உண்டு. நீங்கள் பிறந்த குறிப்பிட்ட பாதத்தை அடிப்படையாகக் கொண்டே குழந்தைக்கான பெயர் தொடக்க எழுத்துக்கள் தீர்மானிக்கப்படுகின்றன.',
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
              <li className="text-orange-600 font-medium">நட்சத்திரம் கண்டுபிடி</li>
            </ol>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            நட்சத்திரம் &amp; ராசி கணிப்பான்
          </h1>
          <p className="text-lg text-gray-600">
            Find Your Birth Star (Nakshatra) &amp; Moon Sign (Rasi)
          </p>
        </div>

        <NakshatraFinder />
      </main>
    </>
  );
}
