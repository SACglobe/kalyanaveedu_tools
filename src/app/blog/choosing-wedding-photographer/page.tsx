import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';

export const metadata: Metadata = {
    title: 'திருமண புகைப்படக்காரர் தேர்வு: முழுமையான வழிகாட்டி | Wedding Photographer Guide',
    description: 'சிறந்த திருமண புகைப்படக்காரரை எப்படி தேர்வு செய்வது? பாரம்பரிய vs candid photography, கேட்க வேண்டிய கேள்விகள், விலை நிர்ணயம், ஒப்பந்த முக்கிய விஷயங்கள்.',
    keywords: ['wedding photographer tamil', 'candid photography', 'traditional photography', 'wedding videography', 'photographer contract', 'photography pricing'],
    alternates: {
        canonical: '/blog/choosing-wedding-photographer',
    },
};

export default function WeddingPhotographerGuide() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* <!-- Schema.org Markup --> */}
            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'திருமண புகைப்படக்காரர் தேர்வு: முழுமையான வழிகாட்டி | Wedding Photographer Guide',
                    description: 'சிறந்த திருமண புகைப்படக்காரரை எப்படி தேர்வு செய்வது? பாரம்பரிய vs candid photography, கேட்க வேண்டிய கேள்விகள், விலை நிர்ணயம், ஒப்பந்த முக்கிய விஷயங்கள்.',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-02-25',
                    slug: '/blog/choosing-wedding-photographer'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'புகைப்படக்காரர் தேர்வு', item: '/blog/choosing-wedding-photographer' }
                    ]
                }} 
            />
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    திருமண புகைப்படக்காரர் தேர்வு: முழுமையான வழிகாட்டி
                </h1>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="பிப்ரவரி 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    திருமண நாளின் நினைவுகள் நிரந்தரமாக இருப்பது புகைப்படங்கள் மூலம் தான்.
                    சரியான புகைப்படக்காரரை தேர்வு செய்வது உங்கள் திருமண திட்டமிடலில்
                    மிக முக்கியமான முடிவுகளில் ஒன்று. இந்த வழிகாட்டியில், சிறந்த
                    புகைப்படக்காரரை எப்படி கண்டுபிடிப்பது, என்ன கேள்விகள் கேட்க வேண்டும்,
                    எவ்வளவு செலவாகும் என்பதையெல்லாம் பார்க்கலாம்.
                </p>

                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 my-8">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">💰 புகைப்பட செலவை திட்டமிடுங்கள்</h3>
                    <p className="text-indigo-800">
                        புகைப்படம் மற்றும் வீடியோ செலவை உங்கள் திருமண பட்ஜெட்டில் சேர்க்க
                        எங்கள்
                        <Link href="/tools/thirumana-selavu" className="text-primary font-bold hover:underline mx-1">
                            பட்ஜெட் கால்குலேட்டரை
                        </Link>
                        பயன்படுத்தவும்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    பாரம்பரிய vs Candid புகைப்படம்: என்ன வித்தியாசம்?
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-orange-50 p-6 rounded-xl">
                        <h3 className="font-bold text-orange-900 mb-3">பாரம்பரிய புகைப்படம் (Traditional)</h3>
                        <p className="text-sm mb-3">
                            <strong>பாணி:</strong> Posed, formal, planned shots
                        </p>
                        <p className="text-sm mb-2"><strong>நன்மைகள்:</strong></p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>அனைவரும் புகைப்படத்தில் நன்றாக இருப்பார்கள்</li>
                            <li>முக்கிய நிகழ்வுகள் தவறாது</li>
                            <li>formal family photos நல்லாக வரும்</li>
                            <li>predictable & reliable</li>
                        </ul>
                        <p className="text-sm mt-2 mb-2"><strong>தீமைகள்:</strong></p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>செயற்கையான தோற்றம்</li>
                            <li>நிறைய நேரம் எடுக்கும்</li>
                            <li>இயல்பான உணர்வுகள் குறைவு</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-bold text-blue-900 mb-3">Candid புகைப்படம்</h3>
                        <p className="text-sm mb-3">
                            <strong>பாணி:</strong> Spontaneous, natural, storytelling
                        </p>
                        <p className="text-sm mb-2"><strong>நன்மைகள்:</strong></p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>இயல்பான உணர்வுகள் capture ஆகும்</li>
                            <li>கதை சொல்லும் முறை</li>
                            <li>unique & artistic shots</li>
                            <li>குறைவான posing</li>
                        </ul>
                        <p className="text-sm mt-2 mb-2"><strong>தீமைகள்:</strong></p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>சில நபர்கள் blur-ஆக இருக்கலாம்</li>
                            <li>முக்கிய கணங்கள் miss ஆகலாம்</li>
                            <li>photographer skill மிக முக்கியம்</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-6">
                    <p className="font-bold mb-2">💡 எங்கள் பரிந்துரை:</p>
                    <p className="text-sm">
                        இரண்டின் கலவை சிறந்தது! Candid photographer-க்கு முக்கியத்துவம் கொடுங்கள்,
                        ஆனால் முக்கிய family group photos-க்கு traditional poses எடுக்கச் சொல்லுங்கள்.
                        நவீன புகைப்படக்காரர்கள் இரண்டையும் சேர்த்து செய்கிறார்கள்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    புகைப்படக்காரரிடம் கேட்க வேண்டிய 15 கேள்விகள்
                </h2>

                <p>
                    புகைப்படக்காரரை இறுதி செய்வதற்கு முன்பு இந்த கேள்விகளை கட்டாயம் கேளுங்கள்:
                </p>

                <div className="space-y-4 my-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">1. உங்கள் அனுபவம் எத்தனை வருடங்கள்?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            குறைந்தது 2-3 வருட அனுபவம் உடையவரை தேர்வு செய்யுங்கள்.
                            எத்தனை திருமணங்கள் செய்திருக்கிறீர்கள் என்று கேளுங்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">2. உங்கள் portfolio காட்ட முடியுமா?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Full wedding album பார்க்கவும், best shots மட்டும் இல்லாமல்.
                            தமிழ் திருமண அனுபவம் இருக்கிறதா என்று சரிபார்க்கவும்.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">3. எங்கள் திருமண தேதியில் available-ஆ இருக்கிறீர்களா?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            முன்கூட்டியே (4-6 மாதங்கள்) book செய்யுங்கள், குறிப்பாக
                            திருமண season-ல் (தை-பங்குனி மாதங்கள்).
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">4. package-ல் என்னென்ன அடங்கும்?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            நேரம் (எத்தனை மணி நேரம்), photographers எண்ணிக்கை,
                            final photos எண்ணிக்கை, video, album ஆகியவை அடங்குமா?
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">5. backup photographer இருக்கிறாரா?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Emergency-க்கு backup plan உண்டா? குறைந்தது 2 photographers
                            இருப்பது நல்லது (different angles-க்கு).
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">6. Raw photos கிடைக்குமா?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Edited photos மட்டும் கொடுப்பார்களா அல்லது raw files-ம்
                            கொடுப்பார்களா? Raw files கூடுதல் கட்டணம் உண்டா?
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">7. Editing & delivery எத்தனை நாட்களில்?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            பொதுவாக 4-8 வாரங்கள் ஆகும். Album பிரின்ட்டிங் மேலும்
                            2-4 வாரங்கள் ஆகலாம்.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">8. Video coverage அடங்கும் அ?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Cinematic video, highlights reel, full ceremony recording
                            ஆகியவை package-ல் உண்டா? Drone shots தேவைப்பட்டால் கூடுதல் செலவு?
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">9. உபகரணங்கள் (Equipment) என்ன பயன்படுத்துகிறீர்கள்?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Professional DSLR/mirrorless cameras, backup equipment,
                            external flash, lenses ஆகியவை இருக்கிறதா?
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                        <p className="font-bold">10. advance payment எவ்வளவு?</p>
                        <p className="text-sm text-gray-600 mt-1">
                            பொதுவாக 25-50% advance. Balance எப்போது கட்ட வேண்டும்?
                            Refund policy என்ன?
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Portfolio மதிப்பீடு: என்ன பார்க்க வேண்டும்?
                </h2>

                <p>
                    புகைப்படக்காரரின் portfolio-வை மதிப்பிடும் போது இந்த விஷயங்களை கவனியுங்கள்:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>Consistency:</strong> ஒரே மாதிரியான தரம் அனைத்து புகைப்படங்களிலும்
                        இருக்கிறதா? அல்லது அவ்வப்போது மட்டும் நல்ல shots?
                    </li>
                    <li>
                        <strong>Lighting Skills:</strong> மோசமான விளக்கு சூழ்நிலையிலும் (இரவு,
                        உள்ளே) நல்ல புகைப்படங்கள் எடுக்கிறார்களா?
                    </li>
                    <li>
                        <strong>Composition:</strong> புகைப்படங்கள் கலை ரீதியாக அழகாக இருக்கின்றனவா?
                        சரியான framing, angles இருக்கிறதா?
                    </li>
                    <li>
                        <strong>Emotion Capture:</strong> Candid moments-ல் உணர்வுகள் நன்றாக
                        பிடிக்கப்பட்டுள்ளனவா?
                    </li>
                    <li>
                        <strong>Cultural Understanding:</strong> தமிழ் திருமண சடங்குகளை புரிந்து
                        கொண்டு முக்கிய கணங்களை capture செய்திருக்கிறார்களா?
                    </li>
                    <li>
                        <strong>Color Grading:</strong> Editing style உங்கள் விருப்பத்திற்கு பொருந்துகிறதா?
                        (Bright & vibrant vs muted & cinematic)
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    விலை நிர்ணயம்: எவ்வளவு செலவாகும்?
                </h2>

                <p>
                    திருமண புகைப்படம் மற்றும் வீடியோவிற்கான செலவு பல காரணிகளை பொறுத்தது:
                </p>

                <div className="bg-gray-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-lg mb-4">செலவு வரம்புகள் (தோராயம்):</h3>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center border-b pb-2">
                            <span><strong>Basic Package</strong> (1 photographer, 4-6 hrs)</span>
                            <span className="font-bold text-primary">₹25,000 - ₹50,000</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                            <span><strong>Standard Package</strong> (2 photographers, 8-10 hrs, photos + video)</span>
                            <span className="font-bold text-primary">₹75,000 - ₹1,50,000</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                            <span><strong>Premium Package</strong> (Team, full day, cinematic video, album)</span>
                            <span className="font-bold text-primary">₹2,00,000 - ₹4,00,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span><strong>Luxury Package</strong> (Celebrity photographers, drone, full coverage)</span>
                            <span className="font-bold text-primary">₹5,00,000+</span>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-4">
                        <strong>குறிப்பு:</strong> சென்னை, பெங்களூர் போன்ற பெரிய நகரங்களில்
                        விலை அதிகம். சிறிய நகரங்களில் 30-40% குறைவாக இருக்கலாம்.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">விலையில் என்னென்ன அடங்கும்?</h3>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Coverage நேரம் (4, 6, 8, 12 மணி நேரம்)</li>
                    <li>Photographers & Videographers எண்ணிக்கை</li>
                    <li>Edited photos எண்ணிக்கை (100, 300, 500, all)</li>
                    <li>Video length (Highlights 5-10 mins, Full 30-60 mins)</li>
                    <li>Physical album (20x30, 30x40 size, pages எண்ணிக்கை)</li>
                    <li>Prints (wallet size, 6x8, frames)</li>
                    <li>Drone shots, Pre-wedding shoot</li>
                    <li>Same day edit, live streaming</li>
                </ul>

                <div className="bg-yellow-50 p-4 rounded-lg my-6">
                    <p className="font-bold mb-2">💸 செலவு குறைக்கும் tips:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>நேரத்தை குறையுங்கள் (முழு நாள் coverage-க்கு பதில் முக்கிய நிகழ்வுகள் மட்டும்)</li>
                        <li>Physical album தேவை இல்லை என்றால் skip செய்யுங்கள்</li>
                        <li>புதிய photographers-க்கு வாய்ப்பு கொடுங்கள் (portfolio  building-க்கு discount கொடுப்பார்கள்)</li>
                        <li>Off-season-ல் (ஆடி, புரட்டாசி) திருமணம் செய்தால் discount கிடைக்கலாம்</li>
                    </ul>
                </div>

                <p>
                    மொத்த திருமண செலவில், புகைப்படத்திற்கு 10-15% ஒதுக்குவது நல்லது.
                    உங்கள் பட்ஜெட் திட்டமிடலுக்கு எங்கள்
                    <Link href="/blog/budget-planning-tips" className="text-primary hover:underline mx-1">
                        பட்ஜெட் திட்டமிடல் கட்டுரையை
                    </Link>
                    படிக்கவும்.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    ஒப்பந்தம் (Contract): கவனிக்க வேண்டியவை
                </h2>

                <p>
                    புகைப்படக்காரருடன் எழுத்துபூர்வ ஒப்பந்தம் கட்டாயம் செய்யுங்கள்.
                    ஒப்பந்தத்தில் இருக்க வேண்டியவை:
                </p>

                <div className="bg-red-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-lg text-red-900 mb-3">✓ Contract Checklist:</h3>
                    <ul className="space-y-2">
                        <li>☑ திருமண தேதி, நேரம், இடம்</li>
                        <li>☑ Package விவரங்கள் (coverage hours, எண்ணிக்கை)</li>
                        <li>☑ மொத்த தொகை, payment schedule</li>
                        <li>☑ Photos/videos delivery timeline</li>
                        <li>☑ Raw files கிடைக்குமா?</li>
                        <li>☑ Copyright - புகைப்படங்கள் யாருக்கு சொந்தம்?</li>
                        <li>☑ Cancellation & refund policy</li>
                        <li>☑ Backup photographer plan</li>
                        <li>☑ Liability clause (equipment damage, etc.)</li>
                        <li>☑ Social media usage rights</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    D-Day Tips: திருமண நாளில்
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Shot list கொடுங்கள்:</strong> கட்டாயம் வேண்டிய family combinations list</li>
                    <li><strong>Timeline share செய்யுங்கள்:</strong> முகூர்த்த நேரம், சடங்குகள் வரிசை</li>
                    <li><strong>Coordinator நியமியுங்கள்:</strong> குடும்பத்தில் ஒருவர் photographer-க்கு உதவ</li>
                    <li><strong>நேரம் ஒதுக்குங்கள்:</strong> couple shots-க்கு 20-30 mins</li>
                    <li><strong>Relax & enjoy:</strong> மிக முக்கியம்! நிம்மதியாக இருந்தால் photos நன்றாக வரும்</li>
                </ul>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        திருமண புகைப்படக்காரர் தேர்வு என்பது உங்கள் வாழ்நாள் நினைவுகளை
                        யாரிடம் ஒப்படைக்கிறீர்கள் என்பதை தீர்மானிப்பது. அவசரப்படாதீர்கள்,
                        multiple photographers-ன் portfolio பார்த்து, கேள்விகள் கேட்டு,
                        எழுத்துபூர்வ ஒப்பந்தம் செய்து, நம்பிக்கையுடன் முடிவு எடுங்கள்.
                        நல்ல புகைப்படங்கள் உங்கள் மூன்றாம் தலைமுறைக்கு கூட மகிழ்ச்சி தரும்!
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">புகைப்படக்காரரை எவ்வளவு முன்கூட்டியே book செய்ய வேண்டும்?</h3>
                        <p className="text-gray-600">
                            நல்ல புகைப்படக்காரர்கள் 6-12 மாதங்களுக்கு முன்பே booked ஆகிவிடுவார்கள்,
                            குறிப்பாக திருமண season-ல் (தை-பங்குனி). குறைந்தது 4-6 மாதங்களுக்கு
                            முன்பே தேட ஆரம்பியுங்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Pre-wedding shoot அவசியமா?</h3>
                        <p className="text-gray-600">
                            அவசியம் இல்லை, ஆனால் பரிந்துரைக்கப்படுகிறது. இதன் மூலம்
                            photographer-ன் பாணியை புரிந்துகொள்ளலாம், camera முன்பு comfortable
                            ஆகலாம், relationship build பண்ணலாம். பல packages-ல் pre-wedding shoot
                            இலவசமாக அடங்கும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Photos எவ்வளவு நாட்களில் கிடைக்கும்?</h3>
                        <p className="text-gray-600">
                            Sneak peek (10-20 photos) 2-3 நாட்களில், full edited collection 4-8
                            வாரங்களில் கிடைக்கும். Album design & printing மேலும் 4-6 வாரங்கள்
                            ஆகலாம். Delivery timeline-ஐ contract-ல் குறிப்பிடுங்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">புகைப்படங்களின் copyright யாருக்கு?</h3>
                        <p className="text-gray-600">
                            பொதுவாக copyright photographer-க்கே இருக்கும், ஆனால் நீங்கள் personal
                            use-க்கு பயன்படுத்தலாம். Commercial use (publishing, selling) செய்ய
                            அனுமதி வேண்டும். இதை contract-ல் தெளிவாக குறிப்பிடுங்கள். சில
                            photographers full rights கூடுதல் கட்டணத்தில் தருவார்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Album வேண்டாம் என்றால் digital மட்டும் கொடுப்பார்களா?</h3>
                        <p className="text-gray-600">
                            ஆம்! பல photographers digital-only packages கொடுக்கிறார்கள், இது
                            ₹20,000-40,000 சேமிக்கும். High-resolution digital files பெறுங்கள்,
                            பிறகு நீங்களே வேண்டிய இடத்தில் print செய்யலாம். Cloud storage link
                            அல்லது pen drive-ல் கிடைக்கும்.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">இதையும் படிக்கவும்:</h3>
                    <p className="text-blue-800 text-sm">
                        சிறந்த புகைப்படங்களுக்கு அழகான பின்னணி அவசியம். எங்களின் <Link href="/blog/mandapam-decoration" className="font-bold underline">மண்டப அலங்கார யோசனைகள்</Link> கட்டுரையை இங்கே பார்க்கவும்.
                        மேலும், அழைப்பிதழ்களில் புகைப்படங்கள் சேர்க்க <Link href="/blog/wedding-invitation-guide" className="font-bold underline">திருமண அழைப்பிதழ் வழிகாட்டி</Link> உங்களுக்கு உதவும்.
                    </p>
                </div>

                <AuthorBio 
                    name="சித்ரை செல்வன்"
                    role="Founder, Kalyana Veedu"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். தமிழ் திருமண திட்டமிடலை எளிமையாக்கும் நோக்கோடு, தரமான கருவிகள் மற்றும் தகவல்களை தமிழ் குடும்பங்களுக்கு வழங்குகிறார்."
                    website="https://selvan.dev"
                />
            </div>
        </article>
    );
}
