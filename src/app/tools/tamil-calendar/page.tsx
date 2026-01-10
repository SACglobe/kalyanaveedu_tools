import type { Metadata } from 'next';
import TamilCalendar from '@/components/TamilCalendar';

export const metadata: Metadata = {
    title: 'Tamil Calendar 2026 | தமிழ் காலண்டர் – Daily Date, Nakshatra & Tithi',
    description: 'Tamil Calendar showing daily Tamil date, month, nakshatra, tithi, and festivals. Informational reference for Tamil users.',
    keywords: 'Tamil Calendar, தமிழ் காலண்டர், Tamil Date today, Nakshatra, Tithi, Tamil Month, 2026 Tamil Calendar',
};

export default function TamilCalendarPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-12 pb-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-primary">
                        தமிழ் காலண்டர் (Tamil Calendar)
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        இந்த தளம் இன்றைய தமிழ் தேதி, மாதம், நட்சத்திரம் மற்றும் திதி குறித்த துல்லியமான தகவல்களை வழங்குகிறது.
                        இது ஒரு பாரம்பரிய காலண்டர் தகவல் குறிப்பு மட்டுமே.
                    </p>
                </div>

                {/* Calendar Component */}
                <TamilCalendar />

                {/* Informational Content Sections */}
                <div className="mt-20 max-w-4xl mx-auto space-y-16">
                    {/* Disclaimer */}
                    <section className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm border-l-4 border-l-orange-500">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span>⚠️</span> கவனத்திற்கு (Disclaimer)
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            இந்த காலண்டர் தகவல் நோக்கத்திற்காக மட்டுமே வழங்கப்படுகிறது.
                            நாங்கள் எந்த விதமான ஜோதிட கணிப்புகளையோ அல்லது எதிர்கால பலன்களையோ வழங்குவதில்லை.
                            முக்கியமான முடிவுகள் எடுக்கும் முன் பாரம்பரிய பஞ்சாங்கங்களைக் கலந்தாலோசிக்கவும்.
                        </p>
                        <p className="text-sm text-gray-500 italic">
                            This calendar is for informational reference only. We do not provide predictions or claims
                            about luck, success, or future outcomes.
                        </p>
                    </section>

                    {/* Section 1: What is Tamil Calendar? */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">தமிழ் காலண்டர் என்றால் என்ன? (What is Tamil Calendar?)</h2>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-gray-700 space-y-4 leading-relaxed">
                            <p>
                                தமிழ் காலண்டர் என்பது தமிழர்களின் கலாச்சாரம் மற்றும் பாரம்பரியத்தோடு பின்னிப் பிணைந்த ஒரு காலக்கணிப்பு முறையாகும்.
                                இது சூரியனின் இயக்கத்தை அடிப்படையாகக் கொண்டு கணக்கிடப்படும் ஒரு சூரிய காலண்டர் (Solar Calendar) ஆகும்.
                                குறிப்பாக, சூரியன் மேஷ ராசியிலிருந்து மீன ராசி வரை பயணம் செய்யும் காலத்தை ஒரு ஆண்டாகக் கொள்கிறது.
                            </p>
                            <p>
                                ஒரு தமிழ் ஆண்டானது 12 மாதங்களைக் கொண்டது. சித்திரை மாதத்தில் தொடங்கி பங்குனி மாதத்தில் முடிவடைகிறது.
                                ஒவ்வொரு மாதமும் சூரியன் ஒரு புதிய ராசியில் பிரவேசிக்கும் நாளில் தொடங்குகிறது. இதனால் தமிழ் மாதத்தின் நாட்கள்
                                ஒரு மாதத்திற்கு 29 முதல் 32 நாட்கள் வரை மாறுபடும்.
                            </p>
                            <p>
                                பாரம்பரியமாக, தமிழ் காலண்டர் என்பது வெறும் தேதிகளைக் குறிப்பது மட்டுமல்லாமல், பஞ்சாங்கத்தின் ஐந்து
                                கூறுகளான வாரம், திதி, நட்சத்திரம், யோகம் மற்றும் கரணம் ஆகியவற்றையும் உள்ளடக்கியது. இவை
                                வானியல் ரீதியாக சூரியன் மற்றும் சந்திரனின் நிலைகளைக் கொண்டு கணக்கிடப்படுகின்றன.
                            </p>
                            <p>
                                இன்றைய நவீன காலத்தில் நாம் ஆங்கில காலண்டரை அலுவலக ரீதியான பயன்பாட்டிற்கு வைத்திருந்தாலும்,
                                நமது விழாக்கள், விசேஷங்கள் மற்றும் பாரம்பரிய சடங்குகளுக்கு தமிழ் காலண்டரையே முதன்மையாகப் பயன்படுத்துகிறோம்.
                                தைப்பொங்கல், தமிழ் புத்தாண்டு போன்ற விழாக்கள் அனைத்தும் இந்த காலண்டரின் அடிப்படையிலேயே தீர்மானிக்கப்படுகின்றன.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: How Tamil dates are calculated */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">தமிழ் தேதிகள் எவ்வாறு கணக்கிடப்படுகின்றன? (Calculation Method)</h2>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-gray-700 space-y-4 leading-relaxed">
                            <p>
                                தமிழ் காலண்டர் கணக்கீடுகள் சூரியனின் 'சங்கராந்தி' (Transit) நேரத்தை அடிப்படையாகக் கொண்டது.
                                சூரியன் ஒரு ராசியிலிருந்து மற்றொரு ராசிக்கு மாறும் தருணம் 'மாதப் பிறப்பு' என அழைக்கப்படுகிறது.
                                இது பொதுவாக ஒவ்வொரு ஆங்கில மாதத்தின் 13 முதல் 17-ம் தேதிக்குள் நிகழும்.
                            </p>
                            <p>
                                <strong>சூரிய சித்தாந்தம் மற்றும் வாக்கிய பஞ்சாங்கம்:</strong>
                                காலண்டர் கணிப்பில் இரண்டு பிரதான முறைகள் உள்ளன. ஒன்று 'வாக்கியம்', மற்றொன்று 'திருக்கணிதம்'.
                                திருக்கணிதம் நவீன வானியல் கருவிகளின் உதவியுடன் கணக்கிடப்படும் துல்லியமான முறையாகும். எங்களது காலண்டர் தகவல்
                                திருக்கணித முறையை அடிப்படையாகக் கொண்டு சூரியனின் நிலையை வைத்து கணக்கிடப்பட்டுள்ளது.
                            </p>
                            <p>
                                <strong>திதி மற்றும் நட்சத்திரம்:</strong>
                                சந்திரன் பூமியைச் சுற்றி வரும் பாதையில் இருக்கும் நிலையை வைத்து திதி மற்றும் நட்சத்திரம் கணக்கிடப்படுகிறது.
                                சந்திரன் ஒரு குறிப்பிட்ட நட்சத்திர மண்டலத்தில் இருக்கும் காலம் அந்த நாளின் நட்சத்திரமாகக் கருதப்படுகிறது.
                                சூரியனுக்கும் சந்திரனுக்கும் இடையிலான தூரத்தை வைத்து அமாவாசை முதல் பௌர்ணமி வரை 30 திதிகள் பிரிக்கப்படுகின்றன.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Difference between Tamil Calendar & English Calendar */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">தமிழ் காலண்டர் மற்றும் ஆங்கில காலண்டர்: வேறுபாடுகள்</h2>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-orange-50">
                                        <th className="p-4 font-bold text-gray-900 border-b">அம்சம் (Feature)</th>
                                        <th className="p-4 font-bold text-gray-900 border-b">தமிழ் காலண்டர்</th>
                                        <th className="p-4 font-bold text-gray-900 border-b">ஆங்கில காலண்டர்</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr>
                                        <td className="p-4 border-b font-medium">அடிப்படை</td>
                                        <td className="p-4 border-b">சூரியனின் இயக்கம் (Solar)</td>
                                        <td className="p-4 border-b">சூரியனின் இயக்கம் (Solar)</td>
                                    </tr>
                                    <tr className="bg-gray-50/50">
                                        <td className="p-4 border-b font-medium">ஆண்டு தொடக்கம்</td>
                                        <td className="p-4 border-b">ஏப்ரல் 13/14 (சித்திரை 1)</td>
                                        <td className="p-4 border-b">ஜனவரி 1</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b font-medium">மாதத்தின் நாட்கள்</td>
                                        <td className="p-4 border-b">29 முதல் 32 வரை மாறும்</td>
                                        <td className="p-4 border-b">28, 30, 31 (நிலையானது)</td>
                                    </tr>
                                    <tr className="bg-gray-50/50">
                                        <td className="p-4 border-b font-medium">நாளின் தொடக்கம்</td>
                                        <td className="p-4 border-b">சூரிய உதயம் முதல்</td>
                                        <td className="p-4 border-b">நள்ளிரவு 12 மணி முதல்</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 4: Traditional Usage */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">தமிழ் காலண்டரின் பாரம்பரிய பயன்பாடு (Traditional Usage)</h2>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-gray-700 space-y-4 leading-relaxed">
                            <p>
                                தமிழர்கள் தங்களின் அன்றாட வாழ்வில் தமிழ் காலண்டரை ஒரு வழிகாட்டியாகப் பயன்படுத்தி வருகின்றனர்.
                                விவசாயம் முதல் விழாக்கள் வரை அனைத்திலும் இதற்கான பங்கு உண்டு.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>திருவிழாக்கள்:</strong> பொங்கல், தீபாவளி, நவராத்திரி போன்ற விழாக்கள் திதி மற்றும் நட்சத்திரம் அடிப்படையிலேயே கணக்கிடப்படுகின்றன.</li>
                                <li><strong>விவசாயம்:</strong> எந்த மாதத்தில் விதைக்க வேண்டும், எப்போது அறுவடை செய்ய வேண்டும் என்பது பாரம்பரியமாக தமிழ் மாதங்களை வைத்தே தீர்மானிக்கப்படுகிறது.</li>
                                <li><strong>நினைவு நாட்கள்:</strong> மறைந்த முன்னோர்களுக்கு மரியாதை செலுத்தும் திதி நாட்கள் தமிழ் காலண்டர் படி கடைபிடிக்கப்படுகிறது.</li>
                                <li><strong>நேர மேலாண்மை:</strong> ராகு காலம், எமகண்டம் போன்ற நேரங்கள் பாரம்பரியமாக கவனிக்கப்பட்டாலும், இவை கலாச்சார நம்பிக்கையின் ஒரு பகுதியாகவே பார்க்கப்படுகின்றன.</li>
                            </ul>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)</h2>
                        <div className="space-y-4">
                            <details className="bg-white p-4 rounded-xl border border-gray-200 cursor-pointer group hover:border-orange-200 transition-colors">
                                <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                                    தமிழ் காலண்டரில் எத்தனை ஆண்டுகள் உள்ளன?
                                    <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    தமிழ் காலண்டர் 60 ஆண்டுகளைக் கொண்ட ஒரு சுழற்சியைக் கொண்டது. ஒவ்வொரு ஆண்டும் ஒரு பிரத்யேக வெற்றியைக் குறிக்கும் பெயரைக் கொண்டிருக்கும். 60 ஆண்டுகள் முடிந்த பிறகு மீண்டும் முதல் பெயரிலிருந்து சுழற்சி தொடங்கும்.
                                </p>
                            </details>
                            <details className="bg-white p-4 rounded-xl border border-gray-200 cursor-pointer group hover:border-orange-200 transition-colors">
                                <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                                    தமிழ் புத்தாண்டு எப்போதும் ஏப்ரல் 14 அன்று வருகிறதா?
                                    <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    பெரும்பாலும் ஏப்ரல் 14 அன்று வரும். ஆனால் சூரியன் மேஷ ராசியில் பிரவேசிக்கும் நேரத்தைப் பொறுத்து சில ஆண்டுகளில் ஏப்ரல் 13 அல்லது 15 அன்றும் வரக்கூடும்.
                                </p>
                            </details>
                        </div>
                    </section>
                </div>

                {/* Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "தமிழ் காலண்டரில் எத்தனை ஆண்டுகள் உள்ளன?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "தமிழ் காலண்டர் 60 ஆண்டுகளைக் கொண்ட ஒரு சுழற்சியைக் கொண்டது. ஒவ்வொரு ஆண்டும் ஒரு பிரத்யேக பெயரைக் கொண்டிருக்கும்."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "தமிழ் புத்தாண்டு எப்போது தொடங்குகிறது?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "தமிழ் புத்தாண்டு சித்திரை மாதம் முதல் நாள் தொடங்குகிறது, இது பொதுவாக ஏப்ரல் 14 அன்று வரும்."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </div>
        </main>
    );
}
