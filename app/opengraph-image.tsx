import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rohan Singh Rawat — Senior Software Engineer";
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
          backgroundColor: "#FFFBF0",
          fontFamily: "monospace",
          position: "relative",
          border: "8px solid #0A0A0A",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            width: "100%",
            height: "12px",
            backgroundColor: "#FFE500",
            borderBottom: "4px solid #0A0A0A",
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "60px 80px",
            gap: "60px",
          }}
        >
          {/* RSR badge */}
          <div
            style={{
              width: "160px",
              height: "160px",
              backgroundColor: "#FFE500",
              border: "5px solid #0A0A0A",
              boxShadow: "8px 8px 0px #0A0A0A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "52px",
                fontWeight: 900,
                color: "#0A0A0A",
                letterSpacing: "4px",
                fontFamily: "monospace",
              }}
            >
              RSR
            </span>
          </div>

          {/* Text content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                fontSize: "58px",
                fontWeight: 900,
                color: "#0A0A0A",
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              Rohan Singh Rawat
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FFE500",
                  border: "3px solid #0A0A0A",
                  padding: "6px 18px",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Senior Software Engineer
              </div>
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "#3A3A3A",
                fontWeight: 500,
                marginTop: "8px",
              }}
            >
              5+ years · Full-Stack · Web3 · Next.js · TypeScript
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            width: "100%",
            height: "60px",
            backgroundColor: "#0A0A0A",
            display: "flex",
            alignItems: "center",
            paddingLeft: "80px",
            paddingRight: "80px",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "#FFE500",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            rsroff.dev
          </span>
          <span
            style={{
              color: "#888888",
              fontSize: "16px",
              letterSpacing: "2px",
            }}
          >
            "Shipping fast isn&apos;t reckless — it&apos;s a skill."
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
