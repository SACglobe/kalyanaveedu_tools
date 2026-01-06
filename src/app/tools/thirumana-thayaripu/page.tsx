import type { Metadata } from 'next';
import WeddingChecklist from '@/components/tools/WeddingChecklist';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'திருமண வேலைகள் பட்டியல் | Tamil Wedding Checklist PDF',
    description: 'திருமண ஏற்பாடுகளை மறக்காமல் செய்ய உதவும் முழுமையான பட்டியல். 6 மாதங்களுக்கு முன்பிருந்தே திட்டமிடத் தொடங்குங்கள்.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        திருமண தயாரிப்பு பட்டியல் (Checklist)
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        திருமண வேலைகள் மலைக்க வைக்கிறதா? கவலை வேண்டாம்.
                        ஒவ்வொரு காலகட்டத்திலும் செய்ய வேண்டிய வேலைகளை நாங்கள் தொகுத்துள்ளோம்.
                        ஒவ்வொன்றாக முடித்து, மகிழ்ச்சியாக திருமணத்தை எதிர்கொள்ளுங்கள்.
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
                </article>
            </div>
        </div>
    );
}
