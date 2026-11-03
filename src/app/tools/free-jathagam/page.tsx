import type { Metadata } from 'next';
import FreeJathagam from '@/components/tools/FreeJathagam';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'இலவச ஜாதகம் கணிப்பு – ராசி, நவாம்சம், தசை | Free Tamil Jathagam / Kundli Online',
  description: 'பிறந்த தேதி, நேரம், ஊர் கொடுத்து இலவச தமிழ் ஜாதகம்: லக்னம், ராசி கட்டம், நவாம்சம், கிரக நிலைகள், விம்சோத்தரி தசை, செவ்வாய் & கால சர்ப தோஷம். Free Tamil kundli online.',
  keywords: ['இலவச ஜாதகம்', 'jathagam online tamil', 'free kundli tamil', 'ஜாதகம் கணிக்க', 'rasi chart tamil', 'navamsa chart', 'dasha calculator'],
  alternates: { canonical: `${SITE_CONFIG.url}/tools/free-jathagam` },
  openGraph: { title: 'இலவச ஜாதகம் கணிப்பு | Free Tamil Jathagam', description: 'லக்னம், ராசி, நவாம்சம், தசை – இலவசமாக', url: `${SITE_CONFIG.url}/tools/free-jathagam`, type: 'website', locale: 'ta_IN' },
};

export default function FreeJathagamPage() {
  const jsonLd = generateToolJsonLd({
    name: 'இலவச ஜாதகம் கணிப்பு – Free Tamil Jathagam',
    description: 'லக்னம், ராசி கட்டம், நவாம்சம், கிரக நிலைகள், விம்சோத்தரி தசை',
    path: '/tools/free-jathagam',
    faqs: [
      { q: 'ஜாதகம் கணிக்க என்ன தேவை?', a: 'பிறந்த தேதி, சரியான பிறந்த நேரம், பிறந்த ஊர் ஆகியவை தேவை. நேரம் சில நிமிடங்கள் மாறினாலும் லக்னம் மாறக்கூடும்.' },
      { q: 'இந்த ஜாதகம் எந்த அயனாம்சம் பயன்படுத்துகிறது?', a: 'தமிழ் மரபில் பொதுவாகப் பயன்படுத்தப்படும் லாகிரி (சித்ரபட்ச) அயனாம்சம், நிரயண (Sidereal) முறை.' },
      { q: 'ராசிக்கும் லக்னத்திற்கும் என்ன வித்தியாசம்?', a: 'பிறந்த நேரத்தில் சந்திரன் இருந்த ராசி உங்கள் ஜென்ம ராசி; கிழக்கு அடிவானத்தில் உதயமான ராசி லக்னம்.' },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'கருவிகள்', href: '/tools' }, { name: 'இலவச ஜாதகம்' }]} />
        </div>
        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">இலவச ஜாதகம் கணிப்பு</h1>
          <p className="text-lg text-gray-600">Free Tamil Jathagam / Kundli – Rasi, Navamsa & Dasha</p>
        </div>
        <FreeJathagam />
      </div>
    </>
  );
}
