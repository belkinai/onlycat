import { createStore } from 'vuex'

export default createStore({
  state: {
    translations: {},
    createTranslationModal: true,
  },
  mutations: {
    initializeTranslations(state) {
      state.translations = localStorage.getItem('translations');
    },
    addTranslation(state, key, translation) {
      state.translations[key] = translation;
      localStorage.setItem('translations', state.translations);
    }
  },
  actions: {
  },
  modules: {
  }
})
