---
title: CSS Reset
description: Få browsere til at opføre sig ens med et simpelt CSS reset
sidebar:
  order: 1
  badge:
    text: Tema 2
    variant: tip
    class: badge-theme-2
---

## Hvorfor CSS Reset?

Alle browsere har deres egne standard-styles (kaldet "user agent stylesheets"). Det betyder at en `<h1>` kan se forskellig ud i Chrome vs Safari, og margins og padding er ikke ens overalt.

Et **CSS reset** nulstiller disse forskelle, så du starter fra en ren tavle og har fuld kontrol.

## Et Simpelt CSS Reset

Her er et minimalt men effektivt reset du kan bruge i alle dine projekter:

```css
/*************** Reset *********************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: auto;
  display: block;
}
```

## Hvad gør hver del?

### `* { ... }` - Universal Selector

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- **`margin: 0`** og **`padding: 0`**: Fjerner al standard spacing fra alle elementer
- **`box-sizing: border-box`**: Gør at `width` og `height` inkluderer padding og border (meget lettere at arbejde med!)

### `img { ... }` - Responsive billeder

```css
img {
  width: 100%;
  height: auto;
  display: block;
}
```

- **`width: 100%`**: Billeder fylder hele deres container
- **`height: auto`**: Bevarer billedets proportioner
- **`display: block`**: Fjerner irriterende whitespace under billeder

## Sådan bruger du det

Placer reset-koden **øverst** i din CSS-fil, før alle andre styles:

```css
/*************** Reset *********************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

/*************** Dine styles *********************/
.header {
  background: navy;
  padding: 2rem;
}
```

## Før og efter

**Uden reset:**

- `<h1>` har stor margin øverst og nederst
- `<p>` har margin der varierer mellem browsere
- Billeder kan løbe ud over deres container
- Width-beregninger er forvirrende

**Med reset:**

- Alle elementer starter med 0 margin og padding
- Du bestemmer præcist hvor meget spacing der skal være
- Billeder tilpasser sig automatisk
- Width og padding spiller sammen

## Udvidelser

Når du bliver mere erfaren, kan du tilføje:

```css
/* Fjern list-bullets som standard */
ul,
ol {
  list-style: none;
}

/* Gør links nemme at style */
a {
  text-decoration: none;
  color: inherit;
}

/* Fjern default button-styles */
button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}
```

## Populære Alternativer

Hvis du vil have et mere omfattende reset, kan du kigge på:

- **[Normalize.css](https://necolas.github.io/normalize.css/)** - Bevarer nyttige defaults, fikser kun inkonsistenser
- **[CSS Remedy](https://github.com/jensimmons/cssremedy)** - Moderne tilgang til reset
- **[Josh's Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)** - Moderne, gennemtænkt reset

Men for de fleste projekter er det simple reset ovenfor mere end nok!
