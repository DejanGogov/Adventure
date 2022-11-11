'use strict';

// -------------------------NAV MENU FOR PHONE----------------

const navMenu = function () {
  // Navigation Menu
  const navBtnOpen = document.querySelector('.nav-btn');
  const navBtnClose = document.querySelector('.nav-close');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.overlay');

  // show nav
  const openNav = function () {
    nav.classList.add('show-nav');
    overlay.classList.remove('hidden');
  };

  const closeNav = () => {
    nav.classList.remove('show-nav');
    overlay.classList.add('hidden');
  };

  navBtnOpen.addEventListener('click', openNav);
  navBtnClose.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);
};
navMenu();

// -------------------------SLIDER--------------------------
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Moving the slider
  const moveSlider = function (slide) {
    slides.forEach(
      (el, i) => (el.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Slide to Right
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else curSlide++;

    moveSlider(curSlide);
  };

  // Slide to left
  const preSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;

    moveSlider(curSlide);
  };

  moveSlider(0);

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', preSlide);
};
slider();

// -------------------------UpdateBtn more--------------------------
const updateSection = function () {
  const updateBtn = document.querySelector('.update--btn');
  const updateMore = document.querySelector('.update--more');

  updateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    updateMore.classList.toggle('hidden-1');
  });
};
updateSection();

// ---------------Sticky NavBar for Desctop and Phone----------------

const navBarSticky = function () {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const navBtn = document.querySelector('.nav-btn');

  const navLink = document.querySelectorAll('.nav__link');

  const stickyNav = function (enteier) {
    const [entry] = enteier;

    if (!entry.isIntersecting) {
      navBtn.classList.add('sticky');
      navBtn.classList.add('nav-btn1');

      nav.classList.add('sticky');

      navLink.forEach(link => {
        link.classList.add('nav__link--sticky');
      });
    } else {
      navBtn.classList.remove('sticky');
      nav.classList.remove('sticky');

      navBtn.classList.remove('nav-btn1');

      navLink.forEach(link => {
        link.classList.remove('nav__link--sticky');
      });
    }
  };

  const obsOptions = {
    root: null,
    threshold: 0,
  };

  const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
  headerObserver.observe(header);
};
navBarSticky();

// ---------------scroll elements reviel----------------
const scrollReviel = function () {
  const allSection = document.querySelectorAll('.section');

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  };

  const selectionObeserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
  });

  allSection.forEach(function (section) {
    selectionObeserver.observe(section);
    section.classList.add('section--hidden');
  });
};
scrollReviel();

//--------------------scroll Header BTN----------------
const scroll = function () {
  document
    .querySelector('.btn--scroll-to')
    .addEventListener('click', function () {
      document
        .querySelector('#section--1')
        .scrollIntoView({ behavior: 'smooth' });
    });
};
scroll();
