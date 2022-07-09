// **************navigation active function start**************
$(function () {
  var current = location.pathname;
  $('.navbar-nav .nav-link').each(function () {
    var $this = $(this);
    if ($this.attr('href') === current.substring(1)) {
      $this.addClass('active');
    }
  });
  $('.catalog-flex__left-sub a').each(function () {
    var $this = $(this);
    console.log(
      $this.attr('href') + '?catalog=' + 'catalog1' ===
        current + '?catalog=' + 'catalog1'
    );
    // console.log(current.substring(1) + '?catalog=' + 'catalog1');
    // console.log($this.attr('href') === current + '?catalog=' + 'catalog1');
    if (
      $this.attr('href') + '?catalog=' + 'catalog1' ===
      current.substring(1) + '?catalog=' + 'catalog1'
    ) {
      console.log(true);
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
