import $ from 'jquery';

const cart = () => {
  $('.n-popular__btns .--pay').on('click', function () {
    $(this).removeClass('active');
    $(this).siblings('.n-popular__added').addClass('active');
    setTimeout(() => {
      $(this).siblings('.n-popular__added').removeClass('active');
      $(this).parents('.n-popular__item').find('.n-popular__select').fadeOut(0)
      $(this).siblings('.n-popular__count').addClass('active');
    }, 1500)
  });

  $('.n-popular__btn-question').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
      $(this).parents('.n-popular__item').find('.n-popular__info').fadeIn(0);
      $(this).parents('.n-popular__item').css({
        'z-index': '200',
      })
    } else {
      $(this).removeClass('active');
      $(this).parents('.n-popular__item').find('.n-popular__info').fadeOut(0);
      $(this).parents('.n-popular__item').css({
        'z-index': '10',
      })
    }
  });

  $('.n-popular .count__close').on('click', function () {
    $(this).parents('.n-popular__count').removeClass('active');
    $(this).parents('.n-popular__item').find('.n-popular__select').fadeIn(0);
    $(this).parents('.n-popular__item').find('.--pay').addClass('active');
  });


  $('.n-catalog-cart__tab-btn').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('.n-catalog-cart__tab:eq(' + index + ')').addClass('active').siblings().removeClass('active');
  });


  $('.n-cart-color').on('mousedown', function () {
    if (!$(this).hasClass('active') && !$(this).hasClass('disabled')) {
      $(this).addClass('active').siblings().removeClass('active');
    }
  });

  $('.n-cart-color .count__close').on('click', function () {
    $('.n-cart-color').removeClass('active');
  });

}

export { cart };