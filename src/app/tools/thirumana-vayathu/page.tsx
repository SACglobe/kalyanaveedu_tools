import type { Metadata } from 'next';
import MarriageEligibility from '@/components/tools/MarriageEligibility';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Marriage Age India | திருமண வயது தகுதி – Tamil Reference',
    description: 'Check legal marriage age eligibility in India (Mens 21, Womens 18). இந்திய திருமண வயது வரம்புகள் – பாரம்பரிய தகவல் நாட்காட்டி.',
    keywords: ['marriage age india', 'thirumana vayathu', 'marriage eligibility tamil', 'legal marriage age checker'],
};

export default function MarriageEligibilityPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Tamil Marriage Age Eligibility Checker',
        description: 'Verify legal marriage eligibility in India based on DOB and Gender',
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
                        "name": "Marriage Age India | திருமண வயது தகுதி – Tamil Reference",
                        "description": "Check legal marriage age eligibility in India (Mens 21, Womens 18).",
                        "breadcrumb": "Home > Tools > Marriage Age Checker",
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
                        "@type": "Dataset",
                        "name": "திருமண வயது தகுதி தரவு (Marriage Age Eligibility Data)",
                        "description": "இந்திய திருமண சட்டப்படி ஆண்கள் மற்றும் பெண்களுக்கான வயது வரம்பு குறித்த சட்டப்பூர்வ தகவல்கள்.",
                        "license": "https://creativecommons.org/licenses/by/4.0/",
                        "isAccessibleForFree": true,
                        "creator": {
                            "@type": "Organization",
                            "name": "Kalyanaveedu"
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
                    <span className="text-gray-900 font-medium">திருமண வயது தகுதி</span>
                </nav>

                <header className="mb-10 text-center">
                    {/* Step 2: Primary Answer Block (SSR) */}
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-primary">
                        திருமண வயது என்ன? (Legal Marriage Age India)
                    </h1>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
                        இந்திய சட்டப்படி திருமணத்திற்கான குறைந்தபட்ச வயது ஆண்களுக்கு <strong>21</strong> மற்றும் பெண்களுக்கு <strong>18</strong> ஆகும். இது ஒரு பொதுவான சட்டத் தகவல் குறிப்பு மட்டுமே.
                    </p>
                </header>

                {/* Tool Component */}
                <MarriageEligibility />

                {/* SEO Content */}
                <article className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            இந்திய திருமண சட்டங்கள் பற்றி (Prohibition of Child Marriage Act)
                        </h2>
                        <p>
                            இந்தியாவில் குழந்தைத் திருமண தடைச் சட்டம் (2006) படி, திருமணத்திற்கான குறைந்தபட்ச வயது
                            நிர்ணயிக்கப்பட்டுள்ளது. இது உடல் மற்றும் மன முதிர்ச்சியை உறுதி செய்யவும்,
                            ஆரோக்கியமான குடும்ப வாழ்க்கையை உறுதி செய்யவும் வகுக்கப்பட்டுள்ளது.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-2 text-xl">ஆண்கள்</h3>
                                <p className="text-blue-800 text-3xl font-bold">21 வயது</p>
                                <p className="text-sm text-blue-600 mt-2">பூர்த்தியாகியிருக்க வேண்டும்</p>
                            </div>
                            <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                                <h3 className="font-bold text-pink-900 mb-2 text-xl">பெண்கள்</h3>
                                <p className="text-pink-800 text-3xl font-bold">18 வயது</p>
                                <p className="text-sm text-pink-600 mt-2">பூர்த்தியாகியிருக்க வேண்டும்</p>
                            </div>
                        </div>
                        <p className="text-sm bg-yellow-50 p-4 rounded border border-yellow-200">
                            குறிப்பு: பெண்களின் திருமண வயதை 21 ஆக உயர்த்துவது தொடர்பான விவாதங்கள் அரசால்
                            முன்னெடுக்கப்பட்டுள்ளன, ஆனால் தற்போதைய சட்டப்படி (2025 வரை) 18 வயதே நடைமுறையில் உள்ளது.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            சட்ட விரோத திருமணத்தின் விளைவுகள்
                        </h2>
                        <p>
                            மேற்கூறிய வயதிற்கு குறைவாக திருமணம் செய்வது சட்டப்படி குற்றமாகும்.
                            இது குழந்தைத் திருமணமாக கருதப்பட்டு, திருமணத்தை நடத்தியவர்கள் மற்றும்
                            உறவினர்கள் மீது சட்ட நடவடிக்கை எடுக்கப்படலாம்.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>திருமணம் செல்லாததாக அறிவிக்கப்படலாம்.</li>
                            <li>பெற்றோர் மற்றும் பூசாரிக்கு அபராதம் அல்லது சிறை தண்டனை.</li>
                            <li>பெண் கல்வி மற்றும் ஆரோக்கியம் பாதிக்கப்படும்.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            கேள்வி பதில் (FAQ)
                        </h2>
                        <div className="space-y-6">
                            <div className="border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">
                                    1. பெண்ணிற்கு 18 வயது முடிய இன்னும் 1 மாதம் உள்ளது, திருமணம் செய்யலாமா?
                                </h3>
                                <p className="text-gray-600">
                                    கூடாது. 18 வயது முழுமையாக பூர்த்தியடைந்த பின்னரே திருமணம் செய்ய வேண்டும்.
                                    ஒரு நாள் குறைந்தாலும் அது சட்டப்படி குற்றமாகும்.
                                </p>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">
                                    2. வயது சான்றிதழாக எதை பயன்படுத்தலாம்?
                                </h3>
                                <p className="text-gray-600">
                                    பிறப்பு சான்றிதழ் (Birth Certificate), பள்ளி மாற்றுச் சான்றிதழ் (TC),
                                    அல்லது பத்தாம் வகுப்பு மதிப்பெண் சான்றிதழ் ஆகியவை வயதுக்கான சிறந்த ஆவணங்களாகும்.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="pt-16 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 திருமண சட்ட வரம்புகள்</h2>
                        <p className="text-gray-600 leading-relaxed">
                            2026 ஆம் ஆண்டிலும் திருமணத்திற்கான அடிப்படை வயது வரம்புகள் தற்போதைய சட்டப்படியே தொடர்கின்றன. சமூக மற்றும் உடல் நலனைக் கருத்தில் கொண்டு இந்த வயது வரம்புகள் நிர்ணயிக்கப்பட்டுள்ளன.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
}
