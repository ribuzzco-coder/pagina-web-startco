# Design QA: Proyecta — Bionda y Mora

## Evidencia

- Fuente visual: referencia adjunta `C:\Users\User\AppData\Local\Temp\codex-clipboard-c63d21eb-afff-46e5-b36f-ae1f88b0bc8a.png` y lenguaje visual de https://biondaymora.com/.
- Implementación: `http://localhost:4173/proyecta`.
- Capturas: revisión en navegador integrado, escritorio `1264 × 712 CSS px` y móvil `390 × 844 CSS px`. Las capturas no se persistieron como archivos locales.
- Estado: primera pantalla; también se probaron el paso 02 del ritual y el guardado local de una intención.

## Superficies revisadas

- Tipografía: DM Serif Display para jerarquía editorial y Jost para interfaz; cursiva reservada para énfasis narrativo.
- Ritmo: escritorio resuelto en dos columnas (fotografía / manifiesto) y móvil en una columna; márgenes y jerarquía se mantienen legibles.
- Tokens: oliva apagado, marfil cálido, café profundo y acento arena extraídos de la referencia y de la tienda vigente.
- Imagen: se emplean wordmark y fotografías de campaña Bionda y Mora ya aprobadas en el repositorio; sin ilustraciones, logos o iconos reconstruidos en código.
- Copy: se corrigieron errores tipográficos de origen y se mantuvo `PROYECTA · 2027`, `Cada paso escribe tu historia.` y `Lo que sueñas también merece un camino.`

## Historial de comparación

- [P1 corregido] La primera revisión mostraba el navbar y el footer de RiBuzz sobre la experiencia. Se añadió `/proyecta` a `RouteVisibility`, igual que las experiencias de marca existentes.
- Evidencia posterior: la revisión de escritorio y móvil muestra únicamente la cabecera y el cierre de Bionda y Mora.

## Pruebas

- `npm run build`: compilación y TypeScript completados sin errores de esta ruta.
- Interacción: el paso 02 queda seleccionado al activarlo; la intención habilita el botón y cambia a `Intención guardada en este momento` al enviarse.
- Consola del navegador: sin errores.
- Accesibilidad: encabezados, etiqueta de textarea y estados `aria-pressed` expuestos en el árbol de accesibilidad.

## Iteración: scroll e imagen personalizada

- El ritual ahora se activa al recorrer cada paso en pantalla; el indicador editorial cambia de `PASO 01 / 04` a `PASO 04 / 04` según la posición de scroll.
- Los botones continúan disponibles y desplazan suavemente al paso seleccionado para conservar una alternativa de interacción accesible.
- Tras escribir y sellar la intención, `Crear mi proyección` compone en el navegador una imagen PNG con la intención y una fotografía real de campaña. La vista previa y el enlace de descarga se verificaron sin errores de consola.
- Privacidad: el texto no sale del navegador ni se envía a una API; la imagen se genera con Canvas en el dispositivo.
- Activos de campaña: el hero y la imagen personalizada usan `boots-campaign.jpg`; el bloque de intención usa `hero-2026-mobile.jpg`. Ambas fotografías muestran botas, no suecos.
- Conversión: el cierre dirige a la colección oficial de botas de Bionda y Mora; se verificó visible y accesible en el navegador.
- Medición: los eventos `proyecta_ritual_started`, `proyecta_step_viewed`, `proyecta_intention_saved`, `proyecta_projection_generated`, `proyecta_projection_shared`, `proyecta_projection_downloaded` y `proyecta_boots_collection_clicked` se envían a GA4 solo cuando `gtag` está disponible.

## Resultado

## Iteración: experiencia móvil inmersiva

- Se sustituyó el primer bloque móvil por una composición vertical de pantalla completa: fotografía de campaña, entrada secuencial del copy y una invitación táctil a iniciar el ritual.
- El ritual incorpora un selector táctil de los cuatro pasos; cada control mide al menos `44px` de alto, actualiza la imagen/editorial activa y conserva el desplazamiento suave como alternativa a recorrer el contenido.
- Las acciones de intención, proyección, descarga/compartir, CTA de botas y regreso al ritual se ajustaron a objetivos táctiles de `44–54px` en móvil.
- Movimiento: la fotografía inicial entra con un zoom leve, el copy aparece de forma escalonada, la imagen del ritual cambia con transición y los controles responden al toque. `prefers-reduced-motion` desactiva estas transiciones.
- Validación técnica posterior: `npm run build` pasó; la consola del navegador integrado no mostró errores; se verificaron los cuatro controles de navegación en el DOM y la experiencia principal tras recargar.

## Validación móvil posterior

- Implementación capturada: `http://localhost:4173/proyecta` en un navegador integrado limpio, viewport `390 × 844 CSS px` (`380px` de ancho de documento por el scrollbar, densidad controlada por el navegador).
- Estado: hero inicial, ritual con paso 03 seleccionado y proyección personalizada generada.
- Resultado de interacción: no hubo overflow horizontal (`scrollWidth: 380`, `clientWidth: 380`) en las tres pantallas revisadas.
- Corrección aplicada: el hero móvil heredaba `grid-template-columns` de escritorio, desplazando el manifiesto a la derecha. Se fijó una sola columna con `grid-template-columns: 1fr` bajo `760px`.
- Táctil: los cuatro selectores del ritual aparecen y cambian el estado activo; se verificó el paso 03. La intención, la generación de proyección Story y sus estados visibles se verificaron a este ancho.
- Consola: sin errores durante la prueba móvil.
- Compilación posterior: `npm run build` completó correctamente.

final result: passed
