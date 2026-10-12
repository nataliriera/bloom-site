/**
 * Bloom homepage — boutique event styling.
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  reviews,
  googleProfileUrl,
  reviewSummary,
} from "../data/reviews.js";
import { BloomCtaBand } from "../components/BloomLayout.jsx";

import aboutSetup from "../assets/about-setup.png";
import whiteGarden from "../assets/walls/white-garden.jpg";
import whiteGardenBride from "../assets/portfolio/white-garden-2.jpg";
import enchantedGarden2 from "../assets/walls/enchanted-garden-2.jpg";
import midnightNoir2 from "../assets/walls/midnight-noir-2.jpg";
import pinkMix from "../assets/walls/pink-mix.jpg";
import greeneryWall from "../assets/walls/greenery-wall.jpg";
import fallIntoWellness from "../assets/events/fall-into-wellness-setup.jpg";
import summerSoiree from "../assets/home/summer-soiree.jpg";
import tropicalBigelows from "../assets/portfolio/tropical-oasis-2.jpg";
import helloGorgeous from "../assets/portfolio/enchanted-6.jpg";
import floralPillars from "../assets/home/floral-pillars.jpg";
import fullBloomSetup from "../assets/home/full-bloom-setup.jpg";

const BEHOLD_FEED_ID = "qDJTl17ooRzEHgeQ0dBq";
const IG_PROFILE = "https://www.instagram.com/bloomflowerwallrentals/";

const portfolioPreview = [
  { src: fallIntoWellness, alt: "Fall into Wellness White Garden backdrop with floral arrangements" },
  { src: summerSoiree, alt: "Summer Soirée colorful flower wall" },
  { src: tropicalBigelows, alt: "Tropical greenery wall sweetheart table for The Bigelows" },
  { src: helloGorgeous, alt: "Hello Gorgeous neon flower wall with styled table" },
  { src: floralPillars, alt: "Tall blush and white faux-floral pillar arrangements" },
  { src: fullBloomSetup, alt: "Ivory crossed-drape backdrop with tall floral arrangements" },
];

/** Local photos used if Behold media URLs fail */
const igFallbacks = [
  aboutSetup,
  whiteGarden,
  enchantedGarden2,
  midnightNoir2,
  pinkMix,
  greeneryWall,
];

const homepageReviews = [
  reviews.find((r) => r.name === "Angela Moody"),
  reviews.find((r) => r.name === "Anna Poulton"),
  reviews.find((r) => r.name === "Amanda Nethero"),
].filter(Boolean);

function Stars({ count = 5 }) {
  return (
    <span className="hp-stars" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
    </span>
  );
}

function IgImage({ src, fallback, alt }) {
  const [current, setCurrent] = useState(src || fallback);

  useEffect(() => {
    setCurrent(src || fallback);
  }, [src, fallback]);

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}

/**
 * Live Instagram posts via Behold's JSON feed (same feed as the site widget).
 * Behold's image proxy is currently failing ("Failed to fetch from source"),
 * so each tile falls back to a real Bloom photo until media sync is restored.
 */
