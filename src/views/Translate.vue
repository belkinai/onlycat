<template>
  <div v-if="translation" class="home">
    <h1><router-link :to="{name: 'Home'}">&larr;</router-link>{{ translation.name }}</h1>
    <button @click="translate">Translate</button>
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
              @input="edit($event, i)"
        >
          {{ sentence }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Translate',
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
          let trans = this.$store.state.translations[this.uuid];
          if (trans) {
            return JSON.parse(JSON.stringify(trans));
          } else {
            return {};
          }
        },
      },
    },
    methods: {
      translate () {
        this.translation.translatedSentences = this.translation.originalSentences;
        this.save();
      },
      edit (e, i) {
        this.translation.translatedSentences[i] = e.target.innerText;
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
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
  }
  .main-fields {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .main-filed-sentences {
    background: #fff;
    flex-grow: 1;
    flex-basis: 1px;
    height: 100%;
    margin-right: 40px;
    border-radius: 8px;
    padding: 12px;
  }
  .main-filed-sentences:last-child {
    margin-right: 0;
  }
  .main-filed-sentence.active {
    background: aqua;
    outline: none;
  }
</style>
