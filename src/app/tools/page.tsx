import Link from 'next/link';
import { TOOLS_LIST } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'திருமண கருவிகள் | அனைத்தும் இலவசம்',
    description: 'வயது கணிப்பான், திருமண பொருத்தம், பட்ஜெட் பிளானர் உள்ளிட்ட அனைத்து திருமண கருவிகளின் பட்டியல்.',
};

export default function ToolsIndex() {
    return (
        <div className="container mx-auto px-4 py-12">
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
        </div>
    );
}
