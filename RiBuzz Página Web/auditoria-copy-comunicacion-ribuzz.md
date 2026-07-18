# Auditoría de copy y comunicación — RiBuzz.com

Fecha: 2026-07-15. Cubre Home, Cómo trabajamos, Sobre RiBuzz, Diagnóstico, Contacto y Footer/Navbar — el copy que un visitante nuevo recorre antes de agendar. No cubre las landings de marca de clientes (Kynd, Neomech, hoteles, etc.).

Esta auditoría es distinta a la de contenido/oferta del 2026-07-14. Aquella miraba higiene técnica (contenido huérfano, precios, erratas). Esta mira algo más de fondo: **por qué el copy, aunque técnicamente está ahí, no se siente como que comunica nada.**

---

## 1. Diagnóstico general

El sitio no tiene un problema de *falta* de contenido específico. Existe: el `fitChecklist`/`nonFitChecklist` es concreto, los testimonios nombran cliente y resultado real, el `StageTabs` de paquetes tiene precios y alcance por etapa, el `PhaseStepper` de metodología tiene descripción + foco + entregable por fase. Ese contenido es bueno y no hay que tocarlo.

El problema real es de **relación señal-ruido**: la misma frase abstracta sobre "sistema", "estrategia + ejecución + tecnología" y "consistencia" se repite tantas veces, con tan poca variación, en tantas páginas distintas, que deja de leerse como información y pasa a leerse como papel tapiz. El contenido específico y diferenciado (el que sí demuestra algo) está escondido detrás de clics — un tab o un nodo a la vez — mientras la frase genérica está siempre visible, sin esfuerzo, arriba de todo. El resultado es que alguien que solo escanea títulos (que es como se lee la mayoría de un sitio) se lleva la parte menos diferenciada de la comunicación y se pierde la parte que sí prueba algo.

---

## 2. Problema raíz (con evidencia)

### 2.1 — La frase-comodín "estrategia + ejecución comercial + tecnología en un solo sistema" se repite casi sin variar

Aparece, casi palabra por palabra, en tres lugares distintos que deberían decir cosas distintas:

- **Home, hero:** *"Capta más clientes, vende con estructura y crece con consistencia. Integramos estrategia, ejecución comercial y tecnología en un solo sistema."*
- **Sobre RiBuzz, hero:** *"RiBuzz conecta estrategia, ejecución comercial y tecnología en un solo sistema, para que tu negocio crezca con consistencia — no a punta de intuición ni de suerte."*
- **Imagen Open Graph** (lo que se ve al compartir el link en WhatsApp/LinkedIn): *"Estrategia, ejecución comercial y tecnología en un solo sistema para crecer con estructura."*

Además, "sistema comercial" aparece 8 veces y "consistencia" 7 veces en el copy de las páginas core. Ninguna repetición individual es un error — el problema es que el **hero de Home y el hero de About dicen básicamente lo mismo con otro orden de palabras**, cuando son los dos lugares con más peso de toda la comunicación (lo primero que ve cualquiera). Ninguno de los dos aterriza la idea en algo tangible; los dos se quedan en el mismo nivel de abstracción.

### 2.2 — Misión, Visión y "Así somos" son lenguaje institucional genérico, no diferenciado

De `content.ts`:

- *"Directos — Nombramos el problema como es, sin rodeos ni palabras bonitas que no dicen nada."*
- *"Transparentes — Cada decisión que tomamos contigo se justifica con datos y contexto — nunca con promesas vacías."*
- *"Exigentes, contigo y con nosotros..."*
- *"Obsesionados con el impacto real..."*

El problema no es que sean falsos — es que **cualquier consultora o agencia del planeta afirma exactamente esto de sí misma**. "Somos directos", "somos transparentes" no diferencia ni prueba nada; es la clase de copy que las propias reglas de RiBuzz para clientes prohíben explícitamente ("no entregues respuestas... bonitas pero vacías"). Aplicado a la propia página, es el mismo error.

La Misión ("Ayudarte a crear y mejorar tu sistema comercial para que crezca de forma sostenible, mejorando los indicadores que más le importan a tu negocio") también es un enunciado que podría llevar el logo de cualquier consultora de crecimiento.

### 2.3 — El tagline de Footer y Contacto contradice el posicionamiento central del resto del sitio

Este es el hallazgo más importante porque **aparece en todas las páginas** (el footer es global) y en la página de Contacto:

- **Footer:** *"Diseñamos soluciones comerciales, visuales y tecnológicas para marcas que quieren crecer con más claridad, presencia y herramientas útiles."*
- **Contacto:** *"Diseñamos soluciones comerciales, visuales y digitales para marcas que quieren crecer con más claridad, mejor presencia y herramientas útiles."*

