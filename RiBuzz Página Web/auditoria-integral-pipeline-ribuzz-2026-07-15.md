# Auditoria integral de comunicacion, oferta y pipeline — RiBuzz

Fecha: 2026-07-15  
Alcance: web core de RiBuzz segun sitemap y navegacion principal: Home, Como trabajamos, Diagnostico, Sobre RiBuzz, Regalos, Contacto, Tarjetas NFC, Landings, Politica de privacidad, Navbar/Footer.  
Base de revision: codigo fuente, contenido central en `src/lib/content.ts`, ruteo del formulario de diagnostico y render local en `http://127.0.0.1:3000`.

---

## 1. Diagnostico ejecutivo

La pagina ya tiene una intencion estrategica clara: no vender "marketing", sino un sistema comercial que conecta estrategia, comunicacion, tecnologia y seguimiento. La estructura general del embudo esta mejor de lo normal para una pagina temprana: dolor, filtro, metodo, inversion, prueba, FAQ y llamada.

El problema no es que falte contenido. El problema principal es que el usuario entiende la idea grande, pero no siempre entiende con suficiente precision que compra, que pasa despues, por que RiBuzz tiene autoridad para resolverlo, y como se diferencia cada ruta: sistema completo, solucion puntual, regalos, landings y tarjetas NFC.

La frase "sistema" funciona como posicionamiento, pero todavia carga demasiado peso. En algunos puntos comunica bien; en otros se vuelve una palabra paraguas que tapa lo concreto. El usuario puede salir pensando:

- "Entiendo que me ayudan a ordenar ventas, marketing y tecnologia."
- "Entiendo que primero hay un diagnostico."
- "Entiendo que no es una agencia tradicional."
- "No entiendo del todo que entregables concretos recibo en cada etapa."
- "No entiendo cuanto me cuesta exactamente salvo algunos pisos o precios."
- "No se si RiBuzz es una consultora, agencia, growth partner, estudio de tecnologia, productized service o todo a la vez."
- "No se si las paginas de landings y NFC son productos separados, pruebas de portafolio o parte del sistema principal."

La oportunidad mayor esta en convertir la promesa de "sistema" en evidencia visible: casos, sintomas, entregables, antes/despues, ejemplos de activos, criterios de decision, tiempos, alcance y escenarios.

---

## 2. Pipeline como lo ve hoy el usuario

### Recorrido ideal que la pagina intenta construir

1. Llego a Home.
2. Me identifico con el dolor: ya pague para vender mas y nada cambio.
3. Entiendo que el problema no son piezas sueltas, sino falta de sistema.
4. Me filtro: para quien es / para quien no.
5. Veo metodologia: diagnostico, diseno, implementacion, acompanamiento.
6. Veo modelo de inversion y prueba social.
7. Voy a "Como trabajamos" si necesito mas detalle.
8. Entiendo paquetes por etapa.
9. Voy a Diagnostico.
10. Lleno aplicacion.
11. Si califico, agenda; si no, regalos o newsletter.

### Recorrido real probable

1. El usuario capta el dolor inicial.
2. Recibe varias veces la idea "sistema".
3. Escanea titulos y CTAs repetidos.
4. Si esta caliente, va a Diagnostico.
5. Si esta frio, va a Regalos o Landings/NFC desde nav/footer/contacto.
6. Puede fragmentarse: empieza en "sistema comercial", pero termina viendo landings, tarjetas NFC o ejemplos que parecen servicios sueltos.

### Friccion principal

Hay dos pipelines conviviendo:

- Pipeline A: RiBuzz como sistema de crecimiento comercial.
- Pipeline B: RiBuzz como proveedor de landings, tarjetas NFC, biolinks, recursos y experiencias digitales.

Ambos pueden convivir, pero hoy no esta suficientemente jerarquizado. Si no se ordena, el usuario puede entender que RiBuzz dice "no vendo piezas sueltas", pero luego le muestra piezas sueltas como landings y tarjetas.

---

## 3. Hallazgos transversales

### 3.1. Posicionamiento fuerte, pero abstracto

