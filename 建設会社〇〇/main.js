$(function() {
  var w = $(window).width();
  var x = 1024;
  if (w <= x) {
    $(function() {
      $('input[type=checkbox]').on('click', function() {
        $('.header-content').fadeToggle('fast');
        $('.header-top_title').toggleClass('show');
        $('.line1, .line2, .line3').toggleClass('open');
        $('#service, #infomation, #project, #form').toggleClass('hide');
      });
    });
  } else {
    $(function() {
      $('.header-content').show();
    })
  }

  $('.header-content a').on('click', function() {
    $('.header-content').fadeToggle('fast');
    $('.header-top_title').toggleClass('show');
    $('.line1, .line2, .line3').toggleClass('open');
  });
});