import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import TrustBlock from '@/components/TrustBlock';
import Schema from '@/components/SEO/Schema';
import AuthorBio from '@/components/blog/AuthorBio';

import { SITE_CONFIG } from '@/lib/constants';
import RelatedArticles from '@/components/blog/RelatedArticles';


export const metadata: Metadata = {
    title: 'Destination திருமணம் திட்டமிடல் | Destination Wedding Planning Guide',
    description: 'Destination wedding தமிழ் நாட்டில் திட்டமிடுவது எப்படி? Best locations, budget planning, guest management, and legal formalities explained.',
    keywords: ['destination wedding', 'tamil destination wedding', 'wedding locations', 'Coorg wedding', 'Ooty wedding', 'Kerala wedding'],
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog/destination-wedding-planning`,
    },
};

export default function DestinationWeddingPlanning() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* <!-- Schema.org Markup --> */}
            <Schema 
                type="BlogPosting" 
                data={{
                    title: 'Destination திருமணம் திட்டமிடல் | Destination Wedding Planning Guide',
                    description: 'Destination wedding தமிழ் நாட்டில் திட்டமிடுவது எப்படி? Best locations, budget planning, guest management, மற்றும் legal formalities explained.',
                    author: 'சித்ரை செல்வன்',
                    datePublished: '2026-02-25',
                    slug: '/blog/destination-wedding-planning'
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' },
                        { name: 'Destination திருமணம்', item: '/blog/destination-wedding-planning' }
                    ]
                }} 
            />
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Destination திருமணம் திட்டமிடல்: முழுமையான வழிகாட்டி
                </h1>
            <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
                    alt="Destination திருமணம் திட்டமிடல்"
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
                    பாரம்பரிய திருமண அரங்குகளுக்கு பதில், இயற்கை எழில் கொஞ்சும் இடங்களில்
                    திருமணம் செய்வது இன்றைய நவீன தலைமுறையின் விருப்பமாக மாறி வருகிறது.
                    Destination weddings தனித்துவம், நினைவில் நிற்கும் அனுபவம், மற்றும் intimate
                    கொண்டாட்டம் ஆகியவற்றை வழங்குகின்றன. இந்த வழிகாட்டியில், destination திருமணம்
                    திட்டமிடுவது எப்படி, best locations, budget tips, மற்றும் common challenges
                    overcome செய்வது எப்படி என்று பார்க்கலாம்.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">💡 Destination Wedding என்றால் என்ன?</h3>
                    <p className="text-blue-800">
                        உங்கள் சொந்த ஊரிலிருந்து தொலைவில், பொதுவாக ஒரு சுற்றுலா தலத்தில்
                        (hill station, beach, resort) நடக்கும் திருமணம். குறைவான விருந்தினர்கள்
                        (50-150), 2-3 நாள் கொண்டாட்டம், மற்றும் unique experiences.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Destination Wedding ஏன் தேர்வு செய்ய வேண்டும்?
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <h3 className="font-bold text-green-900 mb-3">✅ நன்மைகள் (Pros)</h3>
                        <ul className="space-y-2 text-sm">
                            <li>✓ தனித்துவமான, மறக்க முடியாத அனுபவம்</li>
                            <li>✓ Intimate celebration - close friends & family மட்டும்</li>
                            <li>✓ இயற்கை அழகான backdrop - photo/video</li>
                            <li>✓ Extended celebration (2-3 நாட்கள்)</li>
                            <li>✓ குறைவான social pressure & formalities</li>
                            <li>✓ Mini-vacation combined with wedding</li>
                            <li>✓ குறைவான guest list = manageable</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h3 className="font-bold text-red-900 mb-3">⚠️ சவால்கள் (Cons)</h3>
                        <ul className="space-y-2 text-sm">
                            <li>✗ அதிக செலவு (travel, stay, logistics)</li>
                            <li>✗ Complex logistics & coordination</li>
                            <li>✗ எல்லா விருந்தினர்களும் வர முடியாது (age, health)</li>
                            <li>✗ Local vendors தெரியாமல் இருக்கலாம்</li>
                            <li>✗ Weather uncertainty (monsoon, extreme heat)</li>
                            <li>✗ Limited backup options</li>
                            <li>✗ Legal formalities different state/country-ல்</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    தமிழ் திருமணங்களுக்கு சிறந்த Destination Locations
                </h2>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">தமிழ் நாட்டிற்குள் (Within Tamil Nadu)</h3>

                <div className="space-y-4 my-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">🏔️</span>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Ooty / Coonoor</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>சிறப்பு:</strong> Hill station, குளிர்ந்த காலநிலை, tea estates, colonial charm<br />
                                    <strong>Best Time:</strong> மார்ச்-மே, செப்-நவம்பர் (மழை தவிர்க்க)<br />
                                    <strong>Budget:</strong> ₹8-15 லட்சம் (100 guests)<br />
                                    <strong>Venues:</strong> Savoy Hotel, Sterling Fern Hill, private estates
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Tip:</strong> சென்னையிலிருந்து 6 மணி நேர பயணம். Elderly guests-க்கு
                                    travel arrangements நன்றாக செய்யுங்கள்.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">🌊</span>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Mahabalipuram / ECR Beach</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>சிறப்பு:</strong> Beach wedding, heritage sites, close to Chennai<br />
                                    <strong>Best Time:</strong> நவம்பர்-பிப்ரவரி (கோடை வெயில் தவிர்க்க)<br />
                                    <strong>Budget:</strong> ₹6-12 லட்சம் (100 guests)<br />
                                    <strong>Venues:</strong> Radisson Blu, Intercontinental, private beach resorts
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Tip:</strong> சென்னையிலிருந்து மிக நெருக்கமானது (1.5 மணி).
                                    Guests வரவும் செல்லவும் எளிது. Beach wedding-க்கு backup indoor plan தேவை.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">🏰</span>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Madurai / Chettinad</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>சிறப்பு:</strong> Heritage mansions, traditional Tamil architecture<br />
                                    <strong>Best Time:</strong> டிசம்பர்-பிப்ரவரி<br />
                                    <strong>Budget:</strong> ₹5-10 லட்சம் (100 guests)<br />
                                    <strong>Venues:</strong> Chettinad Mansions, Visalam, heritage hotels
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Tip:</strong> Authentic Tamil wedding experience. Local Chettinad cuisine
                                    சிறப்பு. பாரம்பரியத்தை விரும்புபவர்களுக்கு best choice.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">⛰️</span>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Kodaikanal</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>சிறப்பு:</strong> Misty hills, lake views, romantic ambience<br />
                                    <strong>Best Time:</strong> அக்டோபர்-மார்ச்<br />
                                    <strong>Budget:</strong> ₹7-14 லட்சம் (100 guests)<br />
                                    <strong>Venues:</strong> Carlton Hotel, Sterling Valley View, lake-side resorts
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Tip:</strong> மழைக்காலம் (ஜூன்-செப்) தவிர்க்கவும். Roads மழையில்
                                    சற்று risky. பெரிய vehicles கஷ்டம்.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-10 mb-4">அருகிலுள்ள மாநிலங்களில் (Nearby States)</h3>

                <div className="space-y-4 my-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">☕</span>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Coorg, Karnataka</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>சிறப்பு:</strong> Coffee plantations, waterfalls, lush greenery<br />
                                    <strong>Best Time:</strong> அக்டோபர்-மார்ச்<br />
                                    <strong>Budget:</strong> ₹10-18 லட்சம் (100 guests)<br />
                                    <strong>Venues:</strong> Evolve Back, Orange County, plantation homestays
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Tip:</strong> Very popular destination. 6 மாதம் முன் booking தேவை.
                                    Bangalore வழியாக வர வேண்டியதால் flight connection சரியாக plan செய்யுங்கள்.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">🌴</span>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Alleppey / Kumarakom, Kerala</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>சிறப்பு:</strong> Backwaters, houseboats, serene atmosphere<br />
                                    <strong>Best Time:</strong> செப்-மார்ச்<br />
                                    <strong>Budget:</strong> ₹8-16 லட்சம் (100 guests)<br />
                                    <strong>Venues:</strong> Coconut Lagoon, Kumarakom Lake Resort, houseboat weddings
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Tip:</strong> Unique houseboat weddings possible! Kerala cuisine மிக சுவை.
                                    மழை காலாம் (ஜூன்-ஆகஸ்ட்) avoid செய்யுங்கள்.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">🏖️</span>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Goa</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>சிறப்பு:</strong> Beach vibes, party atmosphere, Portuguese architecture<br />
                                    <strong>Best Time:</strong> நவம்பர்-பிப்ரவரி<br />
                                    <strong>Budget:</strong> ₹12-25 லட்சம் (100 guests)<br />
                                    <strong>Venues:</strong> Taj Exotica, Alila Diwa, beach shacks, church weddings
                                </p>
                                <p className="text-xs text-gray-600">
                                    <strong>Tip:</strong> Liberal atmosphere, கோவாவில் திருமணம் traditional Tamil style
                                    கொஞ்சம் adjust ஆகலாம். Beach wedding மிக பிரபலம்.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Destination Wedding Budget Planning
                </h2>

                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6">
                    <h3 className="font-bold text-lg text-yellow-900 mb-3">💰 செலவு பிரிவு (Budget Breakdown)</h3>
                    <p className="text-sm mb-4">
                        100 guests-க்கான destination wedding (2 நாட்கள்) - ₹10-18 லட்சம் சராசரி
                    </p>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center bg-white p-3 rounded">
                            <span>வெனு (venue) rental (2 நாட்கள்)</span>
                            <span className="font-bold">₹2-4 லட்சம் (20-25%)</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded">
                            <span>விருந்தினர் தங்குமிடம் (50 rooms × 2 nights)</span>
                            <span className="font-bold">₹3-6 லட்சம் (30-35%)</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded">
                            <span>உணவு (4 meals × 100 people)</span>
                            <span className="font-bold">₹2-3 லட்சம் (15-20%)</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded">
                            <span>அலங்கரம் (decoration)</span>
                            <span className="font-bold">₹1-2 லட்சம் (10-12%)</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded">
                            <span>புகைப்படம் & வீடியோ</span>
                            <span className="font-bold">₹80,000-1.5 லட்சம் (8-10%)</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded">
                            <span>பயணம் & logistics</span>
                            <span className="font-bold">₹50,000-1 லட்சம் (5-8%)</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded">
                            <span>மற்றவை (entertainment, gifts, etc.)</span>
                            <span className="font-bold">₹40,000-80,000 (4-6%)</span>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-lg text-blue-900 mb-3">💡 செலவு குறைப்பு Tips</h3>
                    <ul className="space-y-2 text-sm">
                        <li>✓ <strong>Off-season booking:</strong> Peak season (Dec-Feb) தவிர்த்தால் 25-30% மிச்சம்</li>
                        <li>✓ <strong>குறைவான guest list:</strong> 150 க்கு பதில் 75-100 guests</li>
                        <li>✓ <strong>Package deals:</strong> Venue + stay + food combo packages negotiate செய்யுங்கள்</li>
                        <li>✓ <strong>Weekday wedding:</strong> வெள்ளி-இ ஞாயிறுக்கு பதில் புதன்-வியாழன்</li>
                        <li>✓ <strong>Local vendors:</strong> சொந்த ஊரிலிருந்து vendors கூட்டிப்போவதை தவிர்க்கவும்</li>
                        <li>✓ <strong>DIY elements:</strong> Invitations, welcome bags, simple décor இவைகளை நீங்களே செய்யுங்கள்</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Planning Timeline: படிப்படியான செக்லிஸ்ட்
                </h2>

                <div className="space-y-4 my-6">
                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">12 மாதங்களுக்கு முன்:</h3>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>தீயதியை தேர்வு செய்யுங்கள் (weather research முக்கியம்)</li>
                            <li>Budget finalize செய்யுங்கள்</li>
                            <li>Guest list தயார் செய்யுங்கள் (realistic - எல்லோரும் வர மாட்டார்கள்)</li>
                            <li>3-4 locations shortlist செய்து visit செய்யுங்கள்</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">8-10 மாதங்களுக்கு முன்:</h3>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Venue book செய்யுங்கள் (advance payment தயார்)</li>
                            <li>Key vendors book செய்யுங்கள் (photographer, decorator, caterer)</li>
                            <li>அழைப்பிதழ் design ஆரம்பிக்கவும் (save-the-date cards)</li>
                            <li>Wedding planner/coordinator தேவைப்பட்டால் hire செய்யுங்கள்</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">6 மாதங்களுக்கு முன்:</h3>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Save-the-date cards அனுப்புங்கள் (guests-க்கு plan செய்ய நேரம் தேவை)</li>
                            <li>Guest rooms block booking செய்யுங்கள்</li>
                            <li>Travel logistics plan செய்யுங்கள் (bus/flight group bookings)</li>
                            <li>Menu finalize செய்யுங்கள் (taste testing)</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">3 மாதங்களுக்கு முன்:</h3>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Royal அழைப்பிதழ் அனுப்புங்கள்</li>
                            <li>Final guest count confirm செய்யுங்கள்</li>
                            <li>Decoration theme finalize & confirm</li>
                            <li>Entertainment plan செய்யுங்கள் (DJ, live music, activities)</li>
                            <li>Local legal requirements check செய்யுங்கள்</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">1 மாதத்திற்கு முன்:</h3>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Final vendor confirmations</li>
                            <li>Welcome bags/guest kits தயாரிக்கவும்</li>
                            <li>Timeline sheet தயாரித்து vendors/guests-க்கு share செய்யுங்கள்</li>
                            <li>Emergency contact list & backup plans</li>
                            <li>Weather backup plan ready-ஆ வைக்கவும் (outdoor wedding இருந்தால்)</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Guest Management Tips
                </h2>

                <div className="bg-orange-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-lg mb-3">விருந்தினர்களை கவனித்துக்கொள்வது எப்படி?</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <strong>📧 Detailed Information Packet:</strong> Venue address, weather info,
                            what to pack, local attractions, contact numbers - இவை எல்லாவற்றையும்
                            advance-ல் share செய்யுங்கள்.
                        </li>
                        <li>
                            <strong>🚌 Travel Coordination:</strong> அருகில் உள்ள airport/railway station
                            இருந்து pickup arrange செய்யுங்கள். Group transport குழு பயணம் செய்வார்களா என்று கேளுங்கள்.
                        </li>
                        <li>
                            <strong>🏨 Room Blocks:</strong> Different budget brackets-க்கு rooms book
                            செய்யுங்கள். எல்லோரும் luxury afford செய்ய முடியாது.
                        </li>
                        <li>
                            <strong>🎒 Welcome Kit:</strong> Room-ல் local snacks, தண்ணீர் bottle,
                            event schedule, emergency contacts - simple welcome bag வைக்கவும்.
                        </li>
                        <li>
                            <strong>🏃 Activities:</strong> 2-3 நாள் இருக்கிறார்கள், எனவே sightseeing,
                            group activities, relaxing options plan செய்யுங்கள்.
                        </li>
                        <li>
                            <strong>💊 Medical Arrangements:</strong> First aid kit, nearby hospital info,
                            common medicines (digestive issues, allergies) ready-ஆ வைக்கவும்.
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    சட்ட & நிர்வாக விஷயங்கள் (Legal & Admin)
                </h2>

                <div className="bg-red-50 p-6 rounded-xl border border-red-200 my-6">
                    <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Plan செய்யவும் முக்கிய விஷயங்கள்:</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <strong>திருமண பதிவு (Marriage Registration):</strong> நீங்கள் திருமணம்
                            செய்யும் மாநிலத்தின் laws check செய்யுங்கள். Special Marriage Act பயன்படுத்தலாம்.
                        </li>
                        <li>
                            <strong>Permits & Licenses:</strong> சில இடங்களில் (beach, heritage sites)
                            event permits தேவைப்படலாம். Venue உங்களுக்காக arrange செய்வார்களா என்று கேளுங்கள்.
                        </li>
                        <li>
                            <strong>Alcohol Licenses:</strong> சில மாநிலங்களில் alcohol serve செய்ய
                            special license தேவைப்படலாம்.
                        </li>
                        <li>
                            <strong>Insurance:</strong> Cancellation insurance, liability insurance எடுக்கலாம்.
                            கூடுதல் செலவு ஆனால் பாதுகாப்பானது.
                        </li>
                        <li>
                            <strong>Contracts:</strong> எல்லா vendors உடனும் written contracts செய்யுங்கள்.
                            Cancellation terms, payment schedule தெளிவாக குறிப்பிடப்பட வேண்டும்.
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        Destination wedding என்பது சற்று சவாலானதாக இருந்தாலும், அது உங்களுக்கும்
                        உங்கள் விருந்தினர்களுக்கும் வாழ்நாள் முழுவதும் நினைவில் நிற்கும் அழகான
                        அனுபவமாக இருக்கும். சரியான திட்டமிடல், நல்ல vendors, realistic budget,
                        மற்றும் flexibility ஆகியவை வெற்றிக்கான திறவுகோல்கள். நீங்கள் குடும்பம்
                        மற்றும் நெருங்கிய நண்பர்களுடன் மறக்க முடியாத தருணங்களை உருவாக்கும் வாய்ப்பு!
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Destination wedding செலவு traditional wedding-விட அதிகமா?</h3>
                        <p className="text-gray-600 text-sm">
                            பொதுவாக per-person cost அதிகமாக இருக்கும் (travel, stay), ஆனால் மொத்த
                            செலவு குறைவாக இருக்கலாம் ஏனெனில் guest count மிகக் குறைவு (100-150 vs 500-800).
                            நடுத்தர வர்க்கத்திற்கு destination wedding நல்ல option - நெருங்கியவர்கள்
                            மட்டும், குறைவான social pressure.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">விருந்தினர்கள் செलவை எப்படி manage செய்வது?</h3>
                        <p className="text-gray-600 text-sm">
                            பொதுவாக மணமக்கள் stay + food செலவு ஏற்றுக்கொள்வார்கள், guests தங்கள்
                            travel செலவு கவனிப்பார்கள். Clear-ஆக முன்கூட்டியே தெரிவிக்கவும்.
                            சில couples எல்லா செலவையும் ஏற்கிறார்கள், சில hotel block booking மட்டும்
                            செய்து guests-க்கு discounted rate கொடுக்கிறார்கள். உங்கள் budget-க்கு
                            ஏற்றபடி decide செய்யுங்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Best season destination wedding-க்கு?</h3>
                        <p className="text-gray-600 text-sm">
                            <strong>Hill stations:</strong> மார்ச்-மே, செப்-நவம்பர் (மழை தவிர்க்க)<br />
                            <strong>Beaches:</strong> நவம்பர்-பிப்ரவரி (கோடை வெப்பம் தவிர்க்க)<br />
                            <strong>Kerala backwaters:</strong> அக்டோபர்-மார்ச்<br />
                            <strong>Goa:</strong> நவம்பர்-பிப்ரவரி (monsoon ஜூன்-செப் தவிர்க்கவும்)<br />
                            பொதுவாக மழை மற்றும் extreme heat months தவிர்ப்பது நல்லது. Weather forecast
                            முன்கூட்டியே பாருங்கள், backup indoor plan வைக்கவும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Wedding planner தேவையா destination wedding-க்கு?</h3>
                        <p className="text-gray-600 text-sm">
                            <strong>மிகவும் பரிந்துரைக்கப்படுகிறது!</strong> Local vendors தெரியாது,
                            logistics சிக்கலானது, நீங்கள் அங்கே இல்லாமல் coordinate செய்வது கஷ்டம்.
                            ஒரு நல்ல destination wedding planner (அல்லது venue-ல் coordinator) உங்களுக்கு
                            நிறைய stress save செய்வார்கள். Cost: ₹50,000-2 லட்சம் (மொத்த budget-ன் 5-8%).
                            DIY செய்ய முடியும் ஆனால் மிக அதிக முயற்சி தேவை.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">எல்லா Tamil rituals-ம் destination wedding-ல செய்ய முடியுமா?</h3>
                        <p className="text-gray-600 text-sm">
                            ஆம், முடியும்! பெரும்பா லான resorts மற்றும் venues தமிழ் திருமணங்களுக்கு
                            customizable. நீங்கள் உங்கள் சொந்த priest, mandapam setup, வாழை இலை
                            விருந்து எல்லாம் செய்யலாம். முன்கூட்டியே venue-உடன் discuss செய்து,
                            நீங்கள் என்ன என்ன traditions follow செய்ய விரும்புகிறீர்கள் என்று
                            சொல்லுங்கள். பல venues தமிழ் wedding experience உள்ளவர்களை வைத்திருப்பார்கள்.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="font-bold text-blue-900 mb-2">திருமண முன்னேற்பாடுகள்:</h3>
                    <p className="text-blue-800 text-sm">
                        வெளிநாட்டில் அல்லது வெளியூரில் திருமணம் செய்யும்போது <Link href="/blog/wedding-insurance-guide" className="font-bold underline">திருமண காப்பீடு</Link> மிகவும் அவசியம்.
                        மேலும் பட்ஜெட் கட்டுக்குள் இருக்க <Link href="/blog/budget-planning-tips" className="font-bold underline">பட்ஜெட் திட்டமிடல் குறிப்புகள்</Link> உங்களுக்கு உதவும்.
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
                    bio="சித்ரை செல்வன் கல்யாண வீடு தளத்தின் நிறுவனர். தமிழ் திருமண திட்டமிடலை எளிமையாக்கும் நோக்கோடு, தரமான கருவிகள் மற்றும் தகவல்களை தமிழ் குடும்பங்களுக்கு வழங்குகிறார்."
                    website="https://selvan.dev"
                />
                <RelatedArticles 
                    currentSlug="/blog/destination-wedding-planning" 
                    category="Planning" 
                />
            </div>
        </article>
    );
}
