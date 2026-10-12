import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { availableWalls, preorderWalls } from "../data/walls.js";
import {
  BloomPageHero,
  BloomSectionHead,
  BloomCtaBand,
} from "../components/BloomLayout.jsx";

function PageMeta() {
  useEffect(() => {
    const title =
      "Flower Walls | Bloom Flower Wall Rentals, Clermont, FL";
    const desc =
      "Browse available premium faux flower walls for rent in Central Florida: White Garden, Midnight Noir, Enchanted Garden, Tropical Oasis, and more. Signage, draping, and styling available.";
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
      "https://bloomflowerwallrentals.com/gallery"
    );
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", desc);
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = "https://bloomflowerwallrentals.com/gallery";
  }, []);
  return null;
}

export default function Gallery() {
  return (
    <div className="bloom-page">
      <PageMeta />
      <style>{`
        .gallery-note {
          margin-top: 40px;
          line-height: 1.7;
          color: var(--bloom-soft);
          max-width: 520px;
          font-style: italic;
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
        }
        .gallery-preorder {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .gallery-preorder__row {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 28px;
          align-items: center;
          padding: 28px 0;
          border-top: 1px solid rgba(26, 22, 18, 0.08);
        }
        .gallery-preorder__row:last-child {
          border-bottom: 1px solid rgba(26, 22, 18, 0.08);
        }
        .gallery-preorder__row img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          background: var(--bloom-cream-deep);
        }
        .gallery-preorder__meta {
          margin: 6px 0 0;
          font-size: 13px;
          color: var(--bloom-mute);
        }
        @media (max-width: 860px) {
          .gallery-preorder__row {
            grid-template-columns: 88px 1fr;
            gap: 20px;
            padding: 22px 0;
          }
          .gallery-preorder__row img {
            width: 88px;
            height: 88px;
          }
        }
      `}</style>

      <BloomPageHero
        label="Rentals"
        title="Flower Walls"
        text="Premium faux flower walls for weddings, showers, and celebrations across Central Florida. Setup & breakdown included in every rental. Delivery quoted separately by venue."
        ctaLabel="Check Availability"
      />

      <section className="bloom-section" style={{ paddingTop: 0 }} aria-label="Available flower walls">
        <div className="bloom-wrap">
          <BloomSectionHead
            label="Available"
            title="In the collection"
            text="Choose a wall for your date. Lush premium faux florals, delivered, set, and ready for photos."
          />
          <div className="bloom-card-grid">
            {availableWalls.map((wall, i) => (
              <article key={wall.id} className="bloom-card">
                <div className="bloom-card__media">
                  <img
                    src={wall.images[0]}
                    alt={`${wall.name} flower wall`}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="bloom-h3">{wall.name}</h3>
                <p className="bloom-text">{wall.description}</p>
                {wall.price && (
                  <p className="bloom-card__price">{wall.price}</p>
                )}
                <Link to="/contact" className="bloom-btn bloom-btn--ink">
                  Check Availability
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bloom-section bloom-section--deep">
        <div className="bloom-wrap">
          <BloomSectionHead
            label="By request"
            title="Also available by request"
            text="These walls can be ordered for your date with additional lead time. Reach out early to reserve yours."
          />
          <div className="gallery-preorder">
            {preorderWalls.map((wall) => (
              <div key={wall.id} className="gallery-preorder__row">
                <img
                  src={wall.images[0]}
                  alt={`${wall.name} flower wall`}
                  loading="lazy"
                />
                <div>
                  <h3
                    className="bloom-h3"
                    style={{ marginBottom: 0, fontSize: "clamp(22px, 2.5vw, 28px)" }}
                  >
                    {wall.name}
                  </h3>
                  <p className="gallery-preorder__meta">
                    Lead time: {wall.leadWeeks || "Upon request"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="gallery-note">
            Signage, floral styling, draping, and custom details can be added to any wall. All Bloom florals are premium faux, designed to photograph like fresh.
          </p>
        </div>
      </section>

      <BloomCtaBand />
    </div>
  );
}
