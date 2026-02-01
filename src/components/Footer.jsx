import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="footerBrand">Bloom Flower Wall Rentals</div>
          <p className="muted">
            Airy, luxurious flower walls for weddings and events in Clermont, FL
            and surrounding areas.
          </p>
        </div>

        <div>
          <div className="footerTitle">Pages</div>
          <div className="footerLinks">
            <Link to="/gallery">Gallery</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/service-areas">Service Areas</Link>
            <Link to="/contact">Book</Link>
          </div>
        </div>

        <div>
          <div className="footerTitle">Contact</div>
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
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container footerBottom">
        © {new Date().getFullYear()} Bloom Flower Wall Rentals. All rights
        reserved.
      </div>
    </footer>
  );
}
