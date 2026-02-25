import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'நாங்கள் யார் | கல்யாண வீடு',
    description: 'கல்யாண வீடு - தமிழ் திருமண மரபுகள் மற்றும் சடங்குகள் பற்றிய தகவல் இணையதளம்',
    alternates: {
        canonical: '/about-us',
    },
};

export default function AboutUsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    நாங்கள் யார்
                </h1>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8 leading-relaxed">

                <p className="text-lg text-gray-800 leading-relaxed">
                    கல்யாண வீடு என்பது தமிழ் திருமண மரபுகளையும் சடங்குகளையும்
                    ஆவணப்படுத்துவதற்காக உருவாக்கப்பட்ட ஒரு தமிழ் இதழியல் இணையதளம்.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    நம் முன்னோர்களிடமிருந்து வந்த திருமண சடங்குகள் — நாந்தி முதல் நாளும்,
                    முகூர்த்தம் முதல் மணவிழா வரை — ஒவ்வொன்றிலும் ஆழமான கலாச்சார அர்த்தம்
                    உள்ளது. ஆனால் இந்த அர்த்தங்களை தமிழிலேயே விளக்கும் நம்பகமான ஆதாரங்கள்
                    மிகவும் குறைவாக உள்ளன. கல்யாண வீடு இந்த இடைவெளியை நிரப்புவதற்காகவே
                    தொடங்கப்பட்டது.
                </p>

                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        நாங்கள் என்ன செய்கிறோம்
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        தமிழ்நாட்டு திருமண சடங்குகளை — அவற்றின் வரலாறு, அர்த்தம், மற்றும்
                        பிராந்திய வேறுபாடுகளுடன் — தமிழில் ஆவணப்படுத்துகிறோம். ஒவ்வொரு சடங்கும்
                        ஏன் நடைபெறுகிறது என்பதை நாங்கள் விளக்குகிறோம் — வெறும் எப்படி என்பதை
                        மட்டும் அல்ல.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span>நாந்தி ஏன் நடத்தப்படுகிறது?</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span>கன்யாதானத்தின் கலாச்சார முக்கியத்துவம் என்ன?</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span>சப்தபதியில் எடுக்கப்படும் ஏழு அடிகளின் அர்த்தம் என்ன?</span>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        இது போன்ற கேள்விகளுக்கு ஆழமான, நம்பகமான விடைகளை வழங்குவது எங்கள் நோக்கம்.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        சமூக வேறுபாடுகள்
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        தமிழ்நாட்டின் பல்வேறு சமூகங்கள் — இயர், ஐயங்கார், முதலியார், நாடார்,
                        செட்டியார், தேவர் — ஒவ்வொரு சமூகத்திலும் திருமண மரபுகள் எவ்வாறு
                        வேறுபடுகின்றன என்பதையும் நாங்கள் விவரிக்கிறோம்.
                    </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        நாங்கள் எப்படி ஆராய்கிறோம்
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        எங்கள் உள்ளடக்கம் அரசு கலாசார அமைப்புகள், கல்வியாளர் ஆய்வுகள், மற்றும்
                        சான்றாதார கலாச்சார ஆவணங்களின் அடிப்படையில் தயாரிக்கப்படுகிறது. வலைப்பதிவுகள்
                        அல்லது சமூக ஊடகங்களில் உள்ள தகவல்களை நாங்கள் ஆதாரமாக பயன்படுத்துவதில்லை.
                        ஒவ்வொரு கட்டுரையும் குறிப்பிட்ட பிராந்தியம் மற்றும் சமூகத்தின் மரபுகளை மட்டுமே
                        விவரிக்கிறது.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        தமிழில் ஏன்
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        திருமண மரபுகள் தமிழ் குடும்பங்களுக்கு சொந்தமானவை. அவை தமிழிலேயே
                        ஆவணப்படுத்தப்பட வேண்டும். கல்யாண வீட்டில் உள்ள அனைத்து உள்ளடக்கமும்
                        தமிழிலேயே எழுதப்படுகிறது — ஏனென்றால் இந்த மரபுகளைப் பற்றி தெரிந்துகொள்ள
                        விரும்புபவர்கள் தமிழ் குடும்பங்களில் உள்ளவர்களே.
                    </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        தொடர்பு கொள்ளுங்கள்
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        உங்கள் கருத்துகளை மற்றும் கலாச்சார திருத்தங்களை எங்களுடன் பகிர்ந்து கொள்ள
                        அழைக்கிறோம். தொடர்பு பக்கம் வழியாக எங்களை அடையலாம்.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                    >
                        தொடர்பு கொள்ளுங்கள் →
                    </Link>
                </div>

            </div>
        </div>
    );
}
