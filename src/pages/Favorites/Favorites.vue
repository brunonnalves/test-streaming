<template>
  <div class="flex flex-wrap justify-evenly pt-24">
    <h1 class="w-full text-center mb-8">Minha Lista</h1>
    <p class="w-full text-center" v-if="shows && shows.length == 0">Sua lista está vazia</p>
    <PosterCard
      v-for="show in shows"
      :key="show.title"
      :show="show"
      v-if="shows && shows.length > 0"
      :type="show.seasons ? 'tv' : 'movie'"
    />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import Rest from '../../services/api.ts';
import { getFavoriteShows } from '../../utils/localStorage.ts';
import PosterCard from '../../components/PosterCard/PosterCard.vue';

export default {
  setup() {
    const shows = ref();

    onMounted(() => {
      shows.value = getFavoriteShows();
    });

    return { shows };
  },
  components: { PosterCard },
};
</script>
