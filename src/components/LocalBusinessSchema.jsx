import React from "react";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bloom Flower Wall Rentals",
    description:
      "Luxury flower wall rentals for weddings and events in Clermont, Florida and surrounding areas. Packages start at $350. Delivery, professional setup, and breakdown are available for an additional fee.",
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
    sameAs: ["https://www.instagram.com/bloomflowerwallrentals/"],
    priceRange: "$$$",
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
}
