<template>
  <i class="lni"
     :class="{'lni-is-spinning': spin}"
     :style="{color: color, 'font-size': size, 'text-shadow': glow ? '0 0 6px ' + color : 'none'}"
  />
</template>

<script>
  export default {
    props: {
      spin: Boolean,
      glow: Boolean,
      size: String,
      color: String,
    },
  }
</script>

<style>
  .lni {
    transition: all 0.08s ease-in-out;
  }
</style>
