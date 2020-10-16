import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    translations: {},
    createTranslationModal: false,
    user: {},
  },
  mutations: {
    initializeTranslations(state) {
      let localTranslations = localStorage.getItem('translations');
      if (localTranslations) {
        state.translations = JSON.parse(localTranslations);
      }
    },
    addTranslation(state, data) {
      state.translations[data.key] = data.value;
      console.log(state.translations);
      localStorage.setItem('translations', JSON.stringify(state.translations));
    },
    setCreateTranslationModal(state, value) {
      state.createTranslationModal = value;
    },
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
  },
  modules: {
  }
})
