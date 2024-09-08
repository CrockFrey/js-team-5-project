import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const section = document.querySelector('.projects-section');
// Отримуємо всі картки
const slides = document.querySelectorAll('.projects-cards-item');

// Ініціалізуємо Swiper
const swiper = new Swiper('.swiper-container', {
  on: {
    slideChange: function () {
      // При зміні слайду, приховуємо всі слайди
      slides.forEach(slide => {
        slide.classList.add('hidden');
      });

      // Відображаємо тільки активний слайд
      const activeSlide = slides[swiper.activeIndex];
      activeSlide.classList.remove('hidden');
      activeSlide.style.display = 'flex'; // Застосовуємо flex для активного слайда
    },
  },
});

// При ініціалізації відображаємо лише перший слайд
slides.forEach((slide, index) => {
  if (index !== 0) {
    slide.classList.add('hidden');
  }
});
