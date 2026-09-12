"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { Recipe } from "@/data/recipes";
import { FeaturedCard } from "./RecipeCard";
import { Archive } from "./Archive";

export function Home({ recipes, featured }: { recipes: Recipe[]; featured: Recipe[] }) {
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/recipes/philippine-sisig.jpg"
            alt="A Filipino feast"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="rise text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-zest mb-5">
            A Living Culinary Archive
          </p>
          <h1
            className="rise text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] max-w-4xl text-balance"
            style={{ animationDelay: "80ms" }}
          >
            Hapag
          </h1>
          <p
            className="rise mt-6 text-lg text-white/70 max-w-xl"
            style={{ animationDelay: "160ms" }}
          >
            A crystalline lens on the soul of Filipino cooking. {recipes.length} regional
            recipes, suspended in glass.
          </p>

          <div className="rise mt-10 w-full max-w-xl" style={{ animationDelay: "240ms" }}>
            <label className="glass-strong rounded-full flex items-center gap-3 px-6 py-4">
              <Search className="w-5 h-5 text-zest shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search adobo, kare-kare, tamarind…"
                className="bg-transparent flex-1 text-white placeholder:text-white/40 outline-none text-base"
                aria-label="Search recipes"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-white/40 hover:text-white text-sm"
                >
                  Clear
                </button>
              )}
            </label>
          </div>

          <a
            href="#archive"
            className="rise mt-8 text-sm text-white/45 hover:text-white transition-colors"
            style={{ animationDelay: "320ms" }}
          >
            Browse the archive ↓
          </a>
        </div>
      </section>

      {/* Featured */}
      <section className="relative px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zest">Featured</p>
          <h2 className="mt-2 mb-8 text-3xl md:text-4xl font-bold text-white">Signature Dishes</h2>
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
            {featured.map((r) => (
              <div
                key={r.slug}
                className="snap-start shrink-0 w-[80vw] sm:w-[420px] lg:w-[460px]"
              >
                <FeaturedCard recipe={r} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Archive recipes={recipes} query={query} />
    </main>
  );
}
