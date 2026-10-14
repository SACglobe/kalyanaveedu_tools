import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'வெள்ளாள பிள்ளை திருமண சடங்குகள்',
    description: 'வெள்ளாள பிள்ளை திருமண சடங்குகள் - கார்க்கட்ட வெள்ளாளர், முதலியார் திருமண முறைகளும் சடங்குகளும்',
    keywords: ['pillai', 'vellala', 'wedding', 'traditions', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/pillai-vellala-wedding-traditions`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'வெள்ளாள பிள்ளை திருமண சடங்குகள்',
                    description: 'வெள்ளாள பிள்ளை திருமண சடங்குகள் - கார்க்கட்ட வெள்ளாளர், முதலியார் திருமண முறைகளும் சடங்குகளும்',
                    author: 'மீனாட்சி சுந்தரம்',
                    datePublished: '2026-10-13',
                    slug: '/blog/pillai-vellala-wedding-traditions'
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
                    வெள்ளாள பிள்ளை திருமண சடங்குகள்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="வெள்ளாள பிள்ளை திருமண சடங்குகள்"
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

<div>
  <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
    <p className="text-gray-700 font-medium">
      கட்டுப்பாடும் பாரம்பரியமும் நிறைந்த வெள்ளாளர் மற்றும் முதலியார் சமூகங்களின் திருமண முறைகள், ஆயிரங்காலத்து பயிரam என்று சொல்லum அளவுக்கு ஆழமான கலாச்சார வேர்களைக் கொண்டவை. கார்க்கட்ட வெள்ளாளர் முதல் பல்வேறு உட்பிரிவுகளின் சடங்கு முறைகள் குறித்து இந்தக் கட்டுரையில் விரிவாகக் காண்போம்.
    </p>
  </div>

  <p>
    தமிழகத்தின் பாரம்பரிய கலாச்சாரத்தில், வெள்ளாளர் மற்றும் முதலியார் சமூகங்களின் திருமணச் சடங்குகள் மிகவும் தனித்துவமானவை. தலைமுறை தலைமுறையாகக் கடைபிடிக்கப்பட்டு வரும் இந்தச் சடங்குகள், வெறும் சம்பிரதாயங்கள் மட்டுமல்ல; அவை இரண்டு குடும்பங்களை, அவர்களின் உறவுகளை மற்றும் பண்பாட்டை இணைக்கும் பாலமாக விளங்குகின்றன. குறிப்பாக, கார்க்கட்ட வெள்ளாளர் திருமண முறைகள் பழமை மாறாத ஆன்மீகச் சிறப்புகளைக் கொண்டுள்ளன.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. திருமணத்திற்கு முந்தைய சடங்குகள்: நிச்சயதார்த்தமும் பந்தல்காலும்</h2>
  
  <p>
    திருமணப் பேச்சு வார்த்தை முடிவானதும், இரு வீட்டார் சம்மதத்துடன் நிச்சயதார்த்தம் அல்லது பரிசம் போடும் நிகழ்வு நடைபெறுகிறது. இது உறவினர்கள் முன்னிலையில் தாம்பூலம் மாற்றிக் கொள்ளும் முக்கியமான சடங்காகும்.
  </p>

  <ul className="list-disc pl-6 space-y-3">
    <li><strong>பந்தல்கால் நடுதல்:</strong> பாரம்பரிய முறைப்படி, நல்ல நாளில் மா இலைகள் மற்றும் மாவிலைத் தோரணம் கட்டி, மஞ்சள் பூசப்பட்ட மூங்கில் கம்பை வீட்டின் முன்பு பந்தல்காலாக நடுவது வழக்கம்.</li>
    <li><strong>முூலிகைப் பூசணிக்காய் சுற்றி திருஷ்டி கழித்தல்:</strong> பந்தல்கால் நட்ட பிறகு, திருஷ்டி கழிக்க பூசணிக்காய் உடைக்கும் வழக்கம் கார்க்கட்ட வெள்ளாளர் முறைப்படி செய்யப்படுகிறது.</li>
    <li><strong>பெண் பார்க்கும் படலம் மற்றும் பெண் வீட்டார் அழைப்பு:</strong> வரன் மற்றும் கன்னிகாதான முறைமைகளை உறுதி செய்த பின் திருமணத் தேதிகள் குறிக்கப்படும்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. கார்க்கட்ட வெள்ளாளர் திருமண முறைகள் மற்றும் சிறப்புச் சடங்குகள்</h2>
  
  <p>
    கார்க்கட்ட வெள்ளாளர் சமூகத்தில் திருமண நிகழ்வுகள் மிகவும் பாரம்பரியமான வழிமுறைகளின்படி நிகழ்த்தப்படுகின்றன. இவர்களின் திருமணத்தில் செய்யப்படும் சில சடங்குகள் மற்ற சமூகங்களிலிருந்து சற்று மாறுபட்டவை.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">காசி யாத்திரை மற்றும் மாப்பிள்ளை அழைப்பு</h3>
  <p>
    மாப்பிள்ளை காசிக்குச் செல்வது போல் வேடமிட்டுச் செல்லும் சடங்கு பல வெள்ளாளர் திருமணங்களில் உண்டு. அப்போது பெண் வீட்டார் மாப்பிள்ளையைத் தடுத்து நிறுத்தி, தங்கள் பெண்ணை மணந்து கொள்ளுமாறு வற்புறுத்தி மண்டபத்திற்கு அழைத்து வருவர். இது வாழ்க்கையின் இல்லற தர்மத்தை ஏற்குமாறு செய்யும் ஒரு குறியீட்டுச் சடங்காகும்.
  </p>

  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
    <h3 className="text-xl font-bold text-blue-900 mb-2">முதலியார் திருமணங்களில் சீர்வரிசை மற்றும் தாராபூஜை</h3>
    <p className="text-gray-700">
      தொண்டை மண்டல முதலியார் மற்றும் அகமுடைய முதலியார் போன்ற பிரிவுகளில், தாராபூஜை எனப்படும் சடங்கு மிக முக்கியமானது. இதில் மணமகனின் பெற்றோர் அல்லது குலதெய்வ வழிபாட்டுடன் இணைந்து, பெண் வீட்டார் தாரை வார்த்துக்கொடுக்கும் வைபவம் நடக்கும். மேலும், சீர்வரிசைப் பொருட்கள் மற்றும் பட்டுப் புடவைகள் சீதனமாக வழங்குவது இந்தச் சமூகத்தின் பாரம்பரியக் பெருமையாகும்.
  </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. மாங்கல்ய தாரணம் மற்றும் அக்னி பிரவேசம்</h2>
  
  <p>
    திருமணத்தின் உச்சக்கட்ட நிகழ்வு மாங்கல்ய தாரணம் ஆகும். மங்கள வாத்தியங்கள் முழங்க, பெரியோர்களின் ஆசியுடன் தாலி கட்டப்படும் தருணம் மிகவும் புனிதமாகக் கருதப்படுகிறது.
  </p>

  <ul className="list-disc pl-6 space-y-3">
    <li><strong>அம்மியை மிதித்தல் மற்றும் அருந்ததி பார்த்தல்:</strong> நிலையான இல்லற வாழ்வைக் குறிக்கும் வகையில் மணமகன், மணமகளின் கால்களைப் பிடித்து அம்மி மிதிக்க வைப்பார். பின்னர், வானில் அருந்ததி நட்சத்திரத்தைக் காண்பித்து கற்பின் பெருமையை உணர்த்துவர்.</li>
    <li><strong>ஹோமம் வளர்த்தல்:</strong> அக்னி சாட்சியாக வேத மந்திரங்கள் முழங்க வலம் வருதல் மற்றும் லெஜ ஹோமம் செய்தல் கார்க்கட்ட வெள்ளாளர் மற்றும் முதலியார் திருமணங்களின் பொதுவான அம்சமாகும்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. திருமணத்திற்குப் பிந்தைய சடங்குகள்: மணமகன் வீடு புகுதல்</h2>
  
  <p>
    திருமணம் முடிந்தவுடன் மணமகன் வீட்டிற்குப் புதுப்பெண் அழைத்துச் செல்லப்படுவார். அங்கு ஆரத்தி எடுத்து, திருஷ்டி கழித்து வரவேற்கப்படுவர்.
  </p>
  
  <p>
    முதல் நாள் இரவில் 'நூல் க்கட்டுதல்' அல்லது 'பால் பழம் சாப்பிடுதல்' போன்ற சம்பிரதாயங்கள் மூலம் உறவினர்கள் மணமக்களை வாழ்த்துவர். மூன்றாம் நாள் அல்லது ஐந்தாம் நாள் நடக்கும் 'மறுவீடு' சடங்கின் மூலம் இரு குடும்பங்களும் மீண்டும் ஒருமுறை சந்தித்து விருந்துண்ணும் வழக்கம் காலங்காலமாகத் தொடர்கிறது.
  </p>

  <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
    <h3 className="text-xl font-bold text-green-900 mb-3">திருமணத் திட்டமிடலுக்கான நவீன ஆலோசனைகள்</h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>பாரம்பரிய சடங்குகளுக்கு முக்கியத்துவம் கொடுக்கும் அதேவேளையில், நவீன காலத்திற்கு ஏற்ப நேர மேலாண்மையை (Time Management) கடைபிடிக்கவும்.</li>
      <li>கார்க்கட்ட வெள்ளாளர் மற்றும் முதலியார் முறைப்படி குரு பார்ப்பது, நல்ல நேரம் குறிப்பதில் குடும்ப ஜோதிடர்களின் ஆலோசனையை முன்கூட்டியே பெறவும்.</li>
      <li>கலையரங்கங்கள் மற்றும் கல்யாண மண்டபங்களை குறைந்தபட்சம் 6 மாதங்களுக்கு முன்பே முன்பதிவு செய்வது சிறந்தது.</li>
    </ul>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. அரசு திருமண நிதியுதவி திட்டங்கள் மற்றும் நடைமுறைகள்</h2>
  
  <p>
    தமிழக அரசால் ஏழை எளிய மக்களுக்காகவும், பொருளாதாரத்தில் பின்தங்கிய பெண்களுக்காகவும் பல்வேறு திருமண நிதியுதவித் திட்டங்கள் செயல்படுத்தப்பட்டு வருகின்றன. தகுதியுடைய வெள்ளாளர் மற்றும் முதலியார் சமூகத்தைச் சார்ந்தவர்களும் இத்திட்டங்களைப் பயன்படுத்திக் கொள்ளலாம்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">முக்கிய அரசுத் திட்டங்கள்:</h3>
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>மூவலூர் ராமாமிர்தம் அம்மையார் உயர் கல்வி உறுதித் திட்டம் / திருமண நிதியுதவித் திட்டம்:</strong> பெண்களின் கல்வி மற்றும் திருமணத்திற்கு உதவுவதற்காக உருவாக்கப்பட்ட திட்டம்.</li>
    <li><strong>டாக்டர் முத்துலட்சுமி ரெட்டி கலப்புத் திருமண நிதியுதவித் திட்டம்:</strong> சாதி மறுப்புத் திருமணம் செய்து கொள்ளும் தம்பதியினருக்கு அரசால் நிதியுதவி மற்றும் தங்க நாணயம் வழங்கப்படுகிறது.</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">தேவையான ஆவணங்கள் (Required Documents):</h3>
  <ul className="list-disc pl-6 space-y-2">
    <li>மணமகள் மற்றும் மணமகனின் வயது சான்றிதழ் (பள்ளி சான்றிதழ் / பிறப்புச் சான்றிதழ்)</li>
    <li>குடும்ப அட்டை (Ration Card) மற்றும் ஆதார் கார்டு நகல்</li>
    <li>வருமானச் சான்றிதழ் (Income Certificate)</li>
    <li>சாதிச் சான்றிதழ் (Community Certificate)</li>
    <li>திருமணப் பத்திரிகை மற்றும் திருமணப் பதிவுச் சான்றிதழ் (Marriage Invitation &amp; Registration Certificate)</li>
    <li>வங்கி கணக்கு விவரங்கள் (Bank Passbook)</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">விண்ணப்பிக்கும் முறை (Step-by-Step Application Process):</h3>
  <ul className="list-disc pl-6 space-y-2">
    <li>அதிகாரப்பூர்வ வலைத்தளமான <a href="https://www.tnsocialwelfare.tn.gov.in" className="text-blue-600 underline font-semibold" target="_blank" rel="noopener noreferrer">tnsocialwelfare.tn.gov.in</a> அல்லது இ-சேவை மையம் (e-Seva Centre) மூலம் விண்ணப்பிக்கலாம்.</li>
    <li>தேவையான அனைத்து ஆவணங்களையும் ஸ்கேன் செய்து பதிவேற்றம் செய்ய வேண்டும்.</li>
    <li>விண்ணப்பப் படிவத்தை சமர்ப்பித்த பிறகு கிடைக்கும் ஒப்புகைச் சீட்டைப் பத்திரமாக வைத்துக் கொள்ளவும்.</li>
    <li>சமூக நலத்துறை அலுவலகத்தில் சரிபார்த்து நிதியுதவி நேரடியாக வங்கி கணக்கில் வரவு வைக்கப்படும்.</li>
  </ul>

  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
    <h3 className="text-xl font-bold text-gray-900 mb-2">முடிவுரை</h3>
    <p className="text-gray-700">
      வெள்ளாள பிள்ளை மற்றும் முதலியார் திருமணச் சடங்குகள் வெறும் சம்பிரதாயங்கள் மட்டுமல்லாமல், தமிழ் সংস্কரத்தின் உன்னத அடையாளங்களாகத் திகழ்கின்றன. நவீன கால நாகரிக மாற்றங்களுக்கு ஏற்ப இந்தச் சடங்குகளை எளிமைப்படுத்தினாலும், அவற்றின் ஆன்மீக மற்றும் கலாச்சாரப் பாரம்பரியம் என்றும் குறையாது. உங்கள் இல்லத் திருமணங்களைச் சிறப்பாக நடத்த kalyanaveedu.in வலைதளம் எப்போதுமே உங்களது நம்பகமான வழிகாட்டியாகத் திகழும்.
    </p>
  </div>
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
                    currentSlug="/blog/pillai-vellala-wedding-traditions" 
                    category="traditions" 
                />
            </div>
        </article>
    );
}
