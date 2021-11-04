import $ from 'jquery';

const mobile = () => {
  $('.close').on('click', function () {
    $(this).parent().removeClass('active');
    $('.burger').removeClass('active');
  });

  $('.burger').on('click', function () {
    $('.burger').addClass('active');
    $('.mobile-menu').addClass('active');
  })

  $('.mobile-menu__tabs-item').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.mobile-menu__tab').removeClass('active');
      $('.mobile-menu__tab:eq(' + index + ')').addClass('active');
    }
  })
}

export { mobile };