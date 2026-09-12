"use client";

import { useState } from "react";

/**
 * A recipe photograph, or an honest placeholder when there isn't one.
 *
 * The archive deliberately does not borrow a picture of a similar-looking dish
 * to fill a gap, so the placeholder says plainly that the image is pending
 * rather than pretending to be a photo.
 */
export function RecipeImage({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden ${className}`}
        role="img"
        aria-label={`${alt} — photograph pending`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#23231a] via-[#141410] to-[#0b0b08]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #d9f99d 0 1px, transparent 1px 9px)",
          }}
        />
        <svg
          viewBox="0 0 64 64"
          className="relative w-9 h-9 text-zest/30"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect x="20" y="8" width="4" height="13" rx="2" />
          <rect x="30" y="4" width="4" height="17" rx="2" />
          <rect x="40" y="8" width="4" height="13" rx="2" />
          <rect x="6" y="26" width="52" height="5" rx="2.5" />
          <path d="M9 31h46a23 23 0 0 1-46 0Z" />
        </svg>
        <span className="relative text-[9px] font-semibold tracking-[0.22em] uppercase text-white/30">
          Image pending
        </span>
      </div>
    );
  }

  return (
    // Remote and local sources vary in size; a plain img keeps them unoptimised
    // but reliable.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  );
}
