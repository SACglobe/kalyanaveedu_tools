import { notFound } from 'next/navigation';
import CityToolPage from '@/components/tools/CityToolPage';
import { TAMIL_CITIES, getCityById } from '@/lib/astro-core/constants';
import { cityToolDescription, cityToolTitle } from '@/lib/city-tools';
import { SITE_CONFIG } from '@/lib/constants';
import { langAlternates } from '@/lib/hreflang';

export const revalidate = 1800;
export const dynamicParams = false;

export function generateStaticParams() {
  return TAMIL_CITIES.map((c) => ({ city: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) return {};
  const title = cityToolTitle('rahu-kalam', city);
  const description = cityToolDescription('rahu-kalam', city);
  // Chennai is the tool's default view, so its canonical is the main tool page
  const path = id === 'chennai' ? '/tools/rahu-kalam' : `/tools/rahu-kalam/${id}`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}${path}`, languages: langAlternates(path, `/en/rahu-kalam/${id}`) },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/tools/rahu-kalam/${id}`, type: 'website', locale: 'ta_IN' },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) notFound();
  return <CityToolPage tool="rahu-kalam" city={city} />;
}
