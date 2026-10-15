import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'தமிழ் கிறிஸ்துவ திருமண சடங்குகள்',
    description: 'தமிழ் கிறிஸ்துவ திருமண சடங்குகள் - Catholic, CSI திருமண நடைமுறைகள், தாலி கட்டல், ஆசி',
    keywords: ['christian', 'tamil', 'wedding', 'traditions', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/christian-tamil-wedding-traditions`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'தமிழ் கிறிஸ்துவ திருமண சடங்குகள்',
                    description: 'தமிழ் கிறிஸ்துவ திருமண சடங்குகள் - Catholic, CSI திருமண நடைமுறைகள், தாலி கட்டல், ஆசி',
                    author: 'மீனாட்சி சுந்தரம்',
                    datePublished: '2026-10-16',
                    slug: '/blog/christian-tamil-wedding-traditions'
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
                    தமிழ் கிறிஸ்துவ திருமண சடங்குகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="தமிழ் கிறிஸ்துவ திருமண சடங்குகள்"
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

<p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
    தமிழ்நாட்டின் கிறிஸ்துவ திருமணங்கள் என்பது இறைவனின் திருமுன்னிலையில் நடைபெறும் புனிதமான அருட்சாதனமும், பழந்தமிழ் கலாச்சாரத்தின் உன்னதமான பண்பாட்டு மரபுகளும் ஒன்றிணைந்த ஒரு பேரழகு நிகழ்வாகும். கத்தோலிக்க (Catholic) மற்றும் தென்னிந்திய திருச்சபை (CSI - Church of South India) ஆகிய இரு பிரதான பிரிவுகளிலும் விவிலிய நம்பிக்கைகளின்படியும், அதே வேளையில் தமிழ் மரபின்படியும் திருமண சடங்குகள் மிகச் சிறப்பாகக் கொண்டாடப்படுகின்றன.
  </p>

  <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
    <p className="font-semibold text-orange-900 m-0">
      <strong>பண்பாட்டுச் சிறப்பு:</strong> மேற்கத்திய கிறிஸ்துவ நாடுகளில் மோதிரம் மாற்றுவது மட்டுமே முதன்மைச் சடங்காக இருக்கும் நிலையில், தமிழ் கிறிஸ்துவ திருமணங்களில் &quot;சிலுவை தாங்கிய தாலி&quot; கட்டுவதும், &quot;கூறைப் புடவை&quot; (மந்திரக்கோடி) உடுத்துவதும் தமிழ் பண்பாட்டோடு பிணைந்த முதன்மைச் சடங்குகளாகும்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. திருமணத்திற்கு முந்தைய மரபுச் சடங்குகள் (Pre-Wedding Rituals)</h2>
  <p>
    ஆலயத்தில் நடைபெறும் முக்கிய திருமண வழிபாட்டிற்குச் சில வாரங்களுக்கு முன்பிருந்தே பல்வேறு பாரம்பரிய நடைமுறைகள் கிறிஸ்துவக் குடும்பங்களில் உற்சாகமாகத் தொடங்குகின்றன.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">நிச்சயதார்த்தம் (Betrothal / Engagement)</h3>
  <p>
    மணமகன் மற்றும் மணமகள் வீட்டார் ஒன்று கூடித் திருமணத்தை முறைப்படி உறுதி செய்யும் நிகழ்வு நிச்சயதார்த்தம் ஆகும். இது பெரும்பாலும் மணமகளின் இல்லத்திலோ அல்லது பங்கு ஆலயத்திலோ (Parish Church) நடைபெறும். போதகர் அல்லது குருவானவர் விவிலியம் வாசித்து ஜெபம் செய்வார். தொடர்ந்து மணமக்கள் இருவரும் நிச்சயதார்த்த மோதிரங்களை மாற்றிக்கொள்வர். மணமகள் வீட்டார் மணமகனுக்குப் புத்தாடைகளும், மணமகன் வீட்டார் மணமகளுக்குப் பூ, பழங்கள், இனிப்புகள் மற்றும் நிச்சயதார்த்தப் புடவையும் சீராக வழங்குவர்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">பான்ஸ் வாசித்தல் (Marriage Banns / திருமண அறிவிப்பு)</h3>
  <p>
    கத்தோலிக்க மற்றும் சி.எஸ்.ஐ திருச்சபைகளில் திருமணம் நடப்பதற்கு முன் &quot;பான்ஸ்&quot; (Banns) வாசிப்பது ஆன்மீக மற்றும் சட்டப்பூர்வமான கட்டாய நடைமுறையாகும்.
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>முறைமை:</strong> திருமணம் நிச்சயிக்கப்பட்ட மணமகன் மற்றும் மணமகளின் சொந்த பங்கு ஆலயங்களில், தொடர்ச்சியாக 3 ஞாயிற்றுக்கிழமைகளில் திருப்பலி அல்லது ஆராதனையின் போது இந்தத் திருமண அறிவிப்பு வாசிக்கப்படும்.</li>
    <li><strong>நோக்கம்:</strong> இந்தத் திருமணத்திற்கு ஆன்மீக ரீதியிலோ அல்லது சட்டப்பூர்வமாகவோ ஏதேனும் தடைகள் (Canonical Impediments) உள்ளனவா என்பதைச் சமுதாயத்திற்குத் தெரிவித்து தெளிவுபடுத்தவே இந்நடவடிக்கை மேற்கொள்ளப்படுகிறது.</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">பந்தக்கால் நடுதல் &amp; நலங்கு சடங்கு</h3>
  <p>
    தென் தமிழகத்தின் திருநெல்வேலி, தூத்துக்குடி, கன்னியாகுமரி மற்றும் மதுரை மாவட்டங்களில் கிறிஸ்துவக் குடும்பங்களிலும் திருமணத்திற்கு 3 நாட்களுக்கு முன் பந்தக்கால் நடும் வழக்கம் உள்ளது. மணமக்களுக்குச் சந்தனம், பன்னீர் பூசி, மரபுவழி ஆசீர்வாதப் பாடல்கள் பாடி வாழ்த்தும் &quot;நலங்கு&quot; சடங்கும் பல இடங்களில் சீரோடும் சிறப்புடனும் நடைபெறுகிறது.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. தமிழ் கிறிஸ்துவ தாலி மற்றும் கூறைப் புடவையின் சிறப்பு</h2>
  <p>
    தமிழ் கிறிஸ்துவச் சமுதாயம் தனது இறையியல் நம்பிக்கையோடு தமிழ் மரபைப் பேணிப் பாதுகாப்பதற்குத் தாலியும் கூறைப் புடவையுமே சிறந்த எடுத்துக்காட்டுகளாகும்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">சிலுவை தாலி (Christian Thali Design)</h3>
  <p>
    தமிழ் கிறிஸ்துவ தாலியில் வழக்கமான ஆலிலை அல்லது பொட்டு வடிவமைப்புடன் நடுவில் புனித சிலுவை (Cross) குறியீடு பொறிக்கப்பட்டிருக்கும். சில பாரம்பரியக் குடும்பங்களில் தூய ஆவியின் குறியீடான &quot;புறா&quot; வடிவம் அல்லது 21 சிறிய தங்க உருண்டைகள் இணைக்கப்பட்ட &quot;கழுத்துரு&quot; வகைத் தாலியும் பயன்படுத்தப்படுகிறது. தாலி கோர்க்கப்படும் நூலில் பல குடும்பங்களில் கூறைப் புடவையிலிருந்து எடுக்கப்பட்ட நூலிழைகளும் சேர்க்கப்படுகின்றன.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">கூறைப் புடவை / மந்திரக்கோடி (Koorai Saree)</h3>
  <p>
    திருமணத்தன்று மணமகன் மணமகளுக்குப் பரிசளிக்கும் சிறப்புப் புடவை &quot;கூறைப் புடவை&quot; அல்லது &quot;மந்திரக்கோடி&quot; என்று அழைக்கப்படுகிறது. ஆலயத்தில் குருவானவர் அல்லது போதகர் இந்த புடவையை ஆசீர்வதித்த பின், மணமகளின் சகோதரி அல்லது நாத்தனார் மணமகளுக்கு அதை அணிவிக்க உதவி செய்வார். மணமகள் கூறைப் புடவையை உடுத்திக்கொண்டு மீண்டும் ஆலய பீடத்திற்கு வந்து தாலி கட்டும் பிரதான சடங்கில் பங்கேற்பார்.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. கத்தோலிக்க vs CSI திருமண நடைமுறைகள் comparison</h2>
  <p>
    இரு திருச்சபைகளிலும் விவிலியத்தின் அடிப்படையிலேயே திருமணம் நடைபெற்றாலும், வழிபாட்டு முறைகளிலும் கோட்பாடுகளிலும் சில முக்கிய வேறுபாடுகள் உள்ளன.
  </p>

  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
    <h3 className="text-xl font-bold text-gray-800 mb-4">திருச்சபை நடைமுறை ஒப்பீடு</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li><strong>கத்தோலிக்க திருமணம் (Catholic Marriage):</strong> இது ஏழாவது &quot;அருட்சாதனம்&quot; (Sacrament) எனக் கருதப்படுகிறது. பொதுவாக &quot;திருமண திருப்பலி&quot; (Nuptial Mass) உடன் இணைந்து பூசையாக நடைபெறும். நற்கருணை (Holy Communion) வழங்குவது இதனில் முதன்மைப் பங்களிக்கும்.</li>
      <li><strong>சி.எஸ்.ஐ திருமணம் (CSI Marriage):</strong> இது கடவுளுக்கு முன்பாகச் செய்யப்படும் ஒரு &quot;பரிசுத்த உடன்படிக்கை&quot; (Covenant) ஆகும். சிறப்புத் திருமண ஆராதனை (Order of Holy Matrimony) மூலம் இறைவார்த்தைப் பிரசங்கத்திற்கும் ஜெபத்திற்கும் முக்கியத்துவம் அளிக்கப்படுகிறது.</li>
      <li><strong>தாலி கட்டும் தருணம்:</strong> இரு பிரிவுகளிலும் குருவானவர்/போதகர் தாலியை ஆசீர்வதித்து மணமகனிடம் வழங்குவார். மணமகன் &quot;பிதா, சுதன், பரிசுத்த ஆவியின் பெயரால்&quot; என்ற வரிகளோடு மணமகளின் கழுத்தில் மூன்று முடிச்சுகள் (Three Knots) இட்டு தாலி கட்டுவார்.</li>
    </ul>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. ஆலய திருமணச் சடங்குகளின் வரிசைமுறை (Church Ceremony Steps)</h2>
  <p>
    திருமண நாளில் ஆலயத்தில் நடைபெறும் வழிபாட்டு சடங்குகள் மிகவும் அமைதியாகவும், கம்பீரமாகவும் பின்வரும் வரிசையில் நடைபெறும்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>ஆலயப் பிரவேசம் (Processional):</strong> மணமகள் தனது தந்தையின் கையைப் பிடித்துக்கொண்டு, மணப்பெண் தோழிகள் (Bridesmaids) மற்றும் சிறுமிகள் மலர்கள் தூவ பீடத்தை நோக்கி நடந்து வருவார். மணமகன் பீடத்தின் அருகில் காத்திருப்பார்.</li>
    <li><strong>இறைவார்த்தை வழிபாடு (Liturgy of the Word):</strong> விவிலியத்திலிருந்து திருமணத்தின் புனிதத்தையும் கணவன்-மனைவி அன்பையும் விளக்கும் பகுதிகள் வாசிக்கப்படும் (எடுத்துக்காட்டாக: எபேசியர் 5, 1 கொரிந்தியர் 13).</li>
    <li><strong>திருமண வாக்குறுதி (Marriage Vows):</strong> மணமக்களிடம் போதகர் &quot;இன்பத்திலும் துன்பத்திலும், பிணியிலும் ஆரோக்கியத்திலும் வாழ்நாளெல்லாம் உண்மையாயிருப்பதாக&quot; வாக்குறுதி கோருவார். மணமக்கள் ஒருவரையொருவர் பார்த்து உறுதியளிப்பர்.</li>
    <li><strong>தாலி ஆசீர்வதிப்பும் அணிவித்தலும்:</strong> மாங்கல்யம் ஆசீர்வதிக்கப்பட்டு, மணமகன் மணமகளுக்கு தாலி கட்டி, மோதிரம் அணிவிப்பார். மணமகளும் மணமகனுக்கு மோதிரம் அணிவிப்பார்.</li>
    <li><strong>கூறைப் புடவை அளித்தல்:</strong> ஆசீர்வதிக்கப்பட்ட கூறைப் புடவையை மணமகன் மணமகளிடம் வழங்குவார். மணமகள் உடை மாற்றச் செல்வார்.</li>
    <li><strong>சாட்சி கையொப்பம் (Signing the Register):</strong> ஆலய வழிபாட்டின் முடிவில் மணமக்கள், சாட்சிகள் மற்றும் குருவானவர் திருச்சபை திருமணப் பதிவேட்டில் முறைப்படி கையொப்பமிடுவர்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. சட்டப்பூர்வ பதிவு &amp; அரசு நலத்திட்டங்கள் (Legal Registration &amp; Schemes)</h2>
  <p>
    ஆலயத்தில் நடைபெறும் திருமணம் சட்டப்பூர்வமாக அங்கீகரிக்கப்பட இந்திய சட்ட விதிகளின்படி அரசுப் பதிவு செய்வது கட்டாயமாகும்.
  </p>

  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
    <h3 className="text-xl font-bold text-blue-900 mt-0 mb-3">இந்திய கிறிஸ்துவ திருமணச் சட்டம் 1872 (Indian Christian Marriage Act, 1872)</h3>
    <p className="text-gray-800 mb-4">
      கிறிஸ்துவ திருமணங்கள் இந்திய கிறிஸ்துவ திருமணச் சட்டம் 1872 மற்றும் தமிழ்நாடு திருமணப் பதிவுச் சட்டம் 2009 ஆகியவற்றின் கீழ் பதிவு செய்யப்படுகின்றன.
    </p>
    <h4 className="font-bold text-gray-900 mb-2">தேவையான ஆவணங்கள் (Required Documents):</h4>
    <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-800">
      <li>ஆலயத்தில் வழங்கப்பட்ட அதிகாரப்பூர்வ திருமண சான்றிதழ் (Church Marriage Certificate)</li>
      <li>மணமகன் மற்றும் மணமகளின் ஞானஸ்நான சான்றிதழ் (Baptism Certificate)</li>
      <li>பிறப்புச் சான்றிதழ் அல்லது 10-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ் (வயது ஆதாரத்திற்கு)</li>
      <li>ஆதார் கார்டு மற்றும் முகவரிச் சான்று (Aadhaar &amp; Address Proof)</li>
      <li>மணமக்களின் பாஸ்போர்ட் அளவு புகைப்படங்கள்</li>
      <li>திருமணத்தில் பங்கேற்ற இரண்டு சாட்சிகளின் அடையாளச் சான்றுகள்</li>
    </ul>
    <h4 className="font-bold text-gray-900 mb-2">அரசுப் பதிவு செய்யும் படிநிலைகள் (Step-by-Step Process):</h4>
    <ul className="list-disc pl-6 space-y-2 text-gray-800">
      <li><strong>படி 1:</strong> திருமணம் முடிந்தவுடன் திருச்சபை போதகரிடமிருந்து (Licensed Marriage Registrar) சான்றளிக்கப்பட்ட திருமண சான்றிதழைப் பெறவும்.</li>
      <li><strong>படி 2:</strong> தமிழ்நாடு அரசின் TN Reginet (<strong>tnreginet.gov.in</strong>) இணையதளத்தில் உள்நுழைந்து, திருமணப் பதிவுப் பிரிவைத் தேர்ந்தெடுக்கவும்.</li>
      <li><strong>படி 3:</strong> கேட்கப்பட்டுள்ள விவரங்களைப் பூர்த்தி செய்து, ஆவணங்களைப் பதிவேற்றம் செய்து கட்டணத்தைச் செலுத்தவும்.</li>
      <li><strong>படி 4:</strong> ஒதுக்கப்பட்ட நாளில் சம்பந்தப்பட்ட சார்-பதிவாளர் அலுவலகத்தில் (Sub-Registrar Office) சாட்சிகளுடன் நேரில் ஆஜராகி அரசு திருமணச் சான்றிதழைப் பெற்றுக் கொள்ளலாம்.</li>
    </ul>
  </div>

  <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
    <h3 className="text-xl font-bold text-green-900 mt-0 mb-3">திருமண திட்டமிடலுக்கான நடைமுறை ஆலோசனைகள்</h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-800">
      <li><strong>முன்பதிவு:</strong> நீங்கள் விரும்பும் வரலாற்றுச் சிறப்புமிக்க ஆலயங்களில் திருமணத் தேதிக்கான முன்பதிவை 3 முதல் 6 மாதங்களுக்கு முன்பே செய்துவிடுவது நல்லது.</li>
      <li><strong>திருமண ஆயத்தப் பயிற்சி (Pre-Marriage Course):</strong> கத்தோலிக்க மற்றும் சி.எஸ்.ஐ திருச்சபைகளில் 1-2 நாட்கள் நடைபெறும் திருமண ஆயத்த வகுப்புகளில் மணமக்கள் பங்கேற்று சான்றிதழ் பெறுவது கட்டாயமாகும்.</li>
      <li><strong>ஆலய விதிகளைப் பின்பற்றுதல்:</strong> ஆலயத்திற்குள் புகைப்படக் கலைஞர்கள் நிற்குமிடம், ஆடை கட்டுப்பாடு மற்றும் இசை அமைப்பு (Choir) குறித்த திருச்சபையின் விதிகளுக்கு மதிப்பளிப்பது அவசியமாகும்.</li>
    </ul>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">முடிவுரை</h2>
  <p>
    தமிழ் கிறிஸ்துவத் திருமணம் என்பது இரு குடும்பங்களின் இணைப்பாகவும், இறைவனின் திருமுன்னிலையில் செய்யப்படும் பரிசுத்த உடன்படிக்கையாகவும் திகழ்கிறது. மேலைநாட்டு இறையியல் ஒழுங்கமைப்பும், பழந்தமிழ்ப் பண்பாட்டின் தாலி, கூறைப் புடவை போன்ற மங்கல அம்சங்களும் ஒன்றாகக் கரம்கோர்க்கும் இந்தத் திருமண முறைகள், தமிழ் சமூகத்தின் பண்பாட்டுச் செழுமைக்கு என்றும் சான்றாக விளங்குகின்றன.
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
                    currentSlug="/blog/christian-tamil-wedding-traditions" 
                    category="traditions" 
                />
            </div>
        </article>
    );
}
