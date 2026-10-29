import Link from "next/link";
import type { Lang } from "../pages/index";
import Animate from "./Animate";

interface Props {
  lang: Lang;
}

export default function VenueCard({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    <Animate delay={0.2} duration={1.0} distance={24}>
      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          border: "1px solid var(--border)",
          padding: "56px 48px",
          position: "relative",
          background: "var(--cream)",
          boxShadow: "0 4px 40px rgba(201,168,76,0.08)",
        }}
      >
        {(["tl", "tr", "bl", "br"] as const).map((pos) => (
          <FrameCorner key={pos} pos={pos} />
        ))}

        <div
          style={{
            marginBottom: "28px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
            <path
              d="M14 0C6.268 0 0 6.268 0 14c0 9.8 14 22 14 22S28 23.8 28 14C28 6.268 21.732 0 14 0z"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.5"
            />
            <circle
              cx="14"
              cy="14"
              r="5"
              stroke="var(--gold)"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="14" cy="14" r="2" fill="var(--gold)" opacity="0.5" />
          </svg>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-great-vibes)",
            fontSize: "clamp(40px,8vw,60px)",
            fontWeight: 400,
            color: "var(--text-dark)",
            marginBottom: "12px",
            lineHeight: 1,
          }}
        >
          {isAr ? "نلتقي بكم في ليلة من العمر" : "Celebrate with us"}
        </h2>

        <div
          className="ornament"
          style={{ maxWidth: "200px", margin: "20px auto" }}
        >
          <div className="ornament-line" />
          <div className="ornament-diamond" />
          <div className="ornament-line right" />
        </div>

        <p
          style={{
            fontFamily: isAr
              ? "var(--font-arabic-classic)"
              : "var(--font-cormorant)",
            fontSize: isAr ? "18px" : "20px",
            fontStyle: isAr ? "normal" : "italic",
            fontWeight: 300,
            color: "var(--text-mid)",
            letterSpacing: "1px",
            lineHeight: 1.8,
            direction: isAr ? "rtl" : "ltr",
            marginBottom: "8px",
          }}
        >
          {isAr ? "اضغطوا لمعرفة موقع الاحتفال" : "Open the venue location below"}
        </p>

        <p
          style={{
            fontFamily: isAr
              ? "var(--font-arabic-classic)"
              : "var(--font-cormorant)",
            fontSize: isAr ? "17px" : "18px",
            fontWeight: 300,
            color: "var(--text-light)",
            direction: isAr ? "rtl" : "ltr",
            lineHeight: 1.8,
          }}
        >
          {isAr ? "السبت، ٥ ديسمبر ٢٠٢٦" : "Saturday, December 5, 2026"}
        </p>

        <div style={{ marginTop: "32px" }}>
          <Link
            href="https://share.google/dt2Aq1FeUNcuJa2Y0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontFamily: isAr
                ? "var(--font-arabic-classic)"
                : "var(--font-montserrat)",
              fontSize: "11px",
              letterSpacing: isAr ? "0" : "2.5px",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--gold-dark)",
              textDecoration: "none",
              borderBottom: "1px solid var(--gold-muted)",
              paddingBottom: "3px",
            }}
          >
            {isAr ? "عرض على الخريطة ↗" : "View on Map ↗"}
          </Link>
        </div>
      </div>
    </Animate>
  );
}

function FrameCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const s: React.CSSProperties = {
    position: "absolute",
    width: "20px",
    height: "20px",
    ...(pos === "tl" && {
      top: "12px",
      left: "12px",
      borderTop: "1px solid var(--gold-muted)",
      borderLeft: "1px solid var(--gold-muted)",
    }),
    ...(pos === "tr" && {
      top: "12px",
      right: "12px",
      borderTop: "1px solid var(--gold-muted)",
      borderRight: "1px solid var(--gold-muted)",
    }),
    ...(pos === "bl" && {
      bottom: "12px",
      left: "12px",
      borderBottom: "1px solid var(--gold-muted)",
      borderLeft: "1px solid var(--gold-muted)",
    }),
    ...(pos === "br" && {
      bottom: "12px",
      right: "12px",
      borderBottom: "1px solid var(--gold-muted)",
      borderRight: "1px solid var(--gold-muted)",
    }),
  };
  return <div style={s} />;
}
