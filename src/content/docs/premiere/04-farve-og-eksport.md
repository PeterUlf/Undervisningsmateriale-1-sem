---
id: premiere-farve-eksport
title: Farvekorrektion og eksport til platforme
description: Grundlæggende farvekorrektion i Premiere Pro og eksport til forskellige platforme
sidebar:
  label: Farve og eksport
  order: 5
---

# Farvekorrektion og eksport til platforme

Målgruppe: Multimediedesign-studerende, der allerede kan klippe en simpel film med lyd og B-roll.

## Læringsmål

- Forstå forskellen på **farvekorrektion** og **farvegrading**.
- Bruge Lumetri Color til simple justeringer (eksponering, hvidbalance, kontrast).
- Arbejde med simple grafiske elementer (lower thirds, intro/outro).
- Eksportere til forskellige mål: SoMe, web, præsentation.

## 1. Farvekorrektion vs. farvegrading

- **Farvekorrektion**: Gør billedet _korrekt_ – fx hvidbalance, eksponering, hudtoner.
- **Farvegrading**: Giver et _look_ – fx mere “filmatisk”, varmt/koldt, desatureret.

I dette modul fokuserer vi primært på **korrektion**, så materialet ser professionelt og ensartet ud.

## 2. Grundlæggende workflow i Lumetri Color

Typisk rækkefølge:

1. Åbn **Color**-workspace eller panelet **Lumetri Color**.
2. Brug fanen **Basic Correction**:
   - White Balance (Temperature/Tint)
   - Exposure
   - Contrast
   - Highlights/Shadows
   - Whites/Blacks
3. Brug scopes (fx Waveform, Vectorscope) til at støtte dine beslutninger.

Øvelse (20–30 min):

- Giv de studerende 3–5 klip optaget i forskellige lys-situationer.
- Opgave:
  - Få alle klip til at se ud som om, de hører til i samme video.
  - Undgå overeksponering og “radioaktive” hudtoner.

## 3. Ensartet look på tværs af klip

Strategier:

- Justér ét klip, du vil bruge som “reference”.
- Kopiér Lumetri-effekten til andre klip (Copy/Paste Attributes).
- Finjustér pr. klip, hvis det afviger meget.

Tip: Brug **Adjustment Layers**:

1. Lav et `Adjustment Layer` i Project-panelet.
2. Læg det over en hel sekvens.
3. Tilføj Lumetri på laget i stedet for på hvert enkelt klip.

Fordel: Lettere at ændre det samlede look senere.

## 4. Simple grafiske elementer

Fokus på:

- **Lower thirds**: Navn + titel/rolle.
- **Intro/outro**: Enkel tekst/grafik, evt. med logo.

Workflow:

1. Brug **Type Tool (T)** til at lave tekst.
2. Brug **Essential Graphics** til at gemme stilarter (font, farve, størrelse).
3. Sørg for konsekvens på tværs af hele videoen (samme stil til alle navne).

Øvelse (15–20 min):

- Lav en simpel grafisk pakke til en case:
  - En lower third-skabelon til interviewpersoner.
  - En intro- og outrotekst (evt. med logo, hvis I har det).

## 5. Eksport til forskellige platforme

### Overordnede principper

- Kend målplatformen: Instagram, YouTube, website, fullscreen-præsentation, osv.
- Tænk over **format** (16:9, 9:16, 1:1) og **længde**.

### Typiske presets i Premiere (H.264)

- **YouTube 1080p**: God generel preset til web og YouTube.
- **Match Source – High bitrate**: Til høj kvalitet, fleksibel brug.
- Til SoMe kan I senere arbejde med:
  - 1080x1920 (9:16) til Reels/Stories/TikTok.
  - 1080x1080 (1:1) til kvadratisk feed.

Øvelse (20–30 min):

- Tag en eksisterende case-video (30–60 sek.).
- Eksportér to versioner:
  1. En “hovedversion” til web/YouTube (1920x1080).
  2. En kortere version til SoMe (15–30 sek.).

Lad dem overveje:

- Hvilke klip ryger ud i SoMe-versionen?
- Hvad er vigtigst at bevare?

## 6. Eksport-indstillinger i praksis

Gennemgå kort:

- **Format**: H.264 (mp4) til de fleste online-brugsscenarier.
- **Preset**: Start med en preset tæt på målet.
- **Bitrate settings**: VBR 1-pass er ofte nok til øvelser.
- **File name & location**: Brug `03_exports/`-mappen og sigende filnavne.

Eksempel på navngivning:

```text
KEA_case-video_2025-03_web_v01.mp4
KEA_case-video_2025-03_InstagramReel_v01.mp4
```

## 7. Afsluttende øvelse – lille case

Samleøvelse på tværs af modulerne:

> I par eller små grupper skal I lave en kort case-video for en fiktiv (eller rigtig) kunde.

Krav:

- Organiseret projekt og mappestruktur.
- Brug af A-roll + B-roll.
- Mindst ét J- eller L-cut.
- Grundlæggende farvekorrektion via Lumetri.
- Konsistente grafiske elementer (min. lower thirds).
- Eksporteret i mindst to versioner (web + SoMe eller lignende).

Evaluering:

- Vis videoerne i klassen.
- Brug en simpel feedback-struktur, fx:
  - 1 ting, der fungerer rigtig godt.
  - 1 ting, I ville forbedre i næste version.

Dette modul afrunder det grundlæggende Premiere-forløb og gør de studerende klar til at bruge video aktivt i andre fag og projekter på uddannelsen.
