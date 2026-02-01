import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

export default function Pricing() {
  return (
    <div>
      <SeoLite
        title="Flower Wall Rental Pricing | Clermont, FL | Bloom Flower Wall Rentals"
        description="View flower wall rental packages and popular add-ons. Transparent pricing with delivery, professional setup, and breakdown included in Clermont, FL and nearby areas."
      />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h1 className="h2">Pricing</h1>
            <p className="muted">
              Transparent packages + optional add-ons. Serving Clermont, FL and
              surrounding areas.
            </p>
          </div>

          <div className="cards3">
            <div className="card">
              <div className="cardTop">
                <div className="cardTitle">Essential</div>
                <div className="price">$899</div>
              </div>
              <ul className="list">
                <li>8ft × 6ft wall</li>
                <li>Delivery + setup</li>
                <li>Same-day breakdown</li>
              </ul>
            </div>

            <div className="card featured">
              <div className="badge">Most Popular</div>
              <div className="cardTop">
                <div className="cardTitle">Premium</div>
                <div className="price">$1,499</div>
              </div>
              <ul className="list">
                <li>10ft × 8ft wall</li>
                <li>Premium florals</li>
                <li>Color matching</li>
                <li>Extended rental window</li>
              </ul>
            </div>

            <div className="card">
              <div className="cardTop">
                <div className="cardTitle">Luxury</div>
                <div className="price">$2,299</div>
              </div>
              <ul className="list">
                <li>12ft × 10ft wall</li>
                <li>White-glove delivery</li>
                <li>Multi-day option</li>
                <li>On-site support (optional)</li>
              </ul>
            </div>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <div className="sectionHead">
              <h2 className="h2">Popular add-ons</h2>
              <p className="muted">
                Make it feel custom without custom pricing.
              </p>
            </div>

            <div className="grid3">
              {[
                "Neon sign (custom name / phrase)",
                "Acrylic welcome sign",
                "Balloon garland (color matched)",
                "Prop table + styling",
                "Extra rental hours",
                "Delivery outside standard zone",
              ].map((x) => (
                <div className="card" key={x}>
                  <strong>{x}</strong>
                  <p className="muted" style={{ marginBottom: 0 }}>
                    Ask for a quote—pricing depends on date and setup details.
                  </p>
                </div>
              ))}
            </div>

            <div className="ctaStrip" style={{ marginTop: 18 }}>
              <div className="container ctaRow">
                <div>
                  <div className="ctaTitle">
                    Want help choosing the right wall?
                  </div>
                  <div className="muted">
                    Send your theme + venue and we’ll recommend options.
                  </div>
                </div>
                <Link to="/contact" className="btn btnPrimary">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
