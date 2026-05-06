"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const inputClassName =
  "w-full rounded-[18px] border border-white/10 bg-[#0D1018] px-4 py-3 text-sm text-[#F5F7FA] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#70788D] focus:border-[#E625FF]/45 focus:bg-[#111522] focus:shadow-[0_0_0_1px_rgba(230,37,255,0.16),0_0_24px_rgba(230,37,255,0.12)]";

export function AdminLoginClient() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setErrorMessage("No pudimos iniciar sesión. Verifica tus credenciales y tus permisos.");
      setIsSubmitting(false);
      return;
    }

    router.replace("/admin/solicitudes");
    router.refresh();
  }

  return (
    <Card className="rounded-[32px] border-white/10 bg-[linear-gradient(180deg,rgba(17,20,31,0.96),rgba(10,11,18,0.98))] p-6 sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
        Acceso interno
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
        Inicia sesión para revisar solicitudes
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
        Solo pueden entrar usuarios existentes en Supabase Auth que además estén activos en
        `admin_profiles`.
      </p>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#F5F7FA]">Correo</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClassName}
            autoComplete="email"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#F5F7FA]">Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={inputClassName}
            autoComplete="current-password"
          />
        </label>

        {errorMessage ? (
          <div className="rounded-[18px] border border-[#ff7b92]/30 bg-[#30131b] px-4 py-3 text-sm text-[#ffd6de]">
            {errorMessage}
          </div>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-[#70788D]">
            Si puedes iniciar sesión pero no tienes permisos, revisa que tu usuario exista y esté
            activo en `public.admin_profiles`.
          </p>
          <Button type="submit" size="lg" className="sm:min-w-[220px]" disabled={isSubmitting}>
            {isSubmitting ? "Entrando..." : "Entrar al panel"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
