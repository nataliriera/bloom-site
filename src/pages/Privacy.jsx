import React from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

export default function Privacy() {
  const PRIMARY =
    "inline-flex items-center justify-center rounded-full bg-[#caa374] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-[0.98] active:brightness-[0.96]";
  const SECONDARY =
    "inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/80 active:bg-white/65";

  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#1b1b1b]">
      <SeoLite
        title="Privacy Policy | Bloom Flower Wall Rentals"
        description="Privacy policy for Bloom Flower Wall Rentals in Clermont, FL."
      />

      <section className="py-14">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              This policy explains what we collect, how we use it, and your
              choices.
            </p>

            <div className="mt-8 space-y-6 rounded-3xl border border-black/10 bg-white/55 p-7 shadow-sm">
              <div>
                <div className="text-sm font-semibold text-black/75">
                  Information We Collect
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  When you submit a quote request, we may collect your name,
                  email, phone number, event details, and any message you
                  provide.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  How We Use Your Information
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  We use your information to respond to inquiries, provide
                  quotes, confirm availability, and communicate about your
                  booking.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Sharing
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  We do not sell your personal information. We may share details
                  only as needed to provide services (for example, coordinating
                  with a venue or supplier for a pre-order style).
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Forms & Third-Party Services
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  Our contact form may be processed by a third-party form
                  provider (e.g., Formspree). Their systems may store submitted
                  form data.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Your Choices
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  You can request to update or delete your information by
                  contacting us at{" "}
                  <a
                    className="text-black/70 hover:text-black hover:underline decoration-black/20 underline-offset-4"
                    href="mailto:info@bloomflowerwallrentals.com"
                  >
                    info@bloomflowerwallrentals.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-black/75">
                  Questions
                </div>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  If you have questions about this policy, contact us anytime.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className={PRIMARY}>
                Contact Us
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
