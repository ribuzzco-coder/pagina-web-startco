"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getCurrentUser, logoutUser, type CurrentUserPayload } from "@/lib/auth/client";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [payload, setPayload] = useState<CurrentUserPayload | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const result = await getCurrentUser();

        if (!isMounted) {
          return;
        }

        if (!result.ok) {
          router.replace("/login");
          return;
        }

        setPayload(result.data);
      } catch {
        if (isMounted) {
          setErrorMessage("No pudimos cargar tu dashboard.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadUser();

    return () => {
      isMounted = false;
    };
  }, [router]);

  async function handleLogout() {
    setIsLoggingOut(true);
    setErrorMessage(null);
    try {
      await logoutUser();
      router.replace("/login");
      router.refresh();
    } catch {
      setErrorMessage("No pudimos cerrar sesion. Intenta de nuevo.");
      setIsLoggingOut(false);
    }
  }

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#111420]/90 p-6 text-[#D9DDE7] sm:p-8">
          Cargando dashboard...
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-4xl gap-5">
        <div className="rounded-3xl border border-white/10 bg-[#111420]/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:p-8">
          <h1 className="text-2xl font-semibold text-[#F5F7FA]">Tu dashboard</h1>
          <p className="mt-2 text-sm text-[#98A0B3]">
            Bienvenido{payload?.user?.fullName ? `, ${payload.user.fullName}` : ""}.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#111420]/90 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[#F5F7FA]">Sesion actual</h2>
          <dl className="mt-4 grid gap-2 text-sm text-[#D9DDE7]">
            <div>
              <dt className="text-[#98A0B3]">User ID</dt>
              <dd className="break-all">{payload?.user?.id ?? payload?.actor.id ?? "N/A"}</dd>
            </div>
            <div>
              <dt className="text-[#98A0B3]">Correo</dt>
              <dd>{payload?.user?.email ?? payload?.actor.email ?? "N/A"}</dd>
            </div>
            <div>
              <dt className="text-[#98A0B3]">Proveedor</dt>
              <dd>{payload?.user?.provider ?? "N/A"}</dd>
            </div>
            <div>
              <dt className="text-[#98A0B3]">Nombre</dt>
              <dd>{payload?.user?.fullName ?? "N/A"}</dd>
            </div>
          </dl>

          {errorMessage ? (
            <p className="mt-4 rounded-lg border border-[#ff4d6d]/45 bg-[#2a1118] px-3 py-2 text-sm text-[#FFD6DE]">
              {errorMessage}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="inline-flex items-center justify-center rounded-xl border border-[#E625FF]/65 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoggingOut ? "Saliendo..." : "Cerrar sesion"}
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2.5 text-sm text-[#D9DDE7] transition hover:border-white/20 hover:text-[#F5F7FA]"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

