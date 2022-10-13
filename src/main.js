import {
  createApp
} from 'vue';

import {
  FontAwesomeIcon
} from './plugins/font-awesome'

import App from './App.vue';
import router from './router';
import store from './store';

import './index.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import vue3GoogleLogin from 'vue3-google-login';

const vue = createApp(App)

vue.use(VueSweetalert2)
vue.use(store)
vue.use(router)
vue.use(vue3GoogleLogin, {
  clientId: '572136461344-oadoj9hm1t5e4f048d650ek322n1q9al.apps.googleusercontent.com'
})

vue.component("font-awesome-icon", FontAwesomeIcon)

vue.mount('#app')

