<template>
  <div class="flex flex-wrap justify-evenly pt-24">
    <PosterCard v-for="tvShow in tvShows" :key="tvShow.title" :show="tvShow" type="tv" />
    <LoadCard :onclick="() => getMoreShows()" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Rest from '../../services/api.ts';
import PosterCard from '../../components/PosterCard/PosterCard.vue';
import LoadCard from '../../components/LoadCard/LoadCard.vue';

export default {
  setup() {
    const tvShows = ref([]);
    const pageToIncrement = ref(1);

    const getMoreShows = async () => {
      try {
        let list = [...tvShows.value];
        const response = await Rest.get('/tv/popular', {
          params: { page: pageToIncrement.value },
        });

        list = list.concat(response.data.results);
        tvShows.value = list;
        pageToIncrement.value++;
      } catch (error) {
        store.dispatch('showSnackbar', { message: 'Houve um erro de servidor', type: 'error' });
      }
    };

    onMounted(async () => {
      await getMoreShows();
    });

    return { tvShows, getMoreShows };
  },
  components: { PosterCard, LoadCard },
};
</script>
