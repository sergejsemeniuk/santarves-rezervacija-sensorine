import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" — относительные пути: работает и на GitHub Pages (/имя-репозитория/), и на Netlify.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
