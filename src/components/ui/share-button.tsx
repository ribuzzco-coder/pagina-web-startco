"use client";

import { useState } from "react";

type ShareButtonProps = {
  title: string;
  text: string;
  url: string;
  className?: string;
  iconOnly?: boolean;
};

export function ShareButton({
  title,
  text,
  url,
  className,
  iconOnly = false,
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
        <path d="M12 16V4" />
        <path d="m7.5 8.5 4.5-4.5 4.5 4.5" />
        <path d="M5 13.5v4.2A1.3 1.3 0 0 0 6.3 19h11.4a1.3 1.3 0 0 0 1.3-1.3v-4.2" />
      </svg>
      {!iconOnly ? <span>{copied ? "Copiado" : "Compartir"}</span> : null}
    </button>
  );
}
