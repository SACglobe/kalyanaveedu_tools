'use client';

import { SITE_CONFIG } from '@/lib/constants';

interface SchemaProps {
    type: 'Organization' | 'WebSite' | 'BlogPosting' | 'BreadcrumbList';
    data: any;
}

export default function Schema({ type, data }: SchemaProps) {
    let jsonLd = {};

    switch (type) {
        case 'Organization':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'name': SITE_CONFIG.name,
                'url': SITE_CONFIG.url,
                'logo': `${SITE_CONFIG.url}/icon-v2.png`,
                'sameAs': [
                    'https://selvan.dev',
                    'https://x.com/kalyanaveedu',
                    'https://www.facebook.com/kalyanaveedu',
                    'https://www.instagram.com/kalyanaveedu',
                    'https://www.linkedin.com/company/kalyanaveedu',
                    'https://www.wikidata.org/wiki/Special:Search?search=kalyanaveedu',
                    'https://en.wikipedia.org/wiki/Special:Search?search=kalyanaveedu'
                ]
            };
            break;

        case 'WebSite':
            jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                'name': SITE_CONFIG.name,
                'url': SITE_CONFIG.url,
                'potentialAction': {
                    '@type': 'SearchAction',
                    'target': `${SITE_CONFIG.url}/search?q={search_term_string}`,
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
                    'name': data.author || 'கல்யாண வீடு டீம்'
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
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
