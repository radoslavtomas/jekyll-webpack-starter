import './app.scss';

import 'alpinejs';

import Turbolinks from 'turbolinks';
Turbolinks.start({
    flush: false
});

import './js/test';

const log = (msg) => {
    console.log(msg);
}

log('hello from main js file');