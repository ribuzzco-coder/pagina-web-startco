import { env } from "@/lib/env";
import { ApiError } from "@/lib/api/errors";
import { syncDiagnosticRequestToSheets } from "@/lib/integrations/diagnostic-sheets-sync";
import { logger } from "@/lib/logger";
import {
  buildDiagnosticSubmissionHash,
  normalizeDiagnosticInput,
  normalizeInternalNotes,
} from "@/lib/security/request";
import { encryptDiagnosticFields } from "@/lib/security/sensitive-fields";
import {
  scoreDiagnosticRequest,
  type Autoridad,
  type Presupuesto,
  type ProcesoActual,
  type Urgencia,
} from "@/lib/scoring/diagnostic-routing";
import { sha256 } from "@/lib/utils/crypto";
import { DiagnosticRequestRepository } from "@/repositories/diagnostic-request-repository";
import type { AdminActor } from "@/services/admin-access-service";
import { AuditLogService } from "@/services/audit-log-service";
import { LeadEventsService } from "@/services/lead-events-service";
import type { DiagnosticRequestRow } from "@/types/database";

type CreateDiagnosticRequestInput = {
  nombre: string;
  empresa: string;
  cargo?: string | null;
  whatsapp?: string | null;
  email: string;
  sector: string;
  queVende: string;
  aQuienVende: string;
  procesoActual: ProcesoActual;
  queFrena: string;
  metaConcreta?: string | null;
  presupuesto: Presupuesto;
  urgencia: Urgencia;
  autoridad: Autoridad;
  tamanoEquipo?: string | null;
  contexto?: string | null;
  source?: string | null;
  dataConsent: boolean;
  requestIp: string;
  userAgent?: string | null;
  referrer?: string | null;
  honeypot?: string | null;
};

type UpdateDiagnosticRequestInput = {
  id: string;
  status?: DiagnosticRequestRow["status"];
  internalNotes?: string | null;
  actor: AdminActor;
};

export class DiagnosticRequestService {
  constructor(
    private readonly repository: DiagnosticRequestRepository,
    private readonly leadEventsService: LeadEventsService,
    private readonly auditLogService: AuditLogService,
  ) {}

  async create(input: CreateDiagnosticRequestInput) {
    if (input.honeypot?.trim()) {
      throw new ApiError(400, "HONEYPOT_TRIGGERED", "Solicitud invalida.");
    }

    const normalized = normalizeDiagnosticInput(input);
    const submissionHash = buildDiagnosticSubmissionHash({
      empresa: normalized.empresa,
      email: normalized.email,
      queFrena: normalized.queFrena,
    });

    const { fitScore, routingTier } = scoreDiagnosticRequest({
      procesoActual: normalized.procesoActual as ProcesoActual,
      presupuesto: normalized.presupuesto as Presupuesto,
      urgencia: normalized.urgencia as Urgencia,
      autoridad: normalized.autoridad as Autoridad,
    });

    const duplicate = await this.repository.findRecentDuplicate(
      submissionHash,
      env.DIAGNOSTIC_DUPLICATE_WINDOW_HOURS,
    );

    if (duplicate) {
      await this.leadEventsService.recordDuplicateDetected(duplicate.id, {
        source: normalized.source,
        request_ip_hash: sha256(input.requestIp),
      });

      logger.warn("diagnostic_request.duplicate", "Duplicate diagnostic request detected", {
        diagnosticRequestId: duplicate.id,
        source: normalized.source,
      });

      return {
        duplicate: true,
        request: duplicate,
      };
    }

    const encryptedFields = encryptDiagnosticFields({
      email: normalized.email,
      whatsapp: normalized.whatsapp,
      contexto: normalized.contexto,
    });

    const created = await this.repository.create({
      nombre: normalized.nombre,
      empresa: normalized.empresa,
      cargo: normalized.cargo,
      whatsapp: encryptedFields.whatsapp,
      email: encryptedFields.email,
      sector: normalized.sector,
      que_vende: normalized.queVende,
      a_quien_vende: normalized.aQuienVende,
      proceso_actual: normalized.procesoActual,
      que_frena: normalized.queFrena,
      meta_concreta: normalized.metaConcreta,
      presupuesto: normalized.presupuesto,
      urgencia: normalized.urgencia,
      autoridad: normalized.autoridad,
      fit_score: fitScore,
      routing_tier: routingTier,
      tamano_equipo: normalized.tamanoEquipo,
      contexto: encryptedFields.contexto,
      source: normalized.source,
      submission_hash: submissionHash,
      data_consent_at: input.dataConsent ? new Date().toISOString() : null,
    });

    await this.leadEventsService.recordDiagnosticCreated(created.id, {
      source: created.source,
      request_ip_hash: sha256(input.requestIp),
      user_agent: input.userAgent ?? null,
      referrer: input.referrer ?? null,
    });

    logger.info("diagnostic_request.created", "Diagnostic request created", {
      diagnosticRequestId: created.id,
      source: created.source,
    });

    // Se espera (no fire-and-forget) porque en entornos serverless la funcion
    // puede terminar el proceso antes de que una promesa "colgada" se resuelva.
    // syncDiagnosticRequestToSheets nunca lanza — un fallo de Sheets no afecta
    // la respuesta de la API.
    await syncDiagnosticRequestToSheets({
      id: created.id,
      nombre: normalized.nombre,
      empresa: normalized.empresa,
      cargo: normalized.cargo,
      email: normalized.email,
      whatsapp: normalized.whatsapp,
      sector: normalized.sector,
      queVende: normalized.queVende,
      aQuienVende: normalized.aQuienVende,
      procesoActual: normalized.procesoActual,
      queFrena: normalized.queFrena,
      metaConcreta: normalized.metaConcreta,
      presupuesto: normalized.presupuesto,
      urgencia: normalized.urgencia,
      autoridad: normalized.autoridad,
      tamanoEquipo: normalized.tamanoEquipo,
      contexto: normalized.contexto,
      fitScore,
      routingTier,
      source: created.source,
    });

    return {
      duplicate: false,
      request: created,
    };
  }

