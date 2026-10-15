let currentImageIndex = 0;
let autoplayTimerId;

const AUTOPLAY_INTERVAL_MS = 3000;
const imagesList = document.querySelectorAll(".image");
const previousEl = document.querySelector("#previous");
const nextEl = document.querySelector("#next");
const countEl = document.querySelector("#count");

const goTo = (targetIndex) => {
  currentImageIndex = (targetIndex + imagesList.length) % imagesList.length;

  updateUI();
};

const updateUI = () => {
  imagesList.forEach((image, imageIndex) => {
    image.classList.toggle("is-active", imageIndex === currentImageIndex);
  });

  countEl.textContent = `${currentImageIndex + 1} / ${imagesList.length}`;
};

const onPreviousClick = () => {
  goTo(currentImageIndex - 1);
};

const onNextClick = () => {
  goTo(currentImageIndex + 1);
};

const resetAutoplay = () => {
  clearInterval(autoplayTimerId);

  autoplayTimerId = setInterval(onNextClick, AUTOPLAY_INTERVAL_MS);
};

const init = () => {
  resetAutoplay();
  goTo(currentImageIndex);
};

if (imagesList.length > 0 && previousEl && nextEl && countEl) {
  previousEl.addEventListener("click", () => {
    onPreviousClick();
    resetAutoplay();
  });

  nextEl.addEventListener("click", () => {
    onNextClick();
    resetAutoplay();
  });

  init();
}
