import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import aboutSetup from "../assets/about-setup.png";
import enchantedGarden2 from "../assets/walls/enchanted-garden-2.jpg";
import midnightNoir from "../assets/walls/midnight-noir.jpg";
import whiteGarden2 from "../assets/walls/white-garden-2.jpg";
import blushOmbre from "../assets/walls/blush-ombre.jpg";
import {
  BloomPageHero,
  BloomSectionHead,
  BloomCtaBand,
} from "../components/BloomLayout.jsx";

const packages = [
  {
    title: "The Full Bloom Setup",
    price: "$995",
    body: "Ivory crossed-drape backdrop + 2 tall faux-floral arrangements, styled for your venue. Setup & breakdown included in every rental. Delivery quoted separately by venue. A 50% deposit reserves the date.",
  },
  {
    title: "The Full Bloom Setup + Flower Wall",
    price: "$1,295",
    body: "The Full Bloom Setup (ivory crossed-drape backdrop + 2 tall faux-floral arrangements), plus your choice of flower wall as the centerpiece. Setup & breakdown included in every rental. Delivery quoted separately by venue. A 50% deposit reserves the date.",
  },
];

const drapingBody =
  "10×10 ft ivory drape backdrop with crossed, flowing styling for ceremonies and photo moments, installed on-site. Larger widths available by custom quote. Setup & breakdown included in every rental. Delivery quoted separately by venue.";

const offerings = [
  {
    title: "Classic Flower Wall Rental",
    price: "Starting at $350",
    body: "Our available premium faux flower walls for ceremonies, showers, birthdays, and parties. A strong photo backdrop without a custom build.",
  },
  {
    title: "Bloom Luxe Floral Wall",
    price: "Starting at $895",
    body: "Fuller density and refined premium faux florals for weddings and high-impact moments where the wall is the primary focal point.",
  },
  {
    title: "Custom Floral & Backdrop Styling",
    price: "Starting at $650+",
    body: "Designed around your palette, venue, and layout. That can mean custom arrangements, layered premium faux florals, or a backdrop built to your brief.",
  },
  {
    title: "Draping",
    price: "Starting at $450",
    body: drapingBody,
  },
  {
    title: "Signage / LED Signs",
    price: "Custom / add-on",
    body: "Names, welcome messages, and LED accents installed with your wall. Guidance often starts around $75–$125; final cost depends on size and style.",
  },
  {
    title: "Delivery",
    price: "Varies by location",
    body: "Setup & breakdown included in every rental. Delivery is quoted separately based on venue distance, access, and timing.",
  },
];

const wallStarts = [
  { name: "White Garden", price: "$350" },
  { name: "Enchanted Garden", price: "$350" },
  { name: "Tropical Oasis", price: "$450" },
  { name: "Midnight Noir", price: "$500" },
];

function PageMeta() {
  useEffect(() => {
    const title =
      "Floral Styling & Event Design | Bloom Flower Wall Rentals, Clermont, FL";
    const desc =
      "Bloom creates complete styled visual moments with premium faux florals, draping, styled backdrops, and custom installs. Starting prices from $350. Serving Central Florida.";
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
      "https://bloomflowerwallrentals.com/styling"
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
    canon.href = "https://bloomflowerwallrentals.com/styling";
  }, []);
  return null;
}

const services = [
  {
    title: "Custom Floral Styling",
    body: "Full floral moments designed around your palette, venue, and guest experience. More than a single wall rental.",
    image: enchantedGarden2,
    alt: "Colorful custom floral wall with event signage",
  },
  {
    title: "Styled Backdrops",
    body: "Layered backdrops that photograph beautifully, with florals, texture, and atmosphere for ceremonies and photo moments.",
    image: whiteGarden2,
    alt: "White Garden styled floral backdrop",
  },
  {
    title: "Draping",
    body: drapingBody,
    image: aboutSetup,
    alt: "Ivory draped backdrop styling by Bloom",
  },
  {
    title: "Custom Signage & LED",
    body: "Welcome signs, LED lettering, and custom details that complete the look and give guests a place to gather.",
    image: blushOmbre,
    alt: "Soft blush floral styling with event details",
  },
  {
    title: "Corporate & Branded Installs",
    body: "Polished floral installs for launches, openings, and brand events. Styled to feel on-brand and photo-ready.",
    image: midnightNoir,
    alt: "Midnight Noir floral installation",
  },
  {
    title: "Custom Event Details",
    body: "The finishing pieces: accents and styling touches that make the whole space feel intentional.",
    image: enchantedGarden2,
    alt: "Custom floral styling details",
  },
];

export default function Styling() {
  return (
    <div className="bloom-page">
      <PageMeta />

      <BloomPageHero
        label="Styling"
        title="More than a flower wall"
        text="Custom florals, draping, styled backdrops, signage, and branded installs, crafted with high-end faux florals designed to photograph like fresh."
        ctaLabel="Tell Us About Your Event"
      />

      <section className="bloom-packages" aria-label="Signature packages">
        <div className="bloom-wrap">
          <BloomSectionHead
            label="Signature Packages"
            title="Full ceremony styling, ready to book"
            text="Two complete setups for ceremonies and photo moments. Priced clearly, styled by Bloom."
          />
          <div className="bloom-packages-grid">
            {packages.map((pkg) => (
              <article key={pkg.title} className="bloom-package-card">
                <h3 className="bloom-package-card__title">{pkg.title}</h3>
                <p className="bloom-package-card__price">{pkg.price}</p>
                <p className="bloom-package-card__body">{pkg.body}</p>
                <Link to="/contact" className="bloom-btn bloom-btn--gold">
                  Check Availability
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bloom-section" aria-label="Styling services">
        <div className="bloom-wrap">
          <BloomSectionHead
            label="What we create"
            title="A complete visual moment"
            text="From a simple wall rental to a fully styled setup, everything is crafted with high-end faux florals designed to photograph like fresh."
          />
          <ul className="bloom-service-list">
            {services.map((service, i) => (
              <li key={service.title} className="bloom-service-row">
                <p className="bloom-service-row__num">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="bloom-service-row__copy">
                  <h3 className="bloom-h3">{service.title}</h3>
                  <p className="bloom-text">{service.body}</p>
                </div>
                <div className="bloom-service-row__thumb">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="pricing"
        className="bloom-section bloom-section--deep"
        aria-label="Starting prices"
      >
        <div className="bloom-wrap">
          <BloomSectionHead
            label="Pricing"
            title="Starting prices"
            text="Premium faux florals, styled and installed. These ranges help you plan. Final pricing depends on location, setup requirements, styling, and custom details, all confirmed in your quote before booking."
          />
          <div className="bloom-pricing-list">
            {offerings.map((item) => (
              <div key={item.title} className="bloom-pricing-row">
                <div>
                  <h3 className="bloom-h3" style={{ marginBottom: 10 }}>
                    {item.title}
                  </h3>
                  <p className="bloom-text">{item.body}</p>
                </div>
                <div className="bloom-pricing-row__price">{item.price}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 72 }}>
            <BloomSectionHead
              label="Available walls"
              title="Wall starting prices"
              text="Classic rentals from our current inventory. Style availability changes with the season and booking calendar."
            />
            <div className="bloom-pricing-walls">
              {wallStarts.map((w) => (
                <div key={w.name} className="bloom-pricing-walls__item">
                  <span>{w.name}</span>
                  <strong>{w.price}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BloomCtaBand />
    </div>
  );
}
