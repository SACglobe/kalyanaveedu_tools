import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
    title: 'எங்களை பற்றி | About Kalyana Veedu',
    description: 'கல்யாண வீடு - தமிழர்களின் நம்பகமான திருமண திட்டமிடல் தளம். எங்கள் நோக்கம் மற்றும் சேவை பற்றி அறிந்துகொள்ளுங்கள்.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">எங்களை பற்றி (About Us)</h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                    வணக்கம்! <strong>{SITE_CONFIG.name}</strong> தளத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம்.
                    இது தமிழ் குடும்பங்களின் திருமணத் திட்டமிடலை எளிமையாக்கும் ஒரு பிரத்யேக முயற்சியாகும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">எங்கள் கதை (Our Story)</h2>
                <p>
                    திருமணம் என்பது இரண்டு மனங்கள் இணையும் ஒரு உன்னத நிகழ்வு மட்டுமல்ல,
                    அது இரு குடும்பங்களின் கலாச்சார சங்கமம். இன்றைய நவீன சூழலில்,
                    திருமண ஏற்பாடுகளை செய்வது ஒரு பெரும் சவாலாக உள்ளது. மண்டபம் தேடுவது முதல்,
                    பட்ஜெட் திட்டமிடல் வரை அனைத்தும் கடினமானதாக மாறிவிட்டது.
                </p>
                <p>
                    இந்த இடைவெளியை நிரப்பவே "கல்யாண வீடு" உருவாக்கப்பட்டது. எங்கள் குழு,
                    பாரம்பரிய விழுமியங்களை நவீன தொழில்நுட்பத்துடன் இணைத்து,
                    ஒவ்வொரு தமிழரும் எளிதாக பயன்படுத்தக்கூடிய கருவிகளை உருவாக்கி வருகிறது.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">எங்கள் நோக்கம் (Our Mission)</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>கலாச்சார பாதுகாப்பு:</strong> நமது பாரம்பரிய திருமண முறைகளை அடுத்த தலைமுறைக்கு கொண்டு செல்லுதல்.</li>
                    <li><strong>எளிமையான திட்டமிடல்:</strong> சிக்கலான கணக்கீடுகளை (வயது, பட்ஜெட்) எளிய கருவிகள் மூலம் தீர்த்தல்.</li>
                    <li><strong>100% இலவச சேவை:</strong> அனைத்து தரப்பு மக்களும் பயன்பெறும் வகையில் கட்டணமில்லா சேவையை வழங்குதல்.</li>
                </ul>

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
