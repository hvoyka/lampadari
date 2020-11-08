$(function () {
  //MAIN SLIDER
  $('.main__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    appendDots: $('.main__slider-dots'),
  });

  //APERTI

  $("#aperti__btn").on('click', function () {
    $("#aperti__wrapper").slideToggle();
    $("#aperti__btn").toggleClass('aperti__btn--open');
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