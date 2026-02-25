import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'வேத திருமண மந்திரங்கள் விளக்கம் | Vedic Wedding Mantras Guide',
    description: 'தமிழ் திருமணத்தில் ஓதப்படும் வேத மந்திரங்கள், சப்த பதி மந்திரம், மங்கள சூத்ரம், மந்திர பொருள் மற்றும் முக்கியத்துவம்.',
    keywords: ['vedic mantras', 'wedding mantras', 'saptha padi', 'tamil wedding', 'vedic rituals', 'mangalya dharanam'],
    alternates: {
        canonical: '/blog/vedic-wedding-mantras',
    },
};

export default function VedicWeddingMantras() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    வேத திருமண மந்திரங்கள்: அர்த்தம் & முக்கியத்துவம்
                </h1>
                <div className="flex justify-center gap-4 text-sm text-gray-500 mb-8">
                    <time dateTime="2026-02-10">பிப்ரவரி 10, 2026</time>
                    <span>•</span>
                    <span>7 நிமிட வாசிப்பு</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-sm">
                    <div className="text-gray-700">
                        <strong>எழுதியவர்:</strong> சித்ரை செல்வன் |
                        <a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            selvan.dev
                        </a>
                    </div>
                </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    தமிழ் திருமணத்தில் ஓதப்படும் வேத மந்திரங்கள் ஆயிரக்கணக்கான ஆண்டுகள் பழைமையானவை.
                    இந்த புனித மந்திரங்கள் வெறும் சடங்கு மொழிகள் அல்ல - ஒவ்வொன்றும் ஆழமான அர்த்தமும்
                    நோக்கமும் கொண்டவை. மணமக்கள் எடுத்துக்கொள்ளும் வாக்குறுதிகள், கடவுளர்
                    ஆசிர்வாதம், மற்றும் வாழ்நாள் முழுவதும் ஒன்றாக வாழ வேண்டும் என்ற பிரார்த்தனை
                    ஆகியவை இந்த மந்திரங்களில் பொதிந்துள்ளன. இந்த வழிகாட்டியில், முக்கிய திருமண
                    மந்திரங்கள் மற்றும் அவற்றின் அர்த்தத்தை தெரிந்துகொள்வோம்.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100 my-8">
                    <h3 className="text-xl font-bold text-orange-900 mb-2">🕉️ வேத மந்திரம் என்றால் என்ன?</h3>
                    <p className="text-orange-800">
                        வேத மந்திரங்கள் என்பது <strong>ரிக் வேதம், யஜூர் வேதம், சாம வேதம், அதர்வண வேதம்</strong>
                        ஆகிய நான்கு வேதங்களிலிருந்து எடுக்கப்பட்ட புனித வசனங்கள். திருமண சடங்குகளில்
                        பூசாரி (வையா) இந்த மந்திரங்களை சரியான உச்சரிப்புடன் ஓதுவார். ஒவ்வொரு மந்திரமும்
                        கடவுளர் ஆசிர்வாதம், வாழ்த்துக்கள், மற்றும் மணமக்களின் உறுதிமொழிகளை குறிக்கும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    முக்கிய திருமண மந்திரங்கள் & அவற்றின் அர்த்தம்
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. மங்கள சூத்ர தாரண மந்திரம் (Mangalya Dharanam)</h3>

                <div className="bg-purple-50 p-6 rounded-xl my-6">
                    <h4 className="font-bold text-purple-900 mb-3">மூல மந்திரம்:</h4>
                    <p className="text-sm text-purple-800 italic mb-4 font-semibold">
                        "மாங்கல்யம் தந்துனானேன மம ஜீவன ஹேதவே |<br />
                        கண்டே பத்னானி லோசயாமி ஸுபகே சுபம் ||"
                    </p>
                    <h4 className="font-bold text-purple-900 mb-2">தமிழ் பொருள்:</h4>
                    <p className="text-sm text-purple-800">
                        "இந்த மங்களகரமான நூலை உன் கழுத்தில் கட்டுகிறேன். இது என் நீண்ட ஆயுளுக்கான
                        காரணம். நீ என் மனைவியாக, மங்களகரமான (சுபமான) இடத்தில் வாழ வேண்டும்."
                    </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 my-4">
                    <h4 className="font-bold mb-2">📝 விளக்கம்:</h4>
                    <p className="text-sm text-gray-700">
                        இது தாலி கட்டும் நேரத்தில் ஓதப்படும் மிக முக்கிய மந்திரம். மணமகன் மணமகளின்
                        கழுத்தில் தாலி கட்டும்போது, இந்த மந்திரம் மூன்று முறை சொல்லப்படுகிறது
                        (மூன்று முடிச்சுகளுக்கு). கணவன்-மனைவி உறவின் புனிதத்தையும், கணவனின்
                        நீண்ட ஆயுளுக்காக மனைவி அணியும் தாலியின் முக்கியத்துவத்தையும் இது குறிக்கிறது.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. சப்த பதி மந்திரங்கள் (Saptapadi - 7 Steps)</h3>

                <p>
                    சப்த பதி (சப்த = ஏழு, பதி = அடிகள்) என்பது மணமக்கள் புனித அக்னியை (தீயை) சுற்றி
                    ஏழு படிகள் எடுத்து வைக்கும் சடங்கு. ஒவ்வொரு படிக்கும் ஒரு மந்திரமும், ஒரு
                    வாக்குறுதியும் உண்டு.
                </p>

                <div className="space-y-6 my-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">படி 1 - உணவுக்காக (For Food)</h4>
                        <p className="text-sm italic text-blue-700 mb-2">
                            "ஏக விஷ்ணு ரனு க்ரமய த்வயே வஹாமி"
                        </p>
                        <p className="text-sm text-blue-800">
                            <strong>பொருள்:</strong> "விஷ்ணு பகவானின் பெயரால் முதல் அடி எடுத்து வைக்கிறோம்.
                            நாம் ஒன்றாக உணவை பெற்று சேமித்து வாழ்வோம்."
                        </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <h4 className="font-bold text-green-900 mb-2">படி 2 - பலத்திற்காக (For Strength)</h4>
                        <p className="text-sm italic text-green-700 mb-2">
                            "த்வே ஊர்ஜே விஷ்ணு ரனு க்ரமய து"
                        </p>
                        <p className="text-sm text-green-800">
                            <strong>பொருள்:</strong> "இரண்டாவது அடியில், நாம் ஒன்றாக பலம் மற்றும்
                            ஆரோக்கியத்தை பெறுவோம். உடல் மனம் இரண்டிலும் வலிமையாக இருப்போம்."
                        </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                        <h4 className="font-bold text-yellow-900 mb-2">படி 3 - செல்வத்திற்காக (For Wealth)</h4>
                        <p className="text-sm italic text-yellow-700 mb-2">
                            "த்ரயே போஷாய விஷ்ணு ரனு க்ரமய து"
                        </p>
                        <p className="text-sm text-yellow-800">
                            <strong>பொருள்:</strong> "மூன்றாவது அடியில், நாம் ஒன்றாக செல்வத்தை
                            சேர்ப்போம். நல்ல வாழ்க்கைக்கு தேவையான செழிப்பை நாம் பெறுவோம்."
                        </p>
                    </div>

                    <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                        <h4 className="font-bold text-pink-900 mb-2">படி 4 - மகிழ்ச்சிக்காக (For Happiness)</h4>
                        <p className="text-sm italic text-pink-700 mb-2">
                            "சதுர்தே மாயோ பவாய விஷ்ணு ரனு க்ரமய து"
                        </p>
                        <p className="text-sm text-pink-800">
                            <strong>பொருள்:</strong> "நான்காவது அடியில், நாம் ஒன்றாக மகிழ்ச்சியாக
                            இருப்போம். வாழ்வில் எப்போதும் சந்தோஷம் நிலவும்."
                        </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                        <h4 className="font-bold text-purple-900 mb-2">படி 5 - குடும்பத்திற்காக (For Family)</h4>
                        <p className="text-sm italic text-purple-700 mb-2">
                            "பஞ்சமே பஷு பாலே விஷ்ணு ரனு க்ரமய து"
                        </p>
                        <p className="text-sm text-purple-800">
                            <strong>பொருள்:</strong> "ஐந்தாவது அடியில், நாம் ஒன்றாக குழந்தைகளை
                            பெறுவோம். நல்ல சந்ததியினர் நமக்கு கிடைப்பார்கள்."
                        </p>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                        <h4 className="font-bold text-indigo-900 mb-2">படி 6 - காலங்களுக்காக (For Seasons)</h4>
                        <p className="text-sm italic text-indigo-700 mb-2">
                            "ஷஷ்டே ருது பாயே விஷ்ணு ரனு க்ரமய து"
                        </p>
                        <p className="text-sm text-indigo-800">
                            <strong>பொருள்:</strong> "ஆறாவது அடியில், நாம் அனைத்து காலங்களிலும்
                            (ஆறு ருதுக்களிலும்) ஒன்றாக இருப்போம். வாழ்வின் எல்லா நிலைகளிலும்
                            ஒருவரையொருவர் ஆதரிப்போம்."
                        </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-900 mb-2">படி 7 - நட்புக்காக (For Friendship)</h4>
                        <p className="text-sm italic text-red-700 mb-2">
                            "சப்தமே சக்யா யே விஷ்ணு ரனு க்ரமய து"
                        </p>
                        <p className="text-sm text-red-800">
                            <strong>பொருள்:</strong> "ஏழாவது அடியில், நாம் ஒன்றாக நண்பர்களாக,
                            வாழ்க்கை துணைவர்களாக வாழ்வோம். எப்போதும் ஒருவருக்கொருவர்
                            trust & companionship இருக்கும்."
                        </p>
                    </div>
                </div>

                <div className="bg-orange-50 p-5 rounded-xl border-l-4 border-orange-500 my-6">
                    <p className="font-bold mb-2 text-orange-900">💡 சப்த பதி முக்கியத்வம்</p>
                    <p className="text-sm text-orange-800">
                        இந்த ஏழு படிகளை எடுத்து வைத்த பின்னர்தான் திருமணம் சட்டப்படி முழுமையடைகிறது.
                        இந்து மதத்தில் "சப்த பதி முடிந்தால் திருமணம் முடிந்தது" என்று கூறுவார்கள்.
                        இந்த ஏழு வாக்குறுதிகளும் வாழ்க்கையின் அடிப்படை தேவைகளை (உணவு, ஆரோக்கியம்,
                        செல்வம், மகிழ்ச்சி, குடும்பம், நிலைத்தன்மை, நட்பு) உள்ளடக்கியவை.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. கணேச பூஜை மந்திரம்</h3>

                <div className="bg-gray-50 p-6 rounded-xl my-6">
                    <p className="text-sm italic text-gray-700 mb-3 font-semibold">
                        "வக்ரதுண்ட மஹாகாய சூர்யகோடி ஸமப்ரப |<br />
                        நிர்விக்னம் குரு மே தேவ ஸர்வகார்யேஷூ ஸர்வதா ||"
                    </p>
                    <p className="text-sm text-gray-800">
                        <strong>பொருள்:</strong> "வளைந்த தந்தமும், பெரிய உடலும், கோடி சூரியன்களின்
                        ஒளியும் கொண்ட கணபதியே, என்னுடைய எல்லா செயல்களிலும் தடைகளை நீக்கி
                        அருள்வாயாக."
                    </p>
                    <p className="text-xs text-gray-600 mt-3">
                        திருமணம் தொடங்கும் முன் கணேச பூஜை செய்து இந்த மந்திரம் ஓதப்படுகிறது.
                        திருமணம் தடையின்றி நடக்க வேண்டும் என்று பிரார்த்தனை.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. ஹோம மந்திரம் (Agni Homam)</h3>

                <p>
                    திருமண யாகத்தில் (Homam) அக்னியில் (நெருப்பில்) சமித்துக்கள் (மரக்கட்டைகள்)
                    மற்றும் நெய் சேர்த்து ஆஹுதி செய்யும்போது ஓதப்படுகிறது:
                </p>

                <div className="bg-yellow-50 p-5 rounded-xl my-6">
                    <p className="text-sm italic text-yellow-700 mb-3">
                        "ஓம் ப்ராணாய ஸ்வாஹா | ஓம் அபானாய ஸ்வாஹா |<br />
                        ஓம் வ்யானாய ஸ்வாஹா | ஓம் ஸமானாய ஸ்வாஹா |<br />
                        ஓம் உதானாய ஸ்வாஹா ||"
                    </p>
                    <p className="text-sm text-yellow-800">
                        <strong>பொருள்:</strong> ஐந்து பிராண வாயுக்களுக்கு (சுவாசம், வெளியேற்றம்,
                        பரவுதல், சமநிலை, உயர்வு) அக்னிக்கு ஆஹுதி செய்கிறோம். சுவாஹா என்றால்
                        "ஏற்றுக்கொள்" என்று அர்த்தம்.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. ஆசிர்வாத மந்திரம்</h3>

                <div className="bg-green-50 p-6 rounded-xl my-6">
                    <p className="text-sm italic text-green-700 mb-3 font-semibold">
                        "ஸம்ரஜ்யம் பௌஜஸ்யம் பஷூயம் தியமனம் மஹத் |<br />
                        புத்ரம் பௌத்ரம் த்தனம் த்தான்யம் பஷுபாலம் பஷூ பவத் ||"
                    </p>
                    <p className="text-sm text-green-800">
                        <strong>பொருள்:</strong> "மணமக்களுக்கு செல்வச்செழிப்பு, வலிமை, நல்ல
                        ஆரோக்கியம், புத்திசாலித்தனம், புத்ரர்கள், பேரன்கள், செல்வம், தானியம்,
                        மற்றும் கால்நடைகள் (சொத்துக்கள்) கிடைக்கட்டும்."
                    </p>
                    <p className="text-xs text-gray-600 mt-3">
                        திருமணம் முடிந்த பின் பெரியவர்கள் மணமக்களை ஆசிர்வதிக்கும்போது இந்த மந்திரம்
                        சொல்லப்படுகிறது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    மந்திர ஓதுதல்: முக்கிய விஷயங்கள்
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. பூசாரி தேர்வு</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>வேத பாண்டித்யம்:</strong> வேத மந்திரங்களை சரியான உச்சரிப்புடன் ஓத தெரிந்தவர்</li>
                    <li><strong>அனுபவம்:</strong> பல திருமணங்கள் நடத்திய அனுபவம் உள்ளவர்</li>
                    <li><strong>சடங்கு அறிவு:</strong> எந்த நேரத்தில் எந்த மந்திரம் ஓத வேண்டும் என்று தெரிந்தவர்</li>
                    <li><strong>விளக்கம்:</strong> மந்திர அர்த்தங்களை எளிமையாக விளக்கும் திறன்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. மந்திர சரியான உச்சரிப்பு</h3>
                <p>
                    வேத மந்திரங்களில் உச்சரிப்பு மிக முக்கியம். ஒரு சிறிய தவறு அர்த்தத்தையே
                    மாற்றிவிடும். உதாரணம்:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li><strong>Accent (ஸ்வரம்):</strong> எழுத்துக்கு உயர்ந்த, தாழ்ந்த, சமம் என மூன்று உச்சரிப்புகள்</li>
                    <li><strong>Pause (யதி):</strong> எந்த இடத்தில் நிறுத்த வேண்டும்</li>
                    <li><strong>Speed (வேகம்):</strong> மெதுவாக, தெளிவாக ஓத வேண்டும்</li>
                </ul>

                <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500 my-6">
                    <p className="font-bold mb-2 text-red-900">⚠️ முக்கிய எச்சரிக்கை</p>
                    <p className="text-sm text-red-800">
                        வேத மந்திரங்களை சரியான பயிற்சி இல்லாமல் யாரும் ஓதக்கூடாது. தவறான உச்சரிப்பு
                        மந்திரத்தின் சக்தியை குறைக்கும் அல்லது தவறான பலன்களை தரும் என்று நம்பப்படுகிறது.
                        எப்போதும் தகுதியான, அனுபவமுள்ள வேத பூசாரியை அமர்த்துங்கள்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    நவீன காலத்தில் வேத மந்திரங்கள்
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. மொழி புரிதல்</h3>
                <p>
                    பல நவீன தமிழ் தம்பதிகள் சமஸ்கிருதம் புரியாததால் மந்திர அர்த்தங்களை
                    புரிந்துகொள்வதில் சிரமம்:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li><strong>தமிழ் விளக்கம்:</strong> பூசாரி ஒவ்வொரு மந்திரத்தின் அர்த்தத்தையும் தமிழில் சொல்லலாம்</li>
                    <li><strong>புத்தகங்கள்:</strong> மந்திர விளக்க புத்தகங்கள் கிடைக்கின்றன</li>
                    <li><strong>Pre-wedding class:</strong> சில பூசாரிகள் திருமணத்திற்கு முன் மந்திர விளக்க வகுப்புகள் நடத்துகின்றனர்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. எளிமைப்படுத்தப்பட்ட சடங்குகள்</h3>
                <p>
                    சில நவீன திருமணங்களில்:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>பொது நிகழ்வு இடங்களில் (halls) முழு ஹோமம் சாத்தியமில்லை - குறுகிய பதிப்பு</li>
                    <li>மந்திரங்களின் எண்ணிக்கையை குறைக்கலாம் (time constraint)</li>
                    <li>முக்கிய மந்திரங்களை (மங்கல்யம், சப்த பதி) மட்டும் வைத்துக்கொள்ளலாம்</li>
                </ul>

                <div className="bg-blue-50 p-5 rounded-xl my-6">
                    <h4 className="font-bold text-blue-900 mb-2">💬 பாரம்பரியம் vs நவீனம்</h4>
                    <p className="text-sm text-blue-800">
                        சில தம்பதிகள் முழு வேத சடங்குகளை விரும்புகின்றனர் (3-4 மணி நேரம்),
                        சிலர் குறுகிய பதிப்பை விரும்புகின்றனர் (1-1.5 மணி நேரம்). இரண்டுமே சரி -
                        உங்கள் குடும்ப பாரம்பரியம், நம்பிக்கை, மற்றும் வசதிக்கு ஏற்ப தேர்வு செய்யுங்கள்.
                        முக்கியமானது மந்திரங்களின் அர்த்தத்தை புரிந்துகொண்டு, நேர்மையாக
                        வாக்குறுதிகளை எடுத்துக்கொள்வது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">மந்திரங்கள் இல்லாமல் திருமணம் செல்லுபடியாகுமா?</h3>
                        <p className="text-gray-600 text-sm">
                            சட்டப்படி, இந்து திருமண சட்டம் 1955-ன்படி registration மட்டும் போதும்.
                            ஆனால் மத ரீதியாக, வேத மந்திரங்கள் (குறிப்பாக சப்த பதி) இல்லாமல்
                            திருமணம் முழுமையடையாது என்று பாரம்பரிய கருத்து. Civil marriage
                            (register office) vs temple marriage வித்தியாசம் இதுதான்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">மந்திரங்களின் அர்த்தம் புரியாவிட்டால் என்ன செய்வது?</h3>
                        <p className="text-gray-600 text-sm">
                            பூசாரியிடம் முன்கூட்டியே கேட்டு தமிழ் விளக்கம் பெறுங்கள். சில பூசாரிகள்
                            ஒவ்வொரு மந்திரத்தையும் ஓதிய பின் தமிழில் விளக்குவார்கள். Alternatively,
                            நீங்களே மந்திர விளக்க புத்தகங்கள் படித்து முன்கூட்டியே அர்த்தங்களை
                            தெரிந்துகொள்ளலாம். திருமணத்தில் என்ன நடக்கிறது என்று தெரிந்தால்,
                            அனு பவம் மிகவும் அர்த்தமுள்ளதாக இருக்கும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">வேத மந்திரங்கள் நவீன வாழ்க்கைக்கு பொருந்துமா?</h3>
                        <p className="text-gray-600 text-sm">
                            ஆம், மந்திரங்களின் அடிப்படை அர்த்தங்கள் காலத்தால் அழியாதவை. உணவு,
                            ஆரோக்கியம், செல்வம், மகிழ்ச்சி, குழந்தைகள், நிலையான உறவு, நட்பு - இவை
                            எல்லா காலத்திலும் முக்கியம். பழைய மொழியில் இருந்தாலும், உணர்வுகள்
                            நவீன தம்பதிகளுக்கும் பொருந்தும். மந்திரங்களை அடிப்படையாக கொண்டு,
                            நவீன சூழலுக்கு ஏற்ப வாக்குறுதிகளை புரிந்துகொள்ளலாம்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">மண்டபத்தில் ஹோமம் செய்ய முடியுமா?</h3>
                        <p className="text-gray-600 text-sm">
                            பல திருமண மண்டபங்களில் smoke/fire safety rules காரணமாக முழு ஹோமம்
                            செய்ய அனுமதியில்லை. அப்படியானால்: (1) Portable homa kundam (சிறிய,
                            smokeless) பயன்படுத்தலாம், (2) கோவிலில் திருமணம் செய்யலாம் (முழு ஹோமம்
                            சாத்தியம்), (3) Symbolic ஹோமம் (actual fire இல்லாமல், லேசான தூபம் மட்டும்).
                            முன்கூட்டியே மண்டப நிர்வாகம் மற்றும் பூசாரியுடன் discuss செய்யுங்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">பூசாரி கட்டணம் என்ன?</h3>
                        <p className="text-gray-600 text-sm">
                            அனுபவம் மற்றும் இடத்தைப் பொறுத்து மாறுபடும். சென்னையில் பொதுவாக
                            ₹5,000-₹25,000 வரை. இதில் அடங்குபவை: பூசாரி தட்சிணை, உதவியாளர்கள்,
                            போக்குவரத்து. சில நேரங்களில் பூஜைக்கு தேவையான பொருட்களும் (மஞ்சள்,
                            குங்குமம், பூக்கள்) சேர்ந்திருக்கும். Traditional பூசாரிகள் எளிமையாக
                            dakshina (தட்சிணை) மட்டும் கேட்பார்கள், நீங்கள் உங்கள் சக்திக்கேற்ப
                            கொடுக்கலாம்.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        வேத திருமண மந்திரங்கள் நமது பண்பாட்டின் செல்வம். ஆயிரக்கணக்கான ஆண்டுகளாக
                        எண்ணற்ற தம்பதிகள் இந்த மந்திரங்களுடன் தங்கள் வாழ்க்கையை தொடங்கியுள்ளனர்.
                        மொழி தடையாக இருந்தாலும், அர்த்தங்களை புரிந்துகொண்டு, நேர்மையாக
                        வாக்குறுதிகளை எடுத்துக்கொள்வது மந்திரங்களின் உண்மையான நோக்கம்.
                        பாரம்பரியமும், நவீன புரிதலும் சேர்ந்து, இந்த புனித மொழிகள் உங்கள்
                        திருமண பந்தத்தை புனிதமாகவும், அர்த்தமுள்ளதாகவும் ஆக்கும்!
                    </p>
                </div>

                <div className="bg-orange-50 p-8 rounded-2xl mt-12 border border-orange-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">எழுதியவர் பற்றி</h3>
                    <p className="text-gray-700 mb-3">
                        <strong>சித்ரை செல்வன்</strong> கல்யாண வீடு தளத்தின் நிறுவனர்.
                        தமிழ் திருமண பாரம்பரியங்களை நவீன தலைமுறைக்கு எளிமையாக விளக்கும்
                        நோக்கோடு செயல்படுகிறார்.
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
