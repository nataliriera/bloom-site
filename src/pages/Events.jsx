import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  communityEvents,
  getUpcomingEvents,
  getRecentEvents,
} from "../data/events.js";
import aboutSetupImg from "../assets/about-setup.png";

function PageMeta({ upcoming }) {
  useEffect(() => {
    const title =
      "Events | Bloom in the Community, Central Florida";
    const desc =
      "See where Bloom Flower Wall Rentals appears across Central Florida: wedding expos, community gatherings, and recent events in Clermont and beyond.";
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

    const schemaEvents = upcoming.length > 0 ? upcoming : communityEvents;
    const schema = {
      "@context": "https://schema.org",
      "@graph": schemaEvents.map((event) => ({
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
        image: typeof event.image === "string" ? event.image : undefined,
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
  }, [upcoming]);
  return null;
}

function formatDateParts(dateStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  return {
    month: d.toLocaleDateString("en-US", { month: "long" }),
    day: d.getDate(),
    year: d.getFullYear(),
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }),
    long: d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

function EventRow({ event }) {
  const { weekday, month, day, year, long } = formatDateParts(event.date);
  const photo = event.image || aboutSetupImg;

  return (
    <article className="event-row">
      <div className="event-row__media">
        <img src={photo} alt={event.imageAlt || event.title} loading="lazy" />
      </div>
      <div className="event-row__copy">
        <p className="event-row__date">
          {weekday}, {month} {day}, {year}
        </p>
        <h3 className="bloom-h3" style={{ marginBottom: 8 }}>
          {event.title}
        </h3>
        <p className="event-row__meta">
          {event.category}
          {event.role === "bloom" ? " · Bloom attending" : ""}
          {event.role === "hosting" ? " · Co-hosted by Natali" : ""}
          {" · "}
          {event.admission}
        </p>
        <p className="bloom-text" style={{ maxWidth: "none", marginBottom: 16 }}>
          {event.description}
        </p>
        <p className="event-row__details">
          <span>{event.time}</span>
          <span>
            {event.location}
            <br />
            {event.address}
          </span>
        </p>
        {event.eventUrl && (
          <a
            href={event.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="event-row__link"
          >
            Event details →
          </a>
        )}
        <span className="visually-hidden">{long}</span>
      </div>
    </article>
  );
}

export default function Events() {
  const upcoming = getUpcomingEvents();
  const recent = getRecentEvents();

  return (
    <div className="bloom-page events-page">
      <PageMeta upcoming={upcoming} />
      <style>{`
        .events-page .event-row {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(28px, 5vw, 56px);
          align-items: start;
          padding: 48px 0;
          border-top: 1px solid rgba(26, 22, 18, 0.1);
        }
        .events-page .event-row:first-of-type {
          border-top: 0;
          padding-top: 8px;
        }
        .events-page .event-row__media {
          overflow: hidden;
          background: var(--bloom-cream-deep);
          aspect-ratio: 4 / 3;
        }
        .events-page .event-row__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .events-page .event-row__date {
          margin: 0 0 10px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--bloom-gold);
        }
        .events-page .event-row__meta {
          margin: 0 0 16px;
          font-size: 13px;
          line-height: 1.6;
          color: var(--bloom-mute);
        }
        .events-page .event-row__details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0 0 20px;
          font-size: 14px;
          line-height: 1.65;
          color: var(--bloom-soft);
        }
        .events-page .event-row__link {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--bloom-ink);
          text-decoration: none;
          border-bottom: 1px solid rgba(26, 22, 18, 0.25);
          padding-bottom: 2px;
        }
        .events-page .event-row__link:hover {
          color: var(--bloom-gold-hover);
          border-color: var(--bloom-gold);
        }
        .events-page .events-empty {
          padding: 8px 0 24px;
        }
        .events-page .events-empty .bloom-text {
          max-width: 480px;
        }
        .events-page .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 800px) {
          .events-page .event-row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 36px 0;
          }
        }
      `}</style>

      <header className="bloom-page-hero">
        <div className="bloom-wrap">
          <p className="bloom-label">Bloom in the Community</p>
          <h1 className="bloom-h1">Events</h1>
          <p className="bloom-text">
            Wedding expos, community gatherings, and local appearances across
            Central Florida. Come see Bloom’s premium faux flower walls in
            person or meet Natali.
          </p>
        </div>
      </header>

      <section className="bloom-section" style={{ paddingTop: 0 }}>
        <div className="bloom-wrap">
          <p className="bloom-label">Upcoming</p>
          <h2 className="bloom-h2">Next appearances</h2>

          {upcoming.length === 0 ? (
            <div className="events-empty">
              <p className="bloom-text">
                No upcoming public events right now. For community partnerships,
                wedding expos, or pop-up collaborations,{" "}
                <Link
                  to="/contact"
                  style={{
                    color: "var(--bloom-ink)",
                    textUnderlineOffset: 3,
                  }}
                >
                  get in touch
                </Link>
                .
              </p>
            </div>
          ) : (
            <div>
              {upcoming.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {recent.length > 0 && (
        <section className="bloom-section bloom-section--deep">
          <div className="bloom-wrap">
            <p className="bloom-label">Recent</p>
            <h2 className="bloom-h2">Recent events</h2>
            <p className="bloom-text" style={{ marginBottom: 32 }}>
              A look back at where Bloom has been in the community.
            </p>
            <div>
              {recent.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="bloom-cta-band" style={{ paddingTop: 72 }}>
        <div className="bloom-wrap">
          <div className="bloom-cta-band__box">
            <p className="bloom-label">Partner with Bloom</p>
            <h2 className="bloom-h2">Planning a community event?</h2>
            <p className="bloom-text">
              Interested in a flower wall for your expo, fundraiser, or local
              gathering? Send a note. We’d love to collaborate.
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
