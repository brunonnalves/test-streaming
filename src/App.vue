<template>
  <HeaderDefault />
  <main class="flex flex-col items-center flex-1">
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
