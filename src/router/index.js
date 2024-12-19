// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import Testimoni from '@/views/Testimoni.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tentang-kami',
    name: 'About',
    component: About,
  },
  {
    path: '/kontak-kami',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/pelayanan',
    name: 'Services',
    component: Services,
  },
  {
    path: '/testimoni',
    name: 'Testimoni',
    component: Testimoni,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;