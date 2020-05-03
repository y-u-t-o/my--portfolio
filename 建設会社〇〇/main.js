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
      $('#second, #third').addClass('is-over');
    });
  }

  $('.header-content a').on('click', function() {
    $('.header-content').fadeToggle('fast');
    $('.header-top_title').toggleClass('show');
    $('.line1, .line2, .line3').toggleClass('open');
  });

  $(window).on('scroll', function() {
    $('.service-box').each(function(index,el) {
      if ( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 2 ))
        $(el).addClass('is-over');
    });
    $('.project-box').each(function(index,el) {
      if ( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 2 ))
        $(el).addClass('is-over');
    });
    $('.btn').each(function(index,el) {
      if ( $(window).scrollTop() > ( $(el).offset().top - $(window).height() * .8 ))
        $(el).addClass('is-over');
    });
  });
});
