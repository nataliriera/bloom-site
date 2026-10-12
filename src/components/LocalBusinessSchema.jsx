import React from "react";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bloom Flower Wall Rentals",
    description:
      "Premium faux flower wall rentals, draping, and floral styling for weddings and events in Clermont, Florida and surrounding areas. Packages start at $350. Setup and breakdown included in every rental. Delivery quoted separately by venue.",
    url: "https://bloomflowerwallrentals.com",
    telephone: "+1-863-335-5022",
    email: "info@bloomflowerwallrentals.com",
    areaServed: [
      "Clermont, FL",
      "Minneola, FL",
      "Groveland, FL",
      "Montverde, FL",
      "Winter Garden, FL",
      "Ocoee, FL",
      "Windermere, FL",
      "Davenport, FL",
      "Kissimmee, FL",
      "Orlando, FL",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Clermont",
      addressRegion: "FL",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/bloomflowerwallrentals/",
      "https://www.facebook.com/bloomflowerwallrentals",
    ],
    priceRange: "$$",
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
}
