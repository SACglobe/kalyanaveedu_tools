import Link from 'next/link';
import { BLOG_POSTS, BLOG_CATEGORIES, getCategoryMeta } from '@/lib/blog-data';
import { TOOLS_LIST } from '@/lib/constants';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get recent posts to display in the footer of every blog page
  const recentPosts = BLOG_POSTS.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      
      {/* Blog Global Footer / Crawler Highway */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-black text-gray-900">மேலும் பயனுள்ள கட்டுரைகள்</h2>
              <p className="text-gray-500 font-medium">திருமணத் திட்டமிடல் மற்றும் பாரம்பரிய வழிகாட்டி</p>
            </div>
            <Link href="/blog" className="text-primary font-bold hover:underline">
              அனைத்து கட்டுரைகளும் →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => {
              const meta = getCategoryMeta(post.category);
              return (
                <Link 
                  key={post.slug} 
                  href={post.slug}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span>{meta.icon}</span>
                    <span>{meta.labelTa}</span>
                  </span>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-auto">
                    {post.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
          
          {/* Quick Links for Crawlers */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">முக்கிய பகுதிகள் (Categories)</h3>
            <div className="flex flex-wrap gap-3">
              {Object.values(BLOG_CATEGORIES).map(cat => (
                <Link 
                  key={cat.id} 
                  href={cat.id === 'all' ? '/blog' : `/blog?category=${cat.id}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:border-primary hover:text-primary transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.labelTa}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Cross-Linking to Tools (Crawler Highway Hardening) */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">திருமணக் கருவிகள் (Popular Tools)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TOOLS_LIST.slice(0, 4).map(tool => (
                <Link 
                  key={tool.path} 
                  href={tool.path}
                  className="p-4 bg-white border border-gray-100 rounded-2xl text-sm font-bold text-gray-800 hover:border-primary hover:text-primary transition-all flex items-center gap-3 shadow-sm"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="line-clamp-1">{tool.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
