"use strict";

gsap.set(".js-header", {
  opacity: 0,
});
gsap.to(".js-header", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".mv",
    start: "bottom center",
  },
});
gsap.set(".js-card", {
  opacity: 0,
  y: 100,
});
gsap.to(".js-card", {
  opacity: 1,
  y: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".feature",
    start: "top top",
  },
});
