<template>
  <transition name="fade">
  <div v-if="modelValue" class="sim-modal" @click.self="$emit('update:modelValue', false)">
    <transition name="fade2">
    <div v-if="modelValue">
      <slot/>
    </div>
    </transition>
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
  .fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scaleY(0);
}
  .fade2-enter-active, .fade2-leave-active {
  transition: all 1.5s;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
}
</style>
