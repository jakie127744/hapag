# Hapag — Filipino Culinary Lab

Created by **Molave Labs**.

A Filipino-cuisine recipe site built in the "translucent gastronomy" glass aesthetic:
a dark `#0A0A0A` ground, frosted-glass surfaces, and a zest-green (`#d9f99d`) accent.

186 regional recipes — Luzon classics, Ilocano, Kapampangan, Bicolano, Visayan and
Mindanaoan dishes — each with metric/imperial ingredients, numbered method, and lab notes.

## Features

- **Hero search** across titles, descriptions, origins and ingredients.
- **Region filter bar** — Classics, Luzon, Ilocos, Pampanga, Bicol, Visayas, Mindanao, Dessert, Favorites.
- **Grocery list** — add any recipe's ingredients, check items off, progress bar; persisted in `localStorage`.
- **Favorites** — saved per browser and filterable from the pill bar.
- **Metric / imperial toggle** on every recipe.
- **Kitchen Mode** — full-screen, one-step-at-a-time instructions for cooking.

## Stack

Next.js 15 (App Router, static export of all 186 recipe pages) · React 19 · Tailwind CSS v4 · lucide-react.

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
| `data/recipes.ts` | All 186 recipes — the single source of truth. |
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

94 of the 186 recipes have no photograph yet; those cards render an "image pending"
placeholder rather than borrowing a picture of a similar-looking dish.

## Adding your own photographs

Drop image files into `images-inbox/`, named after the dish, then run:

```bash
npm run add-images
```

Case, spaces and hyphens do not matter, so `beef-kulma.jpg`, `Beef kulma.jpg` and
`Beef Kulma.jpeg` all work. Each image is turned upright, resized to 1600px wide, saved
to `public/images/recipes/<slug>.jpg` and wired into `data/recipes.ts`. Adding a photo
replaces whatever was there and drops any Wikimedia credit, since the photo is then
yours. `npm run add-images:check` shows what would happen without changing anything.

`images-inbox/README.md` lists every recipe still waiting for a photo, with the exact
filename to use.

## Before deploying

Set these so canonical URLs, contact details and attribution are correct:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=molavelabsapps@gmail.com   # already the default
NEXT_PUBLIC_PUBLISHER_URL=https://molavelabs.example   # optional
```

## Advertising

AdSense is wired with publisher `ca-pub-9907028021598445`. `public/ads.txt`,
`/privacy`, `/terms`, `/about` and `/contact` are in place, which is what AdSense
review expects, alongside a consent banner that switches Google to
non-personalised ads when declined.

Note: for visitors in the EEA, the UK or Switzerland, Google requires a **certified
Consent Management Platform**. The built-in banner meets the plain
disclosure-and-choice requirement but is not certified; adopt a CMP from Google's
list before serving European traffic.

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
