import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // `/` for Vercel + local. Set VITE_BASE_PATH for GitHub Pages builds only.
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
});
