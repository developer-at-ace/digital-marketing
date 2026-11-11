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
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              border: "2px solid #74a3ff",
              borderRadius: 12,
              background: "linear-gradient(135deg, rgba(36,107,253,.3), rgba(124,58,237,.25))",
              transform: "rotate(30deg)",
            }}
          >
            <div style={{ position: "absolute", width: 13, height: 13, border: "1.5px solid #06b6d4", borderRadius: 3, transform: "translate(-4px, -2px)" }} />
            <div style={{ position: "absolute", width: 13, height: 13, border: "1.5px solid #3676ff", borderRadius: 3 }} />
            <div style={{ position: "absolute", width: 13, height: 13, border: "1.5px solid #7c3aed", borderRadius: 3, transform: "translate(3px, 3px)" }} />
          </div>
          SuamGlobalDigital
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#75c9ff", fontSize: 18, fontWeight: 700, letterSpacing: 4 }}>
            DIGITAL MARKETING · SEO · TECHNOLOGY
          </div>
          <div style={{ maxWidth: 920, fontSize: 58, fontWeight: 700, letterSpacing: -2, lineHeight: 1.12 }}>
            Build a digital presence that grows with your business.
          </div>
          <div style={{ color: "#b7c5dc", fontSize: 24 }}>Strategy, creative, and technology — built around your next step.</div>
        </div>
        <div style={{ display: "flex", width: "100%", height: 1, background: "rgba(183,197,220,.25)" }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
