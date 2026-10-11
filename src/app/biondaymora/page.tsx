import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { DM_Serif_Display } from "next/font/google";

import styles from "./bionda-landing.module.css";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-bionda-display",
  display: "swap",
});

const shop = "https://biondaymora.com";
const assets = "/images/biondaymora/site/";
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export const metadata = createPageMetadata({
  title: "Bionda y Mora | Comodidad en cada paso",
  description: "Todo Bionda y Mora en un solo lugar: tienda, Instagram, testimonios, regalo y WhatsApp.",
  path: "/biondaymora",
});

const destinations = [
  { number: "01", label: "Tienda online", detail: "Descubre botas, tenis y accesorios.", href: shop, external: true },
  { number: "02", label: "Instagram", detail: "Inspírate con historias y nuevos looks.", href: "https://www.instagram.com/biondaymora.col/", external: true },
  { number: "03", label: "Cuéntanos tu experiencia", detail: "Deja tu testimonio sobre tus piezas Bionda y Mora.", href: "https://judge.me/product_reviews/7ede0a75-763f-4675-a41c-03d0e4ca1d64/new?source=shareable-link", external: true },
  { number: "04", label: "Tu regalo", detail: "Tenemos una sorpresa para ti.", href: "/biondaymora/regalo", external: false },
  { number: "05", label: "Hablemos por WhatsApp", detail: "Resolvemos tus dudas antes de elegir tu par.", href: "https://wa.me/573153827248", external: true },
] as const;

const collections = [
  { name: "Botas", image: "boots-campaign.jpg", handle: "botas-todas" },
  { name: "Tenis", image: "tennis-campaign.jpg", handle: "ver-todo-tenis" },
  { name: "Accesorios", image: "accessories-campaign.jpg", handle: "accesorios-todos" },
];

export default function BiondaYMoraPage() {
  return (
    <div className={`${styles.page} ${display.variable}`}>
      <div className={styles.announcement}>Diseñado y hecho en Colombia <span>Para acompañarte en cada paso</span></div>
      <header className={styles.header}>
        <a href={shop} {...external} aria-label="Bionda y Mora, tienda online"><Image src={`${assets}wordmark.png`} alt="Bionda y Mora" width={220} height={52} priority /></a>
        <nav aria-label="Colecciones">{collections.map((collection) => <a key={collection.handle} href={`${shop}/collections/${collection.handle}`} {...external}>{collection.name}</a>)}<a href={`${shop}/pages/nosotros`} {...external}>Nosotros</a></nav>
        <a className={styles.headerAction} href="https://wa.me/573153827248" {...external}>WhatsApp</a>
      </header>

      <section className={styles.hero}>
        <Image className={styles.desktopHero} src={`${assets}campaign-desktop.jpg`} alt="Tenis Girasol de Bionda y Mora en diferentes colores" fill priority sizes="100vw" />
        <Image className={styles.mobileHero} src={`${assets}campaign-mobile.jpg`} alt="Detalle de los tenis Girasol con accesorios florales" fill priority sizes="100vw" />
        <div className={styles.heroCopy}><p className={styles.eyebrow}>HECHAS PARA TI</p><h1>Todo Bionda y Mora, <em>en un solo lugar.</em></h1><p>Elige por dónde quieres empezar tu próximo paso.</p><a className={styles.primaryCta} href={shop} {...external}>Visitar la tienda <span aria-hidden="true">→</span></a></div>
      </section>

      <section className={styles.destinationSection} aria-labelledby="destination-heading">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>ENCUENTRA LO QUE BUSCAS</p><h2 id="destination-heading">Tu camino con <em>Bionda y Mora</em></h2><p>Accesos directos para explorar, conversar y compartir.</p></div>
        <nav className={styles.destinations} aria-label="Accesos Bionda y Mora">
          {destinations.map((destination) => {
            const content = <><span className={styles.number}>{destination.number}</span><span className={styles.destinationText}><strong>{destination.label}</strong><small>{destination.detail}</small></span><span className={styles.arrow} aria-hidden="true">↗</span></>;
            return destination.external ? <a key={destination.label} href={destination.href} {...external}>{content}</a> : <Link key={destination.label} href={destination.href}>{content}</Link>;
          })}
        </nav>
      </section>

      <section className={styles.collectionSection} aria-labelledby="collection-heading">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>DIFERENTES FORMAS DE VIVIR EL CAMINO</p><h2 id="collection-heading">Encuentra tu <em>forma de caminar</em></h2></div>
        <div className={styles.collections}>{collections.map((collection) => <a href={`${shop}/collections/${collection.handle}`} key={collection.handle} {...external}><Image src={`${assets}${collection.image}`} alt={`Colección de ${collection.name.toLowerCase()} Bionda y Mora`} fill sizes="(max-width: 700px) 100vw, 33vw" /><div><h3>{collection.name}</h3><span>VER COLECCIÓN <b aria-hidden="true">→</b></span></div></a>)}</div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyCopy}><p className={styles.eyebrow}>NUESTRA HISTORIA</p><h2>Somos <em>Juanita y María Camila.</em></h2><p>Dos hermanas, dos polos opuestos, unidas para crear piezas hechas en Colombia para mujeres auténticas.</p><a className={styles.textLink} href={`${shop}/pages/nosotros`} {...external}>Conoce nuestra historia <span aria-hidden="true">→</span></a></div>
        <div className={styles.storyImage}><Image src={`${assets}founders.jpg`} alt="Juanita y María Camila, fundadoras de Bionda y Mora" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
      </section>

      <footer className={styles.footer}><Image src={`${assets}wordmark.png`} alt="Bionda y Mora" width={200} height={48} /><div><a href="https://wa.me/573153827248" {...external}>Hablemos por WhatsApp</a><a href="https://www.instagram.com/biondaymora.col/" {...external}>Instagram</a></div><div><a href={`${shop}/pages/politica-de-cambios-y-garantias`} {...external}>Envíos, cambios y garantía</a><a href={`${shop}/policies/privacy-policy`} {...external}>Privacidad</a></div></footer>
    </div>
  );
}
