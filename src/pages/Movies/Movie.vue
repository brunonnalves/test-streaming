<template>
  <ShowDetails :show="movie" v-if="movie" />
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ShowDetails from '../../components/ShowDetails/ShowDetails.vue';
import Rest from '../../services/api.ts';

export default {
  setup() {
    const movie = ref();
    const route = useRoute();
    const showId = route.params.id;

    onMounted(async () => {
      const response = await Rest.get(`/movie/${showId}`);
      movie.value = response.data;
    });

    return { movie };
  },
  components: { ShowDetails },
};
</script>
