/**
 * Portfolio projects — real Bloom installs and events.
 * Prefer finished-setup photography over flyers.
 */
import whiteGarden from "../assets/walls/white-garden.jpg";
import whiteGarden2 from "../assets/walls/white-garden-2.jpg";
import whiteGarden3 from "../assets/walls/white-garden-3.jpg";
import enchantedGarden from "../assets/walls/enchanted-garden.jpg";
import enchantedGarden2 from "../assets/walls/enchanted-garden-2.jpg";
import enchantedGarden3 from "../assets/walls/enchanted-garden-3.jpg";
import midnightNoir from "../assets/walls/midnight-noir.jpg";
import midnightNoir2 from "../assets/walls/midnight-noir-2.jpg";
import midnightNoir3 from "../assets/walls/midnight-noir-3.jpg";
import tropicalOasis from "../assets/walls/tropical-oasis.jpg";
import aboutSetup from "../assets/about-setup.png";
import fallIntoWellnessSetup from "../assets/events/fall-into-wellness-setup.jpg";
import fallIntoWellness1 from "../assets/events/fall-into-wellness-1.jpg";
import fallIntoWellness2 from "../assets/events/fall-into-wellness-2.jpg";
import fallIntoWellness3 from "../assets/events/fall-into-wellness-3.jpg";
import fallIntoWellness4 from "../assets/events/fall-into-wellness-4.jpg";
import fallIntoWellness5 from "../assets/events/fall-into-wellness-5.jpg";
import fallIntoWellness6 from "../assets/events/fall-into-wellness-6.jpg";
import tropicalOasis1 from "../assets/portfolio/tropical-oasis-1.jpg";
import tropicalOasis2 from "../assets/portfolio/tropical-oasis-2.jpg";
import tropicalOasis3 from "../assets/portfolio/tropical-oasis-3.jpg";
import tropicalOasis4 from "../assets/portfolio/tropical-oasis-4.jpg";
import tropicalOasis5 from "../assets/portfolio/tropical-oasis-5.jpg";
import tropicalOasis6 from "../assets/portfolio/tropical-oasis-6.jpg";
import whiteGardenBridal1 from "../assets/portfolio/white-garden-1.jpg";
import whiteGardenBridal2 from "../assets/portfolio/white-garden-2.jpg";
import whiteGardenOutdoor from "../assets/portfolio/white-garden-3.jpg";
import enchanted1 from "../assets/portfolio/enchanted-1.jpg";
import enchanted2 from "../assets/portfolio/enchanted-2.jpg";
import enchanted3 from "../assets/portfolio/enchanted-3.jpg";
import enchanted4 from "../assets/portfolio/enchanted-4.jpg";
import enchanted5 from "../assets/portfolio/enchanted-5.jpg";
import enchanted6 from "../assets/portfolio/enchanted-6.jpg";
import enchanted7 from "../assets/portfolio/enchanted-7.jpg";
import enchanted8 from "../assets/portfolio/enchanted-8.jpg";
import enchanted9 from "../assets/portfolio/enchanted-9.jpg";
import enchanted10 from "../assets/portfolio/enchanted-10.jpg";

/** @typedef {{ id: string, title: string, eventType: string, service: string, location?: string, description: string, images: string[] }} PortfolioProject */

/** @type {PortfolioProject[]} */
export const portfolioProjects = [
  {
    id: "enchanted-garden-celebration",
    title: "Enchanted Garden",
    eventType: "Weddings · markets · celebrations",
    service: "Flower wall rental",
    location: "Central Florida",
    description:
      "Full-color florals for soirées, markets, bridal moments, and parties, with neon details included.",
    images: [
      enchanted1,
      enchanted2,
      enchanted3,
      enchanted4,
      enchanted5,
      enchanted6,
      enchanted7,
      enchanted8,
      enchanted9,
      enchanted10,
      enchantedGarden2,
      enchantedGarden3,
      enchantedGarden,
    ],
  },
  {
    id: "fall-into-wellness",
    title: "Fall Into Wellness",
    eventType: "Community / wellness",
    service: "Event styling",
    location: "Victory Pointe Park, Clermont",
    description:
      "A photo-ready floral moment for a Central Florida wellness gathering by the lake.",
    images: [
      fallIntoWellnessSetup,
      fallIntoWellness1,
      fallIntoWellness2,
      fallIntoWellness3,
      fallIntoWellness4,
      fallIntoWellness5,
      fallIntoWellness6,
    ],
  },
  {
    id: "tropical-oasis-wedding",
    title: "Tropical Oasis Wedding",
    eventType: "Wedding",
    service: "Flower wall rental",
    location: "Central Florida",
    description:
      "Tropical Oasis greenery wall with neon signage for a resort wedding sweetheart table and guest photos.",
    images: [
      tropicalOasis1,
      tropicalOasis2,
      tropicalOasis3,
      tropicalOasis4,
      tropicalOasis5,
      tropicalOasis6,
      tropicalOasis,
    ],
  },
  {
    id: "white-garden-ceremony",
    title: "White Garden Ceremony",
    eventType: "Wedding",
    service: "Flower wall rental",
    location: "Central Florida",
    description:
      "White Garden backdrop for bridal portraits and photo-ready wedding moments.",
    images: [
      whiteGardenBridal1,
      whiteGardenBridal2,
      whiteGardenOutdoor,
      whiteGarden,
      whiteGarden2,
      whiteGarden3,
    ],
  },
  {
    id: "midnight-noir-evening",
    title: "Midnight Noir Evening",
    eventType: "Celebration",
    service: "Flower wall rental",
    location: "Central Florida",
    description: "Deep florals for an evening celebration backdrop.",
    images: [midnightNoir, midnightNoir2, midnightNoir3],
  },
  {
    id: "on-site-install",
    title: "On-Site Install",
    eventType: "Event setup",
    service: "Delivery & setup",
    location: "Central Florida",
    description: "Bloom setting a polished floral moment before guests arrive.",
    images: [aboutSetup],
  },
];

export const featuredPortfolio = portfolioProjects;
