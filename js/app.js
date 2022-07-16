// **************navigation active function start**************
$(function () {
  var current = location.pathname;
  $('.nav_link').each(function () {
    var $this = $(this);
    if ($this.attr('href') === current.substring(1)) {
      $this.addClass('active');
    }
  });
});
// **************navigation active function end**************

// **************navigation scroll function start**************
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('scrollnav');
  } else {
    $('nav').removeClass('scrollnav');
  }
});

// **************navigation scroll function end**************

// **************mobile navigation start**************
function openNav() {
  document.getElementById('myNav').style.width = '100%';
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  document.body.style.overflow = 'visible';
}
// **************mobile navigation end**************

// **************AOS animation start**************
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 20, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 2, // offset (in px) from the original trigger point
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',
});
// **************AOS animation end**************

// **************On Scroll Counter animation start**************
let nums = document.querySelectorAll('.our-results__textflex-left .number');
let section = document.querySelector('.our-results');
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2500 / goal);
}
// **************On Scroll Counter animation end**************
