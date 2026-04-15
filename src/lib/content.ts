export type Service = {
  layer: string;
  title: string;
  summary: string;
  idealClient: string;
  expectedResult: string;
  deliverables: string[];
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

export const homePainPoints = [
  {
    title: "Esfuerzos comerciales dispersos",
    description:
      "Marketing, herramientas y seguimiento avanzan de forma aislada, sin una lógica unificada que mantenga predecible el ciclo.",
  },
  {
    title: "Fricción al convertir y seguir",
    description:
      "Se logran conversaciones o interés inicial, pero se enfrían rápido por falta de orden, respuesta rápida y estructura de seguimiento.",
  },
  {
    title: "Dependencia estricta del fundador",
    description:
      "El criterio, el impulso comercial y casi todos los cierres pesados de venta siguen recayendo absolutamente en una sola persona.",
  },
  {
    title: "Estancamiento invisible a ciegas",
    description:
      "Existe un cuello de botella evidente que afecta la caja y el crecimiento, pero no hay claridad precisa sobre dónde o urgente qué priorizar.",
  },
] as const;

export const solutionSequence = [
  {
    title: "Entendemos primero",
    description:
      "Leemos negocio, oferta, proceso comercial, equipo y contexto antes de recomendar cualquier acción.",
  },
  {
    title: "Diagnosticamos el sistema",
    description:
      "Identificamos si el problema está en captación, conversión, seguimiento o en la estructura comercial completa.",
  },
  {
    title: "Diseñamos la estructura",
    description:
      "Ordenamos prioridades, mensajes, etapas comerciales, soportes de conversión y hoja de ruta.",
  },
  {
    title: "Implementamos lo necesario",
    description:
      "Activamos herramientas, activos y automatizaciones cuando hacen operable lo que ya fue definido.",
  },
  {
    title: "Acompañamos la ejecución",
    description:
      "Revisamos avances, ajustamos decisiones y ayudamos a sostener el aprendizaje comercial.",
  },
] as const;

export const fitChecklist = [
  "Empresas que ya están operando y ya venden o ya han intentado vender.",
  "Negocios que sienten fricción en su crecimiento y no quieren seguir en ensayo y error.",
  "Equipos abiertos a cuestionar su forma de operar y a ordenar mejor su sistema comercial.",
  "Clientes con disposición a ejecutar y a participar en las decisiones importantes.",
  "Empresas que entienden qué el problema no siempre es hacer mas, sino estructurar mejor.",
] as const;

export const nonFitChecklist = [
  "Negocios qué aún no validan su oferta o todavía no tienen base comercial mínima.",
  "Empresas que solo quieren más marketing sin revisar el sistema de fondo.",
  "Clientes que esperan magia, promesas vacías o resultados sin involucrarse.",
  "Equipos que no quieren ejecutar ni ajustar su forma de vender.",
  "Negocios que buscan delegar por completo la venta a un tercero.",
] as const;

export const servicePreview = [
  {
    title: "Diseño del flujo y sistema comercial",
    description:
      "Leemos el negocio, ubicamos el cuello de botella y estructuramos captación, conversión y seguimiento.",
    idealClient:
      "Para empresas que necesitan claridad antes de mover más recursos.",
    expectedResult:
      "Dirección, prioridades y una estructura comercial con criterio.",
  },
  {
    title: "Implementación de soluciones y activos comerciales",
    description:
      "Convertimos la estructura en operación real mediante activos, herramientas y soportes de conversión.",
    idealClient:
      "Para equipos que ya saben qué deben ordenar, pero necesitan bajarlo a ejecución.",
    expectedResult:
      "Capacidad operativa real para ejecutar mejor el sistema comercial.",
  },
  {
    title: "Growth Partner",
    description:
      "Acompañamos tareas, decisiones y ajustes para sostener la ejecución y aprender sobre la marcha.",
    idealClient:
      "Para empresas que no quieren qué el sistema se quede en un documento.",
    expectedResult:
      "Sostenibilidad, mejora continua y menos improvisacion comercial.",
  },
] as const;

export const fullServices: Service[] = [
  {
    layer: "Capa 01",
    title: "Diseño del flujo y sistema comercial",
    summary:
      "Es la capa dónde entendemos el negocio, detectamos el cuello de botella comercial y estructuramos cómo debe funcionar captación, conversión y seguimiento.",
    idealClient:
      "Empresas que ya están en movimiento, pero necesitan claridad, lectura del problema y prioridades antes de ejecutar.",
    expectedResult:
      "Genera claridad y estructura para dejar de operar con esfuerzos comerciales dispersos.",
    deliverables: [
      "Diagnóstico y lectura del problema comercial",
      "Priorización de oportunidades y cuellos de botella",
      "Estructuración de oferta, mensajes y etapas comerciales",
      "Hoja de ruta accionable para lo que sigue",
    ],
  },
  {
    layer: "Capa 02",
    title: "Implementación de soluciones y activos comerciales",
    summary:
      "Es la capa dónde la estructura deja de ser teoría y se traduce en landing pages, automatizaciones, activos digitales, soportes de conversión, seguimiento y herramientas.",
    idealClient:
      "Empresas que ya tienen dirección clara y necesitan convertirla en una operación comercial útil, visible y ejecutable.",
    expectedResult:
      "Genera capacidad operativa real para que el sistema comercial funcione en la práctica.",
    deliverables: [
      "Landing pages y activos de conversión alineados al proceso",
      "Automatizaciones y herramientas conectadas a la operación",
      "Soportes de seguimiento y puntos de control comercial",
      "Implementación guiada de lo que fue diseñado",
    ],
  },
  {
    layer: "Capa 03",
    title: "Acompañamiento estratégico y operativo como Growth Partner",
    summary:
      "Es la capa dónde RiBuzz acompaña la ejecución para revisar avances, ajustar decisiones y sostener el aprendizaje del sistema comercial.",
    idealClient:
      "Empresas que entienden qué crecer no depende solo de tener una estructura, sino de usarla bien, sostenerla y mejorarla con criterio.",
    expectedResult:
      "Genera sostenibilidad, mejora continua y más consistencia en la ejecución comercial.",
    deliverables: [
      "Seguimiento a tareas y compromisos críticos",
      "Reuniones estratégicas y revisión de avances",
      "Ajustes sobre mensajes, prioridades y operación",
      "Soporte continuo para sostener la ejecución y aprender",
    ],
  },
];

export const serviceEffects = [
  {
    title: "Diseño",
    description: "Genera claridad y estructura antes de invertir más esfuerzo en ejecución.",
  },
  {
    title: "Implementación",
    description: "Genera capacidad operativa real para activar el sistema comercial.",
  },
  {
    title: "Growth Partner",
    description: "Genera sostenibilidad, mejora continua y más consistencia en el tiempo.",
  },
] as const;

export const methodologySteps: Step[] = [
  {
    title: "Diagnóstico",
    description:
      "Es la entrada ideal. Recoge información, identifica dónde se rompe el proceso comercial y hace visibles oportunidades y prioridades.",
    points: [
      "Lectura inicial del negocio, la oferta y la operación comercial",
      "Identificación del cuello de botella en captación, conversión o seguimiento",
      "Apoyo de IA en la lectura inicial cuando aporta velocidad y criterio",
    ],
    outcome: "Entrega claridad inicial sobre dónde intervenir primero y si realmente hay fit.",
  },
  {
    title: "Diseño",
    description:
      "Traduce el entendimiento en una estructura concreta para que el negocio deje de moverse sin sistema.",
    points: [
      "Definición del flujo comercial y de sus prioridades",
      "Estructuración de mensajes, puntos de seguimiento y soportes",
      "Hoja de ruta para pasar de lectura a ejecución",
    ],
    outcome: "Entrega dirección, estructura y criterios claros de acción.",
  },
  {
    title: "Implementación",
    description:
      "Activa herramientas, activos y soluciones para poner en marcha lo que ya fue diseñado.",
    points: [
      "Implementación de activos comerciales y piezas de soporte",
      "Conexión de herramientas y automatizaciones dónde hacen sentido",
      "Puestá en marcha del sistema comercial en la operación real",
    ],
    outcome: "Entrega capacidad operativa real para ejecutar con menos fricción.",
  },
  {
    title: "Acompañamiento",
    description:
      "Revisa, ajusta y acompaña la ejecución para que el sistema no quede en papel y gane consistencia.",
    points: [
      "Seguimiento a tareas y avances relevantes",
      "Ajustes tácticos y estratégicos según aprendizaje real",
      "Soporte continuo para sostener resultados más estables",
    ],
    outcome: "Entrega seguimiento, ajuste y continuidad para crecer con más consistencia.",
  },
];

export const differentiators = [
  "No empezamos ejecutando por ejecutar. Empezamos entendiendo el sistema comercial.",
  "No vendemos piezas sueltas. Leemos captación, conversión y seguimiento cómo un solo sistema.",
  "No reemplazamos al equipo comercial. Ayudamos a que el negocio venda con más estructura propia.",
  "No recomendamos avanzar si el diagnóstico muestra que no hay fit o que el momento no es el correcto.",
] as const;

export const methodologyBenefits = [
  {
    title: "Evita ejecutar a ciegas",
    description:
      "El diagnóstico hace visible el problema real antes de invertir tiempo y presupuesto dónde no corresponde.",
  },
  {
    title: "Reduce improvisacion",
    description:
      "Cada fase ordena prioridades y baja la dependencia de decisiones impulsivas o aisladas.",
  },
  {
    title: "Conecta claridad con operación",
    description:
      "Lo que se entiende se traduce en estructura, herramientas y una forma concreta de ejecutar.",
  },
  {
    title: "Permite crecer con más consistencia",
    description:
      "El sistema gana continuidad, aprendizaje y mejores decisiones a medida qué se usa y se ajusta.",
  },
] as const;

export const trustSignals = [
  {
    title: "4 clientes cerrados confirmados",
    description:
      "RiBuzz ya cuenta con validacion comercial activa y trabajo real con clientes en marcha.",
  },
  {
    title: "Experiencia en contextos distintos",
    description:
      "Se han intervenido casos en turismo, infoproductos, construcción, migración de datos y escenarios B2B.",
  },
  {
    title: "Experiencia aplicada, no solo conceptual",
    description:
      "Hay trabajo previo en optimización comercial digital, adquisición de clientes, diseño de procesos y activos comerciales.",
  },
] as const;

export const aboutOrigin = [
  {
    title: "El patrón qué se repite",
    description:
      "Muchas empresas pequenas no fallan por falta de ganas o de mercado. Fallan porqué venden sin una estructura clara para atraer, convertir y hacer seguimiento.",
  },
  {
    title: "Lo que eso provoca",
    description:
      "La ausencia de sistema produce desgaste, errores costosos, decisiones a ciegas y una dependencia excesiva del fundador.",
  },
  {
    title: "Por qué existe RiBuzz",
    description:
      "RiBuzz nace para intervenir ese vacío con una lógica más guiada, más estructurada y más útil qué las soluciones fragmentadas.",
  },
] as const;

export const aboutVisión = [
  {
    title: "Visión",
    description:
      "Ayudar a que más empresas operen con sistemas comerciales más claros, sostenibles y menos dependientes del fundador.",
  },
  {
    title: "Lo que buscamos cambiar",
    description:
      "Qué el crecimiento deje de depender de intensidad, urgencia o ensayo y error, y se vuelva una capacidad más estructurada del negocio.",
  },
] as const;

export const aboutPosture = [
  {
    title: "Profesional",
    description:
      "Pensamos desde negocio, no desde piezas aisladas ni desde modas del mercado.",
  },
  {
    title: "Directa",
    description:
      "Nombramos el problema como es y priorizamos sin rodeos lo que realmente mueve el sistema.",
  },
  {
    title: "Exigente",
    description:
      "No trabajamos bien con clientes qué quieren resultados sin revisar ni ejecutar.",
  },
  {
    title: "Orientada a ejecución",
    description:
      "La claridad tiene valor cuando se convierte en mejores decisiones, mejores procesos y más capacidad operativa.",
  },
] as const;

export const corePrinciples = [
  "Todo parte del diagnóstico.",
  "No se ejecuta sin claridad.",
  "El crecimiento debe sostenerse en estructura y no solo en intensidad.",
  "La tecnología es un habilitador, no un adorno.",
  "Toda intervención debe traducirse en mejores decisiones, mejores procesos y más capacidad de ejecución.",
] as const;

export const diagnosisExpectations = [
  {
    title: "Una lectura hecha para tu caso",
    description:
      "No recibes una respuesta genérica. Lo que te devolvemos se aterriza a tu momento, tu estructura y tu forma de operar.",
  },
  {
    title: "Acciones claras y posibles de abarcar",
    description:
      "La idea es darte foco sobre los siguientes movimientos sin llenarte de frentes innecesarios o imposibles de sostener.",
  },
  {
    title: "Una experiencia simple, no un laberinto",
    description:
      "Buscamos que todo sea entendible, amigable y accionable, sin perderte entre montones de páginas, pasos o documentos.",
  },
] as const;

export const contactFaqs: FAQ[] = [
  {
    question: "RiBuzz es una agencia de marketing?",
    answer:
      "No. El marketing puede ser parte de la solución, pero RiBuzz interviene el sistema comercial completo del negocio y no solo ejecuta piezas o campañas.",
  },
  {
    question: "Esto es consultoría o sí hay ejecución?",
    answer:
      "Hay criterio y hay ejecución. Primero se entiende el problema, después se diseña la estructura y luego se implementa y acompaña cuando hace sentido.",
  },
  {
    question: "Esto funciona si apenas estoy empezando?",
    answer:
      "No es el momento ideal si aún no has validado oferta o mercado. RiBuzz está pensado para empresas que ya están operando o ya han intentado vender.",
  },
  {
    question: "Qué pasa si no se exactamente cual es mi problema?",
    answer:
      "Es normal. El diagnóstico existe justamente para detectar si el cuello de botella está en adquisición, conversión, seguimiento o estructura comercial.",
  },
  {
    question: "Qué pasa después del diagnóstico?",
    answer:
      "Se evalua si hay fit y qué capa tiene sentido activar. Puede recomendarse avanzar, ajustar el foco o incluso no continuar si no hay impacto posible.",
  },
  {
    question: "Tengo qué contratar todos los servicios?",
    answer:
      "No. RiBuzz trabaja por capas. Puedes empezar por diagnóstico y avanzar solo a la etapa qué de verdad corresponda a tu momento.",
  },
  {
    question: "En cuanto tiempo voy a ver resultados?",
    answer:
      "Puede haber quick wins tempranos en claridad, enfoqué y decisiones, pero el valor real está en construir un sistema qué sostenga resultados mejor en el tiempo.",
  },
  {
    question: "Qué hace qué RiBuzz sea diferente?",
    answer:
      "RiBuzz no empieza ejecutando, no vende servicios sueltos y no deja la solución en teoría. Entiende, prioriza, estructura, implementa y acompaña.",
  },
  {
    question: "Qué tipo de empresas no deberian trabajar con RiBuzz?",
    answer:
      "No es para negocios sin oferta validada, clientes que solo quieren más marketing, equipos que no quieren ejecutar o empresas que esperan magia.",
  },
  {
    question: "Necesito tener un equipo para trabajar con ustedes?",
    answer:
      "No necesariamente. Muchas empresas llegan con equipos pequenos o con alta dependencia del fundador. Parte del trabajo es reducir esa dependencia.",
  },
  {
    question: "Esto aplica para cualquier industria?",
    answer:
      "No depende tanto de la industria cómo del problema. RiBuzz ya ha trabajado en servicios, educación, construcción y contextos B2B con una misma lógica comercial.",
  },
  {
    question: "Qué pasa si ya he trabajado con agencias o freelancers?",
    answer:
      "Es comun. Muchas empresas llegan después de invertir en marketing o desarrollo sin resultados consistentes. RiBuzz ayuda a entender por qué paso y cómo reordenarlo mejor.",
  },
  {
    question: "Qué tan involucrado tengo qué estar?",
    answer:
      "Bastante. Esto no funciona si delegas todo y te desconectas. Se necesita participación, decisiones y disposición real a ejecutar.",
  },
  {
    question: "Cómo se si este es el momento correcto para trabajar con RiBuzz?",
    answer:
      "Si ya estas vendiendo o intentandolo, sientes fricción, dependes demasiado del fundador y no tienes claro qué priorizar, probablemente si es el momento correcto.",
  },
  {
    question: "RiBuzz vende por mi empresa o ejecuta las ventas?",
    answer:
      "No. RiBuzz no reemplaza tu equipo comercial ni vende por ti. Diseña el sistema, implementa soportes y ayuda a estructurar mejor cómo debe vender el negocio.",
  },
];



