<template>
  <router-link :to="pathTo" class="flex pr-10 h-full text-menu text-cMenu items-center gap-2">
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
