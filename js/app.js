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
