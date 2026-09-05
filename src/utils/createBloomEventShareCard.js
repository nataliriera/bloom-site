import logoUrl from "../assets/bloom-logo.png";
import floralBgUrl from "../assets/walls/pink-mix.jpg";

const W = 1080;
const H = 1920;

const C = {
  ink: "#2a221c",
  inkSoft: "rgba(42,34,28,0.62)",
  inkMute: "rgba(42,34,28,0.42)",
  cream: "#fbf7f1",
  creamDeep: "#f3ebe1",
  blush: "#e8b4a8",
  blushDeep: "#d49a8c",
  gold: "#b8955e",
  goldSoft: "rgba(184,149,94,0.2)",
  line: "rgba(42,34,28,0.12)",
  white: "#ffffff",
};

let fontsReadyPromise = null;

function ensureShareFonts() {
  if (fontsReadyPromise) return fontsReadyPromise;

  fontsReadyPromise = (async () => {
    const id = "bloom-share-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600&family=Great+Vibes&display=swap";
      document.head.appendChild(link);
    }

    if (document.fonts?.load) {
      await Promise.all([
        document.fonts.load("400 64px 'Great Vibes'"),
        document.fonts.load("italic 64px 'Cormorant Garamond'"),
        document.fonts.load("600 48px 'Cormorant Garamond'"),
        document.fonts.load("500 20px 'DM Sans'"),
      ]);
    } else {
      await new Promise((r) => setTimeout(r, 350));
    }
  })();

  return fontsReadyPromise;
}

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

function parseDate(dateStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  return {
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase(),
    month: d.toLocaleDateString("en-US", { month: "long" }).toUpperCase(),
    day: d.getDate(),
    year: d.getFullYear(),
  };
}

function splitTitle(title) {
  const parts = String(title || "").trim().split(/\s+/);
  if (parts.length <= 1) {
    return { script: parts[0] || "", rest: "" };
  }
  // "Wedding Expo" → Wedding + EXPO
  if (parts.length === 2) {
    return { script: parts[0], rest: parts[1].toUpperCase() };
  }
  // Longer titles: first word script, remainder uppercase
  return {
    script: parts[0],
    rest: parts.slice(1).join(" ").toUpperCase(),
  };
}

function roleLabel(event) {
  if (event.role === "hosting") return "CO-FOUNDED BY NATALI";
  if (event.role === "bloom") return "BLOOM ATTENDING";
  return "JOIN US";
}

function isFreeAdmission(event) {
  return /free/i.test(event.admission || "");
}

function drawIconCalendar(ctx, x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineJoin = "round";
  roundRect(ctx, x, y + 3, 22, 18, 3);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + 5, y);
  ctx.lineTo(x + 5, y + 6);
  ctx.moveTo(x + 17, y);
  ctx.lineTo(x + 17, y + 6);
  ctx.moveTo(x + 2, y + 9);
  ctx.lineTo(x + 20, y + 9);
  ctx.stroke();
}

function drawIconClock(ctx, x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x + 11, y + 12, 10, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + 11, y + 12);
  ctx.lineTo(x + 11, y + 6);
  ctx.moveTo(x + 11, y + 12);
  ctx.lineTo(x + 16, y + 14);
  ctx.stroke();
}

function drawIconPin(ctx, x, y, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 11, y + 22);
  ctx.bezierCurveTo(x + 11, y + 22, x, y + 12, x, y + 9);
  ctx.arc(x + 11, y + 9, 11, Math.PI, 0, false);
  ctx.bezierCurveTo(x + 22, y + 12, x + 11, y + 22, x + 11, y + 22);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + 11, y + 9, 3.5, 0, Math.PI * 2);
  ctx.fill();
}

function drawHeart(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  const s = size;
  ctx.moveTo(x, y + s * 0.3);
  ctx.bezierCurveTo(x, y, x - s * 0.5, y, x - s * 0.5, y + s * 0.3);
  ctx.bezierCurveTo(x - s * 0.5, y + s * 0.6, x, y + s * 0.85, x, y + s);
  ctx.bezierCurveTo(x, y + s * 0.85, x + s * 0.5, y + s * 0.6, x + s * 0.5, y + s * 0.3);
  ctx.bezierCurveTo(x + s * 0.5, y, x, y, x, y + s * 0.3);
  ctx.fill();
}

/**
 * Romantic editorial Bloom Story card — inspired by luxury wedding promo graphics.
 */
