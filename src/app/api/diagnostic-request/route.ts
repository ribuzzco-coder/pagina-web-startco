import { apiError } from "@/lib/api/response";

export async function POST() {
  return apiError(
    410,
    "DIAGNOSTIC_COLLECTION_DISABLED",
    "Este sitio no esta recibiendo diagnosticos todavia. La captura se habilitara desde la plataforma dedicada.",
  );
}
