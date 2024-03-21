import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: null },
  { path: '/home', component: null },
  { path: '/filmes', component: null },
  { path: '/series', component: null },
  { path: '/favoritos', component: null },
  { path: '/:pathMatch(.*)*', component: null },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
