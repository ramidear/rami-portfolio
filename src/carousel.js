/**
 * carousel.js — shared carousel logic
 * Each page that uses a carousel includes this once.
 * Supports multiple independent carousels per page via data-carousel attributes.
 */
(function () {
  function initCarousel(container) {
    const slides = container.querySelectorAll(".carousel-slide");
    let idx = 0;

    function show(n) {
      idx = ((n % slides.length) + slides.length) % slides.length;
      slides.forEach((s, i) => {
        s.style.display = "none";
        s.classList.remove("active");
        if (i === idx) {
          s.style.display = "block";
          s.classList.add("active");
        }
      });
    }

    container.querySelector(".carousel-btn.prev")
      ?.addEventListener("click", () => show(idx - 1));
    container.querySelector(".carousel-btn.next")
      ?.addEventListener("click", () => show(idx + 1));

    // Keyboard support when carousel is focused
    container.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft")  show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });

    show(0);
  }

  document.querySelectorAll(".carousel-container").forEach(initCarousel);
})();
