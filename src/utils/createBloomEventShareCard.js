import logoUrl from "../assets/bloom-logo.png";

const W = 1080;
const H = 1350; // Instagram portrait / Stories-friendly

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

/**
 * Builds a Bloom-branded Instagram share card (canvas → PNG File).
 * Looks like it came from bloomflowerwallrentals.com.
 */
export async function createBloomEventShareCard(event) {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#0c0c0c";
  ctx.fillRect(0, 0, W, H);

  // Soft gold glow
  const glow = ctx.createRadialGradient(W * 0.85, 80, 40, W * 0.85, 120, 520);
  glow.addColorStop(0, "rgba(201,169,110,0.18)");
  glow.addColorStop(1, "rgba(201,169,110,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // Top gold rule
  ctx.fillStyle = "rgba(201,169,110,0.35)";
  ctx.fillRect(72, 56, 48, 2);

  // Brand eyebrow
  ctx.fillStyle = "#c9a96e";
  ctx.font = "500 22px 'DM Sans', system-ui, sans-serif";
  ctx.letterSpacing = "6px";
  ctx.fillText("BLOOM FLOWER WALL RENTALS", 72, 100);

  // Logo
  try {
    const logo = await loadImage(logoUrl);
    const logoH = 56;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, W - 72 - logoW, 62, logoW, logoH);
  } catch {
    // Logo optional
  }

  // Event image frame
  const frameX = 72;
  const frameY = 140;
  const frameW = W - 144;
  const frameH = 620;
  ctx.fillStyle = "rgba(201,169,110,0.2)";
  roundRect(ctx, frameX - 2, frameY - 2, frameW + 4, frameH + 4, 18);
  ctx.fill();

  ctx.save();
  roundRect(ctx, frameX, frameY, frameW, frameH, 16);
  ctx.clip();
  ctx.fillStyle = "#14110c";
  ctx.fillRect(frameX, frameY, frameW, frameH);

  if (event.image) {
    try {
      const flyer = await loadImage(event.image);
      drawCover(ctx, flyer, frameX, frameY, frameW, frameH);
      // Soft bottom fade so text area feels connected
      const fade = ctx.createLinearGradient(0, frameY + frameH - 140, 0, frameY + frameH);
      fade.addColorStop(0, "rgba(12,12,12,0)");
      fade.addColorStop(1, "rgba(12,12,12,0.55)");
      ctx.fillStyle = fade;
      ctx.fillRect(frameX, frameY + frameH - 140, frameW, 140);
    } catch {
      // keep dark frame
    }
  }
  ctx.restore();

  // Role badge
  const badge =
    event.role === "hosting" ? "CO-FOUNDED BY NATALI" : "BLOOM ATTENDING";
  ctx.font = "500 18px 'DM Sans', system-ui, sans-serif";
  const badgeW = ctx.measureText(badge).width + 36;
  const badgeX = 72;
  const badgeY = frameY + frameH + 36;
  ctx.fillStyle = "rgba(201,169,110,0.12)";
  ctx.strokeStyle = "rgba(201,169,110,0.45)";
  ctx.lineWidth = 1.5;
  roundRect(ctx, badgeX, badgeY, badgeW, 40, 4);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#c9a96e";
  ctx.fillText(badge, badgeX + 18, badgeY + 27);

  // Title
  ctx.fillStyle = "#f5f0e8";
  ctx.font = "300 64px 'Cormorant Garamond', Georgia, serif";
  const titleLines = wrapText(ctx, event.title, W - 144).slice(0, 3);
  let titleY = badgeY + 110;
  titleLines.forEach((line) => {
    ctx.fillText(line, 72, titleY);
    titleY += 72;
  });

  // Date / place
  ctx.fillStyle = "rgba(245,240,232,0.72)";
  ctx.font = "400 28px 'DM Sans', system-ui, sans-serif";
  ctx.fillText(event.dateLabel, 72, titleY + 20);
  ctx.fillText(`${event.time}  ·  ${event.location}`, 72, titleY + 62);

  // Bottom brand bar
  ctx.fillStyle = "rgba(201,169,110,0.14)";
  ctx.fillRect(0, H - 120, W, 1);

  ctx.fillStyle = "#c9a96e";
  ctx.font = "500 24px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("bloomflowerwallrentals.com", 72, H - 58);

  ctx.fillStyle = "rgba(245,240,232,0.45)";
  ctx.font = "400 22px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("@bloomflowerwallrentals", W - 72 - ctx.measureText("@bloomflowerwallrentals").width, H - 58);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("Could not create share card");

  const filename = `${(event.title || "bloom-event")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-bloom.png`;

  return {
    file: new File([blob], filename, { type: "image/png" }),
    previewUrl: URL.createObjectURL(blob),
  };
}
