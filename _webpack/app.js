import './app.scss';

import 'alpinejs';

import Turbolinks from 'turbolinks';
Turbolinks.start();

import './js/test';

const log = (msg) => {
    console.log(msg);
}

log('hello from main js file');