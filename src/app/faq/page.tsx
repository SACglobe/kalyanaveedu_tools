import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import Schema from '@/components/SEO/Schema';

export const metadata: Metadata = {
    title: 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ) | கல்யாண வீடு',
    description: 'திருமண திட்டமிடல், முகூர்த்த தேதிகள், ஜாதகப் பொருத்தம் மற்றும் கல்யாண வீடு கருவிகள் குறித்த உங்களின் அனைத்து கேள்விகளுக்கும் இங்கே பதில்களைக் கண்டறியுங்கள்.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/faq`,
    },
};

const FAQS = [
    {
        q: 'திருமண வயது வரம்பு என்ன?',
        a: 'இந்திய சட்டப்படி திருமணத்திற்கான குறைந்தபட்ச வயது ஆண்களுக்கு 21 மற்றும் பெண்களுக்கு 18 ஆகும். சட்டப்பூர்வமான திருமணங்கள் மட்டுமே சமூகத்தில் அங்கீகரிக்கப்படுகின்றன.'
    },
    {
        q: 'கல்யாண வீடு தளத்தின் சேவைகள் இலவசமானவையா?',
        a: 'ஆம், கல்யாண வீடு தளத்தில் நாங்கள் வழங்கும் ஜாதகப் பொருத்தம், பட்ஜெட் கணிப்பான், முகூர்த்த நாட்காட்டி உள்ளிட்ட அனைத்து கருவிகளும் 100% இலவசம். எந்த கட்டணமும் இன்றி நீங்கள் பயன்படுத்திக் கொள்ளலாம்.'
    },
    {
        q: 'சுப முகூர்த்தம் எப்படி கணக்கிடப்படுகிறது?',
        a: 'எங்கள் தளத்தில் உள்ள முகூர்த்த தேதிகள் பாரம்பரிய வாக்கிய பஞ்சாங்க முறைப்படி கணக்கிடப்படுகின்றன. ராகு காலம், எமகண்டம் மற்றும் குளிகை நேரங்களைத் தவிர்த்து, நவகிரகங்களின் சாதகமான நிலையை அடிப்படையாகக் கொண்டே இவை தீர்மானிக்கப்படுகின்றன.'
    },
    {
        q: 'திருமண பட்ஜெட் போடுவது ஏன் முக்கியம்?',
        a: 'திட்டமிடாத செலவுகள் திருமணத்திற்குப் பின்பு பெரும் நிதிச் சுமையை ஏற்படுத்தும். முன்கூட்டியே பட்ஜெட் போடுவது 20% முதல் 30% வரை தேவையற்ற செலவுகளைத் தவிர்க்க உதவும். எங்கள் பட்ஜெட் பிளானர் இதற்கு சிறந்த கருவியாகும்.'
    },
    {
        q: 'ஜாதகப் பொருத்தம் பார்ப்பது அவசியமா?',
        a: 'இது தனிப்பட்ட நம்பிக்கையைப் பொறுத்தது. இருப்பினும், தமிழ் கலாச்சாரத்தில் மனவொற்றுமை மற்றும் குடும்ப ஒற்றுமைக்காகப் பத்து பொருத்தங்கள் பார்க்கும் வழக்கம் உள்ளது. எங்களது தளம் இந்த கலாச்சாரத் தகவல்களை உங்களுக்கு வழங்குகிறது.'
    },
    {
        q: 'காசி யாத்திரை சடங்கின் நோக்கம் என்ன?',
        a: 'காசி யாத்திரை என்பது பிரம்மச்சரியத்திலிருந்து இல்லறத்திற்கு நுழையும் ஒரு குறியீட்டு சடங்காகும். வாழ்க்கையில் ஞானம் தேடிச் செல்லும் மணமகனை, இல்லறத்தின் சிறப்பைக் கூறி மணமகள் குடும்பத்தினர் அழைத்து வரும் நிகழ்வு இது.'
    },
    {
        q: 'திருமணம் செய்ய எவ்வளவு காலம் முன்னதாகத் திட்டமிட வேண்டும்?',
        a: 'பொதுவாக 6 மாதங்கள் முதல் ஒரு வருடம் முன்னதாகத் திட்டமிடத் தொடங்குவது சிறந்தது. இது திருமண மண்டபம், புகைப்படக் கலைஞர் மற்றும் பிற சேவைகளை சரியான விலையில் முன்பதிவு செய்ய உதவும்.'
    },
    {
        q: 'கல்யாண வீடு தளத்தில் எப்படி விளம்பரம் செய்வது?',
        a: 'நீங்கள் ஒரு திருமண சேவை வழங்குநராக இருந்தால் (Caterer, Decorator, etc.), எங்களது தொடர்பு பக்கத்தின் மூலம் எங்களை அணுகலாம். தகுதியான சேவை வழங்குநர்களை அறிமுகப்படுத்த நாங்கள் தயாராக உள்ளோம்.'
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <Schema type="BreadcrumbList" data={{
                items: [
                    { name: 'முகப்பு', item: '/' },
                    { name: 'FAQ', item: '/faq' }
                ]
            }} />
            
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        அடிக்கடி கேட்கப்படும் கேள்விகள்
                    </h1>
                    <p className="text-xl text-gray-600">
                        உங்களின் சந்தேகங்களுக்கு விரைவான தீர்வுகள்
                    </p>
                </div>

                <div className="grid gap-6">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all">
                            <h2 className="text-xl font-bold text-gray-900 mb-3 text-primary">
                                {faq.q}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-primary/5 p-8 rounded-3xl text-center border border-primary/10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">உங்களின் கேள்வி இங்கே இல்லையா?</h3>
                    <p className="text-gray-600 mb-6">
                        தயங்காமல் எங்களை தொடர்பு கொள்ளுங்கள். நாங்கள் உங்களுக்கு உதவ காத்திருக்கிறோம்.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition-transform hover:scale-105">
                        எங்களைத் தொடர்பு கொள்ள
                    </Link>
                </div>

                {/* FAQ Schema for SERP Enhancements */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": FAQS.map(faq => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.a
                                }
                            }))
                        })
                    }}
                />
            </div>
        </main>
    );
}
