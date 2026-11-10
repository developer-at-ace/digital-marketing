import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 78% 27%, rgba(36,107,253,.42), transparent 32%), linear-gradient(125deg, #071224, #102347 70%, #151b42)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", color: "#dce8f8", fontSize: 24, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              width: 42,
              height: 42,
              border: "2px solid #74a3ff",
              borderRadius: 12,
              background: "linear-gradient(135deg, rgba(36,107,253,.3), rgba(124,58,237,.25))",
            }}
          />
          TechNova
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#75c9ff", fontSize: 18, fontWeight: 700, letterSpacing: 4 }}>
            AI · SOFTWARE · DIGITAL TRANSFORMATION
          </div>
          <div style={{ maxWidth: 920, fontSize: 62, fontWeight: 700, letterSpacing: -2, lineHeight: 1.12 }}>
            Thoughtful technology for the work that matters.
          </div>
          <div style={{ color: "#b7c5dc", fontSize: 24 }}>Practical ideas. Clear next steps.</div>
        </div>
        <div style={{ display: "flex", width: "100%", height: 1, background: "rgba(183,197,220,.25)" }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
