import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/Home.vue';
import Movies from '../pages/Movies/Movies.vue';
import Movie from '../pages/Movies/Movie.vue';
import TVShows from '../pages/TVShows/TVShows.vue';
import TVShow from '../pages/TVShows/TVShow.vue';
import NotFound from '../pages/NotFound/NotFound.vue';
import Favorites from '../pages/Favorites/Favorites.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/filmes', component: Movies },
  { path: '/filmes/:id', component: Movie },
  { path: '/series', component: TVShows },
  { path: '/series/:id', component: TVShow },
  { path: '/favoritos', component: Favorites },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
