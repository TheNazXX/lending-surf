$(function(){

  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow: $(".header-slick-prev-btn"),
    nextArrow: $(".header-slick-next-btn"),
    asNavFor: ".slider-dots",
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  })
  
});