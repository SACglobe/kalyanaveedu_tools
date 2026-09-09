import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 பிப்ரவரி சுப முகூர்த்த நாட்கள் — மாசி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 பிப்ரவரி மாதத்திற்கான 6 சிறந்த சுப முகூர்த்த நாட்கள், மாசி மகம் சிறப்பு, ஜோதிட பலன்கள் மற்றும் திருமண பட்ஜெட் வழிகாட்டி.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'மாசி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'february wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-february`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-02-06","2026-02-08","2026-02-13","2026-02-15","2026-02-16","2026-02-20"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 பிப்ரவரி சுப முகூர்த்த நாட்கள் — மாசி மாத திருமண தேதிகள்',
                    description: '2026 பிப்ரவரி மாதத்திற்கான 6 சிறந்த சுப முகூர்த்த நாட்கள், மாசி மகம் சிறப்பு, ஜோதிட பலன்கள் மற்றும் திருமண பட்ஜெட் வழிகாட்டி.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-02-05',
                    slug: '/blog/subha-muhurtham-2026-february'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 பிப்ரவரி சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-february' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | மாசி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 பிப்ரவரி சுப முகூர்த்த நாட்கள் — மாசி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 பிப்ரவரி சுப முகூர்த்த நாட்கள் — மாசி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="02 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    &quot;மாசி மகம் பிறந்தால் மங்களம் பெருகும்&quot; என்பது தமிழகத்தின் பக்தி மரபு. பிப்ரவரி மாதத்தில் சங்கமிக்கும் மாசி மாதம், தமிழ்நாட்டில் திருமணங்கள் அதிகளவில் நடைபெறும் பொற்காலங்களில் ஒன்றாகும். குருவின் பார்வையும் சந்திரனின் சுப சஞ்சாரமும் கூடிவரும் இக்காலத்தில், பிப்ரவரி 2026ல் மொத்தம் 6 உன்னதமான சுப முகூர்த்த நாட்கள் அமைந்துள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    மாசி மாத திருமணங்களின் ஜோதிட சிறப்பம்சங்கள்
                </h2>
                <p>
                    ஜோதிட ரீதியாக கும்ப ராசியில் சூரியன் சஞ்சரிக்கும் மாதமே மாசி மாதமாகும். கும்பம் என்பது சனியின் ஆட்சி வீடாகவும், அதில் சூரியனின் வருகை கர்ம வினைகளை தீர்க்கும் தருணமாகவும் போற்றப்படுகிறது. மாசி மாதத்தில் திருமணம் செய்பவர்களுக்கு கணவன்-மனைவி இடையே விட்டுக்கொடுக்கும் மனப்பான்மையும், சகிப்புத்தன்மையும் இயல்பாகவே அமையும்.
                </p>
                <p>
                    குறிப்பாக மாசி மாத வளர்பிறை திருவோணம், ரோகிணி, அஸ்தம், சுவாதி மற்றும் உத்திரட்டாதி நட்சத்திரங்களில் கூடிவரும் முகூர்த்த வேளைகளில் மாங்கல்ய தாரணம் செய்வது சகல ஐஸ்வர்யங்களையும் பெற்றுத் தரும். மகா சிவராத்திரி விரத காலத்தை ஒட்டி வரும் நாட்களில் இல்லற வாழ்க்கையை இறை வழிபாட்டுடன் தொடங்குவது சிறப்பு வாய்ந்தது.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 வார இறுதி முகூர்த்தங்களின் முக்கியத்துவம்
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        பிப்ரவரி 8 மற்றும் பிப்ரவரி 15 ஆகிய தேதிகள் ஞாயிற்றுக்கிழமைகளில் அமைவதால், வெளியூர்களில் இருக்கும் உறவினர்கள் மற்றும் நண்பர்கள் சிரமமின்றி வந்து வாழ்த்த வசதியாக இருக்கும். இத்தேதிகளுக்கு மண்டப முன்பதிவு மிக விரைவாக நிரம்பும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 பிப்ரவரி மாத சுப முகூர்த்த நாட்கள் அட்டவணை
                </h2>
                <p>
                    பிப்ரவரி 2026ல் அமையப்பெற்றுள்ள 6 சுப முகூர்த்த தேதிகள் மற்றும் கிழமைகள்:
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
                    மாசி மாத திருமண திட்டமிடல் குறிப்புகள்
                </h2>
                <p>
                    பிப்ரவரி மாத திருமணத்தை வெற்றிகரமாக நடத்த சில முக்கிய ஆலோசனைகள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>சமநிலையான தட்பவெப்ப நிலை:</strong> பிப்ரவரி மாதம் கடுமையான குளிரும் இன்றி, கொளுத்தும் கோடை வெயிலும் இன்றி இதமான சீதோஷ்ண நிலை நிலவும். இது திருமண பட்டு ஆடைகள் அணிவதற்கும் மேக்-அப் கலைவதைத் தடுப்பதற்கும் உகந்தது.
                    </li>
                    <li>
                        <strong>மண்டபம் &amp; போட்டோகிராபி முன்கூட்டியே:</strong> பிப்ரவரியில் முகூர்த்தங்கள் அதிகம் இருப்பதால், முன்னணி திருமண மண்டபங்கள் மற்றும் புகைப்படக் கலைஞர்கள் பல மாதங்களுக்கு முன்பே புக் ஆகிவிடுவார்கள். எனவே 4-6 மாதங்களுக்கு முன்பே அட்வான்ஸ் செலுத்துங்கள்.
                    </li>
                    <li>
                        <strong>வரவேற்பு விருந்து மெனு:</strong> மாசி மாத விருந்தில் பாரம்பரிய கல்யாண சாப்பாட்டுடன் அசோகா அல்வா அல்லது மைசூர் பாக் போன்ற இனிப்புகள் சேர்த்து விருந்தினர்களை உபசரியுங்கள்.
                    </li>
                </ul>

                <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
                    <h3 className="text-lg font-bold text-green-900 mb-2">💡 செலவு சேமிப்பு ஆலோசனை</h3>
                    <p className="text-green-800 text-sm leading-relaxed">
                        பிப்ரவரி 14 காதலர் தினத்தை ஒட்டி பூக்களின் விலை கணிசமாக உயர வாய்ப்புள்ளது. எனவே பிப்ரவரி இரண்டாம் வாரத்தில் திருமணம் செய்பவர்கள் பூ அலங்கார ஒப்பந்தங்களை முன்கூட்டியே நிலையான விலையில் (Fixed Rate) பேசி முடிப்பது பண விரயத்தைத் தடுக்கும்.
                    </p>
                </div>
    

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
                    currentSlug="/blog/subha-muhurtham-2026-february" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
