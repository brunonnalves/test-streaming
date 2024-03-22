<template>
  <div class="flex flex-wrap justify-evenly pt-24">
    <PosterCard v-for="movie in movies" :key="movie.title" :show="movie" />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import Rest from '../../services/api.ts';
import PosterCard from '../../components/PosterCard/PosterCard.vue';

export default {
  setup() {
    const movies = ref([]);

    onMounted(async () => {
      const response = await Rest.get('/movie/popular');
      movies.value = response.data.results;
    });

    return { movies };
  },
  components: { PosterCard },
};
</script>
