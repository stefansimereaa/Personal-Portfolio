import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'flag-icon-css/css/flag-icon.css';
import router from './router'; 
import store from './js/store';

// Imported FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Icons Imported
import { faLocationDot as faLocationDotsSolid } from "@fortawesome/free-solid-svg-icons"; 

library.add(faLocationDotsSolid);


createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
