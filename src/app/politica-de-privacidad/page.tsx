// Basado en la Ley 1581 de 2012 y el Decreto 1377 de 2013 (protección de datos
// personales, Colombia). Pendiente: agendar revisión con abogado post-lanzamiento.

import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Política de tratamiento de datos personales",
  description:
    "Cómo RiBuzz recolecta, usa y protege los datos personales que compartes a través del sitio web.",
  path: "/politica-de-privacidad",
});

const sectionHeadingClassName =
  "mt-10 text-xl font-semibold tracking-tight text-[#E4DFF7] sm:text-2xl";
const paragraphClassName = "mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base";
const listClassName = "mt-3 space-y-2 text-sm leading-relaxed text-[#98A0B3] sm:text-base";

export default function PrivacyPolicyPage() {
  return (
    <section className="cv-auto py-20 sm:py-28">
      <Container className="max-w-3xl">
        <PillBadge>Legal</PillBadge>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#E4DFF7] sm:text-4xl">
          Política de tratamiento de datos personales
        </h1>
        <p className={paragraphClassName}>
          Última actualización: 14 de julio de 2026.
        </p>
        <p className={paragraphClassName}>
          Esta política describe cómo RiBuzz recolecta, usa, almacena y protege los datos
          personales que compartes al diligenciar formularios en este sitio web, en
          cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas que
          regulan la protección de datos personales en Colombia.
        </p>

        <h2 className={sectionHeadingClassName}>1. Responsable del tratamiento</h2>
        <p className={paragraphClassName}>
          RiBuzz es el responsable del tratamiento de los datos personales que recolecta a
          través de {SITE_CONFIG.url}. Puedes contactarnos para cualquier solicitud
          relacionada con tus datos personales a través de{" "}
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="underline decoration-white/30 underline-offset-2 hover:text-[#CEC6E0]"
          >
            {SITE_CONFIG.contactEmail}
          </a>
          .
        </p>

        <h2 className={sectionHeadingClassName}>2. Datos que recolectamos</h2>
        <p className={paragraphClassName}>
          Cuando completas nuestro formulario de diagnóstico u otros formularios del sitio,
          podemos recolectar: nombre, cargo, nombre de la empresa, correo electrónico, número
          de WhatsApp, sector, información sobre tu proceso comercial y contexto de negocio
          que decidas compartir. También registramos datos técnicos básicos (dirección IP,
          navegador, página de referencia) con fines de seguridad y prevención de fraude.
        </p>

        <h2 className={sectionHeadingClassName}>3. Finalidad del tratamiento</h2>
        <p className={paragraphClassName}>Usamos tus datos personales para:</p>
        <ul className={listClassName}>
          <li>Evaluar si existe encaje real entre tu empresa y los servicios de RiBuzz.</li>
          <li>Contactarte por correo o WhatsApp para coordinar la llamada de introducción.</li>
          <li>Agendar y confirmar reuniones a través de nuestra herramienta de calendario.</li>
          <li>Prevenir fraude, spam y uso indebido de nuestros formularios.</li>
          <li>Cumplir obligaciones legales o regulatorias cuando aplique.</li>
        </ul>
        <p className={paragraphClassName}>
          No usamos tus datos personales para fines distintos a los aquí descritos, ni los
          vendemos a terceros.
        </p>

        <h2 className={sectionHeadingClassName}>4. Con quién compartimos tus datos</h2>
        <p className={paragraphClassName}>
          Algunos datos se procesan a través de proveedores tecnológicos que actúan como
          encargados del tratamiento, únicamente para operar el sitio y prestar el servicio:
          almacenamiento de solicitudes (Supabase), agendamiento de llamadas (cal.com) y
          verificación anti-spam (Cloudflare Turnstile). Estos proveedores procesan los datos
          por instrucción nuestra y no están autorizados a usarlos para fines propios.
        </p>

        <h2 className={sectionHeadingClassName}>5. Cómo protegemos tus datos</h2>
        <p className={paragraphClassName}>
          Los campos más sensibles de tu solicitud (correo, WhatsApp y contexto de negocio)
          se almacenan cifrados. El acceso a la información está restringido a las personas
          de RiBuzz que necesitan revisarla para dar seguimiento a tu solicitud.
        </p>

        <h2 className={sectionHeadingClassName}>6. Tus derechos como titular</h2>
        <p className={paragraphClassName}>Como titular de tus datos personales, tienes derecho a:</p>
        <ul className={listClassName}>
          <li>Conocer, actualizar y rectificar tus datos personales.</li>
          <li>Solicitar prueba de la autorización otorgada para el tratamiento de tus datos.</li>
          <li>Ser informado sobre el uso que se le ha dado a tus datos personales.</li>
          <li>
            Revocar la autorización y/o solicitar la supresión de tus datos, cuando no exista
            un deber legal o contractual que impida eliminarlos.
          </li>
          <li>Acceder de forma gratuita a tus datos personales.</li>
          <li>
            Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por
            infracciones a la normativa de protección de datos.
          </li>
        </ul>
        <p className={paragraphClassName}>
          Para ejercer cualquiera de estos derechos, escríbenos a{" "}
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="underline decoration-white/30 underline-offset-2 hover:text-[#CEC6E0]"
          >
            {SITE_CONFIG.contactEmail}
          </a>{" "}
          describiendo tu solicitud. Responderemos dentro de los términos que establece la
          ley.
        </p>

        <h2 className={sectionHeadingClassName}>7. Vigencia</h2>
        <p className={paragraphClassName}>
          Esta política rige desde su fecha de publicación y permanecerá vigente mientras
          RiBuzz trate datos personales de sus usuarios. Podemos actualizarla cuando cambien
          nuestras prácticas o la normativa aplicable; la fecha de última actualización
          siempre estará indicada al inicio de este documento.
        </p>
      </Container>
    </section>
  );
}
