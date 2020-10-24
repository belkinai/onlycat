<template>
  <div class="home">
    <div class="page-header">
      <h1>Ваши переводы</h1>
    </div>
    <div class="translation-list">
      <div v-for="(translation, i) in translations" :key="i" class="translation-list-item">
        <router-link :to="{name: 'Translate', params: {uuid: i}}"
                     class="translation-list-link"
        >
          {{ translation.name }}
        </router-link>
      </div>
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
    width: 960px;
    max-width: 100%;
  }
  .translation-list {
    border-radius: 4px;
    background: #fff;
  }
  .dark .translation-list {
    background: #272a3b;
  }
  .translation-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    padding: 20px;
  }
  .translation-list-link {
    font-size: 18px;
    font-weight: 300;
    color: #5116dd;
  }
  .dark .translation-list-link {
    color: #88e;
  }
  .translation-list-link:hover {
    opacity: 0.8;
  }
  .translation-list-link:active {
    opacity: 0.7;
  }
</style>
