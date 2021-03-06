$(function() {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="" />',
    asNavFor: ".slider-dots"
  });

  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider"
  });

  $(".serf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="" />'
  });
});
