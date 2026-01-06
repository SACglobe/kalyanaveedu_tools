import type { Metadata } from 'next';
import BudgetCalculator from '@/components/tools/BudgetCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'திருமண செலவு கால்குலேட்டர் | Wedding Budget Calculator Tamil',
    description: 'உங்கள் திருமண பட்ஜெட்டை முன்கூட்டியே திட்டமிட உதவும் எளிய கருவி. தங்கம், மண்டபம், உணவு மற்றும் இதர செலவுகளை கணக்கிடுங்கள்.',
    keywords: ['wedding budget calculator tamil', 'thirumana selavu', 'marriage cost estimator', 'tamil wedding planning'],
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

            <div className="max-w-5xl mx-auto">
                <nav className="text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary">முகப்பு</Link>
                    <span className="mx-2">/</span>
                    <Link href="/tools" className="hover:text-primary">கருவிகள்</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">திருமண செலவு கணிப்பான்</span>
                </nav>

                <header className="mb-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        திருமண செலவு கணிப்பான்
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        ஒரு பிரம்மாண்டமான திருமணத்திற்கு தெளிவான பட்ஜெட் திட்டமிடல் அவசியம்.
                        எந்தெந்த விஷயங்களுக்கு எவ்வளவு செலவாகும் என்பதை முன்கூட்டியே கணக்கிட்டு,
                        கடன் சுமை இல்லாத திருமணத்தை நடத்துங்கள்.
                    </p>
                </header>

                {/* Tool Component */}
                <BudgetCalculator />

                {/* SEO Content */}
                <article className="prose prose-lg max-w-none text-gray-700 space-y-8 mt-16 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            தமிழக திருமணங்களில் முக்கிய செலவுகள்
                        </h2>
                        <p>
                            தமிழர் திருமணங்களில் பாரம்பரியமாக கீழ்க்கண்ட விஷயங்களுக்கு அதிக முக்கியத்துவம் மற்றும்
                            பொருள் செலவிடப்படுகிறது:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            <div className="bg-yellow-50 p-6 rounded-xl">
                                <h3 className="font-bold text-yellow-900 mb-2">👑 தங்கம் (Gold)</h3>
                                <p className="text-sm text-gray-700">
                                    மொத்த செலவில் 30-40% வரை தங்க நகைகளுக்காகவே செலவிடப்படுகிறது.
                                    இது ஒரு சேமிப்பாகவும் பார்க்கப்படுகிறது.
                                </p>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-xl">
                                <h3 className="font-bold text-purple-900 mb-2">🏩 மண்டபம் (Venue)</h3>
                                <p className="text-sm text-gray-700">
                                    முகூர்த்த நாட்கள் மற்றும் வசதிகளைப் பொறுத்து மண்டப வாடகை மாறுபடும்.
                                </p>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-xl">
                                <h3 className="font-bold text-orange-900 mb-2">🍱 விருந்து (Feast)</h3>
                                <p className="text-sm text-gray-700">
                                    "அறுசுவை உணவு" - வந்தவார்களுக்கு தரமான உணவு அளிப்பதே தமிழர் பண்பாடு.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            பட்ஜெட் திட்டமிடல் குறிப்புகள்
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>
                                    <strong>முக்கியத்துவத்திற்கு ஏற்ப செலவிடுங்கள்:</strong> அலங்காரத்தை விட உணவிற்கும்,
                                    ஆடம்பரத்தை விட நகைகளுக்கும் முன்னுரிமை கொடுங்கள்.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>
                                    <strong>10% கூடுதல் நிதி:</strong> எப்போதும் உங்கள் பட்ஜெட்டை விட 10-15% தொகை
                                    கையில் இருப்பது அவசர செலவுகளுக்கு உதவும்.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span>
                                    <strong>விருந்தினர் பட்டியல்:</strong> விருந்தினர்களின் எண்ணிக்கையே திருமண செலவை
                                    தீர்மானிக்கும் முக்கிய காரணி. <Link href="/tools/thirumana-thayaripu" className="text-primary hover:underline">திருமண தயாரிப்பு பட்டியல்</Link> மூலம் இதை நிர்வகிக்கலாம்.
                                </span>
                            </li>
                        </ul>
                    </section>
                </article>
            </div>
        </div>
    );
}
