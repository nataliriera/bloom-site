import React from "react";

export default function FaqSchema({ faqs }) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: String(item.q),
      acceptedAnswer: {
        "@type": "Answer",
        text: String(item.a),
      },
    })),
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
}
