import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Bianco di Sole";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Bianco di Sole con enfoque clean luxury y CTA interno de activacion.",
  path: "/biancodisole",
});

export default function BiancoDiSolePage() {
  return (
    <BoutiqueGalleryPreview
      brand="Bianco di Sole"
      handle="@biancodisole"
      tagline="Joyeria permanente, fine jewelry y piezas tejidas a mano con una identidad solar, sutil y sofisticada."
      variant="warm"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink sereno, solar y elegante para una marca de joyeria permanente con sensibilidad editorial."
      summary="La propuesta para Bianco di Sole toma el oliva del logo, el tono marfil de la identidad y la narrativa de verano eterno para construir una experiencia mas refinada, clara y aspiracional."
      typography="Playfair Display aporta una elegancia editorial muy afín al universo de joyería y Assistant sostiene una interfaz ligera, clara y fácil de escanear para pop-up, clientes y piezas permanentes."
      directionCopy="Marfil, oliva, dorado tenue y neutros suaves para sostener una sensación solar, femenina, fina y muy alineada con joyería permanente y handcrafted details."
      introBadge="Edicion preview"
      introCardCopy="Biolink solar, fino y permanente."
      instagramTitle="Instagram y universo de marca"
      instagramCopy="La marca ya comunica joyería permanente, fine jewelry, pop-ups y un universo femenino muy editorial. La maqueta reorganiza ese lenguaje en un hub más limpio, premium y coherente con la marca."
      locationTitle="Complex Los Balsos"
      locationCopy="Bianco di Sole comunica presencia en Complex Los Balsos y una propuesta enfocada en joyería permanente. Este cierre ayuda a reforzar ubicación física, experiencia de marca y confianza."
      locationLabel="Joyeria permanente"
      locationMapSrc="https://www.google.com/maps?q=Complex+Los+Balsos+Medellin&output=embed"
      logoSrc="/images/biancodisole-logo.jpg"
      instagramPreviewSrc="/images/biancodisole-instagram.png"
      backgroundImages={[
        "/images/biancodisole-look-1.jpg",
        "/images/biancodisole-logo.jpg",
        "/images/biancodisole-look-1.jpg",
        "/images/biancodisole-logo.jpg",
        "/images/biancodisole-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Pop-up", accent: true },
        { label: "Clientes" },
        { label: "Permanentes" },
        { label: "Gift guide" },
      ]}
      chips={[
        { label: "Fine jewelry" },
        { label: "Permanentes" },
        { label: "Handmade" },
        { label: "Olive luxury" },
      ]}
      gallery={[
        {
          src: "/images/biancodisole-look-1.jpg",
          alt: "Detalle de collar fino con eslabon central sobre tejido gris suave.",
          label: "Producto hero",
        },
        {
          src: "/images/biancodisole-instagram.png",
          alt: "Perfil de Instagram con historias destacadas de pop-up, clientes y universo de marca.",
          label: "Instagram",
        },
        {
          src: "/images/biancodisole-logo.jpg",
          alt: "Logo circular de BS en oliva sobre fondo marfil con un aire sereno y refinado.",
          label: "Identidad",
        },
      ]}
    />
  );
}
