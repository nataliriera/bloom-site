import React, { useEffect } from "react";
import portraitImg from "../assets/about-portrait.png";
import setupImg from "../assets/about-setup.png";
import {
  BloomPageHero,
  BloomCtaBand,
} from "../components/BloomLayout.jsx";

function PageMeta() {
  useEffect(() => {
    const title =
      "About Natali Riera | Bloom Flower Wall Rentals, Clermont, FL";
    const desc =
      "Meet Natali Riera, owner of Bloom Flower Wall Rentals. Premium faux floral backdrops for weddings, showers, and events in Clermont and Central Florida.";
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
      "https://bloomflowerwallrentals.com/about"
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
    canon.href = "https://bloomflowerwallrentals.com/about";
  }, []);
  return null;
}

export default function About() {
  return (
    <div className="bloom-page">
      <PageMeta />
      <style>{`
        .about-story {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: center;
        }
        .about-story__photo {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--bloom-cream-deep);
        }
        .about-story__photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .about-setup {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }
        .about-setup__photo {
          aspect-ratio: 16 / 11;
          overflow: hidden;
          background: var(--bloom-cream-deep);
        }
        .about-setup__photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
        @media (max-width: 860px) {
          .about-story,
          .about-setup {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-story__photo {
            max-width: 420px;
          }
        }
      `}</style>

      <BloomPageHero
        label="About"
        title="Natali Riera"
        text="Clermont-based owner of Bloom Flower Wall Rentals. When you book Bloom, you work directly with me from first message to final breakdown."
        ctaLabel="Work With Bloom"
      />

      <section className="bloom-section" style={{ paddingTop: 0 }}>
        <div className="bloom-wrap about-story">
          <div className="about-story__photo">
            <img
              src={portraitImg}
              alt="Natali Riera, owner of Bloom Flower Wall Rentals"
              loading="lazy"
            />
          </div>
          <div>
            <p className="bloom-label">Why Bloom</p>
            <h2 className="bloom-h2">Backdrops with intention</h2>
            <p className="bloom-text">
              I started Bloom because every event deserves a backdrop that feels
              considered, not an afterthought. Soft white for a ceremony, bold
              color for a birthday, greenery for an outdoor gathering: the wall
              should match the moment.
            </p>
            <p className="bloom-text">
              Bloom specializes in premium faux florals. Always in bloom, never
              wilting in the Florida heat.
            </p>
            <p className="bloom-text">
              I help clients choose a style that photographs well in their space,
              then handle install so it looks finished before guests arrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bloom-section bloom-section--deep">
        <div className="bloom-wrap about-setup">
          <div>
            <p className="bloom-label">Today</p>
            <h2 className="bloom-h2">Central Florida, hands-on</h2>
            <p className="bloom-text">
              Bloom is based in Clermont and serves weddings, showers,
              birthdays, quinceañeras, and branded events across Central
              Florida, including Winter Garden, Orlando, Kissimmee, and nearby
              cities.
            </p>
            <p className="bloom-text">
              Today that means flower walls, floral styling, draping, and custom
              backdrops that feel personal to your event, without the runaround
              of a large rental company.
            </p>
          </div>
          <div className="about-setup__photo">
            <img
              src={setupImg}
              alt="Natali setting up a flower wall at an event"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <BloomCtaBand />
    </div>
  );
}
