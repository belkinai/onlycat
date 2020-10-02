<template>
  <div class="home">
    <textarea v-model="text"/>
    <button @click="makeSentences">Ok</button>
    <button @click="translate">Translate</button>
    {{ activeIndex }}
    <div class="main-fields">
      <div class="main-filed-sentences">
        <span  class="main-filed-sentence" style="white-space: pre-line" v-for="(sentence, j) in sentences" :key="j"
               :class="{active: j === activeIndex}">{{ sentence }}</span>
      </div>
      <div class="main-filed-sentences">
        <span class="main-filed-sentence" style="white-space: pre-line" v-for="(sentence, i) in translated" :key="i"
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
    props: ['id'],
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
    methods: {
      up(e, i) {
        this.translated[i] = e.target.innerText;
      },
      makeSentences() {
        let text = this.text;
        this.sentences = text.match( /[^.!?]+[.!?]+["']?|\s*$/g );
      },
      translate() {
        this.translated = this.sentences;
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
