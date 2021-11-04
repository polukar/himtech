import $ from 'jquery';


const counter = () => {
  const maxValue = 100000;
  const minValue = 1;

  $('.count__plus').on('click', function () {
    const input = $(this).siblings('.count__input').find('input');
    let value = parseInt(input.val());
    if (value <= maxValue) input.val(value + 1);
  });

  $('.count__minus').on('click', function () {
    const input = $(this).siblings('.count__input').find('input');
    let value = parseInt(input.val());
    if (value >= minValue) input.val(value - 1);
  });

  $('.switch').on('click', function () {
    $(this).toggleClass('active');
  })
}


export { counter };