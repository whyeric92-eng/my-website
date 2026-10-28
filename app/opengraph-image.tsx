import { ImageResponse } from "next/og";

export const alt = "Wei Haoyu (Eric) — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same palette as the site's dark mode (app/globals.css)
const background = "#0a0a0a";
const foreground = "#ededed";
const accent = "#60a5fa";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background,
          color: foreground,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 96,
            height: 8,
            borderRadius: 4,
            background: accent,
            marginBottom: 48,
          }}
        />
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          Wei Haoyu (Eric)
        </div>
        <div style={{ fontSize: 44, marginTop: 24, color: accent }}>
          Full-Stack Software Engineer · CS @ NTU
        </div>
        <div style={{ fontSize: 30, marginTop: 56, color: "#a3a3a3" }}>
          React · Next.js · FastAPI · Laravel · PostgreSQL
        </div>
      </div>
    ),
    { ...size }
  );
}
