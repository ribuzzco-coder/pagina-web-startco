/**
 * Modelo de filtro y ruteo automático para /diagnostico.
 *
 * Referencia de diseño: RiBuzz_Modelo_Filtro_Formulario_Llamada.md
 *
 * El presupuesto no se evalúa como número absoluto, sino relativo a la etapa
 * declarada (proceso_actual). Se calculan 3 condiciones binarias
 * (presupuesto, urgencia, autoridad) y el número de condiciones cumplidas
 * determina el destino (routing tier). El cálculo vive en el servidor para
 * que no sea visible ni manipulable desde el cliente.
 */

export type ProcesoActual = "aun_validando" | "funciona_informal" | "consistente";
export type Presupuesto = "definido" | "aproximado" | "explorando";
export type Urgencia = "ya" | "proximo_mes" | "tres_meses" | "explorando";
export type Autoridad = "yo_decido" | "en_conjunto" | "no_decido";

export type DiagnosticRoutingTier = "llamada" | "regalos" | "newsletter";

export type PresupuestoAlcance = "alcanza" | "borderline" | "no_alcanza";

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

/**
 * ¿El presupuesto declarado alcanza el piso de inversión esperado para la
 * etapa/madurez declarada? "aun_validando" corresponde al piso más bajo
 * (Ideación/Pre-Incubación); "funciona_informal" y "consistente" corresponden
 * a etapas con piso mayor (Incubación en adelante), donde un presupuesto
 * "aproximado" solo cuenta como borderline, no como alcanzado.
 */
export function presupuestoAlcanzaEtapa(
  procesoActual: ProcesoActual,
  presupuesto: Presupuesto,
): PresupuestoAlcance {
  if (presupuesto === "explorando") {
    return "no_alcanza";
  }

  if (presupuesto === "definido") {
    return "alcanza";
  }

  // presupuesto === "aproximado"
  if (procesoActual === "aun_validando") {
    return "alcanza";
  }

  return "borderline";
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
  const cumplePresupuesto =
    presupuestoAlcanzaEtapa(input.procesoActual, input.presupuesto) === "alcanza";
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
