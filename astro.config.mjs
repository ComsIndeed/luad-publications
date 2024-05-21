import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://luad-db.web.app/",

  integrations: [react(), solidJs(), icon(), robotsTxt()],
});
