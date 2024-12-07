import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ArcoVue from "@arco-design/web-vue";

const app = createApp(App)

app.use(router)
app.use(ArcoVue);

app.mount('#app')

import "vue-data-ui/style.css"
import '@arco-design/web-vue/dist/arco.css';
