"use client";

import Link from 'next/link';
import { TOOLS_LIST } from '@/lib/constants';

export default function RelevantTools({ excludePath }: { excludePath: string }) {
    const relevantTools = TOOLS_LIST.filter(tool => tool.path !== excludePath).slice(0, 3);

    return (
        <section className="mt-20">
            <h2 className="text-2xl font-black text-gray-900 mb-8 border-b-4 border-primary pb-2 inline-block">
                பிற பயனுள்ள கருவிகள் (Related Tools)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                {relevantTools.map((tool) => (
                    <Link
                        key={tool.path}
                        href={tool.path}
                        className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all flex flex-col items-center text-center"
                    >
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            {tool.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {tool.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                            {tool.description}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link
                    href="/tools"
                    className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
                >
                    அனைத்து கருவிகளையும் காண்க (View All Tools) <span>→</span>
                </Link>
            </div>
        </section>
    );
}
