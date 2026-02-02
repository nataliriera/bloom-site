import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";
import FaqSchema from "../components/FaqSchema.jsx";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend 4–6 weeks, especially for weekends. If your date is sooner, message us—last-minute availability happens!",
  },
  {
    q: "What’s included in the $400 event rate?",
    a: "Delivery, professional setup, and breakdown of our White Garden flower wall in Clermont, FL and nearby areas. Add-ons (like signage or balloons) are optional and quoted based on your setup details.",
  },
  {
    q: "Do you deliver to my venue?",
    a: "Yes—Clermont, FL and surrounding areas. Travel fees may apply outside our standard zone. Send your venue/city for an exact quote.",
  },
  {
    q: "Can I request a different style wall (blush/red/blue/green)?",
    a: "Yes! If your event is 6–8+ weeks out, we can usually source additional wall styles. Pre-order styles require advance notice and a deposit to secure inventory.",
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
    a: "Yes. A deposit reserves your date. For pre-order/custom styles, deposits may be higher and are typically non-refundable because inventory is purchased specifically for your event.",
  },
  {
    q: "What if something gets damaged during the event?",
    a: "Normal wear is expected. Significant damage is handled case-by-case. Our goal is always a smooth, stress-free experience—we’ll communicate clearly if anything comes up.",
  },
  {
    q: "How do I book?",
    a: "Send your event date, venue/city, and your vibe (or inspo). We’ll confirm availability, share your quote, and lock it in once the deposit is paid.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  const quickLinks = useMemo(
    () => [
      { label: "Request a Quote", to: "/contact", primary: true },
      { label: "View Gallery", to: "/gallery" },
      { label: "See Pricing", to: "/pricing" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Flower Wall Rental FAQ | Clermont, FL | Bloom"
        description="Answers to common flower wall rental questions in Clermont, FL, including booking timing, setup, outdoor use, service areas, and customization."
      />
      <FaqSchema faqs={faqs} />

      <section className="py-14">
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              FAQ
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Quick answers before you book.
            </p>

            {/* Quick actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              {quickLinks.map((x) => (
                <Link
                  key={x.label}
                  to={x.to}
                  className={
                    x.primary
                      ? "inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
                      : "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65"
                  }
                >
                  {x.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Content layout */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            {/* FAQ accordion */}
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

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-3xl border border-black/10 bg-white/45 p-6 shadow-sm">
                <div className="text-sm font-semibold text-black/70">
                  What to send for the fastest quote
                </div>
                <ul className="mt-3 space-y-2 text-sm text-black/60 leading-relaxed">
                  <li>• Event date + start time</li>
                  <li>• Venue name + city</li>
                  <li>• Indoor or outdoor</li>
                  <li>• Your vibe (white / blush / neutral / custom)</li>
                  <li>• Any add-ons (neon sign, wood sign, balloons)</li>
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
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:opacity-85"
                    >
                      Message Me
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
