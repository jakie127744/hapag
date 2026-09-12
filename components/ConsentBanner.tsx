"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const KEY = "hapag:ad-consent";

declare global {
  interface Window {
    adsbygoogle?: unknown[] & { requestNonPersonalizedAds?: number };
  }
}

/**
 * Advertising consent.
 *
 * Declining sets `requestNonPersonalizedAds`, which tells Google to serve
 * contextual rather than personalised ads.
 *
 * NOTE: for traffic from the EEA, UK or Switzerland, Google requires a
 * CERTIFIED Consent Management Platform under its EU user consent policy.
 * This banner satisfies the plain disclosure-and-choice requirement but is not
 * a certified CMP. Adopt one (Google's own, or another from Google's certified
 * list) before serving European traffic.
 */
export function ConsentBanner() {
  const [choice, setChoice] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(KEY);
    } catch {
      /* storage blocked; treat as undecided */
    }
    if (stored === "granted" || stored === "denied") {
      setChoice(stored);
      if (stored === "denied") denyPersonalised();
    }
    setReady(true);

    // Reopening from the footer link.
    const reopen = () => setChoice(null);
    window.addEventListener("hapag:open-consent", reopen);
    return () => window.removeEventListener("hapag:open-consent", reopen);
  }, []);

  function denyPersonalised() {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.requestNonPersonalizedAds = 1;
    } catch {
      /* ad script not present */
    }
  }

  function decide(value: "granted" | "denied") {
    if (value === "denied") denyPersonalised();
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* nothing to persist to */
    }
    setChoice(value);
    // Slots already processed by adsbygoogle.js cannot be changed in place, so
    // reload to let the beforeInteractive gate apply the choice properly.
    if (document.querySelector("ins.adsbygoogle")) {
      window.setTimeout(() => window.location.reload(), 250);
    }
  }

  if (!ready || choice) return null;

  return (
    <div
      role="dialog"
      aria-label="Advertising consent"
      className="no-print fixed bottom-0 inset-x-0 z-[60] p-4 pb-24 sm:pb-4"
    >
      <div className="glass-strong rounded-2xl max-w-3xl mx-auto p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="shrink-0 w-9 h-9 rounded-full bg-zest text-black flex items-center justify-center">
          <Cookie className="w-4 h-4" />
        </span>
        <p className="flex-1 text-sm text-white/75 leading-relaxed">
          This site uses cookies to show ads. Allow personalised ads, or choose non-personalised
          ones instead. Read the{" "}
          <Link href="/privacy" className="text-zest hover:underline">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => decide("denied")}
            className="glass-dark rounded-full px-4 py-2.5 text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap"
          >
            Non-personalised
          </button>
          <button
            onClick={() => decide("granted")}
            className="bg-zest text-black font-semibold rounded-full px-5 py-2.5 text-sm whitespace-nowrap"
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer link that reopens the banner. */
export function ConsentReopenButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("hapag:open-consent"))}
      className="hover:text-white transition-colors"
    >
      Ad preferences
    </button>
  );
}
