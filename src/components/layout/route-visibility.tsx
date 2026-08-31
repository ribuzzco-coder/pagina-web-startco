"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type RouteVisibilityProps = {
  children: ReactNode;
  hiddenPrefixes?: string[];
};

export function RouteVisibility({
  children,
  hiddenPrefixes = [
    "/hotelcaribeplaza",
    "/hotelvirreycartagena",
    "/hotelcaribecovenas",
    "/hotelmarierealcartagena",
    "/hotelcaribbeancartagena",
    "/biondaymora",
    "/fiammata",
    "/nunaamautta",
    "/dianamarulanda",
    "/claudiaherrera",
    "/julianaarango",
    "/kristinamorales",
    "/motronik",
    "/neomech",
    "/xori",
    "/duvansequeira",
    "/kynd",
    "/furtivo",
    "/portafolio",
    "/admin",
  ],
}: RouteVisibilityProps) {
  const pathname = usePathname();
  const shouldHide = hiddenPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (shouldHide) {
    return null;
  }

  return <>{children}</>;
}
