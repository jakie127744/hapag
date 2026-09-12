/**
 * AdSense ad unit slot IDs.
 *
 * The publisher ID is set in components/AdSlot.tsx. These are the individual
 * ad UNIT ids, which only exist once each unit is created in the AdSense
 * dashboard (Ads -> By ad unit). Paste the numeric data-ad-slot value here.
 *
 * Any slot left empty renders nothing at all, so the site never ships an empty
 * or broken ad placeholder.
 */
export const AD_SLOTS = {
  /** Home, between the featured row and the archive grid. */
  homeMid: "",
  /** Home, below the archive grid. */
  homeFoot: "",
  /** Recipe page, between the background text and the method. */
  recipeMid: "",
  /** Recipe page, after the lab notes. */
  recipeFoot: "",
} as const;

export type AdSlotName = keyof typeof AD_SLOTS;
