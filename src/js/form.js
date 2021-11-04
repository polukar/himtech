import Inputmask from 'inputmask';
import AirDatepicker from 'air-datepicker';
import $ from 'jquery';

const form = () => {
  const tel = document.querySelectorAll('.-js-mask');
  Inputmask({
    mask: '+7 (9 9 9) 9 9 9 - 9 9 - 9 9',
    showMaskOnHover: false,
  }).mask(tel);

  if ($(window).width() > 981) {
    new AirDatepicker('#calendar', {
      range: false,
      autoClose: true
    })
  } else {
    new AirDatepicker('#calendar-mobile', {
      range: false,
      autoClose: true
    })
  }

  $('.radio').on('click', function () {
    if ($(this).find('input').is(':checked')) {
      $('.radios__inner').fadeOut(0)
      $(this).next().fadeIn(0);
    } else {
      $(this).next().fadeOut(0);
    }
  })



};

export { form };