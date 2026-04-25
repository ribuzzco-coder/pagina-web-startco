"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { signupWithPassword } from "@/lib/auth/client";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const result = await signupWithPassword({
        email: email.trim(),
        password,
        fullName: fullName.trim() || undefined,
      });

      if (!result.ok) {
        const emailErrors = result.error.fieldErrors?.email ?? [];
        const passwordErrors = result.error.fieldErrors?.password ?? [];
        const fullNameErrors = result.error.fieldErrors?.fullName ?? [];
        setErrorMessage(
          fullNameErrors[0] ?? emailErrors[0] ?? passwordErrors[0] ?? result.error.message,
        );
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch {
      setErrorMessage("No pudimos crear tu cuenta. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-[#111420]/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:p-8">
        <h1 className="text-2xl font-semibold text-[#F5F7FA]">Crear cuenta</h1>
        <p className="mt-2 text-sm text-[#98A0B3]">
          Registra tu usuario para entrar al dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm text-[#D9DDE7]">Nombre (opcional)</span>
            <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              autoComplete="name"
              className="w-full rounded-xl border border-white/12 bg-[#0B0B10] px-3 py-2.5 text-sm text-[#F5F7FA] outline-none transition focus:border-[#E625FF]/60"
              placeholder="Tu nombre"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm text-[#D9DDE7]">Correo</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-xl border border-white/12 bg-[#0B0B10] px-3 py-2.5 text-sm text-[#F5F7FA] outline-none transition focus:border-[#E625FF]/60"
              placeholder="tu-correo@empresa.com"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm text-[#D9DDE7]">Contrasena</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full rounded-xl border border-white/12 bg-[#0B0B10] px-3 py-2.5 text-sm text-[#F5F7FA] outline-none transition focus:border-[#E625FF]/60"
              placeholder="Minimo 8 caracteres"
            />
          </label>

          {errorMessage ? (
            <p className="rounded-lg border border-[#ff4d6d]/45 bg-[#2a1118] px-3 py-2 text-sm text-[#FFD6DE]">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#E625FF]/65 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creando..." : "Crear cuenta"}
          </button>
        </form>

        <p className="mt-5 text-sm text-[#98A0B3]">
          Ya tienes cuenta?{" "}
          <Link href="/login" className="text-[#F5F7FA] underline decoration-[#E625FF]/60 underline-offset-4">
            Iniciar sesion
          </Link>
        </p>
      </div>
    </section>
  );
}

