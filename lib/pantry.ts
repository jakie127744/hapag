import type { Ingredient } from "@/data/recipes";
import type { Unit } from "./store";

/**
 * Grocery consolidation.
 *
 * Ingredients are summed in metric base units (g / ml / whole counts) no matter
 * which unit system is on screen, because metric quantities in the archive are
 * unambiguous and additive — "1 lb pork" and "2 lb pork" become 1360 g, not an
 * unaddable pile of cups. Display and pack rounding convert out of the base at
 * the very end.
 */

export type Dim = "mass" | "volume" | "count";
export type BaseUnit = "g" | "ml" | "count";

const G_PER_LB = 453.59237;
const G_PER_OZ = 28.349523;
const ML_PER_FLOZ = 29.57353;

/* ------------------------------------------------------------------ *
 * Parsing
 * ------------------------------------------------------------------ */

/** "1 1/2" -> 1.5, "3/4" -> 0.75, "15–30" -> 30 (buy enough), "2.0" -> 2 */
function parseAmount(raw: string): number | null {
  const text = raw.replace(/[–—]/g, "-").replace(/,/g, "").trim();
  if (!text) return null;

  // A range means "somewhere between" — for shopping, take the upper bound.
  const range = /^([\d./\s]+)-([\d./\s]+)$/.exec(text);
  if (range) return parseAmount(range[2]);

  const mixed = /^(\d+)\s+(\d+)\/(\d+)$/.exec(text);
  if (mixed) return Number(mixed[1]) + Number(mixed[2]) / Number(mixed[3]);

  const frac = /^(\d+)\/(\d+)$/.exec(text);
  if (frac) return Number(frac[1]) / Number(frac[2]);

  const num = Number(text);
  return Number.isFinite(num) ? num : null;
}

const UNIT_ALIASES: Record<string, string> = {
  gram: "g", grams: "g", g: "g", kg: "kg", kilogram: "kg",
  ml: "ml", l: "l", liter: "l", litre: "l",
  tsp: "tsp", teaspoon: "tsp", tbsp: "tbsp", tablespoon: "tbsp",
  cup: "cup", cups: "cup",
  oz: "oz", ounce: "oz", ounces: "oz", lb: "lb", lbs: "lb", pound: "lb",
  "fl oz": "fl oz", "oz can": "oz",
  clove: "clove", cloves: "clove",
  pc: "pc", pcs: "pc", piece: "pc", pieces: "pc",
  stalk: "stalk", stalks: "stalk",
  leaf: "leaf", leaves: "leaf",
  sheet: "sheet", sheets: "sheet",
  slice: "slice", slices: "slice",
  large: "pc", medium: "pc", small: "pc",
};

const VAGUE = /^(to taste|as needed|optional)$/i;

export type Parsed =
  | { kind: "vague" }
  | { kind: "qty"; dim: Dim; base: number; countNoun?: string };

/** Reads one quantity string ("900 g", "1/4 cup", "12 cloves") into base units. */
export function parseQuantity(raw: string): Parsed | null {
  const text = raw.trim();
  if (!text || VAGUE.test(text)) return { kind: "vague" };

  const m = /^([\d–—/.,\s-]*?)\s*([a-zA-Z][a-zA-Z\s]*)?$/.exec(text);
  if (!m) return null;

  const amount = parseAmount(m[1] ?? "");
  const rawUnit = (m[2] ?? "").trim().toLowerCase();
  if (amount === null) return VAGUE.test(rawUnit) ? { kind: "vague" } : null;

  const unit = UNIT_ALIASES[rawUnit] ?? rawUnit;

  switch (unit) {
    case "g": return { kind: "qty", dim: "mass", base: amount };
    case "kg": return { kind: "qty", dim: "mass", base: amount * 1000 };
    case "oz": return { kind: "qty", dim: "mass", base: amount * G_PER_OZ };
    case "lb": return { kind: "qty", dim: "mass", base: amount * G_PER_LB };
    case "ml": return { kind: "qty", dim: "volume", base: amount };
    case "l": return { kind: "qty", dim: "volume", base: amount * 1000 };
    case "tsp": return { kind: "qty", dim: "volume", base: amount * 4.92892 };
    case "tbsp": return { kind: "qty", dim: "volume", base: amount * 14.7868 };
    case "cup": return { kind: "qty", dim: "volume", base: amount * 236.588 };
    case "fl oz": return { kind: "qty", dim: "volume", base: amount * ML_PER_FLOZ };
    default:
      // Anything else is a countable thing: cloves, pcs, stalks, leaves.
      return { kind: "qty", dim: "count", base: amount, countNoun: unit || "pc" };
  }
}

/* ------------------------------------------------------------------ *
 * Ingredient identity
 * ------------------------------------------------------------------ */

