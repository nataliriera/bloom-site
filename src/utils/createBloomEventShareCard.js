import logoUrl from "../assets/bloom-logo.png";

/** Instagram Stories — exact canvas */
const W = 1080;
const H = 1920;

/** Layout bands */
const TOP_H = Math.round(H * 0.08); // 8%  → 154
const FLYER_H = Math.round(H * 0.68); // 68% → 1306
const DETAILS_H = Math.round(H * 0.16); // 16% → 307
const FOOTER_H = H - TOP_H - FLYER_H - DETAILS_H; // ~8%

const C = {
  bg: "#F7F3ED",
  ink: "#222222",
  inkSoft: "rgba(34,34,34,0.62)",
  gold: "#C6A46A",
  goldLine: "rgba(198,164,106,0.45)",
};

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function wrapText(ctx, text, maxWidth) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function formatDate(event) {
  if (event.dateLabel) return event.dateLabel;
  if (!event.date) return "";
  const d = new Date(`${event.date}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(event) {
  if (event.startTime && event.endTime) {
    return `${event.startTime} – ${event.endTime}`;
  }
  if (event.startTime) return event.startTime;
  return event.time || "";
}

function formatVenue(event) {
  const venue = event.venue || event.location || "";
  const city = event.city || "";
  if (venue && city) return `${venue}, ${city}`;
  return venue || city;
}

function attendingLabel(event) {
  if (event.role === "hosting") return "CO-FOUNDED BY NATALI";
  return "BLOOM ATTENDING";
}

/**
 * Exact editorial Instagram Story frame around the event flyer.
 * Proportions: 8% brand · 68% flyer · 16% details · 8% footer
 */
export async function createBloomEventShareCard(event) {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const [logo, flyer] = await Promise.all([
    loadImage(logoUrl).catch(() => null),
    event.image ? loadImage(event.image).catch(() => null) : Promise.resolve(null),
  ]);

  // ── Background ──
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);

  // ═══════════════════════════════════════════
  // TOP BRAND AREA — 8%
  // ═══════════════════════════════════════════
  const topY = 0;
  const topMid = topY + TOP_H / 2;

  if (logo) {
    const logoH = 36;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, (W - logoW) / 2, topMid - 28, logoW, logoH);
  }

  ctx.fillStyle = C.gold;
  ctx.font = "500 13px 'DM Sans', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(attendingLabel(event), W / 2, topMid + 28);

  // ═══════════════════════════════════════════
  // EVENT FLYER AREA — 68%
  // Full artwork, centered, uncropped
  // ═══════════════════════════════════════════
  const flyerBandTop = TOP_H;
  const flyerPadX = 72;
  const flyerPadY = 28;
  const maxW = W - flyerPadX * 2;
  const maxH = FLYER_H - flyerPadY * 2;

  if (flyer) {
    const scale = Math.min(maxW / flyer.width, maxH / flyer.height);
    const dw = Math.round(flyer.width * scale);
    const dh = Math.round(flyer.height * scale);
    const dx = Math.round((W - dw) / 2);
    const dy = Math.round(flyerBandTop + (FLYER_H - dh) / 2);
    const radius = 24;

    // Subtle shadow only
    ctx.save();
    ctx.shadowColor = "rgba(34,34,34,0.12)";
    ctx.shadowBlur = 32;
    ctx.shadowOffsetY = 12;
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, dx, dy, dw, dh, radius);
    ctx.fill();
    ctx.restore();

    // Flyer as intact artwork
    ctx.save();
    roundRect(ctx, dx, dy, dw, dh, radius);
    ctx.clip();
    ctx.drawImage(flyer, dx, dy, dw, dh);
    ctx.restore();
  }

  // ═══════════════════════════════════════════
  // EVENT DETAILS AREA — 16%
  // Left aligned · max 4 lines
  // ═══════════════════════════════════════════
  const detailsTop = TOP_H + FLYER_H;
  const detailsLeft = 88;
  const detailsWidth = W - detailsLeft * 2;
  let lineY = detailsTop + 52;

  const title = event.title || "";
  const dateLine = formatDate(event);
  const timeLine = formatTime(event);
  const venueLine = formatVenue(event);

  ctx.textAlign = "left";

  // Title — elegant serif (1–2 lines max within the 4-line budget)
  ctx.fillStyle = C.ink;
  ctx.font = "400 40px 'Cormorant Garamond', Georgia, serif";
  const titleLines = wrapText(ctx, title, detailsWidth).slice(0, 2);

  const detailLines = [
    ...titleLines.map((t) => ({ text: t, kind: "title" })),
    dateLine && { text: dateLine, kind: "detail" },
    timeLine && { text: timeLine, kind: "detail" },
    venueLine && { text: venueLine, kind: "detail" },
  ].filter(Boolean);

  // Hard cap: maximum 4 lines of information
  detailLines.slice(0, 4).forEach((item) => {
    if (item.kind === "title") {
      ctx.fillStyle = C.ink;
      ctx.font = "400 40px 'Cormorant Garamond', Georgia, serif";
      ctx.fillText(item.text, detailsLeft, lineY);
      lineY += 48;
    } else {
      ctx.fillStyle = C.inkSoft;
      ctx.font = "400 22px 'DM Sans', system-ui, sans-serif";
      ctx.fillText(item.text, detailsLeft, lineY);
      lineY += 34;
    }
  });

  // ═══════════════════════════════════════════
  // FOOTER — 8%
  // ═══════════════════════════════════════════
  const footerTop = TOP_H + FLYER_H + DETAILS_H;
  const footerMid = footerTop + FOOTER_H / 2;

  ctx.fillStyle = C.goldLine;
  ctx.fillRect(W / 2 - 40, footerTop + 28, 80, 1);

  ctx.textAlign = "center";
  ctx.fillStyle = C.gold;
  ctx.font = "500 16px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("bloomflowerwallrentals.com", W / 2, footerMid + 4);

  ctx.fillStyle = C.inkSoft;
  ctx.font = "400 14px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("@bloomflowerwallrentals", W / 2, footerMid + 28);

  ctx.textAlign = "left";

  const blob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/png")
  );
  if (!blob) throw new Error("Could not create share card");

  const filename = `${(event.title || "bloom-event")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-bloom-story.png`;

  return {
    file: new File([blob], filename, { type: "image/png" }),
    previewUrl: URL.createObjectURL(blob),
  };
}
