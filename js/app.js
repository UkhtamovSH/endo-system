// **************navigation active function start**************
$(function () {
  var current = location.pathname;
  $('.navbar-nav .nav-link').each(function () {
    var $this = $(this);
    if ($this.attr('href') === current.substring(1)) {
      $this.addClass('active');
    }
  });
});
// **************navigation active function end**************

// window.onscroll = function () {
//   let t = document.getElementById('textt');
//   if (document.documentElement.scrollTop) {
//     t.classList.add('mystyle');
//   } else {
//     t.classList.remove('mystyle');
//   }
// };
