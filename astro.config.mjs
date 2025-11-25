// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Webudvikling - Undervisningsmateriale version 0.1",
      customCss: ["./src/styles/custom.css"],
      components: {
        PageTitle: "./src/components/PageTitleWrapper.astro",
      },
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
          items: [
            {
              label: "Kom i gang",
              slug: "guides/kom-i-gang",
              badge: {
                text: "Tema 1",
                variant: "tip",
                class: "badge-theme-1",
              },
            },
          ],
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
          label: "SVG",
          autogenerate: { directory: "svg" },
        },
        {
          label: "Premiere Pro",
          autogenerate: { directory: "premiere" },
        },

        {
          label: "Foto",
          autogenerate: { directory: "photo" },
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
