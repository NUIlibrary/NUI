import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import nui from './plugins/nui'

createApp(App).use(store).use(router).use(nui).mount('#app')