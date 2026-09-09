import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 ஜூலை சுப முகூர்த்த நாட்கள் — ஆடி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 ஜூலை மாதத்திற்கான 3 சுப முகூர்த்த நாட்கள், ஆடி மாத மரபு உண்மைகள், நிச்சயதார்த்தம் மற்றும் திருமண வழிகாட்டி.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'ஆடி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'july wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-july`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-07-02","2026-07-05","2026-07-12"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 ஜூலை சுப முகூர்த்த நாட்கள் — ஆடி மாத திருமண தேதிகள்',
                    description: '2026 ஜூலை மாதத்திற்கான 3 சுப முகூர்த்த நாட்கள், ஆடி மாத மரபு உண்மைகள், நிச்சயதார்த்தம் மற்றும் திருமண வழிகாட்டி.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-07-05',
                    slug: '/blog/subha-muhurtham-2026-july'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 ஜூலை சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-july' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | ஆடி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 ஜூலை சுப முகூர்த்த நாட்கள் — ஆடி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 ஜூலை சுப முகூர்த்த நாட்கள் — ஆடி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="07 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    ஜூலை மாதம் என்பது ஆனி மாதத்தின் நிறைவுப் பகுதியையும், ஆன்மீக பக்தி நிறைந்த ஆடி மாதத்தின் தொடக்கத்தையும் குறிக்கிறது. பொதுவாக &quot;ஆடி மாதம் திருமணம் செய்யலாமா?&quot; என்ற சந்தேகம் பலருக்கும் உண்டு. ஜூலை மாதத்தின் முதல் இரண்டு வாரங்களில் (ஆடி மாதம் தொடங்குவதற்கு முன்) 3 மிகச்சிறந்த சுப முகூர்த்த தேதிகள் அமைந்துள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    ஆடி மாதம் பற்றிய பாரம்பரிய உண்மைகள் மற்றும் ஜோதிட விளக்கம்
                </h2>
                <p>
                    சூரியன் கடக ராசியில் சஞ்சரிக்கும் காலமே ஆடி மாதமாகும். இது தட்சிணாயன புண்ணிய காலத்தின் தொடக்கமாகும். இக்காலத்தில் அம்மன் வழிபாடு, குலதெய்வ பூஜைகள் மற்றும் ஆன்மீக சாதனைகளுக்கு அதிக முக்கியத்துவம் தரப்படுகிறது. பண்டைய காலத்தில் ஆடி மாதத்தில் புதுமணத் தம்பதியர் சேர்ந்திருந்தால் சித்திரை மாதத்தில் குழந்தை பிறக்கும், அது கோடை வெயிலின் உச்சமாக இருப்பதால் தாய் சேய் இருவருக்கும் உகந்ததல்ல என்ற காரணத்தினாலேயே தம்பதியரை பிரித்து வைக்கும் வழக்கம் உருவானது.
                </p>
                <p>
                    ஆனால் நவீன காலத்தில் அனைத்து மருத்துவ வசதிகளும் வந்துவிட்ட சூழலில், ஆடி மாதத்தில் நிச்சயதார்த்தம் செய்தல், பொன் உருக்குதல் மற்றும் திருமண மண்டபம் முன்பதிவு செய்தல் போன்ற ஆயத்தப் பணிகளை தாராளமாக செய்யலாம். ஜூலை முதல் வாரத்தில் அமையும் முகூர்த்தங்கள் மிகவும் விசேஷமானவை.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 ஜூலை மாத முகூர்த்த நாட்களின் அருமை
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        ஜூலை 2, 5 மற்றும் 12 ஆகிய தேதிகள் ஆடி மாதம் பிறப்பதற்கு முன்பாகவே வருவதால், எவ்வித தயக்கமும் இன்றி திருமணங்களை மகிழ்ச்சியாக நடத்தலாம்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 ஜூலை மாத சுப முகூர்த்த நாட்கள் அட்டவணை
                </h2>
                <p>
                    ஜூலை 2026ல் அமைந்துள்ள 3 சுப முகூர்த்த தேதிகள்:
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
                        மேலே குறிப்பிட்டுள்ள தேதிகள் வாக்கிய மற்றும் திருக்கணித பஞ்சாங்கங்களின் அடிப்படையில் அமைந்த பொதுவான சுப முகூர்த்த நாட்கள் ஆகும். உங்கள் குடும்ப வழக்கம், மணமகன் மற்றும் மணமகளின் பிறந்த நட்சத்திரம், ராசி மற்றும் சந்திராஷ்டமம் ஆகியவற்றை சரிபார்த்து பொருத்தமான நல்ல நேரத்தை தேர்ந்தெடுக்க உங்கள் குடும்ப ஜோதிடரை அணுகுவது சிறந்தது.
                    </p>
                </div>


                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    ஜூலை மாத திருமண திட்டமிடல் மற்றும் சலுகைகள்
                </h2>
                <p>
                    ஜூலை மாதத்தில் திருமணத்தை ஏற்பாடு செய்வதன் நடைமுறை நன்மைகள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>மண்டப கட்டண சலுகைகள் (Discount Season):</strong> ஜூலை மாதத்தில் திருமணங்களின் எண்ணிக்கை குறைவு என்பதால் பல முன்னணி திருமண மண்டபங்கள் மற்றும் கேட்டரிங் நிறுவனங்கள் சிறப்பு கட்டண தள்ளுபடிகளை வழங்குவர்.
                    </li>
                    <li>
                        <strong>ஆடி தள்ளுபடி ஜவுளி ஷாப்பிங்:</strong> ஜூலை மாத மத்தியில் தமிழ்நாட்டின் முன்னணி ஜவுளி கடைகளில் ஆடி தள்ளுபடி தொடங்கும். திருமணத்திற்குத் தேவையான பட்டுப்புடவைகள், வேஷ்டி சட்டைகள் மற்றும் அன்பளிப்பு துணிகளை மிகக் குறைந்த விலையில் வாங்க இதுவே மிகச்சிறந்த வாய்ப்பு!
                    </li>
                    <li>
                        <strong>ஆவணி திருமணங்களுக்கான தயாரிப்பு:</strong> அடுத்த மாதமான ஆவணியில் திருமணம் செய்யவிருப்பவர்கள், தங்களது திருமண வேலைகள் பட்டியலை (Checklist) ஜூலை மாதத்திலேயே இறுதி செய்துவிடுவது நிம்மதி தரும்.
                    </li>
                </ul>
    

                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🛠️</span> திருமணத் தயாரிப்பிற்கு உதவும் இலவச கருவிகள்
                    </h3>
                    <p className="text-gray-700 mb-6">
                        திருமண ஏற்பாடுகளை எளிமையாக்க மற்றும் பணத்தை சேமிக்க எங்கள் இலவச டிஜிட்டல் கருவிகளைப் பயன்படுத்துங்கள்:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href="/tools/thirumana-selavu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">💰</span>
                            <div>
                                <div className="font-bold text-gray-900">பட்ஜெட் பிளானர்</div>
                                <div className="text-xs text-gray-500">செலவுகளைத் திட்டமிட</div>
                            </div>
                        </Link>
                        <Link href="/tools/thirumana-thayaripu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">📝</span>
                            <div>
                                <div className="font-bold text-gray-900">வேலைகள் பட்டியல்</div>
                                <div className="text-xs text-gray-500">Checklist நிர்வகிக்க</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <AuthorBio 
                    name="ஜோதிடர் வேங்கடேஷ்"
                    role="Tamil Panchangam Expert"
                    bio="வேங்கடேஷ் பஞ்சாங்க கணிப்பு மற்றும் சுப முகூர்த்த தேர்வில் 20 ஆண்டுகள் அனுபவம் கொண்டவர். ஜோதிட சாஸ்திரப்படி திருமண நாட்கள் தேர்வு செய்வதில் நிபுணர்."
                />
                <RelatedArticles 
                    currentSlug="/blog/subha-muhurtham-2026-july" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
