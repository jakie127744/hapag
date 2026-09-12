"use client";

import { useEffect, useRef } from "react";
import { AD_SLOTS, ADSENSE_CLIENT, type AdSlotName } from "@/lib/ads";

export { ADSENSE_CLIENT };

/**
 * A single AdSense unit, configured from lib/ads.ts.
 *
 * Deliberately constrained:
 *  - reserves its height before the ad loads, so nothing below it shifts
 *  - carries a visible label, since AdSense requires ads to be
 *    distinguishable from content
 *  - never rendered inside the fixed filter bar, the grocery drawer, or within
 *    reach of a card's + and heart buttons, to avoid accidental clicks
 *  - excluded from print output
 */
export function AdSlot({ name, className = "" }: { name: AdSlotName; className?: string }) {
  const unit = AD_SLOTS[name];
  const pushed = useRef(false);

  useEffect(() => {
    if (!unit.id || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* blocked by an ad blocker, or the script never loaded */
    }
  }, [unit.id]);

  // No unit id configured: render nothing rather than an empty box.
  if (!unit.id) return null;

  const label = "label" in unit && unit.label ? unit.label : "Advertisement";

  return (
    <aside
      className={`no-print w-full ${className}`}
      aria-label={label}
      style={{ minHeight: unit.minHeight + 22 }}
    >
      <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-2 text-center">
        {label}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block", minHeight: unit.minHeight }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={unit.id}
        data-ad-format={unit.format}
        {...(unit.format === "auto" ? { "data-full-width-responsive": "true" } : {})}
      />
    </aside>
  );
}
