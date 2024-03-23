<template>
  <div class="h-screen w-full">
    <!-- <img
      object-fit="cover"
      :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
      class="opacity-60 fixed h-screen w-full z-0"
    /> -->
    <div class="h-screen md:w-8/12 flex flex-wrap p-24 items-center justify-start z-40">
      <div>
        <h1>{{ movie.title }}</h1>
        <span class="flex gap-2">
          <p>{{ new Date(movie.release_date).getFullYear() }}</p>
          <p>{{ Math.floor(movie.vote_average * 100) / 100 }}</p>
          <p>|</p>
          <p>{{ movie.runtime }}min</p>
        </span>
        <p>{{ movie.overview }}</p>
        <span>
          <button>
            <a
              target="_blank"
              :href="'https://www.youtube.com/results?search_query=' + movie.title + ' Trailer'"
            >
              Tailer
            </a>
          </button>
          <button
            :onclick="
              () => {
                console.log(movie);
                handleFavButtonClick(movie);
              }
            "
          >
            Favorito
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Rest from '../../services/api.ts';
import PosterCard from '../../components/PosterCard/PosterCard.vue';
import { updateLocalStorage, checkShowInLocalStorage } from '../../utils/localStorage.ts';

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    const showId = route.params.id;
    const isShowInMyFavList = checkShowInLocalStorage(movie);

    const handleFavButtonClick = (movie: any) => {
      updateLocalStorage(movie);
    };

    onMounted(async () => {
      const response = await Rest.get(`/movie/${showId}`);
      movie.value = response.data;
    });

    return { movie, handleFavButtonClick };
  },
};
</script>
