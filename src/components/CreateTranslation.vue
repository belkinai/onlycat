<template>
  <sim-window width="980px">
    <sim-window-header>
      Добавить текст для перевода
    </sim-window-header>
    <sim-window-body>
      <sim-text-field v-model="name" color="#a859ff" label="Название"/>
      <sim-text-area v-model="text" color="#a859ff" label="Текст"/>
    </sim-window-body>
    <sim-window-footer>
      <sim-btn @click="createTranslationModal = false">Отмена</sim-btn>
      <sim-spacer/>
      <sim-btn color="#5927b9" dark @click="createTranslation">Добавить</sim-btn>
    </sim-window-footer>
    <div class="modal-close" @click="createTranslationModal = false">&#9711;</div>
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
import CreateTranslationModal from '@/mixins/modals/createTranslationModal.js';

export default {
  components: { SimBtn, SimWindow, SimWindowHeader, SimWindowBody, SimWindowFooter, SimTextField, SimTextArea,
    SimSpacer },
  mixins: [CreateTranslationModal],
  data() {
    return {
      text: '',
      name: '',
    };
  },
  methods: {
    createTranslation() {
      let originalSentences = this.text.match( /[^.!?]+[.!?]+["']?|\s*$/g );
      const uuid = () => ([1e7]+-1e3+-4e3+-8e3+-1e11)
              .replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));
      this.$store.commit('addTranslation', {
        key: uuid(),
        value: {
          name: this.name,
          originalSentences: originalSentences,
          translatedSentences: [],
        }
      });
      this.createTranslationModal = false;
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
  .modal-close:hover {
    color: rgba(0, 0, 0, 1);
    text-shadow: 0 0 4px rgba(60, 100, 255, 0.2);
    transform: scale(1.2);
  }
  .modal-close:active {
    color: rgba(0, 0, 0, 1);
    text-shadow: 0 0 2px rgba(60, 100, 255, 0.2);
    transform: scale(1.1);
  }
</style>
