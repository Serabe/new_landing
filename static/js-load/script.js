$(document).ready(function(){
    $('.trust-cases').slick({
    });
});

$('.dropdown')
  .on('mouseenter', function() {
    if (!$(this).hasClass('show')) {
      $('.dropdown-toggle', this).dropdown('toggle');
    }
  })
  .on('mouseleave', function() {
    const that = this;

    setTimeout(function() {
      if ($('.dropdown-menu', that).hasClass('show') && !$(that).is(':hover')) {
        $('.dropdown-toggle', that).dropdown('toggle');
      }
    }, 500);
  });

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".fixed-top");
//         $nav.toggleClass('navbar-scroll', $(this).scrollTop() > $nav.height());
//     });
// });

$(function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.addClass("navbar-scroll");
        } else {
            header.removeClass("navbar-scroll");
        }
    });
});

$(function(){
    $('.dropdown-toggle').click(
      function(){
        if ($(this).next().is(':visible')) {
          location.href = $(this).attr('href');;
        }
       });
    });
