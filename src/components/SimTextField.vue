<template>
  <div class="sim-text-field">
    <div class="sim-text-field__wrap" :class="{focus: focus}">
      <input class="sim-text-field__input" type="text"
             @input="$emit('update:modelValue', $event.target.value)"
             @focusIn="focus = true"
             @focusOut="focus = false"
      >
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String,
    },
    data() {
      return {
        focus: false,
      };
    },
  }
</script>

<style>
  .sim-text-field__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.5);
    transition: all .1s;
  }
  .sim-text-field__wrap.focus {
    border: 1px solid #4a39bb;
  }
  .sim-text-field__input {
    width: 100%;
    outline: none;
    border: none;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.87);
    background: transparent;
  }
</style>
