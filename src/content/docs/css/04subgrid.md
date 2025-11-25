---
title: CSS Subgrid
description: Del grid-strukturen med dine children – avanceret Grid-layout
---

## Hvad er subgrid?

**Subgrid** er en funktion i CSS Grid, hvor et child-grid kan **arve** rækker og/eller kolonner fra sin parent-grid.

Det er nyttigt, når:

- du vil have overskrifter, tekst og billeder til at flugte på tværs af sektioner
- du har komplekse layouts med gentagne strukturer

> Bemærk: Subgrid er stadig relativt nyt – støtte kan variere mellem browsere, men moderne browsere er ved at være med.

## Grund-idé

Du har en ydre grid-container:

```css
.page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

Inde i den har du en sektion, der også er grid – men med `subgrid`:

```css
.section {
  display: grid;
  grid-template-columns: subgrid;
}
```

Så vil `.section` bruge **de samme kolonner** som `.page`.

## Simpelt eksempel

```html
<div class="page">
  <section class="section">
    <h2>Artikel 1</h2>
    <p>Brødtekst...</p>
  </section>

  <section class="section">
    <h2>Artikel 2</h2>
    <p>Brødtekst...</p>
  </section>
</div>
```

```css
.page {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
}

.section {
  display: grid;
  grid-column: 1 / -1; /* spænder over hele bredden */
  grid-template-columns: subgrid;
}

.section h2 {
  grid-column: 1 / 2;
}

.section p {
  grid-column: 2 / 4;
}
```

Her flugter overskrifter og tekst på tværs af sektionerne, fordi de bruger samme grid-kolonner.

## Subgrid på rækker

Du kan også bruge subgrid på rækker:

```css
.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.section-wrapper {
  display: grid;
  grid-template-rows: subgrid;
}
```

Dette er især nyttigt, hvis du vil have
sektioner med samme rækker (fx ens højder på tværs af flere områder).

## Opgaver (inspireret af exercssises)

1. Lav en side, hvor:
   - du har et overordnet grid med 3 kolonner
   - hver sektion (`section`) bruger `subgrid` til at flugte overskrifter og tekst
2. Lav et layout, hvor billeder og billedtekster i flere sektioner flugter
   - brug `figure` og `figcaption`
   - brug `grid-template-columns: subgrid;` i sektionerne
3. Eksperimenter med at bruge `subgrid` kun på rækker eller kun på kolonner.

:::tip[Tip]
Brug browserens Grid-inspektor til at se, hvordan subgrid arver kolonnerne.
:::
