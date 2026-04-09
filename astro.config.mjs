import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Agrega tu dominio o la URL que te dio Vercel aquí:
  site: "https://estudiojuridicocontableml.vercel.app/", 
  
  output: "static",
  
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [tailwindcss(), sitemap()],
});