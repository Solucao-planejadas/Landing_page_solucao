import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import { vuetify } from '@/plugins'
import { router } from '@/router'
import App from './App.vue'

createApp(App).use(vuetify).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"