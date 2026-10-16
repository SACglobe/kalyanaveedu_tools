import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'தமிழ் முஸ்லீம் நிகா சடங்கு',
    description: 'தமிழ் முஸ்லீம் நிகா சடங்கு - மஹர், நிகா நடைமுறை, வலிமா விருந்து, ஆடை மற்றும் நகை மரபுகள்',
    keywords: ['muslim', 'tamil', 'wedding', 'nikah', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/muslim-tamil-wedding-nikah`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'தமிழ் முஸ்லீம் நிகா சடங்கு',
                    description: 'தமிழ் முஸ்லீம் நிகா சடங்கு - மஹர், நிகா நடைமுறை, வலிமா விருந்து, ஆடை மற்றும் நகை மரபுகள்',
                    author: 'மீனாட்சி சுந்தரம்',
                    datePublished: '2026-10-19',
                    slug: '/blog/muslim-tamil-wedding-nikah'
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
                    தமிழ் முஸ்லீம் நிகா சடங்கு
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="தமிழ் முஸ்லீம் நிகா சடங்கு"
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

<p className="text-xl leading-relaxed text-gray-700 font-medium">
    தமிழ் மண்ணில் இஸ்லாமிய மார்க்க நெறிமுறைகளும், பல நூற்றாண்டுகளாக நிலவிவரும் தமிழ் பண்பாட்டு மரபுகளும் ஒன்றுடன் ஒன்று இணைந்து உருவான ஒரு தனித்துவமான திருச்சடங்கே தமிழ் முஸ்லீம் நிகா (Nikah) திருமண நிகழ்வாகும். அரபு மார்க்க நெறிகளின் எளிமையையும், தமிழகத்தின் விருந்தோம்பல் மற்றும் குடும்ப உறவுகளின் பாரம்பரியத்தையும் ஒருங்கே வெளிப்படுத்தும் இந்த திருமண முறை, இறை நம்பிக்கைக்கும் சமூக பிணைப்பிற்கும் மிகச்சிறந்த சான்றாக விளங்குகிறது.
  </p>

  <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
    <p className="font-semibold text-orange-900 mb-1">வரலாற்று சிறப்பு:</p>
    <p className="text-orange-800 text-sm leading-relaxed">
      காயல்பட்டினம், கீழக்கரை, நாகப்பட்டினம், ஆம்பூர் மற்றும் திருநெல்வேலி போன்ற தமிழ்நாட்டின் பல்வேறு பகுதிகளில் வாழும் முஸ்லீம் சமூகத்தினரிடையே வட்டார மரபுகளுக்கேற்ப நிகா சடங்குகளில் சில சிறப்பு வேறுபாடுகள் காணப்பட்டாலும், இஸ்லாமிய ஷரீஆ சட்டத்தின் அடிப்படையிலான மஹர் மற்றும் ஈஜாப்-கபூல் (Ijab-o-Qubul) மரபுகள் மாறாமல் கடைப்பிடிக்கப்படுகின்றன.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">தமிழ் முஸ்லீம் திருமணத்தின் வரலாற்று பின்னணியும் பண்பாட்டு இணைப்பும்</h2>
  <p>
    தமிழகத்தின் கடல்சார் வர்த்தக வரலாறு மற்றும் இஸ்லாமிய அறிமுகத்தின் அடிப்படையில் தமிழ் முஸ்லீம்கள் ராவாத்தர் (Rowther), மரைக்காயர் (Marakkayar), லெப்பை (Lebbai), மற்றும் காயலார் (Kayalar) எனப் பல்வேறு பிரிவுகளாக அறியப்படுகின்றனர். இந்தச் சமூகங்கள் தங்களின் மார்க்க கடமைகளில் சற்றும் பிறழாமல், அதே நேரத்தில் தமிழ் மொழி மற்றும் கலாச்சார அடையாளங்களான கூரைச் சேலை, தாலி அணிகலன், மற்றும் தாம்பூலம் மாற்றுதல் போன்ற மரபுகளைத் தங்களின் திருமணங்களில் இணைத்துக் கொண்டுள்ளன.
  </p>
  <p>
    இஸ்லாமிய முறைப்படி திருமணம் என்பது இரு மனங்களுக்கு இடையேயான ஒரு புனிதமான ஒப்பந்தமாகும் (Contract / Aqd). இந்த ஒப்பந்தத்தில் மணமகள் மற்றும் மணமகனின் பூரண சம்மதமும், சாட்சிகளின் முன்னிலையும், மணமகளுக்கு வழங்கப்பெறும் &#39;மஹர்&#39; எனும் பாதுகாப்புக் கொடையும் முதன்மையான அங்கங்களாகும்.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">நிச்சயதார்த்தம் முதல் நிகா வரை: படிப் படியான திருமண சடங்குகள்</h2>
  
  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. பெண் பார்த்தல் மற்றும் மங்கள வார்த்தை (Pen Parppathu &amp; Nichayathartham)</h3>
  <p>
    திருமணப் பேச்சின் தொடக்கமாக மணமகனின் குடும்பத்தார் மணமகள் இல்லத்திற்குச் சென்று பெண்ணைப் பார்க்கும் நிகழ்வு நடைபெறுகிறது. இருவீட்டாரும் சம்மதித்த பின், பெரியோர்கள் முன்னிலையில் &#39;மங்கள வார்த்தை&#39; அல்லது நிச்சயதார்த்தம் நடைபெறும். இந்நாளில் மணமகள் வீட்டாருக்குப் பழங்கள், இனிப்புகள், மற்றும் வாசனைப் திரவியங்கள் அடங்கிய தாம்பூலத் தட்டுகள் வழங்கி திருமணத் தேதி மற்றும் மஹர் தொகை குறித்த விவாதங்கள் தொடங்கப்படுகின்றன.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. மஹர் (Mahr) - மணமகளின் உரிமையும் முக்கியத்துவமும்</h3>
  <p>
    இஸ்லாமிய திருமணத்தில் &#39;மஹர்&#39; என்பது மிக முக்கியமான சடங்காகும். மணமகன் தன் சக்திக்கு ஏற்ப மணமகளுக்கு கட்டாயமாக வழங்க வேண்டிய கொடையே மஹர் ஆகும். இது பணமாகவோ, தங்க நகைகளாகவோ, அல்லது சொத்தாகவோ இருக்கலாம்.
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>மஹரின் உரிமை:</strong> மஹர் தொகை முழுமையாக மணமகளுக்கே சொந்தமானது; இதில் பெற்றோர் அல்லது கணவருக்கு எந்த உரிமையும் இல்லை.</li>
    <li><strong>மஹர் நிர்ணயம்:</strong> நிகா நடைபெறும் தருணத்தில் காசி (Kazi) முன்னிலையில் மஹர் தொகை எவ்வளவு என்பது பகிரங்கமாக அறிவிக்கப்படும்.</li>
    <li><strong>உடனடி அல்லது ஒத்திவைக்கப்பட்ட மஹர்:</strong> மஹர் தொகையை திருமணத்தின் போதே வழங்குவது (Mahr Mu&#39;ajjal) மிகவும் சிறந்தது.</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">3. நிகா சடங்கு நடைமுறை (The Nikah Ceremony)</h3>
  <p>
    நிகா சடங்கு பெரும்பாலும் பள்ளிவாசலில் (Masjid) அல்லது திருமண மண்டபத்தில் ஜமாஅத் தலைவர்கள் மற்றும் காசி (Kazi) தலைமையில் நடைபெறும்.
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>ஈஜாப் மற்றும் கபூல் (Ijab-o-Qubul):</strong> காசி அவர்கள் மணமகனிடம் மணமகளின் பெயரைச் கூறி, இத்தனை மஹர் தொகைக்கு இவரை மனைவியாக ஏற்றுக்கொள்கிறீர்களா என்று வினவுவார். மணமகன் உரத்த குரலில் &#39;ஏற்றுக்கொண்டேன்&#39; (கபூல் செய்தேன்) என்று மூன்று முறை கூற வேண்டும்.</li>
    <li><strong>சாட்சிகள் (Witnesses):</strong> மணமகள் சார்பிலும் மணமகன் சார்பிலும் தலா இரு ஆண் சாட்சிகள் கையொப்பமிட வேண்டும்.</li>
    <li><strong>நிகா நாமா (Nikahnama):</strong> திருமண உடன்படிக்கைப் பத்திரத்தில் மணமகன், சாட்சிகள் மற்றும் காசி கையொப்பமிடுவர். மணமகளின் சம்மதமும் பெறப்பட்டு ஆவணப்படுத்தப்படும்.</li>
    <li><strong>துஆ (பிரார்த்தனை):</strong> நிகா நிறைவுற்றதும் புதுமணத் தம்பதிகளின் வளமான வாழ்விற்காக இமாம் சிறப்பு துஆ (பிரார்த்தனை) செய்வார். அங்கிருந்தவர்களுக்கு பேரீச்சம்பழம் மற்றும் இனிப்புகள் வழங்கப்படும்.</li>
  </ul>

  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
    <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">தாலி மற்றும் கூரைச் சேலை தமிழ் மரபு</h3>
    <p className="text-blue-800 text-sm leading-relaxed">
      தமிழ் முஸ்லீம் திருமணங்களில் மார்க்க சட்டங்களுக்கு அப்பாற்பட்டு தமிழ் பண்பாட்டுத் தாக்கத்தால் தாலி கட்டும் வழக்கம் பரவலாக உள்ளது. இதில் பிறை மற்றும் நட்சத்திர வடிவம் பொறித்த தங்கத் தாலி அல்லது ஏலக்காய், கிராம்பு கோர்த்த தாலி சரடு மணமகனால் மணமகளின் கழுத்தில் கட்டப்படுகிறது. மேலும் மணமகள் பட்டுச் சேலை (கூரைச் சேலை) அணிவதும், மணமகனின் சகோதரி மணமகளுக்குத் தாலி அணிய உதவுவதும் தமிழ் கலாச்சாரத்தின் அழகிய அடையாளங்களாகும்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">வலிமா விருந்து மற்றும் பாரம்பரிய உணவு முறைகள் (Walima Feast)</h2>
  <p>
    நிகா முடிந்த பின்பு அல்லது மறுநாளில் மணமகன் வீட்டாரால் அளிக்கப்படும் பிரம்மாண்டமான வரவேற்பு மற்றும் உணவு உபசரிப்பே &#39;வலிமா&#39; (Walima) ஆகும். நபிவழியைப் பின்பற்றி உறவினர்கள், நண்பர்கள், மற்றும் ஏழை எளிய மக்களுக்கு அளிக்கப்படும் இந்த விருந்து தமிழ் முஸ்லீம்களின் உபசரிப்பிற்குப் பெயர் பெற்றது.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">பாரம்பரிய முஸ்லீம் கல்யாண விருந்து உணவுகள்:</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>தம் பிரியாணி (Mutton/Chicken Dum Briyani):</strong> சீரகச் சம்பா அல்லது பாஸ்மதி அரிசியில் விறகு அடுப்பில் சமைக்கப்படும் சுவையான தம் பிரியாணி விருந்தின் மையப்பகுதியாகும்.</li>
    <li><strong>தால்ச்சா (Dalcha):</strong> கத்திரிக்காய், சுரைக்காய் மற்றும் பருப்பு சேர்த்து செய்யப்படும் பாரம்பரிய தால்ச்சா பிரியாணிக்கு மிகச்சிறந்த கூட்டாகும்.</li>
    <li><strong>ஆணம் மற்றும் நெய் சோறு:</strong> காயல்பட்டினம் மற்றும் கீழக்கரை வட்டாரங்களில் நெய் சோறு, கறி ஆணம் மற்றும் கடல் உணவுகள் சிறப்பு விருந்தாகப் பரிமாறப்படுகின்றன.</li>
    <li><strong>இனிப்புகள்:</strong> ரொட்டி ஹல்வா (Bread Halwa), முட்டை ஆப்பம், நெய் கீர் மற்றும் சுடச்சுடப் பரிமாறப்படும் பாயாசம்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">ஆடை, நகை மற்றும் அலங்கார மரபுகள்</h2>
  <p>
    தமிழ் முஸ்லீம் திருமணங்களில் உடைகளும் நகைகளும் இஸ்லாமிய வரம்பிற்கு உட்பட்ட அழகியலையும், தமிழ் ஆடம்பரத்தையும் வெளிப்படுத்துகின்றன.
  </p>
  
  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">மணப்பெண் அலங்காரம் (Bride&#39;s Attire &amp; Jewelry)</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>உடைகள்:</strong> நிகா நேரங்களில் அடர் சிவப்பு, பச்சை அல்லது தங்க நிறப் பட்டுச் சேலை அல்லது ஷராரா/லேஹங்கா (Sharara/Lehenga) ஆடைகளை மணப்பெண் அணிகிறார். தலையில் துப்பட்டா அல்லது மேலாடை அணிவது கட்டாயமாகும்.</li>
    <li><strong>மயிலாஞ்சி / மருதாணி (Mehendi):</strong> திருமணத்திற்கு முந்தைய நாள் இரவில் மணமகளின் கைகளிலும் கால்களிலும் மருதாணி வைக்கும் சடங்கு மிக உற்சாகமாகக் கொண்டாடப்படுகிறது.</li>
    <li><strong>நகைகள்:</strong> அட்டிகை, காசு மாலை, நெற்றிச்சுட்டி, மற்றும் கை வளையல்கள் அணிவிக்கப்படுகின்றன. தென்தமிழகத்தில் &#39;கழுத்துரு&#39; போன்ற பாரம்பரிய நகைகளும் அணியப்படுகின்றன.</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">மணமகன் அலங்காரம் (Groom&#39;s Attire)</h3>
  <p>
    மணமகன் பாரம்பரிய குர்தா-பைஜாமா, ஷெர்வானி (Sherwani) அல்லது சுடிதார் அணிகிறார். தலையில் இஸ்லாமிய தொப்பி (Cap) அல்லது தலைப்பாகை (Turban) அணிவது வழக்கத்தில் உள்ளது. சில பகுதிகளில் பட்டு வேட்டி-சட்டை அணியும் வழக்கமும் உள்ளது.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">அரசு நலத்திட்டங்கள் மற்றும் சட்டப்பூர்வ திருமண பதிவு வழிகாட்டி</h2>
  <p>
    தமிழ்நாட்டில் இஸ்லாமிய முறைப்படி நடைபெறும் திருமணங்களைச் சட்டப்பூர்வமாகப் பதிவு செய்வதும், அரசு வழங்கும் நலத்திட்டங்களைப் பெறுவதும் தம்பதிகளின் எதிர்காலத்திற்கு மிகவும் அவசியமாகும்.
  </p>

  <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
    <h3 className="text-lg font-bold text-green-900 mt-0 mb-2">அரசு நலத்திட்டங்கள் (Government Marriage Assistance Schemes):</h3>
    <ul className="list-disc pl-6 space-y-2 text-green-800 text-sm">
      <li>
        <strong>தமிழ்நாடு பிற்படுத்தப்பட்டோர் மற்றும் சிறுபான்மையினர் நலத்துறை (BCMW):</strong> சிறுபான்மையினப் பெண்களின் திருமணத்திற்கு நிதியுதவி மற்றும் கடன் உதவிகளை வழங்கி வருகிறது.
      </li>
      <li>
        <strong>மூவலூர் ராமாமிர்தம் அம்மையார் புதுமைப் பெண் திட்டம்:</strong> அரசுப் பள்ளிகளில் படித்த பெண் குழந்தைகள் உயர்கல்வி பெற்றுத் திருமணம் செய்யும்போது இத்திட்டத்தின் கீழ் பயன்பெறலாம்.
      </li>
      <li>
        <strong>TAMCO (தமிழ்நாடு சிறுபான்மையினர் பொருளாதார மேம்பாட்டுக் கழகம்):</strong> சிறுபான்மையினக் குடும்பங்களுக்குத் தொழில் மற்றும் திருமணச் செலவுகளுக்கான கடனுதவிகளை வழங்குகிறது.
      </li>
    </ul>
  </div>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">சட்டப்பூர்வ திருமண பதிவு (Marriage Registration Process)</h3>
  <p>
    இஸ்லாமிய திருமணங்கள் 1937-ஆம் ஆண்டின் முஸ்லீம் தனிநபர் சட்டத்தின்படி (Muslim Personal Law) நடைபெறுகின்றன. இருப்பினும், தமிழ்நாடு திருமணப் பதிவுச் சட்டம், 2009 (Tamil Nadu Registration of Marriages Act, 2009) படி திருமணத்தைப் பதிவு செய்வது கட்டாயமாகும்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">தேவையான ஆவணங்கள் (Required Documents):</h3>
  <ul className="list-disc pl-6 space-y-2">
    <li>பள்ளிவாசல் காசி / ஜமாஅத் வழங்கிய நிகா சான்றிதழ் (Jamath Nikah Certificate / Nikahnama).</li>
    <li>மணமகன் மற்றும் மணமகளின் ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை.</li>
    <li>வயதுச் சான்று (பிறப்புச் சான்றிதழ் / பத்தாம் வகுப்பு மதிப்பெண் சான்றிதழ் / பாஸ்போர்ட்).</li>
    <li>திருமணப் புகைப்படங்கள் (2 பிரதிகள்) மற்றும் பாஸ்போர்ட் அளவு புகைப்படங்கள்.</li>
    <li>இரண்டு சாட்சிகளின் அடையாளச் சான்றுகள்.</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">விண்ணப்பிக்கும் முறை (Step-by-Step Application Process):</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>படி 1:</strong> TNReginet இணையதளத்தில் (<a href="https://tnreginet.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://tnreginet.gov.in</a>) கணக்கு தொடங்கி ஆன்லைனில் விண்ணப்பத்தைப் பூர்த்தி செய்ய வேண்டும்.</li>
    <li><strong>படி 2:</strong> ஜமாஅத் வழங்கிய சான்றிதழ் மற்றும் அடையாள ஆவணங்களை இணையதளத்தில் பதிவேற்றம் செய்யவும்.</li>
    <li><strong>படி 3:</strong> ஆன்லைனில் கட்டணம் செலுத்தி, உங்களுக்கான சார்பதிவாளர் அலுவலகச் (Sub-Registrar Office) சந்திப்பு நேரத்தை (Appointment) முன்பதிவு செய்யவும்.</li>
    <li><strong>படி 4:</strong> குறிப்பிட்ட நாளில் தம்பதியர் மற்றும் சாட்சிகள் நேரில் சென்று கையொப்பமிட்டு அரசுக் கணக்கில் திருமணச் சான்றிதழைப் பெறலாம்.</li>
  </ul>

  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
    <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">முக்கிய அதிகாரப்பூர்வ இணையதளங்கள் (Official Portal Links):</h3>
    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
      <li>தமிழ்நாடு பதிவுத்துறை (TNReginet): <a href="https://tnreginet.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">tnreginet.gov.in</a></li>
      <li>பிற்படுத்தப்பட்டோர் மற்றும் சிறுபான்மையினர் நலத்துறை: <a href="https://bcmw.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">bcmw.tn.gov.in</a></li>
      <li>TAMCO சிறுபான்மையினர் கழகம்: <a href="https://tamco.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">tamco.tn.gov.in</a></li>
    </ul>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">நவீன மாற்றங்களும் கல்யாணவீடு வழிகாட்டுதல்களும்</h2>
  <p>
    இன்றைய காலகட்டத்தில் தமிழ் முஸ்லீம் திருமணங்கள் தங்களின் மரபுப் பெருமையை இழக்காமல் நவீனத்துவத்தையும் ஏற்றுக்கொண்டு வருகின்றன.
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>எளிமையான நிகா:</strong> ஆடம்பரங்களைத் தவிர்த்துப் பள்ளிவாசலிலேயே எளிமையான முறையில் நிகாவை முடித்து, ஏழை எளிய மக்களுக்கு உதவும் மனப்பான்மை அதிகரித்து வருகிறது.</li>
    <li><strong>உணவு வீணாவதைத் தடுத்தல்:</strong> வலிமா விருந்துகளில் உணவுகள் வீணாகாமல் ஆதரவற்றோர் இல்லங்களுக்கு வழங்கும் விழிப்புணர்வு பரவி வருகிறது.</li>
    <li><strong>டிஜிட்டல் அழைப்பிதழ்கள்:</strong> சுற்றுச்சூழல் தோழமையான டிஜிட்டல் அழைப்பிதழ்கள் மற்றும் ஆன்லைன் நேரலை (Live Streaming) வசதிகள் பயன்படுத்தப்படுகின்றன.</li>
  </ul>

  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
    <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">தொகுப்புரை (Conclusion)</h3>
    <p className="text-gray-700 text-base leading-relaxed">
      தமிழ் முஸ்லீம் நிகா சடங்குகள் என்பது மார்க்கம் காட்டிய வழியில், தமிழ் நிலத்தின் அன்புடனும் உபசரிப்புடனும் நடைபெறும் ஒரு உன்னதமான நிகழ்வாகும். மஹர் எனும் பெண்ணுரிமை, ஈஜாப்-கபூல் எனும் பரஸ்பர சம்மதம், மற்றும் வலிமா எனும் பகிர்ந்தளிக்கும் பண்பு ஆகியவை இத்திருமண முறையின் ஆன்மாவாகும். உங்கள் வீட்டுத் திருமணங்களை மார்க்க எல்லைக்குள்ளும், தமிழ் பண்பாட்டு அழகிலும் திட்டமிட கல்யாணவீடு (kalyanaveedu.in) எப்போதும் உங்களுடன் இருக்கிறது.
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
                    name="மீனாட்சி சுந்தரம்"
                    role="Tamil Cultural Historian"
                    bio="மீனாட்சி சுந்தரம் தமிழ் திருமண மரபுகள் மற்றும் சடங்குகள் குறித்த நீண்ட அனுபவம் கொண்டவர். பண்பாட்டுத் தரவுகளைத் தொகுத்து, இன்றைய தலைமுறைக்கு எளிய தமிழில் விளக்குவதில் ஆர்வம் கொண்டவர்."
                />
                <RelatedArticles 
                    currentSlug="/blog/muslim-tamil-wedding-nikah" 
                    category="traditions" 
                />
            </div>
        </article>
    );
}
