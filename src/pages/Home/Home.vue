<template>
  <div class="flex flex-wrap justify-evenly pt-24">
    <PosterCard v-for="show in shows" :key="show.title" :show="show" :type="show.media_type" />
    <LoadCard :onclick="() => getMoreShows()" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Rest from '../../services/api';
import PosterCard from '../../components/PosterCard/PosterCard.vue';
import LoadCard from '../../components/LoadCard/LoadCard.vue';

export default {
  setup() {
    const shows = ref([]);
    const pageToIncrement = ref(1);

    const getMoreShows = async () => {
      try {
        let list = [...shows.value];
        const response = await Rest.get('/trending/all/day', {
          params: { page: pageToIncrement.value },
        });

        list = list.concat(response.data.results);
        shows.value = list;
        pageToIncrement.value++;
      } catch (error) {
        store.dispatch('showSnackbar', { message: 'Houve um erro de servidor', type: 'error' });
      }
    };
    onMounted(async () => {
      await getMoreShows();
    });

    return { shows, getMoreShows };
  },
  components: { PosterCard, LoadCard },
};
</script>
