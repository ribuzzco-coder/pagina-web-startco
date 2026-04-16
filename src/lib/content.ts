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

export type BeforeAfterItem = {
  beforeTitle: string;
  beforeDescription: string;
  afterTitle: string;
  afterDescription: string;
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

export const homePainTransitions: BeforeAfterItem[] = [
  {
    beforeTitle: "Esfuerzos comerciales dispersos",
    beforeDescription:
      "Marketing, herramientas y seguimiento avanzan por separado, sin una lógica compartida que haga predecible el proceso.",
    afterTitle: "Frentes conectados bajo una sola lógica",
    afterDescription:
      "Captación, conversión y seguimiento operan con prioridades claras, mensajes alineados y un sistema que ya no se contradice internamente.",
  },
  {
    beforeTitle: "Fricción al convertir y seguir",
    beforeDescription:
      "Se generan conversaciones, pero se enfrían rápido porque no hay respuesta, ritmo comercial ni próximos pasos bien definidos.",
    afterTitle: "Conversión con ritmo y seguimiento real",
    afterDescription:
      "Cada oportunidad entra a una secuencia más clara, con respuesta oportuna, puntos de control y continuidad hasta el cierre.",
  },
  {
    beforeTitle: "Dependencia estricta del fundador",
    beforeDescription:
      "El criterio comercial, el impulso de venta y los cierres más importantes siguen descansando casi por completo en una sola persona.",
    afterTitle: "Ejecución compartida, no concentrada",
    afterDescription:
      "El sistema ordena roles, decisiones y pasos críticos para que el equipo pueda ejecutar con más autonomía y menos cuello de botella.",
  },
  {
    beforeTitle: "Estancamiento sin claridad operativa",
    beforeDescription:
      "La caja se frena y el crecimiento pierde fuerza, pero todavía no es evidente qué parte del sistema está frenando el avance.",
    afterTitle: "Claridad sobre dónde intervenir primero",
    afterDescription:
      "El cuello de botella se vuelve visible, las prioridades se ordenan y el crecimiento deja de depender de intuición o urgencia.",
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
      "Es la entrada ideal. Recoge información, identifica dónde se rompe el proceso comercial y hace visibles las prioridades reales del negocio.",
    points: [
      "Buscamos entender qué está frenando la adquisición de clientes, la conversión, el seguimiento o el flujo de caja.",
      "No buscamos llenar formularios por llenar, sino identificar oportunidades reales.",
    ],
    outcome: "Entrega claridad inicial sobre dónde intervenir primero y si realmente existe fit para avanzar.",
  },
  {
    title: "Diseño",
    description:
      "Traduce el diagnóstico en una estructura concreta para pasar de la lectura a la ejecución.",
    points: [
      "Definición del flujo comercial, las prioridades y los mensajes estratégicos.",
      "Establecimiento de puntos de seguimiento y criterios de acción claros.",
    ],
    outcome: "Entrega dirección, estructura y criterios claros de acción.",
  },
  {
    title: "Implementación",
    description:
      "Activa herramientas, activos y soluciones para poner en marcha lo que ya fue diseñado.",
    points: [
      "Landing pages, automatizaciones y configuración de CRM según se necesite.",
      "Despliegue de estructura de conversión y activos digitales operativos.",
    ],
    outcome: "Entrega capacidad operativa real para ejecutar con menos fricción.",
  },
  {
    title: "Acompañamiento",
    description:
      "Revisa, ajusta y acompaña la ejecución para que el sistema no quede en papel.",
    points: [
      "Seguimiento de hitos, revisión de avances y ajuste de decisiones en tiempo real.",
      "Apoyo continuo bajo una lógica de growth partner para sostener la mejora.",
    ],
    outcome: "Entrega seguimiento, ajuste y continuidad para crecer con más consistencia.",
  },
];

export const differentiators = [
  "No somos una agencia de marketing reactiva. Somos un partner que diseña e interviene tu sistema comercial con criterio profesional.",
  "Priorizamos el diagnóstico real sobre la ejecución impulsiva para que cada peso invertido tenga una intención y un retorno claro.",
  "Conectamos los puntos ciegos entre captación y cierre, eliminando la fuga de prospectos por falta de estructura o seguimiento.",
  "Construimos capacidad instalada en tu empresa, reduciendo la dependencia absoluta de los fundadores en el proceso de venta.",
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
    title: "El patrón que se repite",
    description:
      "En Colombia, 66,5 % de las empresas no sobrevive más de cinco años. Muchas terminan cayendo por baja rentabilidad, problemas financieros, falta de clientes o debilidad en su capacidad de vender.",
  },
  {
    title: "Lo que eso provoca",
    description:
      "Sin un sistema comercial claro, se atraen clientes de forma inestable, se hace un seguimiento débil y se depende totalmente del fundador, resultando en un crecimiento frágil y caja débil.",
  },
  {
    title: "Por qué existe RiBuzz",
    description:
      "RiBuzz existe para intervenir este vacío con una lógica guiada y estructurada. No vende piezas sueltas; diseña, implementa y acompaña el sistema que convierte esfuerzo en ingresos sostenibles.",
  },
] as const;

