# Product backlog — sitio web RiBuzz

Fecha: 18 de noviembre de 2026  
Estado: propuesta para priorización; no equivale a requisitos aprobados ni a una auditoría final.  
Producto: sitio institucional y comercial de RiBuzz como growth partner digital de marcas.

## 1. Resultado buscado

Construir un activo digital que permita a una persona que no conoce RiBuzz entender qué hace, para quién trabaja, cómo interviene, qué ha construido, qué puede esperar y cuál es el siguiente paso apropiado. La experiencia debe servir tanto a una persona lista para conversar como a quien todavía necesita entender su problema.

La web debe conectar posicionamiento, evidencia y conversión sin presentar RiBuzz IA como el producto completo de la empresa. La plataforma, cuando corresponda, se presenta como herramienta de apoyo a un acompañamiento que integra diagnóstico, estrategia, ejecución y seguimiento. No se deben presentar pantallas o capacidades previstas como funcionalidad ya disponible sin verificación.

## 2. Alcance y límites

- En alcance: inicio, cómo trabajamos, sobre RiBuzz, diagnóstico, contacto, portafolio corporativo, recursos, ofertas propias como landings y NFC, navegación, footer, SEO, medición, accesibilidad y operación del sitio.
- Fuera de alcance: modificar, migrar, publicar o rediseñar las landings y activos propios de clientes. Pueden enlazarse o mostrarse como referencias cuando su uso esté autorizado y el alcance de RiBuzz esté documentado.
- No modificar flujos de administración, integraciones o formularios existentes sin inventario, pruebas y un plan de compatibilidad.
- No inventar resultados, testimonios, indicadores, clientes, precios, funcionalidades ni disponibilidad. Distinguir proyecto terminado, piloto, propuesta y trabajo en curso; no mostrar citas parafraseadas como textuales.
- Las auditorías locales de julio son contexto histórico, no fuente definitiva del modelo actual. El manual de Drive de octubre describe el método de proyectos web; hay que validar su aplicación a toda la oferta. El Figma consultado representa RiBuzz IA, por lo que sus patrones visuales son referencia, no especificación completa del sitio corporativo.

## 3. Usuarios y necesidades

| Perfil | Pregunta principal | Decisión que la página debe facilitar |
| --- | --- | --- |
| Fundador/a de marca con ventas digitales | ¿Qué está frenando el crecimiento y quién puede ayudarme? | Identificar síntomas y decidir si aplicar. |
| Responsable de marketing/comercial | ¿Qué ejecutan, cómo trabajan con mi equipo y qué entregan? | Evaluar alcance, colaboración y evidencia. |
| Marca que necesita un activo puntual | ¿Pueden ayudarme con una web, landing o experiencia concreta? | Explorar el servicio adecuado y solicitar orientación. |
| Visitante que aún investiga | ¿Qué puedo hacer antes de contratar? | Acceder a recursos útiles y volver cuando tenga contexto. |
| Aliado o referente | ¿A quién debería recomendar RiBuzz? | Entender el perfil de cliente y compartir una ruta clara. |

## 4. Embudo y arquitectura propuesta

**Recorrido principal:** descubrimiento → identificación del problema → propuesta y entregables → evidencia → forma de trabajo y encaje → aplicación → ruta de seguimiento apropiada.

| Ruta | Función | Acción principal |
| --- | --- | --- |
| `/` | Explicar, demostrar y orientar. | Completar aplicación. |
| `/services` | Aterrizar modalidades, capacidades, entregables, proceso y condiciones. | Completar aplicación. |
| `/about` | Dar contexto humano, criterio, trayectoria y forma de colaborar. | Conocer el trabajo o aplicar. |
| `/diagnostico` | Explicar el filtro y recoger información con expectativas precisas. | Enviar aplicación y ver siguiente paso. |
| `/portafolio-comercial` | Mostrar trabajo por problema, intervención, evidencia y estado. | Explorar un caso o aplicar. |
| `/regalos` | Ofrecer recursos relevantes y nutrir a quien aún explora. | Acceder a un recurso. |
| `/contacto` | Orientar por intención: aplicación, contacto o recursos. | Elegir ruta adecuada. |
| `/landings`, `/tarjetas-nfc` | Explicar activos puntuales, su utilidad y relación con la oferta principal. | Solicitar información sobre el activo. |
| `/politica-de-privacidad` | Explicar tratamiento de datos y canales de derechos. | Consultar política/contactar. |

Conservar URLs existentes y redirecciones necesarias. Cualquier cambio de arquitectura debe verificarse contra enlaces internos, analítica y tráfico existente.

## 5. Métricas y decisiones pendientes

**Métrica principal propuesta:** aplicaciones cualificadas recibidas, definidas de común acuerdo con el negocio. Métricas de apoyo: tasa de inicio y finalización del formulario, ruta posterior, clics a casos y recursos, interacciones de contacto, visitas orgánicas relevantes y calidad de leads. Métricas de seguridad: errores de envío, abandono por paso, rendimiento y accesibilidad. Registrar línea base y volumen antes de establecer objetivos; no prometer una mejora porcentual sin datos.

**Decisiones de negocio necesarias antes de publicar claims:** cliente ideal y exclusiones; oferta y entregables vigentes; modalidad, precios y tiempos verificables; rol real y disponibilidad de RiBuzz IA; casos autorizados y resultados con fuente; citas aprobadas; responsables del formulario y seguimiento; tratamiento legal y herramientas de medición. Mientras no estén resueltas, diseñar estructuras y marcar contenido pendiente.

## 6. Priorización y estados

- **P0:** imprescindible para una versión confiable y funcional.
- **P1:** fortalece comprensión, prueba y conversión en el primer lanzamiento.
- **P2:** mejora y amplía el activo después de validar la base.
- **P3:** exploración posterior con hipótesis y datos.

