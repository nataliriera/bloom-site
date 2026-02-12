// components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/bloom-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Styles" }, // keep /gallery route
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/service-areas", label: "Service Areas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "bg-[#fbf7f2]/90 backdrop-blur border-b border-black/10",
        scrolled ? "shadow-sm" : "shadow-none",
        "transition-[box-shadow] duration-200",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="py-4">
          <div
            className={[
              "flex items-center justify-between gap-4 origin-top transition-transform duration-200",
              scrolled ? "scale-[0.98]" : "scale-100",
            ].join(" ")}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Bloom home"
            >
              <img
                src={logo}
                alt="Bloom Flower Wall Rentals"
                className="h-11 w-auto"
              />
            </Link>

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

              <span className="ml-2 hidden lg:inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60">
                Now booking March
              </span>

              <Link
                to="/contact"
                className="ml-3 inline-flex items-center justify-center rounded-full bg-[#caa374] px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]"
              >
                Request a Quote
              </Link>
            </nav>

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
                <span
                  className={[
                    "h-[2px] w-5 rounded-full bg-black/70 transition-transform duration-200",
                    open ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "h-[2px] w-5 rounded-full bg-black/70 transition-opacity duration-200",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "h-[2px] w-5 rounded-full bg-black/70 transition-transform duration-200",
                    open ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="md:hidden mt-3">
              <div className="rounded-3xl border border-black/10 bg-white/70 p-3 shadow-sm">
                <div className="mb-2 rounded-2xl border border-black/10 bg-white/55 px-3 py-2 text-xs text-black/60">
                  <span className="font-medium text-black/70">
                    Now booking March:
                  </span>{" "}
                  white 8×8 arrives late February.
                </div>

                <nav className="flex flex-col gap-1">
                  {nav.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
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
                    className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#caa374] px-4 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]"
                  >
                    Request a Quote
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
