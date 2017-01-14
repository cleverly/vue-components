<template>
    <div id="app">
        <header>
            <div class="nav--fixed">
                <nav class="nav">
                    <ripple>
                        <router-link class="brand" :to="{name: 'Home'}" exact>Vue Components</router-link>
                    </ripple>
                    <ripple v-for="navItem in navItems()">
                        <router-link :to="{name: navItem.name}" exact>{{navItem.label}}</router-link>
                    </ripple>
                        <dropdown v-for="dropdown in subNavItems().dropdowns" :close-after="1000">
                            <ripple>
                                <router-link tag="div" :to="{path: subNavItems().dropdownPaths[dropdown]}">
                                    {{dropdown}}
                                </router-link>
                            </ripple>
                            <div slot="menu">
                                <router-link v-for="subNavItem in subNavItems()[dropdown]" :to="{name: subNavItem.name}" exact>{{subNavItem.label}}</router-link>
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

    // TODO: code view component
    // TODO: date picker component
    // TODO: slider component
    // TODO: spinner component

    export default {
        name: 'app',
        data: () => ({
            navItems() {
                let navItems = [];
                routes.forEach((route) => {
                    if (route.nav) {
                        navItems.push(route);
                    }
                });
                return navItems;
            },
            subNavItems() {
                let subNavItems = {};
                routes.forEach((route) => {
                    if (route.subNav) {
                        if (subNavItems[route.subNav.dropdown]) {
                            subNavItems[route.subNav.dropdown].push(route);
                        } else {
                            subNavItems[route.subNav.dropdown] = [route];
                        }
                    }
                });
                subNavItems.dropdowns = Object.keys(subNavItems);
                subNavItems.dropdownPaths = {};
                subNavItems.dropdowns.forEach((dropdown) => {
                    let path = `/${dropdown.toLowerCase()}`;
                    subNavItems.dropdownPaths[dropdown] = path;
                });
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
