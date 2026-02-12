import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";
import FaqSchema from "../components/FaqSchema.jsx";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend 4–6 weeks, especially for weekends. If your date is sooner, message us—last-minute availability happens.",
  },
  {
    q: "What’s included in the $350 event rate?",
    a: "Delivery, professional setup, and breakdown of our White Garden 8×8 flower wall in Clermont, FL and nearby areas. Add-ons (like signage or balloons) are optional and confirmed before booking.",
  },
  {
    q: "When is the white wall available?",
    a: "Our signature white 8×8 wall arrives late February. We’re currently booking March dates and beyond.",
  },
  {
    q: "Do you deliver to my venue?",
    a: "Yes—Clermont, FL and surrounding areas. Travel fees may apply outside our standard zone. Send your venue/city for an exact quote.",
  },
  {
    q: "Can I request a different style wall (blush/red/blue/green)?",
    a: "Yes. If your event is 6–8+ weeks out, we can often source additional wall styles. Pre-order styles require advance notice and a deposit to secure inventory.",
  },
  {
    q: "Can the wall be used outdoors?",
    a: "Sometimes. Outdoor setups require safe conditions (low wind, shade when possible, flat surface). We’ll confirm weather + placement to keep it secure and photo-ready.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 60–120 minutes depending on venue access, distance from parking/load-in, and any add-ons. We’ll coordinate timing with your venue when needed.",
  },
  {
    q: "How much space do you need?",
    a: "Plan for at least an 8ft wide area plus a little room on the sides for setup. If you share your venue or a photo of the space, we can confirm the best placement.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes. A deposit reserves your date and is applied to your total. For pre-order/custom styles, deposits may be higher and are typically non-refundable because inventory is purchased specifically for your event.",
  },
  {
    q: "Do you have a delivery zone or travel fee?",
    a: "Our standard delivery zone covers Clermont and nearby areas. If you’re outside the standard zone, we’ll quote a travel fee based on distance and venue access.",
  },
  {
    q: "What is your weather policy for outdoor events?",
    a: "If weather conditions are unsafe (high wind, heavy rain, lightning), we may need to move the setup indoors or reschedule based on availability. We’ll communicate early and work with you on the best option.",
  },
  {
    q: "What if something gets damaged during the event?",
    a: "Normal wear is expected. Significant damage (broken panels/stands, missing items, heavy staining) may result in a repair or replacement fee. We’ll always communicate clearly and handle it case-by-case.",
  },
  {
    q: "Are neon signs included in the base price?",
    a: "Neon signs are optional add-ons and are not included in the $350 event rate unless stated in your quote.",
  },
  {
    q: "How do I book?",
    a: "Send your event date, venue/city, and your vibe (or inspo). We’ll confirm availability, share your quote, and lock it in once the deposit is paid.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  const PRIMARY =
    "inline-flex items-center justify-center rounded-full bg-[#caa374] px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]";
  const SECONDARY =
    "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65";

  const quickLinks = useMemo(
    () => [
      { label: "Request a Quote", to: "/contact", primary: true },
      { label: "See Pricing", to: "/pricing" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Flower Wall Rental FAQ | Clermont, FL | Bloom"
        description="Answers to common flower wall rental questions in Clermont, FL, including booking timing, pricing, setup, outdoor use, service areas, deposits, and add-ons."
      />
      <FaqSchema faqs={faqs} />

      <section className="py-14">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              FAQ
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Quick answers before you book.
            </p>

            <div className="mt-5 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-sm text-black/65">
              <span className="font-semibold text-black/75">
                Now booking March dates and beyond.
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {quickLinks.map((x) => (
                <Link
                  key={x.label}
                  to={x.to}
                  className={x.primary ? PRIMARY : SECONDARY}
                >
                  {x.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md">
              <div className="border-b border-black/10 bg-white/45 px-6 py-5">
                <div className="text-sm font-semibold text-black/70">
                  Common questions
                </div>
                <div className="mt-1 text-sm text-black/55">
                  Tap a question to expand.
                </div>
              </div>

              <div className="divide-y divide-black/10">
                {faqs.map((x, i) => {
                  const isOpen = open === i;
                  return (
                    <div key={x.q} className="px-6 py-1">
                      <button
                        className="flex w-full items-center justify-between gap-4 rounded-2xl py-4 text-left transition hover:bg-black/5 px-3"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        type="button"
                      >
                        <span className="text-sm font-medium text-black/80">
                          {x.q}
                        </span>
                        <span
                          className={[
                            "inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition",
                            isOpen
                              ? "border-black/15 bg-black text-white"
                              : "border-black/10 bg-white/60 text-black/70",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          {isOpen ? "–" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-3 pb-4">
                          <div className="text-sm leading-relaxed text-black/60">
                            {x.a}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-black/10 bg-white/45 p-6 shadow-sm">
                <div className="text-sm font-semibold text-black/70">
                  What to send for the fastest quote
                </div>
                <ul className="mt-3 space-y-2 text-sm text-black/60 leading-relaxed">
                  <li>• Event date + start time</li>
                  <li>• Venue name + city</li>
                  <li>• Indoor or outdoor</li>
                  <li>• Your vibe (white / neutral / custom)</li>
                  <li>• Any add-ons (signage, neon, balloons)</li>
                </ul>

                <div className="mt-5 rounded-2xl border border-black/10 bg-white/55 p-4">
                  <div className="text-sm font-semibold text-black/70">
                    Booking ahead?
                  </div>
                  <p className="mt-1 text-sm text-black/60 leading-relaxed">
                    If your event is{" "}
                    <span className="font-medium text-black/70">
                      6–8+ weeks
                    </span>{" "}
                    away, we may be able to source additional wall styles by
                    request.
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-black/10 bg-white/55 p-4 text-sm text-black/60">
                  <div className="text-sm font-semibold text-black/70">
                    How booking works
                  </div>
                  <p className="mt-1 leading-relaxed">
                    We confirm availability → send your quote → your date is
                    reserved once the deposit is paid.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#f2e0cc]/35 shadow-sm">
                <div className="p-6">
                  <div className="font-serif text-[22px] tracking-tight">
                    Still not sure?
                  </div>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed">
                    Send your theme and venue photo (if you have one). I’ll help
                    you pick the best placement and add-ons for your space.
                  </p>

                  <div className="mt-5">
                    <Link to="/contact" className={PRIMARY}>
                      Message Me
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/45 p-6 text-sm text-black/60 shadow-sm">
                <div className="text-sm font-semibold text-black/70">
                  New inventory, new photos
                </div>
                <p className="mt-2 leading-relaxed">
                  Our wall arrives late February. We’ll be adding portfolio
                  photos as we complete our first March events.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
