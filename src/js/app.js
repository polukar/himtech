
import { form } from 'form';
// import { accardeon } from 'accardeon';
import { select } from 'select';
import { counter } from 'counter';
// import { mobile } from 'mobile';
// import { cart } from 'cart';
// import { range } from 'range';
import { popup } from 'popup';
import admin from 'admin';
// import { slider } from 'slider';

let app = {
  init() {
    form();
    popup();
    // accardeon();
    // mobile();
    select();
    counter();
    admin();
    // cart();
    // range();
    // slider();
  }
};
app.init();