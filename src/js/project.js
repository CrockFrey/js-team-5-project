import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const projectsSwiper = new Swiper('.projects-list', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 16,
  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
    disabledClass: 'swiper-button-disabled',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});

projectsSwiper.on('slideChange', () => {
  const prevButton = document.querySelector('.projects-button-prev');
  const nextButton = document.querySelector('.projects-button-next');

  if (projectsSwiper.isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
    prevButton.setAttribute('disabled', true);
  } else {
    prevButton.classList.remove('swiper-button-disabled');
    prevButton.removeAttribute('disabled');
  }

  if (projectsSwiper.isEnd) {
    nextButton.classList.add('swiper-button-disabled');
    nextButton.setAttribute('disabled', true);
  } else {
    nextButton.classList.remove('swiper-button-disabled');
    nextButton.removeAttribute('disabled');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    projectsSwiper.slideNext();
  } else if (e.key === 'ArrowLeft') {
    projectsSwiper.slidePrev();
  } else if (e.key === 'Tab') {
    const focusedElement = document.activeElement;
    const prevButton = document.querySelector('.projects-button-prev');
    const nextButton = document.querySelector('.projects-button-next');
    if (focusedElement === prevButton) {
      e.preventDefault();
      nextButton.focus();
    } else if (focusedElement === nextButton) {
      e.preventDefault();
      prevButton.focus();
    }
  }
});