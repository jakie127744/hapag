"use client";

import { useMemo } from "react";
import { useStore } from "@/lib/store";
import { consolidate, type SourcedIngredient } from "@/lib/pantry";

/**
 * Print-only grocery checklist.
 *
 * Hidden on screen. `@media print` shows it only when the body carries
 * `printing-grocery`, which the drawer's Print button sets, so printing a
 * recipe postcard and printing the shopping list stay separate.
 */
export function GrocerySheet() {
  const { grocery, checked, unit } = useStore();

  const groups = useMemo(() => {
    const items: SourcedIngredient[] = grocery.flatMap((e) =>
      e.ingredients.map((i) => ({ ...i, recipeTitle: e.title }))
    );
    return consolidate(items, unit);
  }, [grocery, unit]);

  const total = groups.reduce((n, g) => n + g.lines.length, 0);
  if (!total) return null;

  const date = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="grocery-sheet" aria-hidden="true">
      <header className="gs-head">
        <div>
          <p className="gs-eyebrow">Hapag · Grocery List</p>
          <h1 className="gs-title">
            {total} item{total === 1 ? "" : "s"}
          </h1>
        </div>
        <div className="gs-meta">
          <span>{date}</span>
          <span>
            {grocery.length} recipe{grocery.length === 1 ? "" : "s"}
          </span>
        </div>
      </header>

      <ul className="gs-recipes">
        {grocery.map((e) => (
          <li key={e.slug}>{e.title}</li>
        ))}
      </ul>

      <div className="gs-columns">
        {groups.map((group) => (
          <section key={group.aisle} className="gs-group">
            <h2 className="gs-aisle">{group.aisle}</h2>
            <ul className="gs-items">
              {group.lines.map((line) => (
                <li key={line.key} className={checked.includes(line.key) ? "gs-done" : ""}>
                  <span className="gs-box" />
                  <span className="gs-name">{line.label}</span>
                  <span className="gs-dots" />
                  <span className="gs-qty">{line.buyLabel}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="gs-foot">
        Quantities are rounded up to the nearest size sold in shops.
      </footer>
    </div>
  );
}
