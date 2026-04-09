// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

const isDev = process.env.NODE_ENV !== "production";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MMD undervisningsmateriale F2026 V  0.5",
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
          label: "Om dette site",
          slug: "om-dette-site",
          badge: {
            text: "Tema",
            variant: "tip",
            class: "badge-theme-site",
          },
        },
        {
          label: "⏰ Pause",
          slug: "pause-ur",
        },
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
              label: "HTML",
              autogenerate: { directory: "html" },
            },
            {
              label: "CSS",
              autogenerate: { directory: "css" },
            },
            {
              label: "Diverse",
              items: [
                {
                  label: "Eksempel: Teknisk dokumentation (GitHub)",
                  link: "https://github.com/PeterUlf/F26_T8_teknisk_dokumentation",
                  badge: {
                    text: "Tema 8",
                    variant: "tip",
                    class: "badge-theme-8",
                  },
                },
                {
                  label: "Tema 8 – Nye ord",
                  slug: "diverse/tema-8-nye-ord",
                },
                {
                  label: "Tema 8 – Markdown grundregler",
                  slug: "diverse/tema-8-markdown-grundregler",
                },
              ],
            },
            {
              label: "SVG",
              autogenerate: { directory: "svg" },
            },
            {
              label: "JavaScript",
              items: [
                {
                  label: "JavaScript",
                  slug: "javascript",
                },
                {
                  label: "Referer JavaScript",
                  slug: "javascript/referer-javascript",
                },
                {
                  label: "Metoder",
                  collapsed: false,
                  items: [
                    {
                      label: "Arrays I",
                      slug: "javascript/arrays",
                    },
                    {
                      label: "Objects & JSON",
                      slug: "javascript/objects-json",
                    },
                    {
                      label: "Arrow Functions",
                      slug: "javascript/arrow-functions",
                    },
                    {
                      label: "forEach",
                      slug: "javascript/foreach",
                    },
                    {
                      label: ".map() og .join()",
                      slug: "javascript/map-og-join",
                    },
                    {
                      label: "Sortering",
                      slug: "javascript/sortering",
                    },
                    {
                      label: "Filtrering",
                      slug: "javascript/filtrering",
                    },
                    {
                      label: "Betinget visning med ternary, && og ||",
                      slug: "javascript/betinget-visning",
                    },
                  ],
                },
                {
                  label: "FashionRUs",
                  collapsed: false,
                  items: [
                    {
                      label: "Query Strings & URL Parametre",
                      slug: "javascript/query-strings-url-parametre",
                    },
                    {
                      label: "Fetch Single Product",
                      slug: "javascript/fetch",
                    },
                    {
                      label: "Fetch Product List",
                      slug: "javascript/fetch-productlist",
                    },
                    {
                      label: "URL Parametre: List til Detalje",
                      slug: "javascript/url-parametre-fra-list-til-detalje",
                    },
                    {
                      label: "Quiz: Filtrerings Flow",
                      slug: "javascript/quiz-filtrerings-flow",
                    },
                  ],
                },
                {
                  label: "DummyJSON",
                  collapsed: false,
                  items: [
                    {
                      label: "Recipes: Vis ingredienser",
                      slug: "javascript/fetch-recipes-ingredienser",
                    },
                    {
                      label: "Array i et objekt",
                      slug: "javascript/array-i-et-objekt",
                    },
                  ],
                },
                {
                  label: "Extra for hurtige",
                  slug: "javascript/extra-for-hurtige",
                },
              ],
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
            {
              label: "Astro",
              autogenerate: { directory: "astro" },
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
              label: "Vintereventyr F2026",
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
              label: "Tema 8 – Quiz",
              slug: "quiz/tema-8",
              badge: {
                text: "Tema 8",
                variant: "tip",
                class: "badge-theme-8",
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
            ...(isDev
              ? [
                  {
                    label: "Genvejstaster (Draft)",
                    link: "/reference/genvejstaster/",
                    badge: {
                      text: "Draft",
                      variant: "caution",
                    },
                  },
                ]
              : []),
            {
              label: "Genvejstaster – Øvelser",
              link: "/reference/genvejstaster-oevelser/",
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
