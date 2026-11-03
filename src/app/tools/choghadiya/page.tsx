import type { Metadata } from 'next';
import Choghadiya from '@/components/tools/Choghadiya';
import CityLinks from '@/components/tools/CityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'இன்றைய சோகாதியம் அட்டவணை - பகல் மற்றும் இரவு | Choghadiya Today Tamil',
  description:
    'இன்றைய சுப நேரங்களை கண்டறிய சோகாதியம் அட்டவணை. அமிர்தம், சுபம், லாபம், சரம், உத்வேகம், காலம் மற்றும் ரோகம் நேரங்களை எளிதாக கணக்கிடுங்கள்.',
  keywords: [
    'choghadiya today',
    'சோகாதியம் அட்டவணை',
    'choghadiya timings tamil',
    'இன்றைய சோகாதியம்',
    'shubh muhurat choghadiya',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/choghadiya`,
  },
  openGraph: {
    title: 'இன்றைய சோகாதியம் கணிப்பான் | Choghadiya Timings Tamil',
    description: 'பகல் மற்றும் இரவுக்கான சோகாதியம் அட்டவணையை துல்லியமாக அறியுங்கள்.',
    url: `${SITE_CONFIG.url}/tools/choghadiya`,
    type: 'website',
  },
};

export const revalidate = 1800;

export default function ChoghadiyaPage() {
  const jsonLd = generateToolJsonLd({
    name: 'இன்றைய சோகாதியம் கணிப்பான் - Choghadiya Today Tamil',
    description: 'இன்றைய பகல் மற்றும் இரவு சோகாதியம் நேரங்களை கணக்கிடும் இலவச கருவி',
    path: '/tools/choghadiya',
    faqs: [
      {
        q: 'சோகாதியம் என்றால் என்ன?',
        a: 'சோகாதியம் என்பது ஒரு நாளின் பகல் மற்றும் இரவுப் பொழுதை தலா 8 முகூர்த்தங்களாக பிரித்து, அதில் அமிர்தம், சுபம், லாபம் போன்ற சுப நேரங்களையும் மற்ற அசுப நேரங்களையும் அறியும் முறையாகும்.',
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
              <li className="text-orange-600 font-medium">சோகாதியம்</li>
            </ol>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            சோகாதியம் அட்டவணை கணிப்பான்
          </h1>
          <p className="text-lg text-gray-600">
            Today&apos;s Choghadiya Muhurat Calculator
          </p>
        </div>

        <Choghadiya />
        <CityLinks basePath="/tools/choghadiya" title="ஊர் வாரியாக சோகாதியம்" />
      </div>
    </>
  );
}
