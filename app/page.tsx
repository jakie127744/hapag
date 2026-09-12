import { recipes } from "@/data/recipes";
import { Home } from "@/components/Home";

const FEATURED = [
  "adobong-manok-at-baboy",
  "sinigang-na-baboy",
  "kare-kare",
  "chicken-inasal",
  "sisig",
  "lechon-cebu-style",
];

export default function Page() {
  const featured = FEATURED.map((s) => recipes.find((r) => r.slug === s)).filter(
    (r): r is (typeof recipes)[number] => Boolean(r)
  );
  const sorted = [...recipes].sort((a, b) => a.title.localeCompare(b.title));
  return <Home recipes={sorted} featured={featured} />;
}