"Sistema comercial" es una buena idea eje. El riesgo es que el usuario no compra una palabra; compra claridad sobre su problema y confianza en una solucion. La pagina debe traducir sistema en:

- Que se diagnostica.
- Que se decide.
- Que se construye.
- Quien ejecuta que.
- Que se mide.
- Que cambia al final del proceso.

### 3.2. El diagnostico es el verdadero producto de entrada

La web empuja casi todo hacia "Agenda tu llamada de introduccion", pero operativamente el usuario no agenda de una: primero llena aplicacion, luego el sistema decide si agenda, recibe regalos o entra a newsletter.

Esto es bueno para filtrar, pero debe comunicarse con precision. Hoy se dice "agenda tu llamada" muchas veces. Mejor promesa:

"Completa la aplicacion. Si hay fit, agendas la llamada ahi mismo."

Eso baja frustracion y sube percepcion de criterio.

### 3.3. Falta una seccion tipo "Que recibes"

La pagina explica metodologia y paquetes, pero no muestra con suficiente nitidez la caja de entregables. Para un usuario, "diagnostico, diseno, implementacion y acompanamiento" suena bien, pero necesita aterrizaje:

- Mapa del embudo actual.
- Hipotesis de cuello de botella.
- Priorizacion de canales.
- Copy/oferta.
- Landing o activo de conversion.
- CRM / automatizaciones.
- Cadencia de seguimiento.
- Dashboard o metricas.
- SOPs.

Esto deberia aparecer en Home o Services con ejemplos visibles.

### 3.4. La prueba social existe, pero puede trabajar mas

La home y services tienen testimonios/logos. Aun asi, para la promesa de "sistema" hace falta prueba de proceso, no solo logos. El usuario necesita ver:

- Que problema tenia el cliente.
- Que intervencion hizo RiBuzz.
- Que activo se construyo.
- Que resultado o aprendizaje hubo.
- Que parte del sistema cambio.

Sin esto, los logos dan confianza estetica, pero no prueban la tesis comercial.

### 3.5. Hay una tension entre "no somos agencia" y productos satelite

Landings y tarjetas NFC son utiles, pero deben aparecer como:

- Activos puntuales que pueden salir del diagnostico.
- Productos de entrada para necesidades especificas.
- Ejemplos de ejecucion dentro del sistema.

No como rutas equivalentes al sistema principal.

---

# 4. Auditoria pagina por pagina

---

## 4.1. Home (`/`)

### Que entiende el usuario

La primera pantalla comunica bien el dolor: "Ya pagaste para vender mas y nada cambio". Es directo, reconocible y menos generico que "crece con estrategia". Tambien queda claro que RiBuzz diagnostica lo que frena ventas y se queda hasta resolverlo.

El flujo de la Home es logicamente bueno:

- Dolor.
- Problema de piezas sueltas.
- Fit / no fit.
- Metodo.
- Modelo de inversion.
- Testimonios.
- Recurso/diagnostico.
- FAQ.
- CTA final.

### Lo que le falta entender

El usuario todavia no ve rapido que significa "se resuelva de verdad". Falta bajar esa promesa a cambios concretos:

- "dejas de depender de una sola persona para hacer seguimiento"
- "tienes un flujo claro de leads"
- "sabes que decir en cada etapa"
- "tu CRM deja de ser una lista muerta"
- "tu landing/oferta captura mejor"

La Home identifica el problema, pero podria mostrar mas rapido el "antes/despues" operacional.

### Que reorganizar

Actualmente la Home lleva al usuario de dolor a filtro muy pronto. El filtro es bueno, pero antes de "para quien es / no es" puede convenir insertar una mini-seccion de traduccion:

"Cuando decimos sistema, hablamos de estas 5 piezas."

Ejemplo:

1. Oferta clara.
2. Mensaje por etapa.
3. Canal de adquisicion.
4. Activo de conversion.
5. Seguimiento y medicion.

Despues de eso, el filtro tiene mas contexto.

### Que cambiar

