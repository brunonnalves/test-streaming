import { createRouter, createWebHistory } from 'vue-router';
import Movies from '../pages/Movies/Movies.vue';
import TVShows from '../pages/TVShows/TVShows.vue';

const routes = [
  { path: '/', component: Movies },
  { path: '/home', component: Movies },
  { path: '/filmes', component: Movies },
  { path: '/series', component: TVShows },
  { path: '/favoritos', component: Movies },
  { path: '/:pathMatch(.*)*', component: Movies },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
