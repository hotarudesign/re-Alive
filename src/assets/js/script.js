"use strict";

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
gsap.set(".js-hero-ttl", {
  opacity: 0,
  x: 200,
});
gsap.to(".js-hero-ttl", {
  opacity: 1,
  x: 0,
});
gsap.set(".js-feature-item", {
  opacity: 0,
  x: 100,
});
gsap.to(".js-feature-item", {
  opacity: 1,
  x: 0,
  stagger: 0.2,
  ease: Power2.easeOut,
  scrollTrigger: {
    trigger: ".feature",
    start: "top center",
  },
});
// headerスクロール背景変更
const scrollHeader = document.getElementById("js-header");
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 400) {
    scrollHeader.classList.add("active");
  } else {
    scrollHeader.classList.remove("active");
  }
});
