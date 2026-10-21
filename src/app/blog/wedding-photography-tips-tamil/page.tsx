import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'திருமண புகைப்படக் கலைஞரை தேர்ந்தெடுப்பது எப்படி?',
    description: 'திருமண புகைப்படக் கலைஞரை தேர்ந்தெடுப்பது எப்படி? - விலை, போர்ட்ஃபோலியோ சோதனை, கேட்க வேண்டிய கேள்விகள்',
    keywords: ['wedding', 'photography', 'tips', 'tamil', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/wedding-photography-tips-tamil`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'திருமண புகைப்படக் கலைஞரை தேர்ந்தெடுப்பது எப்படி?',
                    description: 'திருமண புகைப்படக் கலைஞரை தேர்ந்தெடுப்பது எப்படி? - விலை, போர்ட்ஃபோலியோ சோதனை, கேட்க வேண்டிய கேள்விகள்',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-10-25',
                    slug: '/blog/wedding-photography-tips-tamil'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'திருமண வழிகாட்டி', item: '/blog?category=wedding-guide' },
                    ]
                }} 
            />

            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    💍 திருமண வழிகாட்டி
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    திருமண புகைப்படக் கலைஞரை தேர்ந்தெடுப்பது எப்படி?
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="திருமண புகைப்படக் கலைஞரை தேர்ந்தெடுப்பது எப்படி?"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="அக்டோபர் 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

<p className="text-lg leading-relaxed text-gray-700 mb-6">
  திருமணம் என்பது இரு மனங்கள் இணையும் புனிதமான நிகழ்வு மட்டுமல்ல; அது வாழ்நாளின் மிக அழகிய நினைவுகளின் பொக்கிஷம். திருமண நாளன்று நடக்கும் ஒவ்வொரு உணர்ச்சிப்பூர்வமான தருணங்களையும், சிரிப்பையும், மகிழ்ச்சிக் கண்ணீரையும் பல வருடங்களுக்குப் பிறகும் உயிர்ப்புடன் வைத்திருப்பது நீங்கள் தேர்ந்தெடுக்கும் திருமண புகைப்படக் கலைஞர் (Wedding Photographer) எடுக்கும் புகைப்படங்களே ஆகும். 
</p>

<p className="text-lg leading-relaxed text-gray-700 mb-6">
  இன்றைய காலகட்டத்தில், நூற்றுக்கணக்கான புகைப்படக் கலைஞர்கள் மற்றும் வீடியோகிராஃபர்கள் சந்தையில் உள்ள நிலையில், உங்கள் மனதிற்கு உகந்த, உங்கள் பட்ஜெட்டிற்கு ஏற்ற சிறந்த புகைப்படக் கலைஞரைத் தேர்ந்தெடுப்பது சற்றே சவாலான காரியமாகும். கல்யாண வீடு (kalyanaveedu.in) வழங்கும் இந்த விரிவான வழிகாட்டியில், போர்ட்ஃபோலியோவை ஆய்வு செய்வது எப்படி, பட்ஜெட் திட்டமிடல், மற்றும் ஒப்பந்தம் செய்வதற்கு முன் கேட்க வேண்டிய முக்கிய கேள்விகள் பற்றி விரிவாகக் காண்போம்.
</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
  1. திருமண புகைப்பட பாணிகள் (Wedding Photography Styles)
</h2>

<p className="text-lg leading-relaxed text-gray-700 mb-4">
  ஒரு புகைப்படக் கலைஞரைத் தேடத் தொடங்குவதற்கு முன், உங்களுக்கு என்ன வகையான புகைப்பட பாணி பிடிக்கும் என்பதை நீங்கள் தெளிவாகப் புரிந்துகொள்ள வேண்டும். பொதுவாக தமிழ் திருமணங்களில் மூன்று முக்கிய பாணிகள் பின்பற்றப்படுகின்றன:
</p>

<ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
  <li>
    <strong>பாரம்பரிய புகைப்படம் (Traditional Photography):</strong> இதில் புகைப்படக் கலைஞர் நேரடியாக கேமராவைப் பார்க்கச் சொல்லி போஸ் கொடுக்க வைப்பார். மேடை நிகழ்வுகள், உறவினர்கள் மற்றும் விருந்தினர்களுடன் எடுக்கும் படங்கள், முகூர்த்த தருணங்கள் ஆகியவை இதில் அடங்கும். அனைத்து உறவினர்களையும் படத்தில் கொண்டுவர இது அவசியம்.
  </li>
  <li>
    <strong>கேண்டிட் புகைப்படம் (Candid Photography):</strong> நீங்கள் அறியாத தருணங்களில், இயற்கை உணர்வுகளான சிரிப்பு, நெகிழ்ச்சி, இயல்பான உரையாடல்கள் போன்றவற்றை கலைநயத்துடன் படம்பிடிப்பது கேண்டிட் பாணியாகும். இதில் வெளிச்சம் மற்றும் கோணங்கள் மிகவும் அழகாக இருக்கும்.
  </li>
  <li>
    <strong>சினிமாடிக் வீடியோ (Cinematic Videography):</strong> சாதாரண வீடியோ போல் அல்லாமல், திரைப்படப் பாணியில் கதையமைப்புடன், பின்னணி இசை, ட்ரோன் ஷாட்கள் மற்றும் சிறப்புத் தொகுப்புகளுடன் திருமண நிகழ்வை ஒரு குறும்படம் போல மாற்றுவதாகும்.
  </li>
</ul>

<div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
  <h3 className="text-xl font-bold text-blue-900 mb-2">குறிப்பு: தமிழ் திருமணங்களுக்கான சிறந்த கலவை</h3>
  <p className="text-blue-800">
    தமிழ் திருமணங்களில் சடங்குகள் மற்றும் உறவினர்களின் வருகை அதிகமாக இருப்பதால், 100% கேண்டிட் மட்டும் போதுமானதாக இருக்காது. எனவே, &quot;பாரம்பரியம் + கேண்டிட்&quot; (Traditional + Candid Combo) சேர்ந்த தொகுப்பைத் தேர்ந்தெடுப்பதே சிறந்தது.
  </p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
  2. போர்ட்ஃபோலியோவை (Portfolio) எவ்வாறு ஆய்வு செய்வது?
</h2>

<p className="text-lg leading-relaxed text-gray-700 mb-4">
  இன்ஸ்டாகிராம் அல்லது ஃபேஸ்புக்கில் புகைப்படக் கலைஞர் பதிவேற்றும் 5 அல்லது 6 சிறந்த படங்களை மட்டும் பார்த்து முடிவெடுக்கக் கூடாது. இன்ஸ்டாகிராமில் எப்போதும் மிகச்சிறந்த புகைப்படங்கள் மட்டுமே பதிவிடப்படும். உண்மையான திறமையை அறிய பின்வரும் விஷயங்களைக் கவனிக்க வேண்டும்:
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">அ) முழுமையான ஆல்பத்தைப் பார்க்கவும் (Full Album Check)</h3>
<p className="text-lg leading-relaxed text-gray-700 mb-4">
  புகைப்படக் கலைஞரிடம் அவர்கள் சமீபத்தில் முடித்த ஏதேனும் 2 அல்லது 3 திருமணங்களின் முழுமையான ஆல்பத்தை (Full Wedding Gallery) காட்டுமாறு கேட்க வேண்டும். இதன் மூலம் காலையிலிருந்து இரவு வரை சடங்குகளை அவர்கள் எப்படிப் படம்பிடித்துள்ளனர் என்பதை அறியலாம்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">ஆ) ஒளி அமைப்பைக் கவனியுங்கள் (Lighting & Conditions)</h3>
<p className="text-lg leading-relaxed text-gray-700 mb-4">
  தமிழ் திருமண மண்டபங்களில் வெளிச்சம் ஒரே மாதிரியாக இருக்காது. காலை முகூர்த்த ஒளி, மாலை ரிசப்ஷன் வண்ண விளக்குகள், மற்றும் கூட்ட நெரிசல் உள்ள இடங்களில் புகைப்படங்கள் தெளிவாக இருக்கிறதா, மங்கலாக உள்ளதா (Blur) என்பதைச் சரிபார்க்கவும்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">இ) தமிழ் பாரம்பரிய சடங்குகளின் புரிதல்</h3>
<p className="text-lg leading-relaxed text-gray-700 mb-4">
  தமிழ் கலாச்சார திருமணங்களில் மாப்பிள்ளை அழைப்பு, நிச்சயதார்த்தம், மாங்கல்ய தாரணம் (தாலி கட்டுதல்), சப்தபதி, மற்றும் அம்மி மிதித்தல் போன்ற மிக முக்கியமான தருணங்கள் நொடிப் பொழுதில் நடந்துவிடும். அந்தத் தருணங்களை அவர்கள் தவறவிடாமல் படம்பிடித்துள்ளார்களா என்பதை போர்ட்ஃபோலியோவில் உறுதிசெய்யவும்.
</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
  3. கட்டணம் மற்றும் பட்ஜெட் திட்டமிடல் (Pricing & Budgeting)
</h2>

<p className="text-lg leading-relaxed text-gray-700 mb-4">
  தமிழ்நாட்டில் திருமண புகைப்படக் கலைஞர்களின் கட்டணம் அவர்களின் அனுபவம், பயன்படுத்தும் உபகரணங்கள் மற்றும் குழுவின் அளவைப் பொறுத்து மாறுபடும். பொதுவாக சந்தை நிலவரம் பின்வருமாறு வகைப்படுத்தப்படுகிறது:
</p>

<ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
  <li>
    <strong>அடிப்படை தொகுப்பு (Basic Package):</strong> ₹50,000 முதல் ₹1,20,000 வரை (பாரம்பரிய போட்டோ &amp; வீடியோ, 1 ஆல்பம்).
  </li>
  <li>
    <strong>நடுத்தர தொகுப்பு (Mid-Range Package):</strong> ₹1,50,000 முதல் ₹3,00,000 வரை (பாரம்பரியம் + கேண்டிட் போட்டோ/வீடியோ, ட்ரோன், 2 பிரீமியம் ஆல்பம்கள்).
  </li>
  <li>
    <strong>பிரீமியம்/லக்ஸரி தொகுப்பு (Luxury Package):</strong> ₹3,50,000 முதல் ₹8,00,000+ வரை (பிரபல கலைஞர்கள், பிரீ வெடிங் షూட், சினிமாடிக் டீஸர், லைவ் ஸ்ட்ரீமிங், அன்லிமிடெட் ஆல்பம் பக்கங்கள்).
  </li>
</ul>

<div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
  <h3 className="text-lg font-bold text-orange-900 mb-1">எச்சரிக்கை: மறைமுகக் கட்டணங்கள் (Hidden Costs)</h3>
  <p className="text-orange-800">
    ஒப்பந்தத்தில் கையெழுத்திடுவதற்கு முன் பின்வரும் விஷயங்களுக்கு கூடுதல் கட்டணம் உண்டா என்பதைத் தெளிவுபடுத்திக் கொள்ளுங்கள்:
  </p>
  <ul className="list-disc pl-5 mt-2 space-y-1 text-orange-800">
    <li>ஆல்பத்தில் கூடுதல் பக்கங்கள் சேர்த்தால் ஆகும் செலவு.</li>
    <li>புகைப்படக் குழுவின் பயணம் மற்றும் தங்குமிடம் (Travel &amp; Accommodation).</li>
    <li>ஹார்ட் டிஸ்க் அல்லது RAW ஃபைல்கள் வழங்குவதற்கான கட்டணம்.</li>
    <li>ட்ரோன் (Drone) அனுமதி மற்றும் இயக்கக் கட்டணம்.</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
  4. புகைப்படக் கலைஞரிடம் கேட்க வேண்டிய 10 முக்கிய கேள்விகள்
</h2>

<p className="text-lg leading-relaxed text-gray-700 mb-4">
  புகைப்படக் கலைஞரை இறுதி செய்யும் முன் (Booking Confirmation), கீழ்க்கண்ட கேள்விகளைக் கேட்டு தெளிவுபெறுவது பிற்கால மனக்கசப்புகளைத் தவிர்க்கும்:
</p>

<ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
  <li>எங்கள் திருமண தேதியன்று நீங்கள் நேரடியாக வருவீர்களா அல்லது உங்கள் உதவி அணியை அனுப்புவீர்களா?</li>
  <li>திருமண நாளன்று உங்கள் குழுவில் மொத்தம் எத்தனை நபர்கள் வருகை தருவார்கள்? (Traditional &amp; Candid சேர்ந்து)</li>
  <li>புகைப்படங்கள் மற்றும் வீடியோக்களின் எடிட் செய்யப்பட்ட பதிப்புகள் (Final Delivery) கிடைக்க எத்தனை நாட்கள் ஆகும்?</li>
  <li>எத்தனை புகைப்படங்கள் எடிட் செய்து தரப்படும்? RAW ஃபைல்கள் அனைத்தையும் தருவீர்களா?</li>
  <li>ஆல்பத்தின் தரம் (Paper Quality &amp; Binding) என்ன வகை? எத்தனை பக்கங்கள் சேர்க்கப்படும்?</li>
  <li>முன்பணம் (Advance) எவ்வளவு செலுத்த வேண்டும்? பாக்கித் தொகையை எப்போது கொடுக்க வேண்டும்?</li>
  <li>ஏதேனும் காரணத்தால் திருமணம் தள்ளிப்போனால் ரத்து செய்யும் கொள்கை (Cancellation &amp; Refund Policy) என்ன?</li>
  <li>உபகரணங்கள் பழுதானால் மாற்று உபகரணங்கள் (Backup Equipment) கைவசம் உள்ளதா?</li>
  <li>திருமணத்திற்கு முந்தைய (Pre-Wedding) அல்லது பிந்தைய (Post-Wedding) படப்பிடிப்பு தொகுப்பில் சேர்க்கப்பட்டுள்ளதா?</li>
  <li>லைவ் ஸ்ட்ரீமிங் (Live Streaming/YouTube Live) வசதி செய்து தருவீர்களா?</li>
</ul>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
  5. ஒப்பந்தம் செய்யும் முன் கவனிக்க வேண்டியவை (Contract & Agreement)
</h2>

<p className="text-lg leading-relaxed text-gray-700 mb-4">
  வாய்மொழி வாக்குறுதிகளை மட்டும் நம்பாமல், அனைத்து விவரங்களையும் உள்ளடக்கிய முறையான ஒப்பந்தத்தில் (Written Agreement / Quotation) கையெழுத்திட வேண்டும். ஒப்பந்தத்தில் திருமண தேதி, நிகழ்விடத்தின் முகவரி, படப்பிடிப்பு நேரங்கள், டெலிவரி செய்யப்படும் பொருட்கள் (ஆல்பம், பென்ட்ரைவ், பிரேம்) மற்றும் கட்டண முறைகள் தெளிவாகக் குறிப்பிடப்பட்டிருக்க வேண்டும்.
</p>

<div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
  <h3 className="text-xl font-bold text-green-900 mb-2">சிறந்த அனுபவத்திற்கான எளிய குறிப்புகள் (Pro Tips)</h3>
  <ul className="list-disc pl-5 space-y-2 text-green-800">
    <li>
      <strong>முன்கூட்டியே முன்பதிவு செய்யுங்கள்:</strong> பிரபலமான தமிழ் புகைப்படக் கலைஞர்கள் 6 முதல் 9 மாதங்களுக்கு முன்பே முன்பதிவு செய்யப்பட்டு விடுவார்கள். எனவே திருமண தேதி குறிக்கப்பட்டவுடன் புகைப்படக் கலைஞரைத் தேர்வு செய்யவும்.
    </li>
    <li>
      <strong>குடும்பத்தினரின் பட்டியல் (Family Shot List):</strong> புகைப்படக் கலைஞரிடம் உங்கள் குடும்பத்தின் முக்கிய நபர்கள் மற்றும் நெருங்கிய நண்பர்களின் பட்டியலைக் கொடுத்து விடுங்கள். இதனால் முக்கியமானவர்கள் யாரும் விடுபட மாட்டார்கள்.
    </li>
    <li>
      <strong>ஒளி அமைப்பு மண்டபம்:</strong> திருமண மண்டபத்தில் மஞ்சள் அல்லது இருண்ட விளக்குகளுக்குப் பதிலாக நல்ல பிரகாசமான வெள்ளை/இயற்கை ஒளி அமைப்பு இருக்குமாறு பார்த்துக்கொள்ளவும்.
    </li>
  </ul>
</div>

<div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
  <h3 className="text-xl font-bold text-gray-900 mb-2">சுருக்கம் (Summary)</h3>
  <p className="text-gray-700">
    திருமண புகைப்படக் கலைஞரைத் தேர்ந்தெடுப்பது என்பது வெறுமனே பணத்தைச் செலவழிப்பது அல்ல; அது உங்கள் குடும்பத்தின் வருங்கால சந்ததியினருக்கான நினைவுகளைச் சேமிக்கும் முதலீடு. எனவே, குறைந்த விலைக்கு ஆசைப்படாமல், திறமை, அனுபவம், மற்றும் நல்ல சேவை மனப்பான்மை கொண்ட கலைஞரைத் தேர்ந்தெடுத்து உங்கள் திருமண நாளை மறக்க முடியாத நிகழ்வாக மாற்றுங்கள்!
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
                        <Link href="/tools/subha-muhurtham" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">🌟</span>
                            <div>
                                <div className="font-bold text-gray-900">சுப முகூர்த்தம்</div>
                                <div className="text-xs text-gray-500">நல்ல நாள் தேர்வு</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <AuthorBio 
                    name="சித்ரை செல்வன்"
                    role="Founder & Lead Developer"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். திருமண திட்டமிடலை எளிமையாக்குவதும், தமிழ் குடும்பங்களுக்கு பயனுள்ள வழிகாட்டுதல் வழங்குவதும் அவரின் நோக்கம்."
                />
                <RelatedArticles 
                    currentSlug="/blog/wedding-photography-tips-tamil" 
                    category="wedding-guide" 
                />
            </div>
        </article>
    );
}
