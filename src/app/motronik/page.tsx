import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Motronik",
  description: "Espacio reservado para la landing Motronik.",
  path: "/motronik",
});

export default function MotronikPage() {
  return (
    <section
      aria-label="Motronik"
      className="-mt-[76px] min-h-[100dvh] bg-[#0B0B10]"
    />
  );
}
