import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

export default function ServiceAreas() {
  const areas = [
    "Clermont",
    "Minneola",
    "Groveland",
    "Montverde",
    "Winter Garden",
    "Ocoee",
    "Windermere",
    "Davenport",
    "Kissimmee",
    "Orlando (select areas)",
  ];

  return (
    <div>
      <SeoLite
        title="Service Areas | Flower Wall Rentals Near Clermont, FL | Bloom"
        description="Bloom Flower Wall Rentals serves Clermont, FL and surrounding areas including Minneola, Groveland, Montverde, Winter Garden, and select Orlando-area venues. Ask about delivery."
      />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h1 className="h2">Service Areas</h1>
            <p className="muted">
              Bloom Flower Wall Rentals serves Clermont, FL and surrounding
              areas with delivery, professional setup, and breakdown.
            </p>
          </div>

          <div className="grid3">
            {areas.map((a) => (
              <div className="card" key={a}>
                <strong>{a}</strong>
                <p className="muted" style={{ marginBottom: 0 }}>
                  Ask us about availability and travel fees for your venue.
                </p>
              </div>
            ))}
          </div>

          <div className="ctaStrip" style={{ marginTop: 18 }}>
            <div className="container ctaRow">
              <div>
                <div className="ctaTitle">Not sure if you’re in range?</div>
                <div className="muted">
                  Send your venue address and date—we’ll confirm quickly.
                </div>
              </div>
              <Link to="/contact" className="btn btnPrimary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
