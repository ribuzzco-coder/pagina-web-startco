import { createPageMetadata } from "@/lib/metadata";

import { MotronikRouletteClient } from "./roulette-client";

export const metadata = createPageMetadata({
  title: "Motronik Ruleta",
  description:
    "Ruleta digital promocional de Motronik para activaciones en feria.",
  path: "/motronik-ruleta",
});

export default function MotronikRoulettePage() {
  return <MotronikRouletteClient />;
}
