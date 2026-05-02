import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "MEDE";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para MEDE con enfoque streetwear y CTA interno de activacion.",
  path: "/medecomco",
});

export default function MedeComCoPage() {
  return (
    <BoutiqueGalleryPreview
      brand="MEDE"
      handle="@mede.com.co"
      tagline="Streetwear y community drops con una energia cruda, nocturna y muy Medellin."
      variant="noir"
      logoMode="contain"
      previewLabel="Preview biolink"
      previewHeading="Un biolink oscuro, directo y street para una marca que vive entre comunidad, drops y cultura."
      summary="La maqueta para MEDE toma el universo visual del perfil y lo traduce a una experiencia mas editorial pero igual de contundente: negro, gris concreto, blanco duro y fotografia urbana como base de una presencia digital con mas actitud."
      typography="Playfair Display ayuda a darle tension editorial a los titulares y Assistant sostiene una interfaz limpia, compacta y facil de escanear desde el movil."
      directionCopy="Negro, gris concreto, blanco grafico y acentos metalicos suaves para mantener una sensacion de streetwear premium, urbana y contemporanea sin perder claridad."
      introBadge="Edicion preview"
      introCardCopy="Biolink street, sobrio y con actitud."
      instagramTitle="Instagram y hubs de marca"
      instagramCopy="El perfil mezcla comunidad, productos, referencias de tiendas aliadas y una identidad visual muy marcada. Esta version organiza ese ecosistema en un biolink mas limpio, mas premium y mas alineado con moda urbana."
      locationTitle="Medellin y red de puntos aliados"
      locationCopy="La marca se mueve entre web propia, colecciones y puntos aliados como Asterisko, Pursuit, Rodca Shop y All Clean. El cierre ayuda a reforzar presencia local y distribucion visible para la comunidad."
      locationLabel="Medellin + puntos aliados"
      locationMapSrc="https://www.google.com/maps?q=Medellin,+Colombia&output=embed"
      logoSrc="/images/mede-logo.jpg"
      instagramPreviewSrc="/images/mede-instagram.png"
      backgroundImages={[
        "/images/mede-look-1.jpg",
        "/images/mede-look-2.jpg",
        "/images/mede-instagram.png",
        "/images/mede-links.png",
        "/images/mede-look-1.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Entrar al web", accent: true },
        { label: "Drop actual" },
        { label: "Tiendas aliadas" },
        { label: "Nueva coleccion" },
      ]}
      chips={[
        { label: "Streetwear" },
        { label: "Community" },
        { label: "Drops" },
        { label: "Medellin" },
      ]}
      gallery={[
        {
          src: "/images/mede-look-1.jpg",
          alt: "Gorra negra con grafica gotica y styling urbano en primer plano.",
          label: "Producto hero",
        },
        {
          src: "/images/mede-look-2.jpg",
          alt: "Look completo streetwear con camiseta oversized, cargos y tonos neutros.",
          label: "Mood urbano",
        },
        {
          src: "/images/mede-links.png",
          alt: "Captura del hub de enlaces con presencia de aliados y navegacion de marca.",
          label: "Ecosistema",
        },
      ]}
    />
  );
}
