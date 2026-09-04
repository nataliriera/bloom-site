import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { upcomingEvents } from "../data/events.js";
import EventInstagramShare from "../components/EventInstagramShare.jsx";
import enchantedGardenImg from "../assets/walls/enchanted-garden.jpg";

function PageMeta() {
  useEffect(() => {
    const title = "Events | Meet Natali & Bloom — Central Florida";
    const desc =
      "Upcoming events where you can meet Natali — wedding expos with Bloom Flower Wall Rentals and community gatherings with Wellness Collective FL in Clermont and Central Florida.";
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
      "https://bloomflowerwallrentals.com/events"
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
    canon.href = "https://bloomflowerwallrentals.com/events";

    const schema = {
      "@context": "https://schema.org",
      "@graph": upcomingEvents.map((event) => ({
        "@type": "Event",
        name: event.title,
        description: event.description,
        startDate: `${event.date}T17:00:00-04:00`,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: event.location,
          address: event.address,
        },
        organizer: {
          "@type": "Organization",
          name: event.organizer || event.location,
        },
        ...(event.role === "bloom"
          ? {
              performer: {
                "@type": "LocalBusiness",
                name: "Bloom Flower Wall Rentals",
                url: "https://bloomflowerwallrentals.com",
              },
            }
          : {}),
        offers: {
          "@type": "Offer",
          url: event.eventUrl,
          availability: "https://schema.org/InStock",
        },
      })),
    };
    let ld = document.getElementById("ld-events");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-events";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(schema);
  }, []);
  return null;
}

function formatDateParts(dateStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate(),
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }),
    long: d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconTicket() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 8h16v3a2 2 0 0 1 0 4v3H4v-3a2 2 0 0 1 0-4V8z" />
      <path d="M12 8v8" />
    </svg>
  );
}

