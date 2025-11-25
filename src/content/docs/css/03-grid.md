---
title: CSS Grid
description: Layout med kolonner og rækker – moderne 2D-layout i CSS
---

## Hvad er CSS Grid?

**CSS Grid** er et layout-system til at lave to-dimensionelle layouts med rækker og kolonner.

Det er især godt til:

- komplette side-layouts
- dashboards og kort
- gallerier og overskuelige grids

## Kom i gang med grid

For at bruge Grid skal du:

1. have en **container**, der får `display: grid;`
2. definere **kolonner** og evt. rækker

```html
<div class="grid">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
```

Her får vi et simpelt 2x2-grid med lidt afstand mellem felterne.

## Vigtige properties

- `display: grid;` – aktiverer Grid-layout
- `grid-template-columns` – definerer kolonner
- `grid-template-rows` – definerer rækker (valgfri, ofte lader man dem vokse automatisk)
- `gap` – afstand mellem rækker og kolonner

Eksempler på kolonner:

```css
/* Tre lige brede kolonner */
.grid {
  grid-template-columns: 1fr 1fr 1fr;
}

/* Samme med repeat */
.grid {
  grid-template-columns: repeat(3, 1fr);
}

/* To kolonner: en smal og en bred */
.grid {
  grid-template-columns: 200px 1fr;
}
```

## Placering af elementer

Hvert barn i en grid-container kan placeres eksplicit, men ofte lader man Grid selv placere dem i rækkefølge.

Eksempel på manuel placering:

```css
.header {
  grid-column: 1 / 4; /* spænder over 3 kolonner */
}

.sidebar {
  grid-column: 1 / 2;
}

.main {
  grid-column: 2 / 4;
}
```

## En simpel side med Grid

```html
<body>
  <div class="page-grid">
    <header class="header">Header</header>
    <nav class="nav">Navigation</nav>
    <main class="main">Indhold</main>
    <footer class="footer">Footer</footer>
  </div>
</body>
```

```css
.page-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header {
  grid-column: 1 / 3;
}

.nav {
  grid-column: 1 / 2;
}

.main {
  grid-column: 2 / 3;
}

.footer {
  grid-column: 1 / 3;
}
```

## Opgaver (inspireret af exercssises)

1. Lav et 3x3-grid med ni bokse, der alle har samme størrelse.
2. Lav et layout med:
   - header øverst
   - sidebar til venstre
   - main-indhold til højre
   - footer nederst
3. Brug `gap` til at skabe luft mellem elementerne.
4. Prøv at ændre `grid-template-columns` til forskellige værdier, f.eks.:
   - `repeat(4, 1fr)`
   - `2fr 1fr 1fr`

:::tip[Ekstra]
Prøv at åbne udviklerværktøjerne i browseren (Firefox/Chrome) – de har gode Grid-visualiseringer.
:::
