import Swiper from 'swiper';
import 'swiper/css';

import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

const swiper = new Swiper('.about-skills-swiper', {
  speed: 400,
  spaceBetween: 0,
  loop: true,
  setWrapperSize: true,
  breakpoints: {
    // Налаштування для десктопу
    1440: {
      slidesPerView: 6,
    },
    // Налаштування для планшету
    768: {
      slidesPerView: 3,
    },
    // Налаштування для мобільних пристроїв
    320: {
      slidesPerView: 2,
    },
  },
  on: {
    init: function () {
      document.querySelector('.swiper-slide').style.backgroundColor = '#2b4441';
    },
    slideChange: function () {
      const previousSlide = this.slides[this.previousIndex];
      const activeSlide = this.slides[this.activeIndex];
      previousSlide.style.background = '';
      activeSlide.style.backgroundColor = '#2b4441';
    },
  },
});

const btnNext = document.querySelector('.about-skills-btn');
btnNext.addEventListener('click', () => {
  swiper.slideNext();
});
