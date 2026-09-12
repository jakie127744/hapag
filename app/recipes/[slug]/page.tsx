import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { recipes } from "@/data/recipes";
import { RecipeDetail } from "@/components/RecipeDetail";

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
  if (!recipe) return { title: "Recipe not found — Hapag" };
  return { title: `${recipe.title} — Hapag`, description: recipe.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();
  return <RecipeDetail recipe={recipe} />;
}
