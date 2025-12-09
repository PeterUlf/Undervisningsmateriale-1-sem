---
title: Scroll Effekter - Animation Timeline
description: Forstå forskellen på scroll(), view() og custom timelines
sidebar:
  order: 6.5
  badge:
    text: Tema 5
    variant: tip
    class: badge-theme-5
---

## Hvad er Animation Timeline?

`animation-timeline` forbinder en CSS animation med scroll-position i stedet for tid. I stedet for at animationen kører over fx 2 sekunder, kører den når du scroller.

Der er tre typer:

## 1. `scroll()` - Document Scroll Timeline

Følger scroll-positionen af hele siden (eller en specifik container).

### Hvordan virker det?

```css
.progress-bar {
  animation: grow linear both;
  animation-timeline: scroll(); /* Tracker hele sidens scroll */
}

@keyframes grow {
  from {
    scale: 0 1;
  }
  to {
    scale: 1 1;
  }
}
```

Animation starter når siden er scrollet 0% og slutter når siden er scrollet 100%.

### Brug til:

- ✅ Progress bars der viser scroll-fremskridt
- ✅ Parallax effekter der følger hele sidens scroll
- ✅ Baggrunds-animationer der ændrer sig gradvist
- ✅ Når ALLE brugere skal se samme animation ved samme scroll-punkt

### Eksempel:

En progress bar i toppen af siden der vokser fra 0% til 100% når du scroller ned:

```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  transform-origin: 0 50%;

  animation: grow linear both;
  animation-timeline: scroll(); /* Tracker hele dokumentets scroll */
}

@keyframes grow {
  from {
    scale: 0 1;
  } /* 0% bred ved top */
  to {
    scale: 1 1;
  } /* 100% bred ved bund */
}
```

---

## 2. `view()` - View Progress Timeline

Følger når et **specifikt element** kommer ind i og ud af viewport.

### Hvordan virker det?

```css
.card {
  animation: fade-in linear both;
  animation-timeline: view(); /* Tracker når DENNE card er synlig */
  animation-range: entry 0% cover 30%;
}

@keyframes fade-in {
  from {
    opacity: 0;
    translate: -100vw 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
```

Animation starter når elementet kommer ind i viewport og slutter når det er dækket af viewport.

### Brug til:

- ✅ Fade-in effekter når elementer kommer i syne
- ✅ Hver ting skal animere individuelt
- ✅ Scroll-triggered animations
- ✅ Når forskellige elementer skal animere på forskellige tidspunkter

### Eksempel:

Cards der fader ind når de scroller ind i skærmen:

```css
.card {
  animation: fade-in linear both;
  animation-timeline: view(); /* Hver card tracker sin egen synlighed */
  animation-range: entry 0% cover 30%;
}

@keyframes fade-in {
  from {
    opacity: 0;
    translate: -50px 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
```

Hver card animerer uafhængigt når den kommer i syne.

### View Timeline Faser:

Når du bruger `view()`, er der forskellige faser:

- **entry** - Elementet kommer ind i viewport
- **cover** - Viewport dækker elementet
- **contain** - Elementet er helt inde i viewport
- **exit** - Elementet forlader viewport

Du styrer det med `animation-range`:

```css
/* Animer kun når elementet kommer ind */
animation-range: entry 0% entry 100%;

/* Animer fra start af entry til tidligt i cover-fasen */
animation-range: entry 0% cover 30%;

/* Animer mens elementet er synligt */
animation-range: entry 0% exit 100%;
```

---

## 3. Custom Named Timelines - `view-timeline`

Lav din egen timeline med navn på én element, så andre elementer kan bruge den.

### Hvordan virker det?

```css
/* På parent: opret timeline */
.gallery-container {
  height: 300vh;
  view-timeline: --gallery block; /* Lav timeline med navn */
}

/* På child: brug timeline */
.gallery-track {
  animation: move-horizontal linear both;
  animation-timeline: --gallery; /* Brug den navngivne timeline */
}

@keyframes move-horizontal {
  to {
    translate: -80% 0;
  }
}
```

Parent's synlighed styrer child's animation.

### Brug til:

