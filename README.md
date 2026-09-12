# Hapag — Filipino Culinary Lab

A Filipino-cuisine recipe site built in the "translucent gastronomy" glass aesthetic:
a dark `#0A0A0A` ground, frosted-glass surfaces, and a zest-green (`#d9f99d`) accent.

100 regional recipes — Luzon classics, Ilocano, Kapampangan, Bicolano, Visayan and
Mindanaoan dishes — each with metric/imperial ingredients, numbered method, and lab notes.

## Features

- **Hero search** across titles, descriptions, origins and ingredients.
- **Region filter bar** — Classics, Luzon, Ilocos, Pampanga, Bicol, Visayas, Mindanao, Dessert, Favorites.
- **Grocery list** — add any recipe's ingredients, check items off, progress bar; persisted in `localStorage`.
- **Favorites** — saved per browser and filterable from the pill bar.
- **Metric / imperial toggle** on every recipe.
- **Kitchen Mode** — full-screen, one-step-at-a-time instructions for cooking.

## Stack

Next.js 15 (App Router, static export of all 100 recipe pages) · React 19 · Tailwind CSS v4 · lucide-react.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build && npm start   # production
```

## Project layout

| Path | Purpose |
| --- | --- |
| `data/recipes.ts` | All 100 recipes — the single source of truth. |
| `lib/regions.ts` | Region classification, time and yield formatting. |
| `lib/store.tsx` | Client store for favorites, grocery list and units. |
| `components/` | Home, Archive, cards, recipe detail, grocery drawer. |
| `app/globals.css` | The glass design system (`.glass`, `.glass-dark`, `.glass-strong`). |
| `public/images/recipes/` | Dish photography. |

## Image credits

Dish photographs are mirrored from [Wikimedia Commons](https://commons.wikimedia.org) and
resized for the web. Each recipe page links back to its source file via the "Photo via
Wikimedia Commons" link — check the individual file page for its licence and attribution
requirements before reusing an image elsewhere.

71 of the 100 recipes have no photograph yet; those cards render a typographic placeholder
tile instead of borrowing a picture of a similar-looking dish.

## Sourcing

Recipes carry a `verification` field:

| Value | Meaning |
| --- | --- |
| `verified` | Dish, region and method corroborated by at least two listed sources. |
| `unverified` | No source found. The entry is provisional and is labelled as such on the site. |
| *absent* | Not yet through the verification pass. |

`npm run verify` enforces the rule that anything marked `verified` carries two or more
distinct sources and a history note. It runs automatically before `npm run build`, so an
unsourced entry cannot ship claiming otherwise.
