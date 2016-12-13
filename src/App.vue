<template>
    <div id="app">
        <header>
            <div class="nav--fixed">
                <nav class="nav">
                    <ripple>
                        <router-link class="brand" :to="{name: 'Home'}" exact>Vue Components</router-link>
                    </ripple>
                    <ripple v-for="navItem in navItems()">
                        <router-link :to="{name: navItem}" exact>{{navItem}}</router-link>
                    </ripple>
                        <dropdown v-for="dropdown in subNavItems().dropdowns" :close-after="1000">
                            <ripple>
                                <div>
                                    {{dropdown}}
                                </div>
                            </ripple>
                            <div slot="menu">
                                <router-link v-for="subNavItem in subNavItems()[dropdown]" :to="{name: subNavItem}" exact>{{subNavItem}}</router-link>
                            </div>
                        </dropdown>
                </nav>
            </div>
        </header>
        <main>
            <transition name="route-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
        <footer>
            Vue Components - Made with <img src="~assets/img/heart.svg"> @ <a href="https://clever.ly" target="_blank">Clever.ly</a>
        </footer>
        <scroll-to-top></scroll-to-top>
        <snow />
    </div>
</template>
<script>
    import { routes } from './router';
    import Ripple from 'components/Ripple';
    import Dropdown from 'components/Dropdown';
    import ScrollToTop from 'components/ScrollToTop';
    import Snow from 'components/Snow';

    // TODO: Code view
    // TODO: date picker
    // TODO: slider
    // TODO: spinner
    // TODO: tooltip
    // TODO: tagcloud
    export default {
        name: 'app',
        data: () => ({
            navItems() {
                let navItems = [];
                routes.forEach((route) => {
                    if (route.nav) {
                        navItems.push(route.name);
                    }
                });
                return navItems;
            },
            subNavItems() {
                let subNavItems = {};
                routes.forEach((route) => {
                    if (route.subNav) {
                        if (subNavItems[route.subNav.dropdown]) {
                            subNavItems[route.subNav.dropdown].push(route.name);
                        } else {
                            subNavItems[route.subNav.dropdown] = [route.name];
                        }
                    }
                });
                subNavItems.dropdowns = Object.keys(subNavItems);
                return subNavItems;
            },
        }),
        components: {
            Ripple,
            Dropdown,
            ScrollToTop,
            Snow,
        },
    };
</script>

<style lang="scss">
    @import '~scss/app';
    .route-fade-enter-active, .route-fade-leave-active {
        transition: transform .5s, opacity .5s;
        transform-origin: bottom center;
    }
    .route-fade-enter,
    .route-fade-leave-active {
        opacity: 0;
    }
</style>
