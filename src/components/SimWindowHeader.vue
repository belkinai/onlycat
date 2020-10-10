<template>
  <div class="sim-window__header">
    <slot/>
  </div>
</template>

<style>
  .sim-window__header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 80px;
    /*line-height: 80px;*/
    font-size: 24px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.92);
  }
</style>
