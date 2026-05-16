import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import whiteGardenImg from "../assets/walls/white-garden.jpg";
import blushOmbreImg from "../assets/walls/blush-ombre.jpg";
import pinkMixImg from "../assets/walls/pink-mix.jpg";
import redRoseImg from "../assets/walls/red-rose.jpg";
import blueRoseImg from "../assets/walls/blue-rose.jpg";
import greeneryWallImg from "../assets/walls/greenery-wall.jpg";
import boxwoodCascadeImg from "../assets/walls/boxwood-cascade.jpg";
import purpleGardenImg from "../assets/walls/purple-garden.jpg";
import enchantedGardenImg from "../assets/walls/enchanted-garden.jpg";
import tropicalOasisImg from "../assets/walls/tropical-oasis.jpg";
import midnightNoirImg from "../assets/walls/midnight-noir.jpg";

// ─────────────────────────────────────────────────────────────────────────────
// 🌸 ADD YOUR EXTRA PHOTOS HERE
// 1. Drop your photos into src/assets/walls/
// 2. Import them below (examples shown)
// 3. Add them to the `gallery` array for each wall
//
import whiteGarden2 from "../assets/walls/white-garden-2.jpg";
import whiteGarden3 from "../assets/walls/white-garden-3.jpg";
import enchantedGarden2 from "../assets/walls/enchanted-garden-2.jpg";
import enchantedGarden3 from "../assets/walls/enchanted-garden-3.jpg";
// import tropicalOasis2 from "../assets/walls/tropical-oasis-2.jpg";
import midnightNoir2 from "../assets/walls/midnight-noir-2.jpg";
import midnightNoir3 from "../assets/walls/midnight-noir-3.jpg";
// ─────────────────────────────────────────────────────────────────────────────

const SITE_URL = "https://bloomflowerwallrentals.com";

