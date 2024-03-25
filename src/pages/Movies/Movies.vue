<template>
  <div class="flex flex-wrap justify-evenly pt-24">
    <PosterCard v-for="movie in movies" :key="movie.title" :show="movie" type="movie" />
    <LoadCard :onclick="() => getMoreShows()" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Rest from '../../services/api.ts';
import PosterCard from '../../components/PosterCard/PosterCard.vue';
import LoadCard from '../../components/LoadCard/LoadCard.vue';

export default {
  setup() {
    const movies = ref([]);
    const pageToIncrement = ref(1);

    const getMoreShows = async () => {
      let list = [...movies.value];
      const response = await Rest.get('/movie/popular', {
        params: { page: pageToIncrement.value },
      });

      list = list.concat(response.data.results);
      movies.value = list;
      pageToIncrement.value++;
    };

    onMounted(async () => {
      await getMoreShows();
    });

    return { movies, getMoreShows };
  },
  components: { PosterCard, LoadCard },
};
</script>