- Cambiar CTAs repetidos de "Agenda tu llamada" por una jerarquia mas clara:
  - Primario: "Completa la aplicacion"
  - Secundario: "Ver si hay fit"
  - Terciario: "Leer recursos gratis"
- Donde dice "nos quedamos hasta que se resuelva de verdad", agregar un apoyo mas tangible:
  - "No solo entregamos recomendaciones: priorizamos, construimos los activos necesarios y acompanamos la ejecucion."
- En la seccion de inversion, evitar que el usuario sienta que el precio esta escondido. Si hay pisos de paquetes en Services, la Home puede decir:
  - "Los paquetes empiezan desde etapa temprana y suben segun alcance. Los rangos estan en Como trabajamos."

### En que profundizar

La Home necesita un bloque de "senales de que necesitas esto" mas situacional. Ya hay keywords, pero se pueden volver escenas:

- Tienes leads, pero nadie les hace seguimiento.
- Publicas contenido, pero no sabes que papel cumple en ventas.
- Cada propuesta se arma desde cero.
- El fundador cierra todo.
- Hay herramientas, pero no flujo.

Esto ayuda a que el usuario se diagnostique antes de llenar el formulario.

### Prioridad

Alta. La Home ya esta cerca, pero necesita convertir "sistema" en piezas concretas mas temprano.

---

## 4.2. Como trabajamos (`/services`)

### Que entiende el usuario

Esta es la pagina mas importante para explicar la oferta. Se entiende que RiBuzz trabaja por etapas, que hay cuatro fases y que cada paquete corresponde a un momento de madurez.

La pagina comunica:

- No se ejecuta sin diagnostico.
- La meta define tareas.
- La etapa define alcance.
- Hay paquetes por etapa.
- Hay soluciones puntuales.
- Hay modelo de inversion.

Eso es correcto.

### Lo que le falta entender

El usuario puede perderse entre demasiadas capas conceptuales:

- Fases: Diagnostico, Diseno, Implementacion, Acompanamiento.
- Tracks: Estrategia / Activos visuales y tecnologia.
- Paquetes: Fundamentos, Validacion, Traccion, Sistema.
- Diferencial: Estrategia, Comunicacion, Tecnologia.
- Soluciones puntuales: Marketing, Tecnologia, Estrategia.
- Modelo de inversion: retainer, fee por hitos, pauta.

Todo tiene sentido internamente, pero escaneado puede sentirse como muchos modelos mentales a la vez.

### Que reorganizar

Propuesta de orden mas comercial:

1. Hero: promesa y CTA.
2. "Elige tu punto de partida": paquetes por etapa.
3. "Que incluye cada paquete": entregables visibles.
4. "Como trabajamos": fases.
5. "Que puede salir del diagnostico": sistema completo o solucion puntual.
6. "Como cobramos": inversion.
7. Casos / prueba.
8. FAQ.
9. CTA.

Hoy la metodologia aparece antes de la oferta. Para usuarios calificados, la pregunta "que compro" suele venir antes de "como lo hacen".

### Que cambiar

- En paquetes, hacer mas visible el rango/precio/piso y el resultado esperado de cada etapa.
- Cambiar "Un paquete por etapa, no una cotizacion distinta cada vez" por algo aun mas centrado en usuario:
  - "Entras por la etapa en la que esta tu negocio."
- Agregar una matriz sencilla:
  - Etapa
  - Para quien
  - Que resolvemos primero
  - Que entregamos
  - Desde cuanto / como se cobra
  - Siguiente paso

### En que profundizar

Profundizar en "soluciones puntuales" para que no contradiga el discurso de sistema. Debe quedar claro:

"Una solucion puntual no es saltarse el diagnostico. Es diagnosticar y resolver solo el cuello de botella que mas impacto tiene."

Tambien profundizar en el fee por hitos, porque hoy suena interesante pero aun inmaduro. Si no esta formalizado, conviene manejarlo con prudencia:

- "En algunos casos, podemos evaluar un componente variable por hitos."
- "No aplica para todos los paquetes."
- "Se define despues de entender datos, margen y capacidad de medicion."

