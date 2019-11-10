;
(function () {
  $(document).ready(function () {

    $parent = $('.rating__list');
    $ratingAverage = $('.rating__average-value');

    rating = {
      'kids': 6.7,
      'infrastructure': 6.7,
      'district': 6.3,
      'safety': 5,
      'transport': 4.6,
      'house': 3.2,
    };
    // price1.replace(".", ",")
    updateRating(rating);

    function updateRating(rating) {

      let strHTML = '<li class="rating__list-item" data-aos="zoom-in"><div class="rating__list-figure rating__list-figure--kids"><svg width="46" height="33"><use xlink:href="#icon-balancer"></use></svg><span class="rating__value rating__value--kids">' + String(rating['kids']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-pink"></div></div>Для детей</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="200"><div class="rating__list-figure rating__list-figure--infrastructure"><svg width="40" height="40"><use xlink:href="#icon-infrastructure"></use></svg><span class="rating__value rating__value--infrastructure">' + String(rating['infrastructure']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-orange" data-aos-delay="200"></div></div>Инфраструктура</li>';
      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="300"><div class="rating__list-figure rating__list-figure--district"><svg width="41" height="41"><use xlink:href="#icon-compass"></use></svg><span class="rating__value rating__value--district">' + String(rating['district']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-lightblue" data-aos-delay="300"></div></div>Район</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="400"><div class="rating__list-figure rating__list-figure--safety"><svg width="28" height="37"><use xlink:href="#icon-lock"></use></svg><span class="rating__value rating__value--safety">' + String(rating['safety']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-green" data-aos-delay="400"></div></div>Безопасность</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="500"><div class="rating__list-figure rating__list-figure--transport"><svg width="44" height="29"><use xlink:href="#icon-bus"></use></svg><span class="rating__value rating__value--transport">' + String(rating['transport']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-blue" data-aos-delay="500"></div></div>Транспорт</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="600"><div class="rating__list-figure rating__list-figure--house"><svg width="39" height="39"><use xlink:href="#icon-hotel"></use></svg><span class="rating__value rating__value--house">' + String(rating['house']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-violet" data-aos-delay="600"></div></div>Квартира/дом</li>';

      $parent.html(strHTML);
      $ratingAverage.text(((rating['kids'] + rating['infrastructure'] + rating['district'] + rating['safety'] + rating['transport'] + rating['house'])/6).toFixed(1).replace(".", ","));
    }


  });
})();