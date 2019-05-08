import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.afterEach((toRoute, fromRoute) => {
    const nextTitle = routes.find(route => route.name === toRoute.name).meta.title;
    window.document.title = nextTitle;
});