### Prioridad

Muy alta. Es la pagina donde se decide si RiBuzz es comprensible como oferta.

---

## 4.3. Diagnostico (`/diagnostico`)

### Que entiende el usuario

El usuario entiende que debe completar una aplicacion de 5-7 minutos y luego elegir horario. Tambien entiende que la llamada no es teoria, sino una lectura aterrizada.

El formulario esta bien pensado:

- Datos de contacto.
- Negocio actual.
- Proceso comercial.
- Freno principal.
- Meta.
- Presupuesto.
- Urgencia.
- Autoridad.
- Consentimiento.

La logica interna enruta a llamada, regalos o newsletter segun fit. Eso protege tiempo y calidad de leads.

### Lo que le falta entender

La pagina promete "agenda tu llamada", pero el sistema no siempre agenda. Si el fit score no llega a 3, el usuario recibe regalos o newsletter.

Esto puede sentirse como friccion si no se anticipa. No es malo filtrar, pero la promesa debe ser exacta.

### Que reorganizar

Mover el formulario mas arriba o incluir un resumen compacto antes de FAQ. Hoy la pagina muestra expectativas y FAQ antes del formulario. Eso ayuda a resolver objeciones, pero puede retrasar demasiado la accion para alguien caliente.

Propuesta:

1. Hero breve.
2. Formulario / aplicacion.
3. Que pasa despues segun fit.
4. FAQ.
5. WhatsApp.

O, si se quiere mantener FAQ antes, agregar un boton/ancla persistente:

"Ir a la aplicacion"

### Que cambiar

- Cambiar H1 a algo mas preciso:
  - "Completa la aplicacion y, si hay fit, agenda tu llamada de introduccion."
- Cambiar boton final del formulario:
  - "Enviar aplicacion y ver siguiente paso"
  ya esta bien, porque es honesto.
- Antes del formulario, explicar las tres salidas:
  - Si hay fit: agenda.
  - Si aun falta preparar terreno: recursos gratuitos.
  - Si no es el momento: lista de contenido.

### En que profundizar

Profundizar en criterios de fit sin revelar la logica exacta:

- Momento del negocio.
- Urgencia real.
- Capacidad de decision.
- Disposicion a invertir/ejecutar.

Esto hace que el usuario entienda por que se le pregunta presupuesto y autoridad.

### Prioridad

Critica. Es el punto de conversion. La promesa debe coincidir con la experiencia.

---

## 4.4. Sobre RiBuzz (`/about`)

### Que entiende el usuario

La pagina comunica origen, problema y valores. El hero es claro: no falta esfuerzo, falta conectar puntos. La historia de empresas que no sobreviven y el patron de dependencia de una sola persona apoya bien la tesis.

### Lo que le falta entender

Le falta autoridad concreta. El usuario entiende por que existe RiBuzz, pero no necesariamente por que RiBuzz esta calificado para resolverlo.

Faltan elementos como:

- Quien esta detras.
- Experiencia acumulada.
- Que tipos de negocios han trabajado.
- Que aprendizajes llevaron a crear el metodo.
- Que creen distinto a una agencia/consultora normal.

### Que reorganizar

Despues del origen, incluir un bloque de credibilidad:

"Lo que hemos visto trabajando con negocios reales"

Con bullets tipo:

- En negocios pequenos, el problema rara vez es una sola pieza.
- La mayoria ya intento contenido, pauta, web o freelancers.
- El cuello de botella suele estar entre oferta, seguimiento y capacidad operativa.
- Por eso RiBuzz trabaja desde diagnostico, no desde entregables sueltos.

### Que cambiar

La mision y vision son correctas, pero institucionales. Se pueden hacer mas operativas:

- Mision actual: amplia.
- Mejor: "Ayudamos a empresas que ya venden o estan validando a convertir su venta informal en un sistema medible: oferta, mensaje, activos, seguimiento y cadencia."

En "Asi somos", mantener comportamientos concretos. Esta seccion ya mejoro frente a versiones genericas, pero puede ganar mas si cada rasgo se formula como una decision observable.

