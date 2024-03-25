<template>
  <div
    class="h-screen w-full bg-center bg-cover"
    :style="`background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.5)), url('https://image.tmdb.org/t/p/original${show.backdrop_path}')`"
  >
    <div
      class="text-white h-screen md:w-6/12 flex flex-wrap p-8 md:p-24 items-center justify-start z-40"
    >
      <div>
        <h1 class="text-3xl font-bold mb-4">{{ show.title }}</h1>
        <span class="flex gap-4 mb-4">
          <p>
            {{
              show.release_date
                ? new Date(show.release_date).getFullYear()
                : new Date(show.first_air_date).getFullYear()
            }}
          </p>
          <p class="text-green-500">
            {{ Math.floor(show.vote_average * 100) / 100 }}
          </p>
          <p>|</p>
          <p v-if="show.runtime">{{ show.runtime }}min</p>
          <p v-if="show.number_of_seasons">
            {{ show.number_of_seasons }} Temporadas - {{ show.number_of_episodes }} Episódios
          </p>
        </span>
        <p>{{ show.overview }}</p>
        <span class="flex gap-2 mt-8">
          <p v-for="genre in show.genres" class="text-sm text-slate-300">{{ genre.name }}</p>
        </span>
        <span class="flex gap-2 mt-8">
          <button
            class="border-2 bg-red-500 rounded-lg px-2 md:px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold"
          >
            <a
              class="flex items-center gap-1 md:gap-2"
              target="_blank"
              :href="'https://www.youtube.com/results?search_query=' + show.title + ' Trailer'"
            >
              <img src="../../assets/icons/play-icon.svg" class="h-4 font-bold" />
              Tailer
            </a>
          </button>
          <button
            class="border-2 border-white rounded-lg px-2 md:px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold gap-1 md:gap-2"
            :onclick="
              () => {
                handleFavButtonClick(show);
              }
            "
            v-if="!isShowInMyFavList"
          >
            <img src="../../assets/icons/heart-icon.svg" class="h-4 font-bold" />
            Favorito
          </button>
          <button
            class="border-2 border-white rounded-lg px-2 md:px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold gap-1 md:gap-2"
            :onclick="
              () => {
                handleRemoveFavButtonClick(show);
              }
            "
            v-if="isShowInMyFavList"
          >
            <img src="../../assets/icons/trash-icon.svg" class="h-4 font-bold" />
            Remover de favoritos
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { updateLocalStorage, checkShowInLocalStorage } from '../../utils/localStorage';
export default {
  name: 'ShowDetails',
  props: ['show'],
  setup(props) {
    const isShowInMyFavList = ref(checkShowInLocalStorage(props.show));
    const handleFavButtonClick = (movie: any) => {
      updateLocalStorage(movie);
      isShowInMyFavList.value = checkShowInLocalStorage(movie);
    };
    const handleRemoveFavButtonClick = (movie: any) => {
      updateLocalStorage(movie, true);
      isShowInMyFavList.value = checkShowInLocalStorage(movie);
    };
    return { isShowInMyFavList, handleFavButtonClick, handleRemoveFavButtonClick };
  },
};
</script>
