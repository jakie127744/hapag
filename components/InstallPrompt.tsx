"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

type InstallEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISSED = "hapag:install-dismissed";

/**
 * Registers the service worker and surfaces an install button when the browser
 * says the app is installable. Chromium fires `beforeinstallprompt`; iOS Safari
 * does not, so there it shows the Add-to-Home-Screen hint instead.
 */
export function InstallPrompt() {
  const [deferred, setDeferred] = useState<InstallEvent | null>(null);
  const [iosHint, setIosHint] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* offline support is a bonus; the site works without it */
      });
    }

    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(DISMISSED) === "1";
    } catch {
      /* storage blocked — treat as not dismissed */
    }

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as { standalone?: boolean }).standalone === true;
    if (dismissed || standalone) return;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as InstallEvent);
      setHidden(false);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    const ua = window.navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua) && /Safari/.test(ua) && !/CriOS|FxiOS/.test(ua)) {
      setIosHint(true);
      setHidden(false);
    }

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  function dismiss() {
    setHidden(true);
    try {
      window.localStorage.setItem(DISMISSED, "1");
    } catch {
      /* nothing to persist to */
    }
  }

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setHidden(true);
  }

  if (hidden || (!deferred && !iosHint)) return null;

  return (
    <div className="no-print fixed bottom-24 left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-sm">
      <div className="glass-strong rounded-2xl p-4 flex items-start gap-3">
        <span className="shrink-0 w-9 h-9 rounded-full bg-zest text-black flex items-center justify-center">
          <Download className="w-4 h-4" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white">Install Hapag</p>
          {iosHint ? (
            <p className="text-xs text-white/60 mt-0.5">
              Tap Share, then <span className="text-zest">Add to Home Screen</span> to keep the
              archive offline.
            </p>
          ) : (
            <>
              <p className="text-xs text-white/60 mt-0.5">
                Keep the archive on your home screen and cook offline.
              </p>
              <button
                onClick={install}
                className="mt-2 bg-zest text-black text-xs font-semibold rounded-full px-3 py-1.5"
              >
                Install
              </button>
            </>
          )}
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss install prompt"
          className="text-white/40 hover:text-white transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
