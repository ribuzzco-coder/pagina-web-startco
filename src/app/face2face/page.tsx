import { BoutiqueGalleryPreview } from "@/components/previews/boutique-gallery-preview";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const brandName = "Face2Face";

const activationMessage = encodeURIComponent(
  `Hola, quiero activar la landing de ${brandName}. Ya revise la maqueta visual y quiero continuar con la encuesta de pago.`,
);

export const metadata = createPageMetadata({
  title: `${brandName} Preview`,
  description:
    "Maqueta visual biolink para Face2Face con enfoque accesorios premium y CTA interno de activacion.",
  path: "/face2face",
});

export default function Face2FacePage() {
  return (
    <BoutiqueGalleryPreview
      brand="Face2Face"
      handle="@face2face.oficial"
      tagline="Bolsos y zapatos con diseno colombiano, enfoque internacional y una experiencia de compra clara para multiples canales."
      variant="warm"
      logoMode="cover"
      previewLabel="Preview biolink"
      previewHeading="Un biolink limpio, premium y comercial para una marca de accesorios con ambicion internacional."
      summary="La propuesta para Face2Face toma su identidad neutra, el enfoque en complementos femeninos y la estructura de compra por pais para construir una experiencia mas elegante, mas clara y mejor jerarquizada."
      typography="Playfair Display aporta presencia editorial a los titulares y Assistant sostiene una interfaz limpia, directa y facil de recorrer para compra online, asesoria y tiendas."
      directionCopy="Marfil, negro, arena y topo suave para sostener una sensacion premium, comercial y versatil alineada con bolsos, zapatos y accesorios de moda."
      introBadge="Edicion preview"
      introCardCopy="Biolink clean, premium y comercial."
      instagramTitle="Instagram y link hub actual"
      instagramCopy="La marca ya comunica fuerza en producto, tiendas, pagos y canales de compra para Colombia y Panama. La maqueta organiza esos accesos en un hub mas refinado y mucho mas orientado a conversion."
      locationTitle="Colombia y Panama"
      locationCopy="Face2Face comunica compra en linea para Colombia y Panama, asesoria por WhatsApp y una red de tiendas. Este cierre ayuda a reforzar alcance regional, soporte comercial y confianza de marca."
      locationLabel="Compra por pais"
      locationMapSrc="https://www.google.com/maps?q=Colombia&output=embed"
      logoSrc="/images/face2face-logo.jpg"
      instagramPreviewSrc="/images/face2face-instagram.png"
      backgroundImages={[
        "/images/face2face-logo.jpg",
        "/images/face2face-linkhub.png",
        "/images/face2face-logo.jpg",
        "/images/face2face-linkhub.png",
        "/images/face2face-logo.jpg",
      ]}
      activationHref={`${SITE_CONFIG.whatsappUrl}?text=${activationMessage}`}
      activationCopy="Tu maqueta visual esta lista. Activa tu landing para conectar botones, formularios, WhatsApp y publicacion final."
      activationLabel="Activar landing"
      fakeActions={[
        { label: "Web comprar por mayor", accent: true },
        { label: "Comprar en linea Colombia" },
        { label: "Comprar en linea Panama" },
        { label: "Nuestras tiendas" },
      ]}
      chips={[
        { label: "Bolsos" },
        { label: "Zapatos" },
        { label: "Colombia" },
        { label: "Panama" },
      ]}
      gallery={[
        {
          src: "/images/face2face-linkhub.png",
          alt: "Link hub actual con accesos a compra por mayor, compra por pais y asesores.",
          label: "Link hub actual",
        },
        {
          src: "/images/face2face-instagram.png",
          alt: "Perfil de Instagram con historias destacadas de vacantes, tiendas, pagos y contacto.",
          label: "Instagram",
        },
        {
          src: "/images/face2face-logo.jpg",
          alt: "Logo minimalista de Face2Face sobre fondo marfil con tipografia negra.",
          label: "Identidad",
        },
      ]}
    />
  );
}
