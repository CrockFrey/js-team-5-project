import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import 'swiper/css';


const reviewList = document.querySelector('.reviews-list');
const notFoundText = document.querySelector('.not-found-text');
const nextReviewBtn = document.querySelector('.review-btn-next');
const prevReviewBtn = document.querySelector('.review-btn-prev');
const reviewSlide = document.querySelector('.swiper-slide');

axiosReviews();

async function axiosReviews() {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
      
    const getReviews = response.data
      .map(review => renderReviews(review))
      .join('');
        
    reviewList.innerHTML = getReviews;


    const reviewSwiper = new Swiper('.swiper-reviews', {
      isLocked: false,
      allowSlideNext: true,
      allowSlidePrev: true,
      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 4,
        }
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      slideChange: function () {
        nextReviewBtn.addEventListener('click', function () {
          reviewSlide.allowSlideNext();
        });

        prevReviewBtn.addEventListener('click', function () {
          reviewSlide.allowSlidePrev();
        });

          if (reviewSwiper.isBeginning) {
            prevReviewBtn.classList.add('review-btn-disabled');
            prevReviewBtn.setAtribute('disabled', true);
          }

          else if (reviewSwiper.isEnd) {
            nextReviewBtn.classList.add('review-btn-disabled');
            nextReviewBtn.setAtribute('disabled', true);
          }
      }
    })
  
    console.log(reviewSwiper);
        
    
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
    <img class="review-img" src="${review.avatar_url}" alt="${review.author}" width="48" height="48">
    <h3 class="review-name">${review.author}</h3>
    <p class="review-text">${review.review}</p>
    </li>`
    }

