import type { Page } from '@/sanity/types';
import { client, urlFor } from '@/sanity/client';
import { notFound } from 'next/navigation';
import RenderSection from '@/components/sections/RenderSection';
import { dictionary } from '@/i18n/dictionaries.en';
import type { Metadata } from 'next';
import { HOME_PAGE_QUERY } from '@/sanity/queries';

async function getHomePage(): Promise<Page | null> {
  return client.fetch<Page | null>(HOME_PAGE_QUERY);
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomePage();

  if (!page) {
    return {
      title: dictionary.notFound.pageTitle,
      description: dictionary.notFound.pageMessage,
    };
  }

  const metadata: Metadata = { title: page.title || 'Página Inicial' };
  if (page.description) metadata.description = page.description;
  if (page.ogImage?.asset?._ref) {
    metadata.openGraph = {
      images: [urlFor(page.ogImage).width(1200).height(630).url()],
    };
  }
  return metadata;
}

export default async function HomePage() {
  const page = await getHomePage();
  if (!page) notFound();
  return (
    <main>
      {page.pageBuilder?.map((section) => (
        <RenderSection key={section._key} section={section} />
      ))}
    </main>
  );
}
