import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel"; // ¡El cambio está aquí, sin el /serverless!

export default defineConfig({
  site: "https://estudiojuridicocontableml.vercel.app/",

  output: "server",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [tailwindcss(), sitemap()],
});
