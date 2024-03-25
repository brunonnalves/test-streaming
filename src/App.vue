<template>
  <HeaderDefault />
  <main class="flex flex-col items-center h-screen">
    <router-view />
  </main>
  <Snackbar />
</template>

<script>
import HeaderDefault from './components/Header/HeaderDefault.vue';
import Snackbar from './components/Snackbar/Snackbar.vue';
export default {
  setup() {},
  components: { HeaderDefault, Snackbar },
};
</script>
