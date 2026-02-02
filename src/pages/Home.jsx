import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import SeoLite from "../components/SeoLite.jsx";
import LocalBusinessSchema from "../components/LocalBusinessSchema.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      {/* ✅ SEO unchanged */}
      <SeoLite
        title="Flower Wall Rentals in Clermont, FL | Bloom Flower Wall Rentals"
        description="Airy, luxurious flower wall rentals for weddings and events in Clermont, FL and surrounding areas. Delivery, setup, and breakdown included. Request a quote."
      />
      <LocalBusinessSchema />

      <section className="relative overflow-hidden">
        {/* soft background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-28 h-[420px] w-[420px] rounded-full bg-[#e7d3b5] blur-3xl opacity-60" />
          <div className="absolute -right-28 top-10 h-[520px] w-[520px] rounded-full bg-[#f0e8dd] blur-3xl opacity-70" />
          <div className="absolute -bottom-44 left-[20%] h-[520px] w-[520px] rounded-full bg-[#ead9c1] blur-3xl opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-xs font-medium text-black/70 shadow-sm backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#b98955]" />
                Clermont, FL • Flower Wall Rentals
              </div>

              <h1 className="mt-6 font-serif text-[44px] leading-[1.02] tracking-tight sm:text-[56px] lg:text-[64px]">
                Airy, luxurious flower wall walls for{" "}
                <span className="text-[#b98955]">unforgettable photos</span>.
              </h1>

              <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-black/65">
                Bloom Flower Wall Rentals delivers, installs, and styles premium
                floral backdrops for weddings, showers, birthdays, and brand
                events—serving Clermont and surrounding areas.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
                  to="/contact"
                >
                  Request a Quote
                </Link>

                <Link
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/55 px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/75 active:bg-white/60"
                  to="/gallery"
                >
                  View Gallery
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Clermont",
                  "Minneola",
                  "Groveland",
                  "Montverde",
                  "Winter Garden",
                  "Orlando area",
                ].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-black/10 bg-white/45 px-3 py-1.5 text-xs text-black/70 shadow-sm transition hover:bg-white/65"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* little “included” tiles */}
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {[
                  { k: "Delivery", v: "Included" },
                  { k: "Setup", v: "Included" },
                  { k: "Breakdown", v: "Included" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-black/10 bg-white/50 p-4 shadow-sm"
                  >
                    <div className="text-xs text-black/55">{x.k}</div>
                    <div className="mt-1 text-sm font-medium">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="lg:pl-6">
              <div
                className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.35)]"
                aria-label="Bloom hero photo"
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    className="h-full w-full object-cover"
                    src={heroImg}
                    alt="Flower wall backdrop at an event in Clermont, Florida"
                    loading="eager"
                  />
                </div>

                {/* subtle gradient edge */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />

                <div className="flex items-center justify-between gap-4 border-t border-black/10 bg-white/60 px-5 py-4 backdrop-blur">
                  <p className="text-sm text-black/65">
                    Serving{" "}
                    <span className="font-medium text-black">Clermont, FL</span>{" "}
                    + surrounding areas — delivery, setup, and breakdown
                    included.
                  </p>

                  <Link
                    to="/pricing"
                    className="hidden rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 active:bg-white/75 sm:inline-flex"
                  >
                    See pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* rest unchanged */}
    </div>
  );
}
