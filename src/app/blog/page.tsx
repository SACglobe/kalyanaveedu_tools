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
