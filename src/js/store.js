import { createStore } from 'vuex';

export default createStore({
  state: {
    isItalian: false,
    isGb: false,
    isDarkMode: false,
    isDarkText: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      state.isDarkText = !state.isDarkText;
    },
    toggleLanguageItalian(state, isItalian) {
      state.isItalian = isItalian;
    },
    toggleLanguageGb(state, isGb) {
      state.isGb = isGb;
    },
  },
});
