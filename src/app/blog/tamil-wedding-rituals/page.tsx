import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBlock from '@/components/TrustBlock';

export const metadata: Metadata = {
    title: 'தமிழ் திருமண சடங்குகள் வழிகாட்டி: முழுமையான விளக்கம் | Tamil Wedding Rituals Guide',
    description: 'தமிழ் திருமணத்தின் அனைத்து சடங்குகளும் - திருமணத்திற்கு முன், திருமண நாள் மற்றும் திருமணத்திற்கு பிறகு செய்யப்படும் சடங்குகளின் விரிவான விளக்கம் மற்றும் அவற்றின் முக்கியத்துவம்.',
    keywords: ['tamil wedding rituals', 'thirumana sadangugal', 'tamil marriage customs', 'kasi yatra', 'saptapadi', 'mangalsutra dharanam'],
    alternates: {
        canonical: '/blog/tamil-wedding-rituals',
    },
};

export default function TamilWeddingRitualsGuide() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    தமிழ் திருமண சடங்குகள்: முழுமையான வழிகாட்டி
                </h1>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="பிப்ரவரி 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    தமிழ் திருமணம் என்பது வெறும் இரு மனங்களின் இணைப்பு மட்டுமல்ல,
                    அது நம் பாரம்பரிய கலாச்சாரத்தின் அழகான வெளிப்பாடு. ஒவ்வொரு சடங்கும்
                    ஒரு ஆழமான அர்த்தத்தைக் கொண்டது. இந்த வழிகாட்டியில், திருமணத்தின்
                    மூன்று கட்டங்களிலும் (திருமணத்திற்கு முன், திருமண நாள், திருமணத்திற்கு பிறகு)
                    செய்யப்படும் அனைத்து முக்கிய சடங்குகளையும் விரிவாகப் பார்க்கலாம்.
                </p>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
                    <h3 className="text-xl font-bold text-orange-900 mb-2">📅 உங்கள் திருமண தேதியை தேர்வு செய்யுங்கள்</h3>
                    <p className="text-orange-800">
                        இந்த சடங்குகளை நடத்த சரியான சுப முகூர்த்த தேதியை தேர்வு செய்ய எங்கள்
                        <Link href="/tools/subha-muhurtham" className="text-primary font-bold hover:underline mx-1">
                            சுப முகூர்த்த காலண்டரை
                        </Link>
                        பயன்படுத்தவும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    கட்டம் 1: திருமணத்திற்கு முன்பு (Pre-Wedding Rituals)
                </h2>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. நிச்சயதார்த்தம் (Engagement)</h3>
                <p>
                    திருமண ஏற்பாடுகளின் முதல் அதிகாரபூர்வ நிகழ்வு நிச்சயதார்த்தம். இதில் மணமகன் மற்றும்
                    மணமகளின் குடும்பங்கள் ஒன்று சேர்ந்து, இரு தரப்பினரும் திருமணத்திற்கு சம்மதம்
                    தெரிவிக்கிறார்கள். பொதுவாக மாப்பிள்ளை பக்கத்தினர் பெண் வீட்டிற்கு சென்று:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>தாம்பூலம்:</strong> தேங்காய், வெற்றிலை, பாக்கு, பழங்கள் வழங்குதல்</li>
                    <li><strong>நகைகள்:</strong> மணமகளுக்கு நகைகள் அணிவித்தல் (பொதுவாக மோதிரம், சங்கிலி)</li>
                    <li><strong>பட்டுப்புடவை:</strong> சீர்வரிசையில் பட்டுப் புடவைகள் கொடுத்தல்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. சுமங்கலி பிரார்த்தனை (Sumangali Prarthanai)</h3>
                <p>
                    திருமணத்திற்கு ஒரு வாரம் முன்பு மணமகள் வீட்டில் நடக்கும் சடங்கு.
                    இதில் சுமங்கலிகள் (திருமணமான பெண்கள்) கூடி, மணமகளுக்கு ஆசீர்வாதம் வழங்குகிறார்கள்.
                    மஞ்சள், குங்குமம் கொடுத்து, திருமான வாழ்க்கை வளமாக அமைய பிரார்த்திக்கிறார்கள்.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. நலங்கு (Nalungu)</h3>
                <p>
                    திருமணத்திற்கு முதல் நாள் இரவு மணமகன் மற்றும் மணமகள் இருவருக்கும்
                    அவரவர் வீடுகளில் தனித்தனியாக நடக்கும் சடங்கு. இதில்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>மஞ்சள், குங்குமம், எண்ணெய் தடவுதல்</li>
                    <li>நலங்கு பாடல்கள் பாடுதல்</li>
                    <li>உறவினர்களின் ஆசீர்வாதம் பெறுதல்</li>
                    <li>பால், வாழைப்பழம் உண்ணுதல்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    கட்டம் 2: திருமண நாள் சடங்குகள் (Wedding Day Rituals)
                </h2>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. காசி யாத்திரை (Kasi Yatra)</h3>
                <p>
                    இது தமிழ் திருமணத்தின் மிகவும் சுவாரசியமான சடங்கு. மணமகன் "நான் திருமணம் செய்துகொள்ள
                    விரும்பவில்லை, காசிக்கு செல்கிறேன்" என்று வீட்டிலிருந்து புறப்படுகிறார்.
                    அப்போது மணமகளின் தந்தை அவரை தடுத்து, "என் மகளை திருமணம் செய்து கொண்டு
                    இல்லற வாழ்வை நடத்துங்கள்" என்று வேண்டிக்கொள்கிறார். இது வானப்பிரஸ்தம்
                    (துறவறம்) மற்றும் இல்லறம் இரண்டில் எது சிறந்தது என்பதைக் காட்டும்
                    அடையாளப் பூர்வ நாடகம்.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 italic my-6">
                    "காசி யாத்திரை நமக்கு நினைவூட்டுவது: இல்லற வாழ்வு என்பது ஒரு பொறுப்பு மட்டுமல்ல,
                    ஒரு புனிதமான கடமை."
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. ஊஞ்சல் (Oonjal)</h3>
                <p>
                    மணமக்கள் இருவரும் அலங்கரிக்கப்பட்ட ஊஞ்சலில் அமர்ந்து ஆடும் சடங்கு.
                    உறவினர்கள் அவர்களைச் சுற்றி நின்று பாடல்கள் பாடுகிறார்கள்.
                    சுமங்கலிகள் மணமக்களுக்கு மஞ்சள், குங்குமம், பால், வாழைப்பழம் கொடுக்கிறார்கள்.
                    இந்த சடங்கு வாழ்க்கையில் வரும் ஏற்ற இறக்கங்களை சமாளிக்கும்
                    இணக்கத்தை குறிக்கிறது.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. கன்னிதானம் (Kanyadanam)</h3>
                <p>
                    மணமகளின் தந்தை அவளை மணமகனிடம் ஒப்படைக்கும் மிக முக்கியமான சடங்கு.
                    இது "கன்னிகையை தானம் செய்தல்" என்று பொருள்படும். பெற்றோர் தங்கள்
                    மகளின் கையை மணமகனின் கையில் வைத்து, "என் மகளை உனக்கு ஒப்படைக்கிறேன்,
                    இவளை பாதுகாத்துக் கொள்" என்று மந்திரம் சொல்கிறார்கள். இது
                    பெற்றோரின் பொறுப்பு மணமகனுக்கு மாறும் புள்ளி.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. சப்தபதி (Saptapadi - 7 பாவடிகள்)</h3>
                <p>
                    திருமண சடங்கில் மிக முக்கியமானது சப்தபதி. மணமக்கள் புனித நெருப்பை
                    ஏழு முறை சுற்றி வருகிறார்கள். ஒவ்வொரு சுற்றிலும் ஒரு விசேஷ
                    பிரமாணம் எடுக்கிறார்கள்:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>முதல் பாவடி:</strong> உணவு மற்றும் வாழ்வாதாரத்திற்காக</li>
                    <li><strong>இரண்டாம் பாவடி:</strong> உடல் மற்றும் மன வலிமைக்காக</li>
                    <li><strong>மூன்றாம் பாவடி:</strong> செல்வம் மற்றும் வளத்திற்காக</li>
                    <li><strong>நான்காம் பாவடி:</strong> மகிழ்ச்சி மற்றும் நல்வாழ்விற்காக</li>
                    <li><strong>ஐந்தாம் பாவடி:</strong> சந்ததி மற்றும் குழந்தைகளுக்காக</li>
                    <li><strong> ஆறாம் பாவடி:</strong> ஆரோக்கியம் மற்றும் நீண்ட வாழ்விற்காக</li>
                    <li><strong>ஏழாம் பாவடி:</strong> விசுவாசம் மற்றும் நட்புக்காக</li>
                </ol>
                <p className="mt-4">
                    ஏழாவது சுற்றுக்குப் பிறகு திருமணம் முடிந்ததாகக் கருதப்படுகிறது.
                    "சப்தபதி முடிந்தவுடன் திருமணம் முடிந்ததாகும்" என்பது இந்து சட்டம்.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. மாங்கல்ய தாரணம் (Mangalsutra Dharanam)</h3>
                <p>
                    மணமகன் மணமகளின் கழுத்தில் தாலி (மங்கள சூத்திரம்) கட்டும் சடங்கு.
                    இந்த கணம் தான் திருமணத்தின் உச்சக்கட்டம். மங்கள வாத்தியங்கள் இசைக்கப்படும்,
                    பந்தங்கள் வீசப்படும். தாலி என்பது திருமான பந்தத்தின் அடையாளம்,
                    இது மணமகளின் வாழ்நாள் முழுவதும் அவள் அணிந்திருப்பாள்.
                </p>

                <p>
                    தாலியின் வடிவங்கள் மற்றும் முக்கியத்துவத்தை பற்றி மேலும் அறிய
                    <Link href="/blog/thali-cultural-significance" className="text-primary hover:underline mx-1">
                        தாலி கலாச்சார முக்கியத்வம் பற்றிய கட்டுரையைப்
                    </Link>
                    படிக்கவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    கட்டம் 3: திருமணத்திற்கு பிறகு (Post-Wedding Rituals)
                </h2>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. கிருஹப்பிரவேசம் (Grihapravesam)</h3>
                <p>
                    திருமணத்திற்குப் பிறகு மணமகள் முதல் முறையாக மணமகன் வீட்டிற்கு வரும்
                    சடங்கு. வாசலில் அரிசியால் நிறைந்த பாத்திரத்தை வைத்து, மணமகள்
                    அதை வலது காலால் தட்டி உள்ளே நுழைகிறாள். இது செல்வம் மற்றும்
                    வளம் வீட்டிற்குள் நுழைவதைக் குறிக்கிறது. பின்னர் பால் காய்ச்சி
                    வழிய விடுவார்கள் - இதுவும் வளத்தின் அடையாளம்.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. வளைகாப்பு (Valaikappu)</h3>
                <p>
                    இது திருமணத்திற்கு பல மாதங்கள் கழித்து, மணமகள் கர்ப்பமாக இருக்கும் போது
                    (பொதுவாக 7-9 மாதங்களில்) நடக்கும் சடங்கு. கர்ப்பிணி பெண்ணுக்கு
                    வளையல்கள் அணிவித்து, சுமங்கலிகள் ஆசீர்வாதம் வழங்குகிறார்கள்.
                    இது தாயும் சேயும் ஆரோக்கியமாக இருக்க நடத்தப்படும் சடங்கு.
                </p>

                <hr className="my-12 border-gray-200" />

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    ஒவ்வொரு சடங்கின் முக்கியத்துவம்
                </h2>

                <p>
                    தமிழ் திருமண சடங்குகள் வெறும் வழக்கங்கள் மட்டுமல்ல - அவை ஆழமான
                    தத்துவங்களைக் கொண்டவை:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>குடும்பங்களின் இணைப்பு:</strong> திருமணம் என்பது இரு தனிநபர்களின்
                        இணைப்பு மட்டுமல்ல, இரு குடும்பங்களின் இணைப்பு.
                    </li>
                    <li>
                        <strong>பொறுப்பு மற்றும் கடமைகள்:</strong> ஒவ்வொரு சடங்கும் திருமண வாழ்வின்
                        பொறுப்புகளை நினைவூட்டுகிறது.
                    </li>
                    <li>
                        <strong>ஆன்மீக அர்த்தம்:</strong> வேத மந்திரங்கள் மற்றும் நெருப்பு சாட்சியாக
                        நடக்கும் சடங்குகள் ஆன்மீக வலிமையை அளிக்கின்றன.
                    </li>
                    <li>
                        <strong>சமூக அங்கீகாரம்:</strong> குடும்பம் மற்றும் சமூகத்தின் முன்னிலையில்
                        நடக்கும் சடங்குகள் சமூக அங்கீகாரத்தை வழங்குகின்றன.
                    </li>
                </ul>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">திருமண திட்டமிடல் ஆலோசனை</h3>
                    <p className="text-gray-700">
                        இந்த சடங்குகள் அனைத்தையும் ஒழுங்காக திட்டமிட, எங்கள்
                        <Link href="/tools/thirumana-thayaripu" className="text-primary hover:underline mx-1">
                            திருமண வேலைகள் பட்டியல் கருவியைப்
                        </Link>
                        பயன்படுத்தவும். ஒவ்வொரு சடங்கிற்கும் தேவையான பொருட்கள்,
                        நேரம், செலவு ஆகியவற்றை கணக்கிட எங்கள்
                        <Link href="/tools/thirumana-selavu" className="text-primary hover:underline mx-1">
                            பட்ஜெட் கால்குலேட்டரை
                        </Link>
                        பயன்படுத்தலாம்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">திருமண சடங்குகள் எல்லாம் கட்டாயமா?</h3>
                        <p className="text-gray-600">
                            சட்டப்படி, சப்தபதி (7 பாவடிகள்) மட்டுமே கட்டாயம். மற்ற சடங்குகள்
                            பாரம்பரிய மற்றும் கலாச்சார முக்கியத்துவம் உடையவை. குடும்ப விருப்பத்தின்
                            அடிப்படையில் சில சடங்குகளைத் தவிர்க்கலாம் அல்லது எளிமையாக்கலாம்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">காசி யாத்திரை ஏன் நடத்தப்படுகிறது?</h3>
                        <p className="text-gray-600">
                            பண்டைய காலத்தில், ஒருவர் 25 வயது வரை கல்வி கற்று பின்னர்
                            துறவறம் எடுக்கலாம் (காசி சென்று) அல்லது இல்லறம் நடத்தலாம் என்ற
                            விருப்பம் இருந்தது. காசி யாத்திரை இந்த பாரம்பரியத்தை நினைவூட்டும்
                            அடையாளப் பூர்வ சடங்காகும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">சப்தபதியின் போது என்ன மந்திரங்கள் சொல்லப்படுகின்றன?</h3>
                        <p className="text-gray-600">
                            ஒவ்வொரு சுற்றிலும் ஒரு விசேஷ வேத மந்திரம் சொல்லப்படுகிறது.
                            இது உணவு, ஆரோக்கியம், செல்வம், மகிழ்ச்சி, சந்ததி, நீண்ட வாழ்வு,
                            விசுவாசம் ஆகியவற்றை கோருகிறது. இந்த மந்திரங்களின் விரிவான விளக்கத்திற்கு
                            எங்கள் வேத மந்திரங்கள் கட்டுரையைப் படிக்கவும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">தாலி கட்டுவது எந்த சடங்கின் போது நடக்கிறது?</h3>
                        <p className="text-gray-600">
                            தாலி கட்டுதல் (மாங்கல்ய தாரணம்) சப்தபதிக்கு முன்பு அல்லது
                            சப்தபதியின் போது நடக்கலாம். இது பகுதி வாரியாக மாறுபடும்.
                            சில இடங்களில் முதல் இரண்டு சுற்றுகளுக்குப் பிறகு தாலி கட்டுகிறார்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">திருமண சடங்குகளுக்கு எவ்வளவு நேரம் ஆகும்?</h3>
                        <p className="text-gray-600">
                            பாரம்பரிய தமிழ் திருமணத்திற்கு பொதுவாக 2-4 மணி நேரம் ஆகும்.
                            முகூர்த்த நேரம் நிர்ணயிக்கப்பட்டிருக்கும், அதற்குள் முக்கிய சடங்குகள்
                            முடியும். எளிமையான திருமணம் என்றால் 1-2 மணி நேரமே போதும்.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">பயனுள்ள தகவல்கள்:</h3>
                    <p className="text-blue-800 text-sm">
                        இந்தச் சடங்குகளின் போது ஓதப்படும் மந்திரங்களின் பொருளை அறிய <Link href="/blog/vedic-wedding-mantras" className="font-bold underline">வேத மந்திரங்கள்</Link> கட்டுரையையும்,
                        இந்த வேலைகளைத் திட்டமிட <Link href="/blog/thirumana-velai-pattiyal" className="font-bold underline">திருமணத் திட்டமிடல் பட்டியல்</Link> கருவியையும் பயன்படுத்தவும்.
                    </p>
                </div>

                <div className="bg-orange-50 p-8 rounded-2xl mt-12 border border-orange-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">எழுதியவர் பற்றி</h3>
                    <p className="text-gray-700 mb-3">
                        <strong>சித்ரை செல்வன்</strong> ஒரு மென்பொருள் பொறியாளர் மற்றும்
                        தமிழ் கலாச்சார ஆர்வலர். தமிழ் திருமண பாரம்பரியங்களை டிஜிட்டல் யுகத்திற்கு
                        கொண்டு வர கல்யாண வீடு தளத்தை உருவாக்கியுள்ளார்.
                    </p>
                    <p className="text-gray-600 text-sm">
                        மேலும் தகவல்களுக்கு:
                        <a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            selvan.dev
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
}
