// Samme kode bruges i løsningssiden og i de fungerende HTML-eksempler.
export const baseCss = `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

.side {
  max-width: 960px;
  margin-inline: auto;
  padding: 1rem;
}

h1, h2, p {
  margin: 0;
}

h1 {
  margin-bottom: 1rem;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.tekst {
  padding: 1rem;
  background: #eee;
}

.tekst p {
  margin-top: 0.5rem;
}`;

export const solutions = [
  {
    number: 1,
    slug: 'opgave-1',
    html: `<main class="side">
  <h1>Opgave 1</h1>
  <div class="grid_1-1">
    <article class="kort">
      <img src="billede-1.svg" alt="Eksempelbillede 1" />
      <div class="tekst">
        <h2>Tekst 1</h2>
        <p>Beskrivelse til billede 1.</p>
      </div>
    </article>
    <article class="kort">
      <img src="billede-2.svg" alt="Eksempelbillede 2" />
      <div class="tekst">
        <h2>Tekst 2</h2>
        <p>Beskrivelse til billede 2.</p>
      </div>
    </article>
  </div>
  <section class="grid_1-1">
    <img src="billede-3.svg" alt="Eksempelbillede 3" />
    <div class="tekst">
      <h2>Tekst 3</h2>
      <p>Beskrivelse til billede 3.</p>
    </div>
  </section>
</main>`,
    css: `/* Mobil: én kolonne med luft mellem felterne. */
.side > .grid_1-1 + .grid_1-1,
.grid_1-1 > * + *,
.kort > * + * {
  margin-top: 1rem;
}

@media (min-width: 800px) {
  .grid_1-1 {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
  }

  /* Grid bruger nu gap mellem sine direkte børn. */
  .grid_1-1 > * {
    margin-top: 0;
  }
}`,
  },
  {
    number: 2,
    slug: 'opgave-2',
    html: `<main class="side">
  <h1>Opgave 2</h1>
  <div class="grid_opgave_2">
    <img class="billede_1" src="billede-1.svg" alt="Eksempelbillede 1" />
    <section class="tekst tekst_1">
      <h2>Tekst 1</h2>
      <p>Beskrivelse til billede 1.</p>
    </section>
    <img class="billede_2" src="billede-2.svg" alt="Eksempelbillede 2" />
    <section class="tekst tekst_2">
      <h2>Tekst 2</h2>
      <p>Beskrivelse til billede 2.</p>
    </section>
    <img class="billede_3" src="billede-3.svg" alt="Eksempelbillede 3" />
    <section class="tekst tekst_3">
      <h2>Tekst 3</h2>
      <p>Beskrivelse til billede 3.</p>
    </section>
  </div>
</main>`,
    css: `/* Mobil: behold HTML-rækkefølgen i én kolonne. */
.grid_opgave_2 > * + * {
  margin-top: 1rem;
}

@media (min-width: 800px) {
  .grid_opgave_2 {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
  }

  .grid_opgave_2 > * {
    margin-top: 0;
  }

  .billede_1 { grid-column: 1; grid-row: 1; }
  .billede_3 { grid-column: 2; grid-row: 1; }
  .tekst_1   { grid-column: 1; grid-row: 2; }
  .tekst_2   { grid-column: 2; grid-row: 2; }
  .billede_2 { grid-column: 1; grid-row: 3; }
  .tekst_3   { grid-column: 2; grid-row: 3; }
}`,
  },
] as const;
