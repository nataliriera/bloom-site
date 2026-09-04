import React, { useState } from "react";

const BLOOM_IG = "@bloomflowerwallrentals";

function buildCaption(event) {
  const lines = [
    event.title,
    `${event.dateLabel} · ${event.time}`,
    event.location,
    "",
    event.description,
    "",
    event.role === "bloom"
      ? `Find Bloom ${BLOOM_IG} at this event 🌸`
      : `Hosted with love · ${BLOOM_IG} 🌸`,
    event.eventUrl,
  ];
  return lines.filter((line) => line !== undefined).join("\n");
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function flyerAsFile(imageUrl, filename) {
  const res = await fetch(imageUrl);
  const blob = await res.blob();
  const type = blob.type || "image/png";
  return new File([blob], filename, { type });
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  ta.remove();
}

function canShareFiles(file) {
  return (
    !!file &&
    typeof navigator.share === "function" &&
    typeof navigator.canShare === "function" &&
    navigator.canShare({ files: [file] })
  );
}

/**
 * Shares event flyer via the phone's share sheet (Instagram appears there).
 * Caption is copied so you can paste it in Instagram. No forced download.
 */
export default function EventInstagramShare({
  event,
  variant = "outline",
  className = "",
}) {
  const [status, setStatus] = useState("idle"); // idle | working | done | error | desktop

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (status === "working") return;

    setStatus("working");
    const caption = buildCaption(event);
    const filename = `${slugify(event.title) || "bloom-event"}-flyer.png`;

    try {
      await copyText(caption);

      let file = null;
      if (event.image) {
        try {
          file = await flyerAsFile(event.image, filename);
        } catch {
          file = null;
        }
      }

      // Best path: open share sheet with flyer attached (phone / tablet)
      if (canShareFiles(file)) {
        try {
          await navigator.share({
            files: [file],
            title: event.title,
            text: caption,
          });
          setStatus("done");
          window.setTimeout(() => setStatus("idle"), 2800);
          return;
        } catch (shareErr) {
          if (shareErr?.name === "AbortError") {
            setStatus("idle");
            return;
          }
        }
      }

      // Text-only share sheet (no flyer support in this browser)
      if (typeof navigator.share === "function") {
        try {
          await navigator.share({
            title: event.title,
            text: caption,
            url: event.eventUrl,
          });
          setStatus("done");
          window.setTimeout(() => setStatus("idle"), 2800);
          return;
        } catch (shareErr) {
          if (shareErr?.name === "AbortError") {
            setStatus("idle");
            return;
          }
        }
      }

      // Desktop fallback: caption is copied; open Instagram so they can paste
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
      setStatus("desktop");
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3200);
    }
  };

  const label =
    status === "working"
      ? "Opening…"
      : status === "done"
        ? "Shared · caption ready"
        : status === "desktop"
          ? "Caption copied — paste in IG"
          : status === "error"
            ? "Try again"
            : variant === "compact"
              ? "Share"
              : "Share to Instagram";

  return (
    <button
      type="button"
      className={`event-ig-share event-ig-share--${variant} ${className}`.trim()}
      onClick={handleShare}
      disabled={status === "working"}
      aria-label={
        status === "done" || status === "desktop"
          ? "Event caption copied for Instagram"
          : `Share ${event.title} to Instagram`
      }
      aria-live="polite"
    >
      <InstagramIcon />
      <span>{label}</span>
      <style>{`
        .event-ig-share {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 16px 28px;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
          border: 1px solid rgba(245,240,232,0.3);
          background: transparent;
          color: #f5f0e8;
        }
        .event-ig-share:disabled {
          opacity: 0.7;
          cursor: wait;
        }
        .event-ig-share--outline:hover:not(:disabled) {
          border-color: rgba(201,169,110,0.55);
          color: #c9a96e;
        }
        .event-ig-share--compact {
          padding: 8px 12px;
          gap: 8px;
          font-size: 9px;
          letter-spacing: 0.12em;
          border-color: rgba(201,169,110,0.35);
          color: #c9a96e;
          background: rgba(12,12,12,0.72);
          backdrop-filter: blur(8px);
        }
        .event-ig-share--compact:hover:not(:disabled) {
          border-color: rgba(201,169,110,0.7);
          background: rgba(12,12,12,0.9);
          color: #f5f0e8;
        }
        .event-ig-share svg {
          flex-shrink: 0;
        }
      `}</style>
    </button>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
