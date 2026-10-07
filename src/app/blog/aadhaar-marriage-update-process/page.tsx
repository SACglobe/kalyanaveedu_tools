import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'திருமணத்திற்கு பிறகு ஆதார் அட்டையில் பெயர் மாற்றம் | கல்யாண வீடு',
    description: 'திருமணத்திற்கு பிறகு ஆதார் அட்டையில் பெயர் மாற்றம் - UIDAI portal step-by-step guide in Tamil',
    keywords: ['aadhaar', 'marriage', 'update', 'process', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/aadhaar-marriage-update-process`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'திருமணத்திற்கு பிறகு ஆதார் அட்டையில் பெயர் மாற்றம்',
                    description: 'திருமணத்திற்கு பிறகு ஆதார் அட்டையில் பெயர் மாற்றம் - UIDAI portal step-by-step guide in Tamil',
                    author: 'அட்வகேட் சந்திரசேகர்',
                    datePublished: '2026-09-28',
                    slug: '/blog/aadhaar-marriage-update-process'
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
                    திருமணத்திற்கு பிறகு ஆதார் அட்டையில் பெயர் மாற்றம்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="திருமணத்திற்கு பிறகு ஆதார் அட்டையில் பெயர் மாற்றம்"
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

<p className="text-xl text-gray-600 mb-8 font-medium">
    திருமணம் என்பது இரு மனங்களின் இணைப்பு மட்டுமல்ல; அது சட்டரீதியான மற்றும் நிர்வாக ரீதியான பல புதிய பொறுப்புகளின் தொடக்கமுமாகும். தமிழ்நாட்டில் திருமணத்திற்குப் பிறகு புதுமணப் பெண் தன் கணவரின் முகவரிக்கு மாறுவதுடன், பல குடும்பங்களில் தனது குடும்பப் பெயரையும் (Surname / Last Name) மாற்றிக்கொள்கின்றனர். இந்தியக் குடிமக்களுக்கு முதன்மையான அடையாள ஆவணமாகத் திகழும் ஆதார் அட்டையில் (Aadhaar Card) இந்த மாற்றங்களைச் செய்வது மிகவும் அவசியமாகும். இந்திய தனித்துவ அடையாள ஆணையத்தின் (UIDAI) அதிகாரப்பூர்வ போர்ட்டல் மூலம் ஆன்லைனில் மிக எளிதாக உங்கள் ஆதார் அட்டையில் பெயர் மற்றும் முகவரியை எவ்வாறு மாற்றுவது என்பது குறித்து விரிவான வழிகாட்டியை இந்த பதிவில் சட்ட வல்லுநராக உங்களுக்கு வழங்குகிறேன்.
  </p>

  <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
    <h4 className="font-bold text-orange-900 text-lg mb-1">முக்கியக் குறிப்பு:</h4>
    <p className="text-orange-800 m-0">
      ஆதார் அட்டையில் ஆன்லைன் மூலம் மாற்றம் செய்ய, உங்கள் மொபைல் எண் ஆதார் அட்டையுடன் கட்டாயம் இணைக்கப்பட்டிருக்க வேண்டும். பதிவேற்றம் செய்யப்படும் சான்று ஆவணங்களில் உள்ள விவரங்களும், நீங்கள் உள்ளீடு செய்யும் புதிய விவரங்களும் துல்லியமாகப் பொருந்த வேண்டும்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    திருமணத்திற்குப் பின் ஆதாரில் விவரங்களை ஏன் மாற்ற வேண்டும்?
  </h2>
  <p>
    திருமணத்திற்குப் பிறகு உடனடியாக ஆதார் அட்டையைப் புதுப்பிப்பது பல சட்டப்பூர்வ மற்றும் அன்றாடச் சேவைகளைப் பெறுவதற்கு மிகவும் அவசியமாகும்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      <strong>கடவுச்சீட்டு (Passport) விண்ணப்பம்:</strong> கணவரின் பெயர் மற்றும் புதிய முகவரியுடன் கூடிய பாஸ்போர்ட் பெற அல்லது புதுப்பிக்க ஆதாரில் சரியான விவரங்கள் இருக்க வேண்டும்.
    </li>
    <li>
      <strong>வங்கி கணக்குகள் (Joint Bank Account):</strong> கணவனுடன் சேர்ந்து கூட்டுக் கணக்கு தொடங்குவதற்கும், பழைய வங்கிக் கணக்குகளில் முகவரி மாற்றம் செய்வதற்கும் ஆதார் முக்கிய சான்றாகும்.
    </li>
    <li>
      <strong>ரேஷன் கார்டு (குடும்ப அட்டை):</strong> பெற்றோர் குடும்ப அட்டையிலிருந்து பெயரை நீக்கி, கணவரின் குடும்ப அட்டையில் பெயரைச் சேர்க்க புதுப்பிக்கப்பட்ட ஆதார் அவசியமாகும்.
    </li>
    <li>
      <strong>அரசு நலத்திட்டங்கள்:</strong> தமிழ்நாடு அரசின் கலைஞர் மகளிர் உரிமைத் தொகை போன்ற பல்வேறு சமூக நலத்திட்டங்களின் பலன்களைப் பெற சரியான முகவரி மற்றும் ஆதார் விவரங்கள் அவசியமாகும்.
    </li>
    <li>
      <strong>சொத்துச் சேர்க்கை &amp; வீட்டுக் கடன்:</strong> எதிர்காலத்தில் கணவருடன் இணைந்து சொத்துக்கள் வாங்கும்போதோ அல்லது வீட்டுக் கடன் (Home Loan) விண்ணப்பிக்கும்போதோ அடையாளச் சான்றுகளில் முரண்பாடு இருக்கக்கூடாது.
    </li>
  </ul>

  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
    <h3 className="text-xl font-bold text-blue-900 mt-0 mb-3">சட்ட ரீதியான தெளிவுபடுத்தல்: பெயர் மாற்றம் கட்டாயமா?</h3>
    <p className="text-blue-800 mb-0">
      இந்தியச் சட்டப்படி, திருமணத்திற்குப் பிறகு ஒரு பெண் தனது இயற்பெயரையே (Maiden Name) தொடர்வதற்கும் அல்லது கணவரின் குடும்பப் பெயரைத் தனது பெயருடன் சேர்த்துக்கொள்வதற்கும் முழு உரிமை உண்டு. பெயர் மாற்றம் செய்வது சட்டப்படி கட்டாயமில்லை; ஆனால் முகவரி மாற்றம் (Address Update) செய்வது கட்டாயமாகும். நீங்கள் பெயரை மாற்ற விரும்பினால் மட்டுமே அதற்கான சான்றை சமர்ப்பிக்க வேண்டும்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    தேவையான ஆவணங்களின் பட்டியல் (Required Documents)
  </h2>
  <p>
    UIDAI விதிகளின்படி, திருமணத்திற்குப் பிறகு பெயர் அல்லது முகவரி மாற்றம் செய்ய கீழே குறிப்பிட்டுள்ள ஆவணங்களில் ஏதேனும் ஒன்றைச் சமர்ப்பிக்க வேண்டும்:
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. பெயர் மாற்றத்திற்கு (Proof of Identity - PoI):</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      தமிழ்நாடு பதிவுத் துறையால் (TN Registration Dept) வழங்கப்பட்ட பதிவுசெய்யப்பட்ட <strong>திருமணச் சான்றிதழ் (Marriage Certificate)</strong>.
    </li>
    <li>
      அரசாங்கத்தால் வெளியிடப்பட்ட அரசிதழ் பதிவுப் நகல் (Gazette Notification for Name Change).
    </li>
    <li>
      கணவரின் பெயர் சேர்க்கப்பட்ட புதிய பாஸ்போர்ட் (Passport).
    </li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. முகவரி மாற்றத்திற்கு (Proof of Address - PoA):</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      திருமணச் சான்றிதழ் (Marriage Certificate).
    </li>
    <li>
      கணவரின் ஆதார் அட்டை (கணவரின் முகவரிக்கு மாறும்போது, C/O - Care of விவரத்திற்கு).
    </li>
    <li>
      MLA, MP அல்லது கெஜட்டட் ಅಧಿಕாரி (Gazetted Officer) கையொப்பமிட்ட UIDAI இன் தரப்படுத்தப்பட்ட படிவம் (Standard Format).
    </li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    UIDAI Portal மூலம் ஆன்லைனில் மாற்றுவது எப்படி? (Step-by-Step Guide)
  </h2>
  <p>
    ஆதார் மையத்திற்குச் செல்லாமல், வீட்டிலிருந்தபடியே UIDAI இன் அதிகாரப்பூர்வ இணையதளம் வழியே பெயர் மற்றும் முகவரியைப் புதுப்பிக்க பின்வரும் படிமுறைகளைப் பின்பற்றுங்கள்:
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 1: UIDAI போர்ட்டலில் உள்நுழைதல்</h3>
  <p>
    முதலில் UIDAI-ன் அதிகாரப்பூர்வ 'myAadhaar' இணையதளத்திற்குச் செல்லவும் (<strong>myaadhaar.uidai.gov.in</strong>). முகப்புப் பக்கத்தில் உள்ள <strong>'Login'</strong> பொத்தானைக் கிளிக் செய்யவும். உங்கள் 12 இலக்க ஆதார் எண் மற்றும் திரையில் தோன்றும் Captcha குறியீட்டைப் பதிவிட்டு <strong>'Send OTP'</strong> என்பதைக் கிளிக் செய்யவும். உங்கள் பதிவுசெய்யப்பட்ட மொபைல் எண்ணிற்கு வரும் OTP-ஐ உள்ளிட்டு உள்நுழையவும்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 2: 'Address Update' சேவையைத் தேர்ந்தெடுத்தல்</h3>
  <p>
    டாஷ்போர்டில் உள்ள சேவைகளில் <strong>'Address Update'</strong> என்ற விருப்பத்தைத் தேர்ந்தெடுக்கவும். தற்போதைய UIDAI விதிகளின்படி, ஆன்லைன் மூலம் முகவரி மாற்றத்தை எளிதாகச் செய்ய முடியும். முகவரியை மாற்றுவதன் மூலம் C/O (Care of) பகுதியில் கணவரின் பெயரைச் சேர்த்து, புதிய முகவரிக்கு மாறலாம்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 3: புதிய விவரங்களை உள்ளிடுதல்</h3>
  <p>
    இப்போது உங்கள் தற்போதைய விவரங்கள் திரையில் தோன்றும். கீழே உள்ள புதிய விவரங்கள் பகுதியில்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>C/O (Care of):</strong> கணவரின் முழுப் பெயரை உள்ளிடவும் (எ.கா: W/O கார்த்திக் அல்லது C/O கார்த்திக்).</li>
    <li><strong>முகவரி:</strong> கதவு எண், தெரு பெயர், பகுதி, அஞ்சல் குறியீடு (Pincode), மாவட்டம் மற்றும் மாநிலத்தை சரியாகத் தமிழில் மற்றும் ஆங்கிலத்தில் சரிபார்த்து உள்ளிடவும்.</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 4: சான்று ஆவணங்களை பதிவேற்றம் செய்தல்</h3>
  <p>
    நீங்கள் தேர்ந்தெடுத்த ஆவண வகைக்கு ஏற்ப (எ.கா. Marriage Certificate அல்லது Husband's Aadhaar) அதன் அசல் நகலை ஸ்கேன் செய்து (Original Scan Copy) JPEG அல்லது PDF வடிவத்தில் (2 MB-க்குள்) பதிவேற்ற வேண்டும்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 5: கட்டணம் செலுத்துதல் &amp; URN பெறுதல்</h3>
  <p>
    விவரங்களைச் சரிபார்த்த பிறகு, ஆன்லைன் சேவைக்கான கட்டணம் <strong>ரூ. 50</strong>-ஐ UPI, Net Banking அல்லது Debit Card மூலம் செலுத்த வேண்டும். கட்டணம் வெற்றிகரமாகச் செலுத்தப்பட்டவுடன், உங்களுக்கு <strong>URN (Update Request Number)</strong> அடங்கிய ரசீது (Acknowledgement Receipt) கிடைக்கும். இதைத் தரவிறக்கம் செய்து பத்திரப்படுத்தவும்.
  </p>

  <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
    <h4 className="font-bold text-green-900 text-lg mb-2">ஆன்லைனில் பெயர் மாற்றம் செய்வதற்கான சிறப்பு உதவிக்குறிப்பு:</h4>
    <p className="text-green-800 mb-0">
      UIDAI போர்ட்டலில் பெயர் மாற்றத்திற்கான நேரடி விருப்பம் சில சமயங்களில் கட்டுப்படுத்தப்பட்டிருந்தால், நீங்கள் மிக அருகில் உள்ள <strong>இ-சேவை மையம் (e-Sevai Maiyam)</strong> அல்லது <strong>ஆதார் சேவா கேந்திரா (Aadhaar Seva Kendra)</strong> சென்றும் திருமணச் சான்றிதழைச் சமர்ப்பித்து பயோமெட்ரிக் முறையில் எளிதாகப் பெயரை மாற்றிக்கொள்ளலாம்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    ஈ-சேவை மையம் / ஆதார் மையத்தில் நேரில் சென்று மாற்றுவது எப்படி? (Offline Process)
  </h2>
  <p>
    ஆன்லைனில் தொழில்நுட்ப சிக்கல்கள் ஏற்பட்டாலோ அல்லது மொபைல் எண் இணைக்கப்படாமல் இருந்தாலோ நீங்கள் நேரில் சென்று மாற்றம் செய்யலாம்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      உங்கள் பகுதிக்கு அருகில் உள்ள இ-சேவை மையம் அல்லது ஆதார் பதிவு மையத்திற்குச் செல்லவும்.
    </li>
    <li>
      <strong>'Aadhaar Enrolment/Correction Form'</strong> படிவத்தைப் பெற்று, அதில் உங்கள் புதிய பெயர், கணவர் பெயர் மற்றும் புதிய முகவரியைப் பூர்த்தி செய்யவும்.
    </li>
    <li>
      பூர்த்தி செய்யப்பட்ட படிவத்துடன் உங்கள் அசல் திருமணச் சான்றிதழ் மற்றும் கணவரின் ஆதார் நகலை இணைக்கவும்.
    </li>
    <li>
      மையத்தில் உள்ள அதிகாரி உங்கள் கைரேகை/கண் கருவிழி (Biometric Verification) சரிபார்ப்பை மேற்கொள்வார்.
    </li>
    <li>
      நேரடி மாற்றத்திற்கு சேவைக்கட்டணமாக ரூ. 50 செலுத்த வேண்டும். அதிகாரி வழங்கும் URN ரசீதைப் பெற்றுக்கொள்ளவும்.
    </li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
    பொதுவாகச் செய்யப்படும் தவறுகளும் அவற்றை தவிர்க்கும் வழிகளும்
  </h2>
  <p>
    ஆதார் புதுப்பித்தல் விண்ணப்பம் நிராகரிக்கப்படாமல் (Rejection) இருக்க பின்வரும் தவறுகளைத் தவிர்க்கவும்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      <strong>எழுத்துப் பிழைகள் (Spelling Mistakes):</strong> ஆங்கிலத்தில் பெயர் உள்ளிடும்போது தமிழில் தானாக மொழிபெயர்க்கப்படும். அதில் தமிழ் எழுத்துப் பிழைகள் உள்ளதா என கவனமாகச் சரிபார்க்கவும்.
    </li>
    <li>
      <strong>மங்கலான ஆவணங்கள்:</strong> ஸ்கேன் செய்து பதிவேற்றும் ஆவணங்களின் விவரங்கள் தெளிவாகத் தெரிய வேண்டும். ஜெராக்ஸ் பிரதியை மீண்டும் போட்டோ எடுத்து பதிவேற்றக் கூடாது.
    </li>
    <li>
      <strong>சான்றிதழ் விபரம்:</strong> பதிவுசெய்யப்படாத உள்ளூர் கோயில் அல்லது சமுதாயக் கூடத்தில் தரப்பட்ட திருமணக் கடிதங்கள் செல்லுபடியாகாது. பதிவுத் துறையின் சட்டப்பூர்வ திருமணச் சான்றிதழ் மட்டுமே ஏற்றுக்கொள்ளப்படும்.
    </li>
  </ul>

  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
    <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">விண்ணப்ப நிலை அறிதல் &amp; புதிய ஆதார் பதிவிறக்கம் (Status Tracking)</h3>
    <p className="text-gray-700 mb-3">
      விண்ணப்பித்த 7 முதல் 15 நாட்களுக்குள் மாற்றம் செய்யப்பட்டு புதிய ஆதார் அங்கீகரிக்கப்படும்.
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>
        <strong>myaadhaar.uidai.gov.in</strong> தளத்தில் <strong>'Check Enrolment &amp; Update Status'</strong> கிளிக் செய்து URN எண்ணை உள்ளிட்டு நிலையை அறியலாம்.
      </li>
      <li>
        மாற்றம் பூர்த்தியானதும், <strong>e-Aadhaar</strong> விருப்பத்தை தேர்வு செய்து புதிய ஆதார் அட்டையை PDF வடிவில் பதிவிறக்கம் செய்துகொள்ளலாம்.
      </li>
    </ul>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">வழக்கறிஞரின் முடிவுரை</h2>
  <p>
    திருமணத்திற்குப் பிறகு பெண் ஒருவருக்கு சட்டப்பூர்வமாக முகவரி மற்றும் அடையாளச் சான்றுகளைப் புதுப்பிப்பது எதிர்கால ஆவணப் பரிவர்த்தனைகளுக்கு மிகவும் பாதுகாப்பானது. திருமணப் பதிவு முடிந்த கையோடு முதற்கட்டமாக ஆதார் அட்டையைப் புதுப்பித்துவிட்டால், அதனைத் தொடர்ந்து பாஸ்போர்ட், வங்கி கணக்குகள், பான் கார்டு (PAN Card) மற்றும் குடும்ப அட்டையில் மாற்றங்களைச் செய்வது மிக எளிதாகிவிடும்.
  </p>
  <p>
    சட்ட ரீதியான தெளிவுடனும் சரியான ஆவணங்களுடனும் விண்ணப்பித்து, எவ்வித தடையுமின்றி உங்கள் ஆதார் விவரங்களை எளிதாகப் புதுப்பித்துக் கொள்ளுங்கள்!
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
                    currentSlug="/blog/aadhaar-marriage-update-process" 
                    category="legal-documents" 
                />
            </div>
        </article>
    );
}
