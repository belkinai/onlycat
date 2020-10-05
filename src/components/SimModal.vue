<template>
  <div v-if="modelValue" class="sim-modal" @click.self="$emit('update:modelValue', false)">
    <div v-if="modelValue">
      <slot/>
    </div>
  </div>
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
    background: rgba(0, 0, 0, 0.5);
  }
</style>
