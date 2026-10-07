import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'டாக்டர் முத்துலக்ஷ்மி ரெட்டி நலத் திட்டம் | கல்யாண வீடு',
    description: 'டாக்டர் முத்துலக்ஷ்மி ரெட்டி நலத் திட்டம் - விதவை மறுமணம், BPL குடும்பங்களுக்கான திருமண உதவி',
    keywords: ['dr', 'muthulakshmi', 'reddy', 'scheme', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/dr-muthulakshmi-reddy-scheme`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'டாக்டர் முத்துலக்ஷ்மி ரெட்டி நலத் திட்டம்',
                    description: 'டாக்டர் முத்துலக்ஷ்மி ரெட்டி நலத் திட்டம் - விதவை மறுமணம், BPL குடும்பங்களுக்கான திருமண உதவி',
                    author: 'கார்த்திக் ராஜன்',
                    datePublished: '2026-09-19',
                    slug: '/blog/dr-muthulakshmi-reddy-scheme'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'அரசு திட்டங்கள்', item: '/blog?category=government-schemes' },
                    ]
                }} 
            />

            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    🏛️ அரசு திட்டங்கள்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    டாக்டர் முத்துலக்ஷ்மி ரெட்டி நலத் திட்டம்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="டாக்டர் முத்துலக்ஷ்மி ரெட்டி நலத் திட்டம்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock
                    author="கார்த்திக் ராஜன்"
                    updatedDate="செப்டம்பர் 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

<p className="text-xl leading-relaxed text-gray-600 border-b pb-6">
    தமிழ்நாட்டில் பெண்களின் முன்னேற்றத்திற்காகவும், சமூக சீர்திருத்தத்திற்காகவும் அரசு பல உன்னதமான நலத்திட்டங்களைச் செயல்படுத்தி வருகிறது. அதில் மிக முக்கியமானது, இந்தியாவின் முதல் பெண் மருத்துவரும் சமூக சீர்திருத்தவாதியுமான டாக்டர் முத்துலக்ஷ்மி ரெட்டி அவர்களின் பெயரில் செயல்படும் விதவை மறுமண நிதி உதவித் திட்டமாகும் (Dr. Muthulakshmi Reddy Widow Remarriage Assistance Scheme). ஏழை எளிய BPL (வறுமைக் கோட்டிற்கு கீழ் உள்ள) குடும்பங்கள் மற்றும் ஆதரவற்ற பெண்களின் திருமண நிதிச் சுமையைக் குறைக்கவும், விதவை மறுமணத்தை சமூகத்தில் ஊக்குவிக்கவும் இந்த நிதி உதவியும் திருமாங்கல்யம் செய்ய தங்கமும் வழங்கப்படுகிறது. இத்திட்டத்தின் முழுமையான விவரங்கள், தகுதிகள், தேவையான ஆவணங்கள் மற்றும் விண்ணப்பிக்கும் முறையை இங்கு விரிவாகக் காண்போம்.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    டாக்டர் முத்துலட்சுமி ரெட்டி விதவை மறுமண நிதி உதவித் திட்டம் - ஓர் அறிமுகம்
  </h2>
  <p>
    தமிழ்நாடு அரசின் சமூக நலன் மற்றும் மகளிர் உரிமைத் துறையின் (Social Welfare and Women Empowerment Department) மூலம் இத்திட்டம் திறம்பட நடத்தப்பட்டு வருகிறது. இளம் வயதிலேயே கணவனை இழந்து தவிக்கும் பெண்களுக்குப் புதிய மறுவாழ்வு அளிப்பதும், விதவை மறுமணம் குறித்த சமூகத்தின் பழமைவாத பார்வைகளை மாற்றுவதும் இத்திட்டத்தின் பிரதான நோக்கமாகும்.
  </p>
  <p>
    இத்திட்டத்தின் கீழ் தகுதியான பயனாளிப் பெண்களுக்கு அவர்களின் கல்வித் தகுதியின் அடிப்படையில் இரண்டு பிரிவுகளாக நிதி உதவியும், திருமாங்கல்யம் செய்வதற்குத் தேவையான தங்க நாணயமும் வழங்கப்பட்டு வருகிறது:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      <strong>பிரிவு 1 (கல்வித் தகுதி சான்றிதழ் இல்லாதவர்கள் / சாதாரண கல்வி):</strong> ரூ. 25,000 நிதி உதவி (ரூ. 15,000 நேரடியாக மின்னணு வங்கிப் பரிமாற்றம் - ECS மூலம் + ரூ. 10,000 தேசிய சேமிப்புப் பத்திரமாக - NSC) மற்றும் திருமாங்கல்யத்திற்காக 8 கிராம் (1 சவரன்) 22 காரட் தங்க நாணயம்.
    </li>
    <li>
      <strong>பிரிவு 2 (பட்டதாரிகள் மற்றும் பட்டயப்படிப்பு முடித்தவர்கள்):</strong> அரசால் அங்கீகரிக்கப்பட்ட கல்லூரிகளில் பட்டம் (Degree) பெற்றவர்கள் அல்லது தொழிற்பயிற்சி நிறுவனங்களில் டிப்ளமோ (Diploma) முடித்த பெண்களுக்கு ரூ. 50,000 நிதி உதவி (ரூ. 30,000 ECS மூலம் + ரூ. 20,000 தேசிய சேமிப்புப் பத்திரம்) மற்றும் 8 கிராம் (1 சவரன்) 22 காரட் தங்க நாணயம்.
    </li>
  </ul>

  <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
    <p className="font-semibold text-orange-900 mb-1">முக்கிய சிறப்பு அம்சம்:</p>
    <p className="text-orange-800 text-sm">
      மற்ற திருமண உதவித் திட்டங்களைப் போல அல்லாமல், டாக்டர் முத்துலக்ஷ்மி ரெட்டி விதவை மறுமணத் திட்டத்திற்கு எவ்வித குடும்ப வருமான வரம்பும் (No Income Limit) நிர்ணயிக்கப்படவில்லை! விதவை மறுமணத்தை எவ்வித பொருளாதாரப் பாகுபாடுமின்றி சமூகத்தில் ஊக்குவிக்கவே இந்தச் சலுகை வழங்கப்பட்டுள்ளது.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    திட்டத்தில் சேருவதற்கான தகுதிகள் மற்றும் நிபந்தனைகள்
  </h2>
  <p>
    இத்திட்டத்தின் நன்மைகளைப் பெற விண்ணப்பதாரர்கள் கீழ்வரும் தகுதிகளைப் பெற்றிருக்க வேண்டும்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      <strong>மணப்பெண்ணின் வயது:</strong> மறுமணம் செய்துகொள்ளும் பெண் குறைந்தபட்சம் 20 வயதைப் பூர்த்தி செய்திருக்க வேண்டும். அதிகபட்ச வயது வரம்பு 40 ஆகும்.
    </li>
    <li>
      <strong>மணமகனின் வயது:</strong> மணமகனுக்குக் குறைந்தபட்சம் 21 வயது பூர்த்தியடைந்திருக்க வேண்டும்.
    </li>
    <li>
      <strong>மணமகனின் திருமண நிலை:</strong> மணமகன் இதற்கு முன் திருமணம் ஆகாதவராக (Bachelor) இருக்க வேண்டும். மணமகனுக்கு இதுவே முதல் திருமணமாக இருக்க வேண்டும் என்பது கட்டாய நிபந்தனையாகும்.
    </li>
    <li>
      <strong>இருப்பிடச் சான்று:</strong> விண்ணப்பதாரர் தமிழ்நாட்டில் குறைந்தபட்சம் 5 ஆண்டுகள் தொடர்ச்சியாக வசித்து வரும் நிரந்தரக் குடிமகனாக இருக்க வேண்டும்.
    </li>
    <li>
      <strong>விண்ணப்பிக்கும் காலக்கெடு:</strong> மறுமணம் நடைபெற்ற நாளிலிருந்து 6 மாதங்களுக்குள் (6 Months from Marriage Date) உரிய ஆவணங்களுடன் விண்ணப்பிக்க வேண்டும். காலதாமதமாக வரும் விண்ணப்பங்கள் ஏற்றுக்கொள்ளப்பட மாட்டாது.
    </li>
  </ul>

  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
    <h3 className="text-xl font-bold text-gray-800 mb-3">திட்டத்தின் சமூகப் பின்னணியும் கலாச்சார முக்கியத்துவமும்</h3>
    <p className="text-gray-700">
      தமிழ்நாட்டின் சமூகச் சீர்திருத்த வரலாற்றில் விதவை மறுமணம் என்பது ஒரு மிகப்பெரிய புரட்சியாகும். பழங்காலத்தில் கணவனை இழந்த பெண்கள் சமூகப் புறக்கணிப்பிற்கும் நிதிச் சவால்களுக்கும் ஆளாகினர். டாக்டர் முத்துலக்ஷ்மி ரெட்டி போன்ற தொலைநோக்குச் சிந்தனையாளர்களின் முயற்சியால் உருவான இத்திட்டம், விதவை மறுமணத்திற்கு சமுதாய அங்கீகாரத்தையும், புதிய தம்பதியருக்குத் தன்னம்பிக்கையுடனும் பொருளாதாரப் பாதுகாப்புடனும் வாழ வழிவகுக்கிறது.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    தேவையான சான்றிதழ்கள் மற்றும் ஆவணங்களின் பட்டியல்
  </h2>
  <p>
    இ-சேவை மையம் வாயிலாக விண்ணப்பிக்கும் போது சமர்ப்பிக்க வேண்டிய அசல் மற்றும் சான்றளிக்கப்பட்ட ஆவணங்களின் விவரங்கள்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li>மறுமணம் செய்துகொண்ட பெண்ணின் முதல் கணவரின் இறப்புச் சான்றிதழ் (Death Certificate of First Husband).</li>
    <li>மணப்பெண் மற்றும் மணமகனின் வயதுச் சான்று (பள்ளி மாற்றுச் சான்றிதழ் / பிறப்புச் சான்றிதழ் / ஆதார் அட்டையின் நகல்).</li>
    <li>மணமகனுக்கு இதுவே முதல் திருமணம் என்பதற்கான வட்டாட்சியர் (Tahsildar) வழங்கும் சான்றிதழ்.</li>
    <li>மண்டலத் திருமணப் பதிவாளர் (Sub-Registrar Office) வழங்கிய அதிகாரப்பூர்வ திருமணப் பதிவுச் சான்றிதழ் (Marriage Registration Certificate).</li>
    <li>பட்டப்படிப்பு / பட்டயப்படிப்பு முடித்தவர்களுக்கான மதிப்பெண் சான்றிதழ்கள் மற்றும் மாற்றுச் சான்றிதழ் (Transfer Certificate).</li>
    <li>குடும்ப அட்டை (Ration Card) மற்றும் ஆதார் கார்டு (Aadhaar Card) நகல்கள்.</li>
    <li>மணப்பெண்ணின் பெயரில் உள்ள வங்கிப் புத்தகத்தின் முதல் பக்க நகல் (IFSC Code தெளிவாக இருக்க வேண்டும்).</li>
    <li>தம்பதியரின் கூட்டுப் புகைப்படம் (Joint Passport Size Photo) மற்றும் திருமணப் புகைப்படம்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    விண்ணப்பிக்கும் முறை - படிப்படியாக வழிகாட்டி
  </h2>
  <p>
    தமிழக அரசு தற்போது இத்திட்டத்திற்கான விண்ணப்பச் செயல்முறையை முழுமையாக டிஜிட்டல் மயமாக்கியுள்ளது. கீழ்வரும் படிநிலைகளைப் பின்பற்றி நீங்கள் எளிதாக விண்ணப்பிக்கலாம்:
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 1: இ-சேவை மையத்தை அணுகுதல்</h3>
  <p>
    உங்கள் பகுதிக்கு அருகில் உள்ள அரசு இ-சேவை மையம் (e-Sevai Centre) அல்லது தமிழ்நாடு அரசு கேபிள் டிவி நிறுவனத்தின் (TACTV) இ-சேவை மையத்திற்குத் தேவையான அனைத்து ஆவணங்களுடன் செல்லவும்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 2: ஆன்லைன் போர்ட்டலில் பதிவு செய்தல்</h3>
  <p>
    இ-சேவை மைய ஊழியர் தமிழ்நாடு அரசின் அதிகாரப்பூர்வ இ-சேவை இணையதளம் (<a href="https://tnesevai.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold underline">tnesevai.tn.gov.in</a>) வாயிலாக உங்கள் விவரங்களைப் பதிவேற்றுவார். ஆவணங்கள் அனைத்தும் ஸ்கேன் செய்யப்பட்டு இணைக்கப்படும்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 3: கள ஆய்வு (Field Verification)</h3>
  <p>
    ஆன்லைனில் சமர்ப்பிக்கப்பட்ட விண்ணப்பம் சம்பந்தப்பட்ட சமூக நல விரிவாக்க அலுவலருக்கு (Extension Officer - Social Welfare) அனுப்பி வைக்கப்படும். அலுவலர் நேரடியாக நேரில் வந்து ஆவணங்கள் மற்றும் மறுமண விவரங்களை கள ஆய்வு செய்து அறிக்கை சமர்ப்பிப்பார்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 4: அனுமதி பெறல் மற்றும் நிதியுதவி</h3>
  <p>
    மாவட்ட சமூக நல அலுவலர் (District Social Welfare Officer - DSWO) விண்ணப்பத்தைச் சரிபார்த்து ஒப்புதல் அளிப்பார். ஒப்புதல் கிடைத்தவுடன், நிதி உதவித் தொகை நேரடியாகப் பயனாளியின் வங்கிப் கணக்கில் DBT (Direct Benefit Transfer) முறையில் செலுத்தப்படும். 8 கிராம் தங்க நாணயம் மாவட்ட சமூக நல அலுவலகம் மூலம் அதிகாரப்பூர்வமாக வழங்கப்படும்.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    BPL குடும்பங்களுக்கான பிற அரசு திருமண உதவித் திட்டங்கள்
  </h2>
  <p>
    தமிழக அரசு டாக்டர் முத்துலக்ஷ்மி ரெட்டி திட்டத்துடன் சேர்த்து வறுமைக் கோட்டிற்கு கீழ் உள்ள (BPL) குடும்பங்களின் பெண்களுக்கு உதவ மேலும் பல சமூக நலத் திட்டங்களை வழங்கி வருகிறது:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      <strong>ஈ.வெ.ரா. மணியம்மையார் நினைவாக விதவைகளின் மகள்களுக்கான திருமண உதவித் திட்டம்:</strong> கணவனை இழந்த ஏழைத் தாய்மார்கள் தங்கள் மகள்களின் திருமணத்தை நடத்துவதற்கு நிதி உதவி மற்றும் தங்கம் வழங்கும் திட்டம். (வருமான வரம்பு: ஆண்டிற்கு ரூ. 72,000-க்குள் இருக்க வேண்டும்).
    </li>
    <li>
      <strong>அன்னையார் தெரசா நினைவாக ஆதரவற்ற பெண்களுக்கான திருமண உதவித் திட்டம்:</strong> பெற்றோர் இல்லாத ஆதரவற்ற ஏழைப் பெண்களின் திருமணத்திற்கு நிதியுதவி வழங்கும் சிறப்புத் திட்டம்.
    </li>
    <li>
      <strong>டாக்டர் தர்மம்பாள் அம்மையார் நினைவாக விதவை மறுமணத் திட்டம்:</strong> மறுமணம் செய்து கொள்ளும் ஏழைப் பெண்களுக்கு ஆதரவளிக்கும் மற்றுமொரு முன்னோடித் திட்டம்.
    </li>
  </ul>

  <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
    <h3 className="text-xl font-bold text-gray-800 mb-3">விண்ணப்பிக்கும் போது கவனிக்க வேண்டிய முக்கிய குறிப்புகள்</h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>திருமணம் முடிந்த உடனே உள்ளாட்சி அமைப்பிலோ அல்லது சார்பதிவாளர் அலுவலகத்திலோ திருமணப் பதிவு (Marriage Registration) செய்து சான்றிதழ் பெறுவது மிகவும் அவசியம்.</li>
      <li>விண்ணப்பத்தில் குறிப்பிடப்படும் வங்கி கணக்கு எண், மணப்பெண்ணின் பெயரில் மட்டுமே இருக்க வேண்டும். மேலும், அக்கணக்கு ஆதார் எண்ணுடன் இணைக்கப்பட்டிருக்க (Aadhaar Seeded) வேண்டும்.</li>
      <li>திருமணம் முடிந்து 6 மாதங்களுக்குள் விண்ணப்பிக்க வேண்டும் என்பதால், ஆவணங்களை முன்கூட்டியே தயார் செய்து வைப்பது நல்லது.</li>
      <li>திட்டம் தொடர்பான மேலும் கூடுதல் விவரங்களுக்கு உங்கள் மாவட்ட ஆட்சியர் (Collectorate) வளாகத்தில் உள்ள 'மாவட்ட சமூக நல அலுவலகத்தை' நேரில் தொடர்பு கொள்ளலாம்.</li>
    </ul>
  </div>

  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
    <h3 className="text-xl font-bold text-gray-800 mb-2">முடிவுரை (Conclusion)</h3>
    <p className="text-gray-700">
      டாக்டர் முத்துலக்ஷ்மி ரெட்டி விதவை மறுமண நிதி உதவித் திட்டம் என்பது வெறும் நிதியுதவித் திட்டம் மட்டுமல்ல; அது பெண்களின் சுயமரியாதை மற்றும் வாழ்வாதாரத்தை உயர்த்தும் ஒரு சமூகப் பாதுகாப்பு அரணாகும். இத்திட்டம் பற்றிய சரியான விழிப்புணர்வு சமுதாயத்தின் அனைத்துத் தரப்பினரையும் சென்றடைய வேண்டும். கல்யாண வீடு (Kalyanaveedu.in) தளம் வழியாக இத்தகவலைத் தேவையானவர்களுக்குப் பகிர்ந்து, ஏழை எளிய குடும்பங்களின் திருமணக் கனவு நனவாக உதவுங்கள்!
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
                    name="கார்த்திக் ராஜன்"
                    role="Government Policy Researcher"
                    bio="கார்த்திக் ராஜன் தமிழ்நாடு மற்றும் மத்திய அரசு நலத் திட்டங்கள் குறித்து ஆராய்ச்சி செய்து வருகிறார். பல ஆண்டுகளாக குடும்பங்களுக்கு அரசு திட்டங்களில் விண்ணப்பிக்க உதவி வருகிறார்."
                />
                <RelatedArticles 
                    currentSlug="/blog/dr-muthulakshmi-reddy-scheme" 
                    category="government-schemes" 
                />
            </div>
        </article>
    );
}
