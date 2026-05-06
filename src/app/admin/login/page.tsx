import { redirect } from "next/navigation";

import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AdminProfileRepository } from "@/repositories/admin-profile-repository";

import { AdminLoginClient } from "./admin-login-client";

export const metadata = createPageMetadata({
  title: "Acceso administrativo",
  description: "Ingreso interno para revisar y gestionar solicitudes de diagnóstico.",
  path: "/admin/login",
});

export default async function AdminLoginPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const adminProfile = await new AdminProfileRepository(supabase).findActiveById(user.id);

    if (adminProfile) {
      redirect("/admin/solicitudes");
    }
  }

  return (
    <section className="-mt-[76px] min-h-screen bg-[linear-gradient(180deg,#08090E_0%,#0E1019_48%,#08090E_100%)] py-24 sm:py-32">
      <Container className="max-w-3xl">
        <AdminLoginClient />
      </Container>
    </section>
  );
}
