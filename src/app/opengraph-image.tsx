import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RiBuzz — Sistema de crecimiento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08041E",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(120,95,221,0.35), transparent 34%), radial-gradient(circle at 82% 78%, rgba(105,57,226,0.4), transparent 38%), linear-gradient(180deg, #08041E 0%, #150B33 55%, #0F0729 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "10px 28px",
            borderRadius: "999px",
            border: "1px solid rgba(105,57,226,0.4)",
            backgroundColor: "rgba(105,57,226,0.12)",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "#8b6ff0",
            }}
          />
          <span
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#CEC6E0",
            }}
          >
            Sistema de crecimiento
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 128,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#E4DFF7",
          }}
        >
          RiBuzz
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            maxWidth: 820,
            textAlign: "center",
            fontSize: 34,
            lineHeight: 1.4,
            color: "#98A0B3",
          }}
        >
          Estrategia, ejecución comercial y tecnología en un solo sistema para crecer con estructura.
        </div>
      </div>
    ),
    { ...size },
  );
}
