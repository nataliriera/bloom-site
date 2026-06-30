import React from "react";
import ReviewCarousel from "./ReviewCarousel.jsx";
import { reviews, googleReviewUrl, googleProfileUrl, reviewSummary } from "../data/reviews.js";

function Stars({ count = 5, size = 14 }) {
  return (
    <span
      style={{ display: "inline-flex", gap: 3, color: "#c9a96e" }}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function ReviewsSection() {
  const hasReviews = reviews.length > 0;

  return (
    <section style={{ padding: "100px 0", background: "#0c0c0c" }}>
      <style>{`
        .reviews-summary {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .reviews-summary-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          color: rgba(245,240,232,0.65);
        }
        .reviews-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 48px;
        }
        .reviews-google-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #f5f0e8;
          border: 1px solid rgba(245,240,232,0.35);
          padding: 14px 28px;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .reviews-google-btn--primary {
          background: #c9a96e;
          color: #0c0c0c;
          border-color: #c9a96e;
        }
        .reviews-google-btn--primary:hover {
          background: #d4b280;
          border-color: #d4b280;
          color: #0c0c0c;
        }
        @media (max-width: 900px) {
          .inner { padding: 0 24px; }
        }
      `}</style>

      <div className="inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ paddingBottom: 40 }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#c9a96e",
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 1,
                background: "#c9a96e",
              }}
            />
            Happy Clients
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(34px, 5vw, 68px)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            What our clients
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>are saying</em>
          </h2>
          {reviewSummary?.rating && (
            <div className="reviews-summary">
              <Stars count={5} size={16} />
              <span className="reviews-summary-label">
                {reviewSummary.label} · {reviews.length} reviews
              </span>
            </div>
          )}
        </div>

        {hasReviews ? (
          <ReviewCarousel reviews={reviews} />
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "48px 32px",
              border: "1px solid rgba(201,169,110,0.15)",
              background: "rgba(201,169,110,0.03)",
              borderRadius: 20,
            }}
          >
            <Stars count={5} size={20} />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 24,
                fontWeight: 300,
                marginTop: 20,
                marginBottom: 8,
              }}
            >
              Had a great experience with Bloom?
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(245,240,232,0.65)",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: 400,
                margin: "0 auto",
              }}
            >
              We'd love to hear from you on Google.
            </p>
          </div>
        )}

        <div className="reviews-cta-row">
          <a
            href={googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-google-btn"
          >
            <GoogleIcon />
            See all reviews on Google
          </a>
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-google-btn reviews-google-btn--primary"
          >
            Leave a review
          </a>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#c9a96e"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#c9a96e"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#c9a96e"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#c9a96e"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
