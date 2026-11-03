import type { Metadata } from 'next';
import RahuKalam from '@/components/tools/RahuKalam';
import CityLinks from '@/components/tools/CityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'இன்றைய ராகு காலம் - ராகு கால நேரம் கணிப்பான் | Rahu Kalam Today Tamil',
  description:
    'இன்றைய ராகு கால நேரத்தை சென்னை, மதுரை, கோவை உட்பட உங்கள் ஊரின் சூரிய உதய நேரப்படி துல்லியமாக கணக்கிடுங்கள். Tamil Rahu Kalam timings calculator.',
  keywords: [
    'rahu kalam today',
    'இன்றைய ராகு காலம்',
    'rahu kalam timings tamil',
    'ராகு காலம் நேரம்',
    'rahu kalam chennai',
    'rahu kalam madurai',
    'tamil panchangam rahu kalam',
    'இன்று ராகு காலம் எப்போது',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/rahu-kalam`,
  },
  openGraph: {
    title: 'இன்றைய ராகு காலம் கணிப்பான் | Rahu Kalam Today Tamil',
    description: 'உங்கள் ஊரின் சூரிய உதய அடிப்படையில் இன்றைய ராகு கால நேரத்தை உடனே அறியுங்கள்.',
    url: `${SITE_CONFIG.url}/tools/rahu-kalam`,
    type: 'website',
  },
};

export const revalidate = 1800;

export default function RahuKalamPage() {
  const jsonLd = generateToolJsonLd({
    name: 'இன்றைய ராகு காலம் கணிப்பான் - Rahu Kalam Today Tamil',
    description: 'இன்றைய ராகு கால நேரத்தை உங்கள் ஊரின் சூரிய உதய நேரப்படி துல்லியமாக கணக்கிடும் இலவச கருவி',
    path: '/tools/rahu-kalam',
    faqs: [
      {
        q: 'ராகு காலம் என்றால் என்ன?',
        a: 'சூரிய உதயம் முதல் சூரிய அஸ்தமனம் வரையிலான பகல் பொழுதை 8 பகுதிகளாக பிரித்து, அதில் ராகு பகவானுக்குரிய ஒரு பகுதியை ராகு காலம் என்பர். இந்த நேரத்தில் சுப காரியங்களை தவிர்க்க வேண்டும்.',
      },
      {
        q: 'ராகு காலத்தில் என்னென்ன காரியங்களை தவிர்க்க வேண்டும்?',
        a: 'திருமணம், நிச்சயதார்த்தம், சீமந்தம், புதுமனை புகுவிழா, புதிய தொழில் தொடங்குதல், முக்கிய ஒப்பந்தங்களில் கையெழுத்திடுதல் மற்றும் நீண்ட தூர பயணங்கள் ஆகியவற்றை ராகு காலத்தில் தவிர்ப்பது மரபு.',
      },
      {
        q: 'ராகு காலம் எல்லா ஊர்களுக்கும் ஒரே நேரமா?',
        a: 'இல்லை. ராகு காலம் என்பது அந்தந்த ஊரின் உள்ளூர் சூரிய உதயத்தை அடிப்படையாகக் கொண்டது. எனவே சென்னை, மதுரை, கோவை போன்ற ஒவ்வொரு நகரத்திற்கும் சில நிமிடங்கள் மாறுபடும்.',
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
              <li className="text-orange-600 font-medium">இன்றைய ராகு காலம்</li>
            </ol>
          </nav>
        </div>

        {/* Hero heading */}
        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            இன்றைய ராகு காலம் கணிப்பான்
          </h1>
          <p className="text-lg text-gray-600">
            Today&apos;s Rahu Kalam Timings in Tamil Nadu
          </p>
        </div>

        {/* Tool */}
        <RahuKalam />
        <CityLinks basePath="/tools/rahu-kalam" title="ஊர் வாரியாக ராகு காலம்" />
      </div>
    </>
  );
}
