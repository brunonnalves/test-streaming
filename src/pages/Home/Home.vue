<template>
  <div class="flex flex-wrap justify-evenly pt-24">
    <PosterCard v-for="show in shows" :key="show.title" :show="show" :type="show.media_type" />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import Rest from '../../services/api';
import PosterCard from '../../components/PosterCard/PosterCard.vue';

export default {
  setup() {
    const shows = ref([]);

    onMounted(async () => {
      const response = await Rest.get('/trending/all/day');
      shows.value = response.data.results;
    });

    return { shows };
  },
  components: { PosterCard },
};
</script>
