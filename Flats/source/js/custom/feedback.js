// 'use strict';


    ;
(function () {
  $(document).ready(function () {
    let arrFeedbacks = []; //Массив отзывов
    let countVisible = 3;
    let lengthChars = 180;//Максимальная длина символов сообщения, которая будет видна
    let nameComplex = 'ЖК "Новое Мурино"';
    arrFeedbacks[0] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория',feedback: 'хороший комплекс', date: 'Вчера в 12:34'}
    arrFeedbacks[1] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория1',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[2] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория2',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[3] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория3',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[4] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория4',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[5] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[6] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[7] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[8] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[9] = { avatar: 'img/avatar.svg', name: 'Самойлова Виктория5', feedback: 'хороший комплекс', date: '27.10.2019 в 18:00' }

    let arrFeedbacksDeveloper = []; //Массив отзывво
    // feedback__toogle-link feedback__toogle-link--developer
    arrFeedbacksDeveloper[0] = {avatar: 'img/avatar.svg',name: 'Застройщик',feedback: 'хороший комплекс', date: 'Вчера в 12:34'}
    arrFeedbacksDeveloper[1] = {avatar: 'img/avatar.svg',name: 'Застройщик1',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[2] = {avatar: 'img/avatar.svg',name: 'Застройщик2',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[3] = {avatar: 'img/avatar.svg',name: 'Застройщик3',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[4] = {avatar: 'img/avatar.svg',name: 'Застройщик4',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[5] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[6] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[7] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[8] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[9] = { avatar: 'img/avatar.svg', name: 'Застройщик5', feedback: 'хороший комплекс', date: '27.10.2019 в 18:00' }

    $('.feedback__title').text("Отзывы о " + nameComplex);
    updateFeedback(arrFeedbacks);

    function updateFeedback(listObjects) {
      $('.feedback__inner').html('');
      let strHTML = '';
      let j = 0;
      for (let i = 0; i < listObjects.length && i < countVisible; i++) {
        j++;
        strHTML += '<div class="feedback__box"><div class="feedback__avatar-box"><img src="'+listObjects[i].avatar+'" alt="аватарка" class="feedback__avatar" width="16" height="20"></div><div class="feedback-content"><div class="feedback__author-container"><b class="feedback__author">' + listObjects[i].name + '</b><small class="feedback__time">' + listObjects[i].date + '</small></div>';
        let classBtnUnfurl = 'hidden';
        
        if (listObjects[i].feedback.length > lengthChars) {
          classBtnUnfurl = '';
        }
        strHTML +='<p class="feedback__text">' + truncate(listObjects[i].feedback) + '</p><p class=" feedback__text--full hidden">' + listObjects[i].feedback + '</p><div class="feedback__buttons"><button type="button" class="feedback__answer-btn">Ответить</button><button type="button" class="feedback__btn feedback__btn--unfurl '+classBtnUnfurl+'"><span class="text">Читать весь отзыв</span><img src="img/arrow__down-input-grey.svg" alt="image"></button><div class="feedback__answer-box hidden"><div class="feedback__answer"><div class="feedback__author-avatarBox"><img src="'+listObjects[i].avatar+'" alt="аватарка" class="feedback__author-avatar" width="16" height="20"></div><div class="feedback__answer-wrapper"><div class="desc-wrap"><p class="feedback__answer-description">ответ на отзыв @<span class="feedback__answer-author">' + listObjects[i].name + '</span></p><div class="btn-collapse"><img src="img/arrow-down.png" alt="image"></div></div><textarea class="feedback__answer-textarea" type="textarea" rows="8" cols="45" placeholder="Текст сообщения..." required></textarea><div class="feedback__answer-checkbox"><label >Согласен с правилами публикации на сайте <input  name="cb" type="checkbox" required><span class="check"></span></label></div><input class="feedback__answer-sellBtn pink__btn" type="submit" value="Отправить комментарий"></div></div></div></div></div></div>';
      }
      if (j == 0) {
        // $('.feedback__show-btn').addClass('hidden');
      }
      $('.feedback__inner').append(strHTML);

      $('.feedback__show-btn').off('click');
      $('.feedback__show-btn').on('click', function () {
        
        if ($(this).hasClass('feedback__show-btn--active')) {
          $(this).children('.text').text('Показать все отзывы');
          $(this).removeClass('feedback__show-btn--active');
          countVisible = 3;
          $('.feedback__wrap-inner').scrollTop(0);
          $('.feedback__wrap-inner').removeClass('feedback__wrap-inner--active');
          
        } else {
          $(this).children('.text').text('Скрыть отзывы');
          $(this).addClass('feedback__show-btn--active');
          countVisible = listObjects.length;
          $('.feedback__wrap-inner').addClass('feedback__wrap-inner--active');
        }
        
        updateFeedback(listObjects);
        // $(this).addClass('hidden');
      });
      $('.feedback__answer-btn').off('click');
      $('.feedback__answer-btn').on('click', function () {
        if (!$(this).siblings('.feedback__answer-box').hasClass('hidden')) {
          $(this).siblings('.feedback__answer-box').addClass('hidden');
        } else {
          $(this).siblings('.feedback__answer-box').removeClass('hidden');
        }
        $(this).closest('.feedback__box').siblings('.feedback__box').find('.feedback__answer-box').addClass('hidden');
        // $(this).closest('.feedback__box').find('.feedback__answer-box').toggleClass('hidden');
        
        // console.log(parseInt($(this).position().top) + '- ' + parseInt($(this).parent().position().top) + '=' + parseInt($(this).position().top) - parseInt($(this).parent().position().top));
        let x1 = parseInt($(this).position().top);
        let x2 = parseInt($('.feedback__inner').position().top);
        // let x3 = parseInt($('.feedback__wrap-inner').position().top);
        let currentPosition = x1 - x2;
        // console.log('x1 ' + x1);
        // console.log('x2 ' + x2);
        // console.log('x3 ' + x3);
        
        
        
        if ($(window).width() > 768) {
          currentPosition = x1 - x2 -100;
          $('.feedback__wrap-inner').scrollTop(currentPosition);
        } 

      });
      $('.desc-wrap .btn-collapse').off('click');
      $('.desc-wrap .btn-collapse').on('click', function () {
        $(this).closest('.feedback__box').find('.feedback__answer-box').addClass('hidden');
      });
      $('.feedback__btn--unfurl').off('click');
      $('.feedback__btn--unfurl').on('click', function () {
        // $(this).addClass('hidden');
        if ($(this).children('.text').text() == 'Скрыть отзыв') {
          $(this).children('.text').text('Читать весь отзыв');
          $(this).removeClass('feedback__btn-active');
          $($parent).find('.feedback__text--full').addClass('hidden');
          $($parent).find('.feedback__text').removeClass('hidden');
        } else {
          $(this).children('.text').text('Скрыть отзыв');
          $(this).addClass('feedback__btn-active');
          $parent = $(this).closest('.feedback-content');
          $($parent).find('.feedback__text--full').removeClass('hidden');
          $($parent).find('.feedback__text').addClass('hidden');
        }
        
        

      });

   
    }
    function truncate(input) {
      if (input.length > 5)
         return input.substring(0,lengthChars) + '...';
      else
         return input;
    };
    $('.feedback__toogle-link').on('click', function () {
      $(this).addClass('feedback__toogle-link--active').siblings().removeClass('feedback__toogle-link--active');
      countVisible = 3;
      $('.feedback__show-btn').children('.text').text('Показать все отзывы');
      $('.feedback__show-btn').removeClass('feedback__show-btn--active');
      
      $('.feedback__wrap-inner').scrollTop(0);
      $('.feedback__wrap-inner').removeClass('feedback__wrap-inner--active');
      
      if ($(this).hasClass('feedback__toogle-link--estate')) { 
        updateFeedback(arrFeedbacks);
      } else if ($(this).hasClass('feedback__toogle-link--developer')) {
        
        updateFeedback(arrFeedbacksDeveloper);
      }
      
    });
    $('.feedback__add-btn').on('click', function () {
      $('.modal-feedback').addClass('modal-feedback--active');
      
    });
    $('.modal-feedback .modal__close-btn').on('click', function () {
      $('.modal-feedback').removeClass('modal-feedback--active');
      
    });
  });
})();






/*(function() {

  var estateFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    }
 ];

  var developerFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    }
  ];

  var fillCommentsNode = function (element, commentData) {
    element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
    element.querySelector('.feedback__author').textContent = commentData.name;
    element.querySelector('.feedback__text').textContent = commentData.feedback;
  };

    var currentCommentsArray = estateFeedbacks;
    var commentsCount = 3;

    var fragment = document.createDocumentFragment(); // fragment
    var template = document.querySelector('#feedback-template'); // template
    var commentBox = document.querySelector('.feedback__inner'); // comment box

    var createComment = function () {

      for(var i = 0; i < commentsCount; i++) {
        var currentComment = template.content.cloneNode(true); // clone template
        var commentData = currentCommentsArray[i]; // current comments

        fillCommentsNode(currentComment, commentData); // run fill func

        fragment.appendChild(currentComment);
      };
        commentBox.appendChild(fragment);
    };

    // сворачивание комментариев

    var showFullComment = function () {

      $('.feedback__box').each(function() {
        var size = 250,
        feedbackContent = $(this).find('.feedback__text'),
        feedbackText = feedbackContent.html(),
        feedbackTextLength = feedbackText.length;

        if (feedbackText.length > size) {
          feedbackContent.html(feedbackText.slice(0, size) + '...');


          $(this).find('.feedback__btn--unfurl').removeClass('hidden');

          $(this).find('.feedback__btn').on('click', function () {
            if($(this).hasClass('feedback__btn--unfurl')) {
              feedbackContent.html(feedbackText.slice(0, feedbackTextLength));

              $(this).removeClass('feedback__btn--unfurl');
              $(this).addClass('feedback__btn--furl');
              $(this).text('свернуть');
            } else {
              feedbackContent.html(feedbackText.slice(0, size));
              $(this).removeClass('feedback__btn--furl');
              $(this).addClass('feedback__btn--unfurl');
              $(this).text('читать весь отзыв');
            }
          })
        }
      });
      addAnswer();
    }

    // выбор списка комментариев

    var toggleLinks = document.querySelectorAll('.feedback__toogle-link');
    var activeLink = document.querySelector('.feedback__toogle-link--active');

    for (var i = 0; i < toggleLinks.length; i++) {
      toggleLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        activeLink.classList.remove('feedback__toogle-link--active');
        this.classList.add('feedback__toogle-link--active');
        activeLink = this;


        if (activeLink.classList.contains('feedback__toogle-link--estate')) {
          deleteComments();  // удаляю все отзывы
          currentCommentsArray = estateFeedbacks; // меняю массив с отзывами
          createComment(); // запускаю ф-ю с показом отзывов
          showFullComment();
        } else {
          deleteComments();
          currentCommentsArray = developerFeedbacks;
          createComment();
          showFullComment();
        }
      });
    }

    var deleteComments = function () { // ф-я удаления нод
     var currentComments = document.querySelectorAll('.feedback__box');
     for (var i = 0; i < currentComments.length; i++) {
          commentBox.removeChild(currentComments[i]);
        }
      };

    // показ всех комментариев

    $('.feedback__show-btn').on('click', function () {
      $(this).hide();
      $('.feedback__modalBtn').removeClass('hidden');
      $('.feedback').addClass('feedback--modal');
      $('feedback__modal').addClass('feedback--modal-wrapper');
      $('.feedback__title').hide();
      commentsCount = currentCommentsArray.length;
      createComment();
      showFullComment();
    });

    $('.feedback__modalBtn').on('click', function () {
      $(this).addClass('hidden');
      $('.feedback__show-btn').show();
      $('.feedback').removeClass('feedback--modal');
      $('.feedback__modal').removeClass('feedback--modal-wrapper');
      $('.feedback__title').show();
      commentsCount = 3;
      deleteComments();
      createComment();
      showFullComment();
    });

    // ответ на отзыв

    var addAnswer = function () {
      $('.feedback__answer-btn').on('click', function () {
        $(this).parent().children('.feedback__answer-box').toggleClass('hidden');
      })
    };

    var addComment = function () {
      $('.feedback__add-btn').on('click', function () {
        $('.feedback__modal').removeClass('modal--closed');
        $('.feedback__modal-closeBtn').on('click',function () {
          $('.feedback__modal').addClass('modal--closed');
        });
      });
    };

    addComment();
    createComment();
    showFullComment();
}());*/

/*(function () {

  var estateFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    }
 ];

  var developerFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    }
  ];

  var fillCommentsNode = function (element, commentData) {
    element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
    element.querySelector('.feedback__author').textContent = commentData.name;
    element.querySelector('.feedback__text').textContent = commentData.feedback;
  };

    var currentCommentsArray = estateFeedbacks;

    var fragment = document.createDocumentFragment(); // fragment
    var template = document.querySelector('#feedback-template'); // template
    var commentBox = document.querySelector('.feedback__inner'); // comment box

    var createComment = function () {

      for(var i = 0; i < currentCommentsArray.length; i++) {
        var currentComment = template.content.cloneNode(true); // clone template
        var commentData = currentCommentsArray[i]; // current comments

        fillCommentsNode(currentComment, commentData); // run fill func

        fragment.appendChild(currentComment);
      };
        commentBox.appendChild(fragment);
    };

    createComment();

}());*/


/*(function() {

  var estateFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    }
 ];

  var developerFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    }
  ];

  var fillCommentsNode = function (element, commentData) {
    element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
    element.querySelector('.feedback__author').textContent = commentData.name;
    element.querySelector('.feedback__text').textContent = commentData.feedback;
  };

    var currentCommentsArray = estateFeedbacks;
    //var commentsCount = 3;

    var fragment = document.createDocumentFragment(); // fragment
    var template = document.querySelector('#feedback-template'); // template
    var commentBox = document.querySelector('.feedback__inner'); // comment box

    var createComment = function () {

      for(var i = 0; i < currentCommentsArray.length; i++) {
        var currentComment = template.content.cloneNode(true); // clone template
        var commentData = currentCommentsArray[i]; // current comments

        fillCommentsNode(currentComment, commentData); // run fill func

        fragment.appendChild(currentComment);
      };
        commentBox.appendChild(fragment);
    };

    // сворачивание комментариев

    var showFullComment = function () {

      $('.feedback__box').each(function() {
        var size = 250,
        feedbackContent = $(this).find('.feedback__text'),
        feedbackText = feedbackContent.html(),
        feedbackTextLength = feedbackText.length;
        if (feedbackText.length > size) {
          feedbackContent.html(feedbackText.slice(0, size) + '...');


          $(this).find('.feedback__btn--unfurl').removeClass('hidden');

          $(this).find('.feedback__btn').on('click', function () {
            if($(this).hasClass('feedback__btn--unfurl')) {
              feedbackContent.html(feedbackText.slice(0, feedbackTextLength));

              $(this).removeClass('feedback__btn--unfurl');
              $(this).addClass('feedback__btn--furl');
              $(this).text('свернуть');
            } else {
              feedbackContent.html(feedbackText.slice(0, size));
              $(this).removeClass('feedback__btn--furl');
              $(this).addClass('feedback__btn--unfurl');
              $(this).text('читать весь отзыв');
            }
          })
        }
      });
      addAnswer();
    }

    // выбор списка комментариев

    var toggleLinks = document.querySelectorAll('.feedback__toogle-link');
    var activeLink = document.querySelector('.feedback__toogle-link--active');

    for (var i = 0; i < toggleLinks.length; i++) {
      toggleLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        activeLink.classList.remove('feedback__toogle-link--active');
        this.classList.add('feedback__toogle-link--active');
        activeLink = this;


        if (activeLink.classList.contains('feedback__toogle-link--estate')) {
          deleteComments();  // удаляю все отзывы
          currentCommentsArray = estateFeedbacks; // меняю массив с отзывами
          createComment(); // запускаю ф-ю с показом отзывов
          showFullComment();
        } else {
          deleteComments();
          currentCommentsArray = developerFeedbacks;
          createComment();
          showFullComment();
        }
      });
    }

    var deleteComments = function () { // ф-я удаления нод
     var currentComments = document.querySelectorAll('.feedback__box');
     for (var i = 0; i < currentComments.length; i++) {
          commentBox.removeChild(currentComments[i]);
        }
      };

    // показ всех комментариев

    $('.feedback__show-btn').on('click', function () {
      $(this).hide();
      $('.feedback__modalBtn').removeClass('hidden');
      $('.feedback').addClass('feedback--modal');
      $('feedback__modal').addClass('feedback--modal-wrapper');
      $('.feedback__title').hide();
      //commentsCount = currentCommentsArray.length;
      //createComment();
      showFullComment();
    });

    $('.feedback__modalBtn').on('click', function () {
      $(this).addClass('hidden');
      $('.feedback__show-btn').show();
      $('.feedback').removeClass('feedback--modal');
      $('.feedback__modal').removeClass('feedback--modal-wrapper');
      $('.feedback__title').show();
      //commentsCount = 3;
      //deleteComments();
      //createComment();
      hideComments();
      showFullComment();
    });

    // ответ на отзыв

    var addAnswer = function () {
      $('.feedback__answer-btn').on('click', function () {
        $(this).parent().children('.feedback__answer-box').toggleClass('hidden');
      })
    };

    var addComment = function () {
      $('.feedback__add-btn').on('click', function () {
        $('.feedback__modal').removeClass('modal--closed');
        $('.feedback__modal-closeBtn').on('click',function () {
          $('.feedback__modal').addClass('modal--closed');
        });
      });
    };



    addComment();
    createComment();
    showFullComment();

    console.log(currentCommentsArray.length);

    var comment = document.querySelectorAll('.feedback__box');
    var visibleComments = 3;

    var hideComments = function () {
      for (var i = visibleComments; i < currentCommentsArray.length; i++) {
        comment[i].classList.add('hidden');
      }
    };

    var showComments = function () {

    }

    hideComments();
    showComments();
}());*/

// (function() {

//   var estateFeedbacks = [ // temp array
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Самойлова Виктория',
//       feedback: 'хороший комплекс'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Петрова Ирина',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Просто кто-то',
//       feedback: 'инфраструктура никакая'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Юрий Михайлович',
//       feedback: 'нет парковочных мест'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Семин Игорь',
//       feedback: 'на троечку'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Егорова Евгения',
//       feedback: 'Все круто, буду тут жить'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Самойлова Виктория',
//       feedback: 'хороший комплекс'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Петрова Ирина',
//       feedback: 'на троечку'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Просто кто-то',
//       feedback: 'инфраструктура никакая'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Юрий Михайлович',
//       feedback: 'нет парковочных мест'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Семин Игорь',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Егорова Евгения',
//       feedback: 'Все круто, буду тут жить'
//     }
//  ];

//   var developerFeedbacks = [ // temp array
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Семин Игорь',
//       feedback: 'хороший комплекс'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Петрова Ирина',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Юрий Михайлович',
//       feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Просто кто-то',
//       feedback: 'хороший застройщик'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Самойлова Виктория',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Егорова Евгения',
//       feedback: 'качественно и быстро'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Самойлова Виктория',
//       feedback: 'хороший комплекс'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Петрова Ирина',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Просто кто-то',
//       feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Юрий Михайлович',
//       feedback: 'хороший застройщик'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Семин Игорь',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Егорова Евгения',
//       feedback: 'качественно и быстро'
//     }
//   ];

//   var fillCommentsNode = function (element, commentData) {
//     element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
//     element.querySelector('.feedback__author').textContent = commentData.name;
//     element.querySelector('.feedback__text').textContent = commentData.feedback;
//   };

//     var currentCommentsArray = estateFeedbacks;

//     var fragment = document.createDocumentFragment(); // fragment
//     var template = document.querySelector('#feedback-template'); // template
//     var commentBox = document.querySelector('.feedback__inner'); // comment box

//     var createComment = function () {

//       for(var i = 0; i < currentCommentsArray.length; i++) {
//         var currentComment = template.content.cloneNode(true); // clone template
//         var commentData = currentCommentsArray[i]; // current comments

//         fillCommentsNode(currentComment, commentData); // run fill func

//         fragment.appendChild(currentComment);
//       };
//         commentBox.appendChild(fragment);
//     };

//     createComment();
//   }());
