import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBlock from '@/components/TrustBlock';

export const metadata: Metadata = {
    title: 'திருமண வேலைகள் பட்டியல்: 6 மாத முழுமையான திட்டமிடல் வழிகாட்டி | Wedding Checklist',
    description: 'திருமணத்திற்கு 6 மாதங்கள் முன்பு முதல் திருமண நாள் வரை செய்ய வேண்டிய அனைத்து வேலைகளின் முழுமையான பட்டியல். Wedding Checklist in Tamil.',
    keywords: ['wedding checklist tamil', 'marriage planning tamil', 'thirumana velai pattiyal', 'tamil wedding guide'],
    alternates: {
        canonical: '/blog/thirumana-velai-pattiyal',
    },
};

export default function WeddingChecklistGuide() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    திருமண வேலைகள் பட்டியல்: 6 மாத முழுமையான திட்டமிடல் வழிகாட்டி
                </h1>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="பிப்ரவரி 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    திருமணம் என்பது ஆயிரம் காலத்து பயிர் என்பார்கள். அத்தகைய முக்கியமான நிகழ்வை
                    எவ்வித பதற்றமும் இல்லாமல் நடத்த முறையான திட்டமிடல் அவசியம்.
                    கடைசி நேர பரபரப்பை தவிர்க்க, குறைந்தது 6 மாதங்களுக்கு முன்பே
                    வேலைகளைத் தொடங்குவது புத்திசாலித்தனம்.
                </p>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
                    <h3 className="text-xl font-bold text-orange-900 mb-2">💡 ஒரு நிமிடம்!</h3>
                    <p className="text-orange-800">
                        இந்த கட்டுரையை படிக்கும் முன், எங்கள்
                        <Link href="/tools/thirumana-thayaripu" className="text-primary font-bold hover:underline mx-1">
                            இலவச திருமண வேலைகள் பட்டியல் கருவியை (Checklist Tool)
                        </Link>
                        பார்வையிட்டீர்களா? அங்கு நீங்கள் முடித்த வேலைகளை 'டிக்' செய்து நிர்வகிக்கலாம்!
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. 6 மாதங்களுக்கு முன்பு (The Big Start)</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>நிச்சயதார்த்தம் & தேதி முடிவு:</strong> முதலில் ஜோதிடர்களிடம் ஆலோசித்து
                        <Link href="/tools/subha-muhurtham" className="text-primary hover:underline mx-1">
                            சிறந்த சுப முகூர்த்த தேதியை
                        </Link>
                        தேர்வு செய்யுங்கள்.
                    </li>
                    <li>
                        <strong>பட்ஜெட் நிர்ணயம்:</strong> மொத்த செலவு எவ்வளவு செய்ய திட்டமிட்டுள்ளீர்கள்?
                        நகைக்கு எவ்வளவு, மண்டபத்திற்கு எவ்வளவு என்று பிரித்து எழுதுங்கள்.
                        இதற்கு எங்கள் <Link href="/tools/thirumana-selavu" className="text-primary hover:underline mx-1">பட்ஜெட் கால்குலேட்டரை</Link> பயன்படுத்தலாம்.
                    </li>
                    <li>
                        <strong>மண்டபம் முன்பதிவு:</strong> நல்ல தேதிகளில் மண்டபங்கள் சீக்கிரம் நிரம்பிவிடும்.
                        எனவே 6 மாதம் முன்பே அட்வான்ஸ் கொடுப்பது நல்லது.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. 4 மாதங்களுக்கு முன்பு</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li><strong>பட்டுப்புடவை & நகைகள்:</strong> முகூர்த்த பட்டு மற்றும் தாலி நகைகளை வாங்க இதுவே சரியான நேரம்.</li>
                    <li><strong>கேட்டரிங் (உணவு):</strong> சைவமா, அசைவமா? எத்தனை நபர்கள்? என்பதைப் பொறுத்து சிறந்த சமையல் கலைஞரை ஒப்பந்தம் செய்யுங்கள்.</li>
                    <li><strong>புகைப்படக் கலைஞர் (Photography):</strong> சிறந்த candid photographers கிடைப்பது அரிது. முன்கூட்டியே புக் செய்வது சிறந்தது.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. 2 மாதங்களுக்கு முன்பு</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li><strong>அழைப்பிதழ் (Invitation):</strong> பத்திரிக்கை டிசைனை தேர்வு செய்து, அச்சிடக் கொடுங்கள்.</li>
                    <li><strong>விருந்தினர் பட்டியல்:</strong> வெளியூர் உறவினர்கள், உள்ளூர் நண்பர்கள் என பட்டியலைத் தயார் செய்யுங்கள்.</li>
                    <li><strong>தங்கும் வசதி:</strong> வெளியூர் விருந்தினர்களுக்கு தங்கும் விடுதிகளை (Rooms) புக் செய்யுங்கள்.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. 1 மாதம் முன்பு (The Final Countdown)</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li><strong>அழைப்பு விடுத்தல்:</strong> நேரில் சென்று பத்திரிக்கை வைக்கும் படலம் தொடங்க வேண்டும்.</li>
                    <li><strong>மேக்கப் கலைஞர்:</strong> மணப்பெண்/மணமகன் அலங்காரத்திற்கு முன்பதிவு உறுதி செய்யுங்கள்.</li>
                    <li><strong>வாகன ஏற்பாடு:</strong> மண்டபத்திற்குச் செல்ல பேருந்து அல்லது கார் தேவைப்பட்டால் ஏற்பாடு செய்யுங்கள்.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. 1 வாரம் முன்பு</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li><strong>மெஹந்தி & சங்கீத்:</strong> வட இந்திய பாணி கொண்டாட்டங்கள் இருந்தால் அதற்கான ஏற்பாடுகளை கவனித்தல்.</li>
                    <li><strong>உடை சரிபார்த்தல் (Trial):</strong> முகூர்த்த உடைகள் சரியான அளவில் உள்ளதா என சோதித்துப் பார்ப்பது அவசியம்.</li>
                    <li><strong>சிறு பொருட்கள்:</strong> தாம்பூலம் பைகள், தேங்காய், பழம் போன்ற பூஜை பொருட்களை வாங்கி வையுங்கள்.</li>
                </ul>

                <hr className="my-12 border-gray-200" />

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">திட்டமிடல் உதவிகள்:</h3>
                    <p className="text-blue-800 text-sm">
                        வேலைப் பட்டியலோடு சேர்த்து எங்களின் <Link href="/blog/budget-planning-tips" className="font-bold underline">பட்ஜெட் திட்டமிடல்</Link> ஆலோசனைகளையும்,
                        வெளியூர் திருமணத் திட்டமிடலுக்கு <Link href="/blog/destination-wedding-planning" className="font-bold underline">டெஸ்டினேஷன் வெடிங்</Link> வழிகாட்டியையும் பயன்படுத்தவும்.
                    </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        திருமணம் என்பது ஒரு நாள் நிகழ்வு மட்டுமல்ல, அது வாழ்நாள் நினைவலை.
                        சிறிய தவறுகள் கூட மன உளைச்சலை தரலாம். எனவே திட்டமிடுங்கள், செயல்படுங்கள்.
                    </p>
                    <p className="mt-4 font-medium text-primary">
                        உங்கள் திருமண வேலைகளை எளிமையாக்க
                        <Link href="/tools/thirumana-thayaripu" className="underline ml-1">
                            கல்யாண வீடு Checklist கருவியை
                        </Link> பயன்படுத்துங்கள்!
                    </p>
                </div>
            </div>
        </article>
    );
}