/**
 * Explicit aliases only. Fuzzy name matching is deliberately avoided here —
 * substring similarity happily merges "butter" with "peanut butter" and
 * "glutinous rice" with "glutinous rice flour", which is worse than a
 * duplicated line on a shopping list.
 */
const ALIASES: Record<string, string> = {
  "fresh ginger": "ginger",
  "chicken thigh": "chicken thighs",
  egg: "eggs",
  "green chili": "green chilies",
  "long green chilies": "green chilies",
  "ground black pepper": "black pepper",
  onion: "yellow onion",
  tomato: "tomatoes",
  "pork belly slab": "pork belly",
  "raw peanuts": "peanuts",
};

/** "Garlic, crushed" and "Garlic, minced" are one thing to buy. */
export function canonicalKey(name: string): string {
  const head = name.split(",")[0].trim().toLowerCase().replace(/\s+/g, " ");
  return ALIASES[head] ?? head;
}

function titleCase(key: string): string {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

/* ------------------------------------------------------------------ *
 * Cross-dimension reconciliation
 * ------------------------------------------------------------------ */

/** Grams per single countable unit, for ingredients recorded both ways. */
const COUNT_WEIGHT: Record<string, number> = {
  garlic: 5,          // one peeled clove
  eggs: 50,
  "yellow onion": 150,
  "red onion": 150,
  tomatoes: 120,
};

/**
 * Grams per ml. Dry seasonings are often recorded by the spoon; a shopping list
 * measured in millilitres of pepper is useless, so anything listed here is
 * always resolved to weight.
 */
const DENSITY: Record<string, number> = {
  "black pepper": 0.45,
  "black peppercorns": 0.47,
  "white pepper": 0.45,
  salt: 1.2,
  "kosher salt": 1.0,
  "rock salt": 1.2,
  sugar: 0.85,
  "brown sugar": 0.9,
  "annatto seeds": 0.6,
  "annatto powder": 0.5,
  turmeric: 0.6,
  paprika: 0.46,
  "ground cumin": 0.5,
  cornstarch: 0.6,
  "baking powder": 0.9,
  "chili powder": 0.5,
  "curry powder": 0.5,
  "sesame seeds": 0.6,
  "peanut butter": 1.1,
};

/** Things nobody shops for. */
const EXCLUDED = new Set(["water", "ice", "hot water", "cold water", "tap water"]);

/** False for things that never belong on a shopping list, such as tap water. */
export function isShoppable(name: string): boolean {
  return !EXCLUDED.has(canonicalKey(name));
}

/* ------------------------------------------------------------------ *
 * Purchase rounding
 * ------------------------------------------------------------------ */

type Aisle = "Meat & Seafood" | "Produce" | "Pantry & Sauces" | "Spices & Dry" | "Other";

const AISLE_RULES: [RegExp, Aisle][] = [
  // Condiments first: "fish sauce" and "shrimp paste" are pantry items, and
  // would otherwise be caught by the seafood rule below on "fish"/"shrimp".
  [/sauce|paste|vinegar|oil|stock|broth|bagoong|patis|toyo|ketchup|syrup|jam/, "Pantry & Sauces"],
  [/pork|beef|chicken|oxtail|tripe|liver|jowl|shank|belly|shoulder|bacon|ham|blood|isaw|offal/, "Meat & Seafood"],
  [/shrimp|fish|squid|bangus|tanigue|pagi|crab|clam|mussel|tuna|milkfish/, "Meat & Seafood"],
  [/onion|garlic|ginger|tomato|eggplant|bean|spinach|kangkong|cabbage|radish|papaya|chili|chilies|lemongrass|leaf|leaves|banana|potato|carrot|cucumber|okra|squash|taro|gabi|coconut meat|jackfruit|langka|malunggay|pechay|bok choy|scallion|leek|calamansi|lime|lemon|sitaw|ampalaya|mango|santol|turmeric root/, "Produce"],
  [/milk|vinegar|sauce|oil|stock|broth|juice|wine|water|bagoong|patis|toyo|cream|condensed|evaporated/, "Pantry & Sauces"],
  [/salt|pepper|peppercorn|sugar|annatto|atsuete|turmeric|powder|flour|rice|noodle|bihon|canton|starch|peanut|sesame|bay|spice|cornstarch|yeast|baking/, "Spices & Dry"],
];

function aisleOf(key: string): Aisle {
  for (const [re, aisle] of AISLE_RULES) if (re.test(key)) return aisle;
  return "Other";
}

/**
 * Pack sizes a shop actually sells, in base units. `discrete` names a unit the
 * item is sold as (a head of garlic, a can of coconut milk) so the buy line can
 * say "2 heads" instead of "100 g".
 */
type PackRule = {
  metric: number[];
  imperial: number[];
  discrete?: { noun: string; plural?: string; size: number };
};

const lbs = (...n: number[]) => n.map((x) => x * G_PER_LB);

const PACKS: Record<string, PackRule> = {
  garlic: {
    metric: [50, 100, 150, 200, 300],
    imperial: [50, 100, 150, 200, 300],
    discrete: { noun: "head", size: 50 },
  },
  eggs: {
    metric: [6, 12, 18, 24],
    imperial: [6, 12, 18, 24],
    discrete: { noun: "egg", size: 1 },
  },
  "coconut milk": {
    metric: [400, 800, 1200, 1600, 2400],
    imperial: [400, 800, 1200, 1600, 2400],
    discrete: { noun: "can", size: 400 },
  },
};

const DEFAULT_PACKS: Record<Dim, Record<Unit, number[]>> = {
  mass: {
    metric: [100, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 4000, 5000],
    imperial: lbs(0.25, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10),
  },
  volume: {
    // Bottle and carton sizes, not cooking measures.
    metric: [250, 500, 750, 1000, 1500, 2000, 3000, 5000],
    imperial: [236.588, 473.176, 709.765, 946.353, 1419.53, 1892.71, 2839.06, 3785.41],
  },
  count: { metric: [], imperial: [] },
};

const MEAT_PACKS: Record<Unit, number[]> = {
  metric: [250, 500, 1000, 1500, 2000, 2500, 3000, 4000, 5000],
  imperial: lbs(0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10),
};

/** Seasonings come in small jars, not half-kilo sacks. */
const SPICE_PACKS: Record<Unit, number[]> = {
  metric: [25, 50, 100, 250, 500],
  imperial: [28.35, 56.7, 113.4, 226.8, 453.59],
};

function roundUpTo(value: number, ladder: number[]): number {
  for (const step of ladder) if (value <= step + 1e-9) return step;
  // Past the biggest pack, buy whole multiples of it.
  const biggest = ladder[ladder.length - 1];
  return Math.ceil(value / biggest) * biggest;
}

/* ------------------------------------------------------------------ *
 * Formatting
 * ------------------------------------------------------------------ */

function trimNum(n: number, places = 2): string {
  return Number(n.toFixed(places)).toString();
}

function formatMass(g: number, system: Unit): string {
  if (system === "metric") {
    return g >= 1000 ? `${trimNum(g / 1000)} kg` : `${trimNum(g, 0)} g`;
  }
  const lb = g / G_PER_LB;
  if (lb < 1) return `${trimNum(g / G_PER_OZ, 1)} oz`;
  return `${trimNum(lb, 2)} lb`;
}

function formatVolume(ml: number, system: Unit): string {
  if (system === "metric") {
    return ml >= 1000 ? `${trimNum(ml / 1000)} L` : `${trimNum(ml, 0)} ml`;
  }
  // Bottles are labelled in fluid ounces, then quarts — not cooking cups.
  const floz = ml / ML_PER_FLOZ;
  if (floz < 33.8) return `${trimNum(floz, 1)} fl oz`;
  const qt = ml / 946.353;
  return `${trimNum(qt, 2)} qt`;
}

function formatBase(value: number, dim: Dim, system: Unit, countNoun?: string): string {
  if (dim === "mass") return formatMass(value, system);
  if (dim === "volume") return formatVolume(value, system);
  const n = trimNum(value, 1);
  const noun = countNoun ?? "pc";
  return `${n} ${Number(n) === 1 ? noun : pluralize(noun)}`;
}

function pluralize(noun: string): string {
  if (noun.endsWith("f")) return noun.slice(0, -1) + "ves";
  if (/(s|x|ch|sh)$/.test(noun)) return noun + "es";
  return noun + "s";
}

/* ------------------------------------------------------------------ *
 * Consolidation
 * ------------------------------------------------------------------ */

export type GroceryLine = {
  key: string;
  label: string;
  dim: Dim;
  countNoun?: string;
  /** Summed requirement across every selected recipe, in base units. */
  needBase: number;
  needLabel: string;
  /** Rounded up to something you can actually buy. */
  buyBase: number;
  buyLabel: string;
  /** True when rounding up changed the amount (worth showing the shopper). */
  rounded: boolean;
  /** Had at least one "to taste" / "as needed" entry. */
  vague: boolean;
  sources: string[];
};

export type GroceryGroup = { aisle: Aisle; lines: GroceryLine[] };

export type SourcedIngredient = Ingredient & { recipeTitle: string };

const AISLE_ORDER: Aisle[] = [
  "Meat & Seafood",
  "Produce",
  "Pantry & Sauces",
  "Spices & Dry",
  "Other",
];

export function consolidate(items: SourcedIngredient[], system: Unit): GroceryGroup[] {
  type Acc = {
    label: string;
    totals: Partial<Record<Dim, number>>;
    countNoun?: string;
    vague: boolean;
    sources: Set<string>;
  };
  const acc = new Map<string, Acc>();

  for (const item of items) {
    const key = canonicalKey(item.name);
    if (EXCLUDED.has(key)) continue;
    const entry: Acc =
      acc.get(key) ?? { label: titleCase(key), totals: {}, vague: false, sources: new Set() };
    entry.sources.add(item.recipeTitle);

    // Metric is the canonical source; fall back to imperial if it won't parse.
    const parsed = parseQuantity(item.metric) ?? parseQuantity(item.imperial);
    if (!parsed) {
      entry.vague = true;
    } else if (parsed.kind === "vague") {
      entry.vague = true;
    } else {
      entry.totals[parsed.dim] = (entry.totals[parsed.dim] ?? 0) + parsed.base;
      if (parsed.dim === "count" && parsed.countNoun) entry.countNoun = parsed.countNoun;
    }
    acc.set(key, entry);
  }

  const lines: GroceryLine[] = [];

  for (const [key, entry] of acc) {
    // Collapse mixed dimensions onto one, so garlic counted in cloves in one
    // recipe and grams in another lands on a single line.
    let dim: Dim;
    let needBase: number;
    const { mass = 0, volume = 0, count = 0 } = entry.totals;
    const has = (n: number) => n > 0;

    if (has(mass)) {
      dim = "mass";
      needBase =
        mass +
        (has(count) && COUNT_WEIGHT[key] ? count * COUNT_WEIGHT[key] : 0) +
        (has(volume) && DENSITY[key] ? volume * DENSITY[key] : 0);
    } else if (has(volume) && DENSITY[key]) {
      // A dry seasoning recorded only by the spoon: sell it by weight.
      dim = "mass";
      needBase = volume * DENSITY[key] + (has(count) && COUNT_WEIGHT[key] ? count * COUNT_WEIGHT[key] : 0);
    } else if (has(volume) && !has(count)) {
      dim = "volume";
      needBase = volume;
    } else if (has(count)) {
      dim = "count";
      needBase = count;
    } else if (has(volume)) {
      dim = "volume";
      needBase = volume;
    } else {
      // Only "to taste" entries — still worth listing, with no quantity.
      lines.push({
        key,
        label: entry.label,
        dim: "count",
        needBase: 0,
        needLabel: "to taste",
        buyBase: 0,
        buyLabel: "to taste",
        rounded: false,
        vague: true,
        sources: [...entry.sources],
      });
      continue;
    }

    const pack = PACKS[key];
    let buyBase: number;
    let buyLabel: string;

    if (dim === "count" && !pack) {
      buyBase = Math.ceil(needBase);
      buyLabel = formatBase(buyBase, dim, system, entry.countNoun);
    } else if (pack) {
      const ladder = system === "metric" ? pack.metric : pack.imperial;
      buyBase = roundUpTo(needBase, ladder);
      if (pack.discrete) {
        const n = Math.max(1, Math.round(buyBase / pack.discrete.size));
        const noun = n === 1 ? pack.discrete.noun : pluralize(pack.discrete.noun);
        const detail = dim === "count" ? "" : ` (${formatBase(buyBase, dim, system)})`;
        buyLabel = `${n} ${noun}${detail}`;
      } else {
        buyLabel = formatBase(buyBase, dim, system, entry.countNoun);
      }
    } else {
      const aisle = aisleOf(key);
      const ladder =
        dim === "mass" && aisle === "Meat & Seafood"
          ? MEAT_PACKS[system]
          : dim === "mass" && aisle === "Spices & Dry"
            ? SPICE_PACKS[system]
            : DEFAULT_PACKS[dim][system];
      buyBase = roundUpTo(needBase, ladder);
      buyLabel = formatBase(buyBase, dim, system, entry.countNoun);
    }

    lines.push({
      key,
      label: entry.label,
      dim,
      countNoun: entry.countNoun,
      needBase,
      needLabel: formatBase(needBase, dim, system, entry.countNoun),
      buyBase,
      buyLabel,
      rounded: buyBase > needBase + 1e-6,
      vague: entry.vague,
      sources: [...entry.sources],
    });
  }

  const groups = new Map<Aisle, GroceryLine[]>();
  for (const line of lines) {
    const aisle = aisleOf(line.key);
    groups.set(aisle, [...(groups.get(aisle) ?? []), line]);
  }

  return AISLE_ORDER.filter((a) => groups.has(a)).map((aisle) => ({
    aisle,
    lines: groups.get(aisle)!.sort((a, b) => a.label.localeCompare(b.label)),
  }));
}
