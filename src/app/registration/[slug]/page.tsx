import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { regionalGuides, RegionalGuide } from '@/data/regionalGuides';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

// Statically generate all regional routes
export function generateStaticParams() {
  return regionalGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

// Generate dynamic metadata for SEO
export function generateMetadata({ params }: PageProps): Metadata {
  const guide = regionalGuides.find((g) => g.slug === params.slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: guide.meta.title,
    description: guide.meta.description,
    keywords: guide.meta.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/registration/${guide.slug}`,
    },
  };
}

export default function RegionalRegistrationPage({ params }: PageProps) {
  const guide = regionalGuides.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.meta.title,
    description: guide.meta.description,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: '150',
    },
    step: guide.process.map((step) => ({
      '@type': 'HowToStep',
      name: step.title.en,
      text: step.description.en,
    })),
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary">Home (முகப்பு)</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Registration in {guide.name.en} ({guide.name.ta})</span>
        </nav>

        {/* Header */}
        <header className="mb-12 text-center max-w-4xl mx-auto border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-primary">
            Marriage Registration in {guide.name.en} <br/>
            <span className="text-primary text-2xl md:text-4xl mt-2 block">{guide.name.ta} திருமண பதிவு</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {guide.meta.description}
          </p>
        </header>

        <article className="prose prose-lg max-w-none text-gray-700">
          {/* Applicable Laws Section */}
          <section className="mb-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-primary">⚖️</span> Applicable Laws (பொருந்தும் சட்டங்கள்)
            </h2>
            <div className="space-y-4">
              {guide.laws.map((law, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="font-semibold text-gray-900">{law.en}</p>
                  <p className="text-gray-600 text-base mt-2">{law.ta}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Required Documents Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-primary">📄</span> Required Documents (தேவையான ஆவணங்கள்)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guide.documents.map((docCategory, idx) => (
                <div key={idx} className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-900 mb-1">{docCategory.category.en}</h3>
                  <h4 className="text-blue-700 text-sm mb-4">{docCategory.category.ta}</h4>
                  <ul className="space-y-3">
                    {docCategory.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-base">
                        <span className="text-blue-500 mt-1">✓</span>
                        <div>
                          <p className="text-gray-900 font-medium">{item.en}</p>
                          <p className="text-gray-600 text-sm">{item.ta}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Step-by-step Process Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-primary">⚙️</span> Registration Process (பதிவு செய்யும் முறை)
            </h2>
            <div className="space-y-6">
              {guide.process.map((step) => (
                <div key={step.step} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                  <div className="md:w-16 h-16 bg-primary/10 text-primary font-black text-2xl flex items-center justify-center rounded-xl shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title.en}</h3>
                    <h4 className="text-gray-500 text-sm mb-3">{step.title.ta}</h4>
                    <p className="text-gray-700 mb-2">{step.description.en}</p>
                    <p className="text-gray-600 text-sm">{step.description.ta}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fees & Timeline Section */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <span>💰</span> Fees Structure (கட்டண விவரங்கள்)
              </h2>
              <ul className="space-y-4">
                {guide.fees.map((fee, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b border-green-200/50 pb-2 last:border-0">
                    <div>
                      <p className="text-green-900 font-medium">{fee.description.en}</p>
                      <p className="text-green-700 text-sm">{fee.description.ta}</p>
                    </div>
                    <span className="font-bold text-green-800 whitespace-nowrap ml-4">{fee.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <span>⏱️</span> Processing Time (கால அளவு)
              </h2>
              <p className="text-purple-900 font-medium">{guide.processingTime.en}</p>
              <p className="text-purple-700 text-sm mt-2">{guide.processingTime.ta}</p>
              
              <div className="mt-8 pt-6 border-t border-purple-200/50">
                <p className="text-purple-900 font-bold mb-2">Official Portal:</p>
                <a href={guide.officialPortal} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium break-all">
                  {guide.officialPortal}
                </a>
              </div>
            </div>
          </section>

          {/* Important Notes Section */}
          {guide.importantNotes.length > 0 && (
            <section className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span>⚠️</span> Important Notes (முக்கிய குறிப்புகள்)
              </h2>
              <ul className="space-y-4">
                {guide.importantNotes.map((note, idx) => (
                  <li key={idx} className="flex gap-3 text-base">
                    <span className="text-red-500 mt-1">•</span>
                    <div>
                      <p className="text-red-900 font-medium">{note.en}</p>
                      <p className="text-red-700 text-sm">{note.ta}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </article>
      </div>
    </div>
  );
}
