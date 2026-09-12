import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Offline — Hapag" };

export default function OfflinePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="glass rounded-3xl p-10 max-w-md text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zest">Offline</p>
        <h1 className="mt-3 text-3xl font-bold text-white">No connection</h1>
        <p className="mt-3 text-white/60 text-sm leading-relaxed">
          Recipes you have already opened stay available offline. Anything else will load again
          once you are back on a network.
        </p>
        <Link
          href="/"
          className="mt-7 inline-block bg-zest text-black font-semibold rounded-full px-5 py-2.5 text-sm"
        >
          Back to the archive
        </Link>
      </div>
    </main>
  );
}
