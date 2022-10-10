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
gsap.set(".js-main-ttl", {
  opacity: 0,
  x: 200,
});
gsap.to(".js-main-ttl", {
  opacity: 1,
  x: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".mv",
    start: "bottom center",
  },
});
gsap.set(".js-main-column-btn", {
  opacity: 0,
});
gsap.to(".js-main-column-btn", {
  opacity: 1,
  delay: 0.7,
  scrollTrigger: {
    trigger: ".mv",
    start: "bottom center",
  },
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
