export type OfferPackage = {
  stage: string;
  title: string;
  forWhom: string;
  typicalNeed: string;
  typicalFailure: string;
  outcome: string;
  includes: string[];
  billing: string;
};

export type Step = {
  title: string;
  description: string;
  points: string[];
  outcome: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ContentBlock = {
  title: string;
  description: string;
};

export const homeProblemKeywords = [
  {
    title: "Invertiste y no hubo respuesta",
    description: "Ya probaste soluciones, campañas, herramientas o asesorías, pero el negocio no respondió como esperabas.",
    detail:
      "El problema no siempre es la solución comprada: muchas veces falta ubicar qué pieza del sistema debía moverse primero.",
  },
  {
    title: "Quieres crecer, no sabes dónde",
    description: "Sabes que el negocio puede vender más, pero no tienes claro si el bloqueo está en la oferta, el canal, el equipo, el seguimiento o la operación.",
    detail:
      "El sistema empieza por diagnosticar dónde está el cuello de botella real para dejar de tomar decisiones por intuición o urgencia.",
  },
  {
    title: "Haces mucho, avanzas poco",
    description: "Publicas, respondes, pruebas herramientas y tomas decisiones, pero no sabes qué está moviendo realmente el resultado.",
    detail:
      "El problema no siempre es hacer más: muchas veces es conectar lo que ya haces para que cada acción tenga una función dentro del crecimiento.",
  },
  {
    title: "Automatizar sin saber qué",
    description: "Ves tareas repetidas y oportunidades que se pierden, pero automatizar sin orden solo vuelve más rápido el mismo desorden.",
    detail:
      "Primero se define el flujo correcto; después se automatiza lo que realmente debe repetirse, medirse o delegarse.",
  },
] as const;

export const homeProblemSynthesis =
  "No son problemas sueltos: son señales de que el negocio necesita convertir estrategia, comunicación, tecnología y operación en un sistema claro.";

export const commercialSystemPieces = [
  {
    title: "Oferta",
    description:
      "Qué prometes, a quién se lo prometes y por qué debería importarle ahora.",
    details: [
      "Define el problema prioritario que resuelves.",
      "Aterriza cliente ideal, promesa, pricing y objeciones.",
      "Evita vender algo que el mercado no entiende o no valora.",
    ],
  },
  {
    title: "Mensaje",
    description:
      "Qué decir en cada etapa para que el usuario entienda el problema, la solución y el siguiente paso.",
    details: [
      "Convierte la oferta en argumentos claros.",
      "Ordena hooks, pruebas, objeciones y llamados a la acción.",
      "Hace que cada canal diga lo correcto según el momento del usuario.",
    ],
  },
  {
    title: "Canales",
    description:
      "Dónde captar atención sin dispersar esfuerzos entre publicaciones, pauta, referidos o eventos sin criterio.",
    details: [
      "Prioriza dónde buscar clientes según etapa y capacidad.",
      "Define qué canal se usa para atraer, educar o cerrar.",
      "Evita gastar energía en tácticas que no mueven el pipeline.",
    ],
  },
  {
    title: "Activos",
    description:
      "Landing, CRM, automatizaciones, piezas visuales o flujos que convierten interés en conversaciones medibles.",
    details: [
      "Convierte la estrategia en herramientas que operan.",
      "Incluye landings, CRM, automatizaciones, contenido o integraciones.",
      "Reduce fricción entre interés, conversación y seguimiento.",
    ],
  },
  {
    title: "Seguimiento",
    description:
      "Cadencia, responsables, métricas y decisiones para que las oportunidades no dependan de memoria o improvisación.",
    details: [
      "Define qué pasa después de cada lead o conversación.",
      "Ordena responsables, tiempos, métricas y próximos pasos.",
      "Hace que las oportunidades no se pierdan por falta de sistema.",
    ],
  },
] as const;

export const commercialSystemSynthesis =
  "Cuando hablamos de sistema no hablamos de hacer más cosas: hablamos de conectar estas piezas en un flujo que se pueda repetir, medir y mejorar.";

export const fitChecklist = [
  "Fundadores o equipos que ya venden, pero sienten que el crecimiento depende demasiado de ellos.",
  "Marcas con oferta validada que necesitan ordenar captación, conversión y seguimiento.",
  "Empresas que ya invirtieron en pauta, contenido, web o automatizaciones sin ver avance claro.",
] as const;

export const nonFitChecklist = [
  "Negocios que solo quieren publicaciones, diseños o pauta sin revisar el sistema de fondo.",
  "Empresas que quieren delegar todo el crecimiento sin participar en decisiones clave.",
  "Ideas sin oportunidad clara, urgencia real o intención de convertir el diagnóstico en acción.",
] as const;

export const offerPackages: OfferPackage[] = [
  {
    stage: "Ideación",
    title: "Fundamentos",
    forWhom:
      "Tienes un problema identificado y necesitas convertirlo en una oferta clara.",
    typicalNeed:
      "Marcas con una idea, oportunidad o problema claro, pero sin una oferta lista para vender, construir activos o invertir en pauta.",
    typicalFailure:
      "Falta definición: qué vender, a quién, por qué importa, cuánto vale y cuál es la siguiente decisión.",
    outcome:
      "Sales con una hipótesis de oferta priorizada, lectura de mercado y criterios claros para avanzar con foco.",
    includes: [
      "Acompañamiento semanal para ordenar oferta, cliente y siguiente decisión.",
      "Lectura de mercado, competencia y contexto real del problema.",
      "Hipótesis de valor, pricing y criterios para decidir qué construir.",
    ],
    billing: "Estrategia y acompañamiento semanal, sin ejecución de activos todavía.",
  },
  {
    stage: "Pre-Incubación",
    title: "Validación",
    forWhom:
      "Tu primera versión está en construcción o recién lanzada, y estás probando con clientes iniciales.",
    typicalNeed:
      "Marcas con algo para mostrar o vender, pero que necesitan probar si el mercado entiende y responde.",
    typicalFailure:
      "Hay pilotos, publicaciones, pauta o reuniones, pero no queda claro qué ajustar en oferta, mensaje, cliente o canal.",
    outcome:
      "Sales con una ruta de validación, mensaje de entrada y estructura para convertir pilotos en aprendizaje comercial.",
    includes: [
      "Acompañamiento semanal para validar oferta, mensaje, cliente y canal de entrada.",
      "Piezas comerciales, pitch, landing ligera o pruebas de pauta cuando corresponda.",
      "Criterios para convertir pilotos y conversaciones en decisiones claras.",
    ],
    billing: "Pago mensual de estrategia con recursos puntuales para activos de validación.",
  },
  {
    stage: "Incubación",
    title: "Tracción",
    forWhom:
      "Ya tienes oferta validada y clientes reales. Ahora necesitas sostener el crecimiento.",
    typicalNeed:
      "Marcas que ya venden, pero dependen demasiado de responder rápido, perseguir oportunidades y dar seguimiento a mano.",
    typicalFailure:
      "Hay interés, conversaciones o pauta activa, pero no un flujo claro para captar, convertir, medir y seguir oportunidades.",
    outcome:
      "Sales con un activo de conversión operativo y un flujo de captación, respuesta y seguimiento más ordenado.",
    includes: [
      "Acompañamiento semanal para priorizar crecimiento, conversión y seguimiento.",
      "Activos de marketing, pauta o tecnología según la meta: páginas, landings, automatizaciones o flujos.",
      "Ajuste de oferta, mensaje y operación para convertir interés en oportunidades medibles.",
    ],
    billing: "Pago mensual con estrategia, acompañamiento y recursos de ejecución según objetivos trazados.",
  },
  {
    stage: "Consolidación",
    title: "Sistema",
    forWhom:
      "Ya vendes con consistencia y necesitas que estrategia, tecnología, pauta y operación trabajen juntas.",
    typicalNeed:
      "Marcas con ventas, equipo, canales, pauta y herramientas, pero sin una misma dirección para escalar.",
    typicalFailure:
      "Estrategia, comunicación, pauta, CRM, seguimiento y decisiones existen, pero operan por separado.",
    outcome:
      "Sales con estrategia, operación, tecnología y adquisición conectadas bajo una cadencia de mejora.",
    includes: [
      "Acompañamiento semanal para sostener estrategia, operación y decisiones de crecimiento.",
      "Marketing, tecnología, automatización, pauta, SOPs, tableros y activos a medida.",
      "Cadencia de mejora para ajustar oferta, canales, procesos y metas con datos reales.",
    ],
    billing: "Pago mensual con equipo y recursos dedicados según alcance, metas e intensidad operativa.",
  },
];

export type OfferLogicTrack = {
  title: string;
  description: string;
  items: string[];
};

export const offerLogicIntro =
  "Primero entendemos qué quieres lograr y qué está frenando el avance. Con eso definimos cuánto peso necesita la estrategia, qué activos o pauta hacen falta, qué tecnología debe sostener el flujo y qué seguimiento debe operar.";

export const offerLogicTracks: OfferLogicTrack[] = [
  {
    title: "Estrategia y dirección",
    description: "Ordena la decisión central antes de ejecutar: qué vender, a quién, con qué promesa y en qué orden avanzar.",
    items: [
      "Meta comercial y prioridad de crecimiento",
      "Oferta, cliente, pricing y modelo de negocio",
      "Canales, mensajes y siguientes pasos",
    ],
  },
  {
    title: "Activos, pauta y tecnología",
    description: "Convierte la estrategia en piezas y herramientas que captan, convierten y permiten medir.",
    items: [
      "Páginas, landings y activos de conversión",
      "Pauta, contenidos o pruebas de canal cuando aplica",
      "Automatizaciones e integraciones",
    ],
  },
  {
    title: "Ejecución y seguimiento",
    description: "Mantiene el sistema activo para que las oportunidades no dependan de memoria o urgencia.",
    items: [
      "Revisión de métricas, oportunidades y bloqueos",
      "Ajustes de oferta, canal, pauta o activo",
      "Responsables, procesos y próximos movimientos",
    ],
  },
];

export const offerLogicStageNote =
  "En etapas tempranas pesa más la estrategia. Cuando ya hay validación y ventas, se suman activos, pauta, automatizaciones, procesos y acompañamiento operativo.";

export const methodologySteps: Step[] = [
  {
    title: "Diagnóstico",
    description:
      "Ubicamos dónde se está frenando el crecimiento: llegada, oferta, cierre, seguimiento u operación.",
    points: [
      "Revisamos tráfico, conversión, mensajes y seguimiento.",
      "Identificamos oportunidades reales, no supuestos.",
    ],
    outcome: "Claridad sobre dónde intervenir primero y si tiene sentido avanzar.",
  },
  {
    title: "Diseño",
    description:
      "Definimos el flujo que debe operar: mensaje, canal, medición y orden de ejecución.",
    points: [
      "Priorizamos flujo comercial, mensajes y canales.",
      "Definimos qué se mide y qué decisión sigue.",
    ],
    outcome: "Dirección clara antes de construir o invertir más.",
  },
  {
    title: "Implementación",
    description:
      "Construimos lo necesario para que el sistema funcione: activos, automatizaciones, integraciones o piezas a medida.",
    points: [
      "Páginas, landings, formularios, flujos o activos operativos.",
      "Automatización, seguimiento y medición según el alcance.",
    ],
    outcome: "Herramientas, activos y procesos listos para operar.",
  },
  {
    title: "Acompañamiento",
    description:
      "Revisamos resultados, ajustamos decisiones y sostenemos el sistema en una cadencia clara.",
    points: [
      "Seguimiento de hitos, avances y bloqueos.",
      "Ajustes de mensaje, canal, pauta, oferta o proceso.",
    ],
    outcome: "Continuidad para mejorar sin volver a improvisar.",
  },
];

export type PaymentModelPart = {
  label: string;
  title: string;
  appliesTo: string;
  description: string;
  items: string[];
};

export const paymentModelParts: PaymentModelPart[] = [
  {
    label: "1 · Trabajo base",
    title: "Trabajo mensual acordado",
    appliesTo: "Aplica en todas las etapas",
    description:
      "Cubre estrategia, acompañamiento y ejecución según la etapa, el objetivo y los entregables definidos.",
    items: [
      "Puede ser solo estrategia y mentoría en etapas tempranas.",
      "Puede incluir ejecución, tecnología, pauta o seguimiento en etapas más avanzadas.",
      "Se define antes de iniciar, con entregables y dedicación clara.",
    ],
  },
  {
    label: "2 · Variable",
    title: "Solo cuando el impacto se puede medir",
    appliesTo: "Aplica si hay métricas comerciales claras",
    description:
      "Puede existir comisión por venta o pago por hitos si hay métricas claras y atribución real.",
    items: [
      "Puede ser comisión por venta si hay atribución clara.",
      "Puede ser pago por hitos si el objetivo es mover leads, conversión, ventas o pipeline.",
      "La métrica y las condiciones quedan documentadas antes de empezar.",
    ],
  },
  {
    label: "3 · Costos externos",
    title: "Pauta, herramientas y terceros",
    appliesTo: "Aplica según el alcance operativo",
    description:
      "Pauta, software, dominios, producción o terceros se presupuestan aparte y se definen antes de ejecutar.",
    items: [
      "La pauta se define aparte y se usa completa para adquisición.",
      "Herramientas, dominios, software o producción se presupuestan según necesidad.",
      "Todo costo externo queda identificado antes de ejecutar.",
    ],
  },
];

export type DifferentiatorPillar = {
  shortLabel: string;
  label: string;
  title: string;
  description: string;
  items: string[];
};

export const differentiatorPillars: DifferentiatorPillar[] = [
  {
    shortLabel: "Estrategia",
    label: "Qué responde",
    title: "Qué vender, a quién y por qué ahora",
    description:
      "Definimos la dirección antes de ejecutar.",
    items: [
      "Modelo de negocio y oferta",
      "Pricing y prioridades comerciales",
      "Estudio de mercado y criterios de decisión",
    ],
  },
  {
    shortLabel: "Comunicación",
    label: "Qué responde",
    title: "Cómo convertir atención en conversación",
    description:
      "Convertimos el mensaje en avance comercial.",
    items: [
      "Cliente, canales y narrativa",
      "Contenido, campañas y pitch",
      "Mensajes para conversión y seguimiento",
    ],
  },
  {
    shortLabel: "Tecnología",
    label: "Qué responde",
    title: "Cómo sostener el flujo sin depender de memoria",
    description:
      "Construimos la base para operar y medir.",
    items: [
      "Automatizaciones e integraciones",
      "Formularios, tableros y flujos",
      "Herramientas para seguimiento operativo",
    ],
  },
];

export const differentiatorSynthesis =
  "Estas tres piezas no operan por separado: son un solo sistema. Por eso no vendemos más marketing — vendemos la estructura completa que hace que tu negocio crezca con consistencia.";

export type PunctualSolutionArea = {
  title: string;
  description: string;
};

export const punctualSolutionAreas: PunctualSolutionArea[] = [
  {
    title: "Oferta y mensaje",
    description:
      "Estudio de mercado, definición de oferta, modelo de negocio, pricing, manual de marca, pitch o mensajes de conversión.",
  },
  {
    title: "Activos de conversión",
    description:
      "Landing, página, formulario, presentación, creación de contenido o pieza comercial.",
  },
  {
    title: "Tecnología y seguimiento",
    description:
      "Automatizaciones, integraciones, WhatsApp, tableros o flujos operativos.",
  },
  {
    title: "Pauta y adquisición",
    description:
      "Estructura de campaña, canal, medición, pruebas o ajustes para captar mejor.",
  },
];

export const punctualSolutionsIntro =
  "Si el diagnóstico muestra que el problema está en una pieza concreta, resolvemos esa pieza con alcance claro, sin convertirlo en un proceso completo.";

export type PunctualSolutionModel = {
  title: string;
  description: string;
};

export const punctualSolutionModels: PunctualSolutionModel[] = [
  {
    title: "Proyecto puntual",
    description:
      "Un entregable cerrado, con alcance, fecha y criterio de éxito definidos desde el inicio.",
  },
  {
    title: "Acompañamiento mensual",
    description:
      "Cuando la pieza necesita seguimiento, medición o ajustes durante más tiempo.",
  },
];

export const punctualSolutionsCaveat =
  "La diferencia no está en el criterio: siempre diagnosticamos primero. La diferencia está en el alcance de lo que se resuelve.";

export const aboutOrigin = [
  {
    title: "Buen producto, crecimiento irregular",
    description:
      "La oferta existe, pero el crecimiento depende de momentos, referidos o esfuerzos aislados.",
  },
  {
    title: "Piezas que no se hablan",
    description:
      "Hay contenido, pauta, web o tecnología, pero no trabajan bajo una misma dirección.",
  },
  {
    title: "El fundador cargando demasiado",
    description:
      "Cuando todo depende de una persona, crecer se vuelve frágil.",
  },
] as const;

export const aboutLearnings = [
  {
    title: "Primero hay que encontrar el bloqueo",
    description:
      "Una campaña, una web o una automatización solo funcionan cuando responden al punto exacto donde se está frenando el avance.",
  },
  {
    title: "Las piezas sueltas no garantizan avance",
    description:
      "Un activo funciona cuando tiene un problema claro que resolver.",
  },
  {
    title: "La dependencia vuelve frágil el crecimiento",
    description:
      "Si todo vive en la cabeza de alguien, el negocio no escala con consistencia.",
  },
  {
    title: "Diagnosticar evita construir de más",
    description:
      "Primero ubicamos el bloqueo. Después decidimos qué construir.",
  },
] as const;

export const aboutMissionVision = [
  {
    title: "Misión",
    description:
      "Ayudar a empresas en validación o crecimiento a vender con más claridad, estructura y seguimiento.",
  },
  {
    title: "Visión",
    description:
      "Ser el sistema de crecimiento comercial que más empresas reconocen por convertir intentos en avance medible.",
  },
] as const;

export const aboutTraits = [
  {
    title: "Claridad antes de ejecución",
    description:
      "Antes de construir, definimos qué problema se debe mover.",
  },
  {
    title: "Decisiones con contexto",
    description:
      "Cada recomendación parte del momento real de la empresa.",
  },
  {
    title: "Acompañamiento sin dependencia",
    description:
      "Acompañamos para dejar capacidad instalada.",
  },
  {
    title: "Impacto por encima de tareas",
    description:
      "Medimos valor por claridad, avance y capacidad de operar mejor.",
  },
] as const;

export const diagnosisExpectations = [
  {
    title: "Lectura de etapa y bloqueo",
    description:
      "Ubicamos si el problema está en oferta, canal, conversión, seguimiento, tecnología u operación.",
  },
  {
    title: "Alcance antes de propuesta",
    description:
      "Antes de hablar de inversión, definimos qué necesita moverse y qué tareas corresponden.",
  },
  {
    title: "Siguiente paso concreto",
    description:
      "La ruta queda clara: llamada, preparación con recursos o seguimiento hasta que el momento sea más preciso.",
  },
] as const;

export const diagnosisNextSteps = [
  {
    eyebrow: "Si ya hay contexto",
    title: "Llamada de introducción",
    description:
      "Si tu momento requiere intervención directa, agendas un horario y llegamos con contexto para hablar de alcance.",
  },
  {
    eyebrow: "Si falta ordenar base",
    title: "Preparación de oferta",
    description:
      "Si la base necesita orden primero, recibes recursos para aclarar oferta, cliente y siguiente decisión.",
  },
  {
    eyebrow: "Si aún no es momento",
    title: "Seguimiento",
    description:
      "Si todavía no es momento de intervenir, quedas en una ruta de criterio para retomar con más claridad.",
  },
] as const;

export const contactFaqs: FAQ[] = [
  {
    question: "¿RiBuzz es una agencia de marketing?",
    answer:
      "RiBuzz no opera como una agencia tradicional. El marketing puede ser parte de la solución, pero antes de tocar cualquier pieza pasamos por el mismo diagnóstico que aplicamos al sistema completo. El resultado puede ser un proyecto puntual en una sola área o el sistema completo. Lo que no hacemos es ejecutar sin diagnosticar primero.",
  },
  {
    question: "¿Esto es consultoría o sí hay ejecución?",
    answer:
      "Hay criterio y hay ejecución. Primero se entiende el problema, después se diseña la estructura, luego se pone en marcha y se acompaña con una cadencia definida.",
  },
  {
    question: "¿Qué pasa si no sé exactamente cuál es mi problema?",
    answer:
      "Es normal. La llamada de introducción existe justamente para detectar si el cuello de botella está en adquisición, conversión, seguimiento o estructura comercial.",
  },
  {
    question: "¿Qué pasa después de completar la aplicación?",
    answer:
      "La aplicación clasifica tu ruta. Puedes pasar a llamada de introducción, recibir recursos para preparar mejor tu oferta o quedar en seguimiento hasta que el momento sea más concreto.",
  },
  {
    question: "¿Qué hace que RiBuzz sea diferente?",
    answer:
      "RiBuzz no empieza ejecutando, no vende servicios sueltos y no deja la solución en teoría. Entiende, prioriza, estructura, implementa y acompaña.",
  },
  {
    question: "¿Qué tipo de empresas no deberían trabajar con RiBuzz?",
    answer:
      "Negocios que solo quieren más marketing sin revisar el sistema de fondo, clientes que esperan magia o resultados sin involucrarse, y equipos que no quieren ejecutar ni ajustar su forma de vender.",
  },
  {
    question: "¿Esto aplica para cualquier industria?",
    answer:
      "No depende tanto de la industria como del problema. RiBuzz ya ha trabajado en servicios, educación, construcción y contextos B2B con una misma lógica comercial.",
  },
  {
    question: "¿Qué pasa si ya he trabajado con agencias o freelancers?",
    answer:
      "Es común. Muchas empresas llegan después de invertir en marketing o desarrollo sin resultados consistentes. RiBuzz ayuda a entender por qué pasó y cómo reordenarlo mejor.",
  },
  {
    question: "¿Qué tan involucrado tengo que estar?",
    answer:
      "Bastante. Esto no funciona si delegas todo y te desconectas. Se necesita participación, decisiones y disposición real a ejecutar.",
  },
  {
    question: "¿Cómo sé si este es el momento correcto para trabajar con RiBuzz?",
    answer:
      "Es el momento correcto cuando ya estás vendiendo o intentando vender, sientes fricción, dependes demasiado del fundador y necesitas claridad sobre qué priorizar.",
  },
  {
    question: "¿RiBuzz vende por mi empresa o ejecuta las ventas?",
    answer:
      "No. RiBuzz no reemplaza tu equipo comercial ni vende por ti. Diseña el sistema, implementa soportes y ayuda a estructurar mejor cómo debe vender el negocio.",
  },
];

export const howWeWorkFaqs: FAQ[] = [
  {
    question: "¿Necesito ya estar vendiendo para trabajar con RiBuzz?",
    answer:
      "No necesariamente. Si tu empresa está en etapa de Ideación o Validación, hay un paquete de Estrategia pensado para ese momento. El paquete Sistema sí asume que ya vendes con cierta consistencia.",
  },
  {
    question: "¿La llamada de introducción tiene costo?",
    answer:
      "No. Es una conversación corta para entender tu momento, ubicar tu etapa y definir si corresponde una propuesta de trabajo.",
  },
  {
    question: "¿Cómo funciona la comisión por venta o el pago por hitos?",
    answer:
      "El pago mensual cubre la capacidad de trabajo acordada. Cuando la etapa y el alcance permiten medir impacto directo, se suma un pago variable: comisión por venta si hay atribución clara, o pago por hitos si el objetivo es mover métricas como leads calificados, tasa de conversión, ventas cerradas o avance de pipeline. Todo queda documentado antes de iniciar.",
  },
  {
    question: "¿Tengo que contratar el paquete completo desde el inicio?",
    answer:
      "No. Empiezas en el paquete que corresponde a tu etapa actual y avanzas cuando el negocio lo pida, no antes.",
  },
];

export const homeFaqs: FAQ[] = [
  {
    question: "¿Qué estoy comprando realmente si RiBuzz trabaja con mi empresa?",
    answer:
      "No compras publicaciones, una landing o una automatización aislada. Compras un sistema de crecimiento ajustado a tu etapa: diagnóstico, estrategia, comunicación, tecnología, activos, seguimiento y operación según lo que el negocio necesita mover.",
  },
  {
    question: "Ya invertí en soluciones y no vi respuesta. ¿Qué cambia aquí?",
    answer:
      "Empezamos por ubicar el cuello de botella antes de construir. Muchas empresas ya pagaron pauta, contenido, web, CRM o asesorías sin resultado porque la pieza correcta no estaba conectada al problema correcto. RiBuzz define primero qué se debe mover y en qué orden.",
  },
  {
    question: "¿Qué pasa si no veo crecimiento o avance?",
    answer:
      "Sabemos que crecer tiene incertidumbre, por eso antes de empezar definimos hitos claros de avance. Si el trabajo no muestra progreso verificable sobre lo acordado, revisamos la intervención y activamos reintegro del servicio según las condiciones pactadas en la propuesta.",
  },
  {
    question: "¿La oferta es igual para todas las empresas?",
    answer:
      "No. Cada empresa entra por una etapa distinta y con objetivos distintos. Algunas necesitan solo estrategia y mentoría; otras necesitan activos, automatizaciones, páginas web, CRM, adquisición o acompañamiento. La propuesta se arma después de entender contexto, urgencia y alcance real.",
  },
  {
    question: "¿En cuánto tiempo se empieza a notar avance?",
    answer:
      "Depende de la etapa. En diagnóstico y diseño el avance se ve en claridad, prioridades y ruta de acción. En implementación se ve en activos, procesos y capacidad operativa. En acompañamiento se mide con indicadores como avance de pipeline, conversión, seguimiento, ventas o cumplimiento de hitos.",
  },
  {
    question: "¿Necesito tener equipo, CRM o herramientas listas?",
    answer:
      "No necesariamente. Si ya tienes equipo o herramientas, las ordenamos e integramos al sistema. Si no las tienes, definimos qué hace falta construir, automatizar o delegar sin llenarte de tecnología innecesaria.",
  },
  {
    question: "¿Qué tipo de empresas pueden trabajar con RiBuzz?",
    answer:
      "Trabajamos con empresas que ya tienen una oferta o ventas, pero necesitan más claridad, sistema y capacidad para crecer. No importa tanto el sector como el momento: debe existir disposición para revisar el negocio con honestidad y ejecutar cambios.",
  },
  {
    question: "¿Cómo se agenda el siguiente paso?",
    answer:
      "Completas una aplicación breve de 5-7 minutos. Con tus respuestas clasificamos tu ruta y, si corresponde llamada, agendas directamente en el calendario. Si todavía no es momento de avanzar, te orientamos con recursos o seguimiento.",
  },
  {
    question: "¿Trabajan solo en Medellín o Colombia?",
    answer:
      "Nuestra base está en Colombia, pero podemos trabajar con empresas de cualquier ciudad o país de habla hispana. La metodología se adapta a trabajo remoto, siempre que haya información, comunicación y capacidad de ejecución.",
  },
];
