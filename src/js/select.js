import $ from 'jquery';

const select = () => {
  $('.select__main').on('click', function () {
    $('.select__main').removeClass('active')
    $('.select__drop').fadeOut();
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
      $(this).siblings('.select__drop').fadeIn();
    } else {
      $(this).removeClass('active')
      $(this).siblings('.select__drop').fadeOut();
    }
  })

  $('.select__item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var text = $(this).find('span').text();
    $(this).parents('.select').find('.select__main').removeClass('active');
    $(this).parents('.select').find('.select__main').find('input').val(text)
    $(this).parents('.select__drop').fadeOut();
  })

  $('.select__item-content').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var text = $(this).html();
    $(this).parents('.select').find('.select__main').removeClass('active');
    $(this).parents('.select').find('.select__main').empty().html(text);
    $(this).parents('.select__drop').fadeOut();
  })


  $(document).on('click', function (e) {
    var select = $('.select');
    if (!select.is(e.target) && select.has(e.target).length === 0) {
      $('.select__drop').fadeOut();
      $('.select__main').removeClass('active');
    }
  });


  $('.clear__filter').on('click', function (e) {
    $('.select__main').each(function () {
      $(this).find('input').val('');
    });
    $('.select__item').removeClass('active');
  })
}


export { select };