### En que profundizar

Profundizar en filosofia:

- Que no hacen.
- Que no prometen.
- Como deciden prioridades.
- Como manejan cuando no hay fit.
- Que esperan del cliente.

Esa transparencia diferencia mas que decir "somos transparentes".

### Prioridad

Media-alta. No bloquea conversion directa, pero fortalece confianza.

---

## 4.5. Regalos (`/regalos`)

### Que entiende el usuario

El usuario ve una experiencia de desbloqueo de recursos. Es visual, memorable y esta alineada con la idea de dar valor antes de vender.

Despues de desbloquear, aparecen documentos como:

- Hagamos una oferta que nos lleve al espacio.
- Un iman para tu oferta y el valor de compartirlo.

### Lo que le falta entender

Antes de deslizar, no queda suficientemente claro que va a recibir y por que le conviene. "Valor que nos habria gustado saber antes" suena bonito, pero no dice:

- Es para mejorar oferta.
- Es para entender como atraer clientes.
- Es para preparar mejor el diagnostico.
- Es para negocios que aun no estan listos para una llamada.

### Que reorganizar

Agregar debajo del H1 una descripcion breve:

"Dos recursos para revisar tu oferta antes de invertir en marketing: como estructurarla y como convertirla en un iman que atraiga mejores conversaciones."

Y despues del desbloqueo, ordenar cada recurso por resultado:

- Si no sabes como empaquetar tu oferta: lee este.
- Si ya tienes oferta pero no atrae: lee este.

### Que cambiar

El mecanismo de "desliza para abrir" es atractivo, pero tambien puede ser una barrera. Para conversion, conviene que el valor sea visible antes de la interaccion. No revelar todo esta bien; ocultar demasiado no.

Cambiar "Te traemos valor que nos habria gustado saber antes" por algo mas concreto:

"Dos recursos para mejorar tu oferta antes de pedir mas marketing."

### En que profundizar

Conectar Regalos al pipeline:

- "Si vienes de la aplicacion y aun no era momento de llamada, empieza por aqui."
- "Si despues de leerlo identificas un cuello de botella, completa el diagnostico."

### Prioridad

Alta como activo de nurturing. Hoy es lindo; puede vender mejor sin perder encanto.

---

## 4.6. Contacto (`/contacto`)

### Que entiende el usuario

Contacto funciona como link hub. Comunica RiBuzz en una frase y da accesos a:

- WhatsApp.
- Diagnostico.
- Landings.
- NFC.
- Neo-Mech.
- Regalos.

Es util para Instagram, eventos o tarjetas.

### Lo que le falta entender

La pagina mezcla rutas de distinta jerarquia:

- Accion principal: agenda.
- Producto/servicio: crea tu landing.
- Producto: tarjetas NFC.
- Aliado/proyecto: Neo-Mech.
- Recursos: regalos.

Para un usuario nuevo, esto puede diluir el posicionamiento. Si llega desde redes y no conoce RiBuzz, puede pensar que RiBuzz hace "de todo": diagnosticos, landings, NFC, impresion 3D, regalos.

### Que reorganizar

Agrupar por intencion:

1. Quiero revisar mi negocio: Diagnostico.
2. Quiero una solucion puntual: Landing / NFC.
3. Quiero explorar antes: Regalos.
4. Aliados/proyectos: Neo-Mech.

O incluso separar "Neo-Mech" si no es parte directa del embudo RiBuzz.

### Que cambiar

La frase principal esta bien:

"No somos una agencia mas. Somos el sistema que conecta estrategia, comunicacion y tecnologia..."

Pero debajo de eso, las tarjetas deberian reforzar jerarquia:

- Diagnostico debe ser visualmente la accion principal.
- Landings y NFC deben decir "solucion puntual" o "activo comercial".
- Regalos debe decir "recurso gratuito".
- Neo-Mech debe aclarar si es aliado, cliente, producto propio o recomendacion.

### En que profundizar

Agregar microcopy de decision:

