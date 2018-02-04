import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/App';
import routes from './routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router: new VueRouter({
        mode: 'history',
        routes,
        scrollBehavior(to, from, savedPosition) {
            return { x: 0, y: 0 };
        }
    })
});
