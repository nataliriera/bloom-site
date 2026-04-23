import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend 4–6 weeks, especially for weekends. If your date is sooner, message us—last-minute availability happens.",
  },
  {
    q: "What's the starting price?",
    a: "Packages start at $350. Your final quote depends on your date, wall style, rental length, add-ons, and delivery/setup/breakdown logistics.",
  },
  {
    q: "Is delivery, setup, and breakdown included?",
    a: "Delivery, professional setup, and breakdown are available for an additional fee and quoted based on venue location + logistics.",
  },
  {
    q: "Do you deliver to my venue?",
    a: "Yes—Clermont, FL and surrounding areas. Delivery/setup pricing is quoted based on distance and venue access. Send your venue/city for an exact quote.",
  },
  {
    q: "Can I request a different style wall (blush/red/blue/green)?",
    a: "Yes. If your event is 6–8+ weeks out, we can often source additional wall styles. Pre-order styles require advance notice and a deposit to secure inventory.",
  },
  {
    q: "Can the wall be used outdoors?",
    a: "Sometimes. Outdoor setups require safe conditions (low wind, shade when possible, flat surface). We'll confirm weather + placement to keep it secure and photo-ready.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 30–60 minutes, depending on venue access, distance from parking/load-in, and any add-ons. We'll coordinate timing with your venue when needed.",
  },
  {
    q: "How much space do you need?",
    a: "Plan for at least an 8ft wide area plus a little room on the sides. If you share your venue or a photo of the space, we can confirm the best placement.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes. A deposit reserves your date and is applied to your total. For pre-order/custom styles, deposits may be higher and are typically non-refundable because inventory is purchased specifically for your event.",
  },
  {
    q: "Do you have a delivery zone or travel fee?",
    a: "We're based in Clermont and serve nearby areas. Delivery/setup fees are quoted based on distance and venue access. Share your venue/city for an exact quote.",
  },
  {
    q: "What is your weather policy for outdoor events?",
    a: "If weather conditions are unsafe (high wind, heavy rain, lightning), we may need to move the setup indoors or reschedule based on availability. We'll communicate early and work with you on the best option.",
  },
  {
    q: "What if something gets damaged during the event?",
    a: "Normal wear is expected. Significant damage (broken panels/stands, missing items, heavy staining) may result in a repair or replacement fee. We'll always communicate clearly and handle it case-by-case.",
  },
  {
    q: "Are neon signs included in the base price?",
    a: "Neon signs are optional add-ons and are not included unless listed in your quote.",
  },
  {
    q: "How do I book?",
    a: "Send your event date, venue/city, and your vibe (or inspo). We'll confirm availability, share your quote, and lock it in once the deposit is paid.",
  },
];

function FAQItem({ q, a, index, open, onToggle }) {
  const isOpen = open === index;
  return (
    <div
      onClick={() => onToggle(isOpen ? -1 : index)}
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
            transform: isOpen ? "rotate(45deg)" : "none",
            paddingTop: 2,
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? 300 : 0,
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

export default function Faq() {
  const [open, setOpen] = useState(0);

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
        .faq-grid { display:grid; grid-template-columns:1.4fr 1fr; gap:2px; background:rgba(201,169,110,0.07); margin-top:64px; }
        .faq-main { background:#0a0a0a; padding:52px 44px; }
        .faq-aside { background:#0e0e0e; padding:52px 36px; display:flex; flex-direction:column; gap:2px; }
        .aside-card { background:#0a0a0a; padding:28px; }
        .inner { max-width:1280px; margin:0 auto; padding:0 48px; }
        .btn-gold { display:inline-flex; align-items:center; gap:10px; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:14px 32px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        .btn-outline { display:inline-flex; align-items:center; gap:10px; background:transparent; color:#f5f0e8; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:400; letter-spacing:0.14em; text-transform:uppercase; padding:13px 28px; border:1px solid rgba(245,240,232,0.52); cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-outline:hover { border-color:#c9a96e; color:#c9a96e; }
        @media (max-width:860px) {
          .faq-grid { grid-template-columns:1fr; }
          .inner { padding:0 24px; }
          .faq-main { padding:40px 28px; }
          .faq-aside { padding:40px 28px; }
        }
      `}</style>
      <div className="noise" />

      {/* Header */}
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

      {/* Main content */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="inner">
          <div className="faq-grid">
            {/* FAQ list */}
            <div className="faq-main">
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  fontWeight: 400,
                  marginBottom: 8,
                }}
              >
                Common questions
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(245,240,232,0.68)",
                  marginBottom: 32,
                  fontWeight: 300,
                }}
              >
                Tap a question to expand.
              </p>

              <div style={{ borderTop: "1px solid rgba(201,169,110,0.12)" }}>
                {faqs.map((f, i) => (
                  <FAQItem
                    key={f.q}
                    q={f.q}
                    a={f.a}
                    index={i}
                    open={open}
                    onToggle={setOpen}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="faq-aside">
              {/* Fastest quote card */}
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
                  request.
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
                {colLabel("Portfolio photos")}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(245,240,232,0.75)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  We're always adding new event photos. If you want a specific
                  vibe, send inspo and we'll recommend the best wall + add-ons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
