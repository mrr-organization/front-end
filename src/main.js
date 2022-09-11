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
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const vue = createApp(App)

vue.use(VueSweetalert2)
vue.use(store)
vue.use(router)
vue.component("font-awesome-icon", FontAwesomeIcon)
vue.mount('#app')
