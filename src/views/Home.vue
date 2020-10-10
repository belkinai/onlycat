<template>
  <div class="home">
    <h1>Ваши переводы</h1>
    <div v-for="(translation, i) in translations" :key="i">
      <router-link :to="{name: 'Translate', params: {uuid: i}}">{{ translation.name }}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    translations: {
      get() {
        return this.$store.state.translations;
      },
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
