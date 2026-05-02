import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "USHUAIA";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para USHUAIA con enfoque clean denim y CTA interno de activacion.",
  path: "/ushuaia",
});

export default function UshuaiaPage() {
  return (
    <BoutiqueGalleryPreview
      brand="USHUAIA"
      handle="@ushuaiajeans"
      tagline="Jeans colombianos con disenos exclusivos, actitud femenina y una identidad limpia, urbana y comercial."
      variant="mist"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink limpio, cool y denim-forward para una marca que convierte jeans en identidad."
      summary="La propuesta para USHUAIA toma la mezcla entre feed limpio, producto femenino y tono comercial directo para construir una experiencia mas ordenada, aspiracional y completamente mobile-first."
      typography="Playfair Display aporta elegancia editorial a los titulares y Assistant sostiene una interfaz clara, ligera y muy facil de escanear para compras, showroom, politicas y categorias rapidas."
      directionCopy="Blanco, azul grisaseo, denim lavado y acentos suaves para reforzar una sensacion limpia, femenina, contemporanea y centrada en producto."
      introBadge="Edicion preview"
      introCardCopy="Biolink denim, clean y femenino."
      instagramTitle="Instagram y Linktree actual"
      instagramCopy="La marca ya comunica autoridad en jeans colombianos, politicas claras, showroom y categorias directas. La maqueta organiza esos accesos en un hub mas premium sin perder sencillez ni conversion."
      locationTitle="Medellin, Colombia"
      locationCopy="USHUAIA comunica mas de 16 anos creando jeans favoritos, con presencia en Medellin y una identidad consolidada. Este cierre ayuda a reforzar trayectoria, origen y confianza de marca."
      locationLabel="Jeans colombianos"
      locationMapSrc="https://www.google.com/maps?q=Medellin,+Colombia&output=embed"
      logoSrc="/images/ushuaia-logo.jpg"
      instagramPreviewSrc="/images/ushuaia-instagram.png"
      backgroundImages={[
        "/images/ushuaia-look-1.jpg",
        "/images/ushuaia-instagram.png",
        "/images/ushuaia-linkhub.png",
        "/images/ushuaia-logo.jpg",
        "/images/ushuaia-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Sitio web", accent: true },
        { label: "Linea WhatsApp" },
        { label: "Politicas" },
        { label: "Outlet" },
      ]}
      chips={[
        { label: "Jeans" },
        { label: "Colombian denim" },
        { label: "Showroom" },
        { label: "Outlet" },
      ]}
      gallery={[
        {
          src: "/images/ushuaia-look-1.jpg",
          alt: "Look femenino con top delicado y jean amplio en una estetica limpia y comercial.",
          label: "Mood de marca",
        },
        {
          src: "/images/ushuaia-linkhub.png",
          alt: "Captura del link hub actual con botones directos a web y linea de WhatsApp.",
          label: "Link hub actual",
        },
        {
          src: "/images/ushuaia-logo.jpg",
          alt: "Logo minimalista de USHUAIA en tipografia azul grisasea sobre fondo blanco.",
          label: "Identidad",
        },
      ]}
    />
  );
}
