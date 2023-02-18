const carouselImages = document.querySelector('.carousel__images');
const carouselButtons = document.querySelectorAll('.carousel__button');
let currentIndex = 0;

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselImages.children.length - 1;
  }
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= carouselImages.children.length) {
    currentIndex = 0;
  }
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

carouselButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('carousel__button--left')) {
      prevImage();
    } else {
      nextImage();
    }
  });
});