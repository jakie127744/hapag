import type { Recipe } from "@/data/recipes";
import { absoluteUrl, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "./site";
import { isoDuration, prettyYield, primaryRegion, yieldServings } from "./regions";

/**
 * schema.org Recipe markup.
 *
 * This is what lets a recipe appear in Google with its photograph, time and
 * ingredients rather than as a plain blue link. Only fields the archive can
 * actually support are emitted: there are no ratings or review counts here,
 * because inventing them would be fabricating engagement the site has not got.
 */
export function recipeSchema(recipe: Recipe) {
  const url = absoluteUrl(`/recipes/${recipe.slug}`);
  const total = isoDuration(recipe.time);
  const servings = yieldServings(recipe.yield);

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": url,
    name: recipe.title,
    url,
    description: recipe.description,
    recipeCuisine: "Filipino",
    recipeCategory: recipe.category.split("/")[0].trim().toLowerCase(),
    keywords: [
      recipe.title,
      recipe.subtitle,
      primaryRegion(recipe),
      "Filipino recipe",
      recipe.technique.toLowerCase(),
    ].join(", "),
    recipeIngredient: recipe.ingredients.map((i) => `${i.metric} ${i.name}`.trim()),
    recipeInstructions: recipe.instructions.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
      url: `${url}#step-${i + 1}`,
    })),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    inLanguage: "en",
  };

  if (recipe.image) schema.image = [absoluteUrl(recipe.image)];
  if (total) {
    schema.totalTime = total;
    schema.cookTime = total;
  }
  if (servings) schema.recipeYield = `${servings} servings`;
  else schema.recipeYield = prettyYield(recipe.yield);

  if (recipe.history) {
    schema.about = { "@type": "Thing", description: recipe.history };
  }
  if (recipe.notes.length) {
    schema.recipeInstructions = [
      ...(schema.recipeInstructions as unknown[]),
      ...recipe.notes.map((n) => ({ "@type": "HowToTip", text: n })),
    ];
  }
  return schema;
}

export function breadcrumbSchema(recipe: Recipe) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Archive", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: primaryRegion(recipe),
        item: absoluteUrl("/#archive"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: recipe.title,
        item: absoluteUrl(`/recipes/${recipe.slug}`),
      },
    ],
  };
}

/** Site-level identity, plus the search box target. */
export function siteSchema(recipeCount: number) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_TITLE,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icons/icon-512.png") },
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/#archive`,
      name: "The Gastronomic Archive",
      url: absoluteUrl("/#archive"),
      description: `${recipeCount} documented Filipino recipes from Luzon, Visayas and Mindanao.`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ];
}

/** Serialises safely for embedding in a script tag. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
