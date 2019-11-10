;(function () {
  $(document).ready(function () {


    let arrDoc = [];
    arrDoc[0] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[1] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[2] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[3] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[4] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[5] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[6] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };

    let countDocVisible = 3 //Количество видимых документов
    let DocLeft = arrDoc.length; //Сколько осталось скрытых объектов
    if (DocLeft < 0) {
      DocLeft = 0;
    }
    $('.documents__list').html('');
    loadDocuments(arrDoc);
   
    function loadDocuments(arrDoc) {
      if ($(".fancybox").length) {
        $(document).unbind('click.fb-start');
      }
      let j = 0; //Счетчик объектов, выводимых на страницу
      let strHTML = '';
      for (let i = 0; i < DocLeft && j < countDocVisible && DocLeft!=0; i++) {
        j++;
        strHTML += '<li class="documents__item fancybox" data-fancybox-type="iframe" href="' + arrDoc[i].document + '"><p class="documents__item-name">' + arrDoc[i].name + '</p><span class="documents__item-size">' + arrDoc[i].weight + '</span></li>';
        
      }
     
      DocLeft -= j; //Определяем сколько еще осталось объектов для вывода
  
      if (DocLeft < 0) {
        DocLeft = 0;
      }
      if (DocLeft <= 0 || j == 0) {
        $('.documents__show-btn').addClass('documents__show-btn--hidden');
      } else {
        $('.documents__show-btn').text('Показать еще ' + DocLeft + ' ' + num2str(DocLeft, ['документ', 'документа', 'документов']));
      }
      $('.documents__list').append(strHTML);

      $(".fancybox").fancybox({
      });
    }

    $('.documents__show-btn').click(function () {
      loadDocuments(arrDoc);
    });
  });

  

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
})();