---
title: Scroll-driven Animation Properties
description: Forklaring af nye CSS properties til scroll-baserede animationer
draft: true
sidebar:
  label: Scroll-driven Animation Properties
  order: 6
  badge:
    text: Tema 5
    variant: tip
    class: badge-theme-5
---

Denne side forklarer de nye CSS properties der bruges til scroll-drevne animationer. Dette er moderne CSS features der kun er understøttet i nyere browsere.

## animation-timeline

Kobler en animation til scroll i stedet for tid. Dette er helt nyt i CSS!

```css
.element {
  animation: slide 1s linear;
  animation-timeline: scroll(); /* Kør baseret på scroll */
}
```

**Værdier:**

**1. scroll()** - Følger scroll i container

```css
animation-timeline: scroll(); /* Nærmeste scrollable parent */
animation-timeline: scroll(root); /* Hele siden */
animation-timeline: scroll(nearest); /* Nærmeste (standard) */
```

**2. view()** - Følger elementets synlighed i viewport

```css
animation-timeline: view(); /* Kører når elementet er synligt */
```

**3. Custom timeline** - Brug et navngivet timeline

```css
/* Opret timeline på container */
.container {
  view-timeline: --my-timeline block;
}

/* Brug det på et element */
.child {
  animation-timeline: --my-timeline;
}
```

## view-timeline

Opretter et navngivet timeline baseret på et elements synlighed.

```css
.container {
  view-timeline: --h-scroll block;
  height: 300vh;
}

.track {
  animation: move linear both;
  animation-timeline: --h-scroll; /* Brug det navngivne timeline */
}
```

**Syntax:** `view-timeline: --name axis`

**Name:** Vælg selv (med --)

**Axis:**

- `block` - Lodret retning (standard)
- `inline` - Vandret retning
- `both` - Begge retninger

## animation-range

Definerer hvilken del af scroll-området animationen skal køre i.

```css
.box {
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```

**Nøgleord:**

**Entry** - Når elementet kommer ind i viewport:

- `entry 0%` - Bund af element rammer bund af viewport
- `entry 100%` - Top af element rammer bund af viewport

**Exit** - Når elementet forlader viewport:

- `exit 0%` - Bund af element rammer top af viewport
- `exit 100%` - Top af element rammer top af viewport

**Cover** - Mens elementet dækker viewporten:

- `cover 0%` - Top af element rammer bund af viewport
- `cover 100%` - Bund af element rammer top af viewport

**Eksempler:**

```css
/* Start når element kommer ind, slut når 30% inde */
animation-range: entry 0% cover 30%;

/* Kør gennem hele scroll */
animation-range: entry 0% exit 100%;

/* Kun mens elementet er synligt */
animation-range: cover 0% cover 100%;
```

## Kombination: Scroll-driven Animation

Her er hvordan alt dette arbejder sammen:

```css
/* Eksempel: Progress bar */
@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.progress-bar {
  position: fixed;
  top: 0;
  transform-origin: 0 50%;

  animation: grow auto linear;
  animation-timeline: scroll(root); /* Følg side-scroll */
}
```

```css
/* Eksempel: Element der fader ind */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fade-in linear both;
  animation-timeline: view(); /* Følg synlighed */
  animation-range: entry 0% cover 30%; /* Start→30% inde */
}
```

```css
/* Eksempel: Vandret scroll */
.container {
  height: 300vh;
  view-timeline: --h-scroll block; /* Opret timeline */
}

.track {
  position: sticky;
  top: 20vh;

  animation: slide linear both;
  animation-timeline: --h-scroll; /* Brug timeline */
}

@keyframes slide {
  to {
    transform: translateX(-100%);
  }
}
```

## Browser Support

**Begrænset support (2024+):**

- `animation-timeline` - Kun Chrome, Edge
- `view-timeline` - Kun Chrome, Edge
- `animation-range` - Kun Chrome, Edge

For scroll-driven animations skal du bruge CodePen eller moderne browser til at teste.

## Næste Skridt

Se hvordan disse properties bruges i praksis:

[Gå til Scroll Effekter →](/css/scroll-effects)
