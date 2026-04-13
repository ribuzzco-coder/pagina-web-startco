import type { LeadEventInsert } from "@/types/database";

import { LeadEventRepository } from "@/repositories/lead-event-repository";

export class LeadEventsService {
  constructor(private readonly repository: LeadEventRepository) {}

  async record(payload: LeadEventInsert) {
    return this.repository.create(payload);
  }

  async recordDiagnosticCreated(diagnosticRequestId: string, metadata: LeadEventInsert["metadata"]) {
    return this.record({
      diagnostic_request_id: diagnosticRequestId,
      event_type: "diagnostic_request_created",
      metadata,
    });
  }

  async recordDuplicateDetected(
    diagnosticRequestId: string,
    metadata: LeadEventInsert["metadata"],
  ) {
    return this.record({
      diagnostic_request_id: diagnosticRequestId,
      event_type: "duplicate_detected",
      metadata,
    });
  }

  async recordCtaClicked(input: {
    diagnosticRequestId?: string | null;
    actorId?: string | null;
    metadata: LeadEventInsert["metadata"];
  }) {
    return this.record({
      diagnostic_request_id: input.diagnosticRequestId ?? null,
      actor_id: input.actorId ?? null,
      event_type: "cta_clicked",
      metadata: input.metadata,
    });
  }

  async recordStatusChanged(input: {
    diagnosticRequestId: string;
    actorId?: string | null;
    metadata: LeadEventInsert["metadata"];
  }) {
    return this.record({
      diagnostic_request_id: input.diagnosticRequestId,
      actor_id: input.actorId ?? null,
      event_type: "status_changed",
      metadata: input.metadata,
    });
  }

  async recordReviewed(input: {
    diagnosticRequestId: string;
    actorId?: string | null;
    metadata: LeadEventInsert["metadata"];
  }) {
    return this.record({
      diagnostic_request_id: input.diagnosticRequestId,
      actor_id: input.actorId ?? null,
      event_type: "reviewed",
      metadata: input.metadata,
    });
  }

  async recordNoteAdded(input: {
    diagnosticRequestId: string;
    actorId?: string | null;
    metadata: LeadEventInsert["metadata"];
  }) {
    return this.record({
      diagnostic_request_id: input.diagnosticRequestId,
      actor_id: input.actorId ?? null,
      event_type: "note_added",
      metadata: input.metadata,
    });
  }
}

