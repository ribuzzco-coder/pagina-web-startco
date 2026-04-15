import { CTASection } from "@/components/sections/cta-section";
import { NfcBenefits } from "@/components/sections/nfc-benefits";
import { NfcClientGallery } from "@/components/sections/nfc-client-gallery";
import { NfcDemoPreview } from "@/components/sections/nfc-demo-preview";
import { NfcFaq } from "@/components/sections/nfc-faq";
import { NfcHero } from "@/components/sections/nfc-hero";
import { NfcPricing } from "@/components/sections/nfc-pricing";
import { NfcSteps } from "@/components/sections/nfc-steps";
import { NfcUseCases } from "@/components/sections/nfc-use-cases";
import { createPageMetadata } from "@/lib/metadata";
import {
  nfcBusinessBenefits,
  nfcClientCardSamples,
  nfcFaqItems,
  nfcFunctionalBenefits,
  nfcPreviewItems,
  nfcPricingPlans,
  nfcSteps,
  nfcUseCases,
} from "@/lib/nfc-content";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Tarjetas NFC para compartir tu negocio",
  description:
    "Landing de conversión para tarjetas NFC: comparte tu perfil, links y contacto con un solo toque y convierte más interacciones en oportunidades reales.",
  path: "/tarjetas-nfc",
});

const nfcWhatsappUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
  "Hola, quiero solicitar una tarjeta NFC para mi negocio.",
)}`;

export default function TarjetasNfcPage() {
  return (
    <>
      <NfcHero primaryHref={nfcWhatsappUrl} />
      <NfcSteps steps={nfcSteps} />
      <NfcBenefits
        functional={nfcFunctionalBenefits}
        business={nfcBusinessBenefits}
      />
      <NfcUseCases items={nfcUseCases} />
      <NfcClientGallery items={nfcClientCardSamples} />
      <NfcDemoPreview items={nfcPreviewItems} inquiryHref={nfcWhatsappUrl} />
      <NfcPricing plans={nfcPricingPlans} inquiryHref={nfcWhatsappUrl} />
      <NfcFaq items={nfcFaqItems} />
      <CTASection
        title="Haz que cada reunión, visita o evento termine en un contacto accionable."
        description="Solicita tu tarjeta NFC o escríbenos por WhatsApp para definir la versión que mejor encaja con tu marca y objetivo comercial."
        primaryLabel="Solicitar tarjeta"
        primaryHref={nfcWhatsappUrl}
        primaryExternal
        secondaryLabel="Hablar por WhatsApp"
        secondaryHref={nfcWhatsappUrl}
        secondaryExternal
      />
    </>
  );
}
