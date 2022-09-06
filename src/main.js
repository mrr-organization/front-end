import {
    createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FontAwesomeIcon
} from './plugins/font-awesome'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(VueSweetalert2).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')