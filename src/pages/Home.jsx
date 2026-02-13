import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";
import LocalBusinessSchema from "../components/LocalBusinessSchema.jsx";

const wallImg = "/white-wall.png";

export default function Home() {
  const testimonials = [];

  const perfectFor = [
    {
      title: "Weddings",
      text: "Ceremony, reception, or sweetheart table moments.",
    },
    { title: "Showers", text: "Bridal or baby showers with a photo moment." },
    { title: "Birthdays", text: "Milestones, dinners, and parties." },
    { title: "Brand events", text: "Launches, pop-ups, and content moments." },
  ];

  const PRIMARY =
    "inline-flex items-center justify-center rounded-full bg-[#caa374] px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]";
  const SECONDARY =
    "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/55 px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/75 active:bg-white/60";

  // Premium card style kept for other sections (Perfect for, testimonials, etc.)
  const CARD =
    "relative overflow-hidden rounded-3xl border border-black/10 bg-white/45 p-6 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)]";
  const CARD_ACCENT =
    "pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#caa374]/70 via-[#caa374]/30 to-transparent";
  const CARD_TITLE = "text-sm font-semibold text-black/75";
  const CARD_TEXT = "mt-2 text-sm text-black/60 leading-relaxed mb-0";

  const whatsIncluded = [
    {
      title: "8x8 Flower Wall",
      note: "Elegant, photo-friendly white florals. Arrives late February.",
      pill: "INCLUDED",
      right: "White Garden • 8×8",
      ctaLabel: "Check availability",
      ctaTo: "/contact",
    },
    {
      title: "Delivery + setup",
      note: "Professional installation with venue-friendly timing.",
      pill: "INCLUDED",
      right: "Coordination included",
      ctaLabel: "Check availability",
      ctaTo: "/contact",
    },
    {
      title: "Breakdown included",
      note: "We return after your event for smooth load-out.",
      pill: "INCLUDED",
      right: "Post-event pickup",
      ctaLabel: "Check availability",
      ctaTo: "/contact",
    },
    {
      title: "Optional add-ons",
      note: "Neon signs, custom signage, balloons, and more.",
      pill: "OPTIONAL",
      right: "Quoted by request",
      ctaLabel: "View add-ons",
      ctaTo: "/pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Clermont Flower Wall Rentals | Bloom Flower Wall Rentals"
        description="Luxury flower wall rentals in Clermont, FL for weddings, showers, and events. Delivery, professional setup, and breakdown included."
      />
      <LocalBusinessSchema />

      {/* Effects (same as pricing add-ons) */}
      <style>{`
        @keyframes sparkle {
          0% { opacity: 0; transform: translateY(6px) scale(0.96); }
          25% { opacity: 0.9; }
          55% { opacity: 0.55; transform: translateY(-2px) scale(1); }
          100% { opacity: 0; transform: translateY(-10px) scale(1.02); }
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-28 h-[420px] w-[420px] rounded-full bg-[#e7d3b5] blur-3xl opacity-60" />
          <div className="absolute -right-28 top-10 h-[520px] w-[520px] rounded-full bg-[#f0e8dd] blur-3xl opacity-70" />
          <div className="absolute -bottom-44 left-[20%] h-[520px] w-[520px] rounded-full bg-[#ead9c1] blur-3xl opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-xs font-medium text-black/70 shadow-sm backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#b98955]" />
                Clermont, FL • Flower Wall Rentals
              </div>

              <h1 className="mt-6 font-serif text-[44px] leading-[1.02] tracking-tight sm:text-[56px] lg:text-[64px]">
                Clermont{" "}
                <span className="text-[#b98955]">flower wall rentals</span> for
                weddings & events.
              </h1>

              <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-black/65">
                Bloom Flower Wall Rentals provides premium flower wall rentals
                in Clermont, FL for weddings, showers, birthdays, and brand
                events. We handle delivery, professional setup, and breakdown in
                Clermont and surrounding areas.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link className={PRIMARY} to="/contact">
                  Request a Quote
                </Link>
                <Link className={SECONDARY} to="/pricing">
                  See pricing
                </Link>
              </div>

              <div className="mt-5 max-w-xl rounded-2xl border border-black/10 bg-white/45 px-4 py-3 text-sm text-black/60 shadow-[0_10px_25px_-18px_rgba(0,0,0,0.18)]">
                <span className="font-semibold text-black/70">
                  Now booking March dates
                </span>
                <span className="text-black/35"> — </span>
                our signature white 8×8 wall arrives late February.
              </div>

              <div className="mt-6 max-w-xl">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-black/55">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#caa374]/70" />
                    Delivery included
                  </span>
                  <span className="hidden sm:inline text-black/25">•</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#caa374]/70" />
                    Setup included
                  </span>
                  <span className="hidden sm:inline text-black/25">•</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#caa374]/70" />
                    Breakdown included
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:pl-6">
              <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_-40px_rgba(0,0,0,0.45)]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/40 blur-2xl" />
                  <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#e7d3b5]/35 blur-3xl" />
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f6f3ee]">
                  <img
                    src={wallImg}
                    alt="White 8x8 flower wall backdrop rental in Clermont, FL"
                    className="h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/70 backdrop-blur">
                    White Garden • 8×8
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-medium">
                      Photo-ready, soft white florals
                    </div>
                    <div className="mt-1 text-xs text-white/85">
                      Neon signs shown in photos are optional add-ons.
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -left-1/2 top-0 h-full w-[180%] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>

                <div className="relative flex items-center justify-between gap-4 border-t border-black/10 bg-white/60 px-5 py-4 backdrop-blur">
                  <p className="text-sm text-black/65">
                    Serving{" "}
                    <span className="font-medium text-black">Clermont, FL</span>{" "}
                    + surrounding areas.
                  </p>

                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-white hover:shadow-md active:scale-[0.99]"
                  >
                    See pricing{" "}
                    <span className="inline-block translate-y-[0.5px] transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className={CARD}>
              <div className={CARD_ACCENT} />
              <div className={CARD_TITLE}>Founding Events Availability</div>
              <p className={CARD_TEXT}>
                Bloom Flower Wall Rentals is now booking a limited number of
                early events in Clermont, FL. Introductory pricing is available
                while we build our local portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (HORIZONTAL COLUMNS + VERTICAL GOLD DIVIDERS) */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight">How it works</h2>
            <p className="mt-2 text-sm text-black/60 leading-relaxed">
              Simple, stress-free flower wall rentals from start to finish.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-white/40 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.30)]">
            <div className="grid gap-0 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Share your details",
                  text: "Send your event date, venue/city, and your vibe (or inspo).",
                },
                {
                  n: "02",
                  title: "We confirm everything",
                  text: "We confirm availability, timing, and venue notes—then send your quote.",
                },
                {
                  n: "03",
                  title: "We deliver & install",
                  text: "We handle delivery, professional setup, and return for breakdown.",
                },
              ].map((x, idx) => (
                <div
                  key={x.n}
                  className={[
                    "relative px-6 py-8 sm:px-8",
                    idx !== 0 ? "md:border-l md:border-[#caa374]/40" : "",
                    idx !== 0 ? "border-t border-black/10 md:border-t-0" : "",
                  ].join(" ")}
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-black/35">
                    Step {x.n}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-black/80">
                    {x.title}
                  </div>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                    {x.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className={PRIMARY}>
              Request a Quote
            </Link>
            <Link to="/pricing" className={SECONDARY}>
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED (PRICING ADD-ONS STYLE + GOLD LINE HOVER) */}
      <section className="relative overflow-hidden py-14">
        {/* Background Glow (matches hero) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-28 h-[420px] w-[420px] rounded-full bg-[#e7d3b5] blur-3xl opacity-55" />
          <div className="absolute -right-28 top-10 h-[520px] w-[520px] rounded-full bg-[#f0e8dd] blur-3xl opacity-65" />
          <div className="absolute -bottom-44 left-[20%] h-[520px] w-[520px] rounded-full bg-[#ead9c1] blur-3xl opacity-55" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h2 className="font-serif text-3xl tracking-tight">
                What’s included
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed max-w-prose">
                Transparent pricing with everything you need for a polished,
                photo-ready setup.
              </p>

              <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
                {whatsIncluded.map((x) => {
                  const isOptional = x.pill === "OPTIONAL";
                  return (
                    <div key={x.title} className="group relative py-8">
                      {/* warm hover wash */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-white/40 via-[#f6f3ee]/45 to-[#f2e0cc]/35" />

                      {/* gold left-line */}
                      <div className="pointer-events-none absolute left-0 top-8 h-8 w-px bg-transparent transition duration-300 group-hover:bg-[#caa374]/70" />

                      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        {/* Left */}
                        <div className="pl-4 sm:pl-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-lg font-medium tracking-tight transition-all duration-300 group-hover:tracking-[0.02em]">
                              {x.title}
                            </h3>

                            <span
                              className={[
                                "text-[11px] uppercase tracking-[0.18em]",
                                isOptional ? "text-[#caa374]" : "text-black/40",
                              ].join(" ")}
                            >
                              {x.pill}
                            </span>
                          </div>

                          <p className="mt-2 max-w-xl text-sm text-black/60 leading-relaxed">
                            {x.note}
                          </p>
                        </div>

                        {/* Right */}
                        <div className="sm:text-right">
                          <div
                            className={[
                              "text-sm font-medium transition duration-300",
                              isOptional ? "text-[#caa374]" : "text-black/70",
                            ].join(" ")}
                          >
                            {x.right}
                          </div>

                          <Link
                            to={x.ctaTo}
                            className="mt-3 inline-flex items-center gap-2 text-sm text-black/55 underline-offset-4 transition duration-300 hover:underline group-hover:text-black/80"
                          >
                            {x.ctaLabel}
                            <span
                              className={[
                                "text-black/30 transition duration-300 group-hover:translate-x-1",
                                isOptional
                                  ? "group-hover:text-[#caa374]"
                                  : "group-hover:text-black/60",
                              ].join(" ")}
                            >
                              →
                            </span>
                          </Link>
                        </div>
                      </div>

                      {/* tiny sparkle */}
                      <span
                        className="pointer-events-none absolute right-6 top-6 h-1 w-1 rounded-full bg-[#caa374] opacity-0 group-hover:opacity-100"
                        style={{ animation: "sparkle 900ms ease-out both" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* $350 RATE */}
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/50 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)]">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#caa374]/80 via-[#caa374]/30 to-transparent" />

              <div className="p-7">
                <div className="flex items-start justify-between gap-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60">
                    Event rate
                  </div>

                  <div className="text-xs text-black/50">
                    Clermont, FL + nearby areas
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-serif text-[52px] leading-none">
                    $350
                  </div>
                  <div className="mt-1 text-xs text-black/50">per event</div>

                  <div className="mt-5 text-sm text-black/60">
                    <span className="text-black/45">Includes:</span>{" "}
                    <span className="text-black/70">delivery</span>,{" "}
                    <span className="text-black/70">setup</span>,{" "}
                    <span className="text-black/70">breakdown</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/pricing" className={SECONDARY}>
                    View Pricing
                  </Link>
                  <Link
                    to="/contact"
                    className={PRIMARY.replace("px-5 py-3", "px-5 py-2.5")}
                  >
                    Check availability
                  </Link>
                </div>
              </div>

              <div className="border-t border-black/10 bg-white/45 p-5 text-xs text-black/55">
                Booking ahead? If your event is{" "}
                <span className="font-medium text-black/65">6–8+ weeks</span>{" "}
                out, we can often source additional wall styles by request.
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

          <div className="mt-6 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {perfectFor.map((x) => (
              <div key={x.title} className={CARD}>
                <div className={CARD_ACCENT} />
                <div className={CARD_TITLE}>{x.title}</div>
                <p className={CARD_TEXT}>{x.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
              {perfectFor.map((x) => (
                <div key={x.title} className={`min-w-[78%] snap-start ${CARD}`}>
                  <div className={CARD_ACCENT} />
                  <div className={CARD_TITLE}>{x.title}</div>
                  <p className={CARD_TEXT}>{x.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-black/45">Swipe to see more →</p>
          </div>
        </div>
      </section>

      {/* Testimonials remain unchanged */}
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
                <div key={i} className={CARD}>
                  <div className={CARD_ACCENT} />
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
              className={PRIMARY.replace("px-5 py-3", "px-6 py-3")}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
