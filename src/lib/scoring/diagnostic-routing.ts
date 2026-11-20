export type ProcesoActual = "aun_validando" | "funciona_informal" | "consistente";
export type Presupuesto = "definido" | "aproximado" | "explorando";
export type Urgencia = "ya" | "proximo_mes" | "tres_meses" | "explorando";
export type Autoridad = "yo_decido" | "en_conjunto" | "no_decido";

export type DiagnosticRoutingTier = "llamada" | "regalos" | "newsletter";

export interface DiagnosticRoutingInput {
  procesoActual: ProcesoActual;
  presupuesto: Presupuesto;
  urgencia: Urgencia;
  autoridad: Autoridad;
}

export interface DiagnosticRoutingResult {
  fitScore: number;
  routingTier: DiagnosticRoutingTier;
  condiciones: {
    presupuesto: boolean;
    urgencia: boolean;
    autoridad: boolean;
  };
}

function cumpleUrgencia(urgencia: Urgencia): boolean {
  return urgencia === "ya" || urgencia === "proximo_mes";
}

function cumpleAutoridad(autoridad: Autoridad): boolean {
  return autoridad === "yo_decido" || autoridad === "en_conjunto";
}

export function scoreDiagnosticRequest(
  input: DiagnosticRoutingInput,
): DiagnosticRoutingResult {
  const cumplePresupuesto = input.presupuesto === "definido";
  const cumpleUrgenciaCondicion = cumpleUrgencia(input.urgencia);
  const cumpleAutoridadCondicion = cumpleAutoridad(input.autoridad);

  const fitScore =
    Number(cumplePresupuesto) + Number(cumpleUrgenciaCondicion) + Number(cumpleAutoridadCondicion);

  const routingTier: DiagnosticRoutingTier =
    fitScore === 3 ? "llamada" : fitScore === 2 ? "regalos" : "newsletter";

  return {
    fitScore,
    routingTier,
    condiciones: {
      presupuesto: cumplePresupuesto,
      urgencia: cumpleUrgenciaCondicion,
      autoridad: cumpleAutoridadCondicion,
    },
  };
}
