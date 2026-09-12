/**
 * AdSense ad units.
 *
 * The publisher ID lives in components/AdSlot.tsx. These are the individual ad
 * UNIT ids from the AdSense dashboard (Ads -> By ad unit).
 *
 * Two unit types are in use and they are not interchangeable:
 *
 *  - "auto"       display unit, sits inside the flow of a page
 *  - "autorelaxed" multiplex unit, a grid of content recommendations that
 *                  Google intends to sit AFTER the content, not in the middle
 *                  of it
 *
 * So the display unit takes the mid-content positions and the multiplex unit
 * takes the foot positions. A slot with an empty id renders nothing at all, so
 * the site never ships an empty or broken placeholder.
 *
 * Two units render per page: home shows homeMid and homeFoot, a recipe page
 * shows recipeMid and recipeFoot.
 */
export type AdUnit = {
  /** data-ad-slot from the AdSense dashboard. Empty disables the position. */
  id: string;
  /** data-ad-format. */
  format: "auto" | "autorelaxed" | "fluid";
  /** Height reserved before the ad loads, to stop the page shifting. */
  minHeight: number;
  label?: string;
};

export const AD_SLOTS = {
  /** Home, at the break between the featured row and the archive grid. */
  homeMid: { id: "3889176136", format: "auto", minHeight: 250 },
  /** Home, below the archive grid. */
  homeFoot: { id: "5083799737", format: "autorelaxed", minHeight: 600, label: "Sponsored" },
  /** Recipe page, between the background text and the method. */
  recipeMid: { id: "3889176136", format: "auto", minHeight: 250 },
  /** Recipe page, after the lab notes. */
  recipeFoot: { id: "3330215112", format: "autorelaxed", minHeight: 600, label: "Sponsored" },
} as const satisfies Record<string, AdUnit>;

export type AdSlotName = keyof typeof AD_SLOTS;
