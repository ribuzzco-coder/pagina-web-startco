# Análisis de Bionda y Mora

Fecha: 5 de octubre de 2026. Alcance: web pública, catálogo Shopify y código de la landing RiBuzz. No se modificó el tema de Shopify, no se accedió a pedidos ni se realizaron compras. La revisión del sitio es de contenido, rutas y datos; no incluye una auditoría visual completa ni métricas Lighthouse.

## Marca y recorrido

La propuesta combina comodidad, versatilidad, fabricación colombiana y piezas en cuero. Las fundadoras son Juanita y María Camila. Las familias de compra son botas, tenis y accesorios. El catálogo público consultado contiene 25 productos; variantes de color y talla están agrupadas en las PDP. Esto hace conveniente enlazar el producto principal y dejar que Shopify gestione selección de variantes, precio y disponibilidad.

Fuente: https://biondaymora.com/ y https://biondaymora.com/pages/nosotros

La landing RiBuzz debe funcionar como un acceso breve a la tienda y canales de la marca. La promoción merece una ruta propia: pedir datos antes de que la persona conozca el producto añade fricción. Se implementó comprar, Instagram, WhatsApp y regalo en ese orden, y la ruleta se trasladó a `/biondaymora/regalo`.

## Hallazgos prioritarios en Shopify

1. **Envíos contradictorios.** La portada y FAQ anuncian envío gratis desde $350.000; otra franja de la misma portada indica $300.000. Debe confirmarse la condición efectiva en Shopify y unificarse el contenido. La landing nueva no repite ninguno de los dos umbrales.
2. **Garantía confundida con cambios.** El título SEO actual de Nosotros dice garantía de 30 días, mientras la política establece una garantía de 90 días y cambios durante 30 días. Son conceptos distintos. Corregir el título y cualquier promesa comercial después de confirmar la política operativa.
3. **Prueba social inconsistente.** La portada habla de reseñas verificadas, pero la sección de reseñas indica que aún no hay reseñas allí. Hay videos, pero no se verificó su procedencia. Evitar una afirmación global sin respaldo y mostrar únicamente testimonios reales identificados.
4. **Materiales con excepciones.** El catálogo incluye pañoletas textiles y kit de cuidado. La afirmación de que todas las piezas son cuero no describe todo el catálogo. Reservar esa promesa para productos pertinentes y describir materiales por PDP.
5. **Título de colección roto.** La ruta `/collections/ver-todo-tenis` devuelve un título con `Ver Todo &lt;(Tenis)`. Corregir el título y la metadata en Shopify.
6. **Texto de producto demasiado específico.** La PDP de Vera permite Negro y Café, pero su descripción menciona únicamente negro. Conviene una descripción neutra para el producto agrupado o contenido por variante.
7. **Handles heredados.** Hay productos cuyo handle contiene `copia` o el nombre de otro producto. No rompe necesariamente la compra, pero complica mantenimiento y SEO. Normalizar solo con redirecciones 301 y revisión de enlaces existentes.

Fuentes: https://biondaymora.com/ ; https://biondaymora.com/pages/nosotros ; https://biondaymora.com/pages/politica-de-cambios-y-garantias ; https://biondaymora.com/collections/ver-todo-tenis ; https://biondaymora.com/products/bota-convertible-vera-negro ; https://biondaymora.com/products.json?limit=250

## PDP y navegación

Las PDP de Vera, Nova, Girasol y Set Viajera respondieron HTTP 200. Se utilizan sus fotos publicadas en Shopify y enlaces directos, sin copiar precios o stock a la landing. Así no se publican valores estáticos que puedan quedar desactualizados. Las tres colecciones y privacidad también respondieron 200.

La PDP de Vera tiene color y tallas 35 a 40, y estaba disponible al consultar. Queda pendiente verificar interactivamente selección de variantes, guía de tallas, añadir al carrito y aplicación de cupones en checkout. Un enlace de descuento que responde 200 no demuestra que el cupón sea elegible.

## Captación y ruleta

Antes de esta actualización, el formulario no enviaba registros, el premio se elegía en el navegador, el código tenía cuatro dígitos aleatorios y se podía jugar de nuevo. La declaración de un giro por persona no estaba respaldada por el comportamiento.

Se añadió destino independiente mediante `BIONDA_SHEETS_WEBHOOK_URL`, producto comprado/de interés, relación con la marca y consentimiento. El servidor asigna el premio de forma estable por correo y genera una referencia individual. El script deduplica por esa referencia. No hay fallback a la hoja de Nuna.

Se mantienen los porcentajes de probabilidad existentes. Los descuentos usan los códigos facilitados: RULETABIONDA5, RULETABIONDA10 y RULETABIONDA15. La pañoleta se coordina por WhatsApp. Deben confirmarse vigencia, límites, acumulación y condiciones del regalo antes de anunciar una promoción más amplia. Usar otro correo sigue siendo posible; no se presenta esto como validación de identidad.

Hoja creada: https://docs.google.com/spreadsheets/d/1m_qaB5qF6h0iYXBjmFNyJGxGsLeKoRRkeeylEF_Xv7k/edit

## Activación pendiente

Se recibió y configuró localmente una URL `/exec` independiente. La prueba real del 5 de octubre devolvió una página de Google con el error "No se encontró la función de la secuencia de comandos: doPost". No apareció el registro en la hoja de Bionda ni en la de Nuna. Debe publicarse una versión que incluya `docs/bionda-gift-leads.gs` y añadir `BIONDA_SHEETS_WEBHOOK_URL` en Vercel. La API ahora exige confirmación JSON `{ ok: true }`; una página de error no se considera un registro guardado. No se ha publicado este cambio de código en Git ni en Vercel.

Pruebas completadas: TypeScript, ESLint de los archivos afectados, destinos separados, configuración ausente, asignación estable, consentimiento, fecha y producto inválidos, los cuatro premios y rechazo de errores del webhook. Ambas rutas locales respondieron 200. La prueba de regresión real de Nuna respondió 202 con su premio original.

Después de configurar: probar registro real, duplicado, restauración del premio, cupones sobre un carrito de prueba y vistas móvil/escritorio. Las pruebas HTTP y de código no sustituyen esa revisión visual.
