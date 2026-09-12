import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { recipes } from "@/data/recipes";
import { RecipeDetail } from "@/components/RecipeDetail";
import { absoluteUrl, SITE_NAME, SITE_LOCALE } from "@/lib/site";
import { prettyTime, prettyYield, primaryRegion } from "@/lib/regions";
import { recipeSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return { title: "Recipe not found" };

  const path = `/recipes/${recipe.slug}`;
  const region = primaryRegion(recipe);

  // Leads with the Filipino name, then what it is and where it is from, which
  // is what people actually type into a search box.
  const title = `${recipe.title} — ${recipe.subtitle}`;
  const description =
    `${recipe.description} ${region} · ${prettyTime(recipe.time)} · ` +
    `${prettyYield(recipe.yield)}.`.slice(0, 320);

  const image = recipe.image ? absoluteUrl(recipe.image) : absoluteUrl("/icons/icon-512.png");

  return {
    title,
    description,
    keywords: [
      recipe.title,
      recipe.subtitle,
      `${recipe.title} recipe`,
      `how to cook ${recipe.title}`,
      `Filipino ${region} recipe`,
      recipe.technique.toLowerCase(),
    ],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description: recipe.description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      images: [{ url: image, width: 1600, height: 1200, alt: recipe.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: recipe.description,
      images: [image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(recipeSchema(recipe)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema(recipe)) }}
      />
      <RecipeDetail recipe={recipe} />
    </>
  );
}
