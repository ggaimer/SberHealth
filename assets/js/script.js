const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger.close');
const headerTopListMobile = document.querySelector('.header__top-list--mobile');
const headerNav = document.querySelector('.header__nav');
const headerWrapperMobile = document.querySelector('.header__wrapper--mobile');

burger.addEventListener('click', () => {
    const body = document.body;

    headerWrapperMobile.classList.add('active');
    body.classList.toggle('stop-scroll');
})

burgerClose.addEventListener('click', () => {
    headerWrapperMobile.classList.remove('active');
})