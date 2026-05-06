import { redirect } from "next/navigation";

import { Container } from "@/components/ui/container";
import { toAdminDiagnosticRequestListDto } from "@/lib/dto/admin-diagnostic-request";
import { createPageMetadata } from "@/lib/metadata";
import { ApiError } from "@/lib/api/errors";
import { createAdminBackendServices } from "@/services/bootstrap";
import { requireAdminAccess } from "@/services/admin-access-service";

import { AdminRequestsClient } from "./admin-requests-client";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Solicitudes administrativas",
  description: "Panel interno para revisar y gestionar solicitudes de diagnóstico.",
  path: "/admin/solicitudes",
});

export default async function AdminSolicitudesPage() {
  let actor: Awaited<ReturnType<typeof requireAdminAccess>>;
  let initialData: ReturnType<typeof toAdminDiagnosticRequestListDto>;

  try {
    actor = await requireAdminAccess();
    const { diagnosticRequestService } = await createAdminBackendServices();
    const result = await diagnosticRequestService.list({
      limit: 25,
    });
    initialData = toAdminDiagnosticRequestListDto(result);
  } catch (error) {
    if (error instanceof ApiError && (error.status === 401 || error.status === 403)) {
      redirect("/admin/login");
    }

    throw error;
  }

  return (
    <section className="-mt-[76px] min-h-screen bg-[linear-gradient(180deg,#08090E_0%,#0E1019_48%,#08090E_100%)] py-24 sm:py-32">
      <Container className="max-w-6xl">
        <AdminRequestsClient
          actor={{
            email: actor.actorEmail,
            role: actor.role,
          }}
          initialItems={initialData.items}
        />
      </Container>
    </section>
  );
}
