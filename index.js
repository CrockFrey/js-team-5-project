import{A as g,S as y,N as w,a as E,b as L,i as h}from"./assets/vendor-BJCHEAyP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const p=document.querySelector("body");document.querySelector(".header-section");const k=document.querySelector(".header-burger-icon"),l=document.querySelector(".mobile-menu"),S=document.querySelector(".mobile-menu-close-btn"),B=document.querySelectorAll(".mobile-menu-item"),q=document.querySelector(".header-menu-button"),a=document.querySelector(".header-menu-list"),I=document.querySelectorAll(".header-menu-item"),x=document.querySelector(".header-order-button"),M=document.querySelector(".menu-order-button"),v=e=>{window.scrollTo({top:document.getElementById(e).offsetTop,behavior:"smooth"})},C=()=>{l.classList.add("active"),l.style.opacity="1",p.style.overflow="hidden"},A=()=>{l.style.opacity="0",setTimeout(()=>l.classList.remove("active"),250),p.style.overflow="visible"},O=e=>{e.preventDefault(),v(e.target.attributes[0].value.replace("#","")),l.style.opacity="0",setTimeout(()=>l.classList.remove("active"),250),p.style.overflow="visible"},P=e=>{e.preventDefault(),v(e.target.attributes[0].value.replace("#","")),a.style.opacity="0",setTimeout(()=>a.classList.remove("active"),250)},T=()=>{a.classList.contains("active")?(a.style.opacity="0",setTimeout(()=>a.classList.remove("active"),250)):(a.classList.add("active"),a.style.opacity="1")},j=e=>{e.preventDefault(),v(e.target.attributes[0].value.replace("#","")),l.style.opacity="0",setTimeout(()=>l.classList.remove("active"),500),p.style.overflow="visible"},D=e=>{e.preventDefault(),v(e.target.attributes[0].value.replace("#",""))};k.addEventListener("click",C);S.addEventListener("click",A);B.forEach(e=>{e.addEventListener("click",O)});q.addEventListener("click",T);I.forEach(e=>{e.addEventListener("click",P)});M.addEventListener("click",j);x.addEventListener("click",D);new g(".accordion-container",{duration:600,showMultiple:!0,openOnInit:[0]});const V=new y(".about-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#16a085"},slideChange:function(){const e=this.slides[this.previousIndex],t=this.slides[this.activeIndex];e.style.background="",t.style.backgroundColor="#16a085"}}}),N=document.querySelector(".about-skills-btn");N.addEventListener("click",()=>{V.slideNext()});const z=document.querySelector(".btn-benefits");z.addEventListener("click",function(){document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const R=document.querySelectorAll(".list-item-benefits");R.forEach(e=>{e.addEventListener("mouseover",()=>{e.style.transform="scale(1.06)",e.style.transition="transform 0.3s ease"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"})});const u=new y(".projects-list",{modules:[w,E],slidesPerView:1,spaceBetween:16,loop:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".projects-button-next",prevEl:".projects-button-prev"},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},breakpoints:{768:{slidesPerView:1,spaceBetween:16,loop:!1},1440:{slidesPerView:1,spaceBetween:16,loop:!1}}});u.on("slideChange",()=>{const e=document.querySelector(".projects-button-prev"),t=document.querySelector(".projects-button-next");u.isBeginning?(e.classList.add("swiper-button-disabled"),e.setAttribute("disabled",!0)):(e.classList.remove("swiper-button-disabled"),e.removeAttribute("disabled")),u.isEnd?(t.classList.add("swiper-button-disabled"),t.setAttribute("disabled",!0)):(t.classList.remove("swiper-button-disabled"),t.removeAttribute("disabled"))});document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")u.slideNext();else if(e.key==="ArrowLeft")u.slidePrev();else if(e.key==="Tab"){const t=document.activeElement,o=document.querySelector(".projects-button-prev"),n=document.querySelector(".projects-button-next");t===o?(e.preventDefault(),n.focus()):t===n&&(e.preventDefault(),o.focus())}});new g(".accordion",{elementClass:"content-box",triggerClass:"accordion-button",panelClass:"content",duration:"400"});const $=document.querySelector(".covers-section"),b=document.querySelectorAll(".covers-img"),H={root:null,rootMargin:"0px",threshold:.5},Z=new IntersectionObserver(function(e,t){e.forEach(o=>{o.isIntersecting?b.forEach(n=>{n.classList.add("animation")}):b.forEach(n=>{n.classList.remove("animation")})})},H);Z.observe($);const F=document.querySelector(".reviews-list"),U=document.querySelector(".not-found-text"),d=document.querySelector(".review-btn-next"),c=document.querySelector(".review-btn-prev");_();async function _(){try{const t=(await L.get("https://portfolio-js.b.goit.study/api/reviews")).data.map(n=>K(n)).join("");F.innerHTML=t;const o=new y(".review-swiper",{modules:[w,E],breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}});d.addEventListener("click",function(){o.slideNext()}),c.addEventListener("click",function(){o.slidePrev()}),o.activeIndex===0?(d.classList.remove("review-btn-disabled"),c.classList.add("review-btn-disabled"),c.setAttribute("disabled",!0)):o.activeIndex===5?(d.classList.add("review-btn-disabled"),c.classList.remove("review-btn-disabled")):(d.classList.remove("review-btn-disabled"),c.classList.remove("review-btn-disabled")),document.addEventListener("keydown",function(n){n.key==="ArrowLeft"?o.slidePrev():n.key==="ArrowRight"?o.slideNext():n.key==="Tab"&&(n.preventDefault(),document.activeElement===c?(n.preventDefault(),c.focus()):document.activeElement===d&&(n.preventDefault(),d.focus()))})}catch{U.classList.remove("is-hidden"),h.info({message:"Error. Please try again!",position:"center",messageSize:"16",color:"red",progressBar:!1,closeOnClick:!0})}}function K(e){return`<li class="review-item swiper-slide">
    <img class="review-img" src="${e.avatar_url}" alt="${e.author}" width="48" height="48" loading="lazy">
    <h3 class="review-name">${e.author}</h3>
    <p class="review-text">${e.review}</p>
    <div class="swiper-lazy-preloader"></div>
    </li>`}const s={commentsElem:document.getElementById("comments"),emailElem:document.getElementById("email"),successMessage:document.getElementById("successMessage"),errorMessage:document.getElementById("errorMessage"),formElem:document.querySelector(".form-footer"),footerElem:document.getElementById("work-together")},W=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;s.commentsElem.addEventListener("blur",function(){const t=s.commentsElem.value;t.length>35&&(s.commentsElem.value=t.substring(0,35)+"...")});s.emailElem.addEventListener("input",function(){const e=s.emailElem.value.trim();W.test(e)?(s.emailElem.classList.add("success"),s.emailElem.classList.remove("error"),s.successMessage.style.display="block",s.errorMessage.style.display="none"):(s.emailElem.classList.add("error"),s.emailElem.classList.remove("success"),s.successMessage.style.display="none",s.errorMessage.style.display="block")});s.commentsElem.addEventListener("input",function(){localStorage.setItem("comments",s.commentsElem.value)});s.emailElem.addEventListener("input",function(){localStorage.setItem("email",s.emailElem.value)});document.addEventListener("DOMContentLoaded",function(){const e=localStorage.getItem("comments"),t=localStorage.getItem("email");e&&(s.commentsElem.value=e),t&&(s.emailElem.value=t)});function G({title:e,message:t}){m();const o=`<div class="backdrop is-open"><div class="modal is-visible"><button class="modal-close-btn" type="button">&times;</button>
      <h2 class="modal-title">${e}</h2><p class="modal-description">${t}</p></div></div>`;s.footerElem.insertAdjacentHTML("afterend",o),document.body.classList.add("no-scroll"),J(),s.formElem.reset()}function J(){const e=document.querySelector(".backdrop"),t=document.querySelector(".modal-close-btn");e&&(t.addEventListener("click",m),e.addEventListener("click",function(o){o.target===e&&m()}),document.addEventListener("keydown",function(o){o.key==="Escape"&&m()}))}function m(){const e=document.querySelector(".backdrop.is-open");e&&(e.classList.add("fade-out"),e.addEventListener("animationend",function(){e.remove(),document.body.classList.remove("no-scroll")},{once:!0}))}s.formElem.addEventListener("submit",async function(e){var n,r;e.preventDefault();const t=s.emailElem.value.trim(),o=s.commentsElem.value;try{const i=await L.post("https://portfolio-js.b.goit.study/api/requests/",{email:t,comment:o},{headers:{"Content-Type":"application/json"}});s.emailElem.classList.remove("success"),s.successMessage.style.display="none",G(i.data),localStorage.removeItem("email"),localStorage.removeItem("comments")}catch(i){console.log(i),h.error({position:"topRight",theme:"dark",messageColor:"white",backgroundColor:"#ef4040",message:"Error:"+(((r=(n=i.response)==null?void 0:n.data)==null?void 0:r.message)||"Something went wrong")})}});
//# sourceMappingURL=index.js.map
