import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home';
import FormComponents from './pages/FormComponents';
import RippleComponent from './pages/RippleComponent';
import ModalComponent from './pages/ModalComponent';
import AccordionComponent from './pages/AccordionComponent';
import DropDownComponent from './pages/DropDownComponent';
import ErrorMessageComponent from './pages/ErrorMessageComponent';
import GoogleMapComponent from './pages/GoogleMapComponent';
import ReadMoreComponent from './pages/ReadMoreComponent';
import ScrollToTopComponent from './pages/ScrollToTopComponent';
import SnowComponent from './pages/SnowComponent';
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
        name: 'Ripple',
        path: '/ripple',
        component: RippleComponent,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Modal',
        path: '/modal',
        component: ModalComponent,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Accordion',
        path: '/accordion',
        component: AccordionComponent,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Drop Down',
        path: '/dropdown',
        component: DropDownComponent,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Error Message',
        path: '/error-message',
        component: ErrorMessageComponent,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Google Map',
        path: '/google-map',
        component: GoogleMapComponent,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Read More',
        path: '/read-more',
        component: ReadMoreComponent,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Scroll To Top',
        path: '/scroll-to-top',
        component: ScrollToTopComponent,
        subNav: {
            dropdown: 'Components',
        },
    },
    {
        name: 'Snow',
        path: '/snow',
        component: SnowComponent,
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
