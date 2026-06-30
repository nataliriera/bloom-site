import React from "react";

/**
 * Horizontal swipe row on mobile; passes through as a normal grid on desktop.
 */
export default function SnapCarousel({ children, className = "", hint = "Swipe to explore", bleed = true }) {
  return (
    <div className="snap-carousel-outer">
      <p className="snap-carousel-hint" aria-hidden="true">
        {hint} →
      </p>
      <div
        className={`snap-carousel ${bleed ? "snap-carousel--bleed" : ""} ${className}`.trim()}
      >
        {children}
      </div>
      <style>{`
        .snap-carousel-outer { position: relative; width: 100%; }
        .snap-carousel-hint {
          display: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.5);
          text-align: center;
          margin: 0 0 14px;
        }
        @media (max-width: 768px) {
          .snap-carousel-hint { display: block; }
          .snap-carousel {
            display: flex !important;
            grid-template-columns: unset !important;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-x: contain;
            scrollbar-width: none;
            gap: 14px;
            padding: 2px 24px 18px;
            width: 100%;
          }
          .snap-carousel--bleed {
            margin: 0 -24px;
            width: calc(100% + 48px);
          }
          .snap-carousel::-webkit-scrollbar { display: none; }
          .snap-carousel > * {
            flex: 0 0 min(82vw, 300px);
            scroll-snap-align: center;
            min-width: 0;
          }
        }
      `}</style>
    </div>
  );
}
