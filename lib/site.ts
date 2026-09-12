/**
 * Canonical site identity, used for metadata, sitemap and structured data.
 *
 * Set NEXT_PUBLIC_SITE_URL to the live origin before deploying, e.g.
 *   NEXT_PUBLIC_SITE_URL=https://hapag.example
 * Without it, canonical URLs and the sitemap point at localhost, which search
 * engines will ignore.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const SITE_NAME = "Hapag";
export const SITE_TAGLINE = "Filipino Culinary Lab";
export const SITE_TITLE = `${SITE_NAME} · ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "A living culinary archive of Filipino cuisine. Regional recipes from Luzon, " +
  "Visayas and Mindanao with sourced background, metric and imperial measures, " +
  "printable recipe cards and a consolidated grocery list.";

export const SITE_LOCALE = "en_PH";

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
