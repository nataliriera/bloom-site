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
  },
  {
    title: "Questions",
    body: "If you have questions about this policy, contact us anytime.",
  },
];

export default function Privacy() {
  return (
    <div className="bloom-page legal-page">
      <PageMeta
        title="Privacy Policy | Bloom Flower Wall Rentals"
        description="Privacy policy for Bloom Flower Wall Rentals in Clermont, FL. Learn how we collect and use your information."
        canonical="https://bloomflowerwallrentals.com/privacy"
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
        .legal-page .legal-row a {
          color: var(--bloom-ink);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-page .legal-row a:hover {
          color: var(--bloom-gold-hover);
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
          <h1 className="bloom-h1">Privacy Policy</h1>
          <p className="bloom-text">
            This policy explains what we collect, how we use it, and your
            choices.
          </p>
          <div className="legal-actions">
            <Link to="/contact" className="bloom-btn bloom-btn--ink">
              Contact Us
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
                {s.title === "Your Choices" ? (
                  <p>
                    You can request to update or delete your information by
                    contacting us at{" "}
                    <a href="mailto:info@bloomflowerwallrentals.com">
                      info@bloomflowerwallrentals.com
                    </a>
                    .
                  </p>
                ) : (
                  <p>{s.body}</p>
                )}
              </div>
            ))}
          </div>
          <p className="legal-note">Last updated: February 2026.</p>
        </div>
      </section>
    </div>
  );
}
