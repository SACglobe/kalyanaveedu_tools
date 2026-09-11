import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'PM Vivah Shagun Yojana (பிரதமர் திருமண பரிசு திட்டம்) | கல்யாண வீடு',
    description: 'PM Vivah Shagun Yojana (பிரதமர் திருமண பரிசு திட்டம்) - ₹51,000 மத்திய அரசு திருமண உதவி, SC/ST பெண்களுக்கான வழிகாட்டி',
    keywords: ['pm', 'vivah', 'shagun', 'yojana', 'tamil', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/pm-vivah-shagun-yojana-tamil`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'PM Vivah Shagun Yojana (பிரதமர் திருமண பரிசு திட்டம்)',
                    description: 'PM Vivah Shagun Yojana (பிரதமர் திருமண பரிசு திட்டம்) - ₹51,000 மத்திய அரசு திருமண உதவி, SC/ST பெண்களுக்கான வழிகாட்டி',
                    author: 'கார்த்திக் ராஜன்',
                    datePublished: '2026-09-13',
                    slug: '/blog/pm-vivah-shagun-yojana-tamil'
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
                    PM Vivah Shagun Yojana (பிரதமர் திருமண பரிசு திட்டம்)
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="PM Vivah Shagun Yojana (பிரதமர் திருமண பரிசு திட்டம்)"
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

<div className="prose prose-lg mx-auto px-4 py-8 max-w-4xl text-gray-800">
  <p className="text-lg leading-relaxed text-gray-700 mb-6">
    இந்தியாவில் பெண் குழந்தைகளின் எதிர்காலம் மற்றும் அவர்களின் திருமணச் செலவுகள் ஏழை மற்றும் பிற்படுத்தப்பட்ட குடும்பங்களுக்கு பெரும் சவாலாக அமைகின்றன. இதைக் கருத்தில் கொண்டு, சமூகத்தில் உள்ள பட்டியலின (SC), பழங்குடியின (ST) மற்றும் பொருளாதாரத்தில் பின்தங்கிய குடும்பங்களைச் சேர்ந்த பெண்களுக்கு நிதி உதவி வழங்கும் நோக்கில் **பிரதமர் திருமண பரிசு திட்டம் (PM Vivah Shagun Yojana)** செயல்பட்டு வருகிறது. இத்திட்டத்தின் கீழ் தகுதியுள்ள பெண்களுக்கு மத்திய மற்றும் மாநில அரசுகளின் சமூக நலத்துறையின் மூலம் **₹51,000 வரை** நிதியுதவி வழங்கப்படுகிறது.
  </p>

  <p className="text-lg leading-relaxed text-gray-700 mb-6">
    கல்யாண வீடு (kalyanaveedu.in) தளத்தின் இந்த விரிவான வழிகாட்டியில், PM விவாஹ் ஷகுன் திட்டத்தின் நன்மைகள், தகுதி வரம்புகள், தேவையான ஆவணங்கள் மற்றும் இணைய வழியில் எவ்வாறு விண்ணப்பிப்பது என்பது பற்றிய முழுமையான தகவல்களை சமூகக் கொள்கை ஆய்வாளர் கார்த்திக் ராஜன் அவர்கள் மூலம் அறிந்து கொள்ளலாம்.
  </p>

  <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
    <h4 className="text-lg font-bold text-orange-900 m-0 mb-2">முக்கிய குறிப்பு:</h4>
    <p className="text-orange-800 m-0">
      இத்திட்டம் பெண் கல்வி ஊக்கத்தொகை மற்றும் சமூகப் பாதுகாப்பை உறுதி செய்யும் நோக்கில் வடிவமைக்கப்பட்டுள்ளது. மணமகளுக்கு குறைந்தபட்சம் 18 வயதும், மணமகனுக்கு 21 வயதும் பூர்த்தியாகி இருப்பது சட்டப்பூர்வமாக கட்டாயமாகும்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    1. பிரதமர் திருமண பரிசு திட்டம் என்றால் என்ன?
  </h2>
  <p className="leading-relaxed mb-4">
    பிரதமர் திருமண பரிசு திட்டம் (PM Vivah Shagun Scheme) என்பது வறுமைக்கோட்டிற்கு கீழ் வாழும் குடும்பங்கள், பட்டியலின மற்றும் பழங்குடியின சமூகத்தைச் சேர்ந்த பெண்களின் திருமணத்திற்கு அரசு வழங்கும் நிதியுதவி திட்டமாகும். ஏழைப் பெற்றோர் தங்கள் மகளின் திருமணத்திற்காக கடன் சுமையில் மூழ்குவதைத் தடுப்பதும், பெண் குழந்தைகளின் கல்வியை ஊக்குவிப்பதும் இத்திட்டத்தின் முக்கிய நோக்கங்கள் ஆகும்.
  </p>
  <p className="leading-relaxed mb-6">
    இத்திட்டம் மாநில அரசுகளின் சமூக நலத்துறை மற்றும் மத்திய அரசின் சமூக நீதி மற்றும் அதிகாரமளித்தல் அமைச்சகத்தின் (Ministry of Social Justice and Empowerment) வழிகாட்டுதலின் கீழ் ஒருங்கிணைக்கப்பட்டு செயல்படுத்தப்படுகிறது.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    2. உதவித் தொகை மற்றும் நன்மைகள் விவரம் (Amount Breakup)
  </h2>
  <p className="leading-relaxed mb-4">
    இத்திட்டத்தின் கீழ் வழங்கப்படும் உதவித் தொகை விண்ணப்பதாரரின் குடும்பப் பின்னணி மற்றும் கல்வித் தகுதிக்கு ஏற்ப வகைப்படுத்தப்பட்டுள்ளது:
  </p>

  <ul className="list-disc pl-6 space-y-3 mb-6">
    <li>
      <strong>SC / ST மற்றும் வறுமைக்கோட்டிற்கு கீழ் உள்ள குடும்பங்கள்:</strong> இவர்களுக்கு மொத்தம் <strong>₹51,000</strong> நிதியுதவி வழங்கப்படுகிறது. இதில் ₹46,000 திருமணத்திற்கு முன்போ அல்லது திருமண நாளன்றோ வழங்கப்படும். மீதமுள்ள ₹5,000 திருமணச் சான்றிதழ் சமர்ப்பித்த பிறகு வழங்கப்படும்.
    </li>
    <li>
      <strong>விதவை மற்றும் ஆதரவற்ற பெண்களின் மறுமணம்:</strong> இத்தகைய சிறப்பு நேர்வுகளுக்கு ரூ. 51,000 முழுமையாக வழங்கப்பட்டு சமூகப் பாதுகாப்பு உறுதி செய்யப்படுகிறது.
    </li>
    <li>
      <strong>விளையாட்டு வீராங்கனைகள் &amp; மாற்றுத்திறனாளிகள்:</strong> மாற்றுத்திறனாளி பெண்கள் அல்லது தேசிய அளவிலான விளையாட்டு வீராங்கனைகளுக்கு சிறப்புப் பிரிவின் கீழ் கூடுதல் முன்னுரிமையுடன் நிதி உதவி வழங்கப்படுகிறது.
    </li>
    <li>
      <strong>பட்டதாரி பெண்கள்:</strong> சில மாநிலங்களில் பெண் கல்வி ஊக்கத்தொகையாக, மணமகள் பட்டப்படிப்பு முடித்திருந்தால் கூடுதல் உதவித்தொகையும் இத்திட்டத்துடன் இணைத்து வழங்கப்படுகிறது.
    </li>
  </ul>

  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
    <h3 className="text-xl font-bold text-blue-900 mt-0 mb-3">நிதி பரிமாற்றம் எவ்வாறு நடைபெறும்?</h3>
    <p className="text-blue-800 m-0">
      அனைத்து நிதி உதவிகளும் நேரடியாக பயன்பெறுபவரின் (மணமகள்) வங்கி கணக்கிற்கு <strong>Direct Benefit Transfer (DBT)</strong> மூலம் மாற்றப்படும். இடைத்தரகர்கள் இல்லாமல் நேரடியாக பயனாளியைச் சென்றடைவதை அரசு உறுதி செய்கிறது.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    3. தகுதி வரம்புகள் (Eligibility Criteria)
  </h2>
  <p className="leading-relaxed mb-4">
    PM விவாஹ் ஷகுன் திட்டத்தில் பயன் பெற மணமகள் மற்றும் அவருடைய குடும்பத்தார் பின்வரும் தகுதிகளைப் பெற்றிருக்க வேண்டும்:
  </p>

  <ul className="list-disc pl-6 space-y-3 mb-6">
    <li><strong>குடியுரிமை:</strong> விண்ணப்பதாரர் இந்தியக் குடிமகனாகவும், சம்பந்தப்பட்ட மாநிலத்தின் நிரந்தர வசிப்பிடத்தைக் கொண்டவராகவும் இருக்க வேண்டும்.</li>
    <li><strong>வயது வரம்பு:</strong> திருமண தேதியன்று மணமகளுக்கு குறைந்தபட்சம் 18 வயது நிறைந்திருக்க வேண்டும். மணமகனுக்கு 21 வயது நிறைந்திருக்க வேண்டும்.</li>
    <li><strong>சமூகப் பிரிவு:</strong> விண்ணப்பதாரர் SC / ST / OBC / சிறுபான்மையினர் அல்லது பொருளாதாரத்தில் பின்தங்கிய பொதுப் பிரிவைச் (EWS) சேர்ந்தவராக இருக்க வேண்டும்.</li>
    <li><strong>வருமான வரம்பு:</strong> குடும்பத்தின் ஆண்டு வருமானம் அரசு நிர்ணயித்துள்ள வரம்பிற்குள் (பொதுவாக கிராமப்புறங்களில் ரூ. 1,00,000/-, நகர்ப்புறங்களில் ரூ. 1,50,000/-) இருக்க வேண்டும்.</li>
    <li><strong>குடும்ப எல்லை:</strong> ஒரு குடும்பத்தில் உள்ள அதிகபட்சம் <strong>இரண்டு பெண் குழந்தைகளுக்கு</strong> மட்டுமே இத்திட்டத்தின் கீழ் பயன் பெற முடியும்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    4. தேவையான ஆவணங்கள் (Required Documents List)
  </h2>
  <p className="leading-relaxed mb-4">
    விண்ணப்பத்தைச் சமர்ப்பிக்கும் போது பின்வரும் ஆவணங்களின் நகல்களைத் தயார் நிலையில் வைத்திருக்க வேண்டும்:
  </p>

  <ul className="list-disc pl-6 space-y-3 mb-6">
    <li><strong>மணமகள் மற்றும் மணமகனின் ஆதார் கார்டு (Aadhaar Card)</strong></li>
    <li><strong>குடும்ப அட்டை / ரேஷன் கார்டு (BPL Ration Card)</strong></li>
    <li><strong>சாதிச் சான்றிதழ் (Caste Certificate)</strong> - SC/ST/OBC பிரிவினருக்கு</li>
    <li><strong>வருமானச் சான்றிதழ் (Income Certificate)</strong> - வட்டாட்சியர் (Tahsildar) வழங்கியது</li>
    <li><strong>வயது சான்று (Age Proof)</strong> - 10-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ் அல்லது பிறப்புச் சான்றிதழ்</li>
    <li><strong>திருமண பத்திரிக்கை (Wedding Invitation Card)</strong> அல்லது <strong>திருமணப் பதிவுச் சான்றிதழ் (Marriage Registration Certificate)</strong></li>
    <li><strong>மணமகளின் வங்கி கணக்கு புத்தக நகல் (Bank Passbook)</strong> - ஆதார் எண்ணுடன் இணைக்கப்பட்டிருக்க வேண்டும்</li>
    <li><strong>பாஸ்போர்ட் அளவு புகைப்படங்கள் (Passport size photos)</strong> - மணமகள் மற்றும் மணமகன்</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    5. விண்ணப்பிக்கும் முறை - படிமுறை வழிகாட்டி (Step-by-Step Application)
  </h2>
  <p className="leading-relaxed mb-4">
    இத்திட்டத்திற்கு ஆன்லைன் (Online) மற்றும் ஆஃப்லைன் (Offline) ஆகிய இரண்டு வழிகளிலும் விண்ணப்பிக்கலாம்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">ஆன்லைன் முறையில் விண்ணப்பிப்பது எப்படி?</h3>
  <ul className="list-disc pl-6 space-y-3 mb-6">
    <li><strong>படி 1:</strong> உங்கள் மாநிலத்தின் அதிகாரப்பூர்வ சமூக நலத்துறை இணையதளத்திற்கு அல்லது பொது சேவை மைய போர்ட்டலுக்குச் (e-Seva Portal / Jan Seva Kendra) செல்லவும்.</li>
    <li><strong>படி 2:</strong> இணையதளத்தில் 'PM Vivah Shagun Yojana' அல்லது 'திருமண உதவித் திட்டம்' என்ற இணைப்பைத் தேர்ந்தெடுக்கவும்.</li>
    <li><strong>படி 3:</strong> புதிய பயனர் பதிவை (New Registration) பூர்த்தி செய்து, உள்நுழைவு ஐடி (Login ID) மற்றும் கடவுச்சொல்லைப் பெறவும்.</li>
    <li><strong>படி 4:</strong> விண்ணப்பப் படிவத்தில் (Application Form) மணமகள், மணமகன், பெற்றோர் மற்றும் முகவரி விவரங்களைத் துல்லியமாகப் பதிவிடவும்.</li>
    <li><strong>படி 5:</strong> தேவையான அனைத்து ஆவணங்களையும் (PDF / JPG வடிவில்) பதிவேற்றம் (Upload) செய்யவும்.</li>
    <li><strong>படி 6:</strong> படிவத்தைச் சரிபார்த்து Submit கொடுக்கவும். கிடைத்த விண்ணப்ப எண் (Application Reference Number) குறித்துக் கொள்ளவும்.</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">ஆஃப்லைன் முறையில் விண்ணப்பிப்பது எப்படி?</h3>
  <p className="leading-relaxed mb-6">
    இணைய வசதி இல்லாதவர்கள், உங்கள் பகுதியில் உள்ள **மாவட்ட சமூக நல அலுவலர் (District Social Welfare Officer)** அலுவலகம் அல்லது வட்டார வளர்ச்சி அலுவலகத்திற்கு (BDCO Office) நேரில் சென்று விண்ணப்பப் படிவத்தைப் பெற்று, பூர்த்தி செய்து ஆவணங்களுடன் சமர்ப்பிக்கலாம்.
  </p>

  <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
    <h3 className="text-xl font-bold text-green-900 mt-0 mb-3">வெற்றிகரமான ஒப்புதலுக்கான நடைமுறை உதவிக்குறிப்புகள் (Practical Tips)</h3>
    <ul className="list-disc pl-6 space-y-2 text-green-800">
      <li><strong>நேர வரம்பு:</strong> திருமணத்திற்கு குறைந்தது 2 மாதங்களுக்கு முன்பாகவோ அல்லது திருமணம் முடிந்த 3 மாதங்களுக்குள்ளோ விண்ணப்பிக்க வேண்டும்.</li>
      <li><strong>வங்கி கணக்கு:</strong> மணமகளின் வங்கி கணக்கு செயலில் (Active) இருப்பதையும், ஆதார் எண் இணைக்கப்பட்டிருப்பதையும் (NPCI Seeding) உறுதி செய்யவும்.</li>
      <li><strong>ஆவணப் தெளிவு:</strong> பதிவேற்றம் செய்யப்படும் சான்றிதழ்கள் தெளிவாக்கப் படிக்கக்கூடியதாக இருக்க வேண்டும்.</li>
      <li><strong>தொடர் கண்காணிப்பு:</strong> ஆன்லைனில் விண்ணப்ப நிலையை (Application Status) அவ்வப்போது சரிபார்க்கவும்.</li>
    </ul>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    6. அதிகாரப்பூர்வ இணையதளங்கள் &amp; தொடர்பு விவரங்கள்
  </h2>
  <p className="leading-relaxed mb-4">
    கூடுதல் விவரங்கள் மற்றும் ஆன்லைன் விண்ணப்பத்திற்கு அதிகாரப்பூர்வ மத்திய மற்றும் மாநில அரசு போர்ட்டல்களைப் பார்வையிடவும்:
  </p>
  <ul className="list-disc pl-6 space-y-3 mb-6">
    <li><strong>மத்திய சமூக நீதி மற்றும் அதிகாரமளித்தல் அமைச்சகம்:</strong> <a href="https://socialjustice.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">https://socialjustice.gov.in</a></li>
    <li><strong>டாக்டர் அம்பேத்கர் அறக்கட்டளை திட்டம்:</strong> <a href="http://ambedkarfoundation.nic.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">http://ambedkarfoundation.nic.in</a></li>
    <li><strong>தேசிய அரசு சேவைகள் போர்ட்டல்:</strong> <a href="https://services.india.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">https://services.india.gov.in</a></li>
  </ul>

  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
    <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">சுருக்கம் (Summary Table)</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm text-gray-700">
        <tbody>
          <tr className="border-b"><td className="py-2 font-semibold">திட்டத்தின் பெயர்</td><td className="py-2">PM Vivah Shagun Yojana (பிரதமர் திருமண பரிசு திட்டம்)</td></tr>
          <tr className="border-b"><td className="py-2 font-semibold">வழங்கும் துறை</td><td className="py-2">மத்திய / மாநில சமூக நலத்துறை</td></tr>
          <tr className="border-b"><td className="py-2 font-semibold">அதிகபட்ச நிதியுதவி</td><td className="py-2">₹51,000 வரை</td></tr>
          <tr className="border-b"><td className="py-2 font-semibold">பயனாளிகள்</td><td className="py-2">SC / ST / BPL / ஆதரவற்ற பெண்கள்</td></tr>
          <tr className="border-b"><td className="py-2 font-semibold">விண்ணப்பிக்கும் முறை</td><td className="py-2">ஆன்லைன் மற்றும் ஆஃப்லைன்</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">முடிவுரை</h2>
  <p className="leading-relaxed mb-6">
    பிரதமர் திருமண பரிசு திட்டம் (PM Vivah Shagun Scheme) என்பது எளிய குடும்பங்களைச் சேர்ந்த பெண் குழந்தைகளின் வாழ்க்கையில் மிகப்பெரிய பொருளாதார ஆதரவை அளிக்கிறது. சரியான நேரத்தில் திட்டத்தைப் பற்றி அறிந்து, தேவையான ஆவணங்களுடன் விண்ணப்பிப்பதன் மூலம் ₹51,000 வரை திருமண நிதியுதவியைப் பெற முடியும்.
  </p>
  <p className="leading-relaxed mb-6">
    உங்கள் குடும்பத்திலோ அல்லது உங்களுக்குத் தெரிந்தவர்களிலோ திருமணத்திற்குத் தயாராகும் தகுதியுள்ள பெண்கள் இருந்தால், இந்தத் தகவலை உடனடியாகப் பகிர்ந்து அவர்களும் இத்திட்டத்தின் மூலம் பயன்பெற உதவுங்கள். மேலும் பல அரசு திருமண உதவி திட்டங்கள் மற்றும் திருமண திட்டமிடல் தகவல்களுக்கு **kalyanaveedu.in** உடன் இணைந்திருங்கள்!
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
                    currentSlug="/blog/pm-vivah-shagun-yojana-tamil" 
                    category="government-schemes" 
                />
            </div>
        </article>
    );
}