Estados sugeridos: pendiente, listo para definir, listo para diseño, en desarrollo, en revisión, bloqueado, implementado y verificado. Cada ítem debe tener responsable, evidencia, dependencia y fecha de revisión; implementado no significa verificado. Los tamaños S/M/L son estimaciones relativas que deben refinarse al descomponer el trabajo.

## 7. Backlog priorizado

### Épica A — Investigación, oferta y contenido

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| A01 | P0 / M | Como equipo, quiero una fuente de verdad de la oferta vigente. | Definir audiencias, problemas, propuesta, capacidades, modalidades, entregables, exclusiones y estado de cada oferta; responsable y fecha de validación. | Decisión de negocio. |
| A02 | P0 / M | Como visitante, quiero entender qué compro. | Cada modalidad comunica para quién es, problema, alcance, entregables, colaboración y siguiente paso; precios y tiempos solo si están aprobados. | A01. |
| A03 | P0 / M | Como equipo, quiero inventariar fuentes y claims. | Matriz con fuente, fecha, responsable y estado: verificado, declarado, inferido o pendiente; prohibir claims no aprobados. | Drive, proyecto, clientes. |
| A04 | P1 / M | Como visitante, quiero reconocer si RiBuzz encaja conmigo. | Situaciones concretas de fit/no fit, sin filtrar por datos inventados; accesibles desde home y oferta. | A01. |
| A05 | P1 / M | Como editor, quiero una guía de voz y mensajes. | Mensaje madre, audiencia, tono, vocabulario, jerarquía de CTA, ejemplos y claims prohibidos; evitar repetición de conceptos abstractos. | A01–A03. |
| A06 | P1 / M | Como equipo, quiero revisar el contenido de Drive por relevancia. | Seleccionar fuentes actuales de estrategia, portafolio y ejecución; registrar conclusiones y discrepancias; no publicar información privada. | Accesos y A03. |

### Épica B — Home y embudo

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| B01 | P0 / M | Como visitante nuevo, quiero entender la oferta en la primera pantalla. | En móvil y escritorio responde qué es RiBuzz, para quién, beneficio y CTA; no depende de animación o imagen para comprenderse. | A01, A05, diseño. |
| B02 | P0 / M | Como fundador, quiero reconocer mis síntomas y oportunidades. | Mostrar situaciones concretas y una explicación visual de cómo oferta, demanda, conversión y seguimiento se conectan; sin prometer causalidad. | A01. |
| B03 | P0 / M | Como prospecto, quiero ver qué se hace y qué recibo. | Mapa visual de capacidades con ejemplos de entregables y alcance condicionado al diagnóstico; enlace a oferta detallada. | A02. |
| B04 | P1 / L | Como prospecto, quiero ver trabajo real antes de decidir. | Mostrar proyectos autorizados con marca, sector, problema, intervención y evidencia; diferenciar resultados verificados de entregables; enlace a portafolio. | E01–E03. |
| B05 | P1 / M | Como visitante, quiero entender el proceso de colaboración. | Flujo diagnóstico → dirección → implementación → seguimiento; explicar participación del cliente y decisiones por fase, sin sugerir pasos automáticos inexistentes. | A01, C02. |
| B06 | P1 / S | Como prospecto, quiero entender si soy buen candidato. | Sección de encaje visible, respetuosa y concreta, con ruta alternativa para quien aún no está listo. | A04, G01. |
| B07 | P1 / S | Como visitante, quiero resolver dudas sin buscar en otras páginas. | FAQ basada en objeciones reales: alcance, inversión, plazos, proceso y siguiente paso; respuestas verificadas. | A02, A03. |
| B08 | P0 / S | Como visitante, quiero saber qué ocurre al aplicar. | CTA primario consistente; explicar aplicación y sus posibles salidas según el comportamiento real; no prometer agenda automática a todos. | F01. |
| B09 | P1 / M | Como visitante, quiero una experiencia visual que ayude a entender. | Utilizar diagramas, iconografía coherente, piezas reales y contraste; evitar duplicación ornamental y texto ilegible en imágenes. | D01–D04. |

### Épica C — Páginas comerciales e institucionales

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| C01 | P0 / L | Como comprador, quiero comparar formas de trabajar. | `/services` muestra modalidades, encaje, ejemplos concretos, alcance, responsabilidades y CTA; precio, tiempos y condiciones solo con aprobación. | A01–A02. |
| C02 | P1 / M | Como cliente potencial, quiero saber cómo se gestiona el proyecto. | Fases con actividades, entregables, decisiones, colaboración y revisiones; distinción entre web/CRO y otras intervenciones. | A06. |
| C03 | P1 / M | Como visitante, quiero conocer a las personas y criterio detrás de RiBuzz. | `/about` incluye historia verificable, responsables autorizados, forma de decidir, experiencia y vínculos a casos; evitar biografías inventadas. | A03, E01. |
| C04 | P1 / M | Como visitante, quiero una ruta de contacto adecuada. | `/contacto` separa aplicación, solución puntual, recursos y contacto directo; cada enlace funciona y comunica expectativa. | A01, F01. |
| C05 | P1 / M | Como interesado en un activo puntual, quiero saber qué incluye. | `/landings` y `/tarjetas-nfc` aclaran uso, entregables, requisitos, ejemplos autorizados, condiciones y relación con la oferta principal. | A02, E01. |
| C06 | P1 / M | Como visitante, quiero explorar trabajos en una página dedicada. | Portafolio accesible, filtros solo si son útiles, fichas y enlaces verificables; preservar experiencias de clientes. | E01–E03. |
| C07 | P1 / S | Como usuario, quiero navegar sin confusión. | Navbar y footer muestran jerarquía y CTA coherentes, estados activos legibles, menú móvil accesible y enlaces operativos. | Arquitectura aprobada. |
| C08 | P2 / M | Como visitante de una URL antigua, quiero encontrar el contenido correcto. | Inventario de rutas, redirecciones permanentes justificadas, 404 útil y ausencia de enlaces rotos. | Inventario técnico. |

