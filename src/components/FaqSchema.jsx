import React from "react";

export default function FaqSchema({ faqs }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
}
