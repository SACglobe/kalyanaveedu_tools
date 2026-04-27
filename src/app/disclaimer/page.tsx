import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'பொறுப்புத் துறப்பு | Disclaimer - Kalyanaveedu.in',
    description: 'கல்யாண வீடு தளத்தின் தகவல் துல்லியம், சட்ட பொறுப்புத் துறப்பு, ஜோதிட மற்றும் கணக்கீட்டு கருவிகள் பொறுப்புத் துறப்பு, மூன்றாம் தரப்பு இணை விதிமுறைகள்.',
    alternates: {
        canonical: '/disclaimer',
    },
};

export default function DisclaimerPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    பொறுப்புத் துறப்பு (Disclaimer)
                </h1>
                <p className="text-lg text-gray-600">
                    கடைசியாக புதுப்பிக்கப்பட்டது: பிப்ரவரி 10, 2026
                </p>
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h3 className="text-xl font-bold text-red-900 mb-3">⚠️ முக்கியமான அறிவிப்பு</h3>
                    <p className="text-sm text-red-800 mb-0">
                        Kalyanaveedu.in இணையதளத்தில் வழங்கப்படும் அனைத்து தகவல்கள், கட்டுரைகள்,
                        கணக்கீட்டு கருவிகள், மற்றும் ஆலோசனைகள் பொதுவான வழிகாட்டுதலுக்காக மட்டுமே.
                        இவை தொழில்முறை ஆலோசனையை (சட்ட, மருத்துவ, நிதி, ஜோதிட) மாற்றாது. முக்கியமான
                        முடிவுகளை எடுக்கும் முன் தகுந்த நிபுணர்களிடம் ஆலோசனை பெறவும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. பொதுவான பொறுப்புத் துறப்பு</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1.1 தகவல் நோக்கம்</h3>
                <p>
                    Kalyanaveedu.in தளத்தில் வழங்கப்படும் அனைத்து உள்ளடக்கங்களும்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>கல்வி நோக்கத்திற்காக:</strong> திருமண திட்டமிடல் பற்றிய பொதுவான அறிவை வழங்க</li>
                    <li><strong>வழிகாட்டுதலுக்காக:</strong> உங்கள் சொந்த ஆராய்ச்சிக்கு ஒரு தொடக்க புள்ளியாக</li>
                    <li><strong>கலாச்சார தகவல்:</strong> தமிழ் திருமண பாரம்பரியங்களை புரிந்துகொள்ள</li>
                    <li><strong>"As-is" அடிப்படையில்:</strong> எந்த வித உத்தரவாதமும் இன்றி</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1.2 துல்லியம் & முழுமை</h3>
                <p>
                    நாங்கள் துல்லியமான மற்றும் புதுப்பித்த தகவல்களை வழங்க முயற்சிக்கிறோம், ஆனால்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>அனைத்து தகவல்களும் 100% துல்லியம் என உத்தரவாதம் அளிக்க முடியாது</li>
                    <li>தகவல்கள் காலப்போக்கில் மாறக்கூடியவை (விலைகள், சட்டங்கள், வழக்கங்கள்)</li>
                    <li>மனித பிழைகள் அல்லது தொழில்நுட்ப தவறுகள் ஏற்படலாம்</li>
                    <li>சில உள்ளடக்கங்கள் AI-assisted tools உதவியுடன் உருவாக்கப்பட்டவை</li>
                </ul>

                <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 my-4">
                    <p className="text-sm text-yellow-900 mb-0">
                        <strong>குறிப்பு:</strong> எங்கள் கட்டுரைகள் பல ஆதாரங்களிலிருந்து (புத்தகங்கள்,
                        நிபுணர் நேர்காணல்கள், பாரம்பரிய அறிவு) தகவல் சேகரித்து எழுதப்படுகின்றன. ஏதேனும்
                        தவறு கண்டால் எங்களுக்கு தெரிவிக்கவும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. கணக்கீட்டு கருவிகள் பொறுப்புத் துறப்பு</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.1 திருமண பட்ஜெட் கணிப்பான் (Budget Calculator)</h3>
                <p>
                    எங்கள் budget calculator ஒரு கணிப்பு கருவி மட்டுமே:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>அடிப்படை கணக்கீடு:</strong> பொதுவான செலவு தரவுகளின் அடிப்படையில்</li>
                    <li><strong>மாறக்கூடியது:</strong> உண்மையான செலவுகள் location, vendor, season-ஐ பொறுத்து மாறும்</li>
                    <li><strong>முழுமையற்றது:</strong> சில மறைக்கப்பட்ட செலவுகள் (tips, emergency costs) சேர்க்கப்படாதிருக்கலாம்</li>
                    <li><strong>உத்தரவாதம் இல்லை:</strong> calculator சொல்லும் தொகையில் திருமணம் நடக்கும் என உத்தரவாதம் இல்லை</li>
                </ul>

                <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 my-4">
                    <h4 className="font-bold text-blue-900 mb-2">💡 பட்ஜெட் உதவிக்குறிப்புகள்</h4>
                    <ul className="text-sm text-blue-800 space-y-1 mb-0">
                        <li>• Calculator முடிவுகளை ஒரு தொடக்க புள்ளியாக மட்டும் பயன்படுத்துங்கள்</li>
                        <li>• உண்மையான quotes-க்கு vendors-ஐ நேரடியாக தொடர்பு கொள்ளுங்கள்</li>
                        <li>• எதிர்பாராத செலவுகளுக்கு 10-15% buffer வைக்கவும்</li>
                        <li>• திருமண planner அல்லது நிதி ஆலோசகரின் உதவியை பெறுங்கள்</li>
                    </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.2 திருமண தேதி கணிப்பான் (Wedding Date Calculator)</h3>
                <p>
                    எங்கள் date calculator அடிப்படை ஜோதிட கருவி:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>எளிமையான கணக்கீடு:</strong> பொதுவான muhurtham விதிகளை மட்டும் சரிபார்க்கிறது</li>
                    <li><strong>முழுமையான horoscope matching அல்ல:</strong> 10 porutham, dosham check செய்யாது</li>
                    <li><strong>தனிப்பட்ட ஜாதகம் பார்க்காது:</strong> மணமக்களின் birth charts கருத்தில் கொள்ளாது</li>
                    <li><strong>மாற்று கருத்துக்கள்:</strong> வெவ்வேறு ஜோதிடர்கள் வெவ்வேறு முடிவுகள் சொல்லலாம்</li>
                </ul>

                <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 my-4">
                    <h4 className="font-bold text-purple-900 mb-2">🔮 ஜோதிட முக்கிய குறிப்பு</h4>
                    <p className="text-sm text-purple-800 mb-0">
                        <strong>உங்கள் குடும்ப ஜோதிடரின் ஆலோசனையே இறுதியானது.</strong> எங்கள் calculator
                        ஒரு reference tool மட்டுமே. முழுமையான horoscope matching, nakshatra porutham,
                        மற்றும் dosham சரிபார்ப்புக்கு அனுபவமுள்ள ஜோதிடரை அணுகவும். திருமண தேதி
                        தேர்வு மிக முக்கியமானது - அவசரப்பட வேண்டாம்.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.3 திருமண வயது சரிபார்ப்பு (Legal Age Checker)</h3>
                <p>
                    Age checker சட்ட வயது விதிகளை காட்டுகிறது:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>பொதுவான தகவல்:</strong> இந்திய சட்டப்படி குறைந்தபட்ச வயது (ஆண் 21, பெண் 18/21)</li>
                    <li><strong>சட்ட ஆலோசனை அல்ல:</strong> சிக்கலான வழக்குகளுக்கு வழக்கறிஞரை அணுகவும்</li>
                    <li><strong>மாநில விதிகள் மாறலாம்:</strong> சில மாநிலங்களில் சிறப்பு விதிகள் இருக்கலாம்</li>
                    <li><strong>சட்ட மாற்றங்கள்:</strong> மத்திய/மாநில அரசு சட்டங்களை மாற்றலாம்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. சட்ட & தொழில்முறை ஆலோசனை இல்லை</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3.1 சட்ட ஆலோசனை அல்ல</h3>
                <p>
                    எங்கள் தளத்தில் உள்ள தகவல்கள் சட்ட ஆலோசனையை மாற்றாது. பின்வரும் விஷயங்களுக்கு
                    வழக்கறிஞரை அணுகவும்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>திருமண registration மற்றும் சட்ட நடைமுறைகள்</li>
                    <li>வயது வரம்பு, caste லாஜ் தொடர்பான சட்ட விவகாரங்கள்</li>
                    <li>Pre-nuptial agreements (திருமணத்திற்கு முந்தைய ஒப்பந்தங்கள்)</li>
                    <li>சொத்து உரிமை, பரம்பரை, dowry சட்டங்கள்</li>
                    <li>Inter-caste அல்லது inter-religious திருமண சட்ட அம்சங்கள்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3.2 நிதி ஆலோசனை அல்ல</h3>
                <p>
                    எங்கள் budget tips மற்றும் cost-saving ஆலோசனைகள் பொதுவான வழிகாட்டுதல்கள் மட்டுமே:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>பெரிய loans எடுக்கும் முன் நிதி ஆலோசகரிடம் பேசுங்கள்</li>
                    <li>Investment planning, எமர்ஜென்சி fund பற்றி தொழில்முறை உதவி பெறுங்கள்</li>
                    <li>Taxation விளைவுகளை அறிய chartered accountant உதவியை பெறுங்கள்</li>
                    <li>திருமண insurance policies தேர்வுக்கு insurance advisor-ஐ அணுகவும்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3.3 மருத்துவ/ஆரோக்கிய ஆலோசனை அல்ல</h3>
                <p>
                    திருமண தொடர்பான ஆரோக்கிய விஷயங்களுக்கு (fertility, health checks, கர்ப்பம் திட்டமிடல்,
                    dosham தொடர்பான உடல்நல பிரச்சனைகள்) மருத்துவரின் ஆலோசனை கட்டாயம் பெறவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. மூன்றாம் தரப்பு உள்ளடக்கம்</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4.1 External Links</h3>
                <p>
                    எங்கள் தளத்தில் மூன்றாம் தரப்பு websites-க்கான links இருக்கலாம்
                    (vendors, venues, photographers, etc.):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>எங்கள் கட்டுப்பாட்டில் இல்லை:</strong> அந்த sites-ன் உள்ளடக்கத்திற்கு நாங்கள் பொறுப்பல்ல</li>
                    <li><strong>Endorsement அல்ல:</strong> link இருப்பது என்பது நாங்கள் அந்த service-ஐ recommend செய்கிறோம் என அர்த்தம் இல்லை</li>
                    <li><strong>சொந்த ஆராய்ச்சி:</strong> external services பயன்படுத்தும் முன் உங்கள் சொந்த due diligence செய்யுங்கள்</li>
                    <li><strong>தனியுரிமை:</strong> மூன்றாம் தரப்பு sites-ன் privacy policies உங்கள் பொறுப்பு</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4.2 விளம்பரங்கள் (Advertisements)</h3>
                <p>
                    எங்கள் தளம் Google AdSense மூலம் விளம்பரங்களை காட்டுகிறது:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Automated Ads:</strong> விளம்பரங்கள் Google-ன் algorithm மூலம் automated-ஆக காட்டப்படுகின்றன</li>
                    <li><strong>நாங்கள் தேர்ந்தெடுப்பதில்லை:</strong> எந்த விளம்பரங்கள் காட்டப்படும் என்பதை நாங்கள் கட்டுப்படுத்துவதில்லை</li>
                    <li><strong>பொறுப்பு இல்லை:</strong> விளம்பரங்களில் உள்ள தயாரிப்புகள்/சேவைகளுக்கு நாங்கள் பொறுப்பல்ல</li>
                    <li><strong>வாங்குபவர் எச்சரிக்கை:</strong> விளம்பரதாரர்களின் தயாரிப்புகளை வாங்கும் முன் ஆராய்ச்சி செய்யுங்கள்</li>
                </ul>

                <div className="bg-orange-50 p-5 rounded-xl border border-orange-200 my-4">
                    <h4 className="font-bold text-orange-900 mb-2">📢 விளம்பர கொள்கை</h4>
                    <p className="text-sm text-orange-800 mb-0">
                        விளம்பரங்கள் தளத்தை இயக்க உதவுகின்றன, உங்களுக்கு இலவச சேவைகளை வழங்க
                        அனுமதிக்கின்றன. ஆனால் விளம்பர clicks அல்லது purchases மூலம் ஏதேனும் சிக்கல்
                        ஏற்பட்டால் நாங்கள் பொறுப்பேற்க மாட்டோம். Phishing, scam விளம்பரங்கள் கண்டால்
                        எங்களுக்கு அறிவிக்கவும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. பயனர் உருவாக்கும் உள்ளடக்கம்</h2>

                <p>
                    எதிர்காலத்தில் நாங்கள் comments, reviews, அல்லது forum features சேர்த்தால்,
                    பயனர்கள் பதிவிடும் உள்ளடக்கத்திற்கு அந்த பயனர்களே பொறுப்பு. நாங்கள் அவற்றை
                    moderate செய்ய முயற்சிப்போம், ஆனால் அனைத்து பயனர் comments-ன் துல்லியம் அல்லது
                    சட்டபூர்வத்தன்மைக்கு உத்தரவாதம் அளிக்க முடியாது.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. கலாச்சார & பாரம்பரிய தகவல்கள்</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">6.1 பாரம்பரிய நம்பிக்கைகள்</h3>
                <p>
                    எங்கள் கட்டுரைகளில் தமிழ் திருமண பாரம்பரியம், சடங்குகள், மற்றும் நம்பிக்கைகள்
                    பற்றி விரிவாக விளக்கப்படுகிறது:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>பல்வேறு கருத்துக்கள்:</strong> வெவ்வேறு குடும்பங்கள்/பகுதிகளில் வெவ்வேறு வழக்கங்கள் இருக்கலாம்</li>
                    <li><strong>மாறிவரும் பாரம்பரியம்:</strong> சில பழக்கவழக்கங்கள் காலத்துடன் மாறுகின்றன</li>
                    <li><strong>நவீன தழுவல்:</strong> பாரம்பரியத்தை நவீன சூழலுக்கு ஏற்ப மாற்றலாம்</li>
                    <li><strong>பெரியவர் ஆலோசனை:</strong> உங்கள் குடும்ப பெரியவர்களின் வழிகாட்டுதலே முக்கியம்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">6.2 ஜோதிட தகவல்கள்</h3>
                <p>
                    நட்சத்திரம், ராசி, porutham, dosham பற்றிய எங்கள் தகவல்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>பொதுவான ஜோதிட கொள்கைகளை அடிப்படையாக கொண்டவை</li>
                    <li>வெவ்வேறு ஜோதிட முறைகள் (Thirukanitha Panchangam, Vakya Panchangam) இருக்கலாம்</li>
                    <li>ஜோதிடத்தின் மீதான நம்பிக்கை தனிப்பட்ட தேர்வு</li>
                    <li>அறிவியல் நிரூபணம் இல்லாத விஷயங்கள் என்பதை புரிந்துகொள்ளவும்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. தொழில்நுட்ப பிரச்சனைகள்</h2>

                <p>
                    எங்கள் தளம் மற்றும் கருவிகள் தொழில்நுட்ப சிக்கல்களுக்கு உட்பட்டவை:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Server Downtime:</strong> சேவையகம் தற்காலிகமாக செயலிழக்கலாம்</li>
                    <li><strong>Browser Issues:</strong> சில browsers-ல் சரியாக வேலை செய்யாமல் போகலாம்</li>
                    <li><strong>Calculation Errors:</strong> Software bugs காரணமாக தவறான முடிவுகள் வரலாம்</li>
                    <li><strong>Data Loss:</strong> உங்கள் calculator inputs save ஆகாமல் போகலாம் (நாங்கள் save செய்வதில்லை)</li>
                </ul>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 my-4">
                    <h4 className="font-bold text-gray-900 mb-2">🔧 தொழில்நுட்ப பிரச்சனை கண்டால்</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mb-0">
                        <li>• பக்கத்தை refresh செய்து மீண்டும் முயற்சிக்கவும்</li>
                        <li>• வேறொரு browser அல்லது device-ல் try செய்யவும்</li>
                        <li>• சிக்கல் தொடர்ந்தால் எங்களுக்கு தெரிவிக்கவும்</li>
                        <li>• முக்கியமான data-வை screen capture எடுத்து வைத்துக்கொள்ளுங்கள்</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. பொறுப்பு வரம்புகள்</h2>

                <p>
                    சட்டத்தால் அனுமதிக்கப்படும் அளவிற்கு, Kalyanaveedu.in மற்றும் அதன் உருவாக்கியவர்கள்,
                    contributors, partners பின்வருவனவற்றிற்கு பொறுப்பேற்க மாட்டார்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>நிதி இழப்புகள்:</strong> எங்கள் budget calculator அல்லது advice-ஐ பின்பற்றியதால் ஏற்படும் செலவுகள்</li>
                    <li><strong>தவறான முடிவுகள்:</strong> calculator தரும் தவறான முடிவுகளால் ஏற்படும் பிரச்சனைகள்</li>
                    <li><strong>திருமண தோல்விகள்:</strong> エங்கள் advice-ஐ பின்பற்றியது திருமணம் தோல்வியடைந்தாலோ அல்லது ஒத்துவராவிட்டாலோ</li>
                    <li><strong>மூன்றாம் தரப்பு சிக்கல்கள்:</strong> விளம்பரங்கள் அல்லது external links மூலம் ஏற்படும் பிரச்சனைகள்</li>
                    <li><strong>Data loss:</strong> தொழில்நுட்ப சிக்கல்களால் உங்கள் தகவல்கள் இழப்பு</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. மாற்றங்கள் மற்றும் புதுப்பிப்புகள்</h2>

                <p>
                    இந்த Disclaimer-ஐ நாங்கள் எப்போது வேண்டுமானாலும் மாற்றலாம். முக்கியமான மாற்றங்கள்
                    இந்த பக்கத்தில் அறிவிக்கப்படும். "கடைசியாக புதுப்பிக்கப்பட்டது" தேதியை சரிபார்க்கவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. தொடர்பு & பின்னூட்டம்</h2>

                <p>
                    இந்த Disclaimer பற்றி கேள்விகள் அல்லது எங்கள் தளத்தில் ஏதேனும் தவறுகள்
                    கண்டால், தயவுசெய்து எங்களை தொடர்பு கொள்ளுங்கள்:
                </p>

                <div className="bg-gray-50 p-6 rounded-xl my-6">
                    <ul className="space-y-2 text-sm mb-0">
                        <li><strong>மின்னஞ்சல்:</strong> <a href="mailto:myutilitybox.helpdesk@gmail.com" className="text-primary hover:underline">myutilitybox.helpdesk@gmail.com</a></li>
                        <li><strong>தொடர்பு படிவம்:</strong> <Link href="/contact" className="text-primary hover:underline">kalyanaveedu.in/contact</Link></li>
                        <li><strong>இணையதளம்:</strong> <a href="https://www.kalyanaveedu.in" className="text-primary hover:underline">www.kalyanaveedu.in</a></li>
                        <li><strong>நிறுவனர்:</strong> Chithrai Selvan (<a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">selvan.dev</a>)</li>
                    </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200 mt-12">
                    <h3 className="text-lg font-bold text-green-900 mb-3">✅ சுருக்கம் (Summary)</h3>
                    <p className="text-sm text-green-800 mb-3">
                        Kalyanaveedu.in தளம் உங்கள் திருமண திட்டமிடலுக்கு உதவும் ஒரு வழிகாட்டி.
                        ஆனால் எங்கள் தகவல்கள் தொழில்முறை ஆலோசனையை மாற்றாது என்பதை புரிந்துகொள்ளுங்கள்:
                    </p>
                    <ul className="text-sm text-green-800 space-y-2 mb-0">
                        <li>📊 <strong>Budget Calculator:</strong> கணிப்பு மட்டும், உத்தரவாதம் இல்லை - vendors-ஐ நேரடி quotes-க்கு அணுகவும்</li>
                        <li>🗓️ <strong>Date Calculator:</strong> அடிப்படை கருவி - உங்கள் ஜோதிடரை கலந்தாலோசியுங்கள்</li>
                        <li>⚖️ <strong>Legal Info:</strong> பொதுவான தகவல் - சட்ட விவகாரங்களுக்கு வழக்கறிஞரை அணுகவும்</li>
                        <li>📝 <strong>கட்டுரைகள்:</strong> வழிகாட்டுதல் - நிபுணர் ஆலோசனையை இடமாற்றாது</li>
                    </ul>
                </div>

                <p className="text-center text-sm text-gray-500 mt-8">
                    இந்த ஆவணம் கடைசியாக <strong>பிப்ரவரி 10, 2026</strong> அன்று புதுப்பிக்கப்பட்டது.
                    மேலும் விவரங்களுக்கு எங்கள்{' '}
                    <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
                    {' '}மற்றும்{' '}
                    <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                    {' '}பார்க்கவும்.
                </p>
            </div>
        </div>
    );
}
