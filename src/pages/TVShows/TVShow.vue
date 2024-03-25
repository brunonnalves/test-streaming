<template>
  <ShowDetails :show="tvShow" v-if="tvShow" />
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import ShowDetails from '../../components/ShowDetails/ShowDetails.vue';
import Rest from '../../services/api';

export default {
  setup() {
    const tvShow = ref();
    const store = useStore();
    const route = useRoute();
    const showId = route.params.id;

    onMounted(async () => {
      try {
        const response = await Rest.get(`/tv/${showId}`);
        tvShow.value = response.data;
      } catch (error) {
        store.dispatch('showSnackbar', { message: 'Houve um erro de servidor', type: 'error' });
      }
    });

    return { tvShow };
  },
  components: { ShowDetails },
};
</script>