### Épica D — Diseño y experiencia

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| D01 | P0 / M | Como equipo, quiero un sistema visual corporativo derivado de Figma. | Documentar tokens de color, tipografía, espaciado, radios, sombras y breakpoints; separar lo extraído de lo adaptado; probar contraste. | Figma, A05. |
| D02 | P0 / L | Como visitante, quiero componentes coherentes. | Diseñar/implementar botones, navegación, formularios, tarjetas, acordeones, etiquetas y estados; foco, hover, error, vacío y carga documentados. | D01. |
| D03 | P1 / L | Como visitante, quiero entender relaciones y procesos visualmente. | Diagramas y flujos tienen etiquetas reales, lectura móvil y alternativa textual; no son decoración ni información ficticia. | A01, C02. |
| D04 | P1 / L | Como visitante, quiero ver el trabajo de RiBuzz. | Seleccionar y optimizar capturas, logos y medios autorizados; mantener proporción, alt útil, atribución y contexto de cada proyecto. | E01–E03. |
| D05 | P1 / M | Como usuario móvil, quiero navegar sin obstáculos. | Revisar 390, 768 y 1280–1440 px; sin desbordamiento, controles utilizables y jerarquía consistente. | D02–D04. |
| D06 | P1 / M | Como usuario sensible al movimiento, quiero controlar la experiencia. | Movimiento aporta significado, no bloquea contenido; respetar `prefers-reduced-motion`, evitar ciclos innecesarios y verificar teclado. | D02. |
| D07 | P2 / M | Como editor, quiero mantener consistencia. | Guía de uso con ejemplos, tokens y componentes; reglas de imágenes y contenido para nuevas páginas. | D01–D06. |

### Épica E — Casos, confianza y prueba

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| E01 | P0 / M | Como equipo, quiero verificar qué proyectos puedo mostrar. | Inventario de marcas, relación, alcance, estado, fuentes, permisos de uso de nombre/logo/captura y restricciones; no confundir propuestas con trabajos entregados. | Archivos y confirmación. |
| E02 | P1 / L | Como visitante, quiero evaluar casos con contexto. | Para cada caso aprobado: situación, objetivo, intervención, entregables, evidencia y aprendizaje o resultado verificable; sin causalidad no sustentada. | E01. |
| E03 | P1 / M | Como visitante, quiero una presentación visual de los trabajos. | Medios reales legibles en móvil; cada muestra explica qué hizo RiBuzz; enlaces se prueban sin editar páginas de clientes. | E01–E02. |
| E04 | P1 / M | Como visitante, quiero confiar en las citas y cifras. | Citas textuales y métricas tienen aprobación y fuente; paráfrasis se presentan como descripción editorial, no como testimonio entre comillas. | E01. |
| E05 | P2 / M | Como equipo, quiero mantener el portafolio vigente. | Responsable, periodicidad, fecha de actualización y procedimiento de retirada o corrección de activos. | E01–E04. |

### Épica F — Aplicación, conversión y seguimiento

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| F01 | P0 / M | Como prospecto, quiero saber qué ocurre tras enviar. | Verificar código y rutas reales: agenda cuando corresponda, recursos o seguimiento; texto consistente en hero, CTA y confirmaciones. | Inspección del flujo. |
| F02 | P0 / L | Como prospecto, quiero completar la aplicación sin perder información. | Probar validaciones, navegación, errores, éxito, consentimiento, móvil y teclado; no alterar reglas de calificación sin aprobación. | F01. |
| F03 | P0 / M | Como equipo, quiero recibir solicitudes. | Probar de extremo a extremo en entorno seguro: persistencia, notificación/sincronización, errores y recuperación; no enviar datos reales de prueba sin control. | Configuración y acceso. |
| F04 | P1 / M | Como usuario, quiero saber por qué se piden datos. | Microcopy para presupuesto, autoridad, privacidad y tiempo estimado verificado; campos y consentimiento coherentes con el tratamiento. | F01, H01. |
| F05 | P1 / M | Como equipo, quiero dar seguimiento a cada ruta. | Definir responsable, tiempos internos, estados y seguimiento para agenda, recursos y leads no listos; solo automatizar tras aprobación. | F01, negocio. |
| F06 | P2 / M | Como equipo, quiero mejorar el formulario con evidencia. | Identificar abandono por etapa y formular hipótesis; cambios se evalúan contra calidad y no solo cantidad. | I02, línea base. |

### Épica G — Recursos y nutrición

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| G01 | P1 / M | Como visitante que aún explora, quiero acceder a ayuda útil. | `/regalos` describe contenido y utilidad antes de cualquier interacción; descarga accesible y ruta de regreso al diagnóstico. | Revisión de recursos. |
| G02 | P1 / M | Como equipo, quiero que los recursos respondan a necesidades reales. | Inventario, actualización, derechos, versión, objetivo y relación con etapa del prospecto; retirar promesas desactualizadas. | A06. |
| G03 | P2 / M | Como visitante, quiero recibir seguimiento solo si lo solicito. | Formularios y comunicaciones explican finalidad y consentimiento; integrar únicamente con proveedor autorizado. | H01, F05. |

