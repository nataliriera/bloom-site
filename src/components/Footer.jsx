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
              Airy, luxurious flower wall rentals for weddings and events in
              Clermont, FL and surrounding areas.
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
              <a href="tel:+18633355022">(863) 335-5022</a>

              {/* Instagram icon link */}
              <a
                href="https://www.instagram.com/bloomflowerwallrentals/"
                target="_blank"
                rel="noreferrer"
                aria-label="Bloom Flower Wall Rentals on Instagram"
                className="footerInstagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="20"
                  height="20"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.75 1.25 4 4 0 0 1 7.75-1.25z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
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
