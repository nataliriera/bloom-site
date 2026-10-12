import React, { useEffect, useRef, useState } from "react";
import { portfolioProjects } from "../data/portfolio.js";
import {
  BloomPageHero,
  BloomCtaBand,
} from "../components/BloomLayout.jsx";

function PageMeta() {
  useEffect(() => {
    const title =
      "Portfolio | Bloom Flower Wall Rentals, Clermont, FL";
    const desc =
      "Real Bloom installs across Central Florida: premium faux flower walls, floral styling, and branded event moments for weddings, showers, and celebrations.";
    document.title = title;
    const setMeta = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta(
      'meta[property="og:url"]',
      "content",
      "https://bloomflowerwallrentals.com/portfolio"
    );
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", desc);
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = "https://bloomflowerwallrentals.com/portfolio";
  }, []);
  return null;
}

function ProjectCarousel({ images, title }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const count = images.length;
  const multi = count > 1;

  useEffect(() => {
    setIndex(0);
  }, [images]);

  function go(next) {
    if (!multi) return;
    setIndex(((next % count) + count) % count);
  }

  function onTouchStart(e) {
    touchStartX.current = e.changedTouches[0].clientX;
  }

  function onTouchEnd(e) {
    if (touchStartX.current == null || !multi) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    go(index + (dx < 0 ? 1 : -1));
  }

  useEffect(() => {
    if (!multi) return undefined;
    function onKey(e) {
      if (e.key === "ArrowLeft") {
        setIndex((i) => ((i - 1) % count + count) % count);
      }
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % count);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [multi, count]);

  if (!count) return null;

  return (
    <div className="pcar">
      <div
        className="pcar__stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="pcar__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <figure className="pcar__slide" key={`${title}-${i}`}>
              <img
                src={src}
                alt={i === 0 ? title : `${title}, photo ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </figure>
          ))}
        </div>

        {multi && (
          <>
            <button
              type="button"
              className="pcar__nav pcar__nav--prev"
              aria-label="Previous photo"
              onClick={() => go(index - 1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="pcar__nav pcar__nav--next"
              aria-label="Next photo"
              onClick={() => go(index + 1)}
            >
              ›
            </button>
          </>
        )}
      </div>

      {multi && (
        <div className="pcar__thumbs" role="tablist" aria-label={`${title} photos`}>
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Photo ${i + 1} of ${count}`}
              className={`pcar__thumb${i === index ? " pcar__thumb--on" : ""}`}
              onClick={() => setIndex(i)}
            >
              <img src={src} alt="" loading="lazy" draggable={false} />
            </button>
          ))}
          <p className="pcar__count" aria-live="polite">
            {index + 1} / {count}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="bloom-page port">
      <PageMeta />
      <style>{`
        .port-project {
          padding: var(--bloom-space-section) 0;
          border-top: 1px solid rgba(26, 22, 18, 0.08);
        }
        .port-project:first-of-type {
          border-top: 0;
          padding-top: 0;
        }

        .port-project__intro {
          max-width: 560px;
          margin-bottom: 40px;
        }
        .port-project__meta {
          margin: 0 0 14px;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: var(--bloom-mute);
          line-height: 1.6;
        }
        .port-project__meta span + span::before {
          content: " · ";
        }
        .port-project__intro .bloom-h2 {
          margin-bottom: 12px;
        }

        /* Full-image carousel — never crop */
        .pcar {
          width: 100%;
        }
        .pcar__stage {
          position: relative;
          background: #ebe4da;
          height: min(78vh, 760px);
          overflow: hidden;
        }
        .pcar__track {
          display: flex;
          height: 100%;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .pcar__slide {
          margin: 0;
          flex: 0 0 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(16px, 3vw, 36px);
          box-sizing: border-box;
        }
        .pcar__slide img {
          display: block;
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          user-select: none;
          box-shadow: 0 12px 40px rgba(26, 22, 18, 0.12);
        }

        .pcar__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 48px;
          height: 48px;
          border: 0;
          background: rgba(247, 243, 237, 0.95);
          color: var(--bloom-ink);
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, color 0.2s ease;
          padding: 0;
        }
        .pcar__nav:hover {
          background: var(--bloom-gold);
          color: var(--bloom-dark);
        }
        .pcar__nav--prev { left: 14px; }
        .pcar__nav--next { right: 14px; }

        .pcar__thumbs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
        }
        .pcar__thumb {
          width: 64px;
          height: 64px;
          padding: 0;
          border: 1px solid transparent;
          background: #ebe4da;
          cursor: pointer;
          overflow: hidden;
          opacity: 0.55;
          transition: opacity 0.2s ease, border-color 0.2s ease;
        }
        .pcar__thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pcar__thumb:hover {
          opacity: 0.85;
        }
        .pcar__thumb--on {
          opacity: 1;
          border-color: var(--bloom-gold);
        }
        .pcar__count {
          margin: 0 0 0 auto;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--bloom-mute);
        }

        @media (max-width: 800px) {
          .port-project {
            padding: 48px 0 56px;
          }
          .pcar__stage {
            height: min(70vh, 560px);
          }
          .pcar__slide {
            padding: 14px;
          }
          .pcar__nav {
            width: 40px;
            height: 40px;
          }
          .pcar__thumb {
            width: 52px;
            height: 52px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pcar__track { transition: none; }
        }
      `}</style>

      <BloomPageHero
        label="Work"
        title="Portfolio"
        text="Real events. Real spaces. Premium faux florals styled into photo moments guests remember and ask about."
        ctaLabel="Check Availability"
      />

      <section className="bloom-section" style={{ paddingTop: 0 }} aria-label="Portfolio projects">
        <div className="bloom-wrap">
          {portfolioProjects.map((project) => (
            <article key={project.id} className="port-project">
              <div className="port-project__intro bloom-section-head">
                <p className="bloom-label">{project.service}</p>
                <h2 className="bloom-h2">{project.title}</h2>
                <p className="port-project__meta">
                  <span>{project.eventType}</span>
                  {project.location && <span>{project.location}</span>}
                </p>
                <p className="bloom-text">{project.description}</p>
              </div>
              <ProjectCarousel images={project.images} title={project.title} />
            </article>
          ))}
        </div>
      </section>

      <BloomCtaBand />
    </div>
  );
}
