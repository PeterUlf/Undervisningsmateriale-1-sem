---
name: undervisningssite
description: "Opret og revider undervisningsforløb i MDX til Peter Ulfs Starlight-site for multimediedesigneruddannelsen. Brug ved nye slidesæt, øvelsesforløb og større faglige eller pædagogiske revisioner. Små tekst-, link- og layoutrettelser samt ren teknisk vedligeholdelse følger projektets AGENTS.md."
---

# Undervisningssite

Lav undervisning, der passer til de studerendes forkundskaber, følger sitets fælles design og kan rettes direkte i MDX-filen.

## Find det relevante grundlag

Læs [projektreglerne](../../../AGENTS.md). Stier i teksten nedenfor regnes fra projektets rod.

- Ved et nyt forløb: læs de pædagogiske afsnit i [undervisningsprompten](../../../prompts/undervisningsslides.md), og læs relevante eksisterende undervisningssider.
- Ved en revision: læs hele det berørte forløb og de afsnit i prompten, som ændringen vedrører. Bevar forløbets faglige mål, medmindre Peter ændrer dem.
- Ved spørgsmål om integration i sitet: brug [den tekniske dokumentation](../../../src/content/docs/dette-site/dokumentation.mdx) sammen med den aktuelle kode.

Prompten er den vedligeholdte kilde til de detaljerede pædagogiske principper. Dens ældre anbefaling af et særskilt visuelt tema erstattes af det fælles design beskrevet i `AGENTS.md`.

Udled emne, tema, varighed og ønsket resultat fra opgaven og materialet. Spørg kun om manglende oplysninger, der har reel betydning for forløbet; vælg ellers en rimelig løsning og gør antagelsen tydelig.

## Udled forkundskaber

Læs `sidebar.badge.text` og `draft` i de fagligt relevante filer under `src/content/docs/`. Brug også kladder som grundlag efter disse regler:

- Tidligere temaer regnes som gennemgåede, inklusive drafts.
- I det aktuelle tema regnes kun udgivne sider som gennemgåede: `draft: false`, eller feltet udeladt med standardværdien false.
- Senere temaer og drafts i det aktuelle tema er ikke forkundskaber. Nødvendige nye begreber skal forklares i dagens forløb.

Peter kan angive undtagelser. Sider uden et kendt tema regnes ikke automatisk som forkundskaber. Notér de relevante færdigheder og kildefiler kort i undervisernoterne. Tidligere gennemgået stof er ikke ensbetydende med sikker mestring.

## Planlæg læring og aktiviteter

Følg promptens rækkefølge: kort retning og relevans, summeøvelse, fælles opsamling, faglig forklaring, anvendelse, vurdering og forbedring samt afslutning.

- Et forløb varer normalt 15–45 minutter inklusive aktiviteter og overgange. Del et længere emne i flere forløb med hvert sit fokus. Følg en konkret varighed, Peter har angivet.
- Den første faglige aktivitet er en samtale før forklaringen: grupper på 3–5, normalt 2–4 minutter og højst 5. Brug ét problem, de kan drøfte med deres eksisterende viden, uden opslag, AI eller kodearbejde. En kort definition eller vist demonstration kan give nødvendig kontekst.
- Lad grupperne dele enkelte bud, og forbind forklaringen med samme problem. Skriv mulige opfølgende spørgsmål i noterne frem for at foregive, at holdet har givet bestemte svar.
- En anvendelsesopgave skal kræve en fagligt relevant tilpasning af eksemplet. Angiv mål, tid, arbejdsform, materiale, resultat og krav. Nye navne eller farver alene er ikke tilstrækkelig variation.
- Vis konkrete kriterier for et godt svar, et tilstrækkeligt svar og det, der mangler endnu. Lad de studerende afprøve og forbedre arbejdet. Kriterierne er undervisningsfeedback, ikke officielle eksamenskrav.
- Hold hint og løsningsforslag adskilt og lukkede fra starten, fx med `details` og `summary` uden `open`. Opgave og kriterier skal være synlige.
- AI-studiehjælp medtages kun ved en konkret faglig nytte og placeres efter den første samtale og opsamling. Brug promptens anvisninger om egne bud, ét spørgsmål ad gangen og små hints; AI bruges ikke under summeøvelsen.

Ved en mindre revision anvendes kun de relevante principper; tilføj ikke automatisk nye aktiviteter til et allerede aftalt forløb.

## Skriv og byg materialet

Brug almindelige `Slide`-blokke og fælles styling som beskrevet i `AGENTS.md`. Saml det redigerbare indhold ved hver slide. Brug ét tydeligt fokus pr. slide, og flyt længere uddybninger til separate undervisernoter.

Vælg illustrationer efter det, de skal forklare. Læs kun de referencer nedenfor, som passer til opgaven:

| Behov | Eksisterende materiale at lære af |
| --- | --- |
| Enkel MDX- og slidestruktur | [Grid](../../../src/content/docs/css/grid.mdx) |
| Afprøvbare eksempler og løsninger efter eget forsøg | [Layoutdiagrammer](../../../src/content/docs/guides/layoutdiagrammer.mdx) |
| Konkrete skærmbilleder og præcise markeringer | [Intro til GitHub](../../../src/content/docs/git/intro-til-github.mdx) |
| Korte sammenligninger og forklarende tabeller | [Struktur og planlægning af design](../../../src/content/docs/ux/struktur-og-planlaegning-af-design.mdx) |

Viderefør de relevante formidlingsgreb; ældre sider er ikke nødvendigvis eksempler på alle de pædagogiske regler eller på det ønskede fælles design.

Placér kodeeksempler direkte i MDX. Ved CodePen bruges komponentens felter, så forhåndsvisning, kopiering og CodePen får samme HTML/CSS. Opfind ikke gemte Pen-links. Tilføj kun afhængigheder eller sprog, som opgaven kræver, og som de studerende har grundlag for at bruge.

Kontrollér tekniske fakta og aktuelle programarbejdsgange i relevante officielle kilder. Angiv konkrete kilder til undervisningen. Mærk tænkte cases som tænkte. Følg promptens regler om billedrettigheder, alternativ tekst og synlig kreditering i side-, slideshow- og printvisning.

Ved et nyt forløb samles tidsplan, forkundskaber, forventelige misforståelser og begrundelser for opgaverne i undervisernoter under `src/content/docs/dette-site/`, normalt med `draft: true`, `pagefind: false` og `sidebar.hidden: true`. Ved en revision opdateres de eksisterende noter, når ændringen påvirker dem.

## Kontrollér og aflever

Kontrollér, at opgaverne kan løses med forkundskaberne og dagens forklaring, at variationen kræver et fagligt valg, og at kriterier og løsningsforslag passer sammen. Fjern gentagelser, som ikke tilfører en ny funktion.

Følg projektets build- og visningskontrol. Ved interaktive eksempler afprøves også betjening i slideshowet og lukkede hint/løsninger ved første visning. Ved CodePen kontrolleres sammenhængen mellem eksempel, kopieringskode og formularens data. Angiv præcist, hvis en kontrol ikke kunne udføres.

Aflever med links til de ændrede MDX-filer, en kort beskrivelse af det faglige resultat og udførte kontroller. Ved et nyt forløb henvises også til undervisernoterne. Fortæl Peter, hvor almindelige manuelle rettelser foretages.
