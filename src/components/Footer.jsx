// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bloom-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#fbf7f2] border-t border-black/10">
      {/* Soft gold gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#caa374]/55 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-14">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <img
              src={logo}
              alt="Bloom Flower Wall Rentals"
              className="h-12 sm:h-14 w-auto"
            />

            <p className="mt-4 text-sm leading-relaxed text-black/60">
              Airy, luxurious flower wall rentals for weddings and events in
              Clermont, Florida and surrounding areas.
            </p>

            {/* Tiny CTA (no button) */}
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black transition"
              >
                Book your date
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/60 text-black/60 transition group-hover:bg-white">
                  →
                </span>
              </Link>
              <div className="mt-1 text-xs text-black/45">
                Quick reply — usually within 24 hours.
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            {/* Pages */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-black/70">
                Pages
              </div>
              <nav className="mt-4 flex flex-col gap-2 text-sm text-black/60">
                <Link to="/gallery" className="hover:text-black transition">
                  Gallery
                </Link>
                <Link to="/pricing" className="hover:text-black transition">
                  Pricing
                </Link>
                <Link to="/faq" className="hover:text-black transition">
                  FAQ
                </Link>
                <Link
                  to="/service-areas"
                  className="hover:text-black transition"
                >
                  Service Areas
                </Link>
                <Link to="/contact" className="hover:text-black transition">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-black/70">
                Contact
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-black/60">
                <a
                  href="mailto:info@bloomflowerwallrentals.com"
                  className="hover:text-black transition"
                >
                  info@bloomflowerwallrentals.com
                </a>
                <a
                  href="tel:+18633355022"
                  className="hover:text-black transition"
                >
                  (863) 335-5022
                </a>

                {/* Instagram */}
                <div className="mt-3">
                  <a
                    href="https://www.instagram.com/bloomflowerwallrentals/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Bloom Flower Wall Rentals on Instagram"
                    className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm text-black/60 hover:bg-white/80 hover:text-black transition"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="18"
                        height="18"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37a4 4 0 1 1-7.75 1.25 4 4 0 0 1 7.75-1.25z" />
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                      </svg>
                    </span>
                    <span>@bloomflowerwallrentals</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 text-xs text-black/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Bloom Flower Wall Rentals. All rights
            reserved.
          </p>
          <p>Clermont, FL</p>
        </div>
      </div>
    </footer>
  );
}
