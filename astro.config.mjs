import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    vue({
      include: ["./src/**/vue/*"],
    }),
    react({
      include: ["./src/**/react/*"],
    }),
    solidJs({
      include: ["./src/**/solid/*"],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
