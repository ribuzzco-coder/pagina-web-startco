# Auditoría de contenido, oferta y modelo de negocio — RiBuzz.com

Fecha: 2026-07-14. Cubre Home, Servicios, Sobre RiBuzz, Diagnóstico, Contacto, Regalos, Tarjetas NFC y Landings. No incluye páginas de marca de clientes (Kynd, Neomech, hoteles, etc.), que son entregables propios de esos clientes, no comunicación de la oferta de RiBuzz.

---

## 1. Diagnóstico general

La propuesta de valor central es consistente entre Home, About y Servicios: RiBuzz vende un **sistema comercial** (estrategia + ejecución + tecnología) para empresas en etapa temprana que ya venden pero dependen del fundador, tienen captación inconsistente o no dan seguimiento. Esa narrativa no se contradice en ningún punto del sitio — es la fortaleza principal.

Los problemas reales no están en el mensaje central, sino en tres capas por debajo: **contenido duplicado/huérfano en `content.ts`** que aumenta el riesgo de editar la copia equivocada, **opacidad de precio** en 4 de los 5 paquetes, y **un puñado de erratas y una frase que sobre-promete** (`garantiza`).

---

## 2. Fortalezas — no tocar

- Narrativa de dolor → sistema → prueba → filtro → oferta → FAQ → CTA se repite de forma consistente en Home y Services, con las secciones en el orden correcto para un embudo (confianza antes de pedir el CTA, filtro de ICP antes de precio).
- Testimonios (`testimonial-shuffle.tsx`) son específicos y verificables: nombran cliente, rubro y qué se hizo exactamente (Neomech, Facial Fitness, TerraTravel). No hay lenguaje genérico tipo "aumentamos ventas 300%".
- El trust signal ("10 clientes atendidos, 4 recurrentes") ya está corregido con datos reales de esta sesión.
- El filtro `fitChecklist` / `nonFitChecklist` es honesto y específico — nombra explícitamente quién NO debería contratar RiBuzz, algo que muchas agencias evitan decir.
- FAQ ya deduplicado entre Home/Services/Diagnóstico (sesión anterior).

---

## 3. Problema raíz #1 — Contenido duplicado y huérfano en `content.ts`

`src/lib/content.ts` tiene bloques que **nunca se renderizan en ninguna página**, y un caso de dos versiones distintas del mismo contenido:

- **`homePainTransitions`** existe DOS veces con textos distintos: una en `content.ts` (líneas 57-90) que no se importa en ningún lado, y otra definida directamente dentro de `src/app/page.tsx` (líneas 33-66) con redacción diferente pero el mismo tema. Si alguien edita la de `content.ts` pensando que es la que se ve en el sitio, el cambio no aparece — ya pasó una vez en esta sesión con `homeFaqs`/`contactFaqs`.
- **`homePainPoints`**, **`servicePreview`**, **`solutionSequence`** y **`methodologyBenefits`** están exportados pero no se usan en ninguna página ni componente (confirmado por grep). Son restos de una versión anterior de la arquitectura del sitio.

**Por qué importa:** no es un problema visible para el usuario final, pero sí un riesgo operativo — cuando tú o alguien más edite copy más adelante, hay 4-5 bloques "fantasma" que pueden parecer la fuente de verdad y no lo son.

**Recomendación:** eliminar los exports huérfanos, o mover la versión de `homePainTransitions` que sí vive en `page.tsx` hacia `content.ts` (reemplazando la huérfana) para que haya una sola fuente de verdad, consistente con cómo ya funciona el resto del contenido del sitio.

---

## 4. Problema raíz #2 — Opacidad de precio en 4 de 5 paquetes

Solo **Fundamentos** tiene un número explícito ("$500.000 COP/mes, tarifa de lanzamiento"). Validación, Tracción, Sistema y Expansión describen el cobro solo en términos relativos ("más horas dedicadas", "según alcance", "a definir según alcance"). Un visitante que compara los 5 paquetes en la tabla de tabs solo tiene un ancla de precio real.

Además, el **fee por cumplimiento de hitos** se menciona en al menos 3 lugares (paquetes, FAQ de Servicios, FAQ de Home) y en los tres casos se aclara que "todavía se está formalizando" / "se termina de definir contigo". Repetir tres veces que una parte del modelo de cobro no está terminada, en vez de mencionarlo una sola vez, puede generar más duda que la que resuelve — especialmente para alguien evaluando si vale la pena completar el formulario de diagnóstico.

