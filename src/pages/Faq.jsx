import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "booking",
    label: "Booking & Availability",
    questions: [
      {
        q: "How far in advance should I book?",
        a: "We recommend 4–6 weeks, especially for weekends. If your date is sooner, message us — last-minute availability happens. For pre-order wall styles, you'll need 6–8+ weeks notice.",
      },
      {
        q: "How do I book?",
        a: "Send your event date, venue/city, and your vibe (or inspo photos). We'll confirm availability, share your quote, and lock it in once the deposit is paid.",
      },
      {
        q: "What is your deposit policy?",
        a: "A deposit reserves your date and is applied toward your total. The remaining balance is due one week before your event. For pre-order or custom styles, deposits may be higher and are typically non-refundable because inventory is purchased specifically for your event.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept Zelle, Venmo, and major credit/debit cards. Card payments may include a small processing fee. Zelle and Venmo are always free.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Deposits are non-refundable. If you need to reschedule, we'll do our best to accommodate a new date based on availability. Please reach out as soon as possible — the more notice, the better.",
      },
      {
        q: "What's the starting price?",
        a: "Packages start at $350. Your final quote depends on your wall style, add-ons, and delivery/setup/breakdown logistics.",
      },
    ],
  },
  {
    id: "walls",
    label: "Wall Styles & Sizing",
    questions: [
      {
        q: "What wall styles do you have available right now?",
        a: "We currently have four walls available immediately: White Garden (classic white florals), The Enchanted Garden (colorful mixed blooms), Tropical Oasis (lush tropical greenery), and Midnight Noir (dramatic dark florals). All walls are 8×8 feet.",
      },
      {
        q: "How big are the flower walls?",
        a: "All of our walls are 8 feet wide by 8 feet tall. This is large enough to fit a full group photo, a sweetheart table backdrop, or a dessert table feature — and fills a wall beautifully without overwhelming a space. Plan for at least an 8ft wide area plus a little room on the sides.",
      },
      {
        q: "Can I request a different style wall?",
        a: "Yes! If your event is 6–8+ weeks away, we can often source additional wall styles including blush ombré, red rose, dusty blue, purple garden, and more. Pre-order styles require advance notice and a deposit to secure inventory. Visit our gallery page to browse all options.",
      },
      {
        q: "Are the flowers real?",
        a: "No — all of our walls use high-quality artificial florals. This means they look lush and fresh all day without wilting, are safe for indoor and outdoor use (with some restrictions), and are more budget-friendly than fresh floral installations.",
      },
      {
        q: "Can I see the walls before booking?",
        a: "We don't have a permanent showroom, but you can see our walls in action on our Instagram @bloomflowerwallrentals and on our gallery page. If you want to connect in person, reach out — we're happy to chat!",
      },
    ],
  },
  {
    id: "delivery",
    label: "Delivery & Setup",
    questions: [
      {
        q: "Is delivery and setup included in the rental price?",
        a: "Delivery, professional setup, and breakdown are available for an additional fee, quoted based on venue location and logistics. We'll include the full delivery quote so there are no surprises.",
      },
      {
        q: "What areas do you serve?",
        a: "We're based in Clermont, FL and serve all of Central Florida including Orlando, Winter Garden, Windermere, Minneola, Groveland, Kissimmee, and Davenport. Not sure if we cover your area? Send us a message and we'll let you know.",
      },
      {
        q: "How long does setup take?",
        a: "Typically 30–60 minutes, depending on venue access, distance from parking/load-in, and any add-ons. We'll coordinate timing with your venue when needed.",
      },
      {
        q: "Can the wall be used outdoors?",
        a: "Sometimes. Outdoor setups require safe conditions — low wind, shade when possible, and a flat stable surface. We'll confirm weather and placement details during quoting to keep everything secure and photo-ready.",
      },
      {
        q: "What is your weather policy for outdoor events?",
        a: "If weather conditions are unsafe (high wind, heavy rain, lightning), we may need to move the setup indoors or reschedule based on availability. We'll communicate early and work with you on the best option.",
      },
      {
        q: "Do you stay for the event?",
        a: "We don't typically stay for the full event — we set up before guests arrive and return for breakdown at the agreed pickup time. If you need us on-site during the event, let us know and we can discuss options.",
      },
      {
        q: "What if something gets damaged during the event?",
        a: "Normal wear is expected. Significant damage (broken panels/stands, missing items, heavy staining) may result in a repair or replacement fee. We'll always communicate clearly and handle it case-by-case.",
      },
    ],
  },
  {
    id: "addons",
    label: "Add-Ons & Customization",
    questions: [
      {
        q: "What add-ons are available?",
        a: "We offer custom acrylic signage (names, phrases, welcome messages), balloon garlands, neon signs, and prop table styling. Add-ons are optional and priced separately — visit our pricing page for current rates.",
      },
      {
        q: "Are neon signs included in the base price?",
        a: "No — neon signs are optional add-ons and are not included unless listed in your quote. They're custom quoted based on your text and style.",
      },
      {
        q: "Can I add a custom name or phrase to the wall?",
        a: "Yes! Custom acrylic signs are one of our most popular add-ons. They attach directly to the wall and make for incredible photos. Pricing starts at $75 depending on size and complexity.",
      },
      {
        q: "Can I mix and match add-ons?",
        a: "Absolutely. Your quote is fully customizable. Just tell us what you're imagining — signage, balloons, neon, styling — and we'll build a quote that fits your vision and budget.",
      },
    ],
  },
  {
    id: "events",
    label: "Events & Use Cases",
    questions: [
      {
        q: "What types of events do you serve?",
        a: "We serve weddings, bridal showers, baby showers, birthdays, quinceañeras, sweet 16s, graduation parties, corporate events, brand activations, grand openings, and more. If you're celebrating something, we're in!",
      },
      {
        q: "Can the wall be used as a ceremony backdrop?",
        a: "Yes! Flower walls make beautiful ceremony backdrops, especially for intimate weddings and vow renewals. The 8×8 size is perfect for a sweetheart setting. We recommend pairing it with our custom signage add-on for a complete look.",
      },
      {
        q: "Can I use the wall for a corporate event or pop-up?",
        a: "Absolutely — flower walls are a huge hit at brand activations, product launches, and pop-ups. They double as a branded photo moment that guests share on social. We can add custom signage with your logo or brand name.",
      },
      {
        q: "Do you do same-day bookings?",
        a: "Occasionally — if a wall is available and logistics allow, we'll do our best to make it work. Reach out as soon as possible. We always recommend booking in advance to guarantee your date.",
      },
    ],
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((o) => !o)}
      style={{
        borderBottom: "1px solid rgba(201,169,110,0.12)",
        padding: "26px 0",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 20,
            flex: 1,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              color: "rgba(201,169,110,0.35)",
              letterSpacing: "0.08em",
              minWidth: 22,
              paddingTop: 3,
              flexShrink: 0,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
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
        </div>
        <span
          style={{
            color: "#c9a96e",
            fontSize: 22,
            fontWeight: 200,
            flexShrink: 0,
            display: "inline-block",
            transition: "transform 0.35s ease",
            transform: open ? "rotate(45deg)" : "none",
            paddingTop: 2,
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? 400 : 0,
          transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <p
          style={{
            marginTop: 16,
            marginLeft: 42,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: "rgba(245,240,232,0.80)",
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

function PageMeta() {
  useEffect(() => {
    const t = "FAQ | Bloom Flower Wall Rentals — Clermont, FL";
    const d =
      "Answers to common questions about flower wall rentals in Clermont, FL. Pricing, delivery, booking, add-ons, and more. Serving all of Central Florida.";
    document.title = t;
    const m = (sel, a, v) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(a, v);
    };
    m('meta[name="description"]', "content", d);
    m('meta[property="og:title"]', "content", t);
    m('meta[property="og:description"]', "content", d);
    m(
      'meta[property="og:url"]',
      "content",
      "https://bloomflowerwallrentals.com/faq"
    );
    m('meta[name="twitter:card"]', "content", "summary");
    let c = document.querySelector('link[rel="canonical"]');
    if (!c) {
      c = document.createElement("link");
      c.rel = "canonical";
      document.head.appendChild(c);
    }
    c.href = "https://bloomflowerwallrentals.com/faq";

    // FAQ Schema — makes Q&As appear directly in Google search results
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: categories.flatMap((cat) =>
        cat.questions.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        }))
      ),
    };
    let ld = document.getElementById("ld-faq");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-faq";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(faqSchema);
  }, []);
  return null;
}

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("booking");

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

  const activeQuestions =
    categories.find((c) => c.id === activeCategory)?.questions || [];

  return (
    <div
      style={{
        background: "#0c0c0c",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <PageMeta />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .noise { position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:0.025;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:150px; }
        .faq-grid { display:grid; grid-template-columns:1.4fr 1fr; gap:2px; background:rgba(201,169,110,0.07); margin-top:64px; }
        .faq-main { background:#0a0a0a; padding:52px 44px; }
        .faq-aside { background:#0e0e0e; padding:52px 36px; display:flex; flex-direction:column; gap:2px; }
        .aside-card { background:#0a0a0a; padding:28px; }
        .inner { max-width:1280px; margin:0 auto; padding:0 48px; }
        .btn-gold { display:inline-flex; align-items:center; gap:10px; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:14px 32px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        .btn-outline { display:inline-flex; align-items:center; gap:10px; background:transparent; color:#f5f0e8; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:400; letter-spacing:0.14em; text-transform:uppercase; padding:13px 28px; border:1px solid rgba(245,240,232,0.52); cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-outline:hover { border-color:#c9a96e; color:#c9a96e; }
        .cat-btn { display:block; width:100%; text-align:left; background:none; border:none; border-bottom:1px solid rgba(201,169,110,0.08); cursor:pointer; font-family:'DM Sans',sans-serif; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; padding:13px 0; color:rgba(245,240,232,0.5); transition:color 0.2s; }
        .cat-btn:hover { color:rgba(245,240,232,0.85); }
        .cat-btn.active { color:#c9a96e; }
        @media (max-width:860px) {
          .faq-grid { grid-template-columns:1fr; }
          .inner { padding:0 24px; }
          .faq-main { padding:40px 28px; }
          .faq-aside { padding:40px 28px; }
          .cat-pills { display:flex !important; flex-wrap:wrap; gap:8px; }
          .cat-btn { width:auto; border:1px solid rgba(201,169,110,0.2); padding:8px 14px; font-size:10px; border-bottom: 1px solid rgba(201,169,110,0.2); }
          .cat-btn.active { border-color:#c9a96e; background:rgba(201,169,110,0.06); }
        }
      `}</style>
      <div className="noise" />

      {/* ── Header ── */}
      <section style={{ padding: "100px 0 0" }}>
        <div className="inner">
          {eyebrow("Common Questions")}
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
            FAQ
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
              before you book
            </em>
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.78)",
              fontWeight: 300,
              maxWidth: 480,
              marginBottom: 28,
            }}
          >
            Quick answers to common questions. Packages start at{" "}
            <strong style={{ color: "#c9a96e", fontWeight: 500 }}>$350</strong>.
            Delivery/setup/breakdown available for an additional fee.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/contact" className="btn-gold">
              Request a Quote
            </Link>
            <Link to="/pricing" className="btn-outline">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="inner">
          <div className="faq-grid">
            {/* ── FAQ main panel ── */}
            <div className="faq-main">
              {/* Category tabs */}
              <div style={{ marginBottom: 36 }}>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.3)",
                    marginBottom: 12,
                  }}
                >
                  Browse by topic
                </div>
                <div className="cat-pills" style={{ display: "block" }}>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`cat-btn${
                        activeCategory === cat.id ? " active" : ""
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active category heading */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 400,
                  marginBottom: 6,
                  paddingBottom: 20,
                  borderBottom: "1px solid rgba(201,169,110,0.15)",
                }}
              >
                {categories.find((c) => c.id === activeCategory)?.label}
              </div>

              {/* Questions */}
              <div style={{ borderTop: "none" }}>
                {activeQuestions.map((f, i) => (
                  <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
                ))}
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="faq-aside">
              {/* Fastest quote checklist */}
              <div className="aside-card">
                {colLabel("For the fastest quote")}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 0 }}
                >
                  {[
                    "Event date + start time",
                    "Venue name + city",
                    "Indoor or outdoor",
                    "Preferred wall style",
                    "Delivery/setup needed? (yes/no)",
                    "Any add-ons (signage, neon, balloons)",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: "rgba(245,240,232,0.75)",
                        fontWeight: 300,
                        padding: "10px 0",
                        borderBottom: "1px solid rgba(201,169,110,0.08)",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span style={{ color: "#c9a96e", fontSize: 10 }}>✦</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking ahead */}
              <div className="aside-card">
                {colLabel("Booking ahead")}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(245,240,232,0.75)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  If your event is{" "}
                  <strong style={{ color: "#f5f0e8", fontWeight: 400 }}>
                    6–8+ weeks
                  </strong>{" "}
                  away, we may be able to source additional wall styles by
                  request. Visit our gallery to browse all options.
                </p>
              </div>

              {/* How booking works */}
              <div className="aside-card">
                {colLabel("How booking works")}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  {[
                    "We confirm availability",
                    "Send your custom quote",
                    "Date reserved once deposit is paid",
                  ].map((step, i) => (
                    <div
                      key={step}
                      style={{
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 20,
                          color: "rgba(201,169,110,0.4)",
                          lineHeight: 1,
                          flexShrink: 0,
                          minWidth: 18,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
                          color: "rgba(245,240,232,0.75)",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #18140c 0%, #1e1a0e 100%)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 26,
                    fontWeight: 300,
                    marginBottom: 10,
                  }}
                >
                  Still not sure?
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(245,240,232,0.75)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: 24,
                  }}
                >
                  Send your theme and venue photo (if you have one). I'll help
                  you pick the best placement and add-ons for your space.
                </p>
                <Link
                  to="/contact"
                  className="btn-gold"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Message Me
                </Link>
              </div>

              {/* Portfolio note */}
              <div className="aside-card">
                {colLabel("See it in action")}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(245,240,232,0.75)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: 16,
                  }}
                >
                  We're always adding new event photos. Follow us on Instagram
                  for the latest setups and inspo.
                </p>
                <a
                  href="https://instagram.com/bloomflowerwallrentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    color: "#c9a96e",
                    textDecoration: "none",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  @bloomflowerwallrentals →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid rgba(201,169,110,0.1)",
          background: "#090909",
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
                Ready to make it{" "}
                <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                  unforgettable?
                </em>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(245,240,232,0.75)",
                  fontWeight: 300,
                }}
              >
                Send your event date + venue and we'll confirm availability
                within 24–48 hours.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-gold">
                Request a Quote
              </Link>
              <Link to="/gallery" className="btn-outline">
                Browse Walls
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
