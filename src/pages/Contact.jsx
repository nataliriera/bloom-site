import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

export default function Contact() {
  const FORM_ENDPOINT = "https://formspree.io/f/xkozjrka";

  const PRIMARY =
    "inline-flex items-center justify-center rounded-full bg-[#caa374] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]";
  const SECONDARY =
    "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65";

  const initial = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      setupType: "",
      addOns: "",
      message: "",
    }),
    []
  );

  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function updateField(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          rate: "$350 Event Rate (White Garden)",
          availability_note:
            "White 8×8 wall arrives late February — booking March dates and beyond.",
          _subject: "New quote request — Bloom Flower Wall Rentals",
          source: "Website form",
        }),
      });

      if (!res.ok) {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data?.errors?.[0]?.message) msg = data.errors[0].message;
        } catch {}
        throw new Error(msg);
      }

      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Request a Quote | Bloom Flower Wall Rentals Clermont, FL"
        description="Request availability and pricing for your event date. Flower wall rentals with delivery and professional setup included in Clermont, FL and surrounding areas."
      />

      <section className="py-14">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              Request a Quote
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Share your date, city/venue, and style — airy, bright, photo-ready
              setups for Clermont, FL and nearby areas.
            </p>

            <div className="mt-5 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-sm text-black/65">
              <span className="font-semibold text-black/75">
                Now booking March dates and beyond.
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/pricing" className={SECONDARY}>
                See Pricing
              </Link>
              <Link to="/faq" className={SECONDARY}>
                Read FAQ
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md">
              <div className="p-6 sm:p-8">
                <div className="font-serif text-2xl tracking-tight">
                  Bloom Flower Wall Rentals
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  Flower wall rentals in{" "}
                  <span className="font-medium text-black/70">
                    Clermont, FL
                  </span>{" "}
                  and surrounding areas. Delivery, professional setup, and
                  breakdown included.
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <a
                    className="block w-fit text-black/70 hover:text-black hover:underline decoration-black/20 underline-offset-4"
                    href="mailto:info@bloomflowerwallrentals.com"
                  >
                    info@bloomflowerwallrentals.com
                  </a>
                  <a
                    className="block w-fit text-black/70 hover:text-black hover:underline decoration-black/20 underline-offset-4"
                    href="tel:+18633355022"
                  >
                    (863) 335-5022
                  </a>
                  <a
                    className="block w-fit text-black/70 hover:text-black hover:underline decoration-black/20 underline-offset-4"
                    href="https://www.instagram.com/bloomflowerwallrentals/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @bloomflowerwallrentals
                  </a>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Reply time", v: "Within 24 hours" },
                    { k: "Deposit", v: "50% to reserve" },
                    { k: "Event rate", v: "$350" },
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

                <div className="mt-6 rounded-3xl border border-black/10 bg-white/55 p-5">
                  <div className="text-sm font-semibold text-black/70">
                    Deposit policy
                  </div>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                    A{" "}
                    <span className="font-semibold text-black/70">
                      50% deposit
                    </span>{" "}
                    reserves your date and is applied to your total. Remaining
                    balance is due before event setup. For pre-order/custom
                    styles, deposits may be higher and can be non-refundable if
                    inventory is purchased specifically for your event.
                  </p>
                </div>

                <div className="mt-4 rounded-3xl border border-black/10 bg-white/55 p-5">
                  <div className="text-sm font-semibold text-black/70">
                    Add-ons
                  </div>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                    Neon signs and custom signage are optional add-ons and are
                    only included if listed on your quote.
                  </p>
                </div>

                <p className="mt-5 text-xs text-black/55">
                  Prefer text? Send your date + venue to{" "}
                  <a
                    className="text-black/70 hover:text-black hover:underline decoration-black/20 underline-offset-4"
                    href="tel:+18633355022"
                  >
                    (863) 335-5022
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md">
              <div className="border-b border-black/10 bg-white/45 px-6 py-5">
                <div className="text-sm font-semibold text-black/70">
                  Quote request form
                </div>
                <div className="mt-1 text-sm text-black/55">
                  The more details you share, the faster we can confirm
                  availability.
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {status === "success" ? (
                  <div>
                    <div className="font-serif text-2xl tracking-tight">
                      Thank you! 🤍
                    </div>
                    <p className="mt-2 text-sm text-black/60 leading-relaxed">
                      Your request was sent successfully. We typically reply
                      within{" "}
                      <span className="font-medium text-black/70">
                        24 hours
                      </span>
                      .
                    </p>

                    <div className="mt-5 rounded-3xl border border-black/10 bg-white/55 p-5">
                      <div className="text-sm font-semibold text-black/70">
                        Next steps
                      </div>
                      <p className="mt-2 text-sm text-black/60 leading-relaxed mb-0">
                        We’ll confirm availability, recommend the best setup for
                        your space, and send your quote with deposit
                        instructions.
                      </p>
                    </div>

                    <button
                      type="button"
                      className={`${PRIMARY} mt-6`}
                      onClick={() => setStatus("idle")}
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="text-sm text-black/70">
                        Full name <span className="text-black/50">*</span>
                        <input
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                          name="name"
                          required
                          value={form.name}
                          onChange={updateField}
                          autoComplete="name"
                        />
                      </label>

                      <label className="text-sm text-black/70">
                        Email <span className="text-black/50">*</span>
                        <input
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={updateField}
                          autoComplete="email"
                        />
                      </label>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="text-sm text-black/70">
                        Phone <span className="text-black/50">*</span>
                        <input
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={updateField}
                          autoComplete="tel"
                        />
                      </label>

                      <label className="text-sm text-black/70">
                        Event type <span className="text-black/50">*</span>
                        <select
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                          name="eventType"
                          required
                          value={form.eventType}
                          onChange={updateField}
                        >
                          <option value="">Select one…</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Bridal shower">Bridal shower</option>
                          <option value="Baby shower">Baby shower</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Corporate / brand event">
                            Corporate / brand event
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="text-sm text-black/70">
                        Event date <span className="text-black/50">*</span>
                        <input
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                          name="eventDate"
                          type="date"
                          required
                          value={form.eventDate}
                          onChange={updateField}
                        />
                      </label>

                      <label className="text-sm text-black/70">
                        City / Venue <span className="text-black/50">*</span>
                        <input
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                          name="location"
                          required
                          placeholder="Clermont, Winter Garden, Orlando..."
                          value={form.location}
                          onChange={updateField}
                        />
                      </label>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="text-sm text-black/70">
                        Indoor / Outdoor
                        <select
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                          name="setupType"
                          value={form.setupType}
                          onChange={updateField}
                        >
                          <option value="">Select one…</option>
                          <option value="Indoor">Indoor</option>
                          <option value="Outdoor">Outdoor</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </label>

                      <label className="text-sm text-black/70">
                        Add-ons (optional)
                        <input
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                          name="addOns"
                          placeholder="Custom sign, neon, balloon garland..."
                          value={form.addOns}
                          onChange={updateField}
                        />
                      </label>
                    </div>

                    <label className="text-sm text-black/70">
                      Tell us about your event{" "}
                      <span className="text-black/50">*</span>
                      <textarea
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/20"
                        name="message"
                        rows={6}
                        required
                        placeholder="Theme, colors, venue notes, setup window, timeline, add-ons…"
                        value={form.message}
                        onChange={updateField}
                      />
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        className={PRIMARY}
                        type="submit"
                        disabled={status === "sending"}
                        aria-busy={status === "sending"}
                      >
                        {status === "sending" ? "Sending..." : "Submit Request"}
                      </button>

                      {status === "error" ? (
                        <p className="text-xs text-black/55">
                          {errorMsg} If it keeps happening, email{" "}
                          <a
                            className="text-black/70 hover:text-black hover:underline decoration-black/20 underline-offset-4"
                            href="mailto:info@bloomflowerwallrentals.com"
                          >
                            info@bloomflowerwallrentals.com
                          </a>
                          .
                        </p>
                      ) : (
                        <p className="text-xs text-black/55">
                          We typically reply within 24 hours.
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-[#f2e0cc]/35">
            <div className="p-7 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-serif text-[22px] tracking-tight">
                    Booking ahead and want a different wall style?
                  </div>
                  <div className="mt-1 text-sm text-black/60 leading-relaxed">
                    If your event is 6–8+ weeks out, we can often source
                    additional styles by request.
                  </div>
                </div>

                <Link to="/pricing" className={PRIMARY}>
                  See add-ons
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-black/60">
            <span className="font-medium text-black/70">Tip:</span> If you have
            a photo of your venue space, attach it in your reply email after you
            submit — it helps us recommend the best placement.
          </div>
        </div>
      </section>
    </div>
  );
}
