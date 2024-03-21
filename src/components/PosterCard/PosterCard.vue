<template>
  <div class="h-85 w-40 mb-4 rounded-lg bg-evenRow">
    <div class="h-0 p-0">
      <div class="relative top-220 left-6 text-xs border-2 border-red-500">
        {{ show.vote_average * 10 }}%
      </div>
    </div>
    <img height="230" src="{movie.poster_path}" />
    <div class="p-6">
      <p class="text-xs mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{movie.title}</p>
      <p class="text-xs overflow-hidden">{movie.overview}</p>
    </div>
    <div>
      <button>ver mais</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PosterCard',
  props: {
    show: {
      adult: Boolean,
      backdrop_path: String,
      genre_ids: Array<Number>,
      id: Number,
      original_language: String,
      original_title: String,
      overview: String,
      popularity: Number,
      poster_path: String,
      release_date: String,
      title: String,
      video: Boolean,
      vote_average: Number,
      vote_count: Number,
    },
  },
  setup(props) {},
};
</script>
