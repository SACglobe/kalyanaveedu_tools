import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
    title: 'திருமண வழிகாட்டி கட்டுரைகள் | Wedding Planning Blog',
    description: 'தமிழ் திருமண சடங்குகள், பட்ஜெட் திட்டமிடல் மற்றும் சுப முகூர்த்தம் பற்றிய பயனுள்ள கட்டுரைகள்.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog`,
    },
};

import { BLOG_POSTS } from '@/lib/blog-data';

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
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
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
