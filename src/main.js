import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/common.css';
import './assets/LineIcons.css';
import 'normalize.css';
import { auth } from './firebase';

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router);
    app.mount('#app');
  }
});
