import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 மார்ச் சுப முகூர்த்த நாட்கள் — பங்குனி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 மார்ச் மாதத்திற்கான 5 சுப முகூர்த்த தேதிகள், பங்குனி உத்திரம் தெய்வீக திருமண மகத்துவம் மற்றும் திருமண ஏற்பாடுகள் வழிகாட்டி.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'பங்குனி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'march wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-march`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-03-05","2026-03-06","2026-03-08","2026-03-15","2026-03-25"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 மார்ச் சுப முகூர்த்த நாட்கள் — பங்குனி மாத திருமண தேதிகள்',
                    description: '2026 மார்ச் மாதத்திற்கான 5 சுப முகூர்த்த தேதிகள், பங்குனி உத்திரம் தெய்வீக திருமண மகத்துவம் மற்றும் திருமண ஏற்பாடுகள் வழிகாட்டி.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-03-05',
                    slug: '/blog/subha-muhurtham-2026-march'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 மார்ச் சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-march' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | பங்குனி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 மார்ச் சுப முகூர்த்த நாட்கள் — பங்குனி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 மார்ச் சுப முகூர்த்த நாட்கள் — பங்குனி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="03 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    பங்குனி மாதம் என்பது புராணங்களில் &quot;தெய்வீக திருக்கல்யாணங்களின் மாதம்&quot; என்று வர்ணிக்கப்படுகிறது. மீனாட்சி சுந்தரேஸ்வரர், முருகன் தெய்வானை மற்றும் வள்ளி, ராமபிரான் சீதாதேவி போன்ற தெய்வங்களின் திருமணங்கள் நடைபெற்ற புண்ணிய நாளான பங்குனி உத்திரம் இம்மாதத்தில்தான் கொண்டாடப்படுகிறது. 2026 மார்ச் மாதத்தில் மொத்தம் 5 சிறந்த சுப முகூர்த்த தேதிகள் அமையப்பெற்றுள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    பங்குனி மாத திருமணத்தின் ஆன்மீகப் பெருமை
                </h2>
                <p>
                    மீன ராசியில் சூரியன் சஞ்சரிக்கும் பங்குனி மாதம், தமிழ் வருடத்தின் இறுதி மாதமாகும். வசந்த காலத்தின் தொடக்கமாக விளங்கும் இம்மாதத்தில் மரங்கள் துளிர்த்து, பூக்கள் மலர்ந்து இயற்கையே விழாக்கோலம் பூணும். பங்குனி மாதத்தில் திருமணம் செய்யும் தம்பதியினருக்கு தெய்வ தம்பதிகளின் நேரடி அருட்கடாட்சம் கிட்டும் என்பது தமிழ் மக்களின் திடமான நம்பிக்கை.
                </p>
                <p>
                    பங்குனி வளர்பிறை முகூர்த்தங்களில் மாங்கல்ய தாரணம் செய்வதால் கணவன் மனைவி இடையே அசைக்க முடியாத அன்பும், குடும்பத்தில் எப்போதும் செல்வச் செழிப்பும் நிலைத்திருக்கும். உகாதி பண்டிகை மற்றும் ஹோலி போன்ற மகிழ்ச்சியான பண்டிகைகளும் இம்மாதத்தில் வருவதால் விழா சூழல் கூடுதல் உற்சாகமளிக்கும்.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 மார்ச் மாத திருமணங்களுக்கு முக்கிய அறிவுரை
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        பங்குனி மாத இறுதியில் வரும் காரடையான் நோன்பு மற்றும் அமாவாசை நாட்களை தவிர்த்து, சுத்தமான லக்னத்தில் முகூர்த்தத்தை தேர்வு செய்வது இல்லற மேன்மைக்கு அடித்தளமாகும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 மார்ச் மாத சுப முகூர்த்த நாட்கள் பட்டியல்
                </h2>
                <p>
                    மார்ச் 2026ல் அமைந்துள்ள சுப திருமண முகூர்த்த தேதிகள்:
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
                    பங்குனி மாத திருமண நடைமுறை சவால்களும் தீர்வுகளும்
                </h2>
                <p>
                    மார்ச் மாதத்தில் திருமணத்தை ஏற்பாடு செய்யும் போது கவனிக்க வேண்டிய முக்கிய அம்சங்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>பள்ளி பொதுத்தேர்வுகள் (Board Exams):</strong> மார்ச் மாதத்தில் 10 மற்றும் 12 ஆம் வகுப்பு பொதுத்தேர்வுகள் நடைபெறும். குடும்பத்தில் குழந்தைகள் அல்லது ஆசிரியர் பணி புரிவோர் இருந்தால், அவர்கள் வருகைக்கு ஏதுவாக வார இறுதி தேதிகளை (மார்ச் 8 அல்லது 15) தேர்ந்தெடுப்பது நல்லது.
                    </li>
                    <li>
                        <strong>நிதி ஆண்டு இறுதி (Financial Year End):</strong> வங்கிகள் மற்றும் கார்ப்பரேட் நிறுவனங்களில் மார்ச் 31 நிதியாண்டு இறுதி கணக்கு முடிக்கும் காலம் என்பதால், பணிபுரியும் மணமக்கள் மற்றும் உறவினர்கள் விடுமுறையை முன்கூட்டியே அப்ளை செய்து ஒப்புதல் பெற வேண்டும்.
                    </li>
                    <li>
                        <strong>கோடை தொடக்க உணவு முறை:</strong> மார்ச் மாதத்தில் லேசான வெயில் தொடங்கும் என்பதால், வரவேற்பு மண்டபத்தில் நீர்மோர் மற்றும் பழச்சாறுகள் ஏற்பாடு செய்வது விருந்தினர்களை உற்சாகப்படுத்தும்.
                    </li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">💡 பட்ஜெட் சீக்ரெட்</h3>
                    <p className="text-blue-800 text-sm leading-relaxed">
                        பங்குனி மாத திருமணங்களுக்கு தங்கம் வாங்குவோர், பிப்ரவரி மாத பட்ஜெட் தாக்கலுக்குப் பிறகான தங்கம் விலை நிலவரத்தை கண்காணித்து, விலை குறையும் நாட்களில் நகை முன்பதிவு செய்வது பெருமளவு பணத்தை சேமிக்க உதவும்.
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
                    currentSlug="/blog/subha-muhurtham-2026-march" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
