<template>
  <div class="home">
    <h1>{{ translation.name }}</h1>
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
              @input="up($event, i)"
        >
          {{ sentence }}
        </span>
      </div>
    </div>
    {{ translated }}
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Translate',
    props: {
      uuid: String,
    },
    components: {
      // HelloWorld
    },
    data() {
      return {
        sentences: [],
        translated: [],
        text: '',
        activeIndex: -1,
      };
    },
    computed: {
      translation: {
        get() {
          return this.$store.state.translations[this.uuid];
        }
      },
    },
    methods: {
      translate() {
        console.log(this.uuid);
        this.translation.translatedSentences = this.translation.originalSentences;
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
  .main-fields {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .main-filed-sentences {
    background: #fff;
    flex-grow: 1;
    height: 100%;
    margin-right: 40px;
    border-radius: 12px;
    padding: 12px;
    /*box-shadow: inset 12px 12px 12px rgba(0, 0, 0, 0.17);*/
  }
  .main-filed-sentences:last-child {
    margin-right: 0;
  }
  .main-filed-sentence.active {
    background: aqua;
    outline: none;
  }
</style>
