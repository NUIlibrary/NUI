import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import nui from './plugins/nui';
import globalComponents from './plugins/globalComponents';

import 'highlight.js/styles/atom-one-dark.css';

createApp(App)
  .use(store)
  .use(router)
  .use(nui)
  .use(globalComponents)
  .mount('#app');
