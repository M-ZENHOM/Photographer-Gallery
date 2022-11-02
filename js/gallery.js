// images Gallery
let galleryImgs = Array.from(document.querySelectorAll(".gallery img"));
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".bi-x");
let nextElement = document.querySelector(".bi-arrow-right-short");
let prevElement = document.querySelector(".bi-arrow-left-short");
let curruntSlide = 1;
let slidesCount = galleryImgs.length;

nextElement.addEventListener("click", nextImg);
prevElement.addEventListener("click", prevImg);
closeBtn.addEventListener("click", removeOpendClass);

galleryImgs.forEach((img) => {
  img.addEventListener("click", Checker);
});

function Checker() {
  removeOpendClass();
  galleryImgs[curruntSlide - 1].classList.add("opend");
  overlay.style.display = "block";
  closeBtn.style.display = "block";
  nextElement.style.display = "block";
  prevElement.style.display = "block";

  //prevImg
  if (curruntSlide == 1) {
    prevElement.classList.add("disabled");
  } else {
    prevElement.classList.remove("disabled");
  }
  //nextImg
  if (curruntSlide == slidesCount) {
    nextElement.classList.add("disabled");
  } else {
    nextElement.classList.remove("disabled");
  }
}

function removeOpendClass() {
  galleryImgs.forEach((img) => {
    img.classList.remove("opend");
    overlay.style.display = "none";
    closeBtn.style.display = "none";
    nextElement.style.display = "none";
    prevElement.style.display = "none";
  });
}
function nextImg() {
  if (nextElement.classList.contains("disabled")) {
    return false;
  } else {
    curruntSlide++;
    Checker();
  }
}
function prevImg() {
  if (prevElement.classList.contains("disabled")) {
    return false;
  } else {
    curruntSlide--;
    Checker();
  }
}
