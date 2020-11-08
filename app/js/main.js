$(function () {
  //MAIN SLIDER
  $('.main__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    appendDots:$('.main__slider-dots'),
  });

  //MODAL
  $("#open-modal-btn").on('click', function () {
    $("#modal").fadeIn();
    $('body').addClass('no-scroll');
  });
  $("#modal__close-btn, #modal__bg").on('click', function () {
    $("#modal").fadeOut();
    $('body').removeClass('no-scroll');
  });
});