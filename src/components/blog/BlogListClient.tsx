'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { BLOG_CATEGORIES, normalizeCategory, getCategoryMeta } from '@/lib/blog-data';

interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    author?: string;
}

interface BlogListClientProps {
    posts: Post[];
    categoryCounts: Record<string, number>;
}

export default function BlogListClient({ posts, categoryCounts }: BlogListClientProps) {
    const searchParams = useSearchParams();
    const activeCategory = normalizeCategory(searchParams.get('category') ?? undefined);

    // Filter posts
    const filteredPosts = activeCategory === 'all'
        ? posts
        : posts.filter(post => normalizeCategory(post.category) === activeCategory);

    return (
        <>
            {/* Category Filter Tabs */}
            <nav className="max-w-6xl mx-auto mb-12" aria-label="கட்டுரை வகைகள்">
                <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar sm:flex-wrap sm:justify-center">
                    {Object.values(BLOG_CATEGORIES).map((cat) => {
                        const isActive = activeCategory === cat.id;
                        const count = categoryCounts[cat.id] || 0;
                        const href = cat.id === 'all' ? '/blog' : `/blog?category=${cat.id}`;

                        return (
                            <Link
                                key={cat.id}
                                href={href}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 border ${
                                    isActive
                                        ? 'bg-primary text-white border-primary shadow-md shadow-primary/20 scale-105'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:text-primary'
                                }`}
                            >
                                <span className="text-base">{cat.icon}</span>
                                <span>{cat.labelTa}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                                }`}>
                                    {count}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Active Category Description (if filtered) */}
            {activeCategory !== 'all' && BLOG_CATEGORIES[activeCategory] && (
                <div className="max-w-4xl mx-auto mb-8 p-4 bg-primary/5 border border-primary/15 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">{BLOG_CATEGORIES[activeCategory].icon}</span>
                        <div>
                            <h2 className="font-bold text-gray-900">{BLOG_CATEGORIES[activeCategory].labelTa}</h2>
                            <p className="text-xs text-gray-600">{BLOG_CATEGORIES[activeCategory].description}</p>
                        </div>
                    </div>
                    <Link href="/blog" className="text-xs font-bold text-primary hover:underline whitespace-nowrap">
                        அனைத்தும் காட்டு ✕
                    </Link>
                </div>
            )}

            {/* Articles Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredPosts.map((post) => {
                        const catMeta = getCategoryMeta(post.category);
                        return (
                            <Link
                                key={post.slug}
                                href={post.slug}
                                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                                        <span>{catMeta.icon}</span>
                                        <span>{catMeta.labelTa}</span>
                                    </span>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3 font-medium">
                                        <span>✍️ {post.author || 'கல்யாண வீடு குழு'}</span>
                                        <time>{post.date}</time>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                                        <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                            வாசிக்க <span>→</span>
                                        </span>
                                        <span className="text-xs text-gray-400">5 min read</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="max-w-md mx-auto text-center py-16 px-4 bg-white rounded-3xl border border-gray-100 shadow-sm my-12">
                    <span className="text-4xl mb-4 block">✍️</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">இப்பிரிவில் விரைவில் கட்டுரைகள்</h3>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        எங்கள் AI தானியங்கி அமைப்பு தினமும் புதிய கட்டுரைகளை எழுதி வெளியிட்டு வருகிறது. விரைவில் இப்பிரிவில் பயனுள்ள கட்டுரைகள் பதிவேற்றப்படும்!
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block px-6 py-3 bg-primary text-white font-bold text-sm rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                    >
                        அனைத்து கட்டுரைகளையும் பார்க்க
                    </Link>
                </div>
            )}
        </>
    );
}