export const aboutVisión = [
  {
    title: "Visión",
    description:
      "Ayudar a que más empresas operen con sistemas comerciales más claros, sostenibles y menos dependientes del fundador, convirtiéndose en el referente en Colombia antes de 2030.",
  },
  {
    title: "Lo que buscamos cambiar",
    description:
      "Queremos que el crecimiento deje de depender de urgencias, ensayo y error o intensidad desordenada, y se convierta en una capacidad real, predecible y estructurada del negocio.",
  },
] as const;

export const aboutPosture = [
  {
    title: "Profesional",
    description:
      "Pensamos desde el negocio, no desde piezas aisladas, modas o tareas sueltas.",
  },
  {
    title: "Directa",
    description:
      "Nombramos el problema como es y priorizamos sin rodeos lo que realmente mueve el sistema.",
  },
  {
    title: "Exigente",
    description:
      "No trabajamos bien con clientes que quieren resultados sin revisar su operación ni ejecutar con disciplina.",
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
  "El crecimiento debe sostenerse en estructura and no solo en intensidad.",
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
      "Hay criterio and hay ejecución. Primero se entiende el problema, después se diseña la estructura and luego se pone en marcha y acompaña cuando hace sentido.",
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
      "Se evalua si hay fit and qué capa tiene sentido activar. Puede recomendarse avanzar, ajustar el foco o incluso no continuar si no hay impacto posible.",
  },
  {
    question: "Tengo qué contratar todos los servicios?",
    answer:
      "No. RiBuzz trabaja por capas. Puedes empezar por diagnóstico and avanzar solo a la etapa qué de verdad corresponda a tu momento.",
  },
  {
    question: "En cuanto tiempo voy a ver resultados?",
    answer:
      "Puede haber quick wins tempranos en claridad, enfoqué and decisiones, pero el valor real está en construir un sistema qué sostenga resultados mejor en el tiempo.",
  },
  {
    question: "Qué hace qué RiBuzz sea diferente?",
    answer:
      "RiBuzz no empieza ejecutando, no vende servicios sueltos and no deja la solución en teoría. Entiende, prioriza, estructura, implementa and acompaña.",
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
      "No depende tanto de la industria cómo del problema. RiBuzz ya ha trabajado en servicios, educación, construcción and contextos B2B con una misma lógica comercial.",
  },
  {
    question: "Qué pasa si ya he trabajado con agencias o freelancers?",
    answer:
      "Es comun. Muchas empresas llegan después de invertir en marketing o desarrollo sin resultados consistentes. RiBuzz ayuda a entender por qué paso and cómo reordenarlo mejor.",
  },
  {
    question: "Qué tan involucrado tengo qué estar?",
    answer:
      "Bastante. Esto no funciona si delegas todo and te desconectas. Se necesita participación, decisiones and disposición real a ejecutar.",
  },
  {
    question: "Cómo se si este es el momento correcto para trabajar con RiBuzz?",
    answer:
      "Si ya estas vendiendo o intentandolo, sientes fricción, dependes demasiado del fundador and no tienes claro qué priorizar, probablemente si es el momento correcto.",
  },
  {
    question: "RiBuzz vende por mi empresa o ejecuta las ventas?",
    answer:
      "No. RiBuzz no reemplaza tu equipo comercial ni vende por ti. Diseña el sistema, implementa soportes and ayuda a estructurar mejor cómo debe vender el negocio.",
  },
];

