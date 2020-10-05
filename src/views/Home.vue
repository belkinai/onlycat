<template>
  <div class="home">
    <textarea v-model="text"/>
    <router-link :to="{name: 'Translate', params: {id: 'asd'}}">Перевод</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      text: '',
      translations: {},
    };
  },
  created() {
    this.getTranslations();
  },
  methods: {
    getTranslations() {
      this.translations = this.$store.state.translations;
    },
  },
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
  }
</style>
