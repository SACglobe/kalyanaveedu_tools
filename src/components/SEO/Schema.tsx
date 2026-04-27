'use client';

import { SITE_CONFIG } from '@/lib/constants';

interface SchemaProps {
    type: 'Organization' | 'Person' | 'FAQPage' | 'WebSite' | 'BlogPosting' | 'BreadcrumbList' | 'ItemList' | 'SoftwareApplication';
    data: any;
}

/**
 * Global Schema component for JSON-LD injection.
 * Supports multiple types for E-E-A-T and AEO optimization.
 */
export default function Schema({ type, data }: SchemaProps) {
    let jsonLd: any = {};

    switch (type) {
        case 'Organization':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'name': data.name || SITE_CONFIG.name,
                'url': data.url || SITE_CONFIG.url,
                'logo': data.logo || `${SITE_CONFIG.url}/icon-v2.png`,
                'sameAs': data.sameAs || []
            };
            break;

        case 'Person':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'Person',
                'name': data.name,
                'url': data.url,
                'sameAs': data.sameAs || [],
                'jobTitle': data.jobTitle
            };
            break;

        case 'FAQPage':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': data.mainEntity.map((item: any) => ({
                    '@type': 'Question',
                    'name': item.question,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': item.answer
                    }
                }))
            };
            break;

        case 'WebSite':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                'name': data.name || SITE_CONFIG.name,
                'url': data.url || SITE_CONFIG.url,
                'potentialAction': {
                    '@type': 'SearchAction',
                    'target': `${data.url || SITE_CONFIG.url}/search?q={search_term_string}`,
                    'query-input': 'required name=search_term_string'
                }
            };
            break;

        case 'BlogPosting':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                'headline': data.title,
                'description': data.description,
                'author': {
                    '@type': 'Person',
                    'name': data.author
                },
                'datePublished': data.datePublished,
                'dateModified': data.dateModified || data.datePublished,
                'image': data.image || `${SITE_CONFIG.url}/og-image.jpg`,
                'publisher': {
                    '@type': 'Organization',
                    'name': SITE_CONFIG.name,
                    'logo': {
                        '@type': 'ImageObject',
                        'url': `${SITE_CONFIG.url}/icon-v2.png`
                    }
                },
                'mainEntityOfPage': {
                    '@type': 'WebPage',
                    '@id': `${SITE_CONFIG.url}${data.slug}`
                }
            };
            break;

        case 'BreadcrumbList':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                'itemListElement': data.items.map((item: any, index: number) => ({
                    '@type': 'ListItem',
                    'position': index + 1,
                    'name': item.name,
                    'item': item.item.startsWith('http') ? item.item : `${SITE_CONFIG.url}${item.item}`
                }))
            };
            break;

        case 'ItemList':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                'name': data.name,
                'description': data.description,
                'itemListElement': data.items.map((item: any, index: number) => ({
                    '@type': 'ListItem',
                    'position': index + 1,
                    'name': item.title || item.name,
                    'url': item.url || `${SITE_CONFIG.url}${item.path}`
                }))
            };
            break;

        case 'SoftwareApplication':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                'name': data.title || data.name,
                'description': data.description,
                'applicationCategory': 'UtilityApplication',
                'operatingSystem': 'Any',
                'offers': {
                    '@type': 'Offer',
                    'price': '0',
                    'priceCurrency': 'INR'
                },
                'author': {
                    '@type': 'Organization',
                    'name': SITE_CONFIG.name
                }
            };
            break;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
