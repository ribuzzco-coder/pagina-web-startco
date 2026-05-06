import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AdminProfileRepository } from "@/repositories/admin-profile-repository";

export default async function AdminIndexPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const adminProfile = await new AdminProfileRepository(supabase).findActiveById(user.id);

  if (!adminProfile) {
    redirect("/admin/login");
  }

  redirect("/admin/solicitudes");
}
