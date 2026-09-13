import type { Metadata } from "next";
import { Prose, H2, P } from "@/components/Prose";
import { SITE_NAME, PUBLISHER, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the people behind ${SITE_NAME}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Prose eyebrow="Contact" title="Get in touch">
      <P>
        {SITE_NAME} is made by {PUBLISHER}. The quickest way to reach us is by email.
      </P>

      <p>
        <a
          className="inline-block bg-zest text-black font-semibold rounded-full px-5 py-3 text-sm"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
        </a>
      </p>

      <H2>Corrections</H2>
      <P>
        If an entry gets a region, a name or a method wrong, please tell us which recipe and what it
        should say. Corrections with a source attached are applied fastest.
      </P>

      <H2>Advertising and privacy</H2>
      <P>
        Questions about the ads shown here, or about what the site stores, are answered on the
        privacy page, and we are happy to answer anything it does not cover.
      </P>
    </Prose>
  );
}