export const homeFaqs: FAQ[] = [
  {
    question: "¿Cuánto dura el diagnóstico y qué información necesito?",
    answer:
      "El diagnóstico inicial se realiza en menos de 10 minutos a través de un formulario estructurado. Solo necesitas información básica sobre tu oferta, clientes y proceso de ventas. A partir de ahí te damos una lectura inicial y, si hay fit, programamos sesiones más profundas.",
  },
  {
    question: "¿Cuál es el costo de trabajar con RiBuzz?",
    answer:
      "No hay tarifas fijas. El precio depende de la complejidad de tu negocio y de la capa de intervención necesaria (diseño, implementación o acompañamiento). Solo después del diagnóstico y de validar que hay ajuste, presentamos una propuesta económica.",
  },
  {
    question: "¿Qué tipo de empresas pueden trabajar con RiBuzz?",
    answer:
      "Trabajamos con empresas que ya tienen ventas y buscan orden y estructura para crecer. Nuestros clientes son de sectores diversos (tecnología, servicios B2B, turismo, salud, retail) y están ubicados en Medellín, Bogotá y otras ciudades de Colombia.",
  },
  {
    question: "¿Necesito tener un equipo comercial interno?",
    answer:
      "No es indispensable, pero sí necesitas estar dispuesto a participar. Si ya tienes equipo, lo fortalecemos para que gane autonomía. Si no, ayudamos a definir roles y buscar aliados adecuados.",
  },
  {
    question: "¿Cómo se protegen mis datos durante el diagnóstico y el proceso?",
    answer:
      "Toda la información que compartes se utiliza exclusivamente para entender tu sistema comercial. Firmamos acuerdos de confidencialidad cuando es necesario y nunca divulgamos datos a terceros sin tu aprobación.",
  },
  {
    question: "¿Se integran con nuestros sistemas actuales (CRM, herramientas de marketing, etc.)?",
    answer:
      "Sí. Analizamos tus herramientas actuales y, cuando es posible, las conectamos al nuevo flujo comercial. Si faltan piezas, proponemos soluciones no-code o integraciones que no generen dependencias innecesarias.",
  },
  {
    question: "¿Qué resultados puedo esperar y en cuánto tiempo?",
    answer:
      "Los resultados dependen de la fase en la que entres y de tu compromiso. Normalmente, la fase de diseño se completa en 2–4 semanas, la implementación en 4–8 semanas y el acompañamiento dura lo que necesites. Los efectos visibles suelen aparecer a partir de la implementación, cuando el sistema empieza a operar.",
  },
  {
    question: "¿Qué pasa si después del diagnóstico no hay fit?",
    answer:
      "Si identificamos que tu negocio aún no está listo o que no hay una oportunidad real de mejora, te lo decimos de manera directa. Preferimos no iniciar un proyecto si no podemos aportar valor.",
  },
  {
    question: "¿RiBuzz solo trabaja con empresas en Medellín?",
    answer:
      "Aunque nuestra base está en Medellín y Colombia, trabajamos con empresas de cualquier ciudad o país de habla hispana. La metodología es adaptable y podemos trabajar de forma remota.",
  },
  {
    question: "¿Cómo se mide el retorno de inversión (ROI)?",
    answer:
      "Antes de iniciar la intervención definimos métricas clave (tasa de conversión, tiempo de cierre, valor de ventas, etc.). Durante el acompañamiento medimos estas variables para evaluar si el sistema está generando los resultados esperados y ajustamos cuando es necesario.",
  },
];
