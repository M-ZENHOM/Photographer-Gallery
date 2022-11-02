let mobileLinks = document.querySelector(".mobile-links");
let links = document.querySelector(".mobile-nav");
let header = document.querySelector("header");

let scrollTopBtn = document.querySelector(".scrollTop");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (
    document.body.scrollTop >= 600 ||
    document.documentElement.scrollTop >= 600
  ) {
    scrollTopBtn.classList.add("readyToScroll");
  } else {
    scrollTopBtn.classList.remove("readyToScroll");
  }
  scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
}

mobileLinks.addEventListener("click", () => {
  mobileLinks.classList.toggle("active");
  if (!links.classList.contains("links-slide")) {
    links.classList.add("links-slide");
  } else {
    links.classList.remove("links-slide");
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    links.classList.remove("links-slide");
    mobileLinks.classList.remove("active");
  }
});

let clickedLinks = document.querySelectorAll("nav a");

function clickedSection(element) {
  element.forEach((el) => {
    el.addEventListener("click", (e) => {
      links.classList.remove("links-slide");
      mobileLinks.classList.remove("active");
    });
  });
}
clickedSection(clickedLinks);

window.onload = () => {
  header.classList.add("load-animation");
};
