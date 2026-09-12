import type { Recipe } from "@/data/recipes";

export const REGIONS = [
  "All",
  "Classics",
  "Luzon",
  "Ilocos",
  "Pampanga",
  "Bicol",
  "Visayas",
  "Mindanao",
  "Dessert",
  "Favorites",
] as const;

export type Region = (typeof REGIONS)[number];

export function regionOf(recipe: Recipe): string {
  const o = recipe.origin.toUpperCase();
  const c = recipe.category.toUpperCase();
  if (c.startsWith("DESSERT") || c.includes("KAKANIN")) return "Dessert";
  if (o.includes("ILOCOS")) return "Ilocos";
  if (o.includes("BICOL")) return "Bicol";
  if (o.includes("PAMPANGA")) return "Pampanga";
  if (/VISAYAS|CEBU|ILOILO|LEYTE|SAMAR|BACOLOD|NEGROS|PANAY/.test(o)) return "Visayas";
  if (/MINDANAO|SULU|TAUSUG|ZAMBOANGA|MARANAO|MAGUINDANAO|LANAO|DAVAO/.test(o)) return "Mindanao";
  if (/LUZON|TAGALOG/.test(o)) return "Luzon";
  // Dishes recorded simply as "PHILIPPINES" are eaten nationwide.
  return "Classics";
}

/**
 * Turns the archive's shorthand ("2H 30M", "75M", "24H + 25M") into readable
 * prose. Trailing qualifiers such as "+ CHILL" are preserved.
 */
export function prettyTime(raw: string): string {
  const hours = /(\d+)\s*H/i.exec(raw);
  const mins = /(\d+)\s*M(?![A-Z])/i.exec(raw);
  if (!hours && !mins) return raw.toLowerCase();

  const h = hours ? parseInt(hours[1], 10) : 0;
  const m = mins ? parseInt(mins[1], 10) : 0;
  const total = h * 60 + m;

  const parts: string[] = [];
  const hh = Math.floor(total / 60);
  const mm = total % 60;
  if (hh) parts.push(hh === 1 ? "1 hour" : `${hh} hours`);
  if (mm) parts.push(`${mm} min`);

  const extra = /\+\s*CHILL/i.test(raw) ? " + chill" : "";
  return (parts.join(" ") || "0 min") + extra;
}

export function prettyYield(raw: string): string {
  const pax = /^(.*?)\s*PAX$/i.exec(raw.trim());
  if (pax) return `${pax[1].trim()} servings`;
  return raw.replace(/\s*PCS/i, " pcs").replace(/\s*EMPANADAS/i, " empanadas").trim();
}
