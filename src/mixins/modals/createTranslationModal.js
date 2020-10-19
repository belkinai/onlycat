export default {
  computed: {
    createTranslationModal: {
      get () {
        return this.$store.state.createTranslationModal;
      },
      set (value) {
        this.$store.commit('setCreateTranslationModal', value);
      },
    },
  },
};
