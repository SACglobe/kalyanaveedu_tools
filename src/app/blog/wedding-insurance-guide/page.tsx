import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'திருமண காப்பீடு வழிகாட்டி | Wedding Insurance Guide India',
    description: 'திருமணத்திற்கான insurance தேவையா? Coverage types, cost, benefits, & claim process - முழுமையான wedding insurance வழிகாட்டி.',
    keywords: ['wedding insurance', 'event insurance', 'marriage protection', 'cancellation coverage', 'india wedding'],
    alternates: {
        canonical: '/blog/wedding-insurance-guide',
    },
};

export default function WeddingInsuranceGuide() {
    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    திருமண காப்பீடு (Wedding Insurance) வழிகாட்டி
                </h1>
                <div className="flex justify-center gap-4 text-sm text-gray-500 mb-8">
                    <time dateTime="2026-02-10">பிப்ரவரி 10, 2026</time>
                    <span>•</span>
                    <span>5 நிமிட வாசிப்பு</span>
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
                    திருமணத்திற்கு லட்சக்கணக்கில் செலவு செய்கிறோம், ஆனால் insurance பற்றி யோசிப்பதில்லை.
                    Venue cancel ஆனால், photographer வராமல் போனால், weather சரியில்லை என்றால்,
                    அல்லது திடீர் medical emergency என்றால் என்ன செய்வது? திருமண காப்பீடு
                    (Wedding Insurance) இந்த எதிர்பாராத சிக்கல்களிலிருந்து நிதி பாதுகாப்பு தருகிறது.
                    இந்தியாவில் இது புதிய concept, ஆனால் மிக பயனுள்ளது. இந்த வழிகாட்டியில்,
                    wedding insurance என்றால் என்ன, எதை cover செய்கிறது, cost, மற்றும் வாங்க
                    வேண்டுமா என்று பார்க்கலாம்.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">🛡️ Wedding Insurance என்றால் என்ன?</h3>
                    <p className="text-blue-800 text-sm">
                        Wedding Insurance என்பது உங்கள் திருமண செலவுகளை திடீர் cancellation,
                        postponement, அல்லது எதிர்பாராத சிக்கல்களிலிருந்து பாதுகாக்கும் நிதி காப்பீடு.
                        ₹5-15 லட்சம் திருமண செலவானால், ₹5,000-20,000 insurance premium செலுத்தி
                        உங்கள் investment-ஐ protect செய்யலாம். இந்தியாவில் ICICI Lombard, HDFC ERGO,
                        Bajaj Allianz போன்ற நிறுவனங்கள் event/wedding insurance வழங்குகின்றன.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Wedding Insurance எதை Cover செய்கிறது?
                </h2>

                <div className="space-y-4 my-6">
                    <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                        <h3 className="font-bold text-lg text-green-900 mb-2">1. Cancellation/Postponement Coverage</h3>
                        <p className="text-sm text-green-800 mb-3">
                            <strong>எப்போது:</strong> திருமணம் cancel அல்லது delay ஆனால் (unavoidable reasons)
                        </p>
                        <p className="text-sm text-green-800 mb-2"><strong>Covers:</strong></p>
                        <ul className="text-sm text-green-800 space-y-1 pl-5 list-disc">
                            <li>மணமக்கள் அல்லது immediate family-ல் திடீர் death, serious illness, accident</li>
                            <li>Bride/groom military deployment (defense personnel)</li>
                            <li>Venue திடீரென மூடுதல் (fire, structural damage, license revocation)</li>
                            <li>கடும் weather conditions (floods, cyclone, earthquake)</li>
                            <li>Vendor bankruptcy (photographer, caterer திடீரென business close)</li>
                        </ul>
                        <p className="text-xs text-green-700 mt-2">
                            <strong>Payouts:</strong> Advance payments திரும்ப கிடைக்காதவை, non-refundable deposits
                        </p>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
                        <h3 className="font-bold text-lg text-yellow-900 mb-2">2. Vendor No-Show Coverage</h3>
                        <p className="text-sm text-yellow-800 mb-2">
                            <strong>எப்போது:</strong> Book செய்த vendor திருமண நாளில் வராமல் போனால்
                        </p>
                        <p className="text-sm text-yellow-800 mb-2"><strong>Covers:</strong></p>
                        <ul className="text-sm text-yellow-800 space-y-1 pl-5 list-disc">
                            <li>Photographer/videographer வராமல் போதல்</li>
                            <li>Makeup artist cancel செய்தல்</li>
                            <li>DJ/band வராமல் இருத்தல்</li>
                            <li>Decorator last minute cancel</li>
                        </ul>
                        <p className="text-xs text-yellow-700 mt-2">
                            <strong>Benefit:</strong> Last-minute replacement vendor கிடைக்கும் கூடுதல் செலவை cover செய்யும்
                        </p>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                        <h3 className="font-bold text-lg text-purple-900 mb-2">3. Weather/Natural Disaster Coverage</h3>
                        <p className="text-sm text-purple-800 mb-2">
                            <strong>எப்போது:</strong> கடும் மழை, புயல், வெள்ளம், earthquake
                        </p>
                        <p className="text-sm text-purple-800 mb-2"><strong>Covers:</strong></p>
                        <ul className="text-sm text-purple-800 space-y-1 pl-5 list-disc">
                            <li>Outdoor wedding இல் கடும் weather காரணமாக venue மாற்றம்</li>
                            <li>கூடுதல் tent, canopy rent செலவு</li>
                            <li>மின்சாரம் தடை (generator rent)</li>
                        </ul>
                    </div>

                    <div className="bg-pink-50 p-5 rounded-xl border border-pink-100">
                        <h3 className="font-bold text-lg text-pink-900 mb-2">4. Loss/Damage to Wedding Attire & Gifts</h3>
                        <p className="text-sm text-pink-800 mb-2"><strong>Covers:</strong></p>
                        <ul className="text-sm text-pink-800 space-y-1 pl-5 list-disc">
                            <li>Wedding dress/saree திடீர் கறை, கிழிதல், damage</li>
                            <li>தாலி, jewelry திருட்டு/தொலைதல் (venue-ல்)</li>
                            <li>Wedding gifts திருட்டு அல்லது damage</li>
                            <li>Photography equipment damage (photographer-க்கு compensation)</li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
                        <h3 className="font-bold text-lg text-orange-900 mb-2">5. Liability Coverage (Guest Injuries)</h3>
                        <p className="text-sm text-orange-800 mb-2">
                            <strong>எப்போது:</strong> Venue-ல் guest-க்கு injury அல்லது property damage
                        </p>
                        <p className="text-sm text-orange-800 mb-2"><strong>Covers:</strong></p>
                        <ul className="text-sm text-orange-800 space-y-1 pl-5 list-disc">
                            <li>Guest-க்கு venue-ல் slip/fall injury (medical expenses)</li>
                            <li>Venue property-க்கு damage (பிரேக் ஆன decorations, furniture)</li>
                            <li>சிறப்பு மற்றும் hospital செலவுகள்</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Wedding Insurance Cost & Plans
                </h2>

                <div className="bg-blue-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-blue-900 mb-4">💰 இந்தியாவில் Premium Costs (Approximate)</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="p-2 text-left">Wedding Budget</th>
                                    <th className="p-2 text-left">Premium Range</th>
                                    <th className="p-2 text-left">Coverage Amount</th>
                                </tr>
                            </thead>
                            <tbody className="text-blue-800">
                                <tr>
                                    <td className="p-2">₹5-10 லட்சம்</td>
                                    <td className="p-2">₹5,000-10,000</td>
                                    <td className="p-2">70-80% of budget</td>
                                </tr>
                                <tr className="bg-blue-50">
                                    <td className="p-2">₹10-20 லட்சம்</td>
                                    <td className="p-2">₹10,000-18,000</td>
                                    <td className="p-2">75-85% of budget</td>
                                </tr>
                                <tr>
                                    <td className="p-2">₹20+ லட்சம்</td>
                                    <td className="p-2">₹18,000-30,000+</td>
                                    <td className="p-2">80-90% of budget</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-blue-700 mt-3">
                        <strong>குறிப்பு:</strong> Premium விலை coverage type, wedding location, guest count படி மாறுபடும்.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Premium-ஐ பாதிக்கும் காரணிகள்</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Wedding Budget:</strong> அதிக budget = அதிக premium</li>
                    <li><strong>Guest Count:</strong> அதிக பேர் = அதிக liability risk = அதிக premium</li>
                    <li><strong>Venue Type:</strong> Outdoor (weather risk) vs Indoor (குறைந்த risk)</li>
                    <li><strong>Location:</strong> Flood-prone, cyclone areas அதிக premium</li>
                    <li><strong>Coverage Type:</strong> Basic (cancellation only) vs Comprehensive (all எல்லாம்)</li>
                    <li><strong>Deductible:</strong> அதிக deductible என்றால் premium குறையும்</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Wedding Insurance வாங்க வேண்டுமா?
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="font-bold text-green-900 mb-3">✓ வாங்க வேண்டியவர்கள்:</h3>
                        <ul className="text-sm text-green-800 space-y-2">
                            <li>✓ ₹10+ லட்சம் செலவு செய்பவர்கள்</li>
                            <li>✓ Destination wedding திட்டமிடுபவர்கள்</li>
                            <li>✓ Outdoor/garden wedding (weather risk)</li>
                            <li>✓ Monsoon season-ல் திருமணம் (June-Sep)</li>
                            <li>✓ 200+ guests (liability risk அதிகம்)</li>
                            <li>✓ பெரிய non-refundable deposits கட்டியவர்கள்</li>
                            <li>✓ Defense/healthcare personnel (sudden posting மாற்றம் சாத்தியம்)</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-3">✗ தேவையில்லாதவர்கள்:</h3>
                        <ul className="text-sm text-red-800 space-y-2">
                            <li>✗ சிறிய budget (₹3-5 லட்சம்)</li>
                            <li>✗ Temple/community hall (low risk)</li>
                            <li>✗ குறைந்த guest count (50-100)</li>
                            <li>✗ Refundable deposits மட்டும் (வேண்டாம்)</li>
                            <li>✗ உள்ளூர் wedding (travel involved இல்லை)</li>
                            <li>✗ எல்லாம் உறவினர்/நண்பர் உதவியுடன் (vendors குறைவு)</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Wedding Insurance வாங்கும் முறை
                </h2>

                <div className="bg-gray-50 p-6 rounded-xl my-6">
                    <h3 className="font-bold text-gray-900 mb-4">படிகள்:</h3>
                    <ol className="space-y-3 list-decimal pl-5 text-sm text-gray-700">
                        <li>
                            <strong>Insurance Provider தேர்வு:</strong>
                            <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                                <li>ICICI Lombard Event Insurance</li>
                                <li>HDFC ERGO General Insurance</li>
                                <li>Bajaj Allianz Special Event Policy</li>
                                <li>TATA AIG Event Protector</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Online Quote:</strong> Website-ல் wedding budget, date, venue type, guest count enter செய்து quote பெறுங்கள்
                        </li>
                        <li>
                            <strong>Coverage Select:</strong> Base plan + Add-ons (jewelry, gifts, weather) தேர்வு செய்யுங்கள்
                        </li>
                        <li>
                            <strong>Documents Submit:</strong>
                            <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                                <li>Invitation card (proof of wedding date)</li>
                                <li>Venue booking confirmation</li>
                                <li>Vendor contracts (photographer, caterer, etc.)</li>
                                <li>Budget breakdown (estimated costs)</li>
                                <li>KYC documents (Aadhar, PAN)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Premium Payment:</strong> Online/Cheque மூலம் premium கட்டுங்கள்
                        </li>
                        <li>
                            <strong>Policy Issue:</strong> 2-3 நாட்களில் policy document email/courier-ல் வரும்
                        </li>
                    </ol>
                    <p className="text-xs text-gray-600 mt-4">
                        <strong>முக்கியம்:</strong> குறைந்தது திருமணத்திற்கு 2-3 மாதங்கள் முன்பே insurance வாங்குங்கள்.
                        Last minute (1 மாதத்திற்குள்) buy செய்ய முடியாது.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    Claim Process - எப்படி செய்வது?
                </h2>

                <div className="space-y-4 my-6">
                    <div className="bg-yellow-50 p-5 rounded-xl">
                        <h3 className="font-bold mb-2">1. Claim Intimation (24-48 மணி நேரத்தில்)</h3>
                        <p className="text-sm text-gray-700">
                            சிக்கல் ஏற்பட்டவுடன், insurance company-க்கு phone/email மூலம் தெரிவிக்கவும்.
                            Claim number கொடுப்பார்கள்.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-xl">
                        <h3 className="font-bold mb-2">2. Documents சமர்ப்பிக்கவும்</h3>
                        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>Policy copy</li>
                            <li>Claim form (insurance website-ல் download)</li>
                            <li>Reason proof (medical certificate, death certificate, venue cancellation letter, etc.)</li>
                            <li>Vendor invoices/contracts (paid amounts proof)</li>
                            <li>Bank statements (payments made)</li>
                            <li>Police complaint (theft/damage cases-க்கு)</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-5 rounded-xl">
                        <h3 className="font-bold mb-2">3. Investigation & Settlement</h3>
                        <p className="text-sm text-gray-700">
                            Insurance surveyor உங்கள் claim investigate செய்வார் (documents verify, vendors contact).
                            Approve ஆனால் 15-30 நாட்களில் settlement amount bank-க்கு transfer ஆகும்.
                        </p>
                    </div>
                </div>

                <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500 my-6">
                    <p className="font-bold mb-2 text-red-900">⚠️ Claim Reject ஆகும் காரணங்கள்:</p>
                    <ul className="text-sm text-red-800 space-y-1 list-disc pl-5">
                        <li>Policy terms-ல் இல்லாத காரணம் (எ.கா: cold feet - மனம் மாறுதல்)</li>
                        <li>Late intimation (குறிப்பிட்ட நாட்களுக்குள் சொல்லவில்லை என்றால்)</li>
                        <li>False information (documents-ல் inconsistencies)</li>
                        <li>Pre-existing conditions (policy வாங்கும் முன்பே தெரிந்த சிக்கல்கள்)</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)
                </h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Cold feet (மனம் மாறுதல்) cover ஆகுமா?</h3>
                        <p className="text-gray-600 text-sm">
                            இல்லை. Bride/groom-ம் wedding cancel செய்ய மனம் மாறினால் அது cover ஆகாது.
                            Insurance என்பது unavoidable circumstances-க்கு மட்டுமே (death, serious illness,
                            military deployment, venue closure, natural disasters). Personal choice-ஐ cover செய்யாது.
                            திருமணம் தீர்மானம் செய்த பின்னே insurance வாங்குங்கள்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">எத்தனை நாட்கள் முன்பு insurance வாங்க வேண்டும்?</h3>
                        <p className="text-gray-600 text-sm">
                            பெரும்பாலான insurance companies குறைந்தது <strong>14-30 நாட்கள் முன்பே</strong>
                            policy வாங்க வேண்டும் என்று நிபந்தனை. சில நிறுவனங்கள் 2-3 மாதங்கள் முன்பு
                            வாங்கினால் மட்டுமே full coverage தருகின்றன. Reason: Last-minute fraud தடுக்க.
                            <strong>பரிந்துரை:</strong> Venue book செய்த உடனே (6-12 மாதங்கள் முன்பே) insurance
                            பற்றி யோசியுங்கள். அப்போது premium குறைவாக இருக்கும் + full protection கிடைக்கும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Destination wedding-க்கு insurance அவசியமா?</h3>
                        <p className="text-gray-600 text-sm">
                            <strong>மிக அவசியம்!</strong> Destination wedding-ல் risks அதிகம்: (1) Travel issues
                            (flights cancel, strikes), (2) weather unpredictable, (3) foreign vendors (trust issues),
                            (4) higher costs (replacement கிடைப்பது கடினம்), (5) medical emergencies (abroad),
                            (6) non-refundable deposits அதிகம். Goa, Kerala, Coorg, அல்லது overseas (Thailand,
                            Bali) போக என்றால், கட்டாயம் comprehensive wedding insurance வாங்குங்கள்.
                            ₹15-25 லட்சம் செலவில் ₹15-20k premium என்பது reasonable protection.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Jewelry insurance தனியாக வாங்க வேண்டுமா?</h3>
                        <p className="text-gray-600 text-sm">
                            Wedding insurance-ல் jewelry coverage limited ஆக இருக்கும் (₹50k-2 லட்சம் வரை).
                            ₹5+ லட்சம் jewelry வாங்கினால், <strong>தனி Valuable Articles Insurance</strong>
                            அல்லது <strong>Home Insurance add-on</strong> எடுப்பது நல்லது. இது cover செய்யும்:
                            (1) திருட்டு (home/venue-ல்), (2) loss (தொலைதல்), (3) damage (கிழிதல், உடைதல்).
                            Premium: ₹2,000-5,000/year (₹5-10 லட்சம் jewelry-க்கு). Reputed insurers: HDFC ERGO,
                            ICICI Lombard, New India Assurance. Policy எடுக்கும்போது jewelry bill, photos வேண்டும்.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">Claim reject ஆனால் என்ன செய்வது?</h3>
                        <p className="text-gray-600 text-sm">
                            (1) <strong>Rejection reason:</strong> எழுத்துப்பூர்வமாக கேளுங்கள், (2) <strong>Review:</strong>
                            Policy terms படித்து, rejection valid-ஆ சரிபார்க்கவும், (3) <strong>Additional documents:</strong>
                            கூடுதல் proof-கள் இருந்தால் submit செய்யுங்கள், (4) <strong>Escalate:</strong> Insurance
                            company-ன் grievance cell-க்கு complaint, (5) <strong>Ombudsman:</strong> 30 நாட்களில்
                            தீர்வில்லை என்றால், Insurance Ombudsman complaint file செய்யுங்கள் (free, online).
                            Ombudsman neutral third party, உங்கள் case fair-ஆக review செய்வார். Website:
                            cioins.co.in.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">முடிவுரை</h3>
                    <p className="text-gray-700">
                        Wedding Insurance இந்தியாவில் இன்னும் பரவலாக பயன்படுத்தப்படவில்லை, ஆனால்
                        மிக பயனுள்ளது. ₹10+ லட்சம் செலவு செய்து, எதிர்பாராத சிக்கலால் எல்லாம்
                        waste ஆகக்கூடாது. சிறிய premium (1-2% of budget) செலுத்தி, பெரிய நிதி இழப்பிலிருந்து
                        பாதுகாப்பு பெறலாம். Destination wedding, outdoor venues, monsoon season, அல்லது
                        பெரிய budget என்றால் insurance பற்றி கட்டாயம் யோசியுங்கள். "Better safe than sorry" -
                        insurance இருந்தால் மன அமைதியுடன் திருமணத்தை enjoy செய்யலாம், எதிர்பாராத
                        சிக்கல்களை பற்றி கவலைப்படாமல் இருக்கலாம்!
                    </p>
                </div>

                <div className="bg-orange-50 p-8 rounded-2xl mt-12 border border-orange-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">எழுதியவர் பற்றி</h3>
                    <p className="text-gray-700 mb-3">
                        <strong>சித்ரை செல்வன்</strong> கல்யாண வீடு தளத்தின் நிறுவனர்.
                        திருமண திட்டமிடலில் நிதி பாதுகாப்பை வலியுறுத்துகிறார்.
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
