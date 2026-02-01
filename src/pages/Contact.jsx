import React from "react";
import SeoLite from "../components/SeoLite.jsx";

export default function Contact() {
  return (
    <div>
      <SeoLite
        title="Request a Quote | Bloom Flower Wall Rentals Clermont, FL"
        description="Request availability and pricing for your event date. Flower wall rentals with delivery + setup included in Clermont, FL and surrounding areas. Get a fast quote."
      />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h1 className="h2">Request a Quote</h1>
            <p className="muted">
              Share your date, city/venue, and style—airy ivory + blush is our
              specialty.
            </p>
          </div>

          <div className="contactGrid">
            <div className="card">
              <div className="footerTitle">Bloom Flower Wall Rentals</div>
              <p className="muted">
                Serving Clermont, FL and surrounding areas. Delivery + setup
                included in all packages.
              </p>
              <div className="footerLinks">
                <a href="mailto:hello@bloomwallrentals.com">
                  hello@bloomwallrentals.com
                </a>
                <a href="tel:+15551234567">(555) 123-4567</a>
                <a
                  href="https://www.instagram.com/bloomflowerwallrentals/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @bloomflowerwallrentals
                </a>
              </div>
            </div>

            <form className="card form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Full name
                <input name="name" required />
              </label>

              <label>
                Email
                <input name="email" type="email" required />
              </label>

              <label>
                Phone
                <input name="phone" type="tel" required />
              </label>

              <label>
                Event date
                <input name="eventDate" type="date" required />
              </label>

              <label>
                City / Venue
                <input
                  name="location"
                  required
                  placeholder="Clermont, Winter Garden, Orlando..."
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Theme, colors, wall size, indoor/outdoor, add-ons…"
                />
              </label>

              <button className="btn btnPrimary" type="submit">
                Submit Inquiry
              </button>

              <p className="muted tiny" style={{ marginBottom: 0 }}>
                Next step: connect this form to Formspree / Netlify Forms / your
                backend.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
