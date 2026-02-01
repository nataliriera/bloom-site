import React from "react";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bloom Flower Wall Rentals",
    description:
      "Airy, luxurious flower wall rentals with delivery, professional setup, and breakdown in Clermont, Florida and surrounding areas.",
    url: "https://bloomflowerwallrentals.com",
    telephone: "+1-863-335-5022",
    email: "hello@bloomwallrentals.com",
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
      "https://bloomfloralwallrentals.com",
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
}
