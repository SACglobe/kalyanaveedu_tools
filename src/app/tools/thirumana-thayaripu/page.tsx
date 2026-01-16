import type { Metadata } from 'next';
import WeddingChecklist from '@/components/tools/WeddingChecklist';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Wedding Checklist | திருமண வேலைகள் பட்டியல் – Tamil Reference',
    description: 'A complete digital checklist for Tamil wedding planning. திருமண ஏற்பாடுகளைத் திட்டமிடும் பட்டியல் – தகவல் நோக்கிற்கான நாட்காட்டி.',
    keywords: ['wedding checklist tamil', 'thirumana velai pattiyal', 'wedding to-do list tamil', 'marriage preparation checklist'],
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
                <article className="prose prose-lg max-w-none text-gray-700 space-y-8 mt-16">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            ஏன் இந்த பட்டியல் அவசியம்?
                        </h2>
                        <p>
                            திருமணம் என்பது ஆயிரம் காலத்து பயிர் என்பார்கள். ஆயிரக்கணக்கான வேலைகள் இருக்கும்.
                            சின்ன விஷயத்தை மறந்தாலும் கடைசி நேரத்தில் பதற்றம் ஏற்படும்.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>கடைசி நேர பதற்றத்தை தவிர்க்கலாம்.</li>
                            <li>பட்ஜெட்டை மீறாமல் பார்த்துக்கொள்ளலாம்.</li>
                            <li>முக்கியமான உறவினர்களை அழைக்க மறக்க மாட்டீர்கள்.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            முக்கிய ஆவணங்கள் மற்றும் பொருட்கள்
                        </h2>
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3">மண்டபத்திற்கு எடுத்துச் செல்ல வேண்டியவை:</h3>
                            <ul className="grid md:grid-cols-2 gap-2 text-sm">
                                <li>⬜ தாலி மற்றும் மோதிரங்கள்</li>
                                <li>⬜ முகூர்த்தப் பட்டு (கூடுதல் செட்)</li>
                                <li>⬜ மணமக்கள் ஆதார் கார்டு நகல்கள்</li>
                                <li>⬜ பணம் / பேங்க் செக் புக்</li>
                                <li>⬜ முதலுதவி பெட்டி (First Aid Kit)</li>
                                <li>⬜ மொபைல் சார்ஜர் / பவர் பேங்க்</li>
                            </ul>
                        </div>
                    </section>
                    <section className="pt-16 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 திருமண வேலைகள் பட்டியல்</h2>
                        <p className="text-gray-600 leading-relaxed">
                            2026 ஆம் ஆண்டிற்கான திருமணத் தயாரிப்புகளைத் தொடங்கும்போது, துணிகளைத் தேர்ந்தெடுப்பது முதல் விருந்தினர்களை அழைப்பது வரையிலான வேலைகளை இந்தப் பட்டியலின் உதவியுடன் முன்கூட்டியே முறைப்படுத்தலாம்.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
}
