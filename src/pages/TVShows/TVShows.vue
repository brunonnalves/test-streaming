<template>
  <div class="flex flex-wrap justify-evenly pt-24">
    <PosterCard v-for="tvShow in tvShows" :key="tvShow.title" :show="tvShow" type="show" />
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
      tvShows.value = response.data.results;
    });

    return { tvShows };
  },
  components: { PosterCard },
};
</script>
