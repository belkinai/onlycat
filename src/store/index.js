import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    translations: {},
    createTranslationModal: false,
  },
  mutations: {
    initializeTranslations(state) {
      state.translations = localStorage.getItem('translations');
    },
    addTranslation(state, key, translation) {
      state.translations[key] = translation;
      localStorage.setItem('translations', state.translations);
    },
    setCreateTranslationModal(state, value) {
      state.createTranslationModal = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
