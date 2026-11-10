import type { CSSProperties } from "react";
import Image from "next/image";

import { BpcLeadForm } from "./bpc-lead-form";
import { BPC_LOGO_DATA_URI } from "./bpc-logo";
import styles from "./bpc-landing.module.css";

const links = [
  { label: "Sitio web", detail: "Servicios y actualidad BPC", href: "https://www.bpclabsas.com/", icon: "web" },
  { label: "LinkedIn", detail: "Perfil corporativo", href: "https://www.linkedin.com/company/laboratoriobpc/home/", icon: "linkedin" },
  { label: "Instagram", detail: "Proceso, productos y comunidad", href: "https://www.instagram.com/laboratoriobpc", icon: "instagram" },
  { label: "WhatsApp", detail: "Atención comercial directa", href: "https://wa.me/573154572438", icon: "whatsapp" },
] as const;

const services = [
  ["01", "Desarrollo de formulaciones", "De una necesidad de mercado a una fórmula cosmética viable para tu marca."],
  ["02", "Maquila cosmética", "Producción de cosméticos líquidos y semisólidos con acompañamiento de laboratorio."],
  ["03", "Ruta regulatoria", "Orientación para que el camino de tu producto contemple sus requisitos desde el inicio."],
] as const;

const capability = ["Soluciones", "Emulsiones", "Suspensiones", "Aceites", "Lociones", "Geles", "Ceras", "Pastas", "Pomadas"];
const instagramPosts = [
  { id: "C4HJ4SaLpxQ", image: "/images/bpc/lab-quality.jpg", label: "La calidad se demuestra", category: "Desde el laboratorio" },
  { id: "CuVR3rZLoXG", image: "/images/bpc/gels.jpg", label: "Maquilamos los geles que necesitas", category: "Desarrollo + maquila" },
  { id: "CuS4I6vrUoy", image: "/images/bpc/bottles.jpg", label: "Procesando sueños", category: "Producto y empaque" },
  { id: "CuQvBXQO7SN", image: "/images/bpc/skincare.jpg", label: "Categorías que conectan", category: "Cuidado facial" },
] as const;

function SocialIcon({ name }: { name: (typeof links)[number]["icon"] }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, "aria-hidden": true } as const;
  if (name === "web") return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M3.8 12h16.4M12 3.5c2.1 2.35 3.15 5.18 3.15 8.5S14.1 18.15 12 20.5C9.9 18.15 8.85 15.32 8.85 12S9.9 5.85 12 3.5Z" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.4 8.2H2.2V21h3.2V8.2ZM3.8 3A1.9 1.9 0 1 0 3.8 6.8 1.9 1.9 0 0 0 3.8 3ZM21.8 13.66c0-3.86-2.06-5.65-4.8-5.65-2.21 0-3.2 1.22-3.76 2.07V8.2h-3.2V21h3.2v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.4V21h3.2v-7.34Z" /></svg>;
  if (name === "instagram") return <svg {...common}><rect x="3.3" y="3.3" width="17.4" height="17.4" rx="4.5" /><circle cx="12" cy="12" r="4.05" /><circle cx="17.75" cy="6.45" r=".7" fill="currentColor" stroke="none" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.45A10.15 10.15 0 0 0 4.06 15.34L2.7 21.3l6.1-1.6a10.15 10.15 0 0 0 11.7-16.25ZM12 20.04c-1.08 0-2.14-.28-3.08-.81l-.22-.13-3.62.95.97-3.53-.15-.23A8.07 8.07 0 1 1 12 20.04Zm4.42-5.96c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.2-1.41-1.34-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>;
}

