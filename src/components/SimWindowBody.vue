<template>
  <div class="sim-window__body">
    <slot/>
  </div>
</template>

<style>
  .sim-window__body {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 1;
    padding: 20px 0;
  }
</style>
