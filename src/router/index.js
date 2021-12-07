import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import ListPage from '@/pages/ListPage.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/list/:id',
    component: ListPage
  }
];

// eslint-disable-next-line no-unused-vars
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
export default router
