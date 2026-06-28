import Link from 'next/link';
import { TOOLS_LIST, SITE_CONFIG } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog-data';
import type { Metadata } from 'next';
import Schema from '@/components/SEO/Schema';

export const metadata: Metadata = {
    title: 'திருமண கருவிகள் | அனைத்தும் இலவசம்',
    description: 'தமிழ் திருமண வயது தகுதி கணிப்பான், சுப முகூர்த்த நாட்கள் பிளானர், மற்றும் திருமண பட்ஜெட் கால்குலேட்டர் உள்ளிட்ட அனைத்து இலவச கருவிகளின் பட்டியல்.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/tools`,
    },
};

export default function ToolsIndex() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Schema 
                type="ItemList"
                data={{
                    name: "திருமண திட்டமிடல் கருவிகள்",
                    description: "தமிழர்களின் திருமணத்தை எளிமையாக்கும் 7 இலவச கருவிகள்",
                    items: TOOLS_LIST
                }}
            />
            {TOOLS_LIST.map((tool) => (
                <Schema 
                    key={tool.path}
                    type="SoftwareApplication"
                    data={{
                        title: tool.title,
                        description: tool.description
                    }}
                />
            ))}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    திருமண திட்டமிடல் கருவிகள்
                </h1>
                <p className="text-gray-600 leading-relaxed">
                    உங்கள் திருமணத்தை எளிதாகவும், துல்லியமாகவும் திட்டமிட உதவும் எளிய கருவிகள்.
                    இவை அனைத்தும் இலவசமாக பயன்படுத்தக்கூடியவை.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {TOOLS_LIST.map((tool) => (
                    <Link
                        key={tool.path}
                        href={tool.path}
                        className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                    >
                        <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            {tool.icon}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-primary">
                            {tool.title}
                        </h2>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            {tool.description}
                        </p>
                        <span className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            பயன்படுத்த →
                        </span>
                    </Link>
                ))}
            </div>

            {/* Latest Articles Section (Crawl Highway expansion) */}
            <section className="mt-20 border-t border-gray-100 pt-16">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-black text-gray-900 mb-2">சமீபத்திய கட்டுரைகள்</h2>
                        <p className="text-gray-500 text-sm">திருமணக் கலை மற்றும் பாரம்பரியம் பற்றி அறியுங்கள்</p>
                    </div>
                    <Link href="/blog" className="text-primary font-bold hover:underline text-sm">
                        அனைத்து கட்டுரைகளும் →
                    </Link>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BLOG_POSTS.slice(0, 3).map((post) => (
                        <Link 
                            key={post.slug}
                            href={post.slug} 
                            className="group bg-gray-50 p-6 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all"
                        >
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">{post.category}</span>
                            <h3 className="text-lg font-black mt-2 mb-3 text-gray-900 group-hover:text-primary transition-colors">{post.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Rich Content Expansion for SEO and AdSense */}
            <section className="mt-20 border-t border-gray-100 pt-16 text-gray-700 space-y-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900">இலவச தமிழ் திருமண திட்டமிடல் கருவிகள் (Wedding Planning Tools)</h2>
                <p className="leading-relaxed">
                    திருமண ஏற்பாடுகள் என்பது பல்வேறு பணிகளை ஒரே நேரத்தில் நிர்வகிக்கும் ஒரு பெரிய சவாலாகும். அதிலும் குறிப்பாக தமிழ் கலாச்சாரத்தின்படி, ஜாதகப் பொருத்தம் முதல் சுப முகூர்த்த தேதிகள் கணக்கீடு வரை பல விஷயங்களை துல்லியமாக கணக்கிட வேண்டும். இதற்காகவே கல்யாண வீடு தளம் 7க்கும் மேற்பட்ட பிரத்யேக இலவச கருவிகளை வழங்குகிறது.
                </p>
                <p className="leading-relaxed">
                    எங்களது வயது கணிப்பான் (Legal Marriage Age Checker) மற்றும் திருமண தேதி கணிப்பான் (Marriage Date Planner) ஆகிய கருவிகள் அரசு விதித்துள்ள சட்டப்பூர்வ வயது தகுதிகள் மற்றும் தமிழ் நாட்காட்டி விதிகளை அடிப்படையாகக் கொண்டு வடிவமைக்கப்பட்டுள்ளன. மேலும், பட்ஜெட் பிளானர் (Wedding Budget Calculator) மற்றும் செலவு பிரிப்பான் (Expense Splitter) போன்ற கருவிகள் திருமணத்தின் நிதி சார்ந்த செலவுகளை எளிதாகக் கண்காணிக்க உதவுகின்றன.
                </p>
                <p className="leading-relaxed">
                    இவை அனைத்தும் எளிய தமிழில் வடிவமைக்கப்பட்டுள்ளதால், யார் வேண்டுமானாலும் எந்தவித கட்டணமும் இன்றி எளிதாகப் பயன்படுத்தலாம். உங்கள் வீட்டுத் திருமணப் பணிகளை இன்றே திட்டமிட்டு மகிழ்ச்சியாக நடத்துங்கள்.
                </p>
                <p className="leading-relaxed">
                    நவீன காலகட்டத்தில் திருமண ஏற்பாடுகளைச் செய்வது மிகவும் கடினமான ஒன்றாக மாறியுள்ளது. மண்டபம் முன்பதிவு செய்வது முதல் சமையல், மணமகன்-மணமகள் ஆடை வடிவமைப்பு, பத்திரிகை அச்சிடுதல் என ஒவ்வொரு பணியையும் தனித்தனியாகக் கண்காணிக்க வேண்டியுள்ளது. எங்களது 'திருமண வேலைகள் பட்டியல்' (Wedding Checklist) கருவியானது, உங்களுக்குத் தேவையான அனைத்து வேலைகளையும் கால வாரியாகப் பிரித்து நிர்வகிக்க உதவுகிறது.
                </p>
                <p className="leading-relaxed">
                    இந்தக் கருவிகள் அனைத்தும் கணினி மற்றும் கைபேசி இரண்டிலும் பயன்படுத்த எளிமையாகத் தயாரிக்கப்பட்டுள்ளன. உங்களின் தனிப்பட்ட தரவுகள் எதுவும் எங்களது சர்வர்களில் சேமிக்கப்படுவதில்லை என்பதால், நீங்கள் முழுமையான பாதுகாப்புடன் இந்த நிதி மற்றும் திட்டமிடல் கருவிகளைப் பயன்படுத்தலாம். உறவினர்களுடன் இணைந்து செலவுகளைப் பகிர்ந்து கொள்ளவும் எங்களது கருவிகள் சிறந்த தீர்வை வழங்குகின்றன.
                </p>
                <p className="leading-relaxed">
                    கூடுதலாக, எங்களது திருமணத் திட்டமிடல் உதவிக் கருவிகள் ஒவ்வொன்றும் தொடர்ந்து மேம்படுத்தப்பட்டு வருகின்றன. திருமணத்திற்குத் தேவையான முக்கிய ஆவணங்கள் மற்றும் சான்றிதழ் பெறுவதற்கான நடைமுறைகளை விளக்கும் வழிகாட்டிகளும் இதில் இணைக்கப்பட்டுள்ளன. உங்கள் திருமண நிகழ்வுகளை எவ்வித பதற்றமும் இன்றி திட்டமிட்டு வெற்றிகரமாக நடத்திக் முடிக்க கல்யாண வீடு எப்போதும் உங்களுக்கு உறுதுணையாக இருக்கும்.
                </p>
            </section>
        </div>
    );
}
