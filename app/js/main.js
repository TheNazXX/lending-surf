$(function(){

  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow: $(".header-slick-prev-btn"),
    nextArrow: $(".header-slick-next-btn"),
    asNavFor: ".slider-dots",
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  })

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,

    autoplaySpeed: 4000,
    prevArrow: $(".surf-slick-prev-btn"),
    nextArrow: $(".surf-slick-next-btn"),
    asNavFor: ".slider-map"
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true
  });

  $(".js-travel-slider").slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: $(".travel-slick-prev-btn"),
    nextArrow: $(".travel-slick-next-btn"),
  });

});


