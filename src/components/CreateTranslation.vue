<template>
  <sim-window width="980px">
    <sim-window-header>
      Добавить текст для перевода
    </sim-window-header>
    <sim-window-body>
      <sim-text-field v-model="name" color="#a859ff" label="Название"/>
      <sim-text-area v-model="text" color="#a859ff" label="Текст"/>
      <div v-cloak
           @drop.prevent="addDropFile"
           @dragover.prevent
      >
        <div>
          <input id="doc-file" hidden type="file" multiple @change="selectFiles"/>
          <span>
                  Перетащите сюда документ, или
                  <label for="doc-file">
                    <span class="pseudo-link">нажмите сюда, чтобы выбрать на компьютере</span>
                  </label>
                </span>
        </div>
      </div>
      <div>
        <sim-row>
          <sim-col :cols="3">
            <sim-select v-model="fromLang"
                        :items="languages"
                        itemValue="model"
                        itemText="name"
                        label="Язык оригинала"
            />
          </sim-col>
          <sim-col :cols="3">
            <sim-select v-model="toLang"
                        :items="languages"
                        itemValue="model"
                        itemText="name"
                        label="Язык оригинала"
            />
          </sim-col>
        </sim-row>
      </div>
    </sim-window-body>
    <sim-window-footer>
      <sim-btn @click="close">Отмена</sim-btn>
      <sim-spacer/>
      <sim-btn color="#5927b9" dark @click="createTranslation">{{ callToAction }}</sim-btn>
    </sim-window-footer>
    <div class="modal-close" @click="close">&#9711;</div>
  </sim-window>
</template>

<script>
import SimBtn from '@/components/SimBtn.vue';
import SimWindow from '@/components/SimWindow.vue';
import SimWindowHeader from '@/components/SimWindowHeader.vue';
import SimWindowBody from '@/components/SimWindowBody.vue';
import SimWindowFooter from '@/components/SimWindowFooter.vue';
import SimSpacer from '@/components/SimSpacer.vue';
import SimTextField from '@/components/SimTextField.vue';
import SimTextArea from '@/components/SimTextArea.vue';
import SimSelect from '@/components/SimSelect.vue';
import SimRow from '@/components/SimRow.vue';
import SimCol from '@/components/SimCol.vue';
import languageModels from "@/mixins/languageModels";
import tokenizer from 'sbd';
import mammoth from 'mammoth';

export default {
  props: {
    modelValue:  Boolean,
    translation: Object,
    uuid:        String,
  },
  components: { SimBtn, SimWindow, SimWindowHeader, SimWindowBody, SimWindowFooter, SimTextField, SimTextArea,
    SimSpacer, SimSelect, SimRow, SimCol },
  mixins: [languageModels],
  data() {
    return {
      text: '',
      name: '',
      fromLang: 'en',
      toLang: 'en',
      callToAction: 'Добавить',
      files: [],
    };
  },
  created() {
    mammoth.extractRawText({path: "path/to/document.docx"})
      .then(function(result){
        console.log(result.value);
        console.log(result.messages);
      })
      .done();
    if (this.translation) {
      this.text = this.translation.text;
      this.name = this.translation.name;
      this.callToAction = 'Сохранить';
    }
  },
  methods: {
    createTranslation() {
      // let originalSentences = this.text.match( /[^.!?]+[.!?]+["']?|\s*$/g );
      let originalSentences = tokenizer.sentences(this.text, {preserve_whitespace: true});
      const id = () => ([1e7]+-1e3+-4e3+-8e3+-1e11)
          .replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));
      const uuid = this.uuid ? this.uuid : id();
      this.$store.dispatch('saveTranslation', {
        key: uuid,
        value: {
          name: this.name,
          text: this.text,
          originalSentences: originalSentences,
          translatedSentences: [],
          fromLang: 'en',
          toLang: 'ru',
          complete: false,
          updatedAt: Date.now(),
          wordsCount: 0,
          readyWordsCount: 0,
        }
      }).then(() => {
        this.close();
        this.$router.push({name: 'Translate', params: {uuid: uuid}});
      });
    },
    close () {
      this.$emit('update:modelValue', false);
    },
    addDropFile(e) {
      this.files = Array.from(e.dataTransfer.files);
    },
    selectFiles(event) {
      this.files = event.target.files;
      console.log(this.files);
    },
  },
}
</script>

<style>
  .modal-close {
    position: absolute;
    top: 74px;
    right: 76px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.72);
    cursor: pointer;
    transition: all .2s;
  }
  .dark .modal-close {
    color: rgba(255, 255, 255, 0.72);
  }
  .modal-close:hover {
    color: rgba(0, 0, 0, 1);
    text-shadow: 0 0 4px rgba(60, 100, 255, 0.2);
    transform: scale(1.2);
  }
  .dark .modal-close:hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0 4px rgba(160, 200, 255, 0.2);
  }
  .modal-close:active {
    color: rgba(0, 0, 0, 1);
    text-shadow: 0 0 2px rgba(60, 100, 255, 0.2);
    transform: scale(1.1);
  }
  .dark .modal-close:active {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0 2px rgba(160, 200, 255, 0.2);
  }
</style>
