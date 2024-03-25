<template>
  <router-link :to="pathTo" class="flex pr-8 h-full text-menu text-cMenu items-center">
    <p>{{ title }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'NavButton',
  props: ['pathTo', 'title'],
  setup() {},
};
</script>
