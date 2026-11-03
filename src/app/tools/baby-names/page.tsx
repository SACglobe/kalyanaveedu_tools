import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { NAKSHATRAS_LIST } from '@/lib/astro-core/constants';
import { nakshatraSlug } from '@/lib/baby-names';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: 'நட்சத்திர வாரியாக குழந்தை பெயர்கள் | Tamil Baby Names by Nakshatra',
  description: '27 நட்சத்திரங்களுக்கும் பாதம் வாரியான பெயர் எழுத்துகள் மற்றும் ஆண், பெண் குழந்தை பெயர் பரிந்துரைகள். Tamil baby names by star (nakshatra) and pada.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/baby-names` },
  openGraph: { title: 'நட்சத்திர வாரியாக குழந்தை பெயர்கள்', description: '27 நட்சத்திரங்களுக்கான பெயர் எழுத்துகள் & பெயர்கள்', url: `${SITE_CONFIG.url}/tools/baby-names`, type: 'website', locale: 'ta_IN' },
};

export default function BabyNamesHub() {
  const jsonLd = generateToolJsonLd({
    name: 'நட்சத்திர வாரியாக குழந்தை பெயர்கள்',
    description: '27 நட்சத்திரங்களுக்கான பாதம் வாரியான பெயர் எழுத்துகள்',
    path: '/tools/baby-names',
    faqs: [
      { q: 'நட்சத்திரப்படி குழந்தைக்கு பெயர் வைப்பது எப்படி?', a: 'குழந்தை பிறந்த நட்சத்திரமும் பாதமும் தெரிந்ததும், அந்த பாதத்திற்குரிய எழுத்தில் தொடங்கும் பெயரைத் தேர்ந்தெடுப்பது மரபு. ஒவ்வொரு நட்சத்திரத்திற்கும் 4 பாதங்கள்; ஒவ்வொன்றுக்கும் ஒரு தொடக்க எழுத்து உண்டு.' },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'கருவிகள்', href: '/tools' }, { name: 'குழந்தை பெயர்கள்' }]} />
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">நட்சத்திர வாரியாக குழந்தை பெயர்கள்</h1>
            <p className="text-gray-600">Tamil Baby Names by Nakshatra (Star) & Pada</p>
            <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto">
              உங்கள் குழந்தையின் நட்சத்திரம் தெரியவில்லையா? <Link href="/tools/nakshatra-finder" className="text-primary font-bold">பிறந்த தேதி, நேரம் வைத்து நட்சத்திரம் கண்டுபிடிக்கவும் →</Link>
            </p>
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {NAKSHATRAS_LIST.map((n) => (
              <Link key={n.id} href={`/tools/baby-names/${nakshatraSlug(n)}`} className="bg-white rounded-2xl border border-gray-100 p-4 text-center hover:border-orange-300 hover:shadow-md transition-all">
                <span className="block text-lg font-black text-gray-900">{n.nameTa}</span>
                <span className="block text-xs text-gray-400">{n.nameEn} · {n.rasiTa}</span>
              </Link>
            ))}
          </div>
          <AdsterraBanner format="300x250" className="my-8" />
        </div>
      </div>
    </>
  );
}
