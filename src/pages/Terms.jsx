import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

export default function Terms() {
  const PRIMARY =
    "inline-flex items-center justify-center rounded-full bg-[#caa374] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]";
  const SECONDARY =
    "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65";

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Terms & Conditions | Bloom Flower Wall Rentals"
        description="Terms and conditions for Bloom Flower Wall Rentals in Clermont, FL."
      />

      <section className="py-14">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              Terms & Conditions
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              These terms apply to rentals and services provided by Bloom Flower
              Wall Rentals (“Bloom”, “we”, “us”). By booking, you agree to these
              terms.
            </p>

            <div className="mt-8 space-y-6 rounded-3xl border border-black/10 bg-white/55 p-7 shadow-sm">
              <div>
                <div className="text-sm font-semibold text-black/75">
                  Booking & Deposit
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  A deposit is required to reserve your date. Your date is not
                  guaranteed until the deposit is received. Remaining balance is
                  due before setup unless otherwise agreed in writing.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Rental Time & Access
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  Rental time includes delivery, setup, and breakdown windows.
                  Client agrees to provide venue access, load-in instructions,
                  and any required permits/approvals. Additional time may incur
                  fees.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Damage & Liability
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  Normal wear is expected. Significant damage, missing items, or
                  misuse may result in repair/replacement fees. Bloom is not
                  responsible for venue restrictions, guest behavior, or
                  circumstances outside our control.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Outdoor & Weather
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  Outdoor setups require safe conditions. If weather is unsafe
                  (high wind, heavy rain, lightning), we may move the setup
                  indoors or reschedule based on availability.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Pre-order Styles
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  Pre-order wall styles are sourced by request and require
                  advance notice. Pricing varies by style and availability.
                  Deposits for pre-order inventory may be higher and can be
                  non-refundable if inventory is purchased specifically for your
                  event.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Photos & Marketing
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  Bloom may take photos of setups for portfolio/social media. We
                  avoid identifying guests without permission. If you prefer no
                  photos, request this in writing before your event.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Questions
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  If anything is unclear, contact us before booking.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className={PRIMARY}>
                Request a Quote
              </Link>
              <Link to="/" className={SECONDARY}>
                Back to Home
              </Link>
            </div>

            <p className="mt-6 text-xs text-black/50">
              Last updated: February 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
