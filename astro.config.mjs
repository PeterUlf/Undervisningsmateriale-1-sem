// @ts-check
import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

const isDev = process.env.NODE_ENV !== "production";
const docsDir = new URL("./src/content/docs/", import.meta.url);

function getDraftSlugs(dir = docsDir, base = "") {
  const slugs = new Set();

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const entryUrl = new URL(entry.name, dir);
    const relativePath = `${base}${entry.name}`;

    if (entry.isDirectory()) {
      for (const slug of getDraftSlugs(new URL(`${entry.name}/`, dir), `${relativePath}/`)) {
        slugs.add(slug);
      }
      continue;
    }

    if (!/\.(mdx|md)$/.test(entry.name)) continue;

    const source = readFileSync(entryUrl, "utf8");
    const frontmatterEnd = source.startsWith("---\n") ? source.indexOf("\n---", 4) : -1;
    const frontmatter = frontmatterEnd > -1 ? source.slice(4, frontmatterEnd) : "";

    if (/^draft:\s*true\s*$/m.test(frontmatter)) {
      slugs.add(
        relativePath
          .replace(/\.(mdx|md)$/, "")
          .replace(/\/index$/, "")
          .replace(/^index$/, "")
      );
    }
  }

  return slugs;
}

const draftSlugs = isDev ? new Set() : getDraftSlugs();

function linkToSlug(link) {
  if (!link || /^[a-z]+:\/\//i.test(link)) return undefined;
  return link.replace(/[?#].*$/, "").replace(/^\/|\/$/g, "");
}

function filterDraftSidebar(items) {
  if (isDev) return items;

  return items
    .map((item) => {
      if (typeof item === "string") return draftSlugs.has(item) ? undefined : item;

      const itemSlug = item.slug ?? linkToSlug(item.link);
      if (itemSlug !== undefined && draftSlugs.has(itemSlug)) return undefined;

      if ("items" in item && Array.isArray(item.items)) {
        const filteredItems = filterDraftSidebar(item.items);
        if (filteredItems.length === 0 && !("autogenerate" in item)) return undefined;
        return { ...item, items: filteredItems };
      }

      return item;
    })
    .filter(Boolean);
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MMD undervisningsmateriale E2026 V 0.6",
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
      sidebar: filterDraftSidebar([
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
              label: "Apple Adgangskoder og passkeys",
              slug: "guides/apple-adgangskoder-passkeys",
              badge: {
                text: "Tema 2",
                variant: "tip",
                class: "badge-theme-2",
              },
            },
            {
              label: "HTML",
              items: [
                "html/grundlaeggende",
                "html/semantisk",
              ],
            },
            {
              label: "CSS",
              items: [
                "css/intro",
                "css/reset",
                "css/flexbox",
                "css/grid",
              ],
            },
            {
              label: "Git & GitHub",
              items: [
                {
                  label: "Intro til GitHub",
                  slug: "git/intro-til-github",
                  badge: {
                    text: "Tema 1",
                    variant: "tip",
                    class: "badge-theme-1",
                  },
                },
              ],
            },
            {
              label: "Figma",
              items: [
                {
                  label: "Strukturen i Figma",
                  slug: "astro/figma/strukturen-i-figma",
                  badge: {
                    text: "Tema 1",
                    variant: "tip",
                    class: "badge-theme-1",
                  },
                },
              ],
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
              label: "Genvejstaster – Quiz",
              slug: "quiz/genvejstaster",
              badge: {
                text: "Tema 2",
                variant: "tip",
                class: "badge-theme-2",
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
            {
              label: "Genvejstaster",
              link: "/reference/genvejstaster/",
              badge: {
                text: "Tema 2",
                variant: "tip",
                class: "badge-theme-2",
              },
            },
            {
              label: "Genvejstaster – Øvelser",
              link: "/reference/genvejstaster-oevelser/",
              badge: {
                text: "Tema 2",
                variant: "tip",
                class: "badge-theme-2",
              },
            },
          ],
        },
      ]),
    }),
  ],
});
