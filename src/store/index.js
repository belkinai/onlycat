import { createStore } from 'vuex';
import * as fb from '../firebase';

export default createStore({
  strict: true,
  state: {
    translations: {},
    createTranslationModal: false,
    user: {},
  },
  mutations: {
    initializeTranslations (state) {
      const localTranslations = window.localStorage.getItem('translations');
      if (localTranslations) {
        state.translations = JSON.parse(localTranslations);
      }
    },
    addTranslation (state, data) {
      state.translations[data.key] = data.value;
      window.localStorage.setItem('translations', JSON.stringify(state.translations));
      if (fb.auth.currentUser) {
        fb.translationsCollection.doc(fb.auth.currentUser.uid).set({
          translations: JSON.stringify(state.translations),
        });
      }
    },
    setStoreTranslation (state, data) {
      state.translations[data.key] = data.value;
    },
    unsetStoreTranslations (state) {
      state.translations = {};
      window.localStorage.setItem('translations', JSON.stringify({}));
    },
    setCreateTranslationModal (state, value) {
      state.createTranslationModal = value;
    },
    setUser (state, value) {
      state.user = value;
      this.dispatch('loadTranslations');
    },
  },
  actions: {
    async loadTranslations ({state}) {
      if (!fb.auth.currentUser) {
        return false;
      }
      const storageTranslationsString = await fb.translationsCollection.doc(fb.auth.currentUser.uid).get();
      let storageTranslations;
      if (storageTranslationsString) {
        storageTranslations = JSON.parse(storageTranslationsString.data().translations);
      }
      for (let translation in storageTranslations) {
        this.commit('setStoreTranslation', {
          key: translation,
          value: storageTranslations[translation]
        });
      }
      window.localStorage.setItem('translations', JSON.stringify(state.translations));
      fb.translationsCollection.doc(fb.auth.currentUser.uid).set({
        translations: JSON.stringify(state.translations),
      });
    }
  },
  modules: {
  },
});
