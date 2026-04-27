import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'குக்கீ கொள்கை | கல்யாண வீடு',
    description: 'kalyanaveedu.com குக்கீ கொள்கை',
    alternates: {
        canonical: '/cookie-policy',
    },
};

export default function CookiePolicyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    குக்கீ கொள்கை
                </h1>
                <p className="text-sm text-gray-500">
                    <strong>நடைமுறைக்கு வந்த தேதி:</strong> பிப்ரவரி 2026
                </p>
                <div className="w-20 h-1 bg-primary rounded-full mt-4"></div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 leading-relaxed">

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">குக்கீகள் என்றால் என்ன</h2>
                    <p className="text-gray-700 leading-relaxed">
                        குக்கீகள் (Cookies) என்பது நீங்கள் ஒரு இணையதளத்தை பார்வையிடும்போது உங்கள்
                        கணினி அல்லது மொபைலில் சேமிக்கப்படும் சிறிய தகவல் கோப்புகள். இந்த கோப்புகள்
                        இணையதளம் உங்கள் விருப்பங்களை நினைவில் வைத்துக்கொள்ள மற்றும் பயன்பாட்டு
                        அனுபவத்தை மேம்படுத்த உதவுகின்றன.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        kalyanaveedu.com பயன்படுத்தும் குக்கீகள்
                    </h2>

                    <div className="space-y-6">
                        {/* Session Cookies */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                1. அமர்வு குக்கீகள் (Session Cookies)
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                நீங்கள் இணையதளத்தை பார்வையிடும் அமர்வின்போது மட்டும் செயல்படும்
                                தற்காலிக குக்கீகள். உலாவியை மூடும்போது இவை தானாக நீக்கப்படும்.
                            </p>
                        </div>

                        {/* Google Analytics */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                2. Google Analytics குக்கீகள்
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                kalyanaveedu.com, Google Analytics சேவையைப் பயன்படுத்துகிறது. இந்த சேவை
                                எத்தனை பேர் இணையதளத்தை பார்வையிடுகிறார்கள், எந்த பக்கங்களை அதிகம்
                                படிக்கிறார்கள் என்ற பொதுவான தகவல்களை சேகரிக்கிறது. இந்த தகவல்கள்
                                தனிப்பட்ட அடையாளங்களை வெளிப்படுத்துவதில்லை.
                            </p>
                            <p className="text-sm text-gray-600">
                                மேலும் அறிய:{' '}
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    https://policies.google.com/privacy
                                </a>
                            </p>
                        </div>

                        {/* Google AdSense */}
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                3. Google AdSense குக்கீகள்
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                kalyanaveedu.com, Google AdSense விளம்பர சேவையைப் பயன்படுத்துகிறது.
                                Google AdSense, வாசகர்களின் ஆர்வங்களுக்கு தகுந்த விளம்பரங்களை காட்டுவதற்காக
                                குக்கீகளைப் பயன்படுத்துகிறது.
                            </p>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p>
                                    மேலும் அறிய:{' '}
                                    <a
                                        href="https://policies.google.com/technologies/ads"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        https://policies.google.com/technologies/ads
                                    </a>
                                </p>
                                <p>
                                    விளம்பர குக்கீகளை நிறுத்த:{' '}
                                    <a
                                        href="https://adssettings.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        https://adssettings.google.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        குக்கீகளை எப்படி கட்டுப்படுத்துவது
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        உங்கள் உலாவி அமைப்புகள் மூலம் குக்கீகளை நிராகரிக்கலாம் அல்லது நீக்கலாம்:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-primary shrink-0">Chrome:</span>
                                <span>Settings → Privacy and Security → Cookies</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-primary shrink-0">Firefox:</span>
                                <span>Settings → Privacy and Security → Cookies and Site Data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-primary shrink-0">Safari:</span>
                                <span>Preferences → Privacy → Cookies</span>
                            </li>
                        </ul>
                        <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <p className="text-sm text-gray-700">
                                <strong>குறிப்பு:</strong> குக்கீகளை முழுவதும் நிறுத்தினால், சில இணையதள
                                செயல்பாடுகள் சரியாக வேலை செய்யாமல் போகலாம்.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        இந்தக் கொள்கை மாறலாம்
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        இந்த குக்கீ கொள்கை அவ்வப்போது புதுப்பிக்கப்படலாம். மாற்றங்கள் இருந்தால்
                        இந்த பக்கத்தில் புதுப்பிக்கப்பட்ட தேதியுடன் வெளியிடப்படும்.
                    </p>
                </section>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <p className="text-gray-700 mb-4">
                        கூடுதல் கேள்விகளுக்கு எங்களை தொடர்பு கொள்ளவும்:
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                    >
                        தொடர்பு பக்கம் →
                    </Link>
                </div>

            </div>
        </div>
    );
}
