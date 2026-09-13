"use client";

import { useEffect } from "react";
import { ADSENSE_CLIENT } from "@/lib/ads";

/**
 * Loads the AdSense library after hydration.
 *
 * It is deliberately NOT rendered as a script tag in the layout: adsbygoogle.js
 * rewrites the script element in <head> that it is associated with, which React
 * reports as an unpatched hydration mismatch on every page. Injecting it from an
 * effect keeps the library entirely outside React's tree, so those DOM changes
 * are invisible to hydration.
 *
 * Ordering still holds. The non-personalised flag is set here, before the
 * library is appended, which is what matters: once adsbygoogle.js has processed
 * a slot, changing the flag no longer affects it.
 */
export function AdsBootstrap() {
  useEffect(() => {
    const SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    if (document.querySelector(`script[src^="${SRC.split("?")[0]}"]`)) return;

    try {
      if (window.localStorage.getItem("hapag:ad-consent") === "denied") {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.requestNonPersonalizedAds = 1;
      }
    } catch {
      /* storage blocked; fall through to default behaviour */
    }

    const s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = SRC;
    document.head.appendChild(s);
  }, []);

  return null;
}
