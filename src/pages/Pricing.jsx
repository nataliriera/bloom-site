import React from "react";
import { Link } from "react-router-dom";

const extras = [
  {
    title: "Custom signage",
    note: "Names, phrases, or a welcome message. Installed on the wall.",
    pill: "MOST POPULAR",
    price: "$75–$125",
  },
  {
    title: "Balloon garland",
    note: "A big visual upgrade for birthdays + showers. Color-matched options.",
    pill: "ADD-ON",
    price: "$150–$250",
  },
  {
    title: "Prop table + styling",
    note: "Simple accent table for desserts, gifts, or a styled photo moment.",
    pill: "ADD-ON",
    price: "$75–$125",
  },
  {
    title: "Extended rental time",
    note: "Need a later pickup time? Add extra hours as needed.",
    pill: "ADD-ON",
    price: "$75 / hour",
  },
  {
    title: "Neon sign",
    note: "Custom name / phrase. Great for receptions and brand moments.",
    pill: "ADD-ON",
    price: "Custom quote",
  },
  {
    title: "Pre-order wall style",
    note: "If your event is 6–8+ weeks out, we can often source another style (pricing varies by wall).",
    pill: "PRE-ORDER",
    price: "Custom quote",
  },
  {
    title: "Have an idea?",
    note: "Tell me what you're imagining — I'll help you make it happen.",
    pill: "CUSTOM",
    price: "Custom quote",
  },
];