- "Si quieres saber que necesita tu negocio: diagnostico."
- "Si ya sabes que necesitas una landing: explora ejemplos."
- "Si necesitas capturar contactos en eventos: NFC."
- "Si apenas estas explorando: regalos."

### Prioridad

Alta para trafico de redes. Es una pagina de entrada, no solo de contacto.

---

## 4.7. Tarjetas NFC (`/tarjetas-nfc`)

### Que entiende el usuario

Esta pagina es clara como landing de producto. El usuario entiende:

- Que es una tarjeta NFC.
- Para que sirve.
- Como funciona.
- Casos de uso.
- Ejemplos.
- Precios.
- CTA por WhatsApp.

Es una de las paginas mas concretas de toda la web.

### Lo que le falta entender

Le falta integracion con el posicionamiento madre de RiBuzz. Es decir: por que una tarjeta NFC no es solo un producto fisico, sino un activo de conversion dentro del sistema comercial.

Si alguien llega desde la web principal, puede sentir que paso de "sistema comercial" a "producto barato de networking". Eso no es necesariamente malo, pero debe estar enmarcado.

### Que reorganizar

Agregar al hero o segunda seccion:

"Una tarjeta NFC no reemplaza tu sistema comercial; es una pieza para capturar mejor contactos en reuniones, eventos y puntos fisicos."

Y conectar con:

- Que pasa despues de guardar el contacto.
- Como se mide.
- Como se conecta con WhatsApp, CRM o seguimiento.

### Que cambiar

La promesa "Mas contactos = mas ventas" es entendible pero simplifica demasiado. Mejor:

"Mas contactos accionables, menos conversaciones perdidas."

Porque la tarjeta no garantiza ventas; mejora captura y seguimiento.

### En que profundizar

Profundizar en el despues:

- Que perfil se abre.
- Si incluye analytics.
- Si se puede conectar a CRM.
- Si se puede usar QR.
- Tiempo de entrega.
- Que necesita el cliente para empezar.

### Prioridad

Media-alta. La pagina vende bien, pero puede integrarse mejor al sistema RiBuzz.

---

## 4.8. Landings (`/landings`)

### Que entiende el usuario

El usuario entiende que RiBuzz crea landings/biolinks visuales y funcionales. La pagina muestra previews y ejemplos, lo cual ayuda a vender capacidad visual.

### Lo que le falta entender

No queda claro si esta pagina es:

- Un portafolio privado.
- Una oferta comercial de landings.
- Un catalogo de ejemplos.
- Una puerta de entrada para pedir una landing.
- Un componente del sistema RiBuzz.

El copy dice "Landings RiBuzz", "Biolinks con intencion", "A tu medida", "Cool y funcional", pero no hay una ruta comercial fuerte dentro de la pagina mas alla de navegar ejemplos.

### Que reorganizar

Definir el rol de la pagina:

Si es portafolio:

- H1: "Ejemplos de landings y experiencias digitales"
- CTA: "Quiero una experiencia como estas"

Si es oferta:

- H1: "Creamos landings que convierten visitas en conversaciones"
- Secciones: para quien, que incluye, proceso, ejemplos, precio desde / cotizacion, CTA.

Si es pieza del sistema:

- H1: "Landings como activos de conversion dentro de tu sistema comercial"
- Explicar que no se disena por disenar; se construye desde oferta, objetivo y canal.

### Que cambiar

"Cool y funcional" es debil para la promesa de RiBuzz. Puede sonar juvenil, pero no comunica criterio comercial.

Mejor:

- "Visuales, claras y pensadas para una accion concreta."
- "No solo botones: rutas de decision."
- "Cada landing tiene un objetivo: contacto, reserva, venta, lead o validacion."

### En que profundizar

Profundizar en:

- Tipos de landing.
- Que incluye.
- Cuanto tarda.
- Que necesita el cliente.
- Ejemplos por objetivo.
- Como se conecta con diagnostico o sistema.

### Prioridad

Media. Es satelite, pero importante porque puede confundir el posicionamiento si queda muy suelta.

