import logoUrl from "../assets/bloom-logo.png";

/** Instagram Stories */
const W = 1080;
const H = 1920;

const C = {
  bg: "#f4efe6",
  ink: "#1f1b17",
  inkSoft: "rgba(31,27,23,0.58)",
  inkMute: "rgba(31,27,23,0.38)",
  gold: "#b8955e",
  goldLine: "rgba(184,149,94,0.32)",
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

function roleLabel(event) {
  if (event.role === "hosting") return "Co-founded by Natali";
  if (event.role === "bloom") return "Bloom Attending";
  return null;
}

/**
 * Minimal editorial frame around the event flyer.
 * The flyer is treated as finished artwork — shown whole, uncropped, unmodified.
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

  const badge = roleLabel(event);

  // Warm ivory field — calm gallery wall
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);

  // Small Bloom branding
  const brandY = 86;
  if (logo) {
    const logoH = 32;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, 72, brandY, logoW, logoH);
  }

  ctx.fillStyle = C.ink;
  ctx.font = "500 16px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("BLOOM", 120, brandY + 13);
  ctx.fillStyle = C.inkMute;
  ctx.font = "400 11px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("FLOWER WALL RENTALS", 120, brandY + 30);

  if (badge) {
    ctx.font = "500 12px 'DM Sans', system-ui, sans-serif";
    const label = badge.toUpperCase();
    ctx.fillStyle = C.gold;
    ctx.fillText(label, W - 72 - ctx.measureText(label).width, brandY + 22);
  }

  ctx.fillStyle = C.goldLine;
  ctx.fillRect(72, 148, W - 144, 1);

  // Artwork area — flyer takes most of the story, shown in full
  const artMaxW = W - 120;
  const artMaxH = Math.round(H * 0.68);
  const artTop = 176;
  let artBottom = artTop + artMaxH;

  if (flyer) {
    // Fit entire flyer (no crop, no stretch, no redesign)
    const scale = Math.min(artMaxW / flyer.width, artMaxH / flyer.height);
    const dw = Math.round(flyer.width * scale);
    const dh = Math.round(flyer.height * scale);
    const dx = Math.round((W - dw) / 2);
    const dy = artTop;

    const radius = 16;
    ctx.save();
    ctx.shadowColor = "rgba(31,27,23,0.12)";
    ctx.shadowBlur = 28;
    ctx.shadowOffsetY = 10;
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, dx, dy, dw, dh, radius);
    ctx.fill();
    ctx.restore();

    ctx.save();
    roundRect(ctx, dx, dy, dw, dh, radius);
    ctx.clip();
    ctx.drawImage(flyer, dx, dy, dw, dh);
    ctx.restore();

    artBottom = dy + dh;
  } else {
    ctx.fillStyle = "rgba(31,27,23,0.04)";
    roundRect(ctx, 72, artTop, artMaxW, Math.round(artMaxH * 0.5), 16);
    ctx.fill();
    artBottom = artTop + Math.round(artMaxH * 0.5);
  }

  // Essentials only — sits under the artwork
  let infoY = artBottom + 44;
  const maxInfoBottom = H - 140;

  ctx.textAlign = "center";
  ctx.fillStyle = C.ink;
  ctx.font = "300 44px 'Cormorant Garamond', Georgia, serif";
  const titleLines = wrapText(ctx, event.title, W - 160).slice(0, 2);
  titleLines.forEach((line) => {
    if (infoY > maxInfoBottom) return;
    ctx.fillText(line, W / 2, infoY);
    infoY += 50;
  });

  if (infoY + 70 < maxInfoBottom) {
    infoY += 8;
    ctx.fillStyle = C.goldLine;
    ctx.fillRect(W / 2 - 16, infoY, 32, 1);
    infoY += 30;

    ctx.fillStyle = C.inkSoft;
    ctx.font = "400 20px 'DM Sans', system-ui, sans-serif";
    if (event.dateLabel) {
      ctx.fillText(event.dateLabel, W / 2, infoY);
      infoY += 32;
    }

    const meta = [event.time, event.location].filter(Boolean).join("  ·  ");
    if (meta) {
      ctx.fillStyle = C.inkMute;
      ctx.font = "400 18px 'DM Sans', system-ui, sans-serif";
      wrapText(ctx, meta, W - 180)
        .slice(0, 2)
        .forEach((line) => {
          ctx.fillText(line, W / 2, infoY);
          infoY += 28;
        });
    }
  }

  // Clean footer
  ctx.fillStyle = C.goldLine;
  ctx.fillRect(72, H - 110, W - 144, 1);

  ctx.fillStyle = C.gold;
  ctx.font = "500 17px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("bloomflowerwallrentals.com", W / 2, H - 68);

  ctx.fillStyle = C.inkMute;
  ctx.font = "400 15px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("@bloomflowerwallrentals", W / 2, H - 40);

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
