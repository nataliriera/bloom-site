import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/bloom-logo.png";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/gallery", label: "Flower Walls" },
  { to: "/styling", label: "Styling" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .bnav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #0c0c0c;
          border-bottom: 1px solid rgba(198,164,106,0.12);
          transition: box-shadow 0.25s ease;
        }
        .bnav--scrolled {
          box-shadow: 0 8px 28px rgba(0,0,0,0.28);
        }
        .bnav__inner {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .bnav__logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .bnav__logo img {
          height: 40px;
          width: auto;
          display: block;
        }
        .bnav__links {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .bnav__link {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(247,243,237,0.78);
          text-decoration: none;
          padding: 8px 12px;
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .bnav__link:hover,
        .bnav__link.active {
          color: #c6a46a;
        }
        .bnav__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 20px;
          background: #c6a46a;
          color: #0c0c0c;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid #c6a46a;
          transition: background 0.2s ease;
          white-space: nowrap;
        }
        .bnav__cta:hover { background: #b89355; border-color: #b89355; }
        .bnav__burger {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 0;
        }
        .bnav__burger span,
        .bnav__burger span::before,
        .bnav__burger span::after {
          display: block;
          width: 20px;
          height: 1px;
          background: #f7f3ed;
          position: relative;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .bnav__burger span::before,
        .bnav__burger span::after {
          content: '';
          position: absolute;
          left: 0;
        }
        .bnav__burger span::before { top: -6px; }
        .bnav__burger span::after { top: 6px; }
        .bnav__burger.open span { background: transparent; }
        .bnav__burger.open span::before { top: 0; transform: rotate(45deg); }
        .bnav__burger.open span::after { top: 0; transform: rotate(-45deg); }

        .bnav-drawer {
          position: fixed;
          inset: 72px 0 0 0;
          background: #0c0c0c;
          z-index: 999;
          padding: 28px 24px 48px;
          overflow-y: auto;
          display: none;
        }
        .bnav-drawer.open { display: block; }
        .bnav-drawer a {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 8vw, 44px);
          font-weight: 300;
          color: rgba(247,243,237,0.9);
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(198,164,106,0.12);
        }
        .bnav-drawer a.active,
        .bnav-drawer a:hover { color: #c6a46a; }
        .bnav-drawer__cta {
          display: inline-flex !important;
          margin-top: 28px;
          font-family: 'DM Sans', sans-serif !important;
          font-size: 12px !important;
          font-weight: 500 !important;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: #c6a46a;
          color: #0c0c0c !important;
          border: 0 !important;
          padding: 14px 24px !important;
        }

        @media (max-width: 900px) {
          .bnav__links,
          .bnav__cta--desktop { display: none !important; }
          .bnav__burger { display: flex; }
        }
      `}</style>

      <header className={`bnav${scrolled ? " bnav--scrolled" : ""}`}>
        <div className="bnav__inner">
          <Link to="/" className="bnav__logo" aria-label="Bloom home">
            <img src={logo} alt="Bloom" />
          </Link>

          <nav className="bnav__links" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `bnav__link${isActive ? " active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="bnav__cta bnav__cta--desktop">
            Check Availability
          </Link>

          <button
            type="button"
            className={`bnav__burger${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`bnav-drawer${open ? " open" : ""}`} hidden={!open}>
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link to="/contact" className="bnav-drawer__cta">
          Check Availability
        </Link>
      </div>
    </>
  );
}
