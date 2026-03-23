import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';

export const metadata: Metadata = {
    title: 'திருமண அழைப்பிதழ் வாசகங்கள் வழிகாட்டி | Tamil Wedding Invitation Wording Guide',
    description: 'பாரம்பரிய மற்றும் நவீன தமிழ் திருமண அழைப்பிதழ் வாசகங்கள், எழுத்து முறை, என்ன சேர்க்க வேண்டும், பொதுவான தவறுகள் மற்றும் மாதிரி வாசகங்கள்.',
    keywords: ['tamil wedding invitation', 'thirum ana azhaipu', 'wedding card wording', 'invitation samples tamil', 'traditional invitation format'],
    alternates: {
        canonical: '/blog/wedding-invitation-guide',
    },
};

export default function WeddingInvitationGuide() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: 'திருமண அழைப்பிதழ் வாசகங்கள் வழிகாட்டி | Tamil Wedding Invitation Wording Guide',
                    description: 'பாரம்பரிய மற்றும் நவீன தமிழ் திருமண அழைப்பிதழ் வாசகங்கள், எழுத்து முறை, என்ன சேர்க்க வேண்டும், பொதுவான தவறுகள் மற்றும் மாதிரி வாசகங்கள்.',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-02-25',
                    slug: '/blog/wedding-invitation-guide'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'அழைப்பிதழ் வாசகங்கள்', item: '/blog/wedding-invitation-guide' }
                    ]
                }}
            />
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    திருமண அழைப்பிதழ்: சிறந்த வாசகங்கள் வழிகாட்டி
                </h1>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="பிப்ரவரி 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    திருமண அழைப்பிதழ் என்பது உங்கள் சிறப்பு நாளின் முதல் எதிரொலி.
                    விருந்தினர்கள் கையில் வரும் முதல் விஷயம் இது தான். எனவே அழைப்பிதழின்
                    வார்த்தைகள், வடிவமைப்பு, தகவல்கள் அனைத்தும் முக்கியம். பாரம்பரிய தமிழ்
                    திருமண அழைப்பிதழ் எப்படி எழுதுவது என்பதை இந்த வழிகாட்டியில் பார்க்கலாம்.
                </p>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 my-8">
                    <h3 className="text-xl font-bold text-purple-900 mb-2">📅 அழைப்பிதழில் சரியான தேதியை குறிப்பிடுங்கள்</h3>
                    <p className="text-purple-800">
                        சுப முகூர்த்த தேதியை தேர்வு செய்ய எங்கள்
                        <Link href="/tools/subha-muhurtham" className="text-primary font-bold hover:underline mx-1">
                            சுப முகூர்த்த காலண்டரை
                        </Link>
                        பயன்படுத்தவும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    பாரம்பRIய தமிழ் அழைப்பிதழ் வடிவம்
                </h2>

                <p>
                    பாரம்பரிய தமிழ் அழைப்பிதழில் இந்த வரிசையில் தகவல்கள் இருக்கும்:
                </p>

                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 my-6">
                    <h3 className="font-bold text-lg mb-3">அழைப்பிதழ் கட்டமைப்பு:</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>கணபதி ஸ்லோகம் / ஓம் ஸ்ரீ கணேசாய நம:</li>
                        <li>திருமண அழைப்பு வரிகள்</li>
                        <li>மணமகன் தகவல்கள் (பெயர், பெற்றோர் பெயர்)</li>
                        <li>மணமகள் தகவல்கள் (பெயர், பெற்றோர் பெயர்)</li>
                        <li>முகூர்த்த தேதி மற்றும் நேரம்</li>
                        <li>மண்டப விவரங்கள் (பெயர், முகவரி)</li>
                        <li>உணவு விருந்து விவரங்கள்</li>
                        <li>தொடர்பு எண்கள்</li>
                        <li>ஆசீர்வாதம் / முடிவுரை வரிகள்</li>
                    </ol>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    மாதிரி வாசகங்கள் - பாரம்பரியம்
                </h2>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 my-6">
                    <p className="text-center font-bold text-lg mb-4">ஓம் ஸ்ரீ கணேசாய நம:</p>

                    <p className="mb-4 italic text-center">
                        திருமண அழைப்பு
                    </p>

                    <p className="mb-3">
                        பரம பூஜ்ய ஸ்ரீ [தாத்தா பெயர்] அவர்களின் பேரனும், <br />
                        [தந்தை பெயர்] மற்றும் [தாய் பெயர்] அவர்களின் அன்பு மகனுமான
                    </p>

                    <p className="text-center font-bold text-xl my-3">
                        திரு. [மணமகன் பெயர்]
                    </p>

                    <p className="mb-3">
                        அவர்களுக்கும்,
                    </p>

                    <p className="mb-3">
                        பரம பூஜ்ய ஸ்ரீ [தாத்தா பெயர்] அவர்களின் பேத்தியும், <br />
                        [தந்தை பெயர்] மற்றும் [தாய் பெயர்] அவர்களின் அருமை மகளுமான
                    </p>

                    <p className="text-center font-bold text-xl my-3">
                        செல்வி. [மணமகள் பெயர்]
                    </p>

                    <p className="mb-3">
                        அவர்களுக்கும் நடைபெறவிருக்கும் திருமண நிச்சயதார்த்தம்
                        மற்றும் சுப மாங்கல்ய நிகழ்ச்சிக்கு உங்களையும் உங்கள்
                        குடும்பத்தினரையும் அன்புடன் அழைக்கிறோம்.
                    </p>

                    <p className="font-bold mt-6">
                        முகூர்த்த காலம்: [date in Tamil - உதா: தை மாதம் 15, சனிக்கிழமை]<br />
                        நேரம்: காலை / மாலை [time]<br />
                        மண்டபம்: [Hall Name]<br />
                        முகவரி: [Full Address]
                    </p>

                    <p className="text-center mt-6 italic">
                        உங்கள் வருகையும் ஆசீர்வாதமும் எங்கள் மகிழ்ச்சியை பன்மடங்காக்கும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    நவீன இரு மொழி அழைப்பிதழ்
                </h2>

                <p>
                    இன்றைய தலைமுறையில் பலர் தமிழ் மற்றும் ஆங்கிலம் இரண்டிலும்
                    அழைப்பிதழ் எழுதுகிறார்கள். இது வெளிநாட்டில் உள்ள உறவினர்களுக்கு மற்றும்
                    மொழி புரியாத நண்பர்களுக்கு உதவும்.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
                    <h3 className="font-bold mb-2">இரு மொழி வாசகம் உதாரணம்:</h3>
                    <p className="text-sm">
                        <strong>Tamil:</strong> "எங்கள் அன்பு மகன் [பெயர்] அவர்களுக்கும்..."<br />
                        <strong>English:</strong> "Request the pleasure of your company at the wedding of our beloved son [Name] with..."
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அழைப்பிதழில் கட்டாயம் இருக்க வேண்டியவை
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>தேதி மற்றும் நேரம்:</strong> தெளிவாக குறிப்பிடவும். காலை/மாலை,
                        முகூர்த்த நேரம் குறிப்பிடவும். ஆங்கில calendar date-யும் கொடுக்கலாம்.
                    </li>
                    <li>
                        <strong>மண்டப விவரங்கள்:</strong> பூர்ண முகவரி, Google Maps link (QR code),
                        landmark குறிப்பிடவும்.
                    </li>
                    <li>
                        <strong>தொடர்பு எண்கள்:</strong> குறைந்தது இரண்டு தொடர்பு எண்கள்
                        (மாப்பிள்ளை மற்றும் பெண் வீட்டு).
                    </li>
                    <li>
                        <strong>உணவு விருந்து நேரம்:</strong> முகூர்த்தம் முடிந்து உணவு எப்போது
                        வழங்கப்படும் என்பதை குறிப்பிடவும்.
                    </li>
                    <li>
                        <strong>Dress Code (விரும்பினால்):</strong> பாரம்பரிய உடை எதிர்பார்த்தால்
                        குறிப்பிடவும்.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    பொதுவான தவறுகள் - தவிர்க்க வேண்டியவை
                </h2>

                <div className="bg-red-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-lg text-red-900 mb-3">❌ தவிர்க்க வேண்டியவை:</h3>
                    <ul className="space-y-2">
                        <li>✗ தேதி தவறாக இருத்தல் (மூன்று முறை சரிபார்க்கவும்!)</li>
                        <li>✗ நேரம் தெளிவில்லாமல் இருத்தல் (AM/PM குறிப்பிடவும்)</li>
                        <li>✗ முகவரி முழுமையாக இல்லாம்ல் இருத்தல்</li>
                        <li>✗ பெற்றோர் பெயர்களில் எழுத்துப் பிழை</li>
                        <li>✗ தொடர்பு எண்கள் இல்லாமல் இருத்தல்</li>
                        <li>✗ மிかவும் நீளமான வாசகங்கள் (படிக்க கஷ்டமாக இருக்கும்)</li>
                        <li>✗ மிகவும் சிறிய எழுத்துக்கள் (வயதானவர்கள் படிக்க முடியாது)</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    டிஜிட்டல் vs அச்சு அழைப்பிதழ்
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="font-bold text-green-900 mb-3">அச்சு அழைப்பிதழ் (Print)</h3>
                        <p className="text-sm mb-2"><strong>நன்மைகள்:</strong></p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>பாரம்பரிய மதிப்பு</li>
                            <li>கைவசம் வைத்திருக்கலாம்</li>
                            <li>வயதானவர்களுக்கு வசதி</li>
                            <li>அதிக நம்பகத்தன்மை</li>
                        </ul>
                        <p className="text-sm mt-2"><strong>தீமைகள்:</strong></p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>அதிக செலவு (₹20-100/card)</li>
                            <li>நேரம் எடுக்கும்</li>
                            <li>கூரியர் செலவு</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-bold text-blue-900 mb-3">டிஜிட்டல் அழைப்பிதழ் (Digital)</h3>
                        <p className="text-sm mb-2"><strong>நன்மைகள்:</strong></p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>உடனடியாக அனுப்பலாம்</li>
                            <li>மிக குறைந்த செலவு/இலவசம்</li>
                            <li>சுற்றுச்சூழல் நட்பு</li>
                            <li>Video/Animation சேர்க்கலாம்</li>
                        </ul>
                        <p className="text-sm mt-2"><strong>தீமைகள்:</strong></p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>பாரம்பரிய உணர்வு குறைவு</li>
                            <li>வயதானவர்கள் பார்க்க மாட்டார்கள்</li>
                            <li>Spam-ல் சிக்கலாம்</li>
                        </ul>
                    </div>
                </div>

                <p>
                    <strong>பரிந்துரை:</strong> முக்கிய உறவினர்களுக்கு அச்சு அழைப்பிதழ்,
                    மற்றவர்களுக்கு டிஜிட்டல் அழைப்பிதழ் அனுப்புவது சிறந்த தேர்வு.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    சிறப்பு குறிப்புகள் & டிப்ஸ்
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>Proof Reading:</strong> அச்சிடுவதற்கு முன்பு குறைந்தது 3 பேர்
                        படித்து சரிபார்க்கட்டும். சிறிய தவறும் ஆயிரம் கார்டுகளில்
                        தெரியும்.
                    </li>
                    <li>
                        <strong>Sample Print:</strong> பெரிய அளவு பிரின்ட் எடுப்பதற்கு முன்பு
                        ஒரு sample print எடுத்து பார்க்கவும்.
                    </li>
                    <li>
                        <strong>Buffer Cards:</strong> தேவையான எண்ணிக்கையை விட 10-15% கூடுதலாக
                        பிரின்ட் எடுக்கவும் (last minute guests-க்கு).
                    </li>
                    <li>
                        <strong>Timeline:</strong> திருமணத்திற்கு குறைந்தது 3-4 வாரங்களுக்கு முன்பே
                        அழைப்பிதழ் அனுப்பவும்.
                    </li>
                </ul>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">திட்டமிடல் டிப்ஸ்</h3>
                    <p className="text-gray-700">
                        அழைப்பிதழ் வடிவமைப்பு, அச்சிடுதல், விநியோகம் ஆகியவற்றையும்
                        உங்கள் திருமண checklist-ல் சேர்த்துக்கொள்ளுங்கள். எங்கள்
                        <Link href="/tools/thirumana-thayaripu" className="text-primary hover:underline mx-1">
                            திருமண வேலைகள் பட்டியல் கருவியை
                        </Link>
                        பயன்படுத்தி ஒரு ஒழுங்கான திட்டம் போடுங்கள். அழைப்பிதழ் செலவையும்
                        <Link href="/tools/thirumana-selavu" className="text-primary hover:underline mx-1">
                            பட்ஜெட் கால்குலேட்டரில்
                        </Link>
                        சேர்த்துக் கொள்ளுங்கள்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">திருமண அழைப்பிதழ் எத்தனை நாட்களுக்கு முன் அனுப்ப வேண்டும்?</h3>
                        <p className="text-gray-600">
                            குறைந்தது 3-4 வாரங்களுக்கு முன்பு அனுப்புவது சிறந்தது. வெளிநாட்டில்
                            உள்ளவர்களுக்கு 6-8 வாரங்களுக்கு முன்பே அனுப்பவும். Very close
                            family-க்கு save-the-date message முன்கூட்டியே அனுப்பலாம்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">அழைப்பிதழில் +1 (கூடுதல் நபர்) எப்படி குறிப்பிடுவது?</h3>
                        <p className="text-gray-600">
                            "உங்களையும் உங்கள் குடும்பத்தினரையும்" என்று குறிப்பிட்டால் அது
                            family invite. ஒரே நபருக்கு மட்டும் என்றால் "உங்களை அன்புடன் அழைக்கிறோம்"
                            என்று குறிப்பிடவும். Envelope-ல் பெயர்களை தெளிவாக எழுதவும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">அழைப்பிதழ் print செய்ய எவ்வளவு செலவாகும்?</h3>
                        <p className="text-gray-600">
                            எளிய அழைப்பிதழ் ₹15-30 per card. மத்திம தரம் ₹35-60. Premium
                            designer cards ₹80-200 வரை ஆகலாம். 100-500 cards print செய்தால்
                            bulk discount கிடைக்கும். ஒட்டு மொத்த செலவு: ₹5,000-₹50,000.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">தமிழ் மற்றும் ஆங்கிலம் இரண்டிலும் எழுத வேண்டுமா?</h3>
                        <p className="text-gray-600">
                            இது முற்றிலும் உங்கள் விருப்பம். வெளிநாட்டில் உள்ளவர்கள், தமிழ்
                            படிக்க தெரியாத நண்பர்கள் இருந்தால் bilingual அழைப்பிதழ் நல்லது.
                            முழுக்க முழுக்க தமிழ் குடும்பத்தினர் மட்டும் என்றால் தமிழில் மட்டும் போதும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">டிஜிட்டல் அழைப்பிதழ் பாரம்பரியத்திற்கு எதிரானதா?</h3>
                        <p className="text-gray-600">
                            இல்லை! வசதி, செலவு குறைப்பு, சுற்றுச்சூழல் பாதுகாப்பு ஆகியவற்றிற்காக
                            பலர் digital invites பயன்படுத்துகின்றனர். முக்கிய உறவினர்களுக்கு
                            print, மற்றவர்களுக்கு digital என்று பிரித்து அனுப்பலாம். Important
                            என்பது அன்பும் மரியாதையும், அழைப்பிதழ் format அல்ல.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">மேலும் அறிய:</h3>
                    <p className="text-blue-800 text-sm">
                        அழைப்பிதழ் அனுப்பிய பிறகு செய்ய வேண்டிய வேலைகளை <Link href="/blog/thirumana-velai-pattiyal" className="font-bold underline">திருமண வேலைப் பட்டியல்</Link> மூலம் சரிபார்க்கவும்.
                        மண்டப அலங்காரத்திற்கு <Link href="/blog/mandapam-decoration" className="font-bold underline">அலங்கார யோசனைகள்</Link> உங்களுக்கு உதவும்.
                    </p>
                </div>

                <AuthorBio 
                    name="சித்ரை செல்வன்"
                    role="Founder, Kalyana Veedu"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். தமிழ் திருமண பாரம்பரியங்களை புதிய தலைமுறைக்கு எளிமையாக தெரிவிக்கும் நோக்கத்துடன் செயல்படுகிறார். மென்பொருள் பொறியியல் மற்றும் தமிழ் பாரம்பரியத்தை இணைக்கும் பாலமாக இருக்கிறார்."
                    website="https://selvan.dev"
                />
            </div>
        </article>
    );
}
