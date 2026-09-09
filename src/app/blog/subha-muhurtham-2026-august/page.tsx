import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';
import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
    title: '2026 ஆகஸ்ட் சுப முகூர்த்த நாட்கள் — ஆவணி மாத திருமண தேதிகள் | கல்யாண வீடு',
    description: '2026 ஆகஸ்ட் மாதத்திற்கான 3 சிறந்த சுப முகூர்த்த நாட்கள், ஆவணி ஞாயிறு சிறப்பு, சிம்ம சூரியன் பலன்கள் மற்றும் திருமண பட்ஜெட் ஆலோசனை.',
    keywords: ['2026 சுப முகூர்த்த நாட்கள்', 'ஆவணி மாதம் திருமண தேதிகள்', 'Tamil muhurtham dates 2026', 'august wedding dates Tamil Nadu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/subha-muhurtham-2026-august`,
    },
};

export default function MuhurthamPage() {
    const dates = ["2026-08-23","2026-08-30","2026-08-31"];

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: '2026 ஆகஸ்ட் சுப முகூர்த்த நாட்கள் — ஆவணி மாத திருமண தேதிகள்',
                    description: '2026 ஆகஸ்ட் மாதத்திற்கான 3 சிறந்த சுப முகூர்த்த நாட்கள், ஆவணி ஞாயிறு சிறப்பு, சிம்ம சூரியன் பலன்கள் மற்றும் திருமண பட்ஜெட் ஆலோசனை.',
                    author: 'ஜோதிடர் வேங்கடேஷ்',
                    datePublished: '2026-08-05',
                    slug: '/blog/subha-muhurtham-2026-august'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: '2026 ஆகஸ்ட் சுப முகூர்த்த நாட்கள்', item: '/blog/subha-muhurtham-2026-august' }
                    ]
                }}
            />
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🌟 சுப முகூர்த்தம் | ஆவணி மாதம்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    2026 ஆகஸ்ட் சுப முகூர்த்த நாட்கள் — ஆவணி மாத திருமண தேதிகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200"
                        alt="2026 ஆகஸ்ட் சுப முகூர்த்த நாட்கள் — ஆவணி மாத திருமண தேதிகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock author="ஜோதிடர் வேங்கடேஷ்" updatedDate="08 2026" />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    &quot;ஆவணி மாதம் கல்யாண மேளம்&quot; என்பது தமிழர்களின் உதடுகளில் எப்போதும் தவழும் வார்த்தை. தமிழ்நாட்டின் திருமண சீசன்களிலேயே முதன்மையானதாகப் போற்றப்படும் ஆவணி மாதத்தில், சூரிய பகவான் தனது சொந்த வீடான சிம்ம ராசியில் ஆட்சி பலம் பெற்று வீற்றிருப்பார். ஆகஸ்ட் 2026ல் மொத்தம் 3 அதிரடி சுப முகூர்த்த நாட்கள் அமையப்பெற்றுள்ளன.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    ஆவணி மாத திருமணத்தின் ஜோதிட மாட்சிமை
                </h2>
                <p>
                    சிம்ம ராசியில் சூரியன் ஆட்சி பெறுவது நவகிரகங்களின் தலைவரான சூரியனின் முழுமையான ஆசிர்வாதத்தை பூமிக்கு கொண்டு சேர்க்கும். சூரியன் என்பது தந்தை, அதிகாரம், நிர்வாகத் திறன் மற்றும் நீண்ட ஆயுளுக்கு அதிபதி. எனவே ஆவணி மாதத்தில் மாங்கல்ய தாரணம் செய்யும் மணமக்களுக்கு சமுதாயத்தில் உயர்ந்த கௌரவமும், புகழும், எதிலும் வெல்லும் மனோபலமும் கிட்டும்.
                </p>
                <p>
                    ஆவணி ஞாயிற்றுக்கிழமைகள் விரதங்களுக்கும் சுப காரியங்களுக்கும் அதி உன்னதமானவை. இம்மாதத்தில் வரலட்சுமி விரதம், ஆவணி அவிட்டம் மற்றும் கிருஷ்ண ஜெயந்தி போன்ற மங்களகரமான பண்டிகைகள் அடுத்தடுத்து வருவதால், திருமண விழாக்கள் தெய்வீக மணம் கமழும்.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        🌟 ஆகஸ்ட் 30 &amp; 31 வார இறுதி முகூர்த்தம்
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        ஆகஸ்ட் மாதத்தின் இறுதி நாட்களான ஞாயிறு மற்றும் திங்கட்கிழமைகளில் கூடிவரும் முகூர்த்தங்கள், மாத இறுதி விடுமுறை நாட்களோடு அமைவதால் விருந்தினர்கள் பெருமளவில் வந்து மணமக்களை வாழ்த்த ஏதுவானது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    2026 ஆகஸ்ட் மாத சுப முகூர்த்த நாட்கள் பட்டியல்
                </h2>
                <p>
                    ஆகஸ்ட் 2026ல் அமைந்துள்ள 3 சுப முகூர்த்த தேதிகள்:
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
                    ஆவணி திருமணங்களுக்கான பிரத்யேக ஏற்பாடுகள்
                </h2>
                <p>
                    ஆவணி மாத திருமணத்தை சிறப்பாக நடத்தி முடிக்க சில முக்கிய ஆலோசனைகள்:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>ஹை-டிமாண்ட் சீசன்:</strong> ஆவணி மாதத்தில் ஒரே நாளில் ஆயிரக்கணக்கான திருமணங்கள் நடப்பது வழக்கம். எனவே மேக்-அப் ஆர்ட்டிஸ்ட், வீடியோகிராபர், நாதஸ்வர வித்வான்கள் மற்றும் கேட்டரிங் குழுவினரை முன்கூட்டியே புக் செய்வது அவசியமாகும்.
                    </li>
                    <li>
                        <strong>போக்குவரத்து மேலாண்மை:</strong> மண்டபங்களுக்கு செல்லும் வழிகளில் போக்குவரத்து நெரிசல் ஏற்பட வாய்ப்புள்ளதால், விருந்தினர்களுக்கு தகுந்த பார்க்கிங் வசதி உள்ள மண்டபங்களை தேர்வு செய்வது சிறப்பு.
                    </li>
                    <li>
                        <strong>திருமண பரிசுப் பொருட்கள்:</strong> ஆவணி சீசனில் தாம்பூலப் பைகள், மஞ்சள் கயிறு, குங்குமச்சிமிழ் மற்றும் ரிட்டர்ன் கிஃப்ட் பொருட்களை மொத்தமாக ஆர்டர் செய்து வைப்பது பணத்தை மிச்சப்படுத்தும்.
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
                    currentSlug="/blog/subha-muhurtham-2026-august" 
                    category="Astrology" 
                />
            </div>
        </article>
    );
}
