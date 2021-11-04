import Swiper from 'swiper';
import $ from 'jquery';

const slider = () => {
  var slider = new Swiper('.n-catalog__slider', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 12,
  });

  $('.slider-next').on('click', function () {
    slider.slideNext();
  });
  $('.slider-prev').on('click', function () {
    slider.slidePrev();
  });

}

export { slider };