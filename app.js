const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let active = 0;

setBgToBody();

rightBtn.addEventListener("click", () => {
  active++;
  if (active > slides.length - 1) active = 0;

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  active--;
  if (active < 0) active = slides.length - 1;

  setBgToBody();
  setActiveSlide();
});

function setBgToBody() {
  body.style.backgroundImage = slides[active].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[active].classList.add("active");
}
