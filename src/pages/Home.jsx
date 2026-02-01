import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import SeoLite from "../components/SeoLite.jsx";
import LocalBusinessSchema from "../components/LocalBusinessSchema.jsx";

export default function Home() {
  return (
    <div>
      <SeoLite
        title="Flower Wall Rentals in Clermont, FL | Bloom Flower Wall Rentals"
        description="Airy, luxurious flower wall rentals for weddings and events in Clermont, FL and surrounding areas. Delivery, setup, and breakdown included. Request a quote."
      />
      <LocalBusinessSchema />

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="pill">Clermont, FL • Flower Wall Rentals</div>
            <h1 className="h1">
              Airy, luxurious flower wall walls for{" "}
              <span className="accent">unforgettable photos</span>.
            </h1>
            <p className="lead">
              Bloom Flower Wall Rentals delivers, installs, and styles premium
              floral backdrops for weddings, showers, birthdays, and brand
              events—serving Clermont and surrounding areas.
            </p>

            <div className="row">
              <Link className="btn btnPrimary" to="/contact">
                Request a Quote
              </Link>
              <Link className="btn btnGhost" to="/gallery">
                View Gallery
              </Link>
            </div>

            <div className="chips">
              <span>Clermont</span>
              <span>Minneola</span>
              <span>Groveland</span>
              <span>Montverde</span>
              <span>Winter Garden</span>
              <span>Orlando area</span>
            </div>
          </div>

          <div className="heroCard" aria-label="Bloom hero photo">
            <div className="heroPhotoWrap">
              <img
                className="heroPhoto"
                src={heroImg}
                alt="Flower wall backdrop at an event in Clermont, Florida"
              />
              <div className="heroPhotoOverlay" />
            </div>
            <div className="heroCardCaption">
              Serving Clermont, FL + surrounding areas — delivery, setup, and
              breakdown included.
            </div>
          </div>
        </div>
      </section>

      {/* rest unchanged */}
    </div>
  );
}
