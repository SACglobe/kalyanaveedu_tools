import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';

export const metadata: Metadata = {
    title: 'திருமண உணவு திட்டமிடல்: முழுமையான வழிகாட்டி | Wedding Menu Planning Guide',
    description: 'தமிழ் திருமண உணவு மெனு திட்டமிடல். பாரம்பரிய சைவ உணவுகள், விருந்து எண்ணிக்கை கணக்கீடு, கேட்டரிங் தேர்வு, மற்றும் செலவு குறைப்பு tips.',
    keywords: ['wedding menu', 'tamil wedding food', 'vegetarian menu', 'catering tips', 'wedding food budget', 'traditional tamil food'],
    alternates: {
        canonical: '/blog/wedding-menu-planning',
    },
};

export default function WeddingMenuPlanning() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Schema 
                type="BlogPosting"
                data={{
                    title: 'திருமண உணவு திட்டமிடல்: முழுமையான வழிகாட்டி | Wedding Menu Planning Guide',
                    description: 'தமிழ் திருமண உணவு மெனு திட்டமிடல். பாரம்பரிய சைவ உணவுகள், விருந்து எண்ணிக்கை கணக்கீடு, கேட்டரிங் தேர்வு, மற்றும் செலவு குறைப்பு tips.',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-02-25',
                    slug: '/blog/wedding-menu-planning'
                }}
            />
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'உணவு திட்டமிடல்', item: '/blog/wedding-menu-planning' }
                    ]
                }}
            />
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    திருமண உணவு திட்டமிடல்: முழுமையான வழிகாட்டி
                </h1>
                <TrustBlock
                    author="சித்ரை செல்வன்"
                    updatedDate="பிப்ரவரி 2026"
                />
            </header>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
                <p className="text-xl leading-relaxed text-gray-700">
                    திருமண விருந்து என்பது விருந்தினர்களுக்கு நினைவில் நிற்கும் ஒரு முக்கியமான அனுபவம்.
                    சரியான மெனு திட்டமிடல், விருந்தினர்களின் சங்கீதத்தையும் உங்கள் பட்ஜெட்டையும்
                    சமநிலைப்படுத்துவது முக்கியம். இந்த வழிகாட்டியில், தமிழ் திருமண உணவு மெனு திட்டமிடல்,
                    சைவ/அசைவ தேர்வுகள், கேட்டரிங் tips, மற்றும் செலவு குறைப்பு வழிகளை பார்க்கலாம்.
                </p>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
                    <h3 className="text-xl font-bold text-orange-900 mb-2">💰 உணவு செலவை திட்டமிடுங்கள்</h3>
                    <p className="text-orange-800">
                        திருமண உணவு செலவு மொத்த பட்ஜெட்டில் 30-40% ஆகலாம். எங்கள்
                        <Link href="/tools/thirumana-selavu" className="text-primary font-bold hover:underline mx-1">
                            பட்ஜெட் கால்குலேட்டரை
                        </Link>
                        பயன்படுத்தி முன்கூட்டியே திட்டமிடுங்கள்.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    தமிழ் திருமண உணவு: பாரம்பரிய அம்சங்கள்
                </h2>

                <p>
                    தமிழ் திருமணங்களில் உணவு என்பது வெறும் வயிறு நிரப்புவது மட்டுமல்ல,
                    அது பாரம்பரியம், மரியாதை, மற்றும் விருந்தோம்பல் ஆகியவற்றின் கலவை.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">பாரம்பரிய சைவ விருந்து (Full Course)</h3>
                <div className="bg-green-50 p-6 rounded-xl my-4">
                    <h4 className="font-bold text-green-900 mb-3">வாழை இலை விருந்து - உணவு வரிசை:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-bold mb-2">இடது பக்கம் (Left Side):</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>வாழைப்பழம்</li>
                                <li>சிப்ஸ் / வற்றல் வறுவல்</li>
                                <li>ஊறுகாய் (மாங்காய், எலுமிச்சை)</li>
                                <li>காரம் (மிளகாய் பொடி mix)</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold mb-2">வலது பக்கம் (Right Side):</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>பாயசம் / ஸ்வீட்</li>
                                <li>பருப்பு (குழம்பு, சாம்பார்)</li>
                                <li>ரசம்</li>
                                <li>மோர் / தயிர்</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="font-bold mb-2">நடுவில் (Center):</p>
                        <p className="text-sm">
                            சோறு (வெள்ளை அரிசி), தேங்காய் சாதம், புளியோதரை, எலுமிச்சை சாதம்,
                            பொரியல்கள் (beans, carrot, cabbage), அப்பளம், கீரை மசியல்
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">அசைவ விருந்து விருப்பங்கள்</h3>
                <p>
                    சில தமிழ் திருமணங்களில் அசைவ உணவுகளும் பரிமாறப்படும். பொதுவான items:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Starters:</strong> சிக்கன் 65, மட்டன் சுக்கா, ப்ரான் 65, fish fry</li>
                    <li><strong>Main Course:</strong> சிக்கன் கிரேவி, மட்டன் குழம்பு, fish curry</li>
                    <li><strong>Biryani:</strong> சிக்கன் பிரியாணி, மட்டன் பிரியாணி (மிக பிரபலம்)</li>
                    <li><strong>Accompaniments:</strong> ரைத்தா, salna, பச்சடி</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg my-6">
                    <p className="font-bold mb-2">🍽️ ஹைப்ரிட் மெனு (Hybrid Menu):</p>
                    <p className="text-sm">
                        இன்று பலர் சைவ + அசைவ இரண்டையும் சேர்த்து வழங்குகிறார்கள்.
                        இதில் விருந்தினர்கள் தங்கள் விருப்பத்தை தேர்ந்தெடுக்கலாம்.
                        பொதுவாக 70% சைவம், 30% அசைவம் என்ற விகிதம் நல்லது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    மெனு திட்டமிடல்: படிப்படியாக
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">படி 1: விருந்தினர் எண்ணிக்கை கணக்கீடு</h3>
                <p>
                    உணவு ஆர்டர் செய்வதற்கு முன், சரியான விருந்தினர் எண்ணிக்கையை கணக்கிடுங்கள்:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl my-4">
                    <p className="font-bold mb-3">கணக்கீடு சூத்திரம்:</p>
                    <ul className="space-y-2 text-sm">
                        <li>✓ <strong>அழைப்பிதழ் எண்ணிக்கை:</strong> 500 families</li>
                        <li>✓ <strong>வரும் விகிதம் (attendance rate):</strong> 70-80%</li>
                        <li>✓ <strong>ஒரு family-க்கு சராசரி நபர்கள்:</strong> 3-4 பேர்</li>
                        <li>✓ <strong>மொத்த எதிர்பார்க்கப்படும் விருந்தினர்கள்:</strong> 500 × 0.75 × 3.5 = ~1,300 பேர்</li>
                        <li>✓ <strong>Buffer (கூடுதல் 10%):</strong> 1,300 + 130 = <strong>1,430 பேர்</strong></li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-600">
                        <strong>குறிப்பு:</strong> எப்போதும் 10-15% buffer வைத்துக்கொள்ளுங்கள்.
                        கடைசி நிமிடத்தில் வருபவர்களுக்கு உணவு இல்லாமல் போவது embarrassing!
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">படி 2: மெனு வகைகளை தேர்வு செய்தல்</h3>
                <div className="space-y-4 my-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <p className="font-bold text-lg mb-2">Option A: பாரம்பரிய சைவம் மட்டும்</p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>நன்மைகள்:</strong> எல்லோரும் சாப்பிடலாம், குறைவான செலவு, எளிமையான logistics
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>தீமைகள்:</strong> அசைவ விரும்பிகளுக்கு சிறிய ஏமாற்றம்
                        </p>
                        <p className="text-sm font-bold text-primary mt-2">ஒரு நபருக்கு: ₹250-400</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <p className="font-bold text-lg mb-2">Option B: சைவம் + அசைவம் (Hybrid)</p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>நன்மைகள்:</strong> அனைவருக்கும் choice, modern preference
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>தீமைகள்:</strong> கூடுதல் செலவு, கேட்டரிங் சிக்கல்
                        </p>
                        <p className="text-sm font-bold text-primary mt-2">ஒரு நபருக்கு: ₹400-600</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <p className="font-bold text-lg mb-2">Option C: Buffet Style</p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>நன்மைகள்:</strong> வித்தியாசம், self-service, variety
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>தீமைகள்:</strong> நேரம் எடுக்கும், wastage அதிகம், பாரம்பரியம் குறைவு
                        </p>
                        <p className="text-sm font-bold text-primary mt-2">ஒரு நபருக்கு: ₹350-550</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">படி 3: கேட்டரிங் சர்வீஸ் தேர்வு</h3>
                <p>நல்ல கேட்டரிங் சர்வீஸ் தேர்வு செய்வதற்கான tips:</p>
                <ul className="list-disc pl-6 space-y-3 my-4">
                    <li>
                        <strong>சுவை சோதனை (Taste Testing):</strong> முன்கூட்டியே போய்
                        உணவை சுவைத்து பாருங்கள். குறைந்தது 2-3 caterers-ஐ ஒப்பிடுங்கள்.
                    </li>
                    <li>
                        <strong>விமர்சனங்கள் படியுங்கள்:</strong> Google reviews, நண்பர்கள்
                        பரிந்துரை, முந்தைய வாடிக்கையாளர்களிடம் கேளுங்கள்.
                    </li>
                    <li>
                        <strong>சானிடேஷன் & Hygiene:</strong> கிச்சன் நேரில் பார்வையிட்டு
                        சுத்தம், FSSAI லைசென்ஸ் இருக்கிறதா என்று சரிபார்க்கவும்.
                    </li>
                    <li>
                        <strong>அனுபவம்:</strong> பெரிய திருமணங்களில் அனுபவம் உள்ள caterers
                        நம்பகமானவர்கள். குறைந்தது 5+ வருட அனுபவம் இருப்பது நல்லது.
                    </li>
                    <li>
                        <strong>Flexibility:</strong> கடைசி நிமிடத்தில் guest count மாற்றங்களை
                        accommodate செய்ய முடியுமா?
                    </li>
                    <li>
                        <strong>Staff எண்ணிக்கை:</strong> 100 guests-க்கு குறைந்தது 5-6 servers
                        இருக்க வேண்டும். போதுமான staff இல்லாவிட்டால் service slow ஆகும்.
                    </li>
                </ul>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 my-6">
                    <p className="font-bold mb-2">⚠️ கேட்டரிங் ஒப்பந்தத்தில் கவனிக்க:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>மெனு items எண்ணிக்கை & quantity guarantee</li>
                        <li>ஒரு தட்டுக்கு என்ன என்ன உணவுகள் வரும்</li>
                        <li>எந்த நேரத்தில் சர்வ் செய்வார்கள்</li>
                        <li>Cancellation policy & refund terms</li>
                        <li>Wastage charges & packaging</li>
                        <li>கூடுதல் கட்டணங்கள் (transportation, staff, equipment)</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    செலவு குறைப்பு: புத்திசாலித்தனமான tips
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                        <h3 className="font-bold text-green-900 mb-3">💡 Tip 1: Season-ஐ சரியாக தேர்வு செய்யுங்கள்</h3>
                        <p className="text-sm">
                            திருமண season (தை-பங்குனி) அல்லாத மாதங்களில் (ஆடி, புரட்டாசி)
                            திருமணம் செய்தால், caterers discounts கொடுக்கலாம். Off-season-ல்
                            15-25% வரை மிச்சம் ஆகலாம்.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                        <h3 className="font-bold text-blue-900 mb-3">💡 Tip 2: Lunch-க்கு பதில் Dinner</h3>
                        <p className="text-sm">
                            Lunch (11am-2pm) நேர விருந்துகள் dinner (7pm-10pm) விட
                            சிறிது விலை குறைவாக இருக்கும். ஆனால் guests comfort-ஐ கருத்தில் கொள்ளுங்கள்.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                        <h3 className="font-bold text-purple-900 mb-3">💡 Tip 3: மெனு items குறையுங்கள்</h3>
                        <p className="text-sm">
                            15-20 items-க்கு பதில், 10-12 சிறந்த quality items கொடுங்கள்.
                            Variety குறைவானாலும், taste நன்றாக இருந்தால் guests மகிழ்ச்சியாக இருப்பார்கள்.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                        <h3 className="font-bold text-orange-900 mb-3">💡 Tip 4: Community Hall Caterers</h3>
                        <p className="text-sm">
                            Community halls-ல் in-house caterers பயன்படுத்தினால் discount
                            கிடைக்கும். சில halls வெளியே கேட்டரர்ஸ் அனுமதிப்பதில்லை,
                            அதனால் முன்கூட்டியே கேளுங்கள்.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-3">💡 Tip 5: Wastage குறையுங்கள்</h3>
                        <p className="text-sm">
                            Per plate pricing-க்கு பதில், buffet system-ல் only consumed
                            food-க்கு மட்டும் கட்டணம் செலுத்த negotiate செய்யுங்கள்.
                            Leftover உணவை NGO-க்கு donate செய்யுங்கள்.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                        <h3 className="font-bold text-indigo-900 mb-3">💡 Tip 6: DIY Elements</h3>
                        <p className="text-sm">
                            சில items (welcome drink, desserts, snacks) வீட்டில் தயாரித்தால்
                            செலவு குறையும். Family involvement-ம் அதிகரிக்கும், personal touch கிடைக்கும்.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    சிறப்பு பரிசீலனைகள் (Special Considerations)
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. உணவு ஒவ்வாமை & Dietary Restrictions</h3>
                <p>
                    நவீன காலத்தில் பலருக்கு உணவு ஒவ்வாமை (allergies) மற்றும் dietary preferences உள்ளன:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li><strong>Jain உணவு:</strong> வெங்காயம், பூண்டு இல்லாத விருப்பம்</li>
                    <li><strong>Gluten-free:</strong> கோதுமை அல்லாத options (rice items more)</li>
                    <li><strong>Vegan:</strong> பால் பொருட்கள் இல்லாத விருப்பம் (பாயசத்திற்கு பதில் halwa)</li>
                    <li><strong>Nut allergies:</strong> முந்திரி, பாதாம் சேர்க்காத items label செய்யுங்கள்</li>
                    <li><strong>Low-sugar:</strong> நீரிழிவு நோயாளிகளுக்கு sugar-free desserts</li>
                </ul>
                <p className="text-sm text-gray-600 my-4">
                    <strong>Tip:</strong> அழைப்பிதழில் அல்லது RSVP-ல் dietary restrictions கேட் க
                    ஒரு section சேர்க்கவும். அல்லது மெனு cards-ல் ingredients list கொடுங்கள்.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. குழந்தைகளுக்கான உணவு</h3>
                <p>
                    குழந்தைகள் பாரம்பரிய உணவுகளை விரும்ப மாட்டார்கள். அவர்களுக்கென சிறப்பு மெனு:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>பாஸ்தா / noodles (mild spice)</li>
                    <li>French fries / தோசை</li>
                    <li>Ice cream / jelly</li>
                    <li>Fruit salad / juice</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Presentation & Serving Style</h3>
                <div className="bg-gray-50 p-6 rounded-xl my-4">
                    <p className="font-bold mb-3">உணவு பரிமாறும் முறைகள்:</p>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <strong>வாழை இலை (Traditional):</strong> மிகவும் authentic, eco-friendly,
                            cost-effective. நல்ல hand-washing area தேவை.
                        </li>
                        <li>
                            <strong>Disposable plates:</strong> சுத்தம், எளிமை, ஆனால் waste அதிகம்.
                            Bio-degradable plates பயன்படுத்துங்கள்.
                        </li>
                        <li>
                            <strong>Buffet trays:</strong> self-service, wastage குறைவு, ஆனால்
                            queue நீளமாக இருக்கலாம்.
                        </li>
                        <li>
                            <strong>Live stalls:</strong> (dosa counter, chaat counter, ice cream parlor)
                            entertainment value, ஆனால் கூடுதல் செலவு.
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    D-Day: திருமண நாள் செக்லிஸ்ட்
                </h2>

                <div className="bg-red-50 p-6 rounded-xl border border-red-200 my-4">
                    <h3 className="font-bold text-lg text-red-900 mb-3">✓ உணவு வேளை செக்லிஸ்ட்:</h3>
                    <ul className="space-y-2 text-sm">
                        <li>☑ Caterer 2 மணி நேரம் முன் வருகிறார்களா?</li>
                        <li>☑ Kitchen/serving area எங்கே? தண்ணீர் மின் இணைப்பு உள்ளதா?</li>
                        <li>☑ Backup உணவு stock இருக்கிறதா? (எதிர்பாராத guests-க்கு)</li>
                        <li>☑ Staff uniforms மற்றும் grooming சரியாக உள்ளதா?</li>
                        <li>☑ Hot food hot-ஆகவும், cold food cold-ஆகவும் பரிமாறப்படுகிறதா?</li>
                        <li>☑ எல்லா items-ம் உள்ளதா? ஏதேனும் missing?</li>
                        <li>☑ Desserts & sweets நேரத்திற்கு தயாரா?</li>
                        <li>☑ Disposables/plates/spoons போதுமானதா?</li>
                        <li>☑ Wastage collection & clean-up plan ready-ஆ?</li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        திருமண உணவு திட்டமிடல் என்பது கலை மற்றும் அறிவியல் இரண்டும் சேர்ந்தது.
                        நல்ல தரமான உணவு, நியாயமான விலை, சரியான கேட்டரர், மற்றும் விவேகமான
                        திட்டமிடல் ஆகியவை சேர்ந்தால், உங்கள் விருந்தினர்கள் திருமணத்தை பல
                        வருடங்கள் நினைவில் கொள்வார்கள். பட்ஜெட் குறைவாக இருந்தாலும், சுவையான,
                        சுத்தமான, அன்புடன் பரிமாறப்படும் உணவு எப்போதும் வெற்றி பெறும்!
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">திருமண உணவுக்கு ஒரு நபருக்கு சராசரி செலவு என்ன?</h3>
                        <p className="text-gray-600">
                            தமிழ்நாட்டில், சைவ உணவுக்கு ₹250-400 மற்றும் அசைவ/hybrid மெனுவிற்கு
                            ₹400-600 per person. Premium caterers ₹800-1200 வரை கூட வசூலிக்கலாம்.
                            Location (சென்னை vs சிறிய நகரம்) மற்றும் menu complexity-ஐ பொறுத்து மாறுபடும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">எவ்வளவு முன்கூட்டியே caterer book செய்ய வேண்டும்?</h3>
                        <p className="text-gray-600">
                            நல்ல caterers 6-12 மாதங்களுக்கு முன்பே booked ஆகிவிடுவார்கள்,
                            குறிப்பாக திருமண season-ல் (தை-பங்குனி). குறைந்தது 4-6 மாதங்களுக்கு
                            முன்பே taste testing செய்து booking தொடங்குங்கள். Off-season-ல்
                            2-3 மாதங்கள் போதுமானது.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">உணவு wastage-ஐ எப்படி தவிர்ப்பது?</h3>
                        <p className="text-gray-600">
                            1) சரியான guest count கணக்கு போடுங்கள் (10% buffer மட்டும்),
                            2) Per plate pricing negotiate செய்யுங்கள்,
                            3) Buffet style-ல் small portions encourage செய்யுங்கள்,
                            4) Leftover உணவை NGOs அல்லது old age homes-க்கு donate செய்ய
                            முன்கூட்டியே arrange செய்யுங்கள். Feeding India, No Food Waste
                            போன்ற organizations உதவும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Buffet vs Traditional Serving - எது நல்லது?</h3>
                        <p className="text-gray-600">
                            <strong>Traditional (vaazhailai):</strong> Authentic, faster service,
                            cost-effective, everyone sits & eats together. <br />
                            <strong>Buffet:</strong> Variety, self-control on portions, modern feel,
                            ஆனால் queues நீளமாக இருக்கும், wastage அதிகம். <br />
                            <strong>எங்கள் பரிந்துரை:</strong> 200+ guests എனில் traditional,
                            100 க்கும் குறைவானால் buffet சிறந்தது.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">வெளிநாட்டு விருந்தினர்களுக்கு என்ன மெனு?</h3>
                        <p className="text-gray-600">
                            வெளிநாட்டு விருந்தினர்களுக்கு spice level குறைவான items வைக்கவும்.
                            Continental options (pasta, grilled vegetables, mild curries) சேர்க்கலாம்.
                            Menu cards-ல் ஆங்கில மொழிபெயர்ப்பும், spice level indicators (🌶️🌶️)
                            கொடுங்கள். Forks & knives தயாரா வைக்கவும் (பலருக்கு கையால் சாப்பிட
                            பழக்கம் இருக்காது).
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">தொடர்புடைய குறிப்புகள்:</h3>
                    <p className="text-blue-800 text-sm">
                        விருந்தினர்களுக்கு பிடித்த உணவை வழங்கும்போது, அவற்றை அழகா படம் பிடிக்க <Link href="/blog/choosing-wedding-photographer" className="font-bold underline">புகைப்படக் கலைஞர் தேர்வு</Link> வழிகாட்டியையும்,
                        உணவுச் செலவுகளை திட்டமிட <Link href="/blog/budget-planning-tips" className="font-bold underline">பட்ஜெட் திட்டமிடல்</Link> கட்டுரையையும் பார்க்கவும்.
                    </p>
                </div>

                <AuthorBio 
                    name="சித்ரை செல்வன்"
                    role="Founder, Kalyana Veedu"
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். தமிழ் திருமண திட்டமிடலை எளிமையாக்கும் நோக்கோடு, தரமான கருவிகள் மற்றும் தகவல்களை தமிழ் குடும்பங்களுக்கு வழங்குகிறார். பாரம்பரியமும் நவீன தொழில்நுட்பமும் இணையும் இடத்தில் செயல்படுகிறார்."
                    website="https://selvan.dev"
                />
            </div>
        </article>
    );
}
