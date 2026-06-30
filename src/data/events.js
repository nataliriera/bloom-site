import clermontFreedom5kImg from "../assets/events/clermont-freedom-5k.png";
import sunsetAcresImg from "../assets/events/sunset-acres-open-house.png";
import weddingExpoImg from "../assets/events/wedding-expo-the-venue.png";
import fallIntoWellnessImg from "../assets/events/fall-into-wellness.png";

/** role: "bloom" = Bloom is attending; "hosting" = Natali co-founded / is organizing */
export const upcomingEvents = [
  {
    id: "clermont-freedom-5k",
    title: "Clermont Freedom 5K",
    subtitle: "Downtown Clermont · July 4th",
    category: "Community",
    role: "bloom",
    date: "2026-07-04",
    dateLabel: "Saturday, July 4, 2026",
    time: "7:30 AM",
    location: "Downtown Clermont",
    address: "685 W Montrose St, Clermont, FL 34711",
    organizer: "FloDash Events",
    description:
      "Celebrate Independence Day with Central Florida's favorite July 4th 5K — live run/walk through downtown Clermont, finishing at Suncreek Brewery. Bloom will be there with a flower wall — come run, cheer, and snap a photo!",
    admission: "Register online",
    image: clermontFreedom5kImg,
    imageAlt: "Clermont Freedom 5K July 4th promotional flyer",
    eventUrl:
      "https://runsignup.com/Race/FL/Clermont/ClermontFreedom5kand1mile",
  },
  {
    id: "sunset-acres-open-house",
    title: "Open House at Sunset Acres",
    subtitle: "Sunset Acres · Clermont",
    category: "Wedding",
    role: "bloom",
    date: "2026-07-15",
    dateLabel: "Wednesday, July 15, 2026",
    time: "5:00 PM – 8:00 PM",
    location: "Sunset Acres — A Gathering Place",
    address: "10711 County Road 561, Clermont, FL 34711",
    organizer: "Moments Defined Weddings and Events",
    description:
      "Tour the stunning venue, enjoy light bites, and meet local wedding vendors. Bloom will be there — come see our flower walls in person.",
    admission: "Open house",
    image: sunsetAcresImg,
    imageAlt: "Sunset Acres open house wedding vendor event flyer",
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
    image: weddingExpoImg,
    imageAlt: "Wedding Expo at The Venue Clermont flyer",
    eventUrl: "https://www.thevenueclermont.com",
  },
  {
    id: "wildly-in-love-brevard-zoo",
    title: "Wildly In Love Wedding Expo",
    subtitle: "Brevard Zoo · Melbourne",
    category: "Wedding",
    role: "bloom",
    date: "2026-09-13",
    dateLabel: "Sunday, September 13, 2026",
    time: "5:00 PM – 7:30 PM",
    location: "Brevard Zoo",
    address: "8225 North Wickham Road, Melbourne, FL 32940",
    organizer: "Brevard Zoo",
    description:
      "An immersive wedding expo with curated vendors, animal encounters, staged ceremony spaces, live music, and more. Bloom will be showcasing our walls.",
    admission: "Tickets from $15",
    image: null,
    imageAlt: "Wildly In Love Wedding Expo at Brevard Zoo",
    eventUrl:
      "https://brevardzoo.org/event/wildly-in-love-wedding-expo/",
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
      "A curated wellness day for the community — yoga, movement, healthy food, and holistic living by the lake. Co-founded by Natali and the Wellness Collective FL team.",
    admission: "Open to the community",
    image: fallIntoWellnessImg,
    imageAlt: "Fall into Wellness event flyer by Wellness Collective FL",
    eventUrl: "https://www.wellnesscollectivefl.com/",
  },
];
