<template>
  <div class="sim-row">
    <slot/>
  </div>
</template>

<style>
  .sim-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 -10px;
  }
</style>
