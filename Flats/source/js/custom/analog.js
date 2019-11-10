"use strict";

(function () {

  var analogArray = [
    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский-приморский  район, Мебельная-мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский Приморский  район, Мебельная Приморский улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский Приморский  район, Мебельная Приморский улица, 19к2',
    url: 'img/analog_1.jpg'
    }
  ]

  var fragment = document.createDocumentFragment(); // fragment
  var template = document.querySelector('#analog-template'); // template
  var analogBox = document.querySelector('#analogList'); // box
  //var analogModal = document.querySelector('#analogModal') // analog Modal

  var analogItems = 2;

  var fillAnalogNode = function (element, analogData) {
    element.querySelector('.analog__item-image').setAttribute('src', analogData.url);
    element.querySelector('.analog__item-title').textContent = analogData.name;
    element.querySelector('.analog__item-metro').textContent = analogData.metro;
    element.querySelector('.analog__item-street').textContent = analogData.street;
  };

  var createAnalogNode = function () {

    for(var i = 0; i < analogItems; i++) {
      var currentItem = template.content.cloneNode(true); // clone template
      var analogData = analogArray[i]; // current analog

      fillAnalogNode(currentItem, analogData); // run fill func

      fragment.appendChild(currentItem);
    };
      analogBox.appendChild(fragment);
  };

  createAnalogNode();

})();