function InstagramFeed() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Behold feed ${res.status}`);
        const data = await res.json();
        setPosts(Array.isArray(data.posts) ? data.posts.slice(0, 6) : []);
      } catch (err) {
        if (err.name === "AbortError") return;
        setPosts([]);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (posts === null) {
    return (
      <div className="hp-ig__grid" aria-busy="true" aria-label="Loading Instagram posts">
        {igFallbacks.map((_, i) => (
          <div key={i} className="hp-ig__skeleton" />
        ))}
      </div>
    );
  }

  const tiles =
    posts.length > 0
      ? posts.map((post, i) => ({
          key: post.id,
          href: post.permalink || IG_PROFILE,
          src:
            post.sizes?.medium?.mediaUrl ||
            post.sizes?.small?.mediaUrl ||
            post.thumbnailUrl,
          fallback: igFallbacks[i % igFallbacks.length],
          alt:
            (post.prunedCaption || post.caption || "Bloom on Instagram").slice(
              0,
              100
            ),
        }))
      : igFallbacks.map((src, i) => ({
          key: `fallback-${i}`,
          href: IG_PROFILE,
          src,
          fallback: src,
          alt: "Bloom on Instagram",
        }));

  return (
    <div className="hp-ig__grid">
      {tiles.map((tile) => (
        <a
          key={tile.key}
          href={tile.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tile.alt}
        >
          <IgImage src={tile.src} fallback={tile.fallback} alt={tile.alt} />
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="hp-preview">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hp-preview {
          --cream: #f7f3ed;
          --cream-deep: #efe9e0;
          --ink: #1a1612;
          --soft: rgba(26,22,18,0.62);
          --mute: rgba(26,22,18,0.4);
          --gold: #c6a46a;
          --dark: #0c0c0c;
          background: var(--cream);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          min-height: 100vh;
        }
        .hp-preview *, .hp-preview *::before, .hp-preview *::after { box-sizing: border-box; }
        .hp-preview img { display: block; max-width: 100%; }

        .hp-wrap {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .hp-btn--gold {
          background: var(--gold);
          color: var(--dark);
          border-color: var(--gold);
        }
        .hp-btn--gold:hover { background: #b89355; border-color: #b89355; }
        .hp-btn--ghost {
          background: transparent;
          color: #f7f3ed;
          border-color: rgba(247,243,237,0.55);
        }
        .hp-btn--ghost:hover {
          background: rgba(247,243,237,0.1);
          border-color: #f7f3ed;
        }
        .hp-btn--ink {
          background: var(--ink);
          color: var(--cream);
          border-color: var(--ink);
        }
        .hp-btn--ink:hover { background: #2a2420; }
        .hp-btn--line {
          background: transparent;
          color: var(--ink);
          border-color: rgba(26,22,18,0.28);
        }
        .hp-btn--line:hover { border-color: var(--ink); }

        .hp-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(32px, 4.5vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
        }
        .hp-text {
          font-size: 16px;
          line-height: 1.7;
          color: var(--soft);
          margin: 0;
          max-width: 540px;
        }
        .hp-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin: 0 0 14px;
        }

        /* HERO */
        .hp-hero {
          position: relative;
          min-height: min(92vh, 820px);
          display: grid;
          align-items: end;
          overflow: hidden;
          background: #e8e0d4;
        }
        .hp-hero__media {
          position: absolute;
          inset: 0;
        }
        .hp-hero__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 12% 22%;
        }
        .hp-hero__shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(105deg, rgba(26,22,18,0.72) 0%, rgba(26,22,18,0.48) 42%, rgba(26,22,18,0.22) 100%),
            linear-gradient(to top, rgba(26,22,18,0.55) 0%, rgba(26,22,18,0.18) 50%, rgba(26,22,18,0.28) 100%);
        }
        .hp-hero__copy {
          position: relative;
          z-index: 1;
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
          padding: 72px 0 64px;
          max-width: 720px;
          justify-self: start;
        }
        .hp-hero__kicker {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(247,243,237,0.85);
          margin: 0 0 18px;
        }
        .hp-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(36px, 5.5vw, 58px);
          line-height: 1.08;
          color: #faf7f2;
          margin: 0 0 18px;
          text-shadow: 0 1px 18px rgba(26,22,18,0.2);
        }
        .hp-hero__support {
          font-size: 16px;
          line-height: 1.65;
          color: rgba(247,243,237,0.9);
          margin: 0 0 32px;
          max-width: 520px;
        }
        .hp-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* PROMO BANNER */
        .hp-banner {
          background: var(--ink);
          border-bottom: 1px solid rgba(198,164,106,0.28);
        }
        .hp-banner a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
          padding: 14px 0;
          font-size: 13px;
          letter-spacing: 0.04em;
          color: rgba(247,243,237,0.9);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .hp-banner a:hover { color: var(--gold); }
        .hp-banner__mark {
          color: var(--gold);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 500;
        }

        /* INTRO */
        .hp-intro {
          padding: 88px 0;
        }
        .hp-intro__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px 56px;
          align-items: center;
        }
        .hp-intro__copy .hp-text + .hp-text {
          margin-top: 18px;
        }
        .hp-intro__media {
          overflow: hidden;
          background: #e4ddd2;
          aspect-ratio: 4 / 5;
          max-height: 520px;
        }
        .hp-intro__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
        .hp-intro__rule {
          border: 0;
          border-top: 1px solid rgba(26,22,18,0.1);
          margin: 88px 0 0;
        }

        /* PORTFOLIO */
        .hp-work {
          padding: 88px 0;
        }
        .hp-work__head {
          margin-bottom: 36px;
          max-width: 480px;
        }
        .hp-work__grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr;
          grid-template-rows: 280px 280px;
          gap: 12px;
        }
        .hp-work__grid a {
          display: block;
          overflow: hidden;
          background: #e4ddd2;
        }
        .hp-work__grid a:first-child {
          grid-row: 1 / 3;
        }
        .hp-work__grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .hp-work__grid a:hover img {
          transform: scale(1.03);
        }
        .hp-work__cta {
          margin-top: 32px;
        }

        /* INSTAGRAM */
        .hp-ig {
          padding: 112px 0;
          background: #1b1b1b;
          color: #f7f3ed;
        }
        .hp-ig__head {
          text-align: center;
          max-width: 520px;
          margin: 0 auto 28px;
        }
        .hp-ig__head .hp-label {
          color: var(--gold);
        }
        .hp-ig__head .hp-h2 {
          color: #faf7f2;
        }
        .hp-ig__head .hp-text {
          max-width: none;
          margin: 0 auto;
          color: rgba(247,243,237,0.72);
        }
        .hp-ig__cta {
          display: flex;
          justify-content: center;
          margin-bottom: 48px;
        }
        .hp-ig__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 960px;
          margin: 0 auto;
        }
        .hp-ig__grid a,
        .hp-ig__skeleton {
          display: block;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 14px;
          background: #2a2a2a;
        }
        .hp-ig__skeleton {
          background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
          background-size: 200% 100%;
          animation: hp-shimmer 1.2s ease-in-out infinite;
        }
        @keyframes hp-shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
        .hp-ig__grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .hp-ig__grid a:hover img {
          transform: scale(1.06);
        }

        /* REVIEWS */
        .hp-reviews {
          padding: 88px 0;
        }
        .hp-reviews__head {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 36px;
        }
        .hp-reviews__meta {
          font-size: 13px;
          color: var(--soft);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hp-stars {
          color: var(--gold);
          letter-spacing: 0.08em;
          font-size: 14px;
        }
        .hp-reviews__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 36px;
        }
        .hp-review blockquote {
          margin: 0 0 16px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 300;
          line-height: 1.45;
          color: var(--ink);
        }
        .hp-review cite {
          display: block;
          font-style: normal;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--mute);
        }
        .hp-review__source {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--mute);
        }
        .hp-reviews__cta {
          margin-top: 36px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* FINAL CTA */
        .hp-cta {
          padding: 0 0 100px;
        }
        .hp-cta__box {
          background: var(--cream-deep);
          padding: clamp(48px, 8vw, 72px) clamp(28px, 5vw, 64px);
          text-align: center;
        }
        .hp-cta__box .hp-h2 { margin-bottom: 14px; }
        .hp-cta__box .hp-text {
          margin: 0 auto 28px;
          max-width: 440px;
        }

        @media (max-width: 900px) {
          .hp-intro__grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .hp-intro__media {
            aspect-ratio: 16 / 10;
            max-height: 380px;
          }
          .hp-intro__rule { margin-top: 64px; }
          .hp-work__grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .hp-work__grid a:first-child {
            grid-column: 1 / -1;
            grid-row: auto;
            min-height: 320px;
          }
          .hp-work__grid a { min-height: 220px; }
          .hp-ig__grid { gap: 16px; }
          .hp-reviews__grid { grid-template-columns: 1fr; gap: 28px; }
        }
        @media (max-width: 640px) {
          .hp-hero { min-height: 78vh; }
          .hp-hero__copy { padding: 56px 0 48px; }
          .hp-banner a {
            flex-direction: column;
            gap: 4px;
            text-align: center;
            padding: 16px 0;
            font-size: 12px;
          }
          .hp-intro, .hp-work, .hp-reviews { padding: 64px 0; }
          .hp-ig { padding: 80px 0; }
          .hp-intro__rule { margin-top: 64px; }
          .hp-cta { padding-bottom: 72px; }
          .hp-work__grid { grid-template-columns: 1fr; }
          .hp-work__grid a { min-height: 260px; }
          .hp-ig__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .hp-ig__cta .hp-btn { width: auto; }
          .hp-btn { width: 100%; }
          .hp-hero__actions .hp-btn { width: auto; flex: 1 1 auto; }
        }
      `}</style>

      {/* 1. HERO */}
      <section className="hp-hero">
        <div className="hp-hero__media" aria-hidden="true">
          <img src={whiteGardenBride} alt="" />
          <div className="hp-hero__shade" />
        </div>
        <div className="hp-hero__copy">
          <p className="hp-hero__kicker">Clermont · Central Florida</p>
          <h1>Statement Backdrops &amp; Floral Styling for Central Florida Events</h1>
          <p className="hp-hero__support">
            Premium faux flower walls, custom floral styling, signage, and
            photo-ready event installations for weddings, celebrations, corporate
            events, and brands.
          </p>
          <div className="hp-hero__actions">
            <Link to="/contact" className="hp-btn hp-btn--gold">
              Check Availability
            </Link>
            <Link to="/portfolio" className="hp-btn hp-btn--ghost">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 1b. PROMO BANNER */}
      <aside className="hp-banner">
        <Link to="/styling">
          <span className="hp-banner__mark">New</span>
          <span>The Full Bloom Setup: full ceremony styling from $995</span>
        </Link>
      </aside>

      {/* 2. WHAT BLOOM DOES */}
      <section className="hp-intro">
        <div className="hp-wrap">
          <div className="hp-intro__grid">
            <div className="hp-intro__copy">
              <p className="hp-label">About Bloom</p>
              <h2 className="hp-h2">More Than a Flower Wall</h2>
              <p className="hp-text">
                Bloom creates custom backdrops, floral styling, signage, and
                photo-ready event installations for weddings, celebrations, corporate
                events, and brands throughout Central Florida. Every piece is
                crafted with premium faux florals that photograph like fresh.
              </p>
              <p className="hp-text">
                From a simple flower wall rental to a fully styled setup, each design
                is tailored to the event and the space. Always in bloom, never
                wilting in the Florida heat.
              </p>
            </div>
            <div className="hp-intro__media">
              <img
                src={aboutSetup}
                alt="Bloom floral backdrop install at an event"
                loading="lazy"
              />
            </div>
          </div>
          <hr className="hp-intro__rule" />
        </div>
      </section>

      {/* 3. PORTFOLIO PREVIEW */}
      <section className="hp-work">
        <div className="hp-wrap">
          <div className="hp-work__head">
            <p className="hp-label">Portfolio</p>
            <h2 className="hp-h2">Recent Work</h2>
            <p className="hp-text">Real events, real spaces, styled by Bloom.</p>
          </div>
          <div className="hp-work__grid">
            {portfolioPreview.map((item) => (
              <Link to="/portfolio" key={item.alt} aria-label={item.alt}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </Link>
            ))}
          </div>
          <div className="hp-work__cta">
            <Link to="/portfolio" className="hp-btn hp-btn--gold">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INSTAGRAM — Behold JSON feed + photo fallback while media proxy is down */}
      <section className="hp-ig">
        <div className="hp-wrap">
          <div className="hp-ig__head">
            <p className="hp-label">Instagram</p>
            <h2 className="hp-h2">@bloomflowerwallrentals</h2>
            <p className="hp-text">
              Latest posts from Bloom: real installs and event moments.
            </p>
          </div>
          <div className="hp-ig__cta">
            <a
              href={IG_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="hp-btn hp-btn--gold"
            >
              Follow @bloomflowerwallrentals
            </a>
          </div>
          <InstagramFeed />
        </div>
      </section>

      {/* 5. GOOGLE REVIEWS */}
      <section className="hp-reviews">
        <div className="hp-wrap">
          <div className="hp-reviews__head">
            <div>
              <p className="hp-label">Google Reviews</p>
              <h2 className="hp-h2">What clients say</h2>
            </div>
            <div className="hp-reviews__meta">
              <Stars count={reviewSummary.rating} />
              <span>{reviewSummary.label}</span>
            </div>
          </div>
          <div className="hp-reviews__grid">
            {homepageReviews.map((r) => (
              <article className="hp-review" key={r.name}>
                <div className="hp-review__source">
                  <Stars count={r.rating} /> Google
                </div>
                <blockquote>
                  “
                  {r.text.length > 220
                    ? `${r.text.slice(0, 217).trim()}…`
                    : r.text}
                  ”
                </blockquote>
                <cite>
                  {r.name}
                  {r.event ? ` · ${r.event}` : ""}
                </cite>
              </article>
            ))}
          </div>
          <div className="hp-reviews__cta">
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hp-btn hp-btn--line"
            >
              See all reviews on Google
            </a>
            <a
              href="https://g.page/r/CVcq0lr2QLbhEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-btn hp-btn--line"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <BloomCtaBand />
    </div>
  );
}