### Épica H — Privacidad, accesibilidad y confianza

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| H01 | P0 / M | Como usuario, quiero entender el uso de mis datos. | Inventario de datos y proveedores; política y consentimiento revisados por responsable competente; enlaces y formularios coinciden. | Revisión legal y técnica. |
| H02 | P0 / M | Como usuario de teclado o lector, quiero completar tareas. | Auditoría WCAG 2.1 AA: foco visible, nombres, estructura de encabezados, contraste, errores, menús, modales y formularios; incidencias críticas resueltas. | D02, F02. |
| H03 | P0 / M | Como usuario, quiero una web estable y segura. | Revisar validación de entradas, secretos, permisos, dependencias, protección de formularios y cabeceras aplicables; no exponer información sensible. | Inventario técnico. |
| H04 | P1 / S | Como visitante, quiero vías de contacto legítimas. | Datos, enlaces y tiempos comunicados se verifican con RiBuzz; redes y correo funcionan. | Responsable de marca. |
| H05 | P1 / M | Como equipo, quiero una política de medición coherente. | Revisar cookies/analítica, consentimiento y comportamiento según normativa aplicable y asesoría; no asumir cumplimiento. | H01, I01. |

### Épica I — SEO, analítica y rendimiento

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| I01 | P0 / M | Como equipo, quiero una base SEO técnica. | Títulos y descripciones únicos, canonical, sitemap, robots, OG real y estructura semántica; sin indexar rutas privadas o no deseadas. | Arquitectura, revisión técnica. |
| I02 | P0 / M | Como equipo, quiero medir el embudo. | Plan de eventos con nombre, disparador y finalidad: CTA, inicio, pasos, error, envío y salida; verificar duplicados y datos personales excluidos. | H05, F01. |
| I03 | P1 / M | Como usuario, quiero que el sitio cargue rápido. | Medir móvil y escritorio, registrar línea base y objetivos; optimizar imágenes, fuentes, videos y scripts, verificando sin degradar la experiencia. | D04. |
| I04 | P1 / M | Como buscador y usuario, quiero encontrar información relevante. | Mapa de intención por página, enlaces internos y contenido específico; evitar páginas duplicadas y claims no verificados. | A05, arquitectura. |
| I05 | P2 / M | Como equipo, quiero tomar decisiones con datos. | Tablero de embudo, segmentación mínima, control de calidad, cadencia y responsables; documentar limitaciones de volumen. | I02, F03. |

### Épica J — Ingeniería, QA y lanzamiento

| ID | Prioridad / tamaño | Historia y resultado | Criterios de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| J01 | P0 / M | Como equipo, quiero proteger el trabajo existente. | Inventario de rutas, componentes compartidos, cambios locales y landings de clientes; aislar estilos y verificar que no cambien visual ni funcionalmente. | Estado del repositorio. |
| J02 | P0 / L | Como equipo, quiero construir sin romper integraciones. | Reutilizar arquitectura y componentes apropiados; cambios acotados, documentación de configuración y compatibilidad de formularios/rutas. | J01, F03. |
| J03 | P0 / L | Como equipo, quiero comprobar la experiencia antes de publicar. | Build completo, validación de tipos, revisión visual en tres anchos, navegación, CTA, formulario y estados; registrar defectos y evidencias. | Épicas implementadas. |
| J04 | P0 / M | Como responsable, quiero un lanzamiento controlado. | Revisar entorno, variables, dominio, redirecciones, analytics, privacidad y respaldo; plan de reversión y autorización explícita de publicación según entorno. | J03, H01, I01–I02. |
| J05 | P1 / M | Como equipo, quiero detectar problemas después de publicar. | Monitoreo de errores, solicitudes y conversión; responsables, ventana de revisión y protocolo de incidencias. | J04. |
| J06 | P1 / M | Como propietario, quiero mantener el sitio. | Entrega de guía de edición, mapa de contenido, activos, dependencias, accesos por rol y lista de mantenimiento. | J03–J05. |

## 8. Orden recomendado de ejecución

1. **Definición:** A01–A06, J01 y E01. Acordar posicionamiento, fuentes, oferta y límites de publicación.
2. **Arquitectura y diseño:** B01–B03, C01–C04, D01–D04 y F01. Prototipar el recorrido completo, incluyendo móvil y estados.
3. **Construcción:** home, oferta, about, diagnóstico, portafolio y navegación; después recursos y ofertas puntuales. Mantener las rutas de clientes aisladas.
4. **Verificación:** F02–F04, H01–H05, I01–I03 y J03. Resolver problemas críticos antes de publicar.
5. **Lanzamiento y aprendizaje:** J04–J06, I05 y F06. Revisar calidad de leads y comportamiento antes de ampliar automatizaciones o experimentos.

## 9. Definición de terminado

Una historia está terminada cuando su contenido y derechos están aprobados; funciona en los dispositivos y estados acordados; cumple criterios de accesibilidad aplicables; no rompe rutas o integraciones existentes; cuenta con evidencia de revisión; y tiene responsable de mantenimiento. Un lanzamiento requiere además build exitoso, revisión de formularios y medición, privacidad validada y plan de reversión.

## 10. Fuentes utilizadas

- Archivo Figma **Ribuzz IA**, páginas de wireframes, alta fidelidad, login y cuestionario; referencia visual y funcional del producto, no diseño terminado de la web corporativa.
- Drive: **Matriz interna operativa RiBuzz — Web, CRO y lanzamiento**, octubre de 2026; método y control de calidad para proyectos web.
- Repositorio: `src/lib/portfolio-content.ts` y activos de portafolio; validar estado, autorización y vigencia antes de publicar.
- Repositorio: auditorías de contenido, comunicación y pipeline de julio de 2026 en `RiBuzz Página Web/`; contexto histórico sujeto a contraste con la oferta actual.
- Conversación: RiBuzz como growth partner digital de marcas; la web es de presentación comercial; las landings de clientes quedan fuera del alcance de modificación.

