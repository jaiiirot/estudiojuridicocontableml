// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  
  adapter: node({
    mode: "standalone",
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [tailwindcss(), sitemap()],
});
