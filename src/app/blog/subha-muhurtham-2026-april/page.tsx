import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 ஏப்ரல் சுப முகூர்த்த நாட்கள் — சித்திரை புத்தாண்டு திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 ஏப்ரல் மாதத்திற்கான 7 சிறந்த சுப முகூர்த்த நாட்கள், தமிழ் புத்தாண்டு சிறப்பு, அட்சய திருதியை மகத்துவம் மற்றும் திருமண ஆலோசனைகள்.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'சித்திரை மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'april wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-april`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-04-06","2026-04-12","2026-04-13","2026-04-16","2026-04-20","2026-04-23","2026-04-30"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 ஏப்ரல் சுப முகூர்த்த நாட்கள் — சித்திரை புத்தாண்டு திருமண தேதிகள்',
                    description: '2026 ஏப்ரல் மாதத்திற்கான 7 சிறந்த சுப முகூர்த்த நாட்கள், தமிழ் புத்தாண்டு சிறப்பு, அட்சய திருதியை மகத்துவம் மற்றும் திருமண ஆலோசனைகள்.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-04-05',
                    slug: '/blog/subha-muhurtham-2026-april'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 ஏப்ரல் சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-april' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | சித்திரை மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 ஏப்ரல் சுப முகூர்த்த நாட்கள் — சித்திரை புத்தாண்டு திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 ஏப்ரல் சுப முகூர்த்த நாட்கள் — சித்திரை புத்தாண்டு திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="04 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    சித்திரை மாதம் தமிழ் புத்தாண்டு பிறக்கும் மங்களகரமான முதல் மாதமாகும். சூரிய பகவான் மேஷ ராசியில் உச்சம் பெறும் இக்காலம், புதிய வாழ்வைத் தொடங்குவோருக்கு அளவில்லாத ஆற்றலையும் பிரகாசமான எதிர்காலத்தையும் வழங்கும். ஏப்ரல் 2026ல் மொத்தம் 7 அற்புதமான சுப முகூர்த்த நாட்கள் அமையப்பெற்றுள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    சித்திரை மாத திருமணத்தின் பிரத்யேக சிறப்புகள்
                </h2>
                <p>
                    தமிழ் கலாச்சாரத்தில் சித்திரை மாதம் என்பது சித்திரை விஷு, மதுரை சித்திரைத் திருவிழா (மீனாட்சி திருக்கல்யாணம்) மற்றும் அட்சய திருதியை போன்ற மகா புண்ணிய தினங்களைக் கொண்ட மாதமாகும். சூரியன் உச்சம் பெற்று அதிக பலத்துடன் விளங்குவதால், இம்மாதத்தில் திருமணம் முடிக்கும் தம்பதியினருக்கு ஆளுமைத் திறன், ஆரோக்கியம் மற்றும் சமுதாயத்தில் உயர்ந்த அந்தஸ்து உண்டாகும்.
                </p>
                <p>
                    அட்சய திருதியை காலத்தில் பொன் நகைகள் வாங்கி மாங்கல்யம் செய்வது அழியாத செல்வச் செழிப்பைத் தரும் என்பது மரபு. சித்திரை வளர்பிறை முகூர்த்தங்கள் வம்சவிருத்திக்கும், குடும்பத்தில் ஒற்றுமை தழைப்பதற்கும் உகந்த நாட்களாக கருதப்படுகின்றன.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 ஏப்ரல் 2026 முகூர்த்த நாட்களின் பலன்
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        ஏப்ரல் 12 மற்றும் 13 ஆகிய தேதிகள் தமிழ் புத்தாண்டை ஒட்டி வருவதால், புத்தாண்டு தொடக்கத்திலேயே புதுமணத் தம்பதியர் இல்வாழ்க்கையை தொடங்குவது இரட்டிப்பு மங்களத்தை உண்டாக்கும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 ஏப்ரல் மாத சுப முகூர்த்த நாட்கள் அட்டவணை
                </h2>
                <p>
                    ஏப்ரல் 2026ல் அமைந்துள்ள 7 சுப முகூர்த்த நாட்கள்:
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
                    கோடை திருமணத்தை எதிர்கொள்ளும் சிறந்த வழிகள்
                </h2>
                <p>
                    சித்திரை வெயில் தொடங்கும் காலம் என்பதால் ஏப்ரல் திருமணங்களில் பின்வரும் வசதிகளை முன்கூட்டியே திட்டமிடுவது நலம்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>AC மண்டபங்கள் கட்டாயம்:</strong> அக்னி நட்சத்திர காலம் தொடங்கும் சூழல் நிலவுவதால், மணமக்கள் மற்றும் விருந்தினர்களின் வசதிக்காக முழுமையாக குளிர்சாதன வசதி (Air Conditioned) உள்ள மண்டபங்களைத் தேர்ந்தெடுப்பது அவசியம்.
                    </li>
                    <li>
                        <strong>இளநீர் &amp; மோர் வரவேற்பு:</strong> மண்டப முகப்பில் வழக்கமான பன்னீர் தெளித்தலுடன் கூடுதலாக, இயற்கை இளநீர் அல்லது நன்னாரி சர்பத் வழங்கி விருந்தினர்களை வரவேற்பது பெரும் வரவேற்பைப் பெறும்.
                    </li>
                    <li>
                        <strong>மாலை வரவேற்பு விழா (Evening Reception):</strong> வெயிலின் தாக்கத்தைத் தவிர்க்க, திருமண வரவேற்பு நிகழ்ச்சியை மாலை 6:30 மணிக்கு மேல் திட்டமிடுவது சிறந்தது.
                    </li>
                    <li>
                        <strong>மெல்லிய பட்டு ஆடைகள்:</strong> அதிக எடையுள்ள ஜரிகைப் புடவைகளைத் தவிர்த்து, மென்மையான லைட்-வெயிட் காஞ்சிபுரம் பட்டு அல்லது காதி பட்டுப் புடவைகளை மணப்பெண்ணிற்கு தேர்வு செய்வது வசதியானது.
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
                    currentSlug="/blog/subha-muhurtham-2026-april" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
