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
  }, [title, description, canonical]);
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
    <div className="bloom-page legal-page">
      <PageMeta
        title="Terms & Conditions | Bloom Flower Wall Rentals"
        description="Terms and conditions for renting flower walls from Bloom Flower Wall Rentals in Clermont, FL."
        canonical="https://bloomflowerwallrentals.com/terms"
      />
      <style>{`
        .legal-page .legal-sections {
          margin-top: 48px;
          border-top: 1px solid rgba(26, 22, 18, 0.1);
        }
        .legal-page .legal-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          padding: 32px 0;
          border-bottom: 1px solid rgba(26, 22, 18, 0.08);
        }
        .legal-page .legal-row h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 400;
          margin: 0;
          color: var(--bloom-ink);
          padding-top: 2px;
        }
        .legal-page .legal-row p {
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
          color: var(--bloom-soft);
          font-weight: 300;
        }
        .legal-page .legal-note {
          margin-top: 32px;
          font-size: 12px;
          color: var(--bloom-mute);
          letter-spacing: 0.04em;
        }
        .legal-page .legal-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        @media (max-width: 640px) {
          .legal-page .legal-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>

      <header className="bloom-page-hero">
        <div className="bloom-wrap" style={{ maxWidth: 860 }}>
          <p className="bloom-label">Bloom Flower Wall Rentals</p>
          <h1 className="bloom-h1">Terms & Conditions</h1>
          <p className="bloom-text">
            These terms apply to rentals and services provided by Bloom Flower
            Wall Rentals (&quot;Bloom&quot;, &quot;we&quot;, &quot;us&quot;). By
            booking, you agree to these terms.
          </p>
          <div className="legal-actions">
            <Link to="/contact" className="bloom-btn bloom-btn--ink">
              Request a Quote
            </Link>
            <Link to="/" className="bloom-btn bloom-btn--line">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="bloom-section" style={{ paddingTop: 0 }}>
        <div className="bloom-wrap" style={{ maxWidth: 860 }}>
          <div className="legal-sections">
            {sections.map((s) => (
              <div key={s.title} className="legal-row">
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <p className="legal-note">Last updated: February 2026.</p>
        </div>
      </section>
    </div>
  );
}
