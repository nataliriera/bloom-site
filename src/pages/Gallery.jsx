import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

import whiteGardenImg from "../assets/walls/white-garden.jpg";
import blushOmbreImg from "../assets/walls/blush-ombre.jpg";
import pinkMixImg from "../assets/walls/pink-mix.jpg";
import redRoseImg from "../assets/walls/red-rose.jpg";
import blueRoseImg from "../assets/walls/blue-rose.jpg";
import greeneryWallImg from "../assets/walls/greenery-wall.jpg";
import boxwoodCascadeImg from "../assets/walls/boxwood-cascade.jpg";
import purpleGardenImg from "../assets/walls/purple-garden.jpg";

const data = [
  {
    name: "White Garden",
    category: "White",
    note: "Signature white 8×8 (arrives late February)",
    status: "owned",
    leadWeeks: 0,
    image: whiteGardenImg,
    alt: "White 8x8 flower wall backdrop rental in Clermont, Florida",
    pricingNote: "$350 event rate",
  },
  {
    name: "Blush Ombré",
    category: "Blush",
    note: "Soft blush tones (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: blushOmbreImg,
    alt: "Blush ombré flower wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Pink Garden Mix",
    category: "Pink",
    note: "High-impact mix (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: pinkMixImg,
    alt: "Pink floral flower wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Red Rose",
    category: "Red",
    note: "Bold + dramatic (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: redRoseImg,
    alt: "Red rose flower wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Dusty Blue",
    category: "Blue",
    note: "Perfect for baby showers (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: blueRoseImg,
    alt: "Blue flower wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Greenery Wall",
    category: "Greenery",
    note: "Modern + versatile (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: greeneryWallImg,
    alt: "Greenery wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Boxwood + White Cascade",
    category: "Greenery",
    note: "Classic wedding look (pre-order)",
    status: "preorder",
    leadWeeks: 8,
    image: boxwoodCascadeImg,
    alt: "Boxwood wall with white floral cascade (pre-order) in Clermont, Florida",
  },
  {
    name: "Purple Garden",
    category: "Purple",
    note: "Fun + unique (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: purpleGardenImg,
    alt: "Purple flower wall backdrop (pre-order) in Clermont, Florida",
  },
];

const categories = [
  "All",
  "White",
  "Blush",
  "Pink",
  "Red",
  "Blue",
  "Greenery",
  "Purple",
];

function pillForCategory() {
  return "border-black/10 bg-white/55 text-black/60";
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const PRIMARY =
    "inline-flex items-center justify-center rounded-full bg-[#caa374] px-4 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]";
  const SECONDARY =
    "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-4 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65";

  const owned = useMemo(() => data.filter((x) => x.status === "owned"), []);
  const preorderAll = useMemo(
    () => data.filter((x) => x.status === "preorder"),
    []
  );

  const preorder = useMemo(() => {
    if (filter === "All") return preorderAll;
    return preorderAll.filter((x) => x.category === filter);
  }, [filter, preorderAll]);

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Flower Wall Styles | Clermont, FL Flower Wall Rentals | Bloom"
        description="Browse flower wall styles including our signature white 8×8 and pre-order options for weddings and events in Clermont, FL."
      />

      <section className="py-14">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              Styles
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Choose a vibe, then request a quote for your date + city/venue.
            </p>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/65">
              <div>
                <span className="font-semibold text-black/75">
                  Now booking March dates:
                </span>{" "}
                Our signature white 8×8 wall arrives late February.
              </div>
              <div className="mt-1 text-black/55">
                <span className="font-medium text-black/70">Pre-order</span>{" "}
                styles are quoted and can cost more.
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-black/10 bg-white/45 px-4 py-3 text-xs text-black/55 leading-relaxed">
              Pre-order images are supplier catalog photos for inspiration.
            </div>
          </div>

          {/* Owned inventory */}
          <div className="mt-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight">
                Available soon
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Our owned inventory
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {owned.map((x) => (
                <div
                  key={x.name}
                  className="group overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div className="relative h-52 bg-black/5">
                    <img
                      src={x.image}
                      alt={x.alt || `${x.name} flower wall rental`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />

                    <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.14em] backdrop-blur",
                          pillForCategory(x.category),
                        ].join(" ")}
                      >
                        {x.category}
                      </span>

                      <span className="rounded-full border border-emerald-200/60 bg-emerald-50/70 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-emerald-700 backdrop-blur">
                        Arrives late Feb • Booking March
                      </span>

                      <span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                        {x.pricingNote}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-base font-semibold">{x.name}</div>
                    <div className="mt-1 text-sm text-black/60">{x.note}</div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link to="/contact" className={PRIMARY}>
                        Request Quote
                      </Link>
                      <Link to="/pricing" className={SECONDARY}>
                        View Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pre-order styles */}
          <div className="mt-14">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight">
                Pre-order styles
              </h2>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Sourced by request with{" "}
                <span className="font-medium text-black/70">6–8+ weeks</span>{" "}
                notice.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = filter === c;
                return (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={[
                      "rounded-full border px-4 py-2 text-sm transition shadow-sm",
                      active
                        ? "border-black/15 bg-black text-white"
                        : "border-black/10 bg-white/55 text-black/65 hover:bg-white/75",
                    ].join(" ")}
                    type="button"
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {preorder.map((x) => (
                <div
                  key={x.name}
                  className="group overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div className="relative h-52 bg-black/5">
                    <img
                      src={x.image}
                      alt={x.alt || `${x.name} flower wall (pre-order)`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />

                    <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.14em] backdrop-blur",
                          pillForCategory(x.category),
                        ].join(" ")}
                      >
                        {x.category}
                      </span>

                      <span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                        Pre-order • {x.leadWeeks}+ weeks
                      </span>

                      <span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                        Quoted
                      </span>
                    </div>

                    {/* <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-white/55 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/65 backdrop-blur">
                      Supplier catalog photo
                    </div> */}
                  </div>

                  <div className="p-5">
                    <div className="text-base font-semibold">{x.name}</div>
                    <div className="mt-1 text-sm text-black/60">{x.note}</div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link to="/contact" className={PRIMARY}>
                        Request Quote
                      </Link>
                      <Link to="/pricing" className={SECONDARY}>
                        View Add-ons
                      </Link>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-black/50">
                      Pre-order styles require advance notice and a deposit to
                      secure inventory. We’ll confirm availability once we have
                      your event date + venue.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-black/10 bg-white/45 p-5 text-sm text-black/60">
              <span className="font-medium text-black/70">Tip:</span> If your
              event is under 6 weeks away,{" "}
              <span className="font-medium text-black/70">White Garden</span> is
              the best guaranteed option.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
