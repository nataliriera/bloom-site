import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

const areas = [
  { name: "Clermont", zone: "standard" },
  { name: "Minneola", zone: "standard" },
  { name: "Groveland", zone: "standard" },
  { name: "Montverde", zone: "standard" },
  { name: "Winter Garden", zone: "standard" },

  { name: "Ocoee", zone: "extended" },
  { name: "Windermere", zone: "extended" },
  { name: "Davenport", zone: "extended" },
  { name: "Kissimmee", zone: "extended" },
  { name: "Orlando (select areas)", zone: "extended" },
];

export default function ServiceAreas() {
  const PRIMARY =
    "inline-flex items-center justify-center rounded-full bg-[#caa374] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]";
  const SECONDARY =
    "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65";

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Flower Wall Rentals in Clermont, FL | Service Areas | Bloom"
        description="Bloom Flower Wall Rentals serves Clermont, FL and surrounding areas including Minneola, Groveland, Montverde, Winter Garden, and select Orlando-area venues."
      />

      <section className="py-14">
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              Service Areas
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-black/60">
              Bloom Flower Wall Rentals provides{" "}
              <span className="font-medium text-black/70">
                flower wall rentals in Clermont, FL
              </span>{" "}
              and surrounding areas with delivery, professional setup, and
              breakdown included.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className={PRIMARY}>
                Request a Quote
              </Link>
              <Link to="/pricing" className={SECONDARY}>
                See Pricing
              </Link>
            </div>
          </div>

          {/* Zone Explanation */}
          <div className="mt-10 rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black/70">
              Delivery Zones
            </div>

            <div className="mt-4 space-y-3 text-sm text-black/60 leading-relaxed">
              <div>
                <span className="font-medium text-black/70">
                  Standard Zone:
                </span>{" "}
                Clermont and nearby Lake County areas. No travel fee in most
                cases.
              </div>
              <div>
                <span className="font-medium text-black/70">
                  Extended Zone:
                </span>{" "}
                Surrounding Orlando-area cities. Travel fees may apply based on
                distance and venue access.
              </div>
            </div>
          </div>

          {/* Clean Directory List */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md">
            <div className="border-b border-black/10 bg-white/45 px-6 py-5">
              <div className="text-sm font-semibold text-black/70">
                Cities We Commonly Serve
              </div>
            </div>

            <ul className="divide-y divide-black/10">
              {areas.map((a) => (
                <li
                  key={a.name}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span className="text-sm font-medium text-black/80">
                    {a.name}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] ${
                      a.zone === "standard"
                        ? "border border-emerald-200/60 bg-emerald-50/70 text-emerald-700"
                        : "border border-black/10 bg-white/60 text-black/60"
                    }`}
                  >
                    {a.zone === "standard" ? "Standard Zone" : "Extended Zone"}
                  </span>
                </li>
              ))}
            </ul>

            <div className="p-6">
              <div className="text-xs text-black/50">
                Don’t see your city listed? Send your venue address and event
                date — we’ll confirm availability quickly.
              </div>

              <div className="mt-6">
                <Link to="/contact" className={PRIMARY}>
                  Check My Venue
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-black/10 bg-[#f2e0cc]/35">
            <div className="p-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-serif text-[22px] tracking-tight">
                  Not sure if you’re in range?
                </div>
                <div className="mt-1 text-sm text-black/60">
                  Send your venue address and date — we’ll confirm quickly.
                </div>
              </div>

              <Link to="/contact" className={PRIMARY}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
