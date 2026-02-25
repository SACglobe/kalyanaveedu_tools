import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'திருமண தங்க நகை வாங்கும் வழிகாட்டி | Wedding Gold Jewelry Guide',
    description: 'தங்க தரம் (purity), hallmark, making charges, designs, budgeting, & பராமரிப்பு - திருமண தங்கக நகை வாங்குபவர்களுக்கான முழுமையான வழிகாட்டி.',
    keywords: ['gold jewelry', 'wedding jewelry', 'gold purity', 'hallmark', 'tamil wedding', 'jewelry buying'],
    alternates: {
        canonical: '/blog/gold-jewelry-buying-guide',
    },
};

export default function GoldJewelryBuyingGuide() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    திருமண தங்க நகை வாங்கும் வழிகாட்டி
                </h1>
                <div className="flex justify-center gap-4 text-sm text-gray-500 mb-8">
                    <time dateTime="2026-02-10">பிப்ரவரி 10, 2026</time>
                    <span>•</span>
                    <span>6 நிமிட வாசிப்பு</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-sm">
                    <div className="text-gray-700">
                        <strong>எழுதியவர்:</strong> சித்ரை செல்வன் |
                        <a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            selvan.dev
                        </a>
                    </div>
                </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    திருமணத்தில் தங்க நகைகள் ஒரு முக்கிய பங்கு வகிக்கின்றன - அழகுக்காக மட்டுமல்ல,
                    முதீட்டுக்காகவும் (investment), பாரம்பரியத்திற்காகவும். ஆனால் தவறான தங்கம்
                    வாங்கினால் லட்சக்கணக்கில் நட்டம். தரம் (purity), hallmark, making charges,
                    designs, budgeting என பல விஷயங்களை தெரிந்துகொள்ள வேண்டும். இந்த
                    விரிவான வழிகாட்டியில் தங்க நகை வாங்குவதற்கு முன் தெரிந்துகொள்ள வேண்டிய
                    அனைத்து தகவல்களையும் பார்க்கலாம்.
                </p>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 my-8">
                    <h3 className="text-xl font-bold text-orange-900 mb-2">💍 ஏன் தங்கம் முக்கியம்?</h3>
                    <p className="text-orange-800 text-sm">
                        தமிழ் திருமணங்களில் தங்க நகை பல காரணங்களுக்காக வாங்கப்படுகிறது:
                        <strong>(1) பாரம்பரியம்</strong> - தலைமுறை தலைமுறையாக கடத்தப்படும் சொத்து,
                        <strong>(2) பாதுகாப்பு</strong> - மனைவிக்கான நிதி பாதுகாப்பு (emergency-க்கு விற்கலாம்),
                        <strong>(3) முதலீடு</strong> - தங்கம் எப்போதும் value கொண்டது,
                        <strong>(4) அழகு</strong> - மணமகள் அழகை மிளிரச் செய்யும். தரமான தங்கம்
                        வாங்குவது என்பது மிக முக்கியமான முடிவு.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    தங்க தரம் (Gold Purity) புரிந்துகொள்வது
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Karat (கேரட்) அமைப்பு</h3>
                <p>
                    தங்கத்தின் தரம் "கேரட்" (K) என்ற அளவில் குறிக்கப்படுகிறது. 24K = 100% pure தங்கம்:
                </p>

                <div className="space-y-4 my-6">
                    <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                        <h4 className="font-bold text-yellow-900 mb-2">24 கேரட் (99.9% தங்கம்)</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• <strong>தரம்:</strong> மிக உயர்ந்த தரம், கிட்டத்தட்ட pure gold</li>
                            <li>• <strong>நிறம்:</strong> அடர் பொன்னிறம் (deep golden yellow)</li>
                            <li>• <strong>பயன்பாடு:</strong> நாணயங்கள் (coins), bars, investment gold</li>
                            <li>• <strong>குறை:</strong> மென்மையானது, நகைக்கு suitable அல்ல (easily bend ஆகும்), daily wear செய்ய முடியாது</li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
                        <h4 className="font-bold text-orange-900 mb-2">22 கேரட் (91.6% தங்கம்)</h4>
                        <ul className="text-sm text-orange-800 space-y-1">
                            <li>• <strong>தரம்:</strong> உயர் தரம், 22/24 பாகங்கள் தங்கம்</li>
                            <li>• <strong>நிறம்:</strong> பொன்னிறம் (bright golden yellow)</li>
                            <li>• <strong>பயன்பாடு:</strong> <strong>திருமண நகைகளுக்கு சிறந்தது!</strong> - தாலி, bangles, chains, earrings</li>
                            <li>• <strong>நன்மை:</strong> Value அதிகம், durability நல்லது, தமிழ் திருமணங்களில் மிகவும் பிரபலம்</li>
                            <li>• <strong>விலை:</strong> ₹65,000-70,000/10 gm (2026 விலை, மாறுபடும்)</li>
                        </ul>
                    </div>

                    <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                        <h4 className="font-bold text-amber-900 mb-2">18 கேரட் (75% தங்கம்)</h4>
                        <ul className="text-sm text-amber-800 space-y-1">
                            <li>• <strong>தரம்:</strong> நடுத்தர தரம், 18/24 பாகங்கள் தங்கம், 25% மற்ற உலோகங்கள்</li>
                            <li>• <strong>நிறம்:</strong> லேசான பொன்னிறம் (lighter shade)</li>
                            <li>• <strong>பயன்பாடு:</strong> Daily wear jewelry, modern designs, diamond settings</li>
                            <li>• <strong>நன்மை:</strong> கரடுமுரடாக (sturdy), easily damaged ஆகாது, மலிவு</li>
                            <li>• <strong>குறை:</strong> Value குறைவு, resale value 22K-ஐ விட குறையும்</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500 my-6">
                    <p className="font-bold mb-2 text-blue-900">💡 எது வாங்குவது?</p>
                    <p className="text-sm text-blue-800">
                        திருமண நகைகளுக்கு <strong>22 கேரட்</strong> சிறந்தது - நல்ல தரம் + durability +
                        resale value. தாலி, பாய்ச்சு மாலை, பெரிய நகைகளுக்கு 22K. Daily wear-க்கு
                        (office, casual) 18K போதும். Investment-க்கு (bars, coins) 24K வாங்கலாம்.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. BIS Hallmark - அவசியம் சரிபார்க்கவும்!</h3>

                <p>
                    <strong>BIS Hallmark</strong> என்பது Bureau of Indian Standards அங்கீகரித்த தங்க
                    தர சான்றிதழ். 2021-லிருந்து hallmark இல்லாத தங்க நகை விற்பனை தடைசெய்யப்பட்டது.
                </p>

                <div className="bg-green-50 p-6 rounded-xl my-6">
                    <h4 className="font-bold text-green-900 mb-3">✓ Hallmark-ல் என்ன இருக்கும்?</h4>
                    <ol className="text-sm text-green-800 space-y-2 list-decimal pl-5">
                        <li><strong>BIS Logo:</strong> BIS முத்திரை (triangular logo)</li>
                        <li><strong>Purity Grade:</strong> 916 (22K), 750 (18K), 999 (24K) என்ற எண்</li>
                        <li><strong>Assaying Center Mark:</strong> தரம் சோதித்த மையத்தின் code (3 letters)</li>
                        <li><strong>Jeweller's Identification Mark:</strong> Jeweller-ன் license எண்</li>
                        <li><strong>Year of Marking:</strong> Hallmark செய்யப்பட்ட ஆண்டு (letter code)</li>
                        <li><strong>HUID (6-digit unique number):</strong> Hallmark Unique Identification நம்பர் (2022-லிருந்து கட்டாயம்)</li>
                    </ol>
                    <p className="text-xs text-green-700 mt-3">
                        <strong>எச்சரிக்கை:</strong> Hallmark இல்லாத/fake hallmark நகை வாங்க வேண்டாம்.
                        BIS website-ல் HUID verify செய்யலாம்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Making Charges & கூடுதல் செலவுகள்
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Making Charges புரிதல்</h3>

                <p>
                    நீங்கள் செலுத்தும் மொத்த தொகை = (தங்க விலை × எடை) + Making charges + GST:
                </p>

                <div className="bg-purple-100 p-5 rounded-xl my-6">
                    <h4 className="font-bold text-purple-900 mb-3">உதாரணம்:</h4>
                    <ul className="text-sm text-purple-800 space-y-2">
                        <li>• <strong>நகை எடை:</strong> 50 grams (22K chain)</li>
                        <li>• <strong>தங்க விலை:</strong> ₹6,800/gram (today's rate)</li>
                        <li>• <strong>தங்கம் மதிப்பு:</strong> 50 × ₹6,800 = ₹3,40,000</li>
                        <li>• <strong>Making charges:</strong> ₹600/gram (₹30,000) அல்லது 10% flat (₹34,000)</li>
                        <li>• <strong>Sub-total:</strong> ₹3,74,000</li>
                        <li>• <strong>GST (3%):</strong> ₹11,220</li>
                        <li>• <strong>மொத்தம்:</strong> ₹3,85,220</li>
                    </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Making Charges வகைகள்</h3>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Per gram:</strong> ₹300-₹1500/gm (design complexity படி) - simple chains குறைவு, intricate designs அதிகம்</li>
                    <li><strong>Percentage:</strong> 8-18% தங்க மதிப்பில் - heavy designs-க்கு 15-20%, simple-க்கு 8-10%</li>
                    <li><strong>Flat rate:</strong> சில கடைகள் fixed ₹X/10gm என வைத்திருக்கும்</li>
                </ul>

                <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500 my-6">
                    <p className="font-bold mb-2 text-red-900">⚠️ Making Charges குறைக்க Tips:</p>
                    <ul className="text-sm text-red-800 space-y-1">
                        <li>• Exchange offer பயன்படுத்துங்கள் (பழைய தங்கம் கொடுத்தால் making charges waive)</li>
                        <li>• Festival offers (Akshaya Tritiya, Diwali) - 0% making charges schemes</li>
                        <li>• Bulk purchase (50gm+ வாங்கினால் discount)</li>
                        <li>• Simple designs தேர்வு செய்யுங்கள் (kundan, meenakari, nakshi வேண்டாம்)</li>
                        <li>• பேரம் பேசுங்கள் - making charges மட்டும் negotiable, தங்க விலை fixed</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    திருமண தங்க நகை வகைகள் & Budget
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">மணமகளுக்கான நகைகள்</h3>

                <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-3 text-left">நகை பெயர்</th>
                                <th className="border border-gray-300 p-3 text-left">எடை (approx)</th>
                                <th className="border border-gray-300 p-3 text-left">விலை (₹6,800/gm @ 22K)</th>
                                <th className="border border-gray-300 p-3 text-left">Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-yellow-50">
                                <td className="border border-gray-300 p-3"><strong>தாலி / மங்கள சூத்ரம்</strong></td>
                                <td className="border border-gray-300 p-3">5-15 gm</td>
                                <td className="border border-gray-300 p-3">₹40,000-1,20,000</td>
                                <td className="border border-gray-300 p-3 text-red-600 font-bold">கட்டாயம்</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">பாய்ச்சு மாலை / Long Chain</td>
                                <td className="border border-gray-300 p-3">30-60 gm</td>
                                <td className="border border-gray-300 p-3">₹2.5-5 லட்சம்</td>
                                <td className="border border-gray-300 p-3 text-orange-600">முக்கியம்</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 p-3">கடுக்கன் / Bangles</td>
                                <td className="border border-gray-300 p-3">20-40 gm (set)</td>
                                <td className="border border-gray-300 p-3">₹1.5-3 லட்சம்</td>
                                <td className="border border-gray-300 p-3 text-orange-600">முக்கியம்</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">காது ஒலி / Earrings</td>
                                <td className="border border-gray-300 p-3">8-15 gm</td>
                                <td className="border border-gray-300 p-3">₹60,000-1.2 லட்சம்</td>
                                <td className="border border-gray-300 p-3 text-green-600">Optional</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 p-3">மூக்குத்தி / Nose Ring</td>
                                <td className="border border-gray-300 p-3">2-5 gm</td>
                                <td className="border border-gray-300 p-3">₹15,000-40,000</td>
                                <td className="border border-gray-300 p-3 text-green-600">Optional</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">நெற்றி சுட்டி / Maang Tikka</td>
                                <td className="border border-gray-300 p-3">3-8 gm</td>
                                <td className="border border-gray-300 p-3">₹25,000-65,000</td>
                                <td className="border border-gray-300 p-3 text-blue-600">பாரம்பரியம் படி</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 p-3">அரைவான் / Waist Belt</td>
                                <td className="border border-gray-300 p-3">10-25 gm</td>
                                <td className="border border-gray-300 p-3">₹80,000-2 லட்சம்</td>
                                <td className="border border-gray-300 p-3 text-blue-600">பாரம்பரியம் படி</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-yellow-50 p-5 rounded-xl my-6">
                    <h4 className="font-bold text-yellow-900 mb-2">💰 Minimum vs Lavish Budget:</h4>
                    <ul className="text-sm text-yellow-800 space-y-2">
                        <li>• <strong>Minimum (60-80 gm):</strong> தாலி + light chain + thin bangles = ₹5-7 லட்சம்</li>
                        <li>• <strong>சராசரி (100-150 gm):</strong> எல்லா முக்கிய நகைகளும் = ₹8-12 லட்சம்</li>
                        <li>• <strong>Lavish (200+ gm):</strong> Heavy designs, diamonds = ₹15-25 லட்சம்+</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    தங்கம் வாங்கும் போது கவனிக்க வேண்டியவை
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="font-bold text-green-900 mb-3">✓ செய்ய வேண்டியவை:</h3>
                        <ul className="text-sm text-green-800 space-y-2">
                            <li>✓ BIS Hallmark verify செய்யுங்கள்</li>
                            <li>✓ Invoice வாங்குங்கள் (HUID, weight, making charges எல்லாம் mention)</li>
                            <li>✓ நகையை எடை போட்டு பார்க்கச் சொல்லுங்கள் (உங்கள் முன்னால்)</li>
                            <li>✓ Return/exchange policy கேளுங்கள்</li>
                            <li>✓ Reputed jeweler-ல் மட்டும் வாங்குங்கள் (Tanishq, GRT, Joyalukkas, etc.)</li>
                            <li>✓ Insurance எடுங்கள் (theft/loss coverage)</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-3">✗ தவிர்க்க வேண்டியவை:</h3>
                        <ul className="text-sm text-red-800 space-y-2">
                            <li>✗ Hallmark இல்லாத நகை வாங்காதீர்கள்</li>
                            <li>✗ Cash-க்கு discount என்று சொல்லி invoice இல்லாமல் வாங்காதீர்கள்</li>
                            <li>✗ பழைய தங்கத்தை சரியாக check செய்யாமல் exchange செய்யாதீர்கள்</li>
                            <li>✗ அவசரமாக முடிவு எடுக்காதீர்கள் - compare & research செய்யுங்கள்</li>
                            <li>✗ கடையில் சொல்லும் "தள்ளுபடி" விலைகளை நம்பாதீர்கள் (hidden charges check)</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    தங்க நகை பராமரிப்பு (Maintenance)
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>சுத்தம்:</strong> மாதம் ஒருமுறை சூடான நீர் + லேசான சோப்பு கலவையில் மெதுவாக சுத்தம் செய்யுங்கள்</li>
                    <li><strong>Polish:</strong> வருடம் ஒருமுறை jeweler-ல் கொண்டு சென்று polish செய்யுங்கள் (₹100-500/item)</li>
                    <li><strong>Storage:</strong> தனித்தனியாக soft cloth pouch-ல் வைக்கவும் (scratches தவிர்க்க)</li>
                    <li><strong>கழற்றுதல்:</strong> குளிக்கும்போது, தூங்கும்போது, gym/sports-ல் நகைகளை கழற்றி வைக்கவும்</li>
                    <li><strong>Chemicals தவிர்க்கவும்:</strong> Perfume, lotion, cleaning products நகையில் படாமல் பார்த்துக்கொள்ளுங்கள்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">பழைய தங்கத்தை exchange செய்யும்போது என்ன கவனிக்க வேண்டும்?</h3>
                        <p className="text-gray-600 text-sm">
                            (1) உங்கள் பழைய தங்கத்தை வேறு கடையில் மதிப்பீடு செய்து compare செய்யுங்கள்,
                            (2) Making charges deduct செய்யாமல் தங்க எடை மட்டும் exchange value என
                            கொடுப்பார்களா check செய்யுங்கள், (3) Today's gold rate-ல் value கணக்கிடுகிறார்களா
                            பாருங்கள், (4) Exchange-க்கு கிடைக்கும் தங்கத்தில் making charges-க்கு discount
                            உண்டா கேளுங்கள். சில கடைகள் exchange-ல் நல்ல value கொடுக்கும், ஆனால்
                            புதிய நகைக்கு அதிக making charges வைப்பார்கள் - net calculation பாருங்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">தங்க நகை vs தங்க நாணயம் - investment-க்கு எது சிறந்தது?</h3>
                        <p className="text-gray-600 text-sm">
                            <strong>Pure investment:</strong> தங்க நாணயம்/பார் (coins/bars) சிறந்தது - no making
                            charges, 24K purity, easy resale, bank lockers-ல் store செய்யலாம். <strong>Investment +
                                utility:</strong> நகை வாங்கலாம் - அணியலாம் + investment, ஆனால் making charges
                            (8-15%) loss. <strong>சுருக்கம்:</strong> Investment மட்டும் நோக்கமானால் coins/bars,
                            அணிவதற்காகவும் இருந்தால் jewelry. நாணயங்களை National banks (SBI, HDFC) அல்லது
                            reputed jewelers-ல் வாங்குங்கள் - purity guarantee.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">தங்க விலை எப்போது குறைவாக இருக்கும்?</h3>
                        <p className="text-gray-600 text-sm">
                            தங்க விலை international market-ல் daily மாறுபடும் (dollar rates, economic conditions).
                            <strong>பொதுவாக:</strong> (1) மே-ஜூலை (மழைக்காலம்) - demand குறைவு, விலை
                            நிலையாக இருக்கும், (2) Festive seasons (Diwali, Akshaya Tritiya) ஆனால் demand
                            அதிகம் - விலை உயரும். <strong>Strategy:</strong> Festive offers-க்காக காத்திருக்கலாம்
                            (making charges waiver, discounts), ஆனால் gold rate high இருக்கலாம். Off-season-ல்
                            rate குறையும், offers குறையும். உங்கள் budget & urgency படி decide செய்யுங்கள்.
                            Long-term-ல் தங்கம் எப்போதும் value தரும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Online vs Offline - எங்கே வாங்குவது பாதுகாபு?</h3>
                        <p className="text-gray-600 text-sm">
                            <strong>Offline (கடை):</strong> நகையை நேரில் பார்க்கலாம், எடை verify செய்யலாம்,
                            trust factor அதிகம், haggle செய்யலாம். <strong>Online:</strong> வசதி, offers/discounts,
                            home delivery, easy return, ஆனால் நகையின் actual look வித்தியாசமாக இருக்கலாம்.
                            <strong>பரிந்துரை:</strong> பெரிய purchase (₹2+ லட்சம்) என்றால் offline சிறந்தது,
                            சிறிய items (rings, studs) online safe. Reputed websites மட்டும் (Tanishq,
                            Caratlane, BlueStone) - BIS hallmark, return policy, certification உறுதி செய்யுங்கள்.
                            First-time buyers கடைக்கு சென்று வாங்குவது நல்லது.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">தங்க loan எடுக்கலாமா? நன்மை vs தீமை?</h3>
                        <p className="text-gray-600 text-sm">
                            <strong>நன்மை:</strong> (1) Quick cash (emergency-க்கு), (2) குறைந்த interest
                            (9-12% p.a.) - personal loan (15-18%) விட நல்லது, (3) Credit score பாதிக்காது,
                            (4) திருப்பி அடைத்தால் நகை திரும்ப கிடைக்கும். <strong>தீமை:</strong> (1) நகை
                            bank/NBFC-ல் pledge ஆகிவிடும் (அணிய முடியாது), (2) EMI அடைக்க தவறினால்
                            நகை ஏலம் போகும், (3) தங்க மதிப்பின் 70-80% மட்டும் loan (₹5 லட்சம் நகைக்கு
                            ₹3.5-4 லட்சம் loan). <strong>பரிந்துரை:</strong> Emergency-க்கு மட்டும், lifestyle
                            செலவுகளுக்கு தவிர்க்கவும். Reputed banks-ல் மட்டும் (SBI, HDFC) - பாதுகாப்பானது.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        தங்க நகை வாங்குவது ஒரு பெரிய investment - அவசரப்படக்கூடாது. Purity (22K),
                        BIS Hallmark, reputed jeweler, reasonable making charges, insurance, proper invoice
                        என அனைத்தையும் சரிபார்க்கவும். உங்கள் budget-க்கேற்ப realistic-ஆக திட்டமிடுங்கள்
                        - social pressure-க்கு பணம் வாங்காதீர்கள். தங்கம் ஒரு நீண்டகால சொத்து,
                        தலைமுறை தலைமுறையாக கடத்தப்படும். தரமான, authentic தங்கம் வாங்கினால்,
                        அது வாழ்நாள் முழுவதும் value தரும். புத்திசாலித்தனமாக வாங்குங்கள், பாதுகாப்பாக
                        சேமித்து வையுங்கள், மகிழ்ச்சியுடன் அணியுங்கள்!
                    </p>
                </div>

                <div className="bg-orange-50 p-8 rounded-2xl mt-12 border border-orange-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">எழுதியவர் பற்றி</h3>
                    <p className="text-gray-700 mb-3">
                        <strong>சித்ரை செல்வன்</strong> கல்யாண வீடு தளத்தின் நிறுவனர்.
                        திருமண திட்டமிடலில் நிதி விவேகத்தை வலியுறுத்துகிறார்.
                    </p>
                    <p className="text-gray-600 text-sm">
                        மேலும் தகவல்களுக்கு:
                        <a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            selvan.dev
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
}
