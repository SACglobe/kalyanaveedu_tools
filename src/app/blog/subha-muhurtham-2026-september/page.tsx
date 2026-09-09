import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 செப்டம்பர் சுப முகூர்த்த நாட்கள் — புரட்டாசி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 செப்டம்பர் மாதத்திற்கான 3 சுப முகூர்த்த நாட்கள், விநாயகர் சதுர்த்தி சிறப்பு, புரட்டாசி மாத வழிபாடுகள் மற்றும் திருமண வழிகாட்டி.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'புரட்டாசி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'september wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-september`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-09-07","2026-09-13","2026-09-17"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 செப்டம்பர் சுப முகூர்த்த நாட்கள் — புரட்டாசி மாத திருமண தேதிகள்',
                    description: '2026 செப்டம்பர் மாதத்திற்கான 3 சுப முகூர்த்த நாட்கள், விநாயகர் சதுர்த்தி சிறப்பு, புரட்டாசி மாத வழிபாடுகள் மற்றும் திருமண வழிகாட்டி.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-09-05',
                    slug: '/blog/subha-muhurtham-2026-september'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 செப்டம்பர் சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-september' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | புரட்டாசி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 செப்டம்பர் சுப முகூர்த்த நாட்கள் — புரட்டாசி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 செப்டம்பர் சுப முகூர்த்த நாட்கள் — புரட்டாசி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="09 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    செப்டம்பர் மாதம் என்பது ஆவணி மாதத்தின் பக்தி மணம் கமழும் நிறைவையும், திருப்பதி வேங்கடேசப் பெருமாளின் புண்ணிய மாதமான புரட்டாசியின் வரவையும் இணைக்கும் பாலமாகும். விநாயகர் சதுர்த்தி விழாவுடன் தொடங்கும் செப்டம்பர் 2026ல், மொத்தம் 3 உன்னதமான சுப முகூர்த்த நாட்கள் அமையப்பெற்றுள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    செப்டம்பர் மாத முகூர்த்தங்களின் ஜோதிட சிறப்பு
                </h2>
                <p>
                    கன்னி ராசியில் சூரிய பகவான் பிரவேசிக்கும் மாதமே புரட்டாசி மாதமாகும். கன்னி ராசி புதனின் ஆட்சி மற்றும் உச்ச வீடாகும். இந்த மாதத்தில் வரும் சுப முகூர்த்தங்களில் திருமணம் புரிவோருக்கு சிறந்த நிர்வாக அறிவு, வணிக மேன்மை மற்றும் அமைதியான குடும்ப வாழ்க்கை அமையும்.
                </p>
                <p>
                    புரட்டாசி மாதத்தில் மஹாளய பட்சம் எனப்படும் முன்னோர்களை வழிபடும் நாட்கள் வருவதுண்டு. முன்னோர்களின் ஆசி இல்லாமல் எந்த சுப காரியமும் முழுமையடையாது என்பதால், அந்த நாட்களை தவிர்த்து வரும் வளர்பிறை தினங்கள் மற்றும் ஆவணி நிறைவு முகூர்த்தங்களில் திருமணம் நடத்துவது முன்னோர்களின் பரிபூரண ஆசியை பெற்றுத் தரும்.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 செப்டம்பர் 2026 முகூர்த்த பலன்கள்
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        செப்டம்பர் 7, 13 மற்றும் 17 ஆகிய தேதிகள் விநாயகர் சதுர்த்தி திருநாளுக்குப் பின் வருவதால், முழுமுதற் கடவுளான விக்னஹர்த்தாவின் அருளோடு எந்தவித தடங்கலுமின்றி சுப காரியங்கள் இனிதே நிறைவேறும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 செப்டம்பர் மாத சுப முகூர்த்த நாட்கள் அட்டவணை
                </h2>
                <p>
                    செப்டம்பர் 2026ல் அமைந்துள்ள 3 சுப முகூர்த்த நாட்கள்:
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
                    புரட்டாசி மாத திருமண ஏற்பாட்டு வழிகாட்டல்
                </h2>
                <p>
                    செப்டம்பர் மாத திருமணங்களை திட்டமிடும் போது கவனிக்க வேண்டிய முக்கிய விவரங்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>முழுமையான சைவ விருந்து (Pure Vegetarian Feast):</strong> புரட்டாசி மாதத்தில் பெரும்பான்மையான தமிழ் மக்கள் விரதம் இருந்து அசைவ உணவுகளைத் தவிர்ப்பர். எனவே திருமண விருந்து 100% தூய சைவ உணவாக இருப்பதை உறுதி செய்வது அனைத்து விருந்தினர்களையும் திருப்திப்படுத்தும்.
                    </li>
                    <li>
                        <strong>அறுசுவை பாயாசம் &amp; வடை:</strong> பருப்பு வடை, ஆமை வடை, கதம்ப சாம்பார் மற்றும் அவல் பாயாசம் போன்ற பாரம்பரிய பிராமண மற்றும் செட்டிநாட்டு சைவ விருந்து மெனுவை தேர்ந்தெடுப்பது விருந்தினர்களுக்கு மறக்க முடியாத அனுபவமாக அமையும்.
                    </li>
                    <li>
                        <strong>நவராத்திரி ஷாப்பிங் சூழல்:</strong> செப்டம்பர் இறுதியில் நவராத்திரி தொடங்கும் என்பதால் ஜவுளி மற்றும் மளிகைப் பொருட்களின் வரத்து அதிகமாக இருக்கும்.
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
                    currentSlug="/blog/subha-muhurtham-2026-september" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
