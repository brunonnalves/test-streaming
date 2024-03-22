<template>
  <div class="flex flex-wrap justify-evenly p-6">
    <PosterCard v-for="movie in movies" :key="movie.title" :show="movie" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Rest from '../../services/api.ts';
import PosterCard from '../../components/PosterCard/PosterCard.vue';

export default {
  setup() {
    const movies = ref([]);

    onMounted(async () => {
      const response = await Rest.get('/movie/popular');
      console.log(response.data);
      movies.value = response.data.results;
    });

    return { movies };
  },
  components: { PosterCard },
};
</script>
