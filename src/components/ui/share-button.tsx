"use client";

import { useState } from "react";

type ShareButtonProps = {
  title: string;
  text: string;
  url: string;
  className?: string;
};

export function ShareButton({
  title,
  text,
  url,
  className,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // noop
    }
  };

  return (
    <button type="button" onClick={handleShare} className={className}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 10.8 6.8-4.1" />
        <path d="m8.6 13.2 6.8 4.1" />
      </svg>
      <span>{copied ? "Copiado" : "Compartir"}</span>
    </button>
  );
}
