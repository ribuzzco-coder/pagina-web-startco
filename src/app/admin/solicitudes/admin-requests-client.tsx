"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { AdminDiagnosticRequestDto } from "@/lib/dto/admin-diagnostic-request";

type AdminRequestsClientProps = {
  actor: {
    email: string;
    role: string;
  };
  initialItems: AdminDiagnosticRequestDto[];
};

const STATUS_OPTIONS: Array<AdminDiagnosticRequestDto["status"]> = [
  "pending_review",
  "reviewed",
  "qualified",
  "unqualified",
  "archived",
];

const textareaClassName =
  "w-full rounded-[18px] border border-white/10 bg-[#0D1018] px-4 py-3 text-sm text-[#F5F7FA] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#70788D] focus:border-[#E625FF]/45 focus:bg-[#111522] focus:shadow-[0_0_0_1px_rgba(230,37,255,0.16),0_0_24px_rgba(230,37,255,0.12)]";

export function AdminRequestsClient({
  actor,
  initialItems,
}: AdminRequestsClientProps) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSignOut() {
    const supabase = getSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  async function handleSave(requestId: string) {
    const current = items.find((item) => item.id === requestId);

    if (!current) {
      return;
    }

    setSavingId(requestId);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/admin/diagnostic-requests/${requestId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: current.status,
          internalNotes: current.internalNotes,
        }),
      });

      const payload = (await response.json()) as
        | { ok: true; data: AdminDiagnosticRequestDto }
        | { ok: false; error: { message: string } };

      if (!response.ok || !payload.ok) {
        setErrorMessage(
          !payload.ok ? payload.error.message : "No pudimos guardar los cambios.",
        );
        return;
      }

      setItems((currentItems) =>
        currentItems.map((item) => (item.id === requestId ? payload.data : item)),
      );
    } catch {
      setErrorMessage("No pudimos guardar los cambios. Intenta de nuevo.");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-[28px] border-white/10 bg-[linear-gradient(180deg,rgba(17,20,31,0.96),rgba(10,11,18,0.98))] p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Panel interno
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
              Solicitudes de diagnóstico
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              Vista protegida para revisar información sensible ya descifrada dentro del servidor,
              sin exponer hashes internos ni depender de una llave compartida para entrar.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#C7CBD6]">
              {actor.email} · {actor.role}
            </div>
            <Button type="button" variant="secondary" onClick={handleSignOut}>
              Cerrar sesión
            </Button>
          </div>
        </div>
      </Card>

      {errorMessage ? (
        <div className="rounded-[18px] border border-[#ff7b92]/30 bg-[#30131b] px-4 py-3 text-sm text-[#ffd6de]">
          {errorMessage}
        </div>
      ) : null}

      <div className="grid gap-5">
        {items.map((item) => (
          <Card
            key={item.id}
            className="rounded-[28px] border-white/10 bg-[linear-gradient(180deg,rgba(17,20,31,0.96),rgba(10,11,18,0.98))] p-6"
          >
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#E625FF]/24 bg-[#E625FF]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffc9ff]">
                    {item.status}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#98A0B3]">
                    {new Date(item.createdAt).toLocaleString("es-CO")}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                    {item.nombre}
                  </h2>
                  <p className="mt-1 text-sm text-[#98A0B3]">
                    {item.empresa}
                    {item.cargo ? ` · ${item.cargo}` : ""}
                  </p>
                </div>

                <dl className="grid gap-3 sm:grid-cols-2">
                  <Info label="Correo" value={item.email} />
                  <Info label="WhatsApp" value={item.whatsapp || "No compartido"} />
                  <Info label="Sector" value={item.sector} />
                  <Info
                    label="Equipo"
                    value={item.tamanoEquipo || "Sin especificar"}
                  />
                  <Info
                    label="Ya está vendiendo"
                    value={item.yaEstaVendiendo ? "Sí" : "No"}
                  />
                  <Info label="Fuente" value={item.source} />
                </dl>

                <div className="rounded-[22px] border border-white/8 bg-[#0D1018]/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#E7B0EE]">
                    Reto principal
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#C7CBD6]">
                    {item.retoPrincipal}
                  </p>
                </div>

                {item.contexto ? (
                  <div className="rounded-[22px] border border-white/8 bg-[#0D1018]/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#E7B0EE]">
                      Contexto adicional
                    </p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[#C7CBD6]">
                      {item.contexto}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="grid gap-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#F5F7FA]">Estado</span>
                  <select
                    value={item.status}
                    onChange={(event) =>
                      setItems((currentItems) =>
                        currentItems.map((currentItem) =>
                          currentItem.id === item.id
                            ? { ...currentItem, status: event.target.value as AdminDiagnosticRequestDto["status"] }
                            : currentItem,
                        ),
                      )
                    }
                    className={textareaClassName}
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#F5F7FA]">
                    Notas internas
                  </span>
                  <textarea
                    rows={10}
                    value={item.internalNotes ?? ""}
                    onChange={(event) =>
                      setItems((currentItems) =>
                        currentItems.map((currentItem) =>
                          currentItem.id === item.id
                            ? { ...currentItem, internalNotes: event.target.value }
                            : currentItem,
                        ),
                      )
                    }
                    className={`${textareaClassName} resize-y`}
                  />
                </label>

                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-xs leading-relaxed text-[#98A0B3]">
                  Cuando guardas, los cambios viajan a la ruta admin autenticada y quedan registrados
                  en la bitácora interna.
                </div>

                <Button
                  type="button"
                  size="lg"
                  onClick={() => handleSave(item.id)}
                  disabled={savingId === item.id}
                >
                  {savingId === item.id ? "Guardando..." : "Guardar cambios"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E7B0EE]">
        {label}
      </dt>
      <dd className="mt-2 text-sm text-[#C7CBD6]">{value}</dd>
    </div>
  );
}