## 11. Brief estratégico de producto — entregable obligatorio

Este brief debe elaborarse y validarse antes de aprobar la arquitectura definitiva o el copy. Las hipótesis siguientes son puntos de partida, no decisiones ya aprobadas.

### 11.1 Ficha de definición

| Campo | Qué debe quedar definido | Estado inicial |
| --- | --- | --- |
| Identidad y categoría | Qué es RiBuzz, qué significa growth partner y cómo se explica en lenguaje sencillo. | Growth partner digital de marcas, según conversación; formulación pendiente. |
| Problema principal | Situaciones concretas que reconoce el cliente y consecuencias de no resolverlas. | Hipótesis: piezas comerciales desconectadas y dificultad para priorizar; validar. |
| Cliente ideal | Tipo de marca, etapa, modelo de negocio, decisor, capacidad y contexto. | Pendiente de validar. |
| No encaje | Situaciones que RiBuzz no puede o no desea atender y ruta alternativa. | Pendiente. |
| Propuesta | Cambio buscado, mecanismo, alcance real y evidencia. | Pendiente de aprobación. |
| Diferenciación | Decisiones y prácticas observables que distinguen el acompañamiento. | Hipótesis: diagnóstico, ejecución y seguimiento conectados; sustentar. |
| Oferta | Modalidades actuales, entregables, responsabilidades, exclusiones y condiciones. | Pendiente; revisar vigencia de paquetes históricos. |
| Plataforma IA | Funciones existentes, en desarrollo o conceptuales, acceso y relación con el servicio. | Figma muestra un diseño; disponibilidad no verificada. |
| Conversión | Acción primaria, rutas secundarias, definición de lead cualificado y tratamiento. | Aplicación actual sujeta a verificación técnica. |
| Prueba | Proyectos, testimonios, resultados y activos autorizados, con fuente. | Inventario inicial; aprobación pendiente. |

### 11.2 Entregables de estrategia

1. **Mapa de audiencia y entrevistas:** perfil prioritario y secundarios; trabajos que intentan resolver, disparadores, dudas, lenguaje real, barreras y criterios de decisión. Documentar muestra y fecha; separar evidencia de interpretación.
2. **Mapa del problema:** síntomas visibles, posibles causas, limitaciones de la evidencia y consecuencias. Evitar afirmar que una causa aplica a todos los negocios.
3. **Arquitectura de oferta:** oferta principal, acompañamiento, soluciones puntuales y recursos; para cada una, estado, a quién sirve, objetivos, entregables posibles, responsabilidades, exclusiones, inversión y tiempos solo si se conocen.
4. **Matriz de mensajes:** por audiencia y etapa, registrar pregunta, mensaje, prueba, objeción, acción y fuente. Definir una promesa central y mensajes distintos para Inicio, Servicios y Sobre RiBuzz.
5. **Mapa del embudo:** entrada, intención, contenido requerido, CTA, aplicación, salidas, seguimiento, responsable y eventos de medición. Identificar las rutas para servicios puntuales y para quienes aún investigan.
6. **Matriz de prueba:** proyecto → relación y estado → problema → intervención exacta → activo → resultado o aprendizaje → fuente → autorización → fecha. Diferenciar propuesta, piloto, proyecto en curso y entrega.
7. **Guía editorial:** voz, terminología, ejemplos, llamadas a la acción, claims prohibidos, tratamiento de cifras y testimonios, y responsable de cambios.
8. **Registro de decisiones:** ID, alternativas, evidencia, decisión, dueño, fecha, impacto en páginas y condición para revisarla.

### 11.3 Criterios de aprobación del brief

- Una persona ajena al proyecto puede explicar a quién ayuda RiBuzz, qué hace y cómo empezar.
- Oferta, roles, responsabilidades y límites coinciden con la operación real.
- Cada prueba, cifra o cita tiene fuente y estado de autorización; lo pendiente no se publica como hecho.
- Los recorridos distinguen el servicio de la herramienta IA y reflejan el comportamiento real del formulario.
- El responsable de negocio aprueba versión y fecha; las decisiones pendientes tienen dueño y no bloquean trabajo independiente.

## 12. Especificación de páginas y recorridos

### 12.1 Plantilla para cada página

Antes de diseñar, completar: URL y propósito; audiencia/intención; pregunta principal; etapa del embudo; acción primaria y secundaria; orden de secciones; mensaje y evidencia de cada sección; contenido y assets; interacciones y estados; requisitos móvil/accesibilidad; metadatos; eventos; dependencias; fuente, aprobación y fecha. Toda sección debe responder una pregunta o facilitar una acción.

### 12.2 Inicio `/`

| Orden | Sección | Pregunta que resuelve | Evidencia/visual y acción |
| --- | --- | --- | --- |
| 1 | Hero | ¿Qué es RiBuzz y cómo puede ayudar a mi marca? | Propuesta concreta, identidad visual y CTA a aplicación; alternativa para conocer el trabajo. |
| 2 | Situaciones de entrada | ¿Esto describe mi negocio? | Escenas y señales verificadas, ilustradas con iconos o relaciones entre piezas. |
| 3 | Qué hacemos | ¿Qué cambia y qué se puede construir? | Mapa de capacidades y ejemplos de entregables, sin tratarlos como incluidos en todos los proyectos. |
| 4 | Trabajo real | ¿Han hecho algo relevante para mí? | Casos autorizados con imagen, problema e intervención; enlace al portafolio. |
| 5 | Método | ¿Cómo trabajaremos juntos? | Flujo visual con actividades, decisiones y participación del cliente. |
| 6 | Encaje | ¿Es adecuado para mi etapa? | Criterios concretos y ruta hacia recursos cuando no sea el momento. |
| 7 | Preguntas frecuentes | ¿Qué necesito saber antes de avanzar? | Respuestas sobre alcance, inversión si está definida, tiempos y siguiente paso. |
| 8 | Cierre | ¿Qué hago ahora y qué ocurrirá? | CTA a aplicación y explicación fiel de las posibles salidas. |

