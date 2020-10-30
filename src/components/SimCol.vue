<template>
  <div class="sim-col"
       :class="'sim-col_' + cols"
  >
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      cols: Number
    },
  }
</script>

<style>
  .sim-col {
    flex-basis: 100%;
    max-width: 100%;
    padding: 10px;
  }
  .sim-col_12 {
    flex-basis: 100%;
    max-width: 100%;
  }
  .sim-col_11 {
    flex-basis: 91.67%;
    max-width: 91.67%;
  }
  .sim-col_10 {
    flex-basis: 83.33%;
    max-width: 83.33%;
  }
  .sim-col_9 {
    flex-basis: 75%;
    max-width: 75%;
  }
  .sim-col_8 {
    flex-basis: 66.67%;
    max-width: 66.67%;
  }
  .sim-col_7 {
    flex-basis: 58.33%;
    max-width: 58.33%;
  }
  .sim-col_6 {
    flex-basis: 50%;
    max-width: 50%;
  }
  .sim-col_5 {
    flex-basis: 41.67%;
    max-width: 41.67%;
  }
  .sim-col_4 {
    flex-basis: 33.33%;
    max-width: 33.33%;
  }
  .sim-col_3 {
    flex-basis: 25%;
    max-width: 25%;
  }
  .sim-col_2 {
    flex-basis: 16.67%;
    max-width: 16.67%;
  }
  .sim-col_1 {
    flex-basis: 8.33%;
    max-width: 8.33%;
  }
</style>