**Esto ya se identificó y se decidió suavizar intencionalmente en una sesión anterior (tarea "Suavizar copy del fee por hitos")** — lo marco aquí no como error sino como algo que vale la pena revisar de nuevo ahora que el sitio está por salir a producción: ¿sigue siendo la decisión correcta, o ya hay suficiente definido internamente para dar un rango en al menos 2-3 paquetes más?

---

## 5. Problema raíz #3 — Erratas y una frase que sobre-promete

- `content.ts` línea ~300: "a medida **qué** se usa" → debería ser "que" (typo con tilde).
- `content.ts` (servicePreview, aunque huérfano): "no quieren **qué** el sistema se quede" → mismo typo.
- `content.ts` línea ~53: "Estancamiento **invisible a ciegas**" — redundante (invisible + a ciegas dicen lo mismo dos veces), suena a error de edición más que a intención estilística.
- `servicePreview` (huérfano) usa "Growth Partner" en inglés en medio de copy en español — inconsistente con el resto del sitio, que es 100% español.
- Home, sección "Cómo lo hacemos": *"Nuestro método de cuatro fases **garantiza** que cada decisión se base en datos y no en suposiciones."* — "garantiza" es una palabra fuerte y absoluta para un método que en la fase Fundamentos es fundamentalmente diagnóstico cualitativo, no un proceso basado en datos duros. Es el único lugar del sitio donde el lenguaje se aleja del tono medido que domina el resto de la copy (que explícitamente evita "vender humo"). Vale la pena cambiar "garantiza" por algo como "asegura que" o "evita que" — mismo mensaje, sin la promesa absoluta.

---

## 6. Lo que falta para terminar de subir todo (checklist técnico)

Ya resuelto en esta sesión: dominio (`ribuzz.com`), notificación de leads vía Sheets, checkbox de consentimiento de datos + política de privacidad (borrador, pendiente de que la revise un abogado).

Pendiente antes de considerar el sitio 100% listo end-to-end:

1. **Aplicar la migración de Supabase** `20260714120000_diagnostic_consent.sql` en producción — sin esto, el formulario va a fallar al intentar guardar `data_consent_at`.
2. **Configurar `DIAGNOSTIC_SHEETS_WEBHOOK_URL` en el hosting de producción** (Vercel u otro) — ya funciona en local, falta replicarlo en el entorno real.
3. **Analítica**: no hay GA4, Meta Pixel ni GTM instalado. Sin esto no hay forma de medir el embudo completo una vez el sitio esté en producción y menos aún si en algún momento se invierte en adquisición pagada (que ya está en el roadmap de Servicios).
4. **`sitemap.ts` y `robots.ts`**: Next 16 los soporta nativamente en `src/app` y hoy no existen — Google no tiene un mapa claro del sitio.
5. **Imagen Open Graph real**: `ogImagePlaceholder` sigue siendo un placeholder genérico — cuando alguien comparte el link en WhatsApp o LinkedIn no se ve la marca real.
6. **`diagnosisFormUrl`** en `site-config.ts` sigue apuntando a un Google Form que ya no se usa (el flujo real es el formulario interno) — código muerto que puede confundir a futuro.
7. Peso de `public/` (136MB, varios PNG de 1-2MB y un video de 13MB) — impacta el Core Web Vitals en móvil.

---

## 7. Matriz de prioridad

| Prioridad | Ítem | Por qué |
|---|---|---|
| P0 | Migración Supabase + `DIAGNOSTIC_SHEETS_WEBHOOK_URL` en producción | Sin esto el formulario de diagnóstico se rompe o los leads no llegan a ningún lado en producción |
| P0 | Quitar "garantiza" del copy de Home | Único lugar del sitio con una promesa absoluta que no se sostiene |
| P1 | Analítica (GA4/Meta Pixel) | Necesario antes de invertir en adquisición pagada |
| P1 | Revisar si dar precio en más paquetes | Reduce fricción para quien compara etapas |
| P1 | Limpiar contenido huérfano/duplicado en `content.ts` | Riesgo operativo al editar copy a futuro |
| P2 | Corregir typos ("qué"/"que", redundancias) | Pulido, no bloquea |
| P2 | `sitemap.ts` / `robots.ts` / OG image real | SEO y presentación al compartir, no bloquea el uso del sitio |
| P2 | `diagnosisFormUrl` huérfano, peso de `public/` | Limpieza técnica |

---

## 8. Siguiente paso

Sugiero este orden: primero P0 (son rápidos y de riesgo real), después decides si quieres que ataque la limpieza de `content.ts` o la revisión de precios en los paquetes — ambos requieren tu criterio de negocio, no son solo ejecución.
