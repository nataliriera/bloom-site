/**
 * Flower wall catalog — shared by Gallery / Flower Walls page and pricing.
 */
import whiteGarden from "../assets/walls/white-garden.jpg";
import whiteGarden2 from "../assets/walls/white-garden-2.jpg";
import whiteGarden3 from "../assets/walls/white-garden-3.jpg";
import enchantedGarden from "../assets/walls/enchanted-garden.jpg";
import enchantedGarden2 from "../assets/walls/enchanted-garden-2.jpg";
import enchantedGarden3 from "../assets/walls/enchanted-garden-3.jpg";
import tropicalOasis from "../assets/walls/tropical-oasis.jpg";
import midnightNoir from "../assets/walls/midnight-noir.jpg";
import midnightNoir2 from "../assets/walls/midnight-noir-2.jpg";
import midnightNoir3 from "../assets/walls/midnight-noir-3.jpg";
import blushOmbre from "../assets/walls/blush-ombre.jpg";
import pinkMix from "../assets/walls/pink-mix.jpg";
import redRose from "../assets/walls/red-rose.jpg";
import blueRose from "../assets/walls/blue-rose.jpg";
import boxwoodCascade from "../assets/walls/boxwood-cascade.jpg";
import purpleGarden from "../assets/walls/purple-garden.jpg";

/** @typedef {{ id: string, name: string, description: string, price: string | null, status: 'available' | 'preorder', leadWeeks?: string, images: string[] }} Wall */

/** @type {Wall[]} */
export const walls = [
  {
    id: "white-garden",
    name: "White Garden",
    description: "Soft whites for ceremonies, portraits, and classic celebrations.",
    price: "Starting at $350",
    status: "available",
    images: [whiteGarden, whiteGarden2, whiteGarden3],
  },
  {
    id: "midnight-noir",
    name: "Midnight Noir",
    description: "Deep florals for evening events and dramatic photo moments.",
    price: "Starting at $500",
    status: "available",
    images: [midnightNoir, midnightNoir2, midnightNoir3],
  },
  {
    id: "enchanted-garden",
    name: "Enchanted Garden",
    description: "Full-color florals for showers, birthdays, and parties.",
    price: "Starting at $350",
    status: "available",
    images: [enchantedGarden, enchantedGarden2, enchantedGarden3],
  },
  {
    id: "tropical-oasis",
    name: "Tropical Oasis",
    description: "Lush greenery for outdoor and tropical-inspired settings.",
    price: "Starting at $450",
    status: "available",
    images: [tropicalOasis],
  },
  {
    id: "blush-ombre",
    name: "Blush Ombré",
    description: "Soft blush tones for romantic showers and intimate events.",
    price: null,
    status: "preorder",
    leadWeeks: "6+ weeks",
    images: [blushOmbre],
  },
  {
    id: "pink-garden-mix",
    name: "Pink Garden Mix",
    description: "High-impact pinks for bold celebration backdrops.",
    price: null,
    status: "preorder",
    leadWeeks: "6+ weeks",
    images: [pinkMix],
  },
  {
    id: "red-rose",
    name: "Red Rose",
    description: "Bold red florals for dramatic statement moments.",
    price: null,
    status: "preorder",
    leadWeeks: "6+ weeks",
    images: [redRose],
  },
  {
    id: "dusty-blue",
    name: "Dusty Blue",
    description: "Muted blues suited for baby showers and soft themes.",
    price: null,
    status: "preorder",
    leadWeeks: "6+ weeks",
    images: [blueRose],
  },
  {
    id: "boxwood-cascade",
    name: "Boxwood + White Cascade",
    description: "Classic greenery and white for wedding ceremonies.",
    price: null,
    status: "preorder",
    leadWeeks: "8+ weeks",
    images: [boxwoodCascade],
  },
  {
    id: "purple-garden",
    name: "Purple Garden",
    description: "Unique purple florals for standing-out celebrations.",
    price: null,
    status: "preorder",
    leadWeeks: "6+ weeks",
    images: [purpleGarden],
  },
];

export const availableWalls = walls.filter((w) => w.status === "available");
export const preorderWalls = walls.filter((w) => w.status === "preorder");
