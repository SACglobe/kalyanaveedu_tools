import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import WeddingChecklist from '@/components/tools/WeddingChecklist';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Wedding Checklist | திருமண வேலைகள் பட்டியல் – Tamil Reference',
    description: 'A complete digital checklist for Tamil wedding planning. திருமண ஏற்பாடுகளைத் திட்டமிடும் பட்டியல் – தகவல் நோக்கிற்கான நாட்காட்டி.',
    keywords: ['wedding checklist tamil', 'thirumana velai pattiyal', 'wedding to-do list tamil', 'marriage preparation checklist'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/tools/thirumana-thayaripu`,
    },
};

export default function ChecklistPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Tamil Wedding Preparation Checklist',
        description: 'Digital checklist for Tamil wedding planning',
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
                        "name": "Wedding Checklist | திருமண வேலைகள் பட்டியல் – Tamil Reference",
                        "description": "A complete digital checklist for Tamil wedding planning.",
                        "breadcrumb": "Home > Tools > Wedding Checklist",
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
                        "name": "திருமண தயாரிப்பு தரவு (Wedding Planning Checklist Data)",
                        "description": "தமிழ் திருமண வேலைகளைத் திட்டமிடுவதற்கான விரிவான ஆய்வுத் தகவல்கள்.",
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
                        "@type": "HowTo",
                        "name": "தமிழ் முறைப்படி திருமண வேலைகளைத் திட்டமிடுவது எப்படி? (How to plan a Tamil wedding checklist)",
                        "description": "தமிழ் திருமணத்திற்குத் தேவையான முக்கிய வேலைகளை மாத வாரியாக திட்டமிடும் முழுமையான வழிகாட்டி.",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "6 மாதங்களுக்கு முன்: அடிப்படை திட்டமிடல்",
                                "text": "முகூர்த்த நாள் குறித்தல், பட்ஜெட் முடிவு செய்தல் மற்றும் திருமண மண்டபத்தை முன்பதிவு செய்தல்."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "3 மாதங்களுக்கு முன்: முக்கிய முன்பதிவுகள்",
                                "text": "கேட்டரிங், புகைப்படம்/வீடியோ, மற்றும் அலங்கார நிபுணர்களை (Decorators) ஒப்பந்தம் செய்தல்."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "1 மாதத்திற்கு முன்: அழைப்பிதழ் மற்றும் பட்டுப்புடவை",
                                "text": "முகூர்த்த பட்டு வாங்குதல், பத்திரிக்கை அச்சிட்டு உறவினர்களுக்கு நேரில் சென்று அழைப்பிதழ் வழங்குதல்."
                            },
                            {
                                "@type": "HowToStep",
                                "name": "1 வாரத்திற்கு முன்: இறுதி ஏற்பாடுகள்",
                                "text": "மண்டபத்திற்கு எடுத்துச் செல்ல வேண்டிய தாலி, சீர்வரிசை பொருட்கள் மற்றும் ஆவணங்களை தயார் செய்து பேக் செய்தல்."
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
                    <span className="text-gray-900 font-medium">திருமண தயாரிப்பு பட்டியல்</span>
                </nav>

                <header className="mb-10 text-center">
                    {/* Step 2: Primary Answer Block (SSR) */}
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-primary">
                        திருமண வேலைகள் பட்டியல் (Tamil Wedding Checklist)
                    </h1>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
                        திருமணத்திற்குத் தேவையான அனைத்து வேலைகளையும் முறையாகத் திட்டமிட்டு முடிக்க இந்தப் பட்டியல் உதவும். இது ஒரு முன்னேற்பாட்டுத் தகவல் குறிப்பு மட்டுமே.
                    </p>
                </header>

                {/* Tool Component */}
                <WeddingChecklist />

                {/* SEO Content */}
                <article className="prose prose-lg max-w-none text-gray-700 space-y-8 mt-16 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                    <section>
                        <h2 className="text-3xl font-black text-gray-900 mb-6 border-b-2 border-primary pb-3 inline-block">
                            தமிழர் திருமண வேலைகள் பட்டியல்: ஒரு முழுமையான வழிகாட்டி (Tamil Wedding Checklist Guide)
                        </h2>
                        <p className="lead text-xl text-gray-600 mb-6">
                            "கல்யாணம் பண்ணிப் பார், வீட்டை கட்டிப் பார்" என்பது பழமொழி. ஒரு திருமணத்தை வெற்றிகரமாக நடத்தி முடிப்பது என்பது ஒரு பெரிய திட்டமிடல் கலையாகும். எதை எப்போது செய்ய வேண்டும் என்ற தெளிவான கால அட்டவணை (Timeline) இருந்தால், எந்தப் பதற்றமும் இன்றி திருமணத்தை சிறப்பாக நடத்தலாம்.
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">காலக் கெடு வாரியான திட்டமிடல் (Timeline-based Planning)</h2>
                        
                        <div className="space-y-8">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 text-xl mb-4 flex items-center gap-2">
                                    <span>🗓️</span> 6 மாதங்களுக்கு முன்பு (6 Months Before)
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>முகூர்த்தம் குறித்தல்:</strong> ஜோதிடரைச் சந்தித்து சரியான திருமண தேதி மற்றும் நேரத்தை (முகூர்த்தம்) முடிவு செய்தல்.</li>
                                    <li><strong>பட்ஜெட் நிர்ணயம்:</strong> <Link href="/tools/thirumana-selavu" className="text-primary hover:underline font-medium">பட்ஜெட் கால்குலேட்டரைப்</Link> பயன்படுத்தி தோராயமான செலவுகளைக் கணக்கிடுதல்.</li>
                                    <li><strong>மண்டப முன்பதிவு:</strong> முகூர்த்த தேதியில் மண்டபங்கள் விரைவில் நிறைந்துவிடும் என்பதால், உடனடியாக மண்டபத்தை புக் செய்தல்.</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                                <h3 className="font-bold text-purple-900 text-xl mb-4 flex items-center gap-2">
                                    <span>📸</span> 3-4 மாதங்களுக்கு முன்பு (3-4 Months Before)
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>முக்கிய ஒப்பந்தங்கள்:</strong> கேட்டரிங் (Catering), புகைப்படம் (Photography), மற்றும் மேடை அலங்காரம் (Decoration) செய்பவர்களைத் தேர்ந்தெடுத்து அட்வான்ஸ் கொடுத்தல்.</li>
                                    <li><strong>நகைகள்:</strong> திருமாங்கல்யம் மற்றும் மணமக்களுக்கான தங்க நகைகளை வாங்குதல்.</li>
                                    <li><strong>விருந்தினர் பட்டியல்:</strong> இரு தரப்பிலும் அழைக்க வேண்டிய உறவினர்கள் மற்றும் நண்பர்களின் பட்டியலைத் தயார் செய்தல்.</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-green-900 text-xl mb-4 flex items-center gap-2">
                                    <span>💌</span> 1-2 மாதங்களுக்கு முன்பு (1-2 Months Before)
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>பத்திரிக்கை:</strong> அழைப்பிதழ்களை டிசைன் செய்து அச்சிடுதல். உறவினர்களுக்கு நேரில் சென்று பத்திரிக்கை வைக்கத் தொடங்குதல்.</li>
                                    <li><strong>பட்டுப்புடவை:</strong> காஞ்சிபுரம் அல்லது உங்களுக்கு விருப்பமான ஊருக்குச் சென்று முகூர்த்தப் பட்டு மற்றும் ஆடைகளை எடுத்தல்.</li>
                                    <li><strong>ஒப்பனை:</strong> மணப்பெண் ஒப்பனைக்கலைஞரை (Makeup Artist) புக் செய்தல்.</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-orange-900 text-xl mb-4 flex items-center gap-2">
                                    <span>👜</span> 1 வாரத்திற்கு முன்பு (1 Week Before)
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><strong>பேக்கிங்:</strong> மண்டபத்திற்கு எடுத்துச் செல்ல வேண்டிய துணிகள், தாலி, செருப்பு, மற்றும் அழகுசாதனப் பொருட்களை பேக் செய்தல்.</li>
                                    <li><strong>பணம்:</strong> பேலன்ஸ் தொகைகளை கொடுக்கத் தேவையான பணத்தை தயார் நிலையில் வைத்தல்.</li>
                                    <li><strong>சீர்வரிசை:</strong> சீர்வரிசை தட்டுகளையும் அதற்கான பொருட்களையும் தயார் செய்தல்.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            மண்டபத்திற்கு எடுத்துச் செல்ல வேண்டிய மிக முக்கியப் பொருட்கள்
                        </h2>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                            <p className="mb-4 text-gray-600">கடைசி நேர பதற்றத்தைத் தவிர்க்க இந்தப் பொருட்களைத் தனியாக ஒரு பையில் (Emergency Kit) எடுத்து வைப்பது நல்லது:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-center"><span className="text-green-500 font-bold text-xl">✓</span> <span>திருமாங்கல்யம் / மோதிரங்கள்</span></li>
                                    <li className="flex gap-3 items-center"><span className="text-green-500 font-bold text-xl">✓</span> <span>முகூர்த்தப் பட்டு மற்றும் வேட்டி</span></li>
                                    <li className="flex gap-3 items-center"><span className="text-green-500 font-bold text-xl">✓</span> <span>பொருந்தும் உள்ளாடைகள் மற்றும் செருப்பு</span></li>
                                    <li className="flex gap-3 items-center"><span className="text-green-500 font-bold text-xl">✓</span> <span>சேஃப்டி பின்கள் (Safety Pins) & ஹேர்பின்கள்</span></li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-center"><span className="text-green-500 font-bold text-xl">✓</span> <span>ஆதார் கார்டு நகல்கள் (மண்டப விதிமுறைகளுக்கு)</span></li>
                                    <li className="flex gap-3 items-center"><span className="text-green-500 font-bold text-xl">✓</span> <span>பணம் / செக் புக் (Cheque Book)</span></li>
                                    <li className="flex gap-3 items-center"><span className="text-green-500 font-bold text-xl">✓</span> <span>மொபைல் சார்ஜர் / பவர் பேங்க்</span></li>
                                    <li className="flex gap-3 items-center"><span className="text-green-500 font-bold text-xl">✓</span> <span>முதலுதவி மருந்துகள் (First Aid/Painkillers)</span></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    <section className="mt-12 bg-gray-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            வேலைகளைப் பகிர்ந்தளித்தல் (Delegating Tasks)
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            மணமக்களின் பெற்றோரே அனைத்து வேலைகளையும் தலையில் தூக்கிப் போட்டுக் கொள்வது பெரும் உடல் மற்றும் மன அழுத்தத்தை ஏற்படுத்தும். எனவே, குடும்ப உறுப்பினர்களிடம் வேலைகளைப் பிரித்துக் கொடுப்பது (Delegation) மிக மிக அவசியம்.
                        </p>
                        <ul className="space-y-3 list-disc pl-6 text-gray-700">
                            <li><strong>உணவு மேற்பார்வை:</strong> அனுபவமுள்ள தாய்மாமா அல்லது பெரியப்பாவை கேட்டரிங் மற்றும் பந்தி பரிமாறுதலைக் கண்காணிக்கச் சொல்லலாம்.</li>
                            <li><strong>பத்திரிக்கை விநியோகம்:</strong> நண்பர்கள் மற்றும் உறவினர்களைப் பிரித்து, ஒவ்வொரு ஏரியாவுக்கும் ஒருவரைப் பொறுப்பாக்கலாம்.</li>
                            <li><strong>பொருட்கள் கவனிப்பு:</strong> திருமணப் பரிசுகள் மற்றும் மொய் கவர்களைப் பாதுகாப்பாகப் பெற்று வைக்க நம்பிக்கையான ஒருவரை நியமிக்கலாம்.</li>
                        </ul>
                    </section>

                    <section className="pt-12 border-t border-gray-200 mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 திருமண திட்டமிடலுக்கான கூடுதல் குறிப்புகள்</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                2026 ஆம் ஆண்டின் ட்ரெண்டுகளுக்கு ஏற்ப திருமணங்களைத் திட்டமிடும்போது, டிஜிட்டல் தொழில்நுட்பங்களைப் பயன்படுத்தத் தொடங்குங்கள். வாட்ஸ்அப் (WhatsApp) மூலம் டிஜிட்டல் அழைப்பிதழ்களை அனுப்புவது, நேரத்தையும் செலவையும் பெருமளவு குறைக்கும். மேலும், வெளியூரில் இருக்கும் நண்பர்களுக்காக திருமணத்தை நேரலை (Live Stream) செய்யும் வசதியையும் மண்டபத்தில் உறுதி செய்து கொள்ளுங்கள்.
                            </p>
                            <p>
                                திருமணத்திற்கு ஒரு மாதம் முன்பிருந்தே மணமக்கள் தங்களது ஆரோக்கியத்தில் அதிக அக்கறை செலுத்த வேண்டும். சரியான தூக்கம், தகுந்த தண்ணீர் குடிப்பது, மற்றும் மன அழுத்தத்தைக் குறைக்கும் தியானம் (Meditation) போன்றவை முகப்பொலிவை (Bridal Glow) இயற்கையாகவே அதிகரிக்கும்.
                            </p>
                            <p>
                                எல்லாவற்றிற்கும் மேலாக, திருமணம் என்பது இரண்டு மனங்கள் இணையும் ஒரு மகிழ்ச்சியான திருவிழா. சிறு சிறு தவறுகள் நடந்தாலும், அதை பெரிதுபடுத்தாமல் அன்றைய நாளை முழுமையாக அனுபவித்து மகிழ்வதே மிக முக்கியம். உங்களின் திருமணப் பயணம் இனிதே அமைய வாழ்த்துக்கள்!
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
