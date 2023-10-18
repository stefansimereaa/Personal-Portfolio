import { createStore } from 'vuex';

export default createStore({
  state: {
    isDarkMode: false,
    isDarkText: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      state.isDarkText = !state.isDarkText;
    },
  },
});
