// components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/bloom-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/service-areas", label: "Service Areas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-[#fbf7f2]/90 backdrop-blur border-b border-black/10",
        scrolled ? "py-2" : "py-4",
        "transition-all",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/"
            className="inline-flex items-center gap-3"
            aria-label="Bloom home"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="Bloom Flower Wall Rentals"
              className={[
                "w-auto transition-all",
                scrolled ? "h-10" : "h-12",
              ].join(" ")}
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-black/70 shadow-sm transition hover:bg-white/80"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            type="button"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-[2px] w-5 rounded-full bg-black/70" />
              <span className="h-[2px] w-5 rounded-full bg-black/70" />
              <span className="h-[2px] w-5 rounded-full bg-black/70" />
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-black text-white"
                      : "text-black/70 hover:text-black hover:bg-white/70 border border-transparent hover:border-black/10",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
            >
              Request a Quote
            </Link>
          </nav>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden mt-3 rounded-3xl border border-black/10 bg-white/70 p-3 shadow-sm">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "rounded-2xl px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-black text-white"
                        : "text-black/70 hover:text-black hover:bg-white/70",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-black px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
