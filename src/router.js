import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home';
import FormComponents from './pages/FormComponents';
import EffectComponents from './pages/EffectComponents';
import ContentComponents from './pages/ContentComponents';
import ContentDirectives from './pages/ContentDirectives';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        label: 'Home',
        path: '/',
        component: Home,
        nav: true,
    },
    {
        name: 'FormComponents',
        label: 'Forms',
        path: '/components/forms',
        component: FormComponents,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'EffectComponents',
        label: 'Effects',
        path: '/components/effects',
        component: EffectComponents,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'ContentComponents',
        label: 'Content',
        path: '/components/content',
        component: ContentComponents,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'ContentDirectives',
        label: 'Content',
        path: '/directives/content',
        component: ContentDirectives,
        subNav: {
            dropdown: 'Directives',
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
