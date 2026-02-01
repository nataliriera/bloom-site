import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/service-areas", label: "Service Areas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container navRow">
        <Link to="/" className="brand" aria-label="Bloom home">
          <span className="brandMark">bloom</span>
          <span className="brandSub">flower wall rentals</span>
        </Link>

        <button
          className="menuBtn"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navLinks ${open ? "open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `navLink ${isActive ? "active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            className="btn btnPrimary"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
