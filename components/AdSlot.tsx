"use client";

import { useEffect, useRef, useState } from "react";
import { AD_SLOTS, ADSENSE_CLIENT, type AdSlotName } from "@/lib/ads";

export { ADSENSE_CLIENT };

/** How long to wait for AdSense to say anything before giving up on a slot. */
const FILL_TIMEOUT_MS = 4000;

/**
 * A single AdSense unit, configured from lib/ads.ts.
 *
 * If nothing is served, the slot removes itself entirely, label and reserved
 * space included. Three ways that happens:
 *
 *  - AdSense marks the unit data-ad-status="unfilled"
 *  - it is marked filled but collapses to no height
 *  - nothing reports back within FILL_TIMEOUT_MS, which is what an ad blocker
 *    or a failed script load looks like
 *
 * Placement is deliberately constrained: never inside the fixed filter bar, the
 * grocery drawer, or within reach of a card's + and heart buttons, so a stray
 * tap cannot land on an ad. Excluded from print output.
 */
export function AdSlot({ name, className = "" }: { name: AdSlotName; className?: string }) {
  const unit = AD_SLOTS[name];
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const [state, setState] = useState<"pending" | "filled" | "empty">("pending");

  useEffect(() => {
    if (!unit.id || pushed.current) return;
    pushed.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* blocked by an ad blocker, or the script never loaded */
    }

    const el = insRef.current;
    if (!el) return;

    const settle = () => {
      const status = el.getAttribute("data-ad-status");
      if (status === "unfilled") {
        setState("empty");
        return true;
      }
      if (status === "filled") {
        // Filled but zero-height still leaves a labelled gap.
        setState(el.getBoundingClientRect().height > 1 ? "filled" : "empty");
        return true;
      }
      return false;
    };

    if (settle()) return;

    const observer = new MutationObserver(() => {
      if (settle()) observer.disconnect();
    });
    observer.observe(el, { attributes: true, attributeFilter: ["data-ad-status"] });

    // Nothing reported back: drop the slot rather than leave a hole.
    const timer = window.setTimeout(() => {
      observer.disconnect();
      if (!settle()) setState("empty");
    }, FILL_TIMEOUT_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [unit.id]);

  // No unit id configured, or nothing was served.
  if (!unit.id || state === "empty") return null;

  const label = "label" in unit && unit.label ? unit.label : "Advertisement";

  return (
    <aside
      className={`no-print ad-slot w-full ${className}`}
      aria-label={label}
      // Height is reserved only while waiting, so a filled ad does not shift
      // the page and an empty one leaves nothing behind.
      style={state === "pending" ? { minHeight: unit.minHeight + 22 } : undefined}
    >
      <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-2 text-center">
        {label}
      </p>
      <ins
        ref={insRef}
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
