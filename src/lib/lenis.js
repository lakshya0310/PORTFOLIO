import Lenis from "lenis";

let lenis = null;

export function initLenis() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  let raf;
  const loop = (t) => {
    lenis.raf(t);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(raf);
    lenis.destroy();
    lenis = null;
  };
}

export function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -76, duration: 1.3 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}
