"use client";

import Link from "next/link";
import { Clock, Plus, Check, Heart, ArrowRight } from "lucide-react";
import type { Recipe } from "@/data/recipes";
import { useStore } from "@/lib/store";
import { prettyTime, regionOf } from "@/lib/regions";
import { RecipeImage } from "./RecipeImage";

export function FeaturedCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl glass aspect-[4/3]">
        <RecipeImage
          src={recipe.image}
          alt={recipe.title}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase glass-dark text-white/90">
          {regionOf(recipe)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-white/60 text-xs mb-2">
            <Clock className="w-3.5 h-3.5" />
            {prettyTime(recipe.time)}
          </div>
          <h3 className="text-2xl font-bold text-white leading-tight">{recipe.title}</h3>
          <p className="mt-1.5 text-sm text-white/65 line-clamp-2">{recipe.subtitle}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-zest text-sm font-medium">
            View recipe <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ArchiveCard({ recipe, index = 0 }: { recipe: Recipe; index?: number }) {
  const { isFavorite, toggleFavorite, inGrocery, toggleGrocery, unit } = useStore();
  const fav = isFavorite(recipe.slug);
  const added = inGrocery(recipe.slug);

  return (
    <div
      className="group rise relative"
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <Link href={`/recipes/${recipe.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl glass aspect-[4/5] transition-shadow duration-300">
          <RecipeImage
            src={recipe.image}
            alt={recipe.title}
            className="transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase glass-dark text-white/90">
            {regionOf(recipe)}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-1.5 text-white/55 text-[11px] mb-1.5">
              <Clock className="w-3 h-3" />
              {prettyTime(recipe.time)}
            </div>
            <h3 className="text-base font-bold text-white leading-snug">{recipe.title}</h3>
            <p className="mt-1 text-xs text-white/55 line-clamp-2">{recipe.subtitle}</p>
          </div>
        </div>
      </Link>

      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <button
          onClick={() => toggleGrocery(recipe, unit)}
          aria-label={
            added
              ? `Remove ${recipe.title} from grocery list`
              : `Add ${recipe.title} to grocery list`
          }
          aria-pressed={added}
          className={`p-2 rounded-full transition-colors ${
            added ? "bg-zest text-black" : "glass-dark text-white/80 hover:text-white"
          }`}
        >
          {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
        <button
          onClick={() => toggleFavorite(recipe.slug)}
          aria-label={fav ? `Unfavorite ${recipe.title}` : `Favorite ${recipe.title}`}
          aria-pressed={fav}
          className={`p-2 rounded-full transition-colors ${
            fav ? "bg-zest text-black" : "glass-dark text-white/80 hover:text-white"
          }`}
        >
          <Heart className={`w-4 h-4 ${fav ? "fill-black" : ""}`} />
        </button>
      </div>
    </div>
  );
}
