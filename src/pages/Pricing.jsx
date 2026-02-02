import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

const extras = [
  {
    title: "Neon sign",
    note: "Custom name / phrase. Quote depends on size + design.",
    pill: "ADD-ON",
  },
  {
    title: "Wood welcome sign",
    note: "A warm, timeless look. We can match your theme.",
    pill: "ADD-ON",
  },
  {
    title: "Custom wall color / vibe",
    note: "If your event is 6–8+ weeks out, we can source a different style.",
    pill: "PRE-ORDER",
  },
  {
    title: "Balloon garland (color matched)",
    note: "Great for birthdays + showers. Quote depends on size.",
    pill: "ADD-ON",
  },
  {
    title: "Acrylic sign",
    note: "Clean modern look. Names, dates, or welcome message.",
    pill: "ADD-ON",
  },
  {
    title: "Have an idea?",
    note: "Tell me what you’re imagining — I’ll help you make it happen.",
    pill: "CUSTOM",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Flower Wall Rental Pricing in Clermont, FL | Bloom"
        description="Simple, transparent flower wall rental pricing in Clermont, FL. $400 event rate with delivery, professional setup, and breakdown included."
      />

      <section className="py-14">
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              Pricing
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Simple, transparent pricing. Serving Clermont, FL and surrounding
              areas with delivery, setup, and breakdown included.
            </p>
          </div>

          {/* Main price card */}
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
                  </div>

                  <div className="text-right">
                    <div className="font-serif text-[44px] leading-none">
                      $400
                    </div>
                    <div className="mt-1 text-xs text-black/50">
                      per event (standard setup)
                    </div>
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
                    • Includes the{" "}
                    <span className="font-medium text-black/70">
                      White Garden
                    </span>{" "}
                    wall (available now)
                  </li>
                  <li>
                    • Perfect for weddings, showers, birthdays, and brand events
                  </li>
                  <li>• Venue coordination for load-in/load-out if needed</li>
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>

              <div className="border-t border-black/10 bg-white/50 px-6 py-4 text-xs text-black/50 sm:px-8">
                Tip: For{" "}
                <span className="font-medium text-black/60">
                  custom wall styles
                </span>
                , book{" "}
                <span className="font-medium text-black/60">6–8+ weeks</span>{" "}
                ahead so I can source the look you want.
              </div>
            </div>

            {/* Side info card */}
            <div className="rounded-3xl border border-black/10 bg-white/45 p-6 shadow-sm">
              <div className="text-sm font-semibold text-black/70">
                What affects the final quote?
              </div>
              <ul className="mt-3 space-y-2 text-sm text-black/60 leading-relaxed">
                <li>• Distance / travel outside the standard area</li>
                <li>
                  • Venue rules (stairs, tight load-in, required time windows)
                </li>
                <li>• Add-ons (signs, balloons, custom sourcing)</li>
                <li>• Multi-day rentals or extended hours</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-black/10 bg-white/55 p-4">
                <div className="text-sm font-semibold text-black/70">
                  Have a theme in mind?
                </div>
                <p className="mt-1 text-sm text-black/60 leading-relaxed">
                  Send your Pinterest inspo + event date and I’ll recommend what
                  looks best (and what’s realistic for your timeline).
                </p>
              </div>
            </div>
          </div>

          {/* Extras */}
          <div className="mt-14">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight">
                Popular add-ons
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Make it feel custom without making it complicated.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {extras.map((x) => (
                <div
                  key={x.title}
                  className="group overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div className="relative h-28 bg-gradient-to-br from-white via-[#f6f3ee] to-[#efe7dd]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                        {x.pill}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-base font-semibold">{x.title}</div>
                    <p className="mt-1 text-sm text-black/60 leading-relaxed">
                      {x.note}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-4 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65"
                      >
                        Ask about this
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-[#f2e0cc]/35">
            <div className="p-7 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-serif text-[22px] tracking-tight">
                    Want help choosing what looks best?
                  </div>
                  <div className="mt-1 text-sm text-black/60 leading-relaxed">
                    Send your theme + venue and I’ll recommend options (and
                    what’s possible for your timeline).
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