  async list(params: { status?: DiagnosticRequestRow["status"]; limit: number; cursor?: string }) {
    return this.repository.list(params);
  }

  async update(input: UpdateDiagnosticRequestInput) {
    const current = await this.repository.findById(input.id);

    if (!current) {
      throw new ApiError(404, "DIAGNOSTIC_REQUEST_NOT_FOUND", "No encontramos la solicitud.");
    }

    const nextInternalNotes =
      input.internalNotes !== undefined
        ? normalizeInternalNotes(input.internalNotes)
        : current.internal_notes;

    const statusChanged = input.status !== undefined && input.status !== current.status;
    const notesChanged =
      input.internalNotes !== undefined && nextInternalNotes !== current.internal_notes;

    if (!statusChanged && !notesChanged) {
      return current;
    }

    const shouldMarkReviewed = statusChanged && current.reviewed_at === null;

    const updated = await this.repository.updateById(input.id, {
      status: input.status ?? current.status,
      internal_notes: nextInternalNotes,
      reviewed_at: shouldMarkReviewed ? new Date().toISOString() : current.reviewed_at,
      reviewed_by: shouldMarkReviewed ? input.actor.actorId : current.reviewed_by,
    });

    if (statusChanged) {
      await this.leadEventsService.recordStatusChanged({
        diagnosticRequestId: updated.id,
        actorId: input.actor.actorId,
        metadata: {
          from: current.status,
          to: updated.status,
          auth_strategy: input.actor.authStrategy,
        },
      });
    }

    if (shouldMarkReviewed) {
      await this.leadEventsService.recordReviewed({
        diagnosticRequestId: updated.id,
        actorId: input.actor.actorId,
        metadata: {
          status: updated.status,
          auth_strategy: input.actor.authStrategy,
        },
      });
    }

    if (notesChanged) {
      await this.leadEventsService.recordNoteAdded({
        diagnosticRequestId: updated.id,
        actorId: input.actor.actorId,
        metadata: {
          has_notes: Boolean(nextInternalNotes),
          auth_strategy: input.actor.authStrategy,
        },
      });
    }

    await this.auditLogService.record({
      actor_id: input.actor.actorId,
      action: "diagnostic_request.updated",
      entity_type: "diagnostic_request",
      entity_id: updated.id,
      metadata: {
        auth_strategy: input.actor.authStrategy,
        actor_email: input.actor.actorEmail,
        status_changed: statusChanged,
        notes_changed: notesChanged,
      },
    });

    logger.info("diagnostic_request.updated", "Diagnostic request updated", {
      diagnosticRequestId: updated.id,
      actorId: input.actor.actorId,
      statusChanged,
      notesChanged,
    });

    return updated;
  }
}
