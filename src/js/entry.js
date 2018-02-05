import Vue from 'vue';
import VueRouter from 'vue-router';
import VmapApp from '../components/App';
import routes from './routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    el: '#app',
    components: { VmapApp },
    template: '<vmap-app />',
    router: new VueRouter({
        mode: 'history',
        routes,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) { return savedPosition; }
            return { x: 0, y: 0 };
        }
    })
});