---

## 4.9. Politica de privacidad (`/politica-de-privacidad`)

### Que entiende el usuario

La politica es clara, seria y suficiente para dar confianza. Explica datos recolectados, finalidad, proveedores, derechos y contacto.

### Lo que le falta entender

Nada critico desde comunicacion comercial. Solo hay que tener en cuenta que el archivo comenta que esta pendiente revision legal. Eso no lo ve el usuario, pero debe resolverse antes de depender demasiado de formularios y tratamiento de datos.

### Que reorganizar

No es necesario.

### Que cambiar

Desde experiencia, conviene que el link a politica desde el formulario diga:

"Politica de tratamiento de datos personales"

Ya esta alineado.

### En que profundizar

Si se escala captacion, agregar politica de cookies/analytics si aplica.

### Prioridad

Baja para copy, media para cumplimiento.

---

## 4.10. Navbar y Footer

### Que entiende el usuario

La navegacion principal es simple:

- Inicio.
- Como trabajamos.
- Sobre RiBuzz.
- Agenda tu llamada.
- Regalos.

Eso esta bien. La accion principal esta visible.

### Lo que le falta entender

El icono de regalos en navbar puede ser atractivo, pero sin texto visible en desktop puede ser ambiguo aunque tenga aria-label. Para usuarios nuevos, "regalo" puede ser una ruta secundaria o una distraccion.

Footer introduce landings y tarjetas NFC como ofrecimientos adicionales. Eso puede estar bien, pero necesita jerarquia.

### Que reorganizar

Footer:

1. Reforzar posicionamiento principal.
2. CTA diagnostico.
3. Links principales.
4. Recursos gratuitos.
5. Soluciones puntuales: landings, tarjetas NFC.
6. Legal/contacto.

### Que cambiar

En Footer, evitar que landings/NFC aparezcan como "tambien ofrecemos..." sin marco estrategico. Mejor:

"Tambien puedes explorar activos puntuales que suelen hacer parte del sistema: landings a medida y tarjetas NFC."

### En que profundizar

Agregar una pagina o bloque "Soluciones puntuales" que explique por que estas piezas existen y cuando convienen.

### Prioridad

Media-alta. Navbar/Footer afectan toda la experiencia.

---

# 5. Recomendaciones de arquitectura narrativa

## 5.1. Mensaje madre recomendado

RiBuzz no deberia definirse solo como "sistema de crecimiento". Deberia definirse con una frase que incluya problema, mecanismo y resultado:

"RiBuzz ayuda a empresas que ya venden, pero crecen de forma irregular, a convertir su venta informal en un sistema comercial medible: oferta, mensaje, activos, seguimiento y tecnologia trabajando en el mismo flujo."

Esta frase aterriza mejor que "estrategia + comunicacion + tecnologia" porque muestra las piezas.

## 5.2. Jerarquia de ofertas

Propuesta:

### Oferta principal

Sistema comercial RiBuzz:

- Diagnostico.
- Diseno del embudo.
- Implementacion de activos.
- Acompanamiento.

### Entradas segun madurez

- Fundamentos.
- Validacion.
- Traccion.
- Sistema.

### Soluciones puntuales

Solo despues de diagnostico o cuando el usuario ya sabe el activo que necesita:

- Landing.
- Automatizacion.
- CRM.
- NFC.
- Mensaje/oferta.

### Nurturing

- Regalos.
- Newsletter.
- Contenido educativo.

## 5.3. CTA hierarchy

Usar menos variaciones de "agenda" y mas precision:

- "Completa la aplicacion"
- "Ver si hay fit"
- "Agenda si hay fit"
- "Leer recursos gratis"
- "Solicitar tarjeta NFC"
- "Explorar landings"

---

# 6. Cambios prioritarios

## P0 — Critico

1. Cambiar el lenguaje de Diagnostico para que coincida con el ruteo real.
   - De "agenda tu llamada" a "completa la aplicacion y, si hay fit, agenda".

