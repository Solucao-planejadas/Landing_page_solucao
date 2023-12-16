import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import { vuetify } from "@/plugins";
import { router } from "@/router";
import App from "./App.vue";
import VueTheMask from "vue-the-mask";
import store from "@/store";
import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = process.env.VUE_APP_API_URL_SOLUCOES;

createApp(App)
  .use(store)
  .use(vuetify)
  .use(VueTheMask)
  .use(router)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
