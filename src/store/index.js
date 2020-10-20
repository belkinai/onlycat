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
    addTranslation (state, data) {
      state.translations[data.key] = data.value;
      if (fb.auth.currentUser) {
        fb.translationsCollection.doc(data.key).set({
          translation: JSON.stringify(data.value),
          userId: fb.auth.currentUser.uid,
        });
      } else {
        window.localStorage.setItem('translations', JSON.stringify(state.translations));
      }
    },
    setStoreTranslation (state, data) {
      state.translations[data.key] = data.value;
    },
    updateTranslation (state, data) {
      state.translations[data.key] = data.value;
    },
    setUser (state, value) {
      state.user = value;
      this.commit('loadTranslations');
    },
    loadTranslations (state) {
      if (!fb.auth.currentUser) {
        state.translations = {};
        const localTranslations = window.localStorage.getItem('translations');
        if (localTranslations) {
          state.translations = JSON.parse(localTranslations);
        }
      } else {
        fb.translationsCollection.where('userId', '==', fb.auth.currentUser.uid).get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.commit('setStoreTranslation', {key: doc.id, value: JSON.parse(doc.data().translation)});
          })
        });
      }
    },
    setCreateTranslationModal (state, value) {
      state.createTranslationModal = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
