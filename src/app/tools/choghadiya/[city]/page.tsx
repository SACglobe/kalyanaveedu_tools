import { notFound } from 'next/navigation';
import CityToolPage from '@/components/tools/CityToolPage';
import { TAMIL_CITIES, getCityById } from '@/lib/astro-core/constants';
import { cityToolDescription, cityToolTitle } from '@/lib/city-tools';
import { SITE_CONFIG } from '@/lib/constants';

export const revalidate = 1800;
export const dynamicParams = false;

export function generateStaticParams() {
  return TAMIL_CITIES.map((c) => ({ city: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) return {};
  const title = cityToolTitle('choghadiya', city);
  const description = cityToolDescription('choghadiya', city);
  // Chennai is the tool's default view, so its canonical is the main tool page
  const path = id === 'chennai' ? '/tools/choghadiya' : `/tools/choghadiya/${id}`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}${path}` },
    openGraph: { title, description, url: `${SITE_CONFIG.url}/tools/choghadiya/${id}`, type: 'website', locale: 'ta_IN' },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) notFound();
  return <CityToolPage tool="choghadiya" city={city} />;
}
