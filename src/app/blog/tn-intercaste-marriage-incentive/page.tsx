import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'சாதிகளுக்கிடையேயான திருமண ஊக்கத் திட்டம் | கல்யாண வீடு',
    description: 'சாதிகளுக்கிடையேயான திருமண ஊக்கத் திட்டம் - ₹1 லட்சம் (SC-OC திருமணம்), தகுதி, விண்ணப்பம்',
    keywords: ['tn', 'intercaste', 'marriage', 'incentive', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/tn-intercaste-marriage-incentive`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'சாதிகளுக்கிடையேயான திருமண ஊக்கத் திட்டம்',
                    description: 'சாதிகளுக்கிடையேயான திருமண ஊக்கத் திட்டம் - ₹1 லட்சம் (SC-OC திருமணம்), தகுதி, விண்ணப்பம்',
                    author: 'கார்த்திக் ராஜன்',
                    datePublished: '2026-09-22',
                    slug: '/blog/tn-intercaste-marriage-incentive'
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
                    சாதிகளுக்கிடையேயான திருமண ஊக்கத் திட்டம்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="சாதிகளுக்கிடையேயான திருமண ஊக்கத் திட்டம்"
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

<p>
  தமிழ்நாட்டில் சாதி வேறுபாடுகளைக் கடந்து சமூக சமத்துவத்தை நிலைநாட்டும் நோக்கில் காதல் திருமணம் மற்றும் சாதி மறுப்புத் திருமணம் செய்து கொள்ளும் தம்பதிகளுக்கு அரசு பல்வேறு ஊக்கத் திட்டங்களைச் செயல்படுத்தி வருகிறது. குறிப்பாக, ஆதிதிராவிடர் (SC) வகுப்பைச் சேர்ந்த ஒருவரும், பிற வகுப்பைச் சேர்ந்த (OC / BC / MBC) ஒருவரும் இணைந்து வாழ்க்கைத் பயணத்தைத் தொடங்கும் போது, அவர்களுக்கு நிதிப் பாதுகாப்பையும் சமூக ஆதரவையும் வழங்கும் வகையில் **சா திகளுக்கிடையேயான திருமண ஊக்கத் திட்டம் (Inter-Caste Marriage Incentive Scheme)** பெரும் உதவியாக இருக்கிறது.
</p>

<p>
  இத்திட்டத்தின் மூலம் ரூ. 1 லட்சம் வரை நிதியுதவி மற்றும் தாலிக்கு தங்கம் வழங்கும் சலுகைகள் தமிழ்நாட்டு அரசால் வழங்கப்பட்டு வருகின்றன. மேலும் மத்திய அரசின் டாக்டர் பி.ஆர். அம்பேத்கர் ஃபவுண்டேஷன் மூலம் ரூ. 2.50 லட்சம் வரை நிதியுதவி பெறவும் வாய்ப்புள்ளது. இக்கட்டுரையில், தமிழ்நாட்டில் இத்திட்டத்தின் கீழ் பயன்பெறுவதற்கான முழுத் தகுதிகள், தேவையான ஆவணங்கள் மற்றும் விண்ணப்பிக்கும் படிப்படியான வழிமுறைகளைத் விரிவாகக் காண்போம்.
</p>

<div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
  <p className="font-bold text-orange-900 mb-1">முக்கியக் குறிப்பு:</p>
  <p className="text-orange-800 text-sm">
    இத்திட்டத்தின்கீழ் பயனடைய திருமணம் பதிவு செய்யப்பட்ட நாளிலிருந்து 2 ஆண்டுகளுக்குள் (மத்திய அரசு திட்டத்திற்கு 1 ஆண்டுக்குள்) விண்ணப்பிக்க வேண்டும். காலதாமதமாகச் செய்யப்படும் விண்ணப்பங்கள் நிராகரிக்கப்பட வாய்ப்புள்ளது.
  </p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. திட்டத்தின் முக்கிய நோக்கம் மற்றும் பின்னணி</h2>
<p>
  இந்திய சமுதாயத்தில் பல தலைமுறைகளாக நிலவி வரும் சாதியக் கட்டமைப்புகளைத் தகர்த்து, சமூக நல்லிணக்கத்தையும் சமத்துவத்தையும் ஏற்படுத்துவதே இத்திட்டத்தின் முதன்மை நோக்கமாகும். சாதி மறுப்புத் திருமணம் செய்யும் இளம் தம்பதிகள் பல நேரங்களில் தங்கள் குடும்பத்தினரின் ஆதரவை இழந்து, பொருளாதார ரீதியாகச் சிரமப்படக் கூடும்.
</p>
<p>
  அத்தகைய தம்பதிகள் தங்கள் புதிய வாழ்க்கையை எவ்வித நிதி நெருக்கடியுமின்றி அமைதியாகத் தொடங்க வேண்டும் என்பதற்காகத் தமிழ்நாடு சமூக நலத்துறை மற்றும் ஆதிதிராவிடர் நலத்துறை இணைந்து இந்த ஊக்கத் தொகையை வழங்கி வருகின்றன.
</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. நிதியுதவி விவரங்கள் மற்றும் சலுகைகள்</h2>
<p>
  இத்திட்டத்தின் கீழ் தம்பதிகளுக்கு வழங்கப்படும் நிதியுதவி அவர்களின் கல்வித் தகுதி மற்றும் அரசு விதிகள் அடிப்படையில் பிரிக்கப்படுகிறது:
</p>

<ul className="list-disc pl-6 space-y-3">
  <li>
    <strong>பட்டதாரி அல்லாதவர்களுக்கான நிதியுதவி:</strong> மணமக்களில் ஒருவர் பட்டப்படிப்பு அல்லது டிப்ளமோ படிக்காதவராக இருந்தால், அவர்களுக்கு <strong>ரூ. 25,000</strong> நிதியுதவி (ரூ. 15,000 தேசிய சேமிப்புப் பத்திரமாகவும், ரூ. 10,000 காசோலையாகவும்) வழங்கப்படும்.
  </li>
  <li>
    <strong>பட்டதாரிகளுக்கான நிதியுதவி:</strong> மணமக்களில் ஒருவர் பட்டப்படிப்பு (Degree) அல்லது பட்டயப்படிப்பு (Diploma) முடித்தவராக இருந்தால், அவர்களுக்கு <strong>ரூ. 50,000</strong> நிதியுதவி (ரூ. 30,000 தேசிய சேமிப்புப் பத்திரமாகவும், ரூ. 20,000 காசோலையாகவும்) வழங்கப்படும்.
  </li>
  <li>
    <strong>திருமணத் தாலிக்குத் தங்கம்:</strong> தமிழக அரசின் சமூக நலத்துறை திட்டங்களின் கீழ் நிதியுதவியுடன் 8 கிராம் (1 சவரன்) 22 கேரட் தங்க நாணயமும் இலவசமாக வழங்கப்படுகிறது.
  </li>
  <li>
    <strong>மத்திய அரசு திட்டம் (Dr. Ambedkar Scheme):</strong> SC மற்றும் non-SC பிரிவினருக்கு இடையே நடைபெறும் திருமணங்களுக்கு மத்திய அரசின் அம்பேத்கர் அறக்கட்டளை மூலம் ரூ. 2.50 லட்சம் வரை ஊக்கத்தொகை நேரடியாக தம்பதியரின் கூட்டு வங்கிக் கணக்கில் வைப்புத் தொகையாக செலுத்தப்படுகிறது.
  </li>
</ul>

<div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
  <h3 className="text-xl font-bold text-gray-800 mt-0 mb-3">நிதியுதவிப் பகிர்வு அட்டவணை</h3>
  <p className="text-sm text-gray-700 mb-4">
    மாநில அரசு திட்டத்தின் கீழ் வழங்கப்படும் தொகையின் முழு விவரம்:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
    <li><strong>பொதுப் பிரிவு (Non-Graduate):</strong> ரூ. 25,000 + 8 கிராம் தங்கம்</li>
    <li><strong>பட்டதாரிப் பிரிவு (Graduate/Diploma):</strong> ரூ. 50,000 + 8 கிராம் தங்கம்</li>
    <li><strong>மத்திய அம்பேத்கர் திட்டம்:</strong> ரூ. 2,50,000 (நிபந்தனைகளுக்கு உட்பட்டு)</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. தகுதி நிபந்தனைகள் (Eligibility Criteria)</h2>
<p>
  இத்திட்டத்தின் கீழ் நிதியுதவி பெற தம்பதியர் பின்வரும் தகுதிகளைப் பெற்றிருக்க வேண்டும்:
</p>

<ul className="list-disc pl-6 space-y-3">
  <li>
    <strong>சாதிப் பிரிவு:</strong> தம்பதியரில் ஒருவர் கண்டிப்பாக ஆதிதிராவிடர் (SC) அல்லது பழங்குடியினர் (ST) வகுப்பைச் சேர்ந்தவராகவும், மற்றொருவர் பிற்படுத்தப்பட்டோர் (BC), மிகவும் பிற்படுத்தப்பட்டோர் (MBC) அல்லது பொதுப் பிரிவைச் (OC) சேர்ந்தவராகவும் இருக்க வேண்டும்.
  </li>
  <li>
    <strong>வயது வரம்பு:</strong> திருமணத்தின் போது மணமகளுக்குக் குறைந்தபட்சம் 18 வயதும், மணமகனுக்குக் குறைந்தபட்சம் 21 வயதும் பூர்த்தியடைந்திருக்க வேண்டும்.
  </li>
  <li>
    <strong>முதல் திருமணம்:</strong> இது இருவருக்குமே முதல் திருமணமாக இருக்க வேண்டும் (கணவனை இழந்த பெண் அல்லது மனைவியை இழந்த ஆண் மறுமணம் செய்யும்போது சில விலக்குகள் உண்டு).
  </li>
  <li>
    <strong>வருமான வரம்பு:</strong> தமிழ்நாடு மாநில அரசு திட்டத்திற்கு எவ்வித வருமான வரம்பும் இல்லை (No Income Limit).
  </li>
  <li>
    <strong>கால அவகாசம்:</strong> திருமணம் நடந்து பதிவு செய்யப்பட்ட நாளிலிருந்து 2 ஆண்டுகளுக்குள் விண்ணப்பிக்க வேண்டும்.
  </li>
  <li>
    <strong>சட்டப்பூர்வ பதிவு:</strong> இந்து திருமணச் சட்டம் அல்லது சிறப்புத் திருமணச் சட்டத்தின் கீழ் திருமணம் கண்டிப்பாகப் பதிவு செய்யப்பட்டிருக்க வேண்டும்.
  </li>
</ul>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. தேவையான முக்கிய ஆவணங்கள் (Required Documents)</h2>
<p>
  இத்திட்டத்திற்கு விண்ணப்பிக்கும் போது பின்வரும் சான்றிதழ்களின் நகல்களைச் சமர்ப்பிக்க வேண்டும்:
</p>

<ul className="list-disc pl-6 space-y-3">
  <li><strong>திருமணப் பதிவுச் சான்றிதழ் (Marriage Certificate):</strong> பதிவுத் துறையினால் வழங்கப்பட்ட அதிகாரப்பூர்வ சான்றிதழ்.</li>
  <li><strong>சாதிச் சான்றிதழ்கள் (Community Certificates):</strong> கணவன் மற்றும் மனைவி இருவரின் சாதிச் சான்றிதழ்கள்.</li>
  <li><strong>வயதுச் சான்று (Age Proof):</strong> பள்ளி மாற்றுச் சான்றிதழ் (TC), பிறப்புச் சான்றிதழ் அல்லது பத்தாம் வகுப்பு மதிப்பெண் சான்றிதழ்.</li>
  <li><strong>கல்விச் சான்றிதழ் (Educational Qualification):</strong> பட்டதாரி சலுகைக்கு விண்ணப்பித்தால், பட்டப்படிப்பு அல்லது டிப்ளமோ சான்றிதழ்.</li>
  <li><strong>முகவரிச் சான்று (Address Proof):</strong> குடும்ப அட்டை (Ration Card), ஆதார் கார்டு அல்லது வாக்காளர் அடையாள அட்டை.</li>
  <li><strong>வங்கிக் கணக்கு விவரங்கள்:</strong> கணவன்-மனைவி பெயரிலான கூட்டு வங்கிக் கணக்கு (Joint Account) புத்தகத்தின் முதல் பக்க நகல்.</li>
  <li><strong>புகைப்படம்:</strong> தம்பதியர் ஒன்றாக இணைந்த பாஸ்போர்ட் அளவு புகைப்படங்கள் (2 நகல்கள்).</li>
</ul>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. விண்ணப்பிக்கும் முறை - படிப்படி வழிகாட்டி</h2>
<p>
  தமிழ்நாட்டில் சாதி மறுப்புத் திருமண நிதியுதவித் திட்டத்திற்கு ஆன்லைன் மற்றும் ஆஃப்லைன் வாயிலாக விண்ணப்பிக்கலாம்:
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">முறை 1: இ-சேவை மையம் மூலம் விண்ணப்பித்தல் (Online Process)</h3>
<p>
  தற்போது பெரும்பாலான சமூக நல திட்டங்கள் இ-சேவை (e-Sevai / TNeGA) மையம் மூலமாகவே பெறப்படுகின்றன:
</p>
<ul className="list-disc pl-6 space-y-2">
  <li>உங்களுக்கு அருகில் உள்ள அரசு இ-சேவை மையத்திற்குச் செல்லவும்.</li>
  <li>மேற்கூறிய அனைத்து அசல் ஆவணங்களையும் (Original Documents) எடுத்துச் செல்ல வேண்டும்.</li>
  <li>இ-சேவை மைய ஊழியர் உங்கள் ஆவணங்களைச் சரிபார்த்து இணையதளத்தில் பதிவேற்றம் செய்வார்.</li>
  <li>விண்ணப்பக் கட்டணம் செலுத்திய பின், ஒப்புதல் சீட்டு (Acknowledgement Receipt) வழங்கப்படும். அதில் உள்ள விண்ணப்ப எண்ணைக் கொண்டு நிலையைக் கண்காணிக்கலாம்.</li>
</ul>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">முறை 2: நேரில் விண்ணப்பித்தல் (Offline Process)</h3>
<ul className="list-disc pl-6 space-y-2">
  <li>உங்கள் மாவட்டத்தின் <strong>மாவட்ட சமூக நல அலுவலகத்திற்கு (District Social Welfare Office)</strong> நேரில் செல்லவும்.</li>
  <li>கலப்புத் திருமண நிதியுதவிக்கான விண்ணப்பப் படிவத்தைப் பெற்றுப் பூர்த்தி செய்யவும்.</li>
  <li>தேவையான சான்றிதழ்களின் நகல்களில் சுயசான்றொப்பம் (Self-attestation) செய்து இணைக்கவும்.</li>
  <li>அலுவலகத்தில் விண்ணப்பத்தைச் சமர்ப்பித்து ஒப்புதல் ரசீதைப் பெற்றுக்கொள்ளவும்.</li>
</ul>

<div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
  <h3 className="text-xl font-bold text-gray-800 mt-0 mb-3">பயனுள்ள குறிப்புகள் (Pro-Tips)</h3>
  <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
    <li>வங்கிக் கணக்கில் ஆதார் எண் கண்டிப்பாக இணைக்கப்பட்டிருக்க வேண்டும் (Aadhaar Seeded Bank Account).</li>
    <li>கணவன் மற்றும் மனைவி இருவரின் சாதிச் சான்றிதழ்களிலும் உள்ள பெயர்களும், ஆதார் கார்டில் உள்ள பெயர்களும் ஒரே மாதிரியாக இருக்க வேண்டும்.</li>
    <li>மத்திய அரசின் Dr. BR Ambedkar Foundation திட்டத்திற்கு விண்ணப்பிக்க விரும்புவோர், உள்ளூர் நாடாளுமன்ற உறுப்பினர் (MP) அல்லது மாவட்ட ஆட்சியரின் (District Collector) பரிந்துரைக் கடிதத்தைப் பெற வேண்டும்.</li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)</h2>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">கேள்வி 1: இத்திட்டத்திற்கு விண்ணப்பிக்கக் காலக்கெடு உள்ளதா?</h3>
<p>
  ஆம், திருமணம் முடிந்து பதிவு செய்யப்பட்ட நாளிலிருந்து 2 வருடங்களுக்குள் மாநில அரசுத் திட்டத்திற்கும், 1 வருடத்திற்குள் மத்திய அரசுத் திட்டத்திற்கும் விண்ணப்பிக்க வேண்டும்.
</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">கேள்வி 2: BC மற்றும் MBC வகுப்பினருக்கு இடையே திருமணம் நடந்தால் இத்திட்டம் பொருந்துமா?</h3>
<p>
  இல்லை. ₹1 லட்சம் வரையிலான இந்த சிறப்பு திட்டத்தின் கீழ் பயனடைய தம்பதிகளில் ஒருவர் கண்டிப்பாக **ஆதிதிராவிடர் (SC/ST)** வகுப்பையும், மற்றொருவர் பிற வகுப்பையும் (BC/MBC/OC) சேர்ந்தவராக இருக்க வேண்டும்.
</p>

<div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
  <h3 className="text-xl font-bold text-gray-800 mt-0 mb-3">சுருக்கம் (Summary)</h3>
  <p className="text-sm text-gray-700">
    சாதி மறுப்புத் திருமணம் செய்து கொள்ளும் SC-OC தம்பதிகளுக்குத் தமிழ்நாடு அரசு மற்றும் மத்திய அரசு வழங்கும் நிதியுதவிகள் பெரும் பொருளாதாரப் பாதுகாப்பை அளிக்கின்றன. சரியான ஆவணங்களுடன் உரிய காலத்திற்குள் விண்ணப்பித்து அரசு வழங்கும் இந்த ஊக்கத் தொகையைப் பெற்றுப் பயனடையுங்கள்.
  </p>
</div>

<p>
  சமூக மாற்றத்திற்கும் சமத்துவத்திற்கும் வழிவகுக்கும் இத்தகைய சாதி மறுப்புத் திருமணங்களை அரசு ஊக்குவிப்பது வரவேற்கத்தக்கது. உங்கள் திருமணத்தைப் பதிவு செய்தவுடனே தேவையான ஆவணங்களைத் தயார் செய்து இ-சேவை மையம் அல்லது மாவட்ட சமூக நல அலுவலகம் வாயிலாக விண்ணப்பித்து பயன்பெறுங்கள்.
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
                    name="கார்த்திக் ராஜன்"
                    role="Government Policy Researcher"
                    bio="கார்த்திக் ராஜன் தமிழ்நாடு மற்றும் மத்திய அரசு நலத் திட்டங்கள் குறித்து ஆராய்ச்சி செய்து வருகிறார். பல ஆண்டுகளாக குடும்பங்களுக்கு அரசு திட்டங்களில் விண்ணப்பிக்க உதவி வருகிறார்."
                />
                <RelatedArticles 
                    currentSlug="/blog/tn-intercaste-marriage-incentive" 
                    category="government-schemes" 
                />
            </div>
        </article>
    );
}
