import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import TaskPage from '@/pages/TaskPage.vue';

const routes = [
  {
    path: '/all',
    component: Main,
    name: 'Home',
  },
  {
    path: '/list/:id',
    component: TaskPage,
    name: 'TaskPage',
  },
  {
    path: '/:pathMatch(.*)',
    redirect: { name: 'Home' },
  },
];

// eslint-disable-next-line no-unused-vars
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
export default router;
