// **************navigation active function start**************
$(function () {
  var current = location.pathname;
  $('.navigation-two__flex-right .nav_link').each(function () {
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

// window.onscroll = function () {
//   let t = document.getElementById('textt');
//   if (document.documentElement.scrollTop) {
//     t.classList.add('mystyle');
//   } else {
//     t.classList.remove('mystyle');
//   }
// };
