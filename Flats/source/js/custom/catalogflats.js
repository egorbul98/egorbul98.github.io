function toNumber(x) { //Делает пробелы, между числами
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(",");
};
(function () {
  $(document).ready(function () {

    let arrImg = ['img/analog_1.jpg', 'img/img-video-2.jpg'] //массив фоток для одной квартиры (в данном случае этот массив пойдет всем квартирам)
    let flats = []; //Список квартир 
    flats[0] = {
      'id': 0, 'square': 18, 'floor': 3, 'totalFloor': 3, 'type': 'Без отделки', 'cost': '2400000', 'room': 1, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[1] = {'id':1,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[2] = {'id':2,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[3] = {'id':3,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[4] = {'id':4,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[5] = {'id':5,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[6] = {'id':6,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[7] = {'id':7,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[8] = {'id':8,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[9] = {'id':9,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[10] = {'id':10,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[11] = {'id':11,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[12] = {'id':12,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[13] = {'id':13,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[14] = {'id':14,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[15] = {'id':15,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[16] = {'id':16,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[17] = {'id':17,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[18] = {'id':18,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[19] = {'id':19,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[20] = {'id':20,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[21] = {'id':21,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[22] = {'id':22,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[23] = {'id':23,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[24] = {'id':24,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[25] = {'id':25,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[26] = {'id':26,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[27] = {'id':27,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[28] = {'id':28,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[29] = {'id':29,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[30] = {'id':30,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[31] = {'id':31,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[32] = {'id':32,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[33] = {'id':33,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[34] = {'id':34,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[35] = {'id':35,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[36] = {'id':36,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[37] = {'id':37,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[38] = {'id':38,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[39] = {'id':39,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[40] = {'id':40,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[41] = {'id':41,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[42] = {'id':42,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[43] = {'id':43,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[44] = {'id':44,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[45] = {'id':45,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[46] = {'id':46,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[47] = {'id':47,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[48] = {'id':48,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[49] = {'id':49,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[50] = {'id':50,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[51] = {'id':51,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[52] = {'id':52,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[53] = {'id':53,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[54] = {'id':54,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[55] = {'id':55,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[56] = {'id':56,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[57] = {'id':57,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[58] = {'id':58,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[59] = {'id':59,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[60] = {'id':60,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[61] = {'id':61,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[62] = {'id':62,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[63] = {'id':63,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };


    let countRoomOne = getCountFlatsByRoom(flats, 1);
    let countRoomTwo = getCountFlatsByRoom(flats, 2);
    let countRoomThree = getCountFlatsByRoom(flats, 3);
    let countRoomStudio = getCountFlatsByRoom(flats, 4);
    $('.flats__modalBtn[data-flats="1"]').find('.flat-count').text(countRoomOne);
    $('.flats__modalBtn[data-flats="2"]').find('.flat-count').text(countRoomTwo);
    $('.flats__modalBtn[data-flats="3"]').find('.flat-count').text(countRoomThree);
    $('.flats__modalBtn[data-flats="4"]').find('.flat-count').text(countRoomStudio);

    let currentPage = 1;
    let entryOnPage = 10;
    totalPage = Math.ceil(flats.length / entryOnPage);

    let $tableList = $('#catalog-list-table');
    let countRoomFlats, arrayFlats;
    $('.flats__modalBtn').on('click', function (e) {
      e.preventDefault();
      
      currentPage = 1;
      countRoomFlats = $(this).attr('data-flats');
      let $modalWindow = $('.catalog__modal');
      let currentRoomFlats = $modalWindow.attr('data-flats'); //Текущий контент модального окна
      clearListTable();
      if (!$modalWindow.has('modal--closed')) { //Если окно открыто
        $modalWindow.addClass('modal--closed');
      }
      if (countRoomFlats == currentRoomFlats) { //если текущий контент мод. окна соответсвует тому контенту, который появляется при нажатии на текущюю кнопку
        $modalWindow.addClass('modal--closed');
        $modalWindow.attr('data-flats', '0');
        clearListTable();
        return;
      }


      if (countRoomFlats == '1') { //если 1-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '1');
      } else if (countRoomFlats == '2') { //если 2-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '2');
      } else if (countRoomFlats == '3') { //если 3-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '3');
      } else if (countRoomFlats == '4') { //если 4-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '4');
      }
      arrayFlats = getFlatsByRoom(flats, parseInt(countRoomFlats));
      flatsOut(arrayFlats, countRoomFlats, true);
      $('catalog__modal').scrollTop(0);

    });





    function flatsOut(flats, countRoom, pagination) { //Выводит квартиры в модальное окно. Создает одну таблицу
      catalogSliderDestroy(); //Отключить слайдеры
      totalPage = Math.ceil(flats.length / entryOnPage);

      if (countRoom == '4') {
        $('.catalog-title-box').html('<span class="name-flats">Студии</span><span class="count-flats">' + flats.length + ' квартир</span>');
      } else {
        $('.catalog-title-box').html('<span class="name-flats">' + countRoom + '-к квартиры</span><span class="count-flats">' + flats.length + ' квартир</span>');
      }

      let str = '<table class="catalog-table "><thead><th class="icon-flats"></th><th class="square">Площадь, м2</th><th class="floor">Этаж</th><th class="type">Тип отделки</th><th class="cost">Стоимость кв, руб</th><th class="plan">Планировка</th></thead><tbody><tr class="tr-empty"><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td rowspan="0" class="catalog-img-flat"><span class="wrap-heart"><svg class="heart" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg><svg  class="heart-fill hidden" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></span><img src="' + flats[0].imgPlan + '" alt=""><button type="button" class="btnToBook pink__btn" data-id="' + flats[0].id + '">Забронировать</button></td></tr>';
      let j = 0, idActiveItem, imgPathActiveItem;
      for (let i = (currentPage - 1) * entryOnPage; i < flats.length && i < currentPage * entryOnPage; i++) {
        j++;
        if (j == 1) {
          str += '<tr class="tr-catalog-item tr-catalog-item--active" data-id="' + flats[i].id + '" data-img-plan="' + flats[i].imgPlan + '">';
          idActiveItem = flats[i].id;
          imgPathActiveItem = flats[i].imgPlan;
        } else {
          str += '<tr class="tr-catalog-item" data-id="' + flats[i].id + '" data-img-plan="' + flats[i].imgPlan + '">';
        }
        str += '<td class="icon-flats"><img src="img/icon-flats.png" alt=""></td>';
        str += '<td><div>' + flats[i].square + ' м2</div></td>';
        str += '<td><div>' + flats[i].floor + '</div></td>';
        str += '<td><div>' + flats[i].type + '</div></td>';
        str += '<td><div>' + toNumber(flats[i].cost) + '</div></td>';
        str += '</tr>';
        str += '<div class="catalog-item"><div class="catalog-item__num">' + countRoom + '-к квартира № 115</div><div class="catalog__slide-wrap"><div class="catalog__slider">';
        
        for (let j = 0; j < flats[i].images.length; j++) {
          const img = flats[i].images[j];
          str += '<div class="catalog__slider-item"><img src="'+img+'" alt="image"></div>';
        }
        '</div></div><div class="catalog-item__cost">' + toNumber(flats[i].cost) + '</div><div class="catalog-item__inner-flats"><div class="left-block"><span class="catalog-item__square">' + flats[i].square + ' м2</span><span class="catalog-item__floor">' + flats[i].floor + '/' + flats[i].totalFloor + ' этаж</span></div><span class="more">Подробнее</span></div><button type="button" class="catalog-item__btn pink__btn">Записаться на просмотр</button></div>';
      }
      str += '</tbody></table>';
      $tableList.append(str);
      
      updateImage(imgPathActiveItem, idActiveItem);
      if (totalPage > 1) {

      }
      catalogSliderInit(); //Включить слайдеры
      
      if (pagination) {
        
        updatePagination(totalPage); //Обновляем пагинацию
      }
     
      initObr(); //Обновляем обработчики
    }

    function initObr() {
      $('.tr-catalog-item').off('click');
      $('.tr-catalog-item').on('click', function () {
        $(this).addClass('tr-catalog-item--active').siblings('.tr-catalog-item').removeClass('tr-catalog-item--active');
        let img = $(this).attr('data-img-plan'); //берем картинку планировки 
        let id = $(this).attr('data-id'); //берем id
        updateImage(img, id); //Обновляем картинку планировки
      });
      $('.catalog-pagination__item').off('click');
      $('.catalog-pagination__item').on('click', function () {
        $(this).addClass('catalog-pagination__item--active').siblings().removeClass('catalog-pagination__item--active');
        currentPage = parseInt($(this).text());
        clearListTable();
        flatsOut(arrayFlats, countRoomFlats);
      });
      $('catalog__modal').scrollTop(0);

      $('.btn-show-more').off('click');
      $('.btn-show-more').on('click', function () {
        $(this).addClass('hidden');
        $('.catalog-pagination__list').removeClass('hidden');
        currentPage = 2;
        clearListTable();
        flatsOut(arrayFlats, countRoomFlats);
      });

      $('.btnToBook').off('click');
      $('.btnToBook').on('click', function () {
        let id = $(this).attr('data-id');
        $('.modal-to-book').addClass('modal-to-book--active');
        let str = '';
        if (flats[id].room == 1) {
          str = 'Забронировать 1-комнатную квартиру';
        }
        if (flats[id].room == 2) {
          str = 'Забронировать 2-комнатную квартиру';
        }
        if (flats[id].room == 3) {
          str = 'Забронировать 3-комнатную квартиру';
        }
        if (flats[id].room == 4) {
          str = 'Забронировать студию';
        }
        $('.btn-submit-to-book').attr('data-id', id);
        $('.modal-to-book .modal__title').text(str)
        
      });
      $('.wrap-heart').off('click');
      $('.wrap-heart').on('click', function () {
        $(this).children('.heart-fill').toggleClass('hidden');
        
      });


    }

    function updatePagination(total) {
      let $parent = $('.catalog-pagination__list');
      $parent.html('');
      
        
      let str = '';
      for (let i = 0; i < total; i++) {
        if (i == currentPage) {
          str += '<div class="catalog-pagination__item catalog-pagination__item--active">' + (i + 1) + '</div>';
        } else {
          str += '<div class="catalog-pagination__item">' + (i + 1) + '</div>';
        }
        }
        
      if (totalPage > 1 && currentPage == 1) {
        $('.btn-show-more').removeClass('hidden');
        $parent.addClass('hidden');
      } else {
        $parent.removeClass('hidden');
        $('.btn-show-more').addClass('hidden');
      }
      if (total == 1) {
        $parent.addClass('hidden');
      }
      $parent.append(str);

    }

    function catalogSliderInit() {
      $('.catalog__slider').slick({
        arrows: false,
        // arrows: true,
        // prevArrow: '<button id="prev" type="button" class="catalog__slider-prevBtn"></button>',
        // nextArrow: '<button id="next" type="button" class="catalog__slider-nextBtn"></button>',
        slidesToShow: 1,
        // mobileFirst: true,
      });
      $('.catalog__slider-item img').off('click');
      $('.catalog__slider-item img').on('click', function () {
        $(this).closest('.catalog__slider').slick('slickNext');
      });
      
    }

    function catalogSliderDestroy() {
      if ($('.catalog__slider').length) {
        $('.catalog__slider').slick('unslick');
      }
     
    }

    function getCountFlatsByRoom(arrObj, num) { //Считает кол-во квартир определенного типа (1ком., 2ком., студия и т.д.)
      let sum = 0;
      for (let i = 0; i < arrObj.length; i++) {
        const room = arrObj[i].room;
        if (room == num) {
          sum++;
        }
      }
      return sum;
    }

    function getFlatsByRoom(arrObj, num) { //Возвращает квартиры определенного типа
      let tempArray = [];
      for (let i = 0; i < arrObj.length; i++) {
        const room = arrObj[i].room;
        if (room == num) {
          tempArray.push(arrObj[i]);
        }
      }
      return tempArray;
    }

    function clearListTable() { //Очищает список таблиц
      catalogSliderDestroy();
      $tableList.empty();
    };

    function updateImage(pathImg, id) {
      $('.catalog-img-flat img').attr('src', pathImg);
      $('.btnToBook').attr('data-id', id);
    }
    $('.modal-to-book__form-input.phone').off();
    $('.modal-to-book__form-input.phone').on('keypress', function (e) {
      validate(e);//функция из sctipt.js
    });

    $('body').on('click', function (e) { //Закрытие модального окна по клику на фон
      if ($('.catalog__modal').has(e.target).length === 0 && $('.flats__link').has(e.target).length === 0 && !$(e.target).closest('.catalog__modal').length && !$(e.target).closest('.modal-to-book').length) { //Если не содержит этот target
        if (!$('.catalog__modal').hasClass('modal--closed') && !$(e.target).hasClass('flats__link')) {
          $('.catalog__modal').addClass('modal--closed');
          $('.catalog__modal').attr('data-flats', '0');
          clearListTable();
        }
      }
      // if (!$(e.target).closest('.catalog__modal')&& !$(e.target).hasClass('.flats__link')) {
      //   $('.catalog__modal').addClass('modal--closed');
      //     $('.catalog__modal').attr('data-flats', '0');
      //     clearListTable();
      // }
    });
  });
})();