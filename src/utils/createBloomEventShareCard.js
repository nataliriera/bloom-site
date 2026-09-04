import logoUrl from "../assets/bloom-logo.png";

// True Instagram Stories size — fills the screen edge to edge
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

/** Fit whole flyer inside the frame (no crop) */
function drawContain(ctx, img, x, y, w, h) {
  const scale = Math.min(w / img.width, h / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  const dx = x + (w - dw) / 2;
  const dy = y + (h - dh) / 2;
  ctx.drawImage(img, dx, dy, dw, dh);
  return { dx, dy, dw, dh };
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
 * Full-bleed Bloom Instagram Story card (1080×1920).
 */
export async function createBloomEventShareCard(event) {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Base
  ctx.fillStyle = "#0c0c0c";
  ctx.fillRect(0, 0, W, H);

  // Ambient gold glows (website feel)
  const topGlow = ctx.createRadialGradient(W * 0.5, 0, 40, W * 0.5, 0, 700);
  topGlow.addColorStop(0, "rgba(201,169,110,0.22)");
  topGlow.addColorStop(1, "rgba(201,169,110,0)");
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, W, H);

  const bottomGlow = ctx.createRadialGradient(W * 0.2, H, 20, W * 0.2, H, 560);
  bottomGlow.addColorStop(0, "rgba(201,169,110,0.12)");
  bottomGlow.addColorStop(1, "rgba(201,169,110,0)");
  ctx.fillStyle = bottomGlow;
  ctx.fillRect(0, 0, W, H);

  // Top brand row
  ctx.fillStyle = "rgba(201,169,110,0.4)";
  ctx.fillRect(64, 88, 40, 2);

  ctx.fillStyle = "#c9a96e";
  ctx.font = "500 20px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("BLOOM FLOWER WALL RENTALS", 64, 128);

  try {
    const logo = await loadImage(logoUrl);
    const logoH = 64;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, W - 64 - logoW, 86, logoW, logoH);
  } catch {
    // optional
  }

  // Flyer panel — large, centered, contain (show full flyer)
  const frameX = 48;
  const frameY = 170;
  const frameW = W - 96;
  const frameH = 980;

  // Soft panel behind flyer
  ctx.fillStyle = "#12100d";
  roundRect(ctx, frameX, frameY, frameW, frameH, 28);
  ctx.fill();
  ctx.strokeStyle = "rgba(201,169,110,0.28)";
  ctx.lineWidth = 2;
  roundRect(ctx, frameX, frameY, frameW, frameH, 28);
  ctx.stroke();

  ctx.save();
  roundRect(ctx, frameX + 16, frameY + 16, frameW - 32, frameH - 32, 20);
  ctx.clip();
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(frameX + 16, frameY + 16, frameW - 32, frameH - 32);

  if (event.image) {
    try {
      const flyer = await loadImage(event.image);
      drawContain(
        ctx,
        flyer,
        frameX + 16,
        frameY + 16,
        frameW - 32,
        frameH - 32
      );
    } catch {
      // keep dark
    }
  }
  ctx.restore();

  // Info block — tight under flyer (no big empty gap)
  let y = frameY + frameH + 48;

  const badge =
    event.role === "hosting" ? "CO-FOUNDED BY NATALI" : "BLOOM ATTENDING";
  ctx.font = "500 18px 'DM Sans', system-ui, sans-serif";
  const badgePadX = 22;
  const badgeW = ctx.measureText(badge).width + badgePadX * 2;
  ctx.fillStyle = "rgba(201,169,110,0.14)";
  ctx.strokeStyle = "rgba(201,169,110,0.5)";
  ctx.lineWidth = 1.5;
  roundRect(ctx, 64, y, badgeW, 42, 6);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#c9a96e";
  ctx.fillText(badge, 64 + badgePadX, y + 28);

  y += 100;

  ctx.fillStyle = "#f5f0e8";
  ctx.font = "300 72px 'Cormorant Garamond', Georgia, serif";
  const titleLines = wrapText(ctx, event.title, W - 128).slice(0, 2);
  titleLines.forEach((line) => {
    ctx.fillText(line, 64, y);
    y += 78;
  });

  y += 8;
  ctx.fillStyle = "rgba(245,240,232,0.7)";
  ctx.font = "400 28px 'DM Sans', system-ui, sans-serif";
  ctx.fillText(event.dateLabel, 64, y);
  y += 44;
  ctx.fillText(`${event.time}  ·  ${event.location}`, 64, y);

  // Bottom brand strip — pinned to story bottom
  ctx.fillStyle = "rgba(201,169,110,0.16)";
  ctx.fillRect(64, H - 168, W - 128, 1);

  ctx.fillStyle = "#c9a96e";
  ctx.font = "500 26px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("bloomflowerwallrentals.com", 64, H - 108);

  ctx.fillStyle = "rgba(245,240,232,0.5)";
  ctx.font = "400 24px 'DM Sans', system-ui, sans-serif";
  const handle = "@bloomflowerwallrentals";
  ctx.fillText(handle, W - 64 - ctx.measureText(handle).width, H - 108);

  ctx.fillStyle = "rgba(245,240,232,0.35)";
  ctx.font = "400 20px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("Find Bloom at this event  ·  Clermont, FL", 64, H - 62);

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
