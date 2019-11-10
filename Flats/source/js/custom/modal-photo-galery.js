$('body').on('click', function (e) {

  // if (!$(e.target).parents('.galery__item-img').length && !$(e.target).hasClass('progress__btn') && !$(e.target).closest('.progress__gallery-list').length && !$(e.target).hasClass('show__btn-slider')) {
  if (!$(e.target).parents('.galery__item-img').length && !$(e.target).closest('.progress__gallery-list').length && !$(e.target).hasClass('show__btn-slider')&&!$(e.target).closest('.expectation__photo-box').length) {
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
    galeryDestroy();
  }
});

function galeryDestroy() {
  if ($('.galery__slider').hasClass('slick-initialized')) {
    setTimeout(unslick, 250);

    function unslick() {
      $('.galery__slider').slick('unslick');
    }
  }
}

function initSlidersModalPhoto(slider, begin) {
  // $(slider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) { //Счетчик на слайдах
  //   $status = $(slick.$slider[0]).siblings('.catalog-complex__slider-counter');
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $status.text(i + ' / ' + slick.slideCount);
  // });
  if (slider.hasClass('slick-initialized')) {
    $(slider).slick('unslick');
  }
  if (begin == undefined) {
    begin = 0;
  }

  $(slider).slick({
    arrows: false,
    initialSlide: parseInt(begin)
  });
  $('.galery__item-img img').off('click');
  $('.galery__item-img img').on('click', function () {
    $(slider).slick('slickNext');
  });

  $('.galery__item-img .close').off('click');
  $('.galery__item-img .close').on('click', function () {
    galeryDestroy();
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
  });
}