**Estados:** navegación móvil abierta/cerrada, foco visible, FAQ abierta/cerrada, carga y error de imágenes, movimiento reducido. **Eventos propuestos:** clic en CTA por ubicación, caso abierto, recurso seleccionado y llegada al formulario; no registrar datos introducidos.

### 12.3 Cómo trabajamos `/services`

**Objetivo:** permitir evaluar qué puede contratarse y cómo se colabora. **Secciones:** propuesta; modalidades vigentes comparables; entregables ilustrados; proceso y responsabilidades; soluciones puntuales; condiciones e inversión si están aprobadas; prueba; FAQ; CTA. **Criterio:** no ocultar información esencial detrás de pestañas; toda modalidad explica alcance y exclusiones. La metodología web/CRO se identifica como tal y no se generaliza sin validar.

### 12.4 Sobre RiBuzz `/about`

**Objetivo:** construir confianza mostrando origen, personas, criterio y forma de trabajar. **Secciones:** razón de existir; historia verificable; equipo y roles autorizados; decisiones y principios demostrados mediante ejemplos; proyectos; CTA. **Criterio:** no duplicar el hero de Inicio ni inventar trayectoria, socios o cifras.

### 12.5 Diagnóstico `/diagnostico`

**Objetivo:** convertir interés en una aplicación informada. **Secciones:** propósito y duración comprobada; qué se preguntará y por qué; formulario; rutas posteriores reales; privacidad; FAQ y contacto alternativo. **Estados obligatorios:** inicial, cada paso, validación, envío, error recuperable, éxito y cada salida existente. **Criterio:** el lenguaje de agenda coincide con el código y las integraciones verificadas.

### 12.6 Portafolio `/portafolio-comercial`

**Objetivo:** demostrar capacidad con contexto. **Secciones:** introducción; proyectos destacados; fichas con problema, alcance, activos y evidencia; más trabajos si hay autorización; CTA. **Interacciones:** filtros por tipo solo si el volumen lo justifica; enlaces y medios navegables por teclado. **Criterio:** las muestras no implican resultados ni participación mayores a los documentados.

### 12.7 Recursos, contacto y soluciones puntuales

- **Recursos `/regalos`:** título y beneficio de cada recurso antes de desbloquear; formato, acceso y CTA de retorno. Estados de carga, descarga y error cuando apliquen.
- **Contacto `/contacto`:** rutas por intención: aplicar, consultar una necesidad puntual o explorar recursos; datos verificados.
- **Landings y NFC:** explicar necesidad, entregables y condiciones vigentes, ejemplos autorizados y solicitud; no confundirlas con landings de clientes.
- **Privacidad:** contenido validado por responsable competente, navegación legible y enlaces coherentes con formularios.

### 12.8 Recorridos a prototipar y verificar

1. Visitante frío → Inicio → caso → modalidad → aplicación → salida correspondiente.
2. Visitante con necesidad puntual → oferta específica → ejemplo → contacto o aplicación.
3. Visitante que investiga → recursos → lectura/descarga → retorno al siguiente paso.
4. Visitante referido → Sobre RiBuzz → portafolio → aplicación.
5. Teclado y lector de pantalla → navegación → FAQ → formulario → error y confirmación.

Para cada recorrido: documentar pantalla y decisión de entrada, acciones, rutas alternativas, estados vacíos/error, eventos y evidencia de prueba móvil y escritorio.

## 13. Plan de diseño y sistema de componentes

### 13.1 Dirección visual

Traducir el lenguaje del Figma a un sitio editorial y comercial: base oscura, violeta como acento, superficies y bordes definidos, tipografía jerarquizada, datos y diagramas solo cuando expliquen algo. Documentar valores extraídos frente a decisiones nuevas. La identidad corporativa no debe depender de una captura estática del dashboard.

### 13.2 Inventario de componentes

| Familia | Componentes y variantes | Estados/requisitos |
| --- | --- | --- |
| Navegación | Header, enlaces, CTA, menú móvil, footer, migas cuando aporten. | Activo, foco, abierto/cerrado, teclado, lector, responsive. |
| Acciones | Botón primario/secundario, enlace, icono de acción. | Hover, foco, deshabilitado, carga; nombre accesible. |
| Contenido | Hero, encabezado, tarjeta de capacidad, entregable y caso, cita verificada. | Texto variable, imagen ausente, longitudes y contraste. |
| Narrativa visual | Mapa de sistema, flujo por fases, comparación y galería. | Orden lógico, alternativa textual, móvil y movimiento reducido. |
| Interacción | Acordeón, pestañas y filtros si son necesarios, modal. | Estado expandido, teclado, foco y cierre correcto; información esencial disponible. |
| Formularios | Campo, select, checkbox, barra de progreso, error y confirmación. | Etiquetas, ayuda, error asociado, envío, recuperación y privacidad. |
| Sistema | Avisos, carga, vacío, error, 404 y confirmación. | Mensaje comprensible y acción de recuperación. |

### 13.3 Entregables y control de diseño

