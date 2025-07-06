import { client } from "@/sanity/client";
import CategoryPageUI from "@/components/blog/CategoryPageUI";
import { i18n } from "@/i18n/i18n-config"; 
import { getDictionary } from "@/i18n/getDictionary";
import type {
  CATEGORY_PAGE_QUERYResult,
} from "@/sanity/types";
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORY_PAGE_QUERY } from "@/sanity/queries";


// Define PageParams interface
interface PageParams {
  slug: string;
}

// Define SearchParams interface
interface SearchParams {
  [key: string]: string | string[] | undefined;
}

// Define PageProps to expect a Promise of PageParams
interface PageProps {
  params: Promise<PageParams>;
  searchParams: Promise<SearchParams>; 
}

// Fetch the category by slug
async function getCategory(slug: string): Promise<CATEGORY_PAGE_QUERYResult | null> {
  return client.fetch<CATEGORY_PAGE_QUERYResult | null>(CATEGORY_PAGE_QUERY, { slug });
}

export async function generateMetadata(
  { params }: PageProps, 
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const locale = i18n.defaultLocale;
  const dictionary = await getDictionary(locale);
  const result = await getCategory(slug);

  if (!result) {
    return {
      title: dictionary.notFound.categoryTitle,
      description: dictionary.notFound.categoryMessage,
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: result.title ? `${result.title} | ${dictionary.app.title}` : dictionary.notFound.categoryTitle,
    description: result.description || dictionary.blog.defaultDescription,
    openGraph: {
      images: [...previousImages],
    },
  };
}

// Generate static paths for all categories
export async function generateStaticParams(): Promise<PageParams[]> {
  const allParams: PageParams[] = [];

  // for (const locale of locales) {
    const categories = await client.fetch<Array<{ slug: { current: string } }>>(
      `*[
        _type == "category"
      ]{
        _id,
        title,
        slug,
        description
      }`
    );
    categories.forEach(category => {
      if (category.slug?.current) {
        allParams.push({ slug: category.slug.current });
      }
    });
  // }
  return allParams;
}

export default async function CategoryPage({
  params}: PageProps) { 
  const { slug } = await params;
  const locale = i18n.defaultLocale;
  const dictionary = await getDictionary(locale);
  const result = await getCategory(slug);

  if (!result) {
    notFound();
  }

  return (
    <CategoryPageUI
      category={result} 
      posts={result.posts}
      dictionary={dictionary}
    />
  );
}
