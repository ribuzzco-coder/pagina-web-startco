import type { AuditLogInsert } from "@/types/database";

import { AuditLogRepository } from "@/repositories/audit-log-repository";

export class AuditLogService {
  constructor(private readonly repository: AuditLogRepository) {}

  async record(payload: AuditLogInsert) {
    return this.repository.create(payload);
  }
}

