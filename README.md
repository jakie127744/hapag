# Hapag — Filipino Culinary Lab

A Filipino-cuisine recipe site built in the "translucent gastronomy" glass aesthetic:
a dark `#0A0A0A` ground, frosted-glass surfaces, and a zest-green (`#d9f99d`) accent.

44 regional recipes — Luzon classics, Ilocano, Kapampangan, Bicolano, Visayan and
Mindanaoan dishes — each with metric/imperial ingredients, numbered method, and lab notes.

## Features

- **Hero search** across titles, descriptions, origins and ingredients.
- **Region filter bar** — Classics, Luzon, Ilocos, Pampanga, Bicol, Visayas, Mindanao, Dessert, Favorites.
- **Grocery list** — add any recipe's ingredients, check items off, progress bar; persisted in `localStorage`.
- **Favorites** — saved per browser and filterable from the pill bar.
- **Metric / imperial toggle** on every recipe.
- **Kitchen Mode** — full-screen, one-step-at-a-time instructions for cooking.

## Stack

Next.js 15 (App Router, static export of all 44 recipe pages) · React 19 · Tailwind CSS v4 · lucide-react.

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
| `data/recipes.ts` | All 44 recipes — the single source of truth. |
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

14 of the 44 recipes have no Commons photograph available; those cards render a typographic
placeholder tile instead.
