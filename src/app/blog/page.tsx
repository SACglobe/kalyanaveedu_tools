import Link from 'next/link';

export const metadata = {
    title: 'திருமண வழிகாட்டி கட்டுரைகள் | Wedding Planning Blog',
    description: 'தமிழ் திருமண சடங்குகள், பட்ஜெட் திட்டமிடல் மற்றும் சுப முகூர்த்தம் பற்றிய பயனுள்ள கட்டுரைகள்.',
    alternates: {
        canonical: '/blog',
    },
};

const BLOG_POSTS = [
    {
        slug: '/blog/oonjal-ceremony',
        title: 'ஊஞ்சல் சடங்கு: வாழ்க்கையின் ஏற்ற இறக்கங்களை எதிர்கொள்ளும் பக்குவம்',
        excerpt: 'ஊஞ்சல் சடங்கு ஏன் செய்யப்படுகிறது, அதன் தத்துவம் என்ன, ஊஞ்சல் பாட்டுகள் மற்றும் திருஷ்டி கழிக்கும் முறைகள்.',
        date: 'Feb 25, 2026',
        category: 'Traditions'
    },
    {
        slug: '/blog/malai-matruthel',
        title: 'மாலை மாற்றுதல்: திருமணத்தின் மகிழ்ச்சியான முதல் சங்கமம்',
        excerpt: 'மாலை மாற்றுதல் சடங்கு ஏன் செய்யப்படுகிறது, அதன் தத்துவம் என்ன, தோளில் தூக்குவது ஏன் - விரிவான கட்டுரை.',
        date: 'Feb 25, 2026',
        category: 'Traditions'
    },
    {
        slug: '/blog/kasi-yatra',
        title: 'காசி யாத்திரை: திருமணத்தின் சுவாரஸ்யமான பண்பாட்டு சடங்கு',
        excerpt: 'காசி யாத்திரை சடங்கு என்றால் என்ன, குடை, கம்பு, விசிறி ஏன் பிடிக்கிறார்கள் — தமிழ் திருமணத்தின் முக்கிய நிகழ்வு.',
        date: 'Feb 25, 2026',
        category: 'Traditions'
    },
    {
        slug: '/blog/thali-tying-significance',
        title: 'தாலி கட்டுவதன் ரகசியம்: மூன்று முடிச்சுகளின் அர்த்தம்',
        excerpt: 'தாலி கட்டும் போது போடப்படும் மூன்று முடிச்சுகள், மஞ்சள் கயிறு மற்றும் அதன் பின்னால் உள்ள ஆன்மீக உண்மைகளை அறிக.',
        date: 'Feb 25, 2026',
        category: 'Traditions'
    },
    {
        slug: '/blog/naandi-ceremony',
        title: 'நாந்தி சடங்கு: முன்னோர்களின் ஆசியைப் பெறுதல்',
        excerpt: 'திருமணத்திற்கு முன் முன்னோர்களை வணங்கி அவர்களின் ஆசியைப் பெறும் நாந்தி சடங்கின் முக்கியத்துவம் மற்றும் வழிமுறைகள்.',
        date: 'Feb 25, 2026',
        category: 'Traditions'
    },
    {
        slug: '/blog/vedic-wedding-mantras',
        title: 'வேத மந்திர விளக்கம்: தமிழ் திருமணம்',
        excerpt: 'மங்கள்ய தாரணம், சப்தபதி, மற்றும் பிற வேத மந்திரங்களின் பொருள், உச்சரிப்பு, மற்றும் நவீன முக்கியத்துவம்.',
        date: 'Feb 10, 2026',
        category: 'Traditions'
    },
    {
        slug: '/blog/avoid-wedding-debt',
        title: 'திருமண கடனை தவிர்ப்பது எப்படி?',
        excerpt: 'கடன் வாங்காமல் அழகான திருமணம் நடத்துவது எப்படி? Budget tips, cost-cutting strategies, மற்றும் நிதி மேலாண்மை.',
        date: 'Feb 10, 2026',
        category: 'Finance'
    },
    {
        slug: '/blog/gold-jewelry-buying-guide',
        title: 'திருமண தங்க நகை வாங்கும் வழிகாட்டி',
        excerpt: 'தங்க தரம் (purity), hallmark, making charges, designs, budgeting - திருமண தங்க நகை வாங்குபவர்களுக்கான முழுமையான வழிகாட்டி.',
        date: 'Feb 10, 2026',
        category: 'Shopping'
    },
    {
        slug: '/blog/wedding-insurance-guide',
        title: 'திருமண காப்பீடு (Wedding Insurance) வழிகாட்டி',
        excerpt: 'திருமணத்திற்கு insurance வேண்டுமா? Coverage types, cost, benefits, மற்றும் claim process - முழுமையான வழிகாட்டி.',
        date: 'Feb 10, 2026',
        category: 'Finance'
    },
    {
        slug: '/blog/wedding-menu-planning',
        title: 'திருமண உணவு திட்டமிடல்: முழுமையான வழிகாட்டி',
        excerpt: 'தமிழ் திருமண உணவு மெனு திட்டமிடல். பாரம்பரிய சைவ உணவுகள், விருந்து எண்ணிக்கை கணக்கீடு, கேட்டரிங் தேர்வு.',
        date: 'Feb 10, 2026',
        category: 'Planning'
    },
    {
        slug: '/blog/destination-wedding-planning',
        title: 'Destination திருமணம் திட்டமிடல்',
        excerpt: 'Destination wedding திட்டமிடுவது எப்படி? Best locations (Ooty, Coorg, Kerala), budget tips, guest management.',
        date: 'Feb 10, 2026',
        category: 'Planning'
    },
    {
        slug: '/blog/tamil-nakshatras-significance',
        title: 'தமிழ் நட்சத்திரங்கள் & திருமண பொருத்தம்',
        excerpt: '27 தமிழ் நட்சத்திரங்கள், திருமண பொருத்தம், 10 பொருத்தங்கள், தோஷங்கள், மற்றும் ஜோதிட முக்கியத்துவம்.',
        date: 'Feb 10, 2026',
        category: 'Astrology'
    },
    {
        slug: '/blog/thali-cultural-significance',
        title: 'தாலி: தமிழ் திருமணத்தின் புனித அடையாளம்',
        excerpt: 'தாலி கலாச்சார முக்கியத்துவம், வகைகள், பாரம்பரிய நம்பிக்கைகள், நவீன வடிவமைப்புகள்.',
        date: 'Feb 10, 2026',
        category: 'Traditions'
    },
    {
        slug: '/blog/tamil-wedding-rituals',
        title: 'தமிழ் திருமண சடங்குகள்: முழுமையான வழிகாட்டி',
        excerpt: 'நிச்சயதார்த்தம், திருமண நாள் சடங்குகள், மற்றும் திருமணத்திற்கு பின் நடக்கும் அனைத்து சடங்குகளையும் விரிவாக அறிந்து கொள்ளுங்கள்.',
        date: 'Feb 10, 2026',
        category: 'Traditions'
    },
    {
        slug: '/blog/mandapam-decoration',
        title: 'மண்டப அலங்காரம்: 10 சிறந்த யோசனைகள்',
        excerpt: 'பாரம்பரியம் மற்றும் நவீனம் கலந்த மண்டப அலங்கார யோசனைகள். பட்ஜெட் மற்றும் சுற்றுச்சூழல் நட்பு தேர்வுகளும் உள்ளடங்கும்.',
        date: 'Feb 10, 2026',
        category: 'Decoration'
    },
    {
        slug: '/blog/wedding-invitation-guide',
        title: 'திருமண அழைப்பிதழ் எழுதும் முறை',
        excerpt: 'பாரம்பரிய தமிழ் திருமண அழைப்பிதழ் எழுதும் முறை, இருமொழி அழைப்பிதழ், மற்றும் தவிர்க்க வேண்டிய பிழைகள்.',
        date: 'Feb 10, 2026',
        category: 'Invitations'
    },
    {
        slug: '/blog/choosing-wedding-photographer',
        title: 'திருமண புகைப்படக்காரர் தேர்வு: வழிகாட்டி',
        excerpt: 'சிறந்த புகைப்படக்காரரை தேர்வு செய்வது எப்படி? Candid vs Traditional, விலை நிர்ணயம், contract முக்கிய விஷயங்கள்.',
        date: 'Feb 10, 2026',
        category: 'Photography'
    },
    {
        slug: '/blog/thirumana-velai-pattiyal',
        title: 'திருமண வேலைகள் பட்டியல்: 6 மாத முழுமையான திட்டமிடல்',
        excerpt: 'திருமணத்திற்கு 6 மாதங்கள் முன்பு முதல் திருமண நாள் வரை செய்ய வேண்டிய அனைத்து வேலைகளின் பட்டியல்.',
        date: 'Jan 20, 2026',
        category: 'Planning'
    },
    {
        slug: '/blog/subha-muhurtham-2026',
        title: '2026 சுப முகூர்த்த நாட்கள்: தேதியை எப்படி தேர்ந்தெடுப்பது?',
        excerpt: 'வளர்பிறை, நல்ல நேரம், மற்றும் தவிர்க்க வேண்டிய நாட்களைக் கொண்டு சிறந்த திருமண தேதியை தேர்வு செய்வது எப்படி?',
        date: 'Jan 21, 2026',
        category: 'Astrology'
    },
    {
        slug: '/blog/budget-planning-tips',
        title: 'நடுத்தர வர்க்க திருமண பட்ஜெட்: செலவுகளை குறைப்பது எப்படி?',
        excerpt: 'ஆடம்பரத்தை குறைத்து, அவசியமான செலவுகளை மட்டும் செய்து சிக்கனமான திருமணம் நடத்துவது எப்படி?',
        date: 'Jan 22, 2026',
        category: 'Finance'
    }
];

export default function BlogIndex() {
    return (
        <div className="container mx-auto px-4 py-12">
            <header className="text-center mb-16 max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    திருமண வழிகாட்டி கட்டுரைகள்
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    திருமண ஏற்பாடுகளை எளிமையாக்க மற்றும் கலாச்சார புரிதலுக்கான எங்களின் சிறப்பு கட்டுரைகள்.
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {BLOG_POSTS.map((post) => (
                    <Link
                        key={post.slug}
                        href={post.slug}
                        className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                <span className="px-3 py-1 bg-gray-100 rounded-full font-medium text-xs uppercase tracking-wide">
                                    {post.category}
                                </span>
                                <time>{post.date}</time>
                            </div>

                            <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                                {post.title}
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center text-primary font-bold text-sm mt-auto">
                                வாசிக்க <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
