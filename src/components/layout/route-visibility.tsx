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
    "/vianagirl",
    "/dibluco",
    "/magiaconhilos",
    "/aluva",
    "/medecomco",
    "/biondaymora",
    "/fiammata",
    "/petalia",
    "/cocobycamilag",
    "/brus",
    "/ushuaia",
    "/engracia",
    "/aurabotanika",
    "/onesoul",
    "/face2face",
    "/kalieth",
    "/lepetitperfumes",
    "/melimiel",
    "/biancodisole",
    "/mariasalome",
    "/badubrand",
    "/laroma",
    "/pelletierandco",
    "/verbena",
    "/motronik",
    "/neomech",
    "/xori",
    "/duvansequeira",
  ],
}: RouteVisibilityProps) {
  const pathname = usePathname();
  const shouldHide = hiddenPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (shouldHide) {
    return null;
  }

  return <>{children}</>;
}
