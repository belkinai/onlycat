export default {
  computed: {
    darkMode: {
      get () {
        return this.$store.state.darkMode;
      },
      set (value) {
        this.$store.commit('setDarkMode', value);
      },
    },
  },
}
