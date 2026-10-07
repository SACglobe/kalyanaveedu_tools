import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'தமிழ்நாட்டில் திருமண பதிவு செய்வது எப்படி? | கல்யாண வீடு',
    description: 'தமிழ்நாட்டில் திருமண பதிவு செய்வது எப்படி? - Hindu Marriage Act, Special Marriage Act, தேவையான ஆவணங்கள், கட்டணம்',
    keywords: ['marriage', 'registration', 'tamilnadu', 'how', 'to', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/marriage-registration-tamilnadu-how-to`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'தமிழ்நாட்டில் திருமண பதிவு செய்வது எப்படி?',
                    description: 'தமிழ்நாட்டில் திருமண பதிவு செய்வது எப்படி? - Hindu Marriage Act, Special Marriage Act, தேவையான ஆவணங்கள், கட்டணம்',
                    author: 'அட்வகேட் சந்திரசேகர்',
                    datePublished: '2026-09-25',
                    slug: '/blog/marriage-registration-tamilnadu-how-to'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'சட்டம் & ஆவணங்கள்', item: '/blog?category=legal-documents' },
                    ]
                }} 
            />

            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    ⚖️ சட்டம் & ஆவணங்கள்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    தமிழ்நாட்டில் திருமண பதிவு செய்வது எப்படி?
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="தமிழ்நாட்டில் திருமண பதிவு செய்வது எப்படி?"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock
                    author="அட்வகேட் சந்திரசேகர்"
                    updatedDate="செப்டம்பர் 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  புதுமணத் தம்பதிகளுக்கு எங்களது 'கல்யாண வீடு' குழுவின் மனமார்ந்த வாழ்த்துகள்! திருமண பந்தத்தில் இணையும் ஒவ்வொரு தம்பதியருக்கும் சடங்குகளும் கொண்டாட்டங்களும் எந்தளவிற்கு முக்கியமோ, அதே அளவிற்குத் திருமணத்தைச் சட்டப்பூர்வமாகப் பதிவு செய்வதும் மிக மிக அவசியமாகும். தமிழ்நாட்டில் 2009-ஆம் ஆண்டு இயற்றப்பட்ட கட்டாயத் திருமணப் பதிவுச் சட்டத்தின்படி, மாநிலத்தில் நடைபெறும் அனைத்துத் திருமணங்களும் கட்டாயமாகப் பதிவு செய்யப்பட வேண்டும்.
</p>

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  வெளிநாட்டு விசா (Passport &amp; Visa) விண்ணப்பங்கள், கூட்டு வங்கிக் கணக்கு தொடங்குதல், காப்பீடு (Insurance) கோருதல், சொத்து உரிமைகள் மற்றும் சட்டப்பூர்வக் குழந்தைகள் பாதுகாப்பு போன்ற பல சூழ்நிலைகளில் திருமணப் பதிவுச் சான்றிதழ் (Marriage Certificate) மிக முக்கிய ஆவணமாகச் செயல்படுகிறது. தமிழ்நாட்டில் திருமணப் பதிவு செய்வதற்கான சட்டங்கள், தேவையான ஆவணங்கள், ஆன்லைன் விண்ணப்ப முறை மற்றும் கட்டண விவரங்களை இந்தக் கட்டுரையில் விரிவாகக் காண்போம்.
</p>

<div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
  <h3 className="text-xl font-bold text-gray-800 mb-3">முக்கியத் தகவல்கள் - சுருக்கம்</h3>
  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong>அதிகாரப்பூர்வ இணையதளம்:</strong> <a href="https://tnreginet.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">TNReginet (tnreginet.gov.in)</a></li>
    <li><strong>முதன்மைச் சட்டங்கள்:</strong> இந்து திருமணச் சட்டம் 1955, சிறப்புத் திருமணச் சட்டம் 1954, தமிழ்நாடு திருமணப் பதிவுச் சட்டம் 2009.</li>
    <li><strong>விண்ணப்பிக்கும் முறை:</strong> TNReginet இணையதளத்தில் ஆன்லைனில் விண்ணப்பித்து, டோக்கன் முன்பதிவு செய்து சார்பதிவாளர் (Sub-Registrar) அலுவலகம் செல்ல வேண்டும்.</li>
    <li><strong>தேவையான சாட்சிகள்:</strong> இந்து திருமணச் சட்டத்திற்கு 2 அல்லது 3 சாட்சிகள், சிறப்புத் திருமணச் சட்டத்திற்கு 3 சாட்சிகள்.</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. திருமணப் பதிவுச் சட்டங்கள்: உங்களுக்கான சரியான சட்டம் எது?</h2>

<p className="text-gray-700 leading-relaxed mb-4">
  தமிழ்நாட்டில் திருமணத்தைப் பதிவு செய்வதற்குப் பல்வேறு சட்டப் பிரிவுகள் உள்ளன. உங்கள் திருமணம் நடைபெற்ற முறை மற்றும் மத நம்பிக்கையின் அடிப்படையில் பொருத்தமான சட்டத்தின் கீழ் பதிவு செய்ய வேண்டும்:
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">அ) இந்து திருமணச் சட்டம், 1955 (Hindu Marriage Act, 1955)</h3>
<p className="text-gray-700 leading-relaxed mb-4">
  மணமகன் மற்றும் மணமகள் இருவருமே இந்து, பௌத்த, சமண அல்லது சீக்கிய மதத்தைச் சேர்ந்தவர்களாக இருந்தால், இந்தச் சட்டத்தின் கீழ் திருமணத்தைப் பதிவு செய்யலாம்.
</p>
<ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
  <li>திருமணம் ஏற்கனவே மதச் சடங்குகளின்படியோ அல்லது பாரம்பரிய முறைப்படியோ நடந்து முடிந்திருக்க வேண்டும்.</li>
  <li>திருமணம் முடிந்த பிறகு எந்த நேரத்திலும் இந்தச் சட்டத்தின் கீழ் பதிவு செய்யலாம்.</li>
  <li>முன்கூட்டியே அறிவிப்பு (Notice) எதுவும் தேவையில்லை.</li>
</ul>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">ஆ) சிறப்புத் திருமணச் சட்டம், 1954 (Special Marriage Act, 1954)</h3>
<p className="text-gray-700 leading-relaxed mb-4">
  வெவ்வேறு மதத்தைச் சேர்ந்தவர்கள் (Inter-faith), வெவ்வேறு சாதியைச் சேர்ந்தவர்கள் அல்லது எந்த மதச் சடங்குகளும் இன்றிச் சட்டப்பூர்வமாகப் பதிவுத் திருமணம் (Court Marriage / Civil Marriage) செய்ய விரும்புபவர்களுக்கு இச்சட்டம் பொருந்தும்.
</p>
<ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
  <li>திருமணத்திற்கு முன் 30 நாட்கள் சார்பதிவாளர் அலுவலக அறிவிப்புப் பலகையில் பொது அறிவிப்பு (Notice Period) வெளியிடப்படும்.</li>
  <li>எந்தவித ஆட்சேபனையும் (Objection) வராத பட்சத்தில், 30 நாட்களுக்குப் பிறகு சார்பதிவாளர் முன்னிலையில் திருமணம் நடைபெறும்.</li>
  <li>மதமாற்றம் செய்ய வேண்டிய அவசியம் இதில் இல்லை.</li>
</ul>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">இ) தமிழ்நாடு திருமணங்கள் பதிவுச் சட்டம், 2009 (Tamil Nadu Registration of Marriages Act, 2009)</h3>
<p className="text-gray-700 leading-relaxed mb-4">
  தமிழ்நாட்டில் எந்த மதத்தைச் சேர்ந்தவர்கள் திருமணம் செய்து கொண்டாலும், அந்தத் திருமணத்தை மாநில அரசிடம் கட்டாயமாகப் பதிவு செய்வதற்காக இச்சட்டம் இயற்றப்பட்டது. கிறிஸ்டியன் அல்லது முஸ்லிம் தனிநபர் சட்டங்களின் கீழ் திருமணம் செய்துகொண்டவர்களும் இச்சட்டத்தின் கீழ் பதிவு செய்யலாம்.
</p>

<div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
  <p className="font-bold text-orange-900 mb-1">முக்கிய குறிப்பு:</p>
  <p className="text-orange-800">
    சட்டப்படி மணமகனுக்கு 21 வயதும், மணமகளுக்கு 18 வயதும் பூர்த்தியாகி இருக்க வேண்டும். வயது பூர்த்தியடையாமல் செய்யப்படும் திருமணங்கள் சட்டப்படி குற்றமாகும் மற்றும் அவை பதிவு செய்யப்பட மாட்டாது.
  </p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. திருமணப் பதிவிற்குத் தேவையான முக்கிய ஆவணங்கள்</h2>

<p className="text-gray-700 leading-relaxed mb-4">
  பதிவு அலுவலகத்திற்குச் செல்லும் முன் பின்வரும் ஆவணங்களின் அசல் (Original) மற்றும் சுய சான்றொப்பமிட்ட (Self-attested) நகல்களைத் தயார் செய்து வைத்துக் கொள்ளவும்:
</p>

<div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
  <h3 className="text-xl font-bold text-blue-900 mb-4">தேவையான ஆவணங்களின் பட்டியல் (Checklist)</h3>
  <ul className="list-disc pl-6 space-y-3 text-gray-800">
    <li><strong>மணமகன் &amp; மணமகளின் வயதுச் சான்று:</strong> 10-ஆம் வகுப்பு / 12-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ், பிறப்புச் சான்றிதழ், பாஸ்போர்ட் அல்லது ஓட்டுநர் உரிமம்.</li>
    <li><strong>முகவரிச் சான்று:</strong> ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை, ரேஷன் கார்டு அல்லது பாஸ்போர்ட்.</li>
    <li><strong>திருமணச் சான்று:</strong> திருமண அழைப்பிதழ் (Wedding Card) மற்றும் திருமணப் மண்டப ரசீது அல்லது கோவில் ரசீது.</li>
    <li><strong>புகைப்படங்கள்:</strong>
      <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-700">
        <li>மணமகன் மற்றும் மணமகளின் தனித்தனி பாஸ்போர்ட் அளவு புகைப்படங்கள் (தலா 4).</li>
        <li>மாலை மாற்றுதல் மற்றும் தாலி கட்டும் தருணம் தெளிவாகத் தெரியும் திருமணப் புகைப்படங்கள் (2 புகைப்படங்கள்).</li>
      </ul>
    </li>
    <li><strong>சாட்சிகளின் ஆவணங்கள்:</strong> 2 அல்லது 3 சாட்சிகளின் ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை மற்றும் பாஸ்போர்ட் அளவு புகைப்படம்.</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. TNReginet இணையதளத்தில் ஆன்லைனில் விண்ணப்பிப்பது எப்படி? (படிமுறை விளக்கம்)</h2>

<p className="text-gray-700 leading-relaxed mb-4">
  தமிழ்நாடு அரசு பதிவுத் துறை 'TNReginet' இணையதளம் மூலம் ஆன்லைன் விண்ணப்ப முறையை மிகவும் எளிமையாக்கியுள்ளது. பின்வரும் படிகளைப் பின்பற்றி நீங்கள் விண்ணப்பிக்கலாம்:
</p>

<ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
  <li>
    <strong>படி 1: இணையதளத்திற்குச் செல்லுதல்:</strong><br />
    தமிழ்நாடு பதிவுத் துறையின் அதிகாரப்பூர்வ இணையதளமான <a href="https://tnreginet.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline font-semibold">tnreginet.gov.in</a> பக்கத்திற்குச் செல்லவும்.
  </li>
  <li>
    <strong>படி 2: பயனர் கணக்கு உருவாக்குதல் (User Registration):</strong><br />
    இணையதளத்தில் 'பயனர் பதிவு' (User Registration) என்பதைத் தேர்ந்தெடுத்து, உங்கள் பெயர், மின்னஞ்சல் மற்றும் கைபேசி எண்ணைக் கொடுத்து கணக்கை உருவாக்கவும்.
  </li>
  <li>
    <strong>படி 3: திருமணப் பதிவு சேவைத் தேர்வு:</strong><br />
    உள்நுழைந்த (Login) பிறகு, 'மின்னணு சேவைகள்' (E-Services) -&gt; 'திருமணப் பதிவு' (Marriage Registration) என்ற விருப்பத்தைத் தேர்ந்தெடுக்கவும்.
  </li>
  <li>
    <strong>படி 4: சட்டம் மற்றும் விவரங்களை நிரப்புதல்:</strong><br />
    உங்களுக்குப் பொருத்தமான சட்டத்தைத் தேர்ந்தெடுத்து (எ.கா. Hindu Marriage Act), மணமகன், மணமகள், பெற்றோர் மற்றும் சாட்சிகளின் விவரங்களைத் துல்லியமாக உள்ளிடவும்.
  </li>
  <li>
    <strong>படி 5: ஆவணங்களைப் பதிவேற்றம் செய்தல்:</strong><br />
    கேட்கப்பட்டுள்ள வயதுச் சான்று, முகவரிச் சான்று, திருமண அழைப்பிதழ் மற்றும் புகைப்படங்களைக் குறிப்பிட்ட அளவீட்டில் (PDF / JPEG) பதிவேற்றம் செய்ய வேண்டும்.
  </li>
  <li>
    <strong>படி 6: கட்டணம் செலுத்துதல் &amp; டோக்கன் முன்பதிவு:</strong><br />
    நிர்ணயிக்கப்பட்ட கல்யாணப் பதிவுக்கான அரசேற்றக் கட்டணத்தை நெட் பேங்கிங் அல்லது யுபிஐ (UPI) மூலம் செலுத்தி, உங்களுக்கு வசதியான நாளில் சார்பதிவாளர் அலுவலகத்திற்குச் செல்ல 'நேர ஒதுக்கீடு' (Token Booking) செய்து கொள்ளவும்.
  </li>
</ul>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. கட்டணம் மற்றும் செயலாக்கக் கால வரம்பு</h2>

<p className="text-gray-700 leading-relaxed mb-4">
  தமிழ்நாட்டில் திருமணப் பதிவிற்கான அரசு கட்டணங்கள் மிகவும் குறைவானவை. சட்டங்களுக்கு ஏற்ப கட்டண விவரங்கள் கீழே கொடுக்கப்பட்டுள்ளன:
</p>

<div className="overflow-x-auto my-6">
  <table className="min-w-full bg-white border border-gray-200 rounded-lg text-left">
    <thead>
      <tr className="bg-orange-100 text-gray-800">
        <th className="py-3 px-4 border-b">சட்டத்தின் பெயர்</th>
        <th className="py-3 px-4 border-b">அரசுப் பதிவுக் கட்டணம்</th>
        <th className="py-3 px-4 border-b">கால வரம்பு</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      <tr className="border-b">
        <td className="py-3 px-4">தமிழ்நாடு திருமணப் பதிவுச் சட்டம் 2009</td>
        <td className="py-3 px-4">₹100 - ₹200 (காலதாமதத்திற்கு அபராதம் உண்டு)</td>
        <td className="py-3 px-4">அன்றே சான்றிதழ் வழங்கப்படும்</td>
      </tr>
      <tr className="border-b bg-gray-50">
        <td className="py-3 px-4">இந்து திருமணச் சட்டம் 1955</td>
        <td className="py-3 px-4">₹100 - ₹500 (சேவைக் கட்டணம் உட்பட)</td>
        <td className="py-3 px-4">அன்றே அல்லது 2-3 நாட்களில்</td>
      </tr>
      <tr>
        <td className="py-3 px-4">சிறப்புத் திருமணச் சட்டம் 1954</td>
        <td className="py-3 px-4">₹100 (அறிவிப்புக் கட்டணம் உட்பட)</td>
        <td className="py-3 px-4">30 நாட்கள் காத்திருப்பு காலம் உண்டு</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-gray-600 text-sm mb-6">
  * குறிப்பு: ஆன்லைன் சேவைக்கான பயன்பாட்டுக் கட்டணங்கள் (User Charges) மற்றும் சான்றிதழின் கூடுதல் நகல்களுக்குச் சிறிய தொகைகள் கூடுதலாக வசூலிக்கப்படலாம்.
</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. சார்பதிவாளர் அலுவலகத்தில் (SRO) நடைபெறும் நடைமுறைகள்</h2>

<p className="text-gray-700 leading-relaxed mb-4">
  முன்பதிவு செய்த நாளில் மணமகன், மணமகள் மற்றும் சாட்சிகள் அனைவரும் அசல் ஆவணங்களுடன் சார்பதிவாளர் (Sub-Registrar) முன்பாக நேரில் ஆஜராக வேண்டும்.
</p>

<ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
  <li><strong>ஆவண சரிபார்ப்பு:</strong> அதிகாரி நீங்கள் பதிவேற்றம் செய்த அசல் ஆவணங்களைச் சரிபார்ப்பார்.</li>
  <li><strong>நேரடிப் புகைப்படம்:</strong> அலுவலகத்திலேயே மணமகன் மற்றும் மணமகளின் கணினிப் புகைப்படம் (Webcam photo) எடுக்கப்படும்.</li>
  <li><strong>கையொப்பம்:</strong> திருமணப் பதிவேட்டில் மணமகன், மணமகள் மற்றும் சாட்சிகள் கையொப்பமிட வேண்டும்.</li>
  <li><strong>சான்றிதழ் வழங்கல்:</strong> சரிபார்ப்பு முடிந்த சில மணி நேரங்களிலோ அல்லது ஆன்லைன் போர்ட்டலிலோ பதிவிறக்கம் செய்யும் வகையில் திருமணப் பதிவுச் சான்றிதழ் (Marriage Certificate with QR Code) வழங்கப்படும்.</li>
</ul>

<div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
  <h3 className="text-xl font-bold text-green-900 mb-3">அட்வகேட் சந்திரசேகரின் சட்ட ஆலோசனைகள் &amp; குறிப்புகள்</h3>
  <ul className="list-disc pl-6 space-y-2 text-green-900">
    <li><strong>எல்லை வரம்பு (Jurisdiction):</strong> திருமணம் நடைபெற்ற எல்லைக்குட்பட்ட சார்பதிவாளர் அலுவலகத்திலோ அல்லது மணமகன்/மணமகள் வசிக்கும் இடத்தின் சார்பதிவாளர் அலுவலகத்திலோ விண்ணப்பிக்கலாம்.</li>
    <li><strong>பெயர் மாற்றம்:</strong> திருமணத்திற்குப் பின் மணமகள் பெயர் மாற்றம் செய்ய விரும்பினால், திருமணச் சான்றிதழ் பெற்ற பிறகு அரசிதழில் (Gazette) வெளியீடு செய்ய வேண்டும்.</li>
    <li><strong>சாட்சிகள் தேர்வு:</strong> சாட்சிகளாகப் பெற்றோர், இரத்த பந்த உறவினர்கள் அல்லது நண்பர்கள் இருக்கலாம். ஆனால் அவர்களின் முகவரிச் சான்றில் உள்ள விவரங்கள் சரியாக இருக்க வேண்டும்.</li>
    <li><strong>தாமதமின்றிப் பதிவு செய்யுங்கள்:</strong> திருமணம் முடிந்த 90 நாட்களுக்குள் பதிவு செய்வது சிறந்தது. தாமதமானால் கூடுதல் அபராதக் கட்டணம் செலுத்த வேண்டிவரும்.</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">முடிவுரை</h2>

<p className="text-gray-700 leading-relaxed mb-6">
  திருமணப் பதிவு என்பது ஒரு சாதாரண அரசு நடைமுறை அல்ல; அது உங்கள் பந்தத்திற்குச் சட்டப்பூர்வப் பாதுகாப்பை வழங்கும் ஒரு மிக முக்கியமான கடமையாகும். இடைத்தரகர்கள் (Brokers) எவரையும் அணுகாமல், தமிழ்நாடு அரசின் TNReginet இணையதளம் வாயிலாக மிகக் குறைந்த செலவிலும் வெளிப்படையான முறையிலும் நீங்களே எளிதாகத் திருமணப் பதிவைச் செய்ய முடியும்.
</p>

<p className="text-gray-700 leading-relaxed">
  உங்கள் திருமணத் திட்டமிடல் மற்றும் திருமணச் சேவைகள் தொடர்பான மேலும் பல தகவல்களுக்கு <strong>கல்யாண வீடு (kalyanaveedu.in)</strong> இணையதளத் தொடர் வழிகாட்டிகளைத் தொடர்ந்து வாசியுங்கள்!
</p>

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
                    name="அட்வகேட் சந்திரசேகர்"
                    role="Family Law Specialist"
                    bio="சந்திரசேகர் சென்னை உயர் நீதிமன்றத்தில் குடும்பச் சட்ட வழக்கறிஞராக பணியாற்றுகிறார். திருமண பதிவு, வரதட்சணை சட்டம் மற்றும் பெண்கள் உரிமைகள் குறித்த கட்டுரைகள் எழுதி வருகிறார்."
                />
                <RelatedArticles 
                    currentSlug="/blog/marriage-registration-tamilnadu-how-to" 
                    category="legal-documents" 
                />
            </div>
        </article>
    );
}