- Inventario de tokens y componentes, referencias del Figma, assets autorizados y fuentes.
- Wireframes anotados para móvil y escritorio de las rutas principales; prototipo con recorridos de §12.8.
- Especificaciones por componente: propósito, contenido, variantes, tamaño, comportamiento, estados, accesibilidad y adaptación.
- Revisión de contraste, foco, orden de lectura, legibilidad, carga de medios y movimiento reducido.
- Aprobación visual y de contenido por responsables; conservar decisiones y versiones. La aprobación de una pantalla no aprueba automáticamente el copy o claims de otra.

## 14. Plan técnico y mapa de dependencias

### 14.1 Inventario antes de editar

1. Registrar rutas corporativas, redirecciones y URLs de clientes; clasificar cada una por propietario y objetivo.
2. Mapear layouts, estilos globales, fuentes, componentes compartidos y efectos que puedan alcanzar rutas de clientes.
3. Registrar cambios locales existentes, APIs, variables de entorno, bases de datos, automatizaciones, analítica y destinos de formularios sin exponer secretos.
4. Capturar referencias visuales y funcionales de rutas de clientes para comparar antes/después; acordar un conjunto representativo y, si es viable, automatizar capturas.
5. Definir cómo aislar estilos y componentes corporativos; todo cambio compartido exige evaluar su impacto antes de integrarlo.

### 14.2 Contratos técnicos

| Área | Definición necesaria | Prueba mínima |
| --- | --- | --- |
| Contenido | Fuente editable, campos, validación, responsables y versión; no introducir CMS sin necesidad. | Cambio de contenido no rompe diseño ni metadatos. |
| Componentes | Props, variantes, estados, semántica, eventos, responsive y límites de texto. | Renderizado y funcionamiento en estados relevantes. |
| Formularios | Esquema, validaciones, protección, persistencia, rutas, consentimiento y respuesta. | Éxito y error en entorno seguro; sin alterar leads reales. |
| Medios | Formatos, dimensiones, carga, fallback y derechos de uso. | Archivos presentes, relación de aspecto y rendimiento. |
| SEO | URL, canonical, metadatos, indexación y redirecciones por ruta. | Inspección de HTML, sitemap y enlaces. |
| Analítica | Evento, disparador, propiedades permitidas, finalidad y consentimiento. | Eventos verificados una vez, sin información personal. |
| Integraciones | Propietario, configuración, acceso, dependencias y manejo de errores. | Confirmar funcionamiento y registro seguro. |

### 14.3 Matriz de regresión y lanzamiento

| Superficie | Verificaciones |
| --- | --- |
| Sitio corporativo | Navegación, CTA, rutas, contenido, medios, estados, enlaces y metadatos. |
| Landings de clientes | Sin cambios de archivos ni regresiones por layout/estilos/componentes compartidos; comparar referencias y flujos representativos. |
| Diagnóstico | Validación, persistencia, cada salida, consentimiento, notificaciones y recuperación de errores en entorno controlado. |
| Dispositivos | 390, 768 y 1280–1440 px; probar teclado, zoom, lector y movimiento reducido. |
| Operación | Build y tipos, logs, configuración por entorno, errores, analítica y plan de reversión. |

Antes de publicar: registrar versión, entorno, aprobaciones, responsable, respaldo, migraciones y verificaciones. Después: vigilar errores, formularios y rutas durante la ventana acordada; documentar incidencias y reversión si corresponde.

## 15. Nuevas historias de preparación por disciplina

| ID | Prioridad / tamaño | Responsable sugerido | Entregable y criterio de aceptación | Dependencias |
| --- | --- | --- | --- | --- |
| K01 | P0 / M | Estrategia + negocio | Brief de §11 aprobado, con hipótesis y decisiones pendientes identificadas. | A01–A06. |
| K02 | P0 / M | Estrategia | Matriz audiencia → problema → mensaje → prueba → CTA con fuente y estado. | K01, E01. |
| K03 | P0 / M | Producto + estrategia | Mapa de embudo y recorridos de §12.8, con rutas reales y responsables. | K01, F01. |
| K04 | P0 / L | Diseño + estrategia | Especificaciones de todas las páginas de §12 con contenido y jerarquía aprobados. | K02–K03. |
| K05 | P0 / L | Diseño | Wireframes móvil/escritorio y prototipo de recorridos principales; estados de interacción documentados. | K04. |
| K06 | P0 / L | Diseño + desarrollo | Sistema de componentes de §13 con variantes, estados, semántica y referencias; contraste y movimiento revisados. | D01, K05. |
| K07 | P0 / M | Desarrollo | Inventario de rutas, cambios y dependencias compartidas de §14.1; riesgos a landings de clientes identificados. | J01. |
| K08 | P0 / M | Desarrollo + operaciones | Contratos de formulario, integración, eventos y contenido de §14.2, con pruebas y entornos definidos. | K07, F01. |
| K09 | P1 / L | Estrategia + diseño | Paquete de casos: medios autorizados, copy contrastado y fichas completas; pendientes claramente marcados. | E01–E04. |
| K10 | P0 / M | Producto + QA | Matriz de regresión y criterios de salida de §14.3, con responsables y evidencias previstas. | K05–K08. |
| K11 | P1 / M | Producto + desarrollo | Plan de migración por URL: conservar, actualizar, redirigir o retirar; responsables y comprobación de SEO. | K07, I01. |
| K12 | P1 / S | Producto | Tablero con estado, prioridad, estimación, dueño, aprobador, dependencia, evidencia y siguiente decisión por historia. | Backlog priorizado. |

## 16. Hitos y puertas de decisión

