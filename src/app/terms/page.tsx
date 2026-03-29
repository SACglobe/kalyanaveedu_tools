import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'விதிமுறைகள் மற்றும் நிபந்தனைகள் | Terms of Service - Kalyanaveedu.in',
    description: 'கல்யாண வீடு தளத்தின் பயன்பாட்டு விதிமுறைகள், பொறுப்புகள், அறிவுசார் சொத்துரிமை, தனியுரிமை மற்றும் விளம்பர கொள்கைகள்.',
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    விதிமுறைகள் மற்றும் நிபந்தனைகள்
                </h1>
                <p className="text-lg text-gray-600">
                    கடைசியாக புதுப்பிக்கப்பட்டது: பிப்ரவரி 10, 2026
                </p>
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-900 mb-0">
                        <strong>முக்கிய குறிப்பு:</strong> kalyanaveedu.in இணையதளத்தை அணுகுவதன் மூலமோ அல்லது
                        பயன்படுத்துவதன் மூலமோ, இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளை நீங்கள் முற்றிலும்
                        ஏற்றுக்கொண்டதாக கருதப்படும். இந்த விதிமுறைகளை ஏற்க விரும்பாவிட்டால், தயவுசெய்து
                        எங்கள் சேவைகளை பயன்படுத்த வேண்டாம்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. பயன்பாட்டு விதிமுறைகள்</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1.1 சேவை நோக்கம்</h3>
                <p>
                    Kalyanaveedu.in என்பது தமிழ் திருமண திட்டமிடல் மற்றும் தகவல் வழங்கும் இணையதளம்.
                    நாங்கள் வழங்கும் சேவைகள்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>திருமண பட்ஜெட் கணிப்பான் (Budget Calculator)</li>
                    <li>திருமண தேதி கணிப்பான் (Wedding Date Calculator)</li>
                    <li>திருமண வயது தகுதி சரிபார்ப்பு (Legal Age Checker)</li>
                    <li>தமிழ் திருமண கட்டுரைகள் மற்றும் வழிகாட்டிகள்</li>
                    <li>திருமண சடங்குகள் மற்றும் கலாச்சார தகவல்கள்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1.2 பயனர் தகுதி</h3>
                <p>
                    இந்த இணையதளத்தை பயன்படுத்த, நீங்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>குறைந்தது 18 வயதை நிரம்பியவராக இருக்க வேண்டும்</li>
                    <li>இந்தியாவிலோ அல்லது வெளிநாட்டிலோ இருந்தும் அணுகலாம்</li>
                    <li>இந்த விதிமுறைகளை முற்றிலும் பின்பற்ற ஒப்புக்கொள்ள வேண்டும்</li>
                    <li>உண்மையான மற்றும் துல்லியமான தகவல்களை வழங்க வேண்டும்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1.3 தடைசெய்யப்பட்ட பயன்பாடு</h3>
                <p>
                    பின்வரும் செயல்களில் ஈடுபட உங்களுக்கு அனுமதி இல்லை:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>தளத்தின் செயல்பாட்டை தடை செய்யும் செயல்கள்</li>
                    <li>தளத்தை hack செய்தல் அல்லது பாதுகாப்பை மீறுதல்</li>
                    <li>மற்ற பயனர்களின் தனிப்பட்ட தகவல்களை திருடுதல்</li>
                    <li>தவறான அல்லது ஏமாற்றும் தகவல்களை பதிவிடுதல்</li>
                    <li>தளத்தை வணிக நோக்கங்களுக்காக எங்கள் அனுமதியின்றி பயன்படுத்துதல்</li>
                    <li>Spam, malware, அல்லது வைரஸ்களை பரப்புதல்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. அறிவுசார் சொத்துரிமை (Intellectual Property)</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.1 உள்ளடக்க உரிமை</h3>
                <p>
                    Kalyanaveedu.in தளத்தில் உள்ள அனைத்து உள்ளடக்கங்களும் எங்களுக்கு சொந்தமானவை அல்லது
                    உரிமம் பெற்றவை. இதில் அடங்குபவை:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>கட்டுரைகள்:</strong> அனைத்து blog posts, வழிகாட்டிகள், மற்றும் எழுதப்பட்ட உள்ளடக்கம்</li>
                    <li><strong>கருவிகள்:</strong> Budget calculator, date calculator, age checker மற்றும் அதன் அல்காரிதம்கள்</li>
                    <li><strong>வடிவமைப்பு:</strong> Website design, layout, graphics, UI/UX elements</li>
                    <li><strong>நிரல்:</strong> அனைத்து source code, scripts, மற்றும் software</li>
                    <li><strong>லோகோ & பிராண்டிங்:</strong> Kalyanaveedu.in பெயர், logo, தளத்தின் அடையாளம்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.2 உள்ளடக்க பயன்பாட்டு அனுமதி</h3>
                <p>
                    தனிப்பட்ட, வணிகமற்ற பயன்பாட்டிற்கு மட்டும் உங்களுக்கு வரம்பு அனுமதி வழங்கப்படுகிறது.
                    நீங்கள் செய்யலாம்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>எங்கள் கட்டுரைகளை படித்து தனிப்பட்ட குறிப்புகள் எடுத்தல்</li>
                    <li>Social media-வில் எங்கள் கட்டுரைகளின் சுருக்கத்தை link-உடன் பகிர்தல்</li>
                    <li>எங்கள் calculators-ஐ தனிப்பட்ட திட்டமிடலுக்கு பயன்படுத்துதல்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.3 தடைசெய்யப்பட்ட செயல்கள்</h3>
                <p>
                    எங்கள் எழுத்துப்பூர்வ அனுமதியின்றி நீங்கள் செய்யக்கூடாதவை:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>எங்கள் கட்டுரைகளை முழுமையாக copy-paste செய்து வெளியிடுதல்</li>
                    <li>எங்கள் calculator logic அல்லது code-ஐ திருடி உங்கள் தளத்தில் பயன்படுத்துதல்</li>
                    <li>எங்கள் உள்ளடக்கத்தை மாற்றி உங்கள் பெயரில் வெளியிடுதல்</li>
                    <li>எங்கள் தளத்தை mirror செய்தல் அல்லது clone செய்தல்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. விளம்பரங்கள் (Advertising)</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3.1 Google AdSense</h3>
                <p>
                    Kalyanaveedu.in தளம் <strong>Google AdSense</strong> மூலம் விளம்பரங்களை காட்டுகிறது.
                    இது தளத்தை இயக்குவதற்கான செலவுகளை ஈடுகட்ட உதவுகிறது மற்றும் உங்களுக்கு இலவச
                    சேவைகளை வழங்க உதவுகிறது.
                </p>

                <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 my-4">
                    <p className="text-sm text-yellow-900">
                        <strong>⚠️ விளம்பர கொள்கை:</strong> விளம்பரங்களில் காட்டப்படும் தயாரிப்புகள்
                        அல்லது சேவைகளுக்கு நாங்கள் பொறுப்பல்ல. விளம்பரங்கள் Google-ன் automated system
                        மூலம் காட்டப்படுகின்றன. எந்த விளம்பரதாரரின் தயாரிப்பையும் வாங்குவதற்கு முன்
                        உங்கள் சொந்த ஆராய்ச்சி செய்யவும்.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3.2 மூன்றாம் தரப்பு இணைப்புகள்</h3>
                <p>
                    எங்கள் தளத்தில் மூன்றாம் தரப்பு websites-க்கான links இருக்கலாம் (Google, social media, etc.).
                    அந்த external sites-ன் உள்ளடக்கம் அல்லது தனியுரிமை கொள்கைகளுக்கு நாங்கள் பொறுப்பல்ல.
                    அவற்றை பயன்படுத்துவது உங்கள் சொந்த பொறுப்பு.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. தகவல் துல்லியம் மற்றும் பொறுப்புத் துறப்பு</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4.1 தகவல் உத்தரவாதம் இல்லை</h3>
                <p>
                    எங்கள் கட்டுரைகள் மற்றும் calculators மூலம் வழங்கப்படும் தகவல்கள் பொதுவான
                    வழிகாட்டுதலுக்காக மட்டுமே. இவை:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>சட்ட ஆலோசனை அல்ல:</strong> திருமண சட்ட விவகாரங்களுக்கு வழக்கறிஞரை அணுகவும்</li>
                    <li><strong>நிதி ஆலோசனை அல்ல:</strong> Budget calculator ஒரு கணிப்பு மட்டுமே, உத்தரவாதம் அல்ல</li>
                    <li><strong>ஜோதிட ஆலோசனை அல்ல:</strong> Date calculator அடிப்படை கருவி, முழு ஜோதிட பலன் இல்லை</li>
                    <li><strong>மருத்துவ ஆலோசனை அல்ல:</strong> ஆரோக்கிய தகவல்களுக்கு மருத்துவரை அணுகவும்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4.2 கணிப்புகள் & கருவிகள்</h3>
                <p>
                    எங்கள் calculators (budget, date, age) அடிப்படை கணிப்புகளை மட்டுமே வழங்குகின்றன.
                    இவை மாறக்கூடியவை மற்றும் உங்கள் தனிப்பட்ட சூழ்நிலையைப் பொறுத்து மாறலாம். முக்கியமான
                    முடிவுகளை எடுக்கும் முன் நிபுணர்களிடம் (ஜோதிடர், நிதி ஆலோசகர், event planner) ஆலோசனை பெறவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. பொறுப்பு வரம்புகள் (Limitation of Liability)</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">5.1 எங்கள் பொறுப்பு இல்லை</h3>
                <p>
                    சட்டத்தால் அனுமதிக்கப்படும் அளவிற்கு, பின்வருவனவற்றிற்கு Kalyanaveedu.in பொறுப்பேற்காது:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>நேரடி அல்லது மறைமுக இழப்புகள்:</strong> எங்கள் தளத்தை பயன்படுத்தியதால் ஏற்படும் எந்த நிதி இழப்பும்</li>
                    <li><strong>தொழில்நுட்ப பிரச்சனைகள்:</strong> Server down, data loss, software bugs போன்றவை</li>
                    <li><strong>தவறான கணிப்புகள்:</strong> Calculator முடிவுகள் துல்லியமாக இல்லாதது</li>
                    <li><strong>மூன்றாம் தரப்பு சேவைகள்:</strong> External links அல்லது விளம்பரங்களால் ஏற்படும் பிரச்சனைகள்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">5.2 உங்கள் பொறுப்பு</h3>
                <p>
                    எங்கள் தளத்தை பயன்படுத்தும் அனைத்து முடிவுகளுக்கும் நீங்களே முழு பொறுப்பு.
                    எங்கள் தகவல்களை அடிப்படையாக கொண்டு நீங்கள் எடுக்கும் எந்த திருமண திட்டமிடல்
                    முடிவுகளுக்கும் (venue booking, budget allocation, date selection) நீங்களே பொறுப்பு.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. தனியுரிமை மற்றும் தரவு</h2>

                <p>
                    உங்கள் தனிப்பட்ட தகவல்கள் மற்றும் எங்கள் தரவு சேகரிப்பு முறைகள் பற்றிய முழு விவரங்களுக்கு
                    எங்கள்{' '}
                    <Link href="/privacy-policy" className="text-primary hover:underline font-semibold">
                        தனியுரிமை கொள்கை (Privacy Policy)
                    </Link>
                    {' '}பக்கத்தை பார்க்கவும். தனியுரிமை கொள்கை இந்த Terms of Service-ன் ஒரு பகுதி.
                </p>

                <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 my-4">
                    <h4 className="font-bold text-purple-900 mb-2">🔒 தரவு பாதுகாப்பு</h4>
                    <ul className="text-sm text-purple-800 space-y-1 mb-0">
                        <li>• Calculator முடிவுகளை நாங்கள் சேமிப்பதில்லை</li>
                        <li>• Contact form தகவல்கள் மட்டும் email மூலம் அனுப்பப்படும்</li>
                        <li>• Google Analytics & AdSense cookies பயன்படுத்தப்படுகின்றன</li>
                        <li>• உங்கள் IP address மற்றும் browser data சேகரிக்கப்படலாம் (analytics)</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. மாற்றங்கள் & புதுப்பிப்புகள்</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">7.1 விதிமுறை மாற்றங்கள்</h3>
                <p>
                    எங்கள் விதிமுறைகளை நாங்கள் எப்போது வேண்டுமானாலும் மாற்றலாம். முக்கிய மாற்றங்கள்
                    இந்த பக்கத்தில் அறிவிக்கப்படும் மற்றும் "கடைசியாக புதுப்பிக்கப்பட்டது" தேதி
                    புதுப்பிக்கப்படும். மாற்றங்களுக்கு பிறகு தளத்தை தொடர்ந்து பயன்படுத்துவதன் மூலம்
                    புதிய விதிமுறைகளை ஏற்றுக்கொண்டதாக கருதப்படும்.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">7.2 சேவை மாற்றங்கள்</h3>
                <p>
                    நாங்கள் எப்போது வேண்டுமானாலும் எங்கள் சேவைகளை (calculators, கட்டுரைகள், features)
                    மாற்றலாம், புதுப்பிக்கலாம், அல்லது நிறுத்தலாம். இதற்கு முன் அறிவிப்பு தேவையில்லை.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. கணக்கு நிறுத்தம்</h2>

                <p>
                    பின்வரும் சூழல்களில் உங்கள் அணுகலை நாங்கள் நிறுத்தலாம்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>இந்த Terms of Service மீறல்</li>
                    <li>சட்டவிரோத செயல்களில் ஈடுபடுதல்</li>
                    <li>தளத்தை தவறாக பயன்படுத்துதல் (hacking, spamming, etc.)</li>
                    <li>மற்ற பயனர்களுக்கு தொல்லை கொடுத்தல்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. சட்டம் மற்றும் அதிகார எல்லை</h2>

                <p>
                    இந்த Terms of Service இந்திய சட்டங்களின் கீழ் வருகிறது. எந்த சட்ட சர்ச்சைகளும்
                    Chennai, Tamil Nadu நீதிமன்றங்களின் பிரத்யேக அதிகார எல்லைக்கு உட்பட்டது.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. தொடர்பு</h2>

                <p>
                    இந்த Terms of Service பற்றி ஏதேனும் கேள்விகள் இருந்தால், எங்களை தொடர்பு கொள்ளவும்:
                </p>

                <div className="bg-gray-50 p-6 rounded-xl my-6">
                    <ul className="space-y-2 text-sm mb-0">
                        <li><strong>இணையதளம்:</strong> <a href="https://www.kalyanaveedu.in" className="text-primary hover:underline">www.kalyanaveedu.in</a></li>
                        <li><strong>மின்னஞ்சல்:</strong> <a href="mailto:myutilitybox.helpdesk@gmail.com" className="text-primary hover:underline">myutilitybox.helpdesk@gmail.com</a></li>
                        <li><strong>தொடர்பு பக்கம்:</strong> <Link href="/contact" className="text-primary hover:underline">kalyanaveedu.in/contact</Link></li>
                        <li><strong>நிறுவனர்:</strong> Chithrai Selvan (<a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">selvan.dev</a>)</li>
                        <li><strong>இடம்:</strong> Chennai, Tamil Nadu, India</li>
                    </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-12">
                    <h3 className="text-lg font-bold text-orange-900 mb-3">📝 சுருக்கம் (Summary)</h3>
                    <p className="text-sm text-orange-800 mb-0">
                        இந்த Terms of Service எங்கள் தளத்தை பாதுகாப்பாகவும், நியாயமாகவும் பயன்படுத்த
                        உதவுகிறது. கருவிகள் மற்றும் தகவல்கள் வழிகாட்டுதலுக்கு மட்டுமே - நிபுணர்
                        ஆலோசனையை மாற்றாது. தளத்தை பொறுப்புடன் பயன்படுத்துங்கள், மற்றவர்களை மதியுங்கள்,
                        மற்றும் எங்கள் உள்ளடக்கத்தை திருடாதீர்கள். கேள்விகள் இருந்தால் எங்களை தொடர்பு கொள்ளுங்கள்!
                    </p>
                </div>

                <p className="text-center text-sm text-gray-500 mt-8">
                    இந்த ஆவணம் கடைசியாக <strong>பிப்ரவரி 10, 2026</strong> அன்று புதுப்பிக்கப்பட்டது.
                </p>
            </div>
        </div>
    );
}
