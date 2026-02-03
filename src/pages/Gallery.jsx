import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

// ✅ Add images here (create these files in /src/assets/walls/)
// If you only have one image right now, that's totally fine.
import whiteGardenImg from "../assets/walls/white-garden.jpg";
// Example later:
// import blushRomanceImg from "../assets/walls/blush-romance.jpg";

const data = [
  {
    name: "White Garden",
    category: "White",
    note: "Bright & airy (available now)",
    status: "available",
    leadWeeks: 0,
    image: whiteGardenImg,
    alt: "White flower wall backdrop rental in Clermont, Florida",
  },
  {
    name: "Ivory Classic",
    category: "Ivory",
    note: "Timeless (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: null,
    alt: "",
  },
  {
    name: "Blush Romance",
    category: "Blush",
    note: "Wedding favorite (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: null,
    alt: "",
  },
  {
    name: "Neutral Modern",
    category: "Neutral",
    note: "Minimal luxe (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: null,
    alt: "",
  },
  {
    name: "Soft Pink Ombré",
    category: "Blush",
    note: "Photographs beautifully (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: null,
    alt: "",
  },
  {
    name: "Custom Palette",
    category: "Custom",
    note: "Made to match your theme (pre-order)",
    status: "preorder",
    leadWeeks: 8,
    image: null,
    alt: "",
  },
];

const categories = ["All", "Blush", "Ivory", "White", "Neutral", "Custom"];

function categoryStyle(category) {
  // soft “placeholder photo” gradients
  switch (category) {
    case "White":
      return "bg-gradient-to-br from-white via-[#f6f3ee] to-[#efe7dd]";
    case "Ivory":
      return "bg-gradient-to-br from-[#fff7ea] via-[#f2e6d5] to-[#e9dcc8]";
    case "Blush":
      return "bg-gradient-to-br from-[#ffe9ef] via-[#f7d6de] to-[#ead0d5]";
    case "Neutral":
      return "bg-gradient-to-br from-[#f6f0e8] via-[#eadfce] to-[#dfd0bc]";
    case "Custom":
      return "bg-gradient-to-br from-[#f7efe7] via-[#eddcc9] to-[#f3e6d9]";
    default:
      return "bg-gradient-to-br from-white via-[#f6f3ee] to-[#efe7dd]";
  }
}

function pillForCategory(category) {
  return "border-black/10 bg-white/55 text-black/60";
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const items = useMemo(() => {
    if (filter === "All") return data;
    return data.filter((x) => x.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Flower Wall Gallery | Clermont, FL Flower Wall Rentals | Bloom"
        description="Browse airy white, ivory, and blush flower wall styles for weddings, showers, birthdays, and brand events in Clermont, FL and surrounding areas."
      />

      <section className="py-14">
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              Gallery
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Choose a vibe, then request a quote for your date + city/venue.
            </p>

            {/* Inventory notice */}
            <div className="mt-4 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/65">
              <span className="font-semibold text-black/75">
                Inventory arriving soon:
              </span>{" "}
              Our signature white flower wall is arriving in early March. We’re
              now accepting bookings for events{" "}
              <span className="font-semibold text-black/75">
                March 15 and beyond
              </span>
              .
            </div>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-2">
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

          {/* Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((x) => {
              const isAvailable = x.status === "available";

              return (
                <div
                  key={x.name}
                  className="group overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {/* “photo” area (now supports real images) */}
                  <div
                    className={[
                      "relative h-48",
                      x.image ? "bg-black/5" : categoryStyle(x.category),
                    ].join(" ")}
                  >
                    {/* If there is an image, show it */}
                    {x.image ? (
                      <>
                        <img
                          src={x.image}
                          alt={x.alt || `${x.name} flower wall rental`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                      </>
                    ) : (
                      <>
                        {/* Otherwise show the nice placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />

                        {/* Center hint (subtle) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs text-black/60 shadow-sm">
                            Photo coming soon
                          </div>
                        </div>
                      </>
                    )}

                    {/* top pills */}
                    <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.14em] backdrop-blur",
                          pillForCategory(x.category),
                        ].join(" ")}
                      >
                        {x.category}
                      </span>

                      {isAvailable ? (
                        <span className="rounded-full border border-emerald-200/60 bg-emerald-50/70 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-emerald-700 backdrop-blur">
                          Available after March 15th
                        </span>
                      ) : (
                        <span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-black/60 backdrop-blur">
                          Pre-order • {x.leadWeeks}+ weeks
                        </span>
                      )}
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-base font-semibold">{x.name}</div>
                        <div className="mt-1 text-sm text-black/60">
                          {x.note}
                        </div>
                      </div>
                    </div>

                    {/* action row */}
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-4 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65"
                        to="/contact"
                      >
                        Request Quote
                      </Link>

                      <Link
                        className="inline-flex items-center justify-center rounded-full bg-[#caa374] px-4 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]"
                        to="/pricing"
                      >
                        View Pricing
                      </Link>
                    </div>

                    {/* small fine print */}
                    {!isAvailable && (
                      <p className="mt-4 text-xs leading-relaxed text-black/50">
                        Pre-order styles require advance notice and a deposit to
                        secure inventory. We’ll confirm availability once we
                        have your event date + venue.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Helpful bottom note */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/45 p-5 text-sm text-black/60">
            <span className="font-medium text-black/70">Tip:</span> If your
            event is under 6 weeks away, the{" "}
            <span className="font-medium text-black/70">White Garden</span> wall
            is the best guaranteed option. If you’re booking further out, we can
            usually source additional styles.
          </div>
        </div>
      </section>
    </div>
  );
}
