import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import { vuetify } from '@/plugins'
import { router } from '@/router'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import store from "@/store";
import axios from "axios";

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/';


createApp(App).use(store).use(vuetify).use(VueTheMask).use(router).mount('#app')


import "bootstrap/dist/js/bootstrap.js"