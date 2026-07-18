export const portfolioThesisFlow = [
  "Nacimiento",
  "Primeras ventas",
  "Desorden",
  "Estancamiento",
  "Dependencia",
] as const;

export const portfolioMarketNeeds = [
  "Clientes",
  "Ventas",
  "Contenido",
  "CRM",
  "Pauta",
  "Web",
  "Procesos",
  "Tecnología",
  "Seguimiento",
] as const;

export const portfolioProblemSymptoms = [
  "Pocos clientes.",
  "Ventas inestables.",
  "Marketing que no convierte.",
  "Seguimiento débil.",
  "Dependencia del fundador.",
  "Flujo de caja impredecible.",
] as const;

export const portfolioIcebergVisible = [
  "Baja facturación",
  "Problemas de caja",
  "Pocos clientes",
] as const;

export const portfolioIcebergRoot = [
  "Oferta poco clara",
  "Fugas de conversión",
  "Sin seguimiento",
  "Canales desconectados",
  "Sin trazabilidad",
  "Decisiones a ciegas",
] as const;

export const portfolioMarketGap = [
  {
    actor: "Agencias",
    limit: "Ejecutan campañas o piezas, pero no siempre diagnostican el sistema.",
    featured: false,
  },
  {
    actor: "Consultores",
    limit: "Recomiendan, pero no siempre ejecutan.",
    featured: false,
  },
  {
    actor: "Software",
    limit: "Entrega herramientas, pero no asegura adopción.",
    featured: false,
  },
  {
    actor: "Freelancers",
    limit: "Resuelven tareas, pero no integran estrategia.",
    featured: false,
  },
  {
    actor: "RiBuzz",
    limit: "Diagnostica, diseña, ejecuta y acompaña.",
    featured: true,
  },
] as const;

export const portfolioSystemBlocks = [
  "Diagnóstico",
  "Diseño del sistema",
  "Implementación",
  "Seguimiento",
  "Continuidad",
] as const;

export const portfolioOperatingRoute = [
  "Entrada por diagnóstico",
  "Lectura de encaje",
  "Diseño del sistema comercial",
  "Implementación de activos",
  "Seguimiento y ajustes",
  "Growth partner",
] as const;

export const portfolioImplementationAreas = [
  {
    title: "Estrategia comercial",
    items: ["Oferta", "Cliente ideal", "Mensajes", "Embudo", "Prioridades"],
  },
  {
    title: "Marketing & media",
    items: ["Contenido", "Pauta", "Campañas", "Conversión"],
  },
  {
    title: "Tecnología ligera",
    items: ["Landings", "CRM", "Automatizaciones", "Dashboards", "Integraciones"],
  },
  {
    title: "Seguimiento",
    items: ["Hitos", "Tareas", "Métricas", "Reuniones", "Optimización"],
  },
] as const;

export const portfolioBusinessModel = [
  {
    title: "Diseño del sistema comercial",
    description: "Diagnóstico, estrategia, mapa de prioridades y hoja de ruta.",
  },
  {
    title: "Implementación",
    description: "Activos de marketing, tecnología y operación comercial.",
  },
  {
    title: "Growth partner",
    description: "Acompañamiento, optimización y continuidad con lógica variable.",
  },
] as const;

export const portfolioCases = [
  {
    name: "TerraTravel",
    sector: "Turismo / servicios",
    status: "Cerrado y entregado",
    problem: "Puntos de contacto dispersos.",
    intervention: "Landing pages y tarjetas NFC para atención y presencia digital.",
  },
  {
    name: "Facial Fitness",
    sector: "Cursos digitales",
    status: "Caso ejecutado",
    problem: "Visibilidad que no estaba convirtiendo con suficiente claridad.",
    intervention: "Ajustes de landing, contenido y estructura de conversión.",
  },
  {
    name: "Neomech",
    sector: "Construcción",
    status: "Activo",
    problem: "Gestación comercial con alta dependencia de intuición.",
    intervention: "Playbook, adquisición de clientes y sistema comercial inicial.",
  },
  {
    name: "Piloto B2B data migration",
    sector: "B2B alto ticket",
    status: "Piloto / diseño",
    problem: "Dependencia de un lead getter externo.",
    intervention: "Sistema comercial propio para alinear lenguaje técnico y ventas.",
  },
  {
    name: "Motronik",
    sector: "Activación comercial",
    status: "Ejecutado",
    problem: "Tráfico físico de evento sin captura accionable.",
    intervention: "Captura de datos, referidos, canales y automatizaciones.",
  },
] as const;

export const portfolioVisionSteps = [
  {
    title: "Hoy",
    description: "Diagnóstico + ejecución guiada.",
  },
  {
    title: "Luego",
    description: "Metodología estandarizada.",
  },
  {
    title: "Después",
    description: "Red de aliados validados.",
  },
  {
    title: "Futuro",
    description: "Sistema operativo comercial.",
  },
] as const;

export const portfolioAskItems = [
  "Referir empresas con dolor comercial real.",
  "Abrir puertas a pilotos.",
  "Validar la metodología con experiencia empresarial.",
  "Conectar aliados de ejecución.",
  "Explorar inversión o acompañamiento estratégico.",
] as const;
