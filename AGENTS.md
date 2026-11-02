# Arbejdsregler for undervisningssitet

Dette er Peter Ulfs undervisningsmateriale til multimediedesigneruddannelsen, bygget med Astro, Starlight og Rapide. Prioritér konsistens på tværs af sitet og filer, Peter let kan rette manuelt.

## Indhold, der er let at finde og rette

- Saml som udgangspunkt hvert undervisningsforløb i én `.mdx`-fil under `src/content/docs/`. Placér overskrift, tekst, opgave, hint, løsning og eksempelkode ved den slide, hvor de bruges.
- Brug almindelig Markdown til overskrifter, tekst, lister, tabeller og kodeblokke. Brug HTML og komponenter, når layout eller funktion kræver det.
- Markér slides med korte kommentarer, fx `{/* Slide 2: Hvad er en popup? */}`. En kort redigeringsvejledning kan stå som `#`-kommentarer i filens YAML-frontmatter.
- Hold undervisningstekst og små kodeeksempler i MDX-filen frem for at flytte dem til importerede datafiler. Acceptér lidt gentagelse, når det gør eksemplerne nemmere at rette selvstændigt.
- Genbrug komponenter til funktioner som CodePen, video, quizzer og interaktive demonstrationer. Kontrollér deres stilafhængigheder ved brug i almindelige `Slide`-blokke. Ved `CodePenExample` skrives tekstfelter samt `html` og `css` direkte i MDX-filen. Bevar samme kode til demonstration, kopiering og CodePen.
- Separate undervisernoter og større billedfiler kan ligge for sig. En lille indholdsrettelse skal ikke udløse en omstrukturering af hele forløbet.

## Fælles design

- Brug den eksisterende `<Slide>` fra `src/components/Slide.astro` og `<div class="page-break"></div>` mellem slides. Slideshowets tæller håndteres af `PresentationMode.astro`; tilføj ikke manuel `step`/`total`-nummerering som krav til almindelige slides.
- Følg sitets fælles typografi, farver, tabeller og slideudseende. Den globale CSS, som konfigurationen indlæser, er `src/styles/custom.css`.
- Opret ikke en særskilt designramme til hvert nyt emne, fx en ny pendant til `PopoverSlide`. Lokale stilarter kan bruges til en konkret illustration eller demonstration; de skal ikke give hele forløbet et andet tema.
- Brugerens ønske om fælles design har forrang for den ældre anbefaling om Figma-forløbets særdesign i `prompts/undervisningsslides.md`. Bevar promptens pædagogiske principper. Brug fx `src/content/docs/css/grid.mdx` og `src/content/docs/astro/figma/varianter.mdx` som referencer for den almindelige MDX-struktur.
- Eksisterende forløb med særdesign omlægges, når den aktuelle opgave omfatter dem. Et nyt undervisningsforløb er ikke i sig selv en opgave om at redesigne hele sitet.

## Hvor tingene vedligeholdes

| Indhold eller funktion | Fil eller mappe |
| --- | --- |
| Undervisning og eksempler | `src/content/docs/` |
| Fælles komponenter og slideshow | `src/components/` |
| Fælles styling | `src/styles/custom.css` |
| Normal sidemenu og Astro-konfiguration | `astro.config.mjs` |
| Kladdevisning | `src/pages/draft/` og `src/utils/draft-navigation.ts` |
| Pædagogisk grundlag | `prompts/undervisningsslides.md` |
| Teknisk dokumentation | `src/content/docs/dette-site/dokumentation.mdx` |

Prompten vises på sitet gennem `TeachingPrompt.astro`. Ret dens kildefil og bevar markørerne `PROMPT START` og `PROMPT SLUT`.

Nye undervisningssider starter som `draft: true`, medmindre Peter beder om udgivelsesstatus. Bevar eksisterende siders status ved almindelige rettelser. Tema angives i `sidebar.badge.text`, fx `Tema 3`, med den tilsvarende `badge-theme-3`-klasse. Tema 1–6 er 1. semester; senere temaer er 2. semester.

Den normale sidemenu registreres i `astro.config.mjs`. Kladdevisningen bygges fra de samme indholdsfiler og indeholder også udgivne sider: en `/draft/`-adresse fortæller derfor ikke alene sidens status. Kladdevisningen er offentligt tilgængelig, når sitet er udgivet.

## Arbejde med undervisningsforløb

Ved nye forløb eller større faglige revisioner bruges den lokale [undervisningssite-skill](.agents/skills/undervisningssite/SKILL.md). Ved små tekst-, link- eller layoutrettelser følges disse projektregler uden at genplanlægge undervisningen.

Skriv på dansk. Brug “I” i gruppeaktiviteter og “du” i individuelle instruktioner. Forklar nye fagord og bevar relevante engelske navne fra programmer og kode.

## Kontrol af ændringer

- Efter ændringer i MDX, komponenter, CSS eller konfiguration: kør `npm run build`. Det færdige site ligger i `dist/`; redigér kildefilerne frem for buildfilerne.
- Ved ændret layout eller interaktion: kontrollér den berørte side i almindelig visning, slideshow og en smal visning. Kontrollér print, når ændringen berører print eller sideskift. Slideshowet kopierer indholdet, så interaktion skal fungere i kopien.
- Ved ændret navigation eller draft-adfærd: brug produktionsbuildet og eventuelt `npm run preview`. `npm run dev` viser også kladder på normale adresser og er ikke alene tilstrækkelig kontrol.
- Ved ændringer kun i projektinstruktioner eller skills: kontrollér indhold, filhenvisninger og skillens metadata. Et fuldt sitebuild er ikke nødvendigt.
- Beskriv kort de udførte kontroller og eventuelle begrænsninger. Et build dokumenterer ikke i sig selv en visuel afprøvning eller en udgivelse.
