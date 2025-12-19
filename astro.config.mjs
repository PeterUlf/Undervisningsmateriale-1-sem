// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

const isDev = process.env.NODE_ENV !== 'production';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MMD undervisningsmateriale E2025 V  0.4",
      customCss: ["./src/styles/custom.css"],
      components: {
        PageTitle: "./src/components/PageTitleWrapper.astro",
        Sidebar: "./src/components/Sidebar.astro",
        Head: "./src/components/CustomHead.astro",
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
              label: "Introuge",
              slug: "guides/introuge",
              badge: {
                text: "Tema 1",
                variant: "tip",
                class: "badge-theme-1",
              },
            },
            {
              label: "Kom i gang",
              slug: "guides/kom-i-gang",
              badge: {
                text: "Tema 2",
                variant: "tip",
                class: "badge-theme-2",
              },
            },
            {
              label: "Astro",
              autogenerate: { directory: "astro" },
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
              items: [
                {
                  label: "Git & GitHub",
                  link: "/git/",
                  badge: {
                    text: "Tema 3",
                    variant: "tip",
                    class: "badge-theme-3",
                  },
                },
                {
                  label: ".gitignore",
                  link: "/git/gitignore/",
                  badge: {
                    text: "Tema 5",
                    variant: "tip",
                    class: "badge-theme-5",
                  },
                },
                {
                  label: "GitHub Team Workflow",
                  link: "/git/team-workflow/",
                  badge: {
                    text: "Tema 5",
                    variant: "tip",
                    class: "badge-theme-5",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Projektstyring",
          collapsed: true,
          autogenerate: { directory: "projektledelse" },
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
          label: "Testmetoder",
          collapsed: true,
          items: [
            {
              label: "Om test",
              slug: "test/om-test",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
            {
              label: "5 sek test",
              slug: "test/5-sek-test",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
            {
              label: "Heuristisk test",
              slug: "test/heuristisk-test",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
            {
              label: "Likert test",
              slug: "test/likert-test",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
            {
              label: "Lighthouse test",
              slug: "test/lighthouse-test",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
            {
              label: "Tænke-højt test",
              slug: "test/taenke-hoejt-test",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
          ],
        },
        {
          label: "Quizzer",
          collapsed: true,
          items: [
            {
              label: "Tema 2 – Quiz",
              slug: "quiz/tema-2",
              badge: {
                text: "Tema 2",
                variant: "tip",
                class: "badge-theme-2",
              },
            },
            {
              label: "Tema 3 – Quiz",
              slug: "quiz/tema-3",
              badge: {
                text: "Tema 3",
                variant: "tip",
                class: "badge-theme-3",
              },
            },
            {
              label: "Tema 4 – Quiz",
              slug: "quiz/tema-4",
              badge: {
                text: "Tema 4",
                variant: "tip",
                class: "badge-theme-4",
              },
            },
            {
              label: "Tema 5 – Quiz",
              slug: "quiz/tema-5",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
            {
              label: "Tema 7 – Quiz",
              slug: "quiz/tema-7",
              badge: {
                text: "Tema 7",
                variant: "tip",
                class: "badge-theme-7",
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
            // Draft items - kun synlige i development
            ...(isDev ? [{
              label: "Genvejstaster (Draft)",
              link: "/reference/genvejstaster/",
              badge: {
                text: "Draft",
                variant: "caution",
              },
            }] : []),
            {
              label: "Genvejstaster – Øvelser",
              link: "/reference/genvejstaster-oevelser/",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
            {
              label: "Genvejstaster – Quiz",
              slug: "quiz/genvejstaster",
              badge: {
                text: "Tema 5",
                variant: "tip",
                class: "badge-theme-5",
              },
            },
          ],
        },
      ],
    }),
  ],
});
