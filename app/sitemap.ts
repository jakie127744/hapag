import type { MetadataRoute } from "next";
import { recipes } from "@/data/recipes";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...["/about", "/contact", "/privacy", "/terms"].map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
    ...recipes.map((r) => ({
      url: absoluteUrl(`/recipes/${r.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      // Sourced entries with a photograph are the strongest pages on the site.
      priority: r.verification === "verified" && r.image ? 0.8 : 0.6,
    })),
  ];
}
