import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function PageMeta() {
  useEffect(() => {
    const title =
      "Flower Wall Rentals Near Me | Service Areas | Bloom, Clermont, FL";
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
      "meta[property='og:url']",
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
        "Apopka FL",
        "Leesburg FL",
      ],
      description:
        "Premium faux flower wall rental for weddings and events across Central Florida. Setup & breakdown included in every rental. Delivery quoted separately by venue.",
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

const standardAreas = [
  "Clermont",
  "Minneola",
  "Groveland",
  "Montverde",
  "Winter Garden",
];

const extendedAreas = [
  "Ocoee",
  "Windermere",
  "Davenport",
  "Kissimmee",
  "Apopka",
  "Leesburg",
  "Orlando (select areas)",
];

export default function ServiceAreas() {
  return (
    <div className="bloom-page service-areas-page">
      <PageMeta />
      <style>{`
        .service-areas-page .areas-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          margin-top: 48px;
        }
        .service-areas-page .areas-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .service-areas-page .areas-list li {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 300;
          line-height: 1.35;
          color: var(--bloom-ink);
          padding: 12px 0;
          border-bottom: 1px solid rgba(26, 22, 18, 0.08);
        }
        .service-areas-page .areas-note {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(26, 22, 18, 0.1);
          max-width: 540px;
        }
        @media (max-width: 720px) {
          .service-areas-page .areas-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <header className="bloom-page-hero">
        <div className="bloom-wrap">
          <p className="bloom-label">Where We Work</p>
          <h1 className="bloom-h1">Service Areas</h1>
          <p className="bloom-text">
            Bloom brings premium faux flower walls, draping, and floral styling
            to Clermont, Orlando, and surrounding Central Florida. Setup &
            breakdown included in every rental. Delivery quoted separately by
            venue.
          </p>
        </div>
      </header>

      <section className="bloom-section" style={{ paddingTop: 0 }}>
        <div className="bloom-wrap">
          <div className="areas-grid">
            <div>
              <p className="bloom-label">Standard</p>
              <h2 className="bloom-h3">Nearby</h2>
              <p className="bloom-text" style={{ marginBottom: 20 }}>
                Clermont and nearby Lake County areas. Delivery fees are
                typically lowest here.
              </p>
              <ul className="areas-list">
                {standardAreas.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="bloom-label">Extended</p>
              <h2 className="bloom-h3">Greater Central Florida</h2>
              <p className="bloom-text" style={{ marginBottom: 20 }}>
                Surrounding Orlando-area cities. Delivery fees may be higher
                depending on distance and venue access.
              </p>
              <ul className="areas-list">
                {extendedAreas.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="areas-note">
            <p className="bloom-label">Delivery</p>
            <p className="bloom-text">
              Every quote includes delivery based on your venue address. Don’t
              see your city? Send the address and we’ll confirm availability.
            </p>
          </div>
        </div>
      </section>

      <div className="bloom-cta-band">
        <div className="bloom-wrap">
          <div className="bloom-cta-band__box">
            <p className="bloom-label">Your venue</p>
            <h2 className="bloom-h2">Check Availability</h2>
            <p className="bloom-text">
              Share your date and venue address. We’ll confirm coverage and
              send a clear delivery quote.
            </p>
            <Link to="/contact" className="bloom-btn bloom-btn--gold">
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
