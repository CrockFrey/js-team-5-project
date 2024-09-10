import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';


const reviewList = document.querySelector('.reviews-list');
const notFoundText = document.querySelector('.not-found-text');
const nextReviewBtn = document.querySelector('.review-btn-next');
const prevReviewBtn = document.querySelector('.review-btn-prev');


axiosReviews();

async function axiosReviews() {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
      
    const getReviews = response.data
      .map(review => renderReviews(review))
      .join('');
        
    reviewList.innerHTML = getReviews;


    const reviewSwiper = new Swiper('.review-swiper', {
      modules: [ Navigation, Autoplay ],
      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        }
      },
        keyboard: {
           enabled: true,
           onlyInViewport: true,
           pageUpDown: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      },

      on: {
          slideChange: function () {
              updateReviewBtnStates();
          },
      }
    })

    nextReviewBtn.addEventListener('click', function () {
    reviewSwiper.slideNext();
    });
    
    prevReviewBtn.addEventListener('click', function () {
      reviewSwiper.slidePrev();
    });

    function updateReviewBtnStates() {
      if (reviewSwiper.isBeginning) {
        nextReviewBtn.classList.remove('review-btn-disabled');
        prevReviewBtn.classList.add('review-btn-disabled');
      }
    
      else if (reviewSwiper.isEnd) {
        nextReviewBtn.classList.add('review-btn-disabled');
        prevReviewBtn.classList.remove('review-btn-disabled');
      }
    
      else {
        nextReviewBtn.classList.remove('review-btn-disabled');
        prevReviewBtn.classList.remove('review-btn-disabled');
      };
    }

    updateReviewBtnStates();

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowLeft') {
        reviewSwiper.slidePrev();
      } else if (ev.key === 'ArrowRight') {
        reviewSwiper.slideNext();
      } else if (ev.key === 'Tab') {
        ev.preventDefault();
        if (document.activeElement === prevReviewBtn) {
          ev.preventDefault();
          prevReviewBtn.focus();
        } else if (document.activeElement === nextReviewBtn) {
          ev.preventDefault();
          nextReviewBtn.focus();
        }
      }
    })
        
  } catch (err) {
      notFoundText.classList.remove('is-hidden');
        iziToast.info({
            message: 'Error. Please try again!',
            position: 'center',
            messageSize: '16',
            color: 'red',
            progressBar: false,
            closeOnClick: true
        })
    }
}

function renderReviews(review) {
        return `<li class="review-item swiper-slide">
    <img class="review-img" src="${review.avatar_url}" alt="${review.author}" width="48" height="48" loading="lazy">
    <h3 class="review-name">${review.author}</h3>
    <p class="review-text">${review.review}</p>
    <div class="swiper-lazy-preloader"></div>
    </li>`
    }