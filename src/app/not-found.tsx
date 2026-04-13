import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-16 sm:py-24">
      <Container>
        <Card className="mx-auto max-w-3xl rounded-[28px] p-8 text-center sm:p-12">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#E7B0EE] uppercase">
            Error 404
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight text-[#F5F7FA] sm:text-5xl">
            Esta pagina no esta disponible
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#98A0B3] sm:text-lg">
            La ruta que buscas no existe o fue movida. Vuelve al inicio para continuar explorando los servicios y metodologia de RiBuzz.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" size="lg">
              Volver al inicio
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
