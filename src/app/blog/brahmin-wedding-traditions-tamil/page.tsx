import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'தமிழ் பார்ப்பனர் திருமண சடங்குகள் | கல்யாண வீடு',
    description: 'தமிழ் பார்ப்பனர் திருமண சடங்குகள் - ஐயர் மற்றும் ஐயங்கார் திருமண முறைகளின் முழுமையான வழிகாட்டி, சப்தபதி, மங்கல்ய தாரணம்',
    keywords: ['brahmin', 'wedding', 'traditions', 'tamil', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/brahmin-wedding-traditions-tamil`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'தமிழ் பார்ப்பனர் திருமண சடங்குகள்',
                    description: 'தமிழ் பார்ப்பனர் திருமண சடங்குகள் - ஐயர் மற்றும் ஐயங்கார் திருமண முறைகளின் முழுமையான வழிகாட்டி, சப்தபதி, மங்கல்ய தாரணம்',
                    author: 'மீனாட்சி சுந்தரம்',
                    datePublished: '2026-10-01',
                    slug: '/blog/brahmin-wedding-traditions-tamil'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'திருமண சடங்குகள்', item: '/blog?category=traditions' },
                    ]
                }} 
            />

            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🪔 திருமண சடங்குகள்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    தமிழ் பார்ப்பனர் திருமண சடங்குகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="தமிழ் பார்ப்பனர் திருமண சடங்குகள்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock
                    author="மீனாட்சி சுந்தரம்"
                    updatedDate="அக்டோபர் 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

<p className="text-xl text-gray-700 leading-relaxed mb-8">
  தமிழ்நாட்டில் பிராமணத் திருமணங்கள் என்பது வெறும் இரு மனங்களின் இணைப்பு மட்டுமல்ல; அது பழங்கால வேத மந்திரங்கள், தத்துவார்த்த சடங்குகள் மற்றும் தலைமுறை தலைமுறையாகப் பேணப்படும் கலாச்சார விழுமியங்களின் புனிதமான கலவையாகும். ஐயர் (ஸ்மார்த்த சம்ப்ரதாயம்) மற்றும் ஐயங்கார் (வைணவ சம்ப்ரதாயம்) ஆகிய இரு பிரிவினரின் திருமண முறைகளும் வேத ஆகமங்களை அடிப்படையாகக் கொண்டவை. கல்யாண வீடு (kalyanaveedu.in) தளத்தின் இந்த சிறப்பு வழிகாட்டியில், தமிழ் பார்ப்பனர் திருமணங்களின் ஒவ்வொரு சடங்கின் ஆன்மீக பின்னணி, சப்தபதி, மாங்கல்ய தாரணம் மற்றும் ஐயர்-ஐயங்கார் மரபுகளுக்கு இடையே உள்ள சுவாரஸ்யமான வேறுபாடுகளை விரிவாகக் காண்போம்.
</p>

<div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
  <p className="font-semibold text-orange-900 m-0">
    <strong>முக்கியப் பார்வை:</strong> வைதீகத் திருமணச் சடங்குகள் அனைத்தும் அக்னி தேவனை சாட்சியாக வைத்து நடத்தப்படுகின்றன. இதில் செய்யப்படும் ஒவ்வொரு சடங்கும் தம்பதியரின் தர்மம், அர்த்தம், காமம், மோட்சம் ஆகிய நான்கு புருஷார்த்தங்களையும் நிறைவேற்றுவதற்காக வடிவமைக்கப்பட்டுள்ளன.
  </p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. நிச்சயதார்த்தம் மற்றும் திருமணத்திற்கு முந்தைய சடங்குகள்</h2>

<p>
  திருமணத்திற்குச் சில நாட்களுக்கு முன்பே முதன்மைச் சடங்குகள் தொடங்கிவிடுகின்றன. இரு வீட்டாருக்கும் இடையிலான உறவை உறுதிப்படுத்துவதும், இறைவனின் அருளை வேண்டுவதும் இதன் நோக்கமாகும்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">நிச்சயதார்த்தம் (Nischayathartham)</h3>
<p>
  மணமகன் மற்றும் மணமகள் வீட்டார் தாம்பூலம் (வெற்றிலை, பாக்கு, பழங்கள்) மாற்றி, லக்ன பத்திரிக்கை வாசித்து, திருமணத்தை அதிகாரப்பூர்வமாக உறுதி செய்யும் சடங்கு இதுவாகும். மணமகளுக்குப் புதிய புடவையும், நகைகளும் வழங்கி ஆசீர்வதிப்பார்கள்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">சுமங்கலி பிரார்த்தனை (Sumangali Prarthanai)</h3>
<p>
  குடும்பத்தில் சுமங்கலியாக வாழ்ந்து மறைந்த பெண் முன்னோர்களின் அருளைப் பெறுவதற்காக நடத்தப்படும் வழிபாடாகும். இதில் வீட்டிலுள்ள மூத்த சுமங்கலிப் பெண்களும், உறவினர்களும் கலந்துகொண்டு பிரார்த்தனை செய்வர்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">விரதம் மற்றும் நாந்தி ஸ்ராத்தம் (Vrutham &amp; Naandi)</h3>
<p>
  திருமண நாளுக்கு முந்தைய நாள் அல்லது அதிகாலையில் மணமகனும், மணமகளும் தனித்தனியாகத் தங்கள் குடும்பப் புரோகிதர் தலைமையில் 'விரதம்' மேற்கொள்வர். மணமகன் பிரம்மச்சரிய ஆசிரமத்திலிருந்து கிரகஸ்த ஆசிரமத்திற்கு மாற அனுமதி பெறும் சடங்காக இது அமைகிறது. காப்பு கட்டுதல் (ரக்ஷா பந்தனம்) இதன் முக்கிய அங்கமாகும். 'நாந்தி' சடங்கின் மூலம் முன்னோர்களின் ஆசிகள் பெறப்படுகின்றன.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">ஜானவாசம் / மாப்பிள்ளை அழைப்பு (Janavasam)</h3>
<p>
  மணமகனை ஊர்வலமாகத் திருமண மண்டபத்திற்கு அழைத்து வரும் நிகழ்வு ஜானவாசம் எனப்படும். பண்டைக்காலத்தில் ஊர் மக்களுக்கு மணமகனை அறிமுகப்படுத்த இது பயன்பட்டது. தற்காலத்தில் மாலை நேரத்தில் நாதஸ்வர இசையோடு மணமகனை மண்டபத்திற்கு அழைத்து வந்து, மணமகளின் சகோதரன் அவருக்குக் கல்கண்டு வழங்கி வரவேற்பார்.
</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. காசி யாத்திரை, மாலை மாற்றல் மற்றும் ஊஞ்சல் உற்சவம்</h2>

<p>
  திருமண நாளன்று காலையில் நடைபெறும் சடங்குகள் ஆன்மீக ரீதியாகவும், காட்சிப் பூர்வமாகவும் மிகவும் எழில்மிக்கவை.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">காசி யாத்திரை (Kasi Yatra)</h3>
<p>
  மணமகன் விசிறி, மரப் பாதுகை, குடை, மற்றும் புரோகிதரின் வழிகாட்டுதலுடன் காசியை நோக்கிச் சென்று துறவறம் பூணப்போவதாக நடிக்கும் சுவாரஸ்யமான சடங்கு. மணமகளின் தந்தை அவரைத் தடுத்து, "என் மகளை உனக்கு மனைவியாகத் தருகிறேன், இல்லற தர்மத்தை ஏற்று குடும்ப வாழ்வைத் தொடங்குங்கள்" என்று வேண்டி அழைத்து வருவார்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">மாலை மாற்றல் (Maalai Maatral)</h3>
<p>
  மணமகனும் மணமகளும் மாலைகளை மாற்றிக்கொள்ளும் நிகழ்வு. தோள்களில் உறவினர்கள் அவர்களைத் தூக்கி நிறுத்த, மாலை மாற்றுவது வேடிக்கையாகவும் விமரிசையாகவும் நடைபெறும். இது இரு ஆன்மாக்களின் பரஸ்பர இணைப்பைக் குறிக்கிறது.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">ஊஞ்சல் உற்சவம் மற்றும் பிடி உருண்டை (Oonjal)</h3>
<p>
  மாலை மாற்றிய தம்பதியரை ஊஞ்சலில் அமர வைத்து, ஊஞ்சலாட்டுவார்கள். சுமங்கலிப் பெண்கள் பாரம்பரிய 'ஊஞ்சல் பாட்டுகள்' பாடுவார்கள். பால் மற்றும் பழங்களை மணமக்களுக்கு வழங்குவர். ஊஞ்சலின் ஆட்டம் வாழ்க்கையின் ஏற்ற இறக்கங்களைக் குறிக்கிறது; எந்தச் சூழலிலும் இணைந்து இருக்க வேண்டும் என்பதை இது உணர்த்துகிறது.
</p>
<p>
  இதன் போது 'பிடி உருண்டை' சடங்கு நடைபெறும். வண்ண அரிசி உருண்டைகளை நாலா திசைகளிலும் எறிந்து, மணமக்களுக்கு உள்ள திருஷ்டியைக் கழிப்பார்கள்.
</p>

<div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
  <h3 className="text-xl font-bold text-blue-900 mt-0 mb-3">சடங்கின் ஆன்மீகக் குறியீடு</h3>
  <p className="text-blue-800 mb-0">
    ஊஞ்சல் ஆடும்போது தம்பதியரின் கால்கள் தரையில் தொடுவதில்லை. இது தம்பதியர் தற்காலிகமாகப் பூவுலகின் இன்னல்களிலிருந்து விலகி, தெய்வீக நிலையில் ஒன்றிணைவதைக் குறிக்கிறது.
  </p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. கன்னிகாதானம் மற்றும் மாங்கல்ய தாரணம்</h2>

<p>
  பிராமணத் திருமணத்தின் மிக முக்கியமான மற்றும் புனிதமான பகுதி கன்னிகாதானமும் மாங்கல்ய தாரணமும் ஆகும்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">கன்னிகாதானம் (Kanyadhanam)</h3>
<p>
  மணமகளின் தந்தை தன் மகளை மணமகனின் மடியில் அமர வைத்து, தாரை வார்த்துக் கொடுக்கும் சடங்கு. மணமகளின் தலையில் 'தர்ப்பை' புல் வளையம் வைக்கப்பட்டு, அதன் மேல் நுகத்தடி (Yoke) வைக்கப்படும். அதன் வழியாகப் புனித நீர் ஊற்றப்படும். "தர்மத்திலும், பொருளாதாரத்திலும், இன்பத்திலும் இவளைக் கைவிட மாட்டேன்" என்று மணமகன் உறுதிமொழி ஏற்பார்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">கூரைப்புடவை / மடிசார் உடுத்துதல்</h3>
<p>
  கன்னிகாதானத்திற்கு முன் மணமகளுக்கு மணமகன் வீட்டார் வழங்கிய 9 கஜ கூரைப்புடவை (மடிசார்) அணியத் தரப்படும். மணமகளின் நாத்தனார் (மணமகனின் சகோதரி) மணமகளுக்கு மடிசார் உடுத்த உதவி செய்வார்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">மாங்கல்ய தாரணம் (Mangalya Dharanam)</h3>
<p>
  கெட்டிமேளம் அதிவேகமாக முழங்க, 'மாங்கல்யம் தந்துனானேனா மம ஜீவன ஹேதுனா...' என்ற வேத மந்திரம் பாடப்படும் வேளையில், மணமகன் மணமகளின் கழுத்தில் திருமாங்கல்யத்தைக் கட்டுவார்.
</p>
<ul className="list-disc pl-6 space-y-3">
  <li><strong>முதல் முடிச்சு:</strong> மணமகனால் போடப்படுகிறது (மனைவியின் மீதான அன்பு மற்றும் பொறுப்பு).</li>
  <li><strong>இரண்டு மற்றும் மூன்றாம் முடிச்சுகள்:</strong> மணமகனின் சகோதரியால் போடப்படுகின்றன (மணமகளைப் புதிய குடும்பத்திற்குள் வரவேற்பதன் அடையாளம்).</li>
</ul>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. சப்தபதி, லாஜ ஹோமம் மற்றும் அருந்ததி பார்த்தல்</h2>

<p>
  மாங்கல்ய தாரணம் முடிந்தவுடன், திருமணத்தை வேத முறைப்படி சட்டப்பூர்வமாகவும் ஆன்மீக ரீதியாகவும் பூர்த்தி செய்யும் சடங்குகள் தொடங்குகின்றன.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">சப்தபதி (Saptapadi - ஏழடிகள்)</h3>
<p>
  வேத திருமண முறையின் மிக முக்கியமான சடங்கு சப்தபதி ஆகும். மணமகன் மணமகளின் வலது கரத்தைப் பற்றி, அக்னியை வலமாக வந்து, மணமகளின் வலது பாதத்தைப் பிடித்து ஏழு அடிகள் முன்னோக்கி வைக்கச் செய்வார். ஒவ்வொரு அடிக்கும் ஒரு குறிப்பிட்ட பிரார்த்தனை உண்டு:
</p>
<ul className="list-disc pl-6 space-y-3">
  <li><strong>முதல் அடி:</strong> உணவிற்கும் நல்வாழ்விற்கும் (Ekam Ishe)</li>
  <li><strong>இரண்டாம் அடி:</strong> உடல் மற்றும் மன வலிமைக்கு (Dve Urje)</li>
  <li><strong>மூன்றாம் அடி:</strong> செல்வத்திற்கும் வளத்திற்கும் (Treeni Rayasposhaya)</li>
  <li><strong>நான்காம் அடி:</strong> சுகபோகங்களுக்கும் மகிழ்ச்சிக்கும் (Chatvari Mayobhavaya)</li>
  <li><strong>ஐந்தாம் அடி:</strong> கால்நடைகளுக்கும் சந்ததி பெருக்கத்திற்கும் (Pancha Pasubhyah)</li>
  <li><strong>ஆறாம் அடி:</strong> அனைத்துப் பருவகால நலன்களுக்கும் (Sadbhyo Rtubhyah)</li>
  <li><strong>ஏழாம் அடி:</strong> வாழ்நாள் முழுமைக்குமான நட்பிற்கும் ஆத்மார்த்த பந்தத்திற்கும் (Sakha Saptapada Bhava)</li>
</ul>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">லாஜ ஹோமம் (Laja Homam) மற்றும் அம்மி மிதித்தல்</h3>
<p>
  மணமகளின் சகோதரன் மணமகளின் கைகளில் பொரி (நெற்பொரி) வழங்குவார். மணமக்களிருவரும் இணைந்து அதை அக்னியில் சமர்ப்பிப்பர். இது குடும்பத்தின் செழிப்பிற்கான பிராத்தனையாகும்.
</p>
<p>
  இதனைத் தொடர்ந்து, மணமகன் மணமகளின் பாதத்தை 'அம்மி கல்லில்' வைப்பார். "பாறையைப் போல எந்தச் சூழ்நிலையிலும் உறுதியாகவும் கற்புடனும் இருக்க வேண்டும்" என்பதை இது குறிக்கிறது.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">அருந்ததி பார்த்தல் மற்றும் துருவ நக்ஷத்ரம்</h3>
<p>
  மணமக்கள் மண்டபத்திற்கு வெளியே வந்து ஆகாயத்தில் உள்ள அருந்ததி மற்றும் துருவ நட்சத்திரத்தைப் பார்ப்பார்கள். வசிஷ்ட முனிவரின் மனைவியான அருந்ததி கற்பிற்கும், துருவ நட்சத்திரம் நிலையான தன்மைக்கும் வழிகாட்டிகளாகக் கருதப்படுகின்றனர்.
</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. ஐயர் மற்றும் ஐயங்கார் திருமண முறைகளின் முக்கிய வேறுபாடுகள்</h2>

<p>
  ஐயர் மற்றும் ஐயங்கார் இரு பிரிவினரும் வேத வழிமுறைகளையே பின்பற்றினாலும், சம்ப்ரதாயம் சார்ந்த சில சுவாரஸ்யமான வேறுபாடுகள் உள்ளன:
</p>

<div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-2 font-bold text-gray-900">சடங்கு / அம்சம்</th>
          <th className="py-2 font-bold text-gray-900">ஐயர் மரபு (Smartha)</th>
          <th className="py-2 font-bold text-gray-900">ஐயங்கார் மரபு (Vaishnava)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="py-3 font-semibold text-gray-800">திருமாங்கல்ய வடிவம்</td>
          <td className="py-3 text-gray-700">துளசி மாடம், பிள்ளையார் அல்லது தாலிப்பொட்டு வடிவம்.</td>
          <td className="py-3 text-gray-700">சங்கு, சக்கரம் மற்றும் திருமண் (நாமம்) பொறிக்கப்பட்ட வடிவம்.</td>
        </tr>
        <tr>
          <td className="py-3 font-semibold text-gray-800">மடிசார் உடுத்தும் முறை</td>
          <td className="py-3 text-gray-700">கட்டு வலது தோள்பட்டையில் வரும்படி (Right side pallu) உடுத்துவர்.</td>
          <td className="py-3 text-gray-700">கட்டு இடது தோள்பட்டையில் (Left side pallu) சலங்குடன் உடுத்துவர்.</td>
        </tr>
        <tr>
          <td className="py-3 font-semibold text-gray-800">சிறப்புப் பூஜை</td>
          <td className="py-3 text-gray-700">கணபதி பூஜை மற்றும் நவகிரஹ ஹோமம் முக்கியத்துவம் பெறும்.</td>
          <td className="py-3 text-gray-700">திருவாராதனம், விஷ்வக்ஸேன ஆராதனம் மற்றும் லக்ஷ்மி கல்யாணம்.</td>
        </tr>
        <tr>
          <td className="py-3 font-semibold text-gray-800">நாமம் / திலகம்</td>
          <td className="py-3 text-gray-700">சந்தனம் மற்றும் குங்குமம்/விபூதி அணிவார்கள்.</td>
          <td className="py-3 text-gray-700">வடகலை அல்லது தென்கலை திருமண் (நாமம்) அணிவார்கள்.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. சட்டப்பூர்வ திருமணப் பதிவு மற்றும் அரசுத் திட்டங்கள்</h2>

<p>
  பாரம்பரிய முறைப்படி திருமணம் முடிந்தவுடன், அதைச் சட்டப்பூர்வமாகப் பதிவு செய்வது மிகவும் அவசியமாகும். தமிழ்நாட்டில் இந்து திருமணச் சட்டம் 1955 மற்றும் தமிழ்நாடு திருமணப் பதிவுச் சட்டம் 2009 ஆகியவற்றின் கீழ் பதிவுகள் செய்யப்படுகின்றன.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">திருமணப் பதிவிற்குத் தேவையான ஆவணங்கள்</h3>
<ul className="list-disc pl-6 space-y-3">
  <li>மணமகன் மற்றும் மணமகளின் வயதுச் சான்று (ஆதார் கார்டு / பத்தாம் வகுப்பு சான்றிதழ் / பாஸ்போர்ட்).</li>
  <li>முகவரிச் சான்று (ஆதார் / வாக்காளர் அடையாள அட்டை).</li>
  <li>திருமண அழைப்பிதழ் (Original Marriage Invitation).</li>
  <li>திருமணம் நடைபெற்றதற்கான கோவில் அல்லது மண்டபத்தின் ரசீது.</li>
  <li>மணமக்களின் பாஸ்போர்ட் அளவு புகைப்படங்கள் (4 பிரதிகள்).</li>
  <li>திருமணத்தில் கலந்துகொண்ட 3 சாட்சிகளின் அடையாளச் சான்றுகள்.</li>
</ul>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">விண்ணப்பிக்கும் முறை (Step-by-Step Process)</h3>
<p>
  தமிழ்நாடு அரசின் பதிவுத் துறை இணையதளம் மூலம் எளிதாகப் பதிவு செய்யலாம்:
</p>
<ul className="list-disc pl-6 space-y-3">
  <li>அதிகாரப்பூர்வ இணையதளமான <a href="https://tnreginet.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline font-semibold">tnreginet.gov.in</a> பக்கத்திற்குச் செல்லவும்.</li>
  <li>'Apply Marriage Registration' விருப்பத்தைத் தேர்ந்தெடுத்து, படிவத்தைப் பூர்த்தி செய்யவும்.</li>
  <li>தேவையான ஆவணங்களை ஸ்கேன் செய்து பதிவேற்றம் செய்யவும்.</li>
  <li>பதிவுக் கட்டணத்தை ஆன்லைனில் செலுத்தி, சார்பதிவாளர் (Sub-Registrar) அலுவலகத்தில் நேரில் ஆஜராக வேண்டிய தேதியை முன்பதிவு செய்யவும்.</li>
  <li>குறிப்பிட்ட நாளில் சாட்சிகளுடன் சென்று ஆவணங்களைச் சரிபார்த்துத் திருமணச் சான்றிதழைப் பெறலாம்.</li>
</ul>

<div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
  <h3 className="text-xl font-bold text-green-900 mt-0 mb-3">நவீன திருமண திட்டமிடல் குறிப்புகள் (Modern Wedding Tips)</h3>
  <ul className="list-disc pl-6 space-y-2 text-green-800 m-0">
    <li><strong>நேர மேலாண்மை:</strong> முகூர்த்த நேரம் தவறிவிடாமல் இருக்க, விரதம் மற்றும் காசி யாத்திரை சடங்குகளை அதிகாலையிலேயே திட்டமிடுங்கள்.</li>
    <li><strong>சுற்றுச்சூழல் நட்பு தாம்பூலம்:</strong> நெகிழி (Plastic) பைகளுக்குப் பதிலாகத் துணிப் பைகள், மரக்கன்றுகள் மற்றும் பித்தளைப் பொருட்களைச் சீர் பரிசாக வழங்கலாம்.</li>
    <li><strong>பாரம்பரிய உணவு முறை:</strong> இலை வாழைச் சாப்பாட்டில் பாரம்பரிய சீர் பக்ஷணங்களான மனோகரம், தேன்குழல், மைசூர் பாகு மற்றும் பருப்பு தேங்காய் கூடுகளைச் சேர்த்துப் பரிமாறுவது திருமணத்தின் சிறப்பைக் கூட்டும்.</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">முடிவுரை</h2>

<p>
  தமிழ் பிராமணத் திருமணச் சடங்குகள் வெறும் சடங்காச்சாரங்கள் அல்ல; அவை ஒவ்வொரு சொல்லிலும், செயலிலும் ஆழமான அர்த்தங்களையும் தத்துவங்களையும் கொண்டவை. கணவன்-மனைவி இடையே உள்ள பந்தத்தை அக்னி சாட்சியாக உறுதிப்படுத்தி, சமுதாயத்திற்கும் குடும்பத்திற்கும் செய்ய வேண்டிய கடமைகளை நினைவூட்டும் உன்னதமான வழிகாட்டி இதுவாகும். ஐயர் மற்றும் ஐயங்கார் ஆகிய இரு முறைகளுமே தம் பாரம்பரியப் பெருமைகளைப் பாதுகாத்து, இன்றைய நவீன காலகட்டத்திலும் தன் புனிதத்தன்மை மாறாமல் தொடர்ந்து வருகின்றன.
</p>
<p>
  உங்கள் திருமணத் திட்டமிடல், புரோகிதர்கள் தேர்வு, மண்டப முன்பதிவு மற்றும் சீர் பக்ஷணக் கலைஞர்கள் பற்றிய தகவல்களுக்குக் கல்யாண வீடு (<a href="https://kalyanaveedu.in" className="text-orange-600 font-semibold underline">kalyanaveedu.in</a>) தளத்தைத் தொடர்ந்து பாருங்கள்!
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
                    name="மீனாட்சி சுந்தரம்"
                    role="Tamil Cultural Historian"
                    bio="மீனாட்சி சுந்தரம் தமிழ் திருமண மரபுகள் மற்றும் சடங்குகள் குறித்த நீண்ட அனுபவம் கொண்டவர். பண்பாட்டுத் தரவுகளைத் தொகுத்து, இன்றைய தலைமுறைக்கு எளிய தமிழில் விளக்குவதில் ஆர்வம் கொண்டவர்."
                />
                <RelatedArticles 
                    currentSlug="/blog/brahmin-wedding-traditions-tamil" 
                    category="traditions" 
                />
            </div>
        </article>
    );
}
