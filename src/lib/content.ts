export type OfferPackage = {
  stage: string;
  title: string;
  forWhom: string;
  includes: string[];
  billing: string;
  note?: string;
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
  "Clientes esporádicos",
  "Cada venta, un caso aparte",
  "Todo depende de una persona",
  "Ingresos que suben y bajan",
] as const;

export const homeProblemSynthesis =
  "No son problemas sueltos: pasan porque falta un sistema que conecte cómo consigues clientes, cómo les vendes y cómo les das seguimiento.";

export const fitChecklist = [
  "Empresas en etapa temprana o en transformación, con un problema comercial identificado — ya vendiendo o construyendo su primera oferta.",
  "Negocios que sienten fricción en su crecimiento y no quieren seguir en ensayo y error.",
  "Equipos abiertos a cuestionar su forma de operar y a ordenar mejor su sistema comercial.",
  "Clientes con disposición a ejecutar y a participar en las decisiones importantes.",
  "Empresas que entienden que el problema no siempre es hacer más, sino estructurar mejor.",
] as const;

export const nonFitChecklist = [
  "Negocios sin ningún problema identificado ni intención real de resolverlo — solo curiosidad.",
  "Empresas que solo quieren más marketing sin revisar el sistema de fondo.",
  "Clientes que esperan magia, promesas vacías o resultados sin involucrarse.",
  "Equipos que no quieren ejecutar ni ajustar su forma de vender.",
  "Negocios que buscan delegar por completo la venta a un tercero.",
] as const;

export const offerPackages: OfferPackage[] = [
  {
    stage: "Ideación",
    title: "Fundamentos",
    forWhom:
      "Tienes un problema identificado pero tu oferta todavía no está validada.",
    includes: [
      "Estudio del Arte: mercado, competencia y contexto real del problema",
      "Hipótesis de valor estructurada",
      "Documentos de apoyo para tomar la siguiente decisión con criterio",
    ],
    billing: "Retainer mensual bajo, dedicado solo a Estrategia.",
    note: "Tarifa de lanzamiento desde $500.000 COP/mes — cupos limitados mientras validamos el sistema con los primeros clientes.",
  },
  {
    stage: "Pre-Incubación",
    title: "Validación",
    forWhom:
      "Tu MVP está en construcción o recién lanzado y estás probando con los primeros pilotos.",
    includes: [
      "Estrategia de entrada a mercado y estructura de oferta",
      "Apoyo en pitch si estás buscando capital",
      "Orientación financiera básica para sostener la validación",
    ],
    billing: "Retainer mensual de Estrategia, con más horas dedicadas que Fundamentos.",
    note: "Tarifa de lanzamiento desde $2.500.000 COP/mes — cupos limitados mientras validamos el sistema con los primeros clientes.",
  },
  {
    stage: "Incubación",
    title: "Tracción",
    forWhom:
      "Ya tienes oferta validada y primeros clientes reales, y necesitas estructura para sostener el crecimiento.",
    includes: [
      "Estrategia continua",
      "Un activo de conversión inicial (landing, automatización o integración)",
      "Ejecución comercial básica para empezar a sistematizar la captación",
    ],
    billing: "Retainer mensual + proyecto de tecnología facturado según alcance.",
    note: "Tarifa de lanzamiento desde $4.000.000 COP/mes (incluye $1.000.000 de presupuesto de pauta) — cupos limitados mientras validamos el sistema con los primeros clientes.",
  },
  {
    stage: "Consolidación",
    title: "Sistema",
    forWhom:
      "Ya vendes con consistencia y necesitas que estrategia, ejecución comercial, tecnología y adquisición pagada operen como un solo sistema.",
    includes: [
      "Estrategia",
      "Ejecución comercial continua",
      "Tecnología aplicada",
      "Adquisición pagada, con SOPs documentados",
    ],
    billing: "Retainer mensual + posible fee por cumplimiento de hitos de negocio, esquema que se termina de definir contigo antes de empezar.",
    note: "Cupos limitados por trimestre — es nuestro paquete de mayor dedicación.",
  },
  {
    stage: "Escalamiento",
    title: "Expansión",
    forWhom:
      "El sistema ya funciona y buscas un nuevo mercado, canal o línea de negocio.",
    includes: [
      "Extensión del Sistema ya activo",
      "Proyecto de expansión con alcance definido (nuevo mercado, canal o línea de negocio)",
    ],
    billing: "Retainer de Sistema existente + posible fee por hitos de expansión, a definir según alcance.",
  },
];

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

