import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";

import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Pricing from "./pages/Pricing.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";
import ServiceAreas from "./pages/ServiceAreas.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
