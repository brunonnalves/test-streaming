<template>
  <HeaderDefault />
  <main class="flex flex-col items-center">
    <router-view />
  </main>
</template>

<script>
import HeaderDefault from './components/Header/HeaderDefault.vue';
export default {
  setup() {},
  components: { HeaderDefault },
};
</script>