export async function createBloomEventShareCard(event) {
  await ensureShareFonts();

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const [floral, flyer, logo] = await Promise.all([
    loadImage(floralBgUrl).catch(() => null),
    event.image ? loadImage(event.image).catch(() => null) : Promise.resolve(null),
    loadImage(logoUrl).catch(() => null),
  ]);

  const date = parseDate(event.date);
  const { script, rest } = splitTitle(event.title);
  const badge = roleLabel(event);
  const free = isFreeAdmission(event);

  // ── Soft floral atmosphere (taupe + roses) ──
  ctx.fillStyle = "#3a3028";
  ctx.fillRect(0, 0, W, H);

  if (floral) {
    ctx.save();
    ctx.globalAlpha = 0.55;
    ctx.filter = "blur(2px) saturate(0.9) brightness(0.72)";
    drawCover(ctx, floral, -40, -60, W + 80, H + 120);
    ctx.restore();
  }

  // Warm wash
  const wash = ctx.createLinearGradient(0, 0, 0, H);
  wash.addColorStop(0, "rgba(45,36,30,0.55)");
  wash.addColorStop(0.45, "rgba(45,36,30,0.25)");
  wash.addColorStop(1, "rgba(35,28,24,0.75)");
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, W, H);

  // Soft vignette
  const vig = ctx.createRadialGradient(W / 2, H * 0.45, 200, W / 2, H * 0.5, 980);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(0,0,0,0.35)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, W, H);

  // ── Top brand (outside card, centered) ──
  let y = 78;
  if (logo) {
    const logoH = 52;
    const logoW = (logo.width / logo.height) * logoH;
    ctx.drawImage(logo, (W - logoW) / 2, y, logoW, logoH);
    y += logoH + 18;
  }

  ctx.fillStyle = C.gold;
  ctx.font = "500 18px 'Cormorant Garamond', Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("BLOOM FLOWER WALL RENTALS", W / 2, y);
  y += 36;

  // BLOOM ATTENDING with hairlines
  ctx.strokeStyle = "rgba(201,169,110,0.45)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 220, y - 6);
  ctx.lineTo(W / 2 - 110, y - 6);
  ctx.moveTo(W / 2 + 110, y - 6);
  ctx.lineTo(W / 2 + 220, y - 6);
  ctx.stroke();

  ctx.fillStyle = "rgba(245,240,232,0.85)";
  ctx.font = "500 15px 'DM Sans', system-ui, sans-serif";
  ctx.fillText(badge, W / 2, y);
  ctx.textAlign = "left";
  y += 40;

  // ── Cream invitation card ──
  const cardX = 58;
  const cardY = y;
  const cardW = W - 116;
  const cardH = H - cardY - 210;
  const pad = 36;

  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.35)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 16;
  ctx.fillStyle = C.cream;
  roundRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.fill();
  ctx.restore();

  // Hero image
  const heroX = cardX + pad;
  const heroY = cardY + pad;
  const heroW = cardW - pad * 2;
  const heroH = 620;

  ctx.save();
  roundRect(ctx, heroX, heroY, heroW, heroH, 18);
  ctx.clip();
  ctx.fillStyle = C.creamDeep;
  ctx.fillRect(heroX, heroY, heroW, heroH);
  if (flyer) {
    // Prefer rich cover crop for a photo-forward editorial look
    drawCover(ctx, flyer, heroX, heroY, heroW, heroH);
    const fade = ctx.createLinearGradient(0, heroY + heroH * 0.55, 0, heroY + heroH);
    fade.addColorStop(0, "rgba(251,247,241,0)");
    fade.addColorStop(1, "rgba(251,247,241,0.55)");
    ctx.fillStyle = fade;
    ctx.fillRect(heroX, heroY, heroW, heroH);
  }
  ctx.restore();

  // Free admission circular badge
  if (free) {
    const cx = heroX + heroW - 78;
    const cy = heroY + heroH - 70;
    ctx.beginPath();
    ctx.arc(cx, cy, 68, 0, Math.PI * 2);
    ctx.fillStyle = C.blush;
    ctx.fill();
    ctx.strokeStyle = C.gold;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = C.ink;
    ctx.textAlign = "center";
    ctx.font = "600 15px 'Cormorant Garamond', Georgia, serif";
    ctx.fillText("ADMISSION", cx, cy - 10);
    ctx.fillText("IS FREE!", cx, cy + 10);
    ctx.font = "400 11px 'DM Sans', system-ui, sans-serif";
    ctx.fillStyle = "rgba(42,34,28,0.7)";
    ctx.fillText("WELCOME", cx, cy + 30);
    ctx.textAlign = "left";
  }

  // Title block under hero
  let ty = heroY + heroH + 48;
  ctx.textAlign = "center";

  ctx.fillStyle = "#7a5346";
  ctx.font = "400 72px 'Great Vibes', 'Cormorant Garamond', cursive";
  ctx.fillText(script, W / 2, ty);

  if (rest) {
    ty += 58;
    ctx.fillStyle = C.ink;
    ctx.font = "600 52px 'Cormorant Garamond', Georgia, serif";
    const restLines = wrapText(ctx, rest, heroW - 40).slice(0, 2);
    restLines.forEach((line) => {
      ctx.fillText(line, W / 2, ty);
      ty += 56;
    });
  }

  // Subtitle / category line
  ty += 8;
  ctx.fillStyle = C.inkMute;
  ctx.font = "500 14px 'DM Sans', system-ui, sans-serif";
  const sub =
    event.subtitle ||
    (event.category ? `${event.category.toUpperCase()} · CENTRAL FLORIDA` : "CENTRAL FLORIDA");
  ctx.fillText(sub.toUpperCase(), W / 2, ty);

  // Accent script note
  ty += 42;
  ctx.fillStyle = C.blushDeep;
  ctx.font = "400 28px 'Great Vibes', cursive";
  const accent = "Inspiration for your perfect day!";
  ctx.fillText(accent, W / 2, ty);
  const accentW = ctx.measureText(accent).width;
  drawHeart(ctx, W / 2 + accentW / 2 + 14, ty - 16, 14, C.blushDeep);

  // Short description
  ty += 36;
  ctx.fillStyle = C.inkSoft;
  ctx.font = "400 18px 'DM Sans', system-ui, sans-serif";
  const desc = (event.description || "").replace(/\s+/g, " ").trim();
  const descLines = wrapText(ctx, desc, heroW - 20).slice(0, 3);
  descLines.forEach((line) => {
    ctx.fillText(line, W / 2, ty);
    ty += 26;
  });

  // Divider
  ty += 22;
  ctx.strokeStyle = C.line;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(heroX + 40, ty);
  ctx.lineTo(heroX + heroW - 40, ty);
  ctx.stroke();

  // Date / time / location row
  ty += 36;
  const colW = heroW / 3;
  const cols = [
    {
      icon: drawIconCalendar,
      lines: [date.weekday, `${date.month} ${date.day}, ${date.year}`],
    },
    {
      icon: drawIconClock,
      lines: ["TIME", event.time || ""],
    },
    {
      icon: drawIconPin,
      lines: ["LOCATION", event.location || ""],
    },
  ];

  cols.forEach((col, i) => {
    const cx = heroX + colW * i + colW / 2;
    col.icon(ctx, cx - 11, ty, C.gold);
    ctx.textAlign = "center";
    ctx.fillStyle = C.inkSoft;
    ctx.font = "500 12px 'DM Sans', system-ui, sans-serif";
    let ly = ty + 48;
    col.lines.filter(Boolean).forEach((line, li) => {
      const text =
        li === col.lines.length - 1 && line.length > 22
          ? `${line.slice(0, 20)}…`
          : line;
      ctx.font =
        li === 0
          ? "600 11px 'DM Sans', system-ui, sans-serif"
          : "400 13px 'DM Sans', system-ui, sans-serif";
      ctx.fillStyle = li === 0 ? C.inkMute : C.ink;
      // wrap location lightly
      if (li > 0 && line.length > 18) {
        const parts = wrapText(ctx, line, colW - 24).slice(0, 2);
        parts.forEach((p) => {
          ctx.fillText(p, cx, ly);
          ly += 18;
        });
      } else {
        ctx.fillText(text, cx, ly);
        ly += 18;
      }
    });

    if (i < 2) {
      ctx.strokeStyle = C.line;
      ctx.beginPath();
      ctx.moveTo(heroX + colW * (i + 1), ty + 8);
      ctx.lineTo(heroX + colW * (i + 1), ty + 78);
      ctx.stroke();
    }
  });

  // Blush CTA pill
  const ctaY = cardY + cardH - 86;
  const ctaLabel = "TAP TO LEARN MORE  →";
  ctx.font = "600 15px 'DM Sans', system-ui, sans-serif";
  const ctaW = Math.max(280, ctx.measureText(ctaLabel).width + 64);
  const ctaX = (W - ctaW) / 2;

  ctx.save();
  ctx.shadowColor = "rgba(212,154,140,0.45)";
  ctx.shadowBlur = 24;
  const ctaGrad = ctx.createLinearGradient(ctaX, ctaY, ctaX + ctaW, ctaY + 52);
  ctaGrad.addColorStop(0, C.blush);
  ctaGrad.addColorStop(1, C.blushDeep);
  ctx.fillStyle = ctaGrad;
  roundRect(ctx, ctaX, ctaY, ctaW, 52, 26);
  ctx.fill();
  ctx.restore();

  ctx.fillStyle = C.ink;
  ctx.textAlign = "center";
  ctx.font = "600 15px 'DM Sans', system-ui, sans-serif";
  ctx.fillText(ctaLabel, W / 2, ctaY + 33);

  // ── Footer outside card ──
  ctx.fillStyle = "rgba(245,240,232,0.92)";
  ctx.font = "400 34px 'Great Vibes', cursive";
  ctx.fillText("We can't wait to see you there!", W / 2, H - 118);
  drawHeart(ctx, W / 2 + 195, H - 138, 16, C.blush);

  ctx.fillStyle = "rgba(245,240,232,0.55)";
  ctx.font = "400 16px 'DM Sans', system-ui, sans-serif";
  ctx.fillText(
    "bloomflowerwallrentals.com   ·   @bloomflowerwallrentals",
    W / 2,
    H - 68
  );
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
