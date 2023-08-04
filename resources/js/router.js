import VueRouter from 'vue-router';
import cami from '../vue/cami.vue'
import Vue from 'vue';

Vue.use(VueRouter);


const routes = [
    {
        path: '/cami',
        name: 'cami',
        component: cami,
        props: {}
    },
    {
        path: '/*',
        redirect: { name: 'cami' }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router;