<template>
  <transition name="modal">
    <div v-if="modelValue" class="sim-modal" @click.self="close">
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
    modal:      Boolean,
  },
  methods: {
    close () {
      if (!this.modal) {
        this.$emit('update:modelValue', false);
      }
    },
  }
}
</script>

<style>
.sim-modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 80px;
  background: rgba(0, 0, 0, 0.37);
  z-index: 8;
}
</style>
