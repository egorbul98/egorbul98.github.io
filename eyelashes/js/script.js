var images = $('img'),
  imagesTotalCount = images.length,
  imagesLoadedCount = 0,
  preloaderPerc = $('.preloader .percent');
    
    for (let i = 0; i < imagesTotalCount; i++) {
      let imageClone = new Image();
      imageClone.src = $(images[i]).attr('src');
      console.log(imageClone.src);
      imageClone.onerror = imageLoaded;
      imageClone.onload = imageLoaded;
    }
    function imageLoaded() {
      imagesLoadedCount++;
      let perc = (100 / imagesTotalCount) * imagesLoadedCount<<0;
      
      preloaderPerc.html(perc);
      if (imagesLoadedCount >= imagesTotalCount) {
        setTimeout(loaderDone, 500);
        console.log('done');
      }
    }

    function loaderDone() {
      var $preloader = $('.preloader');
      $preloader.delay(500).fadeOut('slow');
      $('html').addClass('page-loaded');
    };


;
(function () {
  $(document).ready(function () {
    $('.nav__item').on('click', function () {
      let id = $(this).attr('id');
      $(`.content-box[data-content="${id}"]`).addClass('content-box--active');
    });

    $('.close').on('click', function () {
      $(this).closest('.content-box').removeClass('content-box--active');
    });


    $('.nav-btn-toggle').on('click', function () {
      $('.nav').slideToggle();
    });


    $(window).on('resize', function () {
      if ($(window).width() > 950) {
        setTimeout(function () {
          $('.nav').css('display', 'flex');
        }, 300);
      }
    });

    $('.galery-list').slickLightbox({
      caption: 'caption',
      useHistoryApi: 'true',
      lazy: true,
      captionPosition: 'dynamic',

    });

    // $(window).on('load', function () {
    //   $('body').addClass('loaded_hiding');
    //   window.setTimeout(function () {
    //     $('body').addClass('loaded');
    //     $('body').removeClass('loaded_hiding');
    //   }, 500);
    // }
    
    // $(window).on('load', function () {

    // });

    //  ------------------------------------------------------------------

    // (function () {
    //   $(document).ready(function () {
    //     //Модальное окно modal-image
    //     $('.modal-image__item').on('click', modalPhoto);

    //     // $('.modal-image__close').on('click', function () {
    //     //   $('.modal-image').removeClass('modal-image--active');
    //     // });



    //     //--------------------------expectation---------------------------
    //     let arrayPhotos = []; //Массив фотографий

    //     arrayPhotos[0] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    //     arrayPhotos[1] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    //     arrayPhotos[2] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    //     arrayPhotos[3] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};

    //     let $parent = $('.expectation__photo-box');

    //     updateData(arrayPhotos, $parent);
    //     $('.expectation__image').off('click');
    //     $('.expectation__image').on('click', function () {
    //       let begin = $(this).attr('data-index');
    //       updateGalery(arrayPhotos, $('.galery__slider'), begin);
    //       $('.modal-photo-galery').addClass('modal-photo-galery--active');
    //     });
    //     function updateData(listObjects, parent, begin) {
    //       let strHTML = '';
    //       if ($(parent).hasClass('galery__slider')) {
    //         $('.galery__slider').html('');
    //         for (let i = 0; i < listObjects.length; i++) {
    //           strHTML += '<div class="galery__item"><div class="galery__item-img"><span class="close">&#10006;</span><img src="' + listObjects[i].photo + '" alt="image"></div></div>';
    //         }
    //         $('.galery__slider').html(strHTML);

    //       } else {
    //         $('.expectation__photo-box').html('');
    //         for (let i = 0; i < listObjects.length ; i++) {
    //           strHTML += '<div class="expectation__item modal-image__item"><picture><source type="image/webp" srcset="img/devSlider-img1.webp"><img src="' + listObjects[i].photo + '" class="expectation__image" data-big-src="' + listObjects[i].photoLarge + '" data-index="' + i + ' alt="image" width="320" height="220"></picture><div class="expectation__description-box"><span class="expectation__photo-text">Корпус ' + listObjects[i].corpus + '</span><span class="expectation__photo-text expectation__photo-text--date">' + listObjects[i].date + '</span></div></div>';
    //         }

    //         $(parent).append(strHTML);
    //       }

    //       if ($(parent).hasClass('galery__slider')) {
    //         let $slider = $('.galery__slider');
    //         initSlidersModalPhoto($slider, begin);//функция из modal-photo-galery.js
    //         // setTimeout(initSlidersModalPhoto, 10, $slider);
    //       }
    //     };
    //     if ($(window).width() < 1360) {
    //       $('.expectation .expectation__image').off('click');
    //     } else {
    //       $('.expectation__image').off('click');
    //       $('.expectation__image').on('click', modalPhoto);
    //     }

    //     $(window).on('resize', function () {
    //       if ($(window).width() < 1360) {
    //         $('.expectation .expectation__image').off('click');
    //         $('.expectation .expectation__image').removeClass('modal-image__item');
    //       } else {
    //         if (!$('.expectation__image').hasClass('modal-image__item')) {
    //           $('.expectation__image').addClass('modal-image__item');
    //           $('.expectation__image').off('click');
    //           $('.expectation__image').on('click', modalPhoto);
    //         }
    //       }
    //     });


    //     function modalPhoto() {
    //       let begin = $(this).attr('data-index');
    //       updateData(arrayPhotos, $('.galery__slider'), begin);
    //       $('.modal-photo-galery').addClass('modal-photo-galery--active');
    //     }

    //     $('.expectation__show-btn').on('click', function () {
    //       updateData(arrayPhotos, $('.galery__slider'));
    //       $('.modal-photo-galery').addClass('modal-photo-galery--active');
    //     });

    //   });

    // })();
  });
})();