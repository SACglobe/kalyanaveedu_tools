import type { Metadata } from 'next';
import DatePlanner from '@/components/tools/DatePlanner';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Marriage Date Planner | திருமண தேதி பிளானர் – Tamil Reference',
    description: 'Calculate days remaining for your wedding and check day details. திருமண தேதி திட்டமிடும் கருவி – தகவல் நோக்கிற்கான நாட்காட்டி.',
    keywords: ['marriage date planner', 'thirumana thinam', 'wedding countdown tamil', 'muhurtham date checker'],
};

export default function DatePlannerPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Tamil Marriage Date Planner',
        description: 'Calculate days remaining for wedding and check day details',
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
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Marriage Date Planner | திருமண தேதி பிளானர் – Tamil Reference",
                        "description": "Calculate days remaining for your wedding and check day details.",
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
                        "name": "Tamil Marriage Date Planner",
                        "description": "Calculate days remaining for wedding and check day details",
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
                <article className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            திருமண தேதி தேர்ந்தெடுக்கும் போது கவனிக்க வேண்டியவை
                        </h2>
                        <p>
                            நல்ல நாள் பார்ப்பது மட்டும் முக்கியமல்ல, நடைமுறைக்கு சாத்தியமான தேதியை
                            தேர்ந்தெடுப்பதும் அவசியம்.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>
                                <strong>வார நாட்கள் (Weekends):</strong> சனி, ஞாயிறு அல்லது அரசு விடுமுறை நாட்களில்
                                திருமணம் வைத்தால் உறவினர்கள் மற்றும் நண்பர்கள் எளிதாக கலந்து கொள்ள முடியும்.
                            </li>
                            <li>
                                <strong>பருவநிலை (Season):</strong> கடுமையான வெயில் காலம் அல்லது மழை காலத்தை
                                தவிர்ப்பது விருந்தினர்களுக்கு வசதியாக இருக்கும்.
                            </li>
                            <li>
                                <strong>பண்டிகை நாட்கள்:</strong> முக்கிய பண்டிகை நாட்களை தவிர்ப்பது நல்லது,
                                ஏனெனில் விருந்தினர்கள் தங்கள் சொந்த ஊருக்கு செல்ல திட்டமிட்டிருப்பார்கள்.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            தமிழர் திருமண மாதங்கள் (சிறப்பு பார்வை)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded border border-green-100">
                                <h3 className="font-bold text-green-900">சிறப்பான மாதங்கள்</h3>
                                <p className="text-sm">சித்திரை, வைகாசி, ஆனி, ஆவணி, தை, பங்குனி</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded border border-orange-100">
                                <h3 className="font-bold text-orange-900">பொதுவாக தவிர்க்கப்படுபவை</h3>
                                <p className="text-sm">ஆடி, புரட்டாசி, மார்கழி (இம்மாதங்கள் இறை வழிபாட்டிற்கு உகந்தவை)</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 italic">
                            * இது பொதுவான வழிகாட்டுதல் மட்டுமே. உங்கள் குடும்ப ஜோதிடரின் ஆலோசனைப்படி முடிவெடுப்பது சிறந்தது.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            அடிக்கடி கேட்கப்படும் கேள்விகள்
                        </h2>
                        <div className="space-y-4">
                            <details className="group bg-white border border-gray-200 rounded-lg p-4 cursor-pointer">
                                <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                                    திருமணத்திற்கு எத்தனை நாட்களுக்கு முன் மண்டபம் புக் செய்ய வேண்டும்?
                                    <span className="transition-transform group-open:rotate-180">▼</span>
                                </summary>
                                <div className="mt-2 text-gray-600">
                                    குறைந்தது 3 முதல் 6 மாதங்களுக்கு முன்பே மண்டபத்தை முன்பதிவு செய்வது நல்லது.
                                    முகூர்த்த நாட்கள் குறைவாக இருந்தால் போட்டி அதிகமாக இருக்கும்.
                                </div>
                            </details>
                            <details className="group bg-white border border-gray-200 rounded-lg p-4 cursor-pointer">
                                <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                                    வார நாட்களில் திருமணம் வைப்பது நல்லதா?
                                    <span className="transition-transform group-open:rotate-180">▼</span>
                                </summary>
                                <div className="mt-2 text-gray-600">
                                    சனி, ஞாயிறு விடுமுறை நாட்கள் சிறந்தது. திங்கள் முதல் வெள்ளி வரை வைத்தால்,
                                    வேலைக்கு செல்பவர்கள் கலந்து கொள்வது கடினமாக இருக்கலாம். ஆனால் மண்டப வாடகை குறைவாக கிடைக்க வாய்ப்புள்ளது.
                                </div>
                            </details>
                        </div>
                    </section>
                    <section className="pt-16 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 திருமண திட்டமிடல் நாட்காட்டி</h2>
                        <p className="text-gray-600 leading-relaxed">
                            2026 ஆம் ஆண்டு ஜூன் அல்லது டிசம்பர் போன்ற முக்கிய சுப முகூர்த்த காலங்களில் திருமணங்களைத் திட்டமிடும்போது, மண்டப முன்பதிவு மற்றும் பிற ஏற்பாடுகளுக்கு முன்கூட்டியே நாட்களைக் கணக்கிடுவது உதவியாக இருக்கும்.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
}
