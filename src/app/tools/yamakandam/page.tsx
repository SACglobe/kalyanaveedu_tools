import type { Metadata } from 'next';
import Yamakandam from '@/components/tools/Yamakandam';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'இன்றைய யமகண்டம் & குளிகை நேரம் | Yamakandam & Kuligai Today Tamil',
  description:
    'இன்றைய யமகண்டம் மற்றும் குளிகை நேரங்களை சென்னை, மதுரை, திருச்சி உட்பட உங்கள் ஊரின் சூரிய உதய அடிப்படையில் துல்லியமாக கணக்கிடுங்கள்.',
  keywords: [
    'yamakandam today',
    'இன்றைய யமகண்டம்',
    'kuligai neram today',
    'இன்றைய குளிகை நேரம்',
    'yamagandam timings tamil',
    'குளிகை நேரம் இன்று',
    'tamil panchangam yamakandam',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tools/yamakandam`,
  },
  openGraph: {
    title: 'இன்றைய யமகண்டம் & குளிகை கணிப்பான் | Yamakandam & Kuligai Tamil',
    description: 'இன்றைய யமகண்டம் மற்றும் குளிகை நேரங்களை துல்லியமாக அறியுங்கள்.',
    url: `${SITE_CONFIG.url}/tools/yamakandam`,
    type: 'website',
  },
};

export const dynamic = 'force-static';

export default function YamakandamPage() {
  const jsonLd = generateToolJsonLd({
    name: 'இன்றைய யமகண்டம் & குளிகை கணிப்பான் - Yamakandam & Kuligai Today',
    description: 'இன்றைய யமகண்டம் மற்றும் குளிகை நேரங்களை கணக்கிடும் இலவச ஆன்லைன் கருவி',
    path: '/tools/yamakandam',
    faqs: [
      {
        q: 'யமகண்டம் என்றால் என்ன?',
        a: 'யமகண்டம் என்பது கேது பகவானுக்குரிய காலமாகும். இந்த நேரத்தில் புதிய சுப காரியங்கள் தொடங்குவதை தவிர்க்க வேண்டும்.',
      },
      {
        q: 'குளிகை நேரம் என்றால் என்ன?',
        a: 'குளிகன் (சனி பகவானின் மைந்தன்) ஆதிக்க நேரம் குளிகை எனப்படும். இந்த நேரத்தில் செய்யும் சுப காரியங்கள் பல மடங்கு விருத்தியடையும்; ஆனால் கடன் வாங்குதல், இறுதிச் சடங்கு போன்றவற்றை தவிர்க்க வேண்டும்.',
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
              <li className="text-orange-600 font-medium">யமகண்டம் &amp; குளிகை</li>
            </ol>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            இன்றைய யமகண்டம் &amp; குளிகை கணிப்பான்
          </h1>
          <p className="text-lg text-gray-600">
            Today&apos;s Yamakandam &amp; Kuligai Timings
          </p>
        </div>

        <Yamakandam />
      </main>
    </>
  );
}
