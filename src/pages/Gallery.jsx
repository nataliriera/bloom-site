import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import whiteGardenImg from "../assets/walls/white-garden.jpg";
import blushOmbreImg from "../assets/walls/blush-ombre.jpg";
import pinkMixImg from "../assets/walls/pink-mix.jpg";
import redRoseImg from "../assets/walls/red-rose.jpg";
import blueRoseImg from "../assets/walls/blue-rose.jpg";
import greeneryWallImg from "../assets/walls/greenery-wall.jpg";
import boxwoodCascadeImg from "../assets/walls/boxwood-cascade.jpg";
import purpleGardenImg from "../assets/walls/purple-garden.jpg";

const data = [
  {
    name: "White Garden",
    category: "White",
    note: "Signature white 8×8",
    status: "owned",
    leadWeeks: 0,
    image: whiteGardenImg,
    alt: "White 8x8 flower wall backdrop rental in Clermont, Florida",
    pricingNote: "Starting at $350",
  },
  {
    name: "Blush Ombré",
    category: "Blush",
    note: "Soft blush tones (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: blushOmbreImg,
    alt: "Blush ombré flower wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Pink Garden Mix",
    category: "Pink",
    note: "High-impact mix (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: pinkMixImg,
    alt: "Pink floral flower wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Red Rose",
    category: "Red",
    note: "Bold + dramatic (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: redRoseImg,
    alt: "Red rose flower wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Dusty Blue",
    category: "Blue",
    note: "Perfect for baby showers (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: blueRoseImg,
    alt: "Blue flower wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Greenery Wall",
    category: "Greenery",
    note: "Modern + versatile (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: greeneryWallImg,
    alt: "Greenery wall backdrop (pre-order) in Clermont, Florida",
  },
  {
    name: "Boxwood + White Cascade",
    category: "Greenery",
    note: "Classic wedding look (pre-order)",
    status: "preorder",
    leadWeeks: 8,
    image: boxwoodCascadeImg,
    alt: "Boxwood wall with white floral cascade (pre-order) in Clermont, Florida",
  },
  {
    name: "Purple Garden",
    category: "Purple",
    note: "Fun + unique (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: purpleGardenImg,
    alt: "Purple flower wall backdrop (pre-order) in Clermont, Florida",
  },
];

const categories = [
  "All",
  "White",
  "Blush",
  "Pink",
  "Red",
  "Blue",
  "Greenery",
  "Purple",
];