const data = [
  {
    name: "White Garden",
    category: "White",
    note: "Signature white 8×8",
    status: "available",
    image: whiteGardenImg,
    imageUrl: `${SITE_URL}/white-wall.png`,
    alt: "White 8x8 flower wall backdrop rental in Clermont, Florida",
    pricingNote: "Starting at $350",
    pinDescription:
      "White Garden flower wall rental — stunning white floral backdrop for weddings, bridal showers & events in Clermont, FL. Starting at $350. 🤍 bloomflowerwallrentals.com",
    gallery: [whiteGardenImg, whiteGarden2, whiteGarden3],
  },
  {
    name: "The Enchanted Garden",
    category: "Colorful",
    note: "Colorful 8×8",
    status: "available",
    image: enchantedGardenImg,
    imageUrl: `${SITE_URL}/enchanted-garden.jpg`,
    alt: "Colorful 8x8 flower wall backdrop rental in Clermont, Florida",
    pricingNote: "Starting at $350",
    pinDescription:
      "Enchanted Garden flower wall rental — colorful floral backdrop for birthdays, quinceañeras & events in Clermont, FL. Starting at $350. 🌸 bloomflowerwallrentals.com",
    gallery: [enchantedGardenImg, enchantedGarden2, enchantedGarden3],
  },
  {
    name: "Tropical Oasis",
    category: "Greenery",
    note: "Lush tropical greenery 8×8",
    status: "available",
    image: tropicalOasisImg,
    imageUrl: `${SITE_URL}/tropical-oasis.jpg`,
    alt: "Tropical greenery flower wall backdrop rental in Clermont, Florida",
    pricingNote: "Starting at $450",
    pinDescription:
      "Tropical Oasis flower wall rental — lush tropical greenery backdrop for weddings & events in Clermont, FL. Starting at $450. 🌿 bloomflowerwallrentals.com",
    // 🌸 Add your extra photos: gallery: [tropicalOasisImg, tropicalOasis2],
    gallery: [tropicalOasisImg],
  },
  {
    name: "Midnight Noir",
    category: "Black",
    note: "Dramatic dark florals 8×8",
    status: "available",
    image: midnightNoirImg,
    imageUrl: `${SITE_URL}/midnight-noir.jpg`,
    alt: "Black flower wall backdrop rental in Clermont, Florida",
    pricingNote: "Starting at $375",
    pinDescription:
      "Midnight Noir flower wall rental — dramatic dark floral backdrop for weddings & events in Clermont, FL. Starting at $375. 🖤 bloomflowerwallrentals.com",
    gallery: [midnightNoirImg, midnightNoir2, midnightNoir3],
  },
  {
    name: "Blush Ombré",
    category: "Blush",
    note: "Soft blush tones (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: blushOmbreImg,
    imageUrl: `${SITE_URL}/blush-ombre.jpg`,
    alt: "Blush ombré flower wall backdrop (pre-order) in Clermont, Florida",
    pinDescription:
      "Blush Ombré flower wall rental — soft blush floral backdrop available by pre-order in Clermont, FL. 🌸 bloomflowerwallrentals.com",
    gallery: [blushOmbreImg],
  },
  {
    name: "Pink Garden Mix",
    category: "Pink",
    note: "High-impact mix (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: pinkMixImg,
    imageUrl: `${SITE_URL}/pink-mix.jpg`,
    alt: "Pink floral flower wall backdrop (pre-order) in Clermont, Florida",
    pinDescription:
      "Pink Garden Mix flower wall rental — high-impact pink floral backdrop available by pre-order in Clermont, FL. 🌸 bloomflowerwallrentals.com",
    gallery: [pinkMixImg],
  },
  {
    name: "Red Rose",
    category: "Red",
    note: "Bold + dramatic (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: redRoseImg,
    imageUrl: `${SITE_URL}/red-rose.jpg`,
    alt: "Red rose flower wall backdrop (pre-order) in Clermont, Florida",
    pinDescription:
      "Red Rose flower wall rental — bold dramatic red rose backdrop available by pre-order in Clermont, FL. 🌹 bloomflowerwallrentals.com",
    gallery: [redRoseImg],
  },
  {
    name: "Dusty Blue",
    category: "Blue",
    note: "Perfect for baby showers (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: blueRoseImg,
    imageUrl: `${SITE_URL}/blue-rose.jpg`,
    alt: "Blue flower wall backdrop (pre-order) in Clermont, Florida",
    pinDescription:
      "Dusty Blue flower wall rental — perfect baby shower backdrop available by pre-order in Clermont, FL. 💙 bloomflowerwallrentals.com",
    gallery: [blueRoseImg],
  },
  {
    name: "Boxwood + White Cascade",
    category: "Greenery",
    note: "Classic wedding look (pre-order)",
    status: "preorder",
    leadWeeks: 8,
    image: boxwoodCascadeImg,
    imageUrl: `${SITE_URL}/boxwood-cascade.jpg`,
    alt: "Boxwood wall with white floral cascade (pre-order) in Clermont, Florida",
    pinDescription:
      "Boxwood + White Cascade flower wall rental — classic wedding backdrop available by pre-order in Clermont, FL. 🤍 bloomflowerwallrentals.com",
    gallery: [boxwoodCascadeImg],
  },
  {
    name: "Purple Garden",
    category: "Purple",
    note: "Fun + unique (pre-order)",
    status: "preorder",
    leadWeeks: 6,
    image: purpleGardenImg,
    imageUrl: `${SITE_URL}/purple-garden.jpg`,
    alt: "Purple flower wall backdrop (pre-order) in Clermont, Florida",
    pinDescription:
      "Purple Garden flower wall rental — fun unique purple floral backdrop available by pre-order in Clermont, FL. 💜 bloomflowerwallrentals.com",
    gallery: [purpleGardenImg],
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

// ─── Pinterest icon ───────────────────────────────────────────────────────────
function PinterestIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function PinterestButton({ x, style = {} }) {
  function handlePin(e) {
    e.preventDefault();
    e.stopPropagation();
    const url = encodeURIComponent(`${SITE_URL}/gallery`);
    const media = encodeURIComponent(x.imageUrl);
    const description = encodeURIComponent(x.pinDescription);
    window.open(
      `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`,
      "_blank",
      "width=750,height=550"
    );
  }
  return (
    <button
      onClick={handlePin}
      aria-label={`Save ${x.name} to Pinterest`}
      title="Save to Pinterest"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "#e60023",
        color: "#fff",
        border: "none",
        borderRadius: 2,
        padding: "6px 10px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.06em",
        cursor: "pointer",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      <PinterestIcon />
      Save
    </button>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ wall, onClose }) {
  const [index, setIndex] = useState(0);
  const images = wall.gallery;
  const total = images.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Header */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 28px",
          zIndex: 2,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              fontWeight: 400,
              color: "#f5f0e8",
            }}
          >
            {wall.name}
          </div>
          {total > 1 && (
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "rgba(245,240,232,0.45)",
                marginTop: 3,
              }}
            >
              {index + 1} / {total}
            </div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <PinterestButton x={wall} />
          <Link
            to="/contact"
            onClick={onClose}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0c0c0c",
              background: "#c9a96e",
              padding: "9px 20px",
              textDecoration: "none",
            }}
          >
            Request Quote
          </Link>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "none",
              border: "1px solid rgba(245,240,232,0.2)",
              color: "rgba(245,240,232,0.7)",
              fontSize: 18,
              cursor: "pointer",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#c9a96e";
              e.currentTarget.style.color = "#c9a96e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,240,232,0.2)";
              e.currentTarget.style.color = "rgba(245,240,232,0.7)";
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "min(900px, 90vw)",
          maxHeight: "75vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[index]}
          alt={`${wall.name} — photo ${index + 1}`}
          style={{
            maxWidth: "100%",
            maxHeight: "75vh",
            objectFit: "contain",
            display: "block",
          }}
        />
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous photo"
              style={{
                position: "absolute",
                left: -56,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(12,12,12,0.7)",
                border: "1px solid rgba(201,169,110,0.25)",
                color: "#f5f0e8",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 18,
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c9a96e";
                e.currentTarget.style.background = "rgba(201,169,110,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)";
                e.currentTarget.style.background = "rgba(12,12,12,0.7)";
              }}
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              style={{
                position: "absolute",
                right: -56,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(12,12,12,0.7)",
                border: "1px solid rgba(201,169,110,0.25)",
                color: "#f5f0e8",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 18,
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c9a96e";
                e.currentTarget.style.background = "rgba(201,169,110,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)";
                e.currentTarget.style.background = "rgba(12,12,12,0.7)";
              }}
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {total > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ display: "flex", gap: 8, marginTop: 24 }}
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === index ? "#c9a96e" : "rgba(245,240,232,0.25)",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s ease, background 0.2s",
              }}
            />
          ))}
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 20,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "rgba(245,240,232,0.25)",
          textTransform: "uppercase",
        }}
      >
        Click outside to close {total > 1 ? "· ← → to navigate" : ""}
      </div>
    </div>
  );
}

