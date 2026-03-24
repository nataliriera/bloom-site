import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const walls = [
  {
    name: "White Garden",
    size: "8×8",
    vibe: "Soft, photo-ready whites",
    img: "/white-wall.png",
    tag: "Most Popular",
  },
  {
    name: "Enchanted Garden",
    size: "8×8",
    vibe: "Colorful, playful florals",
    img: "/enchanted-garden.jpg",
    tag: "Most Popular",
  },
  {
    name: "Blush Romance",
    size: "8×8",
    vibe: "Warm pinks for showers",
    img: "/blush-ombre.jpg",
    tag: "New",
  },
  {
    name: "Luxe",
    size: "8×8",
    vibe: "Timeless Romance",
    img: "/red-rose.jpg",
    tag: "Elegant",
  },
  {
    name: "Mixed Meadow",
    size: "8×8",
    vibe: "Colorful, playful florals",
    img: "/pink-mix.jpg",
    tag: "Fun",
  },
];

const recentSetups = [
  "/setup-1.jpg",
  "/setup-2.jpg",
  "/setup-3.jpg",
  "/setup-4.jpg",
  "/setup-5.jpg",
  "/setup-6.jpg",
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We're based in Clermont, FL and serve surrounding areas. Travel is quoted based on venue location.",
  },
  {
    q: "Is delivery and setup included?",
    a: "Delivery, professional setup, and breakdown are available for an additional fee, quoted by venue location and logistics.",
  },
  {
    q: "How long does setup take?",
    a: "Most installs take about 30–60 minutes depending on venue access and chosen add-ons.",
  },
  {
    q: "Can the wall be used outdoors?",
    a: "Yes, with restrictions. Outdoor setups require stable, dry conditions and a suitable surface. We'll confirm during quoting.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes — your date is reserved with a retainer. Remaining balance is due before the event.",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ children, delay = 0, y = 36 }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${y}px)`,
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Marquee({ items, speed = 45 }) {
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: "hidden", display: "flex", userSelect: "none" }}>
      <div
        style={{
          display: "flex",
          animation: `marquee ${speed}s linear infinite`,
          whiteSpace: "nowrap",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              padding: "0 28px",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(14px, 2vw, 22px)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(245,240,232,0.45)",
              letterSpacing: "0.02em",
            }}
          >
            {item}
            <span style={{ color: "#c9a96e", fontSize: "0.55em" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((o) => !o)}
      style={{
        borderBottom: "1px solid rgba(201,169,110,0.15)",
        padding: "24px 0",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(17px, 2vw, 22px)",
            fontWeight: 400,
            lineHeight: 1.3,
            color: "#f5f0e8",
          }}
        >
          {q}
        </span>
        <span
          style={{
            color: "#c9a96e",
            fontSize: 24,
            fontWeight: 200,
            flexShrink: 0,
            display: "inline-block",
            transition: "transform 0.35s ease",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </div>

      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? 220 : 0,
          transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <p
          style={{
            marginTop: 16,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: "rgba(245,240,232,0.5)",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bloom Flower Wall Rentals",
  description:
    "Luxury flower wall rentals for weddings, baby showers, birthdays, and events in Clermont, FL and surrounding areas. Delivery, setup, and breakdown available.",
  url: "https://bloomflowerwallrentals.com",
  telephone: "",
  email: "info@bloomflowerwallrentals.com",
  image: "https://bloomflowerwallrentals.com/white-wall.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Clermont",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5494,
    longitude: -81.7729,
  },
  areaServed: [
    { "@type": "City", name: "Clermont" },
    { "@type": "City", name: "Minneola" },
    { "@type": "City", name: "Groveland" },
    { "@type": "City", name: "Winter Garden" },
    { "@type": "City", name: "Windermere" },
    { "@type": "City", name: "Kissimmee" },
    { "@type": "City", name: "Orlando" },
    { "@type": "City", name: "Davenport" },
  ],
  serviceType: [
    "Flower Wall Rental",
    "Wedding Backdrop Rental",
    "Event Decor Rental",
    "Photo Backdrop Rental",
  ],
  sameAs: ["https://www.instagram.com/bloomflowerwallrentals"],
};

function PageMeta() {
  useEffect(() => {
    document.title =
      "Bloom Flower Wall Rentals | Clermont, FL — Luxury Backdrops for Weddings & Events";

    const setMeta = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, val);
    };

    setMeta(
      'meta[name="description"]',
      "content",
      "Bloom Flower Wall Rentals — luxurious flower wall backdrops for weddings, showers, and events in Clermont, FL and surrounding areas. White, blush, ivory & mixed styles. Delivery, setup & breakdown available."
    );
    setMeta(
      'meta[property="og:title"]',
      "content",
      "Bloom Flower Wall Rentals | Clermont, FL"
    );
    setMeta(
      'meta[property="og:description"]',
      "content",
      "Luxury flower wall rentals for weddings & events in Clermont, FL. White, blush, ivory, and mixed styles. Delivery + setup available."
    );
    setMeta(
      'meta[property="og:url"]',
      "content",
      "https://bloomflowerwallrentals.com/"
    );
    setMeta(
      'meta[property="og:image"]',
      "content",
      "https://bloomflowerwallrentals.com/white-wall.png"
    );
    setMeta(
      'meta[property="og:image:alt"]',
      "content",
      "White garden flower wall by Bloom Flower Wall Rentals"
    );
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta(
      'meta[name="twitter:title"]',
      "content",
      "Bloom Flower Wall Rentals | Clermont, FL"
    );
    setMeta(
      'meta[name="twitter:description"]',
      "content",
      "Luxury flower wall backdrops for weddings & events. Serving Clermont, FL and surrounding areas."
    );
    setMeta(
      'meta[name="twitter:image"]',
      "content",
      "https://bloomflowerwallrentals.com/white-wall.png"
    );

    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = "https://bloomflowerwallrentals.com/";

    let ld = document.getElementById("ld-localbusiness");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-localbusiness";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(SCHEMA);
  }, []);

  return null;
}

const POPUP_ENDPOINT = "https://formspree.io/f/xjgeqaqq";
const POPUP_KEY = "bloom_popup_dismissed";

function EmailPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("sending");

    try {
      const res = await fetch(POPUP_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "10% Discount Signup — Bloom Flower Wall Rentals",
          source: "Homepage exit-intent popup",
          discount: "BLOOM10",
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error();

      setStatus("success");
      localStorage.setItem(POPUP_KEY, "1");
    } catch {
      setStatus("error");
    }
  }

  function dismiss() {
    setVisible(false);
    setTimeout(onClose, 400);
  }

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 520,
          background: "#0e0e0e",
          border: "1px solid rgba(201,169,110,0.25)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 3,
            background: "linear-gradient(90deg, #c9a96e, #e8d5a8, #c9a96e)",
          }}
        />

        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(245,240,232,0.35)",
            fontSize: 20,
            lineHeight: 1,
            padding: 4,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#c9a96e")}
          onMouseLeave={(e) =>
            (e.target.style.color = "rgba(245,240,232,0.35)")
          }
        >
          ✕
        </button>

        <div style={{ padding: "44px 44px 40px" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "16px 0 8px" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 48,
                  color: "#c9a96e",
                  marginBottom: 16,
                }}
              >
                ✦
              </div>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(26px, 4vw, 36px)",
                  fontWeight: 300,
                  marginBottom: 12,
                }}
              >
                You're in!
              </h2>

              <p
                style={{
                  fontSize: 14,
                  color: "rgba(245,240,232,0.55)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: 20,
                }}
              >
                We'll email your discount code shortly. Use it when requesting a
                quote.
              </p>

              <div
                style={{
                  background: "#131313",
                  border: "1px solid rgba(201,169,110,0.2)",
                  padding: "18px 24px",
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.4)",
                    marginBottom: 10,
                  }}
                >
                  Your discount code
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 32,
                    fontWeight: 400,
                    color: "#c9a96e",
                    letterSpacing: "0.12em",
                  }}
                >
                  BLOOM10
                </div>
              </div>

              <button
                onClick={dismiss}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.4)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 18,
                    height: 1,
                    background: "#c9a96e",
                  }}
                />
                Limited Time
              </p>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px, 5vw, 42px)",
                  fontWeight: 300,
                  lineHeight: 1.0,
                  letterSpacing: "-0.01em",
                  marginBottom: 14,
                }}
              >
                10% off your
                <br />
                <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                  first rental
                </em>
              </h2>

              <p
                style={{
                  fontSize: 13,
                  color: "rgba(245,240,232,0.5)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: 28,
                }}
              >
                Drop your email and we'll send your discount code — plus
                priority availability updates when new wall styles arrive.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div style={{ display: "flex", gap: 0 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address"
                    inputMode="email"
                    autoComplete="email"
                    style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(201,169,110,0.25)",
                      borderRight: "none",
                      color: "#f5f0e8",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      padding: "13px 16px",
                      outline: "none",
                      minWidth: 0,
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(201,169,110,0.6)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(201,169,110,0.25)")
                    }
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      background: "#c9a96e",
                      color: "#0c0c0c",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "13px 22px",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "background 0.2s",
                      opacity: status === "sending" ? 0.7 : 1,
                    }}
                  >
                    {status === "sending" ? "…" : "Get 10% Off"}
                  </button>
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    style={{ fontSize: 11, color: "rgba(220,100,100,0.85)" }}
                  >
                    Something went wrong. Try emailing us directly.
                  </p>
                )}
              </form>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 11,
                  color: "rgba(245,240,232,0.22)",
                  lineHeight: 1.6,
                }}
              >
                No spam. Unsubscribe anytime. Code applies to your first
                booking.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [heroIn, setHeroIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(POPUP_KEY)) return;

    let triggered = false;

    function onMouseOut(e) {
      if (triggered) return;
      if (e.clientY <= 8 && e.relatedTarget === null) {
        triggered = true;
        setShowPopup(true);
      }
    }

    const fallback = setTimeout(() => {
      if (!triggered && !localStorage.getItem(POPUP_KEY)) {
        triggered = true;
        setShowPopup(true);
      }
    }, 45000);

    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(fallback);
    };
  }, []);

  // Load Behold widget script once
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://w.behold.so/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.appendChild(script);
    }
  }, []);

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
        marginBottom: 18,
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
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <PageMeta />
      {showPopup && <EmailPopup onClose={() => setShowPopup(false)} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
        :root { --gold: #c9a96e; --cream: #f5f0e8; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes slowpan { 0% { transform: scale(1.0); } 100% { transform: scale(1.08) translateX(-1.5%); } }
        @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.25; } }

        .wall-card .wall-img { transition: transform 1s cubic-bezier(0.16,1,0.3,1); }
        .wall-card:hover .wall-img { transform: scale(1.07); }

        .btn-gold {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--gold); color: #0c0c0c;
          font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 15px 36px; border: none; cursor: pointer;
          text-decoration: none; transition: all 0.25s ease;
          white-space: nowrap;
        }
        .btn-gold:hover { background: #d4b280; letter-spacing: 0.18em; }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: var(--cream);
          font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 400;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 14px 36px; border: 1px solid rgba(245,240,232,0.2);
          cursor: pointer; text-decoration: none; transition: all 0.25s ease;
          white-space: nowrap;
        }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); }

        .ig-follow { transition: opacity 0.2s; }
        .ig-follow:hover { opacity: 1 !important; }
        .ig-follow:hover span { color: #c9a96e !important; }

        .noise {
          position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 150px;
        }

        .photo-img { transition: transform 0.9s ease, opacity 0.3s; width: 100%; height: 100%; object-fit: cover; opacity: 0.82; }
        .photo-img:hover { transform: scale(1.04); opacity: 1; }
        .addon-row { transition: background 0.2s; }
        .addon-row:hover { background: rgba(201,169,110,0.03); }

        .ig-cell:hover img { transform: scale(1.06); opacity: 1; }
        .ig-cell:hover .ig-overlay { opacity: 1 !important; }
        @media (max-width: 900px) { .ig-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 580px) { .ig-grid { grid-template-columns: repeat(2, 1fr) !important; } }

        .hero-content { padding: 0 48px 80px; }
        .section-pad { padding: 100px 48px; }
        .section-pad-tb { padding-top: 100px; padding-bottom: 100px; }
        .inner { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .inner-narrow { max-width: 860px; margin: 0 auto; padding: 0 48px; }

        .walls-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .photos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; }
        .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: rgba(201,169,110,0.08); }
        .addons-header-row { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 24px; margin-bottom: 68px; }
        .section-header-row { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
        .addon-inner { display: flex; align-items: center; gap: 32px; flex: 1; min-width: 240px; }

        @media (max-width: 900px) {
          .walls-grid { grid-template-columns: repeat(2, 1fr); }
          .steps-grid { grid-template-columns: 1fr; }
          .photos-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-content { padding: 0 24px 60px; }
          .inner { padding: 0 24px; }
          .inner-narrow { padding: 0 24px; }
          .section-pad { padding: 80px 24px; }
          .addon-inner { flex-wrap: wrap; gap: 12px; }
          .addons-header-row { flex-direction: column; align-items: flex-start; }
          .section-header-row { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 580px) {
          .walls-grid { grid-template-columns: 1fr; }
          .photos-grid { grid-template-columns: 1fr; }
          .hero-btns { flex-direction: column; align-items: flex-start; }
          .btn-gold, .btn-outline { width: 100%; justify-content: center; }
          .addon-row { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <div className="noise" />

      {/* ══════════ 1. HERO ══════════ */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 580,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/white-wall.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.2) saturate(0.45)",
              animation: "slowpan 20s ease-in-out infinite alternate",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.55) 45%, rgba(12,12,12,0.15) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 60% at 65% 25%, rgba(201,169,110,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            display: "flex",
            alignItems: "center",
            gap: 9,
            opacity: heroIn ? 1 : 0,
            transition: "opacity 1s ease 1.3s",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#c9a96e",
              display: "block",
              animation: "pulse-dot 2.2s ease infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.45)",
            }}
          >
            Now Booking
          </span>
        </div>

        <div
          className="hero-content"
          style={{
            position: "relative",
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              opacity: heroIn ? 1 : 0,
              transform: heroIn ? "none" : "translateY(14px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
            }}
          >
            {eyebrow("Clermont, FL · Luxury Flower Wall Rentals")}
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(52px, 10vw, 136px)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              marginBottom: 40,
              opacity: heroIn ? 1 : 0,
              transform: heroIn ? "none" : "translateY(32px)",
              transition: "opacity 1.1s ease 0.22s, transform 1.1s ease 0.22s",
            }}
          >
            Your event,
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
              unforgettable.
            </em>
          </h1>

          <div
            className="hero-btns"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              alignItems: "center",
              opacity: heroIn ? 1 : 0,
              transform: heroIn ? "none" : "translateY(18px)",
              transition: "opacity 1s ease 0.42s, transform 1s ease 0.42s",
            }}
          >
            <Link to="/contact" className="btn-gold">
              Check Availability
            </Link>
            <a href="#walls" className="btn-outline">
              View Walls
            </a>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "rgba(245,240,232,0.38)",
                fontWeight: 300,
              }}
            >
              From{" "}
              <strong style={{ color: "#c9a96e", fontWeight: 500 }}>
                $350
              </strong>
            </span>
          </div>

          <a
            href="https://instagram.com/bloomflowerwallrentals"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-follow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 24,
              textDecoration: "none",
              opacity: heroIn ? 0.55 : 0,
              transition: "opacity 1s ease 0.65s",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c9a96e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="#c9a96e" stroke="none" />
            </svg>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "rgba(245,240,232,0.55)",
                letterSpacing: "0.1em",
              }}
            >
              Follow us @bloomflowerwallrentals
            </span>
          </a>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            opacity: heroIn ? 0.4 : 0,
            transition: "opacity 1s ease 1.6s",
          }}
        >
          <div
            style={{
              width: 1,
              height: 48,
              background: "linear-gradient(180deg, #c9a96e, transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#c9a96e",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ══════════ 2. MARQUEE ══════════ */}
      <div
        style={{
          borderTop: "1px solid rgba(201,169,110,0.12)",
          borderBottom: "1px solid rgba(201,169,110,0.12)",
          padding: "18px 0",
          background: "#0e0e0e",
        }}
      >
        <Marquee
          items={[
            "Flower Wall Rentals",
            "Weddings",
            "Baby Showers",
            "Birthday Events",
            "Brand Activations",
            "Neon Signs",
            "Custom Signage",
            "Balloon Installs",
            "Clermont FL",
          ]}
        />
      </div>

      {/* ══════════ 3. WALL GALLERY ══════════ */}
      <section id="walls" style={{ paddingTop: 100 }}>
        <div className="inner" style={{ paddingBottom: 52 }}>
          <Reveal>
            <div className="section-header-row">
              <div>
                {eyebrow("Our Collection")}
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(38px, 6vw, 78px)",
                    fontWeight: 300,
                    lineHeight: 0.95,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Choose your
                  <br />
                  <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                    flower wall
                  </em>
                </h2>
              </div>
              <Link to="/gallery" className="btn-outline">
                Full Gallery →
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="walls-grid">
          {walls.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.08}>
              <div
                className="wall-card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  background: "#111",
                  cursor: "pointer",
                }}
              >
                <img
                  className="wall-img"
                  src={w.img}
                  alt={`${w.name} flower wall`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.72,
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 28%, rgba(12,12,12,0.92) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    background: "rgba(12,12,12,0.5)",
                    border: "1px solid rgba(201,169,110,0.35)",
                    color: "#c9a96e",
                    padding: "5px 12px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {w.tag}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(22px, 3vw, 30px)",
                      fontWeight: 400,
                      lineHeight: 1.05,
                      marginBottom: 6,
                    }}
                  >
                    {w.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "rgba(245,240,232,0.48)",
                      letterSpacing: "0.06em",
                      marginBottom: 16,
                    }}
                  >
                    {w.size} · {w.vibe}
                  </div>
                  <Link
                    to="/contact"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "#c9a96e",
                      textDecoration: "none",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Check Date →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ 5. QUOTE BREAK ══════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "110px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(201,169,110,0.065) 0%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(201,169,110,0.18) 50%, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(201,169,110,0.18) 50%, transparent)",
          }}
        />
        <Reveal y={20}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(16px, 2.5vw, 26px)",
                color: "#c9a96e",
                opacity: 0.5,
                display: "block",
                marginBottom: 24,
                letterSpacing: "0.12em",
              }}
            >
              ✦ ✦ ✦
            </span>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(30px, 5.5vw, 76px)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                color: "#f5f0e8",
              }}
            >
              "Weekends fill fast —<br />
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                secure your date early.
              </em>
              "
            </p>
            <div style={{ marginTop: 44 }}>
              <Link
                to="/contact"
                className="btn-gold"
                style={{ fontSize: 13, padding: "16px 48px" }}
              >
                Check Availability
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════ 6. HOW IT WORKS ══════════ */}
      <section style={{ padding: "100px 0", background: "#090909" }}>
        <div className="inner">
          <Reveal>
            {eyebrow("The Process")}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                marginBottom: 64,
              }}
            >
              Simple from first call
              <br />
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                to final setup
              </em>
            </h2>
          </Reveal>

          <div className="steps-grid">
            {[
              {
                n: "01",
                title: "Tell us your date & vibe",
                body: "Share your event date, venue, and the style you're imagining. More detail means a better quote.",
              },
              {
                n: "02",
                title: "Receive your custom quote",
                body: "We confirm availability and send full pricing.",
              },
              {
                n: "03",
                title: "You're on the calendar",
                body: "Reserve your date with a retainer. Add-ons like neon and signage can be layered in anytime.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div
                  style={{
                    background: "#090909",
                    padding: "44px 36px",
                    height: "100%",
                    minHeight: 240,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 24,
                      right: 28,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 80,
                      fontWeight: 300,
                      color: "rgba(201,169,110,0.06)",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {step.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "#c9a96e",
                      opacity: 0.6,
                      marginBottom: 18,
                    }}
                  >
                    Step {step.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(20px, 2vw, 26px)",
                      fontWeight: 400,
                      marginBottom: 14,
                      lineHeight: 1.15,
                    }}
                  >
                    {step.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "rgba(245,240,232,0.42)",
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 44,
                flexWrap: "wrap",
              }}
            >
              <Link to="/contact" className="btn-gold">
                Check Availability
              </Link>
              <Link to="/pricing" className="btn-outline">
                View Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ 7. ADD-ONS ══════════ */}
      <section style={{ background: "#080808", padding: "100px 0" }}>
        <div className="inner">
          <Reveal>
            <div className="addons-header-row">
              <div>
                {eyebrow("Elevate It")}
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(34px, 5vw, 68px)",
                    fontWeight: 300,
                    lineHeight: 0.95,
                  }}
                >
                  Make it
                  <br />
                  <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                    completely yours
                  </em>
                </h2>
              </div>
            </div>
          </Reveal>

          <div style={{ borderTop: "1px solid rgba(201,169,110,0.12)" }}>
            {[
              {
                n: "01",
                title: "Neon Signs",
                text: "Statement glow — beloved at weddings and showers.",
              },
              {
                n: "02",
                title: "Custom Signage",
                text: "Names, dates, or branded moments, beautifully lettered.",
              },
              {
                n: "03",
                title: "Balloon Installs",
                text: "Organic garlands paired perfectly with your wall.",
              },
              {
                n: "04",
                title: "Extra Florals",
                text: "Added volume and accent blooms for a richer look.",
              },
            ].map((a, i) => (
              <Reveal key={a.title} delay={i * 0.07}>
                <div
                  className="addon-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    padding: "28px 8px",
                    borderBottom: "1px solid rgba(201,169,110,0.1)",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="addon-inner">
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: "rgba(201,169,110,0.35)",
                        letterSpacing: "0.08em",
                        minWidth: 22,
                        flexShrink: 0,
                      }}
                    >
                      {a.n}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(20px, 2.2vw, 30px)",
                        fontWeight: 400,
                        flexShrink: 0,
                      }}
                    >
                      {a.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: "rgba(245,240,232,0.38)",
                        fontWeight: 300,
                      }}
                    >
                      {a.text}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "#c9a96e",
                      textDecoration: "none",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    Request Quote →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 8. FAQ ══════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="inner-narrow">
          <Reveal>
            {eyebrow("Common Questions")}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(34px, 5vw, 64px)",
                fontWeight: 300,
                lineHeight: 1,
                marginBottom: 56,
              }}
            >
              Before you{" "}
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                reach out
              </em>
            </h2>
          </Reveal>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <FAQItem q={f.q} a={f.a} />
            </Reveal>
          ))}
          <Reveal delay={0.28}>
            <Link
              to="/faq"
              style={{
                display: "inline-block",
                marginTop: 44,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#c9a96e",
                textDecoration: "none",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              View Full FAQ →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════ 9. INSTAGRAM GRID ══════════ */}
      <section style={{ padding: "100px 0", background: "#0a0a0a" }}>
        <div className="inner" style={{ paddingBottom: 52 }}>
          <Reveal>
            <div className="section-header-row">
              <div>
                {eyebrow("Follow Along")}
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(34px, 5vw, 68px)",
                    fontWeight: 300,
                    lineHeight: 0.95,
                    letterSpacing: "-0.01em",
                  }}
                >
                  See us on
                  <br />
                  <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                    Instagram
                  </em>
                </h2>
              </div>
              <a
                href="https://instagram.com/bloomflowerwallrentals"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                @bloomflowerwallrentals →
              </a>
            </div>
          </Reveal>
        </div>

        <div
          style={{
            padding: "0 24px 36px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div data-behold-id="qDJTl17ooRzEHgeQ0dBq"></div>
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Reveal>
            <a
              href="https://instagram.com/bloomflowerwallrentals"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#c9a96e",
                textDecoration: "none",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              View all posts on Instagram →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══════════ 10. FOOTER CTA ══════════ */}
      <section
        style={{
          padding: "80px 24px",
          borderTop: "1px solid rgba(201,169,110,0.1)",
          textAlign: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            {eyebrow("Get in Touch")}
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              marginBottom: 32,
            }}
          >
            Want a full quote with add-ons?
          </h2>
          <Link to="/contact" className="btn-gold">
            Request a Quote
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
