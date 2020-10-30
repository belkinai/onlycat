<template>
  <div v-if="translation" class="translate">
    <vue-headful
            :title="translation.name + ' - ONLYCAT'"
    />
    <sim-dialog v-model="editTranslationModal" modal>
      <create-translation v-model="editTranslationModal" :translation="translation" :uuid="uuid"/>
    </sim-dialog>
    <div class="page-header">
      <router-link :to="{name: 'Home'}">
        <sim-icon :class="['lni-chevron-left', 'mr-5']" size="28px"
                  :color="darkMode? '#446' : '#88e'"/>
      </router-link>
      <h1>
        {{ translation.name }}
      </h1>
    </div>
    <div class="translate-status">
      <span v-if="translation.wordsCount">
        Готовность:
        <span class="translate-percent" :class="{'translate-percent__ready': percent === 100}">
          {{ percent }} %
        </span>
        <span class="translate-percent" :class="{'translate-percent__ready': percent === 100}">
          {{ translation.readyWordsCount }} / {{ translation.wordsCount }}
          {{ pluralize(translation.wordsCount, ['слово', 'слова', 'слов']) }}
        </span>
      </span>
      <span v-if="!loading">Последнее сохранение: {{ prettyDate(translation.updatedAt) }}</span>
      <span v-if="loading"><sim-icon :class="'lni-spiner-solid'" size="16px" spin/></span>
    </div>
    <div class="translate-status">
      <span>
        Подсветка: <span class="sentence_not-ready">сырой текст</span>,
        <span class="sentence active">фокус на сыром тексте</span>,
        <span>готовый текст</span>,
        <span class="sentence_ready active">фокус на готовом тексте</span>.
        Пометьте фрагмент, как готовый, нажав [CTRL+ENTER]
      </span>
    </div>
    <div class="translate-controls">
      <div class="translate-controls__start">
        <sim-btn icon title="Редактировать оригинал" @click="editTranslationModal = true">
          <sim-icon :class="'lni-pencil-alt'" size="16px"/>
        </sim-btn>
      </div>
      <div class="translate-controls__center">
        <div class="translate-controls__lang">
          EN
        </div>
        <sim-btn @click="translate" :loading="translating">Перевести</sim-btn>
        <div class="translate-controls__lang">
          RU
        </div>
      </div>
      <div class="translate-controls__end">
        <sim-btn icon><sim-icon :class="'lni-download'" size="16px"/></sim-btn>
      </div>
    </div>
    <div id="translation-original" class="translate-container">
      <div class="translate-sentences">
        <span v-for="(sentence, j) in translation.originalSentences" :key="j"
              class="sentence"
              style="white-space: pre-line"
              :class="{active: j === activeIndex}"
        >
          {{ sentence }}
        </span>
      </div>
      <div class="translate-sentences">
        <span v-for="(sentence, i) in translation.translatedSentences" :key="i"
              class="sentence" style="white-space: pre-line"
              :class="{
                'sentence_not-ready': sentence.status === 0,
                'sentence_ready': sentence.status > 0,
                active: i === activeIndex,
              }"
              contenteditable
              @focusin="activeIndex = i"
              @focusout="edit($event, i)"
              @keydown.ctrl.enter="readySentence(sentence)"
        >
          {{ sentence.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { functions } from '../firebase';
import SimBtn from '../components/SimBtn';
import SimIcon from '../components/SimIcon';
import SimDialog from '../components/SimDialog';
import CreateTranslation from '../components/CreateTranslation';
import darkMode from '@/mixins/darkMode';
import PrettyDate from '../filters/prettyDate';
import Plural from '../filters/plural';

export default {
  name: 'Translate',
  components: {SimBtn, SimIcon, SimDialog, CreateTranslation},
  mixins: [darkMode],
  props: {
    uuid: String,
  },
  data () {
    return {
      activeIndex: -1,
      loading: false,
      translating: false,
      editTranslationModal: false,
    };
  },
  computed: {
    translation: {
      get () {
        return this.$store.getters.getTranslation(this.uuid);
      },
    },
    percent: {
      get () {
        if (!this.translation.wordsCount) {
          return 0;
        }
        return parseInt(this.translation.readyWordsCount / this.translation.wordsCount * 100);
      }
    }
  },
  methods: {
    translate () {
      this.translating = true;
      var translate = functions.httpsCallable('translateWatson');
      const translationData = {
        sentences: this.translation.originalSentences,
        modelId: this.translation.fromLang + '-' + this.translation.toLang,
      };
      translate(translationData).then((result) => {
        this.translation.translatedSentences = [];
        this.translation.wordsCount = 0;
        this.translation.readyWordsCount = 0;
        result.data.result.translations.forEach((translation) => {
          this.translation.translatedSentences.push({
            status: 0,
            text: translation.translation,
          });
          if (translation.translation) {
            this.translation.wordsCount += translation.translation.split(' ').length;
          }
        });
        this.translating = false;
        this.save();
      });
    },
    edit (e, i) {
      this.activeIndex = -1;
      this.translation.translatedSentences[i].text = e.target.innerText;
      this.countReadySentences();
      this.save();
    },
    save () {
      this.loading = true;
      this.translation.updatedAt = Date.now();
      this.$store.dispatch('saveTranslation', {
        key: this.uuid,
        value: this.translation,
      }).then(() => {
        this.loading = false;
      });
    },
    countReadySentences () {
      let readyWordsCount = 0;
      this.translation.translatedSentences.forEach(sentence => {
        if (sentence.status) {
          readyWordsCount += sentence.text.split(' ').length;
        }
      });
      this.translation.readyWordsCount = readyWordsCount;
      if (this.translation.readyWordsCount === this.translation.wordsCount) {
        this.translation.complete = true;
      }
    },
    prettyDate(date) {
      return PrettyDate.prettyDate(date);
    },
    pluralize (count, forms) {
      return Plural.pluralize(count, forms);
    },
    readySentence (sentence) {
      sentence.status = 1;
      this.countReadySentences();
      this.save();
    },
  },
}
</script>

<style>
  .translate {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 1300px;
    max-width: 100%;
  }
  .translate-status {
    display: flex;
    margin: 0 0 16px;
    padding: 0 12px;
    font-size: 14px;
    color: #605c79;
  }
  .dark .translate-status {
    color: #807c99;
  }
  .translate-percent {
    margin: 0 12px;
    color: coral;
  }
  .translate-percent__ready {
    color: forestgreen;
  }
  .translate-controls {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
  }
  .translate-controls__start {
    display: flex;
    flex-grow: 1;
    flex-basis: 1px;
    justify-content: flex-start;
  }
  .translate-controls__center {
    display: flex;
    justify-content: center;
  }
  .translate-controls__end {
    display: flex;
    flex-grow: 1;
    flex-basis: 1px;
    justify-content: flex-end;
  }
  .translate-controls__lang {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    padding: 0 12px;
    font-size: 19px;
    font-weight: 100;
    text-transform: uppercase;
  }
  .translate-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    overflow: hidden;
  }
  .translate-sentences {
    overflow: auto;
    flex-grow: 1;
    flex-basis: 1px;
    margin-right: 24px;
    padding: 12px;
    border-radius: 2px;
    background: #fff;
  }
  .dark .translate-sentences {
    background: #272a3b;
    color: #ddf
  }
  .translate-sentences:last-child {
    margin-right: 0;
  }
  .sentence.active {
    background: #c3e1fd;
    outline: none;
  }
  .dark .sentence.active {
    background: #4364c3;
    color: #ddf;
  }
  .sentence_not-ready {
    background: #fddec8;
  }
  .dark .sentence_not-ready {
    background: #843f34;
    color: #ddf;
  }
  .sentence_ready.active {
    background: #bffdcc;
  }
  .dark .sentence_ready.active {
    background: #2d773d;
    color: #ddf;
  }
</style>
