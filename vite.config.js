import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sitemapPlugin } from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: "https://bloomflowerwallrentals.com",
      routes: [
        "/",
        "/gallery",
        "/pricing",
        "/faq",
        "/service-areas",
        "/contact",
      ],
    }),
  ],
});
