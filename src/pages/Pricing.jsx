import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

const extras = [
  {
    title: "Custom signage",
    note: "Names, phrases, or a welcome message. Installed on the wall.",
    pill: "MOST POPULAR",
    price: "$75–$125",
  },
  {
    title: "Balloon garland",
    note: "A big visual upgrade for birthdays + showers. Color-matched options.",
    pill: "ADD-ON",
    price: "$150–$250",
  },
  {
    title: "Prop table + styling",
    note: "Simple accent table for desserts, gifts, or a styled photo moment.",
    pill: "ADD-ON",
    price: "$75–$125",
  },
  {
    title: "Extended rental time",
    note: "Need a later breakdown time? Add extra hours as needed.",
    pill: "ADD-ON",
    price: "$75 / hour",
  },
  {
    title: "Neon sign",
    note: "Custom name / phrase. Great for receptions and brand moments.",
    pill: "ADD-ON",
    price: "Custom quote",
  },
  {
    title: "Pre-order wall style",
    note: "If your event is 6–8+ weeks out, we can often source another style (pricing varies by wall).",
    pill: "PRE-ORDER",
    price: "Custom quote",
  },
  {
    title: "Have an idea?",
    note: "Tell me what you’re imagining — I’ll help you make it happen.",
    pill: "CUSTOM",
    price: "Custom quote",
  },
];

