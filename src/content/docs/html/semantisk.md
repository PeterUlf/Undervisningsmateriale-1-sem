---
title: Semantisk HTML
description: Giv din kode mening med gode, beskrivende HTML-elementer
sidebar:
  order: 2
---

## Hvad betyder semantisk HTML?

**Semantisk HTML** betyder, at vi vælger HTML-tags, der beskriver indholdets _betydning_, ikke kun hvordan det ser ud.

Det gør det lettere for:

- browseren
- skærmlæsere (tilgængelighed)
- søgemaskiner
- andre udviklere (og dit fremtidige jeg!)

at forstå, hvad siden handler om.

Eksempler på semantiske elementer:

- `header` – sidehoved
- `nav` – navigation
- `main` – hovedindhold
- `article` – et selvstændigt stykke indhold
- `section` – en sektion af indhold
- `aside` – indhold ved siden af (fx sidebar)
- `footer` – sidefod
- `figure` / `figcaption` – figur + billedtekst

## Struktur på en side

En typisk side kan opdeles i:

- en **begyndelse** (`header`)
- en **hoveddel** (`main`)
- en **slutning** (`footer`)

```html
<body>
  <header>
    <h1>Min hjemmeside</h1>
    <nav>
      <ul>
        <li><a href="index.html">Forside</a></li>
        <li><a href="om.html">Om</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Velkommen</h2>
    <p>Her er mit indhold.</p>
  </main>

  <footer>
    <p>&copy; 2025 Mig selv</p>
  </footer>
</body>
```

Her fortæller strukturen meget mere end hvis vi kun brugte `<div>` overalt.

## Afsnit, overskrifter og lister

Fra kompendiet:

> En tekst opmærkes ved at sætte koder rundt om de forskellige dele af teksten. For eksempel opmærker man **overskrifter** anderledes end _brødtekst_.

Det betyder, at vi skal:

- bruge `<h1>`–`<h6>` til overskrifter
- bruge `<p>` til brødtekst
- bruge `<ul>`, `<ol>` og `<li>` til lister

Ikke bare lave alt med `<div>` eller `<span>`.

## `figure` og `figcaption`

Nogle gange har vi indhold, der kan stå for sig selv, f.eks. et billede + en forklaring. Der giver det mening at bruge `figure` og `figcaption`.

```html
<figure>
  <img src="img/usb_connectors.webp" alt="Forskellige USB-connector-typer" />
  <figcaption>En oversigt over forskellige USB connector-typer.</figcaption>
</figure>
```

Her er:

- `figure` – en "pakke" omkring indhold, der hænger sammen
- `figcaption` – en billedtekst, der beskriver figuren

Det er _semantisk_: vi fortæller, at dette er en figur med en forklaring.

## Bedre markup med lister

Lister er også en vigtig del af semantisk HTML:

```html
<ul>
  <li>Første punkt</li>
  <li>Andet punkt</li>
  <li>Tredje punkt</li>
</ul>
```

Det viser, at punkterne hører sammen – både visuelt og logisk.

## Semantisk vs. ikke-semantisk

Ikke-semantisk kode kunne se sådan her ud:

```html
<div class="top">
  <div class="big">USB stik - en oversigt</div>
  <div class="text">Der findes en del forskellige USB stik...</div>
</div>
```

En semantisk version kunne være:

```html
<header>
  <h1>USB stik - en oversigt</h1>
</header>

<main>
  <p>Der findes en del forskellige USB-stik...</p>
</main>
```

Begge kan styles til at se ens ud med CSS, men den semantiske version er meget mere meningsfuld.

## Links og URL’er

Når vi laver links, bruger vi `a`-elementet og en URL:

```html
<a href="https://www.dr.dk">DR</a>
```

URL står for **Uniform Resource Locator** – adressen på den ressource (side, fil, billede), du vil hen til.

Du kan læse mere om URL’er i f.eks. RFC 3986 eller på Wikipedia, men til vores brug er det nok at vide, at:

- `https://` – protokol
- `www.dr.dk` – domænenavn
- resten af stien – vej til en specifik side eller fil

## HTML-kommentarer

Nogle gange vil du skrive noter til dig selv eller andre udviklere. Det gør du med kommentarer:

```html
<!-- Dette er en kommentar, som ikke vises i browseren -->
```

Brug kommentarer til:

- korte forklaringer
- TODOs
- markering af større sektioner i koden

## Opgaver

1. Omskriv en eksisterende side, så du bruger:
   - `header`, `main` og `footer`
   - meningsfulde overskrifter (`h1`–`h3`)
2. Find et sted, hvor du har brugt `<div>` til noget, der egentlig kunne være:
   - `nav`, `section`, `article` eller `aside`
     og omskriv det.
3. Indsæt et billede som en semantisk figur med `figure` og `figcaption`.
4. Tilføj mindst to HTML-kommentarer, der forklarer din struktur.

## Videre læsning

- [MDN: HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN: HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

Næste skridt: begynd at **style** din semantiske HTML med [Intro til CSS](/css/intro).
