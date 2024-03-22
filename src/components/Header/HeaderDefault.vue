<template>
  <header class="flex pl-10 h-15 bg-pageHeader items-center">
    <img src="../../assets/vue.svg" class="h-10 w-27.5" />
    <NavButton
      v-for="option in menuOptions"
      :key="option.title"
      :pathTo="option.pathTo"
      :title="option.title"
    />
  </header>
</template>

<script>
import NavButton from '../NavButton/NavButton.vue';
export default {
  name: 'HeaderDefault',
  setup() {
    const menuOptions = [
      {
        title: 'Home',
        pathTo: '/home',
      },
      {
        title: 'Filmes',
        pathTo: '/filmes',
      },
      {
        title: 'Series',
        pathTo: '/series',
      },
      {
        title: 'Minha lista',
        pathTo: '/favoritos',
      },
    ];

    return { menuOptions };
  },
  components: { NavButton },
};
</script>