| Hito | Resultado revisable | Puerta para avanzar |
| --- | --- | --- |
| H0 · Descubrimiento | Inventario de fuentes, rutas, riesgos y trabajo existente. | Se conocen los límites y dependencias; no se toca ninguna landing de cliente. |
| H1 · Estrategia | Brief, oferta, mensajes, embudo y matriz de prueba. | Negocio aprueba las decisiones necesarias; lo desconocido queda marcado y asignado. |
| H2 · Experiencia | Arquitectura, especificaciones, wireframes, prototipo y sistema visual. | Recorridos y estados críticos revisados en móvil y escritorio. |
| H3 · Implementación | Rutas corporativas, contenido y componentes integrados en entorno de revisión. | Criterios funcionales cumplidos y regresiones de clientes revisadas. |
| H4 · QA y preparación | Evidencia de accesibilidad, rendimiento, formulario, SEO, analítica y seguridad. | Incidencias críticas resueltas; pendientes aceptados y plan de reversión listo. |
| H5 · Lanzamiento y aprendizaje | Versión autorizada, monitoreo y documentación de mantenimiento. | Publicación verificada; responsables y mediciones activos. |

## 17. Formato operativo de una historia

Cada tarjeta del tablero debe incluir: **ID y título; objetivo de negocio; usuario y necesidad; alcance y exclusiones; prioridad y tamaño; responsable y aprobador; fuentes; diseño o contrato; dependencias; subtareas de estrategia, contenido, diseño, desarrollo y QA; criterios de aceptación verificables; eventos; estado; evidencias; preguntas y decisiones; fecha de revisión.**

Ejemplo: **B04 — Mostrar proyectos reales en Inicio.** El visitante necesita evaluar experiencia relevante. Estrategia verifica relación y alcance; contenido redacta situación e intervención; diseño prepara tarjetas y estados; desarrollo integra medios locales optimizados; QA comprueba enlaces, responsive y accesibilidad. Se acepta cuando cada proyecto tiene fuente y autorización, no presenta cifras no verificadas, se entiende sin abrirlo y enlaza a una ficha o destino válido. Dependencias: E01–E03 y K09. Aprobación: responsable de negocio y dueño del contenido. Evidencia: matriz de prueba y capturas revisadas.

## 18. Registro de ejecución inicial — 18 de noviembre de 2026

| Área / historias relacionadas | Estado | Evidencia y trabajo restante |
| --- | --- | --- |
| Inicio: B01–B05, B07–B09 | Implementación parcial | Hero, mapa visual, capacidades, tarjetas de proyectos, FAQ y CTA; falta validar contenido, autorización de casos, recorridos y diseño completo en dispositivos. |
| Servicios: C01–C02 | Implementación parcial | Página renovada con capacidades, modalidades, responsabilidades y FAQ. Oferta, precios y condiciones requieren aprobación de negocio. |
| Sobre RiBuzz: C03 | Implementación parcial | Narrativa de growth partner y ejemplos existentes; pendiente validación de vigencia y autorización de casos. |
| Diagnóstico: F01–F04 | Implementación parcial | Presentación actualizada y formulario conservado; carga inicial verificada. No se ejecutó envío real ni validación integral de integraciones. |
| Navegación y recursos: C07, G01 | Implementación parcial | Enlace a proyectos, corrección de menú en tamaño intermedio y activación por teclado del recurso. Falta auditoría completa de accesibilidad. |
| Build: J03 | Verificación parcial | `npm run build` completó con éxito; las rutas de servicios y diagnóstico cargaron localmente. Falta QA responsive, regresión de landings de clientes, pruebas de formularios y revisión de contenido. |

Las historias no se consideran terminadas hasta cumplir todos sus criterios de aceptación y las aprobaciones indicadas. No se modificaron intencionalmente archivos de landings de clientes durante esta ejecución; falta comprobar visualmente su regresión.

## 19. Revisión de confianza y diseño de la web corporativa

| Recorrido | Cambio disponible en local | Evidencia de aceptación |
| --- | --- | --- |
| Inicio → proyectos | La primera pantalla presenta una pieza real de Arkos Wear. La galería continúa con las cuatro marcas, decisiones concretas y enlaces a los trabajos. La metodología permite explorar sus etapas. | Imagen principal cargada, cuatro fichas presentes y navegación al caso comprobada en 390 y 1440 px. |
| Caso → siguiente paso | El caso de Arkos distingue investigación, concepto y propuesta de octubre de 2026 de la captura pública de la tienda. | Desplegables operables con teclado, destino de la tienda verificado y acceso al diagnóstico. |
| Necesidad → servicio | Servicios presenta el diseño o mejora del sistema comercial, el recorrido de compra y el seguimiento de oportunidades. Sobre RiBuzz identifica responsabilidades y canal de contacto. | Carga y ausencia de desplazamiento horizontal en las dos anchuras probadas. |
| Solicitud → confirmación | El visitante ve duración estimada, finalidad de los datos, política y contacto antes del formulario. Las confirmaciones conducen al calendario, recursos o suscripción. | Tres rutas probadas en móvil, cada una con un error simulado y un reintento exitoso. Prueba adicional en escritorio. Once pruebas aisladas de estados, recepción simulada y analítica. |
| Medición | Los eventos de proyecto, diagnóstico, pasos, error y confirmación se integran con el colector GA4 existente usando categorías. | Colector simulado. Pendientes los informes de producción y la relación con conversaciones calificadas. |
| Rendimiento | La imagen principal tiene dimensiones explícitas, formato WebP y precarga. La primera visita a la home muestra directamente el contenido. | Una carga local de la compilación en Edge a 390 px, con latencia simulada de 90 ms y descarga de 1,2 MB/s: LCP 2,11 s y CLS 0,019. Falta medición de campo. |

Para publicación quedan por confirmar permisos de uso de capturas y testimonios, identidades y retratos del equipo, buzón corporativo operativo y recepción real en las integraciones de negocio. El embudo probado localmente utilizó datos ficticios y respuestas interceptadas.
