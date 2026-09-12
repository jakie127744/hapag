"use client";

import { useState } from "react";

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
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2a20] via-[#161611] to-[#0a0a0a] ${className}`}
        aria-label={alt}
      >
        <span className="text-4xl font-bold text-zest/25 select-none">
          {alt.slice(0, 1).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    // Remote Wikimedia sources vary in size; a plain img keeps them unoptimized but reliable.
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
