import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 ஜனவரி சுப முகூர்த்த நாட்கள் — தை மாத திருமண தேதிகள் முழுவிவரம் | கல்யாண வீடு',
    description: '2026 ஜனவரி மாதத்திற்கான சிறந்த சுப முகூர்த்த நாட்கள், தை மாத திருமண தேதிகள், நக்ஷத்திர விவரங்கள் மற்றும் திருமண திட்டமிடல் வழிகாட்டி.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'தை மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'january wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-january`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-01-28"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 ஜனவரி சுப முகூர்த்த நாட்கள் — தை மாத திருமண தேதிகள் முழுவிவரம்',
                    description: '2026 ஜனவரி மாதத்திற்கான சிறந்த சுப முகூர்த்த நாட்கள், தை மாத திருமண தேதிகள், நக்ஷத்திர விவரங்கள் மற்றும் திருமண திட்டமிடல் வழிகாட்டி.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-01-05',
                    slug: '/blog/subha-muhurtham-2026-january'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 ஜனவரி சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-january' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | தை மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 ஜனவரி சுப முகூர்த்த நாட்கள் — தை மாத திருமண தேதிகள் முழுவிவரம்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 ஜனவரி சுப முகூர்த்த நாட்கள் — தை மாத திருமண தேதிகள் முழுவிவரம்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="01 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    &quot;தை பிறந்தால் வழி பிறக்கும்&quot; என்பது தமிழர்களின் நம்பிக்கை நிறைந்த பழமொழி. 2026 ஆம் ஆண்டின் தொடக்க மாதமான ஜனவரியில், சூரியன் தனுசு ராசியிலிருந்து மகர ராசிக்கு பிரவேசிக்கும் உத்திராயண புண்ணிய காலம் தொடங்குகிறது. தேவலோகத்தின் பகல் பொழுதாக கருதப்படும் இந்த உத்திராயண காலத்தின் தொடக்கத்தில் திருமணம் செய்வது புதுமணத் தம்பதியருக்கு நீடித்த ஆயுளையும், மங்கல வாழ்வையும் வழங்கும் என்பது பாரம்பரிய ஜோதிட நம்பிக்கையாகும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    தை மாதத்தின் ஆன்மீக மற்றும் ஜோதிட மகத்துவம்
                </h2>
                <p>
                    ஜோதிட சாஸ்திரப்படி, சூரிய பகவான் தெற்கு நோக்கி பயணிக்கும் தட்சிணாயன காலம் முடிந்து, வடக்கு நோக்கி நகரும் உத்திராயண காலம் தொடங்குவது தை மாதத்தில்தான். இது மங்களகரமான காரியங்களை தொடங்க உன்னதமான காலமாகும். தை பொங்கல் மற்றும் மாட்டுப் பொங்கல் பண்டிகைகள் முடிவடைந்த பின்னர் குடும்பங்கள் மனநிறைவோடும் மகிழ்ச்சியோடும் திருமண வேலைகளில் ஈடுபடுவர்.
                </p>
                <p>
                    இம்மாதத்தில் திருமணம் செய்யும் தம்பதியர் இல்லற தர்மத்தை செவ்வனே கடைப்பிடித்து, சமுதாயத்தில் நன்மதிப்பையும் குலதெய்வத்தின் அருளையும் பெறுவார்கள் என்பது முன்னோர்களின் வாக்கு. வளர்பிறை நாட்களில் சுப கிரகங்களின் பார்வை கூடிவரும் சுப வேளையில் மாங்கல்ய தாரணம் செய்வது உத்தம பலன்களைத் தரும்.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 2026 ஜனவரி முக்கிய முகூர்த்த குறிப்பு
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        ஜனவரி மாதத்தில் வரக்கூடிய தை அமாவாசை மற்றும் கரிநாட்களைத் தவிர்த்து, சுத்தமான பஞ்சாங்க சுத்தியோடு கூடிய நாட்கள் மட்டுமே முகூர்த்த நாட்களாக கணிக்கப்பட்டுள்ளன. ஜனவரி 28 புதன்கிழமை அன்று அமையும் முகூர்த்தம் குடும்ப ஒற்றுமைக்கும் வம்ச விருத்திக்கும் மிக விசேஷமானது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 ஜனவரி மாத திருமணத் தேதிகள் அட்டவணை
                </h2>
                <p>
                    கீழே கொடுக்கப்பட்டுள்ள தேதி வாக்கிய மற்றும் திருக்கணித பஞ்சாங்கங்களின் அடிப்படையில் கணிக்கப்பட்ட பொதுவான சுப முகூர்த்த நாளாகும்:
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
                    தை மாத திருமணத்திற்கான நடைமுறை திட்டமிடல் குறிப்புகள்
                </h2>
                <p>
                    தை மாதத்தில் திருமணம் நடத்த திட்டமிடும் குடும்பங்கள் கவனிக்க வேண்டிய நடைமுறை வழிகாட்டுதல்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>குளிர்கால காலைப் பொழுது:</strong> ஜனவரி மாத அதிகாலை பனிப்பொழிவு அதிகமாக இருக்கும் என்பதால், முகூர்த்த நேரத்திற்கு முன்பே மண்டபத்திற்கு வருகை தரும் முதியோர்கள் மற்றும் குழந்தைகளுக்கு கதகதப்பான ஆடைகள் ஏற்பாடு செய்வது நல்லது.
                    </li>
                    <li>
                        <strong>மலர் மாலைகளின் புத்துணர்ச்சி:</strong> தை மாதத்தில் மல்லிகை, ரோஜா மற்றும் சாமந்தி போன்ற மலர்கள் வாடாமல் நீண்ட நேரம் புத்துணர்ச்சியுடன் இருக்கும். இது புகைப்படங்களுக்கும் மேடை அலங்காரத்திற்கும் கூடுதல் பொலிவு சேர்க்கும்.
                    </li>
                    <li>
                        <strong>பொங்கலுக்கு பிந்தைய காய்கறி வரத்து:</strong> உழவர் திருநாளுக்குப் பின் புதிய காய்கறிகள் மற்றும் அரிசி சந்தைக்கு வருவதால், தரமான அறுசுவை பாரம்பரிய கல்யாண விருந்து சமைக்க இது மிகச்சிறந்த பருவமாகும்.
                    </li>
                    <li>
                        <strong>பட்ஜெட் கட்டுப்பாடு:</strong> ஆண்டின் முதல் மாதம் என்பதால், எங்களது திருமண பட்ஜெட் பிளானர் கருவியைப் பயன்படுத்தி மண்டபம், தங்கம் மற்றும் விருந்து செலவுகளை துல்லியமாக திட்டமிடுங்கள்.
                    </li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">📜 சட்டப்பூர்வ பதிவு வழிகாட்டி</h3>
                    <p className="text-blue-800 text-sm leading-relaxed">
                        திருமணம் முடிந்த கையோடு தமிழ்நாடு திருமண பதிவு சட்டத்தின்படி (Tamil Nadu Registration of Marriages Act) முறைப்படி சார்-பதிவாளர் அலுவலகத்தில் திருமணத்தைப் பதிவு செய்வது தம்பதியரின் எதிர்கால ஆவணப் பாதுகாப்புக்கு இன்றியமையாதது.
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
                    currentSlug="/blog/subha-muhurtham-2026-january" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
