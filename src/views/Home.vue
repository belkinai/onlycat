<template>
  <div class="home">
    <div class="page-header">
      <h1>Ваши переводы</h1>
    </div>
    <div v-if="Object.keys(translations).length" class="translation-list">
      <div v-for="(translation, uuid) in translations" :key="uuid" class="translation-list-item">
        <router-link :to="{name: 'Translate', params: {uuid: uuid}}"
                     class="translation-list-link"
        >
          {{ translation.name }}
        </router-link>
        <span class="translation-list-item__words">
          {{ translation.readyWordsCount }} / {{ translation.wordsCount }}
          {{ pluralize(translation.wordsCount, ['слово', 'слова', 'слов']) }}
        </span>
        <span class="translation-list-item__actions">
          <sim-btn icon @click="deleteTranslation(uuid)">
            <sim-icon :class="'lni-trash'" size="20px"/>
          </sim-btn>
        </span>
      </div>
    </div>
    <div v-else class="translation-list-empty">
      <div class="translation-list-empty__caption">У вас еще нет переводов.</div>
      <sim-btn @click="createTranslationModal = true">Добавить новый</sim-btn>
    </div>
    <about-block v-if="!Object.keys(translations).length"/>
  </div>
</template>

<script>
import AboutBlock from '@/components/AboutBlock.vue';
import CreateTranslationModal from '@/mixins/modals/createTranslationModal';
import SimBtn from "../components/SimBtn";
import SimIcon from "@/components/SimIcon";
import Plural from "@/filters/plural";

export default {
  name: 'Home',
  components: {SimBtn, SimIcon, AboutBlock},
  mixins: [CreateTranslationModal],
  computed: {
    translations: {
      get() {
        return this.$store.state.translations;
      },
    },
  },
  methods: {
    pluralize (count, forms) {
      return Plural.pluralize(count, forms);
    },
    deleteTranslation (uuid) {
      this.$store.commit('deleteTranslation', {uuid: uuid});
    }
  }
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    width: 980px;
    max-width: 100%;
  }
  .translation-list {
    border-radius: 4px;
    padding: 8px 0;
    background: #fff;
  }
  .dark .translation-list {
    background: #272a3b;
  }
  .translation-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 64px;
    padding: 0 20px;
  }
  .translation-list-item:hover {
    background: #f0f0f5;
  }
  .dark .translation-list-item:hover {
    background: #3a3a53;
  }
  .translation-list-link {
    flex-grow: 1;
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
  .translation-list-empty {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 28px 4px;
  }
  .translation-list-empty__caption {
    font-size: 18px;
    margin: 0 24px 0 0;
  }
  .translation-list-item__words {
    padding: 0 16px;
  }
</style>
