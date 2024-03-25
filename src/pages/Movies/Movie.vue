<template>
  <ShowDetails :show="movie" v-if="movie" />
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import ShowDetails from '../../components/ShowDetails/ShowDetails.vue';
import Rest from '../../services/api.ts';

export default {
  setup() {
    const movie = ref();
    const store = useStore();
    const route = useRoute();
    const showId = route.params.id;

    onMounted(async () => {
      try {
        const response = await Rest.get(`/movie/${showId}`);
        movie.value = response.data;
      } catch (error) {
        store.dispatch('showSnackbar', { message: 'Houve um erro de servidor', type: 'error' });
      }
    });

    return { movie };
  },
  components: { ShowDetails },
};
</script>
