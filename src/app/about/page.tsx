import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
    title: 'எங்களை பற்றி | About Kalyana Veedu',
    description: 'கல்யாண வீடு - தமிழர்களின் நம்பகமான திருமண திட்டமிடல் தளம். எங்கள் நோக்கம் மற்றும் சேவை பற்றி அறிந்துகொள்ளுங்கள்.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">எங்களை பற்றி (About Us)</h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl">
                    வணக்கம்! <strong>{SITE_CONFIG.name}</strong> தளத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம்.
                    இது தமிழ் குடும்பங்களின் திருமணத் திட்டமிடலை எளிமையாக்கும் ஒரு பிரத்யேக முயற்சியாகும்.
                    2024-ல் துவங்கப்பட்ட இந்த தளம், பாரம்பரிய தமிழ் திருமண கலாச்சாரத்தையும்
                    நவீன தொழில்நுட்பத்தையும் இணைத்து, திருமண திட்டமிடலை அனைவருக்கும் எளிமையாக்குகிறது.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">எங்கள் கதை (Our Story)</h2>
                <p>
                    2024-ல், சென்னையை சேர்ந்த மூன்று நண்பர்கள் - சித்ரை செல்வன், சரவண குமார்,
                    மற்றும் அருண் ஈசாக்கி ராஜ் - திருமண திட்டமிடலின் சிக்கல்களை நேரடியாக சந்தித்தனர்.
                    சுப முகூர்த்த தேதிகள், பட்ஜெட் திட்டமிடல், வேலைகள் பட்டியல் போன்றவற்றிற்கு
                    தமிழில் நம்பகமான வளங்கள் இல்லாததை கண்டு, தாங்கள் பயன்படுத்திய தொழில்நுட்ப
                    திறமையையும் தமிழ் கலாச்சார அறிவையும் இணைத்து <strong>கல்யாண வீடு</strong> என்ற
                    இலவச திருமண திட்டமிடல் தளத்தை உருவாக்கினர்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">எங்கள் நோக்கம் (Our Mission)</h2>
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-6">
                    <p className="font-semibold text-orange-900">
                        "தமிழ் திருமண பாரம்பரியங்களை டிஜிட்டல் யுகத்திற்கு கொண்டு வந்து,
                        ஒவ்வொரு தமிழ் குடும்பமும் எளிதாக, மன அழுத்தமில்லாமல், மகிழ்ச்சியுடன்
                        திருமணத்தை திட்டமிட உதவுவது."
                    </p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>கலாச்சார பாதுகாப்பு:</strong> நமது பாரம்பரிய திருமண முறைகளை அடுத்த தலைமுறைக்கு கொண்டு செல்லுதல்.</li>
                    <li><strong>எளிமையான திட்டமிடல்:</strong> சிக்கலான கணக்கீடுகளை (வயது, ஜாதகம், பட்ஜெட்) எளிய கருவிகள் மூலம் தீர்த்தல்.</li>
                    <li><strong>100% இலவச சேவை:</strong> அனைத்து தரப்பு மக்களும் பயன்பெறும் வகையில் கட்டணமில்லா சேவையை வழங்குதல்.</li>
                    <li><strong>மொழி பெருமை:</strong> தமிழில் முழுமையான விளக்கங்களுடன் நமது கலாச்சாரத்தை புரிந்துகொள்ள உதவுதல்.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">எங்கள் குழு (Our Team)</h2>
                <div className="grid md:grid-cols-3 gap-6 my-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center text-white text -2xl font-bold mb-4">CS</div>
                        <h3 className="text-lg font-bold text-center mb-2">சித்ரை செல்வன்</h3>
                        <p className="text-sm text-gray-600 text-center mb-2">Founder & Lead Developer</p>
                        <p className="text-sm text-gray-700 mb-2">
                            முழு stack developer மற்றும் தமிழ் கலாச்சார ஆர்வலர்.
                            தமிழ் மென்பொருள் தீர்வுகளை உருவாக்குவதில் நிபுணர்.
                        </p>
                        <a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm block text-center">selvan.dev →</a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">SK</div>
                        <h3 className="text-lg font-bold text-center mb-2">சரவண குமார்</h3>
                        <p className="text-sm text-gray-600 text-center mb-2">Co-Founder & Business Advisor</p>
                        <p className="text-sm text-gray-700 mb-2">
                            தொழில்முனைவோர் மற்றும் திருமண தொழில் நிபுணர்.
                            பாரம்பரிய வணிக அனுபவத்துடன் தளத்தை வழிநடத்துகிறார்.
                        </p>
                        <a href="https://senthilmurugantraders.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm block text-center">senthilmurugantraders.in →</a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">AR</div>
                        <h3 className="text-lg font-bold text-center mb-2">அருண் ஈசாக்கி ராஜ்</h3>
                        <p className="text-sm text-gray-600 text-center mb-2">Co-Founder & Technical Advisor</p>
                        <p className="text-sm text-gray-700 mb-2">
                            மென்பொருள் கட்டட நிபுணர் மற்றும் பயனர் அனுபவ வடிவமைப்பாளர்.
                            தளத்தின் தொழில்நுட்ப சிறப்பிற்கு பொறுப்பு.
                        </p>
                        <a href="https://thearun.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm block text-center">thearun.dev →</a>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">நாங்கள் வழங்குவது என்ன?</h2>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-orange-50 p-6 rounded-xl">
                        <h3 className="font-bold text-orange-900 mb-2">துல்லியமான கருவிகள்</h3>
                        <p className="text-sm">வயது கணிப்பான், திருமண பொருத்தம் மற்றும் பட்ஜெட் பிளானர் போன்றவை துல்லியமான முடிவுகளைத் தரும்.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-bold text-blue-900 mb-2">தகவல் களஞ்சியம்</h3>
                        <p className="text-sm">திருமண சடங்குகள், சம்பிரதாயங்கள் மற்றும் சட்டரீதியான வழிகாட்டுதல்கள்.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">எங்களை தொடர்பு கொள்ள (Contact Us)</h2>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <p className="mb-4">கேள்விகள், ஆலோசனைகள், அல்லது கருத்துக்களுக்கு எங்களை தொடர்பு கொள்ளுங்கள்:</p>
                    <div className="space-y-2">
                        <p><strong>📧 Email:</strong> <a href="mailto:myutilitybox.helpdesk@gmail.com" className="text-primary hover:underline">myutilitybox.helpdesk@gmail.com</a></p>
                        <p><strong>📍 Location:</strong> Chennai, Tamil Nadu, India</p>
                        <p><strong>⏰ Response Time:</strong> 24-48 மணி நேரத்திற்குள் பதில்</p>
                    </div>
                    <Link href="/contact" className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition">
                        தொடர்பு படிவத்தை பூர்த்தி செய்யுங்கள் →
                    </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8 text-sm text-gray-600">
                    <p>
                        <strong>பொறுப்புத் துறப்பு:</strong> இத்தளத்தில் வழங்கப்படும் தகவல்கள் அனைத்தும் பொதுவான வழிகாட்டுதலுக்காக மட்டுமே.
                        சட்டரீதியான அல்லது ஜோதிட ரீதியான முடிவுகளை எடுக்கும் முன் தகுந்த நிபுணர்களிடம் கலந்தாலோசிக்கவும்.
                    </p>
                </div>
            </div>
        </div>
    );
}

