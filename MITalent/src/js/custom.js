function closeHeaderSearch() {
  $('.header-form__field-wrap').removeClass('header-form__field-wrap--active');
  $('.header-form__search-icon').removeClass('header-form__search-icon--color-dark');
}

function closeNavigationMenu() {
  $('.navigation-menu').removeClass('navigation-menu--active');
  $('body').removeClass('body--fixed');
}

$(document).ready(function () {

  //Выдвижное меню слева. Кнопки управления
  $('.navigation-btn-open').on('click', function () {
    $('.navigation-menu').toggleClass('navigation-menu--active');
    $('body').toggleClass('body--fixed');
  });

  $('.navigation-btn-close').on('click', function () {
    closeNavigationMenu();
  });

  $('body').on('click', function (e) {
    if ($('.navigation').has(e.target).length === 0) { //Если не содержит этот target
      closeNavigationMenu();
    }
  });

  //Выдвижной поиск в header'e
  $('.header-form__search-icon').on('click', function () {
    var headerSearchWrap = $('.header-form__field-wrap');
    var headerInputSearch = $('.header-form__search');
    if ($(headerSearchWrap).hasClass('header-form__field-wrap--active')) {
      closeHeaderSearch();
    } else {
      $('.header-form__field-wrap').addClass('header-form__field-wrap--active');
      $(this).addClass('header-form__search-icon--color-dark');
    }
  });

  $('body').on('click', function (e) {
    if ($('.header-form').has(e.target).length === 0) { //Если не содержит этот target
      closeHeaderSearch();
    }
  });

 

  $(document).ready(function () {
    
    //Слайдер хедера
    $('.header-slider').slick({
      vertical: true,
      arrows: false,
      verticalSwiping: true,
      asNavFor: '.header-slider__nav',
      responsive: [{
        breakpoint: 991,
        settings: {
          verticalSwiping: false,
          vertical: false,
        }
      }]
    });

    $('.header-slider__nav').slick({
      asNavFor: '.header-slider',
      // rtl: true,
      appendArrows: '.header-slider__buttons',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      // rtl: true,
      fade: true,
      dots: true,

    });

    // $('.footer-instagram__gallery').lightzoom();
    $('.lightzoom').lightzoom({
      speed: 400, // скорость появления
      imgPadding: 10, // значение отступа у изображения
      overlayOpacity: '0.5', // прозрачность фона (от 0 до 1)
      viewTitle: false, // true, если надо показывать подпись к изобажению
      isOverlayClickClosing: true, // true, если надо закрывать окно при клике по затемненной области
      isWindowClickClosing: true, // true, если надо закрывать окно при клике по любой области
      isEscClosing: true // true, если надо закрывать окно при нажатии на кнопку Esc
    });


    //player music

    
    var musicTitle = $('.item-music_title');
    var arrayMusic = ['Stive Morgan 1.mp3', 'Stive Morgan 2.mp3', 'Stive Morgan 3.mp3'];
    var currentMusic = 0;

    var musicPlayer = new Audio();
    

    function playMusic() {
      musicPlayer.src = 'music/'+arrayMusic[currentMusic];
      $(musicTitle).text(arrayMusic[currentMusic]);
      musicPlayer.play();
    }
    function playOrPause() {
      if (musicPlayer.paused) {
        $(this).children('img').attr('src', 'image/pic/music-pause.svg').css('margin-left', 0);
        playMusic(); 
        
      } else {
        $(this).children('img').attr('src', 'image/pic/music-play.svg').css('margin-left', '8px');
        musicPlayer.pause();
      }
    }
    function prevMusic() {
      currentMusic--;
      if (currentMusic < 0) {
        currentMusic = arrayMusic.length-1;
      }
      playMusic();
      $(".item-music__play").children('img').attr('src', 'image/pic/music-pause.svg').css('margin-left', 0);
      console.log('prev');
    }
    
    function nextMusic() {
      currentMusic++;
      if (currentMusic > arrayMusic.length-1) {
        currentMusic = 0;
      }
      playMusic();
      $(".item-music__play").children('img').attr('src', 'image/pic/music-pause.svg').css('margin-left', 0);
      console.log('next');
    }

    $('.item-music__play').click(playOrPause);
    $('.item-music__prev').click(prevMusic);
    $('.item-music__next').click(nextMusic);

    $(musicPlayer).on('timeupdate', function () {
      var position = (this.currentTime / this.duration)*100;
      $('.music-bar__fill').css('width', position + '%');
      $('.music-bar__fill-icon').css('left', (position-1) + '%');
    });
    // musicPlayer.play();
  });
});

// function closeHeaderSearch(){$(".header-form__field-wrap").removeClass("header-form__field-wrap--active"),$(".header-form__search-icon").removeClass("header-form__search-icon--color-dark")}function closeNavigationMenu(){$(".navigation-menu").removeClass("navigation-menu--active"),$("body").removeClass("body--fixed")}$(document).ready(function(){$(".navigation-btn-open").on("click",function(){$(".navigation-menu").toggleClass("navigation-menu--active"),$("body").toggleClass("body--fixed")}),$(".navigation-btn-close").on("click",function(){closeNavigationMenu()}),$("body").on("click",function(e){0===$(".navigation").has(e.target).length&&closeNavigationMenu()}),$(".header-form__search-icon").on("click",function(){var e=$(".header-form__field-wrap");$(".header-form__search");$(e).hasClass("header-form__field-wrap--active")?closeHeaderSearch():($(".header-form__field-wrap").addClass("header-form__field-wrap--active"),$(this).addClass("header-form__search-icon--color-dark"))}),$("body").on("click",function(e){0===$(".header-form").has(e.target).length&&closeHeaderSearch()}),$(document).ready(function(){function e(){o.src="music/"+t[s],$(n).text(t[s]),o.play()}function i(){o.paused?($(this).children("img").attr("src","image/pic/music-pause.svg").css("margin-left",0),e()):($(this).children("img").attr("src","image/pic/music-play.svg").css("margin-left","8px"),o.pause())}function a(){s--,0>s&&(s=t.length-1),e(),$(".item-music__play").children("img").attr("src","image/pic/music-pause.svg").css("margin-left",0),console.log("prev")}function r(){s++,s>t.length-1&&(s=0),e(),$(".item-music__play").children("img").attr("src","image/pic/music-pause.svg").css("margin-left",0),console.log("next")}$(".header-slider").slick({vertical:!0,arrows:!1,verticalSwiping:!0,asNavFor:".header-slider__nav",responsive:[{breakpoint:991,settings:{verticalSwiping:!1,vertical:!1}}]}),$(".header-slider__nav").slick({asNavFor:".header-slider",appendArrows:".header-slider__buttons",prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',fade:!0,dots:!0}),$(".lightzoom").lightzoom({speed:400,imgPadding:10,overlayOpacity:"0.5",viewTitle:!1,isOverlayClickClosing:!0,isWindowClickClosing:!0,isEscClosing:!0});var n=$(".item-music_title"),t=["Stive Morgan 1.mp3","Stive Morgan 2.mp3","Stive Morgan 3.mp3"],s=0,o=new Audio;$(".item-music__play").click(i),$(".item-music__prev").click(a),$(".item-music__next").click(r),$(o).on("timeupdate",function(){var e=this.currentTime/this.duration*100;$(".music-bar__fill").css("width",e+"%"),$(".music-bar__fill-icon").css("left",e-1+"%")})})});