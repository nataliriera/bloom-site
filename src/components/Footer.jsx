// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bloom-logo.png";

const navLinks = [
  { to: "/gallery", label: "Styles" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
];

const goldLink = {
  fontSize: 14,
  color: "rgba(245,240,232,0.78)",
  textDecoration: "none",
  padding: "10px 0",
  borderBottom: "1px solid rgba(201,169,110,0.08)",
  fontWeight: 300,
  letterSpacing: "0.04em",
  display: "block",
  transition: "color 0.2s ease",
};

const ColLabel = ({ text }) => (
  <div
    style={{
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginBottom: 24,
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}
  >
    <span
      style={{
        display: "inline-block",
        width: 20,
        height: 1,
        background: "#c9a96e",
      }}
    />
    {text}
  </div>
);

function SocialButton({ href, label, icon, handle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        border: "1px solid rgba(201,169,110,0.2)",
        padding: "12px 16px",
        textDecoration: "none",
        color: "rgba(245,240,232,0.82)",
        fontSize: 13,
        fontWeight: 300,
        transition: "border-color 0.2s ease, color 0.2s ease",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)";
        e.currentTarget.style.color = "#c9a96e";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";
        e.currentTarget.style.color = "rgba(245,240,232,0.82)";
      }}
    >
      {icon}
      {handle}
    </a>
  );
}

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
    style={{ color: "#c9a96e", flexShrink: 0 }}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-7.75 1.25 4 4 0 0 1 7.75-1.25z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
    style={{ color: "#c9a96e", flexShrink: 0 }}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 72px;
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 48px 48px;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 24px;
        }
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 52px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
          }
          .footer-inner {
            padding: 60px 24px 40px;
          }
        }
        @media (max-width: 520px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-brand-col {
            grid-column: auto;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <footer
        style={{
          background: "#080808",
          borderTop: "1px solid rgba(201,169,110,0.12)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Gold gradient line */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(201,169,110,0.35) 50%, transparent)",
          }}
        />

        <div className="footer-inner">
          <div className="footer-grid">
            {/* ── Brand col ── */}
            <div className="footer-brand-col">
              <img
                src={logo}
                alt="Bloom Flower Wall Rentals"
                loading="lazy"
                decoding="async"
                style={{
                  height: 52,
                  width: "auto",
                  marginBottom: 20,
                  filter: "brightness(1.05)",
                }}
              />
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.75)",
                  fontWeight: 300,
                  maxWidth: 340,
                  marginBottom: 28,
                }}
              >
                Luxury flower wall rentals for weddings and events in Clermont,
                Florida and surrounding areas.
              </p>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#c9a96e",
                  color: "#0c0c0c",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "13px 28px",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#d4b280")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#c9a96e")
                }
              >
                Book Your Date →
              </Link>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 11,
                  color: "rgba(245,240,232,0.58)",
                  letterSpacing: "0.04em",
                }}
              >
                Usually replied to within 24 hours.
              </p>
            </div>

            {/* ── Pages col ── */}
            <div>
              <ColLabel text="Pages" />
              <nav style={{ display: "flex", flexDirection: "column" }}>
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={goldLink}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#c9a96e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(245,240,232,0.78)")
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ── Contact col ── */}
            <div>
              <ColLabel text="Contact" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  {
                    href: "mailto:info@bloomflowerwallrentals.com",
                    label: "info@bloomflowerwallrentals.com",
                  },
                  { href: "tel:+18633355022", label: "(863) 335-5022" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{ ...goldLink, wordBreak: "break-all" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#c9a96e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(245,240,232,0.78)")
                    }
                  >
                    {item.label}
                  </a>
                ))}

                {/* Social links */}
                <div className="social-links">
                  <SocialButton
                    href="https://www.instagram.com/bloomflowerwallrentals/"
                    label="Bloom on Instagram"
                    icon={<InstagramIcon />}
                    handle="@bloomflowerwallrentals"
                  />
                  <SocialButton
                    href="https://www.facebook.com/bloomflowerwallrentals"
                    label="Bloom on Facebook"
                    icon={<FacebookIcon />}
                    handle="bloomflowerwallrentals"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(201,169,110,0.12) 50%, transparent)",
              marginBottom: 28,
            }}
          />

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <p
              style={{
                fontSize: 12,
                color: "rgba(245,240,232,0.55)",
                fontWeight: 300,
                letterSpacing: "0.04em",
              }}
            >
              © {new Date().getFullYear()} Bloom Flower Wall Rentals · Clermont,
              FL
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              {[
                { to: "/terms", label: "Terms" },
                { to: "/privacy", label: "Privacy" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    fontSize: 12,
                    color: "rgba(245,240,232,0.55)",
                    textDecoration: "none",
                    fontWeight: 300,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c9a96e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,240,232,0.55)")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
