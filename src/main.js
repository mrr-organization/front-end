import { createApp } from 'vue';
import { FontAwesomeIcon } from './plugins/font-awesome'

import App from './App.vue';
import router from './router';
import store from './store';

import './index.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

const vue = createApp(App)

// import GAuth from 'vue3-google-oauth2';
// const gAuthOptions = { clientId: '123203089962-pb0mmu5jokm94thbug0q6e0e51gkvt33.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false }
// vue.use(GAuth, gAuthOptions)
vue.use(Vue3Lottie);
vue.use(store)
vue.use(router)

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

vue.use(VueChartkick)
vue.use(VueSweetalert2)

vue.component("font-awesome-icon", FontAwesomeIcon)

vue.mount('#app')

