// components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/bloom-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Styles" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/service-areas", label: "Service Areas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.25; } }

        .bloom-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.55);
          text-decoration: none;
          padding: 8px 14px;
          transition: color 0.2s ease;
          position: relative;
          white-space: nowrap;
        }
        .bloom-nav-link:hover { color: #c9a96e; }
        .bloom-nav-link.active { color: #c9a96e; }
        .bloom-nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 14px;
          right: 14px;
          height: 1px;
          background: #c9a96e;
        }

        .bloom-mobile-link {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 9vw, 56px);
          font-weight: 300;
          font-style: italic;
          color: rgba(245,240,232,0.65);
          text-decoration: none;
          display: block;
          padding: 14px 0;
          border-bottom: 1px solid rgba(201,169,110,0.12);
          transition: color 0.2s ease;
          line-height: 1.05;
        }
        .bloom-mobile-link:hover,
        .bloom-mobile-link.active { color: #c9a96e; }

        .bloom-desktop-nav { display: flex; align-items: center; gap: 0; }
        .bloom-hamburger    { display: none; }

        @media (max-width: 900px) {
          .bloom-desktop-nav { display: none !important; }
          .bloom-hamburger   { display: flex !important; }
        }
      `}</style>

      {/* ── Fixed top bar ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000 /* high enough to sit above everything */,
          background:
            scrolled || open ? "rgba(10,10,10,0.97)" : "rgba(12,12,12,0.70)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom:
            scrolled && !open
              ? "1px solid rgba(201,169,110,0.12)"
              : "1px solid transparent",
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: scrolled ? 64 : 76,
              transition: "height 0.3s ease",
            }}
          >
            {/* Logo — always on top of overlay */}
            <Link
              to="/"
              aria-label="Bloom home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                zIndex: 1010,
                position: "relative",
              }}
            >
              <img
                src={logo}
                alt="Bloom Flower Wall Rentals"
                style={{
                  height: scrolled ? 40 : 48,
                  width: "auto",
                  transition: "height 0.3s ease",
                  filter: "brightness(1.1)",
                }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="bloom-desktop-nav">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `bloom-nav-link${isActive ? " active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(201,169,110,0.7)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  padding: "5px 14px",
                  marginLeft: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#c9a96e",
                    display: "inline-block",
                    animation: "pulse-dot 2.2s ease infinite",
                  }}
                />
                Now Booking
              </span>

              <Link
                to="/contact"
                style={{
                  marginLeft: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#c9a96e",
                  color: "#0c0c0c",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "11px 22px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s ease, letter-spacing 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#d4b280";
                  e.currentTarget.style.letterSpacing = "0.18em";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#c9a96e";
                  e.currentTarget.style.letterSpacing = "0.14em";
                }}
              >
                Request a Quote
              </Link>
            </nav>

            {/* Hamburger — always on top of overlay */}
            <button
              className="bloom-hamburger"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              type="button"
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                background: "transparent",
                border: "1px solid rgba(201,169,110,0.25)",
                padding: "10px 12px",
                cursor: "pointer",
                zIndex: 1010,
                position: "relative",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 22,
                    height: 1,
                    background: "#c9a96e",
                    transition: "transform 0.28s ease, opacity 0.28s ease",
                    transform: open
                      ? i === 0
                        ? "translateY(7px) rotate(45deg)"
                        : i === 2
                        ? "translateY(-7px) rotate(-45deg)"
                        : "none"
                      : "none",
                    opacity: open && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen overlay — rendered OUTSIDE the header so it truly covers everything ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999 /* below the header bar (1000) but above page content */,
          background: "rgba(8,8,8,0.99)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px 32px 48px" /* 88px top clears the fixed nav bar */,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.38s cubic-bezier(0.16,1,0.3,1)",
          overflowY: "auto",
        }}
      >
        {/* Now booking badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 40,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(201,169,110,0.6)",
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#c9a96e",
              flexShrink: 0,
              animation: "pulse-dot 2.2s ease infinite",
            }}
          />
          Now Booking · White 8×8 available
        </div>

        {/* Big italic nav links */}
        <nav
          style={{ display: "flex", flexDirection: "column", marginBottom: 44 }}
        >
          {nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `bloom-mobile-link${isActive ? " active" : ""}`
              }
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(14px)",
                transition: `color 0.2s ease, opacity 0.45s ease ${
                  i * 0.05
                }s, transform 0.5s ease ${i * 0.05}s`,
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + contact details */}
        <div
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "none" : "translateY(10px)",
            transition: "opacity 0.45s ease 0.28s, transform 0.5s ease 0.28s",
          }}
        >
          <Link
            to="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#c9a96e",
              color: "#0c0c0c",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "18px 32px",
              textDecoration: "none",
            }}
          >
            Request a Quote
          </Link>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <a
              href="tel:+18633355022"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "rgba(245,240,232,0.3)",
                textDecoration: "none",
                letterSpacing: "0.06em",
              }}
            >
              (863) 335-5022
            </a>
            <a
              href="mailto:info@bloomflowerwallrentals.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "rgba(245,240,232,0.3)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              info@bloomflowerwallrentals.com
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for non-hero pages */}
      <div style={{ height: 76 }} className="bloom-nav-spacer" />
      <style>{`
        @media (max-width: 900px) { .bloom-nav-spacer { height: 64px !important; } }
      `}</style>
    </>
  );
}
