import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";
import LocalBusinessSchema from "../components/LocalBusinessSchema.jsx";

export default function Home() {
  // Leave this empty until you have real reviews.
  // When you get testimonials, add objects like:
  // { quote: "…", name: "Name, City" }
  const testimonials = [];

  // Simple “slides” for mobile swipe in the Perfect for section
  const perfectFor = [
    {
      title: "Weddings",
      text: "Ceremony, reception, or sweetheart table moments.",
    },
    {
      title: "Showers",
      text: "Bridal or baby showers with a photo moment.",
    },
    { title: "Birthdays", text: "Milestones, dinners, and parties." },
    {
      title: "Brand events",
      text: "Launches, pop-ups, and content moments.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      {/* ✅ SEO unchanged */}
      <SeoLite
        title="Flower Wall Rentals in Clermont, FL | Bloom Flower Wall Rentals"
        description="Airy, luxurious flower wall rentals for weddings and events in Clermont, FL and surrounding areas. Delivery, setup, and breakdown included. Request a quote."
      />
      <LocalBusinessSchema />

      {/* HERO */}
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
                Airy, luxurious{" "}
                <span className="text-[#b98955]">flower wall rentals</span> in
                Clermont, FL for unforgettable photos.
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

              {/* ✅ Inventory notice */}
              <div className="mt-4 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/65">
                <span className="font-semibold text-black/75">
                  Inventory update:
                </span>{" "}
                Our signature white flower wall arrives in early March. Now
                booking events{" "}
                <span className="font-semibold text-black/75">
                  March 15 and beyond
                </span>
                .
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

              {/* mini trust row */}
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

            {/* Right (fixed button + hover motion) */}
            <div className="lg:pl-6">
              <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_-40px_rgba(0,0,0,0.45)]">
                {/* soft highlight glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/40 blur-2xl" />
                  <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#e7d3b5]/35 blur-3xl" />
                </div>

                <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-white via-[#f6f3ee] to-[#efe7dd] flex items-center justify-center">
                  {/* subtle label */}
                  <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                    White Garden • 8×8
                  </div>

                  {/* center copy */}
                  <div className="text-sm text-black/55 transition duration-300 group-hover:text-black/60">
                    Designed for your event
                  </div>

                  {/* gentle shimmer sweep */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -left-1/2 top-0 h-full w-[180%] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>

                <div className="relative flex items-center justify-between gap-4 border-t border-black/10 bg-white/60 px-5 py-4 backdrop-blur">
                  <p className="text-sm text-black/65">
                    Serving{" "}
                    <span className="font-medium text-black">Clermont, FL</span>{" "}
                    + surrounding areas — delivery, setup, and breakdown
                    included.
                  </p>

                  <Link
                    to="/pricing"
                    className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-4 py-2 text-sm font-semibold text-black shadow-sm transition duration-200 hover:bg-white hover:shadow-md active:scale-[0.99]"
                  >
                    See pricing
                    <span className="inline-block translate-y-[0.5px] transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Founding Events (premium, not desperate) */}
          <div className="mt-10">
            <div className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm">
              <div className="text-sm font-semibold text-black/70">
                Founding Events Availability
              </div>
              <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                Bloom Flower Wall Rentals is now booking a limited number of
                early events in Clermont, FL. Introductory pricing is available
                while we build our local portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight">How it works</h2>
            <p className="mt-2 text-sm text-black/60 leading-relaxed">
              Simple, stress-free flower wall rentals from start to finish.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Share your details",
                text: "Send your event date, venue/city, and your vibe (or inspo).",
              },
              {
                title: "We confirm everything",
                text: "We confirm availability, timing, and any venue notes—then send your quote.",
              },
              {
                title: "We deliver & install",
                text: "We handle delivery, professional setup, and return for breakdown.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-md"
              >
                <div className="text-sm font-semibold text-black/75">
                  {x.title}
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                  {x.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h2 className="font-serif text-3xl tracking-tight">
                What’s included
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed max-w-prose">
                Transparent pricing with everything you need for a polished,
                photo-ready setup.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "White Garden wall",
                    text: "Bright, airy, and photo-friendly—available now.",
                  },
                  {
                    title: "Delivery + setup",
                    text: "Professional installation with venue-friendly timing.",
                  },
                  {
                    title: "Breakdown included",
                    text: "We return after your event for smooth load-out.",
                  },
                  {
                    title: "Optional add-ons",
                    text: "Neon signs, wood signs, balloons, and custom ideas.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-md"
                  >
                    <div className="text-sm font-semibold text-black/75">
                      {x.title}
                    </div>
                    <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                      {x.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price card */}
            <div className="rounded-3xl border border-black/10 bg-white/55 p-7 shadow-md">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60">
                Event rate
              </div>
              <div className="mt-4 flex items-end justify-between gap-6">
                <div>
                  <div className="font-serif text-4xl leading-none">$350</div>
                  <div className="mt-1 text-xs text-black/50">per event</div>
                </div>
                <div className="text-sm text-black/60">
                  Clermont, FL + nearby areas
                </div>
              </div>

              <p className="mt-4 text-sm text-black/60 leading-relaxed">
                Includes delivery, professional setup, and breakdown. Add-ons
                are quoted based on your event details.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65"
                >
                  View Pricing
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
                >
                  Check availability
                </Link>
              </div>

              <div className="mt-6 rounded-2xl border border-black/10 bg-white/55 p-4 text-xs text-black/55">
                Booking ahead? If your event is{" "}
                <span className="font-medium text-black/65">6–8+ weeks</span>{" "}
                out, we may be able to source additional wall styles by request.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight">Perfect for</h2>
            <p className="mt-2 text-sm text-black/60 leading-relaxed">
              Designed to elevate events of all kinds.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="mt-6 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {perfectFor.map((x) => (
              <div
                key={x.title}
                className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-md"
              >
                <div className="text-sm font-semibold text-black/75">
                  {x.title}
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                  {x.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile slider */}
          <div className="mt-6 md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
              {perfectFor.map((x) => (
                <div
                  key={x.title}
                  className="min-w-[78%] snap-start rounded-3xl border border-black/10 bg-white/55 p-6 shadow-md"
                >
                  <div className="text-sm font-semibold text-black/75">
                    {x.title}
                  </div>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                    {x.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-2 text-xs text-black/45">Swipe to see more →</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (hidden until you have real reviews) */}
      {testimonials.length > 0 && (
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight">
                Kind words from our clients
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                A few notes from recent events in Clermont, FL and nearby areas.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-md"
                >
                  <p className="text-sm text-black/60 leading-relaxed mb-0">
                    “{t.quote}”
                  </p>
                  <p className="mt-3 text-xs text-black/55">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="border-t border-black/10 bg-[#f2e0cc]/35 py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-serif text-[22px] tracking-tight">
                Ready to reserve your date?
              </div>
              <div className="mt-1 text-sm text-black/60 leading-relaxed">
                Flower wall rentals in Clermont, FL with delivery and setup
                included.
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
