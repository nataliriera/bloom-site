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
  addOns: "",
  message: "",
};

// ── Phone helpers ─────────────────────────────────────────────────────────────
function normalizePhone(val) {
  return val.replace(/[^\d+\-\s().]/g, "");
}
function isValidPhone(val) {
  return val.replace(/\D/g, "").length >= 10;
}

// ── Field wrapper with accessible label + inline error ────────────────────────
function FormField({ label, required, error, id, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: error ? "rgba(220,100,100,0.95)" : "rgba(245,240,232,0.6)",
          marginBottom: 10,
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#c9a96e", marginLeft: 4 }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          role="alert"
          style={{
            marginTop: 6,
            fontSize: 11,
            color: "rgba(220,100,100,0.9)",
            letterSpacing: "0.02em",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

// ── Shared input style ────────────────────────────────────────────────────────
function iStyle(focused, error) {
  return {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${
      error
        ? "rgba(220,100,100,0.55)"
        : focused
        ? "rgba(201,169,110,0.6)"
        : "rgba(201,169,110,0.18)"
    }`,
    boxShadow: focused && !error ? "0 0 0 3px rgba(201,169,110,0.07)" : "none",
    color: "#f5f0e8",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    padding: "13px 16px",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
    appearance: "none",
    WebkitAppearance: "none",
  };
}

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  autoComplete,
  inputMode,
  error,
}) {
  const [f, setF] = useState(false);
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={(e) => {
        setF(false);
        onBlur && onBlur(e);
      }}
      onFocus={() => setF(true)}
      required={required}
      placeholder={placeholder}
      autoComplete={autoComplete}
      inputMode={inputMode}
      aria-required={required}
      aria-invalid={!!error}
      style={iStyle(f, error)}
    />
  );
}

function Select({
  id,
  name,
  value,
  onChange,
  onBlur,
  required,
  error,
  children,
}) {
  const [f, setF] = useState(false);
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={(e) => {
        setF(false);
        onBlur && onBlur(e);
      }}
      onFocus={() => setF(true)}
      required={required}
      aria-required={required}
      aria-invalid={!!error}
      style={{ ...iStyle(f, error), cursor: "pointer" }}
    >
      {children}
    </select>
  );
}

function Textarea({
  id,
  name,
  value,
  onChange,
  onBlur,
  required,
  placeholder,
  rows = 5,
  error,
}) {
  const [f, setF] = useState(false);
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={(e) => {
        setF(false);
        onBlur && onBlur(e);
      }}
      onFocus={() => setF(true)}
      required={required}
      placeholder={placeholder}
      rows={rows}
      aria-required={required}
      aria-invalid={!!error}
      style={{ ...iStyle(f, error), resize: "vertical" }}
    />
  );
}

function InfoRow({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 0",
        borderBottom: "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(245,240,232,0.5)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: "#f5f0e8",
          fontWeight: 400,
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ── Per-page SEO ──────────────────────────────────────────────────────────────
function PageMeta() {
  useEffect(() => {
    const t = "Request a Quote | Bloom Flower Wall Rentals — Clermont, FL";
    const d =
      "Request a flower wall rental quote from Bloom in Clermont, FL. Packages from $350. We reply within 24–48 hours. Serving weddings, showers, birthdays & events across Central Florida.";
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

// ── Validation ────────────────────────────────────────────────────────────────
const REQUIRED = [
  "name",
  "email",
  "phone",
  "eventType",
  "eventDate",
  "location",
  "serviceOption",
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

// ── Main component ────────────────────────────────────────────────────────────
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
          serviceOption: form.serviceOption,
          addOns: form.addOns || "None",
          message: form.message,
          _subject: "New quote request — Bloom Flower Wall Rentals",
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
      <PageMeta />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::placeholder { color: rgba(245,240,232,0.25) !important; }
        select option { background: #1a1a1a; color: #f5f0e8; }
        .contact-grid { display:grid; grid-template-columns:1fr 1.35fr; gap:2px; background:rgba(201,169,110,0.08); margin-top:64px; }
        .form-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
        .contact-inner { max-width:1280px; margin:0 auto; padding:100px 48px 120px; }
        .info-panel { background:#0a0a0a; padding:52px 44px; }
        .form-panel { background:#0e0e0e; padding:52px 44px; }
        .btn-gold { display:inline-flex; align-items:center; justify-content:center; gap:10px; background:#c9a96e; color:#0c0c0c; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; padding:15px 36px; border:none; cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-gold:hover { background:#d4b280; letter-spacing:0.18em; }
        .btn-gold:disabled { opacity:0.55; cursor:not-allowed; letter-spacing:0.14em; }
        .btn-outline { display:inline-flex; align-items:center; gap:10px; background:transparent; color:#f5f0e8; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:400; letter-spacing:0.14em; text-transform:uppercase; padding:14px 28px; border:1px solid rgba(245,240,232,0.2); cursor:pointer; text-decoration:none; transition:all 0.25s ease; }
        .btn-outline:hover { border-color:#c9a96e; color:#c9a96e; }
        .contact-link { font-family:'DM Sans',sans-serif; font-size:14px; color:rgba(245,240,232,0.55); text-decoration:none; font-weight:300; transition:color 0.2s ease; display:block; padding:10px 0; border-bottom:1px solid rgba(201,169,110,0.08); }
        .contact-link:hover { color:#c9a96e; }
        .noise { position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:0.025; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); background-size:150px; }
        @media (max-width:900px) { .contact-grid { grid-template-columns:1fr; } .contact-inner { padding:72px 24px 100px; } .info-panel,.form-panel { padding:40px 28px; } .contact-grid { margin-top:48px; } }
        @media (max-width:600px) { .form-grid-2 { grid-template-columns:1fr; } }
      `}</style>

      <div className="noise" />

      <div className="contact-inner">
        {/* Header */}
        <div style={{ maxWidth: 680 }}>
          {eyebrow("Get in Touch")}
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
            Request
            <br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>a Quote</em>
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.55)",
              fontWeight: 300,
              maxWidth: 480,
              marginBottom: 32,
            }}
          >
            Share your date, venue, and style — we'll reply with availability
            and full pricing within 24–48 hours. Packages start at{" "}
            <strong style={{ color: "#c9a96e", fontWeight: 500 }}>$350</strong>.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/pricing" className="btn-outline">
              See Pricing
            </Link>
            <Link to="/faq" className="btn-outline">
              Read FAQ
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="contact-grid">
          {/* Info panel */}
          <div className="info-panel">
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                fontWeight: 400,
                marginBottom: 12,
              }}
            >
              Bloom Flower Wall Rentals
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.55)",
                fontWeight: 300,
                marginBottom: 36,
              }}
            >
              Luxury flower wall rentals in Clermont, FL and surrounding areas.
              Delivery, setup, and breakdown available for an additional fee.
            </p>

            <div style={{ marginBottom: 36 }}>
              {colLabel("Contact")}
              <a
                href="mailto:info@bloomflowerwallrentals.com"
                className="contact-link"
                style={{ wordBreak: "break-all" }}
              >
                info@bloomflowerwallrentals.com
              </a>
              <a href="tel:+18633355022" className="contact-link">
                (863) 335-5022
              </a>
              <a
                href="https://www.instagram.com/bloomflowerwallrentals/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                @bloomflowerwallrentals
              </a>
            </div>

            <div style={{ marginBottom: 36 }}>
              {colLabel("At a Glance")}
              <InfoRow label="Reply time" value="Within 24–48 hours" />
              <InfoRow label="Deposit" value="50% to reserve" />
              <InfoRow label="Starting at" value="$350" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                background: "rgba(201,169,110,0.08)",
              }}
            >
              {[
                {
                  title: "Deposit policy",
                  body: "A 50% deposit reserves your date and is applied to your total. Remaining balance is due before the event. Pre-order/custom styles may require a higher, non-refundable deposit.",
                },
                {
                  title: "Add-ons",
                  body: "Neon signs, custom signage, balloons, and styling are optional and only included if listed on your quote.",
                },
                {
                  title: "Delivery & setup",
                  body: "Select the delivery/setup/breakdown option in the form so we can include it in your quote.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{ background: "#0a0a0a", padding: "24px 28px" }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 18,
                      fontWeight: 400,
                      marginBottom: 8,
                    }}
                  >
                    {card.title}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(245,240,232,0.55)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: 24,
                fontSize: 12,
                color: "rgba(245,240,232,0.35)",
                lineHeight: 1.6,
              }}
            >
              Tip: After submitting, reply to your confirmation email with any
              venue photos — it helps us recommend the best placement.
            </p>
          </div>

          {/* Form panel */}
          <div className="form-panel">
            {status === "success" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  minHeight: 400,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 52,
                    color: "#c9a96e",
                    marginBottom: 20,
                    display: "block",
                  }}
                >
                  ✦
                </span>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    fontWeight: 300,
                    marginBottom: 16,
                  }}
                >
                  Thank you!
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(245,240,232,0.6)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    maxWidth: 400,
                    marginBottom: 16,
                  }}
                >
                  Your request was sent. We typically reply within{" "}
                  <strong style={{ color: "#f5f0e8", fontWeight: 400 }}>
                    24–48 hours
                  </strong>{" "}
                  with availability, recommendations, and your quote.
                </p>
                <div
                  style={{
                    background: "#131313",
                    border: "1px solid rgba(201,169,110,0.15)",
                    padding: "24px 28px",
                    marginBottom: 32,
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 17,
                      fontWeight: 400,
                      marginBottom: 8,
                    }}
                  >
                    What happens next
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(245,240,232,0.55)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    We'll confirm availability, recommend the best setup for
                    your space, and send your full quote with deposit
                    instructions.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-gold"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 26,
                    fontWeight: 400,
                    marginBottom: 8,
                  }}
                >
                  Quote Request
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(245,240,232,0.5)",
                    fontWeight: 300,
                    marginBottom: 36,
                  }}
                >
                  Fields marked <span style={{ color: "#c9a96e" }}>*</span> are
                  required. The more details you share, the faster we can
                  confirm availability.
                </p>

                <form
                  onSubmit={onSubmit}
                  noValidate
                  aria-label="Quote request form"
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="form-grid-2">
                    <FormField
                      label="Full Name"
                      required
                      id="f-name"
                      error={touched.name && errors.name}
                    >
                      <Input
                        id="f-name"
                        name="name"
                        value={form.name}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        autoComplete="name"
                        error={touched.name && errors.name}
                      />
                    </FormField>
                    <FormField
                      label="Email"
                      required
                      id="f-email"
                      error={touched.email && errors.email}
                    >
                      <Input
                        id="f-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        autoComplete="email"
                        inputMode="email"
                        error={touched.email && errors.email}
                      />
                    </FormField>
                  </div>

                  <div className="form-grid-2">
                    <FormField
                      label="Phone"
                      required
                      id="f-phone"
                      error={touched.phone && errors.phone}
                    >
                      <Input
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
                        error={touched.phone && errors.phone}
                      />
                    </FormField>
                    <FormField
                      label="Event Type"
                      required
                      id="f-eventType"
                      error={touched.eventType && errors.eventType}
                    >
                      <Select
                        id="f-eventType"
                        name="eventType"
                        value={form.eventType}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        error={touched.eventType && errors.eventType}
                      >
                        <option value="">Select one…</option>
                        <option>Wedding</option>
                        <option>Bridal shower</option>
                        <option>Baby shower</option>
                        <option>Birthday</option>
                        <option>Quinceañera</option>
                        <option>Corporate / brand event</option>
                        <option>Other</option>
                      </Select>
                    </FormField>
                  </div>

                  <div className="form-grid-2">
                    <FormField
                      label="Event Date"
                      required
                      id="f-eventDate"
                      error={touched.eventDate && errors.eventDate}
                    >
                      <Input
                        id="f-eventDate"
                        name="eventDate"
                        type="date"
                        value={form.eventDate}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        error={touched.eventDate && errors.eventDate}
                      />
                    </FormField>
                    <FormField
                      label="City / Venue"
                      required
                      id="f-location"
                      error={touched.location && errors.location}
                    >
                      <Input
                        id="f-location"
                        name="location"
                        value={form.location}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        placeholder="Clermont, Winter Garden, Orlando…"
                        error={touched.location && errors.location}
                      />
                    </FormField>
                  </div>

                  <div className="form-grid-2">
                    <FormField label="Indoor / Outdoor" id="f-setupType">
                      <Select
                        id="f-setupType"
                        name="setupType"
                        value={form.setupType}
                        onChange={updateField}
                      >
                        <option value="">Select one…</option>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                        <option>Not sure yet</option>
                      </Select>
                    </FormField>
                    <FormField
                      label="Delivery / Setup / Breakdown?"
                      required
                      id="f-serviceOption"
                      error={touched.serviceOption && errors.serviceOption}
                    >
                      <Select
                        id="f-serviceOption"
                        name="serviceOption"
                        value={form.serviceOption}
                        onChange={updateField}
                        onBlur={handleBlur}
                        required
                        error={touched.serviceOption && errors.serviceOption}
                      >
                        <option value="">Select one…</option>
                        <option value="Yes (quote delivery/setup/breakdown)">
                          Yes — quote delivery/setup/breakdown
                        </option>
                        <option value="No (client pickup/return)">
                          No — I will arrange pickup/return
                        </option>
                        <option value="Not sure yet">Not sure yet</option>
                      </Select>
                    </FormField>
                  </div>

                  <FormField label="Add-ons (optional)" id="f-addOns">
                    <Input
                      id="f-addOns"
                      name="addOns"
                      value={form.addOns}
                      onChange={updateField}
                      placeholder="Custom sign, neon, balloon garland…"
                    />
                  </FormField>

                  <FormField
                    label="Tell us about your event"
                    required
                    id="f-message"
                    error={touched.message && errors.message}
                  >
                    <Textarea
                      id="f-message"
                      name="message"
                      value={form.message}
                      onChange={updateField}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      placeholder="Theme, colors, venue notes, setup window, timeline, add-ons…"
                      error={touched.message && errors.message}
                    />
                  </FormField>

                  {status === "error" && (
                    <p
                      role="alert"
                      style={{
                        fontSize: 12,
                        color: "rgba(220,100,100,0.9)",
                        lineHeight: 1.6,
                        padding: "12px 16px",
                        border: "1px solid rgba(220,100,100,0.25)",
                        background: "rgba(220,100,100,0.05)",
                      }}
                    >
                      {errorMsg} If it persists, email{" "}
                      <a
                        href="mailto:info@bloomflowerwallrentals.com"
                        style={{ color: "#c9a96e" }}
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
                      marginTop: 8,
                    }}
                  >
                    <button
                      type="submit"
                      className="btn-gold"
                      disabled={status === "sending"}
                      style={{ flex: "0 0 auto" }}
                    >
                      {status === "sending" ? "Sending…" : "Submit Request →"}
                    </button>
                    <p
                      style={{
                        fontSize: 12,
                        color: "rgba(245,240,232,0.35)",
                        lineHeight: 1.6,
                      }}
                    >
                      We typically reply within 24–48 hours.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 2,
            background: "linear-gradient(135deg,#18140c 0%,#1e1a0e 100%)",
            border: "1px solid rgba(201,169,110,0.2)",
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 400,
                marginBottom: 6,
              }}
            >
              Booking ahead and want a different wall style?
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(245,240,232,0.55)",
                fontWeight: 300,
              }}
            >
              If your event is 6–8+ weeks out, we can often source additional
              styles by request.
            </p>
          </div>
          <Link to="/pricing" className="btn-gold">
            See Add-ons
          </Link>
        </div>
      </div>
    </div>
  );
}
