import Vue from 'vue';
import router from './router';
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import App from './views/App';

const app = new Vue({
    el: '#root',
    render: h=> h(App),
    router
})