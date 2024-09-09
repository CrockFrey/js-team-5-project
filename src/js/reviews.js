import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';


const reviewList = document.querySelector('.reviews-list');
const notFoundText = document.querySelector('.not-found-text');

axiosReviews();

async function axiosReviews() {
    try {
      const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
      
        const getReviews = response.data
            .map(review => renderReviews(review))
            .join('');
        
      reviewList.innerHTML = getReviews;


      const swiper = new Swiper('.swiper-reviews', {
      // breakpointsBase: 'container',  
        // touchEventsTarget: 'container',
        breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16
        }
      },
      slideToClickedSlide: true,
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
    <img class="review-img" src="${review.avatar_url}" alt="${review.author}" width="48" height="48">
    <h3 class="review-name">${review.author}</h3>
    <p class="review-text">${review.review}</p>
    </li>`
    }


