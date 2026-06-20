/* Minimal, dependency-free enhancements. The site works fully without this. */
(function () {
  document.documentElement.classList.remove("no-js");

  // Current year in the footer
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // Gentle reveal on scroll — skipped if the user prefers reduced motion
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });

  // Safety net: never leave content hidden if the observer doesn't fire.
  setTimeout(function () { items.forEach(function (el) { el.classList.add("in"); }); }, 2500);
})();
