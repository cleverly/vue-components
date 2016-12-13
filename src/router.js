import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home';
import FormComponents from './pages/FormComponents';
import EffectComponents from './pages/EffectComponents';
import ContentComponents from './pages/ContentComponents';
import TooltipDirective from './pages/TooltipDirective';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        nav: true,
    },
    {
        name: 'Forms',
        path: '/forms',
        component: FormComponents,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Effects',
        path: '/effects',
        component: EffectComponents,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Content',
        path: '/content',
        component: ContentComponents,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Tooltip ',
        path: '/tooltip',
        component: TooltipDirective,
        subNav: {
            dropdown: 'Direcives',
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        let ret = { x: 0, y: 0 };
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            ret = {selector: to.hash};
        }
        return ret;
    },
});

export {router, routes};
