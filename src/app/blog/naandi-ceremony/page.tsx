import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import AuthorBio from '@/components/blog/AuthorBio';
import Schema from '@/components/SEO/Schema';

// <!-- TRUST: meta-title -->
// Meta Title: நாந்தி சடங்கு: முன்னோர் ஆசியில் தொடங்கும் திருமணம் | கல்யாண வீடு
// <!-- TRUST: meta-description -->
// Meta Description: நாந்தி சடங்கு என்றால் என்ன, எப்போது, எப்படி செய்வார்கள், முன்னோர்களை ஏன் வழிபடுகிறோம் — திருமணத்தின் புனித தொடக்க சடங்கை விரிவாக அறியுங்கள்.

import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';


export const metadata: Metadata = {
    title: 'நாந்தி சடங்கு: முன்னோர் ஆசியில் தொடங்கும் திருமணம் | கல்யாண வீடு',
    description: 'நாந்தி சடங்கு என்றால் என்ன, எப்போது, எப்படி செய்வார்கள், முன்னோர்களை ஏன் வழிபடுகிறோம் — திருமணத்தின் புனித தொடக்க சடங்கை விரிவாக அறியுங்கள்.',
    keywords: ['நாந்தி சடங்கு', 'naandi ceremony', 'naandi sradham', 'tamil wedding ritual', 'pre-wedding ceremony', 'pitru tharpanam', 'முன்னோர் வழிபாடு'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/naandi-ceremony`,
    },
};

export default function NaandiCeremony() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: 'நாந்தி சடங்கு: முன்னோர் ஆசியில் தொடங்கும் திருமணம் | கல்யாண வீடு',
                    description: 'நாந்தி சடங்கு என்றால் என்ன, எப்போது, எப்படி செய்வார்கள், முன்னோர்களை ஏன் வழிபடுகிறோம் — திருமணத்தின் புனித தொடக்க சடங்கை விரிவாக அறியுங்கள்.',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-02-25',
                    slug: '/blog/naandi-ceremony'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'நாந்தி சடங்கு', item: '/blog/naandi-ceremony' }
                    ]
                }}
            />

            {/* <!-- TRUST: canonical-label --> */}
            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    திருமண சடங்குகள் | தமிழ்நாடு
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    நாந்தி சடங்கு: முன்னோர் ஆசியில் தொடங்கும் திருமணம்
                </h1>
            <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage
                    src="https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=1200"
                    alt="நாந்தி சடங்கு"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

                <TrustBlock
                    author="மீனாட்சி சுந்தரம்"
                    updatedDate="பிப்ரவரி 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

                <p className="text-xl leading-relaxed text-gray-700">
                    திருமண மண்டபத்தில் நாதஸ்வரம் ஒலிக்கும் முன்பே, வீட்டில் ஒரு அமைதியான,
                    ஆழமான சடங்கு நடைபெறுகிறது. அங்கே பார்க்க ஜனக்கூட்டமில்லை; கோஷமில்லை.
                    வாத்தியார் மெல்லிய குரலில் மந்திரங்கள் சொல்கிறார்; தந்தை கண்களை மூடி
                    முன்னோர்களை நினைக்கிறார். இதுதான் நாந்தி சடங்கு — தமிழ் திருமணத்தின்
                    மிக முக்கியமான ஆனால் பலருக்கும் அதிகம் அறியப்படாத தொடக்க வழிபாடு.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    நாந்தி என்றால் என்ன?
                </h2>

                <p>
                    &quot;நாந்தி&quot; என்ற வார்த்தை சம்ஸ்கிருதத்தில் &quot;மங்களமான தொடக்கம்&quot; என்று பொருள்படும்.
                    திருமணம் என்பது வாழ்க்கையின் மிக முக்கியமான திருப்புமுனை. அத்தகைய நிகழ்வை
                    தொடங்குவதற்கு முன், இறந்த முன்னோர்களுக்கு (பிதுர்க்கள்) தர்ப்பணம் செய்து
                    அவர்கள் ஆசியை வேண்டுவதுதான் நாந்தி சடங்கு. இது நாந்தி ஸ்ராத்தம் என்றும்,
                    வ்ருத்தி ஸ்ராத்தம் என்றும் அழைக்கப்படுகிறது.
                </p>

                <p>
                    ஸ்ராத்தம் என்ற வார்த்தையே பிதுர்க்களுக்கான அன்பலை குறிக்கும்.
                    திருமணம், உபநயனம், சீமந்தம் போன்ற மங்களகரமான நிகழ்வுகளுக்கு முன்பு
                    செய்யப்படும் ஸ்ராத்தம் &quot;வ்ருத்தி ஸ்ராத்தம்&quot; என அழைக்கப்படுகிறது —
                    வ்ருத்தி என்றால் &quot;வளர்ச்சி&quot; அல்லது &quot;மகிழ்ச்சி&quot;. முன்னோர்களின்
                    மகிழ்ச்சியில் நமது மகிழ்ச்சி என்பதே இந்தத் தத்துவம்.
                </p>

                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 my-8">
                    <h3 className="text-lg font-bold text-amber-900 mb-3">🪔 நாந்தி சடங்கின் மூல நோக்கம்</h3>
                    <p className="text-amber-800 text-sm leading-relaxed">
                        தமிழ் மரபில், வாழ்நாளில் ஒரு புதிய அத்தியாயம் தொடங்கும்போது முன்னோர்கள்
                        உடனிருக்கிறார்கள் என்ற நம்பிக்கை ஆழமாக வேரூன்றியுள்ளது. நாந்தி சடங்கு
                        அந்த இணைப்பை அதிகாரப்பூர்வமாக நிலைநாட்டுகிறது — &quot;நாந்தோம் இருக்கிறோம்,
                        உங்கள் ஆசிகளோடு இந்த திருமணம் நடக்கட்டும்&quot; என்று கோருகிறது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    எப்போது செய்வார்கள்?
                </h2>

                <p>
                    பெரும்பாலான தமிழ் குடும்பங்களில், நாந்தி சடங்கு திருமணத்திற்கு முந்தைய நாள்
                    மாலை அல்லது திருமண நாள் காலையில் அதிகாலையில் நடைபெறும்.
                    வாத்தியாரின் கணக்கு மற்றும் குடும்ப மரபைப் பொறுத்து நேரம் கொஞ்சம் மாறலாம்.
                    முக்கியமான விஷயம் என்னவென்றால், திருமண முகூர்த்தத்திற்கு முன்பாக
                    நாந்தி சடங்கு முடிந்திருக்க வேண்டும்.
                </p>

                <p>
                    தர்பை புல் (குஷம்), எள் (திலம்), தண்ணீர் (தீர்த்தம்), பவித்திரம் —
                    இவை ஆயத்தமாகிவிட்ட நேரத்தில், வாத்தியார் வருவார்.
                    வீட்டில் பெண்களின் ஆரவாரம் தொலைவில் இருக்கும்; ஒரு தனிமையான,
                    அமைதியான ஓரிடத்தில் சடங்கு தொடங்கும்.
                </p>

                {/* <!-- TRUST: internal-link --> */}
                <p className="text-sm text-gray-500 italic">
                    திருமண முகூர்த்த நிர்ணயம் பற்றி அறிய:{' '}
                    <Link href="/blog/subha-muhurtham-2026" className="text-primary hover:underline">
                        சுப முகூர்த்தம் — தமிழ் திருமண நாள் தேர்வு
                    </Link>
                </p>

                {/* <!-- TRUST: internal-link --> */}
                <p className="text-sm text-gray-500 italic">
                    மற்ற சடங்குகள் பற்ற அறிய:{' '}
                    <Link href="/blog/tamil-wedding-rituals" className="text-primary hover:underline">
                        தமிழ் திருமணச் சடங்குகள் — முழுமையான வழிகாட்டி
                    </Link>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    சடங்கு நடைபெறும் விதம்
                </h2>

                <p>
                    மணமகனின் தந்தை (அல்லது முதன்மை கர்த்தா) தர்பை பவித்திரம் அணிந்து,
                    கிழக்கு நோக்கி அல்லது வடக்கு நோக்கி உட்கார்ந்துகொள்வார்.
                    வாத்தியார் ஸங்கல்பம் சொல்வார் — இந்த ஸங்கல்பத்தில் கர்த்தாவின் கோத்திரம்,
                    பெயர், இன்றைய தினம், திதி, நட்சத்திரம், திருமணத்தின் நோக்கம் —
                    அனைத்தும் விவரமாக சொல்லப்படும்.
                </p>

                <p>
                    பிறகு மூன்று தலைமுறை பிதுர்க்களுக்கு தர்ப்பணம் (எள் கலந்த தண்ணீர்)
                    வழங்கப்படும் — தந்தை, தாத்தா, கொள்ளுத்தாத்தா என்று தந்தை வழியிலும்,
                    தாயின் தந்தை வழியிலும். ஒவ்வொரு தர்ப்பணத்தின்போதும் வாத்தியார் குறிப்பிட்ட
                    மந்திரங்கள் சொல்கிறார்; கர்த்தா &quot;ஸ்வதா&quot; என்று ஒப்புக்கொண்டு தண்ணீர்
                    சொட்டச்சொட்ட விடுகிறார்.
                </p>

                <p>
                    அதன் பிறகு, பிண்டம் (எள் கலந்த சாதம் அல்லது மாவு உருண்டைகள்)
                    வழங்கப்படும். ஒவ்வொரு பிண்டமும் ஒரு குறிப்பிட்ட முன்னோரை நினைத்து
                    வழங்கப்படும். இது &quot;ஸாபிண்டீகரணம்&quot; என்ற கோட்பாட்டின் ஒரு பகுதி —
                    இறந்த உடலை பிண்டத்தின் வழி நினைத்துப் போற்றுவது.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
                    <p className="font-semibold text-orange-900 mb-2">
                        முன்னோர்களின் பெயர் சொல்லப்படுகிறது
                    </p>
                    <p className="text-sm text-orange-800 leading-relaxed">
                        சங்கல்பத்தில் கர்த்தாவின் கோத்திரம் மட்டுமல்ல, இறந்த முன்னோர்களின்
                        பெயர்களும் வாத்தியாரால் சொல்லப்படும். அந்தப் பெயர்கள் கேட்கும்போது,
                        பல தந்தையர் கண்ணை மூடிக்கொள்வார்கள். அது வெறும் சடங்கல்ல —
                        அது நேரடி நினைவூட்டல்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    கன்னியின் வீட்டிலும், வரனின் வீட்டிலும்
                </h2>

                <p>
                    நாந்தி சடங்கு இரு குடும்பங்களிலும் தனித்தனியாக நடைபெறும்.
                    மணமகனின் வீட்டில் மணமகனின் தந்தை கர்த்தாவாக இருப்பார்;
                    மணமகளின் வீட்டில் மணமகளின் தந்தை கர்த்தாவாக இருப்பார்.
                    இது வெறும் ஆண் சடங்கு மட்டுமல்ல — சில குடும்பங்களில்
                    தாயும் அருகே இருந்து அனுமதிக்கப்படுவார்.
                </p>

                <p>
                    தமிழ் பிராமண குடும்பங்களில் (ஐயர், ஐயங்கார்) நாந்தி சடங்கு
                    மிக விரிவாக, ஏறத்தாழ ஒரு மணி நேரம் நடைபெறும்.
                    முதலியார், நாடார் போன்ற சமூகங்களில் சடங்கின் நீளம் மற்றும்
                    முறை சற்று சுருக்கப்பட்டிருக்கும் — ஆனால் நோக்கம் ஒன்றே.
                    நகர்ப்புற குடும்பங்களில் சில நேரம் மண்டப வாத்தியார் இதை
                    திருமண நாள் காலையிலேயே அவசரமாக செய்வதுண்டு — இது சரியான
                    முறை அல்ல என்று பாரம்பரிய வழியில் செய்பவர்கள் சொல்வதுண்டு.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    நாந்தியின் ஆழமான பொருள்
                </h2>

                <p>
                    திருமணம் என்பது இரண்டு உயிர்கள் மட்டும் சேர்வதல்ல — இரண்டு குல
                    வரலாறுகள் ஒன்றிணைகின்றன. நாந்தி சடங்கு அந்த வரலாறுகளை முன்னிலைப்படுத்துகிறது.
                    &quot;இந்த திருமணம் என்னோடு மட்டுமில்லை; என்னை உருவாக்கிய, என்னை இங்கு
                    கொண்டுவந்த அனைவரோடும் சேர்த்து நடக்கிறது&quot; என்ற உணர்வை இது வலியுறுத்துகிறது.
                </p>

                <p>
                    இன்றைய தலைமுறைக்கு இந்த சடங்கு அர்த்தமற்றதாக தோன்றலாம்.
                    ஆனால் கொஞ்சம் யோசித்தால் தெரியும் — நம்மை நாமாக்கிய மனிதர்களை
                    நினைந்து, அவர்கள் வழியில் ஒரு புதிய உறவை தொடங்குவது என்பது
                    மட்டற்ற அன்பின் வெளிப்பாடு.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
                    <h3 className="font-bold text-gray-900 mb-3">நாந்தி சடங்கில் பயன்படுத்தப்படும் பொருட்கள்</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                            <span className="text-amber-600">•</span>
                            <span><strong>தர்பை (கரும்புல்):</strong> தீட்டு நீக்கும் புனிதப் பொருள்</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-amber-600">•</span>
                            <span><strong>எள் (திலம்):</strong> பிதுர் கர்மோபாகரணம்</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-amber-600">•</span>
                            <span><strong>பவித்திரம்:</strong> தர்பையால் செய்த மோதிரம்</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-amber-600">•</span>
                            <span><strong>பிண்டம்:</strong> எள் + சாதம் அல்லது மாவு உருண்டை</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-amber-600">•</span>
                            <span><strong>தீர்த்தம்:</strong> கங்கைஜலம் கலந்த நீர்</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-amber-600">•</span>
                            <span><strong>அக்ஷதை:</strong> மஞ்சள் அக்கி</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    நாந்தி சடங்கு இல்லாமல் திருமணம் செய்யலாமா?
                </h2>

                <p>
                    இது குடும்பத்திற்கு குடும்பம் முடிவு செய்யக்கூடிய விஷயம்.
                    சில நவீன குடும்பங்கள் இந்த சடங்கை செய்வதில்லை;
                    சில இடங்களில் வெளி நாட்டு திருமணங்களில் நேர வரையறையால் அது நடப்பதில்லை.
                    ஆனால் பாரம்பரிய பார்வையில், திருமணத்துக்கு முன் நாந்தி செய்வது அவசியம் என்று
                    வாத்தியார்கள் வலியுறுத்துவார்கள் — ஏனென்றால் முன்னோர் ஆசி இல்லாத
                    மங்களம் முழுமையடையாது என்பது நம்பிக்கை.
                </p>

                <p>
                    வாய்ப்பிருந்தால், இந்த சடங்கை அனுபவிக்க முயற்சியுங்கள்.
                    அவசரபட்டு செய்யாமல், வாத்தியாரிடம் ஒவ்வொரு மந்திரத்தின் அர்த்தமும்
                    கேளுங்கள். அது ஒரு வெறும் சடங்காக இல்லாமல்,
                    உங்கள் குடும்ப வரலாற்றோடு இணையும் நேரமாக மாறும்.
                </p>

                <div className="bg-green-50 p-8 rounded-2xl my-8 border border-green-100">
                    <h3 className="text-lg font-bold text-green-900 mb-4">முடிவுரை</h3>
                    <p className="text-green-800 leading-relaxed">
                        நாந்தி சடங்கு, திருமண நாளில் நாம் காண்கிற பல சடங்குகளுக்கும் முன்பே நடக்கும்
                        ஒன்று. ஆனால் அதன் ஆழம் அளவிட முடியாதது. இது தமிழ் மரபின்
                        மிக அழகான கோட்பாட்டை வெளிப்படுத்துகிறது — நாம் யாரிலிருந்து வந்தோமோ
                        அவர்களை மறவாமல், புதியதை தொடங்குவது. நாந்தி சடங்கு முன்னோர்களுக்கு
                        செய்யும் விடைப்பு அல்ல — அவர்களை திருமண மேடைக்கு அழைக்கும் அன்பான
                        அழைப்பு.
                    </p>
                </div>

                
                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🛠️</span> எங்களின் இலவச திருமண கருவிகள்
                    </h3>
                    <p className="text-gray-700 mb-6">
                        திருமண ஏற்பாடுகளை எளிமையாக்க நாங்கள் வழங்கும் இலவச டிஜிட்டல் கருவிகளைப் பயன்படுத்தி மகிழுங்கள்.
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
                    name="மீனாட்சி சுந்தரம்"
                    role="Culture & Rituals Expert"
                    bio="மீனாட்சி சுந்தரம் தமிழ் திருமண மரபுகள் மற்றும் சடங்குகள் குறித்து ஆழமான அறிவும் நேரடி அனுபவமும் கொண்ட பண்பாட்டு எழுத்தாளர். தமிழ்நாடு முழுவதிலும் பல திருமண நிகழ்வுகளில் பங்கேற்று, ஒவ்வொரு சடங்கின் பின்னணியையும் குடும்பங்களுக்கு விளக்கி வருகிறார்."
                />
                <RelatedArticles 
                    currentSlug="/blog/naandi-ceremony" 
                    category="Traditions" 
                />

            </div>
        </article>
    );
}
