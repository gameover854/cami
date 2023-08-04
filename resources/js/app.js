require('./bootstrap');

import Vue from 'vue';
import parent from '../vue/parent.vue'
import router from './router';
import moment from 'moment/moment';
new Vue({
    el: '#parent',
    components: { parent },
    router,
    moment
})






