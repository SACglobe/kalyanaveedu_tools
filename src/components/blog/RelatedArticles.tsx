import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';

interface RelatedArticlesProps {
    currentSlug: string;
    category?: string;
    maxArticles?: number;
}

export default function RelatedArticles({ 
    currentSlug, 
    category, 
    maxArticles = 3 
}: RelatedArticlesProps) {
    // Filter out the current article
    let related = BLOG_POSTS.filter(post => post.slug !== currentSlug);

    // If category is provided, prioritize articles in the same category
    if (category) {
        const sameCategory = related.filter(post => post.category === category);
        const differentCategory = related.filter(post => post.category !== category);
        
        // Combine them, putting same category first
        related = [...sameCategory, ...differentCategory];
    }

    // Take the top N articles
    const displayedArticles = related.slice(0, maxArticles);

    if (displayedArticles.length === 0) return null;

    return (
        <section className="my-16 border-t border-gray-100 pt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <span className="text-primary text-3xl">📖</span> மேலும் படிக்கவும் (Related Articles)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
                {displayedArticles.map((post) => (
                    <Link
                        key={post.slug}
                        href={post.slug}
                        className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                    >
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                            {post.category}
                        </span>
                        <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug mb-3">
                            {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mt-auto">
                            {post.excerpt}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
