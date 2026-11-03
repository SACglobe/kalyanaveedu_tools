import Link from 'next/link';
import { getRelatedTools } from '@/lib/tool-relations';

export default function RelatedTools({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedTools(currentSlug);

  if (!related || related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-orange-100 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🔗</span>
        <h3 className="text-xl font-bold text-gray-900">இதையும் பாருங்கள் (Related Tools)</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {related.map((tool) => (
          <Link
            key={tool.path}
            href={tool.path}
            className="group block p-4 rounded-2xl bg-white border border-gray-100 hover:border-orange-300 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tool.icon}</div>
            <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              {tool.titleTa}
            </h4>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{tool.descriptionTa}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
