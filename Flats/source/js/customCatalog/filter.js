;
(function () {
  $(document).ready(function () {
    var mapComplex, clusterer;
    var coordsCenter = [59.931973315391325,30.26679547713465]//Координаты центра карты (в данном случае Санкт-Петербург)
    var coordsCenterMoscow = [55.760189227727665,37.62209300000001]//Координаты центра карты Москвы


    var mapComplexItem = null;//Мини карта для объектов
    var countObjects = 4; //Колитчество комплексов на странице
    var pageNum = 1; //текущая страница
    
    var filterComplex = {
      'area': '',
      'metro': '',
      'deadline': '',
      'costFrom': '',
      'costTo': '',
      'complex': '',
      'developer': '',
      'room': '',
      'typeProperty': '',
      'type': '',
      'squareFrom': '',
      'squareTo': '',
      'payment': '',
      'bank': ''
    } //Наш фильтр, с которым мы будем сравнивать объекты
    let complexFlatsList = []; //Квартиры
    complexFlatsList[0] = {'square': 25,'complex': 'ЖК "Новое Мурино"','cost': '4800000','type': 'С отделкой','floor': 3, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
    };
    complexFlatsList[1] = {'square': 37,'complex': 'ЖК "Среднее Мурино"','cost': '5500000','type': 'С отделкой','floor': 3, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 2','bank': 'банк 1','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
    };
    complexFlatsList[2] = {'square': 48,'complex': 'ЖК "Старое Мурино"','cost': '7600000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 2','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
    };
    complexFlatsList[3] = {'square': 50,'complex': 'ЖК "Новое Мурино"','cost': '3600000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 1','bank': 'банк 1','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 1
    };
    complexFlatsList[4] = {'square': 28,'complex': 'ЖК "Среднее Мурино"','cost': '4100000','type': 'Без отделки','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2021','typeProperty': 'Тип собственности 2','bank': 'банк 2','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 2
    };
    complexFlatsList[5] = {'square': 28,'complex': 'ЖК "Старое Мурино"','cost': '14800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': 'Студия','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 1','bank': 'банк 3','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
    };
    complexFlatsList[6] = {'square': 25,'complex': 'ЖК "Новое Мурино"','cost': '8800000','type': 'Без отделки','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 3','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
    };
    complexFlatsList[7] = {'square': 25,'complex': 'ЖК "Новое Мурино"','cost': '2800000','type': 'С отделкой','floor': 4, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 2','bank': 'банк 1','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 3
    };
    complexFlatsList[8] = {'square': 18,'complex': 'ЖК "Новое Мурино"','cost': '4800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': 'Студия','img': 'img/analog_1.jpg','deadline': '2021','typeProperty': 'Тип собственности 1','bank': 'банк 3','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 4
    };
    complexFlatsList[9] = {'square': 27,'complex': 'ЖК "Среднее Мурино"','cost': '10800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '3 ккв','img': 'img/analog_1.jpg','deadline': '2023','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 3', 'totalFloor': 12, 'corpus': 5
    };
    complexFlatsList[10] = {'square': 39,'complex': 'ЖК "Старое Мурино"','cost': '3800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2023','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
    };
    let complexFlatsList2 = []; //Квартиры
    complexFlatsList2[0] = {'square': 25,'complex': 'ЖК "Новое Мурино"','cost': '1800000','type': 'С отделкой','floor': 3, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
    };
    complexFlatsList2[1] = {'square': 31,'complex': 'ЖК "Среднее Мурино"','cost': '5500000','type': 'С отделкой','floor': 3, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 2','bank': 'банк 1','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
    };
    complexFlatsList2[2] = {'square': 48,'complex': 'ЖК "Старое Мурино"','cost': '2600000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2024','typeProperty': 'Тип собственности 2','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 1
    };
    complexFlatsList2[3] = {'square': 40,'complex': 'ЖК "Новое Мурино"','cost': '3600000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 1','bank': 'банк 1','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 1
    };
    complexFlatsList2[4] = {'square': 48,'complex': 'ЖК "Среднее Мурино"','cost': '4100000','type': 'Без отделки','floor': 1,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2021','typeProperty': 'Тип собственности 2','bank': 'банк 2','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 2
    };
    complexFlatsList2[5] = {'square': 39,'complex': 'ЖК "Старое Мурино"','cost': '14800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 1','bank': 'банк 3','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
    };
    complexFlatsList2[6] = {'square': 26,'complex': 'ЖК "Новое Мурино"','cost': '8800000','type': 'Без отделки','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2019','typeProperty': 'Тип собственности 3','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
    };
    complexFlatsList2[7] = {'square': 29,'complex': 'ЖК "Новое Мурино"','cost': '2800000','type': 'С отделкой','floor': 4, 'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '1 ккв','img': 'img/analog_1.jpg','deadline': '2022','typeProperty': 'Тип собственности 2','bank': 'банк 1','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 3
    };
    complexFlatsList2[8] = {'square': 34,'complex': 'ЖК "Новое Мурино"','cost': '4800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2ккв','img': 'img/analog_1.jpg','deadline': '2021','typeProperty': 'Тип собственности 1','bank': 'банк 3','payment': 'Оплата 2', 'totalFloor': 12, 'corpus': 4
    };
    complexFlatsList2[9] = {'square': 27,'complex': 'ЖК "Среднее Мурино"','cost': '10800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2023','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 3', 'totalFloor': 12, 'corpus': 5
    };
    complexFlatsList2[10] = {'square': 32,'complex': 'ЖК "Старое Мурино"','cost': '3800000','type': 'С отделкой','floor': 3,'address': 'Большой проспект Васильевского острова, 14','num': 115,'room': '2 ккв','img': 'img/analog_1.jpg','deadline': '2023','typeProperty': 'Тип собственности 1','bank': 'банк 2','payment': 'Оплата 1', 'totalFloor': 12, 'corpus': 2
    };
    let complexList = []; //Список комплексов
    //Временная переменная, которая хранит описание комплекса
    let description = 'Неподалёку от Санкт-Петербурга, в городе Кудрово Всеволожского района, ООО "Отделстрой" возводит довольно масштабный жилой комплекс с загадочным и красивым названием "Новый Оккервиль". Удачно расположившись на 50 га живописного берега одноимённой реки, комплекс привлекает разнообразием планировок (да ещё каким, более 200 вариантов квартир) и близостью (ближе некуда, 300 м - и Питер) к Северной столице. Что ещё интересного будет в "Новом Оккервиле", что - не очень, и куда делся старый - расскажем далее подробно. <br> Неподалёку от Санкт-Петербурга, в городе Кудрово Всеволожского района, ООО "Отделстрой" возводит довольно масштабный жилой комплекс с загадочным и красивым названием "Новый Оккервиль". Удачно расположившись на 50 га живописного берега одноимённой реки, комплекс привлекает разнообразием планировок (да ещё каким, более 200 вариантов квартир) и близостью (ближе некуда, 300 м - и Питер) к Северной столице. Что ещё интересного будет в "Новом Оккервиле", что - не очень, и куда делся старый - расскажем далее подробно. ';

    let arrImage = ["img/img-video-1.jpg", "img/analog_1.jpg"];
    complexList[0] = {'id':0, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Новое Мурино"','developer': 'ООО «Инвест-Строй»','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[59.96366228831891,30.33065350936121], 'flats': complexFlatsList, 'minCost':'2800000', 'maxCost':'10800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'78,4', 'maxCostSquare':'107,4','address': 'Большой проспект Васильевского острова', images: arrImage};
    complexList[1] = {'id':1, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Старое Мурино"','developer': 'ООО «Инвест-Строй» 2','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[59.95157511900833,30.219135840848985], 'flats': complexFlatsList2, 'minCost':'2900000', 'maxCost':'8800000', 'minSquare':18, 'maxSquare':60, 'minCostSquare':'94,4', 'maxCostSquare':'160,4','address': 'Большой проспект Васильевского острова', images: arrImage};
    complexList[2] = {'id':2, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Среднее Мурино"','developer': 'ООО «Инвест-Строй» 2','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[59.91194290293241,30.324192603544304], 'flats': complexFlatsList, 'minCost':'2200000', 'maxCost':'12800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'105,4', 'maxCostSquare':'140,4','address': 'Большой проспект Васильевского острова', images: arrImage};
    complexList[3] = {'id':3, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Маленькое Мурино"','developer': 'ООО «Инвест-Строй» 3','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[59.98244159964049, 30.07456582306103], 'flats': complexFlatsList2, 'minCost':'1700000', 'maxCost':'9800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'89,7', 'maxCostSquare':'150,2','address': 'Большой проспект Васильевского острова', images: arrImage};
    complexList[4] = {'id':4, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Большое Мурино"','developer': 'ООО «Инвест-Строй» 3','description': description, 'metro': 'Девяткино', 'area': 'Район 1', 'img': 'img/analog_1.jpg', 'coords':[60.01054659964049, 30.05126582306103], 'flats': complexFlatsList, 'minCost':'3700000', 'maxCost':'16800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'78,4', 'maxCostSquare':'107,4','address': 'Большой проспект Васильевского острова', images: arrImage};
    complexList[5] = {'id':5, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Старое Мурино"','developer': 'ООО «Инвест-Строй» 2','description': description, 'metro': 'Девяткино', 'area': 'Район 2', 'img': 'img/analog_1.jpg', 'coords':[59.89128425214093,30.38833173201744], 'flats': complexFlatsList2, 'minCost':'2900000', 'maxCost':'8800000', 'minSquare':18, 'maxSquare':60, 'minCostSquare':'58,4', 'maxCostSquare':'158,4','address': 'Большой проспект Васильевского острова', images: arrImage};
    complexList[6] = {'id':6, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Среднее Мурино"','developer': 'ООО «Инвест-Строй» 2','description': description, 'metro': 'Девяткино', 'area': 'Район 3', 'img': 'img/analog_1.jpg', 'coords':[59.946099329616665,30.395541509849473], 'flats': complexFlatsList, 'minCost':'2200000', 'maxCost':'82800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'78,4', 'maxCostSquare':'107,4','address': 'Большой проспект Васильевского острова', images: arrImage};
    complexList[7] = {'id':7, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Маленькое Мурино"','developer': 'ООО «Инвест-Строй» 3','description': description, 'metro': 'Девяткино', 'area': 'Район 2', 'img': 'img/analog_1.jpg', 'coords':[59.94551507554389,30.251599668096567], 'flats': complexFlatsList2, 'minCost':'1700000', 'maxCost':'2800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'140,4', 'maxCostSquare':'210,4','address': 'Большой проспект Васильевского острова', images: arrImage};
    complexList[8] = {'id':8, 'tel':'+7 985 985 98 85', 'name': 'ЖК "Большое Мурино"','developer': 'ООО «Инвест-Строй» 3','description': description, 'metro': 'Девяткино', 'area': 'Район 3', 'img': 'img/analog_1.jpg', 'coords':[59.960496096818105,30.295288938116098], 'flats': complexFlatsList, 'minCost':'3700000', 'maxCost':'16800000', 'minSquare':18, 'maxSquare':54, 'minCostSquare':'105,4', 'maxCostSquare':'240,4','address': 'Большой проспект Васильевского острова', images: arrImage};
    filterComplex = getDataInputFilter();

    $('.count-complex').text(complexList.length);//Количество жилых комплексов
    
    updateComplexes(complexList);
    ymaps.ready(initMap); //yandex maps
    function initMap() {
      mapComplex = new ymaps.Map('map', {
        center: coordsCenter,
        zoom: 11,
        controls: [],
      }, {
        searchControlProvider: 'yandex#search',
        suppressMapOpenBlock: true
      });
      clusterer = new ymaps.Clusterer({
        preset: 'islands#invertedRedClusterIcons',
        // clusterIcons: [{
        //   // href: 'img/icons/bookmark-star.svg',
        //   // size: [40, 40],
        //   // offset: [-20, -20]
        // }],
        // clusterNumbers: [10],
        groupByCoordinates: false,
        // clusterDisableClickZoom: true,
        clusterHideIconOnBalloonOpen: false,
        geoObjectHideIconOnBalloonOpen: false
      });
      clusterer.events
        .add('mouseenter', function (e) {
          e.get('target').options.set('preset', 'islands#invertedGrayClusterIcons');
        })
        .add('mouseleave', function (e) {
          e.get('target').options.set('preset', 'islands#invertedRedClusterIcons');
        });
      getPointData = function (index, complex) {
        return {
          
          balloonContentBody: '<div class="map-flat"><div class="map-flat__img"><img src="' + complex[index]
          .img + '" alt="img"></div><div class="map-flat__info"><div class="map-flat__complex">'+complex[index].name+'</div><div class="map-flat__cost-square">' + complex[index].minCostSquare + ' тыс. - ' + complex[index].maxCostSquare + ' тыс. руб/м<sup>2</sup></div><div class="map-flat__cost">от ' +
          Math.round(parseInt(complex[index].minCost))/1000000 + ' - до ' + Math.round(parseInt(complex[index].maxCost))/1000000 + ' млн. руб.</div></div></div>',
          // balloonContentBody: '<div class="map-flat"><div class="map-flat__img"><img src="' + complex[index]
          //   .img + '" alt="img"></div><div class="map-flat__info"><div class="map-flat__cost">' +
          //   Math.round(parseInt(complex[index].minCost))/1000000 + ' руб. - ' + Math.round(parseInt(complex[index].maxCost))/1000000 + ' руб.</div><div class="map-flat__type"></div><div class="map-flat__complex"></div></div></div>',
          // balloonContentFooter: '<div class="map-flat__address">' + complex[index].address + '</div>',
          clusterCaption: complex[index].name
        };
      };
      
      let geoObjects = getListPlacemarks(complexList);

      clusterer.add(geoObjects);
      mapComplex.geoObjects.add(clusterer);

      $('.map-filter__btn-show').on('click', function () {
        //ширина экрана
        let widthWindow = $(window).width();

        let separator = '; ';
          //Получаем именно тексты выбранных пунктов в select's
        let area = $('.map-filter__area').val().split(separator);
        let metro = $('.map-filter__metro').val().split(separator);
        let deadline = $('.map-filter__deadline').val().split(separator);
        let complex = $('.map-filter__complex').val().split(separator);
        let developer = $('.map-filter__developer').val().split(separator);

        let typeProperty = $('.map-filter__type-property').val().split(separator);
        let type = $('.map-filter__type').val().split(separator);
        let payment = $('.map-filter__payment').val().split(separator);
        let bank = $('.map-filter__bank').val().split(separator);
        let room = $('.map-filter__room').val().split(separator);

        let costFrom = parseInt($('.map-filter__cost-from').val());
        let costTo = parseInt($('.map-filter__cost-to').val());
        let squareFrom = parseInt($('.map-filter__square-from').val());
        let squareTo = parseInt($('.map-filter__square-to').val());
        
        let filter = {
          'area': area,
          'metro': metro,
          'deadline': deadline,
          'costFrom': costFrom,
          'costTo': costTo,
          'complex': complex,
          'developer': developer,
          'room': room,
          'typeProperty': typeProperty,
          'type': type,
          'squareFrom': squareFrom,
          'squareTo': squareTo,
          'payment': payment,
          'bank': bank
        } //Наш фильтр, с которым мы будем сравнивать объекты

        let filterList = getFilterListComplex(complexList, filter); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
        // let geoObjectsFilter = getListPlacemarks(filterList);
        updateMapObjects(mapComplex, clusterer, filterList);

        if (widthWindow <= 768) { //если ширину меньше 768, то закрываем окно фильтра на карте
          $('.map-filter').removeClass('map-filter--active');
          $('.map-footer__btn-open-filter').removeClass('map-footer__btn-open-filter--active');
        }
      });

      let height = ($(window).height() - 50 - 80 +1);//нужная высота
      
      if ($(window).width() <= 768) {
        $('#map').css('height', height + 'px');
        $('.map-filter').css('height', height + 'px');
        $('.map__complex-info').css('height', (height+50)+ 'px');
        mapComplex.container.fitToViewport();
      } else {
        
        // $('#map').css('height', 700+'px');
        $('#map').css('height',$('.map-wrapper').height());
        $('.map-filter').css('height', 'auto');
        $('.map__complex-info').css('height', 'auto');
        mapComplex.container.fitToViewport();
      }
      $(window).on('resize', function () {
        if ($(window).width() <= 768) {
          height = ($(window).height() - 50 - 80 +1);
          $('#map').css('height', height + 'px');
          $('.map-filter').css('height', height + 'px');
          $('.map__complex-info').css('height', (height+50)+ 'px');
        } else {
          // $('#map').css('height', 700+'px');
          $('#map').css('height',$('.map-wrapper').height());
          $('.map-filter').css('height', 'auto');
          $('.map__complex-info').css('height', 'auto');
        }
        mapComplex.container.fitToViewport();

        updateSizeComplexItemMap();
        
      });

    }
    function updateSizeComplexItemMap() {
      if (mapComplexItem != null) {
        if ($('.catalog-complex__list').hasClass('catalog-complex__list--display-list')) {
          $('#item-map').css('height', 333 + 'px');
          mapComplexItem.container.fitToViewport();
        } else {
          $('#item-map').css('height', 302 + 'px');
          mapComplexItem.container.fitToViewport();
        }
      }
    }
    function getListPlacemarks(listPlacemarks) {
      let geoObjects = [];
      for (var i = 0, len = listPlacemarks.length; i < len; i++) {
        placemark = new ymaps.Placemark(listPlacemarks[i].coords, getPointData(i, listPlacemarks), {
          iconLayout: 'default#image',
          iconImageHref: 'img/placemark.svg',
          iconImageSize: [23, 23],
          iconImageOffset: [-10, 0],
          placemarkClick: false,
          idComplex: listPlacemarks[i].id
        });
        geoObjects[i] = placemark;
        placemark.events
          .add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/placemark-hover.svg');
          })
          .add('mouseleave', function (e) {
            if (e.get('target').options.get('placemarkClick') == false) {
              e.get('target').options.set('iconImageHref', 'img/placemark.svg');
            }
          })
          .add('click', function (e) {
            e.get('target').options.set('placemarkClick', true);
            
            for (let i = 0; i < complexList.length; i++) {
              if (complexList[i].id == e.get('target').options.get('idComplex')) {
                $('.map-modal').addClass('map-modal--active-complex-info');
                $('.map__complex-info-inner').html('');
                showComplex(complexList[i], $('.map__complex-info-inner'));
                //Назначаем обработчики
                $('.btn-phone').off('click');
                $('.btn-phone').on('click', function () {
                  $(this).children('.text').text($(this).attr('data-phone'));
                });
                $('.wrap-heart').off('click');
                $('.wrap-heart').on('click', function () {
                  $(this).children('.heart-fill').toggleClass('hidden');
                });
                $('.map__complex-info-inner .filter__input').on('click', clickFilterInput);
                let $slider = $('.map__complex-info-inner .catalog-complex__slider');
                if ($slider.hasClass('slick-initialized')) {
                  $($slider).slick('unslick'); //ЧТобы не было ошибок, нужно уничтожить слайдер
                }
                initSlidersComplexes($slider);
                break;
             }
            }
            
          });
      }
      return geoObjects;
    }

    function updateMapObjects(map, cluster, filterList) { //Обновляет данные на карте по фильтру (filterList)
      let objects = getListPlacemarks(filterList);
      cluster.removeAll();
      cluster.add(objects);
      map.geoObjects.removeAll();
      map.geoObjects.add(clusterer);
    }
    $('.filter__btn-show-map, .list-type__btn.list-type__btn-map, .list-character__btn-map').off('click');
    $('.filter__btn-show-map, .list-type__btn.list-type__btn-map, .list-character__btn-map').on('click', function () {
      $(window).scrollTop(0);
      $('.map-modal').scrollTop(0);
      $('.map-modal').addClass('map-modal--open');
      $('body').addClass('body--fixed');
      
      
      let filter = getDataInputFilter();
      let filterList = getFilterListComplex(complexList, filter); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)

      updateMapObjects(mapComplex, clusterer, filterList);
      
    });


    function showMapComplex() { //Открытие мини карты, при нажатии на кнопку у элемента
        let $parentList = $(this).closest('.catalog-complex__list');
        $parentList.find('.item-map').attr('id', '');
        if ($(this).hasClass('map-active')) {
          // $parentList.find('.map-active').removeClass('map-active');
          $(this).removeClass('map-active');
          $(this).closest('.catalog-complex__item').find('.catalog-complex__item-map').addClass('catalog-complex__item-map--events-none');
          mapComplexItem.destroy();
          mapComplexItem = null;
        } else {
          $parentList.find('.map-active').removeClass('map-active');
          $parentList.find('.catalog-complex__item-map').addClass('catalog-complex__item-map--events-none');
          $(this).addClass('map-active');
          $(this).closest('.catalog-complex__item').find('.item-map').attr('id', 'item-map');
          $(this).closest('.catalog-complex__item').find('.catalog-complex__item-map').removeClass('catalog-complex__item-map--events-none');
          let idComplex = $(this).attr('data-id-complex');
          let coordsComplex = complexList[idComplex].coords;
          let addressComplex = complexList[idComplex].address;
          
          if (mapComplexItem != null) {
            mapComplexItem.destroy();
            mapComplexItem = null;
          }
          mapComplexItem = new ymaps.Map('item-map', {
            center: coordsComplex, // Новосибирск
            zoom: 13,
            controls: [],
          }, {
            searchControlProvider: 'yandex#search'
          });
          var placemark = new ymaps.Placemark(coordsComplex, {
            iconCaption: addressComplex,
          }, {
            preset: 'islands#darkBlueDotIcon',
            iconCaptionMaxWidth: '250'
            
        });
        mapComplexItem.geoObjects.add(placemark);
      }
      updateSizeComplexItemMap();
     
    }

    function updateComplexes(filterList) { //Обновляет список комплексов на странице

      let $slider = $('.catalog-complex__slider');
      if ($slider.hasClass('slick-initialized')) {
        $($slider).slick('unslick'); //ЧТобы не было ошибок, нужно уничтожить слайдеры, затем опять создать
      }

      if (filterList.length == 0) {
        $('.catalog-complex__list').html('<div class="nothing">Ничего не найдено</div>');
      } else {
        $('.catalog-complex__list').html('');
        $('.catalog-complex__show-more').removeClass('catalog-complex__show-more--hidden');
        
      }
      let j = 0; //Счетчик объектов, выводимых на страницу
      
      for (let i = (pageNum - 1) * 4; i < filterList.length && j < countObjects; i++) {
        j++;
        showComplex(filterList[i], $('.catalog-complex__list'));//Вторым параметром передаем родителя, куда будут добавляться данные
      }

      if (j == 0) {
        $('.catalog-complex__list').html('<div class="nothing">Страница пуста</div>');
      }

      let countObjLeft = filterList.length - ((pageNum - 1) * 4) - countObjects; //Определяем сколько еще осталось объектов для вывода

      if (countObjLeft < 0) {
        countObjLeft = 0;
      }

      if (countObjLeft <= 0) {
        $('.catalog-complex__show-more').addClass('catalog-complex__show-more--hidden');
      } else {
        $('.catalog-complex__show-more .count-flats').text(countObjLeft + ' ' + num2str(countObjLeft, ['объект', 'объекта', 'объектов']));
      }

      function num2str(n, text_forms) { //Склонение слов в зависимости от числа
        n = Math.abs(n) % 100;
        var n1 = n % 10;
        if (n > 10 && n < 20) {
          return text_forms[2];
        }
        if (n1 > 1 && n1 < 5) {
          return text_forms[1];
        }
        if (n1 == 1) {
          return text_forms[0];
        }
        return text_forms[2];
      }

      $slider = $('.catalog-complex__slider');
      initSlidersComplexes($slider);
      $('.btn-phone').off('click');
      console.log('sssswqdwq');
      $('.btn-phone').on('click', function () {
        $(this).children('.text').text($(this).attr('data-phone'));
      });
      $('.wrap-heart').off('click');
      $('.wrap-heart').on('click', function () {
        $(this).children('.heart-fill').toggleClass('hidden');
      });
      //Назначаем обработчик открытия Мини карты для объектов
      $('.catalog-complex__btn-show-map').off('click');
      $('.catalog-complex__btn-show-map').on('click', showMapComplex);
      $('.filter__input').off('click');
      $('.filter__input').on('click', clickFilterInput);
    }

    function getCloneList(complexList) { //Возвращает дубликат списка
      let cloneList = [];
      for (let i = 0; i < complexList.length; i++) {
        cloneList.push(complexList[i]);
      }
      return cloneList;
    }

    function getSortByCost(complexList) { //возвращает отсортированный по цене список 
      let cloneComplexList = getCloneList(complexList);
      for (let i = 0, endI = cloneComplexList.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (parseInt(cloneComplexList[j].minCost) > parseInt(cloneComplexList[j + 1].minCost)) {
            let swap = cloneComplexList[j];
            cloneComplexList[j] = cloneComplexList[j + 1];
            cloneComplexList[j + 1] = swap;
          }
        }
      }
      return cloneComplexList;
    }

    function getSortByCostSquare(complexList) { //возвращает отсортированный по цене за кв. м.
      let cloneComplexList = getCloneList(complexList);
      for (let i = 0, endI = cloneComplexList.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (parseInt(cloneComplexList[j].minCostSquare) > parseInt(cloneComplexList[j + 1].minCostSquare)) {
            let swap = cloneComplexList[j];
            cloneComplexList[j] = cloneComplexList[j + 1];
            cloneComplexList[j + 1] = swap;
          }
        }
      }
      return cloneComplexList;
    }

    function getSortByDeadline(complexList) { //возвращает отсортированный по цене за кв. м.
      let cloneComplexList = getCloneList(complexList);
      for (let i = 0, endI = cloneComplexList.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (getMinDeadline(cloneComplexList[j].flats) > getMinDeadline(cloneComplexList[j + 1].flats)) {
            let swap = cloneComplexList[j];
            cloneComplexList[j] = cloneComplexList[j + 1];
            cloneComplexList[j + 1] = swap;
          }
        }
      }
      return cloneComplexList;
    }

    function getMinDeadline(flatsList) { //Возвращает минимальный срок сдачи квартир комплекса
      let deadLine = parseInt(flatsList[0].deadline);
      for (let i = 0; i < flatsList.length; i++) {
        if (deadLine > parseInt(flatsList[i].deadline)) {
          deadLine = flatsList[i].deadline;
        }
      }
      return deadLine;
    }

    function getFlatInfo(flatsList) { //Получает данные о квартире(вовзращает список данных: минимальная/максимальная цены за кв.м и т.д.)
      if (flatsList.length != 0) {
        let minCost = parseInt(flatsList[0].cost),
          maxCost = 0,
          minCostSquare = parseInt(flatsList[0].cost) / parseInt(flatsList[0].square);
        for (let i = 0; i < flatsList.length; i++) {
          let flatCost = parseInt(flatsList[i].cost);
          flatCostSquare = flatCost / parseInt(flatsList[i].square);
          if (flatCost < minCost) {
            minCost = flatCost;
          }
          if (flatCost > maxCost) {
            maxCost = flatCost;
          }
          if (flatCostSquare < minCostSquare) {
            minCostSquare = flatCostSquare;
          }
        }

        let result = {
          'minCost': (Math.round(minCost) / 1000000).toFixed(1),
          'maxCost': (Math.round(maxCost) / 1000000).toFixed(1),
          'minCostSquare': (Math.round(minCostSquare) / 1000).toFixed(1)
        };
        return result;
      }
      return false;
    }
    //Нужно отфильтровать квартиры
    //Получить данные комлпекса на основе квартир
    //Вывести данные комплекса
    function getCostSquare(flatsList) { //Возвращает минимальную/максимальную цены за кв.м
      let costSquare = parseInt(flatsList[0].cost) / parseInt(flatsList[0].square);
      let minSquare = costSquare,
        maxSquare = costSquare;
      for (let i = 0; i < flatsList.length; i++) {
        costSquare = parseInt(flatsList[i].cost) / parseInt(flatsList[i].square);

        if (minSquare > costSquare) {
          minSquare = costSquare;
        }
        if (maxSquare < costSquare) {
          maxSquare = costSquare;
        }

      }
      let result = {
        'minCostSquare': (Math.round(minSquare) / 1000).toFixed(1),
        'maxCostSquare': (Math.round(maxSquare) / 1000).toFixed(1)
      }

      return result;
    }

    function getDataInputFilter() { //Возвращает список параметров для фильтрации
      let separator = '; ';
      let area = $('.filter__area').val().split(separator);
      let metro = $('.filter__metro').val().split(separator);
      let deadline = $('.filter__deadline').val().split(separator);
      let complex = $('.filter__complex').val().split(separator);
      let developer = $('.filter__developer').val().split(separator);

      let typeProperty = $('.filter__type-property').val().split(separator);
      let type = $('.filter__type').val().split(separator);
      let payment = $('.filter__payment').val().split(separator);
      let bank = $('.filter__bank').val().split(separator);
      let room = $('.filter__room').val().split(separator);
      console.log(room);
      
      let costFrom = parseInt($('.filter__cost-from').val());
      let costTo = parseInt($('.filter__cost-to').val());
      let squareFrom = parseInt($('.filter__square-from').val());
      let squareTo = parseInt($('.filter__square-to').val());
      
      
      
      let filter = {
        'area': area,
        'metro': metro,
        'deadline': deadline,
        'costFrom': costFrom,
        'costTo': costTo,
        'complex': complex,
        'developer': developer,
        'room': room,
        'typeProperty': typeProperty,
        'type': type,
        'squareFrom': squareFrom,
        'squareTo': squareTo,
        'payment': payment,
        'bank': bank
      } //Наш фильтр, с которым мы будем сравнивать объекты
      
      return filter;
    }
    function initSlidersComplexes(slider) {
      if ($(slider).length) {
        $(slider).off('init reInit afterChange');
        $(slider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) { //Счетчик на слайдах
          $status = $(slick.$slider[0]).siblings('.catalog-complex__slider-counter');
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + ' / ' + slick.slideCount);
        });
        $(slider).slick({
          adaptiveHeight: true,
          arrows: true,
          prevArrow: '<button id="prev" type="button" class="catalog-complex__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
          nextArrow: '<button id="next" type="button" class="catalog-complex__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',
        });
        $('.catalog-complex__slide img').off('click')
        $('.catalog-complex__slide img').on('click', function () {
          $(this).closest('.catalog-complex__slider').slick('slickNext');
        });
      }
    }
    function showComplex(infoList, parent) {//parent-родитель куда будут добавляться данные
      let str = '<div class="catalog-complex__item"><div class="catalog-complex__item-header"><div class="catalog-complex__item-map catalog-complex__item-map--events-none">';
      if (!parent.hasClass('map__complex-info-inner')) {
        str += '<div id="item-map" class="item-map" style="width:100%; height: 302px"></div>';
      }

      
      str += '</div><div class="catalog-complex__slider">';
      for (let i = 0; i < infoList.images.length; i++) {
        const img = infoList.images[i];
        str += '<div class="catalog-complex__slide"><img src="'+img+'" alt="img"><div class="catalog-complex__slide-icons"><span class="wrap-heart"><svg class="heart" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg><svg  class="heart-fill hidden" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></span><img src="img/slide-build.svg" alt="img"></div></div>';
      }
      str += '</div><div class="catalog-complex__slider-counter"></div><div class="catalog-complex__buttons-wrap catalog-complex__item-header-buttons"><a href="detail.html" class="catalog-complex__btn-more pink__btn">Подробнее</a><button type="button" class="catalog-complex__btn-show-map pink__btn" data-id-complex="' + infoList.id + '"><img src="img/placeholder-red.svg" alt="">На карте</button></div><ul class="complex-advantages__features-list"><li class="complex-advantages__features-item complex-advantages__features-item--sale"><div class="complex-advantages__features-item-box"><svg width="13" height="14"><use xlink:href="#icon-feature_sale"></use></svg></div><span class="complex-advantages__features-hint complex-advantages__features-hint--sale">Скидка партнерам</span></li><li class="complex-advantages__features-item complex-advantages__features-item--deal"><div class="complex-advantages__features-item-box"><svg width="14" height="14"><use xlink:href="#icon-feature_deal"></use></svg></div><span class="complex-advantages__features-hint complex-advantages__features-hint--deal">Безопасная&nbsp;сделка</span></li><li class="complex-advantages__features-item complex-advantages__features-item--gift"><div class="complex-advantages__features-item-box"><svg width="13" height="10"><use xlink:href="#icon-feature_gift"></use></svg></div><span class="complex-advantages__features-hint complex-advantages__features-hint--gift">Приемка&nbsp;в&nbsp;подарок</span></li><li class="complex-advantages__features-item complex-advantages__features-item--decor"><div class="complex-advantages__features-item-box"><svg width="12" height="17"><use xlink:href="#icon-feature_decor"></use></svg></div><span class="complex-advantages__features-hint complex-advantages__features-hint--decor">Сертификат&nbsp;на&nbsp;отделку</span></li><li class="complex-advantages__features-item complex-advantages__features-item--conditions"><div class="complex-advantages__features-item-box"><svg width="18" height="13"><use xlink:href="#icon-bus"></use></svg></div> <span class="complex-advantages__features-hint complex-advantages__features-hint--gift">Специальные&nbsp;условия для&nbsp;иногородних</span></li></ul></div><div class="catalog-complex__item-content" ><div class="inner">';
      let costSquare = getCostSquare(infoList.flats);
      let minCost = Math.round(parseInt(infoList.minCost) / 1000000);
      let maxCost = Math.round(parseInt(infoList.maxCost) / 1000000);

      str += '<div class="complex">' + infoList.name + '</div><div class="developer"><span class="text">' + infoList.developer + '</span><img src="img/developer_logo.svg" alt=""></div></div><div class="catalog-complex__cost-block"><span class="cost-block__cost-from">' + minCost + '</span> - <span class="cost-block__cost-to">' + maxCost + '</span> млн. руб.</div><div class="catalog-container-wrap"><div class="square-metr">' + infoList.minCostSquare + ' - ' + costSquare.maxCostSquare + ' тыс. руб/м2</div>';
      if (!$(parent).hasClass('map__complex-info-inner')) {
        str += '<button type="button" class="btn-phone" data-phone="' + infoList.tel + '"><img class="img-phone" src="img/icon-phone.svg" alt=""><span class="text">+7 Показать телефон</span></button>';
      }
      str+= '</div><div class="address">' + infoList.address + '</div><div class="metro"><img src="img/metro-el.svg" alt=""><span class="metro__name">' + infoList.metro + '</span><span class="metro__distance">15 мин пешком</span></div> <div class="filter-field complex-field-deadlines"><div class="filter-field__select-arrow"><svg viewBox="0 0 284.929 284.929"><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" /></svg></div><div class="select-input"><input type="text" value="" name="complex__deadlines" class="select filter__complex__deadlines filter__input" readonly  placeholder="Срок сдачи:"><div class="checkboxes"><div class="checkboxes__inner">';

      for (let i = 0; i < infoList.flats.length; i++) {
        str += '<label><input type="checkbox" name="complex__deadlines" value="' + i + '" /><span class="check"></span><span class="text">корпус ' + infoList.flats[i].corpus +', ' + infoList.flats[i].deadline + ' г.</span></label>';
      }

      str += '</div></div></div></div><div class="catalog-complex-info-wrap">';

      let flatsGroupByRoom = infoList.flats.reduce(function (r, a) {
        r[a.room] = r[a.room] || [];
        r[a.room].push(a);
        return r;
      }, Object.create(null));

      let infoStudio = false;
      let infoOneRoom = false;
      let infoTwoRoom = false;
      let infoThreeRoom = false;
      if (flatsGroupByRoom['Студия'] != undefined) {
        infoStudio = getFlatInfo(flatsGroupByRoom['Студия']);
      }

      if (flatsGroupByRoom['1 ккв'] != undefined) {
        infoOneRoom = getFlatInfo(flatsGroupByRoom['1 ккв']);
      }

      if (flatsGroupByRoom['2 ккв'] != undefined) {
        infoTwoRoom = getFlatInfo(flatsGroupByRoom['2 ккв']);
      }

      if (flatsGroupByRoom['3 ккв'] != undefined) {
        infoThreeRoom = getFlatInfo(flatsGroupByRoom['3 ккв']);
      }





      if (infoStudio != false) {
        str += '<div class="flat-type studio"><div class="flat-type__left-box">Студия от <span class="flat-type__square"><span class="flat-type__square-value">' + infoStudio.minCostSquare + '</span>м<sup>2</sup></span></div><div class="flat-type__right-box"><span class="flat-type__cost-from">' + infoStudio.minCost + '</span> - <span class="flat-type__cost-to">' + infoStudio.maxCost + '</span> млн. руб. </div></div>';
      }
      if (infoOneRoom != false) {
        str += '<div class="flat-type studio"><div class="flat-type__left-box">1-комнатная кв. от <span class="flat-type__square"><span class="flat-type__square-value">' + infoOneRoom.minCostSquare + '</span>м<sup>2</sup></span></div><div class="flat-type__right-box"><span class="flat-type__cost-from">' + infoOneRoom.minCost + '</span> - <span class="flat-type__cost-to">' + infoOneRoom.maxCost + '</span> млн. руб. </div></div>';
      }
      if (infoTwoRoom != false) {
        str += '<div class="flat-type studio"><div class="flat-type__left-box">2-комнатная кв. от <span class="flat-type__square"><span class="flat-type__square-value">' + infoTwoRoom.minCostSquare + '</span>м<sup>2</sup></span></div><div class="flat-type__right-box"><span class="flat-type__cost-from">' + infoTwoRoom.minCost + '</span> - <span class="flat-type__cost-to">' + infoTwoRoom.maxCost + '</span> млн. руб. </div></div>';
      }
      if (infoThreeRoom != false) {
        str += '<div class="flat-type studio"><div class="flat-type__left-box">3-комнатная кв. от <span class="flat-type__square"><span class="flat-type__square-value">' + infoThreeRoom.minCostSquare + '</span>м<sup>2</sup></span></div><div class="flat-type__right-box"><span class="flat-type__cost-from">' + infoThreeRoom.minCost + '</span> - <span class="flat-type__cost-to">' + infoThreeRoom.maxCost + '</span> млн. руб. </div></div>';
      }
      if ($(parent).hasClass('map__complex-info-inner')) {
        
        str += '</div><button type="button" data-phone="'+infoList.tel+'" class="btn-phone"><img class="img-phone" src="img/icon-phone.svg" alt=""><span class="text">+7 Показать телефон</span></button><a href="detail.html" class="btn-details pink__btn">Подробнее</a></div></div>';
      } else {
        str += '</div><div class="catalog-complex__description"><p class="description">' + infoList.description + '</p></div><div class="catalog-complex__buttons-wrap"><a href="detail.html" class="catalog-complex__btn-more pink__btn">Подробнее</a><button type="button" data-id-complex="'+infoList.id+'"class="catalog-complex__btn-show-map pink__btn"><img src="img/placeholder-red.svg"alt="">На карте</button></div></div></div>';
      }
      // $('.catalog-complex__list').append(str);
      $(parent).append(str);
    }

    //-----------------------------------------------------------------------------
    //------------------------------ФИЛЬТРАЦИЯ-------------------------------------------
    //-------------------------------------------------------------------

    function getFilterListComplex(listComplex, filter) { //Возвращает отфильтрованный список комплексов
      let tempListComplex = []; //список отфильтрованных комплексов
      for (let j = 0; j < listComplex.length; j++) {
        
        let isFilter = true;
        
        if (filter.area[0].length) {
        for (let i = 0; i < filter.area.length; i++) {
          if (filter.area[i] != '') {
            if (filter.area[i].toLowerCase() == listComplex[j].area.toLowerCase()) {
              isFilter = true;
              break;
            } else {
              isFilter = false;
            }
          }
          }
        }
        if (!isFilter) {
          continue;
        }
        
        if (filter.metro[0].length) {
          for (let i = 0; i < filter.metro.length; i++) {
            if (filter.metro[i] != '') {
              if (filter.metro[i].toLowerCase() == listComplex[j].metro.toLowerCase()) {
                isFilter = true;
                break;
              } else {
                isFilter = false;
              }
            }
            }
        }
        if (!isFilter) {
          continue;
        }
        
        if (filter.deadline[0].length) {
          for (let i = 0; i < filter.metro.length; i++) {
            let filterDeadline = filter.deadline[i];
            isFilter = false;
            listComplex[j].flats.forEach(flat => {
              if (flat.deadline == filterDeadline) {
                isFilter = true;
              }
            });
            if (isFilter) {
              break;
            }
            }
        }
        if (!isFilter) {
          continue;
        }
        if (filter.complex[0].length) {
          for (let i = 0; i < filter.complex.length; i++) {
            if (filter.complex[i] != '') {
              
              if (filter.complex[i].toLowerCase() == listComplex[j].name.toLowerCase()) {
                isFilter = true;
                break;
              } else {
                isFilter = false;
              }
            }
            }
        }
        if (!isFilter) {
          continue;
        }
        
        if (filter.developer[0].length) {
          for (let i = 0; i < filter.developer.length; i++) {
            if (filter.developer[i] != '') {
              if (filter.developer[i].toLowerCase() == listComplex[j].developer.toLowerCase()) {
                isFilter = true;
                break;
              } else {
                isFilter = false;
              }
            }
            }
          }
          if (!isFilter) {
            continue;
          }
        if (filter.room.length) {
          
          for (let z = 0; z < filter.room.length; z++) {
            if (filter.room[z] != '') {
              isFilter = false;
              for (let i = 0; i < listComplex[j].flats.length; i++) {
                if (listComplex[j].flats[i].room.toLowerCase() == filter.room[z].toLowerCase()) {
                  isFilter = true;
                  break;
                }
              }
              if (isFilter) {
                break;
              }
            }
            }
        }
        if (!isFilter) {
          continue;
        }
        if (filter.typeProperty[0].length) {
          for (let z = 0; z < filter.typeProperty.length; z++) {
            if (filter.typeProperty[z] != '') {
              isFilter = false;
              for (let i = 0; i < listComplex[j].flats.length; i++) {
                if (listComplex[j].flats[i].typeProperty.toLowerCase() == filter.typeProperty[z].toLowerCase()) {
                  isFilter = true;
                  break;
                }
              }
              if (isFilter) {
                break;
              }
            }
            }
        }
        if (!isFilter) {
          continue;
        }
        
        if (filter.type[0].length) {
          for (let z = 0; z < filter.type.length; z++) {
            if (filter.type[z] != '') {
              isFilter = false;
              for (let i = 0; i < listComplex[j].flats.length; i++) {
                if (listComplex[j].flats[i].type.toLowerCase() == filter.type[z].toLowerCase()) {
                  isFilter = true;
                  break;
                }
              }
              if (isFilter) {
                break;
              }
            }
            }
        }
        if (!isFilter) {
          continue;
        }

        if (filter.payment[0].length) {
          for (let z = 0; z < filter.payment.length; z++) {
            if (filter.payment[z] != '') {
              isFilter = false;
              for (let i = 0; i < listComplex[j].flats.length; i++) {
                if (listComplex[j].flats[i].payment.toLowerCase() == filter.payment[z].toLowerCase()) {
                  isFilter = true;
                  break;
                }
              }
              if (isFilter) {
                break;
              }
            }
            }
        }
        if (!isFilter) {
          continue;
        }

        if (filter.bank[0].length) {
          for (let z = 0; z < filter.bank.length; z++) {
            if (filter.bank[z] != '') {
              isFilter = false;
              for (let i = 0; i < listComplex[j].flats.length; i++) {
                if (listComplex[j].flats[i].bank.toLowerCase() == filter.bank[z].toLowerCase()) {
                  isFilter = true;
                  break;
                }
              }
              if (isFilter) {
                break;
              }
            }
            }
        }
        if (!isFilter) {
          continue;
        }

        if ((filter.costTo == 0) || (filter.squareTo == 0)) {
          isFilter = false;
          continue;
        }

        if ((!isNaN(filter.costFrom) && filter.costFrom != 0) && (isNaN(filter.costTo) || (filter.costTo == 0))) {
          isFilter = false;
          for (let i = 0; i < listComplex[j].flats.length; i++) {
            let flatCost = parseInt(listComplex[j].flats[i].cost);
            if ((filter.costFrom <= flatCost)) {
              isFilter = true;
              break;
            }
          }
          if (!isFilter) {
            continue;
          }
        } else if ((!isNaN(filter.costTo) && filter.costTo != 0) && (isNaN(filter.costFrom) || (filter.costFrom == 0))) {
          isFilter = false;
          for (let i = 0; i < listComplex[j].flats.length; i++) {
            let flatCost = parseInt(listComplex[j].flats[i].cost);
            if ((filter.costTo >= flatCost)) {
              isFilter = true;
              break;
            }
          }
          if (!isFilter) {
            continue;
          }
        } else if ((!isNaN(filter.costTo) && filter.costTo != 0) && (!isNaN(filter.costFrom) && filter.costFrom != 0)) {
          isFilter = false;
          for (let i = 0; i < listComplex[j].flats.length; i++) {
            let flatCost = parseInt(listComplex[j].flats[i].cost);
            if ((filter.costFrom <= flatCost) && (filter.costTo >= flatCost)) {
              isFilter = true;
              break;
            }
          }
          if (!isFilter) {
            continue;
          };
        }

        if ((!isNaN(filter.squareFrom) && filter.squareFrom != 0) && (isNaN(filter.squareTo) || (filter.squareTo == 0))) {
          isFilter = false;
          for (let i = 0; i < listComplex[j].flats.length; i++) {
            let flatSquare = parseInt(listComplex[j].flats[i].square);
            if ((filter.squareFrom <= flatSquare)) {
              isFilter = true;
              break;
            }
          }
          if (!isFilter) {
            continue;
          }
        } else if ((!isNaN(filter.squareTo) && filter.squareTo != 0) && (isNaN(filter.squareFrom) || (filter.squareFrom == 0))) {
          isFilter = false;
          for (let i = 0; i < listComplex[j].flats.length; i++) {
            let flatSquare = parseInt(listComplex[j].flats[i].square);
            if ((filter.squareTo >= flatSquare)) {
              isFilter = true;
              break;
            }
          }
          if (!isFilter) {
            continue;
          }
        } else if ((!isNaN(filter.squareTo) && filter.squareTo != 0) && (!isNaN(filter.squareFrom) && filter.squareFrom != 0)) {
          isFilter = false;
          for (let i = 0; i < listComplex[j].flats.length; i++) {
            let flatSquare = parseInt(listComplex[j].flats[i].square);
            if ((filter.squareFrom <= flatSquare) && (filter.squareTo >= flatSquare)) {
              isFilter = true;
              break;
            }
          }
          if (!isFilter) {
            continue;
          };
        }


        if (isFilter) { //Если комплекс соответсвует фильтру, добавляем в список отфильтрованных комплексов
          tempListComplex.push(listComplex[j]);
        }
      }
      return tempListComplex;

    }
    //--------------------------------------------------------------------------
    //-------------------------- СОБЫТИЯ события -------------------------------
    //--------------------------------------------------------------------------

    //------------------------ Сортировка sort ------------------------------------
    $('.list-character__btn-sort-by-coast').on('click', function () { //По цене
      // let filter = getDataInputFilter();
      // let $btn = $('.list-type-flats__btn--active');
      // if ($btn.length) {
      //   if ($($btn).hasClass('oneRoom')) {
      //     filter.room = '1 ккв';
      //   } else if ($($btn).hasClass('twoRoom')) {
      //     filter.room = '2 ккв';
      //   }else if ($($btn).hasClass('threeRoom')) {
      //     filter.room = '3 ккв';
      //   } else if ($($btn).hasClass('studio')) {
      //     filter.room = 'Студия';
      //   }
      // }

      let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
      let sortComplexList = getSortByCost(filterList);
      updateComplexes(sortComplexList); //Обновляет список комплексов на странице
    });
    $('.list-character__btn-sort-by-coast-square').on('click', function () { //По цене за кв. м.
      // let filter = getDataInputFilter();
      let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
      let sortComplexList = getSortByCostSquare(filterList);
      updateComplexes(sortComplexList); //Обновляет список комплексов на странице
    });
    $('.list-character__btn-sort-by-deadline').on('click', function () { //По сроке сдачи
      // let filter = getDataInputFilter();
      let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
      let sortComplexList = getSortByDeadline(filterList);
      updateComplexes(sortComplexList); //Обновляет список комплексов на странице
    });
    $('.list-character__btn-sort-by-recomend').on('click', function () { //По рекомендованным (возвращает просто по-молчанию)
      let filterList = getFilterListComplex(complexList, filterComplex);
      updateComplexes(filterList); //Обновляет список комплексов на странице
    });

    $('.list-type-flats__btn').click(function (e) { //Кнопки сортировки по типу квартиры
      // $(this).siblings().removeClass('list-type-flats__btn--active');
      if ($(this).hasClass('list-type-flats__btn--active')) {
        $(this).removeClass('list-type-flats__btn--active');
      } else {
        $(this).addClass('list-type-flats__btn--active');
      }
      let arrBtns = $('.list-type-flats__btn--active');
      let room = [];
      for (let i = 0; i < arrBtns.length; i++) {
        room[i] = $(arrBtns[i]).attr('data-room');
        }
        
     
      filterComplex.room= room;
        
      let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список квартир (filter - объект, с которым будут сравниваться другие объекты)
      // let geoObjectsFilter = getListPlacemarks(filterList);
      updateComplexes(filterList);

    });

    //------------------------------------------------------------------------  
    $('.pagination__item').click(function (e) { //Пагинация
      $(this).siblings().removeClass('pagination__item--active');
      $(this).addClass('pagination__item--active');
      countObjects = 4;
      pageNum = parseInt($(this).text());

      let filterList = getFilterListComplex(complexList, filterComplex);
      updateComplexes(filterList);
      // let filterList = getFilterListComplex(complexList, filter); //Возвращает отфильтрованный список квартир (filter - объект, с которым будут сравниваться другие объекты)
      // // let geoObjectsFilter = getListPlacemarks(filterList);
      // updateComplexes(filterList);
    });

    $('.catalog-complex__show-more').click(function (e) { //Показать еще
      $(this).addClass('catalog-complex__show-more--hidden');
      // $('.pagination').addClass('pagination--hidden');
      

      let filterList = getFilterListComplex(complexList, filterComplex);
      countObjects = filterList.length;
      updateComplexes(filterList);

    });

    $('.map-modal__close .close').on('click', function () {
      $('.map-modal').removeClass('map-modal--open');
      $('body').removeClass('body--fixed');
    });
    $('.complex-info__close .close').on('click', function () {
      $('.map-modal').removeClass('map-modal--active-complex-info');
    });


    $('.filter__less-options').on('click', function () { //Сворачивание/разворачивание параметров
      $(this).toggleClass('filter__less-options--active');
      if ($(this).hasClass('filter__less-options--active')) {
        $('.filter__form')[0].reset();
      }
      $('.checkboxes').removeClass('checkboxes--active');
      $('.filter__form-inner').toggleClass('filter__form-inner--collapse');
      $('.filter__collapse-wrap').toggleClass('filter__collapse-wrap--height');
      if ($('.filter__form-inner').hasClass('filter__form-inner--collapse')) {
        $(this).children('.text').text('Больше параметров');
      } else {
        $(this).children('.text').text('Меньше параметров');
      }

    });

    $('.filter__collapse-btn').click(function (e) { //Сворачивание/разворачивание всего окна филтров
      $(this).toggleClass('filter__collapse-btn-open');
      if ($(this).hasClass('filter__collapse-btn-open')) {
        $(this).children('.text').text('Открыть');
      } else {
        $(this).children('.text').text('Свернуть');
      }
      $('.filter__collapse-wrap').toggleClass('filter__collapse-wrap--hidden');
      $('.filter__less-options').toggleClass('hidden');
    });

    $('.map-footer__btn-open-filter').click(function (e) { //Открытие/Закрытие фильтра на телефонах на карте
      $(this).toggleClass('map-footer__btn-open-filter--active');
      $('.map-filter').toggleClass('map-filter--active');
      $('.map-filter').scrollTop(0);
    });
    $('.map-footer__btn-open-list').click(function (e) { //Закрытие карты на телефоне
      $('.map-footer__btn-open-filter').removeClass('map-footer__btn-open-filter--active');
      $('.map-filter').removeClass('map-filter--active');
      $('.map-filter').scrollTop(0);
      $('.map-modal').removeClass('map-modal--open');
      $('.map-modal').removeClass('map-modal--active-complex-info');
      $('body').removeClass('body--fixed');
    });


    $('.filter__btn-show').click(function (e) { //Показать комплексы
      //Получаем именно тексты выбранных пунктов в select's
      $('.list-type-flats__btn').removeClass('list-type-flats__btn--active');
      $('.list-character__btn').removeClass('list-character__btn--active');
      $('.list-character__btn.list-character__btn-sort-by-recomend').addClass('list-character__btn--active');
      filterComplex = getDataInputFilter();
      // $('.pagination').removeClass('pagination--hidden');
      $('.first-page').addClass('pagination__item--active').siblings().removeClass('pagination__item--active');
      
      pageNum = 1;
      countObjects = 4;
      let filterList = getFilterListComplex(complexList, filterComplex); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
      updateComplexes(filterList); //Обновляет список комплексов на странице
    });

    //------------------------------------------------------------------------

    // $('.btn').on('click', function () {
    //   $arr = $('#checkboxes input');
    //   for (let i = 0; i < $arr.length; i++) {
    //     if ($($arr[i]).prop('checked')) {
    //       console.log($($arr[i]).parent().find('.text').text());
    //     }
    //   }
    // });
    function clickFilterInput() {
      console.log('click');
      
      $('.filter__form-inner').find('.filter__input').removeClass('filter__input--active-select');
      $('.map-filter__form-inner').find('.map-filter__input').removeClass('filter__input--active-select');
      $(this).closest('.filter__form-inner').find('.filter-field').removeClass('filter-field--active-select');
      $(this).closest('.map-filter__form-inner').find('.map-filter-field').removeClass('filter-field--active-select');
      $(this).closest('.filter-field').removeClass('filter-field--active-select');

      if ($(this).hasClass('map-filter__input')) {
        $(this).closest('.map-filter-field').siblings().find('.checkboxes').removeClass('checkboxes--active');
      }
      else if (!$(this).siblings('.checkboxes').hasClass('checkboxes--active')) {
        $(this).closest('.filter__form-inner').find('.checkboxes').removeClass('checkboxes--active');
      }
      $checboxes = $(this).siblings('.checkboxes');
      $checboxes.toggleClass('checkboxes--active');
      if ($(this).siblings('.checkboxes').hasClass('checkboxes--active')) {
        $(this).closest('.filter-field').addClass('filter-field--active-select');
        $(this).closest('.map-filter-field').addClass('filter-field--active-select');
      }
      
      if ($(this).siblings('.checkboxes').hasClass('checkboxes--active')) {
        $(this).addClass('filter__input--active-select');
        $(this).closest('.filter-field').addClass('filter-field--active-select');
      }
      if ($(this).parents('.filter-field-cost__wrap').length || $(this).parents('.map-filter-field-cost__wrap').length) {
        $(this).addClass('filter__input--active-select');
      }
      if ($('.filter .checkboxes--active').length) {
        $('.filter').addClass('filter--select-active');
      } else {
        $('.filter').removeClass('filter--select-active');
      }

    }
    $('.filter__input, .map-filter__input').off('click');
    $('.filter__input, .map-filter__input').on('click', clickFilterInput);

    $('.header-catalog__cities-btn').click(function (e) { //Главные кнопки переключения между Москвой и СПб
      $(this).addClass('header-catalog__cities-btn--active').siblings().removeClass('header-catalog__cities-btn--active');

      if ($(this).attr('data-city') == 'moscow') {
        mapComplex.setCenter(coordsCenterMoscow);
        $('.sort-box__title-box .title').text('Новостройки Москвы');
      } else if ($(this).attr('data-city') == 'spb') {
        mapComplex.setCenter(coordsCenter);
        $('.sort-box__title-box .title').text('Новостройки Санкт-Петербурга');
      }
      
    });

    $('.checkboxes input').on('click', function () {
      
      let $field = $(this).closest('.select-input').children('.filter__input');
      if (!$($field).length) {
        $field = $(this).closest('.select-input').children('.map-filter__input');
      }
      
      let value = $field.val();
      let str = $(this).siblings('.text').text().replace(/\s+/g, " ") + "; ";
      if ($(this).prop('checked')) {
        let result = value + str;
        $field.val(result);
      } else {
        let newResult = value.replace(str, "");
        $field.val(newResult);
      }
    });

    $('.list-type__btn').on('click', function () {
      setTimeout(updateSizeComplexItemMap, 100);
    });

    $('body').on('click', function (e) {
      if (!$(e.target).parents('.select-input').length) {
        $('.checkboxes').removeClass('checkboxes--active');
        $('.filter').removeClass('filter--select-active');
        $('.select-input .filter__input').removeClass('filter__input--active-select');
        $('.select-input .map-filter__input').removeClass('filter__input--active-select');
        $('.filter-field').removeClass('filter-field--active-select');
        $('.map-filter-field').removeClass('filter-field--active-select');
      }
      if (!$(e.target).parents('.filter-field-cost__wrap').length) {
        $('.filter-field-cost__wrap .filter__input').removeClass('filter__input--active-select');
      }
      if (!$(e.target).parents('.map-filter-field-cost__wrap').length) {
        $('.map-filter-field-cost__wrap .map-filter__input').removeClass('filter__input--active-select');
      }
    });

    
  });
})();



