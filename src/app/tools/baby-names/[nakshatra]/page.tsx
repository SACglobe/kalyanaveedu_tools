import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { NAKSHATRAS_LIST } from '@/lib/astro-core/constants';
import { NAKSHATRA_SLUGS, getNakshatraBySlug, nakshatraSlug, padaNames } from '@/lib/baby-names';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return NAKSHATRA_SLUGS.map((nakshatra) => ({ nakshatra }));
}

export async function generateMetadata({ params }: { params: Promise<{ nakshatra: string }> }): Promise<Metadata> {
  const { nakshatra } = await params;
  const n = getNakshatraBySlug(nakshatra);
  if (!n) return {};
  const letters = padaNames(n.id).map((p) => p.letterTa).join(', ');
  const title = `${n.nameTa} நட்சத்திர குழந்தை பெயர்கள் – ${letters} | ${n.nameEn} Baby Names Tamil`;
  const description = `${n.nameTa} நட்சத்திரத்திற்கான பெயர் எழுத்துகள் (${letters}), ஆண் மற்றும் பெண் குழந்தை பெயர்கள். ${n.nameEn} nakshatra baby names with pada letters.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/tools/baby-names/${nakshatra}` },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/tools/baby-names/${nakshatra}`, type: 'website', locale: 'ta_IN' },
  };
}

export default async function NakshatraNamesPage({ params }: { params: Promise<{ nakshatra: string }> }) {
  const { nakshatra } = await params;
  const n = getNakshatraBySlug(nakshatra);
  if (!n) notFound();
  const padas = padaNames(n.id);
  const idx = NAKSHATRAS_LIST.findIndex((x) => x.id === n.id);
  const prev = NAKSHATRAS_LIST[(idx + 26) % 27];
  const next = NAKSHATRAS_LIST[(idx + 1) % 27];
  const letters = padas.map((p) => p.letterTa).join(', ');

  const jsonLd = generateToolJsonLd({
    name: `${n.nameTa} நட்சத்திர குழந்தை பெயர்கள்`,
    description: `${n.nameTa} நட்சத்திரத்தின் 4 பாதங்களுக்குரிய எழுத்துகள்: ${letters}`,
    path: `/tools/baby-names/${nakshatra}`,
    faqs: [
      { q: `${n.nameTa} நட்சத்திரத்திற்கு எந்த எழுத்தில் பெயர் வைக்கலாம்?`, a: `${n.nameTa} நட்சத்திரத்தின் 1, 2, 3, 4-ஆம் பாதங்களுக்கு முறையே ${letters} ஆகிய எழுத்துகளில் தொடங்கும் பெயர்கள் பொருந்தும்.` },
      { q: `${n.nameTa} நட்சத்திரம் எந்த ராசியில் வரும்?`, a: `${n.nameTa} நட்சத்திரம் ${n.rasiTa} ராசியில் வருகிறது; தசா அதிபதி ${n.dashaLordTa}.` },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'குழந்தை பெயர்கள்', href: '/tools/baby-names' }, { name: n.nameTa }]} />
          <header className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{n.nameTa} நட்சத்திர குழந்தை பெயர்கள்</h1>
            <p className="text-gray-600">{n.nameEn} Nakshatra Baby Names · பெயர் எழுத்துகள்: <strong>{letters}</strong></p>
          </header>

          <section className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 text-sm text-gray-700 grid grid-cols-2 gap-3">
            <p>ராசி: <strong>{n.rasiTa}</strong></p>
            <p>தசா அதிபதி: <strong>{n.dashaLordTa}</strong></p>
            <p>கணம்: <strong>{n.ganaTa}</strong></p>
            <p>யோனி: <strong>{n.yoniTa}</strong></p>
          </section>

          <div className="space-y-4 mb-6">
            {padas.map((p, i) => (
              <section key={i} className="bg-white rounded-2xl border border-gray-100 p-5">
                <h2 className="text-lg font-black text-gray-900 mb-3">{i + 1}-ஆம் பாதம் – <span className="text-primary">{p.letterTa}</span></h2>
                {p.boys.length === 0 && p.girls.length === 0 ? (
                  <p className="text-sm text-gray-500">இந்த எழுத்தில் தொடங்கும் பெயர்கள் அரிது; குடும்ப ஜோதிடரிடம் ஆலோசிக்கலாம்.</p>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-blue-50 rounded-xl p-3"><p className="font-bold text-blue-900 mb-1">👦 ஆண் குழந்தை</p><p className="text-gray-700">{p.boys.join(', ') || '—'}</p></div>
                    <div className="bg-pink-50 rounded-xl p-3"><p className="font-bold text-pink-900 mb-1">👧 பெண் குழந்தை</p><p className="text-gray-700">{p.girls.join(', ') || '—'}</p></div>
                  </div>
                )}
              </section>
            ))}
          </div>

          <AdsterraBanner format="300x250" className="mb-6" />

          <nav className="flex items-center justify-between gap-3 mb-6 text-sm font-bold">
            <Link href={`/tools/baby-names/${nakshatraSlug(prev)}`} className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-orange-300">← {prev.nameTa}</Link>
            <Link href="/tools/baby-names" className="text-primary">அனைத்து நட்சத்திரங்கள்</Link>
            <Link href={`/tools/baby-names/${nakshatraSlug(next)}`} className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-orange-300">{next.nameTa} →</Link>
          </nav>
          <p className="text-xs text-gray-400">பெயர்கள் மாதிரிகள் மட்டுமே (முழுமையான பட்டியல் அல்ல); பெயர் தேர்வு குடும்ப மரபு மற்றும் ஜோதிடரின் ஆலோசனைப்படி இறுதி செய்யவும். பிழை ஏதேனும் இருந்தால் <Link href="/contact" className="text-primary font-bold">எங்களுக்குத் தெரிவிக்கவும்</Link>.</p>
        </div>
      </div>
    </>
  );
}
