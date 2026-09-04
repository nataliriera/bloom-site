import logoUrl from "../assets/bloom-logo.png";

const W = 1080;
const H = 1920;

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
  const words = String(text || "").split(/\s+/);
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

function drawCover(ctx, img, x, y, w, h) {
  const scale = Math.max(w / img.width, h / img.height);
  const sw = w / scale;
  const sh = h / scale;
  const sx = (img.width - sw) / 2;
  const sy = (img.height - sh) / 2;
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
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

function parseDateParts(dateStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }),
  };
}

/**
 * Modern Bloom Instagram Story — editorial, eye-catching, website-branded.
 */
export async function createBloomEventShareCard(event) {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  const { day, month, weekday } = parseDateParts(event.date);

  let flyer = null;
  if (event.image) {
    try {
      flyer = await loadImage(event.image);
    } catch {
      flyer = null;
    }
  }

  // ── Atmosphere: blurred/zoomed flyer as full-bleed backdrop ──
  ctx.fillStyle = "#0a0908";
  ctx.fillRect(0, 0, W, H);

  if (flyer) {
    ctx.save();
    ctx.filter = "blur(28px) saturate(1.15) brightness(0.45)";
    drawCover(ctx, flyer, -80, -80, W + 160, H + 160);
    ctx.restore();
  }

  // Dark cinematic gradient
  const veil = ctx.createLinearGradient(0, 0, 0, H);
  veil.addColorStop(0, "rgba(8,7,6,0.55)");
  veil.addColorStop(0.35, "rgba(8,7,6,0.2)");
  veil.addColorStop(0.62, "rgba(8,7,6,0.72)");
  veil.addColorStop(1, "rgba(8,7,6,0.96)");
  ctx.fillStyle = veil;
  ctx.fillRect(0, 0, W, H);

  // Soft gold bloom light
  const glow = ctx.createRadialGradient(W * 0.8, 180, 20, W * 0.75, 220, 520);
  glow.addColorStop(0, "rgba(201,169,110,0.28)");
  glow.addColorStop(1, "rgba(201,169,110,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // ── Top brand bar ──
  ctx.fillStyle = "rgba(245,240,232,0.08)";
  roundRect(ctx, 48, 72, W - 96, 78, 39);
  ctx.fill();
  ctx.strokeStyle = "rgba(201,169,110,0.28)";
  ctx.lineWidth = 1.5;
  roundRect(ctx, 48, 72, W - 96, 78, 39);
  ctx.stroke();

  try {
    const logo = await loadImage(logoUrl);
    const logoH = 44;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, 72, 89, logoW, logoH);
  } catch {
    // optional
  }

  ctx.fillStyle = "#f5f0e8";
  ctx.font = "500 22px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("BLOOM", 148, 108);
  ctx.fillStyle = "rgba(245,240,232,0.45)";
  ctx.font = "400 16px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("FLOWER WALL RENTALS", 148, 132);

  // From website pill
  ctx.font = "500 15px 'DM Sans', system-ui, sans-serif";
  const fromLabel = "FROM THE WEBSITE";
  const fromW = ctx.measureText(fromLabel).width + 28;
  const fromX = W - 72 - fromW;
  ctx.fillStyle = "rgba(201,169,110,0.18)";
  roundRect(ctx, fromX, 94, fromW, 34, 17);
  ctx.fill();
  ctx.fillStyle = "#c9a96e";
  ctx.fillText(fromLabel, fromX + 14, 116);

  // ── Hero flyer card with depth ──
  const cardX = 64;
  const cardY = 190;
  const cardW = W - 128;
  const cardH = 860;

  // Shadow
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.55)";
  ctx.shadowBlur = 60;
  ctx.shadowOffsetY = 28;
  ctx.fillStyle = "#111";
  roundRect(ctx, cardX, cardY, cardW, cardH, 32);
  ctx.fill();
  ctx.restore();

  // Gold edge
  const edge = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  edge.addColorStop(0, "rgba(201,169,110,0.65)");
  edge.addColorStop(0.45, "rgba(201,169,110,0.15)");
  edge.addColorStop(1, "rgba(201,169,110,0.45)");
  ctx.fillStyle = edge;
  roundRect(ctx, cardX - 2, cardY - 2, cardW + 4, cardH + 4, 34);
  ctx.fill();

  ctx.save();
  roundRect(ctx, cardX, cardY, cardW, cardH, 32);
  ctx.clip();
  ctx.fillStyle = "#12100c";
  ctx.fillRect(cardX, cardY, cardW, cardH);
  if (flyer) {
    drawContain(ctx, flyer, cardX + 10, cardY + 10, cardW - 20, cardH - 20);
  }
  ctx.restore();

  // ── Modern info section ──
  const infoY = cardY + cardH + 48;

  // Giant date column (editorial)
  ctx.fillStyle = "#c9a96e";
  ctx.font = "300 120px 'Cormorant Garamond', Georgia, serif";
  ctx.fillText(day, 64, infoY + 108);

  ctx.fillStyle = "rgba(201,169,110,0.9)";
  ctx.font = "500 28px 'DM Sans', system-ui, sans-serif";
  ctx.fillText(month, 64, infoY + 152);

  // Vertical gold divider
  ctx.fillStyle = "rgba(201,169,110,0.35)";
  ctx.fillRect(250, infoY + 18, 2, 150);

  // Title + meta
  const textX = 290;
  const badge =
    event.role === "hosting" ? "CO-FOUNDED BY NATALI" : "BLOOM ATTENDING";

  ctx.font = "600 16px 'DM Sans', system-ui, sans-serif";
  const badgeW = ctx.measureText(badge).width + 28;
  ctx.fillStyle = "#c9a96e";
  roundRect(ctx, textX, infoY + 8, badgeW, 36, 18);
  ctx.fill();
  ctx.fillStyle = "#0c0c0c";
  ctx.fillText(badge, textX + 14, infoY + 32);

  ctx.fillStyle = "#f5f0e8";
  ctx.font = "300 64px 'Cormorant Garamond', Georgia, serif";
  const titleLines = wrapText(ctx, event.title, W - textX - 64).slice(0, 2);
  let ty = infoY + 110;
  titleLines.forEach((line) => {
    ctx.fillText(line, textX, ty);
    ty += 68;
  });

  // Detail chips
  const chipsY = Math.max(ty + 28, infoY + 200);
  const chips = [
    { label: weekday },
    { label: event.time },
    { label: event.location },
  ].filter((c) => c.label);

  let chipX = textX;
  ctx.font = "500 18px 'DM Sans', system-ui, sans-serif";
  chips.forEach((chip, i) => {
    const label = i === chips.length - 1 && chip.label.length > 22
      ? `${chip.label.slice(0, 20)}…`
      : chip.label;
    const cw = ctx.measureText(label).width + 32;
    if (chipX + cw > W - 64) return;
    ctx.fillStyle = "rgba(245,240,232,0.08)";
    ctx.strokeStyle = "rgba(245,240,232,0.16)";
    ctx.lineWidth = 1;
    roundRect(ctx, chipX, chipsY, cw, 44, 22);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(245,240,232,0.85)";
    ctx.fillText(label, chipX + 16, chipsY + 29);
    chipX += cw + 12;
  });

  // ── Website CTA — unmistakable “from Bloom site” ──
  const ctaY = H - 220;
  ctx.fillStyle = "rgba(201,169,110,0.12)";
  roundRect(ctx, 48, ctaY, W - 96, 128, 28);
  ctx.fill();
  ctx.strokeStyle = "rgba(201,169,110,0.4)";
  ctx.lineWidth = 1.5;
  roundRect(ctx, 48, ctaY, W - 96, 128, 28);
  ctx.stroke();

  ctx.fillStyle = "rgba(245,240,232,0.45)";
  ctx.font = "500 16px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("SEE THIS EVENT ON", 80, ctaY + 42);

  ctx.fillStyle = "#c9a96e";
  ctx.font = "500 34px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("bloomflowerwallrentals.com", 80, ctaY + 88);

  // Arrow circle
  ctx.beginPath();
  ctx.arc(W - 112, ctaY + 64, 28, 0, Math.PI * 2);
  ctx.fillStyle = "#c9a96e";
  ctx.fill();
  ctx.strokeStyle = "#0c0c0c";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(W - 122, ctaY + 64);
  ctx.lineTo(W - 102, ctaY + 64);
  ctx.moveTo(W - 108, ctaY + 56);
  ctx.lineTo(W - 100, ctaY + 64);
  ctx.lineTo(W - 108, ctaY + 72);
  ctx.stroke();

  ctx.fillStyle = "rgba(245,240,232,0.35)";
  ctx.font = "400 18px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("@bloomflowerwallrentals  ·  Clermont, FL", 64, H - 48);

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
