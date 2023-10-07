$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: $('.header-slick-prev-btn'),
    nextArrow: $('.header-slick-next-btn'),
    asNavFor: '.slider-dots',
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    responsive: [
      {
        breakpoint: 820,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,

    autoplaySpeed: 4000,
    prevArrow: $('.surf-slick-prev-btn'),
    nextArrow: $('.surf-slick-next-btn'),
    asNavFor: '.slider-map',
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  });

  $('.js-travel-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: $('.travel-slick-prev-btn'),
    nextArrow: $('.travel-slick-next-btn'),
  });

  $('.js-sleep-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: $('.sleep-slick-prev-btn'),
    nextArrow: $('.sleep-slick-next-btn'),
  });

  $('.js-shop-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: $('.shop-slick-prev-btn'),
    nextArrow: $('.shop-slick-next-btn'),
  });

  $('.js-sleep-slider').on('beforeChange', function () {
    deleteEventBtns();
  });

  $('.js-sleep-slider').on('afterChange', function () {
    addEventSliderBtns();
  });
});

$(function () {
  addEventSliderBtns();
});

const sleepSlider = $('.js-sleep-slider');

function deleteEventBtns() {
  const AllBtns = $('.calc-btns');
  AllBtns.off('click', eventBtns);
}

function addEventSliderBtns() {
  const currentSlider = $('.slick-current', sleepSlider);
  const currentBtns = $('.calc-btns', currentSlider);
  currentBtns.on('click', eventBtns);
}

function eventBtns({ target, currentTarget }) {
  const currentSlider = $('.slick-current', sleepSlider);
  const textBlock = $(`#${currentTarget.dataset.type}`, currentSlider);
  let num = parseInt(textBlock.text());
  target.closest('.calc-btn')?.dataset.type === 'plus' ? num++ : num > 0 ? num-- : num;
  textBlock.text(`${num} ${currentTarget.dataset.type}`);
}

$(function () {
  const deskContentBtns = $('.js-desk-btns');

  deskContentBtns.on("click", function(e){
    if(e.target.closest(".js-desk-btn")){
      e.target.closest(".js-desk-info").classList.toggle("active")
    };
  })
});
