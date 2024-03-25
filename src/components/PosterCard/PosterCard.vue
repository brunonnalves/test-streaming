<template>
  <router-link
    as="div"
    :to="type === 'movie' ? './filmes/' + show.id : './series/' + show.id"
    class="w-40 md:w-80 mb-8 rounded-lg bg-evenRow mx-2 hover:shadow-xl hover:scale-105 cursor-pointer"
  >
    <img
      :src="'https://image.tmdb.org/t/p/original' + show.poster_path"
      class="rounded-lg w-full"
    />
    <div class="h-0 p-0">
      <div
        class="h-10 w-10 relative bottom-6 left-2 text-xs border-2 border-red-500 rounded-full bg-white"
      >
        <p class="h-full flex items-center justify-center">
          {{ Math.floor(show.vote_average * 100) / 100 }}
        </p>
      </div>
    </div>
    <div class="p-6">
      <p
        class="text-sm mb-1 whitespace-nowrap overflow-hidden text-ellipsis"
        v-if="type === 'movie'"
      >
        {{ show.title }}
      </p>
      <p class="text-sm mb-1 whitespace-nowrap overflow-hidden text-ellipsis" v-if="type === 'tv'">
        {{ show.name }}
      </p>
      <p class="h-20 md:h-40 text-xs overflow-auto">
        {{ show.overview }}
      </p>
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'PosterCard',
  props: ['show', 'type'],
  setup() {},
};
</script>
