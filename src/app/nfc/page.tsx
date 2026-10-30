import { NfcExecutionMap } from "@/components/sections/nfc-execution-map";
import { NfcHero } from "@/components/sections/nfc-hero";
import { NfcKeychainProjects } from "@/components/sections/nfc-keychain-projects";
import { NfcPricing } from "@/components/sections/nfc-pricing";
import { NfcSteps } from "@/components/sections/nfc-steps";
import { createPageMetadata } from "@/lib/metadata";
import {
  nfcPricingPlans,
  nfcSteps,
} from "@/lib/nfc-content";

import { NfcRequestForm } from "./nfc-request-form";

export const metadata = createPageMetadata({
  title: "Tarjetas NFC para compartir y convertir contactos",
  description:
    "Tarjetas y llaveros NFC personalizados para compartir tu información, activar conversaciones y convertir cada encuentro en una oportunidad de seguimiento.",
  path: "/nfc",
});

export default function NfcPage() {
  return (
    <main className="nfc-product-page">
      <NfcHero
        primaryHref="#que-puede-hacer"
        primaryLabel="Explorar posibilidades"
        secondaryHref="#productos"
        secondaryLabel="Ver formatos"
      />
      <NfcExecutionMap />
      <NfcSteps steps={nfcSteps} />
      <NfcPricing plans={nfcPricingPlans} inquiryHref="#filtro-nfc" />
      <NfcKeychainProjects />
      <NfcRequestForm />
    </main>
  );
}
