<template>
  <i class="lni"
     :class="{'lni-is-spinning': spin}"
     :style="{color: color, 'font-size': size}"
  />
</template>

<script>
  export default {
    props: {
      spin: Boolean,
      size: String,
      color: String,
    },
  }
</script>
