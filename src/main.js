// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import settings from '../settings.json';
if (settings) {
    if (!settings.productionUrl) {
        throw new TypeError('productionUrl is a required setting.');
    } else {
        settings.env = window.location.origin === settings.productionUrl ? 'production' : 'development';
        window.settings = settings;
    }
} else {
    console.warn('Please put a settings.json in the root of this project.');
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
});
