(() => {
  const setupKey = "__tema9FetchPuzzlePrintReady";
  if (window[setupKey]) return;
  window[setupKey] = true;

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const button = target.closest('[data-print-slide="tema-9-fetch-puzzle"]');
    if (!button) return;

    const slide = button.closest(".slide, .generated-slide") || document;
    const puzzle = slide.querySelector(".a4-puzzle") || document.querySelector(".a4-puzzle");
    if (!puzzle) return;

    document.querySelector(".single-slide-print")?.remove();

    const printRoot = document.createElement("section");
    printRoot.className = "single-slide-print";
    printRoot.setAttribute("aria-hidden", "true");

    const title = document.createElement("h1");
    const slideHeading = slide.querySelector("h2");
    title.textContent =
      slideHeading?.textContent?.trim() ||
      "Kode-puslespil: Match hver linje med forklaring";

    const clone = puzzle.cloneNode(true);
    clone.querySelectorAll(".print-slide-button, button").forEach((element) => element.remove());

    printRoot.append(title, clone);
    document.body.append(printRoot);
    document.body.classList.add("is-printing-single-slide");

    const cleanup = () => {
      document.body.classList.remove("is-printing-single-slide");
      printRoot.remove();
    };

    window.addEventListener("afterprint", cleanup, { once: true });
    window.print();
  });
})();
