import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import BudgetCalculator from '@/components/tools/BudgetCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Wedding Budget Calculator | திருமண செலவு கணிப்பான் – Tamil Reference',
    description: 'Estimate your wedding expenses (Gold, Venue, Feast). திருமண பட்ஜெட்டை முன்கூட்டியே திட்டமிடுங்கள் – தகவல் நோக்கிற்கான நாட்காட்டி.',
    keywords: ['wedding budget calculator tamil', 'thirumana selavu', 'marriage cost estimator', 'tamil wedding planning'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/tools/thirumana-selavu`,
    },
};

export default function BudgetCalculatorPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Tamil Wedding Budget Calculator',
        description: 'Estimate wedding expenses in Tamil for various categories',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
        },
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Wedding Budget Calculator | திருமண செலவு கணிப்பான் – Tamil Reference",
                        "description": "Estimate your wedding expenses (Gold, Venue, Feast).",
                        "breadcrumb": "Home > Tools > Wedding Budget",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Kalyanaveedu"
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Tamil Wedding Budget Calculator",
                        "description": "Estimate wedding expenses in Tamil for various categories",
                        "applicationCategory": "FinanceApplication",
                        "operatingSystem": "Any",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "INR",
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "திருமண செலவுகளைத் திட்டமிடுவது எப்படி? (How to plan a wedding budget)",
                        "description": "தமிழ்நாட்டின் கலாச்சார முறைப்படி திருமண செலவுகளைக் கணக்கிட்டு, திட்டமிடும் முறையான வழிகாட்டி.",
                        "estimatedCost": {
                            "@type": "MonetaryAmount",
                            "currency": "INR",
                            "value": "1000000"
                        },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "தங்க நகைகளுக்கான பட்ஜெட்டை ஒதுக்குதல்",
                                "text": "மொத்த பட்ஜெட்டில் 30% முதல் 40% வரை தங்க நகைகளுக்காக ஒதுக்க வேண்டும். செய்கூலி மற்றும் சேதாரத்தை கவனிக்கவும்."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "திருமண மண்டபத்தை முடிவு செய்தல்",
                                "text": "விருந்தினர்களின் எண்ணிக்கைக்கு ஏற்ப, வசதியான மற்றும் போக்குவரத்து வசதி உள்ள மண்டபத்தைத் தேர்வு செய்யவும்."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "உணவு மற்றும் உபசரிப்பு செலவுகள்",
                                "text": "உணவின் தரம் மற்றும் வகைகளைத் தீர்மானித்து, ஒரு நபருக்கான செலவைக் கணக்கிட்டு, அதற்கேற்ப கேட்டரிங் சேவையைத் தேர்வு செய்யவும்."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "அலங்காரம் மற்றும் புகைப்படம்",
                                "text": "மண்டப அலங்காரம், மேடை அமைப்பு, மற்றும் தரமான புகைப்படக் கலைஞர்களுக்கான செலவுகளை முன்கூட்டியே பேசி முடிவு செய்யவும்."
                            }
                        ]
                    })
                }}
            />

            <div className="max-w-5xl mx-auto">
                <nav className="text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary">முகப்பு</Link>
                    <span className="mx-2">/</span>
                    <Link href="/tools" className="hover:text-primary">கருவிகள்</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">திருமண செலவு கணிப்பான்</span>
                </nav>

                <header className="mb-10 text-center max-w-3xl mx-auto">
                    {/* Step 2: Primary Answer Block (SSR) */}
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-primary">
                        திருமண செலவு கணக்கிடுவது எப்படி? (Wedding Budget Planning)
                    </h1>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-10">
                        திருமண செலவுகளைத் துல்லியமாகத் திட்டமிட தங்கம், மண்டபம், மற்றும் உணவு ஆகிய முக்கியப் பிரிவுகளில் செலவுகளைக் கணக்கிடுவது அவசியம். இது ஒரு நிதி மேலாண்மைத் தகவல் குறிப்பு மட்டுமே.
                    </p>
                </header>

                {/* Tool Component */}
                <BudgetCalculator />

                {/* SEO Content */}
                <article className="prose prose-lg max-w-none text-gray-700 space-y-8 mt-16 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                    <section>
                        <h2 className="text-3xl font-black text-gray-900 mb-6 border-b-2 border-primary pb-3 inline-block">
                            தமிழ்நாட்டு திருமணங்களில் முக்கிய செலவுப் பிரிவுகள் (Major Wedding Expense Categories)
                        </h2>
                        <p className="lead text-xl text-gray-600 mb-6">
                            ஒரு சிறப்பான தமிழர் திருமணத்தை திட்டமிடுவதில், செலவுகளை சரியான முறையில் பிரித்து ஒதுக்குவது மிக முக்கியம். பாரம்பரியமாக, திருமணச் செலவுகள் பல முக்கியப் பிரிவுகளாகப் பிரிக்கப்படுகின்றன.
                        </p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100 shadow-sm">
                                <div className="text-4xl mb-4">👑</div>
                                <h3 className="font-bold text-yellow-900 mb-3 text-xl">தங்கம் (Gold Jewelry)</h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    மொத்த திருமண பட்ஜெட்டில் <strong>30% முதல் 40% வரை</strong> தங்க நகைகளுக்காகவே செலவிடப்படுகிறது. இது வெறும் செலவு மட்டுமல்ல, மணமக்களுக்கான எதிர்கால சேமிப்பாகவும், முதலீடாகவும் பார்க்கப்படுகிறது. சந்தை விலை ஏற்ற இறக்கங்களைக் கருத்தில் கொண்டு முன்கூட்டியே வாங்குவது லாபகரம்.
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 shadow-sm">
                                <div className="text-4xl mb-4">🏩</div>
                                <h3 className="font-bold text-purple-900 mb-3 text-xl">திருமண மண்டபம் (Venue)</h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    முகூர்த்த நாட்கள், வசதிகள், மற்றும் விருந்தினர்களின் எண்ணிக்கையைப் பொறுத்து மண்டப வாடகை மாறுபடும். நகர மையங்களில் ஏசி (A/C) வசதியுடன் கூடிய மண்டபங்கள் பட்ஜெட்டில் <strong>15% முதல் 20% வரை</strong> பிடிக்கும். வாகன நிறுத்துமிட வசதி மிகவும் அவசியம்.
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 shadow-sm">
                                <div className="text-4xl mb-4">🍱</div>
                                <h3 className="font-bold text-green-900 mb-3 text-xl">கல்யாண விருந்து (Feast/Catering)</h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    "அறுசுவை உணவு" - வந்தவார்களை வயிறார உணவளித்து அனுப்புவதே தமிழர் பண்பாடு. காலை சிற்றுண்டி, மதிய விருந்து, மற்றும் வரவேற்பு இரவு உணவு என அனைத்தும் சேர்த்து பட்ஜெட்டில் <strong>20% முதல் 25% வரை</strong> செலவாகலாம்.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            பிற தவிர்க்க முடியாத செலவுகள் (Other Essential Expenses)
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0">📸</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">புகைப்படம் மற்றும் வீடியோ (Photography & Videography)</h3>
                                    <p className="text-gray-600 mt-2">
                                        நினைவுகளைப் பதிவு செய்வது மிக முக்கியம். பாரம்பரிய புகைப்படம், கேண்டிட் (Candid) புகைப்படம், சினிமாடிக் வீடியோ, மற்றும் ப்ரீ-வெட்டிங் ஷூட் (Pre-wedding shoot) என பல பிரிவுகள் உள்ளன. இதற்கு குறைந்தது ₹50,000 முதல் ₹3,000,000 வரை செலவாகலாம்.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4 items-start">
                                <div className="bg-pink-100 text-pink-600 p-3 rounded-xl shrink-0">🌸</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">அலங்காரம் மற்றும் மேடை அமைப்பு (Decoration)</h3>
                                    <p className="text-gray-600 mt-2">
                                        மண்டபத்தின் நுழைவாயில், மேடை, மற்றும் உணவருந்தும் இடம் ஆகியவற்றை மலர்கள் மற்றும் மின்விளக்குகளால் அலங்கரிப்பது திருமணத்திற்கு பிரம்மாண்டத்தைத் தரும். இது நீங்கள் தேர்ந்தெடுக்கும் மலர்கள் மற்றும் தீம்களைப் (Themes) பொறுத்து மாறுபடும்.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4 items-start">
                                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl shrink-0">👗</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">ஆடைகள் மற்றும் ஒப்பனை (Clothing & Makeup)</h3>
                                    <p className="text-gray-600 mt-2">
                                        பட்டுப் புடவைகள், வேட்டி சட்டைகள், வரவேற்புக்கான டிசைனர் ஆடைகள், மற்றும் மணப்பெண் ஒப்பனை (Bridal Makeup) ஆகியவற்றுக்கு கணிசமான தொகையை ஒதுக்க வேண்டும்.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mt-12 bg-gray-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            ஸ்மார்ட் பட்ஜெட் திட்டமிடல் குறிப்புகள் (Smart Budgeting Tips)
                        </h2>
                        <ul className="space-y-5">
                            <li className="flex gap-4 items-start">
                                <span className="bg-green-500 text-white rounded-full p-1 shrink-0 mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </span>
                                <div>
                                    <strong className="text-gray-900 block text-lg mb-1">முக்கியத்துவத்திற்கு முன்னுரிமை (Prioritize):</strong> 
                                    <span className="text-gray-600">அலங்காரத்தை விட தரமான உணவிற்கும், ஆடம்பரத்தை விட சேமிப்பிற்கும் (நகைகள்) முன்னுரிமை கொடுங்கள். ஆடம்பரமான அழைப்பிதழ்களுக்குப் பதிலாக டிஜிட்டல் அழைப்பிதழ்களைப் பயன்படுத்தலாம்.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="bg-green-500 text-white rounded-full p-1 shrink-0 mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </span>
                                <div>
                                    <strong className="text-gray-900 block text-lg mb-1">15% அவசர நிதி (Emergency Fund):</strong> 
                                    <span className="text-gray-600">எப்போதும் நீங்கள் திட்டமிட்ட பட்ஜெட்டை விட 10-15% கூடுதல் தொகையைக் கையில் வைத்திருப்பது, கடைசி நேர எதிர்பாராத செலவுகளைச் சமாளிக்க உதவும்.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="bg-green-500 text-white rounded-full p-1 shrink-0 mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </span>
                                <div>
                                    <strong className="text-gray-900 block text-lg mb-1">விருந்தினர் பட்டியல் மேலாண்மை (Guest List Management):</strong> 
                                    <span className="text-gray-600">விருந்தினர்களின் எண்ணிக்கையே திருமண செலவைத் தீர்மானிக்கும் முக்கிய காரணி. நெருங்கிய உறவினர்கள் மற்றும் நண்பர்களுக்கு மட்டும் முன்னுரிமை அளித்து அழைப்பது செலவுகளைக் கணிசமாகக் குறைக்கும். <Link href="/tools/thirumana-thayaripu" className="text-primary hover:underline font-medium">திருமண தயாரிப்பு பட்டியல்</Link> மூலம் இதை திறம்பட நிர்வகிக்கலாம்.</span>
                                </div>
                            </li>
                        </ul>
                    </section>
                    
                    <section className="pt-12 border-t border-gray-200 mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 திருமண செலவுத் திட்டமிடல் மற்றும் பணவீக்கக் கணிப்பு (Inflation Considerations)</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                2026 ஆம் ஆண்டு நடைபெறும் திருமணங்களுக்கு, 2025-ன் தற்போதைய சந்தை விலையை மட்டும் அடிப்படையாகக் கொள்ளாமல், குறைந்தபட்சம் <strong>6% முதல் 8% வரை பணவீக்கத்தை (Inflation)</strong> கருத்தில் கொண்டு பட்ஜெட்டைத் திட்டமிடுவது மிகச் சிறந்தது. குறிப்பாக தங்கத்தின் விலை மற்றும் உணவுப் பொருட்களின் விலை ஏற்றம், மொத்த பட்ஜெட்டையும் கடுமையாகப் பாதிக்கலாம்.
                            </p>
                            <p>
                                முறையான பட்ஜெட் போடுவது தேவையற்ற செலவுகளைக் குறைக்க உதவும். பல நடுத்தரக் குடும்பங்கள் திருமணத்திற்காக அதிக வட்டிக்குக் கடன்களை வாங்கிப் பின்னர் பல ஆண்டுகள் அவதிப்படுகின்றனர். இதைத் தவிர்க்க, உங்கள் உண்மையான சேமிப்பிற்கு உட்பட்டு, எளிய முறையில் திருமணத்தை நடத்துவதே புத்திசாலித்தனம்.
                            </p>
                            <p>
                                தங்க நகைகளை வாங்கும்போது செய்கூலி (Making Charges), சேதாரம் (Wastage) மற்றும் தற்போதைய சந்தை விலையை பல கடைகளில் ஒப்பிட்டுப் பார்த்து வாங்குங்கள். மண்டபம் மற்றும் கேட்டரிங் (Catering) நிறுவனங்களைத் தேர்ந்தெடுக்கும் போது, குறைந்தது மூன்று வெவ்வேறு நிறுவனங்களின் விலைப் பட்டியல்களைப் பெற்று, பேரம் பேசி (Negotiate) சிறந்ததைத் தேர்வு செய்யவும்.
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
