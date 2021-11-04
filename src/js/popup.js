import $ from 'jquery';

const popup = () => {
  $('.-js-menu').on('click', function () {
    $('.menu.--mobile').fadeIn();
  });

  $('.-js-menu-close').on('click', function () {
    $('.menu.--mobile').fadeOut();
  });

  $('.-js-open-messages').on('click', function () {
    $('.mobile-popup.--messages').fadeIn();
  });

  $('.-js-open-history').on('click', function () {
    $('.mobile-popup.--history').fadeIn();
  });

  $('.-js-close-mobilepopup').on('click', function () {
    $('.mobile-popup').fadeOut();
  });

  $('.-js-open-adduser').on('click', function () {
    $('.popup.--adduser').fadeIn();
  });

  $('.-js-open-addbuy').on('click', function () {
    $('.popup.--addbuy').fadeIn();
  });
  $('.-js-open-docs').on('click', function (e) {
    e.preventDefault();
    $('.popup.--docs').fadeIn();
  });
  $('.-js-adduser-admin').on('click', function (e) {
    e.preventDefault();
    $('.popup.--adduser-admin').fadeIn();
  });

  $('.-js-close-popup').on('click', function () {
    $('.popup').fadeOut();
  });

}

export { popup };