import React from "react";
import { Link } from "react-router-dom";

/** Standard page hero: eyebrow + serif headline + one-line description + gold CTA */
export function BloomPageHero({ label, title, text, ctaTo = "/contact", ctaLabel = "Check Availability" }) {
  return (
    <header className="bloom-page-hero">
      <div className="bloom-wrap">
        {label && <p className="bloom-label">{label}</p>}
        <h1 className="bloom-h1">{title}</h1>
        {text && <p className="bloom-text">{text}</p>}
        {ctaTo && ctaLabel && (
          <Link to={ctaTo} className="bloom-btn bloom-btn--gold bloom-page-hero__cta">
            {ctaLabel}
          </Link>
        )}
      </div>
    </header>
  );
}

/** Standard section header: eyebrow + serif title + short description */
export function BloomSectionHead({ label, title, text, as: Tag = "h2" }) {
  return (
    <div className="bloom-section-head">
      {label && <p className="bloom-label">{label}</p>}
      <Tag className={Tag === "h1" ? "bloom-h1" : "bloom-h2"}>{title}</Tag>
      {text && <p className="bloom-text">{text}</p>}
    </div>
  );
}

/** Shared closing CTA band — identical site-wide */
export function BloomCtaBand({
  title = "Tell Us About Your Event",
  text = "Share your date, venue, and what you’re envisioning. We’ll help you find the right premium faux floral setup.",
  ctaLabel = "Check Availability",
  ctaTo = "/contact",
} = {}) {
  return (
    <section className="bloom-cta-band">
      <div className="bloom-wrap">
        <div className="bloom-cta-band__box">
          <h2 className="bloom-h2">{title}</h2>
          <p className="bloom-text">{text}</p>
          <Link to={ctaTo} className="bloom-btn bloom-btn--gold">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
