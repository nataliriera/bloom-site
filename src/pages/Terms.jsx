import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function PageMeta({ title, description, canonical }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="robots"]', "content", "noindex, follow");
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = canonical;
  }, []);
  return null;
}

const sections = [
  {
    title: "Booking & Deposit",
    body: "A deposit is required to reserve your date. Your date is not guaranteed until the deposit is received. Remaining balance is due before setup unless otherwise agreed in writing.",
  },
  {
    title: "Rental Time & Access",
    body: "Rental time includes delivery, setup, and breakdown windows. Client agrees to provide venue access, load-in instructions, and any required permits/approvals. Additional time may incur fees.",
  },
  {
    title: "Damage & Liability",
    body: "Normal wear is expected. Significant damage, missing items, or misuse may result in repair/replacement fees. Bloom is not responsible for venue restrictions, guest behavior, or circumstances outside our control.",
  },
  {
    title: "Outdoor & Weather",
    body: "Outdoor setups require safe conditions. If weather is unsafe (high wind, heavy rain, lightning), we may move the setup indoors or reschedule based on availability.",
  },
  {
    title: "Pre-order Styles",
    body: "Pre-order wall styles are sourced by request and require advance notice. Pricing varies by style and availability. Deposits for pre-order inventory may be higher and can be non-refundable if inventory is purchased specifically for your event.",
  },
  {
    title: "Photos & Marketing",
    body: "Bloom may take photos of setups for portfolio/social media. We avoid identifying guests without permission. If you prefer no photos, request this in writing before your event.",
  },
  {
    title: "Questions",
    body: "If anything is unclear, contact us before booking.",
  },
];

export default function Terms() {
  return (
    <LegalPage
      meta={
        <PageMeta
          title="Terms & Conditions | Bloom Flower Wall Rentals"
          description="Terms and conditions for renting flower walls from Bloom Flower Wall Rentals in Clermont, FL."
          canonical="https://bloomflowerwallrentals.com/terms"
        />
      }
      title="Terms & Conditions"
      subtitle='These terms apply to rentals and services provided by Bloom Flower Wall Rentals ("Bloom", "we", "us"). By booking, you agree to these terms.'
      sections={sections}
      primaryLabel="Request a Quote"
      primaryTo="/contact"
      note="Last updated: February 2026."
    />
  );
}

function LegalPage({
  meta,
  title,
  subtitle,
  sections,
  primaryLabel,
  primaryTo,
  note,
}) {
  return (
    <div
      style={{
        background: "#0c0c0c",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {meta}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .btn-gold { display:inline-flex; align-items:center; gap:10px; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:15px 36px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        .btn-outline { display:inline-flex; align-items:center; gap:10px; background:transparent; color:#f5f0e8; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:400; letter-spacing:0.14em; text-transform:uppercase; padding:14px 28px; border:1px solid rgba(245,240,232,0.52); cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-outline:hover { border-color:#c9a96e; color:#c9a96e; }
        .noise { position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:0.025; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); background-size:150px; }
        .legal-inner { max-width: 860px; margin: 0 auto; padding: 100px 48px 120px; }
        .legal-sections { margin-top: 52px; border-top: 1px solid rgba(201,169,110,0.12); }
        @media (max-width: 640px) {
          .legal-inner { padding: 72px 24px 96px; }
        }
      `}</style>
      <div className="noise" />

      <div className="legal-inner">
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#c9a96e",
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 28,
              height: 1,
              background: "#c9a96e",
            }}
          />
          Bloom Flower Wall Rentals
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "rgba(245,240,232,0.75)",
            fontWeight: 300,
            maxWidth: 560,
            marginBottom: 40,
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 0,
          }}
        >
          <Link to={primaryTo} className="btn-gold">
            {primaryLabel}
          </Link>
          <Link to="/" className="btn-outline">
            Back to Home
          </Link>
        </div>

        {/* Sections */}
        <div className="legal-sections">
          {sections.map((s, i) => (
            <div
              key={s.title}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: 40,
                padding: "36px 0",
                borderBottom: "1px solid rgba(201,169,110,0.1)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(17px, 2vw, 22px)",
                  fontWeight: 400,
                  color: "#f5f0e8",
                  paddingTop: 2,
                }}
              >
                {s.title}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(245,240,232,0.80)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 36,
            fontSize: 12,
            color: "rgba(245,240,232,0.52)",
            letterSpacing: "0.04em",
          }}
        >
          {note}
        </p>
      </div>
    </div>
  );
}
