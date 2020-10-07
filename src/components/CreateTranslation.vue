<template>
  <sim-window>
    <div class="create-translation__header">
      Добавить текст для перевода
    </div>
    <div class="modal-close" @click="$store.state.createTranslationModal = false">⃝</div>
  </sim-window>>
</template>

<script>
import SimWindow from '@/components/SimWindow.vue';
export default {
  components: {SimWindow},
  data() {
    return {
      translation: {},
    };
  },
}
</script>

<style>
.create-translation__header {
  height: 80px;
  padding: 0 40px;
  line-height: 80px;
  font-size: 22px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.92);
  background: linear-gradient(-5deg, #311a99 20%, #4a39bb 100%);
}
.modal-close {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  transition: all .2s;
}
.modal-close:hover {
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
  transform: scale(1.2);
}
</style>
