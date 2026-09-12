"use client";

import Link from "next/link";
import { ShoppingBasket, Heart } from "lucide-react";
import { useStore } from "@/lib/store";

export function TopBar() {
  const { grocery, favorites, setDrawerOpen } = useStore();
  const count = grocery.reduce((n, e) => n + e.items.length, 0);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2.5">
      <Link
        href="/#archive"
        className="glass-dark rounded-full px-4 py-2 text-sm text-white/80 hover:text-white flex items-center gap-2 transition-colors"
      >
        <Heart className="w-4 h-4" />
        <span className="hidden sm:inline">Favorites</span>
        {favorites.length > 0 && <span className="text-zest">{favorites.length}</span>}
      </Link>
      <button
        onClick={() => setDrawerOpen(true)}
        className="glass-strong rounded-full pl-3 pr-4 py-2 text-sm text-white flex items-center gap-2 hover:text-zest transition-colors"
      >
        <ShoppingBasket className="w-4 h-4 text-zest" />
        Grocery
        {count > 0 && <span className="text-zest font-semibold">{count}</span>}
      </button>
    </div>
  );
}
