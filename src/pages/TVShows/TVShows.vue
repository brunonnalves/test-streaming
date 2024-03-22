<template>
  <div class="flex flex-wrap justify-evenly p-2">
    <PosterCard v-for="tvShow in tvShows" :key="tvShow.title" :show="tvShow" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Rest from '../../services/api.ts';
import PosterCard from '../../components/PosterCard/PosterCard.vue';

export default {
  setup() {
    const tvShows = ref([]);

    onMounted(async () => {
      const response = await Rest.get('/tv/popular');
      console.log(response.data);
      tvShows.value = response.data.results;
    });

    return { tvShows };
  },
  components: { PosterCard },
};
</script>
