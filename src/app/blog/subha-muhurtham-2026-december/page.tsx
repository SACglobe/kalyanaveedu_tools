import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 டிசம்பர் சுப முகூர்த்த நாட்கள் — மார்கழி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 டிசம்பர் மாதத்திற்கான 5 சுப முகூர்த்த நாட்கள், மார்கழி மாத வழிபாடுகள், ஆண்டின் இறுதி திருமண தேதிகள் மற்றும் திட்டமிடல் வழிகாட்டி.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'மார்கழி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'december wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-december`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-12-04","2026-12-06","2026-12-10","2026-12-13","2026-12-14"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 டிசம்பர் சுப முகூர்த்த நாட்கள் — மார்கழி மாத திருமண தேதிகள்',
                    description: '2026 டிசம்பர் மாதத்திற்கான 5 சுப முகூர்த்த நாட்கள், மார்கழி மாத வழிபாடுகள், ஆண்டின் இறுதி திருமண தேதிகள் மற்றும் திட்டமிடல் வழிகாட்டி.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-12-03',
                    slug: '/blog/subha-muhurtham-2026-december'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 டிசம்பர் சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-december' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | மார்கழி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 டிசம்பர் சுப முகூர்த்த நாட்கள் — மார்கழி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 டிசம்பர் சுப முகூர்த்த நாட்கள் — மார்கழி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="12 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    டிசம்பர் மாதம் என்பது ஆண்டின் நிறைவு மாதமாகவும், திருப்பாவை மற்றும் திருவெம்பாவை பாடி இறைவனைத் துதிக்கும் பக்தி மயமான மார்கழி மாதத்தின் வரவாகவும் அமைகிறது. பொதுவாக மார்கழி மாதத்தில் திருமணங்கள் செய்யப்பட மாட்டாது என்ற கருத்து இருந்தாலும், டிசம்பர் முதல் இரு வாரங்களில் (மார்கழி பிறப்பதற்கு முன்) 5 மிகச்சிறந்த சுப முகூர்த்த நாட்கள் அமையப்பெற்றுள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    டிசம்பர் முகூர்த்தங்களின் முக்கியத்துவமும் மார்கழி விளக்கமும்
                </h2>
                <p>
                    தனுசு ராசியில் சூரியன் பிரவேசிக்கும் காலமே மார்கழி மாதமாகும். பகவத் கீதையில் பகவான் கிருஷ்ணர் &quot;மாதங்களில் நான் மார்கழி&quot; என்று கூறுகிறார். மார்கழி என்பது தேவலோகத்தின் பிரம்ம முகூர்த்த காலமாகும். இது முழுக்க முழுக்க ஆன்மீக சாதனைக்கும், இறை வழிபாட்டிற்கும் ஒதுக்கப்பட்ட மாதம் என்பதால் உலகியல் இன்பங்களை குறிக்கும் திருமண சடங்குகள் இம்மாதத்தின் இரண்டாம் பாதியில் தவிர்க்கப்படுகின்றன.
                </p>
                <p>
                    ஆனால் டிசம்பர் 14 வரையிலான தேதிகள் கார்த்திகை மாதத்தின் நிறைவுப் பகுதியாகும். இந்த தேதிகள் 2026 ஆம் ஆண்டின் கடைசி திருமண தேதிகளாகும். வெளிநாடுகளில் வசிக்கும் NRI குடும்பங்கள் ஆண்டு இறுதி விடுமுறையில் தமிழ்நாட்டிற்கு வரும் காலம் இது என்பதால், இந்த 5 தேதிகளுக்கு அபரிமிதமான வரவேற்பு உண்டு.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 2026 ஆம் ஆண்டின் கடைசி முகூர்த்த வாய்ப்பு
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        டிசம்பர் 14 ஆம் தேதிக்குப் பிறகு அடுத்த முகூர்த்தம் 2027 ஜனவரி பொங்கலுக்குப் பின் தை மாதத்தில்தான் வரும். எனவே 2026க்குள் மணம் முடிக்க நினைப்பவர்கள் இந்த 5 தேதிகளை பயன்படுத்திக்கொள்ளலாம்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 டிசம்பர் மாத சுப முகூர்த்த நாட்கள் பட்டியல்
                </h2>
                <p>
                    டிசம்பர் 2026ல் அமைந்துள்ள 5 சுப முகூர்த்த தேதிகள்:
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
                    டிசம்பர் திருமணங்களுக்கான நடைமுறை ஆலோசனைகள்
                </h2>
                <p>
                    ஆண்டின் இறுதித் திருமணங்களை வெற்றிகரமாக நடத்தி முடிக்க சில வழிகாட்டல்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>ஆண்டு இறுதி பயண நெரிசல்:</strong> கிறிஸ்துமஸ் மற்றும் புத்தாண்டு விடுமுறையை ஒட்டி விமானம், ரயில் மற்றும் பேருந்து கட்டணங்கள் உயரும். எனவே வெளியூர் உறவினர்களுக்கான டிக்கெட்டுகளை 3-4 மாதங்களுக்கு முன்பே புக் செய்துவிடுங்கள்.
                    </li>
                    <li>
                        <strong>குளிர்கால மேடை அலங்காரம்:</strong> டிசம்பர் பனிப்பொழிவிற்கு ஏற்றவாறு மெரூன், அடர் சிவப்பு மற்றும் தங்க நிற தீம்களில் மண்டப மேடையை அலங்கரிப்பது கண்களுக்கு குளிர்ச்சியாகவும் கம்பீரமாகவும் இருக்கும்.
                    </li>
                    <li>
                        <strong>அடுத்த ஆண்டிற்கான தயாரிப்பு:</strong> 2027 தொடக்கத்தில் திருமணம் திட்டமிடுவோர் எங்களது திருமண முகூர்த்த நாட்காட்டி வழிகாட்டியைப் பயன்படுத்தி இப்போதே தேதிகளை தெரிவு செய்யலாம்.
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
                    currentSlug="/blog/subha-muhurtham-2026-december" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
