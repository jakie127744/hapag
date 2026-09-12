"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Recipe } from "@/data/recipes";
import { REGIONS, regionsOf } from "@/lib/regions";
import { useStore } from "@/lib/store";
import { ArchiveCard } from "./RecipeCard";
import { AdSlot } from "./AdSlot";

export function Archive({ recipes, query }: { recipes: Recipe[]; query: string }) {
  const [region, setRegion] = useState<string>("All");
  const { favorites } = useStore();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      if (region === "Favorites" && !favorites.includes(r.slug)) return false;
      if (region !== "All" && region !== "Favorites" && !regionsOf(r).includes(region)) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.origin.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(q))
      );
    });
  }, [recipes, region, query, favorites]);

  return (
    <>
      <section id="archive" className="relative px-6 md:px-12 pb-36">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zest">
              The Gastronomic Archive
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              {filtered.length} Recipe{filtered.length === 1 ? "" : "s"}
            </h2>
            <p className="mt-2 text-sm text-white/50">
              Tap the <span className="text-zest">+</span> to build a grocery list, or the{" "}
              <span className="text-zest">♥</span> to save favorites.
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="glass rounded-3xl py-20 text-center">
              <Search className="w-10 h-10 text-white/20 mx-auto mb-4" />
              <p className="text-white/50">
                {region === "Favorites"
                  ? "No favorites yet — tap a ♥ to start your collection."
                  : "No recipes match that search."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((r, i) => (
                <ArchiveCard key={r.slug} recipe={r} index={i} />
              ))}
            </div>
          )}

          {/* Below the grid. pb-36 on the section keeps the fixed filter bar
              clear of this unit. */}
          <div className="mt-12 max-w-3xl mx-auto">
            <AdSlot name="homeFoot" />
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4">
        <div className="glass-strong rounded-full p-1.5 flex items-center gap-1 max-w-[92vw] overflow-x-auto scrollbar-hide">
          {REGIONS.map((r) => {
            const active = region === r;
            return (
              <button
                key={r}
                onClick={() => setRegion(r)}
                aria-pressed={active}
                className="relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
              >
                {active && <span className="absolute inset-0 rounded-full bg-zest" />}
                <span className={active ? "relative text-black" : "relative text-white/70 hover:text-white"}>
                  {r}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
