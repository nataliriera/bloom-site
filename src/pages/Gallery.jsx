import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoLite from "../components/SeoLite.jsx";

const data = [
  { name: "Blush Romance", category: "Blush", note: "Wedding favorite" },
  { name: "Ivory Classic", category: "Ivory", note: "Timeless" },
  { name: "White Garden", category: "White", note: "Bright & airy" },
  { name: "Neutral Modern", category: "Neutral", note: "Minimal luxe" },
  { name: "Soft Pink Ombré", category: "Blush", note: "Photos beautifully" },
  {
    name: "Custom Palette",
    category: "Custom",
    note: "Made to match your theme",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Blush", "Ivory", "White", "Neutral", "Custom"];

  const items = useMemo(() => {
    if (filter === "All") return data;
    return data.filter((x) => x.category === filter);
  }, [filter]);

  return (
    <div>
      <SeoLite
        title="Flower Wall Gallery | Bloom Flower Wall Rentals Clermont, FL"
        description="Browse airy ivory and blush flower wall styles for weddings, showers, birthdays, and brand events. Serving Clermont, FL and surrounding areas with delivery + setup."
      />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h1 className="h2">Gallery</h1>
            <p className="muted">
              Choose a vibe, then request a quote for your date + city/venue.
            </p>
          </div>

          <div className="filterRow">
            {categories.map((c) => (
              <button
                key={c}
                className={`chipBtn ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid3 galleryGrid">
            {items.map((x) => (
              <div key={x.name} className="thumb">
                <div className="thumbImg" />
                <div className="thumbMeta">
                  <div className="thumbTop">
                    <div className="thumbTitle">{x.name}</div>
                    <span className="thumbPill">{x.category}</span>
                  </div>

                  <div className="muted">{x.note}</div>

                  <div className="thumbActions">
                    <Link className="btn btnGhost" to="/contact">
                      Request Quote
                    </Link>
                    <Link className="btn btnPrimary" to="/pricing">
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
