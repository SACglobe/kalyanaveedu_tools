#!/usr/bin/env node
/**
 * Automated Tool Scaffolder for Kalyanaveedu
 * Usage:
 *   node scripts/create-tool.mjs --slug rahu-kalam --titleTa "ராகு காலம்" --titleEn "Rahu Kalam" --icon "⏰" --descTa "இன்றைய ராகு கால நேரம்"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    const val = args[i + 1];
    options[key] = val;
  }
  return options;
}

const opts = parseArgs();

if (!opts.slug || !opts.titleTa || !opts.titleEn) {
  console.error(`Usage: node scripts/create-tool.mjs --slug <slug> --titleTa <tamil title> --titleEn <english title> [--icon <emoji>] [--descTa <description>]`);
  process.exit(1);
}

const slug = opts.slug;
const titleTa = opts.titleTa;
const titleEn = opts.titleEn;
const icon = opts.icon || '✨';
const descTa = opts.descTa || `${titleTa} கணக்கிடும் இலவச ஆன்லைன் கருவி.`;

// Convert kebab-case to PascalCase
const componentName = slug
  .split('-')
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join('');

console.log(`🚀 Creating tool: ${titleTa} (${titleEn}) at /tools/${slug}...`);

const componentPath = path.join(rootDir, 'src', 'components', 'tools', `${componentName}.tsx`);
const pageDir = path.join(rootDir, 'src', 'app', 'tools', slug);
const pagePath = path.join(pageDir, 'page.tsx');

// Component Template
const componentContent = `'use client';

import { useState } from 'react';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

export default function ${componentName}() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8 text-center">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl mx-auto mb-4">
          ${icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          ${titleTa}
        </h2>
        <p className="text-sm md:text-base text-gray-500 mb-6">
          ${titleEn}
        </p>

        {/* Ad Banner */}
        <div className="flex justify-center my-6">
          <div className="hidden md:block"><AdsterraBanner format="728x90" /></div>
          <div className="block md:hidden"><AdsterraBanner format="300x250" /></div>
        </div>
      </div>

      <RelatedTools currentSlug="${slug}" />
    </div>
  );
}
`;

// Page Template
const pageContent = `import type { Metadata } from 'next';
import ${componentName} from '@/components/tools/${componentName}';
import { SITE_CONFIG } from '@/lib/constants';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const metadata: Metadata = {
  title: '${titleTa} - ${titleEn} | ${'\\${SITE_CONFIG.name}'}',
  description: '${descTa}',
  alternates: {
    canonical: \`\${SITE_CONFIG.url}/tools/${slug}\`,
  },
  openGraph: {
    title: '${titleTa} | ${titleEn}',
    description: '${descTa}',
    url: \`\${SITE_CONFIG.url}/tools/${slug}\`,
    type: 'website',
  },
};

export const dynamic = 'force-static';

export default function Page() {
  const jsonLd = generateToolJsonLd({
    name: '${titleTa} - ${titleEn}',
    description: '${descTa}',
    path: '/tools/${slug}',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4">
          <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4">
            <ol className="flex flex-wrap gap-1 items-center">
              <li><a href="/" className="hover:text-orange-600 transition-colors">முகப்பு</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="/tools" className="hover:text-orange-600 transition-colors">கருவிகள்</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-orange-600 font-medium">${titleTa}</li>
            </ol>
          </nav>
        </div>

        <${componentName} />
      </main>
    </>
  );
}
`;

if (!fs.existsSync(pageDir)) {
  fs.mkdirSync(pageDir, { recursive: true });
}

if (!fs.existsSync(componentPath)) {
  fs.writeFileSync(componentPath, componentContent, 'utf-8');
  console.log(`✅ Created component: ${componentPath}`);
}

if (!fs.existsSync(pagePath)) {
  fs.writeFileSync(pagePath, pageContent, 'utf-8');
  console.log(`✅ Created page: ${pagePath}`);
}

// Update constants.ts
const constantsPath = path.join(rootDir, 'src', 'lib', 'constants.ts');
let constantsContent = fs.readFileSync(constantsPath, 'utf-8');

if (!constantsContent.includes(`/tools/${slug}`)) {
  const toolEntry = `    {
        path: '/tools/${slug}',
        title: '${titleTa} (${titleEn})',
        description: '${descTa}',
        icon: '${icon}'
    },
];`;
  constantsContent = constantsContent.replace(/\s*\];\s*$/, `\n${toolEntry}\n`);
  fs.writeFileSync(constantsPath, constantsContent, 'utf-8');
  console.log(`✅ Added ${slug} to TOOLS_LIST in constants.ts`);
}

console.log(`🎉 Tool scaffolding complete for /tools/${slug}!`);
