const burger = document.querySelector('.burger');
const headerTopListMobile = document.querySelector('.header__top-list--mobile');
const headerNav = document.querySelector('.header__nav');
const headerWrapperMobile = document.querySelector('.header__wrapper--mobile');

burger.addEventListener('click', () => {
    const body = document.body;

    headerWrapperMobile.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('stop-scroll');
})