export const trustSignals = [
  {
    title: "10 clientes atendidos, 4 recurrentes",
    description:
      "RiBuzz ya cuenta con validación comercial activa: trabajo real con clientes en marcha, y 4 de ellos han vuelto a contratarnos.",
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
    question: "¿RiBuzz es una agencia de marketing?",
    answer:
      "No. El marketing puede ser parte de la solución, pero RiBuzz interviene el sistema comercial completo del negocio y no solo ejecuta piezas o campañas.",
  },
  {
    question: "¿Esto es consultoría o sí hay ejecución?",
    answer:
      "Hay criterio y hay ejecución. Primero se entiende el problema, después se diseña la estructura y luego se pone en marcha y se acompaña cuando hace sentido.",
  },
  {
    question: "¿Qué pasa si no sé exactamente cuál es mi problema?",
    answer:
      "Es normal. La llamada de introducción existe justamente para detectar si el cuello de botella está en adquisición, conversión, seguimiento o estructura comercial.",
  },
  {
    question: "¿Qué pasa después de la llamada de introducción?",
    answer:
      "Se evalúa si hay fit y qué paquete tiene sentido activar. Puede recomendarse avanzar, ajustar el foco o incluso no continuar si no hay impacto posible.",
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
      "Si ya estás vendiendo o intentándolo, sientes fricción, dependes demasiado del fundador y no tienes claro qué priorizar, probablemente sí es el momento correcto.",
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
      "No necesariamente. Si tu empresa está en etapa de Ideación o Validación, hay un paquete de Estrategia pensado para ese momento. El sistema completo (Sistema o Expansión) sí asume que ya vendes con cierta consistencia.",
  },
  {
    question: "¿La llamada de introducción tiene costo?",
    answer:
      "No. Es una conversación corta para entender tu momento y confirmar si hay fit real antes de proponer cualquier paquete.",
  },
  {
    question: "¿Cómo funciona el fee por cumplimiento de hitos?",
    answer:
      "Es un componente que todavía estamos terminando de formalizar. A partir de la etapa de Incubación buscamos atar una parte del pago a una métrica de negocio acordada contigo (como leads calificados o tasa de conversión), sin que el retainer mensual dependa de eso — es la base fija, el hito sería adicional. El esquema exacto se define caso por caso en la llamada de introducción.",
  },
  {
    question: "¿Tengo que contratar el paquete completo desde el inicio?",
    answer:
      "No. Empiezas en el paquete que corresponde a tu etapa actual y avanzas cuando el negocio lo pida, no antes.",
  },
];

export const homeFaqs: FAQ[] = [
  {
    question: "¿Cómo se agenda la llamada de introducción?",
    answer:
      "Completas una aplicación breve (unos 5-7 minutos) y agendas directamente en el calendario, sin ida y vuelta de correos. Es gratuita, y esas preguntas son justamente las que nos permiten confirmar si hay fit real antes de proponer cualquier paquete.",
  },
  {
    question: "¿Cuál es el costo de trabajar con RiBuzz?",
    answer:
      "Cada paquete se cobra con un retainer mensual fijo. A partir de la etapa de Incubación buscamos sumar un posible fee por cumplimiento de hitos de negocio — el esquema todavía se está formalizando y se termina de definir contigo antes de empezar. El monto exacto se confirma en la llamada de introducción, según la etapa de tu empresa.",
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
    question: "¿Cómo se protegen mis datos durante el proceso?",
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
