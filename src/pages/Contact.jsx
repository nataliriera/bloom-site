import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FORM_ENDPOINT = "https://formspree.io/f/xkozjrka";

const initial = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  location: "",
  setupType: "",
  serviceOption: "",
  message: "",
  _gotcha: "",
};

function normalizePhone(val) {
  return val.replace(/[^\d+\-\s().]/g, "");
}

function isValidPhone(val) {
  return val.replace(/\D/g, "").length >= 10;
}

function PageMeta() {
  useEffect(() => {
    const t = "Request a Quote | Bloom Flower Wall Rentals, Clermont, FL";
    const d =
      "Check availability and request a premium faux flower wall rental quote from Bloom in Clermont, FL. We reply within 24–48 hours. Serving Central Florida events.";
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
      "https://bloomflowerwallrentals.com/contact"
    );
    m('meta[name="twitter:card"]', "content", "summary");
    let c = document.querySelector('link[rel="canonical"]');
    if (!c) {
      c = document.createElement("link");
      c.rel = "canonical";
      document.head.appendChild(c);
    }
    c.href = "https://bloomflowerwallrentals.com/contact";
  }, []);
  return null;
}

const REQUIRED = [
  "name",
  "email",
  "phone",
  "eventType",
  "eventDate",
  "location",
  "message",
];

function validate(name, value) {
  if (REQUIRED.includes(name) && !value?.trim())
    return "This field is required.";
  if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return "Enter a valid email address.";
  if (name === "phone" && value && !isValidPhone(value))
    return "Enter a valid phone number (at least 10 digits).";
  return null;
}

