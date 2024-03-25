<template>
  <div
    :onclick="onclick"
    class="w-40 md:w-80 mb-8 rounded-lg bg-evenRow mx-2 hover:shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center"
  >
    Carregar Mais
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoadCard',
  props: ['onclick'],
  setup(props) {},
};
</script>