// ─── Wall card ────────────────────────────────────────────────────────────────
function WallCard({ x, isPreorder, onViewPhotos }) {
  const [hovered, setHovered] = useState(false);
  const hasMultiplePhotos = x.gallery && x.gallery.length > 1;

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

        {/* Tags */}
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
          {isPreorder ? (
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "rgba(12,12,12,0.55)",
                border: "1px solid rgba(245,240,232,0.12)",
                color: "rgba(245,240,232,0.82)",
                padding: "5px 12px",
                backdropFilter: "blur(8px)",
              }}
            >
              Pre-order · {x.leadWeeks}+ wks
            </span>
          ) : (
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "rgba(12,12,12,0.55)",
                border: "1px solid rgba(245,240,232,0.12)",
                color: "rgba(245,240,232,0.82)",
                padding: "5px 12px",
                backdropFilter: "blur(8px)",
              }}
            >
              Available Now
            </span>
          )}
        </div>

        {/* Pinterest save button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const url = encodeURIComponent(`${SITE_URL}/gallery`);
            const media = encodeURIComponent(x.imageUrl);
            const description = encodeURIComponent(x.pinDescription);
            window.open(
              `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`,
              "_blank",
              "width=750,height=550"
            );
          }}
          aria-label={`Save ${x.name} to Pinterest`}
          title="Save to Pinterest"
          className="pin-btn"
          style={{
            position: "absolute",
            top: 52,
            right: 16,
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "#e60023",
            color: "#fff",
            border: "none",
            borderRadius: 2,
            padding: "6px 10px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.06em",
            cursor: "pointer",
            opacity: 0,
            transition: "opacity 0.2s ease",
            zIndex: 10,
            whiteSpace: "nowrap",
          }}
        >
          <PinterestIcon />
          Save
        </button>

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
              marginBottom: 4,
            }}
          >
            {x.name}
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "rgba(245,240,232,0.78)",
              marginBottom: x.pricingNote ? 6 : 16,
            }}
          >
            {x.note}
          </div>
          {x.pricingNote && (
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(17px, 2vw, 20px)",
                fontWeight: 400,
                color: "#c9a96e",
                marginBottom: 16,
                letterSpacing: "0.02em",
              }}
            >
              {x.pricingNote}
            </div>
          )}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
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

            {/* ✅ View Photos — available walls only, not pre-order */}
            {!isPreorder && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewPhotos(x);
                }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.65)",
                  border: "1px solid rgba(245,240,232,0.52)",
                  padding: "9px 20px",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#c9a96e";
                  e.currentTarget.style.color = "#c9a96e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245,240,232,0.52)";
                  e.currentTarget.style.color = "rgba(245,240,232,0.65)";
                }}
              >
                {hasMultiplePhotos
                  ? `View Photos (${x.gallery.length})`
                  : "View Photo"}
              </button>
            )}

            <Link
              to="/pricing"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.65)",
                border: "1px solid rgba(245,240,232,0.52)",
                padding: "9px 20px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c9a96e";
                e.currentTarget.style.color = "#c9a96e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.52)";
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

