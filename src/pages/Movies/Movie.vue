<template>
  <div class="h-screen w-full">
    <img
      object-fit="cover"
      :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
      class="opacity-60 fixed h-screen w-full z-0"
    />
    <div class="h-screen w-160 flex flex-wrap p-24 items-center justify-start">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Rest from '../../services/api.ts';
import PosterCard from '../../components/PosterCard/PosterCard.vue';

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    const showId = route.params.id;

    onMounted(async () => {
      const response = await Rest.get(`/movie/${showId}`);
      console.log(response.data);
      movie.value = response.data;
    });

    return { movie };
  },
};
</script>