export default function Pricing() {
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

  const colLabel = (text) => (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#c9a96e",
        marginBottom: 20,
        display: "flex",
        alignItems: "center",
        gap: 10,
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
      {text}
    </div>
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
        .pricing-grid { display:grid; grid-template-columns:1.3fr 1fr; gap:2px; background:rgba(201,169,110,0.07); margin-top:64px; }
        .pricing-main { background:#0a0a0a; padding:52px 44px; }
        .pricing-aside { background:#0e0e0e; padding:52px 36px; display:flex; flex-direction:column; gap:2px; }
        .aside-card { background:#0a0a0a; padding:28px; }
        .inner { max-width:1280px; margin:0 auto; padding:0 48px; }
        .btn-gold { display:inline-flex; align-items:center; justify-content:center; gap:10px; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:14px 32px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        .btn-outline { display:inline-flex; align-items:center; gap:10px; background:transparent; color:#f5f0e8; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:400; letter-spacing:0.14em; text-transform:uppercase; padding:13px 28px; border:1px solid rgba(245,240,232,0.2); cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-outline:hover { border-color:#c9a96e; color:#c9a96e; }
        .addon-row { border-bottom:1px solid rgba(201,169,110,0.1); padding:28px 8px; transition:background 0.2s; cursor:default; }
        .addon-row:hover { background:rgba(201,169,110,0.03); }
        .stat-row { display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-bottom:1px solid rgba(201,169,110,0.1); }
        @media (max-width:860px) {
          .pricing-grid { grid-template-columns:1fr; }
          .inner { padding:0 24px; }
          .pricing-main { padding:40px 28px; }
          .pricing-aside { padding:40px 28px; }
        }
        @media (max-width:600px) {
          .addon-inner { flex-wrap:wrap; }
        }
      `}</style>
      <div className="noise" />

      {/* Header */}
      <section style={{ padding: "100px 0 0" }}>
        <div className="inner">
          {eyebrow("Transparent Pricing")}
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
            Clear pricing,
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
              luxurious results
            </em>
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.45)",
              fontWeight: 300,
              maxWidth: 500,
              marginBottom: 28,
            }}
          >
            Flower wall rentals in Clermont, FL and surrounding areas. Packages
            start at{" "}
            <strong style={{ color: "#c9a96e", fontWeight: 500 }}>$350</strong>.
            Delivery, professional setup, and breakdown available for an
            additional fee.
          </p>
          <div
            style={{
              border: "1px solid rgba(201,169,110,0.15)",
              padding: "16px 20px",
              maxWidth: 480,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(245,240,232,0.42)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "#c9a96e", fontWeight: 500 }}>Tip:</strong>{" "}
            Weekend dates book fast — send your date early to lock in
            availability.
          </div>
        </div>
      </section>

      {/* Main pricing section */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="inner">
          <div className="pricing-grid">
            {/* Main card */}
            <div className="pricing-main">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 24,
                  marginBottom: 40,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(201,169,110,0.2)",
                      color: "#c9a96e",
                      padding: "5px 14px",
                      display: "inline-block",
                      marginBottom: 20,
                    }}
                  >
                    Flower wall rental
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(24px, 3vw, 34px)",
                      fontWeight: 400,
                      marginBottom: 12,
                    }}
                  >
                    Starting pricing
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "rgba(245,240,232,0.42)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                      maxWidth: 360,
                    }}
                  >
                    Your final quote depends on date, wall style, rental length,
                    add-ons, and delivery/setup logistics.
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(48px, 5vw, 72px)",
                      fontWeight: 300,
                      color: "#c9a96e",
                      lineHeight: 1,
                    }}
                  >
                    $350+
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "rgba(245,240,232,0.28)",
                      letterSpacing: "0.1em",
                      marginTop: 4,
                    }}
                  >
                    starting
                  </div>
                </div>
              </div>

              {/* Stat rows */}
              {/* <div
                style={{
                  borderTop: "1px solid rgba(201,169,110,0.1)",
                  marginBottom: 36,
                }}
              >
                {[
                  { k: "Rental", v: "Included" },
                  { k: "Delivery / Pick Up", v: "Additional fee" },
                  { k: "Setup / Breakdown", v: "Included" },
                ].map((row) => (
                  <div key={row.k} className="stat-row">
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.3)",
                      }}
                    >
                      {row.k}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: "#f5f0e8",
                        fontWeight: 400,
                      }}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div> */}

              {/* Bullet points */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                {[
                  {
                    bold: "Packages start at $350",
                    rest: " (varies by wall + rental length)",
                  },
                  {
                    bold: null,
                    rest: "Ideal for weddings, showers, birthdays, and brand events",
                  },
                  {
                    bold: null,
                    rest: "Add-ons like signage, balloons, and neon available",
                  },
                  {
                    bold: null,
                    rest: "Delivery/setup/breakdown pricing quoted based on venue access + location",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "rgba(245,240,232,0.42)",
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    <span
                      style={{
                        color: "#c9a96e",
                        fontSize: 10,
                        paddingTop: 4,
                        flexShrink: 0,
                      }}
                    >
                      ✦
                    </span>
                    <span>
                      {item.bold ? (
                        <strong
                          style={{
                            color: "rgba(245,240,232,0.7)",
                            fontWeight: 500,
                          }}
                        >
                          {item.bold}
                        </strong>
                      ) : null}
                      {item.rest}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  border: "1px solid rgba(201,169,110,0.12)",
                  padding: "18px 20px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(245,240,232,0.38)",
                  lineHeight: 1.7,
                  marginBottom: 36,
                  fontWeight: 300,
                }}
              >
                <strong
                  style={{ color: "rgba(245,240,232,0.6)", fontWeight: 500 }}
                >
                  Want a specific wall style?
                </strong>{" "}
                Browse available styles or request a custom/pre-order wall if
                your event is 6–8+ weeks out.
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/contact" className="btn-gold">
                  Request a Quote
                </Link>
                <Link to="/gallery" className="btn-outline">
                  Browse Styles
                </Link>
              </div>

              <p
                style={{
                  marginTop: 24,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  color: "rgba(245,240,232,0.22)",
                  lineHeight: 1.6,
                }}
              >
                Final pricing may vary based on date, rental length, add-ons,
                and venue logistics. Your quote is confirmed before booking.
              </p>
            </div>

            {/* Sidebar */}
            <div className="pricing-aside">
              <div className="aside-card">
                {colLabel("What affects the final quote")}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 0 }}
                >
                  {[
                    "Delivery/setup/breakdown based on venue location",
                    "Venue rules (stairs, tight load-in, required time windows)",
                    "Add-ons (signage, balloons, neon, styling)",
                    "Multi-day rentals or extended hours",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: "rgba(245,240,232,0.42)",
                        fontWeight: 300,
                        padding: "11px 0",
                        borderBottom: "1px solid rgba(201,169,110,0.08)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: "#c9a96e",
                          fontSize: 10,
                          paddingTop: 4,
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="aside-card">
                {colLabel("Fastest way to get a quote")}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(245,240,232,0.42)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  Send your event date, venue/city, and any inspiration. I'll
                  confirm availability and recommend a setup that photographs
                  beautifully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section style={{ background: "#090909", padding: "100px 0" }}>
        <div className="inner">
          {eyebrow("Elevate It")}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 60,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(34px, 5vw, 60px)",
                fontWeight: 300,
                lineHeight: 0.95,
              }}
            >
              Optional
              <br />
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>add-ons</em>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "rgba(245,240,232,0.38)",
                fontWeight: 300,
                maxWidth: 360,
              }}
            >
              Enhance your flower wall with custom details. Add-ons are optional
              and confirmed before booking.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(201,169,110,0.12)" }}>
            {extras.map((x, i) => (
              <div key={x.title} className="addon-row">
                <div
                  className="addon-inner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 28,
                      flex: 1,
                      minWidth: 260,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: "rgba(201,169,110,0.3)",
                        letterSpacing: "0.08em",
                        minWidth: 20,
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                          flexWrap: "wrap",
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(18px, 2vw, 24px)",
                            fontWeight: 400,
                          }}
                        >
                          {x.title}
                        </span>
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 10,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color:
                              x.pill === "MOST POPULAR"
                                ? "#c9a96e"
                                : "rgba(245,240,232,0.28)",
                          }}
                        >
                          {x.pill}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
                          color: "rgba(245,240,232,0.38)",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        {x.note}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 28,
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(18px, 2vw, 22px)",
                        color: "#c9a96e",
                        fontWeight: 300,
                      }}
                    >
                      {x.price}
                    </span>
                    <Link
                      to="/contact"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: "rgba(245,240,232,0.4)",
                        textDecoration: "none",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        transition: "color 0.2s",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#c9a96e")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(245,240,232,0.4)")
                      }
                    >
                      Ask about this →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 48,
              border: "1px solid rgba(201,169,110,0.12)",
              padding: "20px 24px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(245,240,232,0.35)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "#c9a96e", fontWeight: 500 }}>
              Notes:
            </strong>{" "}
            Delivery/setup/breakdown depends on distance, venue access, and
            timing. Pre-order walls require advance notice and a deposit to
            secure inventory. Add-ons are confirmed before booking.
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
                Ready to reserve your date?
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(245,240,232,0.42)",
                  fontWeight: 300,
                }}
              >
                Send your event date + venue and I'll confirm availability and
                recommend a setup that photographs beautifully.
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
            Book your date: send your event date + venue and we'll confirm
            availability.
          </p>
        </div>
      </section>
    </div>
  );
}
