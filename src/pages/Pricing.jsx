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
    price: "Quoted",
  },
  {
    title: "Custom wall style (pre-order)",
    note: "If your event is 6–8+ weeks out, we can often source another style.",
    pill: "PRE-ORDER",
    price: "Quoted",
  },
  {
    title: "Have an idea?",
    note: "Tell me what you’re imagining — I’ll help you make it happen.",
    pill: "CUSTOM",
    price: "Quoted",
  },
];

const bundles = [
  {
    title: "Signature Moment",
    price: "$475–$525",
    note: "Clean + elevated. Perfect for intimate events.",
    items: ["$400 event rate", "Custom signage (small/medium)"],
  },
  {
    title: "Celebration Upgrade",
    price: "$550–$650",
    note: "Most requested look for showers + birthdays.",
    items: [
      "$400 event rate",
      "Balloon garland (partial)",
      "Custom signage (small)",
    ],
  },
  {
    title: "Full Photo Moment",
    price: "$625–$775",
    note: "A complete backdrop with styling for guest photos.",
    items: [
      "$400 event rate",
      "Balloon garland (full)",
      "Prop table + styling",
    ],
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
              Simple, transparent pricing for flower wall rentals in{" "}
              <span className="font-medium text-black/70">Clermont, FL</span>{" "}
              and surrounding areas — delivery, setup, and breakdown included.
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
                    wall
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
                  pre-order walls
                </span>
                , book{" "}
                <span className="font-medium text-black/60">6–8+ weeks</span>{" "}
                ahead so we can source the style you want.
              </div>
            </div>

            {/* Side info card */}
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
                  Send your event date, venue/city, and any inspo (Pinterest is
                  perfect). I’ll confirm availability and recommend a setup that
                  photographs beautifully.
                </p>
              </div>

              <div className="mt-5 text-xs text-black/50">
                Add-ons are optional. We’ll always confirm pricing before you
                book.
              </div>
            </div>
          </div>

          {/* Bundles */}
          <div className="mt-14">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight">
                Popular bundles
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Want a quick, done-for-you look? These are common combinations
                clients choose.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {bundles.map((b) => (
                <div
                  key={b.title}
                  className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold">{b.title}</div>
                      <div className="mt-1 text-sm text-black/60">{b.note}</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="font-serif text-2xl leading-none">
                        {b.price}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-black/45">
                        estimated
                      </div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-black/60">
                    {b.items.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-4 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65"
                    >
                      Ask for this bundle
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="mt-14">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight">
                Optional add-ons
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Enhance your flower wall with custom details. Add-ons are
                optional and confirmed based on your event timeline and setup
                needs.
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
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                        {x.pill}
                      </span>
                      <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                        {x.price}
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

            {/* Small fine print */}
            <div className="mt-8 rounded-2xl border border-black/10 bg-white/45 p-5 text-sm text-black/60">
              <span className="font-medium text-black/70">Notes:</span> Travel
              fees (if any) depend on distance, venue access, and timing.
              Pre-order styles require advance notice and a deposit to secure
              inventory.
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
                    what’s realistic for your timeline).
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
          </div>

          {/* Tiny CTA (no button vibe) */}
          <div className="mt-8 text-center text-sm text-black/60">
            <span className="font-medium text-black/70">Book your date:</span>{" "}
            send your event date + venue and we’ll confirm availability.
          </div>
        </div>
      </section>
    </div>
  );
}
