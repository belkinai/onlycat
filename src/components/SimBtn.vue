<template>
  <button class="sim-btn"
          :class="{
            'sim-btn_block': block,
            'sim-btn_lg': lg,
          }"
  >
    <slot/>
  </button>
</template>

<script>
  export default {
    props: {
      block: Boolean,
      lg: Boolean,
    },
  }
</script>

<style>
  .sim-btn {
    display: flex;
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
  .sim-btn:hover {
    background: #b4b8bc;
  }
  .sim-btn:active {
    background: #9ca0a3;
  }
  .sim-btn_block {
    width: 100%;
  }
  .sim-btn_lg {
    height: 48px;
    border-radius: 4px;
  }
</style>
