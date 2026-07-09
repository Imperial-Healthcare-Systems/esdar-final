import { ImageResponse } from "next/og";

export const alt = "Esdar Technologies — Robotics & AI for Schools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(115deg, #0037F2 0%, #2E7CF6 45%, #19C3E6 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(255,255,255,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            🤖
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 2 }}>
            ESDAR
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Powering the next generation of innovators.
          </div>
          <div style={{ fontSize: 30, opacity: 0.92, maxWidth: 880 }}>
            Robotics & AI labs, camps, kits & curriculum for schools.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
          <span style={{ opacity: 0.9 }}>We spark innovation</span>
          <span style={{ opacity: 0.9 }}>esdar.in</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
