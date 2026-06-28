import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import DatePlanner from '@/components/tools/DatePlanner';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Marriage Date Prediction & Online Checker | திருமண தேதி பிளானர்',
    description: 'Predict your marriage date online with our advanced AI & Tamil calendar rules. Calculate wedding countdown and check details.',
    keywords: [
        'ai marriage date prediction',
        'how to check marriage dates online',
        'திருமண தேதி',
        'marriage date planner',
        'thirumana thinam',
        'wedding countdown',
        'muhurtham date checker'
    ],
    alternates: {
        canonical: `${SITE_CONFIG.url}/tools/thirumana-thinam`,
    },
};

export default function DatePlannerPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'AI Marriage Date Prediction & Checker | திருமண தேதி கணிப்பான்',
        description: 'Predict your marriage date online with our advanced AI and traditional Tamil calendar rules.',
        applicationCategory: 'UtilityApplication',
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
                        "name": "AI Marriage Date Prediction & Online Checker | திருமண தேதி பிளானர்",
                        "description": "Predict your marriage date online with our advanced AI and traditional Tamil calendar rules.",
                        "breadcrumb": "Home > Tools > Date Planner",
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
                        "name": "AI Marriage Date Prediction & Checker | திருமண தேதி கணிப்பான்",
                        "description": "Predict your marriage date online with our advanced AI and traditional Tamil calendar rules.",
                        "applicationCategory": "UtilityApplication",
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
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "திருமணத்திற்கு எத்தனை நாட்களுக்கு முன் மண்டபம் புக் செய்ய வேண்டும்?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "குறைந்தது 3 முதல் 6 மாதங்களுக்கு முன்பே மண்டபத்தை முன்பதிவு செய்வது நல்லது. குறிப்பாக சித்திரை, ஆவணி, தை மாத முகூர்த்த நாட்களுக்கு முன்பதிவு மிக விரைவாக முடிந்துவிடும்."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "வார நாட்களில் திருமணம் வைப்பது நல்லதா?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "ஞாயிறு போன்ற விடுமுறை நாட்களில் வைத்தால் உறவினர்கள் எளிதாகக் கலந்துகொள்வார்கள். ஆனால், திங்கள் முதல் வெள்ளி வரை வைத்தால் மண்டப வாடகை குறைவாகக் கிடைக்க வாய்ப்புள்ளது."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "திருமண தேதியை முடிவு செய்யும் போது கவனிக்க வேண்டியவை என்ன?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "ஜோதிடப் பொருத்தம், பருவநிலை (வெயில்/மழை), உறவினர்களின் விடுமுறை நாட்கள், மற்றும் மண்டபத்தின் இருப்பு ஆகியவற்றைக் கருத்தில் கொள்ள வேண்டும்."
                                }
                            }
                        ]
                    })
                }}
            />

            <div className="max-w-4xl mx-auto">
                <nav className="text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary">முகப்பு</Link>
                    <span className="mx-2">/</span>
                    <Link href="/tools" className="hover:text-primary">கருவிகள்</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">திருமண தேதி கணிப்பான்</span>
                </nav>

                <header className="mb-10 text-center">
                    {/* Step 2: Primary Answer Block (SSR) */}
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-primary">
                        திருமண தேதி பிளானர் (Marriage Date Countdown)
                    </h1>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
                        திருமணத்திற்கு இன்னும் எத்தனை நாட்கள் உள்ளன மற்றும் அந்தத் தேதியின் கிழமை விவரங்களை இந்தக் கருவி மூலம் எளிதாகத் தெரிந்துகொள்ளலாம். இது ஒரு திட்டமிடல் தகவல் குறிப்பு மட்டுமே.
                    </p>
                </header>

                {/* Tool Component */}
                <DatePlanner />

                {/* SEO Content */}
                <article className="prose prose-lg max-w-none text-gray-700 space-y-8 mt-16 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                    <section>
                        <h2 className="text-3xl font-black text-gray-900 mb-6 border-b-2 border-primary pb-3 inline-block">
                            சரியான திருமண தேதியைத் தேர்ந்தெடுப்பது எப்படி? (How to Choose the Perfect Wedding Date)
                        </h2>
                        <p className="lead text-xl text-gray-600 mb-6">
                            திருமணத் தேதியை முடிவு செய்வது என்பது வெறும் பஞ்சாங்கத்தைப் பார்த்து முகூர்த்தம் குறிப்பது மட்டுமல்ல. இன்றைய அவசர உலகில், மணமக்கள் மற்றும் உறவினர்களின் வேலைப்பளு, விடுமுறை நாட்கள், மற்றும் பருவநிலை (Weather condition) எனப் பல விஷயங்களைக் கருத்தில் கொள்ள வேண்டும்.
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            தேதியைத் தீர்மானிக்கும் 4 முக்கிய காரணிகள் (4 Key Factors)
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-3">📅</div>
                                <h3 className="font-bold text-blue-900 text-xl mb-3">வார இறுதி நாட்கள் (Weekends & Holidays)</h3>
                                <p className="text-gray-700">
                                    ஞாயிற்றுக்கிழமை அல்லது நீண்ட அரசு விடுமுறை (Long weekend) நாட்களில் திருமணம் வைப்பது, வெளியூர் உறவினர்கள் எவ்வித சிரமமுமின்றி வந்து செல்ல உதவும். ஆனால், இந்த நாட்களில் மண்டப வாடகை அதிகமாக இருக்கும்.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-3">🌦️</div>
                                <h3 className="font-bold text-orange-900 text-xl mb-3">பருவநிலை (Season & Weather)</h3>
                                <p className="text-gray-700">
                                    கடுமையான கோடைக்காலமான மே மாதம் (அக்னி நட்சத்திரம்) மற்றும் பெருமழைக்காலமான நவம்பர், டிசம்பர் (வடகிழக்குப் பருவமழை) மாதங்களில் திறந்தவெளி (Outdoor) திருமணங்களைத் தவிர்ப்பது நல்லது.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-3">💰</div>
                                <h3 className="font-bold text-purple-900 text-xl mb-3">பட்ஜெட் (Budget Implications)</h3>
                                <p className="text-gray-700">
                                    அதிக முகூர்த்தங்கள் உள்ள 'பீக் சீசன்' (Peak Season) மாதங்களில் கேட்டரிங், டெக்கரேஷன் மற்றும் மண்டப செலவுகள் 20% வரை அதிகமாக இருக்கும். பட்ஜெட்டில் அக்கறை உள்ளவர்கள், முகூர்த்தங்கள் குறைவான நாட்களைத் தேர்ந்தெடுக்கலாம்.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-3">🩺</div>
                                <h3 className="font-bold text-green-900 text-xl mb-3">ஆரோக்கியம் மற்றும் மாதவிடாய் சுழற்சி</h3>
                                <p className="text-gray-700">
                                    மணப்பெண்ணின் மாதவிடாய் தேதிகளை (Menstrual Cycle) கணக்கில் கொண்டு திருமண தேதியை முடிவு செய்வது தற்காலத்தில் மிகவும் வலியுறுத்தப்படுகிறது. இது மணப்பெண்ணின் உடல் சோர்வைத் தவிர்க்க உதவும்.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            தமிழர் திருமண மாதங்கள்: ஒரு ஜோதிட மற்றும் சமூகப் பார்வை
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="bg-white border-2 border-green-100 p-6 rounded-2xl">
                                <h3 className="font-bold text-green-700 text-xl mb-4 border-b pb-2">✅ திருமணத்திற்கு உகந்த மாதங்கள்</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <strong className="block text-gray-900">சித்திரை & வைகாசி (Mid-April to Mid-June):</strong>
                                        <span className="text-gray-600 text-sm">பள்ளிகளுக்கு கோடை விடுமுறை என்பதால், குடும்பத்தோடு அனைவரும் கலந்துகொள்ள வசதியான காலம். விவசாயிகளுக்கும் அறுவடை முடிந்து வருமானம் கையில் இருக்கும்.</span>
                                    </li>
                                    <li>
                                        <strong className="block text-gray-900">ஆவணி (Mid-August to Mid-September):</strong>
                                        <span className="text-gray-600 text-sm">பண்டிகைகள் தொடங்கும் மாதம். மிதமான சீதோஷ்ண நிலை இருக்கும். திருமணங்களுக்கு மிகவும் உகந்த மாதம்.</span>
                                    </li>
                                    <li>
                                        <strong className="block text-gray-900">தை & மாசி (Mid-January to Mid-March):</strong>
                                        <span className="text-gray-600 text-sm">"தை பிறந்தால் வழி பிறக்கும்" என்ற அடிப்படையில், பொங்கலுக்குப் பின் வரும் இந்த மாதங்கள் திருமணத்திற்கு மிகவும் பிரபலமானவை.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-white border-2 border-red-100 p-6 rounded-2xl">
                                <h3 className="font-bold text-red-700 text-xl mb-4 border-b pb-2">⚠️ பொதுவாக தவிர்க்கப்படும் மாதங்கள்</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <strong className="block text-gray-900">ஆடி & மார்கழி:</strong>
                                        <span className="text-gray-600 text-sm">இவை "தேவ மாதங்கள்". இறை வழிபாட்டிற்கும், திருவிழாக்களுக்கும் ஒதுக்கப்பட்டுள்ளதால், சுப காரியங்கள் செய்யப்படுவதில்லை.</span>
                                    </li>
                                    <li>
                                        <strong className="block text-gray-900">புரட்டாசி:</strong>
                                        <span className="text-gray-600 text-sm">இதுவும் பெருமாள் வழிபாட்டிற்குரிய மாதம். மேலும், பல குடும்பங்களில் மாமிசம் உண்பதைத் தவிர்ப்பார்கள் என்பதால் திருமணங்கள் குறைவாகவே நடைபெறும்.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4 italic bg-gray-50 p-3 rounded-lg">
                            * குறிப்பு: இது பொதுவான தமிழ் வழிகாட்டுதல் மட்டுமே. உங்கள் குலதெய்வ வழக்கம் மற்றும் குடும்ப ஜோதிடரின் ஆலோசனைப்படி முடிவெடுப்பதே சிறந்தது.
                        </p>
                    </section>

                    <section className="mt-12 bg-gray-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                        </h2>
                        <div className="space-y-4">
                            <details className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
                                <summary className="font-bold text-gray-900 list-none flex justify-between items-center text-lg">
                                    திருமணத்திற்கு எத்தனை நாட்களுக்கு முன் மண்டபம் புக் செய்ய வேண்டும்?
                                    <span className="transition-transform group-open:rotate-180 text-primary">▼</span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed pt-4 border-t border-gray-100">
                                    குறைந்தது 3 முதல் 6 மாதங்களுக்கு முன்பே மண்டபத்தை முன்பதிவு செய்வது நல்லது. குறிப்பாக சித்திரை, ஆவணி மற்றும் தை மாதங்களில் உள்ள 'பீக்' முகூர்த்த நாட்களுக்கு (Valarpirai Muhurtham) போட்டி அதிகமாக இருக்கும் என்பதால், தேதி முடிவான உடனேயே மண்டபத்தைத் தேடுவது புத்திசாலித்தனம்.
                                </div>
                            </details>
                            
                            <details className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
                                <summary className="font-bold text-gray-900 list-none flex justify-between items-center text-lg">
                                    வார நாட்களில் (Weekdays) திருமணம் வைப்பது நல்லதா?
                                    <span className="transition-transform group-open:rotate-180 text-primary">▼</span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed pt-4 border-t border-gray-100">
                                    வார நாட்களில் திருமணம் வைத்தால், வேலைக்குச் செல்பவர்கள் மற்றும் பள்ளி செல்லும் குழந்தையுள்ளவர்கள் கலந்துகொள்வது கடினமாக இருக்கலாம். ஆனால், திங்கள் முதல் வெள்ளி வரையிலான நாட்களில் மண்டப வாடகை 20% முதல் 30% வரை குறைவாகக் கிடைக்க வாய்ப்புள்ளது. மிக நெருங்கிய உறவினர்கள் மட்டுமே பங்கேற்கும் எளிய திருமணங்களுக்கு இது ஏற்றது.
                                </div>
                            </details>
                            
                            <details className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
                                <summary className="font-bold text-gray-900 list-none flex justify-between items-center text-lg">
                                    திருமண தேதியை எப்படி சுலபமாக நினைவில் வைப்பது?
                                    <span className="transition-transform group-open:rotate-180 text-primary">▼</span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed pt-4 border-t border-gray-100">
                                    நமது <Link href="/tools/thirumana-thinam" className="text-primary hover:underline font-medium">திருமண தேதி பிளானர் (Countdown Timer)</Link> கருவியைப் பயன்படுத்தி, திருமணத்திற்கு இன்னும் எத்தனை நாட்கள் உள்ளன என்பதை எளிதாகத் தெரிந்துகொள்ளலாம். இதை ஸ்கிரீன்ஷாட் எடுத்து, உங்கள் குடும்ப வாட்ஸ்அப் குரூப்களில் பகிரலாம்.
                                </div>
                            </details>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-gray-200 mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 திருமண திட்டமிடல் மற்றும் முகூர்த்த நாட்கள்</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                2026 ஆம் ஆண்டைப் பொறுத்தவரை, வளர்பிறை முகூர்த்த நாட்களுக்கு (Shukla Paksha) எப்போதுமே அதிக தேவை இருக்கும். முகூர்த்த தேதியை முடிவு செய்தவுடன், உடனடியாக <Link href="/tools/thirumana-thayaripu" className="text-primary hover:underline font-medium">திருமண வேலைகள் பட்டியலை (Wedding Checklist)</Link> உருவாக்கத் தொடங்குங்கள்.
                            </p>
                            <p>
                                தேதி நெருங்க நெருங்க ஏற்படும் மன அழுத்தத்தைக் குறைக்க, ஒவ்வொரு மாதமும் செய்ய வேண்டிய வேலைகளை முன்கூட்டியே திட்டமிடுங்கள். குறிப்பாக, திருமண தேதி முடிவானவுடன், முக்கிய உறவினர்களுக்கு 'Save the Date' குறுஞ்செய்திகளை அனுப்புவது, அவர்கள் தங்களது விடுமுறையைத் திட்டமிடப் பெரிதும் உதவும்.
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
