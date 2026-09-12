import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** Shared shell for the policy and information pages. */
export function Prose({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 md:px-12 pt-28 pb-32">
      <article className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to the archive
        </Link>

        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zest">{eyebrow}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">{title}</h1>
        {updated && <p className="mt-3 text-sm text-white/40">Last updated {updated}</p>}

        <div className="prose-archive mt-10 space-y-6">{children}</div>
      </article>
    </main>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-white pt-4">{children}</h2>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-white/70 leading-relaxed">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2 pl-5 list-disc marker:text-zest/60">{children}</ul>;
}

export function LI({ children }: { children: React.ReactNode }) {
  return <li className="text-white/70 leading-relaxed">{children}</li>;
}
