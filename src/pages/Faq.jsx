import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "booking",
    label: "Booking & Availability",
    questions: [
      {
        q: "How far in advance should I book?",
        a: "We recommend 4–6 weeks, especially for weekends. If your date is sooner, message us. Last-minute availability happens. For pre-order wall styles, you'll need 6–8+ weeks notice.",
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
        a: "Deposits are non-refundable. If you need to reschedule, we'll do our best to accommodate a new date based on availability. Please reach out as soon as possible. The more notice, the better.",
      },
      {
        q: "What's the starting price?",
        a: "Packages start at $350. Your final quote depends on your wall style, add-ons, and delivery logistics. Setup & breakdown are included in every rental.",
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
        a: "All of our walls are 8 feet wide by 8 feet tall. That's large enough for a full group photo, a sweetheart table backdrop, or a dessert table feature, and it fills a wall beautifully without overwhelming a space. Plan for at least an 8ft wide area plus a little room on the sides.",
      },
      {
        q: "Can I request a different style wall?",
        a: "Yes! If your event is 6–8+ weeks away, we can often source additional wall styles including blush ombré, red rose, dusty blue, purple garden, and more. Pre-order styles require advance notice and a deposit to secure inventory. Visit our gallery page to browse all options.",
      },
      {
        q: "Are the flowers real?",
        a: "Bloom specializes in premium faux florals. Always in bloom, never wilting in the Florida heat. They photograph like fresh, stay lush all day, and are built for indoor and outdoor use (with some weather restrictions).",
      },
      {
        q: "Can I see the walls before booking?",
        a: "We don't have a permanent showroom, but you can see our walls in action on our Instagram @bloomflowerwallrentals and on our gallery page. If you want to connect in person, reach out. We're happy to chat!",
      },
    ],
  },
  {
    id: "delivery",
    label: "Delivery & Setup",
    questions: [
      {
        q: "Is delivery and setup included in the rental price?",
        a: "Setup & breakdown are included in every rental. Delivery is quoted separately by venue based on location and logistics. We'll include the full delivery quote so there are no surprises.",
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
        a: "Sometimes. Outdoor setups need safe conditions: low wind, shade when possible, and a flat stable surface. We'll confirm weather and placement details during quoting to keep everything secure and photo-ready.",
      },
      {
        q: "What is your weather policy for outdoor events?",
        a: "If weather conditions are unsafe (high wind, heavy rain, lightning), we may need to move the setup indoors or reschedule based on availability. We'll communicate early and work with you on the best option.",
      },
      {
        q: "Do you stay for the event?",
        a: "We don't typically stay for the full event. We set up before guests arrive and return for breakdown at the agreed pickup time. If you need us on-site during the event, let us know and we can discuss options.",
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
        a: "We offer custom acrylic signage (names, phrases, welcome messages), balloon garlands, neon signs, and prop table styling. Add-ons are optional and priced separately. Visit our styling page for current starting rates.",
      },
      {
        q: "Are neon signs included in the base price?",
        a: "No. Neon signs are optional add-ons and are not included unless listed in your quote. They're custom quoted based on your text and style.",
      },
      {
        q: "Can I add a custom name or phrase to the wall?",
        a: "Yes! Custom acrylic signs are one of our most popular add-ons. They attach directly to the wall and make for incredible photos. Pricing starts at $75 depending on size and complexity.",
      },
      {
        q: "Can I mix and match add-ons?",
        a: "Absolutely. Your quote is fully customizable. Just tell us what you're imagining (signage, balloons, neon, styling) and we'll build a quote that fits your vision and budget.",
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
        a: "Absolutely. Flower walls are a huge hit at brand activations, product launches, and pop-ups. They double as a branded photo moment that guests share on social. We can add custom signage with your logo or brand name.",
      },
      {
        q: "Do you do same-day bookings?",
        a: "Occasionally, if a wall is available and logistics allow, we'll do our best to make it work. Reach out as soon as possible. We always recommend booking in advance to guarantee your date.",
      },
    ],
  },
];

