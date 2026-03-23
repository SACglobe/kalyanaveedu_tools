import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'எங்களை பற்றி | About Kalyana Veedu',
    description: 'கல்யாண வீடு - தமிழர்களின் நம்பகமான திருமண திட்டமிடல் தளம். எங்கள் நோக்கம், குழு மற்றும் சேவைகள் பற்றி அறிந்துகொள்ளுங்கள்.',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    எங்களை பற்றி (About Us)
                </h1>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 leading-relaxed">
                <p className="text-xl text-gray-800">
                    வணக்கம்! <strong>{SITE_CONFIG.name}</strong> தளத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம்.
                    இது தமிழ் குடும்பங்களின் திருமணத் திட்டமிடலை எளிமையாக்கும் ஒரு பிரத்யேக முயற்சியாகும்.
                    பாரம்பரிய தமிழ் திருமண கலாச்சாரத்தையும் நவீன தொழில்நுட்பத்தையும் இணைத்து, 
                    திருமண திட்டமிடலை அனைவருக்கும் எளிமையாக்குவதை நோக்கமாகக் கொண்டுள்ளோம்.
                </p>

                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">எங்கள் நோக்கம் (Our Mission)</h2>
                    <p className="font-semibold text-orange-900 mb-4 italic">
                        "தமிழ் திருமண பாரம்பரியங்களை டிஜிட்டல் யுகத்திற்கு கொண்டு வந்து,
                        ஒவ்வொரு தமிழ் குடும்பமும் எளிதாக, மன அழுத்தமில்லாமல், மகிழ்ச்சியுடன்
                        திருமணத்தை திட்டமிட உதவுவது."
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span><strong>கலாச்சார பாதுகாப்பு:</strong> நமது பாரம்பரிய திருமண முறைகளை அடுத்த தலைமுறைக்கு ஆவணப்படுத்துதல்.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span><strong>எளிமையான திட்டமிடல்:</strong> சிக்கலான கணக்கீடுகளை (வயது, பட்ஜெட்) எளிய கருவிகள் மூலம் தீர்த்தல்.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span><strong>நம்பகமான தகவல்:</strong> சான்றாதார கலாச்சார ஆவணங்களின் அடிப்படையில் ஆழமான விளக்கங்களை வழங்குதல்.</span>
                        </li>
                    </ul>
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">எங்கள் கதை (Our Story)</h2>
                    <p>
                        2024-ல், சென்னையில் திருமண திட்டமிடலின் சிக்கல்களை நேரடியாக சந்தித்த நண்பர்கள் குழுவால் 
                        இந்தத் தளம் உருவாக்கப்பட்டது. சுப முகூர்த்த தேதிகள், பட்ஜெட் திட்டமிடல், மற்றும் சடங்குகளின் 
                        அர்த்தங்கள் போன்றவற்றை தமிழில் எளிதாக அறிந்துகொள்ளும் வகையில் <strong>கல்யாண வீடு</strong> 
                        உருவாக்கப்பட்டது.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">எங்கள் குழு (Our Team)</h2>
                    <div className="grid md:grid-cols-3 gap-6 my-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold mb-4">CS</div>
                            <h3 className="text-md font-bold text-center mb-1">சித்ரை செல்வன்</h3>
                            <p className="text-xs text-gray-500 text-center mb-4">Founder & Lead Dev</p>
                            <a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs block text-center">selvan.dev →</a>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold mb-4">SK</div>
                            <h3 className="text-md font-bold text-center mb-1">சரவண குமார்</h3>
                            <p className="text-xs text-gray-500 text-center mb-4">Co-Founder</p>
                            <a href="https://senthilmurugantraders.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs block text-center">visit site →</a>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-transform hover:scale-105">
                            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold mb-4">AR</div>
                            <h3 className="text-md font-bold text-center mb-1">அருண் ஈசாக்கி ராஜ்</h3>
                            <p className="text-xs text-gray-500 text-center mb-4">Co-Founder</p>
                            <a href="https://thearun.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs block text-center">thearun.dev →</a>
                        </div>
                    </div>
                </section>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">நாங்கள் எப்படி ஆராய்கிறோம்</h2>
                    <p className="text-gray-700 leading-relaxed italic">
                        கல்யாண வீட்டில் உள்ள ஒவ்வொரு சடங்கும் ஏன் நடைபெறுகிறது என்பதை நாங்கள் விளக்குகிறோம். 
                        எங்கள் உள்ளடக்கம் அரசு கலாசார அமைப்புகள், கல்வியாளர் ஆய்வுகள், மற்றும் சான்றாதார 
                        கலாச்சார ஆவணங்களின் அடிப்படையில் தயாரிக்கப்படுகிறது.
                    </p>
                </div>

                <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">தொடர்பு கொள்ளுங்கள்</h2>
                    <p className="mb-6">
                        கேள்விகள், ஆலோசனைகள், அல்லது கலாச்சார திருத்தங்களுக்கு எங்களை தொடர்பு கொள்ளுங்கள்:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                        <div className="flex items-center gap-2">
                            <span className="font-bold">📧 Email:</span>
                            <a href="mailto:myutilitybox.helpdesk@gmail.com" className="text-primary hover:underline">myutilitybox.helpdesk@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">⏰ Response:</span>
                            <span>24-48 மணி நேரத்திற்குள் பதில்</span>
                        </div>
                    </div>
                    <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md">
                        தொடர்பு படிவத்தை பூர்த்தி செய்யுங்கள் →
                    </Link>
                </section>
            </div>
        </div>
    );
}
