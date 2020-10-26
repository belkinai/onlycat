import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/common.css';
import './assets/LineIcons.css';
import 'normalize.css';
import { auth } from './firebase';
import VueHeadful from 'vue-headful';

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router);
    app.component('VueHeadful', VueHeadful);
    app.mount('#app');
  }
});
