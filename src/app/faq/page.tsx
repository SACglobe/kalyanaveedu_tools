import type { Metadata } from 'next';
import Schema from '@/components/SEO/Schema';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ) | Kalyana Veedu',
    description: 'கல்யாண வீடு தளம், அதன் கருவிகள் மற்றும் தமிழ் திருமண சடங்குகள் குறித்த அடிக்கடி கேட்கப்படும் கேள்விகளுக்கான பதில்கள்.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/faq`,
    },
};

const FAQS = [
    {
        question: 'கல்யாண வீடு தளம் எதற்காக உருவாக்கப்பட்டது?',
        answer: 'தமிழ் குடும்பங்களின் திருமணத் திட்டமிடலை எளிமையாக்கவும், பாரம்பரிய சடங்குகளின் உண்மையான அர்த்தங்களை விளக்கவுமே இந்தத் தளம் உருவாக்கப்பட்டது.'
    },
    {
        question: 'இங்குள்ள கருவிகள் (Tools) இலவசமா?',
        answer: 'ஆம், கல்யாண வீட்டில் உள்ள பட்ஜெட் பிளானர், வயது கணிப்பான் மற்றும் திருமணத் தயாரிப்பு பட்டியல் போன்ற அனைத்து கருவிகளும் 100% இலவசம்.'
    },
    {
        question: 'சுப முகூர்த்த தேதிகள் எதன் அடிப்படையில் கணக்கிடப்படுகின்றன?',
        answer: 'எங்கள் தளத்தில் உள்ள சுப முகூர்த்த தேதிகள் பாரம்பரிய தமிழ் பஞ்சாங்கம் மற்றும் ஜோதிட நாட்காட்டிகளின் அடிப்படையில் துல்லியமாக வழங்கப்படுகின்றன.'
    },
    {
        question: 'உங்கள் கட்டுரைகள் நம்பகமானவையா?',
        answer: 'நிச்சயமாக. எங்களின் கலாச்சாரக் கட்டுரைகள் அரசு கலாசார ஆவணங்கள், சமூக ஆய்வுகள் மற்றும் மூத்த அறிஞர்களின் கருத்துக்களின் அடிப்படையில் ஆழமான ஆய்வுக்குப் பின்பே எழுதப்படுகின்றன.'
    },
    {
        question: 'உங்கள் குழுவைத் தொடர்பு கொள்வது எப்படி?',
        answer: 'எங்களை contact@kalyanaveedu.in (அல்லது contact@selvan.dev) என்ற மின்னஞ்சல் மூலமாகவோ அல்லது எங்களின் தொடர்பு படிவம் மூலமாகவோ தொடர்பு கொள்ளலாம்.'
    },
    {
        question: 'இங்குள்ள திருமண கருவிகளை எனது மொபைலில் பயன்படுத்தலாமா?',
        answer: 'ஆம், கல்யாண வீடு இணையதளம் முற்றிலும் மொபைல்-நட்பு (responsive design) முறையில் வடிவமைக்கப்பட்டுள்ளது. நீங்கள் ஆண்ட்ராய்டு, ஐபோன் அல்லது டேப்லெட் போன்ற எந்த சாதனத்திலும் எவ்வித தடையுமின்றி எங்களது அனைத்து கருவிகளையும் எளிதாகப் பயன்படுத்தலாம்.'
    },
    {
        question: 'நான் எனது திருமண பட்ஜெட் தரவுகளை எவ்வாறு சேமிக்க முடியும்?',
        answer: 'எங்கள் பட்ஜெட் பிளானர் கருவியில் நீங்கள் உள்ளீடு செய்யும் தரவுகள் அனைத்தும் உங்கள் சாதனத்தின் உலாவி தற்காலிக சேமிப்பில் (Local Storage) பாதுகாப்பாக சேமிக்கப்படும். இதனால் நீங்கள் மீண்டும் இந்த தளத்திற்கு வரும்போது அதே தரவுகளைத் தொடர்ந்து திருத்த முடியும். உங்கள் தரவுகள் எதுவும் எங்களது சர்வர்களில் சேமிக்கப்படுவதில்லை.'
    },
    {
        question: 'திருமண சடங்குகள் சார்ந்த குறிப்புகள் மற்றும் ஆலோசனைகளை வழங்குகிறீர்களா?',
        answer: 'ஆம், எங்களது வலைப்பதிவில் தமிழ் சடங்குகளின் பின்னணி வரலாறு, திருமண பட்ஜெட் திட்டமிடல் முறைகள், மற்றும் திருமணத்திற்குத் தேவையான அனைத்து தயாரிப்புப் பட்டியல்களும் விரிவாக வழங்கப்பட்டுள்ளன. இவற்றை நீங்கள் இலவசமாக வாசித்துப் பயன்பெறலாம்.'
    }
];

export default function FAQPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="FAQPage" 
                data={{ mainEntity: FAQS }} 
            />
            <header className="mb-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    அடிக்கடி கேட்கப்படும் கேள்விகள்
                </h1>
                <p className="text-gray-600 text-lg">உங்களின் பொதுவான சந்தேகங்களுக்கான பதில்கள் இங்கே.</p>
                <div className="w-24 h-2 bg-primary rounded-full mx-auto mt-6"></div>
            </header>

            <div className="space-y-6">
                {FAQS.map((faq, index) => (
                    <div key={index} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                            <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm">Q</span>
                            {faq.question}
                        </h3>
                        <div className="flex items-start gap-3 text-gray-700 leading-relaxed pl-11">
                            <span className="text-gray-400 font-bold">A:</span>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl text-center text-white">
                <h2 className="text-2xl font-bold mb-4">உங்களின் கேள்வி இங்கே இல்லையா?</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                    உங்களுக்கு ஏதேனும் சிறப்பு கேள்விகள் இருந்தால், எங்களின் ஆதரவு குழுவைத் தொடர்பு கொள்ளவும்.
                </p>
                <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg">
                    நேரடியாக தொடர்பு கொள்ள →
                </Link>
            </div>
        </div>
    );
}
