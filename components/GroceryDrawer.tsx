"use client";

import { X, ShoppingBasket, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";

export function GroceryDrawer() {
  const { drawerOpen, setDrawerOpen, grocery, checked, toggleChecked, removeGrocery, clearGrocery } =
    useStore();

  const all = grocery.flatMap((e) => e.items.map((i) => `${e.slug}::${i}`));
  const done = all.filter((k) => checked.includes(k)).length;
  const pct = all.length ? Math.round((done / all.length) * 100) : 0;

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
                {all.length} item{all.length === 1 ? "" : "s"}
              </h2>
              <p className="text-sm text-white/50 mt-0.5">
                {done} collected · {all.length - done} remaining
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

          <div className="px-6 pt-4">
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-zest transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {grocery.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBasket className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <p className="text-white/50">Select recipes to build your grocery list.</p>
              </div>
            ) : (
              grocery.map((entry) => (
                <div key={entry.slug}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-white/70">
                      {entry.title}
                    </h3>
                    <button
                      onClick={() => removeGrocery(entry.slug)}
                      aria-label={`Remove ${entry.title}`}
                      className="text-white/40 hover:text-zest transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <ul className="space-y-1">
                    {entry.items.map((item) => {
                      const key = `${entry.slug}::${item}`;
                      const on = checked.includes(key);
                      return (
                        <li key={key}>
                          <button
                            onClick={() => toggleChecked(key)}
                            className="w-full flex items-start gap-3 py-1.5 text-left group"
                          >
                            <span
                              className={`mt-0.5 w-5 h-5 rounded-full border shrink-0 flex items-center justify-center transition-colors ${
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
                            <span
                              className={`text-sm transition-opacity ${
                                on ? "text-white/40 line-through" : "text-white/80"
                              }`}
                            >
                              {item}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))
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
