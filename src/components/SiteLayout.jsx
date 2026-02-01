import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
