import type { Metadata } from "next";
import { Prose, H2, P, UL, LI } from "@/components/Prose";
import { SITE_NAME, PUBLISHER, CONTACT_EMAIL, LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles data, cookies and advertising.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Prose eyebrow="Legal" title="Privacy Policy" updated={LAST_UPDATED}>
      <P>
        {SITE_NAME} is published by {PUBLISHER}. This page explains what the site stores, what
        third parties are involved, and what choices you have.
      </P>

      <H2>What the site stores about you</H2>
      <P>
        {SITE_NAME} has no accounts, no sign-in and no server-side database of visitors. Your
        favourites, your grocery list, your metric or imperial preference and whether you have
        dismissed the install prompt are all kept in your own browser&rsquo;s local storage. They
        never reach us, they are not shared between your devices, and clearing your browser data
        removes them.
      </P>

      <H2>Cookies and advertising</H2>
      <P>
        This site shows advertisements served by Google AdSense. Third-party vendors, including
        Google, use cookies to serve ads based on your prior visits to this and other websites.
      </P>
      <UL>
        <LI>
          Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to you
          based on your visits to this site and other sites on the internet.
        </LI>
        <LI>
          You can opt out of personalised advertising by visiting{" "}
          <a
            className="text-zest hover:underline"
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noreferrer noopener"
          >
            Google Ads Settings
          </a>
          .
        </LI>
        <LI>
          You can opt out of a third-party vendor&rsquo;s use of cookies for personalised
          advertising at{" "}
          <a
            className="text-zest hover:underline"
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noreferrer noopener"
          >
            aboutads.info
          </a>
          .
        </LI>
        <LI>
          When you first visit, this site asks whether you consent to personalised advertising. If
          you decline, Google is instructed to serve non-personalised ads instead. You can change
          that choice at any time from the banner link in the footer.
        </LI>
      </UL>

      <H2>Analytics</H2>
      <P>
        The site runs no analytics of its own and sets no tracking cookies beyond those described
        above.
      </P>

      <H2>Offline storage</H2>
      <P>
        If you install {SITE_NAME} to your home screen, a service worker caches pages and
        photographs you have opened so they stay readable without a connection. That cache lives on
        your device and can be cleared by uninstalling the app or clearing site data.
      </P>

      <H2>Children</H2>
      <P>
        This site is not directed at children under 13 and does not knowingly collect information
        from them.
      </P>

      <H2>Changes</H2>
      <P>
        Any change to this policy will be posted on this page with a new date at the top.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about this policy can be sent to{" "}
        <a className="text-zest hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </P>
    </Prose>
  );
}
