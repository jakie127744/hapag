import type { Metadata } from "next";
import { Prose, H2, P, UL, LI } from "@/components/Prose";
import { SITE_NAME, PUBLISHER, CONTACT_EMAIL, LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for using ${SITE_NAME}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Prose eyebrow="Legal" title="Terms of Use" updated={LAST_UPDATED}>
      <P>
        By using {SITE_NAME}, published by {PUBLISHER}, you agree to the terms below.
      </P>

      <H2>Use of the recipes</H2>
      <P>
        The recipes here are free to cook from, print and share for personal use. Republishing the
        written text in bulk, or passing the archive off as your own, is not permitted.
      </P>

      <H2>Cooking safely is your responsibility</H2>
      <UL>
        <LI>
          Several recipes involve deep frying at high temperature, molten sugar, lye water and raw
          or lightly cured fish. Read a recipe through before starting and follow the safety notes
          it carries.
        </LI>
        <LI>
          Cassava and giant taro must be cooked thoroughly. Undercooked, both are genuinely unsafe.
        </LI>
        <LI>
          Cooking times and temperatures are a guide. Judge doneness by the food, not the clock.
        </LI>
        <LI>
          Allergens are not exhaustively labelled. Check the ingredient list yourself if you cook
          for someone with an allergy.
        </LI>
      </UL>

      <H2>Accuracy</H2>
      <P>
        Entries marked as sourced cite at least two references, listed on the recipe page. Entries
        that could not be corroborated are labelled unverified, and some older entries have not yet
        been through that check. The archive is a working document and may contain errors; if you
        find one, please say so.
      </P>

      <H2>Photographs</H2>
      <P>
        Photographs mirrored from Wikimedia Commons link back to their source file, and their
        individual licences apply. Check the file page before reusing an image elsewhere.
      </P>

      <H2>Advertising</H2>
      <P>
        The site carries advertisements. Their presence is not an endorsement of the advertiser,
        and transactions with advertisers are between you and them.
      </P>

      <H2>No warranty</H2>
      <P>
        The site is provided as is, without warranty of any kind. {PUBLISHER} is not liable for any
        loss arising from its use.
      </P>

      <H2>Contact</H2>
      <P>
        Questions can be sent to{" "}
        <a className="text-zest hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </P>
    </Prose>
  );
}
