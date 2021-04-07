import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NUI from '../../nui/src/index'

createApp(App).use(store).use(router).use(NUI).mount('#app')