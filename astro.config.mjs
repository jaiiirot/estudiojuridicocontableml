import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless"; // Importa el adaptador de Vercel

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "server", // Cambia static a server

  adapter: vercel(), // Usa el adaptador de Vercel

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [tailwindcss(), sitemap()],
});
