<template>
  <div class="sim-select" @click="showDropdown = !showDropdown">
    <div class="sim-select__wrap" :class="{focus: showDropdown}">
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
      <div v-if="showDropdown" class="sim-select__dropdown">
        <div v-for="item in items"
             :key="item[itemValue]"
             class="sim-select__item"
             @click.stop="select($event, item[itemValue])"
        >
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
    emits: ['update:modelValue'],
    mixins: [Uuid],
    data () {
      return {
        uuid: null,
        showDropdown: false,
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
      select (event, value) {
        this.$emit('update:modelValue', value);
        this.showDropdown = false;
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
    cursor: pointer;
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
    color: rgba(0, 0, 0, 0.93);
    background: transparent;
  }
  .dark .sim-select__selection {
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
    top: 100%;
    width: 100%;
    max-height: 144px;
    padding: 12px 0;
    overflow-y: scroll;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.27);
    z-index: 10;
  }
  .dark .sim-select__dropdown {
    background: #272a3b;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.47);
  }
  .sim-select__item {
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
  }
  .dark .sim-select__item {
    color: #ddf;
  }
  .sim-select__item:before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    background: rgba(0, 0, 0, 0);
    transition: all .15s;
  }
  .sim-select__item:hover:before {
    background: rgba(0, 0, 0, 0.1);
  }
  .dark .sim-select__item:hover:before {
    background: rgba(255, 255, 255, 0.1);
  }
  .sim-select__item:active:before {
    background: rgba(0, 0, 0, 0.2);
  }
  .dark .sim-select__item:active:before {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
