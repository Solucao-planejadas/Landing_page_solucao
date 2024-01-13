import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import { vuetify } from "@/plugins";
import { router } from "@/router";
import App from "./App.vue";
import VueTheMask from "vue-the-mask";
import store from "@/store";
import axios from "axios";
import CKEditor from '@ckeditor/ckeditor5-vue';

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "https://api-solucoes-solucao-planejada.vercel.app";

createApp(App)
  .use(store)
  .use(vuetify)
  .use(VueTheMask)
  .use(router)
  .use(CKEditor)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";

