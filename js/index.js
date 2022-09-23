// Refs
const refs = {
  footerLinksEl: document.querySelectorAll('.footer-info__item'),
  footerSvgChevronsEl: document.querySelectorAll('.icon-chevron-right'),
  footerMenuEl: document.querySelectorAll('.footer-info__link'),
  searchBtnEl: document.querySelector('[data-search-button]'),
  searchMenuEl: document.querySelector('[data-search-form]'),
  headerEl: document.querySelector('.header'),
  menuBtnEl: document.querySelector('[data-menu-button]'),
  closeMenuBtnEl: document.querySelector('[data-menu-close-btn]'),
  menuContainerEl: document.querySelector('[data-menu-container]'),
  containerMenuEl: document.querySelector('[data-container-btn]'),
  womenSectionEl: document.querySelector('[data-women-section]'),
  containerListEl: document.querySelector('[data-container-list]'),
  womenBtnEl: document.querySelector('[data-women-btn]'),
  clothingSectionEl: document.querySelector('[data-clothing-section]'),
};
const {
  footerLinksEl,
  footerSvgChevronsEl,
  footerMenuEl,
  searchBtnEl,
  searchMenuEl,
  headerEl,
  menuBtnEl,
  closeMenuBtnEl,
  menuContainerEl,
  containerMenuEl,
  womenSectionEl,
  containerListEl,
  womenBtnEl,
  clothingSectionEl,
} = refs;

// Chevron animation
footerLinksEl[0].addEventListener('click', () => {
  footerSvgChevronsEl[0].classList.toggle('rotate');
  footerMenuEl[0].classList.toggle('show');
  footerMenuEl[1].classList.toggle('show');
  footerMenuEl[2].classList.toggle('show');
});
footerLinksEl[1].addEventListener('click', () => {
  footerSvgChevronsEl[1].classList.toggle('rotate');
  footerMenuEl[3].classList.toggle('show');
  footerMenuEl[4].classList.toggle('show');
  footerMenuEl[5].classList.toggle('show');
});
footerLinksEl[2].addEventListener('click', () => {
  footerSvgChevronsEl[2].classList.toggle('rotate');
  footerMenuEl[6].classList.toggle('show');
  footerMenuEl[7].classList.toggle('show');
  footerMenuEl[8].classList.toggle('show');
});
footerLinksEl[3].addEventListener('click', () => {
  footerSvgChevronsEl[3].classList.toggle('rotate');
  footerMenuEl[9].classList.toggle('show');
  footerMenuEl[10].classList.toggle('show');
});

// Search mobile menu open
searchBtnEl.addEventListener('click', () => {
  searchBtnEl.classList.toggle('is-open');
  searchMenuEl.classList.toggle('is-open');
  headerEl.classList.toggle('active');
});

// Open/Close mobile menu
menuBtnEl.addEventListener('click', () => {
  menuBtnEl.classList.add('is-open');
  menuContainerEl.classList.add('is-open');
  headerEl.classList.add('active');
});

closeMenuBtnEl.addEventListener('click', () => {
  menuBtnEl.classList.remove('is-open');
  menuContainerEl.classList.remove('is-open');
  headerEl.classList.remove('active');
});

// Sub-menu open
containerMenuEl.addEventListener('click', () => {
  containerListEl.classList.toggle('is-hidden');
  womenSectionEl.classList.toggle('unhidden');
});

// Women clothing section open
womenBtnEl.addEventListener('click', () => {
  womenSectionEl.classList.toggle('unhidden');
  clothingSectionEl.classList.toggle('unhidden');
});
