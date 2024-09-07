import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';

const reviewList = document.querySelector('.reviews-list');

axiosReviews();
async function axiosReviews() {
    try {
      const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
        const getReviews = response.data
            .map(review => renderReviews(review))
            .join('');
        
      reviewList.innerHTML = getReviews;

    } catch (err) {
        iziToast.error({
            message: 'Sorry, reviews are not found',
            position: 'center'
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


const swiper = new Swiper('.swiper', {
    loop: false,
    lazy: true,
    breakpointsBase: 'container',
    breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 316
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
})

