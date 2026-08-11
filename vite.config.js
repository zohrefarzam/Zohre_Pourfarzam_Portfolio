import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use repo name only for production/GitHub Pages; keep `/` for local `npm run dev`
  base: command === "build" ? "/Zohre_Pourfarzam_Portfolio/" : "/",
  plugins: [react(), tailwindcss()],
}));
