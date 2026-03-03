import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function PageMeta() {
  useEffect(() => {
    const title =
      "Flower Wall Rentals Near Me | Service Areas | Bloom — Clermont, FL";
    const desc =
      "Bloom Flower Wall Rentals serves Clermont, Minneola, Groveland, Winter Garden, Windermere, Kissimmee, Davenport, and select Orlando-area venues. Get a delivery quote.";
    document.title = title;
    const setMeta = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta(
      'meta[property="og:url"]',
      "content",
      "https://bloomflowerwallrentals.com/service-areas"
    );
    setMeta('meta[name="twitter:card"]', "content", "summary");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", desc);
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = "https://bloomflowerwallrentals.com/service-areas";
    // Service schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Flower Wall Rental",
      provider: {
        "@type": "LocalBusiness",
        name: "Bloom Flower Wall Rentals",
        url: "https://bloomflowerwallrentals.com",
      },
      areaServed: [
        "Clermont FL",
        "Minneola FL",
        "Groveland FL",
        "Montverde FL",
        "Winter Garden FL",
        "Ocoee FL",
        "Windermere FL",
        "Davenport FL",
        "Kissimmee FL",
        "Orlando FL",
      ],
      description:
        "Luxury flower wall rental with delivery, setup, and breakdown for weddings and events across Central Florida.",
    };
    let ld = document.getElementById("ld-service");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-service";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(schema);
  }, []);
  return null;
}

const areas = [
  { name: "Clermont", zone: "standard" },
  { name: "Minneola", zone: "standard" },
  { name: "Groveland", zone: "standard" },
  { name: "Montverde", zone: "standard" },
  { name: "Winter Garden", zone: "standard" },
  { name: "Ocoee", zone: "extended" },
  { name: "Windermere", zone: "extended" },
  { name: "Davenport", zone: "extended" },
  { name: "Kissimmee", zone: "extended" },
  { name: "Orlando (select areas)", zone: "extended" },
];

export default function ServiceAreas() {
  return (
    <div
      style={{
        background: "#0c0c0c",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .btn-gold { display:inline-flex; align-items:center; gap:10px; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:15px 36px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        .btn-outline { display:inline-flex; align-items:center; gap:10px; background:transparent; color:#f5f0e8; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:400; letter-spacing:0.14em; text-transform:uppercase; padding:14px 28px; border:1px solid rgba(245,240,232,0.2); cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-outline:hover { border-color:#c9a96e; color:#c9a96e; }
        .noise { position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:0.025; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); background-size:150px; }
        .sa-inner { max-width: 1100px; margin: 0 auto; padding: 100px 48px 120px; }
        .sa-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(201,169,110,0.08); margin-top: 52px; }
        .area-row { display: flex; align-items: center; justify-content: space-between; padding: 20px 28px; border-bottom: 1px solid rgba(201,169,110,0.1); transition: background 0.2s; }
        .area-row:hover { background: rgba(201,169,110,0.03); }
        .zone-standard { font-family:'DM Sans',sans-serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; color:#c9a96e; border:1px solid rgba(201,169,110,0.3); padding:4px 12px; }
        .zone-extended { font-family:'DM Sans',sans-serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(245,240,232,0.38); border:1px solid rgba(245,240,232,0.12); padding:4px 12px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(201,169,110,0.08); margin-top: 52px; }
        .bottom-cta { margin-top: 2px; background: linear-gradient(135deg,#18140c 0%,#1e1a0e 100%); border: 1px solid rgba(201,169,110,0.2); padding: 40px 48px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
        @media (max-width: 768px) {
          .sa-inner { padding: 72px 24px 96px; }
          .sa-grid { grid-template-columns: 1fr; }
          .info-grid { grid-template-columns: 1fr; }
          .bottom-cta { flex-direction: column; align-items: flex-start; padding: 32px 28px; }
        }
      `}</style>
      <PageMeta />
      <div className="noise" />

      <div className="sa-inner">
        {/* Header */}
        <div style={{ maxWidth: 640 }}>
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
            Where We Work
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(42px, 7vw, 88px)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Service
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Areas</em>
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.42)",
              fontWeight: 300,
              marginBottom: 36,
            }}
          >
            Bloom Flower Wall Rentals is based in{" "}
            <strong style={{ color: "#f5f0e8", fontWeight: 400 }}>
              Clermont, FL
            </strong>{" "}
            and serves surrounding areas. Delivery, professional setup, and
            breakdown are available for an additional fee, quoted by venue
            location.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/contact" className="btn-gold">
              Request a Quote
            </Link>
            <Link to="/pricing" className="btn-outline">
              See Pricing
            </Link>
          </div>
        </div>

        {/* Zone explanation cards */}
        <div className="info-grid">
          {[
            {
              zone: "Standard Area",
              desc: "Clermont and nearby Lake County areas. Delivery/setup fees are typically lowest here.",
            },
            {
              zone: "Extended Area",
              desc: "Surrounding Orlando-area cities. Delivery/setup fees may be higher depending on distance and venue access.",
            },
          ].map((z, i) => (
            <div
              key={z.zone}
              style={{ background: "#0a0a0a", padding: "36px 36px" }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: i === 0 ? "#c9a96e" : "rgba(245,240,232,0.4)",
                  marginBottom: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 16,
                    height: 1,
                    background: i === 0 ? "#c9a96e" : "rgba(245,240,232,0.3)",
                  }}
                />
                {z.zone}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(245,240,232,0.48)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {z.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Areas list */}
        <div style={{ marginTop: 52 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 300,
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            Cities We{" "}
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
              Commonly Serve
            </em>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "rgba(245,240,232,0.35)",
              fontWeight: 300,
              marginBottom: 0,
            }}
          >
            Share your venue address for the most accurate quote.
          </p>
        </div>

        <div className="sa-grid" style={{ marginTop: 28 }}>
          {areas.map((a) => (
            <div
              key={a.name}
              className="area-row"
              style={{ background: "#0a0a0a" }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 400,
                  color: "#f5f0e8",
                }}
              >
                {a.name}
              </span>
              <span
                className={
                  a.zone === "standard" ? "zone-standard" : "zone-extended"
                }
              >
                {a.zone === "standard" ? "Standard" : "Extended"}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "28px 28px",
            background: "#090909",
            borderTop: "none",
            marginTop: 2,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "rgba(245,240,232,0.3)",
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            Don't see your city? Send your venue address and event date — we'll
            confirm availability and quote any delivery/setup fees if needed.
          </p>
          <Link to="/contact" className="btn-gold">
            Check My Venue
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 400,
                marginBottom: 6,
              }}
            >
              Not sure if you're in range?
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(245,240,232,0.42)",
                fontWeight: 300,
              }}
            >
              Send your venue address and date — we'll confirm quickly.
            </p>
          </div>
          <Link to="/contact" className="btn-gold">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
