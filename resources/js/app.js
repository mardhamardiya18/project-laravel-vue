
require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/veutify'
import axios from './plugins/axios'
import store from "./store";

new Vue({
    el: '#app',
    router,
    vuetify,
    axios,
    store,
    render: h => h(App)
});
