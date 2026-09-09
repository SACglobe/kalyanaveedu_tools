import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 நவம்பர் சுப முகூர்த்த நாட்கள் — கார்த்திகை மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 நவம்பர் மாதத்திற்கான 7 சுப முகூர்த்த நாட்கள், திருக்கார்த்திகை தீபம் சிறப்பு, சோமவார விரத பலன்கள் மற்றும் திருமண வழிகாட்டி.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'கார்த்திகை மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'november wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-november`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-11-01","2026-11-11","2026-11-13","2026-11-15","2026-11-16","2026-11-20","2026-11-29"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 நவம்பர் சுப முகூர்த்த நாட்கள் — கார்த்திகை மாத திருமண தேதிகள்',
                    description: '2026 நவம்பர் மாதத்திற்கான 7 சுப முகூர்த்த நாட்கள், திருக்கார்த்திகை தீபம் சிறப்பு, சோமவார விரத பலன்கள் மற்றும் திருமண வழிகாட்டி.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-11-03',
                    slug: '/blog/subha-muhurtham-2026-november'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 நவம்பர் சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-november' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | கார்த்திகை மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 நவம்பர் சுப முகூர்த்த நாட்கள் — கார்த்திகை மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 நவம்பர் சுப முகூர்த்த நாட்கள் — கார்த்திகை மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="11 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    கார்த்திகை மாதம் என்பது இல்லந்தோறும் அகல் விளக்கேற்றி இருள் நீக்கி ஒளி பெருக்கும் மங்களகரமான திருக்கார்த்திகை மாதமாகும். அக்னி பகவானின் வடிவாக விளங்கும் முருகப்பெருமானின் ஆசி நிறைந்த இந்த மாதம், தமிழ்நாட்டில் திருமணங்கள் மிகவும் கோலாகலமாக நடைபெறும் உன்னத காலமாகும். நவம்பர் 2026ல் மொத்தம் 7 அற்புதமான சுப முகூர்த்த நாட்கள் அமையப்பெற்றுள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    கார்த்திகை மாத திருமணத்தின் ஆன்மீக ஒளி
                </h2>
                <p>
                    விருச்சிக ராசியில் சூரியன் சஞ்சரிக்கும் மாதமே கார்த்திகை மாதமாகும். விருச்சிகம் என்பது செவ்வாய் பகவானின் ஆட்சி வீடாகும். செவ்வாய் என்பவர் தைரியம், பூமி லாபம் மற்றும் மங்களத்திற்கு அதிபதியாவார். எனவே கார்த்திகை மாதத்தில் திருமணம் புரியும் தம்பதியருக்கு சொந்த வீடு வாங்கும் யோகம், நிலபுலன்கள் சேரும் பாக்கியம் மற்றும் எதற்கும் அஞ்சாத தன்னம்பிக்கை உண்டாகும்.
                </p>
                <p>
                    கார்த்திகை சோமவார விரத நாட்களில் சிவபெருமானை வணங்கி தொடங்கும் இல்லறம், சகல தோஷங்களையும் நீக்கி தம்பதியரின் குலத்தை தழைக்கச் செய்யும். திருக்கார்த்திகை தீபத்தன்று ஏற்றப்படும் தீபங்கள் போல இவர்களின் இல்லற வாழ்வும் பிரகாசமாக விளங்கும் என்பது பெரியோர்களின் ஆசீர்வாதம்.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 7 முகூர்த்த நாட்களின் அரிய வாய்ப்பு
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        ஆண்டின் இறுதிப் பகுதியில் அதிகபட்சமாக 7 முகூர்த்த நாட்கள் நவம்பரில் மட்டுமே வருகின்றன. அடுத்த மாதமான மார்கழியில் திருமணங்கள் செய்யப்படாது என்பதால், 2026 ஆம் ஆண்டிற்குள் திருமணம் முடிக்க விரும்பும் பல குடும்பங்களுக்கு இந்த மாதம் ஒரு வரப்பிரசாதமாகும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 நவம்பர் மாத சுப முகூர்த்த நாட்கள் பட்டியல்
                </h2>
                <p>
                    நவம்பர் 2026ல் அமைந்துள்ள 7 சுப முகூர்த்த தேதிகள்:
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
                    குளிர்கால கார்த்திகை திருமண திட்டமிடல் டிப்ஸ்
                </h2>
                <p>
                    நவம்பர் மாத திருமணத்தை வெற்றிகரமாக நடத்த சில முக்கிய வழிகாட்டல்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>தீப மற்றும் விளக்கு அலங்காரங்கள்:</strong> கார்த்திகை மாதத்தின் சிறப்பம்சமே விளக்குகள்தான். மண்டப முகப்பில் பாரம்பரிய குத்துவிளக்குகள் மற்றும் மெழுகுவர்த்தி அலங்காரங்கள் (Fairy Lights) அமைப்பது திருமண மேடையை தேவலோகம் போல் மாற்றும்.
                    </li>
                    <li>
                        <strong>சூடான சுவையான பில்டர் காபி:</strong> பனிப்பொழிவு தொடங்கும் காலம் என்பதால், திருமண மண்டபத்தில் காலை மற்றும் மாலை நேரங்களில் சூடான கும்பகோணம் டிகிரி பில்டர் காபி மற்றும் மசாலா டீ வழங்குவது விருந்தினர்களை பெரிதும் கவரும்.
                    </li>
                    <li>
                        <strong>மண்டப புக் செய்வதில் வேகம் காட்டுங்கள்:</strong> 7 முகூர்த்த நாட்கள் இருந்தாலும் நவம்பரில் திருமணம் செய்வோர் எண்ணிக்கை மிக அதிகம். எனவே 5 மாதங்களுக்கு முன்பே மண்டபத்தை உறுதி செய்யுங்கள்.
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
                    currentSlug="/blog/subha-muhurtham-2026-november" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
