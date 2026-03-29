import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';

import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';


export const metadata: Metadata = {
    title: 'நடுத்தர வர்க்க திருமண பட்ஜெட் திட்டமிடல்: செலவுகளை குறைப்பது எப்படி? | Wedding Budget Tips',
    description: 'இந்திய திருமண செலவுகளை குறைப்பதற்கான நடைமுறை குறிப்புகள். தங்கம், மண்டபம் மற்றும் உணவு செலவுகளை திட்டமிடும் எளிய வழிமுறைகள்.',
    keywords: ['wedding budget tips tamil', 'low budget wedding ideas', 'middle class marriage planning', 'thirumana selavu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/budget-planning-tips`,
    },
};

export default function BudgetPlanningTips() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* <!-- Schema.org Markup --> */}
            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'நடுத்தர வர்க்க திருமண பட்ஜெட் திட்டமிடல்: செலவுகளை குறைப்பது எப்படி? | Wedding Budget Tips',
                    description: 'இந்திய திருமண செலவுகளை குறைப்பதற்கான நடைமுறை குறிப்புகள். தங்கம், மண்டபம் மற்றும் உணவு செலவுகளை திட்டமிடும் எளிய வழிமுறைகள்.',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-02-25',
                    slug: '/blog/budget-planning-tips'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'பட்ஜெட் திட்டமிடல்', item: '/blog/budget-planning-tips' }
                    ]
                }} 
            />
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    நடுத்தர வர்க்க திருமண பட்ஜெட் திட்டமிடல்: செலவுகளை குறைப்பது எப்படி?
                </h1>
            <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src="https://images.unsplash.com/photo-1554224155-16974a4ea2c5?auto=format&fit=crop&q=80&w=1200"
                    alt="நடுத்தர வர்க்க திருமண பட்ஜெட்"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="பிப்ரவரி 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    இந்திய திருமணங்கள் என்றாலே பிரம்மாண்டம் தான். ஆனால் அந்த பிரம்மாண்டம் பல குடும்பங்களை
                    கடன் சுமையில் தள்ளிவிடுகிறது. ஆடம்பரத்தையும் குறைக்காமல், அதே சமயம் பட்ஜெட்டிற்குள்ளும்
                    திருமணத்தை முடிப்பது எப்படி? இதோ சில எளிய வழிகள்.
                </p>

                <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
                    <h3 className="text-xl font-bold text-green-900 mb-2">💰 பட்ஜெட் கால்குலேட்டர்</h3>
                    <p className="text-green-800">
                        உங்கள் திருமணத்திற்கு உண்மையில் எவ்வளவு செலவாகும்? தோராயமாக கணக்கிடாமல், எங்கள்
                        <Link href="/tools/thirumana-selavu" className="text-primary font-bold hover:underline mx-1">
                            இலவச திருமண பட்ஜெட் கால்குலேட்டரை
                        </Link>
                        பயன்படுத்தி துல்லியமாக அறிந்துகொள்ளுங்கள்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. தங்களிடம் உள்ளதை முதலில் பட்டியலிடுங்கள்</h2>
                <p>
                    பலர் செய்யும் முதல் தவறு, கையில் எவ்வளவு பணம் உள்ளது என்பதை கணக்கிடாமலேயே செலவுகளைத் தொடங்குவது.
                    உங்கள் சேமிப்பு எவ்வளவு? பெற்றோரின் பங்களிப்பு எவ்வளவு? கடன் வாங்க திட்டமிட்டுள்ளீர்களா?
                    இந்த மூன்றையும் கூட்டி வரும் தொகையை விட 20% குறைவாக பட்ஜெட் போடுங்கள்.
                    (எ.கா: 10 லட்சம் கையிருப்பு என்றால், 8 லட்சத்திற்கு பட்ஜெட் போடுங்கள்).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. விருந்தினர் எண்ணிக்கை (Guest List)</h2>
                <p>
                    ஒவ்வொரு விருந்தினரும் உங்கள் செலவை அதிகரிக்கிறார்கள்.
                    உணவு + தாம்பூலம் + மண்டப இருக்கை என ஒரு நபருக்கு சராசரியாக ₹500 - ₹800 வரை செலவாகும்.
                    உண்மையிலேயே நெருக்கமானவர்களை மட்டும் அழைப்பது செலவை பாதியாக குறைக்கும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. மண்டபம் தேர்வு (Venue Selection)</h2>
                <p>
                    பிரபலமான மண்டபங்களை விட, கோவிலை ஒட்டிய மண்டபங்கள் அல்லது சமுதாய கூடங்கள் குறைந்த வாடகையில் கிடைக்கும்.
                    முகூர்த்த நாள் அல்லாத நாட்களில் (Non-Muhurtham dates) வரவேற்பு வைத்தால் மண்டப வாடகை குறைய வாய்ப்புள்ளது.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. உணவு (Food & Catering)</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li><strong>மெனுவை சுருக்குங்கள்:</strong> 20 வகை கூட்டு பொரியல்களை விட, 5 சுவையான வகைகள் போதும்.</li>
                    <li><strong>இலை vs பஃபே:</strong> பஃபே முறையில் உணவு வீணாவது அதிகமாக இருக்கும். இலை சாப்பாடு கலாச்சார ரீதியாகவும் சிறந்தது, செலவும் மிச்சம்.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. தங்க நகைகள் (Gold Purchase)</h2>
                <p>
                    ஒரே நாளில் மொத்த நகையையும் வாங்காதீர்கள். தங்க விலை குறையும் போதெல்லாம் சிறுக சிறுக வாங்கி சேமிப்பது புத்திசாலித்தனம்.
                    செய்கூலி, சேதாரம் குறைவான கடைகளைத் தேர்ந்தெடுங்கள்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. எங்கே செலவை குறைக்கக் கூடாது?</h2>
                <p>
                    செலவை குறைக்கிறேன் என்று புகைப்படக் கலைஞர் (Photography) மற்றும் மணமேடை அலங்காரத்தில் (Decoration) சமரசம் செய்யாதீர்கள்.
                    ஏனெனில், இவை இரண்டு மட்டுமே உங்கள் திருமண நினைவுகளை சுமந்து நிற்கும்.
                </p>

                <hr className="my-12 border-gray-200" />

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">திட்டமிடல் உதவிகள்:</h3>
                    <p className="text-blue-800 text-sm">
                        பட்ஜெட் திட்டமிடும்போது கடன்களைத் தவிர்க்க <Link href="/blog/avoid-wedding-debt" className="font-bold underline">திருமண கடன் தவிர்த்தல்</Link> ஆலோசனைகளையும்,
                        பாதுகாப்பிற்கு <Link href="/blog/wedding-insurance-guide" className="font-bold underline">திருமண காப்பீடு</Link> வழிகாட்டியையும் பயன்படுத்தவும்.
                    </p>
                </div>

                <AuthorBio 
                    name="சித்ரை செல்வன்"
                    role="Founder, Kalyana Veedu"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். நிதி விவேகத்துடன் திருமண திட்டமிடலை ஊக்குவிக்கிறார்."
                />
                <RelatedArticles 
                    currentSlug="/blog/budget-planning-tips" 
                    category="Finance" 
                />
            </div>
        </article>
    );
}
