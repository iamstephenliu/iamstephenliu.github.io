/*SMOOTH SCROLLING*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

/* VIDEO ASPECT RATIO*/

$(document).ready(function(){
  var videoWidth = $('.sectionvideo').width();
  var videoHeight = videoWidth * 0.5625;
  $('.sectionvideo').height(videoHeight);

  $('#backgroundimage').height($(window).height())

  if ($(window).width() > 1152) {
    var containerWidth = $('#container').width();
    var bannerWidth = $(window).width() - containerWidth;
    $('#backgroundimage').width(bannerWidth)
  } else {$('#backgroundimage').width($(window).width())}
});

$(window).resize(function(){
  var videoWidth = $('.sectionvideo').width();
  var videoHeight = videoWidth * 0.5625;
  $('.sectionvideo').height(videoHeight);

  $('#backgroundimage').height($(window).height())
  
  if ($(window).width() > 1152) {
    var containerWidth = $('#container').width();
    var bannerWidth = $(window).width() - containerWidth;
    $('#backgroundimage').width(bannerWidth)
  } else {$('#backgroundimage').width($(window).width())}
});
