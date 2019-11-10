'use string';

(function() {
  var bankList = [
    {
      name: 'Сбербанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Райффайзен',
      img: 'img/sberbank.png',
      deposit: '5',
      rate: '14.00',
      timeFrom: '1',
      timeTo: '50'
    },

    {
      name: 'ВТБ',
      img: 'img/sberbank.png',
      deposit: '19',
      rate: '9.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'УРАЛсиб',
      img: 'img/sberbank.png',
      deposit: '85',
      rate: '4.00',
      timeFrom: '1',
      timeTo: '40'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Сбербанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Райффайзен',
      img: 'img/sberbank.png',
      deposit: '5',
      rate: '14.00',
      timeFrom: '1',
      timeTo: '50'
    },

    {
      name: 'ВТБ',
      img: 'img/sberbank.png',
      deposit: '19',
      rate: '9.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'УРАЛсиб',
      img: 'img/sberbank.png',
      deposit: '85',
      rate: '4.00',
      timeFrom: '1',
      timeTo: '40'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    }
  ];

  var fragment = document.createDocumentFragment();
  var template = document.querySelector('#bank'); //template
  var bankNode = document.querySelector('.credit__list'); // node


  var fillBankList = function (element, bankData) {
    element.querySelector('.bank__logo').setAttribute('src', bankData.img);
    element.querySelector('.bank__title').textContent = bankData.name;
    element.querySelector('.deposit').textContent = bankData.deposit;
    element.querySelector('.rate').textContent = bankData.rate;
    element.querySelector('.timeFrom').textContent = bankData.timeFrom;
    element.querySelector('.timeTo').textContent = bankData.timeTo;
  };

  var createBankCard= function () {

    for(var i = 0; i < bankList.length; i++) {
      var currentItem = template.content.cloneNode(true); // clone template
      var bankData = bankList[i]; // current item

      fillBankList(currentItem, bankData); // run fill func

      fragment.appendChild(currentItem);
    };
      bankNode.appendChild(fragment);
  };


  createBankCard();

  var visibleItems = 4;
  var bankItem = document.querySelectorAll('.credit__list-item');
  var showMoreBtn = document.querySelector('.credit__listBtn');

  var showCard = function () {
    if (bankList.length > visibleItems) {
      for(var i = visibleItems; i < bankList.length; i++){
        // console.log('ok')
        bankItem[i].classList.add('visually-hidden');
      }
    } else {
      showMoreBtn.classList.add('visually-hidden');
    }
  };

  var showMoreCard = function () {
    for (var i = 0; i < visibleItems; i++) {
      if(bankItem[i].classList.contains('visually-hidden')) {
        bankItem[i].classList.remove('visually-hidden');
      }
    }
  }

  showMoreBtn.addEventListener('click', function() {
    // console.log('btn')
    if ((bankList.length - visibleItems) > 4) {
      visibleItems += 4;
      // console.log(visibleItems);
      showMoreCard();
    } else {
      visibleItems = bankList.length;
      showMoreCard();
      showMoreBtn.classList.add('visually-hidden');
    }
  });

  showCard();

}());
