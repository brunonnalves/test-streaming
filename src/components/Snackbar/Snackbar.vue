<template>
  <transition name="fade">
    <div
      v-if="snackbarState"
      :class="['fixed', 'bottom-5', 'left-1/2', 'transform', '-translate-x-1/2', snackbarTypeClass]"
    >
      {{ snackbarMessage }}
      <button @click="closeSnackbar" class="float-right text-white ml-4">&times;</button>
    </div>
  </transition>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const snackbarState = computed(() => {
      return store.getters.snackbarState;
    });

    const snackbarMessage = computed(() => {
      return store.getters.snackbarMessage;
    });

    const closeSnackbar = () => {
      store.dispatch('closeSnackbar');
    };

    const snackbarTypeClass = computed(() => {
      return {
        'bg-green-500': store.getters.snackbarType === 'success',
        'bg-red-500': store.getters.snackbarType === 'error',
        'text-white': true,
        'px-6': true,
        'py-3': true,
        'rounded-md': true,
        'shadow-lg': true,
      };
    });

    return { snackbarState, snackbarMessage, closeSnackbar, snackbarTypeClass };
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
