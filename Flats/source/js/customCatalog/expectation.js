;
(function () {
  $(document).ready(function () {

    $('.expectation__show-btn').on('click', function () {
      updateData(arrayPhotos, $('.galery__slider'));
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    });

    $('.excursion__modal').on('click', function (e) { //Закрытие модального окна по клику на фон
      if ($(this).has(e.target).length === 0 && !$(e.target).hasClass('expectation__btn') && !$(e.target).hasClass('ui-icon-circle-triangle-e') && !$(e.target).hasClass('ui-icon-circle-triangle-w') && !$(e.target).hasClass('ui-corner-all')) { //Если не содержит этот target (модальное окно)
        if (!$(this).hasClass('modal--closed')) { //Если открыто окно
          $(this).addClass('modal--closed');
        }
      }
    });

    $('#btnOpenExcursionModal').on('click', function () {
      $('.excursion.excursion__modal').removeClass('modal--closed ');
    });
    $('.excursion .modal-close-btn').on('click', function () {
      $('.excursion.excursion__modal').addClass('modal--closed');
    });

    //Календарь datapicker]
    $('#hasDatepicker').datepicker({
      inline: true,
      firstDay: 1,
      showOtherMonths: true,
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
      ],
      onSelect: function (dateText, inst) {
        let day = $(this).datepicker('getDate').getDate();
        let month = $(this).datepicker('getDate').getMonth();
        $('.date-info .date').text(day + '.' + month);
      }
    });
    //Select time excursion
    $('.excursion__select-time').on('input', function () {
      $('.date-info .time').text($(this).val() + ':00');
    });
  });
})();