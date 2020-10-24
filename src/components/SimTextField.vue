<template>
  <div class="sim-text-field">
    <div class="sim-text-field__wrap" :class="{focus: focus}">
      <input :id="uuid"
             class="sim-text-field__input" type="text"
             @input="$emit('update:modelValue', $event.target.value)"
             @focusIn="focus = true"
             @focusOut="focus = false"
      >
      <label :for="uuid" class="sim-text-field__label"
             :class="{focus: labelFocus}"
             :style="{color: labelColor}"
      >
        {{ label }}
      </label>
      <div class="sim-text-field__underline"></div>
      <div class="sim-text-field__underline_focus" :style="{background: color}"></div>
    </div>
  </div>
</template>

<script>
  import Uuid from '@/mixins/uuid';
  export default {
    props: {
      modelValue: String,
      color:      String,
      label:      String,
    },
    mixins: [Uuid],
    data() {
      return {
        uuid: null,
        focus: false,
      };
    },
    computed: {
      labelFocus() {
        return (this.focus || this.modelValue);
      },
      labelColor() {
        return this.labelFocus ? this.color : '';
      }
    }
  }
</script>

<style>
  .sim-text-field {
    padding-top: 8px;
    height: 50px;
    flex-basis: 50px;
  }
  .sim-text-field__wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: 0;
    background: transparent;
    transition: all .2s;
  }
  .sim-text-field__underline {
    position: absolute;
    bottom: 0;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background: #605c79;
  }
  .dark .sim-text-field__underline {
    background: #908ca9;
  }
  .sim-text-field__underline_focus {
    position: absolute;
    bottom: 0;
    display: block;
    content: '';
    width: 0;
    height: 2px;
    background: #5116dd;
    transition: all .3s;
  }
  .sim-text-field__wrap.focus .sim-text-field__underline_focus {
    width: 100%;
  }
  .sim-text-field__input {
    width: 100%;
    height: 40px;
    padding: 0;
    outline: none;
    border: none;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.87);
    background: transparent;
  }
  .dark .sim-text-field__input {
    color: rgba(255, 255, 255, 0.87);
  }
  .sim-text-field__label {
    position: absolute;
    left: 0;
    top: 11px;
    transition: all .2s;
    color: #aaa;
    cursor: text;
  }
  .dark .sim-text-field__label {
    color: #706595;
  }
  .sim-text-field__label.focus {
    top: -8px;
    left: 0;
    font-size: 12px;
    cursor: default;
  }
</style>