// ─── Main Gallery page ────────────────────────────────────────────────────────
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxWall, setLightboxWall] = useState(null);

  const available = useMemo(
    () => data.filter((x) => x.status === "available"),
    []
  );
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

  const openLightbox = useCallback((wall) => setLightboxWall(wall), []);
  const closeLightbox = useCallback(() => setLightboxWall(null), []);

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
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); background-size:150px; }
        .filter-btn { font-family:'DM Sans',sans-serif; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; padding:9px 20px; border:1px solid rgba(201,169,110,0.2); background:transparent; color:rgba(245,240,232,0.78); cursor:pointer; transition:all 0.2s ease; }
        .filter-btn:hover { border-color:rgba(201,169,110,0.5); color:#c9a96e; }
        .filter-btn.active { border-color:#c9a96e; background:rgba(201,169,110,0.08); color:#c9a96e; }
        .gallery-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
        .inner { max-width:1280px; margin:0 auto; padding:0 48px; }
        .btn-gold { display:inline-flex; align-items:center; justify-content:center; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:15px 36px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        div:hover > div > .pin-btn, div:hover .pin-btn { opacity: 1 !important; }
        @media (max-width:900px) {
          .gallery-grid { grid-template-columns:repeat(2,1fr); }
          .inner { padding:0 24px; }
          .pin-btn { opacity: 0.85 !important; }
        }
        @media (max-width:520px) { .gallery-grid { grid-template-columns:1fr; } }
      `}</style>
      <div className="noise" />

      {lightboxWall && <Lightbox wall={lightboxWall} onClose={closeLightbox} />}

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
              color: "rgba(245,240,232,0.78)",
              fontWeight: 300,
              maxWidth: 480,
              marginBottom: 32,
            }}
          >
            Choose a vibe, then request a quote for your date and venue.
          </p>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(245,240,232,0.75)",
              lineHeight: 1.7,
              fontWeight: 300,
              border: "1px solid rgba(201,169,110,0.15)",
              padding: "16px 20px",
              maxWidth: 560,
            }}
          >
            <strong style={{ color: "rgba(245,240,232,0.7)", fontWeight: 500 }}>
              Delivery, setup & breakdown
            </strong>{" "}
            are available for an additional fee, quoted based on your venue
            location and logistics.
          </div>
        </div>
      </section>

      {/* ── Available Now ── */}
      <section style={{ paddingBottom: 100 }}>
        <div className="inner" style={{ paddingBottom: 48 }}>
          {eyebrow("Available Now")}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            Ready to book —{" "}
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
              no wait time
            </em>
          </h2>
        </div>
        <div className="inner">
          <div className="gallery-grid">
            {available.map((x) => (
              <WallCard
                key={x.name}
                x={x}
                isPreorder={false}
                onViewPhotos={openLightbox}
              />
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
              Sourced for you —{" "}
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                6–8+ weeks notice
              </em>
            </h2>
          </div>
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
        <div className="inner">
          <div className="gallery-grid">
            {preorder.map((x) => (
              <WallCard
                key={x.name}
                x={x}
                isPreorder
                onViewPhotos={openLightbox}
              />
            ))}
          </div>
        </div>
        <div className="inner" style={{ paddingTop: 48 }}>
          <div
            style={{
              border: "1px solid rgba(201,169,110,0.12)",
              padding: "20px 24px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(245,240,232,0.70)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "#c9a96e", fontWeight: 500 }}>Tip:</strong>{" "}
            If your event is under 6 weeks away, our available walls are your
            best bet for guaranteed availability.
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
                  color: "rgba(245,240,232,0.75)",
                  fontWeight: 300,
                }}
              >
                Send your event date + venue and I'll confirm availability and
                put together a setup that photographs beautifully.
              </p>
            </div>
            <Link to="/contact" className="btn-gold">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
