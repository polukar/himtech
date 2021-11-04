import wNumb from 'wnumb';
import noUiSlider from 'nouislider';

const range = () => {

  var range = document.querySelector('#range');

  if (range) {
    var rangeBefore = document.querySelector('#range-before');
    var rangeAfter = document.querySelector('#range-after');
    noUiSlider.create(range, {
      start: [0, 10000],
      connect: true,
      range: {
        'min': 0,
        'max': 10000,
      },
      format: wNumb({
        decimals: 0
      }),
    });
    range.noUiSlider.on('update', function (values, handle) {
      if (handle) {
        rangeAfter.value = values[handle] + '₽';
      } else {
        rangeBefore.value = values[handle] + '₽';
      }
    });
  }

  var rangeMobile = document.querySelector('#range-mobile');

  if (rangeMobile) {
    var rangeBeforeMobile = document.querySelector('#range-before-mobile');
    var rangeAfterMobile = document.querySelector('#range-after-mobile');
    noUiSlider.create(rangeMobile, {
      start: [0, 10000],
      connect: true,
      range: {
        'min': 0,
        'max': 10000,
      },
      format: wNumb({
        decimals: 0
      }),
    });
    rangeMobile.noUiSlider.on('update', function (values, handle) {
      if (handle) {
        rangeAfterMobile.value = values[handle] + '₽';
      } else {
        rangeBeforeMobile.value = values[handle] + '₽';
      }
    });
  }
}


export { range };