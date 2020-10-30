<template>
  <div class="sim-window" @click.stop :style="{width: width}">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    width: String,
  },
}
</script>

<style>
  .sim-window {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    padding: 20px 80px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
  .dark .sim-window {
    background: #272a3b;
    color: #ddf
  }
</style>