function FAQItem({ q, a, index, open, onToggle }) {
  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-item__trigger"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="faq-item__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="faq-item__q">{q}</span>
        <span className={`faq-item__icon${open ? " is-open" : ""}`} aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="faq-item__panel"
        style={{
          maxHeight: open ? 480 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <p className="faq-item__a">{a}</p>
      </div>
    </div>
  );
}

function PageMeta() {
  useEffect(() => {
    const t = "FAQ | Bloom Flower Wall Rentals, Clermont, FL";
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
  const [openIndex, setOpenIndex] = useState(0);

  const active = categories.find((c) => c.id === activeCategory);
  const activeQuestions = active?.questions || [];

  const selectCategory = (id) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  return (
    <div className="bloom-page faq-page">
      <PageMeta />
      <style>{`
        .faq-page .faq-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: start;
        }
        .faq-page .faq-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 4px;
        }
        .faq-page .faq-nav__link {
          background: none;
          border: none;
          padding: 10px 0;
          text-align: left;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--bloom-mute);
          cursor: pointer;
          border-bottom: 1px solid transparent;
          transition: color 0.2s ease;
        }
        .faq-page .faq-nav__link:hover {
          color: var(--bloom-ink);
        }
        .faq-page .faq-nav__link.is-active {
          color: var(--bloom-ink);
          border-bottom-color: rgba(26, 22, 18, 0.18);
        }
        .faq-page .faq-cat-title {
          margin: 0 0 8px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(26, 22, 18, 0.1);
        }
        .faq-page .faq-item {
          border-bottom: 1px solid rgba(26, 22, 18, 0.1);
        }
        .faq-page .faq-item__trigger {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
          padding: 22px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: inherit;
        }
        .faq-page .faq-item__index {
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--bloom-mute);
          min-width: 22px;
          padding-top: 6px;
          flex-shrink: 0;
        }
        .faq-page .faq-item__q {
          flex: 1;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 400;
          line-height: 1.3;
          color: var(--bloom-ink);
        }
        .faq-page .faq-item__icon {
          font-size: 22px;
          font-weight: 200;
          color: var(--bloom-gold);
          line-height: 1;
          padding-top: 4px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .faq-page .faq-item__icon.is-open {
          transform: rotate(45deg);
        }
        .faq-page .faq-item__panel {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }
        .faq-page .faq-item__a {
          margin: 0 0 24px;
          padding-left: 38px;
          font-size: 15px;
          line-height: 1.75;
          color: var(--bloom-soft);
          font-weight: 300;
          max-width: 580px;
        }
        .faq-page .faq-aside {
          margin-top: 48px;
          padding-top: 36px;
          border-top: 1px solid rgba(26, 22, 18, 0.1);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .faq-page .faq-aside ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .faq-page .faq-aside li {
          font-size: 14px;
          line-height: 1.7;
          color: var(--bloom-soft);
          padding: 8px 0;
          border-bottom: 1px solid rgba(26, 22, 18, 0.06);
        }
        .faq-page .faq-aside a {
          color: var(--bloom-ink);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        @media (max-width: 860px) {
          .faq-page .faq-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .faq-page .faq-nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px 20px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(26, 22, 18, 0.1);
          }
          .faq-page .faq-nav__link {
            padding: 6px 0;
          }
          .faq-page .faq-aside {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .faq-page .faq-item__a {
            padding-left: 0;
          }
        }
      `}</style>

      <header className="bloom-page-hero">
        <div className="bloom-wrap">
          <p className="bloom-label">Common Questions</p>
          <h1 className="bloom-h1">FAQ</h1>
          <p className="bloom-text">
            Quick answers about booking, premium faux flower walls, delivery,
            and add-ons. Packages start at $350. Setup & breakdown included in
            every rental. Delivery quoted separately by venue.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <Link to="/contact" className="bloom-btn bloom-btn--ink">
              Request a Quote
            </Link>
            <Link to="/styling#pricing" className="bloom-btn bloom-btn--line">
              See Pricing
            </Link>
          </div>
        </div>
      </header>

      <section className="bloom-section" style={{ paddingTop: 0 }}>
        <div className="bloom-wrap faq-layout">
          <nav className="faq-nav" aria-label="FAQ topics">
            <p className="bloom-label" style={{ marginBottom: 8 }}>
              Topics
            </p>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`faq-nav__link${
                  activeCategory === cat.id ? " is-active" : ""
                }`}
                onClick={() => selectCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          <div>
            <h2 className="bloom-h3 faq-cat-title">{active?.label}</h2>
            <div>
              {activeQuestions.map((item, i) => (
                <FAQItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  index={i}
                  open={openIndex === i}
                  onToggle={() =>
                    setOpenIndex((prev) => (prev === i ? -1 : i))
                  }
                />
              ))}
            </div>

            <div className="faq-aside">
              <div>
                <p className="bloom-label">For the fastest quote</p>
                <ul>
                  {[
                    "Event date + start time",
                    "Venue name + city",
                    "Indoor or outdoor",
                    "Preferred wall style",
                    "Any add-ons (signage, neon, balloons)",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="bloom-label">How booking works</p>
                <ul>
                  <li>We confirm availability</li>
                  <li>Send your custom quote</li>
                  <li>Date reserved once deposit is paid</li>
                </ul>
                <p className="bloom-text" style={{ marginTop: 20, maxWidth: "none" }}>
                  If your event is 6–8+ weeks away, we may source additional wall
                  styles.{" "}
                  <Link to="/gallery">Browse the gallery</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bloom-cta-band">
        <div className="bloom-wrap">
          <div className="bloom-cta-band__box">
            <p className="bloom-label">Still deciding</p>
            <h2 className="bloom-h2">Message us</h2>
            <p className="bloom-text">
              Send your event date, venue, and vibe. We’ll confirm availability
              within 24–48 hours.
            </p>
            <Link to="/contact" className="bloom-btn bloom-btn--gold">
              Contact Bloom
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
