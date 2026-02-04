import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

const areas = [
  { name: "Clermont", note: "Local delivery + setup available." },
  { name: "Minneola", note: "Quick delivery from Clermont." },
  { name: "Groveland", note: "Serving most venues in the area." },
  { name: "Montverde", note: "Great for wineries + intimate venues." },
  { name: "Winter Garden", note: "Popular for weddings + showers." },
  { name: "Ocoee", note: "Ask about travel fee based on venue." },
  { name: "Windermere", note: "Serving select venues + neighborhoods." },
  { name: "Davenport", note: "Travel fees may apply." },
  { name: "Kissimmee", note: "Travel fees may apply." },
  {
    name: "Orlando (select areas)",
    note: "Downtown + nearby venues—ask to confirm.",
  },
];

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Flower Wall Rentals in Clermont, FL | Service Areas | Bloom"
        description="Bloom Flower Wall Rentals serves Clermont, FL and surrounding areas including Minneola, Groveland, Montverde, Winter Garden, and select Orlando-area venues. Ask about delivery."
      />

      <section className="py-14">
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              <h1 className="h2">
                Flower Wall Rentals in Clermont, FL & Nearby Areas
              </h1>
            </h1>
            <p className="muted">
              Bloom Flower Wall Rentals provides
              <strong>flower wall rentals in Clermont, FL</strong> and
              surrounding areas, including Minneola, Groveland, Winter Garden,
              and select Orlando venues, with delivery, professional setup, and
              breakdown.
            </p>
            <p className="muted" style={{ marginTop: 10 }}>
              Based in <strong>Clermont, FL</strong> — we regularly provide
              flower wall rentals for venues across <strong>Lake County</strong>{" "}
              and the <strong>west Orlando</strong> area.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
              >
                Request a Quote
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65"
              >
                See Pricing
              </Link>
            </div>
          </div>

          {/* Info row */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm">
              <div className="text-sm font-semibold text-black/70">
                Standard delivery zone
              </div>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Most Clermont + nearby areas are covered with simple scheduling.
                If you’re outside the standard zone, we’ll confirm travel fees
                before you book.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm">
              <div className="text-sm font-semibold text-black/70">
                Venue-friendly setup
              </div>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                We coordinate load-in/load-out with your venue and aim for a
                smooth, stress-free setup.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm">
              <div className="text-sm font-semibold text-black/70">
                Not sure you’re in range?
              </div>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Send your venue name + event date and we’ll confirm quickly.
              </p>
            </div>
          </div>

          {/* Area cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div
                key={a.name}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="relative h-24 bg-gradient-to-br from-white via-[#f6f3ee] to-[#efe7dd]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                      Area
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-base font-semibold">{a.name}</div>
                  <p className="mt-1 text-sm text-black/60 leading-relaxed">
                    {a.note} Ask us about availability and travel fees for your
                    venue.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-4 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65"
                    >
                      Ask about this area
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-[#f2e0cc]/35">
            <div className="p-7 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-serif text-[22px] tracking-tight">
                    Not sure if you’re in range?
                  </div>
                  <div className="mt-1 text-sm text-black/60 leading-relaxed">
                    Send your venue address and date—we’ll confirm quickly.
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

          {/* small note */}
          <div className="mt-8 text-xs text-black/50">
            Note: Travel fees (if any) depend on distance, venue access, and
            setup timing.
          </div>
        </div>
      </section>
    </div>
  );
}
