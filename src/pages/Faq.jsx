import React, { useState } from "react";
import SeoLite from "../components/SeoLite.jsx";
import FaqSchema from "../components/FaqSchema.jsx";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend 4–6 weeks, especially for weekends. If your date is sooner, message us—last-minute availability happens!",
  },
  {
    q: "Do you deliver to my venue?",
    a: "We serve Clermont, FL and surrounding areas. Travel fees may apply outside our standard delivery zone—send your venue/city for an exact quote.",
  },
  {
    q: "Can the wall be used outdoors?",
    a: "Yes, with the right conditions. We’ll confirm weather, shade, wind, and surface requirements to keep everything secure and photo-ready.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 1–3 hours depending on the wall size and venue access.",
  },
  {
    q: "What if something gets damaged during the event?",
    a: "Normal wear is expected. Significant damage is handled case-by-case—our goal is always a smooth, stress-free experience.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <SeoLite
        title="Flower Wall Rental FAQ | Bloom Flower Wall Rentals Clermont, FL"
        description="Answers to booking, setup time, outdoor use, customization, and service area questions. Flower wall rentals for Clermont, FL and surrounding areas."
      />

      <FaqSchema faqs={faqs} />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h1 className="h2">FAQ</h1>
            <p className="muted">Quick answers before you book.</p>
          </div>

          <div className="faq">
            {faqs.map((x, i) => (
              <div key={x.q} className="faqItem">
                <button
                  className="faqQ"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{x.q}</span>
                  <span className="faqIcon">{open === i ? "–" : "+"}</span>
                </button>

                {open === i && <div className="faqA">{x.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
