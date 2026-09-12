"use client";

import { useEffect, useRef } from "react";
import { AD_SLOTS, type AdSlotName } from "@/lib/ads";

export const ADSENSE_CLIENT = "ca-pub-9907028021598445";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * A single AdSense unit.
 *
 * Deliberately constrained:
 *  - reserves its height before the ad loads, so nothing below it shifts
 *  - carries a visible "Advertisement" label, as AdSense policy requires ads to
 *    be distinguishable from content
 *  - never rendered inside the fixed filter bar, the grocery drawer, or within
 *    a tap target's reach, to avoid accidental clicks
 *  - excluded from print output
 */
export function AdSlot({
  name,
  format = "auto",
  minHeight = 280,
  className = "",
  label = "Advertisement",
}: {
  name: AdSlotName;
  format?: string;
  minHeight?: number;
  className?: string;
  label?: string;
}) {
  const slot = AD_SLOTS[name];
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* blocked by an ad blocker, or the script never loaded */
    }
  }, []);

  // No unit id configured yet: render nothing rather than an empty box.
  if (!slot) return null;

  return (
    <aside
      className={`no-print w-full ${className}`}
      aria-label={label}
      style={{ minHeight: minHeight + 22 }}
    >
      <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-2 text-center">
        {label}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block", minHeight }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
