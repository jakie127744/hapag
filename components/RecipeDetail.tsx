"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, Clock, Users, ChefHat, Heart, Plus, Check, ShoppingBasket,
  Maximize2, X, ChevronLeft, ChevronRight, MapPin, Printer,
} from "lucide-react";
import type { Recipe } from "@/data/recipes";
import { useStore } from "@/lib/store";
import { prettyTime, prettyYield, regionOf } from "@/lib/regions";
import { RecipeImage } from "./RecipeImage";
import { RecipePostcard } from "./RecipePostcard";

export function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const { isFavorite, toggleFavorite, inGrocery, toggleGrocery, unit, setUnit, setDrawerOpen } =
    useStore();
  const [ticked, setTicked] = useState<number[]>([]);
  const [kitchen, setKitchen] = useState(false);
  const [step, setStep] = useState(0);

  const fav = isFavorite(recipe.slug);
  const added = inGrocery(recipe.slug);

  return (
    <>
    <div className="no-print min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <RecipeImage src={recipe.image} alt={recipe.title} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#0A0A0A]" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-10">
          <Link
            href="/#archive"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> Back to archive
          </Link>
          <p className="rise text-xs font-semibold tracking-[0.2em] uppercase text-zest mb-3">
            {recipe.category}
          </p>
          <h1
            className="rise text-4xl md:text-6xl font-bold text-white max-w-3xl text-balance"
            style={{ animationDelay: "80ms" }}
          >
            {recipe.title}
          </h1>
          <p
            className="rise mt-4 text-lg text-white/70 max-w-2xl"
            style={{ animationDelay: "140ms" }}
          >
            {recipe.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Pill icon={<Clock className="w-4 h-4 text-zest" />}>{prettyTime(recipe.time)}</Pill>
            <Pill icon={<Users className="w-4 h-4 text-zest" />}>{prettyYield(recipe.yield)}</Pill>
            <Pill icon={<ChefHat className="w-4 h-4 text-zest" />}>{recipe.technique}</Pill>
            <Pill icon={<MapPin className="w-4 h-4 text-zest" />}>{regionOf(recipe)}</Pill>

            <button
              onClick={() => toggleFavorite(recipe.slug)}
              aria-pressed={fav}
              className={`rounded-full flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                fav ? "bg-zest text-black" : "glass-dark text-white/80 hover:text-white"
              }`}
            >
              <Heart className={`w-4 h-4 ${fav ? "fill-black" : ""}`} />
              {fav ? "Saved" : "Save"}
            </button>
            <button
              onClick={() => {
                toggleGrocery(recipe);
                if (!added) setDrawerOpen(true);
              }}
              aria-pressed={added}
              className={`rounded-full flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                added ? "bg-zest text-black" : "glass-dark text-white/80 hover:text-white"
              }`}
            >
              {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {added ? "In grocery list" : "Add to grocery list"}
            </button>
            <button
              onClick={() => window.print()}
              className="glass-dark rounded-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Printer className="w-4 h-4" /> Print postcard
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-[340px_1fr] gap-10">
        <div className="md:sticky md:top-8 self-start space-y-5">
          <div className="glass rounded-3xl p-6">
            <div className="flex items-start justify-between gap-4 mb-1">
              <h2 className="text-xl font-bold text-white">Ingredients</h2>
              <div className="glass-dark rounded-full p-0.5 flex text-xs shrink-0">
                {(["metric", "imperial"] as const).map((u) => (
                  <button
                    key={u}
                    onClick={() => setUnit(u)}
                    aria-pressed={unit === u}
                    className={`px-2.5 py-1 rounded-full transition-colors ${
                      unit === u
                        ? "bg-zest text-black font-semibold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {u === "metric" ? "g/ml" : "cups"}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-white/50 mb-5">Tap to check off as you cook.</p>
            <ul className="space-y-1">
              {recipe.ingredients.map((ing, i) => {
                const on = ticked.includes(i);
                return (
                  <li key={ing.name + i}>
                    <button
                      onClick={() =>
                        setTicked((t) => (t.includes(i) ? t.filter((x) => x !== i) : [...t, i]))
                      }
                      className="w-full flex items-start gap-3 py-2 text-left group"
                    >
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full border shrink-0 flex items-center justify-center transition-colors ${
                          on ? "bg-zest border-zest" : "border-white/30 group-hover:border-white/60"
                        }`}
                      >
                        {on && (
                          <svg
                            viewBox="0 0 24 24"
                            className="w-3 h-3 text-black"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`text-sm transition-opacity ${
                          on ? "text-white/40 line-through" : "text-white/80"
                        }`}
                      >
                        <span className="text-white font-medium">
                          {unit === "metric" ? ing.metric : ing.imperial}
                        </span>{" "}
                        {ing.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => {
                toggleGrocery(recipe);
                if (!added) setDrawerOpen(true);
              }}
              className="mt-5 w-full glass-dark rounded-full py-3 text-sm text-white/85 hover:text-white flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBasket className="w-4 h-4 text-zest" />
              {added ? "Remove from grocery list" : "Send all to grocery list"}
            </button>
          </div>

          <div className="glass rounded-3xl p-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zest mb-2">Origin</p>
            <p className="text-white/80 text-sm">{recipe.origin}</p>
            {recipe.imageSource && (
              <a
                href={recipe.imageSource}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-block text-xs text-white/40 hover:text-zest transition-colors"
              >
                Photo via Wikimedia Commons ↗
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="text-white/70 leading-relaxed text-lg mb-10">{recipe.description}</p>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Instructions</h2>
            <button
              onClick={() => {
                setStep(0);
                setKitchen(true);
              }}
              className="glass-dark px-4 py-2 rounded-full text-sm text-white/80 flex items-center gap-2 hover:text-white transition-colors"
            >
              <Maximize2 className="w-4 h-4 text-zest" /> Kitchen Mode
            </button>
          </div>

          <div className="space-y-4">
            {recipe.instructions.map((text, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="flex gap-5">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-zest text-black font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-white/85 leading-relaxed text-base">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {recipe.notes.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Lab Notes</h2>
              <div className="space-y-3">
                {recipe.notes.map((n, i) => (
                  <div key={i} className="glass rounded-2xl p-5 flex gap-4">
                    <span className="text-zest shrink-0">—</span>
                    <p className="text-white/75 text-sm leading-relaxed">{n}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {kitchen && (
        <div className="fixed inset-0 z-[60] bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between p-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zest">
                Kitchen Mode
              </p>
              <p className="text-white/60 text-sm mt-1">{recipe.title}</p>
            </div>
            <button
              onClick={() => setKitchen(false)}
              aria-label="Exit kitchen mode"
              className="glass-dark p-2.5 rounded-full text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center px-6 md:px-20">
            <div className="max-w-3xl w-full text-center">
              <span className="inline-flex w-14 h-14 rounded-full bg-zest text-black text-xl font-bold items-center justify-center mb-8">
                {step + 1}
              </span>
              <p className="text-2xl md:text-4xl text-white leading-relaxed font-medium text-balance">
                {recipe.instructions[step]}
              </p>
            </div>
          </div>

          <div className="p-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="glass-dark px-5 py-3 rounded-full text-white/80 hover:text-white disabled:opacity-30 flex items-center gap-2 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" /> Previous
            </button>
            <span className="text-white/50 text-sm tabular-nums">
              {step + 1} / {recipe.instructions.length}
            </span>
            <button
              onClick={() => setStep((s) => Math.min(recipe.instructions.length - 1, s + 1))}
              disabled={step === recipe.instructions.length - 1}
              className="bg-zest text-black font-semibold px-5 py-3 rounded-full disabled:opacity-30 flex items-center gap-2"
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>

    <RecipePostcard recipe={recipe} unit={unit} />
    </>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="glass-dark px-4 py-2 rounded-full text-sm text-white/85 flex items-center gap-2">
      {icon}
      {children}
    </span>
  );
}
