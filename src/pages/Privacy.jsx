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
    title: "Information We Collect",
    body: "When you submit a quote request, we may collect your name, email, phone number, event details, and any message you provide.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to respond to inquiries, provide quotes, confirm availability, and communicate about your booking.",
  },
  {
    title: "Sharing",
    body: "We do not sell your personal information. We may share details only as needed to provide services (for example, coordinating with a venue or supplier for a pre-order style).",
  },
  {
    title: "Forms & Third-Party Services",
    body: "Our contact form may be processed by a third-party form provider (e.g., Formspree). Their systems may store submitted form data.",
  },
  {
    title: "Your Choices",
    body: null,
    custom: (
      <p
        style={{
          fontSize: 14,
          color: "rgba(245,240,232,0.48)",
          lineHeight: 1.8,
          fontWeight: 300,
        }}
      >
        You can request to update or delete your information by contacting us at{" "}
        <a
          href="mailto:info@bloomflowerwallrentals.com"
          style={{ color: "#c9a96e", textDecoration: "none" }}
        >
          info@bloomflowerwallrentals.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "Questions",
    body: "If you have questions about this policy, contact us anytime.",
  },
];

export default function Privacy() {
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
        .legal-inner { max-width: 860px; margin: 0 auto; padding: 100px 48px 120px; }
        .legal-sections { margin-top: 52px; border-top: 1px solid rgba(201,169,110,0.12); }
        .section-row { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; padding: 36px 0; border-bottom: 1px solid rgba(201,169,110,0.1); }
        @media (max-width: 640px) {
          .legal-inner { padding: 72px 24px 96px; }
          .section-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
      <PageMeta
        title="Privacy Policy | Bloom Flower Wall Rentals"
        description="Privacy policy for Bloom Flower Wall Rentals in Clermont, FL. Learn how we collect and use your information."
        canonical="https://bloomflowerwallrentals.com/privacy"
      />

      <div className="legal-inner">
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
          Privacy Policy
        </h1>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "rgba(245,240,232,0.42)",
            fontWeight: 300,
            maxWidth: 520,
            marginBottom: 40,
          }}
        >
          This policy explains what we collect, how we use it, and your choices.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/contact" className="btn-gold">
            Contact Us
          </Link>
          <Link to="/" className="btn-outline">
            Back to Home
          </Link>
        </div>

        <div className="legal-sections">
          {sections.map((s) => (
            <div key={s.title} className="section-row">
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
              {s.custom ?? (
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(245,240,232,0.48)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {s.body}
                </p>
              )}
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 36,
            fontSize: 12,
            color: "rgba(245,240,232,0.2)",
            letterSpacing: "0.04em",
          }}
        >
          Last updated: February 2026.
        </p>
      </div>
    </div>
  );
}
