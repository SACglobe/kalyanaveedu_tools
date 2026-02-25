import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'தமிழ் நட்சத்திரங்கள் & திருமண பொருத்தம் | Tamil Nakshatras Wedding Guide',
    description: '27 தமிழ் நட்சத்திரங்கள், திருமண பொருத்தம், நட்சத்திர குணங்கள், தோஷங்கள், மற்றும் ஜோதிட முக்கியத்துவம் பற்றிய விரிவான வழிகாட்டி.',
    keywords: ['tamil nakshatras', 'birth star', 'horoscope matching', 'rasi natchathiram', 'wedding compatibility', 'tamil astrology'],
    alternates: {
        canonical: '/blog/tamil-nakshatras-significance',
    },
};

export default function TamilNakshatrasSignificance() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    தமிழ் நட்சத்திரங்கள் & திருமண பொருத்தம்
                </h1>
                <div className="flex justify-center gap-4 text-sm text-gray-500 mb-8">
                    <time dateTime="2026-02-10">பிப்ரவரி 10, 2026</time>
                    <span>•</span>
                    <span>12 நிமிட வாசிப்பு</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-sm">
                    <div className="text-gray-700">
                        <strong>எழுதியவர்:</strong> சித்ரை செல்வன் |
                        <a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            selvan.dev
                        </a>
                    </div>
                </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    தமிழ் கலாச்சாரத்தில், நட்சத்திரம் (பிறந்த நட்சத்திரம்) ஒரு நபரின் ஆகராக்தியை
                    தீர்மானிக்கும் முக்கிய காரணியாகும். திருமண பொருத்தம் பார்க்கும்போது, 27 நட்சத்திரங்களில்
                    மணமக்களின் நட்சத்திரம், ராசி, மற்றும் ஜாதக குணாதிசயங்கள் விரிவாக ஆராயப்படுகின்றன.
                    இந்த வழிகாட்டியில், 27 தமிழ் நட்சத்திரங்கள், அவற்றின் குணங்கள், திருமண பொருத்தம்,
                    மற்றும் ஜோதிட முக்கியத்துவம் பற்றி தெரிந்துகொள்வோம்.
                </p>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 my-8">
                    <h3 className="text-xl font-bold text-purple-900 mb-2">🌟 நட்சத்திரம் என்றால் என்ன?</h3>
                    <p className="text-purple-800 text-sm">
                        நட்சத்திரம் (Nakshatra) என்பது சந்திரன் பூமியை சுற்றி வரும்போது 27 குறிப்பிட்ட
                        நட்சத்திர கூட்டங்களில் (star clusters) ஒவ்வொரு நாளும் ஒன்றில் நிற்பது.
                        நீங்கள் பிறந்த நேரத்தில் சந்திரன் எந்த நட்சத்திரத்தில் இருந்ததோ,
                        அதுவே உங்கள் பிறந்த நட்சத்திரம். இது உங்கள் மனநிலை, குணம், மற்றும்
                        வாழ்க்கை போக்கை பாதிக்கும் என்று ஜோதிட சாஸ்திரம் கூறுகிறது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    27 தமிழ் நட்சத்திரங்கள் குணாதிசயங்கள்
                </h2>

                <p className="mb-6">
                    27 நட்சத்திரங்கள் 12 ராசிகளில் பரவி உள்ளன. ஒவ்வொரு ராசியிலும் 2¼ நட்சத்திரங்கள்
                    இருக்கும். ஒவ்வொரு நட்சத்திரத்திற்கும் 4 பாதங்கள் (quarters) உள்ளன.
                </p>

                <div className="space-y-3 text-sm">
                    {[
                        { name: "அஸ்வினி (Ashwini)", rasi: "மேஷம்", lord: "கேது", traits: "துணிச்ச யான, விரைவான, அழகான, உதவும் குணம்", color: "சிவப்பு" },
                        { name: "பரணி (Bharani)", rasi: "மேஷம்", lord: "சுக்ரன்", traits: "நேர்மை, பொறுப்பு, கடின உழைப்பு, சற்று கோபம்", color: "சிவப்பு" },
                        { name: "கார்த்திகை (Krittika)", rasi: "மேஷம், ரிஷபம்", lord: "சூரியன்", traits: "தீர்மானம், தலைமை குணம், நேரடியான பேச்சு", color: "வெள்ளை" },
                        { name: "ரோகிணி (Rohini)", rasi: "ரிஷபம்", lord: "சந்திரன்", traits: "அழகு, கவர்ச்சி, பண ஈர்ப்பு, சுபாவமான", color: "வெள்ளை" },
                        { name: "மிருகசீரிடம் (Mrigashira)", rasi: "ரிஷபம், மிதுனம்", lord: "செவ்வாய்", traits: "ஆராய்ச்சி மனப்பான்மை, சுற்றுலா விரும்பி, புத்திசாலி", color: "சிவப்பு" },
                        { name: "திருவாதிரை (Ardra)", rasi: "மிதுனம்", lord: "ராகு", traits: "மனம் திறந்த, உணர்ச்சிவசப்படும், மாற்றம் விரும்பி", color: "பச்சை" },
                        { name: "புனர்பூசம் (Punarvasu)", rasi: "மிதுனம், கடகம்", lord: "குரு", traits: "நம்பிக்கை வாதி, நல்லவர், திரும்ப வரும் தன்மை", color: "மஞ்சள்" },
                        { name: "பூசம் (Pushya)", rasi: "கடகம்", lord: "சனி", traits: "பாதுகாப்பான, பராமரிப்பு, நல்ல ஆலோசகர்", color: "சிவப்பு" },
                        { name: "ஆயில்யம் (Ashlesha)", rasi: "கடகம்", lord: "புதன்", traits: "புத்திசாலி, மர்ம மான, சக்தி வாய்ந்த", color: "சிவப்பு" },
                        { name: "மகம் (Magha)", rasi: "சிம்மம்", lord: "கேது", traits: "பெருமை, பரம்பரை மரியாதை, தலைமை", color: "தங்கம்" },
                        { name: "பூரம் (Purva Phalguni)", rasi: "சிம்மம்", lord: "சுக்ரன்", traits: "மகிழ்ச்சி யான, படைப்பாற்றல், கலை ரசனை", color: "வெள்ளை" },
                        { name: "உத்திரம் (Uttara Phalguni)", rasi: "சிம்மம், கன்னி", lord: "சூரியன்", traits: "நல்ல உறவுகள், உதவி குணம், நம்பிக்கை", color: "நீலம்" },
                        { name: "ஹஸ்தம் (Hasta)", rasi: "கன்னி", lord: "சந்திரன்", traits: "திறமை யான கைவினை, மந்திரங்கள், ஆற்றல்", color: "பச்சை" },
                        { name: "சித்திரை (Chitra)", rasi: "கன்னி, துலாம்", lord: "செவ்வாய்", traits: "அழகு, கட்டி டம் வாய்ந்த, கலைஞர்", color: "மஞ்சள்" },
                        { name: "சுவாதி (Swati)", rasi: "துலாம்", lord: "ராகு", traits: "சுதந்திரம் விரும்பி, நெகிழ்வு, வியாபார மனம்", color: "கருப்பு" },
                        { name: "விசாகம் (Vishakha)", rasi: "துலாம், விருச்சிகம்", lord: "குரு", traits: "இலக்கு நோக்கி, சிரமப்பாடு, உறுதி", color: "தங்கம்" },
                        { name: "அனுஷம் (Anuradha)", rasi: "விருச்சிகம்", lord: "சனி", traits: "நட்பு, பக்தி, சமூக மனப்பான்மை", color: "சிவப்பு" },
                        { name: "கேட்டை (Jyeshta)", rasi: "விருச்சிகம்", lord: "புதன்", traits: "பாதுகாப்பான, பொறுப்பு வாய்ந்த, மூத்த குணம்", color: "கருப்பு" },
                        { name: "மூலம் (Moola)", rasi: "தனுசு", lord: "கேது", traits: "ஆழமான சிந்தனை, ஆராய்ச்சி, வேர் கண்டுபிடிப்பவர்", color: "பழுப்பு" },
                        { name: "பூராடம் (Purva Ashadha)", rasi: "தனுசு", lord: "சுக்ரன்", traits: "வெற்றி வாதி, நம்பிக்கை, தைரியம்", color: "வெள்ளை" },
                        { name: "உத்திராடம் (Uttara Ashadha)", rasi: "தனுசு, மகரம்", lord: "சூரியன்", traits: "நல்லொழுக்கம், நீதி, தலைமை", color: "செம்பு" },
                        { name: "திருவோணம் (Shravana)", rasi: "மகரம்", lord: "சந்திரன்", traits: "கேட்கும் திறன், கல்வி, புகழ்", color: "நீலம்" },
                        { name: "அவிட்டம் (Dhanishta)", rasi: "மகரம், கும்பம்", lord: "செவ்வாய்", traits: "செல்வம், இசை, தாளம்", color: "பச்சை" },
                        { name: "சதயம் (Shatabhisha)", rasi: "கும்பம்", lord: "ராகு", traits: "குணப்படுத்தும் ஆற்றல், ரகசியம், மாற்றம்", color: "நீலம்" },
                        { name: "பூரட்டாதி (Purva Bhadra)", rasi: "கும்பம், மீனம்", lord: "குரு", traits: "ஆன்மீகம், விசித்திர மனம், ஆழமான", color: "மஞ்சள்" },
                        { name: "உத்திரட்டாதி (Uttara Bhadra)", rasi: "மீனம்", lord: "சனி", traits: "ஞானம், கட்டுப்பாடு, பொறுமை", color: "செம்பு" },
                        { name: "ரேவதி (Revati)", rasi: "மீனம்", lord: "புதன்", traits: "கருணை, பயணம், நல்ல செல்வம்", color: "பழுப்பு" }
                    ].map((nakshatra, index) => (
                        <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                            <div className="flex items-start gap-3">
                                <span className="font-bold text-primary text-lg">{index + 1}.</span>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-base mb-1">{nakshatra.name}</h3>
                                    <p className="text-xs text-gray-600 mb-1">
                                        <strong>ராசி:</strong> {nakshatra.rasi} |
                                        <strong className="ml-2">அதிபதி:</strong> {nakshatra.lord} |
                                        <strong className="ml-2">நிறம்:</strong> {nakshatra.color}
                                    </p>
                                    <p className="text-xs text-gray-700">
                                        <strong>குணங்கள்:</strong> {nakshatra.traits}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    திருமண பொருத்தம் (Horoscope Matching)
                </h2>

                <p>
                    தமிழ் திருமணங்களில், மணமக்களின் ஜாதகம் பார்ப்பது மிக முக்கியமான மரபு.
                    10 பொருத்தங்கள் (Porutham) பார்க்கப்படுகின்றன, இவற்றில் குறைந்தது 6-7
                    இருந்தால் நல்லது என்று கருதப்படுகிறது.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">10 பொருத்தங்கள்:</h3>

                <div className="space-y-4 my-6">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">1. தினப் பொருத்தம் (Dina Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            நட்சத்திரங்களின் எண்ணிக்கை வேறுபாட்டின் அடிப்படையில் பார்க்கப்படும்.
                            உடல் ஆரோக்கியம், நீண்ட ஆயுள் தொடர்பானது.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">2. கணப் பொருத்தம் (Gana Porutham)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                            3 கணங்கள்: தேவ கணம் (நல்லவர்கள்), மனித கணம் (சாதாரண), ராக்ஷச கணம் (கோபம்).
                            ஒரே கணம் அல்லது compatible கணங்கள் நல்லது.
                        </p>
                        <p className="text-xs text-gray-600">
                            <strong>தேவ கணம்:</strong> அஸ்வினி, மிருகசீரிடம், புனர்பூசம், பூசம், ஹஸ்தம், சுவாதி,
                            அனுஷம், திருவோணம், ரேவதி<br />
                            <strong>மனித கணம்:</strong> பரணி, ரோகிணி, திருவாதிரை, பூரம், உத்திரம், பூராடம்,
                            உத்திராடம், பூரட்டாதி, உத்திரட்டாதி<br />
                            <strong>ராக்ஷச கணம்:</strong> கார்த்திகை, ஆயில்யம், மகம், சித்திரை, விசாகம்,
                            கேட்டை, மூலம், அவிட்டம், சதயம்
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">3. மகேந்திரப் பொருத்தம் (Mahendra Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            குழந்தை பாக்கியம், குடும்ப வளர்ச்சி தொடர்பானது. பெண்ணின் நட்சத்திரத்திலிருந்து
                            ஆணின் நட்சத்திரம் 4, 7, 10, 13, 16, 19, 22, 25-ல் இருக்க வேண்டும்.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">4. ஸ்திரீ தீர்க்கப் பொருத்தம் (Stree Dheerga Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            பெண்ணின் நீண்ட ஆயுள் மற்றும் சௌபாக்கியம் தொடர்பானது. பெண்ணின்
                            நட்சத்திரத்திலிருந்து ஆணின் நட்சத்திரம் 13+ தூரத்தில் இருக்க வேண்டும்.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">5. யோனிப் பொருத்தம் (Yoni Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            உடல் ஈர்ப்பு, பாலியல் இணக்கம் தொடர்பானது. ஒவ்வொரு நட்சத்திரத்திற்கும்
                            ஒரு விலங்கு symbol உண்டு. நட்பான விலங்குகள் நல்லது (உ.ம்: யானை-யானை,
                            குதிரை-குதிரை). எதிரிகள் கூடாது (உ.ம்: பூனை-எலி).
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">6. ராசிப் பொருத்தம் (Rasi Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            ராசிகளின் இணக்கம். சில ராசிகள் நட்பு (சிம்மம்-மேஷம்), சில எதிரி
                            (கடகம்-மகரம்). ஜாதக அதிபதிகள் நட்பு இருக்க வேண்டும்.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">7. ரசியதிபதிப் பொருத்தம் (Rashyadhipati Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            ராசிகளை ஆளும் கிரகங்களின் நட்பு. மனைவி-கணவர் புரிதல், ஒத்துழைப்பு.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">8. வசியப் பொருத்தம் (Vasya Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            ஒருவர் மற்றவரை கவர்ந்திழுக்கும் சக்தி. காதல், ஈர்ப்பு, மனோபலம் தொடர்பானது.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">9. ரசாதிபதிப் பொருத்தம் (Rajju Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            மிக முக்கியம்! 5 ரஜ்ஜு வகைகள்: பாத (கால்), உதர (வயிறு), கண்ட (கழுத்து),
                            சிரோ (தலை), மஸ்தக (உச்சந்தலை). ஒரே ரஜ்ஜு கூடாது - ஆபத்தாக கருதப்படுகிறது.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold mb-2">10. வேதைப் பொருத்தம் (Vedhai Porutham)</h4>
                        <p className="text-sm text-gray-700">
                            சில நட்சத்திர ஜோடிகள் ஒன்றுக்கு ஒன்று வேதை (தடுப்பு). உதாரணம்:
                            அஸ்வினி-கேட்டை, பரணி-அனுஷம். இவை மிக கெடுதானவை, தவிர்க்க வேண்டும்.
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-8">
                    <h3 className="font-bold text-lg text-yellow-900 mb-3">⚖️ பொருத்த எண்ணிக்கை முக்கியத்துவம்</h3>
                    <ul className="space-y-2 text-sm">
                        <li>✓ <strong>10/10:</strong> மிகச் சிறந்தது (அரிதானது)</li>
                        <li>✓ <strong>8-9/10:</strong> மிக நல்லது, Excellence</li>
                        <li>✓ <strong>6-7/10:</strong> நல்லது, ஏற்றுக்கொள்ளத்தக்கது</li>
                        <li>⚠ <strong>4-5/10:</strong> சராசரி, ஜோதிடர் ஆலோசனை தேவை</li>
                        <li>✗ <strong>3-க்கும் குறைவு:</strong> பரிந்துரைக்கப்படவில்லை</li>
                    </ul>
                    <p className="text-xs text-yellow-800 mt-3">
                        <strong>குறிப்பு:</strong> ரசியதிபதிப் பொருத்தம் (ரஜ்ஜு) மற்றும் வேதை கட்டாயம்
                        இருக்க வேண்டும். இவை இல்லாவிட்டால் மற்ற பொருத்தங்கள் இருந்தாலும் ஆபத்து.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    தோஷங்கள் & பரிகாரங்கள்
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">பொதுவான தோஷங்கள்:</h3>

                <div className="space-y-4 my-6">
                    <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-bold text-red-900 mb-2">1. செவ்வாய் தோஷம் (Mangal Dosha / Chevvai Dosham)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                            செவ்வாய் 1, 2, 4, 7, 8, 12-வது வீடுகளில் இருந்தால். காதலில் பிரச்சனை,
                            கணவன்-மனைவி மோதல், delay in marriage.
                        </p>
                        <p className="text-xs text-gray-600">
                            <strong>பரிகாரம்:</strong> செவ்வாய் தோஷம் உள்ள ஒருவரை மற்றொரு செவ்வாய்
                            தோஷம் உள்ளவர் மணக்கலாம் (cancel out). அனுமன் வழிபாடு, செவ்வாய் கிரக பூஜை.
                        </p>
                    </div>

                    <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-bold text-red-900 mb-2">2. ராகு-கேது தோஷம்</h4>
                        <p className="text-sm text-gray-700 mb-2">
                            ராகு/கேது 7-வது வீட்டில் (marriage house) இருந்தால். திருமண தாமதம்,
                            misunderstandings, சந்தேகம்.
                        </p>
                        <p className="text-xs text-gray-600">
                            <strong>பரிகாரம்:</strong> நாக தோஷம் நிவர்த்தி பூஜை, ராகு/கேது கால பூஜை,
                            நாக ஸ்தலங்களுக்கு சென்று வழிபாடு.
                        </p>
                    </div>

                    <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-bold text-red-900 mb-2">3. கால சர்ப்ப தோஷம் (Kala Sarpa Dosha)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                            எல்லா கிரகங்களும் ராகு-கேது இடையே அகப்பட்டால். வாழ்க்கையில்
                            struggle, delayed success, மன அழுத்தம்.
                        </p>
                        <p className="text-xs text-gray-600">
                            <strong>பரிகாரம்:</strong> கால சர்ப்ப நிவர்த்தி ஹோமம், திருச்செந்தூர் கோவில்,
                            ராமேஸ்வரம் யாத்திரை.
                        </p>
                    </div>

                    <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-bold text-red-900 mb-2">4. ரஜ்ஜு தோஷம் (Rajju Dosha)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                            மணமக்கள் இருவரும் ஒரே ரஜ்ஜுவில் பிறந்தால். உயிருக்கே ஆபத்து என்று
                            சொல்லப்படுகிறது (மிகை வாக சொல்லப்படுவதாக நவீன சிந்தனையாளர்கள் கூறுகின்றனர்).
                        </p>
                        <p className="text-xs text-gray-600">
                            <strong>பரிகாரம்:</strong> மகா மிருத்யுஞ்சய ஜெபம், பெருமாள்/சிவன் கோவில்களில்
                            விசேஷ பூஜை, தானம் செய்தல்.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl my-8">
                    <h3 className="font-bold text-lg text-blue-900 mb-3">💭 நவீன கண்ணோட்டம்</h3>
                    <p className="text-sm text-blue-800">
                        பலர் ஜோதிடத்தை நம்புவது கலாச்சார பாரம்பரியம் மற்றும் குடும்ப மரபு.
                        ஆனால், நவீன காலத்தில் அறிவியல் சிந்தனையாளர்கள் பொருத்தம் பலஇ அற்றனவா
                        என விவாதிக்கின்றனர். பொருத்தம் இல்லாமல் மணமுடித்து சந்தோஷமாக வாழும்
                        ஜோடிகளும் உண்டு. இறுதியில், பரஸ்பர புரிதல், அன்பு, மரியாதை ஆகியவையே
                        வெற்றிகரமான திருமணத்திற்கு மிக முக்கியம். ஜோதிடம் ஒரு reference மட்டுமே,
                        முடிவு உங்கள் பரஸ்பர சம்மதமே!
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    சுப முகூர்த்த தேர்வில் நட்சத்திர பங்கு
                </h2>

                <p>
                    திருமண தேதி தேர்வில், நட்சத்திரங்கள் முக்கிய பங்கு வகிக்கின்றன:
                </p>

                <div className="bg-green-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-green-900 mb-3">✅ திருமணத்திற்கு நல்ல நட்சத்திரங்கள்:</h3>
                    <p className="text-sm mb-2">
                        ரோகிணி, உத்திரம், ஹஸ்தம், சுவாதி, அனுஷம், திருவோணம், உத்திராடம்,
                        உத்திரட்டாதி, ரேவதி - இவை திருமணத்திற்கு மிகவும் சிறந்தவை.
                    </p>
                    <p className="text-xs text-green-800">
                        இந்த நட்சத்திரங்களில் நடக்கும் திருமணங்கள் நிலைத்த அன்பு, செல்வம்,
                        மற்றும் ஆரோக்கியத்திற்கு நல்லது என்று நம்பப்படுகிறது.
                    </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-red-900 mb-3">❌ திருமணத்திற்கு தவிர்க்க வேண்டிய நட்சத்திரங்கள்:</h3>
                    <p className="text-sm mb-2">
                        பரணி, ஆயில்யம், மூலம், கேட்டை - இவை கெடுதலான விளைவுகளை தரலாம்
                        என்பது பாரம்பரிய நம்பிக்கை.
                    </p>
                    <p className="text-xs text-red-800">
                        ஆனாலும், நல்ல லக்னம் (வேளை) இருந்தால் இந்த நட்சத்திரங்களிலும்
                        திருமணம் நடக்கலாம் என்று சில ஜோதிடர்கள் கூறுகின்றனர்.
                    </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        தமிழ் நட்சத்திரங்கள் நமது கலாச்சார பாரம்பரியின் முக்கிய பகுதி.
                        பொருத்தம் பார்ப்பது பல தலைமுறைகளாக பின்பற்றப்படும் வழக்கம்.
                        இது குடும்பங்களுக்கு மனநிம்மதி அளிக்கிறது, அவர்கள் தங்கள் முன்னோர்
                        ஆசியுடன் திருமணம் செய்வதாக ஓரு உணர்வு. அதே நேரத்தில், நவீன காலத்தில்
                        காதல், பரஸ்பர மரியாதை, புரிதல் ஆகியவையும் மிக முக்கியம். உங்களுக்கு
                        ஜோதிடம் மீது நம்பிக்கை இருந்தாலும் இல்லாவிட்டாலும், சரியான நபரை
                        தேர்வு செய்து, மகிழ்ச்சியான வாழ்க்கை வாழ்வதே இறுதியான இலக்கு!
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">என் நட்சத்திரம் என்னவென்று எப்படி கண்டுபிடிப்பது?</h3>
                        <p className="text-gray-600 text-sm">
                            உங்கள் பிறந்த தேதி, நேரம், மற்றும் இடம் தெரிந்தால், ஜோதிடரிடம்
                            கேட்கலாம் அல்லது online ஜாதக software பயன்படுத்தி கண்டுபிடிக்கலாம்.
                            நீங்கள் பிறந்த நேரத்தில் சந்திரன் எந்த நட்சத்திரத்தில் இருந்ததோ அதுவே
                            உங்கள் நட்சத்திரம். பிறந்த நேரம் தெரியாவிட்டால் துல்லியமாக கண்டுபிடிக்க முடியாது.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">பொருத்தம் இல்லாமல் திருமணம் செய்யலாமா?</h3>
                        <p className="text-gray-600 text-sm">
                            நிச்சயமாக முடியும்! பல நவீன ஜோடிகள் பொருத்தம் பார்க்காமலே
                            திருமணம் செய்து வெற்றிகரமாக வாழ்கின்றனர். காதல் திருமணங்களில்
                            பெரும்பாலும் பொருத்தம் பார்ப்பதில்லை. கலாச்சார நம்பிக்கை மற்றும்
                            குடும்ப ஒப்புதல் முக்கியம் எனில், ஜோதிடரிடம் ஆலோசனை பெறலாம்.
                            சில சிறிய தோஷங்களுக்கு பரிகாரங்கள் செய்ய முடியும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">செவ்வாய் தோஷம் மிக ஆபத்தானதா?</h3>
                        <p className="text-gray-600 text-sm">
                            பாரம்பரிய நம்பிக்கைப்படி ஆம், ஆனால் நவீன ஜோதிடர்கள் இது மிகைப்படுத்தப்பட்டது
                            என்று கூறுகின்றனர். உண்மையில் 40-50% மக்களுக்கு செவ்வாய் தோஷம் உள்ளது!
                            இருவருக்கும் செவ்வாய் தோஷம் இருந்தால் cancel out ஆகும். 28 வயதுக்கு மேல்
                            இது தானாகவே குறைந்துவிடும் என்றும் சொல்லப்படுகிறது. பயப்படாமல் நல்ல
                            ஜோதிடரிடம் ஆலோசனை பெறுங்கள், பரிகாரங்கள் செய்யலாம்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">10-ல் எத்தனை பொருத்தங்கள் இருந்தால் போதும்?</h3>
                        <p className="text-gray-600 text-sm">
                            குறைந்தது 6-7 பொருத்தங்கள் நல்லது என்று பொதுவாக கூறப்படுகிறது.
                            8-10 இருந்தால் மிகச் சிறந்தது. ஆனால், முக்கியமான பொருத்தங்கள்
                            (ரஜ்ஜு, வேதை, கணம்) கட்டாயம் இருக்க வேண்டும். Numbers மட்டும்
                            important அல்ல, quality of matches ம் முக்கியம். ஒரு அனுபவமுள்ள
                            ஜோதிடர் ஜாதகத்தை முழுமையாக பார்த்து முடிவு சொல்லுவார்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">ஜோதிடம் அறிவியல்பூர்வமானதா?</h3>
                        <p className="text-gray-600 text-sm">
                            இது ஒரு விவாதத்திற்குரிய விஷயம். பாரம்பரிய நம்பிக்கையாளர்கள்
                            ஜோதிடம் ஒரு அறிவியல் என்பார்கள் (கோள்களின் அடிப்படை). நவீன
                            விஞ்ஞானிகள் இதை pseudoscience என்று சொல்வார்கள் (proof இல்லை).
                            இறுதியில், இது ஒரு கலாச்சார பாரம்பரியம், ம் நம்பிக்கை சார்ந்தது.
                            எவருக்கும் கட்டாயம் இல்லை, ஆனால் மரியாதை செலுத்தலாம். நீங்கள்
                            சௌகரியமாக உணரும் முறையைத் தேர்ந்தெடுக்கலாம்.
                        </p>
                    </div>
                </div>

                <div className="bg-orange-50 p-8 rounded-2xl mt-12 border border-orange-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">எழுதியவர் பற்றி</h3>
                    <p className="text-gray-700 mb-3">
                        <strong>சித்ரை செல்வன்</strong> கல்யாண வீடு தளத்தின் நிறுவனர்.
                        தமிழ் திருமண திட்டமிடலை எளிமையாக்கும் நோக்கோடு, தரமான கருவிகள்
                        மற்றும் தகவல்களை தமிழ் குடும்பங்களுக்கு வழங்குகிறார். பாரம்பரியமும்
                        நவீன தொழில்நுட்பமும் இணையும் இடத்தில் செயல்படுகிறார்.
                    </p>
                    <p className="text-gray-600 text-sm">
                        மேலும் தகவல்களுக்கு:
                        <a href="https://selvan.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            selvan.dev
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
}
