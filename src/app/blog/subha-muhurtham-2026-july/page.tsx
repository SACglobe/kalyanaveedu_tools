import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 ஜூலை சுப முகூர்த்த நாட்கள் | July 2026 Muhurtham Dates',
    description: '2026 ஜூலை மாதத்திற்கான சிறந்த சுப முகூர்த்த நாட்கள். July 2026 திருமண தேதிகள் மற்றும் நல்ல நேரங்களை இங்கே சரிபார்க்கவும்.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-july`,
    },
};

export default function MuhurthamPage() {
    const dates = ['2026-07-02', '2026-07-05', '2026-07-12'];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 ஜூலை சுப முகூர்த்த நாட்கள் | July 2026 Muhurtham Dates',
                    description: '2026 ஜூலை மாதத்திற்கான சிறந்த சுப முகூர்த்த நாட்கள். July 2026 திருமண தேதிகள் மற்றும் நல்ல நேரங்களை இங்கே சரிபார்க்கவும்.',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-03-01',
                    slug: '/blog/subha-muhurtham-2026-july'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'சுப முகூர்த்த நாட்கள் ஜூலை 2026', item: '/blog/subha-muhurtham-2026-july' }
                    ]
                }}
            />
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 ஜூலை சுப முகூர்த்த நாட்கள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 ஜூலை முகூர்த்த நாட்கள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="சித்ரை செல்வன்" updatedDate="மார்ச் 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl">
                    2026 ஆம் ஆண்டு ஜூலை மாதத்தில் திருமணம் செய்யத் திட்டமிட்டுள்ளீர்களா? 
                    இந்த மாதத்தில் மொத்தம் 3 சுப முகூர்த்த நாட்கள் உள்ளன. 
                    சரியான நாளைத் தேர்ந்தெடுப்பது உங்கள் திருமண வாழ்வின் மகிழ்ச்சியான தொடக்கத்திற்கு அடித்தளமாகும்.
                </p>

                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm my-8">
                    <table className="w-full text-left">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-4">தேதி (Date)</th>
                                <th className="p-4">கிழமை (Day)</th>
                                <th className="p-4">விவரம் (Details)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {dates.map((date) => (
                                <tr key={date} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-bold">{date.split('-')[2]}-{date.split('-')[1]}-{date.split('-')[0]}</td>
                                    <td className="p-4">{new Date(date).toLocaleDateString('ta-IN', { weekday: 'long' })}</td>
                                    <td className="p-4 text-sm">சுப முகூர்த்தம், வளர்பிறை / தேய்பிறை விபரங்களுக்கு பஞ்சாங்கம் பார்க்கவும்.</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
                    <h3 className="font-bold text-orange-900 mb-2">💡 குறிப்பு:</h3>
                    <p className="text-orange-800 text-sm">
                        மேலே குறிப்பிட்டுள்ள தேதிகள் பொதுவான சுப முகூர்த்த நாட்கள் ஆகும். 
                        உங்கள் நட்சத்திரம் மற்றும் ராசிக்கு ஏற்ற சரியான நேரத்தை அறிய உங்கள் 
                        குடும்ப ஜோதிடரை அணுகுவது சிறந்தது.
                    </p>
                </div>

                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🛠️</span> திருமணத் தயாரிப்பிற்கு உதவும் கருவிகள்
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href="/tools/thirumana-selavu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                            <span className="text-2xl">💰</span>
                            <div>
                                <div className="font-bold">பட்ஜெட் பிளானர்</div>
                                <div className="text-xs text-gray-500">செலவுகளைத் திட்டமிட</div>
                            </div>
                        </Link>
                        <Link href="/tools/thirumana-thayaripu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                            <span className="text-2xl">📝</span>
                            <div>
                                <div className="font-bold">வேலைகள் பட்டியல்</div>
                                <div className="text-xs text-gray-500">Checklist நிர்வகிக்க</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <AuthorBio 
                    name="சித்ரை செல்வன்"
                    role="Founder, Kalyana Veedu"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். தமிழ் திருமண திட்டமிடலை எளிமையாக்கும் நோக்கோடு செயல்படுகிறார்."
                />
                <RelatedArticles 
                    currentSlug="/blog/subha-muhurtham-2026-july" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
