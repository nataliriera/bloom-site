import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bloom-logo.png";

const primary = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Flower Walls" },
  { to: "/styling", label: "Styling" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Check Availability" },
];

const secondary = [
  { to: "/styling#pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/events", label: "Events" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .bfoot {
          background: #0c0c0c;
          color: rgba(247,243,237,0.78);
          padding: 72px 0 36px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }
        .bfoot__inner {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }
        .bfoot__top {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.1fr;
          gap: 40px 32px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(198,164,106,0.14);
        }
        .bfoot__logo {
          display: inline-block;
          margin-bottom: 18px;
        }
        .bfoot__logo img {
          height: 36px;
          width: auto;
          display: block;
        }
        .bfoot__brand {
          font-size: 15px;
          line-height: 1.65;
          max-width: 280px;
          margin: 0 0 20px;
          color: rgba(247,243,237,0.7);
        }
        .bfoot__label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c6a46a;
          margin: 0 0 18px;
        }
        .bfoot__links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bfoot__links a {
          color: rgba(247,243,237,0.78);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }
        .bfoot__links a:hover { color: #c6a46a; }
        .bfoot__contact a {
          color: rgba(247,243,237,0.78);
          text-decoration: none;
          display: block;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .bfoot__contact a:hover { color: #c6a46a; }
        .bfoot__social {
          display: flex;
          gap: 14px;
          margin-top: 16px;
        }
        .bfoot__social a {
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c6a46a;
          text-decoration: none;
        }
        .bfoot__bottom {
          padding-top: 28px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          font-size: 12px;
          color: rgba(247,243,237,0.45);
        }
        .bfoot__bottom a {
          color: rgba(247,243,237,0.55);
          text-decoration: none;
        }
        .bfoot__bottom a:hover { color: #c6a46a; }
        @media (max-width: 900px) {
          .bfoot__top {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .bfoot__top {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>

      <footer className="bfoot">
        <div className="bfoot__inner">
          <div className="bfoot__top">
            <div>
              <Link to="/" className="bfoot__logo" aria-label="Bloom home">
                <img src={logo} alt="Bloom" />
              </Link>
              <p className="bfoot__brand">
                Premium faux flower walls, draping, and floral styling for
                Central Florida events.
              </p>
              <p className="bfoot__brand" style={{ marginBottom: 0 }}>
                Clermont · Orlando · surrounding Central Florida
              </p>
            </div>

            <div>
              <p className="bfoot__label">Explore</p>
              <ul className="bfoot__links">
                {primary.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="bfoot__label">More</p>
              <ul className="bfoot__links">
                {secondary.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bfoot__contact">
              <p className="bfoot__label">Contact</p>
              <a href="mailto:info@bloomflowerwallrentals.com">
                info@bloomflowerwallrentals.com
              </a>
              <a href="tel:+18633355022">(863) 335-5022</a>
              <div className="bfoot__social">
                <a
                  href="https://www.instagram.com/bloomflowerwallrentals/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/bloomflowerwallrentals"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="bfoot__bottom">
            <span>© {new Date().getFullYear()} Bloom Flower Wall Rentals</span>
            <span>
              <Link to="/terms">Terms</Link>
              {" · "}
              <Link to="/privacy">Privacy</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
