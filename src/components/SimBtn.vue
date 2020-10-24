<template>
  <button class="sim-btn"
          :class="{
            'sim-btn_block': block,
            'sim-btn_icon': icon,
            'sim-btn_lg': lg,
            'sim-btn_dark': dark,
          }"
          :style="{background: color}"
          :disabled="loading || disabled"
  >
    <span :style="{opacity: loading ? 0 : 1}">
      <slot/>
    </span>
    <div v-if="loading" class="sim-btn__loading">
      <sim-icon :class="'lni-spiner-solid'" size="16px" spin/>
    </div>
  </button>
</template>

<script>
  import SimIcon from '@/components/SimIcon.vue';
  export default {
    props: {
      dark:     Boolean,
      block:    Boolean,
      icon:     Boolean,
      loading:  Boolean,
      disabled: Boolean,
      lg:       Boolean,
      color:    String,
    },
    components: {SimIcon},
  }
</script>

<style>
  .sim-btn {
    display: flex;
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 2px 24px 0;
    border-radius: 4px;
    border: none;
    outline: none;
    background: #e0e4ea;
    text-transform: uppercase;
    transition: all .1s linear;
  }
  .dark .sim-btn {
    background: #5a548a;
    color: #ddf;
  }
  .sim-btn:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(0, 0, 0, 0);
    transition: all .15s;
  }
  .sim-btn:hover:before {
    background: rgba(0, 0, 0, 0.1);
  }
  .sim-btn:active:before {
    background: rgba(0, 0, 0, 0.2);
  }
  .sim-btn:disabled:before {
    background: rgba(0, 0, 0, 0.3);
  }
  .sim-btn_block {
    width: 100%;
  }
  .sim-btn_icon {
    padding: 2px 0 0;
    width: 40px;
    border-radius: 50%;
  }
  .sim-btn_lg {
    height: 48px;
    border-radius: 4px;
  }
  .sim-btn_dark {
    color: #ddf;
  }
  .sim-btn > .lni, .sim-btn > span > .lni {
    margin: -2px 12px 0 0;
  }
  .sim-btn_icon > .lni, .sim-btn_icon > span > .lni {
    margin: -2px 0 0;
  }
  .sim-btn__loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all .15s;
  }
</style>
