import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectDetail from '../views/ProjectDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { left: 0, top: 0 };
  },
});

export default router;
