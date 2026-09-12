import type { Metadata } from "next";
import { Prose, H2, P, UL, LI } from "@/components/Prose";
import { recipes } from "@/data/recipes";
import { SITE_NAME, PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `What ${SITE_NAME} is, how it is sourced, and who makes it.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const sourced = recipes.filter((r) => r.verification === "verified").length;
  const photographed = recipes.filter((r) => r.image).length;

  return (
    <Prose eyebrow="About" title={`What ${SITE_NAME} is`}>
      <P>
        {SITE_NAME} is a living culinary archive of Filipino cuisine, built and maintained by{" "}
        {PUBLISHER}. It holds {recipes.length} recipes drawn from across Luzon, the Visayas and
        Mindanao, from everyday adobo to dishes documented in single towns.
      </P>

      <H2>How entries are sourced</H2>
      <P>
        A recipe marked <span className="text-zest">Sourced</span> has had its dish, region and
        method corroborated against at least two references, which are listed on its page. At
        present {sourced} of {recipes.length} entries carry that mark.
      </P>
      <P>
        Where a dish could not be corroborated, it is labelled{" "}
        <span className="text-amber-300">Unverified</span> rather than quietly presented as fact. A
        build check enforces this: nothing can claim to be sourced without the sources actually
        being recorded.
      </P>

      <H2>Photographs</H2>
      <P>
        {photographed} recipes carry a photograph. The rest show an &ldquo;image pending&rdquo;
        placeholder. That is deliberate: a picture of a similar-looking dish would make the page
        prettier and the archive less true, so the gap is left visible until a real photograph
        exists.
      </P>

      <H2>What the site does</H2>
      <UL>
        <LI>Search across titles, regions and ingredients, filtered by island group or type.</LI>
        <LI>
          A grocery list that merges repeated ingredients across recipes and rounds each line up to
          a size shops actually sell.
        </LI>
        <LI>Metric and imperial measures on every recipe.</LI>
        <LI>Kitchen Mode, which shows one step at a time at arm&rsquo;s length.</LI>
        <LI>Printable two-sided recipe cards, and a printable shopping checklist.</LI>
        <LI>Installable to a home screen, with opened recipes readable offline.</LI>
      </UL>

      <H2>Corrections</H2>
      <P>
        Filipino cooking varies by island, town and household, and no single version is canonical.
        If an entry misstates a region, a name or a method, corrections are genuinely welcome.
      </P>
    </Prose>
  );
}
