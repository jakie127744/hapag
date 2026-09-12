"use client";

import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import type { Recipe } from "@/data/recipes";

type GroceryEntry = { slug: string; title: string; items: string[] };

type Store = {
  favorites: string[];
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;

  grocery: GroceryEntry[];
  checked: string[];
  inGrocery: (slug: string) => boolean;
  toggleGrocery: (recipe: Recipe, unit: Unit) => void;
  removeGrocery: (slug: string) => void;
  toggleChecked: (key: string) => void;
  clearGrocery: () => void;

  unit: Unit;
  setUnit: (u: Unit) => void;

  drawerOpen: boolean;
  setDrawerOpen: (b: boolean) => void;
};

export type Unit = "metric" | "imperial";

const Ctx = createContext<Store | null>(null);

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable — state stays in memory */
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [grocery, setGrocery] = useState<GroceryEntry[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [unit, setUnitState] = useState<Unit>("metric");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavorites(load("hapag:favorites", [] as string[]));
    setGrocery(load("hapag:grocery", [] as GroceryEntry[]));
    setChecked(load("hapag:checked", [] as string[]));
    setUnitState(load("hapag:unit", "metric" as Unit));
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) save("hapag:favorites", favorites); }, [favorites, hydrated]);
  useEffect(() => { if (hydrated) save("hapag:grocery", grocery); }, [grocery, hydrated]);
  useEffect(() => { if (hydrated) save("hapag:checked", checked); }, [checked, hydrated]);
  useEffect(() => { if (hydrated) save("hapag:unit", unit); }, [unit, hydrated]);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((f) => (f.includes(slug) ? f.filter((s) => s !== slug) : [...f, slug]));
  }, []);

  const toggleGrocery = useCallback((recipe: Recipe, u: Unit) => {
    setGrocery((g) => {
      if (g.some((e) => e.slug === recipe.slug)) return g.filter((e) => e.slug !== recipe.slug);
      const items = recipe.ingredients.map(
        (i) => `${u === "metric" ? i.metric : i.imperial} ${i.name}`.trim()
      );
      return [...g, { slug: recipe.slug, title: recipe.title, items }];
    });
  }, []);

  const value = useMemo<Store>(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite: (slug) => favorites.includes(slug),
      grocery,
      checked,
      inGrocery: (slug) => grocery.some((e) => e.slug === slug),
      toggleGrocery,
      removeGrocery: (slug) => setGrocery((g) => g.filter((e) => e.slug !== slug)),
      toggleChecked: (key) =>
        setChecked((c) => (c.includes(key) ? c.filter((k) => k !== key) : [...c, key])),
      clearGrocery: () => { setGrocery([]); setChecked([]); },
      unit,
      setUnit: setUnitState,
      drawerOpen,
      setDrawerOpen,
    }),
    [favorites, grocery, checked, unit, drawerOpen, toggleFavorite, toggleGrocery]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
