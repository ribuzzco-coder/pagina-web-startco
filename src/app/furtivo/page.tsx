import Image from "next/image";

import { createPageMetadata } from "@/lib/metadata";

import styles from "./furtivo.module.css";

const links = {
  review:
    "https://www.google.com/search?sca_esv=48cf712148e4e72e&sxsrf=APpeQnszExNoAyXjqwrcxhBzXuz3I-ixDg:1788191754883&q=opiniones+de+furtivo+barberia&uds=AJ5uw1-A1MjoHBdWfnTwTNi6hL3M8S-fbHtha7ENGOcyB-5ldmsU99707D--Cw8wheglTz3sHXseqNL6YWDzpVTfj4KePu_Z8Ll3djRx4UsoO4UpJpU2jcSofRntqGGTJjB1MSHquGwf704wyBq0J-w-Vfdd8UlwasOntBwh0veArvqH6S31bwm9smGGFyP5UhPKtvchQDFQQgnvay6wy2GaSJjzJwadf147QzdBuBkCqItXr2BD-mJfO-9epy2dUYB4-m5ateMQXCx8VHoBcHBiq_01T6pupO3amYBE8pn07uUVvN2-jno8pS6NVqRWlAkeHTo5RNOnIh1FMV0ktpeKAc5Ik8DxR2lt0zLZfLRAPpAupcC82Uth2EPFH5b_3-KfOVsrOUpwN19fMWxvav16FbEsYlksjn2GMiykTRwYDajObXb8jBiSkKQegjSSi6MG6Kp03Hnc9T3BYBw5fALhTHStVoFKB46fcClefju_2DVc9irtJommMK6hOu_QEmNrbDL22uv1Hkq_-64m2LElKI64h5ifom0TvbsekBxwoW_SGVXNJOa2CRVYUEddB6dd64stnYAI&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3JAHfVmp2Bh9K2HujDy_qcphMrn2QP-EPlP0eVEc9nszQKfZsADAdLxUwch1JFr21Ye3k6qLXKlCe_MUEmIsAf_lwQShe__a7zIBI2eb0JjWzt2GQ%3D%3D&sa=X&ved=2ahUKEwjr7duyncuWAxWhSzABHRvHLLUQk8gLegQIHhAB&ictx=1&biw=440&bih=766&dpr=3#ebo=1&lrd=0x8e44297b251023eb:0x91c72491f6caaa64,3",
  instagram: "https://www.instagram.com/furtivo_barberia/",
  // Reemplazar por el enlace directo de Furtivo, por ejemplo: https://wa.me/573001234567
  whatsapp: "https://wa.me/",
};

export const metadata = createPageMetadata({
  title: "Furtivo Barber Shop | Tu opinión cuenta",
  description:
    "Comparte tu experiencia en Furtivo Barber Shop y encuentra sus canales de atención.",
  path: "/furtivo",
});

export default function FurtivoPage() {
  return (
    <section className={styles.page}>
      <main className={styles.phone}>
        <header className={styles.header}>
          <p>Furtivo Barber Shop</p>
          <span>Estilo con carácter</span>
        </header>

        <div className={styles.hero}>
          <div className={styles.logoFrame}>
            <Image
              src="/images/furtivo/logo.png"
              alt="Furtivo Barber Shop"
              width={1080}
              height={1080}
              priority
              className={styles.logo}
            />
          </div>
          <p className={styles.brandLine}>TU ESTILO. NUESTRA PASIÓN.</p>
        </div>

        <section className={styles.reviewCard} aria-labelledby="review-title">
          <div className={styles.cardTopline}>
            <span>TU EXPERIENCIA IMPORTA</span>
            <span>GOOGLE</span>
          </div>
          <h1 id="review-title">¿Cómo fue tu experiencia?</h1>
          <p>Tu reseña ayuda a que más personas descubran el sello Furtivo.</p>
          <a
            href={links.review}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewButton}
          >
            Dejar reseña en Google
            <span aria-hidden="true">→</span>
          </a>
          <p className={styles.help}>Toma menos de un minuto. Gracias por elegir Furtivo.</p>
        </section>

        <nav className={styles.connect} aria-label="Canales de Furtivo">
          <p className={styles.kicker}>SIGUE A FURTIVO</p>
          <div className={styles.links}>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              <span><b>Instagram</b><small>@furtivo_barberia</small></span>
              <i aria-hidden="true">↗</i>
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              <span><b>WhatsApp</b><small>Escríbenos directo</small></span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </nav>

        <footer className={styles.footer}>Furtivo Barber Shop · Hecho para volver</footer>
      </main>
    </section>
  );
}
