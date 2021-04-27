$(document).on('ready', function () {
  $(window).on('scroll', function (e) {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      $('#header').addClass('active');
    } else {
      $('#header').removeClass('active');
    }
  })
  $('.datepicker').datepicker();
})