<template>
  <transition name="fade">
    <div v-if="modelValue" class="sim-modal" @click.self="$emit('update:modelValue', false)">
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
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
  background: rgba(0, 0, 0, 0.5);
}
</style>
