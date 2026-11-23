/* ── Navbar scroll shadow ── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 10);
}, { passive: true });


/* ── Mobile hamburger toggle ── */
const hamburger  = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('navbar__hamburger--open');
  mobileMenu.classList.toggle('mobile-menu--open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden',  !isOpen);
});

/* Close on outside click */
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('navbar__hamburger--open');
    mobileMenu.classList.remove('mobile-menu--open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden',  true);
  }
});

/* Close on resize back to desktop */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('navbar__hamburger--open');
    mobileMenu.classList.remove('mobile-menu--open');
  }
}, { passive: true });


/* ── Products carousel ── */
new Swiper('.products__swiper', {
  slidesPerView:  1.15,
  spaceBetween:   20,
  centeredSlides: false,
  grabCursor:     true,
  pagination: {
    el:        '.products__pagination',
    clickable: true,
  },
  breakpoints: {
    560: {
      slidesPerView: 2.1,
      spaceBetween:  20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween:  24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween:  24,
    },
  },
});

/* ── FAQ accordion ── */
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
  item.querySelector('.faq__trigger').addEventListener('click', () => {
    const isOpen = item.classList.contains('faq__item--open');

    // Close all
    faqItems.forEach(i => {
      i.classList.remove('faq__item--open');
      i.querySelector('.faq__trigger').setAttribute('aria-expanded', 'false');
    });

    // Open clicked (unless it was already open)
    if (!isOpen) {
      item.classList.add('faq__item--open');
      item.querySelector('.faq__trigger').setAttribute('aria-expanded', 'true');
    }
  });
});

/* ── Blog carousel ── */
new Swiper('.blog__swiper', {
  slidesPerView:  1.1,
  spaceBetween:   20,
  grabCursor:     true,
  pagination: {
    el:        '.blog__pagination',
    clickable: true,
  },
  breakpoints: {
    560:  { slidesPerView: 2,  spaceBetween: 20 },
    1024: { slidesPerView: 3,  spaceBetween: 32 },
  },
});