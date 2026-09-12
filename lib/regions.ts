import type { Recipe } from "@/data/recipes";

/** The filter bar: the three island groups, plus a type and a personal list. */
export const REGIONS = ["All", "Luzon", "Visayas", "Mindanao", "Dessert", "Favorites"] as const;

export type Region = (typeof REGIONS)[number];

const LUZON =
  /LUZON|TAGALOG|ILOCOS|PANGASINAN|PAMPANGA|BICOL|BATANGAS|CAVITE|QUEZON|LAGUNA|MANILA|MARIKINA|CALOOCAN|MALABON|BULACAN|NUEVA ECIJA|CAGAYAN|TUGUEGARAO|LUCBAN|LINGAYEN|SAN MIGUEL|TARLAC|ZAMBALES|RIZAL|BATAAN/;

const VISAYAS =
  /VISAYAS|CEBU|ILOILO|LEYTE|SAMAR|BACOLOD|NEGROS|PANAY|BOHOL|LILOAN|MANDAUE|JAGNA|SILAY|AKLAN|CAPIZ|ANTIQUE|GUIMARAS|SIQUIJOR|BILIRAN/;

const MINDANAO =
  /MINDANAO|SULU|TAUSUG|ZAMBOANGA|MARANAO|MAGUINDANAO|LANAO|DAVAO|BASILAN|TAWI-TAWI|COTABATO|SURIGAO|BUKIDNON/;

const DESSERT = /DESSERT|KAKANIN|CONFECTION|PASTRY/;

/**
 * Every island group a dish belongs to, plus "Dessert" when it is one.
 *
 * A dish recorded simply as "PHILIPPINES" is eaten nationwide and is returned
 * for no island group at all. Tagging those to all three would put adobo and
 * sinigang under Visayas and Mindanao and drown the genuinely regional dishes;
 * they remain reachable under "All" and through search.
 */
export function regionsOf(recipe: Recipe): string[] {
  const o = recipe.origin.toUpperCase();
  const c = recipe.category.toUpperCase();
  const out: string[] = [];

  const luzon = LUZON.test(o);
  const visayas = VISAYAS.test(o);
  const mindanao = MINDANAO.test(o);

  if (luzon) out.push("Luzon");
  if (visayas) out.push("Visayas");
  if (mindanao) out.push("Mindanao");

  if (DESSERT.test(c)) out.push("Dessert");
  return out;
}

/** The single label shown on a card. Island group where known, else nationwide. */
export function primaryRegion(recipe: Recipe): string {
  const o = recipe.origin.toUpperCase();
  if (VISAYAS.test(o)) return "Visayas";
  if (MINDANAO.test(o)) return "Mindanao";
  if (LUZON.test(o)) return "Luzon";
  return "Philippines";
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
