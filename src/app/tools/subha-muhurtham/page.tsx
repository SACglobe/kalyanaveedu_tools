import type { Metadata } from 'next';
import SubhaMuhurthamCalendar from '@/components/SubhaMuhurthamCalendar';
import RelevantTools from '@/components/RelevantTools';
import { VALUABLE_MARRIAGE_DATES } from '@/lib/tamil-calendar-data';
import { getTamilDate, getTamilDayName } from '@/lib/tamil-calendar-utils';

export const metadata: Metadata = {
    title: 'Subha Muhurtham Today | இன்றைய சுப முகூர்த்தம் – Tamil Calendar',
    description: 'Find today’s Subha Muhurtham date and upcoming auspicious days for 2026. இன்றைய சுப முகூர்த்த தேதிகள் – பாரம்பரிய தகவல் நாட்காட்டி.',
    keywords: 'Subha Muhurtham Today, இன்றைய சுப முகூர்த்தம், 2026 Marriage Dates, Tamil Wedding Dates, சுப முகூர்த்த தேதிகள்',
};

export default function SubhaMuhurthamPage() {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const year = today.getFullYear();
    const englishDateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    // Calculate Today's Status and Upcoming Muhurtham
    const isTodayMuhurtham = VALUABLE_MARRIAGE_DATES.includes(todayStr);
    const futureMuhurthams = VALUABLE_MARRIAGE_DATES.filter(d => d >= todayStr).sort();
    const nextMuhurthamStr = futureMuhurthams.length > 0 ? (isTodayMuhurtham && futureMuhurthams.length > 1 ? futureMuhurthams[1] : futureMuhurthams[0]) : null;

    let nextMuhurthamInfo = null;
    if (nextMuhurthamStr) {
        const d = new Date(nextMuhurthamStr);
        const t = getTamilDate(d);
        nextMuhurthamInfo = {
            date: d.getDate(),
            month: d.toLocaleDateString('en-GB', { month: 'long' }),
            tamilMonth: t.tamilMonth,
            tamilDay: t.tamilDay,
            dayName: getTamilDayName(d)
        };
    }

    return (
        <main className="min-h-screen bg-gray-50 pt-12 pb-24">
            <div className="container mx-auto px-1 md:px-4">
                {/* SEO Header: Today Intent Extraction Layer */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Today Subha Muhurtham Block */}
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-primary">
                        இன்றைய சுப முகூர்த்தம் (Subha Muhurtham Today)
                    </h1>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-10">
                        இன்று ({englishDateStr}) {isTodayMuhurtham ? (
                            <>சுப முகூர்த்த நாள் ஆகும். விசேஷங்களுக்கு உகந்த நாள்.</>
                        ) : (
                            <>எந்த முக்கிய சுப முகூர்த்தமும் இல்லை.</>
                        )}
                    </p>

                    {/* Next Subha Muhurtham Block (Featured Snippet Target) */}
                    {nextMuhurthamInfo && (
                        <>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                                அடுத்த சுப முகூர்த்த தேதி (Next Subha Muhurtham Date)
                            </h2>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
                                அடுத்த முகூர்த்த நாள்: <strong>{nextMuhurthamInfo.date} {nextMuhurthamInfo.month}</strong>, ({nextMuhurthamInfo.tamilMonth} {nextMuhurthamInfo.tamilDay}), {nextMuhurthamInfo.dayName}.
                            </p>
                        </>
                    )}

                    <p className="text-gray-500 text-sm mt-12 border-t border-gray-100 pt-6">
                        இந்த தளம் பாரம்பரிய பஞ்சாங்கக் குறிப்புகளின் அடிப்படையில் வரக்கூடிய சுப முகூர்த்த தேதிகளைப் பட்டியலிடுகிறது. இது ஒரு தகவல் பெட்டகம் மட்டுமே.
                    </p>
                </div>

                {/* Main Tool Component */}
                <SubhaMuhurthamCalendar />

                {/* Visual Disclaimer (Moved Below Calendar) */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-8 text-left rounded-r-xl shadow-sm max-w-4xl mx-auto">
                    <p className="text-gray-900 font-black text-sm md:text-base leading-relaxed">
                        ⚠️ இந்த சுப முகூர்த்த காலண்டர் தகவல் நோக்கத்திற்காக மட்டுமே.
                        திருமணம் அல்லது பிற முடிவுகளுக்கு ஆலோசனையாக பயன்படுத்த வேண்டாம்.
                    </p>
                    <p className="text-gray-500 text-xs mt-1 font-bold italic">
                        For informational reference only. Not for decision-making guidance.
                    </p>
                </div>

                {/* Long-form Informational Content for AdSense & User Value */}
                <div className="mt-20 max-w-5xl mx-auto space-y-16">

                    {/* Section 1: Introduction (300-400 words) */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-4 border-primary pb-2 inline-block">
                            சுப முகூர்த்தம் என்றால் என்ன? (Introduction)
                        </h2>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-700 space-y-6 leading-relaxed text-lg">
                            <p>
                                சுப முகூர்த்தம் என்பது தமிழ் கலாச்சாரத்தில் மிகுந்த முக்கியத்துவம் வாய்ந்த ஒரு பாரம்பரியக் கணிப்பு முறையாகும்.
                                பழங்காலத்திலிருந்தே தமிழர்கள் தங்களின் வாழ்வியல் நிகழ்வுகளைத் தொடங்கும் போது, வானியல் ரீதியாக
                                சாதகமான நிலைகளைக் கொண்ட நேரங்களைத் தேர்ந்தெடுத்து வந்துள்ளனர். இதனைப் "பாரம்பரிய குறிப்புகள்"
                                என்று அழைக்கலாம்.
                            </p>
                            <p>
                                குறிப்பாக, ஒரு சுப காரியத்தைத் தொடங்கும் போது நவகிரகங்களின் நிலை, திதி மற்றும் நட்சத்திரம் ஆகியவை
                                ஒரு குறிப்பிட்ட சீரான அமைப்பில் இருக்க வேண்டும் என்று முன்னோர்கள் கருதினர். இதனை அடிப்படையாகக் கொண்டே
                                "முகூர்த்தம்" என்பது வரையறுக்கப்பட்டது. ஒரு முகூர்த்தம் என்பது 2 நாழிகைகள் அல்லது 48 நிமிடங்களைக்
                                கொண்ட ஒரு கால அளவாகும்.
                            </p>
                            <p>
                                இன்றைய நவீன காலத்தில் தகவல்கள் எளிதாகக் கிடைத்தாலும், எங்களது இந்தத் தளம் ஒரு தகவல் நோக்கத்திற்காக
                                மட்டுமே இந்தத் தேதிகளைப் பட்டியலிடுகிறது. வெவ்வேறு பஞ்சாங்கங்கள் மற்றும் ஊர் வழக்கங்களுக்கு ஏற்ப
                                இந்தப் பட்டியல்கள் மாறுபடலாம். ஒரு குடும்பத்தின் குலதெய்வ வழிபாடு அல்லது பாரம்பரிய வழக்கங்களே
                                முதன்மையானவை என்பதைப் புரிந்து கொள்வது அவசியம்.
                            </p>
                            <p>
                                முற்காலத்தில் முதியவர்கள் மற்றும் பெரியோர்கள் வானத்தின் அறிகுறிகளையும், பஞ்சாங்கக் குறிப்புகளையும்
                                வைத்து இதுபோன்ற நன்னாள்களைத் தீர்மானித்தனர். சித்திரை முதல் பங்குனி வரை உள்ள 12 தமிழ் மாதங்களிலும்
                                சில குறிப்பிட்ட தேதிகள் வழிவழியாகச் சுப முகூர்த்த நாட்களாகக் கருதப்பட்டு வருகின்றன. இது வாழ்வின்
                                புதிய தொடக்கங்களுக்கு ஒரு உளவியல் ரீதியான மற்றும் கலாச்சார ரீதியான தெளிவைத் தருகிறது.
                            </p>
                            <p>
                                சுருக்கமாகச் சொன்னால், சுப முகூர்த்த நாட்காட்டி என்பது ஒரு பாரம்பரிய வழிகாட்டி மட்டுமே. இது எந்த விதமான
                                ஜோதிடக் கணிப்போ அல்லது எதிர்காலத்தைப் பற்றிய உத்தரவாதமோ அல்ல. மக்கள் தங்களின் முன்னோர்களின்
                                பாதையைப் பின்பற்றி நிகழ்வுகளைத் திட்டமிடத் தேவையான குறிப்புகளைத் தரும் ஒரு தகவல் களஞ்சியம் இது.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Preparation Method (200 words) */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-4 border-primary pb-2 inline-block">
                            இந்த நாட்காட்டி எவ்வாறு தயாரிக்கப்படுகிறது? (Information Source)
                        </h2>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-700 space-y-6 leading-relaxed text-lg italic border-l-8 border-l-primary/30">
                            <p>
                                எங்களது சுப முகூர்த்த நாட்காட்டித் தரவுகள் நேரடியாக எந்த விதமான கணினி வழி ஜோதிடக் கணிப்புகளையும்
                                செய்வதில்லை. மாறாக, தமிழகத்தில் காலம் காலமாக விநியோகிக்கப்பட்டு வரும் பல்வேறு பாரம்பரிய
                                வாக்கிய மற்றும் திருக்கணிதப் பஞ்சாங்கங்களில் குறிப்பிடப்பட்டுள்ள பொதுவான முகூர்த்த தேதிகளைத்
                                தொகுத்து வழங்குகிறோம்.
                            </p>
                            <p>
                                ஒவ்வொரு ஆண்டும் வரக்கூடிய 365 நாட்களையும் ஆராய்ந்து, அதில் திருமண விசேஷங்கள் மற்றும் கிரகப் பிரவேசம்
                                போன்ற நிகழ்வுகளுக்குப் பொதுவாகப் பரிந்துரைக்கப்படும் தேதிகளை மட்டுமே நாங்கள் இங்கே குறிப்பிடுகிறோம்.
                                இந்தத் தரவுத் தொகுப்பு (Dataset) முழுக்க முழுக்க வரலாற்று ரீதியாகவும், கலாச்சார ரீதியாகவும்
                                பஞ்சாங்கங்களில் இடம்பெற்ற தகவல்களின் மறுபதிப்பாகும்.
                            </p>
                            <p>
                                இதில் தவறு நேர வாய்ப்புகள் இருப்பதாலும், ஒவ்வொரு ஊர் பஞ்சாங்கங்களில் சிறு வேறுபாடுகள்
                                காணப்படுவதாலும், இதனை இறுதி முடிவாகக் கருத வேண்டாம் என்று கேட்டுக் கொள்கிறோம். நாங்கள்
                                வழங்கியுள்ள இந்தத் தளமானது உங்களின் தேடலுக்கு ஒரு தொடக்கப் புள்ளியாக மட்டுமே அமையும்.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Usage Disclaimer (200 words) */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-4 border-primary pb-2 inline-block">
                            பயன்பாட்டு முறை மற்றும் தெளிவுரை (How to Refer)
                        </h2>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-700 space-y-6 leading-relaxed text-lg bg-gray-50/50">
                            <p>
                                இந்த நாட்காட்டியைப் பயன்படுத்தும் போது பயனர்கள் ஒரு முக்கியமான விஷயத்தைக் கவனத்தில் கொள்ள வேண்டும்.
                                ஒரு தேதி "சுப முகூர்த்த நாள்" என்று இந்தத் தளத்தில் குறிப்பிடப்பட்டிருந்தாலும், அது உங்களின்
                                தனிப்பட்ட ஜாதகத்திற்கோ அல்லது நட்சத்திரத்திற்கோ ஒத்துப் போகுமா என்பதைத் தீர்மானிக்க வேண்டியது
                                உங்களின் குடும்பப் பெரியவர்கள் மற்றும் ஆன்மீக ஆலோசகர்களின் பொறுப்பாகும்.
                            </p>
                            <p>
                                பாரம்பரியமாக, ஒரு நன்னாளத் தேர்ந்தெடுக்கும் போது தாரா பலன், சந்திர பலன் மற்றும் அஷ்டம தசை
                                போன்ற நுணுக்கமான விஷயங்கள் பார்க்கப்படும். எங்களது தளம் அத்தகைய தனிநபர் சார்ந்த ஆலோசனைகளை
                                வழங்குவதில்லை. இது ஒரு பொதுவான காலண்டர் தகவல் (Informational Reference) மட்டுமே.
                            </p>
                            <p>
                                திருமணப் பேச்சுவார்த்தைகள் அல்லது புதிய தொழில் தொடங்குதல் போன்ற முக்கிய முடிவுகளை எடுக்கும் முன்,
                                இந்தத் தேதிகளை ஒரு குறிப்பாக வைத்துக் கொண்டு, பின்பு உங்களின் கலாச்சார வழக்கப்படி
                                அதனை உறுதி செய்து கொள்வதே சரியான முறையாகும். எங்களது நோக்கமே தமிழர்களின் பாரம்பரிய
                                நாட்காட்டிக் குறிப்புகளைத் டிஜிட்டல் வடிவில் தேடுபவர்களுக்குக் கொண்டு சேர்ப்பது மட்டுமே.
                            </p>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="prose prose-orange max-w-none">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)</h2>
                        <div className="grid gap-4">
                            {[
                                {
                                    q: "சுப முகூர்த்தம் என்றால் என்ன?",
                                    a: "இது பாரம்பரிய வானியல் குறிப்புகளின்படி, ஒரு நல்ல காரியத்தைத் தொடங்க உகந்ததாகக் கருதப்படும் ஒரு கால அளவு (48 நிமிடங்கள்). எங்களது நாட்காட்டி அத்தகைய தேதிகளைப் பட்டியலிடுகிறது."
                                },
                                {
                                    q: "இந்த காலண்டர் ஆலோசனை வழங்குமா?",
                                    a: "நிச்சயமாக இல்லை. இது ஒரு தகவல் பெட்டகம் மட்டுமே. எந்தவொரு முக்கிய முடிவையும் எடுப்பதற்கு முன் முறையான ஆலோசகர்களை அணுகுமாறு கேட்டுக் கொள்கிறோம்."
                                },
                                {
                                    q: "எல்லா குடும்பங்களும் ஒரே நாட்களைப் பின்பற்றுகிறார்களா?",
                                    a: "இல்லை. குடும்ப வழக்கங்கள், குலதெய்வக் கட்டுப்பாடுகள் மற்றும் ஊர் பஞ்சாங்கங்களுக்கு ஏற்ப இவை மாறுபடும். இது ஒரு பொதுவான குறிப்பு மட்டுமே."
                                },
                                {
                                    q: "இந்தத் தகவல் எதற்காக?",
                                    a: "பாரம்பரியத் தமிழ் மாதங்கள் மற்றும் நன்னாள்கள் குறித்த தகவல்களைத் தேடுபவர்களின் வசதிக்காக வரலாற்று ரீதியான பஞ்சாங்கக் குறிப்புகளைத் டிஜிட்டல் வடிவில் தொகுத்துக் கொடுத்துள்ளோம்."
                                }
                            ].map((faq, i) => (
                                <details key={i} className="bg-white p-6 rounded-2xl border border-gray-200 cursor-pointer group hover:border-primary/30 transition-all shadow-sm">
                                    <summary className="font-black text-gray-900 text-lg list-none flex justify-between items-center uppercase tracking-tight">
                                        {faq.q}
                                        <span className="text-primary transition-transform group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 font-medium leading-relaxed border-t pt-4">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <RelevantTools excludePath="/tools/subha-muhurtham" />

                    {/* Step 3: Year Anchor Text (Crawl Support) */}
                    <div className="pt-16 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{year} சுப முகூர்த்த தேதிகள் பட்டியல்</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                            {VALUABLE_MARRIAGE_DATES.filter(d => d.startsWith(year.toString())).map(dateStr => {
                                const d = new Date(dateStr);
                                return (
                                    <li key={dateStr} className="list-none md:list-disc md:ml-4">
                                        {d.getDate()} {d.toLocaleDateString('en-GB', { month: 'long' })} {year}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Final Bottom Disclaimer */}
                    <div className="p-8 bg-gray-900 text-white rounded-3xl text-center space-y-4">
                        <p className="text-xl font-bold italic opacity-90">
                            "பாரம்பரியம் என்பது நம் வேர்கள், அதன் குறிப்புகள் ஒரு வெளிச்சம் மட்டுமே."
                        </p>
                        <p className="text-xs opacity-60">
                            © 2026 Kalyanaveedu - Subha Muhurtham Traditional Calendar Tool.
                        </p>
                    </div>
                </div>

                {/* Structured Data (Schema) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            "name": "சுப முகூர்த்த நாட்காட்டி",
                            "alternateName": "Subha Muhurtham Today",
                            "inLanguage": "ta",
                            "description": "தமிழ் பாரம்பரியத்தில் குறிப்பிடப்படும் சுப முகூர்த்த தேதிகள் குறித்த தகவல் பெட்டகம்.",
                            "applicationCategory": "EducationalApplication",
                            "operatingSystem": "All"
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Subha Muhurtham Today | இன்றைய சுப முகூர்த்தம் – Tamil Calendar",
                            "description": "Find today’s Subha Muhurtham date and upcoming auspicious days for 2026.",
                            "breadcrumb": "Home > Tools > Subha Muhurtham",
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
                            "name": "சுப முகூர்த்த தேதிகள் தரவு (Subha Muhurtham Dates)",
                            "description": "2026 ஆம் ஆண்டிற்கான தமிழ் சுப முகூர்த்த தேதிகள் குறித்த ஆய்வுத் தகவல்கள்.",
                            "license": "https://creativecommons.org/licenses/by/4.0/",
                            "isAccessibleForFree": true,
                            "creator": {
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
                            "@id": "https://kalyanaveedu.in/tools/subha-muhurtham#faq",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "சுப முகூர்த்தம் என்றால் என்ன?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "இது பாரம்பரிய வானியல் குறிப்புகளின்படி, ஒரு நல்ல காரியத்தைத் தொடங்க உகந்ததாகக் கருதப்படும் ஒரு கால அளவு."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "இந்த காலண்டர் ஆலோசனை வழங்குமா?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "இல்லை, இது ஒரு தகவல் பெட்டகம் மட்டுமே. தனிப்பட்ட ஆலோசனைகளை வழங்குவதில்லை."
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
