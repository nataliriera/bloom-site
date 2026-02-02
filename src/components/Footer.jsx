import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerTop">
          {/* Brand / blurb */}
          <div className="footerBrand">
            <div className="footerTitle">Bloom Flower Wall Rentals</div>
            <p className="footerBlurb">
              Airy, luxurious flower walls for weddings and events in Clermont,
              FL and surrounding areas.
            </p>
          </div>

          {/* Pages */}
          <div className="footerCol">
            <div className="footerHead">Pages</div>
            <nav className="footerLinks">
              <Link to="/gallery">Gallery</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/service-areas">Service Areas</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="footerCol">
            <div className="footerHead">Contact</div>
            <div className="footerContact">
              <a href="mailto:hello@bloomwallrentals.com">
                info@bloomflowerwallrentals.com
              </a>
              <a href="tel:15551234567">(863) 335-5022</a>
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            © {new Date().getFullYear()} Bloom Flower Wall Rentals. All rights
            reserved.
          </p>
          <p className="footerLocation">Clermont, FL</p>
        </div>
      </div>
    </footer>
  );
}
