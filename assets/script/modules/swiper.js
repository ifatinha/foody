import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const slideHome = new Swiper("#carouselHome", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: "#nextSlideHome",
    prevEl: "#prevSlideHome",
  },
});

const reviewSwiper = new Swiper("#reviewSwiper", {
  spaceBetween: 16,
  slidesPerView: 3,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: "#nextReview",
    prevEl: "#prevReview",
  },
});
