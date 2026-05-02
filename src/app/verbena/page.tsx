import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "VERBENA";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para VERBENA con enfoque ritual, botanico y de bienestar.",
  path: "/verbena",
});

export default function VerbenaPage() {
  return (
    <BoutiqueGalleryPreview
      brand="VERBENA"
      handle="@verbena_co"
      tagline="Crea delicados y simples rituales de cuidado y bienestar desde una identidad ancestral, botanica y serena."
      variant="mist"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink suave, ritual y botanico para una marca que convierte el cuidado personal en bienestar cotidiano."
      summary="La propuesta para VERBENA toma la calma cromatica del universo de marca, la idea de cuidado ancestral y la presencia de producto para construir una experiencia mas limpia, confiable y sensorial."
      typography="Playfair Display aporta una elegancia suave y contemplativa a los titulares, mientras Assistant mantiene una interfaz clara y cercana para compra, rituales y atencion."
      directionCopy="Madera clara, lavanda suave, verde agua y acentos vino para sostener una sensacion de bienestar, naturaleza y autocuidado con vocacion comercial."
      introBadge="Edicion preview"
      introCardCopy="Biolink botanico, sereno y de ritual."
      instagramTitle="Instagram y rutas de bienestar"
      instagramCopy="La marca ya comunica sedes, bienestar, ciudades y una identidad muy amable. La maqueta reorganiza ese ecosistema en un hub mas limpio para compra, contacto y reconocimiento visual."
      locationTitle="Presencia nacional"
      locationCopy="VERBENA comunica presencia en ciudades como Bogota, Medellin, Rionegro, San Andres, Villavicencio, Apartado y Floridablanca. Este cierre ayuda a reforzar cobertura, confianza y cercania."
      locationLabel="Cuidado ancestral"
      locationMapSrc="https://www.google.com/maps?q=Medellin,+Colombia&output=embed"
      logoSrc="/images/verbena-logo.jpg"
      instagramPreviewSrc="/images/verbena-instagram.png"
      backgroundImages={[
        "/images/verbena-product.jpg",
        "/images/verbena-logo.jpg",
        "/images/verbena-links.png",
        "/images/verbena-product.jpg",
        "/images/verbena-logo.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "WhatsApp", accent: true },
        { label: "Sitio web" },
        { label: "Sedes y ciudades" },
        { label: "Rituales de bienestar" },
      ]}
      chips={[
        { label: "Bienestar" },
        { label: "Cuidado personal" },
        { label: "Rituales" },
        { label: "Ancestral" },
      ]}
      gallery={[
        {
          src: "/images/verbena-product.jpg",
          alt: "Kit de bienestar VERBENA con flores, vela y empaques de tono natural sobre madera clara.",
          label: "Producto",
        },
        {
          src: "/images/verbena-instagram.png",
          alt: "Perfil de Instagram de VERBENA con bio de bienestar y destacados por ciudades.",
          label: "Instagram",
        },
        {
          src: "/images/verbena-logo.jpg",
          alt: "Logo VERBENA sobre textura madera clara con identidad de cuidado ancestral.",
          label: "Identidad",
        },
      ]}
    />
  );
}