Compara esto con la propia FAQ del sitio (`contactFaqs`): *"¿RiBuzz es una agencia de marketing? No. El marketing puede ser parte de la solución, pero RiBuzz interviene el sistema comercial completo del negocio y no solo ejecuta piezas o campañas."*

El footer describe exactamente lo que la FAQ dice que RiBuzz **no** es: un proveedor de "soluciones visuales" que ayuda con "presencia". Es lenguaje de agencia de diseño/marketing genérica, no de sistema de crecimiento. Como el footer se ve en cada página, es literalmente lo último que lee alguien antes de irse — y contradice todo el trabajo de posicionamiento hecho en Home, Services y el bloque Diferencial.

### 2.4 — Los nombres de fase, en el teaser de Home, no llevan ningún gancho diferenciador

En Home, el teaser de metodología muestra solo los sustantivos: *"Diagnóstico", "Diseño", "Implementación", "Acompañamiento"*. Son nombres funcionales pero genéricos — son literalmente los mismos cuatro sustantivos que usaría cualquier consultora de procesos. El contenido que sí diferencia (qué se revisa en el diagnóstico, qué entrega cada fase) existe y es bueno — pero vive solo en `/services`, dentro del `PhaseStepper`, un nodo a la vez. Alguien que no da clic en cada fase de Services nunca ve la parte específica.

### 2.5 — Lo genérico está siempre visible; lo específico está escondido detrás de interacción

Patrón que se repite en 2.1–2.4: el copy repetido y abstracto (hero, footer, misión/visión, nombres de fase) no requiere ningún clic — se lee de arrastre. El copy específico y comprobable (precios por etapa, foco + entregable por fase, testimonios con nombre de cliente) vive detrás de un tab, un nodo del stepper, o un scroll largo. La jerarquía de visibilidad está invertida: lo que menos comunica es lo más visible, y lo que más prueba es lo más escondido.

---

## 3. Prioridades

| Prioridad | Ítem | Por qué |
|---|---|---|
| P0 | Reescribir tagline de Footer y Contacto | Es global, contradice directamente el posicionamiento "no somos una agencia" que el resto del sitio construye |
| P0 | Diferenciar los hero de Home y About (hoy dicen casi lo mismo) | Son los dos bloques de mayor peso de toda la comunicación del sitio |
| P1 | Reescribir Misión/Visión/Así somos con lenguaje comprobable, no adjetivos genéricos | Rompe la propia regla de RiBuzz de no vender humo, aplicada a sí misma |
| P1 | Anclar el teaser de fases en Home con el gancho específico de cada fase, no solo el nombre | Hoy el 90% de la gente que ve Home nunca ve qué hace diferente cada fase |
| P2 | Revisar variación de copy en botones secundarios repetidos | Menor: en un CTA la repetición es aceptable (predictibilidad), pero vale revisar 2-3 casos puntuales |

---

## 4. Recomendación — ejemplos concretos (antes / después)

No reescribí el sitio todavía; esto es una muestra de dirección para calibrar contigo antes de ejecutar a escala.

**A. Footer / Contacto**

Antes: *"Diseñamos soluciones comerciales, visuales y tecnológicas para marcas que quieren crecer con más claridad, presencia y herramientas útiles."*

Después (propuesta): *"RiBuzz es el sistema que conecta estrategia, comunicación y tecnología para que tu negocio crezca sin depender de una sola persona. No hacemos piezas sueltas — construimos la estructura completa."*

**B. Hero de Home** (hoy casi idéntico al de About)

Antes: *"Capta más clientes, vende con estructura y crece con consistencia. Integramos estrategia, ejecución comercial y tecnología en un solo sistema."*

Después (propuesta — se queda con el dolor/tensión, deja que About se quede con la explicación del sistema): *"Tu empresa ya vende. El problema es que cada venta depende de una persona y del mes. RiBuzz construye el sistema que hace que vender deje de ser una lotería."*

**C. "Así somos" (About)** — mostrar en vez de afirmar

Antes: *"Directos — Nombramos el problema como es, sin rodeos ni palabras bonitas que no dicen nada."*

Después (propuesta, con comportamiento comprobable en vez de adjetivo): *"Si en la llamada de introducción no hay fit real, te lo decimos ahí mismo. No alargamos la conversación para cerrar un contrato."*

**D. Teaser de fases en Home**

Antes (solo nombre): *"01 Diagnóstico"*

Después (nombre + gancho, tomado del `outcome` de cada fase que ya existe en `content.ts`): *"01 Diagnóstico — dónde se están perdiendo tus clientes"*

---

## 5. Siguiente paso

Con esta dirección aprobada (o ajustada), puedo ejecutar la reescritura en el sitio: empezando por los P0 (footer/contacto y los dos hero), después Misión/Visión/Así somos y el teaser de fases. ¿Ajusto el tono de los ejemplos antes de que entre a página, o avanzo ya con esta dirección?
