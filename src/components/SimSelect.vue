<template>
  <div class="sim-select">
    <div class="sim-select__wrap" :class="{focus: focus}">
      <span v-if="selection"
            class="sim-select__selection"
      >
        {{ selection }}
      </span>
      <span class="sim-select__label"
             :class="{focus: labelFocus}"
             :style="{color: labelColor}"
      >
        {{ label }}
      </span>
      <div class="sim-select__underline"></div>
      <div class="sim-select__underline_focus" :style="{background: color}"></div>
      <div class="sim-select__dropdown">
        <div v-for="item in items" :key="item[itemValue]" class="sim-select__item">
          {{ item[itemText] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Uuid from '@/mixins/uuid';
  export default {
    props: {
      modelValue: [String, Number, Boolean, Object, Array],
      items:      Array,
      itemValue:  String,
      itemText:   String,
      color:      String,
      label:      String,
    },
    mixins: [Uuid],
    data () {
      return {
        uuid: null,
      };
    },
    computed: {
      selection () {
        let selection = null;
        this.items.forEach(item => {
          if (Object.prototype.hasOwnProperty.call(item, this.itemValue) && item[this.itemValue] === this.modelValue) {
            selection = item[this.itemText];
          }
        });
        return selection;
      },
      labelFocus () {
        return this.modelValue;
      },
      labelColor () {
        return this.labelFocus ? this.color : '';
      }
    },
    methods: {
      select (event) {
        this.$emit('update:modelValue', event.target.value)
      },
    },
  }
</script>

<style>
  .sim-select {
    padding-top: 8px;
    height: 50px;
    flex-basis: 50px;
    margin: 20px 0;
  }
  .sim-select__wrap {
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
  .sim-select__underline {
    position: absolute;
    bottom: 0;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background: #605c79;
  }
  .dark .sim-select__underline {
    background: #908ca9;
  }
  .sim-select__underline_focus {
    position: absolute;
    bottom: 0;
    display: block;
    content: '';
    width: 0;
    height: 2px;
    background: #5116dd;
    transition: all .3s;
  }
  .sim-select__wrap.focus .sim-select__underline_focus {
    width: 100%;
  }
  .sim-select__selection {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0;
    outline: none;
    border: none;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.87);
    background: transparent;
  }
  .dark .sim-select__input {
    color: rgba(255, 255, 255, 0.87);
  }
  .sim-select__label {
    position: absolute;
    left: 0;
    top: 11px;
    transition: all .2s;
    color: #aaa;
    cursor: text;
  }
  .dark .sim-select__label {
    color: #706595;
  }
  .sim-select__label.focus {
    top: -8px;
    left: 0;
    font-size: 12px;
    cursor: default;
  }
  .sim-select__dropdown {
    position: absolute;
    top: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.27);
  }
</style>