export default function Pricing() {
  const PRIMARY =
    "inline-flex items-center justify-center rounded-full bg-[#caa374] px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]";
  const SECONDARY =
    "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65";

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Flower Wall Rental Pricing in Clermont, FL | Bloom"
        description="Transparent flower wall rental pricing in Clermont, FL. $350 introductory event rate for our signature white 8×8 wall with delivery, professional setup, and breakdown included."
      />

      {/* Animations */}
      <style>{`
        @keyframes sparkle {
          0% { opacity: 0; transform: translateY(6px) scale(0.96); }
          25% { opacity: 0.9; }
          55% { opacity: 0.55; transform: translateY(-2px) scale(1); }
          100% { opacity: 0; transform: translateY(-10px) scale(1.02); }
        }

        @keyframes goldLineIn {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>

      <section className="py-14">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              Pricing
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Simple, transparent pricing for flower wall rentals in{" "}
              <span className="font-medium text-black/70">Clermont, FL</span>{" "}
              and surrounding areas — delivery, setup, and breakdown included.
            </p>

            <div className="mt-5 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-sm text-black/65">
              <span className="font-semibold text-black/75">
                Now booking March dates:
              </span>{" "}
              our signature white 8×8 wall arrives late February.
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md">
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60">
                      Flower wall rental
                    </div>
                    <h2 className="mt-4 font-serif text-3xl tracking-tight">
                      Event Rate
                    </h2>
                    <p className="mt-2 text-sm text-black/60 leading-relaxed">
                      One clean, easy price for your event — no confusing tiers.
                    </p>
                    <p className="mt-2 text-sm text-black/55 leading-relaxed">
                      Introductory event rate for a limited number of early
                      bookings in Clermont, FL.
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="font-serif text-[44px] leading-none">
                      $350
                    </div>
                    <div className="mt-1 text-xs text-black/50">per event</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
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

                <ul className="mt-6 grid gap-2 text-sm text-black/60">
                  <li>
                    •{" "}
                    <span className="font-medium text-black/70">
                      $350 Flower Wall (8x8)
                    </span>{" "}
                    <span className="text-black/50">
                      (arrives late February)
                    </span>
                  </li>
                  <li>
                    • Ideal for weddings, showers, birthdays, and brand events
                  </li>
                  <li>• Venue coordination for smooth load-in and load-out</li>
                  <li className="text-black/55">
                    • Signs, balloons, and neon are{" "}
                    <span className="font-medium text-black/70">
                      optional add-ons
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/60 leading-relaxed">
                  <span className="font-medium text-black/70">
                    Interested in a different style wall?
                  </span>{" "}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/contact" className={PRIMARY}>
                    Request a Quote
                  </Link>
                  <Link to="/gallery" className={SECONDARY}>
                    Browse Styles
                  </Link>
                </div>
              </div>

              <div className="border-t border-black/10 bg-white/50 px-6 py-4 text-xs text-black/50 sm:px-8">
                This introductory rate reflects early availability while we
                build our local event portfolio in Clermont, FL.
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/45 p-6 shadow-sm">
              <div className="text-sm font-semibold text-black/70">
                What affects the final quote?
              </div>
              <ul className="mt-3 space-y-2 text-sm text-black/60 leading-relaxed">
                <li>• Travel outside the standard delivery zone</li>
                <li>
                  • Venue rules (stairs, tight load-in, required time windows)
                </li>
                <li>• Add-ons (signage, balloons, styling)</li>
                <li>• Multi-day rentals or extended hours</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-black/10 bg-white/55 p-4">
                <div className="text-sm font-semibold text-black/70">
                  The fastest way to get a quote
                </div>
                <p className="mt-1 text-sm text-black/60 leading-relaxed">
                  Send your event date, venue/city, and any inspiration. I’ll
                  confirm availability and recommend a setup that photographs
                  beautifully.
                </p>
              </div>
            </div>
          </div>

          {/* ===========================
              OPTIONAL ADD-ONS (EDITED)
          ============================ */}
          <div className="mt-14">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight">
                Optional add-ons
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Enhance your flower wall with custom details. Add-ons are
                optional and confirmed before booking.
              </p>
            </div>

            <div className="mt-10 space-y-5 sm:space-y-0 sm:border-t sm:border-black/10">
              {extras.map((x, i) => (
                <div
                  key={x.title}
                  className={[
                    // Mobile: panel with border + shadow (keeps content from "floating")
                    "group relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 shadow-md",
                    "transition",
                    "hover:shadow-lg",
                    // Desktop: editorial rows (no card look)
                    "sm:rounded-none sm:border-0 sm:bg-transparent sm:shadow-none sm:hover:shadow-none",
                    "sm:border-b sm:border-black/10",
                  ].join(" ")}
                >
                  {/* Desktop-only lighter + shorter divider (editorial) */}
                  {i !== 0 && (
                    <div className="pointer-events-none absolute top-0 left-0 hidden w-full justify-center sm:flex">
                      <div className="h-px w-[92%] bg-black/6" />
                    </div>
                  )}

                  {/* Soft hover wash */}
                  <div className="pointer-events-none absolute inset-0 bg-white/0 transition duration-300 group-hover:bg-white/20" />

                  <div className="relative p-6 sm:p-0 sm:py-9">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_190px] sm:gap-8">
                      {/* LEFT */}
                      <div className="relative pl-6">
                        <div className="relative inline-block">
                          {/* Gold line: title-height only, animates in, stays while hovering */}
                          <span
                            className="pointer-events-none absolute -left-4 top-1 h-[1.4em] w-px origin-top scale-y-0 opacity-0 group-hover:opacity-100"
                            style={{
                              background: "rgba(202,163,116,0.85)",
                              animation: "goldLineIn 250ms ease-out forwards",
                            }}
                          />

                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-[18px] font-semibold tracking-tight transition-all duration-300 group-hover:tracking-[0.02em]">
                              {x.title}
                            </h3>

                            <span
                              className={`text-[11px] uppercase tracking-[0.22em] ${
                                x.pill === "MOST POPULAR"
                                  ? "text-[#caa374]"
                                  : "text-black/40"
                              }`}
                            >
                              {x.pill}
                            </span>
                          </div>
                        </div>

                        <p className="mt-3 max-w-xl text-sm text-black/60 leading-relaxed">
                          {x.note}
                        </p>
                      </div>

                      {/* RIGHT */}
                      <div className="relative sm:text-right">
                        {/* Lighter + shorter vertical divider (editorial) */}
                        <div className="absolute left-0 top-2 hidden h-[70%] w-px bg-black/6 sm:block" />

                        {/* Mobile: price + CTA in one row so it doesn't float */}
                        <div className="flex items-end justify-between gap-4 sm:block">
                          <div className="font-serif text-[19px] text-black/75 transition duration-300 group-hover:text-[#caa374]">
                            {x.price}
                          </div>

                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 text-sm text-black/55 underline-offset-4 transition duration-300 hover:underline group-hover:text-black/80 sm:mt-3 sm:justify-end"
                          >
                            Ask about this
                            <span className="text-black/30 transition duration-300 group-hover:translate-x-1 group-hover:text-[#caa374]">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Tiny sparkle */}
                    <span
                      className="pointer-events-none absolute right-6 top-6 h-1 w-1 rounded-full bg-[#caa374] opacity-0 group-hover:opacity-100 sm:top-10"
                      style={{ animation: "sparkle 900ms ease-out both" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-white/45 p-5 text-sm text-black/60">
            <span className="font-medium text-black/70">Notes:</span> Travel
            fees (if any) depend on distance, venue access, and timing.
            Pre-order walls require advance notice and a deposit to secure
            inventory. Add-ons are confirmed before booking.
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-[#f2e0cc]/35">
            <div className="p-7 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-serif text-[22px] tracking-tight">
                    Ready to reserve your date?
                  </div>
                  <div className="mt-1 text-sm text-black/60 leading-relaxed">
                    Send your event date + venue and I’ll confirm availability
                    and recommend add-ons that photograph beautifully.
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#caa374] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-black/60">
            <span className="font-medium text-black/70">Book your date:</span>{" "}
            send your event date + venue and we’ll confirm availability.
          </div>
        </div>
      </section>
    </div>
  );
}
