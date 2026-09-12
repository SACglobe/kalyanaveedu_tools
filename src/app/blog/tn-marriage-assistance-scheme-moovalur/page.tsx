import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'மூவலூர் ராமாமிர்தம் அம்மையார் திட்டம் | கல்யாண வீடு',
    description: 'மூவலூர் ராமாமிர்தம் அம்மையார் திட்டம் - அரசு திருமண உதவி ₹50,000, விண்ணப்பிக்கும் முறை, தேவையான ஆவணங்கள்',
    keywords: ['tn', 'marriage', 'assistance', 'scheme', 'moovalur', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/tn-marriage-assistance-scheme-moovalur`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'மூவலூர் ராமாமிர்தம் அம்மையார் திட்டம்',
                    description: 'மூவலூர் ராமாமிர்தம் அம்மையார் திட்டம் - அரசு திருமண உதவி ₹50,000, விண்ணப்பிக்கும் முறை, தேவையான ஆவணங்கள்',
                    author: 'கார்த்திக் ராஜன்',
                    datePublished: '2026-09-16',
                    slug: '/blog/tn-marriage-assistance-scheme-moovalur'
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
                    மூவலூர் ராமாமிர்தம் அம்மையார் திட்டம்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="மூவலூர் ராமாமிர்தம் அம்மையார் திட்டம்"
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
  <p className="lead text-xl text-gray-600 mb-8 font-medium">
    தமிழ்நாட்டில் ஏழை மற்றும் நடுத்தர குடும்பங்களைச் சேர்ந்த பெண்களுக்குத் திருமண நிதி மற்றும் தாலிக்கு தங்கம் வழங்கி அவர்களின் வாழ்வை மேம்படுத்த கொண்டுவரப்பட்ட வரலாற்றுச் சிறப்புமிக்க திட்டம் தான் <strong>மூவலூர் ராமாமிர்தம் அம்மையார் நினைவு திருமண நிதியுதவித் திட்டம்</strong>. பெண் கல்வியை ஊக்குவிப்பதிலும், குழந்தை திருமணங்களை முற்றிலும் ஒழிப்பதிலும் இத்திட்டம் பெரும் பங்காற்றியுள்ளது. இத்திட்டம் குறித்த முழுமையான விவரங்கள், ₹50,000 நிதியுதவி பெற தேவையான தகுதிகள், விண்ணப்பிக்கும் படிநிலைகள் மற்றும் தற்போதைய மாற்றங்கள் பற்றி இந்த வழிகாட்டியில் விரிவாகக் காண்போம்.
  </p>

  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
    <h3 className="text-xl font-bold text-blue-900 mb-2">திட்டம் ஒரு பார்வை (Scheme Overview)</h3>
    <p className="text-blue-800 mb-0">
      <strong>திட்டத்தின் பெயர்:</strong> மூவலூர் ராமாமிர்தம் அம்மையார் நினைவு திருமண நிதியுதவித் திட்டம்<br />
      <strong>நிர்வகிக்கும் துறை:</strong> தமிழ்நாடு சமூக நலன் மற்றும் மகளிர் உரிமைத் துறை (Social Welfare and Women Empowerment Department)<br />
      <strong>பயனாளிகள்:</strong> தமிழ்நாட்டைச் சேர்ந்த தகுதியுள்ள இளம் பெண்கள்<br />
      <strong>முதன்மை நோக்கம்:</strong> பெண் கல்வியை ஊக்குவித்தல், திருமணச் செலவுகளுக்கு நிதியுதவி அளித்தல், குழந்தை திருமணத்தைத் தடுத்தல்<br />
      <strong>அதிகாரப்பூர்வ இணையதளம்:</strong> <a href="https://www.tn.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-blue-900">tn.gov.in</a> / <a href="https://tnesevai.tn.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-blue-900">tnesevai.tn.gov.in</a>
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. மூவலூர் ராமாமிர்தம் அம்மையார் திட்டத்தின் பின்னணியும் நோக்கமும்</h2>
  <p>
    தமிழகச் சமூக சீர்திருத்த வரலாற்றில் பெண்களின் உரிமைக்காகவும், தேவதாசி முறை ஒழிப்புக்காகவும் தீவிரமாகப் பாடுபட்டவர் மூவலூர் ராமாமிர்தம் அம்மையார். அவரின் நினைவைப் போற்றும் வகையிலும், ஏழை எளிய குடும்பங்களில் பிறக்கும் பெண் குழந்தைகளின் எதிர்காலத்தைப் பாதுகாக்கும் வகையிலும் தமிழ்நாடு அரசால் இத்திருமண நிதியுதவித் திட்டம் தொடங்கப்பட்டது.
  </p>
  <p>
    கிராமப்புறங்களிலும் நகர்ப்புறங்களிலும் உள்ள ஏழைப் பெற்றோர் தங்கள் பெண் குழந்தைகளின் திருமணத்திற்குப் பெரும் தொகையைக் கடனாகப் பெறுவதைத் தவிர்க்கவும், பெண் குழந்தைகள் குறைந்தபட்சம் பத்தாம் வகுப்பு அல்லது பட்டப்படிப்பு வரை படிப்பதை கட்டாயமாக்கவும் இத்திட்டம் ஒரு முக்கியக் கருவியாகச் செயல்பட்டது.
  </p>

  <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
    <p className="text-orange-900 font-semibold mb-1">முக்கியக் கொள்கை மாற்றம் (Recent Policy Update):</p>
    <p className="text-orange-800 text-sm mb-0">
      தமிழ்நாடு அரசு மூவலூர் ராமாமிர்தம் அம்மையார் திட்டத்தைச் சீரமைத்து, கல்லூரி பயிலும் மாணவிகளின் உயர் கல்வியை ஊக்குவிக்கும் <strong>&quot;மூவலூர் ராமாமிர்தம் அம்மையார் உயர் கல்வி உறுதித் திட்டம்&quot; (புதுமைப் பெண் திட்டம்)</strong> என மாற்றியமைத்துள்ளது. இப்புதிய திட்டத்தின் கீழ் அரசுப் பள்ளிகளில் 6 முதல் 12-ஆம் வகுப்பு வரை படித்து உயர்கல்வி சேரும் மாணவிகளுக்கு மாதம் ₹1,000 நேரடியாக அவர்களின் வங்கி கணக்கில் வழங்கப்படுகிறது. இருப்பினும், இத்திட்டத்தின் முந்தைய திருமண உதவி விதிகள் மற்றும் சமூக நலத்துறையின் பிற திருமண நிதியுதவித் திட்டங்கள் எவ்வாறு இயங்குகின்றன என்பதை அறிந்துகொள்வது அவசியம்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. நிதியுதவித் தொகை மற்றும் கல்வித் தகுதிப் பிரிவுகள்</h2>
  <p>
    இத்திட்டம் பெண்களின் கல்வித் தகுதியை அடிப்படையாகக் கொண்டு இரண்டு முதன்மைப் பிரிவுகளின் கீழ் நிதியுதவியையும், தாலிக்குத் தங்கத்தையும் வழங்கி வந்தது:
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">பிரிவு 1: பள்ளிப்படிப்பு முடித்தவர்களுக்கான உதவி (Scheme I)</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>கல்வித் தகுதி:</strong> மணமகள் 10-ஆம் வகுப்பு (10th Standard) தேர்ச்சி பெற்றிருக்க வேண்டும் அல்லது தேர்வு எழுதி இருக்க வேண்டும். 10-ஆம் வகுப்பு தோல்வி அடைந்திருந்தாலும் இத்திட்டத்திற்கு விண்ணப்பிக்க தகுதி உண்டு.</li>
    <li><strong>பழங்குடியினர் தளர்வு:</strong> பழங்குடியின (ST) வகுப்பைச் சேர்ந்த பெண்கள் 5-ஆம் வகுப்பு வரை படித்திருந்தால் போதுமானது.</li>
    <li><strong>வழங்கப்பட்ட உதவி:</strong> ₹25,000 ரொக்க உதவித் தொகை (Direct Bank Transfer) மற்றும் 8 கிராம் (1 சவரன்) 22 காரட் தங்க நாணயம்.</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">பிரிவு 2: பட்டப்படிப்பு / டிப்ளமோ முடித்தவர்களுக்கான உதவி (Scheme II)</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>கல்வித் தகுதி:</strong> அரசு அங்கீகாரம் பெற்ற கல்லூரிகள் அல்லது பல்கலைக்கழகங்களில் பட்டப்படிப்பு (Degree - BA, B.Sc, B.Com, B.E, B.Tech போன்றவை) தேர்ச்சி பெற்றிருக்க வேண்டும். அல்லது அரசால் அங்கீகரிக்கப்பட்ட தொழிற்பயிற்சி நிறுவனங்களில் (Diploma / ITI) தேர்ச்சி பெற்றிருக்க வேண்டும்.</li>
    <li><strong>வழங்கப்பட்ட உதவி:</strong> ₹50,000 ரொக்க உதவித் தொகை மற்றும் 8 கிராம் (1 சவரன்) 22 காரட் தங்க நாணயம்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. திட்டத்திற்கான தகுதி வரம்புகள் (Eligibility Criteria)</h2>
  <p>
    இத்திட்டம் அல்லது சமூக நலத்துறையின் திருமண உதவித் திட்டங்கள் மூலம் பயன்பெற விண்ணப்பதாரர் பின்வரும் முதன்மைத் தகுதிகளைப் பெற்றிருக்க வேண்டும்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>இருப்பிடம்:</strong> விண்ணப்பதாரர் மற்றும் அவரது குடும்பத்தினர் தமிழ்நாட்டைச் சேர்ந்த நிரந்தர வசிப்பிடவாசியாக (Resident of Tamil Nadu) இருக்க வேண்டும்.</li>
    <li><strong>மணமகளின் வயது வரம்பு:</strong> திருமணத்தன்று மணமகளுக்கு கட்டாயம் 18 வயது நிறைவடைந்திருக்க வேண்டும். (18 வயது பூர்த்தியடையாத விண்ணப்பங்கள் எக்காரணம் கொண்டும் ஏற்கப்பட மாட்டாது).</li>
    <li><strong>மணமகனின் வயது வரம்பு:</strong> திருமணத்தன்று மணமகனுக்கு கட்டாயம் 21 வயது நிறைவடைந்திருக்க வேண்டும்.</li>
    <li><strong>வருமான வரம்பு:</strong> விண்ணப்பிக்கும் குடும்பத்தின் ஆண்டு வருமானம் ₹72,000-க்கு மிகாமல் இருக்க வேண்டும். வட்டாட்சியர் (Tahsildar) வழங்கும் வருமானச் சான்றிதழ் சமர்ப்பிக்கப்பட வேண்டும்.</li>
    <li><strong>குடும்பக் கட்டுப்பாடு:</strong> ஒரு குடும்பத்தில் உள்ள ஒரு பெண்ணிற்கு மட்டுமே இத்திட்டத்தின் கீழ் உதவித்தொகை பெற முடியும்.</li>
    <li><strong>முதல் திருமணம்:</strong> மணமகளுக்கு இது முதல் திருமணமாக (First Marriage) இருக்க வேண்டும். (கணவரை இழந்த பெண்கள் மறுமணம் செய்யும்போது ஈ.வெ.ரா மணியம்மையார் நினைவாக தனியாகத் திட்டம் உள்ளது).</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. விண்ணப்பிக்க தேவையான ஆவணங்களின் பட்டியல் (Required Documents)</h2>
  <p>
    இ-சேவை மையங்கள் அல்லது சமூக நலத்துறை அலுவலகம் வாயிலாக விண்ணப்பிக்கும் போது கீழே குறிப்பிடப்பட்டுள்ள ஆவணங்களின் தெளிவான நகல்களைச் சமர்ப்பிக்க வேண்டும்:
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>கல்விச் சான்றிதழ் (Educational Certificates):</strong> 10-ஆம் வகுப்பு / 12-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ் அல்லது பட்டப்படிப்பு / டிப்ளமோ தற்காலிக சான்றிதழ் (Provisional Certificate / Degree Certificate).</li>
    <li><strong>வயதுச் சான்று (Age Proof):</strong> மணமகள் மற்றும் மணமகனின் பிறப்புச் சான்றிதழ், பள்ளி மாற்றுச் சான்றிதழ் (TC) அல்லது ஆதார் அட்டை.</li>
    <li><strong>வருமானச் சான்றிதழ் (Income Certificate):</strong> ஈ-சேவை மையம் மூலம் பெறப்பட்ட புதுப்பிக்கப்பட்ட வருமானச் சான்றிதழ் (ஆண்டு வருமானம் ₹72,000-க்குள்).</li>
    <li><strong>சாதிச் சான்றிதழ் (Community Certificate):</strong> வட்டாட்சியரால் வழங்கப்பட்ட சாதிச் சான்றிதழ்.</li>
    <li><strong>குடும்ப அட்டை (Ration Card):</strong> புதுப்பிக்கப்பட்ட ஸ்மார்ட் ரேஷன் கார்டு நகல்.</li>
    <li><strong>திருமண அழைப்பிதழ் (Wedding Invitation):</strong> அச்சிடப்பட்ட திருமண அழைப்பிதழின் அசல் மற்றும் நகல்.</li>
    <li><strong>வங்கி கணக்கு புத்தகம் (Bank Passbook):</strong> மணமகளின் பெயர் மட்டுமே உள்ள தனிநபர் வங்கி கணக்குப் புத்தகத்தின் முதல் பக்க நகல் (IFSC குறியீடு மற்றும் கணக்கு எண் தெளிவாக இருக்க வேண்டும்).</li>
    <li><strong>புகைப்படங்கள்:</strong> மணமகள் மற்றும் மணமகனின் தனித்தனி பாஸ்போர்ட் அளவு புகைப்படங்கள்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. விண்ணப்பிக்கும் முறை - படிப்படியாக (Step-by-Step Application Process)</h2>
  <p>
    அரசு திருமண நிதியுதவித் திட்டங்களுக்கு விண்ணப்பிக்கும் நடைமுறைகள் எளிமையாக்கப்பட்டுள்ளன. விண்ணப்பிக்கும் முறையைக் கீழே காணலாம்:
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 1: இ-சேவை மையத்தை அணுகுதல்</h3>
  <p>
    உங்கள் இருப்பிடத்திற்கு அருகில் உள்ள தமிழ்நாடு அரசு இ-சேவை மையம் (TNeGA e-Sevai Center) அல்லது கிராம நிர்வாக அலுவலர் (VAO) / பஞ்சாயத்து ஒன்றிய அலுவலகத்தை அணுகவும்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 2: ஆன்லைன் படிவம் பூர்த்தி செய்தல்</h3>
  <p>
    தேவையான அனைத்து அசல் ஆவணங்களையும் இ-சேவை மையத்தில் வழங்கி, கணினி ஆபரேட்டர் மூலம் ஆன்லைன் விண்ணப்பப் படிவத்தைப் பூர்த்தி செய்ய வேண்டும்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 3: விண்ணப்பக் காலக்கெடுவை கவனத்தில் கொள்ளுதல்</h3>
  <p>
    திருமணம் நடைபெறுவதற்கு <strong>குறைந்தது 40 நாட்களுக்கு முன்பாக</strong> விண்ணப்பிப்பது அவசியமாகும். சில அவசர காலங்களில் திருமணத்திற்கு 2 நாட்களுக்கு முன் வரை விண்ணப்பிக்க அனுமதிக்கப்பட்டாலும், முன் கூட்டியே விண்ணப்பிப்பதே பாதுகாப்பானது.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">படி 4: வங்கி கணக்கில் நிதி வரவு</h3>
  <p>
    அதிகாரிகளின் சரிபார்ப்புக்குப் பின், திருமண உதவித் தொகை நேரடியாக பயனாளியின் வங்கிக் கணக்கிற்கு அனுப்பி வைக்கப்படும். தங்க நாணயமும் உரிய அரசு துறை மூலம் வழங்கப்படும்.
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
                    currentSlug="/blog/tn-marriage-assistance-scheme-moovalur" 
                    category="government-schemes" 
                />
            </div>
        </article>
    );
}
