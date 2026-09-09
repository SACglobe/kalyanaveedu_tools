import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 அக்டோபர் சுப முகூர்த்த நாட்கள் — ஐப்பசி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 அக்டோபர் மாதத்திற்கான 2 சுப முகூர்த்த நாட்கள், தீபாவளி பண்டிகை சிறப்பு, துலா ஸ்நானம் மகத்துவம் மற்றும் மழைக்கால திருமண வழிகாட்டி.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'ஐப்பசி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'october wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-october`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-10-25","2026-10-30"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 அக்டோபர் சுப முகூர்த்த நாட்கள் — ஐப்பசி மாத திருமண தேதிகள்',
                    description: '2026 அக்டோபர் மாதத்திற்கான 2 சுப முகூர்த்த நாட்கள், தீபாவளி பண்டிகை சிறப்பு, துலா ஸ்நானம் மகத்துவம் மற்றும் மழைக்கால திருமண வழிகாட்டி.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-10-03',
                    slug: '/blog/subha-muhurtham-2026-october'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 அக்டோபர் சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-october' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | ஐப்பசி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 அக்டோபர் சுப முகூர்த்த நாட்கள் — ஐப்பசி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 அக்டோபர் சுப முகூர்த்த நாட்கள் — ஐப்பசி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="10 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    ஐப்பசி மாதம் என்பது தமிழகத்தில் பருவமழையின் குளுமையும், தீபாவளி பண்டிகையின் பட்டாசு வெளிச்சமும் சங்கமிக்கும் மகிழ்ச்சியான மாதமாகும். காவேரி நதியில் சகல புண்ணிய தீர்த்தங்களும் சங்கமிக்கும் துலா ஸ்நான மாதம் என்று வர்ணிக்கப்படும் அக்டோபர் 2026ல், தீபாவளி பண்டிகைக்குப் பிந்தைய காலத்தில் 2 அருமையான சுப முகூர்த்த நாட்கள் அமைந்துள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    ஐப்பசி மாத திருமணத்தின் ஆன்மீக ரகசியம்
                </h2>
                <p>
                    துலாம் ராசியில் சூரிய பகவான் சஞ்சரிக்கும் மாதமே ஐப்பசி மாதமாகும். துலாம் என்பது தராசு போன்ற சமநிலையைக் குறிக்கும் சுக்கிரனின் வீடாகும். இந்த மாதத்தில் திருமணம் செய்யும் தம்பதியினருக்கு இன்ப துன்பங்களை சமமாக பாவித்து வாழ்க்கையை ஆனந்தமாக நடத்தும் மனப்பக்குவம் எளிதில் வாய்க்கும்.
                </p>
                <p>
                    ஐப்பசி பௌர்ணமியில் சிவாலயங்களில் நடைபெறும் அன்னாபிஷேகம் உலகிற்கு உணவளிக்கும் பரம்பொருளின் கருணையை வெளிப்படுத்துகிறது. இம்மாதத்தில் தாலி கட்டும் தம்பதியர் இல்லத்தில் அன்னபூரணியின் அருளால் எக்காலத்திலும் உணவுப் பஞ்சமோ வறுமையோ வராது என்பது ஐதீகம்.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 தீபாவளிக்குப் பிந்தைய புதிய தொடக்கம்
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        அக்டோபர் 25 மற்றும் 30 ஆகிய தேதிகள் தீபாவளி பண்டிகை கொண்டாட்டங்களுக்குப் பின் அமைவதால், உறவினர்கள் அனைவரும் புத்தாடை அணிந்து புத்துணர்ச்சியோடு திருமணத்திற்கு வர வசதியாக இருக்கும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 அக்டோபர் மாத சுப முகூர்த்த நாட்கள் பட்டியல்
                </h2>
                <p>
                    அக்டோபர் 2026ல் அமைந்துள்ள 2 சுப முகூர்த்த நாட்கள்:
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
                    மழைக்கால திருமண மேலாண்மை ஆலோசனைகள்
                </h2>
                <p>
                    அக்டோபர் மாதத்தில் வடகிழக்கு பருவமழை தீவிரமடைய வாய்ப்புள்ளதால் கீழ்க்கண்ட முன்னெச்சரிக்கைகள் அவசியம்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>நீர் தேங்காத மண்டப தேர்வு:</strong> தாழ்வான பகுதிகளில் இருக்கும் மண்டபங்களைத் தவிர்த்து, மழைநீர் தடையின்றி வெளியேறும் மேடான பகுதிகளில் அமைந்த மண்டபங்களை தேர்வு செய்யுங்கள்.
                    </li>
                    <li>
                        <strong>ஜெனரேட்டர் மற்றும் பவர் பேக்கப்:</strong> கனமழை மற்றும் காற்று காரணமாக மின்தடை ஏற்பட வாய்ப்புள்ளதால், தடையில்லா மின்சாரம் வழங்கும் சக்திவாய்ந்த ஜெனரேட்டர் வசதியை உறுதி செய்துகொள்ளுங்கள்.
                    </li>
                    <li>
                        <strong>மூடப்பட்ட கார் பார்க்கிங்:</strong> விருந்தினர்கள் மழையில் நனையாமல் மண்டபத்திற்குள் நுழைய போர்டிகோ (Portico) வசதி மற்றும் குடைகள் ஏற்பாடு செய்வது அவர்களின் நன்மதிப்பைப் பெறும்.
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
                    currentSlug="/blog/subha-muhurtham-2026-october" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
