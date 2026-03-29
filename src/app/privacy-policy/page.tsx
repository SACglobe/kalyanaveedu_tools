import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'தனியுரிமை கொள்கை | Privacy Policy - Kalyana Veedu',
    description: 'கல்யாண வீடு தனியுரிமை கொள்கை. உங்கள் தகவல்கள் எவ்வாறு சேகரிக்கப்படுகின்றன, பயன்படுத்தப்படுகின்றன மற்றும் பாதுகாக்கப்படுகின்றன என்பதை அறிந்து கொள்ளுங்கள்.',
    alternates: {
        canonical: '/privacy-policy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">தனியுரிமை கொள்கை (Privacy Policy)</h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-sm text-gray-500">
                    <strong>கடைசியாக புதுப்பிக்கப்பட்டது:</strong> பிப்ரவரி 10, 2026
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <p className="text-gray-800 font-medium">
                        "கல்யாண வீடு" (kalyanaveedu.in) உங்கள் தனியுரிமையை மதிக்கிறது மற்றும் பாதுகாக்கிறது.
                        இந்த தனியுரிமை கொள்கை, நீங்கள் எங்கள் இணையதளத்தைப் பயன்படுத்தும் போது
                        உங்கள் தகவல்கள் எவ்வாறு சேகரிக்கப்படுகின்றன, பயன்படுத்தப்படுகின்றன,
                        பகிரப்படுகின்றன மற்றும் பாதுகாக்கப்படுகின்றன என்பதை விரிவாக விளக்குகிறது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">1. நாங்கள் சேகரிக்கும் தகவல்கள்</h2>

                <h3 className="text-xl font-bold text-gray-800">1.1. நீங்கள் வழங்கும் தகவல்கள்</h3>
                <p>
                    எங்கள் தளத்தில் உள்ள கருவிகளை (வயது கணிப்பான், பட்ஜெட் பிளானர், சுப முகூர்த்த காலண்டர்)
                    பயன்படுத்தும் போது நீங்கள் உள்ளிடும் தகவல்கள்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>தனிப்பட்ட தகவல்கள்:</strong> பெயர், பிறந்த தேதி, மின்னஞ்சல் முகவரி (தொடர்பு படிவம் மூலம்)</li>
                    <li><strong>கருவி பயன்பாட்டு தகவல்கள்:</strong> பட்ஜெட் தொகை, திருமண தேதி, விருப்பத்தேர்வுகள்</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
                    <p className="font-bold mb-2">🔒 முக்கிய அறிவிப்பு:</p>
                    <p className="text-sm">
                        எங்கள் கருவிகளில் (வயது கணிப்பான், பட்ஜெட் பிளானர்) நீங்கள் உள்ளிடும் தகவல்கள்
                        <strong className="text-green-800"> உங்கள் பிரவுசரில் (Local Storage) மட்டுமே சேமிக்கப்படும்</strong>.
                        இவை எங்கள் server-க்கு அனுப்பப்படுவதில்லை அல்லது சேமிக்கப்படுவதில்லை.
                        நீங்கள் browser cache clear செய்தால், இந்த தகவல்கள் நீக்கப்படும்.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800">1.2. தானாக சேகரிக்கப்படும் தகவல்கள்</h3>
                <p>
                    நீங்கள் எங்கள் இணையதளத்தை பார்வையிடும்போது, பின்வரும் தகவல்கள் தானாகவே சேகரிக்கப்படலாம்:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>பயன்பாட்டு தரவு (Analytics):</strong> பார்வையிட்ட பக்கங்கள், செலவிட்ட நேரம், சொடுக்குகள், பிரவுசர் வகை</li>
                    <li><strong>சாதன தகவல்கள்:</strong> IP முகவரி, operating system, சாதன வகை (mobile/desktop)</li>
                    <li><strong>குக்கீ தகவல்கள்:</strong> session குக்கீகள், விருப்பத்தேர்வுகள், cookie consent status</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">2. குக்கீகள் (Cookies) மற்றும் ட்ராக்கிங் தொழில்நுட்பங்கள்</h2>

                <p>
                    எங்கள் இணையதளம் சிறப்பாக செயல்படவும், பயனர் அனுபவத்தை மேம்படுத்தவும்,
                    பயன்பாட்டு புள்ளிவிவரங்களை சேகரிக்கவும் குக்கீகளைப் பயன்படுத்துகிறோம்.
                </p>

                <h3 className="text-xl font-bold text-gray-800">2.1. நாங்கள் பயன்படுத்தும் குக்கீ வகைகள்:</h3>
                <div className="space-y-3 my-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-bold">அவசியமான குக்கீகள் (Essential Cookies)</p>
                        <p className="text-sm">இணையதளம் சரியாக இயங்க தேவையான குக்கீகள். உதாரணம்: cookie consent status, session management</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-bold">Analytics குக்கீகள் (Google Analytics)</p>
                        <p className="text-sm">பயனர்கள் எங்கள் இணையதளத்தை எவ்வாறு பயன்படுத்துகிறார்கள் என்பதை புரிந்துகொள்ள பயன்படுகிறது. இது தளத்தை மேம்படுத்த உதவுகிறது.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-bold">விளம்பர குக்கீகள் (Advertising Cookies)</p>
                        <p className="text-sm">உங்களுக்கு பொருத்தமான விளம்பரங்களை காட்ட மூன்றாம் தரப்பினர் (Google AdSense) பயன்படுத்தலாம்.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">3. மூன்றாம் தரப்பு சேவைகள் & விளம்பரங்கள்</h2>

                <h3 className="text-xl font-bold text-gray-800">3.1. Google AdSense</h3>
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-4">
                    <p className="font-bold mb-3 text-yellow-900">🔔 விளம்பர வெளிப்படைத்தன்மை அறிவிப்பு:</p>
                    <p className="mb-3">
                        எங்கள் இணையதளத்தில் <strong>Google AdSense</strong> மூலம் விளம்பரங்கள் காட்டப்படுகின்றன.
                        Google மற்றும் அதன் கூட்டாளர்கள் பின்வரும் தொழில்நுட்பங்களைப் பயன்படுத்துகிறார்கள்:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li><strong>குக்கீகள்:</strong> உங்கள் ஆர்வங்கள் மற்றும் வலைத்தள பார்வை வரலாற்றின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட விளம்பரங்களை காண்பிக்க</li>
                        <li><strong>DoubleClick DART குக்கீ:</strong> Google இன் விளம்பர network முழுவதும் உங்கள் செயல்பாடுகளை கண்காணிக்க</li>
                        <li><strong>Web Beacons:</strong> விளம்பர பயன்பாட்டை அளவிட</li>
                    </ul>
                    <p className="mt-4 text-sm">
                        <strong>முக்கியம்:</strong> Google மற்றும் அதன் கூட்டாளர்கள் எவ்வாறு தரவைப் பயன்படுத்துகிறார்கள் என்பதை அறிய:
                        <br />
                        <a href="https://www.google.com/policies/technologies/partner-sites"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-bold">
                            https://www.google.com/policies/technologies/partner-sites
                        </a>
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-4">
                    <h4 className="font-bold text-gray-900 mb-3">Google AdSense & குக்கீகள்</h4>
                    <p className="mb-3">
                        இந்த இணையதளம் Google AdSense விளம்பர சேவையைப் பயன்படுத்துகிறது.
                        Google AdSense, விளம்பரங்களை வழங்குவதற்காக குக்கீகளைப் பயன்படுத்துகிறது.
                        Google AdSense-இன் தனியுரிமைக் கொள்கையை இங்கே படிக்கலாம்:
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            https://policies.google.com/privacy
                        </a>
                    </p>
                    <p className="mb-3">
                        விளம்பர விருப்பங்களை மாற்ற:
                        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            https://adssettings.google.com
                        </a>
                    </p>
                    <p>
                        குக்கீகள் பற்றிய கூடுதல் தகவல்களுக்கு எங்கள் குக்கீ கொள்கையை படிக்கவும்:
                        <Link href="/cookie-policy" className="text-primary font-bold hover:underline ml-1">
                            குக்கீ கொள்கை
                        </Link>
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800">3.2. தனிப்பயனாக்கப்பட்ட விளம்பரங்களை முடக்குதல்</h3>
                <p>நீங்கள் தனிப்பயனாக்கப்பட்ட விளம்பரங்களை விரும்பவில்லை என்றால்:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Google Ad Settings-ல் உங்கள் விருப்பங்களை மாற்றவும்:
                        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            www.google.com/settings/ads
                        </a>
                    </li>
                    <li>உங்கள் பிரவுசர் settings-ல் third-party குக்கீகளை முடக்கவும்</li>
                    <li>NAI (Network Advertising Initiative) opt-out tool பயன்படுத்தவும்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6">3.3. Google Analytics</h3>
                <p>
                    எங்கள் இணையதள பயன்பாட்டை புரிந்துகொள்ளவும் மேம்படுத்தவும் Google Analytics பயன்படுத்துகிறோம்.
                    இது IP முகவரி, பார்வையிட்ட பக்கங்கள், பிரவுசர் வகை போன்ற தகவல்களை சேகரிக்கிறது.
                    Google Analytics-ஐ opt-out செய்ய:
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        Google Analytics Opt-out Browser Add-on
                    </a>
                    பதிவிறக்கவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">4. தகவல்களின் பயன்பாடு</h2>
                <p>சேகரிக்கப்பட்ட தகவல்களை நாங்கள் பின்வரும் நோக்கங்களுக்காக பயன்படுத்துகிறோம்:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>இணையதளத்தின் செயல்பாட்டை வழங்கவும் மேம்படுத்தவும்</li>
                    <li>பயனர் அனுபவத்தை தனிப்பயனாக்கவும் மேம்படுத்தவும்</li>
                    <li>இணையதள பயன்பாட்டு புள்ளிவிவரங்களை பகுப்பாய்வு செய்ய</li>
                    <li>விளம்பரங்களை காண்பிக்கவும் அளவிடவும்</li>
                    <li>உங்கள் கேள்விகளுக்கு பதிலளிக்க (தொடர்பு படிவம் மூலம்)</li>
                    <li>மோசடி மற்றும் பாதுகாப்பு அச்சுறுத்தல்களை தடுக்க</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">5. தரவு பாதுகாப்பு</h2>
                <p>
                    உங்கள் தனிப்பட்ட தகவல்களை பாதுகாக்க நாங்கள் நியாயமான தொழில்நுட்ப மற்றும்
                    நிர்வாக நடவடிக்கைகளை எடுக்கிறோம். இருப்பினும், இணையம் மூலம் அனுப்பப்படும்
                    எந்த தகவலும் 100% பாதுகாப்பானது என்று உத்தரவாதம் அளிக்க முடியாது.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">6. தரவு சேமிப்பு காலம்</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Local Storage தகவல்கள்:</strong> நீங்கள் browser cache clear செய்யும் வரை</li>
                    <li><strong>Analytics தரவு:</strong> Google Analytics கொள்கைப்படி (பொதுவாக 26 மாதங்கள்)</li>
                    <li><strong>குக்கீகள்:</strong> குக்கீ வகையைப் பொறுத்து (session முதல் 2 ஆண்டுகள் வரை)</li>
                    <li><strong>தொடர்பு படிவ தகவல்கள்:</strong> பதிலளித்தபின் 30 நாட்கள்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">7. உங்கள் உரிமைகள் (GDPR & இந்திய சட்டங்கள்)</h2>
                <p>தனியுரிமை சட்டங்களின் கீழ், உங்களுக்கு பின்வரும் உரிமைகள் உள்ளன:</p>
                <div className="bg-indigo-50 p-6 rounded-xl my-4">
                    <ul className="space-y-3">
                        <li><strong>அணுகும் உரிமை:</strong> நாங்கள் சேகரித்துள்ள உங்கள் தகவல்களை கண்டறிய</li>
                        <li><strong>திருத்தும் உரிமை:</strong> தவறான தகவல்களை சரி செய்ய கோர</li>
                        <li><strong>நீக்கும் உரிமை:</strong> உங்கள் தகவல்களை நீக்க கோர ("மறக்கப்படும் உரிமை")</li>
                        <li><strong>எதிர்ப்பு தெரிவிக்கும் உரிமை:</strong> குறிப்பிட்ட தரவு செயலாக்கத்திற்கு எதிர்ப்பு தெரிவிக்க</li>
                        <li><strong>தரவு போர்ட்டபிலிட்டி:</strong> உங்கள் தகவல்களை பெற்று மாற்ற</li>
                        <li><strong>ஒப்புதல் விலக்கல்:</strong> முன்பு தந்த ஒப்புதலை எப்போது வேண்டுமானாலும் திரும்பப் பெற</li>
                    </ul>
                </div>
                <p>
                    இந்த உரிமைகளை பயன்படுத்த, எங்களை தொடர்பு கொள்ளுங்கள்:
                    <a href="mailto:myutilitybox.helpdesk@gmail.com" className="text-primary hover:underline ml-1">
                        myutilitybox.helpdesk@gmail.com
                    </a>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">8. குழந்தைகளின் தனியுரிமை</h2>
                <p>
                    எங்கள் இணையதளம் 18 வயதிற்கு குறைவானவர்களை இலக்காகக் கொண்டதல்ல.
                    நாங்கள் தெரிந்து 18 வயதிற்குக் குறைவானவர்களிடமிருந்து தனிப்பட்ட தகவல்களை
                    சேகரிப்பதில்லை. நீங்கள் பெற்றோர் அல்லது பாதுகாவலர் என்றால், உங்கள் குழந்தை
                    எங்களுக்கு தனிப்பட்ட தகவலை வழங்கியதாக நம்பினால், எங்களை தொடர்பு கொள்ளவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">9. மூன்றாம் தரப்பு இணைப்புகள்</h2>
                <p>
                    எங்கள் இணையதளத்தில் மூன்றாம் தரப்பு இணையதளங்களுக்கான இணைப்புகள் இருக்கலாம்.
                    இந்த வெளிப்புற தளங்களின் தனியுரிமை நடைமுறைகளுக்கு நாங்கள் பொறுப்பல்ல.
                    இணைப்புகளைக் கிளிக் செய்யும் போது எச்சரிக்கையாக இருங்கள் மற்றும் அந்த
                    தளங்களின் தனியுரிமை கொள்கைகளை படிக்கவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">10. கொள்கை புதுப்பிப்புகள்</h2>
                <p>
                    இந்த தனியுரிமை கொள்கையை காலத்திற்கு ஏற்ப நாங்கள் புதுப்பிக்கலாம்.
                    எந்த மாற்றங்களையும் இந்த பக்கத்தில் போஸ்ட் செய்வோம் மற்றும்
                    "கடைசியாக புதுப்பிக்கப்பட்டது" தேதியை மாற்றுவோம். குறிப்பிடத்தக்க
                    மாற்றங்கள் இருந்தால், முகப்பு பக்கத்தில் தெரிவிப்போம்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">11. எங்களை தொடர்பு கொள்ள</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="mb-4">
                        இந்த தனியுரிமை கொள்கை அல்லது உங்கள் தனிப்பட்ட தகவல்கள் குறித்து கேள்விகள்,
                        கவலைகள் அல்லது கோரிக்கைகள் இருந்தால், தயவுசெய்து எங்களை தொடர்பு கொள்ளவும்:
                    </p>
                    <div className="space-y-2 text-sm">
                        <p><strong>📧 Email:</strong>
                            <a href="mailto:myutilitybox.helpdesk@gmail.com" className="text-primary hover:underline ml-1">
                                myutilitybox.helpdesk@gmail.com
                            </a>
                        </p>
                        <p><strong>🌐 Website:</strong>
                            <a href="https://www.kalyanaveedu.in" className="text-primary hover:underline ml-1">
                                www.kalyanaveedu.in
                            </a>
                        </p>
                        <p><strong>📍 Location:</strong> Chennai, Tamil Nadu, India</p>
                        <p><strong>⏰ Response Time:</strong> 2 வேலை நாட்களுக்குள் பதிலளிப்போம்</p>
                    </div>
                    <Link href="/contact" className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition">
                        தொடர்பு படிவத்தை பூர்த்தி செய்யுங்கள் →
                    </Link>
                </div>

                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 mt-8 text-sm">
                    <p className="font-bold mb-2">சுருக்கம்:</p>
                    <p>
                        உங்கள் தனியுரிமை எங்களுக்கு மிக முக்கியம். உங்கள் கருவி உள்ளீடுகள் உங்கள்
                        பிரவுசரில் மட்டுமே சேமிக்கப்படும். நாங்கள் Google Analytics மற்றும் AdSense
                        பயன்படுத்துகிறோம், இதற்கு Google-ன் தனியுரிமை கொள்கைகள் பொருந்தும்.
                        உங்களுக்கு எந்த கேள்விகளும் இருந்தால், தயவுசெய்து தொடர்பு கொள்ளுங்கள்.
                    </p>
                </div>
            </div>
        </div>
    );
}