export default function BpcLandingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOrbit} aria-hidden="true" />
        <header className={styles.header}>
          <a className={styles.brand} href="#inicio" aria-label="BPC Lab, inicio"><img src={BPC_LOGO_DATA_URI} alt="BPC Lab - Laboratorio de Buenas Prácticas Cosméticas" style={{ width: 180, height: "auto" }} /></a>
          <a className={styles.headerCta} href="#perfil">Hablemos <span>↘</span></a>
        </header>
        <div id="inicio" className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Laboratorio de maquila cosmética</p>
            <h1>Construimos lo que <em>tu marca</em> necesita para salir al mercado.</h1>
            <p className={styles.lead}>Desarrollo, maquila y acompañamiento para convertir una idea cosmética en un producto listo para avanzar.</p>
            <div className={styles.heroActions}><a href="#perfil" className={styles.primary}>Quiero presentar mi proyecto <span>→</span></a><a href="#servicios" className={styles.textAction}>Conocer BPC <span>↓</span></a></div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.labImage} role="img" aria-label="Proceso de formulación cosmética en BPC Lab" />
            <div className={styles.visualCaption}><span>DESARROLLO Y PRODUCCIÓN</span><strong>Formulaciones exactas para líneas que quieren crecer.</strong></div>
          </div>
        </div>
      </section>

      <section className={styles.accesses} aria-labelledby="accesos-title">
        <div className={styles.sectionTop}><p className={styles.kicker}>BPC en un solo lugar</p><h2 id="accesos-title">Conecta por donde prefieras.</h2></div>
        <nav className={styles.socialStrip} aria-label="Activos digitales de BPC">{links.map((link) => <a className={styles.socialLink} href={link.href} target="_blank" rel="noreferrer" key={link.label}><SocialIcon name={link.icon} /><span>{link.label}</span><b aria-hidden="true">↗</b></a>)}</nav>
      </section>

      <section className={styles.accesses} aria-labelledby="instagram-title" style={{ background: "#e5f0f2" }}>
        <div className={styles.sectionTop}><p className={styles.kicker}>Desde el laboratorio</p><h2 id="instagram-title">Proceso real. Productos reales.</h2><p>Una muestra directa del trabajo, las categorías y los proyectos que BPC comparte.</p></div>
        <div className={styles.instagramGrid}>{instagramPosts.map((post) => <a key={post.id} href={`https://www.instagram.com/p/${post.id}/`} target="_blank" rel="noreferrer" style={{ position: "relative", minHeight: 360, overflow: "hidden", color: "#fff", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "end", padding: 20, background: "#062f5b" }}><Image src={post.image} alt={post.label} fill sizes="(max-width: 800px) 100vw, 25vw" style={{ objectFit: "cover", zIndex: 0 }} /><span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 30%,rgba(6,47,91,.82))", zIndex: 1 }} /><strong style={{ position: "relative", zIndex: 2, fontSize: 20, lineHeight: 1.05 }}>{post.label}</strong><small style={{ position: "relative", zIndex: 2, marginTop: 7 }}>{post.category} · Ver post ↗</small></a>)}</div>
        <a className={styles.primary} style={{ marginTop: 28 }} href="https://www.instagram.com/laboratoriobpc/" target="_blank" rel="noreferrer">Ver más publicaciones en Instagram ↗</a>
      </section>

      <section id="servicios" className={styles.services}>
        <div className={styles.sectionTop}><p className={styles.kicker}>Capacidad BPC</p><h2>Tu proyecto no empieza en una línea de producción. Empieza con una buena decisión.</h2></div>
        <div className={styles.servicesList}>{services.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><a href="#perfil">Explorar esta ruta <b>→</b></a></article>)}</div>
      </section>

      <section className={styles.production}>
        <div><p className={styles.kicker}>Capacidad de producción</p><h2>Cosmética que toma forma.</h2><p>Trabajamos con diferentes formas cosméticas para acompañar categorías y propuestas de producto con rigor técnico.</p></div>
        <div className={styles.capabilityCloud}>{capability.map((item, index) => <span key={item} style={{ "--i": index } as CSSProperties}>{item}</span>)}</div>
      </section>

      <section className={styles.process}>
        <p className={styles.kicker}>Una conversación con rumbo</p>
        <div className={styles.processGrid}><h2>Antes de cotizar, entendemos dónde está tu proyecto.</h2><ol><li><span>01</span><div><strong>Nos cuentas el reto</strong><p>Marca, categoría, objetivo y momento del proyecto.</p></div></li><li><span>02</span><div><strong>Identificamos la ruta</strong><p>Desarrollo, maquila, regulación o una conversación de alianza.</p></div></li><li><span>03</span><div><strong>Avanzamos con claridad</strong><p>El equipo responde desde la alternativa que mejor se ajusta.</p></div></li></ol></div>
      </section>

      <section id="perfil" className={styles.profile}>
        <div className={styles.profileIntro}><p className={styles.kicker}>Conversemos en serio</p><h2>Cuéntanos de tu proyecto.</h2><p>Completa este perfil breve. Así la próxima conversación empieza con contexto y no desde cero.</p><div className={styles.profileNote}><span>↗</span><p>Este espacio está pensado para emprendedores, marcas, distribuidores y aliados que ven una oportunidad real de trabajo conjunto.</p></div></div>
        <div className={styles.formWrap}><BpcLeadForm /></div>
      </section>

      <footer className={styles.footer}><a className={styles.brand} href="#inicio"><img src={BPC_LOGO_DATA_URI} alt="BPC Lab - Laboratorio de Buenas Prácticas Cosméticas" style={{ width: 160, height: "auto" }} /></a><p>Medellín, Colombia · <a href="mailto:compras@bpclab.co">compras@bpclab.co</a></p><p>© {new Date().getFullYear()} BPC Lab</p></footer>
    </main>
  );
}
