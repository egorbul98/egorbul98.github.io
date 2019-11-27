;
(function () {
  $(document).ready(function () {
    $('.btn-open-nav').click(function (e) { //Открытие/Закрытие меню
      $('.catalog-nav').toggleClass('catalog-nav--active');
      $('.header-catalog').toggleClass('header-catalog--nav-active');
    });
    $('.list-type__btn-tile').click(function (e) { //Отображать плиткой
      $('.catalog-complex__list').removeClass('catalog-complex__list--display-list');
      reInitSlickFlats();
    });

    $('.list-type__btn-list').click(function (e) { //Отображать списком
      $('.catalog-complex__list').addClass('catalog-complex__list--display-list');
      reInitSlickFlats();
    });

    $('.list-character__btn').click(function (e) { //Кнопки отображения по характеристикам
      $(this).siblings().removeClass('list-character__btn--active');
      $(this).addClass('list-character__btn--active');
      reInitSlickFlats();
    });
    $('.filter__btn-reset, .map-filter__btn-reset').click(function (e) { //Кнопка сброса 
      $('.checkboxes').removeClass('checkboxes--active');
    });


    $('.list-type__btn').click(function (e) { //Кнопки отображения по виду
      if (!$(this).hasClass('list-type__btn-map')) {
        $(this).siblings().removeClass('list-type__btn--active');
        $(this).addClass('list-type__btn--active');
        reInitSlickFlats();
      }

    });


    $('.catalog-nav__item ').click(function (e) { //header buttons
      if (!$(this).hasClass('catalog-nav__item-menu')) {
        $(this).siblings().removeClass('catalog-nav__item--active');
        $(this).addClass('catalog-nav__item--active');

      }

    });


    $('body').on('click', function (e) {
      let $nav = $('.header-catalog__nav');
      if (!$(e.target).hasClass('header-catalog__nav') && !$(e.target).hasClass('btn-open-nav') && !$(e.target).hasClass('img-open-nav') && !$(e.target).hasClass('catalog-nav__item') && !$(e.target).hasClass('link') && !$(e.target).hasClass('catalog-nav__drop')) {
        $($nav).removeClass('catalog-nav--active');
        $('.header-catalog').removeClass('header-catalog--nav-active');
      }
    });

    $(window).on('resize', function () {
      if ($(this).width() <= 768) {
        $('.catalog-complex__list').removeClass('catalog-complex__list--display-list');
        $('.list-type__btn-tile').addClass('list-type__btn--active');
        $('.list-type__btn-list').removeClass('list-type__btn--active');
        reInitSlickFlats();
      }
    });

    function reInitSlickFlats() {
      let $slider = $('.catalog-complex__slider');
      $($slider).slick('unslick');
      $slider.slick({
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<button id="prev" type="button" class="catalog-complex__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
        nextArrow: '<button id="next" type="button" class="catalog-complex__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',

      });
    }




    //-----------------калькулятор модальное окно--------------------
    let valueMortgageWork = 2;
    let valueMortgageIncome = 50000;
    let valueMortgagePayment = 500000;
    let $mortgageCapital = $('#mortgage-capital');
    let $mortgageWork = $('#mortgage-work');
    let $mortgageIncome = $('#mortgage-income');
    let $mortgagePayment = $('#mortgage-payment');
    let $result = $('.mortgage__expectancy-value-wrap');
    checkExpectancy();
    $('#mortgage__income-range').on('input', function () {
      valueMortgageIncome = parseInt($(this).val());
      let str;
      if (valueMortgageIncome >= 100000) {
        str = 'больше ' + 100000;
      } else {
        str = valueMortgageIncome;
      }
      $mortgageIncome.val(str);
      checkExpectancy();
    });
    $('#mortgage__work-range').on('input', function () {
      valueMortgageWork = parseInt($(this).val());
      let str;
      let $year = $('.mortgage-work__year');
      if (valueMortgageWork >= 15) {
        str = 'больше 15';
      } else {
        str = valueMortgageWork;
      }
      $mortgageWork.val(str);
      if (valueMortgageWork == 1) {
        $year.text('год')
      } else if (valueMortgageWork >= 2 & valueMortgageWork <= 4) {
        $year.text('года')
      } else {
        $year.text('лет')
      }
      checkExpectancy();
    });

    $('.modal__header-btn-close').on('click', function () {
      $(this).closest('.modal').addClass('modal--closed');
  
    });
  

    $('#btnOpenMortgage').on('click', function () {
      $('.mortgage.mortgage__modal').removeClass('modal--closed');
    });

    $('.mortgage .modal__close-btn').on('click', function () {
      $('.mortgage.mortgage__modal').addClass('modal--closed ');
    });
    // $('.mortgage .modal__header-btn-close').on('click', function () {
    //   $('.mortgage.mortgage__modal').addClass('modal--closed ');
    // });

    $($mortgagePayment).on('input', function () {
      valueMortgagePayment = $(this).val();
      checkExpectancy();
    });
    $($mortgageIncome).on('input', function () {
      valuemortgageIncome = $(this).val();
      $mortgageIncome.val(valuemortgageIncome);
      checkExpectancy();
    });
    $($mortgageWork).on('input', function () {
      let $year = $('.mortgage-work__year');
      let $mortgageWork__value = $('.mortgageWork__value');
      valuemortgageWork = $(this).val();
      if (valuemortgageWork == 1) {
        $year.text('год')
      } else if (valuemortgageWork >= 2 & valuemortgageWork <= 4) {
        $year.text('года')
      } else {
        $year.text('лет')
      }
      $mortgageWork__value.text(valuemortgageWork)
      if (valuemortgageWork >= 15)
        $mortgageWork__value.text('более ' + valuemortgageWork + " ");
    });
    $($mortgageCapital).on('change', function () {

      valuemortgageIncome = $(this).val();
      if (this.checked) {} else {}
      checkExpectancy();
    });

    function checkExpectancy() {
      valueMortgageWork = parseInt(valueMortgageWork);
      valueMortgageIncome = parseInt(valueMortgageIncome);
      valueMortgagePayment = parseInt(valueMortgagePayment);
      let result = 65;
      if (valueMortgageWork > 5) {
        result++;
      }
      if (valueMortgageWork > 10) {
        result++;
      }
      if (valueMortgageWork == 15) {
        result++;
      }
      result += valueMortgagePayment * 0.00001;
      result += (valueMortgageIncome - 35000) / 2950;
      result = Math.round(result);
      if (result > 93) {
        result = 93;
      }
      $result.text(result);
    }
    //-----------------калькулятор модальное окно--------------------
    //-----калькулятор
    
    var contributionVal = 0,
      rateVal = 0,
      timeVal = 0;
    $("#contribution, #rate, #time").keypress(function (event) {
      event = event || window.event;

      if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
        return false;
    });
    $("#contribution").on('input', function () {
      contributionVal = $(this).val();
      updateResultCalc();
    });
    $("#rate").on('input', function () {
      rateVal = $(this).val();
      updateResultCalc();
    });
    $("#time").on('input', function () {
      timeVal = $(this).val();
      updateResultCalc();
    });

    function toNumber(x) { //Делает пробелы, между числами
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(",");
    }

    function updateResultCalc() {
      contributionVal = parseInt(contributionVal);
      rateVal = parseInt(rateVal);
      timeVal = parseInt(timeVal);
      if (contributionVal != 0 && rateVal != 0 && timeVal != 0 && contributionVal != '' && rateVal != '' && timeVal != '' && contributionVal >= 10000) {
        let result = ((contributionVal * rateVal / 100) / 12) * timeVal;
        result = +result.toFixed(2);
        result = toNumber(result);
        if (result != NaN && result != undefined && result != 'NaN') {

          $('.calculator__result').text(result + ' руб.');
        } else {
          $('.calculator__result').text(0 + ' руб.');
        }

      }


    }
    //-----калькулятор



  });
})();