function EventCard({ event, index, isNext }) {
  const { month, day, weekday, long } = formatDateParts(event.date);
  const reversed = index % 2 === 1;

  return (
    <article className={`event-card${reversed ? " event-card--reverse" : ""}`}>
      <div className="event-card-poster">
        <div className="event-poster-frame">
          <div className="event-poster-inner">
            {event.image ? (
              <img
                src={event.image}
                alt={event.imageAlt}
                loading="lazy"
                className="event-poster-img"
              />
            ) : (
              <div className="event-poster-fallback">
                <img
                  src={enchantedGardenImg}
                  alt=""
                  aria-hidden="true"
                  className="event-poster-img event-poster-img--dim"
                />
                <div className="event-poster-fallback-content">
                  <span className="event-fallback-label">{event.category}</span>
                  <span className="event-fallback-name">{event.title}</span>
                  <span className="event-fallback-venue">{event.subtitle}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {isNext && <span className="event-next-badge">Next up</span>}
        {event.role === "hosting" && (
          <span className="event-hosted-badge">Co-founded by Natali</span>
        )}
        <div className="event-index">{String(index + 1).padStart(2, "0")}</div>
      </div>

      <div className="event-card-content">
        <div className="event-date-block">
          <span className="event-date-weekday">{weekday}</span>
          <span className="event-date-main">
            {month} {day}
          </span>
          <span className="event-date-year">{long.split(", ").pop()}</span>
        </div>

        <div className="event-card-meta">
          <span className="event-pill event-pill--gold">{event.category}</span>
          <span className="event-pill">{event.admission}</span>
          {event.role === "bloom" && (
            <span className="event-pill event-pill--bloom">Bloom attending</span>
          )}
        </div>

        <h2 className="event-card-title">{event.title}</h2>
        <p className="event-card-subtitle">{event.subtitle}</p>
        <p className="event-card-desc">{event.description}</p>

        <ul className="event-details">
          <li>
            <IconClock />
            <span>{event.time}</span>
          </li>
          <li>
            <IconPin />
            <span>
              <strong>{event.location}</strong>
              <br />
              {event.address}
            </span>
          </li>
          <li>
            <IconTicket />
            <span>{event.admission}</span>
          </li>
        </ul>

        <div className="event-actions">
          <a
            href={event.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold event-cta"
          >
            {event.role === "hosting" ? "Learn More" : "Event Details"}
            <span aria-hidden="true">→</span>
          </a>
          <EventInstagramShare event={event} />
        </div>
      </div>
    </article>
  );
}

export default function Events() {
  const clermontCount = upcomingEvents.filter((e) =>
    e.address.includes("Clermont")
  ).length;

  return (
    <div className="events-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .events-page {
          background: #0c0c0c;
          color: #f5f0e8;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .events-noise {
          position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 150px;
        }

        .events-glow {
          position: absolute;
          top: -120px;
          right: -80px;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 68%);
          pointer-events: none;
        }

        .events-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 100px 48px 120px;
          position: relative;
        }

        .events-hero {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: end;
          margin-bottom: 72px;
        }

        .events-stats {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 200px;
        }

        .events-stat {
          background: linear-gradient(135deg, #14110c 0%, #1a1610 100%);
          border: 1px solid rgba(201,169,110,0.18);
          padding: 20px 24px;
          text-align: center;
        }

        .events-stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          color: #c9a96e;
          line-height: 1;
          margin-bottom: 6px;
        }

        .events-stat-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.45);
        }

        .events-intro-note {
          margin-top: 32px;
          max-width: 560px;
          padding: 22px 26px;
          border-left: 2px solid #c9a96e;
          background: linear-gradient(90deg, rgba(201,169,110,0.07) 0%, transparent 100%);
        }

        .events-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .events-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 40px;
          bottom: 40px;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(201,169,110,0.25) 15%, rgba(201,169,110,0.25) 85%, transparent);
          transform: translateX(-50%);
          pointer-events: none;
        }

        .event-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: #0a0a0a;
          border: 1px solid rgba(201,169,110,0.14);
          position: relative;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .event-card:hover {
          border-color: rgba(201,169,110,0.32);
          box-shadow: 0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,169,110,0.06);
        }

        .event-card--reverse .event-card-poster { order: 2; }
        .event-card--reverse .event-card-content { order: 1; }

        .event-card-poster {
          position: relative;
          padding: 32px;
          background: linear-gradient(160deg, #0e0d0b 0%, #12100e 100%);
          border-right: 1px solid rgba(201,169,110,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 420px;
        }

        .event-card--reverse .event-card-poster {
          border-right: none;
          border-left: 1px solid rgba(201,169,110,0.08);
        }

        .event-poster-frame {
          width: 100%;
          max-width: 300px;
          padding: 12px;
          background: linear-gradient(145deg, rgba(201,169,110,0.22), rgba(201,169,110,0.04));
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }

        .event-card:hover .event-poster-frame {
          transform: translateY(-6px) scale(1.02);
        }

        .event-poster-inner {
          overflow: hidden;
          background: #111;
          aspect-ratio: 3 / 4;
        }

        .event-poster-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        .event-card:hover .event-poster-img { transform: scale(1.04); }

        .event-poster-fallback { position: relative; width: 100%; height: 100%; }
        .event-poster-img--dim { opacity: 0.35; filter: saturate(0.8); }

        .event-poster-fallback-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          background: linear-gradient(180deg, transparent 20%, rgba(10,10,10,0.85) 100%);
        }

        .event-fallback-label {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 14px;
        }

        .event-fallback-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .event-fallback-venue {
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.55);
        }

        .event-next-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0c0c0c;
          background: #c9a96e;
          padding: 7px 14px;
          z-index: 2;
        }

        .event-hosted-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #f5f0e8;
          background: rgba(12,12,12,0.88);
          border: 1px solid rgba(201,169,110,0.45);
          padding: 7px 14px;
          z-index: 2;
        }

        .event-index {
          position: absolute;
          bottom: 20px;
          right: 28px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 300;
          line-height: 1;
          color: rgba(201,169,110,0.07);
          user-select: none;
          pointer-events: none;
        }

        .event-card-content {
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .event-date-block {
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(201,169,110,0.12);
        }

        .event-date-weekday {
          display: block;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.65);
          margin-bottom: 8px;
        }

        .event-date-main {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5vw, 56px);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: #f5f0e8;
        }

        .event-date-year {
          display: block;
          margin-top: 8px;
          font-size: 13px;
          color: rgba(245,240,232,0.4);
          letter-spacing: 0.06em;
        }

        .event-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .event-pill {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.65);
          border: 1px solid rgba(245,240,232,0.14);
          padding: 6px 14px;
        }

        .event-pill--gold {
          color: #c9a96e;
          border-color: rgba(201,169,110,0.4);
          background: rgba(201,169,110,0.06);
        }

        .event-pill--bloom {
          color: rgba(245,240,232,0.8);
          border-color: rgba(245,240,232,0.2);
          background: rgba(245,240,232,0.04);
        }

        .event-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 300;
          line-height: 1.05;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .event-card-subtitle {
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.5);
          margin-bottom: 16px;
        }

        .event-card-desc {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(245,240,232,0.75);
          font-weight: 300;
          margin-bottom: 28px;
        }

        .event-details {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .event-details li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 13px;
          line-height: 1.65;
          color: rgba(245,240,232,0.68);
        }

        .event-details li svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #c9a96e;
          opacity: 0.85;
        }

        .event-details strong {
          color: #f5f0e8;
          font-weight: 500;
        }

        .event-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          align-self: flex-start;
          background: #c9a96e;
          color: #0c0c0c;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 16px 32px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-gold:hover {
          background: #d4b280;
          letter-spacing: 0.18em;
          gap: 16px;
        }

        .event-cta span { transition: transform 0.25s ease; }
        .event-cta:hover span { transform: translateX(4px); }

        .events-bottom-cta {
          margin-top: 88px;
          padding: 48px 52px;
          background: linear-gradient(135deg, #18140c 0%, #1e1a0e 100%);
          border: 1px solid rgba(201,169,110,0.22);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 28px;
          position: relative;
          overflow: hidden;
        }

        .events-bottom-cta::before {
          content: '✦';
          position: absolute;
          top: 20px;
          right: 32px;
          font-size: 120px;
          color: rgba(201,169,110,0.04);
          line-height: 1;
          pointer-events: none;
        }

        @media (max-width: 960px) {
          .events-inner { padding: 72px 24px 96px; }
          .events-hero { grid-template-columns: 1fr; gap: 32px; }
          .events-stats { flex-direction: row; }
          .events-stat { flex: 1; }
          .events-timeline::before { display: none; }
          .event-card,
          .event-card--reverse {
            grid-template-columns: 1fr;
          }
          .event-card--reverse .event-card-poster,
          .event-card--reverse .event-card-content { order: unset; }
          .event-card-poster {
            min-height: auto;
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid rgba(201,169,110,0.08);
            padding: 28px;
          }
          .event-card-content { padding: 32px 28px 36px; }
          .events-bottom-cta { padding: 36px 28px; flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 520px) {
          .events-stats { flex-direction: column; }
        }
      `}</style>
      <PageMeta />
      <div className="events-noise" />

      <div className="events-inner">
        <div className="events-glow" />

        <header className="events-hero">
          <div style={{ maxWidth: 620 }}>
            <p
              style={{
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
              Meet Me In Person
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(44px, 7vw, 84px)",
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Upcoming
              <br />
              <em style={{ fontStyle: "italic", color: "#c9a96e" }}>
                events
              </em>
            </h1>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(245,240,232,0.78)",
                fontWeight: 300,
              }}
            >
              Wedding expos where you can see Bloom flower walls in person —
              plus community gatherings I'm co-hosting with Wellness Collective
              FL. I'd love to meet you at any of these.
            </p>
            <div className="events-intro-note">
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "rgba(245,240,232,0.78)",
                  fontWeight: 300,
                }}
              >
                <strong style={{ color: "#c9a96e", fontWeight: 500 }}>
                  At wedding shows
                </strong>
                , bring your venue details and I'll help you pick the perfect
                wall.{" "}
                <strong style={{ color: "#c9a96e", fontWeight: 500 }}>
                  At wellness events
                </strong>
                , come connect and enjoy the day by the lake.
              </p>
            </div>
          </div>

          <div className="events-stats">
            <div className="events-stat">
              <div className="events-stat-value">{upcomingEvents.length}</div>
              <div className="events-stat-label">Upcoming events</div>
            </div>
            <div className="events-stat">
              <div className="events-stat-value">
                {upcomingEvents.filter((e) => e.role === "bloom").length}
              </div>
              <div className="events-stat-label">Bloom attending</div>
            </div>
            <div className="events-stat">
              <div className="events-stat-value">{clermontCount}</div>
              <div className="events-stat-label">In Clermont area</div>
            </div>
          </div>
        </header>

        <div className="events-timeline">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              isNext={index === 0}
            />
          ))}
        </div>

        <div className="events-bottom-cta">
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 400,
                marginBottom: 10,
              }}
            >
              Can't make an expo?
            </div>
            <p
              style={{
                fontSize: 14,
                color: "rgba(245,240,232,0.72)",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: 460,
              }}
            >
              Request a quote anytime — I'll send availability, pricing, and wall
              recommendations for your event.
            </p>
          </div>
          <Link to="/contact" className="btn-gold" style={{ position: "relative", zIndex: 1 }}>
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