- ✅ Vandret scroll-effekter
- ✅ Når parent skal styre child's animation
- ✅ Komplekse setups hvor flere elementer skal følge samme scroll-område
- ✅ Koordinerede animationer mellem flere elementer

### Eksempel:

Vandret scrollende galleri:

```css
/* Container: definer timeline */
.horizontal-scroll-container {
  height: 300vh; /* Høj for scroll-plads */
  view-timeline: --gallery block; /* Opret named timeline */
}

/* Wrapper: sticky */
.sticky-wrapper {
  position: sticky;
  top: 10vh;
  height: 80vh;
  overflow: hidden;
}

/* Track: brug timeline */
.gallery-track {
  display: flex;
  gap: 2rem;

  animation: move-horizontal linear both;
  animation-timeline: --gallery; /* Brug parent's timeline */
  animation-range: contain 0% contain 100%;
}

@keyframes move-horizontal {
  to {
    translate: -80% 0;
  }
}
```

Mens du scroller lodret gennem container (300vh høj), bevæger gallery-track sig vandret.

---

## Sammenligning: Hvornår skal jeg bruge hvad?

| Situation                 | Brug            | Forklaring                                       |
| ------------------------- | --------------- | ------------------------------------------------ |
| Progress bar i toppen     | `scroll()`      | Skal følge hele sidens scroll                    |
| Cards der fader ind       | `view()`        | Hver card animerer når den bliver synlig         |
| Parallax hero header      | `scroll()`      | Baggrund skal følge sidens scroll                |
| Vandret scroll galleri    | Custom timeline | Parent's scroll styrer child's vandret bevægelse |
| Sticky sidebar animation  | `view()`        | Animerer når sidebar-området er synligt          |
| Scroll-triggered effekter | `view()`        | Effekt starter når element kommer i syne         |

## Tommelfingerregel:

### Brug `scroll()` når:

- ❓ Skal animationen følge hele sidens scroll?
- ❓ Er det én global effekt?
- ❓ Skal alle se det samme ved samme scroll-position?

**→ Ja? Brug `scroll()`**

### Brug `view()` når:

- ❓ Skal hvert element animere individuelt?
- ❓ Starter animationen når elementet kommer i syne?
- ❓ Er der mange elementer der skal animere uafhængigt?

**→ Ja? Brug `view()`**

### Brug custom timeline når:

- ❓ Skal parent's scroll styre child's animation?
- ❓ Skal flere elementer følge samme scroll-område?
- ❓ Laver du vandret scroll eller komplekse koordinerede effekter?

**→ Ja? Brug custom timeline**

---

## Praktiske Eksempler

### Eksempel 1: Progress Bar (scroll)

```css
.progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: blue;
  transform-origin: 0 50%;

  animation: grow linear both;
  animation-timeline: scroll(); /* Følger hele siden */
}

@keyframes grow {
  from {
    scale: 0 1;
  }
  to {
    scale: 1 1;
  }
}
```

### Eksempel 2: Fade-in Cards (view)

```css
.card {
  animation: fade-in linear both;
  animation-timeline: view(); /* Hver card individuelt */
  animation-range: entry 0% cover 30%;
}

@keyframes fade-in {
  from {
    opacity: 0;
    translate: 0 50px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
```

### Eksempel 3: Vandret Galleri (custom)

```css
.gallery-container {
  height: 300vh;
  view-timeline: --gallery block; /* Definer timeline */
}

.gallery-track {
  position: sticky;
  top: 0;
  display: flex;

  animation: slide linear both;
  animation-timeline: --gallery; /* Brug timeline */
  animation-range: contain 0% contain 100%;
}

@keyframes slide {
  to {
    translate: -80% 0;
  }
}
```

---

## Browser Support

`animation-timeline` er moderne CSS og kræver:

- ✅ Chrome/Edge 115+
- ✅ Safari 18+ (Technology Preview)
- ❌ Firefox (endnu ikke)

Tjek altid i moderne browser ved test!

---

## Næste Skridt

Nu hvor du forstår de forskellige timeline-typer, prøv at:

1. Lav en progress bar med `scroll()`
2. Lav fade-in cards med `view()`
3. Lav et vandret galleri med custom timeline

Se [Scroll Effekter Øvelser](/css/scroll-effects-oevelser/) for praktiske opgaver!
