import logoUrl from "../assets/bloom-logo.png";

/** Instagram Stories — full vertical frame */
const W = 1080;
const H = 1920;

const COLORS = {
  storyBg: "#1c1814",
  storyGlow: "rgba(201,169,110,0.14)",
  card: "#f4efe6",
  cardEdge: "rgba(201,169,110,0.35)",
  ink: "#1a1612",
  inkSoft: "rgba(26,22,18,0.62)",
  inkMute: "rgba(26,22,18,0.42)",
  gold: "#b8955e",
  goldSoft: "rgba(184,149,94,0.14)",
  ivory: "#faf7f1",
  line: "rgba(26,22,18,0.12)",
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

function drawContain(ctx, img, x, y, w, h) {
  const scale = Math.min(w / img.width, h / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  const dx = x + (w - dw) / 2;
  const dy = y + (h - dh) / 2;
  ctx.drawImage(img, dx, dy, dw, dh);
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

function parseDate(dateStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  return {
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }),
    month: d.toLocaleDateString("en-US", { month: "long" }),
    day: d.getDate(),
    year: d.getFullYear(),
  };
}

function roleBadge(event) {
  if (event.role === "hosting") return "Co-founded by Natali";
  if (event.role === "bloom") return "Bloom Attending";
  return null;
}

function admissionBadge(event) {
  const a = (event.admission || "").toLowerCase();
  if (!a) return null;
  if (a.includes("free")) return "Free Admission";
  if (a.includes("open")) return "Open to Attendees";
  if (a.includes("register")) return "Join Us";
  return event.admission;
}

/**
 * Clean Editorial Luxe — Bloom event share card for Instagram Stories.
 * Soft champagne card on warm charcoal, large flyer, refined hierarchy.
 */
export async function createBloomEventShareCard(event) {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  let flyer = null;
  if (event.image) {
    try {
      flyer = await loadImage(event.image);
    } catch {
      flyer = null;
    }
  }

  let logo = null;
  try {
    logo = await loadImage(logoUrl);
  } catch {
    logo = null;
  }

  const date = parseDate(event.date);
  const badge = roleBadge(event);
  const cta = admissionBadge(event);

  // ── Soft story backdrop (warm, not void black) ──
  ctx.fillStyle = COLORS.storyBg;
  ctx.fillRect(0, 0, W, H);

  const glow = ctx.createRadialGradient(W / 2, H * 0.28, 40, W / 2, H * 0.3, 720);
  glow.addColorStop(0, COLORS.storyGlow);
  glow.addColorStop(1, "rgba(201,169,110,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // Subtle vignette
  const vig = ctx.createRadialGradient(W / 2, H / 2, 400, W / 2, H / 2, 1100);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(0,0,0,0.35)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, W, H);

  // ── Elevated ivory card (fills most of the frame) ──
  const cardX = 56;
  const cardY = 96;
  const cardW = W - 112;
  const cardH = H - 192;
  const pad = 48;

  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.4)";
  ctx.shadowBlur = 50;
  ctx.shadowOffsetY = 18;
  ctx.fillStyle = COLORS.card;
  roundRect(ctx, cardX, cardY, cardW, cardH, 36);
  ctx.fill();
  ctx.restore();

  // Soft gold hairline edge
  ctx.strokeStyle = COLORS.cardEdge;
  ctx.lineWidth = 1.5;
  roundRect(ctx, cardX + 0.75, cardY + 0.75, cardW - 1.5, cardH - 1.5, 35);
  ctx.stroke();

  const contentX = cardX + pad;
  const contentW = cardW - pad * 2;
  let y = cardY + 44;

  // ── Top branding row ──
  if (logo) {
    const logoH = 36;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, contentX, y, logoW, logoH);
  }

  ctx.fillStyle = COLORS.ink;
  ctx.font = "500 18px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("BLOOM", contentX + 52, y + 16);
  ctx.fillStyle = COLORS.inkMute;
  ctx.font = "400 13px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("FLOWER WALL RENTALS", contentX + 52, y + 34);

  if (badge) {
    ctx.font = "500 14px 'DM Sans', system-ui, sans-serif";
    const bw = ctx.measureText(badge).width + 28;
    const bx = contentX + contentW - bw;
    ctx.fillStyle = COLORS.goldSoft;
    roundRect(ctx, bx, y + 2, bw, 34, 17);
    ctx.fill();
    ctx.fillStyle = COLORS.gold;
    ctx.fillText(badge, bx + 14, y + 24);
  }

  y += 68;

  // Delicate divider
  ctx.fillStyle = COLORS.line;
  ctx.fillRect(contentX, y, contentW, 1);
  y += 36;

  // ── Large featured visual ──
  const mediaH = 980;
  const mediaR = 22;

  // Champagne matte behind flyer (integrates landscape flyers)
  ctx.fillStyle = COLORS.ivory;
  roundRect(ctx, contentX, y, contentW, mediaH, mediaR);
  ctx.fill();

  ctx.save();
  roundRect(ctx, contentX, y, contentW, mediaH, mediaR);
  ctx.clip();

  if (flyer) {
    drawContain(ctx, flyer, contentX + 18, y + 18, contentW - 36, mediaH - 36);
  } else {
    ctx.fillStyle = COLORS.goldSoft;
    ctx.fillRect(contentX, y, contentW, mediaH);
    ctx.fillStyle = COLORS.gold;
    ctx.font = "300 42px 'Cormorant Garamond', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("Bloom Events", contentX + contentW / 2, y + mediaH / 2);
    ctx.textAlign = "left";
  }
  ctx.restore();

  // Soft inner gold frame
  ctx.strokeStyle = "rgba(184,149,94,0.28)";
  ctx.lineWidth = 1;
  roundRect(ctx, contentX + 0.5, y + 0.5, contentW - 1, mediaH - 1, mediaR);
  ctx.stroke();

  y += mediaH + 44;

  // ── Event information ──
  ctx.fillStyle = COLORS.ink;
  ctx.font = "300 58px 'Cormorant Garamond', Georgia, serif";
  const titleLines = wrapText(ctx, event.title, contentW).slice(0, 2);
  titleLines.forEach((line) => {
    ctx.fillText(line, contentX, y);
    y += 62;
  });

  y += 18;
  ctx.fillStyle = "rgba(184,149,94,0.55)";
  ctx.fillRect(contentX, y, 42, 2);
  y += 36;

  // Date
  ctx.fillStyle = COLORS.inkSoft;
  ctx.font = "400 24px 'DM Sans', system-ui, sans-serif";
  const dateLine = `${date.weekday}, ${date.month} ${date.day}, ${date.year}`;
  ctx.fillText(dateLine, contentX, y);
  y += 40;

  // Time · Venue
  ctx.fillStyle = COLORS.inkMute;
  ctx.font = "400 22px 'DM Sans', system-ui, sans-serif";
  const place = event.location || "";
  const meta = [event.time, place].filter(Boolean).join("  ·  ");
  const metaLines = wrapText(ctx, meta, contentW).slice(0, 2);
  metaLines.forEach((line) => {
    ctx.fillText(line, contentX, y);
    y += 34;
  });

  // Optional admission chip
  if (cta) {
    y += 22;
    ctx.font = "500 15px 'DM Sans', system-ui, sans-serif";
    const cw = ctx.measureText(cta).width + 30;
    ctx.strokeStyle = "rgba(184,149,94,0.45)";
    ctx.lineWidth = 1.25;
    roundRect(ctx, contentX, y, cw, 38, 19);
    ctx.stroke();
    ctx.fillStyle = COLORS.gold;
    ctx.fillText(cta, contentX + 15, y + 25);
  }

  // ── Footer pinned near card bottom ──
  const footY = cardY + cardH - 78;

  ctx.fillStyle = COLORS.line;
  ctx.fillRect(contentX, footY - 28, contentW, 1);

  ctx.fillStyle = COLORS.gold;
  ctx.font = "500 20px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("bloomflowerwallrentals.com", contentX, footY + 8);

  ctx.fillStyle = COLORS.inkMute;
  ctx.font = "400 18px 'DM Sans', system-ui, sans-serif";
  const handle = "@bloomflowerwallrentals";
  ctx.fillText(
    handle,
    contentX + contentW - ctx.measureText(handle).width,
    footY + 8
  );

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
