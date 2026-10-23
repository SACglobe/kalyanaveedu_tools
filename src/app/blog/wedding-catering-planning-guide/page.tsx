import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'திருமண விருந்து திட்டமிடல்',
    description: 'திருமண விருந்து திட்டமிடல் - ஒரு ஆளுக்கு எவ்வளவு? சாப்பாடு வகைகள், caterer தேர்வு, food waste தவிர்ப்பது',
    keywords: ['wedding', 'catering', 'planning', 'guide', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/wedding-catering-planning-guide`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'திருமண விருந்து திட்டமிடல்',
                    description: 'திருமண விருந்து திட்டமிடல் - ஒரு ஆளுக்கு எவ்வளவு? சாப்பாடு வகைகள், caterer தேர்வு, food waste தவிர்ப்பது',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-10-28',
                    slug: '/blog/wedding-catering-planning-guide'
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
                    திருமண விருந்து திட்டமிடல்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="திருமண விருந்து திட்டமிடல்"
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

<p className="text-xl text-gray-600 mb-8 leading-relaxed">
  தமிழ் திருமணங்களில் &quot;வந்தாரை வாழ வைக்கும் விருந்தோம்பல்&quot; என்பது வெறும் வார்த்தை அல்ல; அது நமது பண்பாட்டின் உயிர்நாடி. கல்யாணம் முடிந்து செல்லும் விருந்தினர்கள் மனதில் காலத்திற்கும் நிற்பது நாம் பரிமாறிய சுவையான உணவும், அன்பான உபசரிப்பும்தான். &quot;கல்யாணம் எப்படிப்பா இருந்தது?&quot; என்று யாராவது கேட்டால், 90% மனிதர்கள் முதலில் சொல்வது &quot;சாப்பாடு பிரமாதம்!&quot; அல்லது &quot;உணவு கொஞ்சம் சுமார்&quot; என்பதாகத்தான் இருக்கும். எனவே, திருமணத் திட்டமிடலில் மிக முக்கியமான, அதே வேளையில் அதிக பட்ஜெட் அடங்கிய பகுதி விருந்து உபசரிப்பு ஆகும். இந்த வழிகாட்டியில், ஒரு நபருக்கான உணவுச் செலவு கணக்கீடு, பாரம்பரிய சாப்பாடு வகைகள், கேட்டரர் தேர்வு செய்யும் முறைகள் மற்றும் உணவு வீணாவதைத் தடுக்கும் வழிகளை விரிவாகக் காண்போம்.
</p>

<div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
  <p className="text-orange-900 font-medium m-0">
    <strong>முக்கியக் குறிப்பு:</strong> திருமண உணவு பட்ஜெட்டைத் தீர்மானிப்பதற்கு முன், உங்கள் மொத்த விருந்தினர்களின் எண்ணிக்கையைத் துல்லியமாகக் கணிப்பது அவசியம். சராசரியாக மொத்த திருமண பட்ஜெட்டில் 35% முதல் 45% வரை உணவு உபசரிப்பிற்கே செலவாகிறது.
  </p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. தமிழ் பாரம்பரியத்தில் கல்யாண விருந்து &amp; மண்டல வேறுபாடுகள்</h2>

<p className="text-gray-700 leading-relaxed mb-6">
  பண்டைய காலம் தொட்டே தமிழில் &quot;தலைவாழை இலை போட்டு உபசரித்தல்&quot; என்பது உயர்ந்த மரியாதையின் அடையாளமாகக் கருதப்படுகிறது. வாழை இலையின் நுனிப்பகுதி உண்பவரின் இடதுபுறமும், அகலமான பகுதி வலதுபுறமும் அமைவதுதான் பாரம்பரிய பரிமாறும் முறை. இலையில் உப்பு, இனிப்பு, பச்சடி, பொரியல், கூட்டு, வறுவல் எனத் தொடங்கி, சாதம், சாம்பார், வத்தக்குழம்பு, ரசம், மோர், பாயாசம் என வரிசையாகப் பரிமாறுவது நமது உடலின் செரிமான மண்டலத்திற்கு உகந்த அறிவியல் பூர்வமான முறையுமாகும்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">மண்டல ரீதியான உணவுச் சிறப்புகள் (Regional Variations)</h3>

<ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
  <li>
    <strong>செட்டிநாடு விருந்து:</strong> காரசாரமான மசாலாப் பொருட்கள், கவுனி அரிசி பாயாசம், வெள்ளைப் பணியாரம், கந்தரப்பம் மற்றும் பாரம்பரிய அசைவ/சைவ சுவைகளுக்கு பெயர் பெற்றது.
  </li>
  <li>
    <strong>கொங்கு மண்டல சாப்பாடு:</strong> தேங்காய் பால், பருப்பு சாதம், சீரக சம்பா அரிசி உணவுகள், கம்பு/கேழ்வரகு சிற்றுண்டிகள் மற்றும் நெய் வாசனை நிறைந்த சுவையான பொரியல்கள் பிரதான இடம் பிடிக்கும்.
  </li>
  <li>
    <strong>தஞ்சாவூர் / மத்திய தமிழகம்:</strong> கதம்ப சாம்பார், மணமணக்கும் வத்தக்குழம்பு, அசோகா அல்வா, பருப்பு உசிலி மற்றும் கல்யாண ரசம் நிறைந்த தூய சைவ வாழை இலை விருந்து.
  </li>
  <li>
    <strong>தென் மாவட்டங்கள் (மதுரை/திருநெல்வேலி):</strong> அல்வா, சோதி, வறுத்த கறி, சீரக சம்பா பிரியாணி மற்றும் காய்கறி மசியல் உணவுகள் பிரபலம்.
  </li>
  <li>
    <strong>பிராமணர் சுபமுகூர்த்த சாப்பாடு:</strong> வெங்காயம் மற்றும் பூண்டு சேர்க்கப்படாத சத்துவ உணவுகள், கல்யாண ரசம், பருப்பு பாயாசம், சுடச்சுட போளி மற்றும் பச்சடி வகைகள்.
  </li>
</ul>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. ஒரு நபருக்கான செலவு கணக்கீடு (Cost Per Head Breakdown)</h2>

<p className="text-gray-700 leading-relaxed mb-6">
  இன்றைய சந்தை நிலவரப்படி, திருமண மண்டபத்தின் தரம், மெனுவின் அளவுகோல் மற்றும் கேட்கப்படும் சிறப்பு ஸ்டால்களைப் பொறுத்து ஒரு நபருக்கான (Per Plate / Per Head) கட்டணம் மாறுபடும். கீழே கொடுக்கப்பட்டுள்ள கட்டண விவரங்கள் ஒரு தோராயமான வழிகாட்டியாகும்:
</p>

<div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
  <h3 className="text-lg font-bold text-blue-900 mb-4">உணவு பட்ஜெட் ஒப்பீடு (Per Plate Cost Breakdown)</h3>
  <ul className="space-y-3 text-blue-900">
    <li>
      <strong>எளிய சைவ வாழை இலை விருந்து:</strong> ₹180 – ₹280 (12-15 உணவுப் பொருட்கள், பாரம்பரிய பரிமாறல்)
    </li>
    <li>
      <strong>நடுத்தர சைவ விருந்து (Standard Feast):</strong> ₹300 – ₹500 (18-25 பொருட்கள், ஸ்வீட்ஸ், ஐஸ்கிரீம், வெல்கம் டிரிங்க்ஸ்)
    </li>
    <li>
      <strong>கிராண்ட் பஃபே / அசைவ விருந்து (Grand Buffet/Non-Veg):</strong> ₹550 – ₹1,200+ (லைவ் சாட் கவுண்டர்கள், அசைவ உணவுகள், மாடர்ன் டெஸர்ட்ஸ்)
    </li>
    <li>
      <strong>சிறப்பு மாலை வரவேற்பு சிற்றுண்டி (Reception Evening Snacks):</strong> ₹150 – ₹300 (டீ/காபி, சூப், சாட் வகைகள், கேக்/ஸ்வீட்)
    </li>
  </ul>
</div>

<p className="text-gray-700 leading-relaxed mb-6">
  <strong>மறைமுக செலவுகள் (Hidden Costs to Watch For):</strong> வெறும் தட்டு கட்டணம் மட்டும் முடிவல்ல. கேட்டரிங் நிறுவனத்திடம் பேசும்போது கீழே உள்ள செலவுகள் சோ்க்கப்பட்டுள்ளதா என்பதை உறுதி செய்து கொள்ளுங்கள்:
</p>

<ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
  <li>ஜிஎஸ்டி (GST - 5% அல்லது 18%)</li>
  <li>பரிமாறுபவர்களின் கூலி (Service Staff Tips &amp; Wages)</li>
  <li>வாழை இலை மற்றும் தண்ணீர் பாட்டில்/பேப்பர் கப் செலவு</li>
  <li>எச்சில் இலை அகற்றுதல் மற்றும் மண்டப சுத்திகரிப்பு கட்டணம் (Cleaning Charges)</li>
  <li>போக்குவரத்து கட்டணம் (Transportation Fees)</li>
</ul>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. சிறந்த Caterer தேர்வு செய்யும் 5 படிநிலைகள்</h2>

<p className="text-gray-700 leading-relaxed mb-6">
  ஒரு நல்ல கேட்டரிங் சேவை நிறுவனம் உங்கள் திருமணத்தின் வெற்றியைத் தீர்மானிக்கிறது. அவசரப்பட்டு முன்பணம் கொடுப்பதற்கு முன் இந்த 5 படிநிலைகளைப் பின்பற்றுங்கள்:
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 1: உணவு சுவைத்துப் பார்த்தல் (Food Tasting Session)</h3>
<p className="text-gray-700 leading-relaxed mb-6">
  கேட்டரர் நடத்தும் வேறு ஒரு திருமண நிகழ்விற்கோ அல்லது அவர்களின் பிரத்யேக கிச்சனுக்கோ சென்று உணவின் சுவை, தரம் மற்றும் சூட்டை நேரடியாகச் சோதியுங்கள். குறிப்பாக சாம்பார், ரசம் மற்றும் அல்வா/பாயாசம் ஆகியவற்றின் சுவை சீராக உள்ளதா எனப் பாருங்கள்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 2: சேவையாளர்களின் ஒழுக்கம் மற்றும் தூய்மை (Staff Hygiene)</h3>
<p className="text-gray-700 leading-relaxed mb-6">
  பரிமாறுபவர்கள் சுத்தமான சீருடை (Uniform), தலைக்கவசம் (Hairnet) மற்றும் கையுறைகள் (Gloves) அணிகிறார்களா? விருந்தினர்களை இன்முகத்துடன் &quot;வாருங்கள், சாப்பிடுங்கள்&quot; என்று அன்போடு உபசரிக்கிறார்களா என்பதை கவனியுங்கள்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 3: நெகிழ்வுத்தன்மை (Menu Customization)</h3>
<p className="text-gray-700 leading-relaxed mb-6">
  உங்கள் குடும்ப பாரம்பரியத்திற்கு ஏற்ப மெனுவில் மாற்றங்கள் செய்ய கேட்டரர் சம்மதிக்க வேண்டும். சர்க்கரை நோயாளிகளுக்கான சிறப்பு உணவுகள் அல்லது குழந்தைகளுக்கான காரமில்லாத உணவுகளை வழங்க முடிகிறதா எனக் கேளுங்கள்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 4: வாடிக்கையாளர் மதிப்புரைகள் (Reviews &amp; References)</h3>
<p className="text-gray-700 leading-relaxed mb-6">
  Kalyanaveedu தளத்திலோ அல்லது கூகுள் ரிவியூஸிலோ அந்த கேட்டரிங் நிறுவனத்தைப் பற்றி முந்தைய வாடிக்கையாளர்கள் எழுதியுள்ள கருத்துக்களைப் படியுங்கள்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 5: தெளிவான எழுத்துப்பூர்வ ஒப்பந்தம் (Written Agreement)</h3>
<p className="text-gray-700 leading-relaxed mb-6">
  மெனு பட்டியல், ஒரு தட்டின் விலை, முன்பணம் (Advance), ரத்து செய்யும் விதிகள் (Cancellation Policy) மற்றும் கூடுதல் தட்டுகளுக்கான கட்டணம் ஆகியவற்றைத் தெளிவாகப் பத்திரத்தில் அல்லது பில்லில் எழுதி வாங்கிக் கொள்ளுங்கள்.
</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. திருமண விருந்து உணவுகளின் மாதிரி பட்டியல் (Sample Wedding Menu)</h2>

<p className="text-gray-700 leading-relaxed mb-6">
  விருந்தினர்களைத் திருப்திப்படுத்தக்கூடிய ஒரு தரமான முகூர்த்த நாள் உணவுப் பட்டியல் மாதிரி கீழே கொடுக்கப்பட்டுள்ளது:
</p>

<div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
  <h3 className="text-xl font-bold text-gray-900 mb-4">சிறந்த கல்யாண மதிய உணவு (Grand Leaf Lunch)</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
    <div>
      <p className="font-semibold text-orange-600 mb-2">இனிப்பு &amp; நொறுக்குத்தீனி:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>திருநெல்வேலி கோதுமை அல்வா / அசோகா அல்வா</li>
        <li>உளுந்து மெது வடை / பருப்பு வடை</li>
        <li>ஆப்பிள் ஜாம் / மிளகு அப்பளம்</li>
      </ul>
    </div>
    <div>
      <p className="font-semibold text-orange-600 mb-2">கூட்டு &amp; பொரியல்:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>சேப்பக்கிழங்கு வறுவல் / உருளைக்கிழங்கு காரக்கறி</li>
        <li>அவியல் / கதம்ப பொரியல்</li>
        <li>வெள்ளரிக்காய் தயிர் பச்சடி</li>
      </ul>
    </div>
    <div className="mt-4">
      <p className="font-semibold text-orange-600 mb-2">பிரதான உணவுகள்:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>சுடச்சுட பொன்னி அரிசி சாதம்</li>
        <li>கல்யாண முருங்கைக்காய் கத்தரிக்காய் சாம்பார்</li>
        <li>பூண்டு வத்தக்குழம்பு / மோர்குழம்பு</li>
        <li>மிளகு பூண்டு ரசம்</li>
      </ul>
    </div>
    <div className="mt-4">
      <p className="font-semibold text-orange-600 mb-2">டெஸர்ட் &amp; பானங்கள்:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>சேமியா ஜவ்வரிசி பாயாசம் / எளநீர் பாயாசம்</li>
        <li>கெட்டித் தயிர் / ஜீரக மோர்</li>
        <li>மாம்பழம் / வாழைப்பழம் &amp; வெற்றிலை பாக்கு (பீடா)</li>
      </ul>
    </div>
  </div>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. உணவு வீணாவதைத் தடுக்கும் வழிகள் (Food Waste Prevention)</h2>

<p className="text-gray-700 leading-relaxed mb-6">
  இந்தியத் திருமணங்களில் மிகப்பெரிய கவலைக்குரிய விஷயம் உணவு வீணாவதுதான். ஆண்டிற்கு பல டன் சத்தான உணவுகள் குப்பையில் கொட்டப்படுகின்றன. இதைத் தவிர்க்க சில எளிய உத்திகள்:
</p>

<ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
  <li>
    <strong>15% விதி (The 15% Rule):</strong> நீங்கள் 1000 பேருக்கு அழைப்பிதழ் கொடுத்திருந்தால், பொதுவாக 800 முதல் 850 நபர்கள் மட்டுமே வருவார்கள். எனவே 850 பேருக்கு உணவு தயாரித்து, தேவைப்பட்டால் உடனடியாக தயாரிக்கும் எளிய உணவுகளை (Quick add-ons) வைத்திருக்க கேட்டரரிடம் கூறுங்கள்.
  </li>
  <li>
    <strong>லைவ் கவுண்டர்கள் (Live Counters):</strong> தோசை, ஆப்பம், பூரி போன்ற உணவுகளை முன்கூட்டியே சுட்டு வைக்காமல், ஆர்டருக்கு ஏற்ப உடனுக்குடன் சுட்டுப் பரிமாறும்போது உணவு வீணாவது வெகுவாகக் குறையும்.
  </li>
  <li>
    <strong>சிறிய அளவு பரிமாறுதல்:</strong> வாழை இலையில் பரிமாறும்போது பெரிய கரண்டிகளுக்குப் பதிலாக சிறிய கரண்டிகளைப் பயன்படுத்தி, விருந்தினர் கேட்க கேட்க மீண்டும் பரிமாறுவது வீணாவதைத் தடுக்கும்.
  </li>
</ul>

<div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
  <h3 className="text-xl font-bold text-blue-900 mb-3">மீதமான உணவை தொண்டு நிறுவனங்களுக்கு தானம் செய்யுங்கள்!</h3>
  <p className="text-blue-800 leading-relaxed mb-4">
    திருமணம் முடிந்ததும் மீதமிருக்கும் சுத்தமான உணவைக் குப்பையில் கொட்டாமல், பசித்தோருக்கு உதவும் தொண்டு நிறுவனங்களுக்கு உடனே வழங்கலாம்.
  </p>
  <div className="bg-white p-4 rounded-lg border border-blue-200">
    <p className="font-bold text-gray-900 m-0">No Food Waste (தொண்டு நிறுவனம்):</p>
    <p className="text-gray-700 m-0">உதவி எண் (Helpline): <strong>+91 90877 90877</strong></p>
    <p className="text-gray-700 m-0">இணையதளம்: <a href="https://nofoodwaste.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">nofoodwaste.org</a></p>
    <p className="text-sm text-gray-500 mt-2 m-0">*திருமணம் முடிவதற்கு 2 மணி நேரத்திற்கு முன்பே இவர்களைத் தொடர்புகொண்டால், அவர்களே வாகனத்துடன் வந்து உணவைச் சேகரித்துக் கொள்வார்கள்.</p>
  </div>
</div>

<div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
  <h3 className="text-xl font-bold text-green-900 mb-3">நினைவில் கொள்ள வேண்டிய விரைவான உதவிக்குறிப்புகள் (Quick Tips)</h3>
  <ul className="list-disc pl-6 space-y-2 text-green-800">
    <li>திருமணத்திற்கு குறைந்தது 3 முதல் 6 மாதங்களுக்கு முன்பே கேட்டரரை முன்பதிவு செய்துவிடுங்கள்.</li>
    <li>குழந்தைகளுக்காக பஞ்சுமிட்டாய் (Cotton Candy) மற்றும் பாப்கார்ன் ஸ்டால்கள் அமைப்பது அவர்களை மகிழ்ச்சியாக வைக்கும்.</li>
    <li>சுத்திகரிக்கப்பட்ட குடிநீர் (RO Water) மற்றும் பேப்பர் கப்கள் போதுமான அளவு இருப்பதை உறுதி செய்யுங்கள்.</li>
    <li>உணவுக்கூடத்திற்கு அருகில் கழிவறை மற்றும் கை கழுவும் இடம் (Washbasin) சுத்தமாக இருப்பதை மண்டப ஊழியர்களிடம் வலியுறுத்துங்கள்.</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">முடிவுரை</h2>

<p className="text-gray-700 leading-relaxed mb-6">
  திருமண விருந்து என்பது வெறும் பசியை ஆற்றுவது மட்டுமல்ல; அது உங்கள் குடும்பத்தின் அன்பையும் உபசரிப்பையும் வெளிப்படுத்தும் ஒரு கலை. சரியான திட்டமிடல், தரமான கேட்டரர் தேர்வு மற்றும் விவேகமான உணவு மேலாண்மை ஆகியவை உங்கள் வீட்டுத் திருமண விருந்தை அனைவரது மனதிலும் என்றென்றும் நீங்காத இனிமையான நினைவாக மாற்றும். உங்கள் திருமணத் தேவைகளுக்கான சிறந்த கேட்டரிங் நிறுவனங்களைக் கண்டறிய कल्याणவீடு (Kalyanaveedu.in) தளத்தைப் பயன்படுத்துங்கள்!
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
                    name="சித்ரை செல்வன்"
                    role="Founder & Lead Developer"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். திருமண திட்டமிடலை எளிமையாக்குவதும், தமிழ் குடும்பங்களுக்கு பயனுள்ள வழிகாட்டுதல் வழங்குவதும் அவரின் நோக்கம்."
                />
                <RelatedArticles 
                    currentSlug="/blog/wedding-catering-planning-guide" 
                    category="wedding-guide" 
                />
            </div>
        </article>
    );
}
