import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';

import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';


export const metadata: Metadata = {
    title: 'திருமண கடனை தவிர்ப்பது எப்படி? | How to Avoid Wedding Debt',
    description: 'திருமண செலவுக்கு கடன் வாங்காமல் இருக்க practical tips, budget planning, cost-cutting strategies, மற்றும் நிதி மேலாண்மை வழிகாட்டி.',
    keywords: ['wedding debt', 'wedding budget', 'avoid debt', 'wedding savings', 'financial planning', 'tamil wedding'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/avoid-wedding-debt`,
    },
};

export default function AvoidWeddingDebt() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* <!-- Schema.org Markup --> */}
            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'திருமண கடனை தவிர்ப்பது எப்படி? | How to Avoid Wedding Debt',
                    description: 'திருமண செலவுக்கு கடன் வாங்காமல் இருக்க practical tips, budget planning, cost-cutting strategies, மற்றும் நிதி மேலாண்மை வழிகாட்டி.',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-02-25',
                    slug: '/blog/avoid-wedding-debt'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'திருமண கடன் தவிர்த்தல்', item: '/blog/avoid-wedding-debt' }
                    ]
                }} 
            />
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    திருமண கடனை தவிர்ப்பது எப்படி?
                </h1>
            <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
                    alt="திருமண கடனை தவிர்ப்பது எப்படி?"
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
                    திருமணம் வாழ்வின் மிக மகிழ்ச்சியான நிகழ்வு. ஆனால் பல குடும்பங்கள் social pressure,
                    status மற்றும் expectation-களால் தங்கள் வருமானத்திற்கு மீறி செலவு செய்து,
                    கடனில் சிக்கிக்கொள்கின்றனர். திருமணத்திற்காக வாங்கிய கடனை அடைக்க
                    பல ஆண்டுகள் ஆகும், இது வாழ்க்கையின் தொடக்கத்தையே மன அழுத்தமாக ஆக்குகிறது.
                    இந்த வழிகாட்டியில், கடன் இல்லாமல் அழகான திருமணம் நடத்துவது எப்படி என்று
                    பார்க்கலாம்.
                </p>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-100 my-8">
                    <h3 className="text-xl font-bold text-red-900 mb-2">⚠️ திருமண கடன் - நிஜ உண்மைகள்</h3>
                    <p className="text-red-800 text-sm">
                        இந்தியாவில் 40% குடும்பங்கள் திருமணத்திற்காக கடன் வாங்குகின்றனர் (surveys படி).
                        சராசரியாக ₹3-5 லட்சம் கடன் வாங்கப்படுகிறது, இதை அடைக்க 3-5 ஆண்டுகள் ஆகிறது.
                        இந்த கடன் interest உடன் சேர்ந்து ₹5-8 லட்சமாக மாறும். இந்த பணத்தை
                        இரண்டாம் தலைமுறைக்கு investment ஆக பயன்படுத்தியிருக்கலாம். <strong>கடன்
                            இல்லாமல் திருமணம் செய்வது அவசியம்!</strong>
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    கடன் வாங்க நேரும் முக்கிய காரணங்கள்
                </h2>

                <div className="space-y-4 my-6">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">1. Social Pressure & Status Symbol</h3>
                        <p className="text-sm text-gray-700">
                            "பக்கத்து வீட்டுக்காரர் ஐந்து நட்சத்திர ஹோட்டலில் செய்தார், நாமும் செய்ய
                            வேண்டும்" என்ற எண்ணம். திருமணத்தை status symbol-ஆக பார்ப்பது,
                            "என்ன சொல்வார்கள்?" என்ற பயம், peers comparison - இவை எல்லாம்
                            அதிக செலவுக்கு கார ணமாகும்.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">2. Planning & Budgeting இல்லாதது</h3>
                        <p className="text-sm text-gray-700">
                            முன்கூட்டியே திட்டமிடாமல், last minute-ல் vendors அவசரம் அவசரமாக book
                            செய்தால் விலை அதிகமாகும். Budget தயார் செய்யாமல், "எவ்வளவு ஆகும்
                            ஆகட்டும்" என்ற மனப்பான்மை கடனுக்கு வழிவகுக்கும்.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">3. Guest List கட்டுப்பாடு இல்லை</h3>
                        <p className="text-sm text-gray-700">
                            "எல்லாரையும் invite செய்யணும், இல்லையென்றால் கோபம் வந்துடும்" என்று
                            guest list-ஐ பெரிதாக்குவது. ஒவ்வொரு guest-க்கும் ₹500-1500 (உணவு,
                            இருக்கை, decor share) செலவு - 100 பேரை குறைத்தால் ₹1 லட்சம் சேமிப்பு!
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">4. Hidden Costs எதிர்பார்ப்பு இல்லை</h3>
                        <p className="text-sm text-gray-700">
                            Photographer, videographer, makeup, decoration, return gifts, priest,
                            band/DJ, valet parking, printing - இவை எல்லாம் சிறிய செலவுகள் என
                            நினைத்தால், சேர்ந்தால் ₹2-3 லட்சம் ஆகும். Hidden costs-க்கு buffer இல்லாச்சேல்
                            கடன் தான்.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">5. EMI "Easy" என நினைப்பது</h3>
                        <p className="text-sm text-gray-700">
                            "₹5 லட்சம் கடன் வாங்கி, மாதம் ₹15,000 EMI கட்டிக்கலாம்" என எளிதாக
                            நினைக்கிறார்கள். ஆனால் interest-உடன் மொத்தம் ₹7-8 லட்சம் அடைக்க வேண்டும்.
                            3-4 ஆண்டுகள் வருமானத்தின் ஒரு பகுதி பூட்டப்படும்.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    கடன் இல்லாமல் திருமணம்: 10 Practical Tips
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. 12-18 மாதங்கள் முன்பே சேமிப்பு தொடங்குங்கள்</h3>
                <p>
                    திருமணம் முடிவு செய்தவுடன், குறிப்பிட்ட தொகையை மாதா மாதம் திருமண fund-ல்
                    சேமிக்கத் தொடங்குங்கள்:
                </p>
                <div className="bg-green-50 p-5 rounded-xl my-4">
                    <h4 className="font-bold text-green-900 mb-3">உதாரணம்:</h4>
                    <ul className="text-sm text-green-800 space-y-2">
                        <li>• <strong>இலக்கு:</strong> ₹8 லட்சம் திருமண budget</li>
                        <li>• <strong>எல்லோம் monthly சம்பாளம்:</strong> ₹75,000 (தம்பதி இருவரும் சேர்ந்து)</li>
                        <li>• <strong>மாதா மாதம் சேமிப்பு:</strong> ₹25,000 (வருமானத்தின் 33%)</li>
                        <li>• <strong>காலம்:</strong> 18 மாதங்கள்</li>
                        <li>• <strong>மொத்தம் சேமிப்பு:</strong> ₹4.5 லட்சம்</li>
                        <li>• <strong>பெற்றோர் support:</strong> ₹3.5 லட்சம் (இருகுடும்பம் சேர்ந்து)</li>
                        <li>• <strong>Total:</strong> ₹8 லட்சம் - கடன் இல்லாமல்! ✓</li>
                    </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Realistic Budget Create செய்யுங்கள்</h3>
                <p>
                    Dream wedding அல்ல, affordable wedding முதல் இலக்கு. எங்கள்{' '}
                    <Link href="/#calculator" className="text-primary hover:underline font-semibold">
                        Budget Calculator
                    </Link>
                    {' '}பயன்படுத்தி realistic budget உருவாக்குங்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>உங்கள் உண்மையான வருமானம் & savings-ஐ அடிப்படையாக கொள்ளுங்கள்</li>
                    <li>ஒவ்வொரு செலவுக்கும் priority கொடுங்கள் (must-have vs nice-to-have)</li>
                    <li>15-20% buffer வைக்கவும் (unexpected செலவுகளுக்கு)</li>
                    <li>Budget-க்கு மேல் செல்வதை தவிர்க்க discipline தேவை</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Guest List-ஐ கடுமையாக கட்டுப்படுத்துங்கள்</h3>
                <p>
                    Guests = செலவு என்பதை புரிந்துகொள்ளுங்கள்:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="bg-red-50 p-5 rounded-xl">
                        <h4 className="font-bold mb-2 text-red-900">❌ தவிர்க்கவும்:</h4>
                        <ul className="text-sm text-red-800 space-y-1">
                            <li>• தொலைதூர உறவினர்கள் (10 ஆண்டுகளில் பேசியதில்லை)</li>
                            <li>• Office colleagues எல்லோரையும் (close friends மட்டும்)</li>
                            <li>• பெற்றோர் நண்பர்கள் (அவசியமற்றது)</li>
                            <li>• நீங்கள் அறியாத நபர்கள்</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-5 rounded-xl">
                        <h4 className="font-bold mb-2 text-green-900">✓ அழைக்கவும்:</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                            <li>• நெருங்கிய குடும்பம் & உறவினர்கள்</li>
                            <li>• நெருங்கிய நண்பர்கள் (close circle)</li>
                            <li>• Regular-ஆக contact இருப்பவர்கள்</li>
                            <li>• உண்மையிலேயே உங்கள் மகிழ்ச்சியை share செய்பவர்கள்</li>
                        </ul>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Venue & Catering Smart Choice</h3>
                <p>
                    Venue மற்றும் உணவு செலவு மொத்மமொத்த budget-இல் 50-60%:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li><strong>Community Hall:</strong> ஐந்து நட்சத்திர hotel (₹3-5 லட்சம்) vs kalyana mandapam (₹50,000-1 லட்சம்)</li>
                    <li><strong>Off-peak season:</strong> கோடை/மழைக்காலம் (June-Sep) - 20-30% discount</li>
                    <li><strong>Weekday wedding:</strong> Sunday vs Thursday - venue cost 40% குறையும்</li>
                    <li><strong>Lunch vs Dinner:</strong> மாலை உணவு lunch-ஐ விட 25% அதிக செலவு</li>
                    <li><strong>Menu simplify:</strong> 20 items வேண்டாம், 10-12 நல்ல quality items போதும்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Decoration - DIY & Minimalist Approach</h3>
                <p>
                    Professional decorator (₹1-3 லட்சம்) வேண்டாம், smart alternatives:
                </p>
                <div className="bg-purple-50 p-5 rounded-xl my-4">
                    <ul className="text-sm text-purple-800 space-y-2">
                        <li>• <strong>Flowers:</strong> Jasmine, marigold (local, seasonal) - roses, lilies (expensive, imported) தவிர்க்கவும்</li>
                        <li>• <strong>DIY Decor:</strong> நண்பர்கள், குடும்பம் உதவியுடன் backdrop, garlands செய்யலாம்</li>
                        <li>• <strong>Reuse & Rent:</strong> Mandapam decoration ரெண்ட் எடுக்கலாம் (வாங்காமல்)</li>
                        <li>• <strong>Less is More:</strong> Minimalist, elegant decor - over-the-top தேவையில்லை</li>
                        <li>• <strong>Natural Beauty:</strong> Outdoor/garden wedding என்றால் décoration தேவையே குறையும்</li>
                    </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Photography & Videography செலவு குறைப்பு</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Freshers/students:</strong> Established pros (₹1.5-3 லட்சம்) vs fresh talents (₹40-80k சேமிப்பு)</li>
                    <li><strong>Packages குறைக்கவும்:</strong> Pre-wedding, engagement, reception எல்லாம் வேண்டாம் - wedding day மட்டும்</li>
                    <li><strong>Digital delivery:</strong> Printed albums (₹20-40k) தவிர்த்து digital-ஆக மட்டும் வாங்கலாம்</li>
                    <li><strong>நண்பர் உதவி:</strong> புத்தொழில் camera வைத்திருக்கும் நண்பர் இருந்தால், backup photographer-ஆக</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. Invitations & Printing செலவு தவிர்க்கவும்</h3>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div>
                        <h4 className="font-bold mb-2">பாரம்பரிய (விலை அதிகம்):</h4>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Printed invitation cards (₹30-100/card)</li>
                            <li>200 cards = ₹10,000-20,000</li>
                            <li>Courier/delivery செலவு</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">நவீன (Budget-friendly):</h4>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>E-invitations (WhatsApp, Email) - FREE!</li>
                            <li>Video invitations - ₹5,000-10,000</li>
                            <li>Google Forms-ல் RSVP - FREE tracking</li>
                        </ul>
                    </div>
                </div>
                <p className="text-sm text-gray-600 my-3">
                    <strong>குறிப்பு:</strong> மிக நெருக்கமான உறவினர்களுக்கு மட்டும் printed cards,
                    மற்றவர்களுக்கு e-invitations - hybrid approach சிறந்தது.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">8. Return Gifts தவிர்க்கவும் அல்லது குறைக்கவும்</h3>
                <p>
                    Return gifts (₹100-500/gift × 200 guests = ₹40,000-₹1 லட்சம்) பெரிய செலவு:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li><strong>தவிர்க்கலாம்:</strong> உங்கள் வருகையே பரிசு, return gift அவசியமில்லை</li>
                    <li><strong>Practical gifts:</strong> சிறிய தாம்பளம், eco-friendly items (reusable bags), homemade sweets</li>
                    <li><strong>Charity:</strong> Return gift செலவை charity-க்கு donate செய்ததாக card வழங்கலாம்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">9. Wedding Dress & Jewelry Smart Buy</h3>
                <div className="bg-yellow-50 p-5 rounded-xl my-4">
                    <h4 className="font-bold text-yellow-900 mb-3">🛍️ Dress Savings:</h4>
                    <ul className="text-sm text-yellow-800 space-y-2">
                        <li>• <strong>Rent vs Buy:</strong> Designer saree/lehenga rent (₹10-30k) vs buy (₹1-5 லட்சம்)</li>
                        <li>• <strong>Family heirloom:</strong> பாட்டி/அம்மா saree-ஐ reuse செய்யலாம் (sentimental + free)</li>
                        <li>• <strong>Boutique vs Mall:</strong> Local boutique-ல் customize செய்தால் 30-40% சேமிப்பு</li>
                    </ul>
                    <h4 className="font-bold text-yellow-900 mb-3 mt-4">💍 Jewelry Savings:</h4>
                    <ul className="text-sm text-yellow-800 space-y-2">
                        <li>• <strong>Family jewelry:</strong> Borrow from family (தாலி மட்டும் புதிதாக வாங்கினால் போதும்)</li>
                        <li>• <strong>Light-weight designs:</strong> Heavy jewelry (50-100 gm) vs light (20-30 gm) - ₹2-4 லட்சம் சேமிப்பு</li>
                        <li>• <strong>Mix real & imitation:</strong> முக்கிய jewelry மட்டும் real gold, மற்றவை temple/AD jewelry</li>
                    </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">10. "No" சொல்ல கற்றுக்கொள்ளுங்கள்</h3>
                <p>
                    மிக முக்கியமான skill - social pressure-க்கு "நோ" சொல்வது:
                </p>
                <div className="bg-blue-50 p-5 rounded-xl my-4">
                    <ul className="text-sm text-blue-800 space-y-2">
                        <li>• <strong>Budget முக்கியம்:</strong> "எங்களுக்கு இது budget-க்கு மீறும்" - தெளிவாக சொல்லுங்கள்</li>
                        <li>• <strong>Comparisons ignore:</strong> "பக்கத்து வீட்டுக்காரர்..." என்று யாராவது சொன்னால், கேள்வி கேட்க வேண்டாம்</li>
                        <li>• <strong>உங்கள் wedding:</strong> நீங்கள் விரும்பியபடி செய்யுங்கள், மற்றவர் expectations-க்கு அடிமையாக வேண்டாம்</li>
                        <li>• <strong>Debt = Stress:</strong> கடன் வாங்கினால், திருமண பின் வாழ்க்கை தொடக்கமே stress-ஆக இருக்கும்</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">மிக குறைந்த budget-ல் நல்ல திருமணம் நடத்த முடியுமா?</h3>
                        <p className="text-gray-600 text-sm">
                            ஆம், முற்றிலும் சாத்தியம்! நல்ல திருமணம் என்பது பணம் செலவு செய்வதில்
                            இல்லை, அன்பு மற்றும் நெருக்கமான கொண்டாட்டத்தில் இருக்கிறது. ₹2-3 லட்சத்தில்
                            கூட அழகான, நினைவில் நிற்கும் திருமணம் செய்யலாம் - சிறிய guest list
                            (50-100 பேர்), community hall, simple decoration, good food, மற்றும் basic
                            photography. Quality time with loved ones-தான் முக்கியம், extravaganza அல்ல.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">பெற்றோர் kடன் வாங்க விரும்பினால் என்ன செய்வது?</h3>
                        <p className="text-gray-600 text-sm">
                            பெற்றோருடன் அமர்ந்து நேர்மையாக பேசமுங்கள். கடன்-ன் நீண்டகால விளைவுகளை
                            (interest, EMI burden, financial stress) விளக்குங்கள். Alternative suggestions
                            கொடுங்கள் - சிறிய wedding, delay செய்து சேமிக்கலாம், அல்லது நீங்களே
                            contribute செய்யலாம். "Status" விட financial security முக்கியம் என்று
                            மரியாதையுடன் புரியவைக்கவும். பெற்றோர் உங்கள் நல்லதை தான் விரும்புவார்கள்,
                            logic-ஆக explain செய்தால் புரிந்துகொள்வார்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">எதிர்பாராத செலவுகளை எப்படி handle செய்வது?</h3>
                        <p className="text-gray-600 text-sm">
                            15-20% contingency buffer வைக்கவும். உதாரணம்: ₹5 லட்சம் budget என்றால்,
                            உண்மையில் ₹4.25 லட்சத்திற்கு திட்டமிடுங்கள், ₹75,000 emergency buffer.
                            Unexpected: venue last-minute issue, extra guests, decoration damage,
                            photographer equipment problem, weather changes (outdoor wedding-க்கு tent rent),
                            guest accommodation சிக்கல். Buffer இல்லாவிட்டால் கடன் வாங்க வேண்டியிருக்கும்.
                            Planning-ல் cushion வைப்பது அவசியம்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Personal loan vs Credit card - எது நல்லது?</h3>
                        <p className="text-gray-600 text-sm">
                            <strong>இரண்டுமே தவிர்க்கவும்!</strong> ஆனால் unavoidable என்றால்:
                            Personal loan (11-15% interest, 3-5 yrs) credit card (18-36% interest, revolving)
                            விட சிறந்தது. ஆனால் சிறந்த option: திருமணத்தை 6-12 மாதங்கள் delay செய்து,
                            சேமித்து கடன் இல்லாமல் செய்வது. அவசரம் வேண்டாம் - financial freedom
                            முக்கியம். கடன் வாங்கினால், minimum 2 வருடத்தில் clear செய்யுங்கள்,
                            3-4 வருடங்கள் இழுத்தால் interest கொள்ளையடிக்கும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Court marriage செய்து பின்பு reception செய்யலாமா?</h3>
                        <p className="text-gray-600 text-sm">
                            ஆம், இது ஒரு நல்ல budget option! Court registration (₹500-2000) அல்லது
                            temple wedding (₹5,000-20,000) சிறிய ceremony-ஆக முடித்து, சட்டப்படி
                            திருமணமாகிவிடும். பின்பு நீங்கள் save செய்த பணத்தில் 6 மாதம்/1 வருடம்
                            கழித்து நல்ல reception party நடத்தலாம். இதன் benefits: (1) Debt இல்லை,
                            (2) Planning-க்கு நேரம் கிடைக்கும், (3) Honeymoon-க்கு செலவழிக்கலாம்,
                            (4) கூட்டம் குறையும் (reception-ல் மட்டும்). நவீன தம்பதிகள் இதை அதிகம் விரும்புகிறார்கள்.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        திருமணம் மகிழ்ச்சியான தொடக்கமாக இருக்க வேண்டும், நிதி சுமையாக அல்ல.
                        கடன் வாங்கி grand wedding செய்வதை விட, உங்கள் வசதிக்கேற்ற simple wedding
                        செய்து, debt-free வாழ்க்கை தொடங்குவது புத்திசாலித்தனம். நினைவில் கொள்ளுங்கள்:
                        திருமணம் ஒரு நாள், ஆனால் kடன் பல ஆண்டுகள். Social pressure-க்கு அடிபணியாதீர்கள்,
                        உங்கள் நிதி பாதுகாப்பை முதன்மைப்படுத்துங்கள். பெரிய wedding செய்ததால்
                        வாழ்க்கை சிறப்பாக இருக்காது, ஆனால் debt-free இருந்தால் மன அமைதியுடன்,
                        மகிழ்ச்சியாக வாழலாம். Smart planning + discipline = கடனற்ற, மகிழ்ச்சியான திருமண வாழ்க்கை!
                    </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">பயனுள்ள குறிப்பு:</h3>
                    <p className="text-blue-800 text-sm">
                        திருமண செலவுகளை முறையாக திட்டமிட எங்களின் <Link href="/blog/budget-planning-tips" className="font-bold underline">திருமண பட்ஜெட் திட்டமிடல்</Link> கட்டுரையையும்,
                        அனைத்து வேலைகளையும் கண்காணிக்க <Link href="/blog/thirumana-velai-pattiyal" className="font-bold underline">திருமண வேலைப் பட்டியல்</Link> கருவியையும் பயன்படுத்தவும்.
                    </p>
                </div>

                
                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🛠️</span> எங்களின் இலவச திருமண கருவிகள்
                    </h3>
                    <p className="text-gray-700 mb-6">
                        திருமண ஏற்பாடுகளை எளிமையாக்க நாங்கள் வழங்கும் இலவச டிஜிட்டல் கருவிகளைப் பயன்படுத்தி மகிழுங்கள்.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href="/tools/thirumana-selavu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">💰</span>
                            <div>
                                <div className="font-bold text-gray-900">பட்ஜெட் பிளானர்</div>
                                <div className="text-xs text-gray-500">செலவுகளைத் திட்டமிட</div>
                            </div>
                        </Link>
                        <Link href="/tools/thirumana-thayaripu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">📝</span>
                            <div>
                                <div className="font-bold text-gray-900">வேலைகள் பட்டியல்</div>
                                <div className="text-xs text-gray-500">Checklist நிர்வகிக்க</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <AuthorBio 
                    name="சித்ரை செல்வன்"
                    role="Founder, Kalyana Veedu"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். நிதி விவேகத்துடன் திருமண திட்டமிடலை ஊக்குவிக்கிறார்."
                    website="https://selvan.dev"
                />
                <RelatedArticles 
                    currentSlug="/blog/avoid-wedding-debt" 
                    category="Finance" 
                />
            </div>
        </article >
    );
}
