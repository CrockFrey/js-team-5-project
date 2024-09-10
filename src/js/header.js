const body = document.querySelector('body');
const header = document.querySelector('.header-section');
const burgerButton = document.querySelector('.header-burger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
const headerMenuButton = document.querySelector('.header-menu-button');
const headerMenuList = document.querySelector('.header-menu-list');
const headerMenuItems = document.querySelectorAll('.header-menu-item');
const headerOrderButton = document.querySelector('.header-order-button');
const menuOrderButton = document.querySelector('.menu-order-button');

const scrollToSection = id => {
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: 'smooth',
  });
};

const onBurgerBtnClick = () => {
  mobileMenu.classList.add('active');
  mobileMenu.style.opacity = '1';
  body.style.overflow = 'hidden';
};
const onCloseBtnClick = () => {
  mobileMenu.style.opacity = '0';
  setTimeout(() => mobileMenu.classList.remove('active'), 250);
  body.style.overflow = 'visible';
};
const onMenuItemClick = event => {
  event.preventDefault();
  scrollToSection(event.target.attributes[0].value.replace('#', ''));
  mobileMenu.style.opacity = '0';
  setTimeout(() => mobileMenu.classList.remove('active'), 250);
  body.style.overflow = 'visible';
};
const onHeaderItemClick = event => {
  event.preventDefault();
  scrollToSection(event.target.attributes[0].value.replace('#', ''));
  headerMenuList.style.opacity = '0';
  setTimeout(() => headerMenuList.classList.remove('active'), 250);
};

const onMenuBtnClick = () => {
  if (!headerMenuList.classList.contains('active')) {
    headerMenuList.classList.add('active');
    headerMenuList.style.opacity = '1';
  } else {
    headerMenuList.style.opacity = '0';
    setTimeout(() => headerMenuList.classList.remove('active'), 250);
  }
};
const onMenuOrderBtnClick = event => {
  event.preventDefault();
  scrollToSection(event.target.attributes[0].value.replace('#', ''));
  mobileMenu.style.opacity = '0';
  setTimeout(() => mobileMenu.classList.remove('active'), 500);
  body.style.overflow = 'visible';
};

const onHeaderOrderBtnClick = event => {
  event.preventDefault();
  scrollToSection(event.target.attributes[0].value.replace('#', ''));
};

burgerButton.addEventListener('click', onBurgerBtnClick);

closeButton.addEventListener('click', onCloseBtnClick);

mobileMenuItems.forEach(item => {
  item.addEventListener('click', onMenuItemClick);
});

headerMenuButton.addEventListener('click', onMenuBtnClick);

headerMenuItems.forEach(item => {
  item.addEventListener('click', onHeaderItemClick);
});

menuOrderButton.addEventListener('click', onMenuOrderBtnClick);

headerOrderButton.addEventListener('click', onHeaderOrderBtnClick);
