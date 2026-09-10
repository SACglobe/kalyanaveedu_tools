import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'தமிழ்நாடு புதுமை பெண் திட்டம் (Pudhumai Penn Scheme) | கல்யாண வீடு',
    description: 'தமிழ்நாடு புதுமை பெண் திட்டம் (Pudhumai Penn Scheme) - ₹1000 மாதாந்திர உதவி, தகுதி, விண்ணப்பிக்கும் முறை',
    keywords: ['tn', 'pudhumai', 'penn', 'scheme', 'tamil', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/tn-pudhumai-penn-scheme-tamil`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'தமிழ்நாடு புதுமை பெண் திட்டம் (Pudhumai Penn Scheme)',
                    description: 'தமிழ்நாடு புதுமை பெண் திட்டம் (Pudhumai Penn Scheme) - ₹1000 மாதாந்திர உதவி, தகுதி, விண்ணப்பிக்கும் முறை',
                    author: 'கார்த்திக் ராஜன்',
                    datePublished: '2026-09-10',
                    slug: '/blog/tn-pudhumai-penn-scheme-tamil'
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
                    தமிழ்நாடு புதுமை பெண் திட்டம் (Pudhumai Penn Scheme)
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="தமிழ்நாடு புதுமை பெண் திட்டம் (Pudhumai Penn Scheme)"
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

<p>தமிழ்நாடு அரசின் மிக முக்கியமான மற்றும் புரட்சிகரமான திட்டங்களில் ஒன்றான <strong>மூவலூர் ராமாமிர்தம் அம்மையார் உயர்கல்வி உறுதித் திட்டம் (புதுமைப் பெண் திட்டம் - Pudhumai Penn Scheme)</strong>, மாநிலத்தின் பெண் குழந்தைகளின் உயர்கல்வி விகிதத்தை உயர்த்தவும், அவர்களுக்குப் பொருளாதாரச் சுதந்திரத்தை வழங்கவும் செயல்படுத்தப்பட்டு வருகிறது. இத்திட்டத்தின் கீழ் அரசுப் பள்ளிகளில் பயின்று உயர்கல்வி தொடரும் மாணவிகளுக்கு மாதம் ₹1,000 உதவித்தொகை நேரடியாக அவர்களின் வங்கிக் கணக்கில் செலுத்தப்படுகிறது.</p>

<p>திருமணத்திற்கு முன்பே ஒரு பெண் உயர்கல்வி பெற்று, சுயசார்புடன் வாழ்வது அவரது எதிர்கால திருமண வாழ்க்கையையும், குடும்ப அமைப்பையும் வலுவாக்குகிறது. கல்யாணவீடு (kalyanaveedu.in) தளம் வழங்கும் இந்த விரிவான வழிகாட்டியில், புதுமைப் பெண் திட்டத்தின் முழு விவரங்கள், தகுதிகள், தேவையான ஆவணங்கள் மற்றும் இணையவழியில் விண்ணப்பிக்கும் முறையை தெளிவாகக் காண்போம்.</p>

<div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
  <h3 className="text-xl font-bold text-gray-800 mb-2">திட்டத்தின் சுருக்கம் (Scheme Overview)</h3>
  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong>திட்டத்தின் பெயர்:</strong> மூவலூர் ராமாமிர்தம் அம்மையார் உயர்கல்வி உறுதித் திட்டம் (புதுமைப் பெண்)</li>
    <li><strong>வழங்கப்படும் உதவித்தொகை:</strong> மாதம் ₹1,000 (ஆண்டுக்கு ₹12,000)</li>
    <li><strong>பயனாளி:</strong> 6 முதல் 12-ஆம் வகுப்பு வரை அரசுப் பள்ளிகளில் படித்த மாணவிகள்</li>
    <li><strong>பயன்பாட்டு முறை:</strong> நேரடி பணப்பரிமாற்றம் (Direct Benefit Transfer - DBT)</li>
    <li><strong>அதிகாரப்பூர்வ இணையதளம்:</strong> <a href="https://penkalvi.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">penkalvi.tn.gov.in</a></li>
  </ul>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">புதுமைப் பெண் திட்டம் என்றால் என்ன?</h2>
<p>முன்பு நடைமுறையில் இருந்த மூவலூர் ராமாமிர்தம் அம்மையார் நினைவு திருமண நிதியுதவித் திட்டம், பெண் குழந்தைகளின் உயர்கல்வியை ஊக்கப்படுத்தும் வகையில் 2022-ஆம் ஆண்டு <strong>புதுமைப் பெண் திட்டமாக</strong> மாற்றியமைக்கப்பட்டது. சமூக நலன் மற்றும் மகளிர் உரிமைத் துறை மூலம் செயல்படுத்தப்படும் இத்திட்டம், இளம் பெண்களுக்கு உயர்கல்வி வாய்ப்பை உறுதிசெய்வதோடு, குழந்தை திருமணங்களைத் தடுப்பதிலும் முக்கியப் பங்கு வகிக்கிறது.</p>

<p>இத்திட்டத்தின் கீழ், பட்டப்படிப்பு (UG Degree), பட்டயப்படிப்பு (Diploma), தொழிற்பயிற்சி (ITI) மற்றும் மருத்துவ/பொறியியல் போன்ற தொழில்சார் படிப்புகளைத் தொடரும் அரசுப் பள்ளி மாணவிகளுக்கு, அவர்களின் படிப்பு முடியும் வரை மாதந்தோறும் ₹1,000 உதவித்தொகை வங்கிக் கணக்கில் நேரடியாக வழங்கப்படுகிறது.</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">புதுமைப் பெண் திட்டத்தின் முக்கிய நோக்கங்கள்</h2>
<p>தமிழ்நாடு அரசு இத்திட்டத்தை அறிமுகப்படுத்தியதன் பின்னணியில் பல தொலைநோக்கு நோக்கங்கள் உள்ளன:</p>
<ul className="list-disc pl-6 space-y-3">
  <li><strong>உயர்கல்வி சேர்க்கை விகிதத்தை (GER) உயர்த்துதல்:</strong> பள்ளிப்படிப்பை முடிக்கும் அரசுப் பள்ளி மாணவிகள் பொருளாதாரக் காரணங்களால் படிப்பைப் பாதியில் நிறுத்துவதைத் தடுத்தல்.</li>
  <li><strong>பெண் सशक्तिकरण (Women Empowerment):</strong> இளம்பெண்கள் சுயசார்பு பெற்று, சொந்தக் காலில் நிற்க உதவுதல்.</li>
  <li><strong>குழந்தைத் திருமணங்களைத் தடுத்தல்:</strong> பெண்களின் உயர்கல்வியை உறுதி செய்வதன் மூலம் இளம் வயதில் நடைபெறும் திருமணங்களைத் தவிர்த்தல்.</li>
  <li><strong>பொருளாதாரச் சுதந்திரம்:</strong> கல்லூரிப் படிப்பிற்கான புத்தகங்கள், பேருந்து கட்டணம், விடுதிச் செலவுகள் போன்றவற்றிற்குப் பெற்றோரைச் சார்ந்திருக்க வேண்டிய அவசியத்தைக் குறைத்தல்.</li>
</ul>

<div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
  <p className="font-semibold text-orange-900 mb-1">முக்கியக் குறிப்பு:</p>
  <p className="text-orange-800">இத்திட்டம் மூலமாகக் கிடைக்கும் ₹1,000 உதவித்தொகையானது, அரசு வழங்கும் பிற கல்வி உதவித்தொகைகள் (Scholarships) மற்றும் கட்டண விலக்குகளுடன் கூடுதலாகவே வழங்கப்படும். பிற உதவித்தொகை பெறுபவர்களும் இத்திட்டத்திற்குத் தகுதியானவர்களே.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">யாரெல்லாம் விண்ணப்பிக்கலாம்? (தகுதி வரம்புகள்)</h2>
<p>புதுமைப் பெண் திட்டத்தின் பலனைப் பெற மாணவிகள் பின்வரும் தகுதிகளைப் பெற்றிருக்க வேண்டும்:</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. கல்வித் தகுதி (Schooling Requirements)</h3>
<ul className="list-disc pl-6 space-y-2">
  <li>மாணவி 6-ஆம் வகுப்பு முதல் 12-ஆம் வகுப்பு வரை தமிழ்நாட்டில் உள்ள அரசுப் பள்ளிகளில் பயின்றிருக்க வேண்டும்.</li>
  <li>அரசுப் பள்ளிகள், மாநகராட்சிப் பள்ளிகள், நகராட்சிப் பள்ளிகள், ஆதிதிராவிடர் மற்றும் பழங்குடியினர் நலப் பள்ளிகள், கள்ளர் சீரமைப்புப் பள்ளிகள், வனத்துறைப் பள்ளிகள் மற்றும் சமூக நலத்துறைப் பள்ளிகள் ஆகியவை இதில் அடங்கும்.</li>
  <li>இலவச கட்டாயக் கல்வி உரிமைச் சட்டத்தின் (RTE) கீழ் தனியார் பள்ளிகளில் 6 முதல் 8-ஆம் வகுப்பு வரை பயின்று, பின்னர் 9 முதல் 12-ஆம் வகுப்பு வரை அரசுப் பள்ளியில் படித்த மாணவிகளும் இத்திட்டத்திற்குத் தகுதியானவர்கள்.</li>
</ul>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. உயர்கல்விச் சேர்க்கை (Higher Education)</h3>
<ul className="list-disc pl-6 space-y-2">
  <li>அங்கீகரிக்கப்பட்ட கல்லூரிகள், பல்கலைக்கழகங்கள் அல்லது தொழிற்பயிற்சி நிறுவனங்களில் முதல்முறையாக பட்டப்படிப்பு (UG), பட்டயப்படிப்பு (Diploma), ITI, அல்லது தொழில்சார் படிப்புகளில் சேர்ந்திருக்க வேண்டும்.</li>
  <li>தொலைதூரக் கல்வி (Distance Education) அல்லது அஞ்சல் வழிப் படிப்புகளுக்கு இத்திட்டம் பொருந்தாது. வழக்கமான நேரடி வகுப்புகளில் (Regular Mode) பயிலும் மாணவிகளுக்கு மட்டுமே இது பொருந்தும்.</li>
</ul>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">விண்ணப்பிக்கத் தேவையான ஆவணங்கள் (Required Documents)</h2>
<p>புதுமைப் பெண் திட்டத்திற்கு ஆன்லைனில் விண்ணப்பிக்கும் முன் பின்வரும் ஆவணங்களைச் தயார் நிலையில் வைத்திருக்க வேண்டும்:</p>

<ul className="list-disc pl-6 space-y-3">
  <li><strong>ஆதார் கார்டு (Aadhaar Card):</strong> மாணவியின் ஆதார் எண் கட்டாயம்.</li>
  <li><strong>பள்ளி மாற்றுச் சான்றிதழ் (School TC) / போனஃபைட் சான்றிதழ் (Bonafide Certificate):</strong> 6 முதல் 12-ஆம் வகுப்பு வரை அரசுப் பள்ளியில் படித்ததை உறுதிப்படுத்தும் சான்றிதழ் (EMIS எண் குறிப்பிடப்பட்டிருக்க வேண்டும்).</li>
  <li><strong>கல்லூரி சேர்க்கை சான்றுகள்:</strong> கல்லூரி அடையாள அட்டை அல்லது கல்லூரியில் படிப்பதற்கான Bonafide Certificate.</li>
  <li><strong>வங்கிக் கணக்கு விவரங்கள்:</strong> மாணவியின் பெயரில் உள்ள வங்கிப் புத்தகத்தின் முதல் பக்கம் (IFSC குறியீடு மற்றும் கணக்கு எண் தெளிவாக இருக்க வேண்டும்).</li>
  <li><strong>பத்தாம் மற்றும் பன்னிரண்டாம் வகுப்பு மதிப்பெண் சான்றிதழ்கள்.</strong></li>
  <li><strong>கடவுச்சீட்டு அளவு புகைப்படம் (Passport size photo) மற்றும் செயலில் உள்ள கைப்பேசி எண் (Mobile Number).</strong></li>
</ul>

<div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
  <h3 className="text-xl font-bold text-green-900 mb-2">வங்கிக் கணக்கு பற்றிய முக்கிய அறிவுரை</h3>
  <p className="text-green-800">பணப்பரிமாற்றம் நேரடி பயனாளி பரிமாற்றம் (DBT) மூலம் நடப்பதால், மாணவியின் வங்கிக் கணக்குடன் ஆதார் எண் கண்டிப்பாக இணைக்கப்பட்டிருக்க வேண்டும் (Aadhaar Seeding). கூட்டுக் கணக்கு (Joint Account) ஏற்றுக்கொள்ளப்பட மாட்டாது; மாணவியின் தனிப்பட்ட கணக்கு மட்டுமே செல்லுபடியாகும்.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">விண்ணப்பிக்கும் முறை - படிமுறை வழிகாட்டி (Step-by-Step Application Process)</h2>
<p>புதுமைப் பெண் திட்டத்திற்கு விண்ணப்பிக்கும் செயல்முறை மிகவும் எளிமையாக்கப்பட்டுள்ளது. மாணவிகள் தங்கள் கல்லூரியின் ஒருங்கிணைப்பாளர் (Nodal Officer) மூலமாகவோ அல்லது அதிகாரப்பூர்வ போர்ட்டல் மூலமாகவோ விண்ணப்பிக்கலாம்.</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 1: போர்ட்டலில் பதிவு செய்தல்</h3>
<p>அதிகாரப்பூர்வ இணையதமான <a href="https://penkalvi.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">penkalvi.tn.gov.in</a> பக்கத்திற்குச் சென்று, உங்களின் கைப்பேசி எண் மற்றும் OTP மூலம் உள்நுழையவும் (Login).</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 2: தனிப்பட்ட விவரங்களை உள்ளிடுதல்</h3>
<p>மாணவியின் பெயர், பிறந்த தேதி, முகவரி மற்றும் ஆதார் எண் ஆகிய விவரங்களைத் துல்லியமாகப் பதிவிட வேண்டும்.</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 3: பள்ளி விவரங்களைச் சரிபார்த்தல்</h3>
<p>6 முதல் 12-ஆம் வகுப்பு வரை பயின்ற அரசுப் பள்ளியின் விவரங்கள் மற்றும் EMIS (Educational Management Information System) எண்ணைப் பதிவிட வேண்டும். இது பள்ளிச் சான்றிதழ்கள் மூலம் சரிபார்க்கப்படும்.</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 4: கல்லூரி மற்றும் வங்கிக் கணக்கு விவரங்கள்</h3>
<p>தற்போது பயிலும் கல்லூரி, படிப்பு, சேர்க்கை எண் மற்றும் வங்கிக் கணக்கு விவரங்கள் (Account Number, IFSC Code) ஆகியவற்றை கவனமாக உள்ளிட வேண்டும்.</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 5: ஆவணங்களைப் பதிவேற்றுதல் மற்றும் சமர்ப்பித்தல்</h3>
<p>தேவையான ஆவணங்களின் நகல்களை (Scanned Copies) பதிவேற்றம் செய்து, படிவத்தைச் சமர்ப்பிக்கவும். சமர்ப்பித்த பிறகு விண்ணப்ப எண்ணைக் குறித்துக் கொள்ளவும்.</p>

<h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 6: கல்லூரி ஒருங்கிணைப்பாளர் சரிபார்ப்பு</h3>
<p>நீங்கள் சமர்ப்பித்த விண்ணப்பம் உங்கள் கல்லூரியின் புதுமைப் பெண் திட்ட ஒருங்கிணைப்பாளர் (College Nodal Officer) மூலம் சரிபார்க்கப்பட்டு, சமூக நலத்துறை ஒப்புதலுக்கு அனுப்பி வைக்கப்படும். ஒப்புதல் கிடைத்தவுடன் மாதாந்திர உதவித்தொகை நேரடி பணப்பரிமாற்றம் மூலம் கணக்கில் சேரும்.</p>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">கல்யாணவீடு பார்வை: உயர்கல்வியும் திருமண வாழ்க்கையும்</h2>
<p>தமிழ்நாட்டுச் சமூகத்தில் ஒரு பெண்ணின் உயர்கல்வி என்பது வெறும் பட்டப்படிப்பு மட்டுமல்ல; அது அவளது சுயமரியாதை மற்றும் பொருளாதார சுதந்திரத்தின் அடையாளம். kalyanaveedu.in தளத்தில் நாங்கள் சந்திக்கும் பல திருமண வரன் தேடும் குடும்பங்கள், பட்டதாரி பெண்களையே தங்கள் முதல் தேர்வாகக் கொள்கிறார்கள்.</p>

<p>புதுமைப் பெண் திட்டம் போன்ற அரசு திட்டங்கள் மூலம் பெண்கள் உயர்கல்வி பெற்று, வேலைவாய்ப்பு அடையும் போது:</p>
<ul className="list-disc pl-6 space-y-2">
  <li>திருமணத்திற்குப் பிறகும் குடும்பத்தின் பொருளாதாரத்தை உயர்த்தத் துணைநிற்க முடிகிறது.</li>
  <li>குழந்தைகளின் கல்வியை நேர்த்தியாக வழிநடத்தும் திறன் கிடைக்கிறது.</li>
  <li>குடும்ப முடிவுகளில் சமமான குரலாகப் பங்கேற்கும் தன்னம்பிக்கை உருவாகிறது.</li>
</ul>

<div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
  <h3 className="text-xl font-bold text-gray-800 mb-3">சுருக்கமான தகவல் பெட்டகம் (Quick Reference)</h3>
  <table className="w-full text-left border-collapse">
    <tbody>
      <tr className="border-b border-gray-200">
        <td className="py-2 font-semibold text-gray-700">திட்டத்தின் பெயர்</td>
        <td className="py-2 text-gray-600">புதுமைப் பெண் திட்டம்</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-2 font-semibold text-gray-700">மாதாந்திர தொகை</td>
        <td className="py-2 text-gray-600">₹1,000 (நேரடி பணப்பரிமாற்றம்)</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-2 font-semibold text-gray-700">பள்ளித் தகுதி</td>
        <td className="py-2 text-gray-600">6 முதல் 12 வரை அரசுப் பள்ளி</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-2 font-semibold text-gray-700">இணையதளம்</td>
        <td className="py-2 text-gray-600">penkalvi.tn.gov.in</td>
      </tr>
      <tr>
        <td className="py-2 font-semibold text-gray-700">உதவி மையம்</td>
        <td className="py-2 text-gray-600">1800 425 1591 (கட்டணமில்லா எண்)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">முடிவுரை</h2>
<p>தமிழ்நாடு அரசின் புதுமைப் பெண் திட்டம், பல்லாயிரக்கணக்கான பெண் குழந்தைகளின் உயர்கல்விக் கனவை நனவாக்கி வருகிறது. நீங்கள் அல்லது உங்கள் குடும்பத்தில் உள்ள பெண் குழந்தை அரசுப் பள்ளியில் படித்து உயர்கல்வி தொடர்ந்தால், உடனடியாக இத்திட்டத்திற்கு விண்ணப்பித்து பயன் பெறுங்கள். கல்வி தரும் தன்னம்பிக்கையே ஒரு பெண்ணின் வாழ்க்கைப் பயணத்திற்கும், அவளது புதிய குடும்பத்திற்கும் மிகச்சிறந்த அடித்தளமாக அமையும்.</p>

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
                    currentSlug="/blog/tn-pudhumai-penn-scheme-tamil" 
                    category="government-schemes" 
                />
            </div>
        </article>
    );
}
