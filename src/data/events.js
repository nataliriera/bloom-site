import sunsetAcresFlyer from "../assets/events/sunset-acres-open-house.png";
import sunsetAcresSetup from "../assets/events/sunset-acres-setup.jpg";
import weddingExpoFlyer from "../assets/events/wedding-expo-the-venue.png";
import weddingExpoSetup from "../assets/events/wedding-expo-setup.jpg";
import fallIntoWellnessFlyer from "../assets/events/fall-into-wellness.png";
import fallIntoWellnessSetup from "../assets/events/fall-into-wellness-setup.jpg";

/**
 * Community / expo appearances.
 * role: "bloom" = Bloom attending · "hosting" = Natali co-founded / organizing
 * image: prefer real setup / wall photos; flyer kept when useful as secondary reference
 */
export const communityEvents = [
  {
    id: "sunset-acres-open-house",
    title: "Open House at Sunset Acres",
    subtitle: "Sunset Acres · Clermont",
    category: "Wedding",
    role: "bloom",
    date: "2026-07-15",
    dateLabel: "Wednesday, July 15, 2026",
    time: "5:00 PM – 8:00 PM",
    location: "Sunset Acres, A Gathering Place",
    address: "10711 County Road 561, Clermont, FL 34711",
    organizer: "Moments Defined Weddings and Events",
    description:
      "Tour the stunning venue, enjoy light bites, and meet local wedding vendors. Bloom will be there. Come see our flower walls in person.",
    admission: "Open house",
    image: sunsetAcresSetup,
    imageAlt:
      "Bloom booth at Sunset Acres with Enchanted Garden flower wall and Happily Ever After neon sign",
    flyer: sunsetAcresFlyer,
    eventUrl:
      "https://www.eventbrite.com/e/sunset-acres-open-house-and-vendor-meet-and-greet-tickets-1990730164511",
  },
  {
    id: "wedding-expo-the-venue",
    title: "Wedding Expo",
    subtitle: "The Venue · Clermont",
    category: "Wedding",
    role: "bloom",
    date: "2026-09-10",
    dateLabel: "Thursday, September 10, 2026",
    time: "4:00 PM – 8:00 PM",
    location: "The Venue",
    address: "2400 S. Hwy 27, Bldg. 1-101, Clermont, FL 34711",
    organizer: "The Venue",
    description:
      "Central Florida's premier wedding showcase. Meet top local professionals and see Bloom's flower walls on display.",
    admission: "Free admission",
    image: weddingExpoSetup,
    imageAlt:
      "Bloom Flower Wall Rentals booth at The Venue wedding expo with Midnight Noir, White Garden, Enchanted Garden, and greenery walls",
    flyer: weddingExpoFlyer,
    eventUrl: "https://www.thevenueclermont.com",
  },
  {
    id: "fall-into-wellness",
    title: "Fall into Wellness",
    subtitle: "Wellness Collective FL",
    category: "Wellness",
    role: "hosting",
    date: "2026-09-19",
    dateLabel: "Saturday, September 19, 2026",
    time: "10:00 AM – 2:00 PM",
    location: "Victory Pointe Park",
    address: "201 Victory Way, Clermont, FL 34711",
    organizer: "Wellness Collective FL",
    description:
      "A curated wellness day for the community with yoga, movement, healthy food, and holistic living by the lake. Co-founded by Natali and the Wellness Collective FL team.",
    admission: "Open to the community",
    image: fallIntoWellnessSetup,
    imageAlt:
      "Fall into Wellness White Garden backdrop with Bloom banner and floral side arrangements outdoors",
    flyer: fallIntoWellnessFlyer,
    eventUrl: "https://www.wellnesscollectivefl.com/",
  },
];

/** @deprecated Prefer communityEvents + getUpcomingEvents / getRecentEvents */
export const upcomingEvents = communityEvents;

function eventDayStart(dateStr) {
  return new Date(`${dateStr}T12:00:00`);
}

function todayStart(ref = new Date()) {
  return new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
}

/** Events on or after today (local), sorted soonest first */
export function getUpcomingEvents(refDate = new Date()) {
  const today = todayStart(refDate);
  return communityEvents
    .filter((e) => eventDayStart(e.date) >= today)
    .sort((a, b) => eventDayStart(a.date) - eventDayStart(b.date));
}

/** Events before today (local), sorted most recent first */
export function getRecentEvents(refDate = new Date()) {
  const today = todayStart(refDate);
  return communityEvents
    .filter((e) => eventDayStart(e.date) < today)
    .sort((a, b) => eventDayStart(b.date) - eventDayStart(a.date));
}
