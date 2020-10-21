<template>
  <div class="sim-container">
    <slot/>
  </div>
</template>

<style>
  .sim-container {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 1px;
    height: 100%;
    padding: 32px;
  }
</style>
