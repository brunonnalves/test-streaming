// store.ts
import { createStore, Commit, Dispatch } from 'vuex';

interface State {
  showSnackbar: boolean;
  snackbarMessage: string;
  snackbarType: string;
}

const store = createStore<State>({
  state: {
    showSnackbar: false,
    snackbarMessage: '',
    snackbarType: '',
  },
  mutations: {
    setShowSnackbar(state: State, payload: boolean) {
      state.showSnackbar = payload;
    },
    setSnackbarMessage(state: State, payload: { message: string; type: string }) {
      state.snackbarMessage = payload.message;
      state.snackbarType = payload.type;
    },
  },
  actions: {
    showSnackbar(
      { commit, dispatch }: { commit: Commit; dispatch: Dispatch },
      payload: { message: string; type: string }
    ) {
      commit('setSnackbarMessage', { message: payload.message, type: payload.type });
      commit('setShowSnackbar', true);

      setTimeout(() => {
        dispatch('closeSnackbar');
      }, 3000);
    },
    closeSnackbar({ commit }: { commit: Commit }) {
      commit('setShowSnackbar', false);
      commit('setSnackbarMessage', { message: '', type: '' });
    },
  },
  getters: {
    snackbarState: (state: State) => state.showSnackbar,
    snackbarMessage: (state: State) => state.snackbarMessage,
    snackbarType: (state: State) => state.snackbarType,
  },
});

export default store;
