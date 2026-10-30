import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  points: readonly string[];
};

type NfcPricingProps = {
  plans: readonly PricingPlan[];
  inquiryHref: string;
};

export function NfcPricing({ plans, inquiryHref }: NfcPricingProps) {
  return (
    <>
      <SectionDivider />
      <section className="nfc-product-formats cv-auto py-20 sm:py-24" id="productos">
        <Container>
          <SectionTitle
            eyebrow="Elige el formato"
            title="La misma tecnología, el formato correcto para cada encuentro"
            description="Primero piensa en dónde ocurrirá el toque: una reunión, un regalo, una campaña, una mesa o un equipo completo. Después elegimos la pieza física y el tramo de producción."
          />

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#BDB7D5]">Valor unitario · compra directa</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            {plans.slice(0, 2).map((plan, index) => (
              <Card
                key={plan.name}
                className={index === 1 ? "nfc-product-format-card rounded-[20px] border-[#6939E2]/30 p-7 sm:p-8" : "nfc-product-format-card rounded-[20px] p-7 sm:p-8"}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
                  {plan.name}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
                  {plan.price}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-[#CEC6E0] [text-wrap:pretty]">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6939E2]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Button href={inquiryHref} className="mt-7 w-full" size="lg">
                  Configurar esta opción
                </Button>
              </Card>
            ))}
          </div>

          <ProductionPath
            title="Tarjeta NFC"
            unitLabel="Pedido mínimo"
            unitValue="1 tarjeta"
            unitDetail="$89.900 c/u"
            productionLabel="Producción desde"
            productionValue="1 tarjeta"
            productionDetail="Personalización y NFC configurado"
            bestLabel="Mejor valor · 50+ unidades"
            bestValue="$24.900 c/u"
            bestDetail="Tarjeta NFC · por unidad"
            unitImage="/images/nfc-front.png"
            productionImage="/images/nfc-back.png"
            unitCaption="1 unidad · tarjeta lista para activar"
            productionCaption="Producción · identidad y enlace configurados"
          />

          <ProductionPath
            title="Llavero NFC"
            unitLabel="Pedido mínimo"
            unitValue="5 llaveros"
            unitDetail="$49.900 c/u"
            productionLabel="Producción desde"
            productionValue="5 llaveros"
            productionDetail="Diseño, fabricación y NFC configurado"
            bestLabel="Mejor valor · 50+ unidades"
            bestValue="$22.900 c/u"
            bestDetail="Llavero NFC · por unidad"
            unitImage="/images/nfc-projects/llavero-nfc-diseno.jpeg"
            productionImage="/images/nfc-projects/llaveros-nfc-armario-de-suenos.jpg"
            unitCaption="Pedido mínimo · pieza personalizada"
            productionCaption="Producción de 50 · piezas reales para marca o campaña"
            accent="violet"
          />

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#BDB7D5] [text-wrap:pretty] sm:text-base">
            Primero ves el valor de una unidad. Después eliges la cantidad y definimos el tramo de producción, diseño y acabados.
          </p>
        </Container>
      </section>
    </>
  );
}

function ProductionPath({
  title,
  unitLabel = "1 unidad",
  unitValue,
  unitDetail,
  productionLabel = "10+ unidades",
  productionValue = "10+ unidades",
  productionDetail = "Definimos el tramo y la personalización",
  bestLabel = "Mejor valor",
  bestValue,
  bestDetail,
  unitImage,
  productionImage,
  unitCaption,
  productionCaption,
  accent = "mint",
}: {
  title: string;
  unitLabel?: string;
  unitValue: string;
  unitDetail: string;
  productionLabel?: string;
  productionValue?: string;
  productionDetail?: string;
  bestLabel?: string;
  bestValue: string;
  bestDetail: string;
  unitImage: string;
  productionImage: string;
  unitCaption: string;
  productionCaption: string;
  accent?: "mint" | "violet";
}) {
  const accentClass = accent === "mint" ? "text-[#B8FFE9]" : "text-[#C5B7FF]";

  return (
    <section className="nfc-value-ladder mt-10 overflow-hidden rounded-[22px] border border-white/15 bg-white/[0.045]">
      <div className="border-b border-white/12 px-6 py-5 sm:flex sm:items-end sm:justify-between sm:px-7">
        <div>
          <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${accentClass}`}>{title}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#E4DFF7]">De una unidad a producción.</h3>
        </div>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#BDB7D5] sm:mt-0 sm:text-right">Al aumentar unidades, cambia el valor unitario.</p>
      </div>
      <div className="grid divide-y divide-white/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <ValueStep label={unitLabel} value={unitValue} detail={unitDetail} />
        <ValueStep label={productionLabel} value={productionValue} detail={productionDetail} />
        <ValueStep label={bestLabel} value={bestValue} detail={bestDetail} accent />
      </div>
      <div className="grid gap-px border-t border-white/12 bg-white/12 sm:grid-cols-2">
        <ProductExample src={unitImage} title="Unidad" caption={unitCaption} />
        <ProductExample src={productionImage} title="Muchas unidades" caption={productionCaption} />
      </div>
    </section>
  );
}

function ProductExample({ src, title, caption }: { src: string; title: string; caption: string }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-4 bg-[#110746] p-4 sm:grid-cols-[10rem_1fr] sm:p-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#09052A]">
        <Image src={src} alt={`${title}: ${caption}`} fill sizes="(min-width: 640px) 12rem, 8rem" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#BDB7D5]">{title}</p>
        <p className="mt-2 text-sm font-semibold leading-snug text-[#F1F0FF]">{caption}</p>
      </div>
    </div>
  );
}

function ValueStep({ label, value, detail, accent = false }: { label: string; value: string; detail: string; accent?: boolean }) {
  return (
    <div className={accent ? "bg-[#B8FFE9]/[0.07] px-6 py-6 sm:px-7" : "px-6 py-6 sm:px-7"}>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#BDB7D5]">{label}</p>
      <p className={accent ? "mt-3 text-3xl font-semibold tracking-tight text-[#B8FFE9]" : "mt-3 text-3xl font-semibold tracking-tight text-[#F1F0FF]"}>{value}</p>
      <p className="mt-2 text-sm text-[#BDB7D5]">{detail}</p>
    </div>
  );
}
