import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import portraitImg from "../assets/about-portrait.png";
import setupImg from "../assets/about-setup.png";

function PageMeta() {
  useEffect(() => {
    const title =
      "About Natali Riera | Bloom Flower Wall Rentals — Clermont, FL";
    const desc =
      "Meet Natali Riera, owner of Bloom Flower Wall Rentals — luxury floral backdrops for weddings, showers, and events in Clermont, FL and Central Florida.";
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
      "https://bloomflowerwallrentals.com/about"
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
    canon.href = "https://bloomflowerwallrentals.com/about";
  }, []);
  return null;
}

const values = [
  {
    n: "01",
    title: "Photo-ready, every time",
    body: "Your backdrop should look stunning in person and on camera. I choose wall styles and placements that photograph beautifully.",
  },
  {
    n: "02",
    title: "Clear, honest quoting",
    body: "No hidden fees. Your quote covers the wall rental — delivery, setup, and breakdown are quoted separately so you know exactly what you're paying for.",
  },
  {
    n: "03",
    title: "Stress-free event day",
    body: "I handle the heavy lifting — delivery, professional install, and breakdown — so you can focus on your guests and your moment.",
  },
  {
    n: "04",
    title: "Built for Central Florida",
    body: "Based in Clermont and serving Orlando, Winter Garden, Kissimmee, and surrounding areas. I know local venues and what works in Florida light.",
  },
];

export default function About() {
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
        .about-inner { max-width: 1100px; margin: 0 auto; padding: 100px 48px 120px; }
        .btn-gold { display:inline-flex; align-items:center; gap:10px; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:15px 36px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        .btn-outline { display:inline-flex; align-items:center; gap:10px; background:transparent; color:#f5f0e8; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:400; letter-spacing:0.14em; text-transform:uppercase; padding:14px 28px; border:1px solid rgba(245,240,232,0.52); cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-outline:hover { border-color:#c9a96e; color:#c9a96e; }
        .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; margin-top: 64px; }
        .values-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(201,169,110,0.08); margin-top: 48px; }
        .value-card { background: #0a0a0a; padding: 36px 32px; border-bottom: 1px solid rgba(201,169,110,0.1); }
        .bottom-cta { margin-top: 80px; background: linear-gradient(135deg,#18140c 0%,#1e1a0e 100%); border: 1px solid rgba(201,169,110,0.2); padding: 40px 48px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
        .photo-strip { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(201,169,110,0.08); }
        @media (max-width: 860px) {
          .about-inner { padding: 72px 24px 96px; }
          .story-grid { grid-template-columns: 1fr; gap: 36px; }
          .values-grid { grid-template-columns: 1fr; }
          .photo-strip { grid-template-columns: 1fr; }
          .bottom-cta { flex-direction: column; align-items: flex-start; padding: 32px 28px; }
        }
      `}</style>
      <PageMeta />
      <div className="noise" />

      <div className="about-inner">
        <div style={{ maxWidth: 640 }}>
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
              marginBottom: 20,
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
            Meet Me
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(44px, 7vw, 80px)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Hi, I'm
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
              Natali Riera
            </em>
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.78)",
              fontWeight: 300,
            }}
          >
            I'm Natali — a Clermont-based flower wall rental owner serving
            weddings, bridal showers, birthdays, quinceañeras, and events
            across Central Florida. When you book Bloom, you work directly with
            me, from first message to final breakdown.
          </p>
        </div>

        <div className="story-grid">
          <div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(245,240,232,0.78)",
                fontWeight: 300,
                marginBottom: 20,
              }}
            >
              I started Bloom because every event deserves a backdrop that feels
              intentional — not an afterthought. Whether it's a soft white garden
              for a wedding or a bold colorful wall for a birthday, I help you
              create a focal point your guests will remember (and photograph).
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(245,240,232,0.78)",
                fontWeight: 300,
                marginBottom: 32,
              }}
            >
              When you book Bloom, you work directly with me — not a call center
              or a big team. I show up, set up your wall, and make sure it looks
              perfect before your guests arrive. You bring the vision — I bring
              the wall.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link to="/contact" className="btn-gold">
                Request a Quote
              </Link>
              <Link to="/gallery" className="btn-outline">
                View Wall Styles
              </Link>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              overflow: "hidden",
            }}
          >
            <img
              src={portraitImg}
              alt="Natali Riera, owner of Bloom Flower Wall Rentals"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                opacity: 0.92,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.65) 100%)",
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: 100 }}>
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
              marginBottom: 20,
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
            What I Stand For
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            More than a{" "}
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
              pretty wall
            </em>
          </h2>

          <div className="values-grid">
            {values.map((v) => (
              <div key={v.n} className="value-card">
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#c9a96e",
                    opacity: 0.6,
                    marginBottom: 14,
                  }}
                >
                  {v.n}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 400,
                    marginBottom: 12,
                    lineHeight: 1.15,
                  }}
                >
                  {v.title}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.75)",
                    fontWeight: 300,
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="photo-strip" style={{ marginTop: 80 }}>
          <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
            <img
              src={setupImg}
              alt="Natali Riera setting up a colorful flower wall at an event"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%",
                opacity: 0.9,
              }}
            />
          </div>
          <div
            style={{
              background: "#090909",
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              "I'd love to hear about your event."
            </p>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.72)",
                fontWeight: 300,
                marginBottom: 24,
              }}
            >
              Send your date, venue, and the vibe you're going for. I typically
              reply within 24 hours with availability and a custom quote.
            </p>
            <a
              href="mailto:info@bloomflowerwallrentals.com"
              style={{
                fontSize: 13,
                color: "#c9a96e",
                textDecoration: "none",
                letterSpacing: "0.04em",
                marginBottom: 8,
              }}
            >
              info@bloomflowerwallrentals.com
            </a>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                color: "rgba(245,240,232,0.45)",
                fontStyle: "italic",
              }}
            >
              — Natali
            </span>
          </div>
        </div>

        <div className="bottom-cta">
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 400,
                marginBottom: 8,
              }}
            >
              Ready to see if your date is open?
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(245,240,232,0.72)",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              Packages start at $350. Delivery, setup, and breakdown are quoted
              separately based on your venue.
            </p>
          </div>
          <Link to="/contact" className="btn-gold">
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
}
