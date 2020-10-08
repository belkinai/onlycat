<template>
  <transition name="fade" @after-enter="showContent = true">
    <div v-if="modelValue" class="sim-modal"
         @click.self="showContent = false"
         @closs="$emit('update:modelValue', false)"
    >
      <transition name="fade2" @after-leave="$emit('closs')">
        <slot v-if="showContent"/>
      </transition>
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
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.87);
}
</style>
