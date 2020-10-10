<template>
  <button class="sim-btn"
          :class="{
            'sim-btn_block': block,
            'sim-btn_lg': lg,
            'sim-btn_dark': dark,
          }"
          :style="{background: color}"
  >
    <slot/>
  </button>
</template>

<script>
  export default {
    props: {
      dark:  Boolean,
      block: Boolean,
      lg:    Boolean,
      color: String,
    },
  }
</script>

<style>
  .sim-btn {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    height: 40px;
    border-radius: 4px;
    border: none;
    outline: none;
    background: #e0e4ea;
    text-transform: uppercase;
    transition: all .1s linear;
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
  .sim-btn_block {
    width: 100%;
  }
  .sim-btn_lg {
    height: 48px;
    border-radius: 4px;
  }
  .sim-btn_dark {
    color: rgba(255, 255, 255, 0.92);
  }
</style>
