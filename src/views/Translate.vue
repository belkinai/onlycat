<template>
  <div v-if="translation" class="translate">
    <div class="page-header">
      <h1><router-link :to="{name: 'Home'}">&#x25c1;</router-link>{{ translation.name }}</h1>
    </div>
    <div class="translate-controls">
      <div class="translate-controls__start">
        <sim-btn>Изменить оригинал</sim-btn>
      </div>
      <div class="translate-controls__center">
        <div class="translate-controls__lang">
          EN
        </div>
        <sim-btn @click="translate">Перевести</sim-btn>
        <div class="translate-controls__lang">
          RU
        </div>
      </div>
      <div class="translate-controls__end">
        <sim-btn>Забрать результат</sim-btn>
      </div>
    </div>
    <div class="main-fields">
      <div class="main-filed-sentences">
        <span  class="main-filed-sentence" style="white-space: pre-line" v-for="(sentence, j) in translation.originalSentences" :key="j"
               :class="{active: j === activeIndex}">{{ sentence }}</span>
      </div>
      <div class="main-filed-sentences">
        <span class="main-filed-sentence" style="white-space: pre-line" v-for="(sentence, i) in translation.translatedSentences" :key="i"
              contenteditable
              :class="{active: i === activeIndex}"
              @focusin="activeIndex = i"
              @focusout="edit($event, i)"
        >
          {{ sentence.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { functions } from '../firebase';
import SimBtn from "../components/SimBtn";

export default {
  name: 'Translate',
  components: {SimBtn},
  props: {
    uuid: String,
  },
  data () {
    return {
      activeIndex: -1,
    };
  },
  computed: {
    translation: {
      get () {
        let translation = this.$store.state.translations[this.uuid];
        if (translation) {
          return JSON.parse(JSON.stringify(translation));
        } else {
          return {};
        }
      },
    },
  },
  methods: {
    translate () {
      var translate = functions.httpsCallable('translateWatson');
      const translationData = {
        sentences: this.translation.originalSentences,
        modelId: this.translation.fromLang + '-' + this.translation.toLang,
      };
      console.log(translationData);
      translate(translationData).then((result) => {
        this.translation.translatedSentences = [];
        result.data.result.translations.forEach((translation) => {
          this.translation.translatedSentences.push({
            status: 0,
            text: translation.translation,
          });
          this.save();
        });
      });
    },
    edit (e, i) {
      this.translation.translatedSentences[i].text = e.target.innerText;
      this.save();
    },
    save () {
      this.$store.commit('addTranslation', {
        key: this.uuid,
        value: this.translation,
      });
    }
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
  .translate-controls {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 24px;
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
  .main-fields {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    overflow: hidden;
  }
  .main-filed-sentences {
    overflow: auto;
    flex-grow: 1;
    flex-basis: 1px;
    margin-right: 24px;
    padding: 12px;
    border-radius: 2px;
    background: #fff;
  }
  .main-filed-sentences:last-child {
    margin-right: 0;
  }
  .main-filed-sentence.active {
    background: aqua;
    outline: none;
  }
</style>
