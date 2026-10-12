let currentImageIndex = 0;
const totalImages = document.querySelectorAll(".image").length;
let autoplayTimerId;

const imagesList = document.querySelectorAll(".image");
const previousEl = document.querySelector("#previous");
const nextEl = document.querySelector("#next");
const countEl = document.querySelector("#count");

const getNextImage = (currentImageIndex) => {
  const nextImage = (currentImageIndex + 1) % totalImages;
  return nextImage;
};

const getPreviousImage = (currentImageIndex) => {
  const previousImage = (currentImageIndex + totalImages - 1) % totalImages;
  return previousImage;
};

const updateUI = (currentImageIndex) => {
  imagesList.forEach((image) => {
    image.classList.remove("is-active");
  });

  imagesList[currentImageIndex].classList.add("is-active");

  countEl.textContent = `${currentImageIndex + 1} / ${totalImages}`;
};

const onPreviousClick = () => {
  currentImageIndex = getPreviousImage(currentImageIndex);
  updateUI(currentImageIndex);
};

const onNextClick = () => {
  currentImageIndex = getNextImage(currentImageIndex);
  updateUI(currentImageIndex);
};

const resetAutoplay = () => {
  clearInterval(autoplayTimerId);

  autoplayTimerId = setInterval(onNextClick, 3000);
};

const init = () => {
  resetAutoplay();
  updateUI(currentImageIndex);
};

previousEl.addEventListener("click", () => {
  onPreviousClick();
  resetAutoplay();
});

nextEl.addEventListener("click", () => {
  onNextClick();
  resetAutoplay();
});

init();
