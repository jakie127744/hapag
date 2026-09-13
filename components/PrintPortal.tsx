"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Moves print-only markup out of the app tree and into #print-root.
 *
 * Printing used to rely on every page remembering to mark its own content
 * `no-print`. The home page never did, so printing the grocery list from there
 * printed the whole page. Hiding one wrapper is not something a new page can
 * forget, but it only works if the print surfaces are not inside that wrapper,
 * hence the portal.
 */
export function PrintPortal({ children }: { children: React.ReactNode }) {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("print-root"));
  }, []);

  if (!target) return null;
  return createPortal(children, target);
}
