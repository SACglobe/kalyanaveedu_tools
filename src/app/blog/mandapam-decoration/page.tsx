import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';

import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';


export const metadata: Metadata = {
    title: 'மண்டப அலங்காரம்: 10 நவீன வடிவமைப்பு யோசனைகள் | Mandapam Decoration Ideas',
    description: 'தமிழ் திருமண மண்டப அலங்காரத்திற்கான பாரம்பரிய மற்றும் நவீன யோசனைகள். மலர் அலங்காரம், விளக்கு அமைப்பு, பட்ஜெட் இடத்தில் அலங்காரம் செய்வது எப்படி?',
    keywords: ['mandapam decoration', 'wedding decoration tamil', 'flower decoration ideas', 'marriage hall decoration', 'budget wedding decor'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/mandapam-decoration`,
    },
};

export default function MandapamDecorationGuide() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: 'மண்டப அலங்காரம்: 10 நவீன வடிவமைப்பு யோசனைகள் | Mandapam Decoration Ideas',
                    description: 'தமிழ் திருமண மண்டப அலங்காரத்திற்கான பாரம்பரிய மற்றும் நவீன யோசனைகள். மலர் அலங்காரம், விளக்கு அமைப்பு, பட்ஜெட் இடத்தில் அலங்காரம் செய்வது எப்படி?',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-02-25',
                    slug: '/blog/mandapam-decoration'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'மண்டப அலங்காரம்', item: '/blog/mandapam-decoration' }
                    ]
                }}
            />
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    மண்டப அலங்காரம்: 10 நவீன வடிவமைப்பு யோசனைகள்
                </h1>
            <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
                    alt="மண்டப அலங்காரம்"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="பிப்ரவரி 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    மண்டப அலங்காரம் என்பது உங்கள் திருமணத்தின் முகம். விருந்தினர்கள்
                    முதலில் கவனிப்பது மணமேடை மற்றும் மண்டபத்தின் அலங்காரம் தான்.
                    பாரம்பரிய களை இழக்காமல், நவீன சுவையுடன் எப்படி உங்கள் திருமண
                    மண்டபத்தை அழகுபடுத்துவது என்பதில் இதோ 10 சிறந்த யோசனைகள்.
                </p>

                <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8">
                    <h3 className="text-xl font-bold text-green-900 mb-2">💰 அலங்கார பட்ஜெட்டை திட்டமிடுங்கள்</h3>
                    <p className="text-green-800">
                        மண்டப அலங்காரத்திற்கு எவ்வளவு செலவாகும் என துல்லியமாக கணக்கிட
                        எங்கள்
                        <Link href="/tools/thirumana-selavu" className="text-primary font-bold hover:underline mx-1">
                            திருமண பட்ஜெட் கால்குலேட்டரை
                        </Link>
                        பயன்படுத்தவும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    1. பாரம்பரிய vs நவீன: சரியான கலவையை தேர்வு செய்யுங்கள்
                </h2>

                <p>
                    முற்றிலும் பாரம்பரிய அல்லது முற்றிலும் நவீன அலங்காரத்தை விட,
                    இரண்டின் கலவை மிக அழகாக இருக்கும். உதாரணமாக:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-orange-50 p-6 rounded-xl">
                        <h3 className="font-bold text-orange-900 mb-2">பாரம்பரிய கூறுகள்</h3>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>வாழை மரம் மற்றும் மா இலைகள்</li>
                            <li>பாரம்பரிய மலர்கள் (ஜாதிமல்லி, கனகாம்பரம்)</li>
                            <li>பித்தளை விளக்குகள்</li>
                            <li>கோலம் வடிவமைப்புகள்</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-bold text-blue-900 mb-2">நவீன கூறுகள்</h3>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>LED விளக்கு அமைப்புகள்</li>
                            <li>தொங்கு அலங்காரங்கள் (Drapes)</li>
                            <li>நவீன மலர் ஏற்பாடுகள்</li>
                            <li>தீம் அடிப்படையிலான நிறங்கள்</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    2. மணமேடை (Mandapam) அலங்காரம்
                </h2>

                <p>
                    மணமேடை தான் திருமணத்தின் மையப்புள்ளி. இங்கே தான் முக்கிய சடங்குகள்
                    நடக்கும், எல்லா புகைப்படங்களும் எடுக்கப்படும். எனவே இதற்கு சிறப்பு
                    கவனம் தேவை:
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">பாரம்பரிய மண்டபம்:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>4 தூண்கள்:</strong> நான்கு மூலைகளில் வாழை மரங்கள் அல்லது மர தூண்கள்</li>
                    <li><strong>கூரை:</strong> மலர்களால் அலங்கரிக்கப்பட்ட வண்ண துணிகள்</li>
                    <li><strong>தரை:</strong> கோலம் அல்லது மலர் விரிப்பு</li>
                    <li><strong>பின்புலம்:</strong> பாரம்பரிய தமிழ் மையம், கோயில் வடிவம்</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">நவீன மண்டபம்:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>தீம் நிறங்கள்:</strong> பேஸ்டல் நிறங்கள், தங்கம், வெள்ளி</li>
                    <li><strong>புஷ்ப சுவர் (Flower Wall):</strong> புகைப்படத்திற்கு பின்புலமாக</li>
                    <li><strong>கிரிஸ்டல் அலங்காரம்:</strong> சரம் விளக்குகள், குவிந்நெது பந்துகள்</li>
                    <li><strong>குளிர்ந்த விளக்கு:</strong> மணமேடையை முன்னிலைப்படுத்தும் LED விளக்குகள்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    3. மலர் அலங்காரம்: அழகும் மணமும்
                </h2>

                <p>
                    தமிழ் திருமணங்களில் மலர் அலங்காரத்திற்கு தனி முக்கியத்வம்.
                    ஆனால் எந்த மலர்களை எங்கே பயன்படுத்துவது என்பது முக்கியம்:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 my-6">
                    <h3 className="font-bold text-lg mb-3">மலர் தேர்வு வழிகாட்டி:</h3>
                    <ul className="space-y-2">
                        <li><strong>ரோஜா (Rose):</strong> மணமேடை, மலர் சுவர் - விலை அதிக பட்சம்</li>
                        <li><strong>கனகாம்பரம் (Kanakambaram):</strong> மாலைகள், தொங்கு அலங்காரம் - பட்ஜெட் இடத்தில்</li>
                        <li><strong>ஜாதிமல்லி (Jasmine):</strong> மாலைகள், கதவு அலங்காரம் - நறுமணம்</li>
                        <li><strong>செவ்வந்தி (Marigold):</strong> நுழைவாயில், சாலை அலங்காரம் - மலிவு</li>
                        <li><strong>சாமந்தி (Chrysanthemum):</strong> மேசை அலங்காரம் - நீடித்து நிற்கும்</li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 italic my-6">
                    "செலவு குறைக்க: பருவ மலர்களை (Seasonal flowers) பயன்படுத்துங்கள். முழு மலர்
                    அலங்காரத்தை விட, மலர் + இலைகள் கலவை மலிவானது மற்றும் அழகானது."
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    4. விளக்கு அமைப்பு (Lighting): மாய உலகம் உருவாக்குதல்
                </h2>

                <p>
                    சரியான விளக்கு அமைப்பு சாதாரண அலங்காரத்தையும் விசேஷமாக மாற்றும்.
                    இரவு விருந்துகளுக்கு இது மிகவும் முக்கியம்:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>மணமேடை விளக்கு:</strong> மெல்லிய ஸ்பாட் லைட்ஸ் மணமகன் மணமகளை
                        முன்னிலைப்படுத்த
                    </li>
                    <li>
                        <strong>சாலை விளக்கு:</strong> உள்ளே செல்லும் பாதையை வழிகாட்ட மெல்லிய தீப
                    </li>
                    <li>
                        <strong>தொங்கு விளக்குகள்:</strong> மரங்களில் அல்லது கூரையில் ஃபேரி லைட்ஸ்
                    </li>
                    <li>
                        <strong>மேசை விளக்கு:</strong> உணவு பகுதியில் warm light
                    </li>
                    <li>
                        <strong>அம்பியன்ஸ் லைட்டிங்:</strong> மண்டபத்தின் சுவர்களில் LED நிற விளக்குகள்
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    5. நுழைவாயில் அலங்காரம்: முதல் உபரவை கவரும்
                </h2>

                <p>
                    நுழைவாயின் தான் விருந்தினர்கள் முதலில் பார்ப்பது. "First impression is the last impression":
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>தோரணம் (Toranam) - மா இலை மற்றும் மலர்களால் ஆன வாழ்த்து அலங்காரம்</li>
                    <li>வரவேற்பு பலகை (Welcome Board) - மணமக்களின் பெயர்கள் மற்றும் புகைப்படம்</li>
                    <li>மலர் வளையம் (Flower Arch) - நுழையும் போது மலர் வளையத்தின் கீழ் செல்ல</li>
                    <li>பாதை விளக்கு - சிறிய விளக்குகள் அல்லது தீபங்கள் இருபுறமும்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    6. உணவு பகுதி அலங்காரம்
                </h2>

                <p>
                    உணவு பகுதியும் அழகாக இருக்க வேண்டும், ஏனெனில் விருந்தினர்கள் அதிக நேரம்
                    இங்கே செலவிடுவார்கள்:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>மேசை அலங்காரம்:</strong> சிறிய மலர் பொட்டுகள் ஒவ்வொரு மேசையிலும்</li>
                    <li><strong>உணவு விநியோக மேசை:</strong> வண்ணமயமான துணிகள், மலர் அலங்காரம்</li>
                    <li><strong>நாப்கின் வைத்தல்:</strong> சுருட்டப்பட்ட நாப்கின்களோடு ரிப்பன் கட்டுதல்</li>
                    <li><strong>உணவு லேபிள்ஸ்:</strong> அழகான கையெழுத்துடன் உணவு பெயர்கள்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    7. புகைப்பட பூத் (Photo Booth) பகுதி
                </h2>

                <p>
                    நவீன திருமணங்களில் புகைப்பட பூத் மிக பிரபலம். விருந்தினர்கள்
                    இங்கு சுவாரசியமான புகைப்படங்கள் எடுக்கலாம்:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>மலர் சுவர் அல்லது பலூன் சுவர் பின்புலம்</li>
                    <li>props (தொப்பிகள், மீசை, அடையாள பலகைகள்)</li>
                    <li>தீம் அடிப்படையிலான அலங்காரம் (vintage, rustic, modern)</li>
                    <li>சரியான விளக்கு அமைப்பு</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    8. பருவகால அலங்காரம்: சீசனை பயன்படுத்துங்கள்
                </h2>

                <p>
                    உங்கள் திருமணம் எந்த பருவத்தில் என்பதை பொறுத்து அலங்காரத்தை திட்டமிடுங்கள்:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>கோடை (சித்திரை-ஆனி):</strong> வெளிர் நிறங்கள், குளிர்ச்சியான தோற்றம், குறைவான மலர்கள்</li>
                    <li><strong>மழைக்காலம் (ஆடி-புரட்டாசி):</strong> இன்டோர் அலங்காரத்திற்கு முக்கியத்துவம், நீர் எதிர்ப்பு அலங்காரம்</li>
                    <li><strong>குளிர்காலம் (ஐப்பசி-மார்கழி):</strong> சூடான நிறங்கள், நெருப்பு பானைகள், அதிக விளக்குகள்</li>
                    <li><strong>வசந்தம் (தை-பங்குனி):</strong> அதிக மலர் பயன்பாடு, பசுமை, வண்ணமயம்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    9. பட்ஜெட் இடத்தில் அலங்காரம்: DIY யோசனைகள்
                </h2>

                <p>
                    அலங்காரத்திற்கு அதிக பணம் செலவழிக்க முடியாதவர்களுக்கு சில மலிவான யோசனைகள்:
                </p>

                <div className="bg-green-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-lg mb-3">செலவு குறைக்கும் வழிகள்:</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li><strong>DIY அலங்காரம்:</strong> சொந்தமாக செய்யக்கூடியவை - paper flowers, lanterns, ribbons</li>
                        <li><strong>குடும்ப உதவி:</strong> உறவினர்களின் உதவியுடன் கோலம், மலர் கோர்வை</li>
                        <li><strong>மறுபயன்பாடு:</strong> வீட்டில் உள்ள தங்க பாத்திரங்கள், விளக்குகள் பயன்படுத்துதல்</li>
                        <li><strong>குறைவான ப்ரீமியம் மலர்கள்:</strong> ரோஜா எல்லா இடத்திலும் வேண்டாம், ப்ளஷ் இடத்தில் மட்டும்</li>
                        <li><strong>மாலதீவு மலர்கள்:</strong> உள்ளூர் மலர்கள் மலிவானவை மற்றும் புத்தானவை</li>
                    </ol>
                </div>

                <p>
                    இந்த வழிகளில் 30-40% அலங்கார செலவை குறைக்கலாம். மேலும் பட்ஜெட்
                    திட்டமிடல் குறிப்புகளுக்கு எங்கள்
                    <Link href="/blog/budget-planning-tips" className="text-primary hover:underline mx-1">
                        பட்ஜெட் திட்டமிடல் கட்டுரையை
                    </Link>
                    படிக்கவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    10. சுற்றுச்சூழல் நட்பு அலங்காரம்
                </h2>

                <p>
                    நவீன தம்பதிகள் பலர் சுற்றுச்சூழல் நட்பு அலங்காரத்தை தேர்வு செய்கிறார்கள்.
                    இது பாரம்பரியத்திற்கு எதிரானதும் அல்ல:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>இயற்கை மலர்கள்:</strong> செயற்கை மலர்களை விட real flowers (மறுசுழற்சி செய்யக்கூடியது)</li>
                    <li><strong>மரக்கட்டைகள்:</strong> பாலிஸ்டைக் அலங்காரத்திற்கு பதில் மர அலங்காரம்</li>
                    <li><strong>துணி அலங்காரம்:</strong> பேப்பர் அலங்காரத்திற்கு பதில் துணி (மறுபயன்பாடு)</li>
                    <li><strong>LED விளக்குகள்:</strong> மின்சாரம் குறைந்த சிறிய விளக்குகள்</li>
                    <li><strong>உள்ளூர் மலர்கள்:</strong> வெளியூரிலிருந்து வரவழைக்காமல் உள்ளூர் மலர்கள்</li>
                </ul>

                <hr className="my-12 border-gray-200" />

                <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        மண்டப அலங்காரம் என்பது கலை மற்றும் திட்டமிடலின் கலவை. உங்கள்
                        விருப்பம், பட்ஜெட் மற்றும் மண்டபத்தின் வடிவத்திற்கு ஏற்ப தேர்வு செய்யுங்கள்.
                        மிக முக்கியமாக, அலங்காரம் மணமக்களின் தனித்துவத்தை பிரதிபலிக்க வேண்டும்.
                        பாரம்பரியத்தை மதித்து, நவீன சுவையுடன் கலக்கும் போது, உங்கள்
                        திருமணம் மறக்க முடியாததாக இருக்கும்!
                    </p>
                    <p className="mt-4 text-gray-600">
                        அலங்கார திட்டமிடலை எளிதாக்க, எங்கள்
                        <Link href="/tools/thirumana-thayaripu" className="text-primary hover:underline mx-1">
                            திருமண வேலைகள் பட்டியல் கருவியையும்
                        </Link>
                        பட்ஜெட் கணக்கிட
                        <Link href="/tools/thirumana-selavu" className="text-primary hover:underline mx-1">
                            பட்ஜெட் கால்குலேட்டரையும்
                        </Link>
                        பயன்படுத்தவும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">மண்டப அலங்காரத்திற்கு சராசரியாக எவ்வளவு செலவாகும்?</h3>
                        <p className="text-gray-600">
                            இது மண்டபத்தின் அளவு, மலர் தேர்வு, அலங்காரத்தாளர் கட்டணம் ஆகியவற்றை
                            பொறுத்தது. சராசரியாக ₹50,000 - ₹3,00,000 வரை ஆகலாம். எளிமையான
                            DIY அலங்காரம் ₹20,000க்குள் முடியும், பிரீமியம் டெகோரேட்டர்கள் ₹5 லட்சம் வரை
                            வசூலிக்கலாம்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">எந்த நேரத்தில் அலங்காரம் செய்ய வேண்டும்?</h3>
                        <p className="text-gray-600">
                            பொதுவாக திருமணத்திற்கு முதல் நாள் அல்லது திருமண நாள் காலையில்
                            அலங்காரம் செய்யப்படும். மலர் அலங்காரம் புத்தமாக இருக்க, முகூர்த்தத்திற்கு
                            3-4 மணி நேரம் முன்பு செய்வது சிறந்தது.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">அலங்காரத்தாளர் vs DIY - எது சிறந்தது?</h3>
                        <p className="text-gray-600">
                            பட்ஜெட் மற்றும் நேரம் இருந்தால் DIY செலவு குறைவு. ஆனால்
                            professional decorators அனுபவம், கருவிகள் மற்றும் டிசைன் நுணுக்கம்
                            கொண்டவர்கள். சிக்கலான டிசைனுக்கு அலங்காரத்தாளர் சிறந்தது, எளிய
                            அலங்காரத்திற்கு DIY போதும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">இரவு திருமணத்திற்கு விளக்கு எத்தனை முக்கியம்?</h3>
                        <p className="text-gray-600">
                            இரவு திருமணங்களுக்கு விளக்கு மிக முக்கியம். சரியான லைட்டிங்
                            இல்லாமல் எந்த அலங்காரமும் பயனில்லை. மணமேடை, நுழைவாயில்,
                            photobooth பகுதிகளில் குறிப்பாக கவனம் செலுத்தவும். சாதாரண அலங்காரமும்
                            கூட சரியான விளக்குடன் மாயாஜாலமாக தெரியும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">பட்ஜெட் குறைவாக இருந்தால் எதில் செலவு குறைக்கலாம்?</h3>
                        <p className="text-gray-600">
                            உணவு பகுதி, பாதை அலங்காரம், அதிதி மேசைகள் ஆகியவற்றில் எளிமையாக
                            இருக்கலாம். ஆனால் மணமேடை மற்றும் புகைப்பட பகுதியில் நல்ல
                            முதலீடு செய்வது அவசியம். செயற்கை மலர்களை விட உள்ளூர் மலர்கள்
                            மலிவு மற்றும் அழகானது.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">தொடர்புடைய கட்டுரைகள்:</h3>
                    <p className="text-blue-800 text-sm">
                        அழகான அலங்காரத்தை படம் பிடிக்க <Link href="/blog/choosing-wedding-photographer" className="font-bold underline">புகைப்படக் கலைஞர் தேர்வு</Link> குறித்த எங்களின் வழிகாட்டியைப் பார்க்கவும்.
                        மேலும் மண்டப முகவரியை அழைக்க <Link href="/blog/wedding-invitation-guide" className="font-bold underline">அழைப்பிதழ் வாசகங்கள்</Link> உங்களுக்கு உதவும்.
                    </p>
                </div>

                
                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🛠️</span> எங்களின் இலவச திருமண கருவிகள்
                    </h3>
                    <p className="text-gray-700 mb-6">
                        திருமண ஏற்பாடுகளை எளிமையாக்க நாங்கள் வழங்கும் இலவச டிஜிட்டல் கருவிகளைப் பயன்படுத்தி மகிழுங்கள்.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href="/tools/thirumana-selavu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">💰</span>
                            <div>
                                <div className="font-bold text-gray-900">பட்ஜெட் பிளானர்</div>
                                <div className="text-xs text-gray-500">செலவுகளைத் திட்டமிட</div>
                            </div>
                        </Link>
                        <Link href="/tools/thirumana-thayaripu" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">📝</span>
                            <div>
                                <div className="font-bold text-gray-900">வேலைகள் பட்டியல்</div>
                                <div className="text-xs text-gray-500">Checklist நிர்வகிக்க</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <AuthorBio 
                    name="சித்ரை செல்வன்"
                    role="Founder, Kalyana Veedu"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். தமிழ் குடும்பங்களுக்கான திருமண திட்டமிடல் தளமான கல்யாண வீடுவின் நிறுவனர். பாரம்பரியத்தையும் நவீன தொழில்நுட்பத்தையும் இணைத்து தமிழர்களின் திருமண ஏற்பாடுகளை எளிமையாக்குவதே இவரது நோக்கம்."
                    website="https://selvan.dev"
                />
                <RelatedArticles 
                    currentSlug="/blog/mandapam-decoration" 
                    category="Decoration" 
                />
            </div>
        </article>
    );
}
