import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';

  const prevButton = document.querySelector('.projects-button-prev');
  const nextButton = document.querySelector('.projects-button-next');

const projectsSwiper = new Swiper('.projects-list', {
  modules: [Navigation, Autoplay],
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
  },

    autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
    
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
    },
  },
});

projectsSwiper.on('slideChange', () => {
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

    if (focusedElement === prevButton) {
      e.preventDefault();
      nextButton.focus();
    } else if (focusedElement === nextButton) {
      e.preventDefault();
      prevButton.focus();
    }
  }
});
