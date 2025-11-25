// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Webudvikling - Undervisningsmateriale",
      plugins: [starlightThemeRapide()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Start her",
          items: [{ label: "Kom i gang", slug: "guides/kom-i-gang" }],
        },
        {
          label: "HTML",
          autogenerate: { directory: "html" },
        },
        {
          label: "CSS",
          autogenerate: { directory: "css" },
        },
        {
          label: "JavaScript",
          autogenerate: { directory: "javascript" },
        },
        {
          label: "Premiere Pro",
          autogenerate: { directory: "premiere" },
        },
        {
          label: "Photoshop",
          autogenerate: { directory: "photoshop" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
