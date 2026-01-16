import type { Metadata } from 'next';
import AgeCalculator from '@/components/tools/AgeCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Age Calculator | வயது கால்குலேட்டர் – Tamil Reference',
    description: 'Calculate your exact age in years, months, and days. துல்லியமான வயது கணக்கிடும் கருவி – தகவல் நோக்கிற்கான நாட்காட்டி.',
    keywords: ['age calculator tamil', 'vayathu kanakku', 'birth date calculator', 'marriage age calculator'],
};

export default function AgeCalculatorPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Tamil Age Calculator',
        description: 'Calculate exact age in years, months and days in Tamil',
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
                        "name": "Age Calculator | வயது கால்குலேட்டர் – Tamil Reference",
                        "description": "Calculate your exact age in years, months, and days.",
                        "breadcrumb": "Home > Tools > Age Calculator",
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
                        "name": "Tamil Age Calculator",
                        "description": "Calculate exact age in years, months and days in Tamil",
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
                    <span className="text-gray-900 font-medium">வயது கணக்கிடுபவர்</span>
                </nav>

                <header className="mb-10 text-center">
                    {/* Step 2: Primary Answer Block (SSR) */}
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-primary">
                        வயது கால்குலேட்டர் (Age Calculator Today)
                    </h1>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
                        இந்தக் கருவி உங்கள் பிறந்த தேதியின் அடிப்படையில் உங்களின் துல்லியமான வயதை வருடம், மாதம் மற்றும் நாட்கள் வாரியாகக் கணக்கிடுகிறது. இது ஒரு தகவல் குறிப்பு மட்டுமே.
                    </p>
                </header>

                {/* Tool Component */}
                <AgeCalculator />

                {/* SEO Content */}
                <article className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            இந்த கருவி எப்படி செயல்படுகிறது?
                        </h2>
                        <p>
                            இந்த வயது கால்குலேட்டர் உங்கள் பிறந்த தேதி மற்றும் இன்றைய தேதியை ஒப்பிட்டு
                            துல்லியமான வயதை கணக்கிடுகிறது. இது லீப் வருடங்கள் (Leap Years) மற்றும்
                            மாதங்களின் நாட்களை (30/31) தானாகவே சரிசெய்து மிகச்சரியான முடிவை வழங்குகிறது.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>உங்கள் பிறந்த தேதியை உள்ளிடவும்.</li>
                            <li>தானாகவே இன்றைய தேதி தேர்ந்தெடுக்கப்பட்டிருக்கும் (தேவைப்பட்டால் மாற்றலாம்).</li>
                            <li>"வயதை கணக்கிடு" பொத்தானை அழுத்தவும்.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            ஏன் இந்த கருவி தேவை?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-2">💍 திருமண பொருத்தம்</h3>
                                <p className="text-sm">
                                    திருமண பொருத்தத்தின் போது மணமகன் மற்றும் மணமகளின் சரியான வயது வித்தியாசத்தை
                                    அறிய இது மிக அவசியம்.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-2">📄 அரசு விண்ணப்பங்கள்</h3>
                                <p className="text-sm">
                                    Tnpsc போன்ற தேர்வுகளுக்கு விண்ணப்பிக்கும் போது, குறிப்பிட்ட தேதியில்
                                    உங்கள் வயது என்ன என்பதை அறிய உதவும்.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)
                        </h2>
                        <div className="space-y-6">
                            <div className="border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">
                                    1. இந்த வயது கால்குலேட்டர் துல்லியமானதா?
                                </h3>
                                <p className="text-gray-600">
                                    ஆம், இது 100% துல்லியமானது. லீப் வருடங்களையும் கணக்கில் கொண்டு
                                    சரியான வயதை இது கணக்கிடும்.
                                </p>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">
                                    2. திருமணத்திற்கு சரியான வயது வரம்பு என்ன?
                                </h3>
                                <p className="text-gray-600">
                                    இந்திய சட்டப்படி, ஆண்களுக்கு 21 வயது மற்றும் பெண்களுக்கு 18 வயது
                                    பூர்த்தியாகி இருக்க வேண்டும். எங்கள் <Link href="/tools/thirumana-vayathu" className="text-primary hover:underline">திருமண வயது தகுதி கருவி</Link> மூலம்
                                    இதை நீங்கள் சரிபார்க்கலாம்.
                                </p>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">
                                    3. எனது அடுத்த பிறந்தநாள் எப்போது வரும்?
                                </h3>
                                <p className="text-gray-600">
                                    இந்த கருவி உங்கள் அடுத்த பிறந்தநாளுக்கு இன்னும் எத்தனை மாதங்கள்
                                    மற்றும் நாட்கள் உள்ளன என்பதையும் தெளிவாக காட்டும்.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="pt-16 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 வயது கணக்கீடு - முக்கிய தேதிகள்</h2>
                        <p className="text-gray-600 leading-relaxed">
                            2026 ஆம் ஆண்டில் உங்கள் வயதை அறிய, 2026 இலிருந்து உங்கள் பிறந்த வருடத்தைக் கழிப்பதன் மூலம் தோராயமான வயதைக் கணக்கிடலாம்.
                            சட்டப்படியான தேவைகள், பள்ளி சேர்க்கை மற்றும் வேலை அறிவிப்புகளுக்கு துல்லியமான வயதுத் தகுதி முக்கியமானது.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
}
