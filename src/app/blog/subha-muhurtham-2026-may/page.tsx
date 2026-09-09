import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 மே சுப முகூர்த்த நாட்கள் — வைகாசி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 மே மாதத்திற்கான 6 சுப முகூர்த்த நாட்கள், வைகாசி விசாகம் சிறப்பு, கோடை விடுமுறை திருமண திட்டமிடல் மற்றும் செலவு கட்டுப்பாடு.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'வைகாசி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'may wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-may`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-05-08","2026-05-13","2026-05-14","2026-05-18","2026-05-28","2026-05-29"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 மே சுப முகூர்த்த நாட்கள் — வைகாசி மாத திருமண தேதிகள்',
                    description: '2026 மே மாதத்திற்கான 6 சுப முகூர்த்த நாட்கள், வைகாசி விசாகம் சிறப்பு, கோடை விடுமுறை திருமண திட்டமிடல் மற்றும் செலவு கட்டுப்பாடு.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-05-05',
                    slug: '/blog/subha-muhurtham-2026-may'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 மே சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-may' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | வைகாசி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 மே சுப முகூர்த்த நாட்கள் — வைகாசி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 மே சுப முகூர்த்த நாட்கள் — வைகாசி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="05 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    வைகாசி மாதம் தமிழர்களின் மிக விருப்பமான திருமண மாதமாகும். முருகப்பெருமான் அவதரித்த வைகாசி விசாகம் நிறைந்த இந்த மாதம், கோடை விடுமுறைக் காலத்தோடு இணைந்து வருவதால் குடும்பத்தினர், நண்பர்கள் மற்றும் வெளியூர் உறவினர்கள் அனைவரும் ஒன்று கூடி விமரிசையாக கொண்டாட ஏற்றது. மே 2026ல் மொத்தம் 6 மங்களகரமான சுப முகூர்த்த தேதிகள் உள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    வைகாசி மாத திருமணங்களின் ஆன்மீக மகத்துவம்
                </h2>
                <p>
                    ரிஷப ராசியில் சூரியன் பிரவேசிக்கும் வைகாசி மாதம், சுக்கிர பகவானின் ஆட்சிப் பலன் மேலோங்கி இருக்கும் காலமாகும். சுக்கிரன் என்பவர் களத்திர காரகன், அதாவது திருமண வாழ்விற்கும் காதலுக்கும் உரிய கிரகமாவார். எனவே வைகாசி மாதத்தில் திருமணம் புரிவோருக்கு இல்லற இன்பம், கலைகளில் ஆர்வம் மற்றும் அழகான இல்லம் போன்ற பாக்கியங்கள் எளிதில் கைகூடும்.
                </p>
                <p>
                    வைகாசி வளர்பிறை முகூர்த்தங்கள் குடும்பத்தில் மனசாந்தியையும், செல்வப் பெருக்கையும் தரும். விசாகம், அனுஷம், உத்திராடம் மற்றும் ரோகிணி நட்சத்திரங்கள் கூடிவரும் முகூர்த்த வேளைகளில் அம்மி மிதித்து அருந்ததி பார்ப்பது கூடுதல் புண்ணியத்தை சேர்க்கும்.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 வைகாசி முகூர்த்தத்திற்கு அதிக தேவை
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        கோடை விடுமுறை காலம் என்பதால் தமிழ்நாட்டின் அனைத்து முக்கிய நகரங்களிலும் திருமண மண்டபங்கள், சமையல் கலைஞர்கள் மற்றும் வாகன வாடகைக்கு உச்சபட்ச டிமாண்ட் இருக்கும். கடைசி நேர அவசரங்களைத் தவிர்க்க இப்போதே வேலைகளை தொடங்குங்கள்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 மே மாத சுப முகூர்த்த தேதிகள் அட்டவணை
                </h2>
                <p>
                    மே 2026ல் அமையப்பெற்றுள்ள 6 சிறந்த முகூர்த்த நாட்கள்:
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
                    கோடை விடுமுறை திருமண மேலாண்மை டிப்ஸ்
                </h2>
                <p>
                    மே மாதத் திருமணத்தை குளுகுளுவென நடத்தி முடிக்க சில நடைமுறை ஆலோசனைகள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>அதிகாலை முகூர்த்தம்:</strong> காலை 6:00 மணி முதல் 7:30 மணிக்குள் அமையும் பிரம்ம முகூர்த்த வேளையிலோ அல்லது 7:30 - 9:00 மணிக்குள் தாலி கட்டும் சடங்கை முடித்துவிடுவது வெப்பத்தின் தாக்கத்தை முற்றிலும் தவிர்க்கும்.
                    </li>
                    <li>
                        <strong>விருந்து மெனுவில் குளிர்ச்சியான உணவுகள்:</strong> வாழை இலையில் கெட்டித் தயிர் பச்சடி, வெள்ளரிக்காய் சாலட், மாம்பழ பாயாசம், நீர்மோர் மற்றும் மதிய உணவின் முடிவில் ஐஸ்கிரீம் அல்லது ரோஸ்மில்க் பரிமாறுவது விருந்தினர்களை பெரிதும் மகிழ்விக்கும்.
                    </li>
                    <li>
                        <strong>குழந்தைகளுக்கான சிறப்பு ஏற்பாடுகள்:</strong> கோடை விடுமுறை என்பதால் திருமணத்திற்கு அதிக குழந்தைகள் வருவார்கள். மண்டபத்தில் அவர்கள் பாதுகாப்பாக விளையாட ஒரு சிறிய பகுதி அல்லது கேம் கார்னர் அமைப்பது பெற்றோர்களுக்கு நிம்மதி தரும்.
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
                    currentSlug="/blog/subha-muhurtham-2026-may" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
