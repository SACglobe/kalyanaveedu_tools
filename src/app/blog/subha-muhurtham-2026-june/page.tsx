import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 ஜூன் சுப முகூர்த்த நாட்கள் — ஆனி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 ஜூன் மாதத்திற்கான 6 சுப முகூர்த்த நாட்கள், ஆனி திருமஞ்சனம் சிறப்பு, பருவமழை தொடக்கம் மற்றும் திருமண திட்டமிடல் குறிப்புகள்.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'ஆனி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'june wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-june`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-06-04","2026-06-07","2026-06-17","2026-06-18","2026-06-24","2026-06-25"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 ஜூன் சுப முகூர்த்த நாட்கள் — ஆனி மாத திருமண தேதிகள்',
                    description: '2026 ஜூன் மாதத்திற்கான 6 சுப முகூர்த்த நாட்கள், ஆனி திருமஞ்சனம் சிறப்பு, பருவமழை தொடக்கம் மற்றும் திருமண திட்டமிடல் குறிப்புகள்.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-06-05',
                    slug: '/blog/subha-muhurtham-2026-june'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 ஜூன் சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-june' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | ஆனி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 ஜூன் சுப முகூர்த்த நாட்கள் — ஆனி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 ஜூன் சுப முகூர்த்த நாட்கள் — ஆனி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="06 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    கோடை வெப்பம் தணிந்து தென்மேற்கு பருவமழையின் குளிர்ந்த தென்றல் வீசத் தொடங்கும் இதமான மாதம் ஆனி மாதம். சிவபெருமானின் நடராஜர் வடிவிற்கு செய்யப்படும் ஆனி திருமஞ்சனம் நடைபெறும் புண்ணிய மாதமான ஜூன் 2026ல் மொத்தம் 6 சுப முகூர்த்த நாட்கள் அமைந்துள்ளன. அடுத்த மாதமான ஆடியில் சுப காரியங்கள் குறைவு என்பதால், ஆனி மாத முகூர்த்தங்களுக்கு தனி மவுசு உண்டு.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    ஆனி மாத திருமணத்தின் ஆன்மீக தத்துவம்
                </h2>
                <p>
                    மிதுன ராசியில் சூரியன் சஞ்சரிக்கும் காலமே ஆனி மாதமாகும். மிதுனம் என்பது புதனின் வீடாகும். புதன் பகவான் வித்தை, புத்தி கூர்மை, வாக்குவன்மை மற்றும் நகைச்சுவை உணர்வுக்கு காரணமானவர். எனவே ஆனி மாதத்தில் மணம் முடிக்கும் தம்பதியர் அறிவார்ந்த கலந்துரையாடல்களாலும், தமக்குள் இருக்கும் நல்ல புரிதலாலும் குடும்பத்தை வெற்றிகரமாக வழிநடத்துவார்கள்.
                </p>
                <p>
                    ஆனி உத்திரம் மற்றும் வளர்பிறை திருவோணம், அஸ்தம், சுவாதி போன்ற சுப நட்சத்திரங்கள் கூடிவரும் வேளையில் திருமணம் செய்வது நீண்ட ஆயுளையும் நற்பெயரையும் பெற்றுத் தரும்.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 ஆனி மாதத்தின் முக்கிய அட்வான்டேஜ்
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        ஆனி மாதத்தில் கோடை வெயிலின் தாக்கம் குறைந்து காற்று வீசத் தொடங்குவதால், திருமண சடங்குகள் செய்வதும், பட்டுப்புடவைகளில் மணப்பெண் மணமகன் வலம் வருவதும் மிகவும் சவுகரியமாக இருக்கும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 ஜூன் மாத சுப முகூர்த்த நாட்கள் பட்டியல்
                </h2>
                <p>
                    ஜூன் 2026ல் அமைந்துள்ள 6 சுப முகூர்த்த தேதிகள்:
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
                    ஆனி மாத திருமண நடைமுறை திட்டமிடல் குறிப்புகள்
                </h2>
                <p>
                    ஜூன் மாத திருமண ஏற்பாடுகளில் கவனிக்க வேண்டிய நடைமுறை வழிகாட்டுதல்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>பள்ளிகள் திறக்கும் பருவம்:</strong> ஜூன் முதல் வாரத்தில் பள்ளிகள் மற்றும் கல்லூரிகள் திறக்கப்படும். எனவே பள்ளிக்கு செல்லும் குழந்தைகள் உள்ள குடும்பங்கள் விடுமுறைக்கு ஏற்ப பயணத்தை திட்டமிட முன்கூட்டியே அழைப்பிதழ் கொடுக்க வேண்டும்.
                    </li>
                    <li>
                        <strong>பருவமழை முன்னெச்சரிக்கை:</strong> ஜூன் மாத இறுதியில் தென்மேற்கு பருவமழை ஆங்காங்கே பெய்யத் தொடங்கும். எனவே திறந்தவெளி கார்டன் திருமணங்களை விட தகுந்த மேற்கூரை வசதி கொண்ட மண்டபங்களை தேர்வு செய்வது பாதுகாப்பானது.
                    </li>
                    <li>
                        <strong>ஆடி மாதத்திற்கு முந்தைய அவசரம்:</strong> ஜூலை மத்தியில் ஆடி மாதம் பிறந்துவிடும் என்பதால், தாலி கட்டிய பின் மணமகள் வீட்டிற்கு செல்லும் விருந்து மற்றும் புகுந்த வீடு புகும் சடங்குகளை ஆனி மாதத்திற்குள்ளேயே முடிக்க திட்டமிடுங்கள்.
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
                    currentSlug="/blog/subha-muhurtham-2026-june" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
