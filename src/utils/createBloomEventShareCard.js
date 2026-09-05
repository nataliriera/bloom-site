import logoUrl from "../assets/bloom-logo.png";

const W = 1080;
const H = 1920;

const C = {
  bg: "#F7F3ED",
  ink: "#222222",
  muted: "rgba(34,34,34,0.55)",
  gold: "#C6A46A",
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

function dateText(event) {
  if (event.dateLabel) return event.dateLabel;
  if (!event.date) return "";
  return new Date(`${event.date}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function timeText(event) {
  if (event.startTime && event.endTime) return `${event.startTime} – ${event.endTime}`;
  if (event.startTime) return event.startTime;
  return event.time || "";
}

function venueText(event) {
  return event.venue || event.location || "";
}

function attendingText(event) {
  return event.role === "hosting" ? "Co-founded by Natali" : "Bloom Attending";
}

/**
 * Clean luxury editorial Story card.
 * The event flyer is the artwork — Bloom only frames it.
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

  // 1. Warm ivory background
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);

  // 2–3. Small top branding + subtle attending label
  ctx.textAlign = "center";
  let y = 72;

  if (logo) {
    const logoH = 40;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, (W - logoW) / 2, y, logoW, logoH);
    y += logoH + 22;
  }

  ctx.fillStyle = C.gold;
  ctx.font = "500 14px 'DM Sans', system-ui, sans-serif";
  ctx.fillText(attendingText(event).toUpperCase(), W / 2, y);

  // 4–5. Large centered flyer (≈70% of height), full artwork
  const flyerTop = 170;
  const flyerMaxW = W - 128;
  const flyerMaxH = Math.round(H * 0.7);
  let flyerBottom = flyerTop + 200;

  if (flyer) {
    const scale = Math.min(flyerMaxW / flyer.width, flyerMaxH / flyer.height);
    const dw = Math.round(flyer.width * scale);
    const dh = Math.round(flyer.height * scale);
    const dx = Math.round((W - dw) / 2);
    const dy = flyerTop;
    const radius = 24;

    ctx.save();
    ctx.shadowColor = "rgba(34,34,34,0.10)";
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 8;
    ctx.fillStyle = "#fff";
    roundRect(ctx, dx, dy, dw, dh, radius);
    ctx.fill();
    ctx.restore();

    ctx.save();
    roundRect(ctx, dx, dy, dw, dh, radius);
    ctx.clip();
    ctx.drawImage(flyer, dx, dy, dw, dh);
    ctx.restore();

    flyerBottom = dy + dh;
  }

  // 6. Only title, date, time, venue — under the flyer
  let infoY = flyerBottom + 48;
  const maxW = W - 160;

  ctx.textAlign = "center";
  ctx.fillStyle = C.ink;
  ctx.font = "400 42px 'Cormorant Garamond', Georgia, serif";
  const titleLine = wrapText(ctx, event.title || "", maxW)[0] || "";
  ctx.fillText(titleLine, W / 2, infoY);
  infoY += 44;

  ctx.fillStyle = C.muted;
  ctx.font = "400 20px 'DM Sans', system-ui, sans-serif";

  const date = dateText(event);
  const time = timeText(event);
  const venue = venueText(event);

  if (date) {
    ctx.fillText(date, W / 2, infoY);
    infoY += 32;
  }
  if (time) {
    ctx.fillText(time, W / 2, infoY);
    infoY += 32;
  }
  if (venue) {
    const venueLine = wrapText(ctx, venue, maxW)[0];
    ctx.fillText(venueLine, W / 2, infoY);
  }

  // 7. Clean footer
  ctx.fillStyle = "rgba(198,164,106,0.4)";
  ctx.fillRect(W / 2 - 36, H - 108, 72, 1);

  ctx.fillStyle = C.gold;
  ctx.font = "500 16px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("bloomflowerwallrentals.com", W / 2, H - 70);

  ctx.fillStyle = C.muted;
  ctx.font = "400 14px 'DM Sans', system-ui, sans-serif";
  ctx.fillText("@bloomflowerwallrentals", W / 2, H - 42);

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
