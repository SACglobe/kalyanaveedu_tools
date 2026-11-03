// Structured Data JSON-LD Helper for Kalyanaveedu Tools
import { SITE_CONFIG } from '@/lib/constants';

export interface ToolFAQ {
  q: string;
  a: string;
}

export interface ToolSchemaProps {
  name: string;
  description: string;
  path: string;
  faqs?: ToolFAQ[];
}

export function generateToolJsonLd({ name, description, path, faqs = [] }: ToolSchemaProps) {
  const url = `${SITE_CONFIG.url}${path}`;

  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name,
      description,
      url,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      inLanguage: ['ta', 'en'],
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    },
  ];

  if (faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  return schemas;
}
