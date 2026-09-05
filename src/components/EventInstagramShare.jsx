import React, { useEffect, useState } from "react";
import { createBloomEventShareCard } from "../utils/createBloomEventShareCard.js";

const BLOOM_IG = "@bloomflowerwallrentals";
const SITE = "https://bloomflowerwallrentals.com";

function buildCaption(event) {
  const lines = [
    `${event.title} ✨`,
    `${event.dateLabel} · ${event.time}`,
    event.location,
    "",
    event.description,
    "",
    event.role === "bloom"
      ? `Come see Bloom Flower Wall Rentals at this event 🌸`
      : `Hosted with love by Natali · Bloom 🌸`,
    "",
    BLOOM_IG,
    SITE,
    event.eventUrl,
  ];
  return lines.join("\n");
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
 * Opens a Bloom-branded preview card, then shares it to Instagram via the phone share sheet.
 */
export default function EventInstagramShare({
  event,
  variant = "outline",
  className = "",
}) {
  const [status, setStatus] = useState("idle");
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [shareFile, setShareFile] = useState(null);
  const [building, setBuilding] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const openPreview = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (building) return;

    setBuilding(true);
    setStatus("working");
    try {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      const { file, previewUrl: url } = await createBloomEventShareCard(event);
      setShareFile(file);
      setPreviewUrl(url);
      setOpen(true);
      setStatus("idle");
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 2800);
    } finally {
      setBuilding(false);
    }
  };

  const closePreview = () => {
    setOpen(false);
  };

  const shareNow = async () => {
    if (!shareFile || status === "working") return;
    setStatus("working");
    const caption = buildCaption(event);

    try {
      await copyText(caption);

      if (canShareFiles(shareFile)) {
        try {
          await navigator.share({
            files: [shareFile],
            title: event.title,
            text: caption,
          });
          setStatus("done");
          window.setTimeout(() => {
            setStatus("idle");
            setOpen(false);
          }, 1600);
          return;
        } catch (shareErr) {
          if (shareErr?.name === "AbortError") {
            setStatus("idle");
            return;
          }
        }
      }

      if (typeof navigator.share === "function") {
        try {
          await navigator.share({
            title: event.title,
            text: caption,
            url: SITE,
          });
          setStatus("done");
          window.setTimeout(() => {
            setStatus("idle");
            setOpen(false);
          }, 1600);
          return;
        } catch (shareErr) {
          if (shareErr?.name === "AbortError") {
            setStatus("idle");
            return;
          }
        }
      }

      // Desktop: caption copied + keep preview open so they can screenshot/save
      setStatus("desktop");
      window.setTimeout(() => setStatus("idle"), 4500);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 2800);
    }
  };

  const buttonLabel =
    status === "working" || building
      ? "Preparing…"
      : status === "done"
        ? "Shared!"
        : status === "error"
          ? "Try again"
          : variant === "compact"
            ? "Share"
            : "Share to Instagram";

  return (
    <>
      <button
        type="button"
        className={`event-ig-share event-ig-share--${variant} ${className}`.trim()}
        onClick={openPreview}
        disabled={building || status === "working"}
        aria-label={`Share ${event.title} to Instagram`}
      >
        <InstagramIcon />
        <span>{buttonLabel}</span>
      </button>

      {open && (
        <div
          className="bloom-share-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Instagram share preview"
          onClick={closePreview}
        >
          <div
            className="bloom-share-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bloom-share-sheet-head">
              <div>
                <p>Bloom Events</p>
                <span className="bloom-share-sheet-sub">Instagram Story preview</span>
              </div>
              <button type="button" className="bloom-share-close" onClick={closePreview} aria-label="Close">
                ×
              </button>
            </div>

            <div className="bloom-share-preview-wrap">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt={`Bloom share card for ${event.title}`}
                  className="bloom-share-preview"
                />
              ) : null}
            </div>

            <p className="bloom-share-hint">
              Clean editorial Story — your flyer front and center, with Bloom branding.
            </p>

            <div className="bloom-share-actions">
              <button type="button" className="bloom-share-primary" onClick={shareNow}>
                <InstagramIcon />
                {status === "working"
                  ? "Opening…"
                  : status === "done"
                    ? "Shared · caption ready"
                    : status === "desktop"
                      ? "Caption copied — paste in IG"
                      : "Share to Instagram"}
              </button>
              <button type="button" className="bloom-share-secondary" onClick={closePreview}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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
        .event-ig-share svg { flex-shrink: 0; }

        .bloom-share-modal {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(28,24,20,0.82);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(14px);
        }
        .bloom-share-sheet {
          width: min(400px, 100%);
          max-height: min(92vh, 880px);
          overflow: auto;
          background: linear-gradient(180deg, #1f1b17 0%, #161310 100%);
          border: 1px solid rgba(201,169,110,0.22);
          border-radius: 24px;
          padding: 22px 20px 22px;
          box-shadow: 0 36px 90px rgba(0,0,0,0.5);
        }
        .bloom-share-sheet-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .bloom-share-sheet-head p {
          margin: 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: 0.02em;
          text-transform: none;
          color: #f4efe6;
        }
        .bloom-share-sheet-sub {
          display: block;
          margin-top: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.75);
        }
        .bloom-share-close {
          border: none;
          background: transparent;
          color: rgba(244,239,230,0.55);
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
        }
        .bloom-share-preview-wrap {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(201,169,110,0.18);
          background: #1c1814;
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
        }
        .bloom-share-preview {
          display: block;
          width: 100%;
          height: auto;
        }
        .bloom-share-hint {
          margin: 14px 0 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(244,239,230,0.58);
          font-weight: 300;
        }
        .bloom-share-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bloom-share-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          border: none;
          border-radius: 999px;
          background: #c9a96e;
          color: #1a1612;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 16px 20px;
          cursor: pointer;
        }
        .bloom-share-primary:hover { background: #d4b280; }
        .bloom-share-secondary {
          width: 100%;
          border: 1px solid rgba(244,239,230,0.16);
          border-radius: 999px;
          background: transparent;
          color: rgba(244,239,230,0.65);
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 14px 20px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
