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
    title: "Adquisicion inestable",
    description:
      "El negocio genera interes por momentos, pero no sostiene un flujo comercial predecible.",
  },
  {
    title: "Baja conversion",
    description:
      "Hay conversaciones, trafico o leads, pero pocos avances reales hacia cierres.",
  },
  {
    title: "Seguimiento deficiente",
    description:
      "Las oportunidades no se trabajan con consistencia y muchas se enfrien antes de avanzar.",
  },
  {
    title: "Dependencia del fundador",
    description:
      "La venta, el criterio y el impulso comercial siguen concentrados en una sola persona.",
  },
  {
    title: "Decisiones a ciegas",
    description:
      "No hay claridad sobre que etapa esta fallando ni sobre que priorizar primero.",
  },
  {
    title: "Flujo de caja fragil",
    description:
      "La irregularidad comercial termina afectando caja, previsibilidad y capacidad de invertir mejor.",
  },
  {
    title: "Esfuerzos dispersos",
    description:
      "Marketing, seguimiento, oferta y herramientas avanzan sin una misma logica comercial.",
  },
  {
    title: "Cuello de botella invisible",
    description:
      "Se prueba de todo, pero no se entiende con precision donde se rompe el sistema.",
  },
] as const;

export const solutionSequence = [
  {
    title: "Entendemos primero",
    description:
      "Leemos negocio, oferta, proceso comercial, equipo y contexto antes de recomendar cualquier accion.",
  },
  {
    title: "Diagnosticamos el sistema",
    description:
      "Identificamos si el problema esta en captacion, conversion, seguimiento o en la estructura comercial completa.",
  },
  {
    title: "Disenamos la estructura",
    description:
      "Ordenamos prioridades, mensajes, etapas comerciales, soportes de conversion y hoja de ruta.",
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
  "Empresas que ya estan operando y ya venden o ya han intentado vender.",
  "Negocios que sienten friccion en su crecimiento y no quieren seguir en ensayo y error.",
  "Equipos abiertos a cuestionar su forma de operar y a ordenar mejor su sistema comercial.",
  "Clientes con disposicion a ejecutar y a participar en las decisiones importantes.",
  "Empresas que entienden que el problema no siempre es hacer mas, sino estructurar mejor.",
] as const;

export const nonFitChecklist = [
  "Negocios que aun no validan su oferta o todavia no tienen base comercial minima.",
  "Empresas que solo quieren mas marketing sin revisar el sistema de fondo.",
  "Clientes que esperan magia, promesas vacias o resultados sin involucrarse.",
  "Equipos que no quieren ejecutar ni ajustar su forma de vender.",
  "Negocios que buscan delegar por completo la venta a un tercero.",
] as const;

export const servicePreview = [
  {
    title: "Diseño del flujo y sistema comercial",
    description:
      "Leemos el negocio, ubicamos el cuello de botella y estructuramos captacion, conversion y seguimiento.",
    idealClient:
      "Para empresas que necesitan claridad antes de mover mas recursos.",
    expectedResult:
      "Direccion, prioridades y una estructura comercial con criterio.",
  },
  {
    title: "Implementacion de soluciones y activos comerciales",
    description:
      "Convertimos la estructura en operacion real mediante activos, herramientas y soportes de conversion.",
    idealClient:
      "Para equipos que ya saben que deben ordenar, pero necesitan bajarlo a ejecucion.",
    expectedResult:
      "Capacidad operativa real para ejecutar mejor el sistema comercial.",
  },
  {
    title: "Growth Partner",
    description:
      "Acompañamos tareas, decisiones y ajustes para sostener la ejecución y aprender sobre la marcha.",
    idealClient:
      "Para empresas que no quieren que el sistema se quede en un documento.",
    expectedResult:
      "Sostenibilidad, mejora continua y menos improvisacion comercial.",
  },
] as const;

export const fullServices: Service[] = [
  {
    layer: "Capa 01",
    title: "Diseño del flujo y sistema comercial",
    summary:
      "Es la capa donde entendemos el negocio, detectamos el cuello de botella comercial y estructuramos como debe funcionar captacion, conversion y seguimiento.",
    idealClient:
      "Empresas que ya estan en movimiento, pero necesitan claridad, lectura del problema y prioridades antes de ejecutar.",
    expectedResult:
      "Genera claridad y estructura para dejar de operar con esfuerzos comerciales dispersos.",
    deliverables: [
      "Diagnostico y lectura del problema comercial",
      "Priorizacion de oportunidades y cuellos de botella",
      "Estructuracion de oferta, mensajes y etapas comerciales",
      "Hoja de ruta accionable para lo que sigue",
    ],
  },
  {
    layer: "Capa 02",
    title: "Implementacion de soluciones y activos comerciales",
    summary:
      "Es la capa donde la estructura deja de ser teoria y se traduce en landing pages, automatizaciones, activos digitales, soportes de conversion, seguimiento y herramientas.",
    idealClient:
      "Empresas que ya tienen direccion clara y necesitan convertirla en una operacion comercial util, visible y ejecutable.",
    expectedResult:
      "Genera capacidad operativa real para que el sistema comercial funcione en la practica.",
    deliverables: [
      "Landing pages y activos de conversion alineados al proceso",
      "Automatizaciones y herramientas conectadas a la operacion",
      "Soportes de seguimiento y puntos de control comercial",
      "Implementación guiada de lo que fue diseñado",
    ],
  },
  {
    layer: "Capa 03",
    title: "Acompañamiento estrategico y operativo como Growth Partner",
    summary:
      "Es la capa donde RiBuzz acompaña la ejecución para revisar avances, ajustar decisiones y sostener el aprendizaje del sistema comercial.",
    idealClient:
      "Empresas que entienden que crecer no depende solo de tener una estructura, sino de usarla bien, sostenerla y mejorarla con criterio.",
    expectedResult:
      "Genera sostenibilidad, mejora continua y mas consistencia en la ejecucion comercial.",
    deliverables: [
      "Seguimiento a tareas y compromisos criticos",
      "Reuniones estrategicas y revision de avances",
      "Ajustes sobre mensajes, prioridades y operacion",
      "Soporte continuo para sostener la ejecucion y aprender",
    ],
  },
];

export const serviceEffects = [
  {
    title: "Diseño",
    description: "Genera claridad y estructura antes de invertir mas esfuerzo en ejecucion.",
  },
  {
    title: "Implementacion",
    description: "Genera capacidad operativa real para activar el sistema comercial.",
  },
  {
    title: "Growth Partner",
    description: "Genera sostenibilidad, mejora continua y mas consistencia en el tiempo.",
  },
] as const;

export const methodologySteps: Step[] = [
  {
    title: "Diagnostico",
    description:
      "Es la entrada ideal. Recoge informacion, identifica donde se rompe el proceso comercial y hace visibles oportunidades y prioridades.",
    points: [
      "Lectura inicial del negocio, la oferta y la operacion comercial",
      "Identificacion del cuello de botella en captacion, conversion o seguimiento",
      "Apoyo de IA en la lectura inicial cuando aporta velocidad y criterio",
    ],
    outcome: "Entrega claridad inicial sobre donde intervenir primero y si realmente hay fit.",
  },
  {
    title: "Diseño",
    description:
      "Traduce el entendimiento en una estructura concreta para que el negocio deje de moverse sin sistema.",
    points: [
      "Definicion del flujo comercial y de sus prioridades",
      "Estructuracion de mensajes, puntos de seguimiento y soportes",
      "Hoja de ruta para pasar de lectura a ejecucion",
    ],
    outcome: "Entrega direccion, estructura y criterios claros de accion.",
  },
  {
    title: "Implementacion",
    description:
      "Activa herramientas, activos y soluciones para poner en marcha lo que ya fue diseñado.",
    points: [
      "Implementacion de activos comerciales y piezas de soporte",
      "Conexion de herramientas y automatizaciones donde hacen sentido",
      "Puesta en marcha del sistema comercial en la operacion real",
    ],
    outcome: "Entrega capacidad operativa real para ejecutar con menos friccion.",
  },
  {
    title: "Acompañamiento",
    description:
      "Revisa, ajusta y acompaña la ejecución para que el sistema no quede en papel y gane consistencia.",
    points: [
      "Seguimiento a tareas y avances relevantes",
      "Ajustes tacticos y estrategicos segun aprendizaje real",
      "Soporte continuo para sostener resultados mas estables",
    ],
    outcome: "Entrega seguimiento, ajuste y continuidad para crecer con mas consistencia.",
  },
];

export const differentiators = [
  "No empezamos ejecutando por ejecutar. Empezamos entendiendo el sistema comercial.",
  "No vendemos piezas sueltas. Leemos captacion, conversion y seguimiento como un solo sistema.",
  "No reemplazamos al equipo comercial. Ayudamos a que el negocio venda con mas estructura propia.",
  "No recomendamos avanzar si el diagnostico muestra que no hay fit o que el momento no es el correcto.",
] as const;

export const methodologyBenefits = [
  {
    title: "Evita ejecutar a ciegas",
    description:
      "El diagnostico hace visible el problema real antes de invertir tiempo y presupuesto donde no corresponde.",
  },
  {
    title: "Reduce improvisacion",
    description:
      "Cada fase ordena prioridades y baja la dependencia de decisiones impulsivas o aisladas.",
  },
  {
    title: "Conecta claridad con operacion",
    description:
      "Lo que se entiende se traduce en estructura, herramientas y una forma concreta de ejecutar.",
  },
  {
    title: "Permite crecer con mas consistencia",
    description:
      "El sistema gana continuidad, aprendizaje y mejores decisiones a medida que se usa y se ajusta.",
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
      "Se han intervenido casos en turismo, infoproductos, construccion, migracion de datos y escenarios B2B.",
  },
  {
    title: "Experiencia aplicada, no solo conceptual",
    description:
      "Hay trabajo previo en optimizacion comercial digital, adquisicion de clientes, diseño de procesos y activos comerciales.",
  },
] as const;

export const aboutOrigin = [
  {
    title: "El patron que se repite",
    description:
      "Muchas empresas pequenas no fallan por falta de ganas o de mercado. Fallan porque venden sin una estructura clara para atraer, convertir y hacer seguimiento.",
  },
  {
    title: "Lo que eso provoca",
    description:
      "La ausencia de sistema produce desgaste, errores costosos, decisiones a ciegas y una dependencia excesiva del fundador.",
  },
  {
    title: "Por que existe RiBuzz",
    description:
      "RiBuzz nace para intervenir ese vacio con una logica mas guiada, mas estructurada y mas util que las soluciones fragmentadas.",
  },
] as const;

export const aboutVision = [
  {
    title: "Vision",
    description:
      "Ayudar a que mas empresas operen con sistemas comerciales mas claros, sostenibles y menos dependientes del fundador.",
  },
  {
    title: "Lo que buscamos cambiar",
    description:
      "Que el crecimiento deje de depender de intensidad, urgencia o ensayo y error, y se vuelva una capacidad mas estructurada del negocio.",
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
      "No trabajamos bien con clientes que quieren resultados sin revisar ni ejecutar.",
  },
  {
    title: "Orientada a ejecucion",
    description:
      "La claridad tiene valor cuando se convierte en mejores decisiones, mejores procesos y mas capacidad operativa.",
  },
] as const;

export const corePrinciples = [
  "Todo parte del diagnostico.",
  "No se ejecuta sin claridad.",
  "El crecimiento debe sostenerse en estructura y no solo en intensidad.",
  "La tecnologia es un habilitador, no un adorno.",
  "Toda intervencion debe traducirse en mejores decisiones, mejores procesos y mas capacidad de ejecucion.",
] as const;

export const diagnosisExpectations = [
  {
    title: "No hay venta automatica",
    description:
      "Despues del diagnostico no se empuja una venta por defecto. Primero se evalua si existe fit real.",
  },
  {
    title: "Se define la capa correcta",
    description:
      "El siguiente paso puede ser diseño, implementacion, acompañamiento o incluso no continuar si no tiene sentido.",
  },
  {
    title: "Buscamos impacto, no volumen",
    description:
      "La prioridad no es cerrar por cerrar, sino intervenir donde si se puede generar una mejora clara.",
  },
] as const;

export const contactFaqs: FAQ[] = [
  {
    question: "RiBuzz es una agencia de marketing?",
    answer:
      "No. El marketing puede ser parte de la solucion, pero RiBuzz interviene el sistema comercial completo del negocio y no solo ejecuta piezas o campanas.",
  },
  {
    question: "Esto es consultoria o si hay ejecucion?",
    answer:
      "Hay criterio y hay ejecucion. Primero se entiende el problema, despues se diseña la estructura y luego se implementa y acompaña cuando hace sentido.",
  },
  {
    question: "Esto funciona si apenas estoy empezando?",
    answer:
      "No es el momento ideal si aun no has validado oferta o mercado. RiBuzz esta pensado para empresas que ya estan operando o ya han intentado vender.",
  },
  {
    question: "Que pasa si no se exactamente cual es mi problema?",
    answer:
      "Es normal. El diagnostico existe justamente para detectar si el cuello de botella esta en adquisicion, conversion, seguimiento o estructura comercial.",
  },
  {
    question: "Que pasa despues del diagnostico?",
    answer:
      "Se evalua si hay fit y que capa tiene sentido activar. Puede recomendarse avanzar, ajustar el foco o incluso no continuar si no hay impacto posible.",
  },
  {
    question: "Tengo que contratar todos los servicios?",
    answer:
      "No. RiBuzz trabaja por capas. Puedes empezar por diagnostico y avanzar solo a la etapa que de verdad corresponda a tu momento.",
  },
  {
    question: "En cuanto tiempo voy a ver resultados?",
    answer:
      "Puede haber quick wins tempranos en claridad, enfoque y decisiones, pero el valor real esta en construir un sistema que sostenga resultados mejor en el tiempo.",
  },
  {
    question: "Que hace que RiBuzz sea diferente?",
    answer:
      "RiBuzz no empieza ejecutando, no vende servicios sueltos y no deja la solucion en teoria. Entiende, prioriza, estructura, implementa y acompaña.",
  },
  {
    question: "Que tipo de empresas no deberian trabajar con RiBuzz?",
    answer:
      "No es para negocios sin oferta validada, clientes que solo quieren mas marketing, equipos que no quieren ejecutar o empresas que esperan magia.",
  },
  {
    question: "Necesito tener un equipo para trabajar con ustedes?",
    answer:
      "No necesariamente. Muchas empresas llegan con equipos pequenos o con alta dependencia del fundador. Parte del trabajo es reducir esa dependencia.",
  },
  {
    question: "Esto aplica para cualquier industria?",
    answer:
      "No depende tanto de la industria como del problema. RiBuzz ya ha trabajado en servicios, educacion, construccion y contextos B2B con una misma logica comercial.",
  },
  {
    question: "Que pasa si ya he trabajado con agencias o freelancers?",
    answer:
      "Es comun. Muchas empresas llegan despues de invertir en marketing o desarrollo sin resultados consistentes. RiBuzz ayuda a entender por que paso y como reordenarlo mejor.",
  },
  {
    question: "Que tan involucrado tengo que estar?",
    answer:
      "Bastante. Esto no funciona si delegas todo y te desconectas. Se necesita participacion, decisiones y disposicion real a ejecutar.",
  },
  {
    question: "Como se si este es el momento correcto para trabajar con RiBuzz?",
    answer:
      "Si ya estas vendiendo o intentandolo, sientes friccion, dependes demasiado del fundador y no tienes claro que priorizar, probablemente si es el momento correcto.",
  },
  {
    question: "RiBuzz vende por mi empresa o ejecuta las ventas?",
    answer:
      "No. RiBuzz no reemplaza tu equipo comercial ni vende por ti. Disena el sistema, implementa soportes y ayuda a estructurar mejor como debe vender el negocio.",
  },
];
