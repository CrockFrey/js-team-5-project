const body = document.querySelector('body');
const header = document.querySelector('.header-section');
const burgerButton = document.querySelector('.header-burger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
const headerMenuButton = document.querySelector('.header-menu-button');
const headerMenuList = document.querySelector('.header-menu-list');
const headerMenuItems = document.querySelectorAll('.header-menu-item');
const menuOrderButton = document.querySelector('.menu-order-button');

const onBurgerBtnClick = () => {
  mobileMenu.classList.add('active');
  header.style.zIndex = '0';
  body.style.overflow = 'hidden';
};
const onCloseBtnClick = () => {
  mobileMenu.classList.remove('active');
  header.style.zIndex = '999999';
  body.style.overflow = 'visible';
};
const onMenuItemClick = () => {
  mobileMenu.classList.remove('active');
  header.style.zIndex = '999999';
  body.style.overflow = 'visible';
};
const onHeaderItemClick = () => {
  headerMenuList.classList.remove('active');
  headerMenuList.style.display = 'none';
};
const onMenuBtnClick = () => {
  if (!headerMenuList.classList.contains('active')) {
    headerMenuList.classList.add('active');
    headerMenuList.style.display = 'flex';
  } else {
    headerMenuList.classList.remove('active');
    headerMenuList.style.display = 'none';
  }
};
const onMenuOrderBtnClick = () => {
  mobileMenu.classList.remove('active');
  header.style.zIndex = '999999';
  body.style.overflow = 'visible';
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
