import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/translate/:uuid',
    name: 'Translate',
    props: true,
    component: () => import('../views/Translate.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
