import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: '₹5 லட்சத்தில் அழகான திருமணம்',
    description: '₹5 லட்சத்தில் அழகான திருமணம் - தமிழ்நாட்டில் சிக்கன திருமணம் நடத்துவது எப்படி? Hall, Catering, Photographer cost breakdown',
    keywords: ['wedding', 'budget', '5', 'lakhs', 'guide', 'தமிழ் திருமணம்', 'kalyanaveedu'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/wedding-budget-5-lakhs-guide`,
    },
};

export default function Article() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">

            <Schema 
                type="BlogPosting" 
                data={{
                    title: '₹5 லட்சத்தில் அழகான திருமணம்',
                    description: '₹5 லட்சத்தில் அழகான திருமணம் - தமிழ்நாட்டில் சிக்கன திருமணம் நடத்துவது எப்படி? Hall, Catering, Photographer cost breakdown',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-10-22',
                    slug: '/blog/wedding-budget-5-lakhs-guide'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'பட்ஜெட் திட்டமிடல்', item: '/blog?category=budget-planning' },
                    ]
                }} 
            />

            <div className="text-center mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    💰 பட்ஜெட் திட்டமிடல்
                </span>
            </div>

            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    ₹5 லட்சத்தில் அழகான திருமணம்
                </h1>
                <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
                        alt="₹5 லட்சத்தில் அழகான திருமணம்"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="அக்டோபர் 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">

<div>
  <p className="text-xl text-gray-700 leading-relaxed mb-8">
    கால் லட்சத்தில் தொடங்கி பல கோடிகள் வரை தமிழ்நாட்டில் திருமணங்கள் நடைபெறுகின்றன. ஆனால், இன்றைய பொருளாதார சூழ்நிலையில், குறைந்த செலவில், அதாவது வெறும் 5 லட்சம் ரூபாய்க்குள் ஒரு அழகான, பாரம்பரியமான மற்றும் மறக்க முடியாத திருமணத்தை நடத்துவது எப்படி என்பது பல நடுத்தர குடும்பங்களின் கனவாகவும் கேள்வியாகவும் உள்ளது. கல்யாண வீடு (Kalyanaveedu.in) தளத்தின் சார்பில், மிகச்சரியான திட்டமிடல் (Planning) இருந்தால், ஆடம்பரம் இல்லாவிட்டாலும் ஆரவாரமான ஒரு எளிய திருமணத்தை எப்படி சாத்தியமாக்கலாம் என்பதை இந்த விரிவான வழிகாட்டியில் பார்க்கப் போகிறோம்.
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. ரூ. 5,00,000 பட்ஜெட்: துல்லியமான செலவுப் பகுப்பாய்வு (Cost Breakdown)</h2>
  
  <p>
    ஐந்து லட்சம் ரூபாய் பட்ஜெட்டை நாம் சரியாகப் பிரித்து செலவழித்தால் மட்டுமே நிதி நெருக்கடியைத் தவிர்க்க முடியும். அநாவசிய செலவுகளைத் தவிர்த்து, அத்தியாவசிய தேவைகளுக்கு மட்டும் பணத்தை ஒதுக்க கீழ்க்கண்ட அட்டவணையைப் பின்பற்றுங்கள்:
  </p>

  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
    <h3 className="text-xl font-bold text-gray-800 mb-4">செலவுத் திட்டம் (Budget Allocation Chart)</h3>
    <ul className="list-disc pl-6 space-y-3 text-gray-700">
      <li><strong>திருமண மண்டபம் / கோயில் திருமணக்கூடம்:</strong> ரூ. 50,000 - ரூ. 75,000</li>
      <li><strong>சமையல் மற்றும் உணவு (Catering for 150-200 guests):</strong> ரூ. 1,50,000 - ரூ. 1,75,000</li>
      <li><strong>முகூர்த்தப் புடவை மற்றும் உடைகள் (Attires &amp; Jewellery):</strong> ரூ. 1,00,000</li>
      <li><strong>புகைப்படம் மற்றும் வீடியோகிராபி (Photography &amp; Videography):</strong> ரூ. 40,000 - ரூ. 50,000</li>
      <li><strong>மலர் அலங்காரம், நாதஸ்வரம் மற்றும் பூஜை பொருட்கள்:</strong> ரூ. 30,000</li>
      <li><strong>தாம்பூலம், பத்திரிகை மற்றும் இதர செலவுகள் (Miscellaneous):</strong> ரூ. 50,000</li>
      <li><strong>அவசர நிதி (Emergency Fund):</strong> ரூ. 30,000</li>
    </ul>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. மண்டபம் மற்றும் உணவுச் செலவைக் குறைக்கும் எளிய வழிகள்</h2>
  
  <p>
    திருமணச் செலவில் 60 சதவீதத்திற்கும் மேல் மண்டபம் மற்றும் உணவிற்கே சென்றுவிடுகிறது. இதனைத் திறம்படக் கையாள்வது எப்படி?
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">கோயில் திருமண மண்டபங்கள் &amp; சமுதாயக் கூடங்கள்</h3>
  <p>
    பெருநகரங்களில் உள்ள ஏசி (AC) திருமண மண்டபங்களுக்கு பதிலாக, இந்து சமய அறநிலையத்துறை கட்டுப்பாட்டின் கீழ் இயங்கும் புகழ்பெற்ற கோயில் திருமண மண்டபங்களை அல்லது அரசு சமுதாயக் கூடங்களைத் தேர்ந்தெடுக்கலாம். இவற்றின் வாடகை மிகக் குறைவு (ரூ. 10,000 முதல் ரூ. 30,000 வரை). மேலும், பாரம்பரியமான ஆன்மீகச் சூழல் திருமணத்திற்கு கூடுதல் சிறப்பைத் தரும்.
  </p>

  <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-8 rounded-r-xl">
    <p className="font-semibold text-orange-900">முக்கிய குறிப்பு:</p>
    <p className="text-orange-800 mt-1">
      அழைப்பாளர் பட்டியலை (Guest List) 150 முதல் 200 நபர்களுக்குள் சுருக்குங்கள். நெருங்கிய சொந்தங்கள் மற்றும் உண்மையான அன்பானவர்களை மட்டும் அழைப்பது உணவுக் கழிவையும், வீண் செலவையும் பெருமளவு திற்கும்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. தமிழ்நாட்டில் திருமண நிதி உதவி திட்டங்கள் (Government Schemes)</h2>
  
  <p>
    தமிழ்நாடு அரசு ஏழை எளிய மக்களின் திருமணத்திற்காக பல சிறப்புத் திட்டங்களைச் செயல்படுத்தி வருகிறது. தகுதியுள்ளவர்கள் இந்தத் திட்டங்கள் மூலம் நிதி உதவி பெற்று திருமணச் சுமையைக் குறைக்கலாம்.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">மூவலூர் ராமாமிர்தம் அம்மையார் உயர் கல்வி உறுதித் திட்டம் / திருமண உதவித் திட்டம்</h3>
  <p>
    பெண் குழந்தைகளின் கல்வி மற்றும் திருமணத்திற்கு தமிழ்நாடு சமூக நலத்துறை மூலமாக நிதியுதவி வழங்கப்படுகிறது.
  </p>

  <ul className="list-disc pl-6 space-y-3 text-gray-700">
    <li><strong>தகுதி வரம்பு:</strong> குடும்ப ஆண்டு வருமானம் ரூ. 72,000-க்கு மிகாமல் இருக்க வேண்டும். பெண் குறைந்தபட்சம் 10-ஆம் வகுப்பு அல்லது பட்டப்படிப்பு படித்திருக்க வேண்டும்.</li>
    <li><strong>தேவையான ஆவணங்கள்:</strong> வருமானச் சான்றிதழ், வயதுச் சான்றிதழ் (பள்ளிச் சான்றிதழ்/பிறப்புச் சான்றிதழ்), ஆதார் அட்டை, வங்கி கணக்கு புத்தகம், திருமண அழைப்பிதழ் மற்றும் பாஸ்போர்ட் அளவு புகைப்படங்கள்.</li>
    <li><strong>விண்ணப்பிக்கும் முறை:</strong> அருகில் உள்ள இ-சேவை மையம் (e-Sevai Centre) மூலமாகவோ அல்லது சமூக நலத்துறை அலுவலகம் மூலமாகவோ ஆன்லைனில் விண்ணப்பிக்கலாம்.</li>
    <li><strong>அதிகாரப்பூர்வ வலைத்தளம்:</strong> <span className="text-blue-600 underline">https://www.tn.gov.in</span> அல்லது மாவட்ட சமூக நல அலுவலகத்தை அணுகவும்.</li>
  </ul>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. பாரம்பரியம் மாறா எளிய சடங்குகள் மற்றும் நவீன மாற்றங்கள்</h2>
  
  <p>
    தமிழர்களின் பாரம்பரிய திருமணச் சடங்குகள் எளிமையான முறையில், ஆச்சார அனுஷ்டானங்களுடன் செய்யும்போது செலவுகள் வெகுவாகக் குறைகின்றன.
  </p>

  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">பண்டைய தமிழர்களின் எளிய திருமணம் (களவொழுக்கம் &amp; கற்பொழுக்கம் சார்ந்த மரபு)</h3>
  <p>
    பண்டைய தமிழ் சமூகத்தில் 'தலைமகள் உடன்போக்கு' அல்லது 'கரணம் கேட்டல்' முறையில் எளிய முறையில் மாலை மாற்றி தாலி கட்டும் பழக்கம் இருந்தது. இன்று அதனை நவீன காலத்திற்கு ஏற்ப நாம் மாற்றிக் கொள்ளலாம். பிரம்மாண்டமான வரவேற்பு நிகழ்ச்சிக்கு (Reception) பதிலாக, முகூர்த்த நாளுக்கு முன்னதாகவே அல்லது அன்றைய தினமே எளிமையான முறையில் 'நலங்கு' மற்றும் 'பந்தக்கால் நடும் விழா' போன்றவற்றைச் சுருக்கமாக முடிக்கலாம்.
  </p>

  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
    <h3 className="text-xl font-bold text-blue-900 mb-3">புகைப்படம் மற்றும் ஒப்பனைச் செலவைக் குறைக்கும் ஐடியா</h3>
    <p className="text-blue-800">
      விலை உயர்ந்த பிராண்டட் போட்டோகிராஃபர்களுக்கு பதிலாக, ஃப்ரீலான்ஸ் (Freelance) மற்றும் புதிய திறமையான இளம் புகைப்படக் கலைஞர்களை ஒப்பந்தம் செய்யுங்கள். தரமான கேமரா வைத்திருக்கும் கல்லூரி மாணவர்கள்கூட மிகச் சிறந்த முறையில் போட்டோ மற்றும் வீடியோ எடுத்துத் தருவார்கள். மேக்கப்பிற்கு பெரிய பார்லர்களைத் தவிர்த்து, உள்ளூர் அழகுக்கலை நிபுணர்களை (Local Beauticians) அணுகலாம்.
    </p>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. சிக்கனத் திருமணத்திற்கான பொன்னான டிப்ஸ்கள்</h2>
  
  <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
    <h3 className="text-xl font-bold text-green-900 mb-3">கால்யாண வீடு தளத்தின் பிரத்யேக ஆலோசனைகள்</h3>
    <ul className="list-disc pl-6 space-y-3 text-green-800">
      <li><strong>டிஜிட்டல் அழைப்பிதழ் (Digital Invitations):</strong> காகித அழைப்பிதழ்களுக்குச் செலவழிப்பதைத் தவிர்த்து, வாட்ஸ்அப் (WhatsApp) மற்றும் சமூக வலைத்தளங்கள் மூலமாக அழகிய டிஜிட்டல் மற்றும் வீடியோ அழைப்பிதழ்களை அனுப்பவும்.</li>
      <li><strong>பருவகால பூக்கள் (Seasonal Flowers):</strong> இறக்குமதி செய்யப்பட்ட விலை உயர்ந்த மலர்களுக்குப் பதிலாக, மல்லிகை, செவ்வந்தி மற்றும் ரோஜா போன்ற உள்ளூர் மற்றும் பருவகால மலர்களைக் கொண்டு அலங்காரம் செய்யவும். இது மண்டபத்திற்கு இயற்கையான நறுமணத்தையும் அழகையும் தரும்.</li>
      <li><strong>உடைகள் வாங்குதல்:</strong> காஞ்சிபுரம் அல்லது பெரிய கடைகளுக்குச் சென்று லட்சக்கணக்கில் செலவழிப்பதற்குப் பதிலாக, திருப்பூர், ஈரோடு அல்லது சேலம் போன்ற ஜவுளி மையங்களில் நேரடியாக மொத்த விலையில் தரமான பட்டுப் புடவைகளையும், உடைகளையும் குறைந்த விலையில் வாங்கலாம்.</li>
    </ul>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">முடிவுரை</h2>
  
  <p className="text-gray-700 leading-relaxed mb-6">
    திருமணம் என்பது ஆடம்பரத்தைக் காட்டுவதற்கான மேடை அல்ல; மாறாக, இரு மனங்கள் மற்றும் இரு குடும்பங்கள் இணைந்து வாழ்நாளைத் தொடங்கும் புனிதமான பந்தம். சமூகத்தின் பார்வைக்காக கடன் வாங்கியோ அல்லது சொத்துக்களை விற்றோ திருமணம் செய்வதைத் தவிர்த்து, உங்களின் உண்மையான பொருளாதார நிலைக்கு ஏற்ப 5 லட்சம் ரூபாயில் ஒரு அழகான, நிம்மதியான திருமணத்தை நடத்துவது உங்கள் எதிர்காலத்திற்கு மிகச் சிறந்த அடித்தளமாக அமையும். எளிய முறையில் மனநிறைவுடன் வாழ்த்துகளுடன் தொடங்கும் திருமணம் என்றும் நிலைத்து நிற்கும்.
  </p>

  <p className="text-sm text-gray-500 mt-8 pt-4 border-t border-gray-200">
    கட்டுரை எழுதியவர்: சித்ரை செல்வன் (Founder &amp; Lead Developer, Kalyanaveedu.in) | வெளியிடப்பட்ட தேதி: 2026-10-22
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
                    name="சித்ரை செல்வன்"
                    role="Founder & Lead Developer"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். திருமண திட்டமிடலை எளிமையாக்குவதும், தமிழ் குடும்பங்களுக்கு நிதி சேமிப்பு ஆலோசனை வழங்குவதும் அவரின் முக்கியப் பணி."
                />
                <RelatedArticles 
                    currentSlug="/blog/wedding-budget-5-lakhs-guide" 
                    category="budget-planning" 
                />
            </div>
        </article>
    );
}
