import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "OneSoul";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para OneSoul con enfoque handmade lifestyle y CTA interno de activacion.",
  path: "/onesoul",
});

export default function OneSoulPage() {
  return (
    <BoutiqueGalleryPreview
      brand="OneSoul"
      handle="@onesoul_co"
      tagline="Cosmetiqueras, organizadores y regalos hechos a mano con una identidad suave, util y muy regalable."
      variant="warm"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink delicado, util y handmade para una marca pensada para regalar y acompanar lo cotidiano."
      summary="La propuesta para OneSoul toma el beige rosado del logo, el tono amable del link hub actual y el enfoque en detalles hechos a mano para construir una experiencia mas limpia, aspiracional y facil de convertir."
      typography="Playfair Display aporta una sensibilidad editorial y femenina a los titulares, mientras Assistant mantiene una interfaz clara, ligera y comoda para navegar productos, catalogo y contacto desde el movil."
      directionCopy="Crema, beige rosado, topo suave y cafe profundo para sostener una sensacion artesanal, femenina, util y muy alineada con regalos y organizacion cotidiana."
      introBadge="Edicion preview"
      introCardCopy="Biolink suave, handmade y regalable."
      instagramTitle="Instagram y link hub actual"
      instagramCopy="La marca ya comunica muy bien su universo: cosmetiqueras, organizadores, regalos corporativos y detalles hechos a mano. La maqueta lo convierte en un hub mas pulido, mas premium y mejor jerarquizado."
      locationTitle="Colombia y envios"
      locationCopy="OneSoul comunica envios nacionales y una propuesta ideal para regalos utiles en distintas ocasiones. Este cierre ayuda a reforzar cercania, disponibilidad y confianza para compra online."
      locationLabel="Regalos hechos a mano"
      locationMapSrc="https://www.google.com/maps?q=Colombia&output=embed"
      logoSrc="/images/onesoul-logo.jpg"
      instagramPreviewSrc="/images/onesoul-instagram.png"
      backgroundImages={[
        "/images/onesoul-logo.jpg",
        "/images/onesoul-logo.jpg",
        "/images/onesoul-linkhub.png",
        "/images/onesoul-logo.jpg",
        "/images/onesoul-linkhub.png",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Visita nuestro sitio web", accent: true },
        { label: "Conversemos por WhatsApp" },
        { label: "Explora nuestro catalogo" },
        { label: "Kits para mama" },
      ]}
      chips={[
        { label: "Cosmetiqueras" },
        { label: "Organizadores" },
        { label: "Regalos" },
        { label: "Corporativos" },
      ]}
      gallery={[
        {
          src: "/images/onesoul-linkhub.png",
          alt: "Captura del link hub actual con accesos a sitio web, WhatsApp y catalogo.",
          label: "Link hub actual",
        },
        {
          src: "/images/onesoul-instagram.png",
          alt: "Perfil de Instagram con historias destacadas de productos, promos y eventos.",
          label: "Instagram",
        },
        {
          src: "/images/onesoul-logo.jpg",
          alt: "Logo de OneSoul en beige rosado con acento ilustrado organico.",
          label: "Identidad",
        },
      ]}
    />
  );
}
