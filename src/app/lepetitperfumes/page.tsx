import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Le Petit Perfumes";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Le Petit Perfumes con enfoque perfumeria editorial y CTA interno de activacion.",
  path: "/lepetitperfumes",
});

export default function LePetitPerfumesPage() {
  return (
    <BoutiqueGalleryPreview
      brand="Le Petit Perfumes"
      handle="@lepetitperfumes_"
      tagline="Perfumeria de autor, dupes y taller con una identidad limpia, seria y enfocada en el arte de oler."
      variant="noir"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink sobrio, editorial y con aire de perfumeria de autor para una marca centrada en el olfato."
      summary="La propuesta para Le Petit Perfumes toma el blanco y negro del logo, el tono selecto de su bio y la idea de laboratorio olfativo para construir una experiencia mas refinada, silenciosa y memorable."
      typography="Playfair Display aporta elegancia editorial y cierta sensacion de maison perfumera, mientras Assistant mantiene una interfaz directa y clara para laboratorio, compra y contacto."
      directionCopy="Blanco, negro, grises suaves y contraste tipografico fuerte para sostener una sensacion de perfumeria premium, de autor y enfocada en experiencia."
      introBadge="Edicion preview"
      introCardCopy="Biolink olfativo, editorial y preciso."
      instagramTitle="Instagram y universo de marca"
      instagramCopy="La marca ya comunica perfumeria de autor, dupes, taller y laboratorio. La maqueta convierte ese ecosistema en un hub mas limpio, mas elegante y mas coherente con un universo olfativo premium."
      locationTitle="Colombia y laboratorio"
      locationCopy="Le Petit Perfumes comunica una propuesta especializada alrededor del arte de oler, con categorias como labs y ediciones. Este cierre ayuda a reforzar expertise, enfoque de marca y alcance comercial."
      locationLabel="Perfumeria de autor"
      locationMapSrc="https://www.google.com/maps?q=Colombia&output=embed"
      logoSrc="/images/lepetitperfumes-logo.jpg"
      instagramPreviewSrc="/images/lepetitperfumes-instagram.png"
      backgroundImages={[
        "/images/lepetitperfumes-logo.jpg",
        "/images/lepetitperfumes-instagram.png",
        "/images/lepetitperfumes-logo.jpg",
        "/images/lepetitperfumes-instagram.png",
        "/images/lepetitperfumes-logo.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Perfumeria de autor", accent: true },
        { label: "Dupes" },
        { label: "Labs" },
        { label: "Taller" },
      ]}
      chips={[
        { label: "Perfumes" },
        { label: "Autor" },
        { label: "Dupes" },
        { label: "Labs" },
      ]}
      gallery={[
        {
          src: "/images/lepetitperfumes-logo.jpg",
          alt: "Logo blanco y negro de Le Petit Perfumes con lenguaje sobrio y editorial.",
          label: "Identidad",
        },
        {
          src: "/images/lepetitperfumes-instagram.png",
          alt: "Perfil de Instagram con enfoque en perfumeria, labs y ediciones destacadas.",
          label: "Instagram",
        },
        {
          src: "/images/lepetitperfumes-logo.jpg",
          alt: "Aplicacion del logo como sello visual de una marca de perfumeria refinada.",
          label: "Maison",
        },
      ]}
    />
  );
}
