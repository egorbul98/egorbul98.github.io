var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var listPlayers = [];
var readyPlayer = 0;
// --------------------------------ПАРАМЕТРЫ Для изменения--------------------------------

let countPlayers = 4; //Количество видеороликов
let videosId = ['OXuIqaeg0SI', 'G8lVXBN8ZFk', 'G8lVXBN8ZFk',
  '7qBfdcI-d1Q'
]; // Список с ID видеозаписей. Каждый элемент списка (ID) будет присваиваться по порядку видеороликам. Если Количество ID меньше, чем кол-во видеороликов, то цикл ID-шников пойдет заново.
let vars = { //Настройки yooutube плэера (https://developers.google.com/youtube/player_parameters?hl=ru)
  'autoplay': 0,
  'controls': 0,
  'showinfo': 0,
  'rel': 0,
  'iv_load_policy': 3,
  'disablekb': 1,
  'fs': 0,
}
//-----------------------------------------------------------------------
function onYouTubeIframeAPIReady() {
  //Здесь создаем список плееров
  let j = 0;
  for (let i = 0; i < countPlayers; i++) {
    if ((j > i) || (j >= videosId.length - 1)) {
      j = 0;
    }

    let player = new YT.Player('player' + i, {
      playerVars: vars,
      videoId: videosId[j],
      events: {
        'onReady': onPlayerReady
      }
    });
    listPlayers[i] = player;
    j++;
  }
}

function onPlayerReady(event) {
  readyPlayer += 1;
}

$(document).ready(function () {

  let videoSlideClientX;
  let clientTop = $('.catalog-complex__list').offset().top;
  $(window).bind('scroll', scrollInitVideoSlider);
  
  function scrollInitVideoSlider() {
    if($(window).scrollTop()>=clientTop){
      initSlickVideoSlider();
      $(window).unbind('scroll', scrollInitVideoSlider);
    }
  }
  function initSlickVideoSlider() {
    $('.video-slider').slick({
      centerMode: true,
      centerPadding: '15%',
      slidesToShow: 1,
      arrows: false,
      dots: false,
      // variableWidth: true,
      // infinite: false,
      responsive: [{
          breakpoint: 768,
          settings: {
            centerPadding: '12%',
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false
          }
        }
      ]
    });
  }
  //-----Videoslider
  
 

  function videoPlay(autoplay, idSlide) {
    if (autoplay == true) {
      let $slide = $('.video-slider').find('.video-slider__item[data-slick-index="' + idSlide + '"]');
      let $btnImg = $slide.find('.btn-play img');

      let $img = $slide.find('.content.slide__img');
      $img.siblings('.btn-pause').removeClass('btn-pause--none');
      let $video = $img.siblings('.wrapper-player').children('.slide__video');
      $video.addClass('slide__video-active');
      $img.addClass('slide__img-none');
      if (readyPlayer == listPlayers.length) {
        listPlayers[+idSlide].playVideo();
      }
      // listPlayers[+idSlide].playVideo();
      $(this).removeClass('btn-pause--none');
      return;
    }
    $(this).removeClass('btn-pause--none');
    if ($(this).hasClass('btn-play')) {
      let $btnImg = $(this).children('img');
      let $img = $(this).parent();
      $img.siblings('.btn-pause').removeClass('btn-pause--none');
      let $video = $img.siblings('.wrapper-player').children('.slide__video');
      let idVideo = $video.attr('id').replace('player', '');
      if ($btnImg.attr('src') == 'img/btn-play.svg') {
        if (readyPlayer == listPlayers.length) {
          $video.addClass('slide__video-active');
          $img.addClass('slide__img-none');
          listPlayers[+idVideo].playVideo();
          $(this).removeClass('btn-pause--none');
        } else {
          var idTimeout = setInterval(function () {
            if (readyPlayer >= (1 + parseInt(idVideo))) {
              $video.addClass('slide__video-active');
              $img.addClass('slide__img-none');
              listPlayers[+idVideo].playVideo();
              clearInterval(idTimeout);
              $btnImg.attr('src', 'img/btn-pause.svg');
              $($btnImg).addClass('pause');
            }
          }, 1500);
          $(this).removeClass('btn-pause--none');
        }
      } else {
        listPlayers[+idVideo].pauseVideo();
        $btnImg.attr('src', 'img/btn-play.svg');
        $btnImg.removeClass('pause');
      }
    } else {

      let $video = $(this).siblings('.wrapper-player').children('.slide__video');
      let $imgVideo = $video.parent().siblings('.slide__img');
      let idVideo = $video.attr('id').replace('player', '');
      let $btnImg = $imgVideo.children('.btn-play').children('img');
      listPlayers[+idVideo].pauseVideo();
      $(this).addClass('btn-pause--none');


      $video.removeClass('slide__video-active');
      $imgVideo.removeClass('slide__img-none');
      $btnImg.attr('src', 'img/btn-play.svg');
      $btnImg.removeClass('pause');

    }
  }
  $(document).on('click', '.btn-play, .btn-pause', videoPlay);

  $('.video-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide != nextSlide) {
      $prevSlide = $('.video-slider').find('.video-slider__item[data-slick-index="' + currentSlide + '"]');
      let $video = $($prevSlide).children('.wrapper-player').children('.slide__video');
      let idVideo = $video.attr('id').replace('player', '');
      $video.removeClass('slide__video-active');
      let $imgVideo = $video.parent().siblings('.slide__img');

      $imgVideo.removeClass('slide__img-none');
      let $btnImg = $imgVideo.children('.btn-play').children('img');

      if (readyPlayer == listPlayers.length || readyPlayer >= (1 + parseInt(idVideo))) {
        listPlayers[idVideo].pauseVideo();
        $btnImg.attr('src', 'img/btn-play.svg');
        $btnImg.removeClass('pause');
      }

    }
  });

  $('.video-slider__item').on('mouseup', function (e) {
    if (e.clientX == videoSlideClientX) { //Произошел именно клик
      let curSlideIndex = $('.video-slider').slick('slickCurrentSlide');
      let nextSlideIndex = $(this).attr('data-slick-index');
      if (nextSlideIndex > curSlideIndex) {
        $('.video-slider').slick('slickNext');
        videoPlay(true, $('.video-slider').slick('slickCurrentSlide'));
      } else if (nextSlideIndex < curSlideIndex) {
        $('.video-slider').slick('slickPrev');
        videoPlay(true, $('.video-slider').slick('slickCurrentSlide'));
      }

    }

  });
  $('.video-slider__item').on('mousedown', function (e) {
    videoSlideClientX = e.clientX;
  });
  
});