2. En Services, mostrar primero paquetes/entregables antes de explicar demasiados modelos.
   - El usuario necesita entender que compra.

3. Agregar una seccion visible: "Que significa sistema comercial en RiBuzz".
   - Oferta, mensaje, canal, activo, seguimiento, metricas.

## P1 — Alto

4. Reencuadrar Landings y NFC como activos puntuales dentro o alrededor del sistema.

5. Reforzar prueba social con mini casos:
   - Problema.
   - Intervencion.
   - Activo.
   - Resultado/aprendizaje.

6. Mejorar Regalos para que el valor sea claro antes de desbloquear.

## P2 — Medio

7. Reordenar Contacto como decision hub.

8. Ajustar Footer para que no diluya la oferta principal.

9. Agregar tiempos aproximados y requisitos por paquete.

## P3 — Bajo

10. Revisar microcopy de botones secundarios y estados interactivos.

---

# 7. Copy recomendado por pagina

## Home

H1 actual funciona. Se puede mantener. Agregaria bajada:

"Revisamos oferta, mensaje, canales, seguimiento y tecnologia para encontrar donde se rompe tu crecimiento y construir el flujo que lo sostiene."

## Services

Nuevo H1 posible:

"Elige la etapa de tu negocio. Nosotros definimos el sistema que necesita para avanzar."

Bajada:

"No todas las empresas necesitan lo mismo. Algunas necesitan validar oferta; otras, ordenar seguimiento; otras, construir activos y medir conversion. Por eso empezamos por diagnostico y entramos por etapa."

## Diagnostico

Nuevo H1:

"Completa la aplicacion y, si hay fit, agenda tu llamada de introduccion."

Bajada:

"Son 5-7 minutos. Con tus respuestas revisamos etapa, urgencia, capacidad de decision y tipo de problema. Si podemos ayudarte ahora, eliges horario en el calendario; si no, te dejamos el siguiente paso mas util."

## About

Bajada recomendada:

"RiBuzz nace de ver el mismo patron: negocios con buen producto, ventas reales y mucho esfuerzo, pero sin un flujo comercial que puedan repetir, medir y mejorar."

## Regalos

H1 recomendado:

"Dos recursos para mejorar tu oferta antes de pedir mas marketing."

Bajada:

"Empieza por entender que estas prometiendo, a quien se lo prometes y como convertirlo en una conversacion comercial mas clara."

## Contacto

Microcopy de hub:

"Elige segun lo que necesitas ahora."

Opciones:

- "Revisar mi sistema comercial" -> Diagnostico.
- "Explorar una landing" -> Landings.
- "Capturar contactos en eventos o reuniones" -> NFC.
- "Aprender antes de avanzar" -> Regalos.

## Tarjetas NFC

Bajada recomendada:

"Una tarjeta NFC es una pieza de captura: convierte reuniones, eventos y visitas en contactos que puedes seguir por WhatsApp, CRM o el flujo que ya tengas."

## Landings

H1 recomendado si es oferta:

"Landings que convierten visitas en conversaciones."

Bajada:

"Disenamos experiencias digitales con una accion clara: contacto, reserva, compra, lead o validacion. No son paginas bonitas aisladas; son activos de conversion."

---

# 8. Conclusion

RiBuzz ya tiene una base estrategica fuerte. La web no necesita "mas secciones" por volumen; necesita que cada seccion haga un trabajo mas preciso dentro del pipeline.

La gran decision es jerarquica:

- RiBuzz = sistema comercial.
- Diagnostico = puerta de entrada.
- Paquetes = forma de comprar segun etapa.
- Soluciones puntuales = activos que se activan cuando el diagnostico lo justifica o cuando la necesidad ya es clara.
- Regalos = nutricion para quien aun no esta listo.

Si esa jerarquia queda clara, la pagina deja de sentirse como "hacemos estrategia, marketing, tecnologia, landings, NFC y regalos" y empieza a sentirse como:

"RiBuzz entiende donde se rompe tu crecimiento y te lleva al siguiente paso correcto, sea diagnostico, sistema completo, activo puntual o preparacion previa."

