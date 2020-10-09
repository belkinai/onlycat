<template>
  <sim-window>
    <sim-window-header>
      Добавить текст для перевода
    </sim-window-header>
    <sim-window-body>
      <sim-text-field v-model="name"/>
    </sim-window-body>
    <sim-window-footer>
      <sim-btn lg>Добавить</sim-btn>
    </sim-window-footer>
  </sim-window>
</template>

<script>
import SimBtn from '@/components/SimBtn.vue';
import SimWindow from '@/components/SimWindow.vue';
import SimWindowHeader from '@/components/SimWindowHeader.vue';
import SimWindowBody from '@/components/SimWindowBody.vue';
import SimWindowFooter from '@/components/SimWindowFooter.vue';
import SimTextField from '@/components/SimTextField.vue';
import CreateTranslationModal from '@/mixins/modals/createTranslationModal.js';

export default {
  components: { SimBtn, SimWindow, SimWindowHeader, SimWindowBody, SimWindowFooter, SimTextField },
  mixins: [CreateTranslationModal],
  data() {
    return {
      translation: {},
      name: '',
    };
  },
}
</script>

<style>
</style>
