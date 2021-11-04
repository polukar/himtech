import $ from 'jquery';

const admin = () => {
  $('.region .profile-menu__link').on('click', function (e) {
    e.preventDefault();
    if ($(window).width() < 981) {
      $(this).addClass('active').siblings().removeClass('active');
      $('.region__right').addClass('active');
    }
  });

  $('.region__right .back').on('click', function () {
    if ($(window).width() < 981) {
      $('.region__right').removeClass('active');
    }
  })
}

export default admin;