function Field({
  id,
  label,
  required,
  error,
  children,
  full,
}) {
  return (
    <div
      className={`bloom-field${error ? " bloom-field--error" : ""}${
        full ? " bloom-field--full" : ""
      }`}
    >
      <label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      {children}
      {error ? (
        <p className="bloom-field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function updateField(e) {
    const { name, value } = e.target;
    const next = name === "phone" ? normalizePhone(value) : value;
    setForm((p) => ({ ...p, [name]: next }));
    if (touched[name])
      setErrors((p) => ({ ...p, [name]: validate(name, next) }));
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validate(name, value) }));
  }

  function validateAll() {
    const newErrors = {};
    REQUIRED.forEach((k) => {
      const e = validate(k, form[k]);
      if (e) newErrors[k] = e;
    });
    ["email", "phone"].forEach((k) => {
      const e = validate(k, form[k]);
      if (e) newErrors[k] = e;
    });
    setErrors(newErrors);
    setTouched(Object.fromEntries(REQUIRED.map((k) => [k, true])));
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validateAll()) {
      setTimeout(() => {
        const el = document.querySelector("[aria-invalid='true']");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          eventType: form.eventType,
          eventDate: form.eventDate,
          location: form.location,
          setupType: form.setupType || "Not specified",
          serviceOption: form.serviceOption || "Not specified",
          message: form.message,
          _subject: "New quote request: Bloom Flower Wall Rentals",
          _gotcha: form._gotcha,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error)
        throw new Error(data.error || "Submission failed. Please try again.");
      setStatus("success");
      setForm(initial);
      setErrors({});
      setTouched({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    }
  }

  const err = (name) => (touched[name] && errors[name] ? errors[name] : null);

  return (
    <div className="bloom-page">
      <PageMeta />
      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: start;
        }
        .contact-aside p + p {
          margin-top: 16px;
        }
        .contact-aside a {
          color: var(--bloom-ink);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .contact-aside a:hover {
          color: var(--bloom-gold-hover);
        }
        .contact-meta {
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid rgba(26, 22, 18, 0.1);
        }
        .contact-meta p {
          margin: 0 0 10px;
          font-size: 14px;
          line-height: 1.6;
          color: var(--bloom-soft);
        }
        .contact-success {
          padding: 48px 0;
        }
        .contact-form select option {
          background: #fff;
          color: var(--bloom-ink);
        }
        @media (max-width: 860px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <header className="bloom-page-hero">
        <div className="bloom-wrap">
          <p className="bloom-label">Contact</p>
          <h1 className="bloom-h1">Check Availability</h1>
          <p className="bloom-text">
            Tell us about your event: date, venue, and what you’re looking for.
            We’ll reply within 24–48 hours with availability and a quote.
          </p>
          <a href="#quote-form" className="bloom-btn bloom-btn--gold bloom-page-hero__cta">
            Tell Us About Your Event
          </a>
        </div>
      </header>

      <section className="bloom-section" style={{ paddingTop: 0 }}>
        <div className="bloom-wrap contact-layout">
          <aside className="contact-aside">
            <p className="bloom-label">Bloom</p>
            <h2 className="bloom-h3">Clermont, FL</h2>
            <p className="bloom-text">
              Premium faux flower walls, floral styling, draping, and custom
              backdrops for Central Florida events. No image uploads needed.
              Describe your vision or send inspo after we reply.
            </p>
            <div className="contact-meta">
              <p>
                <a href="mailto:info@bloomflowerwallrentals.com">
                  info@bloomflowerwallrentals.com
                </a>
              </p>
              <p>
                <a href="tel:+18633355022">(863) 335-5022</a>
              </p>
              <p>
                <Link to="/styling#pricing">View starting prices →</Link>
              </p>
            </div>
          </aside>

          <div>
            {status === "success" ? (
              <div className="contact-success">
                <p className="bloom-label">Sent</p>
                <h2 className="bloom-h2">Thank you</h2>
                <p className="bloom-text">
                  Your request was received. We typically reply within 24–48
                  hours with availability, recommendations, and your quote.
                </p>
                <p className="bloom-text" style={{ marginBottom: 28 }}>
                  Next: we’ll confirm the date, suggest a setup for your space,
                  and send deposit instructions once you’re ready to book.
                </p>
                <button
                  type="button"
                  className="bloom-btn bloom-btn--gold"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <p className="bloom-label">Quote request</p>
                <h2 className="bloom-h3" style={{ marginBottom: 8 }}>
                  Tell Us About Your Event
                </h2>
                <p className="bloom-text" style={{ marginBottom: 32 }}>
                  Required fields are marked *. The more detail you share, the
                  faster we can confirm.
                </p>

                <form
                  id="quote-form"
                  className="contact-form"
                  onSubmit={onSubmit}
                  noValidate
                  aria-label="Quote request form"
                >
                  <input
                    type="text"
                    name="_gotcha"
                    value={form._gotcha}
                    onChange={updateField}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="bloom-form-grid">
                    <Field
                      id="f-name"
                      label="Name"
                      required
                      error={err("name")}
                    >
                      <input
                        id="f-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!err("name")}
                      />
                    </Field>

                    <Field
                      id="f-email"
                      label="Email"
                      required
                      error={err("email")}
                    >
                      <input
                        id="f-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        autoComplete="email"
                        inputMode="email"
                        aria-required="true"
                        aria-invalid={!!err("email")}
                      />
                    </Field>

                    <Field
                      id="f-phone"
                      label="Phone"
                      required
                      error={err("phone")}
                    >
                      <input
                        id="f-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="(863) 000-0000"
                        aria-required="true"
                        aria-invalid={!!err("phone")}
                      />
                    </Field>

                    <Field
                      id="f-eventDate"
                      label="Event Date"
                      required
                      error={err("eventDate")}
                    >
                      <input
                        id="f-eventDate"
                        name="eventDate"
                        type="date"
                        value={form.eventDate}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-invalid={!!err("eventDate")}
                      />
                    </Field>

                    <Field
                      id="f-location"
                      label="Venue / City"
                      required
                      error={err("location")}
                      full
                    >
                      <input
                        id="f-location"
                        name="location"
                        type="text"
                        value={form.location}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        placeholder="Clermont, Winter Garden, Orlando…"
                        aria-required="true"
                        aria-invalid={!!err("location")}
                      />
                    </Field>

                    <Field
                      id="f-eventType"
                      label="Event Type"
                      required
                      error={err("eventType")}
                    >
                      <select
                        id="f-eventType"
                        name="eventType"
                        value={form.eventType}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-invalid={!!err("eventType")}
                      >
                        <option value="">Select one…</option>
                        <option>Wedding</option>
                        <option>Bridal shower</option>
                        <option>Baby shower</option>
                        <option>Birthday</option>
                        <option>Quinceañera</option>
                        <option>Corporate / brand event</option>
                        <option>Other</option>
                      </select>
                    </Field>

                    <Field id="f-serviceOption" label="Service Interest">
                      <select
                        id="f-serviceOption"
                        name="serviceOption"
                        value={form.serviceOption}
                        onChange={updateField}
                      >
                        <option value="">Select one…</option>
                        <option>Flower Wall</option>
                        <option>The Full Bloom Setup — $995</option>
                        <option>The Full Bloom Setup + Flower Wall — $1,295</option>
                        <option>Floral Styling</option>
                        <option>Custom Backdrop</option>
                        <option>Draping</option>
                        <option>Signage</option>
                        <option>Corporate / Branded Event</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </Field>

                    <Field id="f-setupType" label="Indoor / Outdoor">
                      <select
                        id="f-setupType"
                        name="setupType"
                        value={form.setupType}
                        onChange={updateField}
                      >
                        <option value="">Select one…</option>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                        <option>Not sure</option>
                      </select>
                    </Field>

                    <Field
                      id="f-message"
                      label="Inspiration / Details"
                      required
                      error={err("message")}
                      full
                    >
                      <textarea
                        id="f-message"
                        name="message"
                        value={form.message}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        rows={5}
                        placeholder="Theme, colors, venue notes, setup window…"
                        aria-required="true"
                        aria-invalid={!!err("message")}
                      />
                    </Field>
                  </div>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="bloom-field__error"
                      style={{ marginTop: 20, lineHeight: 1.6 }}
                    >
                      {errorMsg} If it persists, email{" "}
                      <a
                        href="mailto:info@bloomflowerwallrentals.com"
                        style={{ color: "var(--bloom-gold)" }}
                      >
                        info@bloomflowerwallrentals.com
                      </a>
                      .
                    </p>
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      flexWrap: "wrap",
                      marginTop: 28,
                    }}
                  >
                    <button
                      type="submit"
                      className="bloom-btn bloom-btn--gold"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending…" : "Submit Request"}
                    </button>
                    <p
                      className="bloom-text"
                      style={{ margin: 0, fontSize: 13 }}
                    >
                      We typically reply within 24–48 hours.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
