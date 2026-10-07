import { Suspense } from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import Schema from '@/components/SEO/Schema';
import { BLOG_POSTS, normalizeCategory } from '@/lib/blog-data';
import BlogListClient from '@/components/blog/BlogListClient';

export const metadata = {
    title: 'திருமண வழிகாட்டி கட்டுரைகள் | Wedding Planning Blog - கல்யாண வீடு',
    description: 'தமிழ் திருமண சடங்குகள், அரசு உதவித் திட்டங்கள், சட்ட ஆவணங்கள், பட்ஜெட் திட்டமிடல் மற்றும் சுப முகூர்த்த தேதிகள் பற்றிய முழுமையான கட்டுரைகள்.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog`,
    },
};

export const dynamic = 'force-static';
export const revalidate = 604800; // 7 days

export default function BlogIndex() {
    // Category counts for badges
    const categoryCounts: Record<string, number> = {
        all: BLOG_POSTS.length,
    };
    for (const post of BLOG_POSTS) {
        const cat = normalizeCategory(post.category);
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <Schema 
                type="Blog"
                data={{
                    name: "தமிழ் திருமண வழிகாட்டி வலைப்பதிவு (Kalyana Veedu Blog)",
                    description: "தமிழ் திருமண சடங்குகள், அரசு உதவித் திட்டங்கள், பட்ஜெட் திட்டமிடல் மற்றும் சுப முகூர்த்த தேதிகள் பற்றிய வழிகாட்டி கட்டுரைகள்.",
                    publisher: {
                        "@type": "Organization",
                        "name": "Kalyana Veedu",
                        "logo": `${SITE_CONFIG.url}/logo.png`
                    }
                }} 
            />
            <Schema 
                type="BreadcrumbList" 
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கட்டுரைகள்', item: '/blog' }
                    ]
                }} 
            />

            {/* Header */}
            <header className="text-center mb-12 max-w-3xl mx-auto">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                    கல்யாண வீடு வழிகாட்டி
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    திருமண வழிகாட்டி கட்டுரைகள்
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    தமிழ் திருமண சடங்குகள், அரசு உதவி திட்டங்கள், பட்ஜெட் திட்டமிடல் மற்றும் சுப முகூர்த்த தேதிகள் பற்றிய முழுமையான நம்பகமான ஆலோசனைகள்.
                </p>
            </header>

            {/* Client-Side Category Filtering with Suspense for SSG */}
            <Suspense fallback={
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
            }>
                <BlogListClient posts={BLOG_POSTS} categoryCounts={categoryCounts} />
            </Suspense>

            {/* Expanded blog details for SEO and AdSense */}
            <div className="max-w-4xl mx-auto mt-20 border-t border-gray-100 pt-12 text-gray-700 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">தமிழ் திருமண கலை மற்றும் சடங்குகள் வழிகாட்டி</h2>
                <p className="leading-relaxed">
                    திருமணம் என்பது ஆயிரம் காலத்துப் பயிர் என்பார்கள். நமது தமிழ் கலாச்சாரத்தில் திருமணச் சடங்குகள் ஒவ்வொன்றிற்கும் ஆழமான தத்துவங்களும், அறிவியல் மற்றும் ஆன்மீகக் காரணங்களும் பின்னணியாக அமைந்துள்ளன. திருமணத்திற்கான ஆயத்தப் பணிகளைத் தொடங்கும் போது, மங்களகரமான தேதியைத் தேர்ந்தெடுப்பது முதல் பட்ஜெட் மேலாண்மை வரை பல முக்கியமான முடிவுகளை எடுக்க வேண்டியிருக்கும்.
                </p>
                <p className="leading-relaxed">
                    எங்களது வலைப்பதிவில், திருமண ஏற்பாடுகளைச் சுமுகமாக நடத்துவதற்குத் தேவையான பல்வேறு வழிகாட்டுதல்களை வழங்குகிறோம். மாப்பிள்ளை அழைப்பு, காசி யாத்திரை, மாலை மாற்றுதல், ஊஞ்சல் சடங்கு மற்றும் தாலி கட்டுதல் போன்ற முக்கிய நிகழ்வுகளின் வரலாற்று முக்கியத்துவத்தைப் பற்றி இங்கு விரிவாகக் காணலாம்.
                </p>
                <p className="leading-relaxed">
                    மேலும், நடுத்தரக் குடும்பங்கள் தங்களது திருமணச் செலவுகளைக் கட்டுக்குள் வைப்பது எப்படி, தேவையில்லாத கடன் சுமைகளைத் தவிர்ப்பதற்கான பட்ஜெட் திட்டமிடல் குறிப்புகள், மற்றும் திருமணக் காப்பீடு போன்றவற்றைப் பற்றியும் எங்களது நிதிப் பகுதி கட்டுரைகளில் எளிய விளக்கங்களுடன் பகிர்ந்துள்ளோம். எங்களது பயனுள்ள கட்டுரைகளை வாசித்து, உங்கள் வீட்டுத் திருமணத்தை மேலும் சிறப்பாகத் திட்டமிடுங்கள்.
                </p>
                <p className="leading-relaxed">
                    இதனுடன், சுப முகூர்த்த தேதிகள் 2026 பற்றிய முழுமையான மாதவாரி பட்டியல்கள் மற்றும் திருமண வேலைகள் பட்டியல்களை எங்களது இணையதளம் வழங்குகிறது. தமிழ் நாட்காட்டி மற்றும் பஞ்சாங்க கணிப்புகளின்படி உகந்த நாட்களைத் தேர்ந்தெடுக்க இது உங்களுக்கு உதவும். திருமணத் தயாரிப்பு என்பது குடும்பத்தினர் அனைவரும் ஒன்று கூடிச் செய்யும் ஒரு கூட்டுப் பணி என்பதால், எங்களது கட்டுரைகள் அனைவரையும் ஒருங்கிணைத்துச் செயல்பட உந்துதலாக இருக்கும்.
                </p>
                <p className="leading-relaxed">
                    வலைப்பதிவில் உள்ள ஒவ்வொரு கட்டுரையும் அனுபவமிக்க எழுத்தாளர்கள் மற்றும் பண்பாட்டு Researchers-களின் கருத்துகளின் அடிப்படையில் எழுதப்பட்டுள்ளது. எனவே இதில் உள்ள தகவல்கள் மிகவும் நம்பகமானவை. திருமணத்திற்குத் தேவையான உடைகள் தேர்வு, அலங்காரம், புகைப்படக் கலைஞர்கள் தேர்வு மற்றும் வரவேற்பு நிகழ்ச்சி ஏற்பாடுகள் போன்ற நடைமுறை சார்ந்த ஆலோசனைகளையும் நாங்கள் தொடர்ந்து வழங்கி வருகிறோம்.
                </p>
                <p className="leading-relaxed">
                    இறுதியாக, இல்லற வாழ்க்கையைத் தொடங்கும் புதிய தம்பதியர் தங்களுக்குள் இருக்கும் கருத்து வேறுபாடுகளைக் களைந்து எவ்வாறு மகிழ்ச்சியாக வாழ்வது என்பது குறித்தான வாழ்வியல் கட்டுரைகளையும் நாங்கள் தொடர்ந்து பதிவேற்றம் செய்கிறோம். எங்களது கல்யாண வீடு தளம் உங்களது புதிய வாழ்க்கைப் பயணத்திற்கு ஒரு சிறந்த வழிகாட்டியாக விளங்கும் என்பதில் எவ்வித ஐயமும் இல்லை. எனவே எங்களது கட்டுரைகளைத் தொடர்ந்து வாசித்து உங்களது திருமண வாழ்வை இன்னும் சிறப்பானதாக மாற்றுங்கள்.
                </p>
            </div>
        </div>
    );
}
