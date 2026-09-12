"use client";

import Link from "next/link";
import { recipes } from "@/data/recipes";
import { PUBLISHER, PUBLISHER_URL, SITE_NAME } from "@/lib/site";
import { ConsentReopenButton } from "./ConsentBanner";

export function Footer() {
  const year = new Date().getFullYear();
  const sourced = recipes.filter((r) => r.verification === "verified").length;

  return (
    // pb clears the fixed filter bar on the archive page.
    <footer className="no-print relative z-10 border-t border-white/10 px-6 md:px-12 pt-12 pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zest">
              {SITE_NAME}
            </p>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              A living culinary archive of Filipino cuisine. {recipes.length} recipes, {sourced} of
              them sourced against at least two references.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Archive
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <ConsentReopenButton />
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-white/35">
            Created by{" "}
            {PUBLISHER_URL ? (
              <a
                href={PUBLISHER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="text-white/60 hover:text-zest transition-colors"
              >
                {PUBLISHER}
              </a>
            ) : (
              <span className="text-white/60">{PUBLISHER}</span>
            )}
            {" · "}© {year}
          </p>
          <p className="text-xs text-white/30">
            Photographs credited on each recipe. Cook safely and check your allergens.
          </p>
        </div>
      </div>
    </footer>
  );
}
