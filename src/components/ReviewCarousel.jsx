import React, { useCallback, useEffect, useRef, useState } from "react";

function Stars({ count = 5, size = 14 }) {
  return (
    <span
      className="review-stars"
      style={{ "--star-size": `${size}px` }}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function getInitials(name) {
  const words = name.replace(/['']/g, "").split(/[\s-]+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function avatarHue(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash) % 360;
}

function ReviewSlideCard({ review, isActive }) {
  const hue = avatarHue(review.name);
  const isLong = review.text.length > 280;

  return (
    <article
      className={`review-slide-card${isActive ? " review-slide-card--active" : ""}${isLong ? " review-slide-card--long" : ""}`}
      aria-hidden={!isActive}
    >
      <div className="review-slide-card-inner">
        <div className="review-slide-top">
          <div
            className="review-slide-avatar"
            style={{
              background: `linear-gradient(135deg, hsl(${hue}, 42%, 38%) 0%, hsl(${hue}, 36%, 28%) 100%)`,
            }}
            aria-hidden="true"
          >
            {getInitials(review.name)}
          </div>
          <div className="review-slide-meta">
            <Stars count={review.rating} size={13} />
            <span className="review-slide-source">
              <GoogleMark />
              Google Review
            </span>
          </div>
        </div>

        <blockquote className="review-slide-quote">
          <p>{review.text}</p>
        </blockquote>

        <footer className="review-slide-footer">
          <strong>{review.name}</strong>
          <span>
            {review.event}
            {review.date ? ` · ${review.date}` : ""}
          </span>
        </footer>
      </div>
    </article>
  );
}

function GoogleMark() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      style={direction === "left" ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ReviewCarousel({ reviews }) {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [index, setIndex] = useState(0);
  const scrollRaf = useRef(null);
  const indexRef = useRef(0);
  indexRef.current = index;

  const scrollToIndex = useCallback((nextIndex) => {
    const i = ((nextIndex % reviews.length) + reviews.length) % reviews.length;
    setIndex(i);
    cardRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [reviews.length]);

  const goPrev = () => scrollToIndex(index - 1);
  const goNext = () => scrollToIndex(index + 1);

  const syncIndexFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    setIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
      scrollRaf.current = requestAnimationFrame(syncIndexFromScroll);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, [syncIndexFromScroll]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") scrollToIndex(indexRef.current - 1);
      if (e.key === "ArrowRight") scrollToIndex(indexRef.current + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [scrollToIndex]);

  return (
    <div className="review-carousel" aria-roledescription="carousel" aria-label="Client reviews">
      <div className="review-carousel-controls">
        <button
          type="button"
          className="review-carousel-btn"
          onClick={goPrev}
          aria-label="Previous review"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          className="review-carousel-btn"
          onClick={goNext}
          aria-label="Next review"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className="review-carousel-viewport">
        <div className="review-carousel-track" ref={trackRef}>
          {reviews.map((review, i) => (
            <div
              key={`${review.name}-${review.event}`}
              className="review-carousel-slide"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <ReviewSlideCard review={review} isActive={i === index} />
            </div>
          ))}
        </div>
      </div>

      <div className="review-carousel-dots" role="tablist" aria-label="Choose a review">
        {reviews.map((review, i) => (
          <button
            key={`dot-${review.name}`}
            type="button"
            role="tab"
            className={`review-carousel-dot${i === index ? " review-carousel-dot--active" : ""}`}
            aria-label={`Review ${i + 1} of ${reviews.length}: ${review.name}`}
            aria-selected={i === index}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>

      <p className="review-carousel-counter" aria-live="polite">
        {index + 1} / {reviews.length}
      </p>

      <style>{`
        .review-stars {
          display: inline-flex;
          gap: 3px;
          color: #c9a96e;
        }
        .review-stars svg {
          width: var(--star-size);
          height: var(--star-size);
        }

        .review-carousel {
          position: relative;
          width: 100%;
        }

        .review-carousel-viewport {
          position: relative;
          margin: 0 -48px;
          padding: 12px 0 8px;
        }

        .review-carousel-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
          scrollbar-width: none;
          padding: 8px max(48px, calc(50% - min(42vw, 340px))) 24px;
        }

        .review-carousel-track::-webkit-scrollbar {
          display: none;
        }

        .review-carousel-slide {
          flex: 0 0 min(84vw, 680px);
          scroll-snap-align: center;
          min-width: 0;
        }

        .review-slide-card {
          height: 100%;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(
            145deg,
            rgba(201, 169, 110, 0.35) 0%,
            rgba(201, 169, 110, 0.06) 45%,
            rgba(201, 169, 110, 0.18) 100%
          );
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
          transform: scale(0.94);
          opacity: 0.55;
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.45s ease,
            box-shadow 0.45s ease;
        }

        .review-slide-card--active {
          transform: scale(1);
          opacity: 1;
          box-shadow:
            0 28px 72px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(201, 169, 110, 0.12);
        }

        .review-slide-card-inner {
          position: relative;
          height: 100%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 36px 36px 32px;
          border-radius: 19px;
          background: linear-gradient(165deg, #151515 0%, #0a0a0a 55%, #0d0c0a 100%);
          overflow: hidden;
        }

        .review-slide-card-inner::before {
          content: '"';
          position: absolute;
          top: 8px;
          right: 28px;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(96px, 14vw, 140px);
          line-height: 1;
          color: rgba(201, 169, 110, 0.07);
          pointer-events: none;
          user-select: none;
        }

        .review-slide-top {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .review-slide-avatar {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(245, 240, 232, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .review-slide-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .review-slide-source {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.4);
        }

        .review-slide-quote {
          flex: 1;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .review-slide-quote p {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.4vw, 26px);
          font-weight: 300;
          font-style: italic;
          line-height: 1.55;
          color: rgba(245, 240, 232, 0.92);
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .review-slide-card--long .review-slide-quote p {
          -webkit-line-clamp: 9;
        }

        .review-slide-footer {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding-top: 20px;
          border-top: 1px solid rgba(201, 169, 110, 0.14);
          position: relative;
          z-index: 1;
        }

        .review-slide-footer strong {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #f5f0e8;
        }

        .review-slide-footer span {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.42);
        }

        .review-carousel-controls {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-bottom: 8px;
        }

        .review-carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(201, 169, 110, 0.35);
          background: rgba(201, 169, 110, 0.06);
          color: #c9a96e;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .review-carousel-btn:hover {
          background: rgba(201, 169, 110, 0.16);
          border-color: rgba(201, 169, 110, 0.55);
          color: #f5f0e8;
          transform: translateY(-1px);
        }

        .review-carousel-btn:active {
          transform: translateY(0);
        }

        .review-carousel-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
        }

        .review-carousel-dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: rgba(201, 169, 110, 0.22);
          cursor: pointer;
          transition:
            width 0.3s ease,
            background 0.3s ease,
            border-radius 0.3s ease;
        }

        .review-carousel-dot--active {
          width: 28px;
          border-radius: 4px;
          background: #c9a96e;
        }

        .review-carousel-counter {
          text-align: center;
          margin: 14px 0 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.35);
        }

        @media (max-width: 900px) {
          .review-carousel-viewport {
            margin: 0 -24px;
          }

          .review-carousel-track {
            padding-left: max(24px, calc(50% - 42vw));
            padding-right: max(24px, calc(50% - 42vw));
            gap: 14px;
          }

          .review-carousel-slide {
            flex-basis: min(88vw, 340px);
          }

          .review-slide-card-inner {
            min-height: 300px;
            padding: 28px 24px 24px;
          }

          .review-slide-quote p {
            font-size: 19px;
            -webkit-line-clamp: 8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .review-slide-card,
          .review-carousel-btn,
          .review-carousel-dot {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
