import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "melimiel";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para melimiel con enfoque lingerie soft y CTA interno de activacion.",
  path: "/melimiel",
});

export default function MelimielPage() {
  return (
    <BoutiqueGalleryPreview
      brand="melimiel"
      handle="@melimiel.co"
      tagline="Lingerie femenina con una identidad delicada, romantica y enfocada en resaltar la esencia interior."
      variant="blush"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink delicado, femenino y romantico para una marca de lingerie con sensibilidad propia."
      summary="La propuesta para melimiel toma el rosa suave del logo, la narrativa de feminidad interior y la sutileza del producto para construir una experiencia mas elegante, emocional y ordenada desde el movil."
      typography="Playfair Display aporta un tono editorial y sensual a los titulares, mientras Assistant mantiene una interfaz clara, amable y facil de recorrer para sets, tallas, cuidados y compra directa."
      directionCopy="Rosa empolvado, crema, vino suave y toques nude para sostener una sensacion romantica, intima, femenina y premium sin volverse recargada."
      introBadge="Edicion preview"
      introCardCopy="Biolink delicado, romantico y femenino."
      instagramTitle="Instagram y universo de marca"
      instagramCopy="La marca comunica muy bien colecciones, sets, cuidados, tallas y outfits. La maqueta organiza ese lenguaje en un hub mas pulido, mas sensible y mejor preparado para convertir interes en compra."
      locationTitle="Medellin"
      locationCopy="melimiel comunica cita previa en Medellin, junto con acceso a WhatsApp y pagina web. Este cierre ayuda a reforzar cercania, confianza y facilidad de compra o asesoria personalizada."
      locationLabel="Cita previa Medellin"
      locationMapSrc="https://www.google.com/maps?q=Diagonal+47+15sur-51+Medellin&output=embed"
      logoSrc="/images/melimiel-logo.jpg"
      instagramPreviewSrc="/images/melimiel-instagram.png"
      backgroundImages={[
        "/images/melimiel-look-1.jpg",
        "/images/melimiel-logo.jpg",
        "/images/melimiel-look-1.jpg",
        "/images/melimiel-logo.jpg",
        "/images/melimiel-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Nueva coleccion", accent: true },
        { label: "Sets" },
        { label: "Cuidados" },
        { label: "Tallas" },
      ]}
      chips={[
        { label: "Lingerie" },
        { label: "Sets" },
        { label: "Outfits" },
        { label: "Medellin" },
      ]}
      gallery={[
        {
          src: "/images/melimiel-look-1.jpg",
          alt: "Detalle de encaje y textura en una prenda de lingerie en tono marfil suave.",
          label: "Producto hero",
        },
        {
          src: "/images/melimiel-instagram.png",
          alt: "Perfil de Instagram con historias destacadas de colecciones, ferias, cuidados y tallas.",
          label: "Instagram",
        },
        {
          src: "/images/melimiel-logo.jpg",
          alt: "Logo de melimiel con isotipo floral en rosa y tipografia elegante.",
          label: "Identidad",
        },
      ]}
    />
  );
}