function WallCard({ x, isPreorder }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#111",
        cursor: "pointer",
      }}
    >
      <div
        style={{ aspectRatio: "3/4", position: "relative", overflow: "hidden" }}
      >
        <img
          src={x.image}
          alt={x.alt || `${x.name} flower wall rental`}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.78,
            transition: "transform 1s cubic-bezier(0.16,1,0.3,1), opacity 0.4s",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 30%, rgba(10,10,10,0.94) 100%)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "rgba(12,12,12,0.55)",
              border: "1px solid rgba(201,169,110,0.35)",
              color: "#c9a96e",
              padding: "5px 12px",
              backdropFilter: "blur(8px)",
            }}
          >
            {x.category}
          </span>
          {isPreorder && (
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "rgba(12,12,12,0.55)",
                border: "1px solid rgba(245,240,232,0.12)",
                color: "rgba(245,240,232,0.5)",
                padding: "5px 12px",
                backdropFilter: "blur(8px)",
              }}
            >
              Pre-order · {x.leadWeeks}+ wks
            </span>
          )}
          {!isPreorder && (
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "rgba(12,12,12,0.55)",
                border: "1px solid rgba(245,240,232,0.12)",
                color: "rgba(245,240,232,0.5)",
                padding: "5px 12px",
                backdropFilter: "blur(8px)",
              }}
            >
              In Stock
            </span>
          )}
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "24px 22px",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 400,
              lineHeight: 1.05,
              marginBottom: 5,
            }}
          >
            {x.name}
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "rgba(245,240,232,0.45)",
              marginBottom: 16,
            }}
          >
            {x.note}
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#0c0c0c",
                background: "#c9a96e",
                padding: "9px 20px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#d4b280")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#c9a96e")
              }
            >
              Request Quote
            </Link>
            <Link
              to="/pricing"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.65)",
                border: "1px solid rgba(245,240,232,0.2)",
                padding: "9px 20px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c9a96e";
                e.currentTarget.style.color = "#c9a96e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.2)";
                e.currentTarget.style.color = "rgba(245,240,232,0.65)";
              }}
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const owned = useMemo(() => data.filter((x) => x.status === "owned"), []);
  const preorderAll = useMemo(
    () => data.filter((x) => x.status === "preorder"),
    []
  );
  const preorder = useMemo(
    () =>
      filter === "All"
        ? preorderAll
        : preorderAll.filter((x) => x.category === filter),
    [filter, preorderAll]
  );

  const eyebrow = (text) => (
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
          flexShrink: 0,
        }}
      />
      {text}
    </p>
  );

  return (
    <div
      style={{
        background: "#0c0c0c",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .noise { position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:0.025;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:150px; }
        .filter-btn { font-family:'DM Sans',sans-serif; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; padding:9px 20px; border:1px solid rgba(201,169,110,0.2); background:transparent; color:rgba(245,240,232,0.45); cursor:pointer; transition:all 0.2s ease; }
        .filter-btn:hover { border-color:rgba(201,169,110,0.5); color:#c9a96e; }
        .filter-btn.active { border-color:#c9a96e; background:rgba(201,169,110,0.08); color:#c9a96e; }
        .gallery-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
        .inner { max-width:1280px; margin:0 auto; padding:0 48px; }
        .btn-gold { display:inline-flex; align-items:center; justify-content:center; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:15px 36px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        @media (max-width:900px) {
          .gallery-grid { grid-template-columns:repeat(2,1fr); }
          .inner { padding:0 24px; }
        }
        @media (max-width:520px) {
          .gallery-grid { grid-template-columns:1fr; }
        }
      `}</style>
      <div className="noise" />

      {/* ── Header ── */}
      <section style={{ padding: "100px 0 72px" }}>
        <div className="inner">
          {eyebrow("Our Collection")}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(44px, 7vw, 88px)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              marginBottom: 28,
            }}
          >
            Wall
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Styles</em>
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.45)",
              fontWeight: 300,
              maxWidth: 480,
              marginBottom: 32,
            }}
          >
            Choose a vibe, then request a quote for your date and venue.
          </p>

          {/* Info notice */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              maxWidth: 560,
            }}
          >
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "rgba(245,240,232,0.42)",
                lineHeight: 1.7,
                fontWeight: 300,
                border: "1px solid rgba(201,169,110,0.15)",
                padding: "16px 20px",
              }}
            >
              <strong
                style={{ color: "rgba(245,240,232,0.7)", fontWeight: 500 }}
              >
                Packages start at $350.
              </strong>{" "}
              Delivery, professional setup, and breakdown are available for an
              additional fee.{" "}
              <span style={{ color: "rgba(245,240,232,0.32)" }}>
                Pre-order images are supplier catalog photos for inspiration.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Owned inventory ── */}
      <section style={{ paddingBottom: 100 }}>
        <div className="inner" style={{ paddingBottom: 48 }}>
          {eyebrow("Current Inventory")}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 0,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              In stock —{" "}
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                fastest availability
              </em>
            </h2>
          </div>
        </div>
        <div className="inner" style={{ paddingBottom: 0 }}>
          <div className="gallery-grid">
            {owned.map((x) => (
              <WallCard key={x.name} x={x} isPreorder={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Pre-order styles ── */}
      <section style={{ background: "#090909", padding: "100px 0" }}>
        <div className="inner" style={{ paddingBottom: 48 }}>
          {eyebrow("Pre-Order Styles")}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: 36,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              Sourced by request —{" "}
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                6–8+ weeks notice
              </em>
            </h2>
          </div>

          {/* Filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`filter-btn${filter === c ? " active" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="inner" style={{ paddingBottom: 0 }}>
          <div className="gallery-grid" style={{ marginTop: 0 }}>
            {preorder.map((x) => (
              <WallCard key={x.name} x={x} isPreorder />
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="inner" style={{ paddingTop: 48 }}>
          <div
            style={{
              border: "1px solid rgba(201,169,110,0.12)",
              padding: "20px 24px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(245,240,232,0.38)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "#c9a96e", fontWeight: 500 }}>Tip:</strong>{" "}
            If your event is under 6 weeks away, owned inventory is the best
            guaranteed option.
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid rgba(201,169,110,0.1)",
        }}
      >
        <div className="inner">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 32,
              background: "linear-gradient(135deg, #18140c 0%, #1e1a0e 100%)",
              border: "1px solid rgba(201,169,110,0.2)",
              padding: "40px 48px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 400,
                  marginBottom: 6,
                }}
              >
                Ready to check your date?
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(245,240,232,0.42)",
                  fontWeight: 300,
                }}
              >
                Send your event date + venue and we'll confirm availability and
                recommend add-ons that photograph beautifully.
              </p>
            </div>
            <Link to="/contact" className="btn-gold">
              Request a Quote
            </Link>
          </div>
          <p
            style={{
              marginTop: 28,
              textAlign: "center",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "rgba(245,240,232,0.25)",
            }}
          >
            Delivery/setup/breakdown is available for an additional fee and
            quoted based on venue location + logistics.
          </p>
        </div>
      </section>
    </div>
  );
}
