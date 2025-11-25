---
title: Flexbox
description: Fleksible 1D-layouts til rækker og kolonner
sidebar:
  order: 2
---

## Hvad er Flexbox?

**Flexbox** er et layout-system til én dimension ad gangen – enten **række** (row) eller **kolonne** (column).

Det er særligt godt til:

- navigation (vandrette menuer)
- knap-rækker
- card-layouts, der skal wrappe pænt
- centrering af indhold

## Kom i gang med Flexbox

For at bruge Flexbox skal du give en container:

```css
.container {
  display: flex;
}
```

Alle direkte children bliver nu flex-items.

### Retning (`flex-direction`)

```css
/* Vandret (standard) */
.container {
  display: flex;
  flex-direction: row;
}

/* Lodret */
.column {
  display: flex;
  flex-direction: column;
}
```

## Justering og fordeling

Nøgle-properties:

- `justify-content` – fordeler langs **hoved-aksen** (row/column)
- `align-items` – justerer langs **krydss-aksen**

Eksempler:

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Flex-grow, flex-shrink og flex-basis

Med `flex` shorthand kan du styre, hvordan elementer vokser og krymper:

```css
.card {
  flex: 1 1 200px; /* grow shrink basis */
}
```

- `flex-grow: 1` – hvor meget elementet må vokse ift. de andre
- `flex-shrink: 1` – hvor meget det må krympe
- `flex-basis: 200px` – ønsket startbredde

Et simpelt kort-layout:

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cards > article {
  flex: 1 1 250px;
}
```

## Eksempler

Navigation:

```html
<nav class="nav">
  <a href="#">Forside</a>
  <a href="#">Om</a>
  <a href="#">Kontakt</a>
</nav>
```

```css
.nav {
  display: flex;
  gap: 1rem;
}

.nav a {
  text-decoration: none;
}
```

Centreret indhold:

```html
<div class="centered">
  <p>Jeg står helt i midten!</p>
</div>
```

```css
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
```

## Opgaver (inspireret af exercssises)

1. Lav en vandret navigation med Flexbox, hvor linksene fordeles med `space-between`.
2. Lav en boks, hvor teksten er helt centreret både lodret og vandret.
3. Lav et card-layout med 6 bokse, der:
   - står på én række på brede skærme
   - bryder om på flere rækker på mindre skærme (brug `flex-wrap`).
4. Eksperimenter med `flex: 1`, `flex: 2` osv. for at lade nogle kort fylde mere end andre.

:::tip[Leg videre]
Hvis du vil træne Flexbox endnu mere, findes der gode spil som f.eks. Flexbox Froggy.
:::
