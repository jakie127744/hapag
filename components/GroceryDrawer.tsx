"use client";

import { useMemo, useState } from "react";
import { X, ShoppingBasket, Trash2, ChevronDown } from "lucide-react";
import { useStore } from "@/lib/store";
import { consolidate, type SourcedIngredient } from "@/lib/pantry";

export function GroceryDrawer() {
  const {
    drawerOpen, setDrawerOpen, grocery, checked, toggleChecked,
    removeGrocery, clearGrocery, unit, setUnit,
  } = useStore();
  const [expanded, setExpanded] = useState<string | null>(null);

  const groups = useMemo(() => {
    const items: SourcedIngredient[] = grocery.flatMap((entry) =>
      entry.ingredients.map((i) => ({ ...i, recipeTitle: entry.title }))
    );
    return consolidate(items, unit);
  }, [grocery, unit]);

  const allKeys = groups.flatMap((g) => g.lines.map((l) => l.key));
  const done = allKeys.filter((k) => checked.includes(k)).length;
  const pct = allKeys.length ? Math.round((done / allKeys.length) * 100) : 0;

  return (
    <>
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md p-4 transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div className="glass-strong rounded-3xl h-full flex flex-col overflow-hidden">
          <div className="flex items-start justify-between p-6 border-b border-white/10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zest">
                Grocery List
              </p>
              <h2 className="text-2xl font-bold text-white mt-1">
                {allKeys.length} item{allKeys.length === 1 ? "" : "s"}
              </h2>
              <p className="text-sm text-white/50 mt-0.5">
                {grocery.length} recipe{grocery.length === 1 ? "" : "s"} · {done} collected ·{" "}
                {allKeys.length - done} remaining
              </p>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close grocery list"
              className="glass-dark p-2 rounded-full text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 pt-4 flex items-center gap-3">
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden flex-1">
              <div
                className="h-full bg-zest transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="glass-dark rounded-full p-0.5 flex text-xs shrink-0">
              {(["metric", "imperial"] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  aria-pressed={unit === u}
                  className={`px-2.5 py-1 rounded-full transition-colors ${
                    unit === u ? "bg-zest text-black font-semibold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {u === "metric" ? "g/ml" : "lb/oz"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-7 scrollbar-hide">
            {grocery.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBasket className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <p className="text-white/50">Select recipes to build your grocery list.</p>
              </div>
            ) : (
              groups.map((group) => (
                <div key={group.aisle}>
                  <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zest mb-3">
                    {group.aisle}
                  </h3>
                  <ul className="space-y-0.5">
                    {group.lines.map((line) => {
                      const on = checked.includes(line.key);
                      const open = expanded === line.key;
                      const multi = line.sources.length > 1;
                      return (
                        <li key={line.key}>
                          <div className="flex items-start gap-3 py-1.5">
                            <button
                              onClick={() => toggleChecked(line.key)}
                              aria-pressed={on}
                              aria-label={`Mark ${line.label} collected`}
                              className="mt-0.5 shrink-0 group"
                            >
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                                  on
                                    ? "bg-zest border-zest"
                                    : "border-white/30 group-hover:border-white/60"
                                }`}
                              >
                                {on && (
                                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-black" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                )}
                              </span>
                            </button>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline justify-between gap-3">
                                <span
                                  className={`text-sm transition-opacity ${
                                    on ? "text-white/40 line-through" : "text-white/85"
                                  }`}
                                >
                                  {line.label}
                                </span>
                                <span
                                  className={`text-sm font-semibold shrink-0 tabular-nums ${
                                    on ? "text-white/30 line-through" : "text-zest"
                                  }`}
                                >
                                  {line.buyLabel}
                                </span>
                              </div>

                              <button
                                onClick={() => setExpanded(open ? null : line.key)}
                                className="mt-0.5 flex items-center gap-1 text-[11px] text-white/40 hover:text-white/70 transition-colors"
                              >
                                {line.rounded && line.needBase > 0 && (
                                  <span>recipes need {line.needLabel}</span>
                                )}
                                {line.rounded && line.needBase > 0 && multi && <span>·</span>}
                                {multi && <span>{line.sources.length} recipes</span>}
                                {line.vague && line.needBase > 0 && <span>· plus to taste</span>}
                                {(multi || (line.rounded && line.needBase > 0)) && (
                                  <ChevronDown
                                    className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
                                  />
                                )}
                              </button>

                              {open && (
                                <ul className="mt-1 mb-1 space-y-0.5">
                                  {line.sources.map((s) => (
                                    <li key={s} className="text-[11px] text-white/45 pl-2 border-l border-white/15">
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))
            )}

            {grocery.length > 0 && (
              <div>
                <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-3">
                  From these recipes
                </h3>
                <ul className="space-y-1">
                  {grocery.map((entry) => (
                    <li key={entry.slug} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-white/60 truncate">{entry.title}</span>
                      <button
                        onClick={() => removeGrocery(entry.slug)}
                        aria-label={`Remove ${entry.title}`}
                        className="text-white/40 hover:text-zest transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {grocery.length > 0 && (
            <div className="p-6 border-t border-white/10">
              <button
                onClick={clearGrocery}
                className="glass-dark w-full rounded-full py-3 text-sm text-white/80 hover:text-white transition-colors"
              >
                Clear list
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
