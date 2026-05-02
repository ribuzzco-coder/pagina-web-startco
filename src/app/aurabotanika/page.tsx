import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "AURA BOTANIKA";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para AURA BOTANIKA con enfoque artistico botanico y CTA interno de activacion.",
  path: "/aurabotanika",
});

export default function AuraBotanikaPage() {
  return (
    <BoutiqueGalleryPreview
      brand="AURA BOTANIKA"
      handle="@aura.botanika"
      tagline="Cianotipia botanica, fotografia con sol, agua y plantas, en una propuesta sensible entre arte y talleres."
      variant="mist"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink artistico, botanico y contemplativo para una marca que mezcla naturaleza, proceso y sensibilidad visual."
      summary="La propuesta para AURA BOTANIKA toma el azul profundo del logo, la delicadeza de la cianotipia y la narrativa de talleres para construir una experiencia mas editorial, mas inmersiva y mejor organizada."
      typography="Playfair Display aporta una presencia poetica y editorial a los titulares, mientras Assistant mantiene una interfaz serena, clara y facil de usar para web, talleres y contacto."
      directionCopy="Azul cianotipo, hueso, gris piedra y rosados organicos para sostener una sensacion artistica, natural, silenciosa y profundamente visual."
      introBadge="Edicion preview"
      introCardCopy="Biolink botanico, artistico y sereno."
      instagramTitle="Instagram y acceso a talleres"
      instagramCopy="El perfil comunica una practica visual muy coherente: exposiciones, ustedes, talleres y ferias. La maqueta convierte ese recorrido en un hub mas limpio, contemplativo y preparado para activar interes comercial o pedagogico."
      locationTitle="Medellin y envios"
      locationCopy="AURA BOTANIKA comunica Medellin como base, talleres y envios nacionales e internacionales. Este cierre ayuda a reforzar origen, disponibilidad y la mezcla entre obra y experiencia formativa."
      locationLabel="Arte y talleres"
      locationMapSrc="https://www.google.com/maps?q=Medellin,+Colombia&output=embed"
      logoSrc="/images/aurabotanika-logo.jpg"
      instagramPreviewSrc="/images/aurabotanika-instagram.png"
      backgroundImages={[
        "/images/aurabotanika-look-1.jpg",
        "/images/aurabotanika-instagram.png",
        "/images/aurabotanika-links.png",
        "/images/aurabotanika-logo.jpg",
        "/images/aurabotanika-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Pagina web", accent: true },
        { label: "Proximo taller" },
        { label: "Expo y ferias" },
        { label: "Contacto" },
      ]}
      chips={[
        { label: "Cianotipia" },
        { label: "Botanica" },
        { label: "Talleres" },
        { label: "Arte visual" },
      ]}
      gallery={[
        {
          src: "/images/aurabotanika-look-1.jpg",
          alt: "Flor prensada con transparencias y tonos suaves que remiten al proceso botanico.",
          label: "Mood visual",
        },
        {
          src: "/images/aurabotanika-links.png",
          alt: "Panel de enlaces con acceso a pagina web y proximo taller de iniciacion.",
          label: "Accesos",
        },
        {
          src: "/images/aurabotanika-logo.jpg",
          alt: "Logo circular azul de AURA BOTANIKA con composicion tipografica envolvente.",
          label: "Identidad",
        },
      ]}
    />
  );
}
