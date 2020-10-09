<template>
  <transition name="fade" @after-enter="showContent = true">
    <div v-if="modelValue" class="sim-modal" @click.self="showContent = false">
      <transition name="fade-scale" @after-leave="close">
        <slot v-if="showContent"/>
      </transition>
      <div class="modal-close" @click="showContent = false">&#9711;</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    close () {
      this.$emit('update:modelValue', false);
    },
  }
}
</script>

<style>
.sim-modal {
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 80px;
  background: rgba(235, 235, 235, 0.57);
  /*background: rgba(0, 0, 0, 0.87);*/
  backdrop-filter: blur(32px);
}
.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.72);
  cursor: pointer;
  transition: all .2s;
}
.modal-close:hover {
  color: rgba(0, 0, 0, 1);
  text-shadow: 0 0 4px rgba(60, 100, 255, 0.8);
  transform: scale(1.2);
}
.modal-close:active {
  color: rgba(0, 0, 0, 1);
  text-shadow: 0 0 2px rgba(60, 100, 255, 0.7);
  transform: scale(1.1);
}
</style>
