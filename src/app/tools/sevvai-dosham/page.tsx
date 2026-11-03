import type { Metadata } from 'next';
import SevvaiDosham from '@/components/tools/SevvaiDosham';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'செவ்வாய் தோஷம் கணிப்பான் - செவ்வாய் தோஷ நிவர்த்தி | Sevvai Dosham Calculator',
  description:
    'ஜாதகத்தில் லக்னம், சந்திரன், சுக்கிரன் அடிப்படையில் செவ்வாய் தோஷம் உள்ளதா என இலவசமாக கணக்கிடுங்கள். செவ்வாய் தோஷ விலக்கு மற்றும் பரிகார முறைகள். Mangal Dosha calculator.',
  keywords: [
    'sevvai dosham calculator',
    'செவ்வாய் தோஷம் கணிப்பான்',
    'sevvai dosham cancellation rules',
    'செவ்வாய் தோஷ பரிகாரம்',
    'mangal dosha checker tamil',
    'kuja dosham in tamil',
    'செவ்வாய் தோஷ நிவர்த்தி',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/sevvai-dosham`,
  },
  openGraph: {
    title: 'செவ்வாய் தோஷம் கணிப்பான் | Sevvai Dosham Calculator',
    description: 'உங்கள் ஜாதகத்தில் செவ்வாய் தோஷம் மற்றும் தோஷ நிவர்த்தி விதிகளை எளிதாக அறியுங்கள்.',
    url: `${SITE_CONFIG.url}/tools/sevvai-dosham`,
    type: 'website',
  },
};

export const dynamic = 'force-static';

export default function SevvaiDoshamPage() {
  const jsonLd = generateToolJsonLd({
    name: 'செவ்வாய் தோஷம் கணிப்பான் - Sevvai Dosham Calculator Tamil',
    description: 'ஜாதகத்தில் செவ்வாய் தோஷம் மற்றும் நிவர்த்தி விதிகளை கண்டறியும் இலவச கருவி',
    path: '/tools/sevvai-dosham',
    faqs: [
      {
        q: 'செவ்வாய் தோஷம் என்றால் என்ன?',
        a: 'ஜாதகத்தில் லக்னம், சந்திரன் அல்லது சுக்கிரனிலிருந்து 1, 2, 4, 7, 8, 12 ஆகிய இடங்களில் செவ்வாய் கிரகம் அமர்ந்திருப்பது செவ்வாய் தோஷம் (குஜ தோஷம் / மாங்கல்ய தோஷம்) என அழைக்கப்படுகிறது.',
      },
      {
        q: 'செவ்வாய் தோஷத்திற்கு என்னென்ன விலக்குகள் உள்ளன?',
        a: 'செவ்வாய் தனது சொந்த வீடான மேஷம், விருச்சிகம் அல்லது உச்ச வீடான மகரத்தில் இருந்தால் தோஷம் நிவர்த்தியாகும். மேலும் குரு பார்வை அல்லது குரு சேர்க்கை பெற்றிருந்தால் தோஷம் பங்கமாகும்.',
      },
      {
        q: 'செவ்வாய் தோஷம் உள்ளவர்கள் யாரை திருமணம் செய்யலாம்?',
        a: 'செவ்வாய் தோஷம் உள்ள ஒருவருக்கு அதே போன்று செவ்வாய் தோஷம் உள்ள வரனையே திருமணம் செய்வது பாரம்பரிய ஜோதிட விதியாகும் (தோஷ சாம்யம்). இதனால் தோஷம் சமநிலையாகி மங்கல வாழ்வு கிட்டும்.',
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4">
          <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4">
            <ol className="flex flex-wrap gap-1 items-center">
              <li><a href="/" className="hover:text-orange-600 transition-colors">முகப்பு</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="/tools" className="hover:text-orange-600 transition-colors">கருவிகள்</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-orange-600 font-medium">செவ்வாய் தோஷம்</li>
            </ol>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            செவ்வாய் தோஷம் கணிப்பான்
          </h1>
          <p className="text-lg text-gray-600">
            Tamil Sevvai (Mangal / Kuja) Dosha Calculator
          </p>
        </div>

        <SevvaiDosham />
      </div>
    </>
  );
}
