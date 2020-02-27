
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import routes from '*/routes';
import Vue from 'vue'
import Framework7 from 'framework7/framework7-lite.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import App from '@/App.vue';
import store from './store';

Framework7.use(Framework7Vue);
Vue.use(Framework7Vue);

const app = new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
