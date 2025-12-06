// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MMD undervisningsmateriale E2025 V  0.1",
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
          label: "Web Development",
          collapsed: true,
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
              label: "Git & GitHub",
              autogenerate: { directory: "git" },
            },
          ],
        },
        {
          label: "Video / Foto",
          collapsed: true,
          items: [
            {
              label: "Kom i gang",
              slug: "premiere",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
            {
              label: "Premiere Pro",
              autogenerate: { directory: "premiere" },
            },
            {
              label: "Lyd",
              autogenerate: { directory: "lyd" },
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
              label: "Vintereventyr E2025",
              slug: "premiere/07-vintereventyr",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Oversigt",
              link: "/tema-oversigt",
              badge: {
                text: "Tema",
                variant: "tip",
                class: "badge-theme-1",
              },
            },
          ],
        },
      ],
    }),
  ],
});
